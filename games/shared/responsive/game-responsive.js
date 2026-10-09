/**
 * 游戏 iframe REM 自动缩放脚本
 *
 * 根据 iframe 实际尺寸与设计稿的比例，动态设置 html font-size，
 * 使得游戏内所有 rem 单位自动等比缩放。
 *
 * 设计稿基准：1280×800，1rem = 10px
 *
 * 用法：
 *   <script src="shared/game-responsive.js"></script>
 *
 * 自定义设计稿尺寸（可选，在引入本脚本前设置）：
 *   <script>window.__gameDesign = { width: 1920, height: 1080 };</script>
 */
;(function () {
  var design = window.__gameDesign || {};
  var DESIGN_W = design.width  || 1280;
  var DESIGN_H = design.height || 800;
  var BASE_FONT = 10;

  function update() {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    var scale = Math.min(w / DESIGN_W, h / DESIGN_H);
    document.documentElement.style.fontSize = (BASE_FONT * scale) + 'px';
    document.documentElement.setAttribute('data-scale', scale.toFixed(4));
  }

  // 首次执行
  update();

  // 监听 resize（防抖 100ms）
  var timer;
  window.addEventListener('resize', function () {
    clearTimeout(timer);
    timer = setTimeout(update, 100);
  });

  // 暴露手动触发接口
  window.__gameUpdateScale = update;

  // =================== 性能调试面板自动挂载（仅 showPerf 参数存在时） ===================
  // 统一入口：所有引入本脚本的游戏，仅当 URL 带 showPerf=true/1 时挂载 shared/perf-panel；
  // 其余情况（包括 dev 模式）一律不显示。从列表页进入时，宿主会把 showPerf 透传进 iframe。
  try {
    var params = new URLSearchParams(window.location.search);
    var showPerfParam = String(params.get('showPerf') || '').trim().toLowerCase();
    var urlShowPerf = showPerfParam === 'true' || showPerfParam === '1';

    if (urlShowPerf) {
      // 开发环境使用外部脚本自身 URL；构建后内联时使用构建插件注入的相对地址。
      var currentScript = document.currentScript;
      var selfSrc = (currentScript && currentScript.src) || '';
      var inlinePerfUrl = (currentScript && currentScript.getAttribute('data-perf-panel-url')) || '';
      if (selfSrc || inlinePerfUrl) {
        var perfUrl = inlinePerfUrl
          ? new URL(inlinePerfUrl, document.baseURI).href
          : new URL('../perf-panel/perf-panel.js', selfSrc).href;
        // 用运行时注入的 module script 加载：本脚本为经典脚本，直接写 import() 会被
        // 打包器改写为静态 import 而报错；注入的 module 脚本不经打包分析，最稳妥。
        var loader = document.createElement('script');
        loader.type = 'module';
        loader.textContent =
          'import(' + JSON.stringify(perfUrl) + ')' +
          '.then(function(m){m.autoMountPerfPanel();})' +
          '.catch(function(){});';
        (document.head || document.documentElement).appendChild(loader);
      }
    }
  } catch (e) { /* 忽略：性能面板不应影响游戏运行 */ }
})();

