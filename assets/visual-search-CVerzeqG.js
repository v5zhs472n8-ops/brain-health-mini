import{ac as $,C as E,S as y,c as g,ad as C,ae as L,af as w,aQ as _,ag as H,e as b,U as N,aR as U,ai as V,ah as R,aS as D}from"./assessment-hk5ZzQ2J.js";import{W as S,P as x,i as Q,r as P,d as W,a as z,b as q}from"./assessment-xiaoban-guide-BKa1-hPx.js";import{b as j}from"./task-resume-BHiCUhCk.js";import{r as A,t as F,I,s as M,g as O}from"./in-progress-warning-modal-DJp5KKWf.js";import"./modulepreload-polyfill-B5Qt9EMX.js";const G=g.INSTRUCTION["visual-search"],Y=G.ruleHtml,X=300;function K(v){var d;const e=g.VISUAL_SEARCH,s=e.setSizes.length*e.trialsPerSetSize;if((v==null?void 0:v.protocolVersion)!==e.protocolVersion||((d=v==null?void 0:v.trials)==null?void 0:d.length)!==s)return!1;const i=e.trialsPerSetSize/2;return e.setSizes.every(n=>{const r=v.trials.filter(l=>l.setSize===n);return r.filter(l=>l.hasTarget).length===i&&r.filter(l=>!l.hasTarget).length===i})}class J extends E{constructor(){super();const e=y.isPracticeCompleted("visual-search"),s=!!y.getTaskProgress("visual-search");this.state={phase:s?"welcome-back-progress":e?"welcome-back":"instruction",isPractice:!0,trials:[],currentTrialIndex:0,trialPhase:"showing",results:[],startTime:Date.now(),trialStartTime:0,practiceCorrectCount:0,practiceCorrectRequired:g.VISUAL_SEARCH.practiceTrials}}onMount(){this.state.phase==="welcome-back"||this.state.phase==="welcome-back-progress"?this.setTimeout(()=>S.init(),100):this.state.phase==="instruction"?this.setTimeout(()=>C.init(),100):this.state.phase==="practice-transition"?this.setTimeout(()=>x.init(),100):this.state.phase==="practice-transition-phase2"&&this.setTimeout(()=>x.initPhase2(),100),Q(this,{isStable:e=>["practice","main"].includes(e.state.phase)&&e.state.trialPhase==="showing",resolveSteps:e=>e.getGuideSteps()})}getGuideSteps(){return[{elements:()=>this.$("#vs-search-grid"),speechText:"逐个看中间的字母，找有没有 T。"},{speechText:"正着、倒着，或转过来的 T，都算 T。"},{elements:()=>this.$("#vs-answer-buttons"),speechText:"看到了点“有T”，没看到点“无T”。"}]}onUpdate(){this.state.phase==="welcome-back"||this.state.phase==="welcome-back-progress"?this.setTimeout(()=>S.init(),100):this.state.phase==="instruction"?this.setTimeout(()=>C.init(),100):this.state.phase==="practice-transition"?this.setTimeout(()=>x.init(),100):this.state.phase==="practice-transition-phase2"&&this.setTimeout(()=>x.initPhase2(),100),P(this)}onUnmount(){W(this),this.clearTimers(),L.cleanup()}updateProgress(){const{trials:e,currentTrialIndex:s,isPractice:i,practiceCorrectCount:d,practiceCorrectRequired:n}=this.state,r=e.length;i?w.updateProgress({current:d,total:n,prefix:"答对",suffix:"题"}):w.updateProgress({current:s+1,total:r,prefix:"第",suffix:"题"})}showSearchDisplay(){const{trials:e,currentTrialIndex:s}=this.state,i=e[s],{boardWidthRem:d,boardHeightRem:n,itemSizeRem:r,fontSizeRem:l}=_,m=i.items.map((a,p)=>{const c=a.rotation||0,o=a.x/100*d-r/2,u=a.y/100*n-r/2;return`
        <div class="absolute font-bold vs-letter-item"
             ${a.letter==="T"?'data-target-t="true"':""}
             style="left: ${o}rem; top: ${u}rem; width: ${r}rem; height: ${r}rem;
                    transform: rotate(${c}deg); display: flex; align-items: center; justify-content: center;
                    font-size: ${l}rem; line-height: 1; color: #314158; transition: all 0.3s ease;">
          ${a.letter}
        </div>
      `}).join(""),t=this.$("#task-content");t&&(t.innerHTML=`
        <div class="flex-1 flex flex-col items-center justify-center">
          
          <div id="vs-search-grid" class="vs-board relative" style="width: ${d}rem; height: ${n}rem; margin-bottom: 2.6rem;">
            ${m}
          </div>
          
          <div id="vs-answer-buttons" class="flex" style="gap: 2.56rem; width: 66.6rem; border-radius: 2.56rem;">
            <button id="lockable-btn-no-t" class="btn-3d btn-3d-purple flex-1" style="height:12rem; font-size:3.6rem; border-radius:2.56rem;"
                    onclick="LockableButton.handleClick('lockable-btn-no-t', function() { TaskManager.currentTask.handleResponse(false) })"
                    aria-label="无 T" data-ai-hint="判断画面中没有字母 T">无 T</button>
            <button id="lockable-btn-has-t" class="btn-3d btn-3d-blue flex-1" style="height:12rem; font-size:3.6rem; border-radius:2.56rem;"
                    onclick="LockableButton.handleClick('lockable-btn-has-t', function() { TaskManager.currentTask.handleResponse(true) })"
                    aria-label="有 T" data-ai-hint="判断画面中存在字母 T">有 T</button>
          </div>
        </div>
      `)}render(){const{phase:e}=this.state;switch(e){case"welcome-back-progress":return this.renderWelcomeBackProgress();case"welcome-back":return this.renderWelcomeBack();case"instruction":return this.renderInstruction();case"practice-transition":return this.renderPracticeTransition();case"practice-transition-phase2":return this.renderPracticeTransitionPhase2();case"practice":case"main":return this.renderTask();case"practice-complete":return this.renderPracticeComplete();case"completed":return this.renderCompleted();default:return""}}renderPracticeComplete(){return y.setPracticeCompleted("visual-search"),z.init(),this.renderTask()+z.render()}renderWelcomeBack(){const e=g.INSTRUCTION["visual-search"];return S.render({title:e.title,bgColor:e.bgColor,onMain:"TaskManager.currentTask.startMain()",onPractice:"TaskManager.currentTask.goToPracticePhase2()"})}renderWelcomeBackProgress(){var l,m;const e=g.INSTRUCTION["visual-search"],s=y.getTaskProgress("visual-search")||{},i=((l=s.results)==null?void 0:l.length)||0,d=((m=s.trials)==null?void 0:m.length)||0,{message:n,voiceText:r}=j({completed:i,total:d,showPercent:!0});return S.render({title:e.title,bgColor:e.bgColor,message:n,voiceText:r,primaryButtonText:"我了解规则，继续测评",secondaryButtonText:"重置任务，重新开始",onMain:"TaskManager.currentTask.resumeMain()",onPractice:"TaskManager.currentTask.resetForReplay()"})}renderPracticeTransition(){const e=g.INSTRUCTION["visual-search"];return x.renderPhase1({taskTitle:e.title,bgColor:e.bgColor,onStart:"TaskManager.currentTask.goToPracticePhase2()"})}renderPracticeTransitionPhase2(){const e=g.INSTRUCTION["visual-search"];return x.renderPhase2({bgColor:e.bgColor,ruleText:e.ruleText,ruleTextLines:e.ruleTextLines,onStart:"TaskManager.currentTask.startPractice()",animateRuleToVoice:!0,startDelayAfterRuleMs:0})}renderInstruction(){const e=g.INSTRUCTION["visual-search"];return C.render({title:e.title,bgColor:e.bgColor,iconBg:e.iconBg,iconSvg:e.iconSvg,tutorialConfig:this.getTutorialConfig(),onStart:"TaskManager.currentTask.goToPracticeTransition()"})}getTutorialConfig(){const e=H,s=[{letter:"L",rot:0,x:25,y:30,id:"vs-l1"},{letter:"T",rot:0,x:65,y:25,id:"vs-target"},{letter:"L",rot:90,x:35,y:65,id:"vs-l2"},{letter:"L",rot:180,x:70,y:70,id:"vs-l3"}],i=[{letter:"L",rot:270,x:30,y:28,id:"vs-l1"},{letter:"L",rot:0,x:68,y:32,id:"vs-target"},{letter:"L",rot:90,x:25,y:68,id:"vs-l2"},{letter:"L",rot:180,x:72,y:65,id:"vs-l3"}],d=[{letter:"L",rot:0,x:25,y:30,id:"vs-l1"},{letter:"T",rot:90,x:35,y:65,id:"vs-target"},{letter:"L",rot:90,x:65,y:28,id:"vs-l2"},{letter:"L",rot:180,x:70,y:68,id:"vs-l3"}],n=t=>t.map(a=>`<div id="${a.id}" class="absolute font-bold"
            style="width: 3.8rem; height: 3.8rem; display: flex; align-items: center; justify-content: center;
                   font-size: 3.5rem; line-height: 1; color: #314158; left: ${a.x}%; top: ${a.y}%; transform: translate(-50%, -50%) rotate(${a.rot}deg);">
        ${a.letter}
      </div>`).join(`
`),r=["仔细观察屏幕中出现的所有字母","请判断其中是否有字母T？","有字母T，点击下方【有T】按钮","没有字母T，点击下方【无T】按钮",`字母T被倒放，也属于有字母T，点击下方
【有T】按钮`],l=(t,a,{showCircle:p=!1}={})=>{const c=t.querySelector("#vs-letters"),o=t.querySelector("#vs-circle");c&&(c.innerHTML=n(a)),o&&(o.style.display="none",o.style.transition="none",o.style.opacity="0");const u=a.find(h=>h.letter==="T");o&&u&&(o.style.left=u.x+"%",o.style.top=u.y+"%"),o&&(o.offsetHeight,o.style.transition="all 0.4s ease",p&&u?(o.style.display="block",o.style.opacity="1"):(o.style.display="none",o.style.opacity="0"))},m=(t,a,p,c=null,o=null,u={})=>{const h=t.querySelector("#vs-grid");if(!h){o&&o();return}const T=!!u.keepTargetHighlighted;R.playCorrect();const k=document.createElement("div");k.id="vs-practice-feedback-tutorial",k.style.cssText=`
        position: absolute;
        inset: 0;
        z-index: 20;
        pointer-events: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.2rem;
      `;const B='<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>';if(k.innerHTML=`
        <div style="
          width: 8rem;
          height: 8rem;
          border-radius: 9999px;
          border: 0.3rem solid #fff;
          background: rgba(0,201,80,0.9);
          box-shadow: 0 1.6rem 3rem rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <svg width="4rem" height="4rem" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            ${B}
          </svg>
        </div>
      `,p){const f=t.querySelector("#vs-target");f&&(f.style.color="#fb414a",f.style.textShadow="0 0 1.2rem rgba(251,68,68,0.45)",f.style.transform=(f.style.transform||"")+" scale(1.12)",f.style.zIndex="5")}h.appendChild(k),setTimeout(()=>{if(k.remove(),p&&!T){const f=t.querySelector("#vs-target");f&&(f.style.color="",f.style.textShadow="",f.style.transform=f.style.transform.replace(/ scale\([^)]*\)/,""),f.style.zIndex="")}o&&o()},c||800)};return{renderMockUI:()=>`
        <div class="flex-1 flex flex-col items-center justify-center w-full" style="padding: 1rem;">
          <!-- 分镜文案标签 -->
          <div id="vs-label" style="font-size: 1.6rem; color: rgba(255,255,255,0.7); margin-bottom: 0.8rem; display: none;"></div>
          <!-- 游戏区域（分镜2-4，初始隐藏） -->
          <div id="vs-game-area" style="display: none; flex-direction: column; align-items: center; justify-content: center; width: 100%;">
            <!-- 字母网格 -->
            <div id="vs-grid" class="vs-board relative" style="width: 80%; max-width: 34rem; aspect-ratio: 4/3; margin-bottom: 1rem;">
              <div id="vs-letters">${n(s)}</div>
              <!-- 红圈标记 -->
              <div id="vs-circle" class="absolute rounded-full"
                   style="width: 5.5rem; height: 5.5rem; border: 0.4rem solid #ef4444; opacity: 0; transition: all 0.4s ease; z-index: 2; box-shadow: 0 0 1.2rem rgba(239,68,68,0.5); left: 65%; top: 25%; transform: translate(-50%, -50%);"></div>
            </div>
            <!-- 按钮 -->
            <div class="flex" style="gap: 1.2rem; width: 80%; max-width: 34rem;">
              <button id="vs-btn-no" class="btn-3d btn-3d-purple flex-1" style="font-size: 1.8rem; height: 4.8rem; border-radius: 1.2rem; pointer-events: none;">
                无 T
              </button>
              <button id="vs-btn-has" class="btn-3d btn-3d-blue flex-1" style="font-size: 1.8rem; height: 4.8rem; border-radius: 1.2rem; pointer-events: none;">
                有 T
              </button>
            </div>
          </div>
        </div>
      `,steps:[{delay:4e3,voice:r[0],action:t=>{const a=t.querySelector("#vs-label");a&&(a.innerHTML=`
              <div style="display:flex; flex-direction:column; align-items:center;">
                <span style="font-size:2.8rem; font-weight:700; color:white;line-height:4.2rem;">${r[0]}</span>
              </div>
            `,a.style.display="block",a.style.opacity="1")}},{delay:4200,action:t=>{const a=t.querySelector("#vs-label");a&&(a.style.opacity="0"),e.hideCallout(),e.hidePointer(),l(t,s,{showCircle:!1}),t.querySelector("#vs-game-area").style.display="flex",e.showCallout(r[1],{position:"top",voiceText:r[1],speak:!0})}},{delay:2200,action:t=>{e.hideCallout(),l(t,s,{showCircle:!0}),e.showCallout(r[2],{position:"top",voiceText:r[2],speak:!0})}},{delay:1e3,action:t=>{e.showPointer("#vs-btn-has")}},{delay:1800,action:t=>{e.simulateClick("#vs-btn-has"),m(t,!0,!0,1e3,()=>e.hidePointer(),{keepTargetHighlighted:!0})}},{delay:2200,action:t=>{e.hideCallout(),l(t,d,{showCircle:!0}),e.showCallout(r[4],{position:"top",voiceText:r[4],speak:!0})}},{delay:2200,action:t=>{e.hideCallout(),e.showPointer("#vs-btn-has")}},{delay:2e3,action:t=>{e.simulateClick("#vs-btn-has"),m(t,!0,!0,1e3,()=>e.hidePointer(),{keepTargetHighlighted:!0})}},{delay:2200,action:t=>{l(t,i,{showCircle:!1}),e.showCallout(r[3],{position:"top",voiceText:r[3],speak:!0})}},{delay:1e3,action:t=>{e.hideCallout(),e.showPointer("#vs-btn-no")}},{delay:1800,action:t=>{e.simulateClick("#vs-btn-no"),m(t,!0,!1,1e3,()=>e.hidePointer())}}]}}renderTask(){const{isPractice:e,trials:s,currentTrialIndex:i,practiceCorrectCount:d,practiceCorrectRequired:n,trialPhase:r}=this.state;if(r==="rule-transition")return this.renderRuleTransition();const l=s.length;let m,t,a;return e?(m=d,t=n,a="答对"):(m=i+1,t=l,a="第"),`
      <div class="task-page flex flex-col" style="background:#116b91;">
        ${w.render({isPractice:e,practiceTitle:"练习模式",mainTitle:"正式测评",voiceText:"请判断屏幕中是否有字母T",current:m,total:t,progressPrefix:a,progressSuffix:"题"})}
        <div id="task-content" class="flex-1 flex flex-col"></div>
      </div>
    `}renderCompleted(){return""}renderRuleTransition(){return L.renderSimple(Y)}goToPracticeTransition(){b.stopSpeak(),this.setState({phase:"practice-transition"})}goToPracticePhase2(){b.stopSpeak(),this.setState({phase:"practice-transition-phase2"})}startPractice(){b.stopSpeak(),this._practiceQueue=null,this.setState({phase:"practice",isPractice:!0,trials:[],currentTrialIndex:0,trialPhase:"showing",results:[],practiceCorrectCount:0}),this.setTimeout(()=>{this.enterTrialsAfterRule()},100)}enterTrialsAfterRule(){this.setStateQuiet({trialPhase:"showing"}),this.setTimeout(()=>this.generateAndStartPracticeTrial(),50)}generateAndStartPracticeTrial(){(!this._practiceQueue||this._practiceQueue.length===0)&&this._generatePracticeQueue();const e=this._practiceQueue.shift();this.setStateQuiet({trials:[e],currentTrialIndex:0}),this.startTrial()}_generatePracticeQueue(){const e=[];for(const s of[4,8])for(const i of[!0,!1])e.push({setSize:s,hasTarget:i,items:this._generateSearchItems(s,i)});this._practiceQueue=N.shuffle(e)}_generateSearchItems(e,s){return U(e,s)}startMain(){b.stopSpeak(),A(this);const e=g.VISUAL_SEARCH,s=V.generateVisualSearchTrials(e.setSizes,e.trialsPerSetSize,e.maxConsecutiveSameCondition);this.setState({phase:"main",isPractice:!1,trials:s,currentTrialIndex:0,trialPhase:"showing",results:[]}),this._saveMainProgress(),this.setTimeout(()=>{this.enterMainTrialsAfterRule()},50)}enterMainTrialsAfterRule(){this.setStateQuiet({trialPhase:"showing"});const e=this.container;if(e){const s=e.querySelector(".pt-rule-area");if(s){const i=document.createElement("div");i.id="task-content",i.className="flex-1 flex flex-col",s.replaceWith(i)}}w.showProgress(),this.setTimeout(()=>{this.updateProgress(),this.startTrial()},50)}startTrial(){this.clearTimers(),this.setStateQuiet({trialPhase:"showing"}),P(this),this.updateProgress();const{currentTrialIndex:e,results:s}=this.state;e===0&&((s==null?void 0:s.length)??0)===0?(this.showSearchDisplay(),this.markStimulusVisibleTime()):(this.showBlankScreen(),this.setTimeout(()=>{this.showSearchDisplay(),this.markStimulusVisibleTime()},X))}markStimulusVisibleTime(){requestAnimationFrame(()=>{this.setStateQuiet({trialStartTime:Date.now()})})}showBlankScreen(){const e=this.$("#task-content");e&&(e.innerHTML='<div class="flex-1"></div>')}showPracticeFeedbackByDesign(e,s={},i){this.setStateQuiet({trialPhase:"feedback"}),P(this),window.LockableButton&&window.LockableButton.lockAll();const d=this.$("#vs-search-grid");if(!d){window.LockableButton&&window.LockableButton.unlockAll(),i&&i();return}const n=this.$("#vs-practice-feedback");n&&n.remove();const r=!e,l=r?1700:900,m=!!s.hasTarget,t=this.$('[data-target-t="true"]');r&&m&&t&&(t.style.color="#fb414a",t.style.textShadow="0 0 1.2rem rgba(251, 65, 74, 0.45)",t.style.transform=(t.style.transform||"").replace(/scale\([^)]*\)/,"")+" scale(1.18)",t.style.zIndex="10");const a=document.createElement("div");a.id="vs-practice-feedback",a.style.cssText=`
      position: absolute;
      inset: 0;
      z-index: 20;
      pointer-events: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2.4rem;
    `;const p=e?'<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>':'<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>',c=m?"屏幕中有字母T":"屏幕中没有字母T";a.innerHTML=`
      <div style="
        width: 12rem;
        height: 12rem;
        border-radius: 9999px;
        border: 0.4rem solid #fff;
        background: ${e?"rgba(0,201,80,0.9)":"rgba(251,44,54,0.9)"};
        box-shadow: 0 2.5rem 5rem rgba(0,0,0,0.25);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <svg width="6rem" height="6rem" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          ${p}
        </svg>
      </div>
      ${r?`
        <div style="
          color: #fb414a;
          font-size: 2.4rem;
          font-weight: 600;
          line-height: 3.2rem;
          text-align: center;
          background: #ffffff;
          border: 0.3rem solid #fb414a;
          border-radius: 9999px;
          box-shadow: 0 0.4rem 2.8rem rgba(51, 51, 51, 0.16);
          padding: 1rem 2.4rem;
          white-space: nowrap;
        ">${c}</div>
      `:""}
    `,d.appendChild(a);let o=!1,u=!r,h=!1;const T=()=>{h||!o||!u||(h=!0,a.remove(),t&&(t.style.color="",t.style.textShadow="",t.style.transform=t.style.transform.replace(/ scale\([^)]*\)/,"").replace(/scale\([^)]*\)/,""),t.style.zIndex=""),window.LockableButton&&window.LockableButton.unlockAll(),i&&i())};r&&(b.stopSpeak(),b.speak(c,{onEnd:()=>{u=!0,T()}}),this.setTimeout(()=>{u=!0,T()},15e3)),this.setTimeout(()=>{o=!0,T()},l)}handleResponse(e){const{trials:s,currentTrialIndex:i,trialStartTime:d,results:n,isPractice:r,practiceCorrectCount:l,practiceCorrectRequired:m,trialPhase:t}=this.state;if(t!=="showing")return;this.setStateQuiet({trialPhase:"processing"}),P(this);const a=s[i],p=e===a.hasTarget,c=Date.now()-d;b.triggerHaptic(p?"medium":"light");const o={trialIndex:i,isCorrect:p,reactionTime:c,response:e?"present":"absent",expectedResponse:a.hasTarget?"present":"absent",timestamp:Date.now(),metadata:{setSize:a.setSize,hasTarget:a.hasTarget}},u=i>=s.length-1,h=r?null:F(this,{taskType:"visual-search",reactionTime:c,isCorrect:p,isPractice:r,suppressDisplay:u});if((h==null?void 0:h.action)!==I.RETRY_CURRENT&&this.setStateQuiet({results:[...n,o]}),r)p?R.playCorrect():R.playError(),this.showPracticeFeedbackByDesign(p,{hasTarget:a.hasTarget},()=>{if(p){const T=l+1;this.setStateQuiet({practiceCorrectCount:T}),T>=m?this.setState({phase:"practice-complete"}):(this.updateProgress(),this.generateAndStartPracticeTrial())}else this.generateAndStartPracticeTrial()});else{if((h==null?void 0:h.action)===I.RETRY_CURRENT){this._saveMainProgress(),M(this,{onContinue:()=>this.startTrial(),onReviewRule:()=>this.startTrial()});return}this._saveMainProgress(),this.showTrialTransition(()=>{window.LockableButton&&window.LockableButton.unlockAll(),i<s.length-1?(this.state.currentTrialIndex++,(h==null?void 0:h.action)===I.WARN_BEFORE_NEXT?M(this,{onContinue:()=>this.startTrial(),onReviewRule:()=>this.startTrial()}):this.startTrial()):this.handlePhaseComplete()})}}showTrialTransition(e){e&&e()}showErrorHintOnCurrentTrial(e,s){window.LockableButton&&window.LockableButton.lockAll();const i=e?"屏幕中出现了字母T":"屏幕中没有出现字母T";if(e){const n=this.$('[data-target-t="true"]');n&&(n.style.color="#00c950",n.style.textShadow="0 0 20px rgba(0, 201, 80, 0.8), 0 0 40px rgba(0, 201, 80, 0.4)",n.style.transform=n.style.transform.replace(/scale\([^)]*\)/,"")+" scale(1.3)",n.style.zIndex="10")}const d=this.$("#vs-search-grid");if(d){const n=document.createElement("div");if(n.id="error-hint-bubble",n.style.cssText=`
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateX(calc(100% + 1.5rem)) translateY(-50%);
        background: linear-gradient(135deg, rgba(0, 201, 80, 0.95), rgba(0, 160, 64, 0.95));
        color: white;
        padding: 2rem 2.5rem;
        border-radius: 2rem;
        font-size: 2.4rem;
        font-weight: bold;
        max-width: 22rem;
        box-shadow: 0 4px 20px rgba(0, 201, 80, 0.4);
        z-index: 20;
        animation: bubbleIn 0.3s ease-out;
      `,n.innerHTML=`
        <div style="display: flex; align-items: center; gap: 1rem;">
          <svg width="3rem" height="3rem" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          <span>${i}</span>
        </div>
        <!-- 左侧小三角 -->
        <div style="position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); width: 0; height: 0;
                    border-top: 1rem solid transparent; border-bottom: 1rem solid transparent;
                    border-right: 1rem solid rgba(0, 160, 64, 0.95);"></div>
      `,!document.getElementById("bubble-anim-style")){const r=document.createElement("style");r.id="bubble-anim-style",r.textContent=`
          @keyframes bubbleIn {
            0% { opacity: 0; transform: translateX(calc(100% + 1.5rem + 20px)) translateY(-50%); }
            100% { opacity: 1; transform: translateX(calc(100% + 1.5rem)) translateY(-50%); }
          }
        `,document.head.appendChild(r)}d.appendChild(n)}b.speak(i,{onEnd:()=>{this.setTimeout(()=>{if(e){const r=this.$('[data-target-t="true"]');r&&(r.style.color="",r.style.textShadow="",r.style.zIndex="")}const n=this.$("#error-hint-bubble");n&&n.remove(),window.LockableButton&&window.LockableButton.unlockAll(),s&&s()},500)}}),this.setTimeout(()=>{const n=this.$("#error-hint-bubble");if(n){if(e){const r=this.$('[data-target-t="true"]');r&&(r.style.color="",r.style.textShadow="",r.style.zIndex="")}n.remove(),window.LockableButton&&window.LockableButton.unlockAll(),s&&s()}},4e3)}handlePhaseComplete(){const{isPractice:e}=this.state;e?this.setState({phase:"practice-complete"}):this.finishTask()}restartPractice(){this.startPractice()}_saveMainProgress(){const{trials:e,results:s,startTime:i}=this.state;y.saveTaskProgress("visual-search",{protocolVersion:g.VISUAL_SEARCH.protocolVersion,startTime:i,trials:e,results:s,currentTrialIndex:s.length,responseWarning:O(this)})}resumeMain(){b.stopSpeak(),S.cleanup();const e=y.getTaskProgress("visual-search");if(!K(e)){y.clearTaskProgress("visual-search"),this.startMain();return}const s=Array.isArray(e.results)?e.results:[],i=s.length;if(A(this,e.responseWarning),i>=e.trials.length){this.setStateQuiet({isPractice:!1,trials:e.trials,results:s,startTime:e.startTime||Date.now()}),this.finishTask();return}this.setState({phase:"main",isPractice:!1,trials:e.trials,currentTrialIndex:i,trialPhase:"showing",results:s,startTime:e.startTime||Date.now()}),this.setTimeout(()=>{w.showProgress(),this.updateProgress(),this.startTrial()},50)}resetForReplay(){b.stopSpeak(),S.cleanup(),y.clearTaskProgress("visual-search"),this.goToPracticePhase2()}finishTask(){y.clearTaskProgress("visual-search");const{results:e,startTime:s}=this.state,i=e.filter(c=>c.isCorrect),d=e.length>0?i.length/e.length:0,n=i.length>0?i.reduce((c,o)=>c+o.reactionTime,0)/i.length:0,r=e.map(c=>{var o,u;return{...c,hasTarget:(o=c.metadata)==null?void 0:o.hasTarget,setSize:(u=c.metadata)==null?void 0:u.setSize}}),l=D(r,{minCorrectPresentTrialsPerSetSize:g.VISUAL_SEARCH.minCorrectPresentTrialsPerSetSize}),m=l.slope,t=g.VISUAL_SEARCH.setSizes,a={};for(const c of t){const o=e.filter(h=>h.metadata.setSize===c),u=o.filter(h=>h.isCorrect);a[`setSize${c}Accuracy`]=o.length>0?u.length/o.length:0,a[`setSize${c}MeanRT`]=u.length>0?u.reduce((h,T)=>h+T.reactionTime,0)/u.length:0}const p={taskType:"visual-search",module:"visual-perception",protocolVersion:g.VISUAL_SEARCH.protocolVersion,startTime:s,endTime:Date.now(),trials:e,rawScore:m,metrics:{accuracy:d,meanRT:n,searchSlope:m,searchSlopeDetail:l,...a}};q(this,p),$.onTaskComplete("visual-search",p)}}$.registerTask("visual-search",J);
