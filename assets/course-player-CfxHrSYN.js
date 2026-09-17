import{C as l,B as d}from"./assessment-hk5ZzQ2J.js";import"./modulepreload-polyfill-B5Qt9EMX.js";function r(s){return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}class u extends l{constructor(){super(),this.state={entry:null,quality:"compressed"}}onMount(e={}){this.state={entry:e.entry||null,quality:e.quality||"compressed"},this.update()}onUpdate(){var e;(e=this.$('[data-action="back"]'))==null||e.addEventListener("click",()=>{this._pauseMedia(),App.goBack()})}onUnmount(){this._pauseMedia()}_pauseMedia(){const e=this.$("video, audio");e&&e.pause()}render(){const e=this.state.entry;if(!e)return'<section class="sm-course-player" aria-label="课程播放器加载中" data-ai-hint="课程正在加载，请稍候。"></section>';const a=r(e.title),i=r(e.description),t=r(e.sources[this.state.quality]||""),o=this.state.quality==="original"?"原画质":"压缩画质",n=e.type==="audio"?`<div class="sm-course-player__audio-art" aria-hidden="true"><span>♪</span></div><audio controls autoplay preload="metadata" src="${t}"></audio>`:`<video controls autoplay playsinline preload="metadata" src="${t}"></video>`;return`
      <style>
        .sm-course-player {
          width: 100%;
          min-height: 100vh;
          color: #15243b;
          background: linear-gradient(180deg, #3199e9 0%, #75c0ef 100%);
          overflow-y: auto;
        }
        .sm-course-player__header {
          display: flex;
          align-items: center;
          gap: 1.6rem;
          min-height: 8.8rem;
          padding: 1.2rem 3.2rem;
          box-sizing: border-box;
        }
        .sm-course-player__header h1 { color: #fff; font-size: 2.8rem; font-weight: 700; line-height: 1.3; }
        .sm-course-player__body {
          width: min(108rem, calc(100% - 6.4rem));
          margin: 0 auto 3.2rem;
          padding: 2.4rem;
          border: .25rem solid rgba(255,255,255,.9);
          border-radius: 2.4rem;
          background: #fff6ee;
          box-shadow: 0 .8rem 0 rgba(35,99,148,.18);
          box-sizing: border-box;
        }
        .sm-course-player video {
          display: block;
          width: 100%;
          max-height: 62vh;
          border-radius: 1.6rem;
          background: #0f172a;
        }
        .sm-course-player audio { display: block; width: min(72rem, 100%); margin: 2.4rem auto 1rem; }
        .sm-course-player__audio-art {
          display: grid;
          place-items: center;
          width: min(34rem, 60vw);
          aspect-ratio: 1;
          margin: 1rem auto;
          border-radius: 3.2rem;
          color: #fff;
          background: #35b982;
          box-shadow: 0 1rem 2.4rem rgba(31,125,91,.25);
        }
        .sm-course-player__audio-art span { font-size: 15rem; line-height: 1; }
        .sm-course-player__info { display: flex; align-items: flex-start; justify-content: space-between; gap: 2rem; margin-top: 2rem; }
        .sm-course-player__desc { color: #53647c; font-size: 2rem; line-height: 1.6; }
        .sm-course-player__quality { flex: 0 0 auto; padding: .8rem 1.6rem; border-radius: 999px; color: #17623f; background: #d9f5e8; font-size: 1.7rem; font-weight: 700; }
        @media (max-width: 720px) {
          .sm-course-player__header { min-height: 6.4rem; padding: .8rem 1.8rem; }
          .sm-course-player__header h1 { font-size: 2rem; }
          .sm-course-player__body { width: calc(100% - 3.6rem); padding: 1.6rem; }
          .sm-course-player__info { flex-direction: column-reverse; }
          .sm-course-player__desc { font-size: 1.7rem; }
        }
      </style>
      <section
        class="sm-course-player"
        aria-label="正在播放${a}"
        data-ai-hint="当前正在老年课堂播放${e.type==="audio"?"音频":"视频"}课程：${a}。可使用媒体控件暂停、继续或调整进度，也可点击返回按钮回到课程列表。"
      >
        <header class="sm-course-player__header">
          <button class="sm-nav-back" data-action="back" aria-label="返回课程列表" data-ai-hint="停止播放并返回老年课堂列表">${d}</button>
          <h1>${a}</h1>
        </header>
        <main class="sm-course-player__body">
          ${n}
          <div class="sm-course-player__info">
            <p class="sm-course-player__desc">${i}</p>
            <span class="sm-course-player__quality">${o}</span>
          </div>
        </main>
      </section>
    `}}export{u as CoursePlayerPage};
