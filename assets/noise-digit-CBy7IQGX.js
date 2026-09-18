import{ac as A,C as _,S as v,c as m,ad as L,ae as N,aE as I,af as R,ag as W,e as y,ai as B,V as j,ah as M,aP as q}from"./assessment-mJmy6gOP.js";import{W as P,P as C,i as z,r as $,d as V,a as D,b as H}from"./assessment-xiaoban-guide-CUvx4Mun.js";import{b as Q}from"./task-resume-BHiCUhCk.js";import"./modulepreload-polyfill-B5Qt9EMX.js";const E=m.INSTRUCTION["noise-digit"],U=E.ruleText,X=E.voiceTextShort,K=300;function Y(w){var i;const t=m.NOISE_DIGIT,e=t.snrLevels.length*t.trialsPerLevel;return(w==null?void 0:w.protocolVersion)!==t.protocolVersion||((i=w==null?void 0:w.trials)==null?void 0:i.length)!==e?!1:t.snrLevels.every(r=>w.trials.filter(s=>s.snrLevel===r).length===t.trialsPerLevel)}class J extends _{constructor(){super();const t=v.isPracticeCompleted("noise-digit"),e=!!v.getTaskProgress("noise-digit-recognition");this.state={phase:e?"welcome-back-progress":t?"welcome-back":"instruction",isPractice:!0,trials:[],currentTrialIndex:0,trialPhase:"showing",results:[],startTime:Date.now(),trialStartTime:0,practiceCorrectCount:0,practiceCorrectRequired:m.NOISE_DIGIT.practiceTrials}}onMount(){this.state.phase==="welcome-back"||this.state.phase==="welcome-back-progress"?this.setTimeout(()=>P.init(),100):this.state.phase==="instruction"?this.setTimeout(()=>L.init(),100):this.state.phase==="practice-transition"?this.setTimeout(()=>C.init(),100):this.state.phase==="practice-transition-phase2"&&this.setTimeout(()=>C.initPhase2(),100),z(this,{isStable:t=>["practice","main"].includes(t.state.phase)&&t.state.trialPhase==="showing"&&!!t.$(".nd-canvas canvas"),resolveSteps:t=>t.getGuideSteps()})}getGuideSteps(){return[{elements:()=>this.$(".nd-canvas"),speechText:"请从模糊背景里识别出数字。"},{elements:()=>this.$("#nd-keyboard-area"),speechText:"然后在数字键盘上点出来。"}]}onUpdate(){this.state.phase==="welcome-back"||this.state.phase==="welcome-back-progress"?this.setTimeout(()=>P.init(),100):this.state.phase==="instruction"?this.setTimeout(()=>L.init(),100):this.state.phase==="practice-transition"?this.setTimeout(()=>C.init(),100):this.state.phase==="practice-transition-phase2"&&this.setTimeout(()=>C.initPhase2(),100),$(this)}onUnmount(){V(this),this.clearTimers(),N.cleanup(),I.unlockAll()}updateProgress(){const{trials:t,currentTrialIndex:e,isPractice:i,practiceCorrectCount:r,practiceCorrectRequired:s}=this.state,n=t.length;i?R.updateProgress({current:r,total:s,prefix:"答对",suffix:"题"}):R.updateProgress({current:e+1,total:n,prefix:"第",suffix:"题"})}showStimulusAndKeyboard(){I.unlockAll();const{trials:t,currentTrialIndex:e}=this.state,i=t[e],r=this.$("#task-content");r&&(r.innerHTML=`
        <div class="flex-1 flex flex-col items-center justify-center" style="gap: 3.2rem;">
          <!-- 噪声数字显示区域 -->
          <div class="nd-canvas relative flex items-center justify-center overflow-hidden">
            <canvas id="noise-canvas" width="480" height="320" style="position: absolute; inset: 0; width: 100%; height: 100%;"></canvas>
          </div>
          
          <!-- 数字键盘 -->
          <div id="nd-keyboard-area" style="width: 64rem; border-radius: 1.6rem;">
            <div class="grid grid-cols-5" style="gap: 1.6rem;">
              ${[1,2,3,4,5,6,7,8,9,0].map(s=>`
                <button id="lockable-btn-digit-${s}" class="nd-numkey"
                        onclick="LockableButton.handleClick('lockable-btn-digit-${s}', function() { TaskManager.currentTask.handleResponse(${s}) })"
                        aria-label="数字 ${s}" data-ai-hint="选择数字 ${s}">${s}</button>
              `).join("")}
            </div>
          </div>
        </div>
      `,this.generateCanvasNoise(i.snrLevel,i.digit))}createDigitMask(t,e,i){const r=document.createElement("canvas");r.width=e,r.height=i;const s=r.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,e,i);const n=90;s.font=`bold ${n}px Arial, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.fillStyle="#fff",s.fillText(t.toString(),e/2,i/2);const o=s.getImageData(0,0,e,i).data,d=new Array(e*i);for(let c=0;c<d.length;c++)d[c]=o[c*4]>50;return d}gaussianRandom(){let t,e;do t=Math.random();while(t===0);return e=Math.random(),Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}computeNoiseStdFromSNR(t){const{Lav:e,c:i}=m.NOISE_DIGIT;return i*Math.pow(10,-t/20)*e}generateCanvasNoise(t,e,i=null){const r=i||this.$("#noise-canvas");if(!r)return;const s=r.getContext("2d"),n=r.width,a=r.height,{Lav:o,c:d}=m.NOISE_DIGIT,c=o*(1-d),l=this.computeNoiseStdFromSNR(t),p=this.createDigitMask(e,n,a),u=s.createImageData(n,a),g=u.data;for(let h=0;h<n*a;h++){const T=h*4,f=p[h]?c:o,k=this.gaussianRandom()*l,b=Math.round(Math.min(255,Math.max(0,f+k)));g[T]=b,g[T+1]=b,g[T+2]=b,g[T+3]=255}s.putImageData(u,0,0)}render(){const{phase:t}=this.state;switch(t){case"welcome-back-progress":return this.renderWelcomeBackProgress();case"welcome-back":return this.renderWelcomeBack();case"instruction":return this.renderInstruction();case"practice-transition":return this.renderPracticeTransition();case"practice-transition-phase2":return this.renderPracticeTransitionPhase2();case"practice":case"main":return this.renderTask();case"practice-complete":return this.renderPracticeComplete();case"completed":return this.renderCompleted();default:return""}}renderPracticeComplete(){return v.setPracticeCompleted("noise-digit"),D.init(),this.renderTask()+D.render()}renderWelcomeBack(){const t=m.INSTRUCTION["noise-digit"];return P.render({title:t.title,bgColor:t.bgColor,message:"是否要练习一下，来熟悉规则呢？",voiceText:"是否要练习一下，来熟悉规则呢？",onMain:"TaskManager.currentTask.startMain()",onPractice:"TaskManager.currentTask.goToPracticePhase2()"})}renderWelcomeBackProgress(){var a,o;const t=m.INSTRUCTION["noise-digit"],e=v.getTaskProgress("noise-digit-recognition")||{},i=((a=e.results)==null?void 0:a.length)||0,r=((o=e.trials)==null?void 0:o.length)||0,{message:s,voiceText:n}=Q({completed:i,total:r,showPercent:!0});return P.render({title:t.title,bgColor:t.bgColor,message:s,voiceText:n,primaryButtonText:"我了解规则，继续测评",secondaryButtonText:"重置任务，重新开始",onMain:"TaskManager.currentTask.resumeMain()",onPractice:"TaskManager.currentTask.resetForReplay()"})}renderPracticeTransition(){const t=m.INSTRUCTION["noise-digit"];return C.renderPhase1({taskTitle:t.title,bgColor:t.bgColor,onStart:"TaskManager.currentTask.goToPracticePhase2()"})}renderPracticeTransitionPhase2(){const t=m.INSTRUCTION["noise-digit"];return C.renderPhase2({bgColor:t.bgColor,ruleText:t.ruleText,ruleTextLines:t.ruleTextLines,onStart:"TaskManager.currentTask.startPractice()",animateRuleToVoice:!0})}renderInstruction(){const t=m.INSTRUCTION["noise-digit"];return L.render({title:t.title,bgColor:t.bgColor,iconBg:t.iconBg,iconSvg:t.iconSvg,tutorialConfig:this.getTutorialConfig(),onStart:"TaskManager.currentTask.goToPracticeTransition()"})}getTutorialConfig(){const t=W,e=3,i=m.NOISE_DIGIT.practiceSnrLevel,r=["请从模糊背景图中识别出黑色数字","再点击与背景图中黑色数字一致的数字",`点击下方的${e}即可`],s=a=>{const o=a.querySelector("#nd-tutorial-canvas");o&&this.generateCanvasNoise(i,e,o)},n=(a,o=1e3)=>{const d=a.querySelector("#nd-tutorial-stage");if(!d)return;const c=d.querySelector("#nd-tutorial-correct-feedback");c&&c.remove();const l=window.getComputedStyle(d),p=parseFloat(l.borderTopWidth)||0,u=parseFloat(l.borderRightWidth)||p,g=parseFloat(l.borderBottomWidth)||p,h=parseFloat(l.borderLeftWidth)||p,T=parseFloat(l.borderTopLeftRadius)||0,f=parseFloat(l.borderTopRightRadius)||0,k=parseFloat(l.borderBottomRightRadius)||0,b=parseFloat(l.borderBottomLeftRadius)||0,x=T+Math.max(p,h),F=f+Math.max(p,u),O=k+Math.max(g,u),G=b+Math.max(g,h);M.playCorrect();const S=document.createElement("div");S.id="nd-tutorial-correct-feedback",S.style.cssText=`
        position: absolute;
        top: ${-p}px;
        right: ${-u}px;
        bottom: ${-g}px;
        left: ${-h}px;
        z-index: 6;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: ${x}px ${F}px ${O}px ${G}px;
        overflow: hidden;
        background: rgba(15, 23, 42, 0.32);
        backdrop-filter: blur(0.8rem);
        -webkit-backdrop-filter: blur(0.8rem);
      `,S.innerHTML=`
        <div style="
          width: 8.8rem;
          height: 8.8rem;
          border-radius: 9999px;
          border: 0.3rem solid #fff;
          background: rgba(0,201,80,0.9);
          box-shadow: 0 2rem 4rem rgba(0,0,0,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <svg width="4.6rem" height="4.6rem" viewBox="0 0 24 24" fill="#fff" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>
      `,d.appendChild(S),setTimeout(()=>{S.parentNode&&S.remove()},o)};return{renderMockUI:()=>`
        <div class="flex-1 flex flex-col items-center justify-center w-full" style="padding: 0.5rem;">
          <!-- 分镜文案 -->
          <div id="nd-label" style="font-size: 1.6rem; color: rgba(255,255,255,0.7); margin-bottom: 0.8rem;"></div>
          
          <!-- 噪声数字显示 -->
          <div id="nd-tutorial-stage" class="relative flex items-center justify-center"
               style="width: 80%; max-width: 36rem; aspect-ratio: 3/2; background: #000; border: 0.4rem solid #1e2939; border-radius: 1.6rem; overflow: hidden; margin-bottom: 1rem; flex-shrink: 1; min-height: 0; box-shadow: 0 2.5rem 5rem -1.2rem rgba(0,0,0,0.25);">
            <canvas id="nd-tutorial-canvas" width="480" height="320" style="width: 100%; height: 100%;"></canvas>
            
            <!-- 红圈标记 -->
            <div id="nd-circle" class="absolute rounded-full" 
                 style="width: 8rem; height: 8rem; border: 0.4rem solid #ef4444; opacity: 0; transition: opacity 0.4s ease; z-index: 2; box-shadow: 0 0 1.5rem rgba(239,68,68,0.5);"></div>
          </div>
          
          <!-- 数字键盘（初始隐藏） -->
          <div id="nd-keyboard" style="max-width: 36rem; width: 80%; flex-shrink: 0; display: none;">
            <div class="grid grid-cols-5" style="gap: 0.6rem;">
              ${[1,2,3,4,5,6,7,8,9,0].map(a=>`
                <button id="nd-key-${a}" class="nd-numkey" style="font-size: 1.8rem; height: 4rem;">${a}</button>
              `).join("")}
            </div>
          </div>
        </div>
      `,steps:[{delay:4e3,action:a=>{s(a),t.hideCallout(),t.showCallout(r[0],{position:"top",speak:!0})}},{delay:4e3,action:a=>{const o=a.querySelector("#nd-keyboard");o&&(o.style.display="block"),a.querySelector("#nd-circle").style.opacity="1",t.hideCallout(),t.showCallout(r[1],{position:"top",speak:!0})}},{delay:5e3,action:a=>{t.hideCallout(),t.showCallout(r[2],{position:"top",speak:!0}),setTimeout(()=>{t.showPointer(`#nd-key-${e}`)},1e3),setTimeout(()=>{t.simulateClick(`#nd-key-${e}`),n(a,1e3),t.hidePointer()},2200),setTimeout(()=>{t.hideCallout(),t.complete()},3500)}}]}}renderTask(){const{isPractice:t,trials:e,currentTrialIndex:i,practiceCorrectCount:r,practiceCorrectRequired:s,trialPhase:n}=this.state;if(n==="rule-transition")return this.renderRuleTransition();const a=e.length;let o,d,c;return t?(o=r,d=s,c="答对"):(o=i+1,d=a,c="第"),`
      <div class="task-page flex flex-col" style="background:#283257;">
        ${R.render({isPractice:t,practiceTitle:"练习模式",mainTitle:"正式测评",voiceText:X,current:o,total:d,progressPrefix:c,progressSuffix:"题"})}
        <div id="task-content" class="flex-1 flex flex-col"></div>
      </div>
    `}renderCompleted(){const{results:t}=this.state;return`
      <div class="task-page flex items-center justify-center" style="background:#283257;">
        <div class="fade-in text-center max-w-2xl">
          <div class="rounded-full flex items-center justify-center" style="width:12.8rem;height:12.8rem;margin:0 auto 3rem;background:rgba(0,201,80,0.2);">
            <svg style="width:6.4rem;height:6.4rem;" fill="#00c950" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h1 class="font-bold" style="font-size: 4.8rem; margin-bottom: 2rem; color: white;">噪声数字识别完成！</h1>
          <p style="font-size: 2.8rem; color: rgba(255,255,255,0.7);">正确率: ${(t.filter(i=>i.isCorrect).length/t.length*100).toFixed(1)}%</p>
        </div>
      </div>
    `}renderRuleTransition(){return N.renderSimple(U)}goToPracticeTransition(){y.stopSpeak(),this.setState({phase:"practice-transition"})}goToPracticePhase2(){y.stopSpeak(),this.setState({phase:"practice-transition-phase2"})}startPractice(){y.stopSpeak(),I.unlockAll(),this.setState({phase:"practice",isPractice:!0,trials:[],currentTrialIndex:0,trialPhase:"showing",results:[],practiceCorrectCount:0}),this.setTimeout(()=>{this.enterTrialsAfterRule()},100)}enterTrialsAfterRule(){this.setState({trialPhase:"showing"}),this.setTimeout(()=>this.generateAndStartPracticeTrial(),50)}generateAndStartPracticeTrial(){const t=m.NOISE_DIGIT,e=B.generateNoiseDigitTrials([t.practiceSnrLevel],1);this.setStateQuiet({trials:e,currentTrialIndex:0}),this.startTrial()}showHintOnCurrentThenNewTrial(){const{trials:t,currentTrialIndex:e}=this.state,i=t[e].digit;window.LockableButton&&window.LockableButton.lockAll(),this.showAnswerHintOnCurrentTrial(i,()=>{const r=this.$("#hint-overlay");r&&r.remove();const s=this.$(`#lockable-btn-digit-${i}`);s&&(s.style.background="",s.style.boxShadow=""),window.LockableButton&&window.LockableButton.unlockAll(),this.generateAndStartPracticeTrial()})}showAnswerHintOnCurrentTrial(t,e){const i=this.$("#task-content .relative");if(!i){e&&e();return}const r=document.createElement("canvas");r.id="hint-overlay",r.width=480,r.height=320,r.style.cssText="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;",i.appendChild(r);const s=`lockable-btn-digit-${t}`,n=this.$(`#${s}`);if(n&&(n.style.background="rgba(0, 201, 80, 0.4)",n.style.boxShadow="0 0 20px rgba(0, 201, 80, 0.6)"),!this.$("#hint-shake-style")){const a=document.createElement("style");a.id="hint-shake-style",a.textContent=`
        @keyframes hint-shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .hint-button-shake {
          animation: hint-shake 0.5s ease-in-out infinite;
        }
      `,document.head.appendChild(a)}this.animateGreenReveal(t,2e3,e)}animateGreenReveal(t,e,i){const r=this.$("#hint-overlay");if(!r){i&&i();return}const s=r.getContext("2d"),n=r.width,a=r.height,o=this.createDigitMask(t,n,a),d=Date.now(),c=e*.7,l=()=>{const p=Date.now()-d,u=Math.min(1,p/c);s.clearRect(0,0,n,a);const g=Math.floor(u*a),h=s.createImageData(n,a),T=h.data;for(let f=0;f<a;f++)for(let k=0;k<n;k++){const b=f*n+k,x=b*4;o[b]&&f<=g&&(T[x]=0,T[x+1]=201,T[x+2]=80,T[x+3]=200)}s.putImageData(h,0,0),p<e?requestAnimationFrame(l):i&&i()};l()}startMain(){y.stopSpeak(),I.unlockAll();const t=m.NOISE_DIGIT,e=B.generateNoiseDigitTrials(t.snrLevels,t.trialsPerLevel);this.setState({phase:"main",isPractice:!1,trials:e,currentTrialIndex:0,trialPhase:"showing",results:[]}),this._saveMainProgress(),this.setTimeout(()=>{this.enterMainTrialsAfterRule()},50)}enterMainTrialsAfterRule(){this.setStateQuiet({trialPhase:"showing"});const t=this.container;if(t){const e=t.querySelector(".pt-rule-area");if(e){const i=document.createElement("div");i.id="task-content",i.className="flex-1 flex flex-col",e.replaceWith(i)}}R.showProgress(),this.setTimeout(()=>{this.updateProgress(),this.startTrial()},50)}startTrial(){var n;this.clearTimers(),this.setStateQuiet({trialPhase:"showing"}),$(this),this.updateProgress();const{currentTrialIndex:t,results:e,trials:i,isPractice:r}=this.state;if(r){const a=(n=i[t])==null?void 0:n.digit;Number.isFinite(a)&&j.preload(`背景图中数字为${a}，所以应该点击数字${a}`)}t===0&&((e==null?void 0:e.length)??0)===0?(this.setStateQuiet({trialStartTime:Date.now()}),this.showStimulusAndKeyboard()):(this.showBlankScreen(),this.setTimeout(()=>{this.setStateQuiet({trialStartTime:Date.now()}),this.showStimulusAndKeyboard()},K))}showBlankScreen(){const t=this.$("#task-content");t&&(t.innerHTML='<div class="flex-1"></div>')}showPracticeFeedbackByDesign(t,e={},i){this.setStateQuiet({trialPhase:"feedback"}),$(this),window.LockableButton&&window.LockableButton.lockAll();const r=this.$(".nd-canvas");if(!r){window.LockableButton&&window.LockableButton.unlockAll(),i&&i();return}const s=this.$("#nd-practice-feedback");s&&s.remove();const n=!t,a=window.getComputedStyle(r),o=parseFloat(a.borderTopWidth)||0,d=parseFloat(a.borderRightWidth)||o,c=parseFloat(a.borderBottomWidth)||o,l=parseFloat(a.borderLeftWidth)||o,p=a.borderRadius||"1.6rem",u=document.createElement("div");u.id="nd-practice-feedback",u.style.cssText=`
      position: absolute;
      /* 边框补偿：覆盖到噪声区边界，避免底部出现视觉缝隙 */
      top: ${-o}px;
      right: ${-d}px;
      bottom: ${-c}px;
      left: ${-l}px;
      z-index: 20;
      pointer-events: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.8rem;
      border-radius: ${p};
      overflow: hidden;
      background: rgba(15, 23, 42, 0.32);
      backdrop-filter: blur(0.8rem);
      -webkit-backdrop-filter: blur(0.8rem);
    `;const g=t?'<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>':'<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>',h=e.correctDigit,T=Number.isFinite(h)?`背景图中数字为 ${h}，<br>所以应该点击数字 ${h}`:"请根据背景图中的数字作答";u.innerHTML=`
      <div style="
        width: 12rem;
        height: 12rem;
        border-radius: 9999px;
        border: 0.4rem solid #fff;
        background: ${t?"rgba(0,201,80,0.9)":"rgba(251,44,54,0.9)"};
        box-shadow: 0 2.5rem 5rem rgba(0,0,0,0.25);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <svg width="6rem" height="6rem" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          ${g}
        </svg>
      </div>
      ${n?`
        <div style="
          color: #fff;
          font-size: 3rem;
          font-weight: 600;
          line-height: 1.35;
          text-align: center;
          text-shadow: 0 0.4rem 1.2rem rgba(0,0,0,0.35);
        ">${T}</div>
      `:""}
    `,r.appendChild(u);const f=()=>{u.parentNode&&u.remove(),window.LockableButton&&window.LockableButton.unlockAll(),i&&i()};if(!n){this.setTimeout(f,900);return}const k=Number.isFinite(h)?`背景图中数字为${h}，所以应该点击数字${h}`:"请根据背景图中的数字作答";let b=!1;const x=()=>{b||(b=!0,f())};y.speak(k,{onEnd:()=>{this.setTimeout(x,300)}}),this.setTimeout(x,15e3)}handleResponse(t){const{trials:e,currentTrialIndex:i,trialStartTime:r,results:s,isPractice:n,practiceCorrectCount:a,practiceCorrectRequired:o,trialPhase:d}=this.state;if(d!=="showing")return;this.setStateQuiet({trialPhase:"processing"}),$(this);const c=e[i],l=t===c.digit,p=Date.now()-r;y.triggerHaptic(l?"medium":"light");const u={trialIndex:i,isCorrect:l,reactionTime:p,response:t,expectedResponse:c.digit,timestamp:Date.now(),metadata:{snrLevel:c.snrLevel,snrIndex:c.snrIndex}};this.setStateQuiet({results:[...s,u]}),n?(l?M.playCorrect():M.playError(),this.showPracticeFeedbackByDesign(l,{correctDigit:c.digit},()=>{if(l){const g=a+1;this.setStateQuiet({practiceCorrectCount:g}),g>=o?this.setState({phase:"practice-complete"}):(this.updateProgress(),this.generateAndStartPracticeTrial())}else this.generateAndStartPracticeTrial()})):(this._saveMainProgress(),this.showTrialTransition(()=>{if(I.unlockAll(),i<e.length-1){const g=i+1;this.state.currentTrialIndex=g,this.startTrial()}else this.handlePhaseComplete()}))}showTrialTransition(t){t&&t()}handlePhaseComplete(){const{isPractice:t}=this.state;t?this.setState({phase:"practice-complete"}):this.finishTask()}restartPractice(){this.startPractice()}_saveMainProgress(){const{trials:t,results:e,startTime:i}=this.state;v.saveTaskProgress("noise-digit-recognition",{protocolVersion:m.NOISE_DIGIT.protocolVersion,startTime:i,trials:t,results:e,currentTrialIndex:e.length})}resumeMain(){y.stopSpeak(),P.cleanup();const t=v.getTaskProgress("noise-digit-recognition");if(!Y(t)){v.clearTaskProgress("noise-digit-recognition"),this.startMain();return}const e=Array.isArray(t.results)?t.results:[],i=e.length;if(i>=t.trials.length){this.setStateQuiet({isPractice:!1,trials:t.trials,results:e,startTime:t.startTime||Date.now()}),this.finishTask();return}this.setState({phase:"main",isPractice:!1,trials:t.trials,currentTrialIndex:i,trialPhase:"showing",results:e,startTime:t.startTime||Date.now()}),this.setTimeout(()=>{R.showProgress(),this.updateProgress(),this.startTrial()},50)}resetForReplay(){y.stopSpeak(),P.cleanup(),v.clearTaskProgress("noise-digit-recognition"),this.goToPracticePhase2()}finishTask(){v.clearTaskProgress("noise-digit-recognition");const{results:t,startTime:e}=this.state,i=t.filter(a=>a.isCorrect),r=t.length>0?i.length/t.length:0,s=q(t,6e4,m.NOISE_DIGIT.thresholdTarget),n={taskType:"noise-digit-recognition",module:"visual-perception",protocolVersion:m.NOISE_DIGIT.protocolVersion,startTime:e,endTime:Date.now(),trials:t,rawScore:s.negSNRThreshold,metrics:{accuracy:r,thresholdTarget:s.thresholdTarget,snr75:s.snrThreshold,negSNR75:s.negSNRThreshold,logisticX0:s.x0,logisticK:s.k,lowQuality:s.lowQuality,qualityWarnings:s.qualityWarnings,dataPoints:s.dataPoints}};H(this,n),A.onTaskComplete("noise-digit-recognition",n)}}A.registerTask("noise-digit-recognition",J);
