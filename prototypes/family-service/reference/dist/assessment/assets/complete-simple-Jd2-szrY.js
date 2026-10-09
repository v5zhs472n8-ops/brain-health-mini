import{A as V,S as x,U as E,z as B,n as F,m as W,h as G,K as L,b as S,C as X}from"./base-component-DLCjIPPq.js";function D(d){return d?JSON.parse(JSON.stringify(d)):{}}async function Z(d,e){var t;return((t=d==null?void 0:d.profileBinding)==null?void 0:t.mode)==="account-live"?{mode:"account-live",profile:D(await V.load())}:e&&typeof e=="object"&&Object.keys(e).length>0?{mode:"legacy-snapshot",profile:D(e)}:{mode:"legacy-unknown",profile:{}}}const J=8e3;let P=!1,w=null,I=0,v=null,_={},A={},O={};const R=new Map;function Y(d){if(R.has(d))return R.get(d);const e=x.preloadRealtime(d).catch(t=>{throw R.delete(d),t});return R.set(d,e),e}class z{static render(e={}){const{id:t="speaker-btn",text:i="",size:s="medium",tone:o="soft",color:a="currentColor",ghost:l=!1,label:r="",fontSize:n="1.6rem",iconSize:c="2.4rem",preload:y=!1,onClick:p=null,texts:h=null,realtime:g=!1}=e;if(p&&(_[t]=p),Array.isArray(h)?A[t]=h.filter(T=>typeof T=="string"&&T.trim()):delete A[t],O[t]=g,g&&y){const T=Array.isArray(h)&&h.length?h:[i];Promise.allSettled(T.filter(C=>typeof C=="string"&&C.trim()).map(C=>Y(C))).catch(()=>{})}const b=`<svg class="speaker-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.8 6.4L7.1 9.3H4.8c-.45 0-.8.35-.8.8v3.8c0 .45.35.8.8.8h2.3l3.7 2.9c.53.41 1.3.03 1.3-.64V7.04c0-.67-.77-1.05-1.3-.64z" fill="currentColor"/>
      <path class="speaker-wave wave-1" d="M14.35 9.45a4.3 4.3 0 0 1 0 5.1" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>
      <path class="speaker-wave wave-2" d="M16.95 7.15a7.6 7.6 0 0 1 0 9.7" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>
    </svg>`,u=`<svg class="speaker-loading-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" stroke-dasharray="18 32" stroke-linecap="round"/>
    </svg>`,f=l?" speaker-btn-ghost":"",$=o==="primary"?" speaker-btn-primary":"",M=r?" speaker-btn-labeled":"",K=l?` style="color: ${a}"`:"";return`
      <button id="${t}" 
              onclick="SpeakerButton.play('${t}', '${i.replace(/'/g,"\\'")}')"
              class="speaker-button speaker-btn-circle speaker-btn-${s}${$}${f}${M}"
              aria-label="播放语音提示"
              data-ai-hint="点击播放语音：${i.slice(0,30).replace(/"/g,"&quot;")}"
              data-text="${i}"${K}>
        <span class="speaker-icon-wrap" style="${r?`width: ${c}; height: ${c};`:""}">${b}${u}</span>${r?`<span class="speaker-label" style="font-size: ${n};">${r}</span>`:""}
      </button>
    `}static play(e,t,i={}){var u;const{isUserClick:s=!0,onEnd:o=null}=i,a=document.getElementById(e);if(!a)return;const l=O[e]===!0;s&&_[e]&&_[e]();const r=(u=A[e])!=null&&u.length?[...A[e]]:[a.dataset.text&&a.dataset.text.trim()||t];this.stop(),document.querySelectorAll(".speaker-button.is-playing").forEach(f=>{f.classList.remove("is-playing"),f.classList.remove("is-loading")}),a.classList.add("is-playing"),P=!0;const n=++I,c=()=>n===I,y=()=>{if(c()&&(a.classList.remove("is-playing"),a.classList.remove("is-loading"),P=!1,w=null,v&&(window.clearTimeout(v),v=null),typeof o=="function"))try{o()}catch(f){console.error("SpeakerButton.onEnd callback error",f)}},p=()=>{c()&&(this.stop(),E.showToast("语音播放失败，请稍后重试"))},h=()=>{c()&&(a.classList.remove("is-loading"),v&&(window.clearTimeout(v),v=null))};let g=0;const b=()=>{if(!c())return;const f=r[g++];if(!f){y();return}v&&(window.clearTimeout(v),v=null),l&&(a.classList.add("is-loading"),v=window.setTimeout(p,J));try{w=x.speak(f,{onEnd:b,onError:l?p:void 0,onLoaded:l?h:void 0,useCache:l,realtime:l}),w!=null&&w.catch&&w.catch(p)}catch{p()}};b()}static stop(){var t;I+=1,v&&(window.clearTimeout(v),v=null);try{(t=w==null?void 0:w.stop)==null||t.call(w)}catch{}const e=document.getElementById("keepwork-audio");if(e)try{e.pause(),e.currentTime=0}catch{}x.stopSpeak(),document.querySelectorAll(".speaker-button.is-playing").forEach(i=>{i.classList.remove("is-playing"),i.classList.remove("is-loading")}),P=!1,w=null}static autoPlay(e,t,i=1e3){return setTimeout(()=>{this.play(e,t,{isUserClick:!1})},i)}static isPlaying(){return P}static updateText(e,t){const i=document.getElementById(e);i&&(i.dataset.text=t)}static registerOnClick(e,t){t?_[e]=t:delete _[e]}}const U=document.createElement("style");U.textContent=`
  /* 声波弧线默认显示（静态半透明） */
  .speaker-button .speaker-wave {
    opacity: 0.45;
    transition: opacity 0.2s ease;
  }

  .speaker-icon-wrap {
    display: inline-flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .speaker-loading-icon {
    display: none;
    width: 70%;
    height: 70%;
    animation: speaker-loading-spin 0.8s linear infinite;
  }

  .speaker-button.is-loading .speaker-icon {
    display: none;
  }

  .speaker-button.is-loading .speaker-loading-icon {
    display: block;
  }

  .speaker-btn-labeled {
    width: auto !important;
    height: 3.6rem !important;
    border-radius: 0;
    padding: 0 !important;
  }

  .speaker-btn-labeled .speaker-icon-wrap {
    width: 2.4rem;
    height: 2.4rem;
    flex-shrink: 0;
  }

  .speaker-btn-labeled .speaker-label {
    font-size: 1.6rem;
    line-height: 3.6rem;
    font-weight: 600;
    white-space: nowrap;
  }

  /* 播放状态：声波弧线脉冲动画 */
  .speaker-button.is-playing .speaker-wave {
    animation: speaker-arc-pulse 1.2s ease-in-out infinite;
  }

  .speaker-button.is-playing .wave-1 {
    animation-delay: 0s;
  }

  .speaker-button.is-playing .wave-2 {
    animation-delay: 0.4s;
  }

  @keyframes speaker-arc-pulse {
    0%, 100% {
      opacity: 0.2;
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes speaker-loading-spin {
    to { transform: rotate(360deg); }
  }
`;document.head.appendChild(U);typeof window<"u"&&(window.SpeakerButton=z);const N={"processing-speed":{name:"加工速度",taskType:"pattern-comparison-simple",color:"#4CAF50",description:"反应速度"},"working-memory":{name:"工作记忆",taskType:"digit-span-backward-simple",color:"#2196F3",description:"工作记忆容量"},"executive-function":{name:"执行功能",taskType:"stop-go-switch-simple",color:"#9C27B0",description:"抑制控制与任务切换"}},Q={mean:12.28,sd:4.62},ee={mean:4.61,sd:1.37},k={"60-64":{mean:180,sd:50},"65-69":{mean:200,sd:55},"70-74":{mean:220,sd:60},"75-84":{mean:240,sd:65},default:{mean:125.23,sd:320.7}};function te(d){const e=Number(d);return Number.isFinite(e)?e>=60&&e<65?k["60-64"]:e>=65&&e<70?k["65-69"]:e>=70&&e<75?k["70-74"]:e>=75&&e<85?k["75-84"]:k.default:k.default}function ie(d,e){var c,y,p;const t=e==null?void 0:e.age,i={},s=[],o=d.find(h=>h.taskType==="pattern-comparison-simple");if(o){const h=((c=o.metrics)==null?void 0:c.score)??o.rawScore??0,g=Q,b=B(h,g.mean,g.sd),u=Math.max(-3,Math.min(3,b)),f=Math.round(70+10*u);i["processing-speed"]={...N["processing-speed"],rawScore:h,rawUnit:"分",zScore:u,tScore:f,interpretation:j(f)},s.push(u)}const a=d.find(h=>h.taskType==="digit-span-backward-simple");if(a){const h=((y=a.metrics)==null?void 0:y.maxSpan)??a.rawScore??0,g=ee,b=B(h,g.mean,g.sd),u=Math.max(-3,Math.min(3,b)),f=Math.round(70+10*u);i["working-memory"]={...N["working-memory"],rawScore:h,rawUnit:"位",zScore:u,tScore:f,interpretation:j(f)},s.push(u)}const l=d.find(h=>h.taskType==="stop-go-switch-simple");if(l){const h=((p=l.metrics)==null?void 0:p.inhibitoryControl)??0,g=te(t);let b=0;g.sd>0&&(b=B(F(h),F(g.mean),g.sd));const u=Math.max(-3,Math.min(3,b)),f=Math.round(70+10*u);i["executive-function"]={...N["executive-function"],rawScore:h,rawUnit:"ms",zScore:u,tScore:f,interpretation:j(f)},s.push(u)}const r=s.length>0?Math.max(-3,Math.min(3,W(s))):0;return{totalScore:Math.round(70+10*r),moduleScores:i}}function re(d,e){return{...ie(d,e),calculationContext:{age:Number(e==null?void 0:e.age)||null,algorithmVersion:1}}}function se(d,e,t){var i,s;return(d==null?void 0:d.totalScore)==null||!(d!=null&&d.moduleScores)?!1:t!=="account-live"?!0:((i=d==null?void 0:d.calculationContext)==null?void 0:i.age)===(Number(e==null?void 0:e.age)||null)&&((s=d==null?void 0:d.calculationContext)==null?void 0:s.algorithmVersion)===1}function j(d){return d>=90?"显著高于平均水平":d>=80?"高于平均水平":d>=75?"略高于平均水平":d>=65?"平均水平":d>=60?"略低于平均水平":d>=50?"低于平均水平":"显著低于平均水平"}function ne(d,e){const t=r=>r[Math.floor(Math.random()*r.length)],i=r=>r>=80?"优势明显":r>=75?"表现较好":r>=65?"处于稳定范围":r>=60?"略有提升空间":"需要重点关注",s=[];e>=80?s.push(t([`本次测评发现您的认知功能整体表现优秀，综合得分${e}分，说明整体认知储备较好。`,`本次认知筛查得分${e}分，您的整体认知能力表现出色，多项认知功能处于良好状态。`,`综合评估结果显示，您的认知功能整体水平优异，${e}分的表现反映了较强的日常认知支持能力。`])):e>=70?s.push(t([`本次测评发现您的认知功能整体处于正常范围，综合得分${e}分，与同龄人相比总体稳定。`,`本次认知筛查得分${e}分，整体认知功能处于正常范围，各项能力发展均衡。`,"综合评估结果显示，您的认知能力处于同龄人正常水平范围内，认知功能运转良好。"])):e>=60?s.push(t([`本次测评发现您的综合得分${e}分，整体仍具备日常认知基础，但个别能力存在提升空间。`,`本次认知筛查得分${e}分，部分认知能力表现略低于平均水平，建议给予关注。`,"综合评估结果提示，您的认知功能个别方面需要关注，建议通过针对性训练加以提升。"])):s.push(t(["本次测评发现您存在认知损伤的风险，综合认知能力较之于同龄人属于偏低水平，建议重点关注。",`本次认知筛查得分${e}分，多项认知能力有待提升，建议积极开展认知训练并定期复查。`,"综合评估结果显示，认知功能需要重点关注，建议增加认知训练频次并咨询专业人士。"]));const o=Object.entries(d).sort((r,n)=>n[1].tScore-r[1].tScore),a=o.filter(([,r])=>r.tScore>=75),l=o.filter(([,r])=>r.tScore<65);if(o.length>0){const r=o[0],n=o[o.length-1],c=t([`从三个维度看，${r[1].name}相对更突出，${n[1].name}是后续可以优先关注的方向。`,`分项结果显示，${r[1].name}目前${i(r[1].tScore)}，${n[1].name}相对需要更多练习和维护。`,"结合各项得分来看，您的认知表现并非单一维度决定，而是由加工速度、工作记忆和执行功能共同构成。"]);s.push(c)}if(a.length>0){const r=a.map(([,n])=>n.name).join("、");s.push(t([`${r}方面表现良好，说明相关认知功能保持健康。`,`在${r}维度上表现突出，体现出良好的认知储备能力。`,`${r}能力表现优于同龄人平均水平，值得保持。`]))}if(l.length>0){const r=l.map(([,p])=>p.name).join("、"),n={"working-memory":t(["如阅读记忆练习、数字游戏等有助于提升工作记忆能力。","可通过数独、卡片记忆游戏等方式进行针对性训练。","建议通过听觉记忆训练、序列回忆练习来提升工作记忆水平。"]),"processing-speed":t(["如拼图、反应类小游戏等有助于提升信息处理速度。","可通过视觉搜索训练、快速分类游戏来提升加工速度。","建议通过限时类益智游戏、快速匹配训练来提升反应能力。"]),"executive-function":t(["如策略类棋牌游戏、多任务训练有助于提升执行功能。","可通过计划性游戏、策略类运动来增强执行功能。","建议通过需要灵活切换规则的游戏和活动来锻炼执行功能。"])},c=t([`${r}得分偏低，建议适当增加相关认知训练，`,`${r}方面有提升空间，推荐进行针对性训练，`]),y=l[0][0];s.push(c+(n[y]||n["executive-function"]))}else o.length>0&&s.push(t(["当前未发现明显短板，建议继续通过规律阅读、社交交流和轻度益智活动维持认知活跃度。","各维度整体较均衡，可继续保持固定作息、适量运动和持续学习的习惯。","后续训练可以采用“少量多次”的方式，兼顾速度、记忆和执行控制三个方向。"]));return s.push(t(["建议定期进行认知评估，保持规律运动和良好生活习惯。","保持良好的睡眠与运动习惯，有助于维持和提升认知功能。","定期评估有助于跟踪认知变化，建议保持健康的生活方式。"])),s.join(`
`)}const q={accuracy:.96,meanRT:1200};function oe(d){let e=0,t=0,i=0,s=0;for(const l of d)if(!(!l.trials||!Array.isArray(l.trials)))for(const r of l.trials)t++,r.isCorrect&&e++,r.reactionTime>0&&r.isCorrect&&(i+=r.reactionTime,s++);const o=t>0?e/t:0,a=s>0?i/s:0;return{userAccuracy:o,peerAccuracy:q.accuracy,userMeanRT:a,peerMeanRT:q.meanRT}}const H={"pattern-comparison-simple":{taskName:"图形比较",ability:"加工速度",focusPoint:"反应速度"},"digit-span-backward-simple":{taskName:"数字倒背",ability:"工作记忆",focusPoint:"工作记忆容量"},"stop-go-switch-simple":{taskName:"停走转换",ability:"执行功能",focusPoint:"抑制控制"}};function ae(d,e){var s;const t={"pattern-comparison-simple":"processing-speed","digit-span-backward-simple":"working-memory","stop-go-switch-simple":"executive-function"},i=[];for(const o of Object.keys(H)){const a=d.find(y=>y.taskType===o),l=H[o],r=t[o],n=e[r];if(!a){i.push({...l,result:"未完成",score:"-",meanRT:"-"});continue}let c="-";(n==null?void 0:n.rawScore)!=null&&(c=`${typeof n.rawScore=="number"?Number.isInteger(n.rawScore)?n.rawScore:n.rawScore.toFixed(1):n.rawScore}${n.rawUnit||""}`),i.push({...l,result:c,score:(n==null?void 0:n.tScore)??"-",meanRT:(s=a.metrics)!=null&&s.meanRT?(a.metrics.meanRT/1e3).toFixed(1)+"s":"-"})}return i}function le(d){if(!d)return"-";const e=new Date(d),t=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${t}-${i}-${s}`}function ce(d){return d==="male"?"男":d==="female"?"女":d||"-"}const m={pageBg:"#1e293b",cardBg:"#ffffff",cardRadius:"3.2rem",cardBorderBottom:"0.6rem solid #f1f5f9",cardShadow:"0 0.8rem 0 0 rgba(0,0,0,0.08)",cardPadding:"2.4rem",primary:"#2B7FFF",textPrimary:"#1d293d",textSecondary:"#314158",textMuted:"#90a1b9",scoreHighlight:"#3599f6",trackBg:"#e2e8f0",trackFill:"#2b7fff",borderSeparator:"#f8fafc",detailIconBg:"#dff2fe"};class de extends G{constructor(){super(),this.state={phase:"results",interpretationExpanded:!1},this.devClickCount=0,this.devClickTimer=null,this._historyMode=!1,this._historySession=null,this._historyProfile=null,this._historyCompletedAt=null,this._historyPageName=null,this._backTarget=null,this._currentProfile={},this._currentProfileBindingMode="legacy-unknown"}onMount(e={}){this.state.phase="results",this._historyMode=!!e.viewHistory,this._historyMode?(this._historySession=e.historySession||null,this._historyProfile=e.historyProfile||{},this._historyCompletedAt=e.historyCompletedAt||null,this._historyPageName=e.historyPageName||null,this._backTarget=e.historyBackTarget||"simple-complete-guide"):(this._historySession=null,this._historyProfile=null,this._historyCompletedAt=null,this._backTarget=null,this._loadCurrentProfile()),this._cachedInterpretation=null,this.update(),this.setTimeout(()=>this._animateBars(),80)}async _loadCurrentProfile(){const e=await Z(S.current,L._cache.profile);this._currentProfile=e.profile,this._currentProfileBindingMode=e.mode,this.mounted&&!this._historyMode&&this.update()}handleBack(){window.App&&window.App.navigate(this._backTarget||"simple-complete-guide")}_getDisplayData(){if(this._historyMode){const t=this._historySession||{};return{results:t.results||[],profile:this._historyProfile||{},session:t}}const e=S.current||{};return{results:e.results||[],profile:this._currentProfile,session:e}}_getResultSummary(e,t){var g,b;const i=Object.values(e||{}).filter(u=>Number.isFinite(u==null?void 0:u.tScore)).sort((u,f)=>f.tScore-u.tScore),s=((g=i[0])==null?void 0:g.name)||"认知能力",o=((b=i[i.length-1])==null?void 0:b.name)||"认知能力",a={high:i.filter(u=>u.tScore>=85),middle:i.filter(u=>u.tScore>=60&&u.tScore<85),low:i.filter(u=>u.tScore<60)},l=u=>u.map(f=>f.name).join("、"),r=l(a.high),n=l(a.middle),c=l(a.low),y=`${a.high.length}${a.middle.length}${a.low.length}`,p={300:"三项能力本次均表现较好，建议继续保持。",210:`${r}表现较好，${n}表现平稳。`,201:`${r}表现较好；${c}与其他两项差异较大，值得进一步了解。`,120:`${r}表现较好，其余两项表现平稳。`,111:`${r}表现较好，${n}表现平稳，${c}值得进一步了解。`,102:`${r}表现较好；${c}本次得分较低，建议进一步了解这两方面的表现。`,"030":"三项能力本次均处于平稳区间，可以继续关注今后的变化。","021":`${n}表现平稳；${c}本次得分较低，值得进一步了解。`,"012":`${n}表现平稳；${c}本次得分较低，建议进一步了解这两方面的表现。`,"003":"三项能力本次得分均较低，建议结合本次作答情况，进一步了解整体表现。"},h=[];return r?h.push({label:"表现较好",value:r}):n&&h.push({label:"表现平稳",value:n}),c?h.push({label:"建议关注",value:c,attention:!0}):r&&n&&h.push({label:"表现平稳",value:n}),r&&n&&c||h.length<2&&h.push({label:"后续建议",value:c?"进一步评估":r?"继续保持":"持续观察"}),{strongest:s,weakest:o,distribution:y,highlights:h,needsAttention:a.low.length>0,headline:t>=85?"本次整体表现较好":t>=60?"本次整体表现平稳":"本次整体表现值得关注",analysis:p[y]||"本次能力结果尚不完整，请结合实际完成的任务查看。",abilities:i,recommendation:c?`${c}本次得分较低，建议通过更全面的专业评估进一步了解。`:"建议通过更全面的专业评估建立个人认知基线，方便以后持续观察变化。"}}handleReportAction(e,t=null){var i,s,o,a;if(x.current&&((s=(i=x).triggerHaptic)==null||s.call(i,"light")),["reportConsult","training","games"].includes(e)){this.openContactDialog();return}if(window.parent&&window.parent!==window){window.parent.postMessage({source:"portrait-assessment",type:"navigate",page:e,game:t},location.origin);return}(a=(o=window.App)==null?void 0:o.navigate)==null||a.call(o,e)}openContactDialog(){if(this._contactDialog)return;const e=this.$(".simple-report-page");if(!e)return;this._contactTrigger=this.$(":focus"),this._contactReport=e,e.inert=!0,this.container.classList.add("report-contact-host");const t=document.createElement("div");t.className="report-contact-overlay",t.innerHTML=`<section class="report-contact-dialog" role="dialog" aria-modal="true" aria-labelledby="report-contact-title">
      <button class="report-contact-close" type="button" aria-label="关闭客服弹窗">×</button>
      <h2 id="report-contact-title">添加客服，获取训练方法</h2>
      <p>获取日常健脑训练方法、练习建议与每日提醒，也可了解并预约忆启时光认知陪伴平板。</p>
      <div class="report-contact-qr" aria-hidden="true">${Array.from({length:49},(i,s)=>`<i style="visibility:${(s*7+3)%5?"visible":"hidden"}"></i>`).join("")}</div>
      <p class="report-contact-hint">企业微信活码占位 · 上线时替换为真实活码</p>
      <button class="report-contact-save" type="button">保存二维码并添加客服</button>
      <p class="report-contact-status" role="status" aria-live="polite"></p>
      <button class="report-contact-dismiss" type="button">继续查看报告</button>
    </section>`,this._contactDialog=t,this.container.appendChild(t),t.addEventListener("click",i=>{i.target===t||i.target.closest(".report-contact-close, .report-contact-dismiss")?this.closeContactDialog():i.target.closest(".report-contact-save")&&(t.querySelector(".report-contact-status").textContent="当前为演示二维码，暂不支持保存或添加真实客服。")}),t.addEventListener("keydown",i=>{if(i.key==="Escape"&&(i.preventDefault(),this.closeContactDialog()),i.key!=="Tab")return;const s=[...t.querySelectorAll("button")],o=s[0],a=s[s.length-1];i.shiftKey&&i.target===o?(i.preventDefault(),a.focus()):!i.shiftKey&&i.target===a&&(i.preventDefault(),o.focus())}),t.querySelector(".report-contact-close").focus({preventScroll:!0})}closeContactDialog(){var e,t,i;(e=this._contactDialog)==null||e.remove(),this._contactDialog=null,this._contactReport&&(this._contactReport.inert=!1),this._contactReport=null,(t=this.container)==null||t.classList.remove("report-contact-host"),(i=this._contactTrigger)!=null&&i.isConnected&&this._contactTrigger.focus({preventScroll:!0}),this._contactTrigger=null}onUpdate(){this.setTimeout(()=>{z.stop()},100),this.setTimeout(()=>this._animateBars(),80)}onUnmount(){this.closeContactDialog(),this.clearTimers(),z.stop(),x.stopSpeak()}async handleTitleClick(){if(X.DEV.enabled){if(this.devClickCount++,this.devClickTimer&&clearTimeout(this.devClickTimer),this.devClickTimer=setTimeout(()=>{this.devClickCount=0},3e3),this.devClickCount===3){const e=window.keepwork&&window.keepwork.token,t=e&&window.keepwork.token.length>8?window.keepwork.token.substring(0,8)+"...":window.keepwork.token||"";E.showToast(e?`Token: ${t}`:"Token不存在")}this.devClickCount>=5&&(this.devClickCount=0,await E.showDebugPanel())}}_animateBars(){this.$$("[data-bar-target]").forEach(t=>{const i=t.getAttribute("data-bar-target");t.style.transition="none",t.style.width="0%",t.offsetWidth,t.style.transition="width 1s cubic-bezier(0.22, 1, 0.36, 1)",t.style.width=i})}renderResultsPage(){var y;const{results:e,profile:t,session:i}=this._getDisplayData();let s,o;const a=i.simpleScoreCache,l=this._historyMode?((y=i==null?void 0:i.profileBinding)==null?void 0:y.mode)||"legacy-snapshot":this._currentProfileBindingMode;if(se(a,t,l))s=a.totalScore,o=a.moduleScores;else{const p=re(e,t);s=p.totalScore,o=p.moduleScores,i.simpleScoreCache=p,this._historyMode?this._historyPageName&&L.saveToPage(this._historyPageName,"current-session",i).catch(()=>{}):S.current&&(S.current.simpleScoreCache=p,S.save())}const r=ne(o,s),n=oe(e);ae(e,o),this._cachedInterpretation||(this._cachedInterpretation=r),this._cachedInterpretation;const c=this._getResultSummary(o,s);return`
      <div class="simple-report-page h-full flex flex-col" style="background: ${m.pageBg}; overflow-y: auto;">

        <header class="simple-report-document-heading">
          <h1>脑健康评估报告</h1>
        </header>

        <!-- 内容区域 -->
        <div style="padding: 0.8rem 2.4rem 4rem; max-width: 72rem; margin: 0 auto; width: 100%; display: flex; flex-direction: column; gap: 3.2rem;">

          <!-- 用户信息 + 测评得分 -->
          ${this._renderUserInfoAndScore(t,i,s,c)}

          <!-- 本次作答质量帮助用户理解结果是否完整 -->
          ${this._renderPeerComparison(n)}

          <!-- 分项能力按得分从高到低展示，避免图表与卡片重复表达 -->
          ${this._renderAbilityOverview(o,c)}

          <!-- 报告末尾承接日常训练与认知陪伴服务 -->
          ${this._renderTrainingNextStep()}

          ${this._renderHealthNotice()}

          <div style="height: 2rem;"></div>
        </div>
      </div>
    `}_renderUserInfoAndScore(e,t,i,s){const o=e.age!=null?`${e.age}`:"-",a=ce(e.gender),l=t.startTime||t.endTime||this._historyCompletedAt,r=Math.max(0,Math.min(100,i));return`
      <div class="simple-report-summary-card">
        <div class="simple-report-profile-line">
          <span>${e.name||"-"}，${o}岁，${a}</span>
          <span>${le(l)}</span>
        </div>
        <div class="simple-report-summary-main">
          <div>
            <span class="simple-report-kicker">本次快速评估</span>
            <h2>${s.headline}</h2>
            <p>本次结果用于初步了解，不等同于医学诊断。</p>
          </div>
          <div class="simple-report-score-badge" aria-label="测评得分 ${i} 分">
            <span>本次表现</span><strong>${i}</strong>
          </div>
        </div>
        <div class="simple-report-score-position" aria-label="我的得分${i}分；0至不足60分值得关注，60至不足85分表现平稳，85至100分表现较好">
          <div class="simple-report-score-pointer" style="left:${r}%"></div>
          <span class="simple-report-score-callout" style="left:clamp(5.8rem, ${r}%, calc(100% - 5.8rem))">我的得分 ${i}</span>
          <div class="simple-report-score-track"></div>
          <div class="simple-report-score-ticks"><span>0</span><span>60</span><span>85</span><span>100</span></div>
          <div class="simple-report-score-legend"><span><i></i>值得关注</span><span><i></i>表现平稳</span><span><i></i>表现较好</span></div>
        </div>
        <div class="simple-report-summary-highlights">
          ${s.highlights.map(n=>`<div class="${n.attention?"is-attention":""}"><span>${n.label}</span><strong>${n.value}</strong></div>`).join("")}
        </div>
        <div class="simple-report-summary-copy">
          <h3>综合结果分析</h3>
          ${this._renderDailyLifeAnalysis(s)}
        </div>
      </div>
    `}_renderDailyLifeAnalysis(e){const t={加工速度:{task:"观察图形、辨认细节",daily:"找东西、核对信息",maintain:"和家人玩玩找不同，让这份敏捷继续得到锻炼",question:"找东西、核对信息时，是否比以前需要更多时间",tips:[["按顺序找数字","把写着1～20的纸片打乱，计时依次找出；每次重新打乱，比较错漏不增加时能否更快。"],["比一比小变化","在桌上摆5件小物品，请家人趁您闭眼换走一件，睁眼后找出变化。"]]},工作记忆:{task:"记住数字、在脑中调整顺序",daily:"记住刚听到的叮嘱、接着完成手头的事",maintain:"读完一小段文章后和家人聊聊要点，继续练习记忆",question:"刚听到的叮嘱或要做的几件事，是否转头就忘了其中一项",tips:[["回想购物清单","写下3样要买的东西，看一遍后盖住清单，试着说出来，再核对有没有遗漏。"],["复述两件小事","请家人说两件小事，如“拿杯子、放桌上”，先复述一遍，再按顺序完成。"]]},执行功能:{task:"遵守规则、调整反应",daily:"按步骤做事、应对临时变化",maintain:"整理物品时换一种分类方法，继续练习灵活调整",question:"当事情被打断或计划改变时，自己是否容易忘记做到哪一步，或一时不知道该先做什么",tips:[["清单接着做","出门前写下“钥匙、手机、关灯”，完成一项打个勾，被打断后从没打勾的那项接着检查。"],["换规则分类","拿10张扑克牌，先按红黑分类，混合后再按数字牌和人物牌分类，不用计时。"]]}},i=(e.abilities||[]).filter(p=>t[p.name]),s=i.filter(p=>p.tScore>=85),o=i.filter(p=>p.tScore>=60&&p.tScore<85),a=i.filter(p=>p.tScore<60),l=p=>p.map(h=>h.name).join("、");let r,n;if(s.length===3)r="这次，您在观察细节、记住信息和调整反应时都表现不错，三项能力都在较好的区间。这些能力在找东西、记住叮嘱和有条理地做事时都能帮上忙，值得继续保持。";else if(s.length===1){const p=t[s[0].name];r="这次，您在"+p.task+"时表现不错，"+s[0].name+"是表现较好的一个方面。这类能力在平时"+p.daily+"时都能帮上忙，也可以"+p.maintain+"。"}else s.length===2?r="这次，您的"+l(s)+"表现较好。这些能力在平时"+s.map(p=>t[p.name].daily).join("，以及")+"时都能帮上忙，可以继续在熟悉的日常活动中锻炼。":o.length?r="这次，您的"+l(o)+"表现平稳。"+(o.length===3?"这些能力在日常观察、记事和按步骤做事时都能帮上忙，可以继续保持这些习惯。":"这类能力在平时"+o.map(p=>t[p.name].daily).join("，以及")+"时都能帮上忙，可以继续保持。"):r="您已经完成了三项任务，这次的得分都偏低一些。先别急着给自己下结论，疲劳和对操作的熟悉程度也可能影响发挥。";a.length===1?n=(s.length&&o.length?"您的"+l(o)+"表现平稳，":"您的")+l(a)+"这次则稍弱一些，值得多留意。您可以结合平时的感受看看，日常生活中，"+t[a[0].name].question+"。":a.length>1?n=(a.length===3?"":"您的"+l(a)+"这次稍弱一些。")+"您可以结合平时的感受，看看"+a.map(p=>t[p.name].question).join("；")+"。":n=s.length&&o.length?"您的"+l(o)+"也表现平稳，不必因为分数稍低就担心。平时可以留意记事、找东西和安排步骤是否顺手，慢慢了解自己的变化。":"您可以把重点放在日常保持上。平时也留意做事是否像以前一样顺手，慢慢了解自己的变化。";const c=a.length===1?t[a[0].name].tips:a.length>1?a.slice(-2).map(p=>t[p.name].tips[0]):[t.工作记忆.tips[0],t.执行功能.tips[1]],y="不用一下安排很多练习，每天选一件小事，按自己的节奏慢慢来。"+(a.length?"如果您平时也经常觉得做事比以前吃力，建议再做一次专业评估，把情况了解得更清楚。":"也可以通过专业评估更全面地了解自己，方便以后观察变化。");return'<p class="simple-report-life-analysis">'+r+'</p><p class="simple-report-life-analysis">'+n+'</p><div class="simple-report-daily-methods"><p>日常可以试试这两个小方法，选一个开始就好：</p><ol>'+c.map(([p,h])=>"<li><b>"+p+"：</b>"+h+"</li>").join("")+"</ol><p>"+y+"</p></div>"}_renderAnswerOverview(e,t){const i=Math.min(3,Array.isArray(t)?t.length:0),s=Math.round(Math.max(0,Math.min(1,Number(e==null?void 0:e.userAccuracy)||0))*100),o=Math.max(0,(Number(e==null?void 0:e.userMeanRT)||0)/1e3).toFixed(1),a=i===3?"三项任务均已完成，结果可以作为本次状态的初步参考。":`本次完成了${i}项任务，建议完成全部任务后再综合理解结果。`;return`
      <section class="simple-report-section-card simple-report-answer-overview" aria-labelledby="answer-overview-title">
        <div class="simple-report-section-heading">
          <div><span>作答质量</span><h2 id="answer-overview-title">本次作答情况</h2></div>
        </div>
        <div class="simple-report-answer-grid">
          <div><span>完成任务</span><strong>${i} / 3</strong></div>
          <div><span>作答准确率</span><strong>${s}%</strong></div>
          <div><span>平均反应</span><strong>${o}秒</strong></div>
        </div>
        <p class="simple-report-answer-note">${a}</p>
      </section>`}_renderTrainingNextStep(){return`
      <section class="simple-report-recommendation-card simple-report-next-step" aria-labelledby="report-next-step-title">
        <span class="simple-report-recommendation-tag">看完报告，接下来怎么做？</span>
        <h2 id="report-next-step-title">从了解自己，到每天练一练</h2>
        <p class="simple-report-recommendation-copy">结合本次脑健康评估结果，了解适合自己的训练方向，让日常练习更有方法。</p>
        <p class="report-contact-copy">添加脑健康客服，获取训练方法与练习建议：</p>
        <ul class="report-contact-topics"><li>获取日常健脑训练方法，了解怎么练</li><li>接收每日训练内容与提醒，逐步养成习惯</li></ul>
        <p class="report-contact-copy">想要更丰富的居家训练与陪伴体验？还可了解并预约忆启时光认知陪伴平板，集测、练、忆、学、陪伴于一体。</p>
        <button class="simple-report-primary-action" type="button" onclick="App.currentPage.handleReportAction('reportConsult')">添加客服，获取训练方法</button>
        <p class="report-contact-note">训练内容通过企业微信获取，平板可按需了解与预约。</p>
      </section>`}_renderAbilityOverview(e,t){const s={"processing-speed":"准备写着1～20的20张卡片，打乱摆开，计时按1到20依次找出。记录每次用时和找错次数；当找得又快又准时，再逐步增加卡片数量，例如增加到1～25，继续练习。","working-memory":"请家人读3个不同的数字，您按倒序说出来，如“2、5、8”回答“8、5、2”。每次换数字练5组，记录答对几组；连续几次都能准确完成后，再增加到4位，熟练后逐步增加位数。","executive-function":"准备10张扑克牌，先按红黑分类，混合后改按数字牌和人物牌分类。记录完成两轮的总用时和分错次数；熟练到又快又准后，先增加到15张，再尝试每分5张就换一次分类规则。"},o={"processing-speed":"看见图形后，快速发现并判断其中的细节。","working-memory":"短时间记住信息，并在脑中进行整理和操作。","executive-function":"根据规则控制反应，并在规则变化时及时调整。"},a=Object.entries(e||{}).filter(([,l])=>l&&Number.isFinite(Number(l.tScore))).sort(([,l],[,r])=>Number(r.tScore)-Number(l.tScore)).map(([l,r])=>{if(!r)return"";const n=Number(r.tScore)||0;let c="建议进一步了解";return n>=85?c="表现较好":n>=60&&(c="表现平稳"),`
        <article class="simple-report-ability-item ${n<60?"is-attention":n>=85?"is-strength":""}">
          <div class="simple-report-ability-heading">
            <span>${r.name} · ${n}分</span><b>${c}</b>
          </div>
          <p>${o[l]}</p>
          <div class="simple-report-ability-comparison">
            <div><span>我的得分</span><i><em style="width:${Math.max(0,Math.min(100,n))}%"></em></i><b>${n}</b></div>
            <div class="is-reference"><span>参考均值</span><i><em style="width:70%"></em></i><b>70</b></div>
          </div>
          <p class="simple-report-ability-practice"><b>日常训练小方法：</b>${s[l]||""}</p>
        </article>`}).join("");return`
      <section class="simple-report-section-card" aria-labelledby="ability-overview-title">
        <div class="simple-report-section-heading">
          <div><h2 id="ability-overview-title">三项能力的具体表现</h2></div>
        </div>
        ${this._renderAbilityRadar(e,70)}
        <div class="simple-report-ability-list">${a}</div>
      </section>`}_renderAbilityRadar(e,t){const i=[["processing-speed","加工速度",-Math.PI/2],["working-memory","工作记忆",Math.PI/6],["executive-function","执行功能",Math.PI*5/6]].map(([r,n,c])=>{var h;const y=(h=e==null?void 0:e[r])==null?void 0:h.tScore,p=y==null||!Number.isFinite(Number(y))?null:Math.max(0,Math.min(100,Number(y)));return{name:n,angle:c,score:p}}),s=(r,n)=>[160+Math.cos(r)*n,166+Math.sin(r)*n],o=r=>i.map((n,c)=>s(n.angle,r[c]).join(",")).join(" "),a=i.every(r=>r.score!==null),l=[[160,22],[255,256],[65,256]];return`<figure class="simple-ability-radar">
      <svg viewBox="0 0 320 300" role="img" aria-label="三项能力雷达图，范围0到100分。${i.map(r=>`${r.name}${r.score===null?"暂无得分":r.score+"分"}`).join("，")}。参考均值${t}分。">
        ${[20,40,60,80,100].map(r=>`<polygon points="${o([r,r,r])}" fill="none" stroke="#dce4ed" stroke-width="1"/>`).join("")}
        ${i.map(r=>`<line x1="160" y1="166" x2="${s(r.angle,100)[0]}" y2="${s(r.angle,100)[1]}" stroke="#dce4ed"/>`).join("")}
        <polygon class="ability-radar-reference" points="${o([t,t,t])}" fill="#dba52d" fill-opacity=".16" stroke="none"/>
        ${a?`<polygon class="ability-radar-personal" points="${o(i.map(r=>r.score))}" fill="#2d7fff" fill-opacity=".06" stroke="#2d7fff" stroke-width="2.5" stroke-linejoin="round"/>`:""}
        <polygon points="${o([t,t,t])}" fill="none" stroke="#dba52d" stroke-opacity=".65" stroke-width="1.5" stroke-dasharray="6 4"/>
        ${i.filter(r=>r.score!==null).map(r=>`<circle cx="${s(r.angle,r.score)[0]}" cy="${s(r.angle,r.score)[1]}" r="4" fill="#2d7fff" stroke="white" stroke-width="1.5"/>`).join("")}
        <text x="166" y="170" class="ability-radar-tick">0</text>
        <text x="167" y="66" class="ability-radar-tick">100</text>
        ${i.map((r,n)=>`<text x="${l[n][0]}" y="${l[n][1]}" text-anchor="middle" class="ability-radar-name">${r.name}</text><text x="${l[n][0]}" y="${l[n][1]+23}" text-anchor="middle" class="ability-radar-score">${r.score===null?"暂无得分":r.score+"分"}</text>`).join("")}
      </svg>
      <figcaption>
        <div class="ability-radar-legend"><span><i></i>我的表现</span><span><i class="is-reference"></i>参考均值 ${t}分</span></div>
        <p>蓝色是您的本次表现，金色阴影是参考水平；越靠外，分数越高。</p>
      </figcaption>
    </figure>`}_renderHealthNotice(){return`
      <aside class="simple-report-health-note simple-report-health-note--standalone">
        <strong>什么时候应及时咨询医生？</strong>
        <p>如果近期出现反复询问、在熟悉环境迷路、忘记关火，或记忆和思考变化已经影响日常生活，不建议只依靠游戏训练，应及时就医咨询。</p>
      </aside>`}_renderIntegratedAbilityResults(e,t,i){const s={加工速度:"反映看见信息后，发现细节并作出判断的速度。",工作记忆:"反映短时间记住信息，并在脑中整理和操作的能力。",执行功能:"反映控制反应、遵守规则和适应规则变化的能力。"},o={加工速度:"图形比较",工作记忆:"数字倒背",执行功能:"停走转换"},a=Object.values(t||{}).reduce((n,c)=>(n[c.name]=Number(c.tScore)||0,n),{}),r=[...e].sort((n,c)=>(a[c.ability]||0)-(a[n.ability]||0)).map(n=>{const c=a[n.ability]||0,y=n.ability===i.weakest,p=n.ability===i.strongest;let h="表现稳定";return p&&c>=75?h="表现较好":y&&c<75?h="相对需要关注":c<65&&(h="可以继续加强"),`
        <article class="simple-report-integrated-row ${y?"is-attention":""} ${p?"is-strength":""}">
          <div class="simple-report-integrated-row-heading">
            <h3>${n.ability}</h3><span>${h}</span>
          </div>
          <p>${s[n.ability]}</p>
          <small>${o[n.ability]}中的本次结果：${n.result}</small>
        </article>`}).join("");return`
      <section class="simple-report-section-card simple-report-integrated-results" aria-labelledby="integrated-results-title">
        <div class="simple-report-section-heading simple-report-integrated-heading">
          <div><span>分项结果</span><h2 id="integrated-results-title">三个能力的具体表现</h2></div>
          <small>图中分数越高，代表本次表现越好</small>
        </div>
        ${this._renderRadarChart(e)}
        <div class="simple-report-integrated-list">${r}</div>
        <div class="simple-report-training-plan">
          <span>训练建议</span>
          <h3>通过企微获取每日训练</h3>
          <p>添加企业微信客服，每天接收训练内容和提醒，在企业微信中进入训练。</p>
          <button type="button" onclick="App.currentPage.handleReportAction('training')">添加客服，获取每日训练</button>
        </div>
      </section>`}_renderScoreAnalysis(e,t){const i=Math.max(0,Math.min(100,e)),s=`clamp(5.2rem, ${i}%, calc(100% - 5.2rem))`,o=80,a=t.length>o,l=a?t.substring(0,o)+"…":t;return`
      <div style="background: ${m.cardBg}; border-radius: ${m.cardRadius}; border-bottom: ${m.cardBorderBottom}; box-shadow: ${m.cardShadow}; padding: ${m.cardPadding} ${m.cardPadding} 0.6rem;">
        <!-- 标题 -->
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 1.2rem; margin-bottom: 2.4rem;">
          <h3 style="font-size: 2.5rem; line-height: 3.4rem; font-weight: 700; color: ${m.textPrimary};">综合结果说明</h3>
          <span style="font-size: 1.85rem; font-weight: 600; color: ${m.textMuted}; text-align: right; line-height: 2.7rem;">分值反映本次表现，不代表医学诊断</span>
        </div>

        <!-- 分段得分条 -->
        <div style="padding: 0 0.4rem 2rem;">
          <div style="position: relative; padding-top: 5.2rem;">
            <!-- 用户得分标注 -->
            <div style="position: absolute; top: 1.4rem; left: ${s}; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; pointer-events: none; z-index: 2;">
              <div style="background: ${m.primary}; color: white; border-radius: 9999px; padding: 0.3rem 1rem; box-shadow: 0 0.4rem 0.8rem rgba(43,127,255,0.24); white-space: nowrap;">
                <span style="font-size: 1.75rem; font-weight: 700; line-height: 2.4rem;">我的得分 ${e}</span>
              </div>
              <svg width="1.2rem" height="0.7rem" viewBox="0 0 12 7" fill="${m.primary}" style="display: block;">
                <polygon points="0,0 12,0 6,7"/>
              </svg>
            </div>

            <div style="display: grid; grid-template-columns: 60fr 20fr 20fr; gap: 0.4rem; height: 1.2rem; border-radius: 9999px; overflow: hidden; background: ${m.trackBg};">
              <div style="background: #ff7a7a;"></div>
              <div style="background: #facc15;"></div>
              <div style="background: #22c55e;"></div>
            </div>
            <div style="position: absolute; top: 4.9rem; left: ${i}%; width: 0.3rem; height: 2rem; border-radius: 9999px; background: ${m.primary}; transform: translateX(-50%); box-shadow: 0 0 0 0.3rem rgba(43,127,255,0.18);"></div>

            <div style="position: relative; height: 2.2rem; margin-top: 1rem; text-align: center;">
              <div style="position: absolute; left: 30%; transform: translateX(-50%); display: flex; flex-direction: column; gap: 0.2rem;">
                <span style="font-size: 1.8rem; font-weight: 700; color: #ef4444;">偏弱</span>
              </div>
              <div style="position: absolute; left: 70%; transform: translateX(-50%); display: flex; flex-direction: column; gap: 0.2rem;">
                <span style="font-size: 1.8rem; font-weight: 700; color: #ca8a04;">正常</span>
              </div>
              <div style="position: absolute; left: 90%; transform: translateX(-50%); display: flex; flex-direction: column; gap: 0.2rem;">
                <span style="font-size: 1.8rem; font-weight: 700; color: #16a34a;">非常好</span>
              </div>
            </div>
          </div>
        </div>

        <div style="height: 1px; background: ${m.borderSeparator}; margin: 0 0 1.6rem;"></div>

        <!-- 结果分析正文 -->
        <div id="interpretation-content" style="${a?"max-height: 13.8rem; overflow: hidden;":""}">
          <p id="interpretation-text" style="font-size: 2.3rem; font-weight: 500; color: ${m.textSecondary}; line-height: 3.7rem; white-space: pre-line; margin: 0;">${l}</p>
        </div>
        ${a?`
          <div style="border-top: 1px solid ${m.borderSeparator}; text-align: center; padding-top: 0.8rem; padding-bottom: 0.8rem;">
            <span id="interpretation-toggle" onclick="App.currentPage.toggleInterpretation()"
                  style="font-size: 1.9rem; line-height: 2.7rem; font-weight: 600; color: ${m.textMuted}; cursor: pointer; display: inline-flex; align-items: center; gap: 0.4rem;">
              <span id="interpretation-toggle-label">显示全部 </span>
              <svg id="interpretation-toggle-arrow" width="1.4rem" height="1.4rem" viewBox="0 0 24 24" fill="none" stroke="${m.textMuted}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                   style="transform: rotate(0deg); transition: transform 0.3s;">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </span>
          </div>
        `:'<div style="height: 1.8rem;"></div>'}
      </div>
    `}toggleInterpretation(){this.state.interpretationExpanded=!this.state.interpretationExpanded;const e=this.state.interpretationExpanded,t=document.getElementById("interpretation-content"),i=document.getElementById("interpretation-text"),s=document.getElementById("interpretation-toggle-label"),o=document.getElementById("interpretation-toggle-arrow");!t||!i||(e?(t.style.maxHeight="none",t.style.overflow="visible",i.textContent=this._cachedInterpretation,s&&(s.textContent="收起"),o&&(o.style.transform="rotate(180deg)")):(t.style.maxHeight="13.8rem",t.style.overflow="hidden",i.textContent=this._cachedInterpretation.substring(0,80)+"…",s&&(s.textContent="显示全部 "),o&&(o.style.transform="rotate(0deg)")))}_renderPeerComparison(e){const{userAccuracy:t,peerAccuracy:i,userMeanRT:s,peerMeanRT:o}=e,a=Math.round(t*100),l=Math.round(i*100),r=(s/1e3).toFixed(1),n=(o/1e3).toFixed(1),c=Math.max(a,l,1),y=Math.round(l/c*100),p=Math.round(a/c*100),h=Math.max(s,o,1),g=Math.round(o/h*100),b=Math.round(s/h*100);return`
      <div style="background: ${m.cardBg}; border-radius: ${m.cardRadius}; border-bottom: ${m.cardBorderBottom}; box-shadow: ${m.cardShadow}; padding: ${m.cardPadding};">

        <div class="simple-report-comparison-heading">
          <span>参考均值</span>
          <span>对比</span>
          <span>我的表现</span>
        </div>

        <!-- 准确率 -->
        ${this._renderVsRow(l+"%","准确率",a+"%",y,p)}

        <div style="height: 1.6rem;"></div>

        <!-- 平均反应 -->
        ${this._renderVsRow(n+"秒","平均反应",s>0?r+"秒":"暂无数据",g,b)}

        <p class="simple-report-peer-note">先看答得准不准，再看用时长不长，不必为了快而忽略准确。</p>
      </div>
    `}_renderVsRow(e,t,i,s,o){return`
      <div>
        <!-- 数值标签 -->
        <div class="simple-report-comparison-values">
          <span>${e}</span>
          <span>${t}</span>
          <span>${i}</span>
        </div>
        <!-- 双向条 -->
        <div style="display: flex; gap: 0.4rem; height: 0.8rem;">
          <!-- 左条（同龄人，从右向左） -->
          <div style="flex: 1; background: #f1f5f9; border-radius: 9999px; overflow: hidden; display: flex; justify-content: flex-end;">
            <div data-bar-target="${s}%"
                 style="height: 100%; width: 0%; background: ${m.trackFill}; border-radius: 9999px;"></div>
          </div>
          <!-- 右条（自己，从左向右） -->
          <div style="flex: 1; background: #f1f5f9; border-radius: 9999px; overflow: hidden;">
            <div data-bar-target="${o}%"
                 style="height: 100%; width: 0%; background: ${m.trackFill}; border-radius: 9999px;"></div>
          </div>
        </div>
      </div>
    `}_renderRadarChart(e){const t=e.map(g=>({label:g.ability,value:Math.max(0,Math.min(100,Number(g.score)||0))}));if(t.length<3)return"";const i=160,s=130,o=72,a=[.25,.5,.75,1],l=(g,b=1,u=0)=>{const f=Math.PI*2*g/t.length-Math.PI/2,$=o*b+u;return{x:i+$*Math.cos(f),y:s+$*Math.sin(f),angle:f}},r=g=>t.map((b,u)=>{const f=l(u,g(b,u));return`${f.x.toFixed(1)},${f.y.toFixed(1)}`}).join(" "),n=a.map(g=>`
      <polygon points="${r(()=>g)}" fill="none" stroke="#e8eef7" stroke-width="1"/>
    `).join(""),c=t.map((g,b)=>{const u=l(b,1);return`<line x1="${i}" y1="${s}" x2="${u.x.toFixed(1)}" y2="${u.y.toFixed(1)}" stroke="#e8eef7" stroke-width="1"/>`}).join(""),y=r(()=>.7),p=r(g=>g.value/100),h=t.map((g,b)=>{const u=l(b,1,24),f=l(b,g.value/100),$=l(b,.7),M=Math.abs(Math.cos(u.angle))<.1?"middle":Math.cos(u.angle)>0?"start":"end";return`
        <circle cx="${$.x.toFixed(1)}" cy="${$.y.toFixed(1)}" r="3" fill="#f4b51e"/>
        <circle cx="${f.x.toFixed(1)}" cy="${f.y.toFixed(1)}" r="4" fill="${m.primary}"/>
        <text x="${u.x.toFixed(1)}" y="${u.y.toFixed(1)}" text-anchor="${M}" dominant-baseline="central" fill="${m.textSecondary}" font-size="15" font-weight="800">${g.label}</text>
        <text x="${u.x.toFixed(1)}" y="${(u.y+18).toFixed(1)}" text-anchor="${M}" dominant-baseline="central" fill="${m.primary}" font-size="17" font-weight="900">${g.value}</text>
      `}).join("");return`
      <div style="margin: 0 auto 2.4rem; max-width: 40rem;">
        <svg viewBox="0 0 320 270" width="100%" style="display: block; overflow: visible;" xmlns="http://www.w3.org/2000/svg" aria-label="认知能力雷达图" data-ai-hint="显示各认知能力得分与同龄均值对比">
          ${n}
          ${c}
          <polygon points="${y}" fill="rgba(244,181,30,0.08)" stroke="#f4b51e" stroke-width="1.5" stroke-dasharray="4 3"/>
          <polygon points="${p}" fill="rgba(43,127,255,0.15)" stroke="${m.primary}" stroke-width="2.5"/>
          ${h}
        </svg>
        <div style="display: flex; justify-content: center; gap: 2.4rem; margin-top: 1rem; font-size: 1.8rem; line-height: 2.6rem; font-weight: 800; color: #6b7c96;">
          <span style="display: inline-flex; align-items: center; gap: 0.5rem;"><span style="display: inline-block; width: 1.6rem; height: 0.6rem; border-radius: 9999px; background: ${m.primary};"></span>个人得分</span>
          <span style="display: inline-flex; align-items: center; gap: 0.5rem;"><span style="display: inline-block; width: 1.6rem; height: 0.6rem; border-radius: 9999px; background: #f4b51e; border: 1px dashed #f4b51e;"></span>同龄均值</span>
        </div>
      </div>
    `}_renderAssessmentDetails(e){const t=e.map(i=>`
      <tr style="border-bottom: 1px solid ${m.borderSeparator};">
        <td style="padding: 1.6rem 0.8rem; font-size: 2.15rem; line-height: 3.4rem; font-weight: 600; color: ${m.textSecondary};">${i.taskName}</td>
        <td style="padding: 1.6rem 0.8rem; font-size: 2.15rem; line-height: 3.4rem; color: ${m.textSecondary};">${i.ability}</td>
        <td style="padding: 1.6rem 0.8rem; font-size: 2.15rem; line-height: 3.4rem; color: ${m.textSecondary}; text-align: center;">${i.result}</td>
        <td style="padding: 1.6rem 0.8rem; font-size: 2.15rem; line-height: 3.4rem; font-weight: 700; color: ${m.scoreHighlight}; text-align: center;">${i.score}</td>
      </tr>
    `).join("");return`
      <div style="background: ${m.cardBg}; border-radius: ${m.cardRadius}; border-bottom: ${m.cardBorderBottom}; box-shadow: ${m.cardShadow}; padding: ${m.cardPadding};">
        <!-- 标题行 -->
        <div style="display: flex; align-items: center; gap: 1.2rem; margin-bottom: 2rem;">
          <div style="width: 3.6rem; height: 3.6rem; border-radius: 1.4rem; background: ${m.detailIconBg}; display: flex; align-items: center; justify-content: center;">
            <svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" stroke="${m.primary}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
            </svg>
          </div>
          <h3 style="font-size: 2.5rem; line-height: 3.4rem; font-weight: 700; color: ${m.textPrimary};">完整分项成绩</h3>
        </div>
        ${this._renderRadarChart(e)}
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr>
                <th style="padding: 1.6rem 0.8rem; font-size: 2.05rem; line-height: 3.2rem; font-weight: 700; color: ${m.textMuted}; text-align: left; text-transform: uppercase; letter-spacing: 0.06rem; border-bottom: 1px solid ${m.trackBg};">题目名称</th>
                <th style="padding: 1.6rem 0.8rem; font-size: 2.05rem; line-height: 3.2rem; font-weight: 700; color: ${m.textMuted}; text-align: left; text-transform: uppercase; letter-spacing: 0.06rem; border-bottom: 1px solid ${m.trackBg};">筛查能力</th>
                <th style="padding: 1.6rem 0.8rem; font-size: 2.05rem; line-height: 3.2rem; font-weight: 700; color: ${m.textMuted}; text-align: center; text-transform: uppercase; letter-spacing: 0.06rem; border-bottom: 1px solid ${m.trackBg};">结果</th>
                <th style="padding: 1.6rem 0.8rem; font-size: 2.05rem; line-height: 3.2rem; font-weight: 700; color: ${m.textMuted}; text-align: center; text-transform: uppercase; letter-spacing: 0.06rem; border-bottom: 1px solid ${m.trackBg};">得分</th>
              </tr>
            </thead>
            <tbody>
              ${t}
            </tbody>
          </table>
        </div>
      </div>
    `}render(){return this.renderResultsPage()}}const me=Object.freeze(Object.defineProperty({__proto__:null,CompleteSimplePage:de},Symbol.toStringTag,{value:"Module"}));export{de as C,N as S,z as a,re as b,me as c,se as i,Z as r};
