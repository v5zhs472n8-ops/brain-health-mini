// 从已确认Demo提取的报告渲染和导航；不依赖SilverMind登录、接口或构建工具。
import { teacherCardCopy } from './teacher-card-copy.js';
import { reportCopy } from './report-confirmed-copy.js';
import { getConfirmedBand, normalizeDimensionScore } from './report-summary.js';
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const DT = { primary: '#3599f6' };
const formatReportModuleScore = value => value == null ? '—' : String(value);
const getReportDetailBand = getConfirmedBand;
const hasAnyReportDimensionScore = scores => Object.values(scores).some(value => normalizeDimensionScore(value) != null);
function normalizeDisplayPercentile(value) {
  if (value == null || value === '' || !Number.isFinite(Number(value))) return null;
  return clamp(Number(Number(value).toFixed(1)), 0, 100);
}
const formatPercentileText = value => value == null ? '—' : String(normalizeDisplayPercentile(value));
function getAbilityOverviewStatus(score) {
  const band = getConfirmedBand(score);
  return band === 'high' ? {label:'优秀 · 值得保持',symbol:'★',tone:'strong'}
    : band === 'medium' ? {label:'良好',symbol:'◆',tone:'steady'}
    : band === 'low' ? {label:'重点关注',symbol:'◉',tone:'focus'}
    : {label:'待完成',symbol:'—',tone:'pending'};
}

const REPORT_DIMENSIONS = [
  {
    "key": "processing-speed",
    "label": "加工速度",
    "color": "#F59E0B"
  },
  {
    "key": "working-memory",
    "label": "工作记忆",
    "color": "#3B82F6"
  },
  {
    "key": "executive-function",
    "label": "执行功能",
    "color": "#EF4444"
  },
  {
    "key": "visual-discrimination",
    "label": "视觉分辨",
    "color": "#8B5CF6"
  },
  {
    "key": "visual-search",
    "label": "视觉搜索",
    "color": "#F97316"
  }
];
const RADAR_CHART_CONFIG = {
  width: 542,
  height: 412,
  center: { x: 270, y: 220 },
  peerAverageScore: 70,
  // Figma 节点 1551:2365（RadarChart）中 5 条能力轴的终点坐标
  axisEndpoints: {
    'processing-speed': { x: 270, y: 36.999969482421875 },
    'working-memory': { x: 448, y: 162.00009155273438 },
    'executive-function': { x: 379.5, y: 374.5 },
    'visual-discrimination': { x: 160, y: 374.5 },
    'visual-search': { x: 91, y: 162 },
  },
  gridLevels: [20, 40, 60, 80, 100],
  // Figma 节点 1551:2365（RadarChart）中刻度文本框的左上角坐标
  scaleLabels: [
    { value: 0, x: 271, y: 210 },
    { value: 20, x: 298, y: 205 },
    { value: 40, x: 333, y: 195 },
    { value: 60, x: 368, y: 187 },
    { value: 80, x: 403, y: 175 },
    { value: 100, x: 438, y: 167 },
  ],
  // Figma 节点 1551:2365（RadarChart）中 5 个能力说明文本框的左上角坐标
  labelPositions: {
    'processing-speed': { x: 227, y: 0 },
    'working-memory': { x: 460, y: 141 },
    'executive-function': { x: 342, y: 386 },
    'visual-discrimination': { x: 95, y: 386 },
    'visual-search': { x: 0, y: 162 },
  },
};
export class ReportPreview {
  constructor(container) { this.container = container; }
  $(selector) { return this.container.querySelector(selector); }
  $$(selector) { return this.container.querySelectorAll(selector); }
  setTimeout(callback, ms) { return window.setTimeout(callback, ms); }
  clearTimer(timer) { window.clearTimeout(timer); }
  scrollToReportSection(sectionId) {
    const scrollContainer = this.$('.assessment-report-page');
    const target = this.container?.querySelector(`#${sectionId}`);
    if (!scrollContainer || !target) return;

    this._reportScrollTargetId = sectionId;
    this._setActiveReportSection(sectionId);

    if (this._reportScrollUnlockTimer) {
      this.clearTimer(this._reportScrollUnlockTimer);
    }
    this._reportScrollUnlockTimer = this.setTimeout(() => {
      this._reportScrollTargetId = null;
      this._reportScrollUnlockTimer = null;
      this._syncActiveReportSection();
    }, 1200);

    const targetTop = scrollContainer.scrollTop
      + target.getBoundingClientRect().top
      - this._getReportSectionAnchorTop();
    const maxScrollTop = Math.max(0, scrollContainer.scrollHeight - scrollContainer.clientHeight);
    scrollContainer.scrollTo({
      top: clamp(targetTop, 0, maxScrollTop),
      behavior: 'instant',
    });
  }

