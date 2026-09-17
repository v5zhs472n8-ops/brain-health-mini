import{C as y,c as i,S as m,V as C,d as T,g as A,b as S,e as w,U as v,a as k,K as x,f as L,B as E}from"./assessment-ByzqurOv.js";import{C as P}from"./character-ai-iframe-BaOjCs9J.js";import{BusinessFlowStore as B}from"./state-store-Dnn2umuJ.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./sop-manager-BaFyYO1d.js";import"./app-Cfz08_Ze.js";function V({applicationEntryCount:$=0,hasShownWelcome:e=!1,assessmentComplete:s=!1}={}){return!e&&!s&&Number($)>=2}let b=!1;const f="欢迎回来。您的认知能力筛查还没完成，让我们继续吧。";class _ extends y{constructor({selectedModuleKey:e=null}={}){super(),this.state={view:e&&i.MODULES[e]?"detail":"overview",selectedModuleKey:e&&i.MODULES[e]?e:null},this.devClickCount=0,this.devClickTimer=null}onMount(e={}){!!(e.showAssessmentIntro||e.fromProfile)?(b=!0,this.showAssessmentIntro()):V({applicationEntryCount:B.getSnapshot().application.entryCount,hasShownWelcome:b,assessmentComplete:m.allComplete()})&&(b=!0,this.showWelcomeBack()),C.preload(f).catch(t=>{console.warn("[AssessmentHome] 欢迎回来语音预加载异常:",t)}),this._preloadNextTaskTutorialVoices()}onUnmount(){P.cancelResumeAfterTask(),this._removeAssessmentHomeModals()}showWelcomeBack(){this._showAssessmentHomeModal({id:"welcome-back-modal",title:"欢迎回来",contentHtml:`
        <p>您的认知能力筛查还没完成</p>
        <p>让我们继续吧</p>
      `,buttonText:"好的",voiceText:f})}showAssessmentIntro(){this._showAssessmentHomeModal({id:"assessment-intro-modal",cardClass:"wb-card-assessment-intro",headerClass:"wb-header-assessment-intro",contentClass:"wb-content-assessment-intro",title:"测评说明",showIcon:!1,contentHtml:`
        <p>您好呀，咱们的测评即将开始！</p>
        <p>本次认知能力筛查共有 10 个小任务，分为 4 个能力模块。</p>
        <p>作答过程中，如果您觉得累了，可以随时退出，<strong>进度会自动保存</strong>，下次打开继续就好。</p>
        <p>如果准备好了，咱们就开始吧！</p>
      `,buttonText:"准备好了，开始吧",voiceText:T()})}_showAssessmentHomeModal({id:e,title:s,contentHtml:t,buttonText:a,cardClass:o="",headerClass:p="",contentClass:r="",voiceText:c="",showIcon:d=!0}){var g;(g=document.getElementById(e))==null||g.remove();const n=document.createElement("div");n.id=e,n.className="wb-overlay",n.innerHTML=`
      <div class="wb-card ${o}" data-wb-card>
        <div class="wb-header ${p}">
          ${d?`
            <div class="wb-icon-circle">
              <img src="${A(S.refresh)}" alt="" style="width: 4.8rem; height: 4.8rem;" />
            </div>
          `:""}
          <p class="wb-title">${s}</p>
        </div>
        <div class="wb-content ${r}">${t}</div>
        <button class="wb-btn btn-press" type="button" data-wb-confirm>${a}</button>
      </div>
    `,(document.getElementById("app")||document.body).appendChild(n);const h=e==="assessment-intro-modal"?500:80;this.setTimeout(()=>{var u;!this.mounted||!n.isConnected||(n.classList.add("wb-overlay-visible"),(u=n.querySelector("[data-wb-card]"))==null||u.classList.add("wb-card-visible"),c&&(w.stopSpeak(),w.speak(c)))},h),n.querySelector("[data-wb-confirm]").onclick=()=>{c&&w.stopSpeak(),n.classList.remove("wb-overlay-visible"),n.classList.add("wb-overlay-leaving");const u=n.querySelector("[data-wb-card]");u==null||u.classList.remove("wb-card-visible"),u==null||u.classList.add("wb-card-leaving"),this.setTimeout(()=>n.remove(),280)}}_removeAssessmentHomeModals(){var e,s;(e=document.getElementById("welcome-back-modal"))==null||e.remove(),(s=document.getElementById("assessment-intro-modal"))==null||s.remove()}async handleNameClick(){if(i.DEV.enabled){if(this.devClickCount++,this.devClickTimer&&clearTimeout(this.devClickTimer),this.devClickTimer=setTimeout(()=>{this.devClickCount=0},3e3),this.devClickCount===3){const e=window.keepwork&&window.keepwork.token,s=e&&window.keepwork.token.length>8?window.keepwork.token.substring(0,8)+"...":window.keepwork.token||"";v.showToast(e?`Token: ${s}`:"Token不存在")}this.devClickCount>=5&&(this.devClickCount=0,await v.showDebugPanel())}}async devClearAllAssessments(){await v.showConfirm("确定全部重置？将清除所有测评数据并回到初始状态。")&&(await k.clearAll(),v.showToast("已全部重置"),setTimeout(()=>window.location.reload(),1e3))}async devClearModuleProgress(e){const s=i.MODULES[e];!s||!await v.showConfirm(`确定清空“${s.name}”模块进度？`)||App.clearModuleProgress(e)}devRedoTask(e){if(!i.DEV.enabled||!i.TASKS[e])return;const s=i.TASKS[e].route;m.setRuntimePracticeReplay([e,s]),App.startTask(e)}async handleReportClick(){var s,t;const e=k.getCompletedAssessments();if(e.length>1){(s=window.App)==null||s.navigate("history-list");return}if(e.length===1){await this.openCompletedReport(e[0]);return}if(m.allComplete()){(t=window.App)==null||t.navigate("complete",{skipCongratulations:!0,fromReportEntry:!0});return}v.showToast("暂无可查看的测评报告")}async openCompletedReport(e){var s,t;v.showToast("正在加载报告...");try{const a=await x.loadFromPage(e.pageName,"",!0),o=(a==null?void 0:a["current-session"])||null,p=(a==null?void 0:a.profile)||null;if(!o||!((s=o.results)!=null&&s.length)){v.showToast("该报告数据不存在或已被清除");return}(t=window.App)==null||t.navigate("complete",{skipCongratulations:!0,viewHistory:!0,historySession:o,historyProfile:p||{},historyNumber:e.number,historyBackTarget:"assessment-home",fromReportEntry:!0})}catch(a){console.error("[AssessmentHomePage] 加载报告失败:",a),v.showToast("加载失败，请重试")}}getCurrentModuleKey(){const e=Object.keys(i.MODULES);for(const s of e)if(!m.isModuleComplete(s))return s;return null}_preloadNextTaskTutorialVoices(){const e=this.getCurrentModuleKey();if(!e)return;const t=i.MODULES[e].tasks.find(o=>!m.isTaskCompleted(o));if(!t)return;const a=L(t);a.length>0&&C.preloadBatch(a,2).catch(o=>{console.warn("[AssessmentHome] 演示教程语音预加载异常:",o)})}openModule(e){if(!i.MODULES[e]||this.state.selectedModuleKey)return;const s=this.$("[data-assessment-home]"),t=this.$(`[data-module-key="${e}"]`);!s||!t||(this.setStateQuiet({selectedModuleKey:e}),s.classList.remove("assessment-home-overview-restored"),s.dataset.selectedModule=e,s.classList.add("assessment-home-to-detail"),t.classList.add("assessment-module-selected"),this.setTimeout(()=>{this.mounted&&(this.setStateQuiet({view:"detail"}),s.classList.remove("assessment-home-to-detail"),s.classList.add("assessment-home-detail"))},1500))}returnToOverview(){if(this.state.view!=="detail"||!this.state.selectedModuleKey)return;const e=this.$("[data-assessment-home]");e&&(e.classList.remove("assessment-home-detail"),e.classList.add("assessment-home-to-overview"),this.setTimeout(()=>{this.mounted&&(this.setStateQuiet({view:"overview",selectedModuleKey:null}),e.classList.remove("assessment-home-to-overview"),e.classList.add("assessment-home-overview-restored"),delete e.dataset.selectedModule,this.$$(".assessment-module-selected").forEach(s=>s.classList.remove("assessment-module-selected")))},2250))}handleBack(){var e;if(this.state.view==="detail"){this.returnToOverview();return}(e=window.App)==null||e.goBack()}renderModuleIconSvg(e){const s={speed:'<circle cx="44" cy="44" r="28"/><path d="M44 44V24"/><path d="M44 44H64"/>',memory:'<path d="M23 59c-8 0-13-6-13-14 0-7 4-12 10-14 1-12 10-19 21-19 10 0 18 5 21 14 10 0 18 8 18 18 0 8-6 15-14 16H23z"/><path d="M45 34v20m-7-7 7 7 7-7"/>',executive:'<rect x="13" y="18" width="62" height="16" rx="5"/><rect x="13" y="38" width="62" height="16" rx="5"/><rect x="13" y="58" width="42" height="16" rx="5"/>',vision:'<path d="M8 45s14-22 36-22 36 22 36 22-14 22-36 22S8 45 8 45z"/><circle cx="44" cy="45" r="13"/>'};return`<svg class="assessment-module-icon-svg" viewBox="0 0 88 88" aria-hidden="true">${s[e]||s.speed}</svg>`}renderRedoIconSvg(){return'<svg class="assessment-redo-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 8A8 8 0 1 0 19 16"/><path d="M19 4v4h-4"/></svg>'}renderModuleProgress(e,s,t=!1){const a=s.tasks.filter(r=>m.isTaskCompleted(r)).length,o=e===this.getCurrentModuleKey()?s.tasks.find(r=>!m.isTaskCompleted(r)):null,p=s.tasks.map((r,c)=>{var h;const d=m.isTaskCompleted(r),n=r===o,l=d&&i.DEV.enabled?`<button class="assessment-progress-dot assessment-progress-redo" type="button"
            onclick="event.stopPropagation(); App.currentPage.devRedoTask('${r}')"
            aria-label="重做${((h=i.TASKS[r])==null?void 0:h.name)||""}">${this.renderRedoIconSvg()}</button>`:`<span class="assessment-progress-dot ${d?"is-done":n?"is-current":""}">
          ${d?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7"/></svg>':n?'<span class="assessment-progress-current-dots" aria-label="下一个待完成任务"><i></i><i></i><i></i></span>':'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="10" width="8" height="8" rx="2"/><path d="M9.5 10V7.8a2.5 2.5 0 0 1 5 0V10"/></svg>'}
        </span>`;return c===0?l:`<span class="assessment-progress-segment">
        <span class="assessment-progress-line" aria-hidden="true"></span>
        ${l}
      </span>`}).join("");return`
      <div class="assessment-module-progress ${t?"is-compact":""}">
        <div class="assessment-progress-heading">
          <span>完成进度</span>
          <strong>${a}<small> / ${s.tasks.length}</small></strong>
        </div>
        <div class="assessment-progress-track">${p}</div>
      </div>`}getModuleColorStyles(e){const s=e.replace("#",""),t=parseInt(s.slice(0,2),16),a=parseInt(s.slice(2,4),16),o=parseInt(s.slice(4,6),16),p=d=>Math.round(d*.86+66*.14),r=Math.round(a*.86+223*.14),c=Math.round(o*.86+255*.14);return[`--module-color:${e}`,`--module-decoration:rgba(${t}, ${a}, ${o}, 0.16)`,`--module-visual-start:rgb(${p(t)}, ${r}, ${c})`,`--module-shadow:rgba(${t}, ${a}, ${o}, 0.3)`].join(";")}renderModuleCard(e,s,t){const a=this.state.selectedModuleKey===e?" assessment-module-selected":"",o=this.getModuleColorStyles(s.color);return`
      <div class="assessment-module-card${a}" role="button" tabindex="0" data-module-key="${e}"
        style="--module-index:${t}; ${o};"
        onclick="App.currentPage.openModule('${e}')"
        onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); App.currentPage.openModule('${e}'); }"
        aria-label="查看${s.name}模块" data-ai-hint="进入${s.name}模块，查看任务完成状态并开始当前任务">
        <span class="assessment-module-visual">${this.renderModuleIconSvg(s.icon)}</span>
        <span class="assessment-module-name">${s.name}</span>
        <span class="assessment-card-intro">
          <span class="assessment-intro-label">模块介绍</span>
          <span class="assessment-card-intro-text">${s.description}</span>
        </span>
        <span class="assessment-module-bottom">
          <span class="assessment-module-meta">
            <span class="assessment-module-meta-row">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h14v14H5z"/><path d="M8 9h8M8 13h8M8 17h5"/></svg>
              <span>共 <strong>${s.tasks.length}</strong> 个任务</span>
            </span>
            <span class="assessment-module-meta-row">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13" r="7"/><path d="M12 9v4l3 2M9 3h6"/></svg>
              <span>预计用时 <strong>${s.estimatedMinutes}</strong> 分钟</span>
            </span>
          </span>
          ${this.renderModuleProgress(e,s,!0)}
        </span>
        ${i.DEV.enabled?`
          <button class="assessment-progress-dot assessment-dev-module-action" type="button"
            onclick="event.stopPropagation(); App.currentPage.devClearModuleProgress('${e}')"
            aria-label="清空${s.name}模块进度">
            ${this.renderRedoIconSvg()}
          </button>
        `:""}
      </div>`}renderTaskList(e,s){const t=this.getCurrentModuleKey(),a=e===t,o=a?s.tasks.find(r=>!m.isTaskCompleted(r)):null,p=s.tasks.map((r,c)=>{const d=i.TASKS[r],n=m.isTaskCompleted(r),l=a&&r===o,h=n?"completed":l?"current":"locked",g=n?i.DEV.enabled?"重做（已完成）":"已完成":l?"开始任务":"待解锁",u=n&&i.DEV.enabled?`onclick="event.stopPropagation(); App.currentPage.devRedoTask('${r}')"`:l?`onclick="App.startModule('${e}')"`:"",M=h==="completed"?`<span class="assessment-task-status-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7"/></svg>
          </span>`:h==="locked"?`<span class="assessment-task-status-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><rect x="6" y="10" width="12" height="10" rx="3"/><path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10"/></svg>
            </span>`:"";return`
        <article class="assessment-task-card is-${h}" style="--task-index:${c};">
          <span class="assessment-task-number">${String(c+1).padStart(2,"0")}</span>
          ${M}
          <div class="assessment-task-copy">
            <h2>${d.name}</h2>
            <p>${d.description}</p>
          </div>
          <button class="assessment-task-action" type="button" ${u} ${l||n&&i.DEV.enabled?"":"disabled"}
            aria-label="${g}：${d.name}">${g}</button>
        </article>`}).join("");return`<section class="assessment-task-list" data-detail-key="${e}" style="--task-count:${s.tasks.length};" aria-label="${s.name}任务列表">${p}</section>`}renderProgressDots(e){const s=e.tasks.map(t=>m.isTaskCompleted(t)?`<div class="module-dot module-dot-done">
          <svg viewBox="0 0 24 24" fill="none" style="width: 1.6rem; height: 1.6rem;">
            <path d="M5 13l4 4L19 7" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>`:'<div class="module-dot module-dot-todo"></div>').join("");return`
      <div class="flex items-center" style="gap: 0.8rem;">
        <span class="module-info-tasks">${e.tasks.length}个任务</span>
        <div class="flex items-center" style="gap: 0.8rem;">${s}</div>
      </div>`}renderInfoCard(e,s){return`
      <div class="module-info-card">
        <div class="module-info-name">${s.name}</div>
        <div class="module-info-desc">${s.description}</div>
        ${this.renderProgressDots(s)}
      </div>`}renderWaveLine(){return`
      <svg class="module-wave-line" viewBox="0 0 1280 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 204 416 C 350 416, 350 345, 495 345 C 641 345, 641 416, 786 416 C 932 416, 932 345, 1077 345"
              stroke="rgba(255,255,255,0.25)" stroke-width="6" stroke-linecap="round" fill="none"/>
      </svg>`}render(){var c,d;const s=m.allComplete()||k.hasCompletedAssessments(),t=Object.entries(i.MODULES),a=this.state.selectedModuleKey?i.MODULES[this.state.selectedModuleKey]:null,o=this.state.view==="detail"?"assessment-home-detail":"",p=a?`${a.name}模块任务页`:"认知能力筛查模块选择页",r=a?`当前展示${a.name}模块。十个测评任务必须按全局顺序完成；只有当前待完成模块会显示“开始任务”，提前查看其他模块时所有任务均为“待解锁”。`:"当前展示认知能力筛查的四个模块。可以提前进入任一模块查看介绍，但十个测评任务必须按既定顺序依次完成。";return`
      <div class="assessment-home-page page-bg-profile h-full relative overflow-hidden ${o}"
        data-assessment-home aria-label="${p}" data-ai-hint="${r}"
        ${this.state.selectedModuleKey?`data-selected-module="${this.state.selectedModuleKey}"`:""}>
        <!-- 顶部工具栏：返回 + 报告 -->
        <div class="module-topbar">
          <button class="module-back-group" onclick="App.currentPage.handleBack()" aria-label="返回" data-ai-hint="返回上一级页面">
            <span class="sm-nav-back">
              ${E}
            </span>
            <span class="module-back-label">
              <span class="assessment-back-overview">返回主页</span>
              <span class="assessment-back-detail">返回测评列表</span>
            </span>
          </button>
          ${i.DEV.enabled?`
            <button onclick="App.currentPage.devClearAllAssessments()" class="assessment-dev-reset-action btn-3d-secondary btn-press" type="button">
              完整重置
            </button>
          `:""}
          ${s?`
            <button onclick="App.currentPage.handleReportClick()" class="btn-press module-report-btn assessment-report-entry" aria-label="查看认知能力筛查报告" data-ai-hint="查看已完成的认知能力筛查报告">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M8 8h6M8 12h6M8 16h3"/></svg>
              测评报告
            </button>
          `:""}
        </div>

        <main class="assessment-home-canvas">
          <header class="assessment-home-heading">
            <span class="assessment-heading-mark"></span>
            <div class="assessment-heading-overview">
              <h1 onclick="App.currentPage.handleNameClick()">认知能力筛查</h1>
              <p>请选择一个能力开始测评</p>
            </div>
            ${t.map(([n,l])=>`
              <div class="assessment-heading-detail" data-detail-key="${n}">
                <h1>${l.name}</h1>
                <p>本模块共 ${l.tasks.length} 个任务，需按顺序依次完成</p>
              </div>`).join("")}
          </header>

          <section class="assessment-modules" aria-label="测评模块">
            ${t.map(([n,l],h)=>this.renderModuleCard(n,l,h)).join("")}
          </section>

          <div class="assessment-detail-content">
            <div class="assessment-detail-tasks">
              ${t.map(([n,l])=>this.renderTaskList(n,l)).join("")}
            </div>
          </div>
        </main>

        <!-- 用户ID -->
        ${(d=(c=window.keepwork)==null?void 0:c.user)!=null&&d.id?`
          <div class="absolute bottom-4 right-6 select-none pointer-events-none" style="font-size: 1.4rem; opacity: 0.4; color: white; font-family: monospace;">
            ID: ${window.keepwork.user.id}
          </div>
        `:""}
      </div>
    `}}export{_ as AssessmentHomePage};
