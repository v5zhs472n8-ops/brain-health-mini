import{ac as D,C as O,S as m,c as h,V as k,ad as x,ae as w,af as p,ag as L,e as u,ah as v,ai as P}from"./assessment-DenQRj50.js";import{b as H}from"./task-resume-BHiCUhCk.js";import{W as g,P as f,i as G,r as y,d as j,a as C,b as z}from"./assessment-xiaoban-guide-D6ybPGXP.js";import{e as I,f as S}from"./practice-trial-seeds-BoPR1Zv0.js";import"./modulepreload-polyfill-B5Qt9EMX.js";const q=h.INSTRUCTION["running-memory"],U=q.ruleText,N="请记住数字",Q="请输入最后出现的3个数字",M="难度升级   接下来每一组将会出现更多数字，请努力记住",R="再坚持一下！还剩3道题，加油！",E="没记住也没关系，我们将跳过本道题继续下一道，这道题就不算分啦";let _=!1;class F extends O{constructor(){super();const e=m.isPracticeCompleted("running-memory"),t=!!m.getTaskProgress("running-memory");this.state={phase:t?"welcome-back-progress":e?"welcome-back":"instruction",isPractice:!0,trials:[],currentTrialIndex:0,trialPhase:"presenting",presentingIndex:0,userInput:"",results:[],startTime:Date.now(),practiceCorrectCount:0,practiceCorrectRequired:h.RUNNING_MEMORY.practiceTrials,practiceGroupIndex:0,practiceSeedIndex:0,isSkipNoticeOpen:!1}}onMount(){k.preload(E),this.state.phase==="welcome-back"||this.state.phase==="welcome-back-progress"?this.setTimeout(()=>g.init(),100):this.state.phase==="instruction"?this.setTimeout(()=>x.init(),100):this.state.phase==="practice-transition"?this.setTimeout(()=>f.init(),100):this.state.phase==="practice-transition-phase2"&&this.setTimeout(()=>f.initPhase2(),100),G(this,{respondingPhases:["responding"],isStable:e=>["practice","main"].includes(e.state.phase)&&e.state.trialPhase==="responding"&&!e.state.isSkipNoticeOpen,isVisible:e=>e.state.trialPhase==="responding",resolveSteps:e=>e.getGuideSteps()})}getGuideSteps(){return[{speechText:"想想最后看到的三个数字。"},{elements:()=>this.$("#rm-number-keys"),speechText:"按它们呈现的顺序，依次按键盘。"},{elements:()=>[this.$("#rm-btn-confirm"),this.$("#rm-btn-clear")].filter(Boolean),highlightMode:"sequence",speechText:"输好了点确认，输错了可以点删除重新输。"}]}onUpdate(){this.state.phase==="welcome-back"||this.state.phase==="welcome-back-progress"?this.setTimeout(()=>g.init(),100):this.state.phase==="instruction"?this.setTimeout(()=>x.init(),100):this.state.phase==="practice-transition"?this.setTimeout(()=>f.init(),100):this.state.phase==="practice-transition-phase2"&&this.setTimeout(()=>f.initPhase2(),100),y(this)}onUnmount(){j(this),this.clearTimers(),w.cleanup()}updateProgress(){const{trials:e,currentTrialIndex:t,isPractice:i,practiceCorrectCount:r,practiceCorrectRequired:s}=this.state;if(e.length,i)p.updateProgress({current:r,total:s,prefix:"答对",suffix:"题"});else{const{current:l,total:d}=this._getPhaseProgress(t);p.updateProgress({current:l,total:d,prefix:"第",suffix:"题"})}}updateDigitDisplay(e){const t=this.$("#digit-display");t&&(t.textContent=e)}updateInputDisplay(){const e=document.getElementById("input-display-wrapper");if(e){const t=h.RUNNING_MEMORY.recallCount;e.innerHTML=this._renderInputDisplay(this.state.userInput,t)}}switchToPresenting(){p.showVoicePill(),p.updateVoiceText(N,"task-header-speaker");const e=this.$("#task-content");e&&(e.innerHTML=`
        <div class="flex-1 flex flex-col items-center justify-center">
          <div class="rm-digit-card" style="display: flex; align-items: center; justify-content: center;">
            <span id="digit-display" style="font-size: 12.8rem; color: #1d293d; line-height: 1; font-family: 'Inter', sans-serif; font-weight: 900;"></span>
          </div>
        </div>
      `)}switchToResponding(){p.showVoicePill(),p.updateVoiceText(Q,"task-header-speaker");const{userInput:e}=this.state,t=e&&e.length>0,i=e&&e.length===s,r="TaskManager.currentTask",s=h.RUNNING_MEMORY.recallCount,l=this._renderInputDisplay(e,s),d=this.$("#task-content");d&&(d.innerHTML=`
        <div class="flex-1 flex flex-col items-center justify-center" style="gap: 4.8rem;">
          
          <!-- 输入显示区域 -->
          <div class="ds-input-box flex items-center justify-center"
               onclick="return false;">
            <div id="input-display-wrapper" style="display: flex; align-items: center; justify-content: center; gap: 1.2rem;">
              ${l}
            </div>
          </div>
          
          <!-- 键盘+按钮容器（用于反馈覆盖定位） -->
          <!-- 按照Figma设计：内部分两层，数字键区（gap:1rem）与操作按钮区间距4.8rem -->
          <div id="rm-keyboard-area" style="display: flex; flex-direction: column; gap: 4.8rem; width: 62.6rem; position: relative; overflow: visible;">
            <!-- 数字键区包裹层：两排数字键，行间距1rem；id 供小伴分区高亮 -->
            <div id="rm-number-keys" style="display: flex; flex-direction: column; gap: 1rem; border-radius: 1.6rem;">
              <!-- 数字键盘第一排（5列布局） -->
              <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem;">
                ${[1,2,3,4,5].map(o=>`
                  <button onclick="Debounce.click('${o}', function() { ${r}.handleInput('${o}') })"
                          class="ds-numkey"
                          aria-label="数字 ${o}" data-ai-hint="输入数字 ${o}">
                    ${o}
                  </button>
                `).join("")}
              </div>
              <!-- 数字键盘第二排 -->
              <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem;">
                ${[6,7,8,9,0].map(o=>`
                  <button onclick="Debounce.click('${o}', function() { ${r}.handleInput('${o}') })"
                          class="ds-numkey"
                          aria-label="数字 ${o}" data-ai-hint="输入数字 ${o}">
                    ${o}
                  </button>
                `).join("")}
              </div>
            </div>
            <!-- 操作按钮行：删除 / 确认 / 我没记住；加大间距给小伴金环留位 -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.4rem; overflow: visible;">
              <button id="rm-btn-clear" onclick="Debounce.click('clear', function() { ${r}.handleClear() })"
                      class="btn-3d btn-3d-purple"
                      style="height: 6rem; font-size: 2rem; border-radius: 1.6rem; background: #eff6ff; border-bottom-color: #bacde6; color: #3f516a; opacity: ${t?"1":"0.4"};"
                      ${t?"":"disabled"}
                      aria-label="删除输入" data-ai-hint="清除已输入的数字">
                删除
              </button>
              <button id="rm-btn-confirm" onclick="Debounce.click('confirm', function() { ${r}.handleConfirm() })"
                      class="btn-3d btn-3d-blue"
                      style="height: 6rem; font-size: 2rem; border-radius: 1.6rem; opacity: ${i?"1":"0.4"};"
                      ${i?"":"disabled"}
                      aria-label="确认答案" data-ai-hint="提交当前输入的数字序列">
                确认
              </button>
              <button id="rm-btn-not-remembered" onclick="Debounce.click('not-remembered', function() { ${r}.handleNotRemembered() })"
                      class="btn-3d btn-3d-purple"
                      style="height: 6rem; font-size: 2rem; border-radius: 1.6rem;"
                      aria-label="我没记住" data-ai-hint="跳过当前题目并记录为未作答">
                我没记住
              </button>
            </div>
          </div>
        </div>
      `)}_renderInputDisplay(e,t){return!e||e.length===0?'<span style="font-size: 2.8rem; color: rgba(255,255,255,0.5); font-weight: 400;">等待输入...</span>':e.split("").map(i=>`
      <div style="width: 6.4rem; height: 6.4rem; background: white; border-radius: 1.4rem;
                  display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
        <span style="font-size: 3.6rem; font-weight: 900; color: #1d293d; line-height: 1;">${i}</span>
      </div>
    `).join("")}updateActionButtons(){const{userInput:e}=this.state,t=h.RUNNING_MEMORY.recallCount,i=e&&e.length>0,r=e&&e.length===t,s=document.getElementById("rm-btn-clear"),l=document.getElementById("rm-btn-confirm");s&&(s.disabled=!i,s.style.opacity=i?"1":"0.4"),l&&(l.disabled=!r,l.style.opacity=r?"1":"0.4")}render(){const{phase:e}=this.state;switch(e){case"welcome-back":return this.renderWelcomeBack();case"welcome-back-progress":return this.renderWelcomeBackProgress();case"instruction":return this.renderInstruction();case"practice-transition":return this.renderPracticeTransition();case"practice-transition-phase2":return this.renderPracticeTransitionPhase2();case"practice":case"main":return this.renderTask();case"practice-complete":return this.renderPracticeComplete();case"main-difficulty-upgrade":return this.renderDifficultyUpgradePrompt();case"main-endurance-prompt":return this.renderEndurancePrompt();case"completed":return this.renderCompleted();default:return""}}renderPracticeComplete(){return m.setPracticeCompleted("running-memory"),C.init(),this.renderTask()+C.render()}renderWelcomeBack(){const e=h.INSTRUCTION["running-memory"];return g.render({title:e.title,bgColor:e.bgColor,onMain:"TaskManager.currentTask.startMain()",onPractice:"TaskManager.currentTask.goToPracticePhase2()"})}renderWelcomeBackProgress(){var d,o;const e=h.INSTRUCTION["running-memory"],t=m.getTaskProgress("running-memory"),i=((d=t==null?void 0:t.results)==null?void 0:d.length)||0,r=((o=t==null?void 0:t.trials)==null?void 0:o.length)||h.RUNNING_MEMORY.mainTrials,{message:s,voiceText:l}=H({completed:i,total:r,showPercent:!0});return g.render({title:e.title,message:s,voiceText:l,bgColor:e.bgColor,primaryButtonText:"我了解规则，继续测评",secondaryButtonText:"重置任务，重新开始",onMain:"TaskManager.currentTask.resumeMain()",onPractice:"TaskManager.currentTask.resetForReplay()"})}renderPracticeTransition(){const e=h.INSTRUCTION["running-memory"];return f.renderPhase1({taskTitle:e.title,bgColor:e.bgColor,onStart:"TaskManager.currentTask.goToPracticePhase2()"})}renderPracticeTransitionPhase2(){const e=h.INSTRUCTION["running-memory"];return f.renderPhase2({bgColor:e.bgColor,ruleText:e.ruleText,ruleTextLines:e.ruleTextLines,onStart:"TaskManager.currentTask.startPractice()",animateRuleToVoice:!0,startDelayAfterRuleMs:0})}renderInstruction(){const e=h.INSTRUCTION["running-memory"];return x.render({title:e.title,bgColor:e.bgColor,iconBg:e.iconBg,iconSvg:e.iconSvg,tutorialConfig:this.getTutorialConfig(),onStart:"TaskManager.currentTask.goToPracticeTransition()"})}getTutorialConfig(){const e=L,t=[6,2,8,5],i="屏幕上即将出现几个数字，请记住它们",r="现在，需要将最后出现的3个数字，按出现的顺序，依次输入到方框里",s="刚才依次出现的数字是6、2、8、5",l="那么输入最后3个数字，应该输入2、8、5",d="输好了后，需要点击确定按钮",o=a=>`
      <div style="width: 4.8rem; height: 4.8rem; background: white; border-radius: 1rem;
                  display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
        <span style="font-size: 2.8rem; font-weight: 900; color: #1d293d; line-height: 1;">${a}</span>
      </div>`;return{renderMockUI:()=>`
        <div style="width:100%; height:100%; display:flex; flex-direction:column; align-items:center;
                    position:relative; border-radius:1.6rem; padding:1rem 1.5rem; gap:0.4rem;">
          <!-- 引导文案区（参考数字倒背：分镜1居中占满，后续缩为顶部） -->
          <div id="rm-guide" style="text-align:center; line-height:1.8; display:flex; align-items:center;
                                    justify-content:center; flex:1; width:100%; padding:0 1rem;
                                    opacity:0; transition:opacity 0.4s ease; flex-wrap:wrap;"></div>

          <!-- 数字展示区（分镜2-5，白色卡片背景，参考数字倒背样式） -->
          <div id="rm-digit-area" style="display:none; flex:1; align-items:center; justify-content:center;">
            <div class="ds-presenting-card">
              <div id="rm-digit" style="font-size:9rem; color:#1d293d; font-family:'Inter',sans-serif; font-weight:900;"></div>
            </div>
          </div>

          <!-- 响应区：回忆输入框 + 数字键盘（参考数字倒背布局，居中对齐） -->
          <div id="rm-respond" style="display:none; flex-direction:column; align-items:center;
                                      gap:1.6rem; width:100%; flex:1.5; justify-content:center;margin-top:2.4rem;">
            <!-- 回忆输入框 -->
            <div class="ds-input-box" id="rm-recall-box" style="width:92%; max-width:42rem; height:7rem;
                                       display:flex; align-items:center; justify-content:center;">
              <div id="rm-recall-display" style="display:flex; align-items:center; justify-content:center; gap:1rem;">
                <span class="ds-input-placeholder" style="font-size:1.6rem;">等待输入...</span>
              </div>
            </div>
            <!-- 数字键盘（参考数字倒背样式：5列布局 + 清空/确定按钮，居中） -->
            <div id="rm-numpad" style="display:flex; flex-direction:column; gap:0.8rem; width:92%; max-width:42rem; position:relative;">
              <div style="display:grid; grid-template-columns:repeat(5,1fr); gap:0.8rem;">
                ${[1,2,3,4,5].map(a=>`
                  <button id="rm-key-${a}" class="ds-numkey" style="height:5.5rem; font-size:2.4rem;">${a}</button>
                `).join("")}
              </div>
              <div style="display:grid; grid-template-columns:repeat(5,1fr); gap:0.8rem;">
                ${[6,7,8,9,0].map(a=>`
                  <button id="rm-key-${a}" class="ds-numkey" style="height:5.5rem; font-size:2.4rem;">${a}</button>
                `).join("")}
              </div>
              <!-- 功能按钮（初始隐藏） -->
              <div id="rm-action-btns" style="display:none; grid-template-columns:1fr 1fr; gap:1rem; margin-top:0.4rem;">
                <button id="rm-btn-clear" style="height:5.5rem; font-size:2rem; border-radius:1.2rem;
                        background:rgba(139,92,246,0.85); color:white; border:none; font-weight:600; cursor:pointer;">删除</button>
                <button id="rm-btn-confirm" style="height:5.5rem; font-size:2rem; border-radius:1.2rem;
                        background:rgba(59,130,246,0.85); color:white; border:none; font-weight:600; cursor:pointer;">确定</button>
              </div>
            </div>
          </div>
        </div>
      `,steps:[{delay:5e3,voice:i,action:a=>{const n=a.querySelector("#rm-guide");n.innerHTML=`
            <div style="display:flex; flex-direction:column; align-items:center;">
              <span style="font-size:2.8rem; font-weight:700; color:white;line-height:4.2rem;">屏幕上即将出现几个数字</span>
              <span style="font-size:2.8rem; font-weight:700; color:white;line-height:4.2rem;">请记住它们</span>
            </div>
          `,n.style.opacity="1"}},{delay:1750,action:a=>{const n=a.querySelector("#rm-guide");n.style.display="none",a.querySelector("#rm-digit-area").style.display="flex";const c=a.querySelector("#rm-digit");c.textContent=t[0],c.style.animation="digitPulse 0.4s ease-out"}},{delay:1750,action:a=>{const n=a.querySelector("#rm-digit");n.textContent=t[1],n.style.animation="none",n.offsetWidth,n.style.animation="digitPulse 0.4s ease-out"}},{delay:1750,action:a=>{const n=a.querySelector("#rm-digit");n.textContent=t[2],n.style.animation="none",n.offsetWidth,n.style.animation="digitPulse 0.4s ease-out"}},{delay:1750,action:a=>{const n=a.querySelector("#rm-digit");n.textContent=t[3],n.style.animation="none",n.offsetWidth,n.style.animation="digitPulse 0.4s ease-out"}},{delay:6e3,voice:r,action:a=>{const n=a.querySelector("#rm-digit-area");n.style.opacity="0",setTimeout(()=>{n.style.display="none"},400);const c=a.querySelector("#rm-respond");c.style.display="flex",c.style.opacity="0",c.style.marginTop="4.8rem",c.style.transition="opacity 0.4s ease, margin-top 0.4s ease",setTimeout(()=>{c.style.opacity="1",c.style.marginTop="2.4rem"},400),a.querySelector("#rm-action-btns").style.display="grid",setTimeout(()=>{e.hideCallout(),e.showCallout("现在，需要将最后出现的3个数字，按出现的顺序，依次输入到方框里",{position:"top"})},100)}},{delay:17e3,action:a=>{setTimeout(()=>{e.hideCallout(),e.showCallout("刚才依次出现的数字是6、2、8、5，那么输入最后3个数字，应该输入2、8、5",{position:"top"})},300);let n=!1;const c=()=>{n||(n=!0,setTimeout(()=>{e.showPointer("#rm-key-2"),setTimeout(()=>{e.simulateClick("#rm-key-2"),a.querySelector("#rm-recall-display").innerHTML=o("2"),e.hidePointer()},600)},500),setTimeout(()=>{e.showPointer("#rm-key-8"),setTimeout(()=>{e.simulateClick("#rm-key-8"),a.querySelector("#rm-recall-display").innerHTML=o("2")+o("8"),e.hidePointer()},600)},2500),setTimeout(()=>{e.showPointer("#rm-key-5"),setTimeout(()=>{e.simulateClick("#rm-key-5"),a.querySelector("#rm-recall-display").innerHTML=o("2")+o("8")+o("5"),e.hidePointer()},600)},4500))};u.stopSpeak(),u.speak(s,{speed:3,onEnd:()=>{u.speak(l,{speed:4,onEnd:()=>c()})}}),setTimeout(()=>c(),12e3)}},{delay:5e3,voice:d,action:a=>{setTimeout(()=>{e.hideCallout(),e.showCallout("输好了后，需要点击确定按钮",{position:"top"})},300),setTimeout(()=>{e.showPointer("#rm-btn-confirm"),setTimeout(()=>{e.simulateClick("#rm-btn-confirm"),e.hidePointer(),v.playCorrect();const n=document.getElementById("tutorial-feedback");n&&n.remove();const c=document.createElement("div");c.id="tutorial-feedback",c.style.cssText=`
                position:absolute; inset:0; z-index:50;
                display:flex; flex-direction:column; align-items:center; justify-content:center;
                gap:2.4rem; padding:2.4rem 4rem;
                background:rgba(15,23,43,0.6);
                backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
                border-radius:1.6rem; pointer-events:none; overflow:hidden;
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
              `,a.appendChild(c),setTimeout(()=>{c.parentNode&&c.remove(),e.hideCallout()},1500)},600)},2500)}}]}}renderTask(){const{isPractice:e,trialPhase:t,trials:i,currentTrialIndex:r,practiceCorrectCount:s,practiceCorrectRequired:l}=this.state;if(i.length,t==="rule-transition")return this.renderRuleTransition();let d,o,a,n;if(e)d=s,o=l,a="答对",n="练习模式";else{const b=this._getPhaseProgress(r);d=b.current,o=b.total,a="第",n="正式测评"}return`
      <div class="task-page" style="background: #1f4677;">
        ${p.render({isPractice:e,practiceTitle:n,mainTitle:n,current:d,total:o,progressPrefix:a,progressSuffix:"题",voiceText:N,voiceId:"task-header-speaker",voiceHidden:t==="group-hint"})}
        <div id="task-content" class="flex-1 flex flex-col">
          ${t==="group-hint"?this.renderGroupHint():""}
        </div>
      </div>
    `}renderCompleted(){const{results:e}=this.state;return`
      <div class="h-full p-8 flex items-center justify-center">
        <div class="fade-in text-center max-w-2xl">
          <div class="w-32 h-32 mx-auto rounded-full flex items-center justify-center" style="margin-bottom: 3rem; background: rgba(255,255,255,0.15);">
            <svg class="w-16 h-16" fill="white" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h1 class="font-bold" style="font-size: 4.8rem; margin-bottom: 2rem; color: white;">强制刷新任务完成！</h1>
          <p style="font-size: 2.8rem; color: rgba(255,255,255,0.7);">正确率: ${(e.filter(i=>i.isCorrect).length/e.length*100).toFixed(1)}%</p>
        </div>
      </div>
    `}renderRuleTransition(){return w.renderSimple(U)}renderGroupHint(){const{isPractice:e,practiceGroupIndex:t,currentTrialIndex:i}=this.state;return`
      <div class="flex-1 flex flex-col items-center justify-center">
        <div class="fade-in" style="
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 9999px;
          padding: 2.5rem 6.5rem;
          box-shadow: inset 0 0.2rem 0.4rem rgba(0,0,0,0.05);
        ">
          <p class="font-bold" style="font-size: 4.8rem; color: white; margin: 0; line-height: 7.2rem; text-align: center;">第 ${e?t+1:this._getPhaseProgress(i).current} 组</p>
        </div>
      </div>
    `}switchToGroupHint(){p.hideVoicePill();const e=this.$("#task-content");e&&(e.innerHTML=this.renderGroupHint())}_toChineseNum(e){const t=["零","一","二","三","四","五","六","七","八","九","十"];return e<=10?t[e]:e<20?"十"+t[e-10]:e.toString()}goToPracticeTransition(){u.stopSpeak(),this.setState({phase:"practice-transition"})}goToPracticePhase2(){u.stopSpeak(),this.setState({phase:"practice-transition-phase2"})}startPractice(){u.stopSpeak();const e=[I(0,4)];this.setState({phase:"practice",isPractice:!0,trials:e,currentTrialIndex:0,trialPhase:"group-hint",presentingIndex:0,userInput:"",results:[],practiceCorrectCount:0,practiceGroupIndex:0,practiceSeedIndex:1});const t=e[0];this.setTimeout(()=>{this.setStateQuiet({trialPhase:"presenting"}),this.switchToPresenting(),this.updateDigitDisplay(t.sequence[0]),this.presentNextDigit()},1e3)}generateAndStartPracticeTrial(){const{practiceCorrectCount:e,practiceSeedIndex:t}=this.state,i=e<1?4:5,r=[I(t,i)];this.setStateQuiet({trials:r,currentTrialIndex:0,practiceSeedIndex:t+1}),this.startTrial()}_arrangeNoConsecutiveSameLength(e){const t={};for(const s of e)t[s.length]||(t[s.length]=[]),t[s.length].push(s);const i=[];let r=null;for(;i.length<e.length;){const s=Object.keys(t).filter(o=>t[o].length>0&&Number(o)!==r),l=s.length>0?s:Object.keys(t).filter(o=>t[o].length>0);if(l.length===0)break;const d=l[Math.floor(Math.random()*l.length)];i.push(t[d].shift()),r=Number(d)}return i}startMain(){u.stopSpeak();const e=h.RUNNING_MEMORY,t=this._arrangeNoConsecutiveSameLength(P.generateRunningMemoryTrials(9,[4,6],e.recallCount)),i=P.generateRunningMemoryTrials(6,[7,8],e.recallCount),r=P.generateRunningMemoryTrials(3,[9,9],e.recallCount),s=[...t,...i,...r];k.preload(M),k.preload(R),this.setState({phase:"main",isPractice:!1,trials:s,currentTrialIndex:0,trialPhase:"group-hint",presentingIndex:0,userInput:"",results:[]}),this._saveMainProgress(),this.setTimeout(()=>{this.enterMainTrialsAfterRule()},50)}enterMainTrialsAfterRule(){const{trials:e}=this.state,t=e[0];this.setStateQuiet({trialPhase:"group-hint"});const i=this.container;if(i){const r=i.querySelector(".pt-rule-area");if(r){const s=document.createElement("div");s.id="task-content",s.className="flex-1 flex flex-col",r.replaceWith(s)}}p.showProgress({current:1,total:9,prefix:"第",suffix:"题"}),this.switchToGroupHint(),this.setTimeout(()=>{this.setStateQuiet({trialPhase:"presenting"}),this.switchToPresenting(),this.updateDigitDisplay(t.sequence[0]),this.presentNextDigit()},1e3)}startTrial(){this.clearTimers();const{trials:e,currentTrialIndex:t}=this.state,i=e[t];this.setStateQuiet({trialPhase:"group-hint",presentingIndex:0,userInput:""}),this.updateProgress(),this.switchToGroupHint(),this.setTimeout(()=>{this.setStateQuiet({trialPhase:"presenting"}),this.switchToPresenting(),this.updateDigitDisplay(i.sequence[0]),this.presentNextDigit()},1e3)}presentNextDigit(){const{trials:e,currentTrialIndex:t,presentingIndex:i}=this.state,r=e[t];this.updateDigitDisplay(r.sequence[i]),this.triggerDigitPulse(),this.setTimeout(()=>{i<r.sequence.length-1?(this.setStateQuiet({presentingIndex:i+1}),this.presentNextDigit()):this.setTimeout(()=>{if(this.setStateQuiet({trialPhase:"responding"}),this.switchToResponding(),this.state.isPractice){const s=this.state.trials[this.state.currentTrialIndex];s&&k.preload(S(s))}},500)},h.RUNNING_MEMORY.displayInterval)}handleInput(e){const{trialPhase:t,userInput:i}=this.state,r=h.RUNNING_MEMORY.recallCount;if(t!=="responding"||i.length>=r)return;p.stopSpeak("task-header-speaker"),u.triggerHaptic("light");const s=i+e;this.setStateQuiet({userInput:s}),this.updateInputDisplay(),this.updateActionButtons()}handleConfirm(){const{userInput:e}=this.state,t=h.RUNNING_MEMORY.recallCount;!e||e.length!==t||(p.stopSpeak("task-header-speaker"),u.triggerHaptic("medium"),this.submitResponse())}handleDelete(){const{userInput:e}=this.state;e.length!==0&&(u.triggerHaptic("light"),this.setStateQuiet({userInput:e.slice(0,-1)}),this.updateInputDisplay(),this.updateActionButtons())}handleClear(){const{userInput:e}=this.state;e.length!==0&&(p.stopSpeak("task-header-speaker"),u.triggerHaptic("light"),this.setStateQuiet({userInput:e.slice(0,-1)}),this.updateInputDisplay(),this.updateActionButtons())}handleNotRemembered(){if(this.state.trialPhase==="responding"){if(u.triggerHaptic("light"),this.state.isPractice){p.stopSpeak("task-header-speaker"),this.setStateQuiet({userInput:""}),this.updateInputDisplay(),this.updateActionButtons(),this.submitResponse();return}if(_){this.setStateQuiet({userInput:""}),this.updateInputDisplay(),this.updateActionButtons(),this.submitResponse();return}_=!0,this.setStateQuiet({isSkipNoticeOpen:!0}),y(this),this.showSkipNotice(()=>{this.setStateQuiet({userInput:"",isSkipNoticeOpen:!1}),y(this),this.updateInputDisplay(),this.updateActionButtons(),this.submitResponse()},()=>{this.setStateQuiet({isSkipNoticeOpen:!1}),y(this)})}}showSkipNotice(e){const t=document.createElement("div");t.style.cssText=`
      position: fixed; inset: 0; z-index: 9999;
      display: flex; align-items: center; justify-content: center;
      background: rgba(15,23,43,0.6);
      backdrop-filter: blur(1.6rem); -webkit-backdrop-filter: blur(1.6rem);
    `,t.innerHTML=`
      <div style="width: 64rem; height: 48rem; padding: 4.8rem; border-radius: 3.2rem; background: #fff; box-shadow: 0 2.5rem 5rem rgba(0,0,0,0.25); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4.8rem; text-align: center;">
        <div style="width: 9.6rem; height: 9.6rem; border-radius: 50%; background: #ff8904; border: 0.4rem solid #fff; box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.1), 0 0.4rem 0.6rem rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="24" r="18" stroke="white" stroke-width="4"/><path d="M24 14V26" stroke="white" stroke-width="4" stroke-linecap="round"/><path d="M24 26L31 30" stroke="white" stroke-width="4" stroke-linecap="round"/></svg>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 1.6rem;">
          <h2 style="font-size: 3.6rem; font-weight: 900; color: #1d293d; font-family: 'Source Han Sans CN','PingFang SC',sans-serif; line-height: 1.2; margin: 0;">没记住也没关系</h2>
          <p style="font-size: 2.4rem; font-weight: 700; color: #1d293d; font-family: 'Inter','Noto Sans SC',sans-serif; line-height: 1.4; margin: 0;">我们将跳过本道题继续下一道，这道题就不算分啦</p>
        </div>
        <div style="width: 26rem;">
          <button id="skip-notice-confirm" class="btn-press" style="width: 100%; padding: 1.6rem 0; border: none; border-radius: 1.6rem; background: #ff6900; box-shadow: 0 0.6rem 0 #be550c; color: #fff; font-size: 3.6rem; font-weight: 900; font-family: 'Inter','Noto Sans SC',sans-serif; line-height: 1.4;">知道了</button>
        </div>
      </div>
    `,t.querySelector("#skip-notice-confirm").addEventListener("click",()=>{u.stopSpeak(),t.remove(),e()}),document.body.appendChild(t),u.speak(E)}triggerDigitPulse(){const e=this.$("#digit-display");e&&(e.classList.remove("digit-pulse"),e.offsetWidth,e.classList.add("digit-pulse"))}submitResponse(){const{trials:e,currentTrialIndex:t,userInput:i,results:r,startTime:s,isPractice:l,practiceCorrectCount:d,practiceCorrectRequired:o,practiceGroupIndex:a}=this.state,n=e[t];this.setStateQuiet({trialPhase:"processing"}),y(this);const c=n.lastThree.join(""),b=i.split("").filter((B,A)=>B===c[A]).length,T=b===h.RUNNING_MEMORY.recallCount;u.triggerHaptic(T?"medium":"light");const $={trialIndex:t,isCorrect:T,reactionTime:Date.now()-s,response:i,expectedResponse:c,timestamp:Date.now(),metadata:{sequenceLength:n.sequence.length,correctCount:b}};this.setStateQuiet({results:[...r,$]}),l||this._saveMainProgress(),l?this.handlePracticeResult(T,n):this.handleMainResult(T,n)}handlePracticeResult(e,t){const{practiceCorrectCount:i,practiceCorrectRequired:r,practiceGroupIndex:s}=this.state;if(e)this.showPracticeFeedbackCustom(!0,null,()=>{const l=i+1;this.setStateQuiet({practiceCorrectCount:l,practiceGroupIndex:s+1}),l>=r?this.setState({phase:"practice-complete"}):(this.updateProgress(),this.generateAndStartPracticeTrial())});else{const l=S(t);this.showPracticeFeedbackCustom(!1,l,()=>{this.setStateQuiet({practiceGroupIndex:s+1}),this.generateAndStartPracticeTrial()})}}handleMainResult(e,t){const{trials:i,currentTrialIndex:r}=this.state,s=r+1;if(s>=i.length){this.handlePhaseComplete();return}this.setStateQuiet({currentTrialIndex:s}),s===9?this.showDifficultyUpgradePrompt():s===15?this._isBatch2AllWrong()?this._autoFailBatch3AndFinish():this.showEndurancePrompt():this.startTrial()}_getPhaseProgress(e){return e<9?{current:e+1,total:9}:e<15?{current:e-8,total:6}:{current:e-14,total:3}}_isBatch2AllWrong(e=this.state.results){const t=e.filter(i=>i.trialIndex>=9&&i.trialIndex<=14);return t.length===6&&t.every(i=>!i.isCorrect)}_autoFailBatch3AndFinish(){const{trials:e,results:t}=this.state,i=Date.now(),r=e.slice(15).map((s,l)=>({trialIndex:15+l,isCorrect:!1,reactionTime:0,response:"",expectedResponse:s.lastThree.join(""),timestamp:i,autoFailed:!0,metadata:{sequenceLength:s.sequence.length,correctCount:0}}));this.setStateQuiet({results:[...t,...r]}),this.finishTask()}showDifficultyUpgradePrompt(){this.setState({phase:"main-difficulty-upgrade"});let e=!1;const t=()=>{e||(e=!0,this._continueMainAfterPrompt())};this.setTimeout(()=>{u.speak(M,{onEnd:t,onError:t})},300),this.setTimeout(t,8e3)}showEndurancePrompt(){this.setState({phase:"main-endurance-prompt"});let e=!1;const t=()=>{e||(e=!0,this._continueMainAfterPrompt())};this.setTimeout(()=>{u.speak(R,{onEnd:t,onError:t})},300),this.setTimeout(t,8e3)}_continueMainAfterPrompt(){u.stopSpeak(),this.setState({phase:"main",trialPhase:"group-hint"}),this.setTimeout(()=>this.startTrial(),50)}renderDifficultyUpgradePrompt(){const{currentTrialIndex:e}=this.state,{current:t,total:i}=this._getPhaseProgress(e);return`
      <div class="task-page" style="background: #1f4677;">
        ${p.render({isPractice:!1,mainTitle:"正式测评",current:t,total:i,progressPrefix:"第",progressSuffix:"题"})}
        <div class="flex-1 flex items-center justify-center">
          <div class="text-center fade-in" style="max-width: 90%;">
            <p style="font-size: 3rem; margin-bottom: 1.6rem; color: white;">难度升级</p>
            <p class="font-bold" style="font-size: 4.8rem; color: #ffdf20; line-height: 1.4;">接下来每一组将会出现更多数字，请努力记住</p>
          </div>
        </div>
      </div>
    `}renderEndurancePrompt(){const{currentTrialIndex:e}=this.state,{current:t,total:i}=this._getPhaseProgress(e);return`
      <div class="task-page" style="background: #1f4677;">
        ${p.render({isPractice:!1,mainTitle:"正式测评",current:t,total:i,progressPrefix:"第",progressSuffix:"题"})}
        <div class="flex-1 flex items-center justify-center">
          <div class="text-center fade-in" style="max-width: 80%;">
            <p class="font-bold" style="font-size: 4.8rem; color: #ffdf20;">再坚持一下！还剩3道题，加油！</p>
          </div>
        </div>
      </div>
    `}showPracticeFeedbackCustom(e,t,i){this.setStateQuiet({trialPhase:"feedback"}),y(this),window.LockableButton&&window.LockableButton.lockAll(),e?v.playCorrect():v.playError();const r=document.getElementById("rm-keyboard-area");if(!r){i&&this.setTimeout(i,1500);return}const s=document.createElement("div");s.id="practice-feedback-overlay",s.style.cssText=`
      position: absolute; inset: -0.4rem; z-index: 50;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 2.4rem; padding: 2.4rem 4rem;
      background: rgba(15,23,43,0.6);
      backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      border-radius: 2rem; pointer-events: auto; overflow: hidden;
    `;const l=e?"rgba(0,201,80,0.9)":"rgba(251,44,54,0.9)",d=e?'<svg viewBox="0 0 24 24" fill="white" style="width: 5rem; height: 5rem;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>':'<svg viewBox="0 0 24 24" fill="white" style="width: 5rem; height: 5rem;"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';let o="";!e&&t&&(o=`
        <p style="font-size: 2.4rem; line-height: 1.6; color: white; text-align: center; font-weight: 600;
                  max-width: 90%; margin: 0;">${t}</p>
      `),s.innerHTML=`
      <div class="animate-scale-in" style="
        width: 12rem; height: 12rem; border-radius: 50%;
        display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        background: ${l}; border: 0.4rem solid white;
        box-shadow: 0 2.5rem 5rem rgba(0,0,0,0.25);
      ">
        ${d}
      </div>
      ${o}
    `,r.appendChild(s);const a=()=>{const n=document.getElementById("practice-feedback-overlay");n&&n.remove(),window.LockableButton&&window.LockableButton.unlockAll(),i&&i()};if(e)this.setTimeout(a,800);else{let n=!1;const c=()=>{n||(n=!0,a())};t?(u.speak(t,{onEnd:()=>{this.setTimeout(c,500)}}),this.setTimeout(c,15e3)):this.setTimeout(c,1200)}}handlePhaseComplete(){const{isPractice:e}=this.state;e?this.setState({phase:"practice-complete"}):this.finishTask()}restartPractice(){this.startPractice()}_saveMainProgress(){const{trials:e,results:t,startTime:i}=this.state;m.saveTaskProgress("running-memory",{version:1,startTime:i,trials:e,results:t,currentTrialIndex:t.length})}resumeMain(){u.stopSpeak(),window.WelcomeBack&&g.cleanup();const e=m.getTaskProgress("running-memory");if(!e||!e.trials){this.startMain();return}const{trials:t,results:i,startTime:r}=e,s=i.length;if(s>=t.length){this.setStateQuiet({trials:t,results:i,startTime:r,isPractice:!1}),this.finishTask();return}this.setState({phase:"main",isPractice:!1,trials:t,currentTrialIndex:s,trialPhase:"group-hint",presentingIndex:0,userInput:"",results:i,startTime:r}),this.setTimeout(()=>{s===15&&this._isBatch2AllWrong(i)?this._autoFailBatch3AndFinish():this.startTrial()},50)}resetForReplay(){u.stopSpeak(),window.WelcomeBack&&g.cleanup(),m.clearTaskProgress("running-memory"),this.goToPracticePhase2()}finishTask(){m.clearTaskProgress("running-memory");const{results:e,startTime:t}=this.state,i=e.filter(d=>d.isCorrect).length,r=i,s=e.length>0?i/e.length:0,l={taskType:"running-memory",module:"working-memory",startTime:t,endTime:Date.now(),trials:e,rawScore:r,metrics:{accuracy:s,totalScore:r,correctTrials:i,totalTrials:e.length}};z(this,l),D.onTaskComplete("running-memory",l)}}D.registerTask("running-memory",F);
