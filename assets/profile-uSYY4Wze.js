import{C as _,K as v,A as b,S as E,U as y,z as $,c as B,e as s,V as I,d as N,B as V}from"./assessment-DenQRj50.js";import{A as g}from"./app-DLvXa5dK.js";import{C as w,H as K}from"./character-ai-iframe-BpemK4np.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./state-store-BDNRjphJ.js";import"./sop-manager-DBsvwz6-.js";const A={0:"欢迎来到忆启时光。开始使用前，请告诉我们一些您的信息吧",1:"请告诉我们您的名字",2:"请告诉我们您的年龄",3:"请告诉我们您的性别",4:"请告诉我们您的受教育程度"},S={0:{label:"用户信息采集页面 — 欢迎开场卡",hint:"当前是个人信息采集流程的开场欢迎卡。请简短问候用户后引导其点击「开始」按钮进入信息采集；如果用户明确同意开始，可主动点击「开始」按钮推进流程。"},1:{label:"用户信息采集页面 — 姓名填写步骤",hint:"当前是个人信息采集的姓名步骤。请先协助用户填写姓名；如果姓名输入框已有内容且“下一步”按钮可点击，请主动点击“下一步”继续流程。"},2:{label:"用户信息采集页面 — 年龄填写步骤",hint:"当前是个人信息采集的年龄步骤。请协助用户填写周岁年龄；如果年龄输入框已有有效内容且“下一步”按钮可点击，请主动点击“下一步”继续流程。"},3:{label:"用户信息采集页面 — 性别选择步骤",hint:"当前是个人信息采集的性别步骤。请根据用户意愿选择“男性”“女性”或“保密”；选择完成后，如果“下一步”按钮可点击，请主动点击继续流程。"},4:{label:"用户信息采集页面 — 受教育程度步骤",hint:"当前是个人信息采集的受教育程度步骤。请协助用户选择最合适的受教育程度；选择完成且“完成”按钮可点击后，请主动点击“完成”提交信息。"},5:{label:"用户信息采集页面 — 完成确认步骤",hint:"当前是个人信息采集完成提示页。用户已完成首个使用者的信息采集；如用户无异议，可点击“好的”直接进入应用首页。"}},k={小学及以下:6,初中:9,中专:12,高中:12,大专:15,本科:16,硕士:19,博士:22},H=["小学及以下","初中","中专","高中","大专","本科","硕士","博士"];class G extends _{constructor(){super(),this.state={currentStep:0,name:"",age:"",gender:null,education:"",isLoading:!1},this._keyboardHeight=0,this._isKeyboardVisible=!1,this.handleKeyboardChange=this.handleKeyboardChange.bind(this),this.handleInputFocus=this.handleInputFocus.bind(this)}async onMount(){var t;this._preloadAssessmentIntroVoice();let e=null;if(v.isAvailable())try{e=await b.load(!1)}catch(a){console.warn("[ProfilePage] Keepwork 加载档案失败:",a)}if(e&&!e._draftStep&&E.hasAssessmentProgress()){y.showToast("请先完成当前测评后再修改个人信息"),await g.navigateWithControl("splash",{},{clearHistory:!0,reason:"assessment-in-progress"});return}if(e){if($(e)&&((t=B.CHARACTER_AI)!=null&&t.skipProfileWhenPreFilled)){console.log("[ProfilePage] AI 已采集完整 profile，跳过信息采集页"),g.navigateWithControl("role-select",{},{clearHistory:!0,reason:"profile-ready"});return}const a=e.name||"",i=e._draftStep===1&&!a.trim()?0:e._draftStep||0;this.setState({name:a,age:e.age?String(e.age):"",gender:e.gender||null,education:e.education||"",currentStep:i})}window.addEventListener("keyboard-change",this.handleKeyboardChange),this.autoFocusInput(),this.speakCurrentStep(),this._showCharacterAiWhenReady()}onUnmount(){window.removeEventListener("keyboard-change",this.handleKeyboardChange),s.stopSpeak(),this._autoNavTimer&&(clearTimeout(this._autoNavTimer),this._autoNavTimer=null),w.hideEmbedded()}_preloadAssessmentIntroVoice(){I.preload(A[0]).catch(e=>{console.warn("[ProfilePage] 欢迎语音预加载异常:",e)}),I.preload(N()).catch(e=>{console.warn("[ProfilePage] 测评说明语音预加载异常:",e)})}speakCurrentStep(){const e=A[this.state.currentStep];e&&(s.stopSpeak(),s.speak(e))}async _showCharacterAiWhenReady(){!await w.whenReady()||!this.mounted||(w.showEmbedded({top:"auto",left:"auto",bottom:"7rem",right:"1.6rem",width:"32rem",height:"38rem"}),this.triggerProfileHeartbeat("profile-mounted"))}getProfileStepStateText(){const{currentStep:e,name:t,age:a,gender:i,education:n}=this.state,r=[`姓名${t.trim()?"已填写":"未填写"}`,`年龄${a?"已填写":"未填写"}`,`性别${i?"已选择":"未选择"}`,`受教育程度${n?"已选择":"未选择"}`],o=e===0?"开始":e===4?"完成":e===5?"好的":"下一步",l=(e===5?!0:this.canProceed())?`「${o}」按钮可点击`:`「${o}」按钮暂不可点击`;return`当前步骤 ${e}/5；${r.join("，")}；${l}`}getProfileStepActionText(){switch(this.state.currentStep){case 0:return'开始按钮 selector: button[aria-label="开始采集"]。';case 1:return"姓名输入框 selector: #name-input；下一步按钮 selector: #next-btn。";case 2:return'年龄输入框 selector: #age-input；上一步按钮 selector: button[aria-label="上一步"]；下一步按钮 selector: #next-btn。';case 3:return"性别按钮 selectors: #gender-btn-male, #gender-btn-female, #gender-btn-other；下一步按钮 selector: #next-btn。";case 4:return"教育程度按钮 selector 格式: #edu-btn-选项名；完成按钮 selector: #next-btn。";case 5:return"确认按钮 selector: .profile-complete-btn。";default:return""}}triggerProfileHeartbeat(e="profile-state-changed"){var r,o;const t=(o=(r=w).getDHF)==null?void 0:o.call(r);if(!(t!=null&&t.triggerVoiceHeartbeat))return;const a=this.state.currentStep,i=S[a]||S[1],n=K.getAppTriggeredHeartbeatPrompt({pageName:"profile",reason:e,label:i.label,hint:i.hint,stateText:this.getProfileStepStateText(),actionText:this.getProfileStepActionText()});t.triggerVoiceHeartbeat({text:n,page:"profile",reason:e,step:a},{ignoreCooldown:!0,ignoreMaxCount:!0,countTowardMax:!1,updateCooldown:!1,resetSilenceTimer:!0}).catch(c=>{console.warn("[ProfilePage] 主动触发数字人 heartbeat 失败:",c)})}autoFocusInput(){setTimeout(()=>{const{currentStep:e}=this.state;if(e===1){const t=document.getElementById("name-input");t&&t.focus()}else if(e===2){const t=document.getElementById("age-input");t&&t.focus()}},100)}handleKeyboardChange(e){const{visible:t,height:a}=e.detail;this._keyboardHeight=t&&a||0,this._isKeyboardVisible=!!t;const i=document.getElementById("profile-scroll-area"),n=window.innerHeight>window.innerWidth;if(this.updateCardWrapForKeyboard(n),i)if(this._keyboardHeight>0){const r=Math.max(120,this._keyboardHeight+24);i.style.paddingBottom=`${r}px`,i.style.paddingTop=n?"24px":"0px"}else i.style.paddingBottom="0px",i.style.paddingTop="0px";t&&document.activeElement&&(setTimeout(()=>{n?this.scrollCardIntoVisibleCenter("smooth"):this.scrollFocusedInputIntoView("smooth")},160),setTimeout(()=>{n&&this.scrollCardIntoVisibleCenter("smooth")},320),setTimeout(()=>{n&&this.scrollCardIntoVisibleCenter("smooth")},520))}handleInputFocus(){setTimeout(()=>{this.updateCardWrapForKeyboard(window.innerHeight>window.innerWidth),this._isKeyboardVisible&&window.innerHeight>window.innerWidth?this.scrollCardIntoVisibleCenter("smooth"):this.scrollFocusedInputIntoView("smooth")},50),setTimeout(()=>{this.updateCardWrapForKeyboard(window.innerHeight>window.innerWidth),this._isKeyboardVisible&&window.innerHeight>window.innerWidth?this.scrollCardIntoVisibleCenter("smooth"):this.scrollFocusedInputIntoView("smooth")},280)}updateCardWrapForKeyboard(e){const t=document.getElementById("profile-card-wrap");if(t)if(e&&this._isKeyboardVisible&&this._keyboardHeight>0){const a=Math.max(120,this._keyboardHeight+24);t.style.minHeight=`calc(100% + ${a}px)`}else t.style.minHeight="100%"}scrollCardIntoVisibleCenter(e="auto"){const t=document.getElementById("profile-scroll-area"),a=document.getElementById("profile-main-card");if(!t||!a)return;const i=t.getBoundingClientRect(),n=a.getBoundingClientRect(),r=t.scrollTop;let o=i.top,c=i.height;const l=window.visualViewport;if(l){const f=l.offsetTop,T=l.offsetTop+l.height,m=Math.max(i.top,f),u=Math.min(i.bottom,T);u>m&&(o=m,c=u-m)}else this._keyboardHeight>0&&(c=Math.max(120,i.height-this._keyboardHeight));const h=n.top+n.height/2,P=o+c/2,x=h-P;let p=r+x;const d=Math.max(0,t.scrollHeight-t.clientHeight);p<0&&(p=0),p>d&&(p=d),t.scrollTo({top:p,behavior:e})}scrollFocusedInputIntoView(e="auto"){const t=document.activeElement;if(!t||!(t.tagName==="INPUT"||t.tagName==="TEXTAREA"))return;const i=document.getElementById("profile-scroll-area");if(!i){t.scrollIntoView({block:"center",behavior:e});return}const n=i.getBoundingClientRect(),r=t.getBoundingClientRect(),o=i.scrollTop;let c=n.top,l=n.height;const h=window.visualViewport;if(h){const T=h.offsetTop,m=h.offsetTop+h.height,u=Math.max(n.top,T),C=Math.min(n.bottom,m);C>u&&(c=u,l=C-u)}else this._keyboardHeight>0&&(l=Math.max(120,n.height-this._keyboardHeight));const P=r.top+r.height/2,x=c+l/2,p=P-x;let d=o+p;const f=Math.max(0,i.scrollHeight-i.clientHeight);d<0&&(d=0),d>f&&(d=f),i.scrollTo({top:d,behavior:e})}handleNameInput(e){if(e.length>10){this.showValidationTip("请输入少于10个字"),e=e.substring(0,10);const t=document.getElementById("name-input");t&&(t.value=e)}this.setStateQuiet({name:e}),this.updateNextButton()}handleAgeInput(e){if(e.length>3){this.showValidationTip("请输入少于3位数"),e=e.substring(0,3);const t=document.getElementById("age-input");t&&(t.value=e)}this.setStateQuiet({age:e}),this.updateNextButton()}handleGenderSelect(e){this.state.gender!==e&&(s.triggerHaptic("light"),this.setStateQuiet({gender:e}),this.updateGenderButtons(e),this.updateNextButton())}handleEducationSelect(e){this.state.education!==e&&(s.triggerHaptic("light"),this.setStateQuiet({education:e}),this.updateEducationButtons(e),this.updateNextButton())}showValidationTip(e){const t=document.getElementById("validation-tip");t&&(t.textContent=e,t.classList.add("visible"),this._tipTimer&&clearTimeout(this._tipTimer),this._tipTimer=setTimeout(()=>{t.classList.remove("visible")},2e3))}updateGenderButtons(e){["male","female","other"].forEach(a=>{const i=document.getElementById(`gender-btn-${a}`);i&&i.classList.toggle("active",a===e)})}updateEducationButtons(e){H.forEach(t=>{const a=document.getElementById(`edu-btn-${t}`);a&&a.classList.toggle("active",t===e)})}updateNextButton(){const e=document.getElementById("next-btn");if(!e)return;const t=e.disabled,a=this.canProceed();e.disabled=!a,t&&a&&setTimeout(()=>{this.triggerProfileHeartbeat("profile-action-ready")},500)}canProceed(){const{currentStep:e,name:t,age:a,gender:i,education:n}=this.state;if(e===0)return!0;switch(e){case 1:return t.trim().length>0;case 2:return a.length>0;case 3:return i!==null;case 4:return n!=="";default:return!1}}async handlePrev(){s.triggerHaptic("light");const{currentStep:e}=this.state;if(s.stopSpeak(),e===0){g.navigateWithControl("login-gateway",{},{replaceHistory:[]});return}if(e===1){const a=await b.load();a&&a._draftStep&&(delete a._draftStep,v.isAvailable()&&b.save(a).catch(i=>{console.warn("[ProfilePage] Keepwork 清除草稿状态失败:",i)})),this.setState({currentStep:0}),this.triggerProfileHeartbeat("profile-step-back");return}const t=e-1;this.setState({currentStep:t}),this.saveDraft(t),this.autoFocusInput(),this.speakCurrentStep(),this.triggerProfileHeartbeat("profile-step-back")}handleNext(){if(s.triggerHaptic("light"),!this.canProceed())return;const{currentStep:e}=this.state;if(s.stopSpeak(),e===4)this.handleSubmit();else{const t=e+1;this.setState({currentStep:t}),this.saveDraft(t),this.autoFocusInput(),this.speakCurrentStep(),this.triggerProfileHeartbeat("profile-step-next")}}saveDraft(e){const{name:t,age:a,gender:i,education:n}=this.state,r={name:t,age:a?parseInt(a):null,gender:i,education:n,educationYears:n?k[n]:null,_draftStep:e,updatedAt:Date.now()};v.isAvailable()&&b.save(r).catch(o=>{console.warn("[ProfilePage] Keepwork 保存档案失败:",o)})}async handleSubmit(){const{name:e,age:t,gender:a,education:i}=this.state;this.setState({isLoading:!0});const n={id:`user_${Date.now()}`,name:e.trim(),age:parseInt(t),gender:a,education:i,educationYears:k[i],createdAt:Date.now(),updatedAt:Date.now(),_draftStep:null};if(v.isAvailable())try{await b.save(n)}catch(o){console.warn("[ProfilePage] Keepwork 保存档案失败:",o)}g.postMessage({type:"PROFILE_SAVED",profile:n}),this.setState({isLoading:!1}),this.setState({currentStep:5}),this.triggerProfileHeartbeat("profile-completed"),s.speak("信息采集完成！让我们正式开始忆启时光吧！"),this._autoNavTimer=setTimeout(()=>{s.stopSpeak(),g.navigateWithControl("splash",{},{clearHistory:!0,reason:"first-profile-ready"})},1e4)}handleCompleteConfirm(){this._autoNavTimer&&(clearTimeout(this._autoNavTimer),this._autoNavTimer=null),s.stopSpeak(),g.navigateWithControl("splash",{},{clearHistory:!0,reason:"first-profile-ready"})}renderStep0(){return`
      <div class="welcome-card fade-in" style="box-shadow: none; background: transparent; border: none; width: auto; height: auto;">
        <!-- 图标 -->
        <div class="welcome-icon-circle">
          <div class="welcome-icon-crop"></div>
        </div>

        <!-- 文案 -->
        <div class="welcome-text">
          <p>欢迎来到【忆启时光】</p>
          <p>开始使用前，请告诉我们一些您的信息吧</p>
        </div>

        <!-- 开始按钮 -->
        <button onclick="App.currentPage.handleNext()" class="btn-press welcome-start-btn" aria-label="开始采集" data-ai-hint="点击开始个人信息采集流程">
          开始
        </button>
      </div>
    `}renderStep1(){const{name:e}=this.state,t=e.trim().length>0;return`
      <p class="profile-title">请告诉我们您的名字</p>
      
      <div class="relative">
        <div id="validation-tip" class="profile-validation-tip"></div>
        <input type="text" 
               id="name-input"
               value="${y.escapeHtml(e)}"
               oninput="App.currentPage.handleNameInput(this.value)"
           onfocus="App.currentPage.handleInputFocus()"
               placeholder="请输入您的名字"
               maxlength="11"
               class="profile-input"
               aria-label="姓名" data-ai-hint="输入用户姓名">
      </div>
      
      <div class="flex items-center justify-center" style="gap: 2.4rem;">
        <button id="next-btn"
                onclick="App.currentPage.handleNext()"
                ${t?"":"disabled"}
                class="btn-3d-primary"
                aria-label="下一步" data-ai-hint="确认姓名并进入下一步">
          下一步
        </button>
      </div>
    `}renderStep2(){const{age:e}=this.state,t=e.length>0;return`
      <p class="profile-title">请告诉我们您的年龄（周岁）</p>
      
      <div class="relative">
        <div id="validation-tip" class="profile-validation-tip"></div>
        <input type="number" 
               id="age-input"
               value="${e}"
               oninput="App.currentPage.handleAgeInput(this.value)"
           onfocus="App.currentPage.handleInputFocus()"
               placeholder="请输入年龄"
               inputmode="numeric"
               pattern="[0-9]*"
               class="profile-input"
               aria-label="年龄" data-ai-hint="输入用户年龄（周岁）">
      </div>
      
      <div class="flex items-center justify-center" style="gap: 2.4rem;">
        <button onclick="App.currentPage.handlePrev()"
                class="btn-3d-secondary"
                aria-label="上一步" data-ai-hint="返回上一步修改姓名">
          上一步
        </button>
        <button id="next-btn"
                onclick="App.currentPage.handleNext()"
                ${t?"":"disabled"}
                class="btn-3d-primary"
                aria-label="下一步" data-ai-hint="确认年龄并进入下一步">
          下一步
        </button>
      </div>
    `}renderStep3(){const{gender:e}=this.state;return`
      <p class="profile-title">请告诉我们您的性别</p>
      
      <div class="flex items-center justify-center" style="gap: 3.2rem;">
        <button id="gender-btn-male"
                onclick="App.currentPage.handleGenderSelect('male')"
                class="btn-option-gender${e==="male"?" active":""}"
                aria-label="男性" data-ai-hint="选择性别为男性">
          男性
        </button>
        <button id="gender-btn-female"
                onclick="App.currentPage.handleGenderSelect('female')"
                class="btn-option-gender${e==="female"?" active":""}"
                aria-label="女性" data-ai-hint="选择性别为女性">
          女性
        </button>
        <button id="gender-btn-other"
                onclick="App.currentPage.handleGenderSelect('other')"
                class="btn-option-gender${e==="other"?" active":""}"
                aria-label="保密" data-ai-hint="选择不公开性别">
          保密
        </button>
      </div>
      
      <div class="flex items-center justify-center" style="gap: 2.4rem;">
        <button onclick="App.currentPage.handlePrev()"
                class="btn-3d-secondary"
                aria-label="上一步" data-ai-hint="返回上一步修改年龄">
          上一步
        </button>
        <button id="next-btn"
                onclick="App.currentPage.handleNext()"
                ${e!==null?"":"disabled"}
                class="btn-3d-primary"
                aria-label="下一步" data-ai-hint="确认性别并进入下一步">
          下一步
        </button>
      </div>
    `}renderStep4(){const{education:e,isLoading:t}=this.state,a=e!=="";return`
      <p class="profile-title">请告诉我们您的受教育程度</p>
      
      <div class="w-full" style="padding: 0 3.2rem;">
        <div class="grid grid-cols-4" style="gap: 1.6rem;">
          ${H.map(i=>`
            <button id="edu-btn-${i}"
                    onclick="App.currentPage.handleEducationSelect('${i}')"
                    class="btn-option-edu${e===i?" active":""}"
                    aria-label="${i}" data-ai-hint="选择受教育程度为${i}">
              ${i}
            </button>
          `).join("")}
        </div>
      </div>
      
      <div class="flex items-center justify-center" style="gap: 2.4rem;">
        <button onclick="App.currentPage.handlePrev()"
                class="btn-3d-secondary"
                aria-label="上一步" data-ai-hint="返回上一步修改性别">
          上一步
        </button>
        <button id="next-btn"
                onclick="App.currentPage.handleNext()"
                ${a&&!t?"":"disabled"}
                class="btn-3d-primary"
                aria-label="完成" data-ai-hint="确认教育程度并完成信息采集">
          ${t?"保存中...":"完成"}
        </button>
      </div>
    `}renderStep5(){return`
      <div class="flex flex-col items-center" style="gap: 3.2rem;">
        <!-- 庆祝图标（蓝色圆底 + 🎉 emoji） -->
        <div class="profile-complete-icon">
          <span class="profile-complete-emoji">🎉</span>
        </div>
        <!-- 文案 -->
        <div class="profile-complete-text">
          <p>信息采集完成!</p>
          <p>让我们正式开始忆启时光吧！</p>
        </div>
        <!-- 确认按钮 -->
        <button onclick="App.currentPage.handleCompleteConfirm()"
                class="profile-complete-btn">
          好的
        </button>
      </div>
    `}render(){const e=window.innerHeight>window.innerWidth,{currentStep:t}=this.state,a=S[t]||S[1],i=y.escapeHtml(a.label),n=y.escapeHtml(a.hint);let r="";switch(t){case 0:r=this.renderStep0();break;case 1:r=this.renderStep1();break;case 2:r=this.renderStep2();break;case 3:r=this.renderStep3();break;case 4:r=this.renderStep4();break;case 5:r=this.renderStep5();break}return`
      <div class="page-bg-profile h-full relative overflow-hidden"
           aria-label="${i}"
           data-ai-hint="${n}">
        <!-- 左上返回按钮 -->
        <div class="module-topbar">
          <button class="sm-nav-back" onclick="App.navigateWithControl('login-gateway', {}, { replaceHistory: [] })" aria-label="返回" data-ai-hint="返回登录页">
            ${V}
          </button>
        </div>
        
        <!-- 内容卡片（容器内滚动，避免键盘弹出时页面缩放） -->
        <div id="profile-scroll-area" class="absolute inset-0" style="overflow-y: auto; overflow-x: hidden; -webkit-overflow-scrolling: touch;">
          <div id="profile-card-wrap" class="flex items-center justify-center" style="min-height: 100%;${e?" padding: 2.4rem;":""}">
            <div id="profile-main-card" class="profile-card${e?" profile-card-portrait":""} flex items-center justify-center">
              <div class="fade-in flex flex-col items-center w-full" style="gap: 3.2rem;">
                ${r}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    `}}export{G as ProfilePage};
