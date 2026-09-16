import{C as n,B as m}from"./assessment-DenQRj50.js";import"./modulepreload-polyfill-B5Qt9EMX.js";const s="https://cdn.keepwork.com/silvermind-app/videos/帆书课-小样";function l(r){const t=encodeURIComponent(r);return Object.freeze({compressed:`${s}/压缩画质/${t}`,original:`${s}/${t}`})}const u=Object.freeze([{key:"compressed",label:"压缩画质"},{key:"original",label:"原画质"}]),o=Object.freeze([{id:"mobile-photography-intro",fileName:"0-发刊词-准备好了吗-跟我一起用手机拍大片.mp4",title:"手机摄影课发刊词：跟我一起用手机拍大片",duration:"约 5 分 25 秒",type:"video",description:"手机摄影课程的开篇导读，从日常拍摄场景出发，介绍构图、光线和拍摄角度等基础方法。"},{id:"tang-poetry-intro",fileName:"0-唐诗发刊词改.mp4",title:"唐诗课发刊词：走近唐诗的世界",duration:"约 1 分 34 秒",type:"video",description:"唐诗主题课程的开篇介绍，引导学习者感受唐诗中的语言、情感和时代气象。"},{id:"stay-young",fileName:"1-如何比实际年龄更年轻(修改).mp4",title:"年轻状态管理课：如何比实际年龄更年轻",duration:"约 22 分 59 秒",type:"video",description:"围绕饮食、运动、睡眠、情绪和生活习惯，介绍保持年轻状态的日常管理方法。"},{id:"writing-basics",fileName:"1.准备工作-书写的工具和握笔姿势(修改).mp4",title:"书写入门课：工具选择与正确握笔姿势",duration:"约 19 分钟",type:"video",description:"介绍常用书写工具，并示范正确的坐姿、执笔位置和握笔方法。"},{id:"vocal-course-intro",fileName:"蒋大为声乐课发刊词-改.mp4",title:"蒋大为声乐课发刊词：打开科学歌唱的大门",duration:"约 4 分 10 秒",type:"video",description:"从呼吸、发声、吐字和情感表达等基础环节，介绍科学声乐训练的课程方向。"},{id:"daily-health",fileName:"1.mp3",title:"每天八分钟，健康一点通",duration:"约 5 分 35 秒",type:"audio",description:"用短音频轻松了解日常健康知识。"}].map(r=>Object.freeze({...r,sources:l(r.fileName)}))),c="sm_course_quality",p=`
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <rect x="8" y="12" width="48" height="40" rx="10" fill="#35b982"/>
    <path d="M27 23.5v17l15-8.5-15-8.5z" fill="#fff"/>
  </svg>`;function a(r){return String(r||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}class f extends n{constructor(){super();let t="compressed";try{t=sessionStorage.getItem(c)||t}catch{}this.state={quality:t}}onMount(){this._bindEvents()}onUpdate(){this._bindEvents()}_bindEvents(){var t;(t=this.$('[data-action="back"]'))==null||t.addEventListener("click",()=>App.goBack()),this.$$("[data-quality]").forEach(i=>{i.addEventListener("click",()=>{const e=i.getAttribute("data-quality");if(!(!e||e===this.state.quality)){try{sessionStorage.setItem(c,e)}catch{}this.setState({quality:e})}})}),this.$$("[data-media-id]").forEach(i=>{i.addEventListener("click",()=>{const e=o.find(d=>d.id===i.getAttribute("data-media-id"));e&&App.navigate("course-player",{entry:e,quality:this.state.quality})})})}render(){const t=u.map(e=>`
      <button
        class="sm-course-tab${e.key===this.state.quality?" is-active":""}"
        data-quality="${e.key}"
        aria-pressed="${e.key===this.state.quality}"
      >${e.label}</button>
    `).join(""),i=o.map(e=>`
      <button
        class="sm-course-card"
        data-media-id="${e.id}"
        aria-label="播放${a(e.title)}"
        data-ai-hint="播放课程：${a(e.title)}。${a(e.description)}"
      >
        <span class="sm-course-card__icon">${p}</span>
        <span class="sm-course-card__title">${a(e.title)}</span>
        <span class="sm-course-card__meta">${e.type==="audio"?"音频":"视频"} · ${e.duration}</span>
      </button>
    `).join("");return`
      <style>
        .sm-course-page {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          color: #15243b;
          background:
            radial-gradient(circle at 16% 18%, rgba(255,255,255,.32), transparent 26%),
            linear-gradient(180deg, #3099ea 0%, #76c2f2 72%, #9bdc8b 100%);
        }
        .sm-course-header {
          display: flex;
          align-items: center;
          gap: 1.6rem;
          height: 8.8rem;
          padding: 0 3.2rem;
        }
        .sm-course-title { color: #fff; font-size: 3rem; font-weight: 700; }
        .sm-course-tabs {
          display: flex;
          gap: 1.6rem;
          padding: .4rem 3.2rem 2rem;
        }
        .sm-course-tab {
          min-width: 16rem;
          padding: 1.2rem 2.4rem;
          border: 0;
          border-radius: 999px;
          color: #fff;
          background: rgba(255,255,255,.2);
          font-size: 2.2rem;
          font-weight: 700;
          cursor: pointer;
        }
        .sm-course-tab.is-active {
          color: #174878;
          background: #fff;
          box-shadow: 0 .4rem 0 rgba(20,91,151,.16);
        }
        .sm-course-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2.8rem 3.2rem;
          height: calc(100vh - 17.2rem);
          padding: 1rem 3.2rem 3.2rem;
          overflow-y: auto;
          box-sizing: border-box;
        }
        .sm-course-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 24rem;
          padding: 2.4rem;
          border: .25rem solid rgba(255,255,255,.9);
          border-radius: 2.8rem;
          color: #15243b;
          background: #ffecdc;
          box-shadow: 0 .7rem 0 rgba(36,101,151,.18);
          cursor: pointer;
        }
        .sm-course-card:focus-visible { outline: .5rem solid #ffe269; outline-offset: .4rem; }
        .sm-course-card__icon {
          display: block;
          width: 10rem;
          height: 10rem;
          margin-bottom: 1.6rem;
        }
        .sm-course-card__icon svg { width: 100%; height: 100%; filter: drop-shadow(0 .5rem .5rem rgba(35,94,73,.2)); }
        .sm-course-card__title {
          width: 100%;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.35;
          text-align: center;
        }
        .sm-course-card__meta { margin-top: 1rem; color: #6a7890; font-size: 1.7rem; }
        @media (max-width: 850px) {
          .sm-course-header { height: 6.4rem; padding: 0 1.8rem; }
          .sm-course-title { font-size: 2.4rem; }
          .sm-course-tabs { padding: .4rem 1.8rem 1.4rem; }
          .sm-course-tab { min-width: 12rem; padding: 1rem 1.6rem; font-size: 1.8rem; }
          .sm-course-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); height: calc(100vh - 13.2rem); padding: .8rem 1.8rem 2rem; gap: 2rem; }
          .sm-course-card { min-height: 20rem; border-radius: 2rem; padding: 1.8rem; }
          .sm-course-card__icon { width: 8rem; height: 8rem; }
          .sm-course-card__title { font-size: 2rem; }
        }
      </style>
      <section
        class="sm-course-page"
        aria-label="老年课堂媒体列表"
        data-ai-hint="当前页面是老年课堂。可在压缩画质和原画质之间切换，再点击课程卡片播放视频或音频。"
      >
        <header class="sm-course-header">
          <button class="sm-nav-back" data-action="back" aria-label="返回" data-ai-hint="返回上一个页面">${m}</button>
          <h1 class="sm-course-title">老年课堂</h1>
        </header>
        <nav class="sm-course-tabs" aria-label="媒体画质选择">${t}</nav>
        <main class="sm-course-grid">${i}</main>
      </section>
    `}}export{f as CourseCatalogPage};
