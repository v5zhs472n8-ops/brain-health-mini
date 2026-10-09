import"./modulepreload-polyfill-B5Qt9EMX.js";const k=document.querySelector("#app"),e={page:"welcome",loggedIn:!1,modal:"",toast:"",assessmentSession:null,assessmentProfile:null,professionalReturnPage:"home",padReturnPage:"home",myReturnPage:"home",loginReturnPage:"home",documentType:"privacy",documentReturnPage:"settings"};let n=null,o=null,g=!1;function w(a=n){var t;!a||a!==n||(g=!0,a.classList.add("is-ready"),(t=document.querySelector("#assessment-frame-stage .assessment-loading"))==null||t.remove(),e.page==="report"&&e.assessmentSession&&a.contentWindow.postMessage({source:"mini-program",type:"show-report",session:e.assessmentSession,profile:e.assessmentProfile},location.origin))}function _(a=n){var t,s;if(!(!a||a!==n)){try{const r=a.contentDocument;if((r==null?void 0:r.readyState)==="complete"&&!r.documentElement.classList.contains("assessment-runtime-booting")&&!!((t=r.body)!=null&&t.dataset.task)){w(a);return}}catch(r){console.warn("[brain-health-mini] 无法直接确认评估页状态，改用消息确认。",r)}(s=a.contentWindow)==null||s.postMessage({source:"mini-program",type:"request-ready"},location.origin)}}function $(){return n||(o=document.createElement("div"),o.id="assessment-frame-host",o.className="assessment-frame-host is-preloading",n=document.createElement("iframe"),n.id="original-assessment",n.className="original-assessment",n.src="./assessment-runtime.html",n.title="脑健康评估任务",n.setAttribute("aria-hidden","true"),n.addEventListener("load",()=>_(n)),o.appendChild(n),document.body.appendChild(o),n)}function R(){$()}function x(){n&&(document.body.classList.remove("assessment-frame-active"),o==null||o.classList.remove("is-active"),o==null||o.classList.add("is-preloading"),n.setAttribute("aria-hidden","true"))}function C(){const a=document.getElementById("assessment-frame-stage");if(!a)return;const t=$();t.title=e.page==="report"?"脑健康评估报告":"脑健康评估任务",o.classList.remove("is-preloading"),o.classList.add("is-active"),document.body.classList.add("assessment-frame-active"),t.removeAttribute("aria-hidden"),requestAnimationFrame(()=>{var s;if(t.classList.toggle("is-ready",g),g){(s=a.querySelector(".assessment-loading"))==null||s.remove();return}_(t)}),g&&e.page==="report"&&e.assessmentSession&&t.contentWindow.postMessage({source:"mini-program",type:"show-report",session:e.assessmentSession,profile:e.assessmentProfile},location.origin)}function v(){document.body.classList.remove("assessment-frame-active"),o==null||o.remove(),o=null,n=null,g=!1}function c(a,t={}){const s={event:a,properties:t,at:new Date().toISOString(),source:"brain-health-mini-prototype"};window.__brainHealthEvents=[...window.__brainHealthEvents||[],s],window.dispatchEvent(new CustomEvent("brain-health-event",{detail:s}))}function l(a,t={}){const{nav:s=!0,title:r="脑健康评估",back:d=!1}=t;return`<section class="phone"><div class="status"><span>9:41</span><span>▮▮▮  ◔  100%</span></div><header class="topbar"><button class="round-icon" aria-label="${d?"返回上一页":"我的"}" data-action="${d?"back":"my"}">${d?"‹":"⋯"}</button><h1>${r}</h1><span class="round-icon">◉</span></header>${a}${s?L():""}${e.modal?D():""}${e.toast?`<div class="toast">${e.toast}</div>`:""}</section>`}function L(){const a=e.page==="report"?"report":["my","serviceHome"].includes(e.page)?"my":"home";return`<nav class="nav" aria-label="主导航"><button class="${a==="home"?"active":""}" data-action="home"><span class="nav-icon" aria-hidden="true">⌂</span>首页</button><button class="${a==="report"?"active":""}" data-action="report"><span class="nav-icon" aria-hidden="true">▤</span>我的报告</button><button class="${a==="my"?"active":""}" data-action="my"><span class="nav-icon" aria-hidden="true">♙</span>我的</button></nav>`}function S(){return h()}function I(){return l('<div class="page ocean-login"><div class="login-illustration"><svg class="login-cloud" viewBox="0 0 140 120" role="img" aria-label="微笑的云朵"><path d="M35 89C20 89 13 79 15 66C16 55 24 48 35 48C35 32 47 22 61 24C71 12 94 19 98 35C115 32 126 45 122 60C139 74 127 93 112 92L35 89Z" fill="#fffefa" stroke="#448f90" stroke-width="3" stroke-linejoin="round"/><path d="M49 62v5M89 62v5" stroke="#357779" stroke-width="5" stroke-linecap="round"/><path d="M59 76Q69 85 79 76" fill="none" stroke="#357779" stroke-width="3.5" stroke-linecap="round"/><ellipse cx="43" cy="74" rx="7" ry="4" fill="#f3d6ce"/><ellipse cx="95" cy="74" rx="7" ry="4" fill="#f3d6ce"/><path d="M112 13v10M107 18h10" stroke="#fffefa" stroke-width="3" stroke-linecap="round"/><circle cx="20" cy="33" r="3" fill="#fffefa"/></svg></div><div class="center"><h2>先登录，再守护脑健康</h2><p>登录后开始脑健康评估，了解本次表现与日常建议。</p></div><section class="card login-card"><div class="user-line"><span class="avatar">微</span><div><b>微信快捷登录</b><small>当前为体验登录，无需提供微信账号</small></div></div><button class="primary" data-action="wechatLogin">微信一键登录</button><p class="agreement">登录即表示您同意 <button class="agreement-link" data-action="terms">《用户协议》</button> 与 <button class="agreement-link" data-action="privacy">《隐私政策》</button></p></section></div>',{nav:!1,title:"登录",back:!0})}function h(){return l(`<div class="page chinese-home member-home service-revision">
    <p class="member-greeting">忆启时光 · 从了解自己开始</p>
    <section class="hero member-assessment" aria-labelledby="member-assessment-title">
      <h2 id="member-assessment-title">脑健康评估</h2>
      <p>用约5分钟，了解记忆、反应与灵活性的表现。</p>
      <div class="chip-row"><span class="chip">约5分钟</span><span class="chip">免费评估</span></div>
      <button class="primary" data-action="${e.loggedIn?"prepare":"start"}">开始脑健康评估</button>
      <p class="assessment-caption">完成后查看个人报告与日常建议</p>
    </section>
    <h3 class="home-services-title">更多脑健康服务</h3>
    <section class="home-training" aria-labelledby="home-training-title">
      <h3 id="home-training-title">每日健脑训练</h3>
      <p>结合脑健康评估结果，了解适合自己的训练方向。添加企微客服，获取每日训练内容与提醒。</p>
      <button class="secondary" data-action="training">获取每日训练 <span aria-hidden="true">›</span></button>
      <small>添加后，在企业微信中接收训练入口</small>
    </section>
    <section class="home-device" aria-labelledby="home-device-title">
      <div class="home-device-heading"><span>让关怀融入每一天</span><small>开放预约</small></div>
      <h3 id="home-device-title">忆启时光认知陪伴平板</h3>
      <p>更专业的测评，更全面的训练，<br>更丰富的回忆、学习与日常陪伴。</p>
      <div class="home-device-visual" aria-hidden="true">
        <div class="home-device-screen"><span>忆启时光</span><strong>每天，多一份陪伴</strong><div><i>测</i><i>练</i><i>忆</i><i>学</i><i>伴</i></div></div>
      </div>
      <p class="home-device-caption">测 · 练 · 忆 · 学 · 陪伴一体</p>
      <button class="home-device-action" data-action="pad">了解并预约平板 <span aria-hidden="true">›</span></button>
    </section>
  </div>`,{title:"忆启时光"})}function A(){return l(`<div class="page chinese-home assessment-intro">
    <section class="intro-summary">
      <div class="intro-summary-heading"><span>5分钟 · 3 个任务</span><h2>脑健康评估</h2><p>了解脑健康状态，完成后查看个人报告。</p></div>
      <div class="intro-ability-grid">
        <div><span aria-hidden="true">◎</span><b>图形比较</b><p>找出与目标相同的图形。</p></div>
        <div><span aria-hidden="true">记</span><b>数字倒背</b><p>记住数字，再倒序输入。</p></div>
        <div><span aria-hidden="true">↔</span><b>停走转换</b><p>按当前规则，选择前进或停止。</p></div>
      </div>
      <div class="intro-brief-tip"><h3>温馨提示</h3><ul><li>放松身心，坐得舒服些，准备好再开始。</li><li>调整屏幕亮度，以看得清、眼睛舒适为宜。</li><li>如平时看屏幕需要眼镜，请先戴好。</li><li>找个安静的地方，保持手机竖屏，独立作答。</li></ul></div>
    </section>
    <div class="intro-action"><button class="primary" data-action="firstQuestion">开始评估 <span aria-hidden="true">→</span></button><p class="intro-footnote">结果仅供健康参考，不作为诊断依据。</p></div>
  </div>`,{nav:!1,title:"评估介绍",back:!0})}function E(){return l(`<div id="assessment-frame-stage" class="assessment-frame-stage">
    <div class="assessment-loading" role="status" aria-live="polite">
      <div class="assessment-loading-mark" aria-hidden="true"><i></i><i></i><i></i></div>
      <strong>正在进入基础信息</strong>
      <p>请稍候，马上就好</p>
    </div>
  </div>`,{nav:!1})}function q(){return e.assessmentSession?l(`<div id="assessment-frame-stage" class="assessment-frame-stage">
    <div class="assessment-loading" role="status" aria-live="polite">
      <div class="assessment-loading-mark" aria-hidden="true"><i></i><i></i><i></i></div>
      <strong>正在生成评估报告</strong>
      <p>请稍候，马上就好</p>
    </div>
  </div>`,{nav:!1}):l(`<div class="page center chinese-home service-revision"><h2>尚未完成脑健康评估</h2><p>完成三个任务后，您的报告将显示在这里。</p><button class="primary" data-action="${e.loggedIn?"prepare":"start"}">去评估</button></div>`)}window.addEventListener("message",a=>{var s,r,d;const t=n;if(!(!t||a.source!==t.contentWindow||a.origin!==location.origin||((s=a.data)==null?void 0:s.source)!=="portrait-assessment")){if(a.data.type==="ready"&&w(t),["completed","profile-updated"].includes(a.data.type)&&((d=(r=a.data.session)==null?void 0:r.results)==null?void 0:d.length)===3&&(e.assessmentSession=a.data.session,e.assessmentProfile=a.data.profile,a.data.type==="completed"&&c("mini_assessment_completed")),a.data.type==="task-completed"&&c("assessment_task_completed",{taskType:a.data.taskType}),a.data.type==="back-to-intro")return v(),i("prepare");if(a.data.type==="exit"&&(v(),i("home")),a.data.type==="navigate"&&["professional","reportConsult","training","games","pad","serviceHome"].includes(a.data.page)){if(c("report_next_step",{page:a.data.page}),a.data.page==="professional"&&(e.professionalReturnPage="report"),a.data.page==="pad"&&(e.padReturnPage="report"),["reportConsult","training","games","serviceHome"].includes(a.data.page))return e.myReturnPage="report",e.modal=a.data.page==="reportConsult"?"reportConsult":"training",c(a.data.page==="reportConsult"?"report_consult_interest":"daily_training_interest",{source:"report"}),i("my");i(a.data.page)}}});function H(){return l(`<div class="page chinese-home service-revision detail-page">
    <p class="detail-kicker">进一步了解自己</p><h2>专业认知筛查</h2>
    <p class="detail-lead">用更充分的时间，了解多个认知维度的表现。</p>
    <div class="detail-facts"><span><b>约35分钟</b>系统评估</span><span><b>多个维度</b>全面了解</span><span><b>详细报告</b>辅助理解</span></div>
    <section class="detail-copy"><h3>与5分钟评估有什么不同？</h3><p>脑健康评估帮助您初步了解本次表现；专业认知筛查包含更多任务，提供更完整的结果与建议。</p><h3>先了解，再决定</h3><p>如果想进一步了解，可以向客服咨询服务内容、参与方式与费用，再决定是否进行筛查。</p></section>
    <button class="primary" data-action="consult" data-intent="professional">咨询专业认知筛查</button>
    <p class="home-disclaimer">筛查不能代替医生诊断。若变化已影响日常生活，请及时就医咨询。</p>
  </div>`,{title:"专业认知筛查",back:!0,nav:!1})}function T(){return l(`<div class="page chinese-home service-revision detail-page">
    <p class="detail-kicker">开放预约</p><h2>忆启时光认知陪伴平板</h2>
    <p class="detail-lead">测、练、忆、学、陪伴一体，<br>把认知健康关怀带进日常生活。</p>
    <div class="tablet-illustration" aria-hidden="true"><div><span>忆启时光</span><strong>每天，多一份陪伴</strong><i></i><i></i><i></i></div></div>
    <section class="detail-copy"><h3>从了解自己，到丰富每一天</h3>
      <dl class="tablet-features">
        <div><dt><span>测</span>更专业的认知测评</dt><dd>覆盖更多认知维度，通过完整报告了解自己的表现。</dd></div>
        <div><dt><span>练</span>更全面的认知训练</dt><dd>多种能力训练与每日计划，让练习更有方向。</dd></div>
        <div><dt><span>忆</span>更丰富的回忆记录</dt><dd>聊聊往事，记录人生故事，留住珍贵的家庭记忆。</dd></div>
        <div><dt><span>学</span>更丰富的学习内容</dt><dd>通过老年课堂接触新知识，为日常生活增添兴趣。</dd></div>
        <div><dt><span>伴</span>更贴近日常的陪伴</dt><dd>聊生活、分享心情，让陪伴融入每一天。</dd></div>
      </dl>
    </section>
    <button class="primary" data-action="consult" data-intent="pad">预约认知陪伴平板</button>
    <p class="home-disclaimer">添加企微客服，了解产品并登记预约意向。具体配置、价格与交付安排以客服确认为准。</p>
  </div>`,{title:"陪伴平板",back:!0,nav:!1})}function f(a=""){return String(a).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function u(a,t,s=""){return`<button class="account-row" data-action="${t}">${s?`<span class="account-row-icon" aria-hidden="true"><svg viewBox="0 0 24 24">${{人:'<circle cx="12" cy="8" r="3.5"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/>',聊:'<path d="M4 13V11a8 8 0 0 1 16 0v2M4 12H2v6h4v-6H4m16 0h2v6h-4v-6h2m0 6v2h-6"/>',协议:'<path d="M6 3h9l4 4v14H6zM14 3v5h5M9 12h7M9 16h7"/>',隐私:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',忆:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.2"/>',设:'<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="10" cy="18" r="2"/>'}[s]}</svg></span>`:""}<span>${a}</span><span class="account-row-arrow" aria-hidden="true">›</span></button>`}function M(){var t;const a=((t=e.assessmentProfile)==null?void 0:t.name)||"微信用户";return l(`<div class="page chinese-home service-revision account-page">
    <button class="account-identity" data-action="profile">
      <span class="account-avatar" aria-hidden="true">${e.loggedIn?f(a.slice(0,1)):'<svg viewBox="0 0 32 32"><circle cx="16" cy="11" r="5"/><path d="M6 28c0-7 4-11 10-11s10 4 10 11"/></svg>'}</span>
      <span class="account-identity-copy"><b>${e.loggedIn?f(a):"点击登录"}</b><small>${e.loggedIn?"查看个人资料":"登录后查看个人信息"}</small></span>
      <span aria-hidden="true">›</span>
    </button>
    <section class="account-group" aria-label="个人资料">${u("我的资料","profile","人")}</section>
    <section class="account-group" aria-label="客服">
      ${u("联系客服","consult","聊")}
    </section>
    <section class="account-group" aria-label="协议与隐私">
      ${u("用户协议","terms","协议")}
      ${u("隐私政策","privacy","隐私")}
    </section>
    <section class="account-group" aria-label="应用信息">
      ${u("关于忆启时光","about","忆")}
      ${u("设置","settings","设")}
    </section>
    <p class="account-footer">忆启时光</p>
  </div>`,{title:"我的",back:e.myReturnPage==="report"})}function Q(){const a=e.assessmentProfile||{},t=a.supplementary||{},s=r=>r.map(([d,P])=>`<div class="account-data-row"><dt>${d}</dt><dd>${f(P||"未填写")}</dd></div>`).join("");return l(`<div class="page chinese-home service-revision account-page">
    <h2 class="account-section-title">基础信息</h2>
    <dl class="account-group account-data">${s([["称呼",a.name],["年龄",a.age?`${a.age}岁`:""],["性别",{female:"女",male:"男"}[a.gender]],["学历",a.education]])}</dl>
    <h2 class="account-section-title">日常信息</h2>
    <dl class="account-group account-data">${s([["常住地区",t.region],["近一个月睡眠",t.sleepQuality],["每周活动天数",t.exerciseDaysPerWeek]])}</dl>
    <p class="account-note">${e.assessmentProfile?"以上为本次评估使用的资料。日常信息为选填，未填写不影响查看报告。":"暂无已完成评估的资料。完成评估后，您填写的信息会显示在这里。"}</p>
  </div>`,{title:"我的资料",back:!0,nav:!1})}function B(){return l(`<div class="page chinese-home service-revision account-page">
    <section class="account-about"><span class="account-avatar" aria-hidden="true">忆</span><h2>忆启时光</h2><p>关注认知健康，陪伴日常生活。</p></section>
    <section class="account-group account-help-copy"><p>通过脑健康评估与报告，帮助您了解本次认知表现，并提供日常建议及客服咨询入口。</p></section>
    <dl class="account-group account-data"><div class="account-data-row"><dt>当前版本</dt><dd>H5 体验版</dd></div></dl>
  </div>`,{title:"关于忆启时光",back:!0,nav:!1})}function F(){return l(`<div class="page chinese-home service-revision account-page">
    ${e.loggedIn?'<button class="account-signout" data-action="logout">退出登录</button>':'<p class="account-note">当前未登录</p>'}
  </div>`,{title:"设置",back:!0,nav:!1})}function O(){const a=e.documentType==="terms"?"用户协议":"隐私政策";return l(`<div class="page chinese-home service-revision account-page"><section class="account-group account-help-copy"><h2 class="account-section-title">${a}暂未接入</h2><p>当前体验版尚未配置正式文档，暂时无法查看。</p><button class="secondary" data-action="consult">联系客服</button></section></div>`,{title:a,back:!0,nav:!1})}function W(){return M()}function D(){if(e.modal==="logout")return'<div class="modal-mask" data-action="closeModal"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="logout-title" data-action="keepModalOpen"><h2 id="logout-title">退出登录？</h2><p>退出后，本次体验中暂存的报告和资料将从当前页面清除。</p><button class="primary" data-action="confirmLogout">确认退出</button><button class="ghost" data-action="closeModal">取消</button></section></div>';if(e.modal==="share")return'<div class="modal-mask" data-action="closeModal"><section class="modal" data-action="keepModalOpen"><h2>把关心送给家人</h2><p>不强制分享。选择一种自然的方式，让家人也能做一次免费的脑健康评估。</p><button class="modal-option" data-action="shareChild"><span>👨‍👩‍👧</span><span>发送给子女查看结果<small>附上你的结果概览与小程序入口</small></span></button><button class="modal-option" data-action="shareFamily"><span>💛</span><span>邀请家人一起关注脑健康<small>双方完成后获得 7 日训练建议</small></span></button><p class="modal-note">演示版记录分享触发；正式版应调用微信原生分享并接收回流归因。</p><button class="ghost" data-action="closeModal">暂不分享</button></section></div>';const a={reportConsult:["添加客服，获取训练方法","获取日常健脑训练方法、练习建议与每日提醒，也可了解并预约忆启时光认知陪伴平板。"],training:["添加客服，获取每日训练","结合脑健康评估结果，了解自己的训练方向。添加客服获取每日训练内容与提醒，训练入口将在企业微信中发送。"],professional:["咨询专业认知筛查","添加企业微信客服，了解筛查内容、参与方式与费用，再决定是否参与。"],pad:["预约认知陪伴平板","添加企业微信客服，了解测、练、忆、学与陪伴功能，登记平板预约意向，并咨询价格和交付安排。"],service:["添加脑健康客服","报告有疑问，或想获取每日训练、了解专业筛查和平板，都可以联系我们。"]},[t,s]=a[e.modal]||a.service;return`<div class="modal-mask" data-action="closeModal"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="contact-title" data-action="keepModalOpen"><h2 id="contact-title">${t}</h2><p>${s}</p><div class="qr">${Array.from({length:49},(r,d)=>`<i style="visibility:${[0,1,2,7,9,14,16,17,18,30,31,32,40,41,42].includes(d)||(d*7+3)%5!==0?"visible":"hidden"}"></i>`).join("")}</div><p style="font-size:12px">企业微信活码占位 · 上线时替换为真实活码</p><input class="lead-input" placeholder="选填：留下手机号，客服可联系您" inputmode="tel" /><button class="primary" data-action="saveQr">保存二维码并添加客服</button><button class="ghost" data-action="closeModal">稍后再说</button></section></div>`}function p(){n&&x();const a={welcome:S,login:I,home:h,prepare:A,assessment:E,report:q,professional:H,pad:T,serviceHome:W,my:M,profile:Q,about:B,settings:F,policy:O}[e.page]||h;k.innerHTML=a(),e.page==="prepare"&&R(),(e.page==="assessment"||e.page==="report"&&e.assessmentSession)&&C()}function i(a){e.page=a,c("page_view",{page:a}),window.scrollTo(0,0),p()}function b(a){e.toast=a,p(),window.setTimeout(()=>{e.toast="",p()},1800)}k.addEventListener("click",a=>{const t=a.target.closest("[data-action]");if(!t)return;const{action:s}=t.dataset;if(s!=="keepModalOpen"){if(s==="profile")return e.loggedIn?i("profile"):(e.loginReturnPage="profile",i("login"));if(["about","settings"].includes(s))return i(s);if(s==="terms"||s==="privacy")return e.documentType=s,e.documentReturnPage=e.page,i("policy");if(s==="logout")return e.modal="logout",p();if(s==="confirmLogout")return v(),e.loggedIn=!1,e.assessmentSession=null,e.assessmentProfile=null,e.modal="",e.myReturnPage="home",i("my");if(s==="start")return e.loginReturnPage="home",c("mini_assessment_start_click"),i(e.loggedIn?"prepare":"login");if(s==="wechatLogin")return e.loggedIn=!0,c("login_success",{method:"wechat"}),i(e.loginReturnPage);if(s==="home")return i(e.loggedIn?"home":"welcome");if(s==="prepare")return i("prepare");if(s==="firstQuestion")return c("mini_assessment_started"),i("assessment");if(s==="report")return i("report");if(s==="pro")return e.professionalReturnPage=e.page==="report"?"report":["my","serviceHome"].includes(e.page)?"my":"home",c("professional_assessment_interest"),i("professional");if(s==="training"||s==="games")return c("daily_training_interest",{source:e.page}),e.modal="training",p();if(s==="pad")return e.padReturnPage=e.page==="report"?"report":["my","serviceHome"].includes(e.page)?"my":"home",c("pad_interest"),i("pad");if(s==="share")return c("share_entry_clicked",{page:e.page}),e.modal="share",p();if(s==="shareChild"||s==="shareFamily"){c("share_triggered",{motive:s==="shareChild"?"child_report":"family_training"}),e.modal=!1,b("演示版已记录分享；正式版将唤起微信分享");return}if(s==="consult"||s==="service")return c("customer_service_entry_clicked",{page:e.page}),e.modal=t.dataset.intent||"service",p();if(s==="serviceHome"||s==="my")return e.myReturnPage="home",i("my");if(s==="closeModal")return e.modal=!1,p();if(s==="saveQr")return c("customer_service_qr_saved"),b("演示版：正式上线时将保存真实企业微信活码");if(s==="back")return["profile","about","settings"].includes(e.page)?i("my"):e.page==="policy"?i(e.documentReturnPage):e.page==="login"&&e.loginReturnPage==="profile"?i("my"):e.page==="my"||e.page==="serviceHome"?i(e.myReturnPage):e.page==="professional"?i(e.professionalReturnPage):e.page==="pad"?i(e.padReturnPage):i({login:"welcome",prepare:"home",assessment:"prepare"}[e.page]||"home")}});const m=new URLSearchParams(location.search),y=m.get("service");["training","reportConsult","professional","pad","service"].includes(y)||m.has("game")?(e.page="my",e.modal=m.has("game")?"training":y):["my","professional","pad"].includes(m.get("view"))&&(e.page=m.get("view"));c("page_view",{page:e.page});p();
