import{ac as M,C as N,S as g,c as h,V as w,ad as b,ae as S,af as m,ag as R,e as l,ah as x,ai as k}from"./assessment-ByzqurOv.js";import{b as H}from"./task-resume-BHiCUhCk.js";import{W as f,P as y,i as z,r as T,d as B,a as P,b as E}from"./assessment-xiaoban-guide-CpfD26Ft.js";import{c as C,b as I}from"./practice-trial-seeds-BoPR1Zv0.js";import"./modulepreload-polyfill-B5Qt9EMX.js";const j=h.INSTRUCTION["digit-span"],G=j.ruleText,L="没记住也没关系，点“确定跳过”会跳到下一题，这道题就不算分啦";class A extends N{constructor(){super();const e=g.isPracticeCompleted("digit-span"),t=!!g.getTaskProgress("digit-span-backward");this.state={phase:t?"welcome-back-progress":e?"welcome-back":"instruction",isPractice:!0,trials:[],currentTrialIndex:0,trialPhase:"group-hint",presentingIndex:0,userInput:"",results:[],maxSpan:0,startTime:Date.now(),trialStartTime:0,currentDigit:"",practiceCorrectCount:0,practiceCorrectRequired:h.DIGIT_SPAN.practiceTrials,practiceGroupIndex:0,practiceSeedIndex:0,currentLength:h.DIGIT_SPAN.startLength,currentLengthTrialIndex:0,currentLengthCorrectCount:0,isSkipNoticeOpen:!1}}onMount(){w.preload(L),this.state.phase==="welcome-back"||this.state.phase==="welcome-back-progress"?this.setTimeout(()=>f.init(),100):this.state.phase==="instruction"?this.setTimeout(()=>b.init(),100):this.state.phase==="practice-transition"?this.setTimeout(()=>y.init(),100):this.state.phase==="practice-transition-phase2"&&this.setTimeout(()=>y.initPhase2(),100),z(this,{respondingPhases:["responding"],isStable:e=>["practice","main"].includes(e.state.phase)&&e.state.trialPhase==="responding"&&!e.state.isSkipNoticeOpen&&!e._isSubmitting,isVisible:e=>e.state.trialPhase==="responding",resolveSteps:e=>e.getGuideSteps()})}getGuideSteps(){return[{speechText:"想想刚才看到的数字。"},{elements:()=>this.$("#ds-number-keys"),speechText:"从最后一个开始倒着按。"},{elements:()=>[this.$("#ds-btn-confirm"),this.$("#ds-btn-clear")].filter(Boolean),highlightMode:"sequence",speechText:"输好了点确认，输错了可以点删除重新输。"}]}onUpdate(){this.state.phase==="welcome-back"||this.state.phase==="welcome-back-progress"?this.setTimeout(()=>f.init(),100):this.state.phase==="instruction"?this.setTimeout(()=>b.init(),100):this.state.phase==="practice-transition"?this.setTimeout(()=>y.init(),100):this.state.phase==="practice-transition-phase2"&&this.setTimeout(()=>y.initPhase2(),100),T(this)}onUnmount(){B(this),this.clearTimers(),S.cleanup()}updateProgress(){const{isPractice:e,practiceCorrectCount:t,practiceCorrectRequired:i}=this.state;e&&m.updateProgress({current:t,total:i,prefix:"答对",suffix:"题"})}updateDigitDisplay(e){const t=this.$("#digit-display");t&&(t.textContent=e)}updateInputDisplay(){const e=this.$("#ds-input-display");if(e){const{userInput:t,trials:i,currentTrialIndex:n}=this.state,r=i[n];r&&r.length,t&&t.length>0?e.innerHTML=t.split("").map(a=>`<div class="ds-digit-box">${a}</div>`).join(""):e.innerHTML='<span class="ds-input-placeholder">等待输入....</span>'}this.updateActionButtons()}updateActionButtons(){const{userInput:e}=this.state,t=e&&e.length>0,i=this.$("#ds-btn-clear"),n=this.$("#ds-btn-confirm");i&&(i.disabled=!t,i.style.opacity=t?"1":"0.4"),n&&(n.disabled=!t,n.style.opacity=t?"1":"0.4")}switchToResponding(){const e=this.$("#task-content");e&&(e.innerHTML=this.renderResponding())}switchToPresenting(){const e=this.$("#task-content");e&&(e.innerHTML=this.renderPresenting()),m.showVoicePill()}switchToGroupHint(){const e=this.$("#task-content");e&&(e.innerHTML=this.renderGroupHint()),m.hideVoicePill()}render(){const{phase:e}=this.state;switch(e){case"welcome-back":return this.renderWelcomeBack();case"welcome-back-progress":return this.renderWelcomeBackProgress();case"instruction":return this.renderInstruction();case"practice-transition":return this.renderPracticeTransition();case"practice-transition-phase2":return this.renderPracticeTransitionPhase2();case"practice":case"main":return this.renderTask();case"practice-complete":return this.renderPracticeComplete();case"completed":return this.renderCompleted();default:return""}}renderWelcomeBack(){const e=h.INSTRUCTION["digit-span"];return f.render({title:e.title,bgColor:e.bgColor,onMain:"TaskManager.currentTask.startMain()",onPractice:"TaskManager.currentTask.goToPracticePhase2()"})}renderWelcomeBackProgress(){var a;const e=h.INSTRUCTION["digit-span"],t=g.getTaskProgress("digit-span-backward"),i=((a=t==null?void 0:t.results)==null?void 0:a.length)||0,{message:n,voiceText:r}=H({completed:i,total:0,showPercent:!1});return f.render({title:e.title,message:n,voiceText:r,bgColor:e.bgColor,primaryButtonText:"我了解规则，继续测评",secondaryButtonText:"重置任务，重新开始",onMain:"TaskManager.currentTask.resumeMain()",onPractice:"TaskManager.currentTask.resetForReplay()"})}renderInstruction(){const e=h.INSTRUCTION["digit-span"];return b.render({title:e.title,bgColor:e.bgColor,iconBg:e.iconBg,iconSvg:e.iconSvg,tutorialConfig:this.getTutorialConfig(),onStart:"TaskManager.currentTask.goToPracticeTransition()"})}renderPracticeTransition(){const e=h.INSTRUCTION["digit-span"];return y.renderPhase1({taskTitle:e.title,bgColor:e.bgColor,onStart:"TaskManager.currentTask.goToPracticePhase2()"})}renderPracticeTransitionPhase2(){const e=h.INSTRUCTION["digit-span"];return y.renderPhase2({bgColor:e.bgColor,ruleText:e.ruleText,ruleTextLines:e.ruleTextLines,onStart:"TaskManager.currentTask.startPractice()",animateRuleToVoice:!0,startDelayAfterRuleMs:0})}renderPracticeComplete(){return g.setPracticeCompleted("digit-span"),P.init(),this.renderTask()+P.render()}getTutorialConfig(){const e=R,t=[3,5,7],i="屏幕上即将出现几个数字，请按它们出现的顺序，依次记住",n="现在需要按照数字呈现顺序的相反顺序，将这些数字输入到方框里",r="刚才依次出现的数字是3、5、7",a="那么按相反顺序输入，应该是7、5、3",d="输好了后，需要点击确定按钮",u=o=>`<div class="ds-digit-box" style="width:4.8rem; height:4.8rem; font-size:2.8rem;">${o}</div>`;return{renderMockUI:()=>`
        <div style="width:100%; height:100%; display:flex; flex-direction:column; align-items:center;
                    position:relative; border-radius:1.6rem; padding:1rem 1.5rem; gap:0.4rem;">
          <!-- 引导文案区（分镜1 居中占满，后续场景缩为顶部） -->
          <div id="ds-tut-guide" style="text-align:center; line-height:1.8; display:flex; align-items:center;
                                        justify-content:center; flex:1; width:100%; padding:0 1rem;
                                        opacity:0; transition:opacity 0.4s ease; flex-wrap:wrap;"></div>

          <!-- 数字展示区（分镜2） -->
          <div id="ds-tut-digit-area" style="display:none; flex:1; align-items:center; justify-content:center;">
            <div class="ds-presenting-card">
              <div id="ds-tut-digit" style="font-size:9rem; color:#1d293d; font-family:'Inter',sans-serif; font-weight:900;"></div>
            </div>
          </div>

          <!-- 响应区：输入框 + 数字键盘（分镜3-6） -->
          <div id="ds-tut-respond" style="display:none; flex-direction:column; align-items:center;
                                          gap:1.6rem; width:100%; flex:1.5; justify-content:center;margin-top:3rem;">
            <div class="ds-input-box" style="width:92%; max-width:42rem; height:7rem; display:flex;
                                             align-items:center; justify-content:center;">
              <div id="ds-tut-input-display" style="display:flex; align-items:center; justify-content:center; gap:1rem;">
                <span class="ds-input-placeholder" style="font-size:1.6rem;">等待输入....</span>
              </div>
            </div>
            <div id="ds-tut-numpad" style="display:flex; flex-direction:column; gap:0.8rem; width:92%; max-width:42rem; position:relative;">
              <div style="display:grid; grid-template-columns:repeat(5,1fr); gap:0.8rem;">
                ${[1,2,3,4,5].map(o=>`
                  <button id="ds-tut-key-${o}" class="ds-numkey" style="height:5.5rem; font-size:2.4rem;">${o}</button>
                `).join("")}
              </div>
              <div style="display:grid; grid-template-columns:repeat(5,1fr); gap:0.8rem;">
                ${[6,7,8,9,0].map(o=>`
                  <button id="ds-tut-key-${o}" class="ds-numkey" style="height:5.5rem; font-size:2.4rem;">${o}</button>
                `).join("")}
              </div>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-top:0.4rem;">
                <button id="ds-tut-btn-clear" style="height:5.5rem; font-size:2rem; border-radius:1.2rem;
                        background:rgba(139,92,246,0.85); color:white; border:none; font-weight:600; cursor:pointer;">删除</button>
                <button id="ds-tut-btn-confirm" style="height:5.5rem; font-size:2rem; border-radius:1.2rem;
                        background:rgba(59,130,246,0.85); color:white; border:none; font-weight:600; cursor:pointer;">确定</button>
              </div>
            </div>
          </div>
        </div>
      `,steps:[{delay:5e3,voice:i,action:o=>{const s=o.querySelector("#ds-tut-guide");s.innerHTML=`
            <div style="display:flex; flex-direction:column; align-items:center;">
              <span style="font-size:2.8rem; font-weight:700; color:white;line-height:4.2rem;">屏幕上即将出现几个数字</span>
              <span style="font-size:2.8rem; font-weight:700; color:white;line-height:4.2rem;">请按它们出现的顺序</span>
              <span style="font-size:2.8rem; font-weight:700; color:white;line-height:4.2rem;">依次记住</span>
            </div>
          `,s.style.opacity="1"}},{delay:1500,action:o=>{const s=o.querySelector("#ds-tut-guide");s.style.opacity="0",s.style.flex="0",s.style.minHeight="0",s.style.overflow="hidden",o.querySelector("#ds-tut-digit-area").style.display="flex";const c=o.querySelector("#ds-tut-digit");c.textContent=t[0],c.style.animation="digitPulse 0.4s ease-out"}},{delay:1500,action:o=>{const s=o.querySelector("#ds-tut-digit");s.textContent=t[1],s.style.animation="none",s.offsetWidth,s.style.animation="digitPulse 0.4s ease-out"}},{delay:1500,action:o=>{const s=o.querySelector("#ds-tut-digit");s.textContent=t[2],s.style.animation="none",s.offsetWidth,s.style.animation="digitPulse 0.4s ease-out"}},{delay:6e3,voice:n,action:o=>{o.querySelector("#ds-tut-digit-area").style.display="none",e.showCallout("现在需要按照数字呈现顺序的相反顺序，将这些数字输入到方框里",{position:"top"});const s=o.querySelector("#ds-tut-respond");s.style.display="flex",s.style.opacity="0",s.style.transition="opacity 0.4s ease",setTimeout(()=>{s.style.opacity="1"},100)}},{delay:13e3,action:o=>{e.hideCallout(),setTimeout(()=>{e.showCallout("刚才依次出现的数字是3、5、7，那么按相反顺序输入，应该是7、5、3",{position:"top"})},300);let s=!1;const c=()=>{if(s)return;s=!0;const p=o.querySelector("#ds-tut-input-display");setTimeout(()=>{e.showPointer("#ds-tut-key-7"),setTimeout(()=>{e.simulateClick("#ds-tut-key-7"),p.innerHTML=u("7"),e.hidePointer()},600)},500),setTimeout(()=>{e.showPointer("#ds-tut-key-5"),setTimeout(()=>{e.simulateClick("#ds-tut-key-5"),p.innerHTML=u("7")+u("5"),e.hidePointer()},600)},2500),setTimeout(()=>{e.showPointer("#ds-tut-key-3"),setTimeout(()=>{e.simulateClick("#ds-tut-key-3"),p.innerHTML=u("7")+u("5")+u("3"),e.hidePointer()},600)},4500)};l.stopSpeak(),l.speak(r,{speed:3,onEnd:()=>{l.speak(a,{speed:4,onEnd:()=>c()})}}),setTimeout(()=>c(),12e3)}},{delay:5e3,voice:d,action:o=>{e.hideCallout(),setTimeout(()=>{e.showCallout('输好了后，需要点击"确定"按钮',{position:"top"})},300),setTimeout(()=>{e.showPointer("#ds-tut-btn-confirm"),setTimeout(()=>{e.simulateClick("#ds-tut-btn-confirm"),e.hidePointer(),x.playCorrect();const s=document.getElementById("tutorial-feedback");s&&s.remove();const c=document.createElement("div");c.id="tutorial-feedback",c.style.cssText=`
                position:absolute; inset:-0.2rem; z-index:50;
                display:flex; flex-direction:column; align-items:center; justify-content:center;
                gap:2.4rem; padding:2.4rem 4rem;
                background:rgba(15,23,43,0.6);
                backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
                border-radius:1.2rem; pointer-events:none; overflow:hidden;
              `,c.innerHTML=`
                <div class="animate-scale-in" style="
                  width:10rem; height:10rem; border-radius:50%;
                  display:flex; align-items:center; justify-content:center; flex-shrink:0;
                  background:rgba(0,201,80,0.9); border:4px solid white;
                  box-shadow:0px 25px 50px 0px rgba(0,0,0,0.25);
                ">
                  <svg viewBox="0 0 24 24" fill="white" style="width:5rem; height:5rem;">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
              `,o.appendChild(c),setTimeout(()=>{c.parentNode&&c.remove(),e.hideCallout()},1500)},600)},2500)}}]}}renderTask(){const{isPractice:e,practiceCorrectCount:t,practiceCorrectRequired:i,trialPhase:n}=this.state;if(n==="rule-transition")return this.renderRuleTransition();const r=n==="responding"?"请倒序输入刚才的数字":"请记住数字",a={isPractice:e,practiceTitle:"练习模式",mainTitle:"正式测评",voiceText:r,displayText:r,voiceId:"task-header-speaker",voiceHidden:n==="group-hint"};e&&(a.current=t,a.total=i,a.progressPrefix="答对",a.progressSuffix="题");let d="";return n==="group-hint"?d=this.renderGroupHint():n==="presenting"?d=this.renderPresenting():d=this.renderResponding(),`
      <div class="task-page" style="background: #3e3675;">
        ${m.render(a)}
        <div id="task-content" class="flex-1 flex flex-col">
          ${d}
        </div>
      </div>
    `}renderRuleTransition(){return S.renderSimple(G)}renderGroupHint(){const{isPractice:e,practiceGroupIndex:t,currentLengthTrialIndex:i}=this.state;return`
      <div class="flex-1 flex flex-col items-center justify-center">
        <div class="ds-group-hint-pill fade-in">
          <span class="font-bold" style="font-size: 4rem; color: white; letter-spacing: 0.2rem;">第 ${e?t+1:i+1} 组</span>
        </div>
      </div>
    `}renderPresenting(){const{currentDigit:e}=this.state;return`
      <div class="flex-1 flex flex-col items-center justify-center">
        <div class="ds-presenting-card">
          <div id="digit-display" style="font-size: 12.8rem; color: #1d293d; line-height: 1; font-family: 'Inter', sans-serif; font-weight: 900;">${e}</div>
        </div>
      </div>
    `}renderResponding(){const{userInput:e}=this.state,t=e&&e.length>0,i="TaskManager.currentTask";return`
      <!-- 按照Figma设计：区块间距4.8rem，键盘行间距1rem，操作按钮与键盘区间距4.8rem -->
      <div class="flex-1 flex flex-col items-center justify-center" style="gap: 4.8rem; padding-bottom: 8rem;">
        
        <!-- 输入显示框 -->
        <div class="ds-input-box flex items-center justify-center"
             onclick="return false;">
          <div id="ds-input-display" class="flex items-center justify-center" style="gap: 1.2rem;">
            ${t?e.split("").map(r=>`<div class="ds-digit-box">${r}</div>`).join(""):'<span class="ds-input-placeholder">等待输入....</span>'}
          </div>
        </div>
        
        <!-- 数字键盘区域（带相对定位，用于反馈 overlay） -->
        <!-- 内部分两层：数字键区（gap:1rem）和操作按钮区（与键盘区间距4.8rem） -->
        <div id="ds-numpad-area" style="display: flex; flex-direction: column; gap: 4.8rem; width: 62.6rem; position: relative; overflow: visible;">
          <!-- 数字键区包裹层：两排数字键，行间距1rem -->
          <div id="ds-number-keys" style="display: flex; flex-direction: column; gap: 1rem; border-radius: 1.6rem;">
            <!-- 第一排: 1-5 -->
            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem;">
              ${[1,2,3,4,5].map(r=>`
                <button onclick="Debounce.click('${r}', function() { ${i}.handleInput('${r}') })" 
                        class="ds-numkey"
                        aria-label="数字 ${r}" data-ai-hint="输入数字 ${r}">
                  ${r}
                </button>
              `).join("")}
            </div>
            <!-- 第二排: 6,7,8,9,0 -->
            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem;">
              ${[6,7,8,9,0].map(r=>`
                <button onclick="Debounce.click('${r}', function() { ${i}.handleInput('${r}') })" 
                        class="ds-numkey"
                        aria-label="数字 ${r}" data-ai-hint="输入数字 ${r}">
                  ${r}
                </button>
              `).join("")}
            </div>
          </div>
          <!-- 操作按钮行：删除 / 确认 / 我没记住；加大间距给小伴金环留位 -->
          <div id="ds-action-keys" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.4rem; overflow: visible;">
            <button id="ds-btn-clear" onclick="Debounce.click('clear', function() { ${i}.handleClear() })" 
                  class="btn-3d btn-3d-purple"
                  style="height: 6rem; font-size: 2rem; border-radius: 1.6rem; background: #eff6ff; border-bottom-color: #bacde6; color: #3f516a; opacity: ${t?"1":"0.4"};"
                    ${t?"":"disabled"}
                    aria-label="删除输入" data-ai-hint="删除已输入的数字">
              删除
            </button>
            <button id="ds-btn-confirm" onclick="Debounce.click('confirm', function() { ${i}.handleConfirm() })" 
                    class="btn-3d btn-3d-blue"
                    style="height: 6rem; font-size: 2rem; border-radius: 1.6rem; opacity: ${t?"1":"0.4"};"
                    ${t?"":"disabled"}
                    aria-label="确认答案" data-ai-hint="提交当前输入的数字序列">
              确认
            </button>
            <button id="ds-btn-not-remembered" onclick="Debounce.click('not-remembered', function() { ${i}.handleNotRemembered() })"
                    class="btn-3d btn-3d-purple"
                    style="height: 6rem; font-size: 2rem; border-radius: 1.6rem;"
                    aria-label="我没记住" data-ai-hint="跳过当前题目并记录为未作答">
              我没记住
            </button>
          </div>
        </div>
      </div>
    `}renderCompleted(){const{maxSpan:e}=this.state;return`
      <div class="h-full p-8 flex items-center justify-center">
        <div class="fade-in text-center max-w-2xl">
          <div class="w-32 h-32 mx-auto bg-sm-success rounded-full flex items-center justify-center" style="margin-bottom: 3rem;">
            <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h1 class="font-bold text-sm-text" style="font-size: 4.8rem; margin-bottom: 2rem;">数字倒背任务完成！</h1>
          <p class="text-sm-text-secondary" style="font-size: 2.8rem;">最大广度: ${e}</p>
        </div>
      </div>
    `}_toChineseNum(e){const t=["零","一","二","三","四","五","六","七","八","九","十"];return e<=10?t[e]:e<20?"十"+t[e-10]:e.toString()}goToPracticeTransition(){l.stopSpeak(),this.setState({phase:"practice-transition"})}goToPracticePhase2(){l.stopSpeak(),this.setState({phase:"practice-transition-phase2"})}startPractice(){l.stopSpeak();const e=[C(0)];this.setState({phase:"practice",isPractice:!0,trials:e,currentTrialIndex:0,results:[],practiceCorrectCount:0,practiceGroupIndex:0,practiceSeedIndex:1,trialPhase:"group-hint"}),this.setTimeout(()=>{this.setStateQuiet({trialPhase:"presenting"}),this.startPresenting()},2e3)}generateAndStartPracticeTrial(){const e=this.state.practiceSeedIndex,t=[C(e)];this.setStateQuiet({trials:t,currentTrialIndex:0,trialPhase:"group-hint",practiceSeedIndex:e+1}),this.switchToGroupHint(),this.setTimeout(()=>{this.setStateQuiet({trialPhase:"presenting"}),this.startPresenting()},2e3)}startMain(){l.stopSpeak();const e=h.DIGIT_SPAN.startLength,t=k.generateDigitSpanTrials(e,1);this.setState({phase:"main",isPractice:!1,trials:t,currentTrialIndex:0,results:[],currentLength:e,currentLengthTrialIndex:0,currentLengthCorrectCount:0,maxSpan:0,trialPhase:"group-hint"}),this._saveMainProgress(),this.setTimeout(()=>{this.enterMainTrialsAfterRule()},50)}enterMainTrialsAfterRule(){this.setStateQuiet({trialPhase:"group-hint"});const e=this.container;if(e){const t=e.querySelector(".pt-rule-area");if(t){const i=document.createElement("div");i.id="task-content",i.className="flex-1 flex flex-col",t.replaceWith(i)}}this.switchToGroupHint(),this.setTimeout(()=>{this.setStateQuiet({trialPhase:"presenting"}),this.startPresenting()},2e3)}startMainTrial(){this.clearTimers(),this.setStateQuiet({trialPhase:"group-hint"}),this.switchToGroupHint(),this.setTimeout(()=>{this.setStateQuiet({trialPhase:"presenting"}),this.startPresenting()},2e3)}startPresenting(){const{trials:e,currentTrialIndex:t}=this.state,i=e[t];this.setStateQuiet({presentingIndex:0,userInput:"",trialStartTime:Date.now(),currentDigit:i.digits[0]}),this.state.isPractice||this._saveMainProgress(),this.updateProgress(),this.switchToPresenting(),this.updateDigitDisplay(i.digits[0]),m.updateVoiceText("请记住数字","task-header-speaker"),this.presentNextDigit()}presentNextDigit(){const{trials:e,currentTrialIndex:t,presentingIndex:i}=this.state,n=e[t];this.updateDigitDisplay(n.digits[i]),this.triggerDigitPulse(),this.setTimeout(()=>{i<n.digits.length-1?(this.state.presentingIndex++,this.presentNextDigit()):this.setTimeout(()=>{if(this.setStateQuiet({trialPhase:"responding"}),this.switchToResponding(),m.updateVoiceText("请倒序输入刚才的数字","task-header-speaker"),this.state.isPractice){const r=this.state.trials[this.state.currentTrialIndex];r&&w.preload(I(r))}},500)},h.DIGIT_SPAN.digitDisplayDuration)}triggerDigitPulse(){const e=this.$("#digit-display");e&&(e.classList.remove("digit-pulse"),e.offsetWidth,e.classList.add("digit-pulse"))}handleInput(e){const{trials:t,currentTrialIndex:i,trialPhase:n,userInput:r}=this.state,a=t[i];if(!a||n!=="responding"||r.length>=a.length)return;l.triggerHaptic("light");const d=r+e;this.setStateQuiet({userInput:d}),this.updateInputDisplay()}handleClear(){const{userInput:e}=this.state;!e||e.length===0||(l.triggerHaptic("light"),this.setStateQuiet({userInput:e.slice(0,-1)}),this.updateInputDisplay())}handleConfirm(){const{userInput:e}=this.state;!e||e.length===0||(l.triggerHaptic("medium"),this.submitResponse())}handleDelete(){const{userInput:e}=this.state;!e||e.length===0||(l.triggerHaptic("light"),this.setStateQuiet({userInput:e.slice(0,-1)}),this.updateInputDisplay())}handleNotRemembered(){if(this.state.trialPhase==="responding"){if(l.triggerHaptic("light"),this.state.isPractice){m.stopSpeak("task-header-speaker"),this.setStateQuiet({userInput:""}),this.updateInputDisplay(),this.submitResponse();return}this.setStateQuiet({isSkipNoticeOpen:!0}),T(this),this.showSkipNotice(()=>{this.setStateQuiet({userInput:"",isSkipNoticeOpen:!1}),T(this),this.updateInputDisplay(),this.submitResponse()},()=>{this.setStateQuiet({isSkipNoticeOpen:!1}),T(this)})}}showSkipNotice(e,t){const i=document.createElement("div");i.style.cssText=`
      position: fixed; inset: 0; z-index: 9999;
      display: flex; align-items: center; justify-content: center;
      background: rgba(15,23,43,0.6);
      backdrop-filter: blur(1.6rem); -webkit-backdrop-filter: blur(1.6rem);
    `,i.innerHTML=`
      <div style="width: 64rem; height: 48rem; padding: 4.8rem; border-radius: 3.2rem; background: #fff; box-shadow: 0 2.5rem 5rem rgba(0,0,0,0.25); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4.8rem; text-align: center;">
        <div style="width: 9.6rem; height: 9.6rem; border-radius: 50%; background: #ff8904; border: 0.4rem solid #fff; box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.1), 0 0.4rem 0.6rem rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="24" r="18" stroke="white" stroke-width="4"/><path d="M24 14V26" stroke="white" stroke-width="4" stroke-linecap="round"/><path d="M24 26L31 30" stroke="white" stroke-width="4" stroke-linecap="round"/></svg>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 1.6rem;">
          <h2 style="font-size: 3.6rem; font-weight: 900; color: #1d293d; font-family: 'Source Han Sans CN','PingFang SC',sans-serif; line-height: 1.2; margin: 0;">没记住也没关系</h2>
          <p style="font-size: 2.4rem; font-weight: 700; color: #1d293d; font-family: 'Inter','Noto Sans SC',sans-serif; line-height: 1.4; margin: 0;">点“确定跳过”会跳到下一题，这道题就不算分啦</p>
        </div>
        <div style="display: flex; gap: 2.4rem; width: 52rem;">
          <button id="skip-notice-cancel" class="btn-press" style="flex: 1; min-width: 0; padding: 1.6rem 0; border: none; border-radius: 1.6rem; background: #eff6ff; box-shadow: 0 0.6rem 0 #bacde6; color: #3f516a; font-size: 3.6rem; font-weight: 900; font-family: 'Inter','Noto Sans SC',sans-serif; line-height: 1.4;">我再想想</button>
          <button id="skip-notice-confirm" class="btn-press" style="flex: 1; min-width: 0; padding: 1.6rem 0; border: none; border-radius: 1.6rem; background: #ff6900; box-shadow: 0 0.6rem 0 #be550c; color: #fff; font-size: 3.6rem; font-weight: 900; font-family: 'Inter','Noto Sans SC',sans-serif; line-height: 1.4;">确定跳过</button>
        </div>
      </div>
    `,i.querySelector("#skip-notice-confirm").addEventListener("click",()=>{l.stopSpeak(),i.remove(),e()}),i.querySelector("#skip-notice-cancel").addEventListener("click",()=>{l.stopSpeak(),i.remove(),t()}),document.body.appendChild(i),l.speak(L)}submitResponse(){const{trials:e,currentTrialIndex:t,userInput:i,trialStartTime:n,results:r,maxSpan:a,isPractice:d,practiceCorrectCount:u,practiceCorrectRequired:o}=this.state,s=e[t];if(!s)return;this.setStateQuiet({trialPhase:"processing"}),T(this);const c=i===s.correctAnswer,p=Date.now()-n,$={trialIndex:t,isCorrect:c,reactionTime:p,response:i,expectedResponse:s.correctAnswer,timestamp:Date.now(),metadata:{digitLength:s.length}},D=[...r,$];let v=a;c&&s.length>a&&(v=s.length),l.triggerHaptic(c?"medium":"light"),this.setStateQuiet({results:D,maxSpan:v}),d?this.handlePracticeResult(c,s):this.handleMainTrialResult(c)}handlePracticeResult(e,t){const{practiceCorrectCount:i,practiceCorrectRequired:n,practiceGroupIndex:r}=this.state;if(e)x.playCorrect(),this.showPracticeFeedbackCustom(!0,null,()=>{const a=i+1;this.setStateQuiet({practiceCorrectCount:a,practiceGroupIndex:r+1}),a>=n?this.setState({phase:"practice-complete"}):(this.updateProgress(),this.generateAndStartPracticeTrial())});else{x.playError();const a=I(t);this.showPracticeFeedbackCustom(!1,a,()=>{this.setStateQuiet({practiceGroupIndex:r+1}),this.generateAndStartPracticeTrial()})}}showPracticeFeedbackCustom(e,t,i){this.setStateQuiet({trialPhase:"feedback"}),T(this),window.LockableButton&&window.LockableButton.lockAll();const n=this.$("#ds-numpad-area");if(!n){i&&i();return}const r=document.createElement("div");r.id="practice-feedback-overlay",r.className="ds-feedback-overlay",r.style.inset="-0.4rem",r.style.borderRadius="2rem";const a=e?"#00c950":"rgba(251, 44, 54, 0.9)",d=e?'<svg width="60" height="60" fill="white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>':'<svg width="60" height="60" fill="white" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';let u="";!e&&t&&(u=`
        <p style="font-size: 2.2rem; line-height: 1.8; color: white; text-align: center; margin-top: 2.4rem; padding: 0 4rem;">${t}</p>
      `),r.innerHTML=`
      <div class="flex flex-col items-center justify-center" style="gap: 0;">
        <div class="animate-scale-in" style="width: 12rem; height: 12rem; border-radius: 50%; background: ${a}; border: 0.4rem solid white; display: flex; align-items: center; justify-content: center; box-shadow: 0 2.5rem 5rem rgba(0,0,0,0.25);">
          ${d}
        </div>
        ${u}
      </div>
    `,n.appendChild(r);const o=()=>{const s=document.getElementById("practice-feedback-overlay");s&&s.remove(),window.LockableButton&&window.LockableButton.unlockAll(),i&&i()};if(e)this.setTimeout(o,800);else{const s=document.getElementById("task-header-speaker");s&&(s.classList.remove("is-playing"),s.style.pointerEvents="none",s.style.opacity="0.4");let c=!1;const p=()=>{c||(c=!0,s&&(s.style.pointerEvents="",s.style.opacity=""),o())};t?(l.speak(t,{onEnd:()=>this.setTimeout(p,500),onError:p}),this.setTimeout(p,15e3)):this.setTimeout(p,1200)}}handleMainTrialResult(e){const{currentLength:t,currentLengthTrialIndex:i,maxSpan:n}=this.state;if(e){this.advanceToNextLength();return}if(i<1){this.retryCurrentLength();return}this.setStateQuiet({maxSpan:Math.max(n,t-1)}),this.finishTask()}retryCurrentLength(){const{currentLength:e}=this.state,t=k.generateDigitSpanTrials(e,1);this.setStateQuiet({currentLengthTrialIndex:1,currentLengthCorrectCount:0,trials:t,currentTrialIndex:0}),this.startMainTrial()}advanceToNextLength(){const{currentLength:e,maxSpan:t}=this.state,i=e+1,n=Math.max(t,e);if(i>8){this.setStateQuiet({maxSpan:n}),this.finishTask();return}this.showLevelUpTransition(i,n)}showLevelUpTransition(e,t){m.hideVoicePill();const i=this.$("#task-content");i&&(i.innerHTML=`
        <div class="flex-1 flex flex-col items-center justify-center">
          <div class="text-center fade-in" style="display: flex; flex-direction: column; align-items: center; gap: 2.4rem;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 2.4rem;">
              <div style="width: 4.8rem; height: 4.8rem; background: #2b7fff; border-radius: 0.96rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 0.7273rem 1.0909rem -0.2182rem rgba(0,0,0,0.1), 0 0.2909rem 0.4364rem -0.2909rem rgba(0,0,0,0.1);">
                <svg style="width: 3.2rem; height: 3.2rem;" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M26.6667 13.3333C26.6667 17.8718 23.8323 21.7483 19.837 23.2891H16H12.163C8.16773 21.7483 5.33333 17.8718 5.33333 13.3333C5.33333 7.44227 10.1089 2.66667 16 2.66667C21.8911 2.66667 26.6667 7.44227 26.6667 13.3333Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M19.8381 23.2891L19.3854 28.7221C19.3566 29.0676 19.0677 29.3333 18.721 29.3333H13.2812C12.9345 29.3333 12.6456 29.0676 12.6169 28.7221L12.1641 23.2891" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 11.3333V15.3333L16 13.3333L20 15.3333V11.3333" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <p style="font-size: 3.6rem; line-height: 3.6rem; font-weight: 600; color: white; letter-spacing: 0.04rem;">难度升级</p>
            </div>
            <p style="font-size: 4.8rem; line-height: 7.2rem; font-weight: 700; color: white;">${e} 位数</p>
          </div>
        </div>
      `),this.setTimeout(()=>{const n=k.generateDigitSpanTrials(e,1);this.setStateQuiet({currentLength:e,currentLengthTrialIndex:0,currentLengthCorrectCount:0,trials:n,currentTrialIndex:0,maxSpan:t}),this.startMainTrial()},2e3)}handlePhaseComplete(){const{isPractice:e}=this.state;e?this.setState({phase:"practice-complete"}):this.finishTask()}restartPractice(){this.startPractice()}_saveMainProgress(){const{results:e,maxSpan:t,currentLength:i,currentLengthTrialIndex:n,currentLengthCorrectCount:r,trials:a,currentTrialIndex:d,startTime:u}=this.state;g.saveTaskProgress("digit-span-backward",{version:1,startTime:u,results:e,maxSpan:t,currentLength:i,currentLengthTrialIndex:n,currentLengthCorrectCount:r,trials:a,currentTrialIndex:d})}resumeMain(){l.stopSpeak(),window.WelcomeBack&&f.cleanup();const e=g.getTaskProgress("digit-span-backward");if(!e||!e.trials){this.startMain();return}this.setState({phase:"main",isPractice:!1,trials:e.trials,currentTrialIndex:e.currentTrialIndex,results:e.results,maxSpan:e.maxSpan,currentLength:e.currentLength,currentLengthTrialIndex:e.currentLengthTrialIndex,currentLengthCorrectCount:e.currentLengthCorrectCount,startTime:e.startTime,trialPhase:"group-hint",presentingIndex:0,userInput:""}),this.setTimeout(()=>{e.currentLengthTrialIndex===0&&e.currentLength>h.DIGIT_SPAN.startLength?this.showLevelUpTransition(e.currentLength,e.maxSpan):this.startMainTrial()},50)}resetForReplay(){l.stopSpeak(),window.WelcomeBack&&f.cleanup(),g.clearTaskProgress("digit-span-backward"),this.goToPracticePhase2()}finishTask(){g.clearTaskProgress("digit-span-backward");const{results:e,maxSpan:t,startTime:i,currentLength:n}=this.state,r=e.length>0?e.filter(u=>u.isCorrect).length/e.length:0,a=t,d={taskType:"digit-span-backward",module:"working-memory",startTime:i,endTime:Date.now(),trials:e,rawScore:a,metrics:{maxSpan:a,workingMemoryCapacity:a,accuracy:r,stoppedAtLength:n}};E(this,d),M.onTaskComplete("digit-span-backward",d)}}M.registerTask("digit-span-backward",A);
