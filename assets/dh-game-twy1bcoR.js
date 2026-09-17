import{C as d,Q as c,B as g}from"./assessment-ByzqurOv.js";import{C as a}from"./character-ai-iframe-BaOjCs9J.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./sop-manager-BaFyYO1d.js";import"./app-Cfz08_Ze.js";import"./state-store-Dnn2umuJ.js";function s(o){return String(o||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(o){return s(o).replace(/`/g,"&#96;")}class y extends d{constructor(){super(),this._entry=null,this._onExit=null}onMount(e={}){this._entry=e.entry||null,this._onExit=e.onExit||null;const t=this.container.querySelector('[data-action="back"]');t&&t.addEventListener("click",()=>this._handleExit()),this._startCharacterAI()}onUnmount(){if(a.hideEmbedded(),this._minigameEventHandler){const e=a.getDHF();e&&e.off("minigameEvent",this._minigameEventHandler),this._minigameEventHandler=null}this._resizeHandler&&(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null),this._entry=null,this._onExit=null}_handleExit(){try{const e=a.getDHF();e&&e.closeMinigame({reason:"user",restartAgent:!0})}catch(e){console.warn("[DHGamePage] closeMinigame 失败:",e)}this._onExit&&this._onExit()}_isFullscreenGame(){var e;return((e=this._entry)==null?void 0:e.game)==="dh-home"}_getMinigameFrameOptions(){if(this._isFullscreenGame())return{left:"0",top:"0",width:"100vw",height:"100vh",showTitleBar:!1,showCloseButton:!1,borderRadius:"0",boxShadow:"none",background:"transparent",zIndex:4};const e=parseFloat(getComputedStyle(document.documentElement).fontSize)||10,t=1.6*e,n=8.8*e,i=1.6*e,r=1.6*e,m=40*e;return{left:`${t}px`,top:`${n}px`,width:Math.round(window.innerWidth-t-r-m),height:Math.round(window.innerHeight-n-i),showTitleBar:!1,showCloseButton:!1,borderRadius:"1.2rem",boxShadow:"none",background:"transparent",zIndex:6}}_configureMinigame(){var e;try{const t=a.getDHF(),n=(e=t==null?void 0:t.sdk)==null?void 0:e.__minigameTools;if(!n)return;n.configure({slot:"default",...this._getMinigameFrameOptions()})}catch(t){console.warn("[DHGamePage] minigame configure 失败:",t)}}async _startCharacterAI(){var n;if(!await a.whenReady()||!this.mounted)return;a.showEmbedded({top:"auto",left:"auto",bottom:"4rem",right:"0",width:"40rem",height:"calc(100vh * 1.7 / 3)"}),this._configureMinigame(),this._resizeHandler=()=>this._configureMinigame(),window.addEventListener("resize",this._resizeHandler);const t=a.getDHF();if(t&&(this._minigameEventHandler&&t.off("minigameEvent",this._minigameEventHandler),this._minigameEventHandler=i=>{if((i==null?void 0:i.type)==="gameFinished"||(i==null?void 0:i.type)==="gameClosed"){const r=i==null?void 0:i._slot;(!r||r==="default")&&(console.log(`[DHGamePage] minigame ${i.type} (slot=${r||"default"}) → 退出页面`),this._onExit&&this._onExit())}},t.on("minigameEvent",this._minigameEventHandler)),(n=this._entry)!=null&&n.skillPath)try{if(!t){console.warn("[DHGamePage] DHF 实例不可用");return}await t.launchSkill(this._entry.skillPath,{slot:"default",root:!0,tools:this._entry.tools,layout:"custom",frameOptions:this._getMinigameFrameOptions(),restorePolicy:"none",closePolicy:"emitOnly"})}catch(i){console.warn("[DHGamePage] skill 激活失败:",i)}}render(){var h;const e=this._entry||((h=this.options)==null?void 0:h.entry)||{},t=s(e.title||"数字人互动"),n=s(e.description||""),i=e.backgroundImage,r=i?`background-image: url('${l(i)}'); background-size: cover; background-position: center;`:"background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #fda085 100%);",m=e.icon&&c(e.icon)?`<img class="sm-dh-game__icon" src="${l(e.icon)}" alt="${l(e.title)}">`:e.icon?`<span class="sm-dh-game__icon sm-dh-game__icon--emoji">${s(e.icon)}</span>`:"";return`
      <style>
        /* =================== 数字人游戏页面 =================== */
        .sm-dh-game {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          ${r}
        }

        /* 半透明遮罩，保证文字可读 */
        .sm-dh-game__overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.15);
          pointer-events: none;
        }

        /* =================== 顶栏 =================== */
        .sm-dh-game__header {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 1.6rem;
          height: 8.8rem;
          padding-left: 3.2rem;
        }

        .sm-dh-game__title {
          color: #fff;
          font-size: 3rem;
          font-weight: 600;
          line-height: 4.5rem;
          text-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.3);
        }

        /* =================== 左侧内容区 =================== */
        .sm-dh-game__content {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 4rem 4rem 4rem 6rem;
          height: calc(100vh - 8.8rem);
          max-width: 60%;
          box-sizing: border-box;
          pointer-events: none;
        }
        /* 全屏小游戏（如数字人之家）时，隐藏装饰性内容避免遮挡 iframe */
        .sm-dh-game--fullscreen .sm-dh-game__content,
        .sm-dh-game--fullscreen .sm-dh-game__overlay {
          display: none;
        }

        .sm-dh-game__icon {
          width: 14rem;
          height: 14rem;
          border-radius: 3.2rem;
          object-fit: cover;
          box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.2);
          margin-bottom: 3.2rem;
        }
        .sm-dh-game__icon--emoji {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 7rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(1rem);
        }

        .sm-dh-game__desc {
          color: rgba(255, 255, 255, 0.9);
          font-size: 2.4rem;
          line-height: 3.6rem;
          text-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
          max-width: 48rem;
        }

        /* =================== 响应式 =================== */
        @media (max-width: 720px) {
          .sm-dh-game__header {
            height: 6.4rem;
            padding-left: 1.8rem;
            gap: 1.2rem;
          }
          .sm-dh-game__title {
            font-size: 2.4rem;
          }
          .sm-dh-game__content {
            padding: 2rem 2rem 2rem 3rem;
            max-width: 55%;
          }
          .sm-dh-game__icon {
            width: 10rem;
            height: 10rem;
            border-radius: 2.4rem;
            margin-bottom: 2rem;
          }
          .sm-dh-game__icon--emoji {
            font-size: 5rem;
          }
          .sm-dh-game__desc {
            font-size: 1.8rem;
            line-height: 2.8rem;
          }
        }
      </style>

      <section
        class="sm-dh-game${e.game==="dh-home"?" sm-dh-game--fullscreen":""}"
        aria-label="${t}页面"
        data-ai-hint="当前页面是数字人互动游戏：${t}。${n}"
      >
        <div class="sm-dh-game__overlay"></div>

        <!-- 顶栏 -->
        <div class="sm-dh-game__header">
          <button class="sm-nav-back" data-action="back" aria-label="返回" data-ai-hint="返回上一个页面">
            ${g}
          </button>
          <span class="sm-dh-game__title">${t}</span>
        </div>

        <!-- 左侧：游戏信息 -->
        <div class="sm-dh-game__content">
          ${m}
          ${n?`<p class="sm-dh-game__desc">${n}</p>`:""}
        </div>

        <!-- 右侧：数字人头像由 CharacterAIIframePage.showEmbedded() 动态渲染 -->
      </section>
    `}}export{y as DHGamePage};
