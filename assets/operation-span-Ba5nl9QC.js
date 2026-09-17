import{ac as A,C as M,S as g,c as p,V as v,ad as T,ae as S,af as h,ag as N,ah as w,e as c,ai as C}from"./assessment-ByzqurOv.js";import{b as O}from"./task-resume-BHiCUhCk.js";import{W as b,P as x,i as H,r as y,d as j,a as P,b as z}from"./assessment-xiaoban-guide-CpfD26Ft.js";import{a as I,d as q}from"./practice-trial-seeds-BoPR1Zv0.js";import"./modulepreload-polyfill-B5Qt9EMX.js";const B=p.INSTRUCTION["operation-span"],D=B.ruleText,R="请算出每道题的答案",L="请将所有算式答案全部填入方框内",$="请将两道题的答案再次填写到方框内",E="没记住也没关系，点“确定跳过”会跳到下一题，这道题就不算分啦";class _ extends M{constructor(){super();const e=g.isPracticeCompleted("operation-span"),t=!!g.getTaskProgress("operation-span");this.state={phase:t?"welcome-back-progress":e?"welcome-back":"instruction",isPractice:!0,trials:[],currentTrialIndex:0,currentEquationIndex:0,trialPhase:"equation",equationInput:"",userAnswers:[],userRecall:"",results:[],maxSpan:0,startTime:Date.now(),practiceCorrectCount:0,practiceCorrectRequired:p.OPERATION_SPAN.practiceTrials,practiceGroupIndex:0,practiceStage:1,practiceStageCorrectCount:0,practiceSeedIndex:0,practiceEquationHistory:[],currentLength:p.OPERATION_SPAN.startLength,currentLengthTrialIndex:0,currentLengthCorrectCount:0,currentLengthWrongCount:0,isSkipNoticeOpen:!1}}onMount(){v.preload(E),this.state.phase==="welcome-back"||this.state.phase==="welcome-back-progress"?this.setTimeout(()=>b.init(),100):this.state.phase==="instruction"?this.setTimeout(()=>T.init(),100):this.state.phase==="practice-transition"?this.setTimeout(()=>x.init(),100):this.state.phase==="practice-transition-phase2"&&this.setTimeout(()=>x.initPhase2(),100),H(this,{respondingPhases:["recalling","recall"],isStable:e=>["practice","main"].includes(e.state.phase)&&["equation","recall"].includes(e.state.trialPhase)&&!e.state.isSkipNoticeOpen,resolveSteps:e=>e.getGuideSteps()})}getGuideSteps(){return this.state.trialPhase==="equation"?[{elements:()=>this.$("#os-equation-row"),speechText:"先算出这道题的答案。"},{elements:()=>this.$("#os-equation-number-keys"),speechText:"点击数字键输入答案，输入后会继续下一道题。"}]:[{speechText:"想想刚才所有算式的答案。"},{elements:()=>this.$("#os-number-keys"),speechText:"按答案出现的顺序，依次按键盘。"},{elements:()=>[this.$("#os-btn-confirm"),this.$("#os-btn-clear")].filter(Boolean),highlightMode:"sequence",speechText:"输好了点确认，输错了可以点删除重新输。"}]}onUpdate(){this.state.phase==="welcome-back"||this.state.phase==="welcome-back-progress"?this.setTimeout(()=>b.init(),100):this.state.phase==="instruction"?this.setTimeout(()=>T.init(),100):this.state.phase==="practice-transition"?this.setTimeout(()=>x.init(),100):this.state.phase==="practice-transition-phase2"&&this.setTimeout(()=>x.initPhase2(),100),y(this)}onUnmount(){j(this),this.clearTimers(),S.cleanup()}updateProgress(){const{isPractice:e,practiceCorrectCount:t,practiceCorrectRequired:i,currentLength:s,currentLengthTrialIndex:a}=this.state;e&&h.updateProgress({current:t,total:i,prefix:"答对",suffix:"题"})}showEquation(){h.showVoicePill(),h.updateVoiceText(R,"task-header-speaker");const{trials:e,currentTrialIndex:t,currentEquationIndex:i,equationInput:s}=this.state,r=e[t].equations[i],n=this.$("#task-content");n&&(n.innerHTML=`
        <div class="flex-1 flex flex-col items-center justify-center" style="gap: 4.8rem;">
          <!-- 算式行：算式文字 + 输入框同行 -->
          <div id="os-equation-row" style="display: flex; align-items: center; gap: 1rem; width: 62.6rem;">
            <div class="font-bold" style="font-size: 7.2rem; color: white; white-space: nowrap; flex-shrink: 0;">
              ${r.equation} =
            </div>
            <div id="equation-input-box" style="
              flex: 1;
              height: 8rem;
              background: rgba(255,255,255,0.2);
              border: 1px solid rgba(255,255,255,0.3);
              border-radius: 1.6rem;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: inset 0px 2px 4px 0px rgba(0,0,0,0.05);
            ">
              ${this._renderEquationInput(s)}
            </div>
          </div>
          <!-- 数字键盘 -->
          ${this.renderNumberPadDigitsOnly("handleEquationInput")}
        </div>
      `)}_renderEquationInput(e){return e?`<span id="equation-input-display" class="font-bold" style="font-size: 4.8rem; color: white;">${e}</span>`:'<span id="equation-input-display" style="font-size: 1.8rem; color: rgba(255,255,255,0.6); letter-spacing: 0.18rem;">等待输入...</span>'}updateEquationInputDisplay(){const e=this.$("#equation-input-box");e&&(e.innerHTML=this._renderEquationInput(this.state.equationInput))}showRecall(){const{trials:e,currentTrialIndex:t,userRecall:i}=this.state;e[t];const s=i&&i.length>0,a="TaskManager.currentTask",r=this.$("#task-content");r&&(r.innerHTML=`
        <div class="flex-1 flex flex-col items-center justify-center" style="gap: 4.8rem;">
          
          <!-- 输入框 -->
          <div id="recall-input-box" style="
            width: 62.6rem;
            height: 8rem;
            background: rgba(255,255,255,0.2);
            border: 1px solid rgba(255,255,255,0.3);
            border-radius: 1.6rem;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: inset 0px 2px 4px 0px rgba(0,0,0,0.05);
          ">
            ${this._renderRecallInput(i)}
          </div>
          
          <!-- 数字键盘+操作按钮容器（用于反馈覆盖定位） -->
          <!-- 按照Figma设计：内部分两层，数字键区（gap:1rem）与操作按钮区间距4.8rem -->
          <div id="recall-keyboard-area" style="position: relative; display: flex; flex-direction: column; gap: 4.8rem; width: 62.6rem;">
            <!-- 数字键区包裹层：两排数字键，行间距1rem；独立 id 供小伴细粒度高亮 -->
            <div id="os-number-keys" style="display: flex; flex-direction: column; gap: 1rem; border-radius: 1.6rem;">
              <!-- 第一排: 1-5 -->
              <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem;">
                ${[1,2,3,4,5].map(n=>`
                  <button onclick="Debounce.click('${n}', function() { ${a}.handleRecallInput('${n}') })"
                          class="ds-numkey"
                          aria-label="数字 ${n}" data-ai-hint="输入数字 ${n}">
                    ${n}
                  </button>
                `).join("")}
              </div>
              <!-- 第二排: 6,7,8,9,0 -->
              <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem;">
                ${[6,7,8,9,0].map(n=>`
                  <button onclick="Debounce.click('${n}', function() { ${a}.handleRecallInput('${n}') })"
                          class="ds-numkey"
                          aria-label="数字 ${n}" data-ai-hint="输入数字 ${n}">
                    ${n}
                  </button>
                `).join("")}
              </div>
            </div>
            <!-- 操作按钮行：删除 / 确认 / 我没记住，与数字键区间距通过父级gap:4.8rem控制 -->
            <div id="os-action-keys" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.6rem;">
              <button id="os-btn-clear" onclick="Debounce.click('clear', function() { ${a}.handleRecallClear() })"
                      class="btn-3d btn-3d-purple"
                      style="height: 6rem; font-size: 2rem; border-radius: 1.6rem; background: #eff6ff; border-bottom-color: #bacde6; color: #3f516a; opacity: ${s?"1":"0.4"};"
                      ${s?"":"disabled"}
                      aria-label="删除输入" data-ai-hint="清除已输入的数字">
                删除
              </button>
              <button id="os-btn-confirm" onclick="Debounce.click('confirm', function() { ${a}.handleRecallConfirm() })"
                      class="btn-3d btn-3d-blue"
                      style="height: 6rem; font-size: 2rem; border-radius: 1.6rem; opacity: ${s?"1":"0.4"};"
                      ${s?"":"disabled"}
                      aria-label="确认答案" data-ai-hint="提交当前输入的答案">
                确认
              </button>
              <button id="os-btn-not-remembered" onclick="Debounce.click('not-remembered', function() { ${a}.handleRecallNotRemembered() })"
                      class="btn-3d btn-3d-purple"
                      style="height: 6rem; font-size: 2rem; border-radius: 1.6rem;"
                      aria-label="我没记住" data-ai-hint="跳过当前题目并记录为未作答">
                我没记住
              </button>
            </div>
          </div>
        </div>
      `)}_renderRecallInput(e){return e&&e.length>0?`<div id="recall-display" style="display: flex; gap: 0.8rem; align-items: center; justify-content: center;">${e.split("").map(i=>`
        <div style="
          width: 6.4rem;
          height: 6.4rem;
          background: white;
          border-radius: 1.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        ">
          <span style="font-size: 3.6rem; font-weight: 900; color: #1d293d; line-height: 1;">${i}</span>
        </div>
      `).join("")}</div>`:'<div id="recall-display" style="font-size: 1.8rem; color: rgba(255,255,255,0.6); letter-spacing: 0.18rem;">等待输入...</div>'}updateRecallDisplay(){const e=this.$("#recall-input-box");e&&(e.innerHTML=this._renderRecallInput(this.state.userRecall)),this.updateRecallActionButtons()}updateRecallActionButtons(){const{userRecall:e}=this.state,t=e&&e.length>0,i=document.getElementById("os-btn-clear"),s=document.getElementById("os-btn-confirm");i&&(i.disabled=!t,i.style.opacity=t?"1":"0.4"),s&&(s.disabled=!t,s.style.opacity=t?"1":"0.4")}render(){const{phase:e}=this.state;switch(e){case"welcome-back":return this.renderWelcomeBack();case"welcome-back-progress":return this.renderWelcomeBackProgress();case"instruction":return this.renderInstruction();case"practice-transition":return this.renderPracticeTransition();case"practice-transition-phase2":return this.renderPracticeTransitionPhase2();case"practice":case"main":return this.renderTask();case"practice-complete":return this.renderPracticeComplete();case"completed":return this.renderCompleted();default:return""}}renderPracticeComplete(){return g.setPracticeCompleted("operation-span"),P.init(),this.renderTask()+P.render()}renderWelcomeBack(){const e=p.INSTRUCTION["operation-span"];return b.render({title:e.title,bgColor:e.bgColor,onMain:"TaskManager.currentTask.startMain()",onPractice:"TaskManager.currentTask.goToPracticePhase2()"})}renderWelcomeBackProgress(){var r;const e=p.INSTRUCTION["operation-span"],t=g.getTaskProgress("operation-span"),i=((r=t==null?void 0:t.results)==null?void 0:r.length)||0,{message:s,voiceText:a}=O({completed:i,total:0,showPercent:!1});return b.render({title:e.title,message:s,voiceText:a,bgColor:e.bgColor,primaryButtonText:"我了解规则，继续测评",secondaryButtonText:"重置任务，重新开始",onMain:"TaskManager.currentTask.resumeMain()",onPractice:"TaskManager.currentTask.resetForReplay()"})}renderPracticeTransition(){const e=p.INSTRUCTION["operation-span"];return x.renderPhase1({taskTitle:e.title,bgColor:e.bgColor,onStart:"TaskManager.currentTask.goToPracticePhase2()"})}renderPracticeTransitionPhase2(){const e=p.INSTRUCTION["operation-span"];return x.renderPhase2({bgColor:e.bgColor,ruleText:e.ruleText,ruleTextLines:e.ruleTextLines,onStart:"TaskManager.currentTask.startPractice()",animateRuleToVoice:!0,startDelayAfterRuleMs:0})}renderInstruction(){const e=p.INSTRUCTION["operation-span"];return T.render({title:e.title,bgColor:e.bgColor,iconBg:e.iconBg,iconSvg:e.iconSvg,tutorialConfig:this.getTutorialConfig(),onStart:"TaskManager.currentTask.goToPracticeTransition()"})}getTutorialConfig(){const e=N,t="屏幕上将出现几道题，请计算出每道题的答案，先看第一题",i="现在出现了一道新的计算题，请继续计算",s="全部题计算完成后，需要将刚才出现的所有题的答案，再次填写到方框里",a=r=>`
      <div style="width: 4.8rem; height: 4.8rem; background: white; border-radius: 1rem;
                  display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
        <span style="font-size: 2.8rem; font-weight: 900; color: #1d293d; line-height: 1;">${r}</span>
      </div>`;return{renderMockUI:()=>`
        <div style="width:100%; height:100%; display:flex; flex-direction:column; align-items:center;
                    position:relative; border-radius:1.6rem; padding:1rem 1.5rem; gap:0.4rem;">
          <!-- 引导文案区 -->
          <div id="os-guide" style="text-align:center; line-height:1.8; display:flex; align-items:center;
                                    justify-content:center; flex:1; width:100%; padding:0 1rem;
                                    opacity:0; transition:opacity 0.4s ease; flex-wrap:wrap;"></div>

          <!-- 算式+键盘整体居中容器（初始隐藏，flex:1撑满剩余空间，内部垂直居中） -->
          <div id="os-main-area" style="display:none; flex-direction:column; align-items:center; justify-content:center;
                                        flex:1; width:100%; gap:1.6rem;">
            <!-- 算式行（含输入框） -->
            <div id="os-equation-row" style="display:flex; align-items:center; justify-content:center;
                                             gap:0.8rem; opacity:0; transition:opacity 0.4s ease;">
              <div id="os-eq-text" class="font-bold" style="font-size:3.6rem; color:white; white-space:nowrap;"></div>
              <div id="os-eq-input" style="
                width:6.4rem; height:5.2rem;
                background:rgba(255,255,255,0.15);
                border:2px solid rgba(255,255,255,0.4);
                border-radius:1rem;
                display:flex; align-items:center; justify-content:center;
              ">
                <span id="os-eq-val" class="font-bold" style="font-size:3rem; color:white;"></span>
              </div>
            </div>

            <!-- 回忆输入框（初始隐藏，回忆阶段替换算式行） -->
            <div class="ds-input-box" id="os-recall-box" style="display:none; width:92%; max-width:42rem; height:7rem;
                                         align-items:center; justify-content:center;">
              <div id="os-recall-display" style="display:flex; align-items:center; justify-content:center; gap:1rem;">
                <span class="ds-input-placeholder" style="font-size:1.6rem;">等待输入...</span>
              </div>
            </div>

            <!-- 数字键盘（5列布局 + 清空/确定按钮） -->
            <div id="os-numpad" style="display:flex; flex-direction:column; gap:0.8rem; width:92%; max-width:42rem;
                                       position:relative; opacity:0; transition:opacity 0.4s ease;">
            <div style="display:grid; grid-template-columns:repeat(5,1fr); gap:0.8rem;">
              ${[1,2,3,4,5].map(r=>`
                <button id="os-key-${r}" class="ds-numkey" style="height:5.5rem; font-size:2.4rem;">${r}</button>
              `).join("")}
            </div>
            <div style="display:grid; grid-template-columns:repeat(5,1fr); gap:0.8rem;">
              ${[6,7,8,9,0].map(r=>`
                <button id="os-key-${r}" class="ds-numkey" style="height:5.5rem; font-size:2.4rem;">${r}</button>
              `).join("")}
            </div>
            <!-- 功能按钮（初始隐藏） -->
            <div id="os-action-btns" style="display:none; grid-template-columns:1fr 1fr; gap:1rem; margin-top:0.4rem;">
              <button id="os-btn-clear" style="height:5.5rem; font-size:2rem; border-radius:1.2rem;
                      background:rgba(139,92,246,0.85); color:white; border:none; font-weight:600; cursor:pointer;">删除</button>
              <button id="os-btn-confirm" style="height:5.5rem; font-size:2rem; border-radius:1.2rem;
                      background:rgba(59,130,246,0.85); color:white; border:none; font-weight:600; cursor:pointer;">确定</button>
            </div>
          </div>
          </div>
        </div>
      `,steps:[{delay:6e3,voice:t,action:r=>{const n=r.querySelector("#os-guide");e.showCallout("屏幕上将出现几道题，请计算出每道题的答案，<br>先看第一题",{position:"top"});const o=document.getElementById("tutorial-callout");o&&(o.style.maxWidth="72rem"),n.style.flex="0",r.querySelector("#os-main-area").style.display="flex";const l=r.querySelector("#os-equation-row");r.querySelector("#os-eq-text").textContent="2 + 3 =",setTimeout(()=>{l.style.opacity="1"},100),r.querySelector("#os-numpad").style.opacity="1"}},{delay:1500,action:r=>{e.showPointer("#os-key-5"),setTimeout(()=>{e.simulateClick("#os-key-5"),r.querySelector("#os-eq-val").textContent="5",e.hidePointer()},600)}},{delay:1e3,action:()=>{}},{delay:4500,voice:i,action:r=>{r.querySelector("#os-guide").style.opacity="0",e.hideCallout(),setTimeout(()=>{e.showCallout("现在出现了一道新的计算题，请继续计算",{position:"top"})},300),r.querySelector("#os-eq-text").textContent="9 - 2 =",r.querySelector("#os-eq-val").textContent=""}},{delay:1500,action:r=>{e.showPointer("#os-key-7"),setTimeout(()=>{e.simulateClick("#os-key-7"),r.querySelector("#os-eq-val").textContent="7",e.hidePointer()},600)}},{delay:1e3,action:()=>{}},{delay:6500,voice:s,action:r=>{r.querySelector("#os-equation-row").style.opacity="0",setTimeout(()=>{r.querySelector("#os-equation-row").style.display="none";const n=r.querySelector("#os-recall-box");n.style.display="flex",n.style.opacity="0",n.style.transition="opacity 0.4s ease",setTimeout(()=>{n.style.opacity="1"},50)},400),r.querySelector("#os-action-btns").style.display="grid",e.hideCallout(),setTimeout(()=>{e.showCallout("全部题计算完成后，需要将刚才出现的所有题的答案再次填写到方框里",{position:"top"})},300)}},{delay:3200,action:r=>{e.showPointer("#os-key-5"),setTimeout(()=>{e.simulateClick("#os-key-5"),r.querySelector("#os-recall-display").innerHTML=a("5"),e.hidePointer()},600),setTimeout(()=>{e.showPointer("#os-key-7")},1400),setTimeout(()=>{e.simulateClick("#os-key-7"),r.querySelector("#os-recall-display").innerHTML=a("5")+a("7"),e.hidePointer()},2e3)}},{delay:2500,action:r=>{e.showPointer("#os-btn-confirm"),setTimeout(()=>{e.simulateClick("#os-btn-confirm"),e.hidePointer(),w.playCorrect();const n=document.getElementById("tutorial-feedback");n&&n.remove();const o=document.createElement("div");o.id="tutorial-feedback",o.style.cssText=`
              position:absolute; inset:0; z-index:50;
              display:flex; flex-direction:column; align-items:center; justify-content:center;
              gap:2.4rem; padding:2.4rem 4rem;
              background:rgba(15,23,43,0.6);
              backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:1.6rem; pointer-events:none; overflow:hidden;
            `,o.innerHTML=`
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
            `,r.appendChild(o),setTimeout(()=>{o.parentNode&&o.remove(),e.hideCallout()},1500)},600)}}]}}renderTask(){const{isPractice:e,trialPhase:t,practiceCorrectCount:i,practiceCorrectRequired:s,currentLength:a,currentLengthTrialIndex:r}=this.state;if(t==="rule-transition")return this.renderRuleTransition();let n,o,l,u;return e?(n=i,o=s,l="答对",u="练习模式"):(n=void 0,o=void 0,l="",u="正式测评"),`
      <div class="task-page" style="background: #1c3a66;">
        ${h.render({isPractice:e,practiceTitle:u,mainTitle:u,current:n,total:o,progressPrefix:l,progressSuffix:e?"次":"",voiceText:R,voiceId:"task-header-speaker",voiceHidden:t==="group-hint"})}
        <div id="task-content" class="flex-1 flex flex-col">
          ${t==="group-hint"?this.renderGroupHint():""}
        </div>
      </div>
    `}renderCompleted(){const{maxSpan:e}=this.state;return`
      <div class="h-full p-8 flex items-center justify-center">
        <div class="fade-in text-center max-w-2xl">
          <div class="icon-badge-primary mx-auto" style="width: 12.8rem; height: 12.8rem; margin-bottom: 3rem;">
            <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h1 class="font-bold text-sm-text" style="font-size: 4.8rem; margin-bottom: 2rem;">运算广度任务完成！</h1>
          <p class="text-sm-text-secondary" style="font-size: 2.8rem;">最大广度: ${e}</p>
        </div>
      </div>
    `}renderRuleTransition(){return S.renderSimple(D)}renderGroupHint(){const{isPractice:e,practiceGroupIndex:t,currentLengthTrialIndex:i}=this.state;return`
      <div class="flex-1 flex flex-col items-center justify-center">
        <div class="fade-in" style="
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 9999px;
          padding: 2.5rem 6.5rem;
          box-shadow: inset 0px 2px 4px 0px rgba(0,0,0,0.05);
        ">
          <p class="font-bold" style="font-size: 4.8rem; color: white; white-space: nowrap;">第 ${e?t+1:i+1} 组</p>
        </div>
      </div>
    `}switchToGroupHint(){h.hideVoicePill();const e=this.$("#task-content");e&&(e.innerHTML=this.renderGroupHint())}_toChineseNum(e){const t=["零","一","二","三","四","五","六","七","八","九","十"];return e<=10?t[e]:e<20?"十"+t[e-10]:e.toString()}renderNumberPad5Col(e,t,i){const s="TaskManager.currentTask",a=r=>`
        <button onclick="${`Debounce.click('${r}', function() { ${s}.${e}('${r}') })`}"
                class="btn-press bg-sm-bg-light active:bg-gray-700 font-bold rounded-2xl transition-all"
                style="font-size: 4rem; padding: 1.6rem;">
          ${r}
        </button>
      `;return`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <!-- 第一排: 1-5 -->
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem;">
          ${[1,2,3,4,5].map(a).join("")}
        </div>
        <!-- 第二排: 6,7,8,9,0 -->
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem;">
          ${[6,7,8,9,0].map(a).join("")}
        </div>
        <!-- 第三排: 清空 / 删除 -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <button onclick="Debounce.click('clear', function() { ${s}.${t}() })"
                  class="btn-press font-bold rounded-2xl transition-all"
                  style="font-size: 2.4rem; padding: 1.6rem; background: var(--sm-error, #F44336); color: white;">
            清空
          </button>
          <button onclick="Debounce.click('delete', function() { ${s}.${i}() })"
                  class="btn-press font-bold rounded-2xl transition-all"
                  style="font-size: 2.4rem; padding: 1.6rem; background: var(--sm-warning, #FF9800); color: white;">
            删除
          </button>
        </div>
      </div>
    `}renderNumberPadDigitsOnly(e){const t="TaskManager.currentTask",i=s=>`
        <button onclick="${`Debounce.click('${s}', function() { ${t}.${e}('${s}') })`}"
                class="ds-numkey"
                aria-label="数字 ${s}" data-ai-hint="输入数字 ${s}">
          ${s}
        </button>
      `;return`
      <div id="os-equation-number-keys" style="display: flex; flex-direction: column; gap: 1rem; width: 62.6rem; border-radius: 1.6rem;">
        <!-- 第一排: 1-5 -->
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem;">
          ${[1,2,3,4,5].map(i).join("")}
        </div>
        <!-- 第二排: 6,7,8,9,0 -->
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem;">
          ${[6,7,8,9,0].map(i).join("")}
        </div>
      </div>
    `}_updateRecallVoiceText(e){const{isPractice:t}=this.state;let i,s;t?(s=$,i=$):(i=L,s=L),h.updateVoiceText(i,"task-header-speaker",s)}goToPracticeTransition(){c.stopSpeak(),this.setState({phase:"practice-transition"})}goToPracticePhase2(){c.stopSpeak(),this.setState({phase:"practice-transition-phase2"})}startPractice(){c.stopSpeak();const e=[I(0)];this.setState({phase:"practice",isPractice:!0,trials:e,currentTrialIndex:0,currentEquationIndex:0,trialPhase:"group-hint",equationInput:"",userAnswers:[],userRecall:"",results:[],practiceCorrectCount:0,practiceGroupIndex:0,practiceStage:2,practiceStageCorrectCount:0,practiceSeedIndex:1,practiceEquationHistory:e[0].equations.map(t=>t.equation)}),this.setTimeout(()=>{this.setStateQuiet({trialPhase:"equation"}),this.showEquation()},1e3)}generateAndStartPracticeTrial(){const e=this.state.practiceSeedIndex,t=[I(e)];this.setStateQuiet({trials:t,currentTrialIndex:0,practiceSeedIndex:e+1,practiceEquationHistory:t[0].equations.map(i=>i.equation)}),this.startTrial()}startMain(){c.stopSpeak();const e=p.OPERATION_SPAN,t=e.startLength,i=C.generateOperationSpanTrials(t,e.trialsPerLength);this.setState({phase:"main",isPractice:!1,trials:i,currentTrialIndex:0,currentEquationIndex:0,trialPhase:"group-hint",equationInput:"",userAnswers:[],userRecall:"",results:[],maxSpan:0,currentLength:t,currentLengthTrialIndex:0,currentLengthCorrectCount:0,currentLengthWrongCount:0}),this._saveMainProgress(),this.setTimeout(()=>{this.enterMainTrialsAfterRule()},50)}enterMainTrialsAfterRule(){this.setStateQuiet({trialPhase:"group-hint"});const e=this.container;if(e){const t=e.querySelector(".pt-rule-area");if(t){const i=document.createElement("div");i.id="task-content",i.className="flex-1 flex flex-col",t.replaceWith(i)}}this.switchToGroupHint(),this.setTimeout(()=>{this.setStateQuiet({trialPhase:"equation"}),this.showEquation()},1e3)}startTrial(){this.setStateQuiet({currentEquationIndex:0,trialPhase:"group-hint",equationInput:"",userAnswers:[],userRecall:""}),this.state.isPractice||this._saveMainProgress(),this.updateProgress(),this.switchToGroupHint(),this.setTimeout(()=>{this.setStateQuiet({trialPhase:"equation"}),this.showEquation()},1e3)}handleEquationInput(e){const{equationInput:t}=this.state;if(t.length>=1)return;h.stopSpeak("task-header-speaker"),c.triggerHaptic("light");const i=t+e;this.setStateQuiet({equationInput:i,trialPhase:"processing"}),y(this),this.updateEquationInputDisplay(),this.setTimeout(()=>this.submitEquationAnswer(),300)}handleEquationDelete(){const{equationInput:e}=this.state;e.length!==0&&(c.triggerHaptic("light"),this.setStateQuiet({equationInput:e.slice(0,-1)}),this.updateEquationInputDisplay())}handleEquationClear(){const{equationInput:e}=this.state;e.length!==0&&(c.triggerHaptic("light"),this.setStateQuiet({equationInput:""}),this.updateEquationInputDisplay())}submitEquationAnswer(){const{trials:e,currentTrialIndex:t,currentEquationIndex:i,equationInput:s,userAnswers:a}=this.state,r=e[t],n=[...a,s];this.setStateQuiet({userAnswers:n,equationInput:""}),c.triggerHaptic("light"),i<r.equations.length-1?(this.setStateQuiet({currentEquationIndex:i+1}),this.showEquation()):(this.setStateQuiet({trialPhase:"recall"}),this._updateRecallVoiceText(r),this.showRecall(),this.state.isPractice&&v.preload(q(r)))}handleRecallInput(e){const{trials:t,currentTrialIndex:i,userRecall:s}=this.state,a=t[i];if(s.length>=a.length)return;h.stopSpeak("task-header-speaker"),c.triggerHaptic("light");const r=s+e;this.setStateQuiet({userRecall:r}),this.updateRecallDisplay()}handleRecallConfirm(){const{userRecall:e}=this.state;!e||e.length===0||(h.stopSpeak("task-header-speaker"),c.triggerHaptic("medium"),this.submitRecall())}handleRecallDelete(){const{userRecall:e}=this.state;e.length!==0&&(c.triggerHaptic("light"),this.setStateQuiet({userRecall:e.slice(0,-1)}),this.updateRecallDisplay())}handleRecallClear(){const{userRecall:e}=this.state;e.length!==0&&(h.stopSpeak("task-header-speaker"),c.triggerHaptic("light"),this.setStateQuiet({userRecall:e.slice(0,-1)}),this.updateRecallDisplay())}handleRecallNotRemembered(){if(this.state.trialPhase==="recall"){if(c.triggerHaptic("light"),this.state.isPractice){h.stopSpeak("task-header-speaker"),this.setStateQuiet({userRecall:""}),this.updateRecallDisplay(),this.submitRecall();return}this.setStateQuiet({isSkipNoticeOpen:!0}),y(this),this.showSkipNotice(()=>{this.setStateQuiet({userRecall:"",isSkipNoticeOpen:!1}),y(this),this.updateRecallDisplay(),this.submitRecall()},()=>{this.setStateQuiet({isSkipNoticeOpen:!1}),y(this)})}}showSkipNotice(e,t){const i=document.createElement("div");i.style.cssText=`
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
    `,i.querySelector("#skip-notice-confirm").addEventListener("click",()=>{c.stopSpeak(),i.remove(),e()}),i.querySelector("#skip-notice-cancel").addEventListener("click",()=>{c.stopSpeak(),i.remove(),t()}),document.body.appendChild(i),c.speak(E)}submitRecall(){const{trials:e,currentTrialIndex:t,userRecall:i,userAnswers:s,results:a,maxSpan:r,startTime:n,isPractice:o,practiceCorrectCount:l,practiceCorrectRequired:u}=this.state,d=e[t];this.setStateQuiet({trialPhase:"processing"}),y(this);const f=d.correctAnswers.join(""),m=i===f;c.triggerHaptic(m?"medium":"light");const k={trialIndex:t,isCorrect:m,reactionTime:Date.now()-n,response:i,expectedResponse:f,userInputtedAnswers:s,correctAnswers:d.correctAnswers,timestamp:Date.now(),metadata:{spanLength:d.length}};this.setStateQuiet({results:[...a,k]}),o?this.handlePracticeResult(m,d):this.handleMainTrialResult(m)}handlePracticeResult(e,t){const{practiceCorrectCount:i,practiceCorrectRequired:s,practiceGroupIndex:a,practiceStage:r,practiceStageCorrectCount:n}=this.state;if(e)this.showPracticeFeedbackCustom(!0,null,()=>{const o=i+1,l=n+1;let u=r,d=l;r===1&&l>=2&&(u=2,d=0),this.setStateQuiet({practiceCorrectCount:o,practiceGroupIndex:a+1,practiceStage:u,practiceStageCorrectCount:d}),o>=s?this.setState({phase:"practice-complete"}):(this.updateProgress(),this.generateAndStartPracticeTrial())});else{const o=t.correctAnswers.join("、"),l=t.correctAnswers.length;let u;l===1?u=`本题出现了1道算式，计算结果为${o}，所以最后方框里应该填入${o}`:u=`本题出现了${l}道算式，计算结果依次为${o}，所以最后方框里应该填入${o}`;const d=q(t);this.showPracticeFeedbackCustom(!1,u,()=>{this.setStateQuiet({practiceGroupIndex:a+1}),this.generateAndStartPracticeTrial()},d)}}showPracticeFeedbackCustom(e,t,i,s){this.setStateQuiet({trialPhase:"feedback"}),y(this),window.LockableButton&&window.LockableButton.lockAll(),e?w.playCorrect():w.playError();const a=document.getElementById("recall-keyboard-area");if(!a){i&&this.setTimeout(i,1500);return}const r=document.createElement("div");r.id="practice-feedback-overlay",r.style.cssText=`
      position: absolute; inset: -0.4rem; z-index: 50;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 2.4rem; padding: 2.4rem 4rem;
      background: rgba(15,23,43,0.6);
      backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      border-radius: 2rem; pointer-events: auto; overflow: hidden;
    `;const n=e?"rgba(0,201,80,0.9)":"rgba(251,44,54,0.9)",o=e?'<svg viewBox="0 0 24 24" fill="white" style="width: 5rem; height: 5rem;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>':'<svg viewBox="0 0 24 24" fill="white" style="width: 5rem; height: 5rem;"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';let l="";!e&&t&&(l=`
        <p style="font-size: 2.4rem; line-height: 1.6; color: white; text-align: center; font-weight: 600;
                  max-width: 90%; margin: 0;">${t}</p>
      `),r.innerHTML=`
      <div class="animate-scale-in" style="
        width: 12rem; height: 12rem; border-radius: 50%;
        display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        background: ${n}; border: 0.4rem solid white;
        box-shadow: 0 2.5rem 5rem rgba(0,0,0,0.25);
      ">
        ${o}
      </div>
      ${l}
    `,a.appendChild(r);const u=()=>{const d=document.getElementById("practice-feedback-overlay");d&&d.remove(),window.LockableButton&&window.LockableButton.unlockAll(),i&&i()};if(e)this.setTimeout(u,800);else{let d=!1;const f=()=>{d||(d=!0,u())};if(t){const m=s||t;c.speak(m,{onEnd:()=>{this.setTimeout(f,500)}}),this.setTimeout(f,15e3)}else this.setTimeout(f,1200)}}handleMainTrialResult(e){const{trials:t,currentTrialIndex:i,currentLength:s,currentLengthTrialIndex:a,currentLengthCorrectCount:r,currentLengthWrongCount:n,maxSpan:o}=this.state;t[i];const l=p.OPERATION_SPAN.trialsPerLength,u=e?r+1:r,d=e?n:n+1;this.setStateQuiet({currentLengthCorrectCount:u,currentLengthWrongCount:d}),(()=>{if(d>=2){const k=s-1;this.setStateQuiet({maxSpan:k}),this.finishTask();return}if(u>=2){this.advanceToNextLength();return}const m=a+1;if(m<l)this.setStateQuiet({currentLengthTrialIndex:m}),this.state.currentTrialIndex++,this.startTrial();else{const k=s-1;this.setStateQuiet({maxSpan:k}),this.finishTask()}})()}advanceToNextLength(){const{currentLength:e,maxSpan:t}=this.state,i=p.OPERATION_SPAN,s=e+1,a=Math.max(t,e);if(s>i.maxLength){this.setStateQuiet({maxSpan:a}),this.finishTask();return}this.showLevelUpTransition(s,a)}showLevelUpTransition(e,t){h.hideVoicePill();const i=this.$("#task-content");i&&(i.innerHTML=`
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
      `),this.setTimeout(()=>{const s=p.OPERATION_SPAN,a=C.generateOperationSpanTrials(e,s.trialsPerLength);this.setStateQuiet({currentLength:e,currentLengthTrialIndex:0,currentLengthCorrectCount:0,currentLengthWrongCount:0,trials:a,currentTrialIndex:0,maxSpan:t}),this.startTrial()},2e3)}handlePhaseComplete(){const{isPractice:e}=this.state;e?this.setState({phase:"practice-complete"}):this.finishTask()}restartPractice(){this.startPractice()}_saveMainProgress(){const{results:e,maxSpan:t,currentLength:i,currentLengthTrialIndex:s,currentLengthCorrectCount:a,currentLengthWrongCount:r,trials:n,currentTrialIndex:o,startTime:l}=this.state;g.saveTaskProgress("operation-span",{version:1,startTime:l,results:e,maxSpan:t,currentLength:i,currentLengthTrialIndex:s,currentLengthCorrectCount:a,currentLengthWrongCount:r,trials:n,currentTrialIndex:o})}resumeMain(){c.stopSpeak(),window.WelcomeBack&&b.cleanup();const e=g.getTaskProgress("operation-span");if(!e||!e.trials){this.startMain();return}this.setState({phase:"main",isPractice:!1,trials:e.trials,currentTrialIndex:e.currentTrialIndex,currentEquationIndex:0,results:e.results,maxSpan:e.maxSpan,currentLength:e.currentLength,currentLengthTrialIndex:e.currentLengthTrialIndex,currentLengthCorrectCount:e.currentLengthCorrectCount,currentLengthWrongCount:e.currentLengthWrongCount,startTime:e.startTime,trialPhase:"group-hint",equationInput:"",userAnswers:[],userRecall:""}),this.setTimeout(()=>{e.currentLengthTrialIndex===0&&e.currentLength>p.OPERATION_SPAN.startLength?this.showLevelUpTransition(e.currentLength,e.maxSpan):this.startTrial()},50)}resetForReplay(){c.stopSpeak(),window.WelcomeBack&&b.cleanup(),g.clearTaskProgress("operation-span"),this.goToPracticePhase2()}finishTask(){g.clearTaskProgress("operation-span");const{results:e,maxSpan:t,startTime:i,currentLength:s}=this.state,a=e.length>0?e.filter(o=>o.isCorrect).length/e.length:0,r=t,n={taskType:"operation-span",module:"working-memory",startTime:i,endTime:Date.now(),trials:e,rawScore:r,metrics:{maxSpan:r,workingMemorySpan:r,accuracy:a,stoppedAtLength:s}};z(this,n),A.onTaskComplete("operation-span",n)}}A.registerTask("operation-span",_);
