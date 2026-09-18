import{C as P,R as T,a3 as R,a4 as y,a5 as k,a6 as I,a7 as A,a8 as $,a9 as L,Q as _,a1 as M,B as D,a2 as B,aa as G,a0 as O}from"./assessment-mJmy6gOP.js";import{C as x}from"./character-ai-iframe-BrqXIuNV.js";import{B as z,D as j,a as h,g as Y,b as F,c as H,d as N,o as V,e as U,f as q,h as K,i as W}from"./daily-plan-service-BrmnaNfE.js";import{G as X}from"./game-launch-focus-BFofEx2r.js";import{D as b}from"./overview-B3MGWg2M.js";import{getLocalDateKey as Q}from"./state-store-Dvo1jwmm.js";import{c as Z}from"./training-report-store-DOHNp1ho.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./sop-manager-4mqRR8Su.js";import"./app-C8gTfAaU.js";import"./completion-store-DYswhfNf.js";import"./game-data-store-B4FloeTJ.js";const u=[{left:9,top:54},{left:46,top:48},{left:18,top:34},{left:52,top:25},{left:80,top:32},{left:108,top:20}],S=12.8,J=Object.fromEntries(B.map(p=>[p.key,p.label])),m={longAbsenceGreeting:"欢迎回来，今天我们慢慢开始吧。",longAbsencePlan:"今天为您安排了 6 项训练，按自己的节奏来。",postAssessment:"根据您的测评结果，今天为您准备了 6 项训练，帮助您有针对性地锻炼不同的脑能力。",partialAssessment:"今天为您准备了 6 项训练，结合您已完成的测评，为您安排适合的练习。",preAssessment:"今天为您准备了 6 项轻松训练，帮助锻炼记忆、观察、反应速度等维度的脑能力。",duration:"预计约 15 分钟，您可以按自己的节奏，慢慢跟着提示来。",longAbsenceSpeech:"欢迎回来，今天我们慢慢开始吧。今天为您安排了 6 项训练，按自己的节奏来。预计约 15 分钟，您可以按自己的节奏，慢慢跟着提示来。",postAssessmentSpeech:"根据您的测评结果，今天为您准备了 6 项训练，帮助您有针对性地锻炼不同的脑能力。预计约 15 分钟，您可以按自己的节奏，慢慢跟着提示来。",partialAssessmentSpeech:"今天为您准备了 6 项训练，结合您已完成的测评，为您安排适合的练习。预计约 15 分钟，您可以按自己的节奏，慢慢跟着提示来。",preAssessmentSpeech:"今天为您准备了 6 项轻松训练，帮助锻炼记忆、观察、反应速度等维度的脑能力。预计约 15 分钟，您可以按自己的节奏，慢慢跟着提示来。"};function v(p){return String(p||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(p){return v(p).replace(/`/g,"&#96;")}function ee(){return O().filter(W)}const te=`<svg viewBox="0 0 24 24" fill="none" class="dr-node-done-icon">
  <path d="M5 13l4 4L19 7" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;class ge extends P{constructor(e={}){var t;super(),this._backTarget=e.backTarget||null,this._games=[],this._plan=null,this._loading=!0,this._visited=new Set,this._launchFocus=new X,this._isReturningFromGame=((t=window.App)==null?void 0:t.previousPage)==="game-iframe",this._shellMotionPlayed=this._isReturningFromGame,this._mapMotionPending=!1,this._handRevealReady=!1,this._overviewContext=e.overviewContext||null,this._showFinishedTaskPopup=e.dailyRecommendReturn==="finished"}onMount(e={}){this._overviewContext=e.overviewContext||null,this._showFinishedTaskPopup=e.dailyRecommendReturn==="finished",this._bindEvents(),this._shellMotionPlayed=!0,this._initPlan()}onUpdate(){this._bindEvents(),this._hydrateIcons(),this._mapMotionPending&&this.setTimeout(()=>{this._mapMotionPending=!1,this._handRevealReady=!0;const e=this.$("[data-daily-recommend]");e==null||e.classList.remove("dr-map--entering"),e==null||e.classList.add("dr-map--stable","dr-map--hand-revealed")},1050)}onUnmount(){this._launchFocus.cancel(),x.cancelResumeAfterTask(),x.hideEmbedded()}_bindEvents(){const e=this.$('[data-action="back"]');e&&e.addEventListener("click",()=>{if(this._visited.size<this._games.length&&z.requestExperienceGuide(),this._backTarget){App.navigate(this._backTarget);return}App.goBack()});const t=this.$('[data-action="open-calendar"]');t&&t.addEventListener("click",()=>App.navigate("training-calendar"));const i=this.$('[data-action="open-assessment"]');i&&i.addEventListener("click",()=>App.navigate("assessment-home")),this.$$("[data-node-game]").forEach(a=>{a.addEventListener("click",()=>this._enterGame(a,a.getAttribute("data-node-game")))})}async _initPlan(){const e=await j.loadToday();this._plan=e.plan,this._games=e.games,this._visited=e.completed,this.mounted&&(this._loading=!1,this._mapMotionPending=!this._isReturningFromGame,this.update(),this._showFinishedTaskPopup?this._showNextTaskOrCompletePopup():this._isReturningFromGame||this._showOverviewIfNeeded())}async _showOverviewIfNeeded(){var c,g;const e=T.capabilities.developerTools,t=await b.shouldShowLongAbsence();if(!this.mounted)return;const i=this._overviewContext==="assessment-report",a=await b.hasShown("postAssessment"),s=t?"longAbsence":i||((c=this._plan)==null?void 0:c.state)===h.COMPLETE&&!a?"postAssessment":"preAssessment";if(!e&&await b.hasShown(s))return;const n=s==="longAbsence";let r=m.preAssessment,d=m.preAssessmentSpeech;n?(r=[m.longAbsenceGreeting,m.longAbsencePlan].join('</span><span style="display:block;font-weight:700;color:#1d293d;">'),d=m.longAbsenceSpeech):s==="postAssessment"?(r=m.postAssessment,d=m.postAssessmentSpeech):((g=this._plan)==null?void 0:g.state)===h.PARTIAL&&(r=m.partialAssessment,d=m.partialAssessmentSpeech);const o=`<span style="display:block;font-weight:700;color:#1d293d;">${r}</span>`,f=`<span style="display:block;margin-top:1.6rem;font-size:2.8rem;font-weight:500;color:#667085;">${m.duration}</span>`;R.show({title:"每日训练",content:`${o}${f}`,confirmText:"好的",voiceText:d,onConfirm:async()=>{e||(s==="longAbsence"?await b.markLongAbsenceShown(t):await b.markShown(s)),this._showNextTaskOrCompletePopup()}})}_showNextTaskOrCompletePopup(){const e=this._games.findIndex(a=>!this._visited.has(a.game)),t=(a,s="")=>{const n=_(a.icon)?`<img class="ri-icon-img ri-icon-img--large" src="${l(a.icon)}" alt="${l(a.title)}">`:`<span class="tc-daily-task-emoji" aria-hidden="true">${v(a.icon)}</span>`;return`<div class="tc-continue-task-icon ${s} ri-icon ri-icon--large">${n}</div>`};if(e>=0){const a=this._games[e],s=this._games[e-1];y({overlayClass:"tc-daily-task-overlay",modalClass:"tc-daily-task-modal",iconHtml:`<div class="tc-continue-icon-stage tc-daily-task-icon-stage${s?" has-next-task-icon":""}" aria-hidden="true">
          ${t(s||a,"tc-current-task-icon")}
          ${s?t(a,"tc-next-task-icon"):""}
        </div>`,messageHtml:`<p>接下来我们要进行第 ${e+1} 项训练任务，准备好了吗？</p>`,voiceText:I(e),stageHtml:`<div class="tc-module-stage"><div class="tc-task-progress" aria-label="每日训练任务进度">${k(this._games,e)}</div></div>`,primaryText:"开始训练",afterMount:n=>A(n,e),onPrimary:()=>{var r;const n=(r=this.container)==null?void 0:r.querySelector(`[data-node-game="${a.game}"]`);this._enterGame(n,a.game)}});return}const i=this._games[this._games.length-1];i&&y({overlayClass:"tc-daily-task-overlay",modalClass:"tc-daily-task-modal",iconHtml:`<div class="tc-continue-icon-stage tc-daily-task-icon-stage" aria-hidden="true">${t(i,"tc-current-task-icon")}</div>`,messageHtml:`<p>${$}</p>`,voiceText:$,stageHtml:`<div class="tc-module-stage"><div class="tc-task-progress" aria-label="每日训练任务进度">${k(this._games,this._games.length)}</div></div>`,showPrimary:!1,afterMount:a=>A(a,this._games.length),onVoiceEnd:L})}async _enterGame(e,t){if(!t)return;const i=this.$("[data-daily-recommend]"),a=e==null?void 0:e.closest(".dr-station");if(!i||!a)return;const s=this._games.findIndex(o=>o.game===t),n=this._games[s],r=Q(),d=Z({planDate:r,planItemId:(n==null?void 0:n.planItemId)||`${s+1}:${t}`,gameSlug:t,planCount:this._games.length,title:n==null?void 0:n.title,icon:n==null?void 0:n.icon,dimension:n==null?void 0:n.dimension});await this._launchFocus.run({root:i,target:a,navigate:()=>App.navigate("game-iframe",{game:t,params:{dailyRecommend:"1",dailyRecommendIsLast:String(this._games.findIndex(o=>o.game===t)===this._games.length-1)},launchContext:"daily-recommend",trainingReportContext:d,onExit:o=>{var c;const f=(c=o==null?void 0:o.data)==null?void 0:c.dailyRecommendAction;App.goBack(f==="next"?{dailyRecommendReturn:"finished"}:{})}})})}_hydrateIcons(){this._games.forEach(e=>{if(!_(e.icon))return;const t=this.container.querySelector(`[data-station-game="${l(e.game)}"] .dr-node-icon-img`);t instanceof HTMLImageElement&&M(t,e.game,{alt:e.title})})}_getStationCenters(){return this._games.map((e,t)=>{const i=u[t]||u[u.length-1];return{x:(i.left+S/2)*10,y:(i.top+S/2)*10}})}_renderPathSvg(){const e=this._getStationCenters();return e.length<2?"":`
      <svg class="dr-path-svg" viewBox="0 0 1280 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="dr-path-line" pathLength="1" d="${e.map((i,a)=>`${a===0?"M":"L"}${i.x},${i.y}`).join(" ")}" stroke="rgba(255,255,255,0.55)" stroke-width="6" stroke-dasharray="0.012 0.012" stroke-linecap="round" fill="none"/>
      </svg>`}_renderStations(){let e=!1;return this._games.map((t,i)=>{const a=u[i]||u[u.length-1],s=this._visited.has(t.game),n=!s&&!e;n&&(e=!0);const r=!s&&!n,d=s||n,o=["module-icon","dr-node-icon",d?"module-icon-active":"module-icon-inactive",n?"module-icon-current":"",s?"dr-node-icon--done":""].filter(Boolean).join(" "),f=_(t.icon)?`<img class="dr-node-icon-img" src="${l(t.icon)}" alt="${l(t.title)}" />`:`<span class="dr-node-icon-emoji" aria-hidden="true">${v(t.icon)}</span>`,c=J[t.dimension]||"",g=t.role==="boost",w=c?`<span class="dr-node-dim${g?" dr-node-dim--boost":""}">${v(c)}${g?" · 重点":""}</span>`:"",C=s?`今日已完成的站点：${l(t.title)}，可以再玩一次`:`进入今日推荐站点：${l(t.title)}${c?`（训练${l(c)}${g?"，今日重点加强":""}）`:""}`,E=d?`data-node-game="${l(t.game)}" role="button" aria-label="进入${l(t.title)}" data-ai-hint="${C}"`:'aria-hidden="true"';return`
        <div class="module-icon-wrapper dr-station" style="left: ${a.left}rem; top: ${a.top}rem; --dr-station-index: ${i};" data-station-game="${l(t.game)}">
          <div
            class="${o}"
            ${E}
          >
            ${f}
            ${s?`<span class="dr-node-done-badge">${te}</span>`:""}
            ${n?'<div class="dr-node-hand" aria-hidden="true"><div class="module-hand-crop"></div></div>':""}
          </div>
          <span class="dr-node-label${r?" dr-node-label--locked":""}">${v(t.title)}</span>
          ${w}
        </div>`}).join("")}_renderLoadingBody(){return`
      <div class="dr-loading-hint" aria-live="polite">
        <span class="dr-loading-spinner" aria-hidden="true"></span>
        正在为您定制今日训练...
      </div>`}_renderMapBody(){var d;const e=this._games.length,t=this._games.filter(o=>this._visited.has(o.game)).length,i=((d=this._plan)==null?void 0:d.state)||h.COMPLETE,a=i===h.UNASSESSED,s=i===h.PARTIAL;return`
      <!-- 副标题 + 进度 -->
      <div class="dr-subtitle-row">
        <span class="dr-subtitle">${a?"先从六款健脑游戏开始探索，完成筛查后推荐会更精准":s?"根据已完成的测评结果定制，完成全部筛查后会更精准":"根据测评结果，定制个性化训练方案"}</span>
        <span class="dr-progress-pill">已完成 ${t}/${e}</span>
        ${a?'<button class="dr-assessment-btn" data-action="open-assessment">去完成认知筛查</button>':s?'<button class="dr-assessment-btn" data-action="open-assessment">继续完成筛查</button>':""}
      </div>

      <!-- 蜿蜒路径连线 -->
      ${this._renderPathSvg()}

      <!-- 游戏站点 -->
      ${this._renderStations()}`}render(){var a,s;const e=this._shellMotionPlayed?"dr-page--stable":"dr-page--entering",t=this._mapMotionPending?"dr-map--entering":"dr-map--stable",i=this._handRevealReady?"dr-map--hand-revealed":"";return`
      <style>
        /* =================== 页面专属样式（复用 page-bg-profile / module-* 全局样式） =================== */
        .dr-path-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 128rem;
          height: 80rem;
          pointer-events: none;
          z-index: 0;
        }

        .dr-page--entering .module-topbar {
          animation: drTopbarEnter 480ms 70ms both cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .dr-page--entering .module-title-row {
          animation: drTitleEnter 560ms 150ms both cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .dr-map--entering .dr-subtitle-row {
          animation: drSubtitleEnter 420ms 80ms both ease-out;
        }

        .dr-map--entering .dr-path-line {
          animation: drPathDraw 720ms 160ms both cubic-bezier(0.3, 0.7, 0.2, 1);
        }

        .dr-map--entering .dr-station {
          animation: drStationEnter 520ms calc(220ms + var(--dr-station-index) * 105ms) both cubic-bezier(0.18, 0.75, 0.24, 1);
        }

        .dr-map--entering .dr-node-hand {
          animation: none;
          opacity: 0;
        }

        .dr-map--hand-revealed .dr-node-hand {
          animation: drHandReveal 360ms ease-out both, drHandBounce 1.8s ease-in-out infinite;
        }

        /* 图标不裁切，让完成徽标（右下角）与手指指向可以露出图标边界 */
        .dr-node-icon {
          overflow: visible;
        }

        .dr-node-icon-img {
          width: 9.6rem;
          height: 9.6rem;
          border-radius: 2.4rem;
          object-fit: cover;
          pointer-events: none;
        }

        /* 待解锁站点：图标弱化，与 assessment-home 未解锁模块的视觉权重保持一致 */
        .module-icon-inactive .dr-node-icon-img,
        .module-icon-inactive .dr-node-icon-emoji {
          opacity: 0.6;
          filter: grayscale(0.4);
        }

        /* 已完成站点：低饱和琥珀金底（区别于绿色「待开始」与白灰「锁定」），图标不灰化。
           刻意压低饱和度让完成态安静退后，把视觉焦点留给绿色当前站（产品反馈：
           原 #ffb703/#e8960c 太抢眼，完成 5 个只剩 1 个时满屏金色显乱） */
        .dr-node-icon--done {
          background: #eec87e;
          border-bottom-color: #c9a055;
        }

        .dr-node-icon-emoji {
          font-size: 7.2rem;
          line-height: 1;
          pointer-events: none;
        }

        .dr-node-done-badge {
          position: absolute;
          right: -0.6rem;
          bottom: -0.6rem;
          width: 3.6rem;
          height: 3.6rem;
          border-radius: 50%;
          background: #00c853;
          border: 0.2rem solid #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.15);
        }

        .dr-node-done-icon {
          width: 2rem;
          height: 2rem;
        }

        /* 手指指向（复用筛查页 module-hand-crop 雪碧图，不带涟漪）：
           指尖落在图标右下象限，手掌向右下展开，偏移量兼顾不压住下方标签 */
        .dr-node-hand {
          position: absolute;
          left: 8.2rem;
          top: 6.8rem;
          width: 12.4rem;
          height: 13.9rem;
          z-index: 3;
          pointer-events: none;
          animation: drHandBounce 1.8s ease-in-out infinite;
        }

        @keyframes drHandBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-1rem); }
        }

        @keyframes drHandReveal {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes drTopbarEnter {
          from { opacity: 0; transform: translateY(-1.8rem); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes drTitleEnter {
          from { opacity: 0; transform: translateY(2rem); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes drSubtitleEnter {
          from { opacity: 0; transform: translateY(1.2rem); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes drPathDraw {
          from { stroke-dashoffset: 1; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes drStationEnter {
          from { opacity: 0; transform: translateY(2.4rem) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .dr-node-label {
          margin-top: 1.2rem;
          max-width: 15rem;
          font-size: 1.8rem;
          font-weight: 700;
          color: #fff;
          text-align: center;
          text-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.18);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .dr-node-label--locked {
          color: rgba(255, 255, 255, 0.6);
        }

        /* 站点维度小字；今日重点加强的浮动站点用暖金色突出 */
        .dr-node-dim {
          margin-top: 0.3rem;
          font-size: 1.4rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.75);
          text-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.15);
          white-space: nowrap;
        }

        .dr-node-dim--boost {
          color: #ffe08a;
          font-weight: 700;
        }

        .dr-subtitle-row {
          position: absolute;
          left: 7.3rem;
          right: 7.3rem;
          top: 17rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          z-index: 2;
        }

        .dr-subtitle {
          font-size: 2rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          text-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.12);
        }

        .dr-progress-pill {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.2);
          border: 0.1rem solid rgba(255, 255, 255, 0.3);
          border-radius: 999px;
          padding: 0.4rem 1.6rem;
          font-size: 1.6rem;
          font-weight: 700;
          color: #fff;
          white-space: nowrap;
        }

        .dr-loading-hint {
          position: absolute;
          left: 0;
          right: 0;
          top: 38rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.6rem;
          font-size: 2.4rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.15);
        }

        .dr-assessment-btn {
          border: 0.1rem solid rgba(255, 255, 255, 0.68);
          border-radius: 0.6rem;
          padding: 0.5rem 1.2rem;
          background: rgba(0, 101, 157, 0.42);
          color: #fff;
          font-size: 1.5rem;
          font-weight: 700;
          white-space: nowrap;
        }

        .dr-loading-spinner {
          width: 3.2rem;
          height: 3.2rem;
          border-radius: 50%;
          border: 0.4rem solid rgba(255, 255, 255, 0.35);
          border-top-color: #fff;
          animation: drSpin 0.9s linear infinite;
        }

        @keyframes drSpin {
          to { transform: rotate(360deg); }
        }

        .dr-page.is-game-launching .module-topbar,
        .dr-page.is-game-launching .module-title-row,
        .dr-page.is-game-launching .dr-subtitle-row,
        .dr-page.is-game-launching .dr-path-svg,
        .dr-page.is-game-launching .dr-station:not(.is-launch-target) {
          opacity: 0.42;
          transition: opacity 220ms ease;
          pointer-events: none;
        }

        .dr-page.is-game-launching .dr-station.is-launch-target {
          z-index: 5;
          transform: translateY(-0.8rem) scale(1.04);
          transition: transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .dr-page.is-game-launching .dr-station.is-launch-target .dr-node-icon {
          box-shadow: 0 1.6rem 2.8rem rgba(22, 73, 118, 0.24), 0 0 0 0.6rem rgba(255, 255, 255, 0.24);
          filter: brightness(1.08);
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .dr-page *,
          .dr-page *::before,
          .dr-page *::after {
            animation-duration: 0.01ms !important;
            animation-delay: 0ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      </style>

      <div
        class="page-bg-profile dr-page ${e} ${t} ${i} h-full relative overflow-hidden flex items-center justify-center"
        data-daily-recommend
        aria-label="每日训练 — 探索地图"
        data-ai-hint="这是每日训练探索地图。未测评时会提供覆盖四个维度的探索训练；部分测评时会根据已完成维度提供初步定制；完成完整筛查后会按能力画像加强相对薄弱的维度。带手指指向的站点是下一个要玩的，点击进入；金色带对勾的站点是今天已完成的，可以再次点击进入重玩；灰色站点按顺序解锁。玩满一局拿到成绩，站点才会点亮。"
      >
        <!-- 顶部工具栏：返回 + 训练日报入口 -->
        <div class="module-topbar">
          <button class="module-back-group" data-action="back" aria-label="返回上一页" data-ai-hint="返回上一个页面">
            <span class="sm-nav-back">
              ${D}
            </span>
            <span class="module-back-label">返回</span>
          </button>
          <button class="module-report-btn" data-action="open-calendar" aria-label="查看训练日报" data-ai-hint="查看训练日报，先浏览整月训练进展，再选择日期查看每日详情">训练日报</button>
        </div>

        <!-- 设计画布 (匹配 Figma 1280×800，与 assessment-home 保持一致) -->
        <div class="module-canvas">
          <!-- 标题行 -->
          <div class="module-title-row">
            <h1 class="module-page-title">${((a=this._plan)==null?void 0:a.state)===h.UNASSESSED?"今日探索训练":((s=this._plan)==null?void 0:s.state)===h.PARTIAL?"今日训练计划":"每日推荐 · 探索地图"}</h1>
          </div>

          ${this._loading?this._renderLoadingBody():this._renderMapBody()}
        </div>

      </div>
    `}}T.capabilities.developerTools&&(window.__dailyRecommend={generateDailyPlan:K,computeDayIndex:q,computeBoostCounts:U,orderStations:V,computeAbilityLevels:N,getLatestFullReport:H,getAbilityProfile:F,getMockLevels:Y,getRecommendPool:ee,debugShowTaskCard:G});export{ge as DailyRecommendPage};
