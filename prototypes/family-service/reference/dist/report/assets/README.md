# 报告元素资源

- `cognitive-expert-tip.png`：小贴士专家图片，1254×1254像素。五张分项卡共用同一资源；实际显示尺寸由CSS控制。
- `icons/scene-*.svg`：生活场景图标，共7个。
- `icons/practice-*.svg`：五项生活练习图标，共5个。

SVG从当前Demo内联图标中导出，保留32×32 viewBox、透明背景和currentColor描边，方便研发单独复用。Demo继续以内联SVG渲染，颜色、背景和尺寸由CSS控制。

雷达图、分数环、等级符号、折叠箭头和训练区图标由 `report-renderer.js`、`report-template.html` 与CSS绘制，不需要额外位图。

未使用的旧生活人物插画、旧版截图和脑年龄外链素材未纳入交付包。
