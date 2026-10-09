import { reportCopy } from './report-confirmed-copy.js';

// 综合分仍由原报告处理；此处只按五项分数生成整体结果文案。
export function normalizeDimensionScore(value) {
  if (value == null || value === '') return null;
  const score = Number(value);
  return Number.isFinite(score) && score >= 0 && score <= 100 ? score : null;
}

export function getConfirmedBand(value) {
  const score = normalizeDimensionScore(value);
  return score == null ? null : score >= 85 ? 'high' : score >= 60 ? 'medium' : 'low';
}

export function sortReportDimensions(dimensions) {
  const order = reportCopy.abilities.map(item => item.key);
  return dimensions.slice().sort((a, b) =>
    (b.score ?? -Infinity) - (a.score ?? -Infinity) || order.indexOf(a.key) - order.indexOf(b.key));
}

const joinNames = items => items.length < 2 ? items[0]?.label || ''
  : `${items.slice(0, -1).map(item => item.label).join('、')}和${items.at(-1).label}`;
const explain = (items, field) => items.map(item =>
  `${items.length > 1 ? item.label + '方面，' : ''}${item[field]}`).join('');

export function buildConfirmedSummary(scores) {
  const items = reportCopy.abilities.map(item => ({ ...item, score: normalizeDimensionScore(scores[item.key]) }))
    .filter(item => item.score != null);
  const result = { complete: items.length === 5, title: '', subtitle: '', strength: '', consolidation: '', direction: '', strengthKeys: [], focusKeys: [] };
  if (!result.complete) {
    result.title = items.length ? '先看看您已有的测评结果' : '测评结果暂未完整呈现';
    result.subtitle = items.length
      ? `目前已有${items.length}项能力结果，您可以先查看下方解读。待结果完整后，再了解五项能力的整体表现。`
      : '目前还没有可供解读的能力结果，暂时无法生成整体总结。';
    return result;
  }
  const high = items.filter(item => item.score >= 85);
  const medium = items.filter(item => item.score >= 60 && item.score < 85);
  const low = items.filter(item => item.score < 60);
  const sameScore = items.every(item => item.score === items[0].score);
  if (high.length === 5) result.title = '这次测评，您的五项能力都表现出色';
  else if (medium.length === 5) result.title = '这次测评，您的五项能力都表现良好';
  else if (low.length === 5) result.title = '这次测评，您的五项能力都需要多加关注';
  else if (!low.length) {
    result.title = '这次测评，您的五项能力都表现不错';
    result.subtitle = `${joinNames(high)}表现出色，其他${['零', '一', '二', '三', '四'][medium.length]}项能力表现良好。`;
  } else {
    result.title = high.length ? '这次测评，您有表现出色的能力，也有需要关注的方面' : '这次测评，您的部分能力需要多加关注';
    result.subtitle = [high.length && `${joinNames(high)}表现出色`, medium.length && `${joinNames(medium)}表现良好`, `${joinNames(low)}需要关注`].filter(Boolean).join('；') + '。';
  }
  if (high.length === 5) {
    result.strength = '<strong>您在不同事情上都展现出了不错的能力。</strong> 看清信息、分辨细节、寻找目标，以及记住内容、安排步骤时，您的表现都比较出色。';
    result.direction = '后续练习，可以继续保持各项优势，让不同能力都得到锻炼。';
    return result;
  }
  if (high.length) {
    const highest = Math.max(...high.map(item => item.score));
    const selected = high.filter(item => item.score === highest);
    result.strengthKeys = selected.map(item => item.key);
    result.strength = `<strong>${joinNames(selected)}是您这次的优势。</strong> ${explain(selected, 'strength')}`;
  }
  if (sameScore) {
    result.consolidation = medium.length === 5
      ? '<strong>您的五项能力表现比较接近。</strong> 可以结合下面的生活场景，看看哪些事情做起来顺手，哪些情况还需要多一点时间。'
      : '<strong>这次需要关注五项能力的整体表现。</strong> 您可以结合下面的分项解读和生活场景，逐一了解哪些事情可能需要多一点时间，哪些情况与自己平时的感受相符。';
    result.direction = medium.length === 5
      ? '后续练习，可以兼顾五项能力，逐步养成规律练习的习惯。'
      : '后续练习，可以从容易完成的内容开始，按自己的节奏逐步练习。';
    return result;
  }
  const lowest = Math.min(...items.map(item => item.score));
  const selected = items.filter(item => item.score === lowest);
  result.focusKeys = selected.map(item => item.key);
  if (lowest >= 60) {
    result.consolidation = `<strong>${joinNames(selected)}表现良好，还可以进一步巩固。</strong> 相比其他能力，${selected.length === 1 ? '这项' : '这几项'}得分低一些，但仍在良好范围内。${explain(selected, 'medium')}`;
    result.direction = `后续练习，可以在保持各项能力的同时，多巩固${joinNames(selected)}。`;
  } else {
    result.consolidation = `<strong>${joinNames(selected)}是这次需要多留意的方面。</strong> ${explain(selected, 'low')}`;
    result.direction = `后续练习，可以从容易完成的内容开始，兼顾各项能力，并多关注${joinNames(selected)}。`;
  }
  return result;
}
