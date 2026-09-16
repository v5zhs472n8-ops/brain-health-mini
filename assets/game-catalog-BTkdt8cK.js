import{a0 as G,C as z,Q as k,a1 as R,a2 as P,B as $,g as _,b as v,P as M}from"./assessment-DenQRj50.js";import{C as u}from"./character-ai-iframe-BpemK4np.js";import{S as L}from"./sop-manager-DBsvwz6-.js";import{G as O}from"./game-launch-focus-BFofEx2r.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./app-DLvXa5dK.js";import"./state-store-BDNRjphJ.js";const y=Object.freeze(G()),A="sm_game_list_scroll",x="sm_game_catalog_tab";let T=!1;const I=`<svg class="sm-gc-card__dh-badge" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="12" fill="#7C3AED"/>
  <path d="M12 6C9.79 6 8 7.79 8 10c0 1.48.81 2.77 2 3.46V14.5c0 .28.22.5.5.5h3c.28 0 .5-.22.5-.5v-1.04c1.19-.69 2-1.98 2-3.46 0-2.21-1.79-4-4-4z" fill="#fff"/>
  <path d="M10.5 16h3v1.5h-3z" fill="#fff"/>
  <circle cx="10.5" cy="9.5" r="0.8" fill="#7C3AED"/>
  <circle cx="13.5" cy="9.5" r="0.8" fill="#7C3AED"/>
</svg>`,H=Object.freeze({all:_(v.tabAll),"processing-speed":_(v.tabProcessingSpeed),"working-memory":_(v.tabWorkingMemory),"executive-function":_(v.tabExecutiveFunction),"visual-perception":_(v.tabVisualPerception),"digital-human":_(v.tabDigitalHuman)});function S(s){return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function p(s){return S(s).replace(/`/g,"&#96;")}function q(s,e,t){const a=s.type==="digital-human",i=t.has(s.game);return`
    <button
      class="sm-gc-card"
      data-game="${p(s.game)}"
      style="--sm-gc-card-index: ${Math.min(e,16)}"
      ${i?"":"hidden"}
      ${a?'data-game-type="digital-human"':""}
      aria-label="${p(s.title)}"
      data-ai-hint="${p(s.aiHint||s.description)}"
      title="${p(s.description)}"
    >
      <span class="sm-gc-card__icon-wrapper">
        ${k(s.icon)?`<img class="sm-gc-card__icon" src="${p(s.icon)}" alt="${p(s.title)}">`:`<span class="sm-gc-card__icon sm-gc-card__icon--emoji" aria-label="${p(s.title)}">${S(s.icon)}</span>`}
        ${a?I:""}
      </span>
      <span class="sm-gc-card__title">${S(s.title)}</span>
    </button>
  `}function B(){var s,e;try{const i=[...((e=(s=M).loadFromLocal)==null?void 0:e.call(s))||[]].sort((r,n)=>{const m=Number((r==null?void 0:r.savedAt)??(r==null?void 0:r.calculatedAt))||0;return(Number((n==null?void 0:n.savedAt)??(n==null?void 0:n.calculatedAt))||0)-m}).find(r=>Number.isFinite(Number(r==null?void 0:r.compositeTScore))),o=Number(i==null?void 0:i.compositeTScore);return Number.isFinite(o)?Math.max(40,Math.min(100,Math.round(o))):null}catch(t){return console.warn("[GameCatalogPage] 读取加工速度测评分数失败，小游戏将使用默认起始难度。",t),null}}function F(s){if(s!=="pigeon-peck")return{};const e=B();return e==null?{}:{assessmentScore:e}}function E(s,e){return s==="all"?e:s==="digital-human"?e.filter(t=>t.type==="digital-human"):e.filter(t=>t.type!=="digital-human"&&Array.isArray(t.categories)&&t.categories.includes(s))}class J extends z{constructor(){super(),this._launchFocus=new O,this._tabTransitionToken=0,this._shouldPlayEntrance=!T}onMount(){this._shouldPlayEntrance&&(T=!0,this._saveActiveTab("all"),this.setTimeout(()=>this._completeEntranceMotion(),1650));const e=this.container.querySelector('[data-action="back"]');e&&e.addEventListener("click",()=>App.goBack()),this._initCategoryTabs(),this.container.querySelectorAll("[data-game]").forEach(a=>{a.addEventListener("click",()=>{const i=a.getAttribute("data-game");i&&this._launchGame(a,i)})}),this.hydrateCatalogIcons(),this._initResponsiveCards(),this._initScrollbarAutoHide(),this._tryResumeVoiceChat(),this._showCharacterAiWhenReady(),this._restoreScrollPosition()}onUnmount(){this._launchFocus.cancel(),this._tabTransitionToken+=1,this._cardResizeObserver&&(this._cardResizeObserver.disconnect(),this._cardResizeObserver=null),this._scrollbarGrid&&this._onGridScroll&&this._scrollbarGrid.removeEventListener("scroll",this._onGridScroll),this._scrollbarResizeObserver&&(this._scrollbarResizeObserver.disconnect(),this._scrollbarResizeObserver=null),this._scrollbarHideTimer&&(clearTimeout(this._scrollbarHideTimer),this._scrollbarHideTimer=null),this._scrollbarGrid=null,this._onGridScroll=null,u.cancelResumeAfterTask(),u.hideEmbedded()}_initResponsiveCards(){const e=this.container.querySelector(".sm-gc-grid");!e||!e.parentElement||(this._updateCardSize(),typeof ResizeObserver<"u"&&(this._cardResizeObserver=new ResizeObserver(()=>this._updateCardSize()),this._cardResizeObserver.observe(e.parentElement)))}_updateCardSize(){const e=this.container.querySelector(".sm-gc-grid");if(!e)return;const t=parseFloat(getComputedStyle(document.documentElement).fontSize)||10,a=26.6*t,i=268/266,o=3.2*t,r=2.4*t,n=4.8*t,m=a*.82,c=a*1.18,d=getComputedStyle(e),l=parseFloat(d.paddingLeft)+parseFloat(d.paddingRight),g=e.clientWidth-l;if(g<=0)return;const h=Math.max(1,Math.round((g+o)/(a+o)));let b,f;if(h===1)f=o,b=Math.min(c,Math.max(m,g));else{const w=(g-h*a)/(h-1);w>=r&&w<=n?(f=w,b=a):(f=Math.min(n,Math.max(r,w)),b=(g-(h-1)*f)/h,b=Math.min(c,Math.max(m,b)))}b=Math.floor(b),f=Math.round(f);const C=Math.round(b*i);e.style.setProperty("--sm-gc-card-w",`${b}px`),e.style.setProperty("--sm-gc-card-h",`${C}px`),e.style.setProperty("--sm-gc-gap",`${f}px`)}_initScrollbarAutoHide(){const e=this.container.querySelector(".sm-gc-grid"),t=this.container.querySelector(".sm-gc-scrollbar"),a=this.container.querySelector(".sm-gc-scrollbar__thumb"),i=e==null?void 0:e.parentElement;if(!e||!t||!a||!i)return;const o=600,r=24,n=()=>{const{clientHeight:m,scrollHeight:c,scrollTop:d}=e;if(c<=m+1){t.style.display="none";return}t.style.display="";const l=e.getBoundingClientRect(),g=i.getBoundingClientRect();t.style.top=`${l.top-g.top}px`,t.style.height=`${m}px`,t.style.right=`${g.right-l.right}px`;const h=Math.max(r,m*m/c),f=d/(c-m)*(m-h);a.style.height=`${h}px`,a.style.transform=`translateY(${f}px)`};this._scrollbarGrid=e,this._onGridScroll=()=>{n(),t.classList.add("is-scrolling"),this._scrollbarHideTimer&&clearTimeout(this._scrollbarHideTimer),this._scrollbarHideTimer=setTimeout(()=>{t.classList.remove("is-scrolling")},o)},e.addEventListener("scroll",this._onGridScroll,{passive:!0}),typeof ResizeObserver<"u"&&(this._scrollbarResizeObserver=new ResizeObserver(()=>n()),this._scrollbarResizeObserver.observe(i),this._scrollbarResizeObserver.observe(e)),n()}_saveScrollPosition(){const e=this.container.querySelector(".sm-gc-grid");if(e)try{sessionStorage.setItem(A,String(e.scrollTop))}catch{}}_restoreScrollPosition(){const e=this.container.querySelector(".sm-gc-grid");if(e)try{const t=sessionStorage.getItem(A);if(sessionStorage.removeItem(A),t!==null){const a=Number(t);!Number.isNaN(a)&&a>0&&requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.scrollTop=a})})}}catch{}}async _showCharacterAiWhenReady(){!await u.whenReady()||!this.mounted||u.showEmbedded({top:"auto",left:"auto",bottom:"7rem",right:"1.6rem",width:"32rem",height:"38rem"})}_completeEntranceMotion(){var t;const e=(t=this.container)==null?void 0:t.querySelector(".sm-gc-page");e&&(e.classList.remove("sm-gc-page--entering"),e.classList.add("sm-gc-page--stable"))}async _launchGame(e,t){const a=this.container.querySelector(".sm-gc-page");a&&await this._launchFocus.run({root:a,target:e,navigate:async()=>{if(this._saveScrollPosition(),e.getAttribute("data-game-type")==="digital-human"){const r=y.find(n=>n.game===t);r&&await App.navigate("dh-game",{entry:r,onExit:()=>App.goBack()});return}let o=null;if(!u.isPausedForTask()&&u.isVoiceChatActive()){const r=y.find(n=>n.game===t);u.pauseForTask(t,{displayName:(r==null?void 0:r.title)||"小游戏",scene:"game"}),o=u.awaitFarewellComplete()}await App.navigate("game-iframe",{game:t,params:F(t),farewellPromise:o,onExit:()=>App.goBack()})}})}_initCategoryTabs(){const e=this.container.querySelector(".sm-gc-tabs");if(!e)return;const t=this._getSavedActiveTab();!this._shouldPlayEntrance&&t&&t!=="all"&&this._applyTabSelection(t,{animate:!1}),e.addEventListener("click",a=>{const i=a.target.closest("[data-category]");if(!i)return;const o=i.getAttribute("data-category");o&&(this._completeEntranceMotion(),this._applyTabSelection(o),this._saveActiveTab(o))})}async _applyTabSelection(e,{animate:t=!0}={}){const a=this.container.querySelector(".sm-gc-page"),i=this.container.querySelector(".sm-gc-grid");if(!a||!i||this._launchFocus.active)return;const o=++this._tabTransitionToken;if(this.container.querySelectorAll("[data-category]").forEach(l=>{l.classList.toggle("sm-gc-tab--active",l.getAttribute("data-category")===e)}),t&&(a.classList.remove("is-tab-entering"),a.classList.add("is-tab-leaving"),await new Promise(l=>this.setTimeout(l,140)),!this.mounted||o!==this._tabTransitionToken))return;const n=E(e,y),m=new Set(n.map(l=>l.game)),c=this.container.querySelectorAll(".sm-gc-card");let d=0;if(c.forEach(l=>{const g=l.getAttribute("data-game"),h=m.has(g);l.hidden=!h,h&&(l.style.setProperty("--sm-gc-visible-index",String(d)),d+=1)}),i.scrollTop=0,this._updateCardSize(),t){if(a.classList.remove("is-tab-leaving"),a.classList.add("is-tab-entering"),await new Promise(l=>this.setTimeout(l,420)),!this.mounted||o!==this._tabTransitionToken)return;a.classList.remove("is-tab-entering")}}_saveActiveTab(e){try{sessionStorage.setItem(x,e)}catch{}}_getSavedActiveTab(){try{const e=sessionStorage.getItem(x)||"all";return e==="digital-human"?"all":e}catch{return"all"}}_tryResumeVoiceChat(){u.isPausedForTask()&&(L.notifyGameExited("exited"),u.resumeAfterTask().catch(()=>{}))}hydrateCatalogIcons(){y.forEach(e=>{if(!k(e.icon))return;const t=this.container.querySelector(`[data-game="${p(e.game)}"] .sm-gc-card__icon`);t instanceof HTMLImageElement&&R(t,e.game,{alt:e.title})})}render(){var m;const e=this._shouldPlayEntrance?"all":((m=this._getSavedActiveTab)==null?void 0:m.call(this))||"all",t=new Set(E(e,y).map(c=>c.game)),a=y.map((c,d)=>q(c,d,t)).join(""),i="sm-gc-grid",o=this._shouldPlayEntrance?"sm-gc-page--entering":"sm-gc-page--stable",n=P.filter(c=>c.key!=="digital-human").map((c,d)=>{const l=c.key===e,g=H[c.key];return`<button class="sm-gc-tab${l?" sm-gc-tab--active":""}" data-category="${p(c.key)}" style="--sm-gc-tab-index: ${d}">
            ${g?`<img class="sm-gc-tab__icon" src="${p(g)}" alt="" aria-hidden="true">`:""}
            <span class="sm-gc-tab__label">${S(c.label)}</span>
          </button>`}).join("");return`
      <style>
        /* =================== 页面容器 =================== */
        .sm-gc-page {
          position: relative;
          height: 100vh;
          background: #3e8cd5 url('https://cdn.keepwork.com/silvermind/games/shared/assets/background.png') center bottom / cover no-repeat;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* 装饰：模糊光斑 */
        .sm-gc-page__glow {
          position: absolute;
          top: 17.2rem;
          right: 10.4rem;
          width: 24rem;
          height: 12.8rem;
          border-radius: 999rem;
          background: rgba(255, 255, 255, 0.2);
          filter: blur(6.4rem);
          pointer-events: none;
        }

        /* =================== 顶栏 =================== */
        .sm-gc-header {
          display: flex;
          align-items: center;
          gap: 1.6rem;
          height: 8.8rem;
          padding-left: 3.2rem;
        }

        .sm-gc-page--entering .sm-gc-header {
          animation: smGcHeaderEnter 480ms 80ms both cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .sm-gc-title {
          color: #fff;
          font-size: 3rem;
          font-weight: 600;
          line-height: 4.5rem;
          text-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.15);
        }

        /* =================== 分类 Tab 栏 =================== */
        .sm-gc-tabs {
          display: flex;
          align-items: center;
          gap: 1.9rem;
          /* 左对齐：左内边距 3.2rem 与顶栏返回按钮(padding-left:3.2rem)左缘对齐 */
          padding: 0.8rem 3.2rem;
          margin: 0 0 1.2rem;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          flex-shrink: 0;
        }
        .sm-gc-tabs::-webkit-scrollbar {
          display: none;
        }
        .sm-gc-tab {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1.5rem 2rem;
          border: 0.1rem solid rgba(255, 255, 255, 0.1);
          border-radius: 999rem;
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
          font-size: 2.4rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 200ms ease, color 200ms ease, box-shadow 200ms ease;
          white-space: nowrap;
        }
        .sm-gc-page--entering .sm-gc-tab {
          animation: smGcTabEnter 520ms calc(150ms + var(--sm-gc-tab-index) * 70ms) both cubic-bezier(0.18, 0.75, 0.24, 1);
        }
        .sm-gc-tab:hover {
          background: rgba(255, 255, 255, 0.35);
        }
        .sm-gc-tab--active {
          background: #fff;
          color: #103c66;
          border-color: transparent;
          box-shadow: 0 0.3rem 0 0 #1f7ad7;
        }
        .sm-gc-tab--active:hover {
          background: #fff;
        }
        .sm-gc-tab__icon {
          width: 2.8rem;
          height: 2.8rem;
          object-fit: contain;
          pointer-events: none;
          flex-shrink: 0;
          transform: scale(1);
          transition: transform 200ms ease;
        }
        .sm-gc-tab--active .sm-gc-tab__icon {
          transform: scale(1.28);
        }
        .sm-gc-tab__label {
          line-height: normal;
        }

        /* =================== 游戏网格 =================== */
        .sm-gc-content {
          position: relative;
          z-index: 1;
          flex: 1;
          min-height: 0;
          padding: 0 3.2rem 0;
          box-sizing: border-box;
          overflow: hidden;
        }

        .sm-gc-grid {
           display: grid;
           /* 列宽与 gap 由 JS 动态计算（基准 266×268 / gap 32），写入下列变量；
              auto-fill 按动态列宽自动填充列数——刚好铺满整行，无右侧留白 */
           grid-template-columns: repeat(auto-fill, var(--sm-gc-card-w, 26.6rem));
          align-content: flex-start;
           /* 占满内容区宽度、左对齐排列：卡片从左侧排起，
              因自身 1.6rem 内边距比 tabs 略偏右一点点 */
           justify-content: start;
           width: 100%;
           column-gap: var(--sm-gc-gap, 3.2rem);
           row-gap: var(--sm-gc-gap, 3.2rem);
          height: 100%;
          padding: 1.6rem 1.6rem 10rem;
          box-sizing: border-box;
          overflow-x: hidden;
          overflow-y: auto;
          /* 隐藏原生滚动条，改用 .sm-gc-scrollbar 自绘（可平滑淡入淡出） */
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }

        .sm-gc-grid::-webkit-scrollbar {
          display: none;
        }

        /* 自绘滚动条：绝对定位于网格右侧可视区，默认 opacity:0 隐藏，
           滚动时 JS 加 .is-scrolling 淡入、停止后移除淡出。
           opacity 作用在真实元素上，过渡能正常动画（伪元素不行）。
           淡入 120ms 快、淡出 500ms 慢，贴近系统滚动条“快显慢隐”的手感 */
        .sm-gc-scrollbar {
          position: absolute;
          width: 0.6rem;
          opacity: 0;
          transition: opacity 500ms ease;
          pointer-events: none;
          z-index: 3;
        }

        .sm-gc-scrollbar.is-scrolling {
          opacity: 1;
          transition: opacity 120ms ease;
        }

        .sm-gc-scrollbar__thumb {
          position: absolute;
          left: 0;
          width: 100%;
          border-radius: 999rem;
          background: rgba(255, 255, 255, 0.45);
          will-change: transform, height;
        }

        /* =================== 游戏卡片 =================== */
        .sm-gc-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          /* 宽高由 JS 按可用宽度动态计算（基准 266×268，等比缩放），带兜底值 */
          flex: 0 0 var(--sm-gc-card-w, 26.6rem);
          width: var(--sm-gc-card-w, 26.6rem);
          height: var(--sm-gc-card-h, 26.8rem);
          gap: 1.6rem;
          padding: 0.3rem;
          box-sizing: border-box;
          border: 0.3rem solid #fff;
          border-radius: 3.2rem;
          background: #ffebdb;
          box-shadow:
            0 0.5rem 0 rgba(255, 255, 255, 0.3),
            0 0.8rem 1.6rem rgba(0, 0, 0, 0.08);
          cursor: pointer;
          overflow: hidden;
          transition: transform 200ms ease, box-shadow 200ms ease;
        }
        .sm-gc-page--entering .sm-gc-card:not([hidden]) {
          animation: smGcCardEnter 620ms calc(230ms + var(--sm-gc-card-index) * 45ms) both cubic-bezier(0.18, 0.75, 0.24, 1);
        }
        .sm-gc-page.is-tab-leaving .sm-gc-card:not([hidden]) {
          animation: smGcCardLeave 140ms both ease-in;
          pointer-events: none;
        }
        .sm-gc-page.is-tab-entering .sm-gc-card:not([hidden]) {
          animation: smGcCardEnter 360ms calc(var(--sm-gc-visible-index) * 42ms) both cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .sm-gc-card[hidden] {
          display: none;
        }
        .sm-gc-card:hover,
        .sm-gc-card:focus-visible {
          transform: translateY(-0.4rem);
          box-shadow:
            0 0.8rem 0 rgba(255, 255, 255, 0.3),
            0 1.2rem 2.4rem rgba(0, 0, 0, 0.12);
        }
        .sm-gc-card:focus-visible {
          outline: 0.2rem solid rgba(255, 255, 255, 0.6);
          outline-offset: 0.3rem;
        }

        .sm-gc-card__icon {
          width: 12rem;
          height: 12rem;
          border-radius: 2.7rem;
          object-fit: cover;
          pointer-events: none;
        }
        .sm-gc-card__icon--emoji {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6rem;
          background: #f0f0f5;
          object-fit: unset;
        }

        /* 图标容器（用于定位数字人徽标） */
        .sm-gc-card__icon-wrapper {
          position: relative;
          display: inline-block;
        }

        /* 数字人徽标 */
        .sm-gc-card__dh-badge {
          position: absolute;
          right: -0.4rem;
          bottom: -0.4rem;
          width: 3.6rem;
          height: 3.6rem;
          filter: drop-shadow(0 0.2rem 0.4rem rgba(124, 58, 237, 0.4));
          pointer-events: none;
        }

        .sm-gc-card__title {
          font-size: 3.2rem;
          font-weight: 600;
          line-height: 4.6rem;
          color: #1d293d;
          text-align: center;
          width: 100%;
        }

        .sm-gc-page.is-game-launching .sm-gc-header,
        .sm-gc-page.is-game-launching .sm-gc-tabs,
        .sm-gc-page.is-game-launching .sm-gc-card:not(.is-launch-target) {
          opacity: 0.46;
          transform: scale(0.985);
          pointer-events: none;
          transition: opacity 220ms ease, transform 220ms ease;
        }
        .sm-gc-page.is-game-launching .sm-gc-card.is-launch-target {
          z-index: 4;
          transform: translateY(-0.8rem) scale(1.035);
          box-shadow: 0 1.4rem 3rem rgba(22, 73, 118, 0.24), 0 0 0 0.5rem rgba(255, 255, 255, 0.28);
          pointer-events: none;
        }
        .sm-gc-page.is-game-launching .sm-gc-card.is-launch-target .sm-gc-card__icon-wrapper {
          animation: smGcLaunchIcon 280ms ease-out both;
        }

        @keyframes smGcHeaderEnter {
          from { opacity: 0; transform: translateY(-1.8rem); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes smGcTabEnter {
          from { opacity: 0; transform: translateY(1.4rem) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes smGcCardEnter {
          from { opacity: 0; transform: translateY(2.8rem) scale(0.94); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes smGcCardLeave {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to { opacity: 0; transform: translateY(0.8rem) scale(0.97); }
        }
        @keyframes smGcLaunchIcon {
          0% { transform: scale(1); filter: brightness(1); }
          55% { transform: scale(1.08); filter: brightness(1.14); }
          100% { transform: scale(1.03); filter: brightness(1.06); }
        }

        /* =================== 响应式 =================== */
        @media (max-width: 720px) {
          .sm-gc-header {
            height: 6.4rem;
            padding-left: 1.8rem;
            gap: 1.2rem;
          }
          .sm-gc-page .sm-nav-back {
            width: 4rem;
            height: 4rem;
            border-radius: 1.2rem;
          }
          .sm-gc-page .sm-nav-back svg {
            width: 2rem;
            height: 2rem;
          }
          .sm-gc-title {
            font-size: 2.4rem;
          }
          .sm-gc-tabs {
            padding: 0.6rem 1.8rem;
            margin: 0 0 0.8rem;
            gap: 1.2rem;
          }
          .sm-gc-tab {
            padding: 1rem 1.6rem;
            font-size: 2rem;
            gap: 0.6rem;
          }
          .sm-gc-tab__icon {
            width: 2.4rem;
            height: 2.4rem;
          }
          .sm-gc-content {
            padding: 0 1.8rem 0;
          }
          .sm-gc-card__icon {
            width: 9rem;
            height: 9rem;
            border-radius: 2rem;
          }
          .sm-gc-card__icon--emoji {
            font-size: 4.5rem;
          }
          .sm-gc-card__dh-badge {
            width: 2.8rem;
            height: 2.8rem;
          }
          .sm-gc-card__title {
            font-size: 2.4rem;
            line-height: 3.2rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sm-gc-page *,
          .sm-gc-page *::before,
          .sm-gc-page *::after {
            animation-duration: 0.01ms !important;
            animation-delay: 0ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      </style>
      <section
        class="sm-gc-page ${o}"
        aria-label="健脑训练目录页面"
        data-ai-hint="当前页面是健脑训练小游戏目录。页面中的每张卡片都代表一个训练游戏，点击后进入对应训练。"
      >
        <!-- 装饰元素 -->
        <div class="sm-gc-page__glow"></div>

        <!-- 顶栏 -->
        <div class="sm-gc-header">
          <button class="sm-nav-back" data-action="back" aria-label="返回" data-ai-hint="返回上一个页面">
            ${$}
          </button>
          <span class="sm-gc-title">健脑训练</span>
        </div>

        <!-- 分类 Tab 栏（仅开发模式显示） -->
        ${`<nav class="sm-gc-tabs" aria-label="游戏分类">
          ${n}
        </nav>`}

        <!-- 游戏网格 -->
        <div class="sm-gc-content">
          <div class="${i}">
            ${a}
          </div>
          <!-- 自绘滚动条：原生滚动条无法做淡入淡出，用真实元素的 opacity 过渡实现 -->
          <div class="sm-gc-scrollbar" aria-hidden="true">
            <div class="sm-gc-scrollbar__thumb"></div>
          </div>
        </div>
      </section>
    `}}export{y as GAME_ENTRY_CATALOG,J as GameCatalogPage};
