import { ReportPreview } from './report-renderer.js';
import { buildConfirmedSummary } from './report-summary.js';
import { reportCopy } from './report-confirmed-copy.js';
import { samples } from './sample-data.js';

const root = document.getElementById('app');
const page = new ReportPreview(root);
let noticeTimer;
function notice(text) {
  const element = document.getElementById('notice');
  element.textContent = text;
  element.hidden = false;
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => { element.hidden = true; }, 5000);
}

// 独立Demo仅演示入口与返回；正式项目应接回现有每日训练模块。
const dialog = document.createElement('dialog');
dialog.className = 'daily-training-preview';
dialog.setAttribute('aria-labelledby', 'daily-preview-title');
dialog.innerHTML = `<div class="daily-preview-inner">
  <button type="button" class="daily-preview-back btn-press">‹ 返回本报告</button>
  <p class="daily-preview-label">流程预览 · 未接入实际训练</p>
  <h2 id="daily-preview-title">今日训练</h2>
  <div class="daily-preview-body"><h3>每天按当天的安排练习</h3>
  <p>这里将展示系统安排的训练游戏、顺序和预计用时。</p>
  <p>您可以随时返回这份报告，继续查看刚才的位置。</p></div></div>`;
document.body.append(dialog);
dialog.querySelector('button').addEventListener('click', () => dialog.close());
window.previewDailyTraining = () => dialog.showModal();
window.App = { currentPage: page };
page.handleBack = () => window.parent.postMessage({ type: 'report-back' }, window.location.origin);
page.showDetailModal = () => notice('Demo使用示例分数，没有真实逐题记录；正式项目沿用现有测评详情弹窗。');

function renderReport(data, template) {
  page._cleanupReportSectionNavigation();
  clearTimeout(page._reportScrollUnlockTimer);
  page._reportScrollTargetId = null;
  root.innerHTML = template;
  const summary = buildConfirmedSummary(data.scores);
  const heading = page.$('.report-intro-heading');
  heading.querySelector('h2').textContent = summary.title;
  if (summary.subtitle) {
    const subtitle = document.createElement('p');
    subtitle.textContent = summary.subtitle;
    heading.append(subtitle);
  }
  // 总分、综合等级均消费传入数据，不在Demo重写综合计分算法。
  const total = data.totalScore;
  const score = page.$('.report-intro-score');
  score.className = `report-intro-score report-intro-score--${data.totalTone}`;
  score.querySelector('.assessment-report-score-ring-inner strong').innerHTML = `${total ?? '—'}<small>分</small>`;
  score.querySelector('.report-intro-grade').textContent = data.totalGrade;
  const ring = score.querySelector('.assessment-report-score-ring');
  ring.style.setProperty('--report-score-progress', `${(total ?? 0) * 0.75}%`);
  ring.style.setProperty('--report-score-mark-angle', `${225 + (total ?? 0) * 2.7}deg`);
  const copy = page.$('.report-intro-copy');
  if (summary.complete) {
    copy.innerHTML = `<div class="report-intro-summary">
      ${summary.strength ? `<p class="report-intro-point">${summary.strength}</p>` : ''}
      ${summary.consolidation ? `<p class="report-intro-point">${summary.consolidation}</p>` : ''}
      <p class="report-intro-summary-close">${summary.direction}</p></div>
      <aside class="report-intro-supplement" aria-label="训练方案补充说明">
      <p>${reportCopy.supplement}</p><button type="button" class="report-intro-training-link btn-press">先去看看我的训练 <span aria-hidden="true">↓</span></button></aside>`;
    copy.querySelector('button').addEventListener('click', () => page.scrollToReportSection('report-training'));
  } else copy.remove();
  page.$('.assessment-report-radar').innerHTML = page.renderRadarChart(data.scores);
  page.$('.assessment-report-ability-comparison').insertAdjacentHTML('beforeend', page.renderAbilityComparisonCards(data.scores, data.percentiles));
  page.$('#report-details').innerHTML = page.renderModuleCards(data.scores, null, data.percentiles);
  page.$('[data-life-practice-slot]').outerHTML = page.renderLifePracticeCollection(data.scores);
  page.$('.training-daily-instruction').textContent = reportCopy.daily;
  page.$('.training-review-reminder p').textContent = reportCopy.retest;
  page.$('.training-v2-health-note').innerHTML = `<strong>什么情况下需要进一步咨询？</strong><br>${reportCopy.consult}`;
  // 兼容尚未实现details[name]互斥行为的浏览器。
  page.$$('.life-practice-item').forEach(item => item.addEventListener('toggle', () => {
    if (item.open) page.$$('.life-practice-item').forEach(other => { if (other !== item) other.open = false; });
  }));
  page._bindReportSectionNavigation();
}

try {
  const response = await fetch('./report-template.html');
  if (!response.ok) throw new Error(`页面模板加载失败（${response.status}）`);
  const template = await response.text();
  window.renderReportPreview = (name = 'mixed') => {
    const selected = samples[name] ? name : 'mixed';
    document.getElementById('case').value = selected;
    renderReport(samples[selected], template);
  };
  document.getElementById('case').addEventListener('change', event => window.renderReportPreview(event.target.value));
  window.renderReportPreview(new URLSearchParams(location.search).get('case') || 'mixed');
  const section = location.hash.slice(1);
  if (['report-overview', 'report-abilities', 'report-details', 'report-training'].includes(section)) page.scrollToReportSection(section);
} catch (error) {
  root.textContent = `Demo加载失败：${error.message}。请按README启动本地HTTP服务，不要直接双击HTML文件。`;
  console.error(error);
}