  _getReportSectionAnchorTop() {
    const scrollContainer = this.$('.assessment-report-page');
    const nav = this.$('.assessment-report-section-nav');
    if (!scrollContainer || !nav) return 0;

    const navStyles = window.getComputedStyle(nav);
    const stickyTop = Number.parseFloat(navStyles.top) || 0;
    const navPaddingBottom = Number.parseFloat(navStyles.paddingBottom) || 0;
    return scrollContainer.getBoundingClientRect().top
      + stickyTop
      + nav.offsetHeight
      + navPaddingBottom;
  }

  _setActiveReportSection(sectionId) {
    this.$$('.assessment-report-section-nav-item').forEach((item) => {
      const isActive = item.dataset.reportSection === sectionId;
      item.classList.toggle('is-active', isActive);
      if (isActive) {
        item.setAttribute('aria-current', 'page');
      } else {
        item.removeAttribute('aria-current');
      }
    });
  }

  _syncActiveReportSection() {
    const sections = Array.from(this.$$('[data-report-section-content]'));
    if (!sections.length) return;

    const scrollContainer = this.$('.assessment-report-page');
    const anchorTop = this._getReportSectionAnchorTop();
    const reachedBottom = scrollContainer
      && scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 2;
    if (this._reportScrollTargetId) {
      const target = sections.find(section => section.id === this._reportScrollTargetId);
      const reachedTarget = target && Math.abs(target.getBoundingClientRect().top - anchorTop) <= 2;
      if (!reachedTarget && !reachedBottom) {
        this._setActiveReportSection(this._reportScrollTargetId);
        return;
      }
      this._reportScrollTargetId = null;
    }

    if (reachedBottom) {
      this._setActiveReportSection(sections[sections.length - 1].id);
      return;
    }

    let activeSection = sections[0];
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= anchorTop + 1) {
        activeSection = section;
      }
    });
    this._setActiveReportSection(activeSection.id);
  }

  _bindReportSectionNavigation() {
    this._cleanupReportSectionNavigation();

    const scrollContainer = this.$('.assessment-report-page');
    if (!scrollContainer) return;

    this._reportScrollContainer = scrollContainer;
    this._reportScrollHandler = () => {
      if (this._reportScrollFrame != null) return;
      this._reportScrollFrame = requestAnimationFrame(() => {
        this._reportScrollFrame = null;
        this._syncActiveReportSection();
      });
    };
    this._reportScrollInterruptHandler = () => {
      this._reportScrollTargetId = null;
    };
    scrollContainer.addEventListener('scroll', this._reportScrollHandler, { passive: true });
    scrollContainer.addEventListener('wheel', this._reportScrollInterruptHandler, { passive: true });
    scrollContainer.addEventListener('touchstart', this._reportScrollInterruptHandler, { passive: true });
    this._syncActiveReportSection();
  }

  _cleanupReportSectionNavigation() {
    if (this._reportScrollFrame != null) {
      cancelAnimationFrame(this._reportScrollFrame);
      this._reportScrollFrame = null;
    }
    if (this._reportScrollContainer && this._reportScrollHandler) {
      this._reportScrollContainer.removeEventListener('scroll', this._reportScrollHandler);
    }
    if (this._reportScrollContainer && this._reportScrollInterruptHandler) {
      this._reportScrollContainer.removeEventListener('wheel', this._reportScrollInterruptHandler);
      this._reportScrollContainer.removeEventListener('touchstart', this._reportScrollInterruptHandler);
    }
    this._reportScrollContainer = null;
    this._reportScrollHandler = null;
    this._reportScrollInterruptHandler = null;
  }

  renderRadarChart(dimScores) {
    const {
      width,
      height,
      center,
      axisEndpoints,
      gridLevels,
      peerAverageScore,
      scaleLabels: scaleLabelPositions,
      labelPositions,
    } = RADAR_CHART_CONFIG;
    const dims = REPORT_DIMENSIONS;
    const n = dims.length;
    const cx = center.x;
    const cy = center.y;
    const axes = dims.map(dim => axisEndpoints[dim.key]);

    // ==================== 设计稿对齐：沿 Figma 能力轴插值，中心为 0，最外圈为 100 ====================
    const scoreToRatio = (score) => {
      const numericScore = Number(score);
      const clamped = Number.isFinite(numericScore) ? Math.max(0, Math.min(100, numericScore)) : 0;
      return clamped / 100;
    };
    const pointAt = (i, ratio) => {
      const axis = axes[i];
      return [
        cx + (axis.x - cx) * ratio,
        cy + (axis.y - cy) * ratio,
      ];
    };

    // 背景网格（同心五边形）
    let gridLines = '';
    for (const level of gridLevels) {
      const pts = [];
      const ratio = level / 100;
      for (let i = 0; i < n; i++) pts.push(pointAt(i, ratio).join(','));
      gridLines += `<polygon points="${pts.join(' ')}" fill="none" stroke="#D5DEE8" stroke-width="1.2" />`;
    }

    // 轴线（从中心到外圈）
    let axisLines = '';
    for (let i = 0; i < n; i++) {
      const [ex, ey] = pointAt(i, 1);
      axisLines += `<line x1="${cx}" y1="${cy}" x2="${ex}" y2="${ey}" stroke="#D5DEE8" stroke-width="1.2" />`;
    }

    // 同龄人均值多边形
    const peerAveragePoints = [];
    for (let i = 0; i < n; i++) {
      peerAveragePoints.push(pointAt(i, scoreToRatio(peerAverageScore)));
    }
    const peerAveragePolygon = `<polygon points="${peerAveragePoints.map(p => p.join(',')).join(' ')}" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="8 7" stroke-linejoin="round" />`;

    // 数据多边形
    let dataPolygon = '';
    let dataCircles = '';
    if (hasAnyReportDimensionScore(dimScores)) {
      const dataPoints = [];
      for (let i = 0; i < n; i++) {
        const score = dimScores[dims[i].key];
        const ratio = scoreToRatio(score);
        dataPoints.push(score != null && Number.isFinite(Number(score)) ? pointAt(i, ratio) : null);
      }
      dataPolygon = dataPoints.every(Boolean) ? `<polygon points="${dataPoints.map(p => p.join(',')).join(' ')}" fill="rgba(53, 153, 246, 0.2)" stroke="${DT.primary}" stroke-width="3" stroke-linejoin="round" />` : '';

      for (const [px, py] of dataPoints.filter(Boolean)) {
        dataCircles += `<circle cx="${px}" cy="${py}" r="6" fill="${DT.primary}" stroke="#FFFFFF" stroke-width="3" />`;
      }
    }

    // 标签使用 Figma 设计稿文本框坐标，按原稿位置还原
    let labels = '';
    for (let i = 0; i < n; i++) {
      const layout = labelPositions[dims[i].key];
      labels += `<text x="${layout.x}" y="${layout.y}" text-anchor="start" dominant-baseline="text-before-edge" font-size="21.677" fill="#475569" font-weight="400">${dims[i].label}</text>`;
    }

    // 刻度数字使用设计稿中的固定排版，保持和示意图一致
    let scaleLabelsSvg = '';
    for (const item of scaleLabelPositions) {
      scaleLabelsSvg += `<text x="${item.x}" y="${item.y}" font-size="14" fill="#475569" text-anchor="start" dominant-baseline="text-before-edge">${item.value}</text>`;
    }

    return `
      <svg viewBox="-12 -12 ${width + 24} ${height + 24}" class="assessment-report-radar-svg" role="img" aria-label="五项认知能力雷达图，蓝色为本次得分，金色虚线为参考均值70分；各项分数详见旁边的结果列表。">
        ${gridLines}
        ${axisLines}
        ${scaleLabelsSvg}
        ${peerAveragePolygon}
        ${dataPolygon}
        ${dataCircles}
        ${labels}
      </svg>
    `;
  }

  renderAbilityComparisonCards(dimScores) {
    return REPORT_DIMENSIONS
      .map(dim => ({ ...dim, score: normalizeDimensionScore(dimScores?.[dim.key]) }))
      .sort((a, b) => (b.score ?? -Infinity) - (a.score ?? -Infinity) || reportCopy.abilities.findIndex(item => item.key === a.key) - reportCopy.abilities.findIndex(item => item.key === b.key))
      .map(dim => {
        const status = getAbilityOverviewStatus(dim.score);
        const label = {strong:'优秀', steady:'良好', focus:'重点关注', pending:'待完成'}[status.tone];
        return `<article class="ability-overview-block ability-overview-block--${status.tone}">
          <strong class="ability-overview-name">${dim.label}</strong>
          <span class="ability-overview-value"><b>${formatReportModuleScore(dim.score)}</b><small>分</small></span>
          <span class="ability-overview-grade">${label}</span>
        </article>`;
      }).join('');
  }

  renderLifePracticeCollection(dimScores) {
    const practiceIcons = {
      'processing-speed': '<circle cx="16" cy="17" r="11"/><path d="M16 10v7l5 3M12 2h8M16 2v4"/>',
      'visual-discrimination': '<rect x="3" y="7" width="11" height="18" rx="2"/><rect x="18" y="7" width="11" height="18" rx="2"/><path d="M6 13h5M21 13h5M6 19h5"/><circle cx="23.5" cy="19" r="1"/>',
      'visual-search': '<circle cx="13" cy="13" r="8"/><path d="m19 19 9 9M10 13h6M13 10v6"/>',
      'executive-function': '<path d="M12 7h16M12 16h16M12 25h16M3 6l2 2 4-4M3 15l2 2 4-4M3 24l2 2 4-4"/>',
      'working-memory': '<path d="M6 10h20l2 18H4l2-18ZM11 11V8a5 5 0 0 1 10 0v3m-10 9 3 3 6-7"/>',
    };
    const dimensions = REPORT_DIMENSIONS
      .map((dim, index) => ({ ...dim, index, score: normalizeDimensionScore(dimScores?.[dim.key]) }))
      .filter(dim => teacherCardCopy[dim.key]?.steps)
      .sort((a, b) => (b.score ?? -Infinity) - (a.score ?? -Infinity) || reportCopy.abilities.findIndex(item => item.key === a.key) - reportCopy.abilities.findIndex(item => item.key === b.key));

    return `
      <section class="life-practice-collection" aria-labelledby="life-practice-title">
        <header>
          <h3 id="life-practice-title">生活里，也可以这样练</h3>
          <p>${reportCopy.life}</p>
        </header>
        <div class="life-practice-accordion">
          ${dimensions.map(dim => {
            const copy = teacherCardCopy[dim.key];
            return `<details class="life-practice-item" name="report-life-practice" data-life-practice="${dim.key}">
              <summary><span class="life-practice-icon"><svg viewBox="0 0 32 32" aria-hidden="true">${practiceIcons[dim.key]}</svg></span><span class="life-practice-entry-main"><span class="life-practice-entry-title">${copy.practiceTitle}</span><span class="life-practice-ability">${dim.label}</span></span><span class="life-practice-toggle"><span class="life-practice-show">展开</span><span class="life-practice-hide">收起</span><i aria-hidden="true">⌄</i></span></summary>
              <div class="life-practice-instructions">
              <ol>${copy.steps.map(([title, text], index) => `<li><span>${index + 1}</span><div><h5>${title}</h5><p>${text}</p></div></li>`).join('')}</ol>
              </div>
            </details>`;
          }).join('')}
        </div>
      </section>
    `;
  }

  renderModuleCards(dimScores, overriddenDims = null, dimensionPercentiles = {}) {
    const dimensions = REPORT_DIMENSIONS
      .map((dim, index) => ({ ...dim, index, score: normalizeDimensionScore(dimScores?.[dim.key]) }))
      .sort((a, b) => (b.score ?? -Infinity) - (a.score ?? -Infinity) || reportCopy.abilities.findIndex(item => item.key === a.key) - reportCopy.abilities.findIndex(item => item.key === b.key));
    const cards = dimensions
      .map((dim) => {
        const band = getReportDetailBand(dim.score);
        const teacherCopy = teacherCardCopy[dim.key];
        const cardStatus = {
          high: { label: '表现出色 · 本次闪光优势' },
          medium: { label: '表现良好 · 继续练习' },
          low: { label: '多练一练 · 重点关注' },
        }[band];
        const overviewStatus = getAbilityOverviewStatus(dim.score);
        const cardStatusTone = dim.score == null ? 'pending' : overviewStatus.tone;
        const cardStatusHtml = dim.score == null ? '待完成' : `<span class="report-status-icon" aria-hidden="true">${overviewStatus.symbol}</span>${cardStatus.label}`;
        const coloredHeading = `<header class="wm-report-heading wm-color-heading">
          <div class="wm-color-score" aria-label="${dim.label}${dim.score == null ? '暂无分数' : formatReportModuleScore(dim.score) + '分'}">
            <svg viewBox="0 0 100 100" aria-hidden="true"><circle class="wm-color-track" cx="50" cy="50" r="43"/><circle class="wm-color-progress" cx="50" cy="50" r="43" pathLength="100" stroke-dasharray="${clamp(dim.score ?? 0, 0, 100)} 100"/></svg>
            <div><strong>${dim.score == null ? '—' : formatReportModuleScore(dim.score)}</strong><span>分</span></div>
          </div>
          <h3>${dim.label}</h3><b class="wm-color-status report-card-status report-card-status--${cardStatusTone}">${cardStatusHtml}</b>
        </header>`;
        if (teacherCopy) {
          const hasResult = dim.score != null;
          const isProcessingSpeed = dim.key === 'processing-speed';
          const percentile = normalizeDisplayPercentile(dimensionPercentiles[dim.key]);
          const processingComparison = `<div class="ability-classic processing-inline-comparison">
            <div class="processing-labeled-bars">
              <div class="processing-bar-row"><span>我的得分</span><div class="processing-bar-track"><span class="assessment-report-ability-bar assessment-report-ability-bar--score" style="--report-ability-width:${hasResult ? clamp(dim.score, 0, 100) : 0}%"></span></div><strong>${hasResult ? formatReportModuleScore(dim.score) : '—'}<small>分</small></strong></div>
              <div class="processing-bar-row"><span>参考均值</span><div class="processing-bar-track"><span class="assessment-report-ability-bar assessment-report-ability-bar--peer" style="--report-ability-width:70%"></span></div><strong>70<small>分</small></strong></div>
            </div>
            <div class="assessment-report-ability-comparison-meta processing-percentile"><strong>${hasResult && percentile != null ? `超过 <b>${formatPercentileText(percentile)}<small>%</small></b> 的同龄人` : '暂无同龄比较'}</strong></div>
          </div>`;
          return `<article${dim.key === 'working-memory' ? ' id="working-memory-layout"' : ''} class="wm-report-card wm-color-card memory-layout-sample processing-layout-review" data-teacher-card="${dim.key}" style="--ability-accent:${dim.color}">
            ${coloredHeading}
            ${processingComparison}
            <section class="memory-performance processing-result-panel">
              <p>${hasResult ? teacherCopy.results[band] : '本次尚未形成这项能力的结果，完成相关测评后再查看解读。'}</p>
              ${hasResult ? `<h4 class="processing-life-heading">生活中，您会在这些地方用到${dim.label}</h4>
              ${isProcessingSpeed ? `<ol class="processing-life-examples">
                <li><div class="processing-scene-label"><span class="processing-example-number" aria-hidden="true">1</span><h5>买东西时</h5></div><div class="processing-scene-description"><p>看清商品有多少毫升、多少斤，比较价格，再决定买哪件，这个过程就用到了加工速度。它影响您<strong>从看清信息到作出决定需要多长时间。</strong></p></div></li>
                <li><div class="processing-scene-label"><span class="processing-example-number" aria-hidden="true">2</span><h5>使用家电时</h5></div><div class="processing-scene-description"><p>看到电饭煲的屏幕提示，判断下一步按哪个按钮，再完成操作，这个过程也用到了加工速度。它影响您<strong>能否及时跟上操作提示。</strong></p></div></li>
              </ol>` : `<ol class="processing-life-examples">${teacherCopy.lifeUses.map(([title, text], index) => `<li><div class="processing-scene-label"><span class="processing-example-number" aria-hidden="true">${index + 1}</span><h5>${title}</h5></div><div class="processing-scene-description"><p>${text}</p></div></li>`).join('')}</ol>`}
              ` : ''}
            </section>
            ${teacherCopy.tip ? `<aside class="expert-life-tip"><img src="./assets/cognitive-expert-tip.png" alt="认知健康专家"/><div><span class="expert-tip-label">小贴士</span><h4>${teacherCopy.tipTitle || '我们为什么要训练加工速度？'}</h4>${isProcessingSpeed ? `<p>研究表明，加工速度是影响认知老化的关键因素。</p><p>加工速度指大脑处理信息的速度和效率。它帮助您快速看清信息、分辨内容、作出判断并及时回应，是完成许多日常认知活动的基础能力。</p><p>同时它还与老年人的行动能力、驾驶安全、主观健康状况和情绪状态有关。因此，加工速度不仅影响“做得快不快”，也会影响老年人在日常生活中的独立性、自信心和生活质量。</p>` : teacherCopy.tip.map((text, index) => `<p>${text}</p>${index === 0 ? `<p>${teacherCopy.definition}</p>` : ''}`).join('')}</div></aside>` : ''}
          </article>`;
        }
        return '';
      })
      .join('');

    return `
      <div class="report-detail-v2-intro"><h2>各项能力解读</h2></div>
      ${cards}
    `;
  }

}
