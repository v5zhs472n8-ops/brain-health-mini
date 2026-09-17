const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./simple-mode-BxhwJRbr.js","./assessment-hk5ZzQ2J.js","./modulepreload-polyfill-B5Qt9EMX.js","./assessment-B9P6yPhl.css","./app-Bt4wJaFs.js","./state-store-BazEznd9.js","./simple-report-entry-C7wrLK_L.js"])))=>i.map(i=>d[i]);
import{C as p,_ as r,e as l,A as u,B as h}from"./assessment-hk5ZzQ2J.js";import"./modulepreload-polyfill-B5Qt9EMX.js";const d={textPrimary:"#1d293d",textSecondary:"#62748e",successFill:"#22c55e"},w='<svg width="6rem" height="6rem" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';class v extends p{async _isEmbeddedSimpleMode(){try{const{SimpleMode:e}=await r(async()=>{const{SimpleMode:t}=await import("./simple-mode-BxhwJRbr.js");return{SimpleMode:t}},__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return!!e.active}catch{return!1}}onUnmount(){l.stopSpeak()}async handleBack(){var e,t,i;if((t=(e=l).triggerHaptic)==null||t.call(e,"light"),await this._isEmbeddedSimpleMode()){const{SimpleMode:a}=await r(async()=>{const{SimpleMode:s}=await import("./simple-mode-BxhwJRbr.js");return{SimpleMode:s}},__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);a.exit("splash");return}(i=window.App)==null||i.navigate("splash")}async handleRetake(){var a,s,c;(s=(a=l).triggerHaptic)==null||s.call(a,"medium");const e=((c=u.getSnapshot())==null?void 0:c.name)||"",{AssessmentManager:t}=await r(async()=>{const{AssessmentManager:o}=await import("./assessment-hk5ZzQ2J.js").then(n=>n.aZ);return{AssessmentManager:o}},__vite__mapDeps([1,2,3]),import.meta.url);if(await this._isEmbeddedSimpleMode()){const{SimpleMode:o}=await r(async()=>{const{SimpleMode:n}=await import("./simple-mode-BxhwJRbr.js");return{SimpleMode:n}},__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);await o.restartForRetake(e);return}if(!await t.advanceToNext(e)){const{Utils:o}=await r(async()=>{const{Utils:n}=await import("./assessment-hk5ZzQ2J.js").then(m=>m.a_);return{Utils:n}},__vite__mapDeps([1,2,3]),import.meta.url);o.showToast("启动新测评失败，请稍后重试");return}window.location.reload()}async handleViewReport(){var t,i;(i=(t=l).triggerHaptic)==null||i.call(t,"light");const{openSimpleReport:e}=await r(async()=>{const{openSimpleReport:a}=await import("./simple-report-entry-C7wrLK_L.js");return{openSimpleReport:a}},__vite__mapDeps([6,1,2,3]),import.meta.url);await e({backTarget:"simple-complete-guide"})}render(){const e=window.innerHeight>window.innerWidth;return`
      <div class="page-bg-profile h-full relative overflow-hidden"
           aria-label="简版脑健康评估完成页"
           data-ai-hint="这是简版脑健康评估的完成引导页。用户已经完成过至少一份简版评估。页面有两个操作：「再测一次」会直接开始新一份评估；「查看报告」会打开历史评估报告（多份时进入报告列表，单份时直接打开报告）。左上角返回按钮会退出简版评估回到首页。">
        <!-- 装饰光晕 -->
        <!-- 左上返回按钮（复用 profile 样式） -->
        <div class="module-topbar">
          <button class="sm-nav-back" onclick="App.currentPage.handleBack()" aria-label="返回" data-ai-hint="退出简版评估，返回应用首页">
            ${h}
          </button>
        </div>

        <!-- 内容卡片（复用 profile 卡片尺寸与布局） -->
        <div class="absolute inset-0" style="overflow-y: auto; overflow-x: hidden; -webkit-overflow-scrolling: touch;">
          <div class="flex items-center justify-center" style="min-height: 100%;${e?" padding: 2.4rem;":""}">
            <div class="profile-card${e?" profile-card-portrait":""} flex items-center justify-center">
              <div class="fade-in flex flex-col items-center text-center" style="gap: 3.2rem;">

                <!-- 绿色对勾 -->
                <div style="width: 12rem; height: 12rem; border-radius: 50%; background: ${d.successFill}; display: flex; align-items: center; justify-content: center; box-shadow: 0 0.8rem 2rem rgba(34,197,94,0.3);">
                  ${w}
                </div>

                <!-- 标题 + 副文案 -->
                <div class="flex flex-col items-center" style="gap: 1.6rem;">
                  <h1 style="font-size: 3.6rem; font-weight: 900; color: ${d.textPrimary}; line-height: 1.4;">您已完成脑健康评估</h1>
                  <p style="font-size: 2rem; font-weight: 500; color: ${d.textSecondary}; line-height: 1.6;">您可以再做一次评估，或查看此前的评估报告</p>
                </div>

                <!-- 操作按钮（左：浅蓝重播色；右：蓝色主色） -->
                <div class="flex items-center justify-center" style="gap: 2.4rem;">
                    <button class="btn-3d-secondary"
                      style="background: #eff6ff; color: #3f516a; border-bottom: none; box-shadow: 0 0.6rem 0 #bacde6; font-weight: 900;"
                          aria-label="再测一次"
                          data-ai-hint="开始新一份简版脑健康评估"
                          onclick="App.currentPage.handleRetake()">
                    再测一次
                  </button>
                  <button class="btn-3d-primary"
                          aria-label="查看报告"
                          data-ai-hint="查看历史评估报告，多份时进入报告列表，单份时直接打开报告"
                          onclick="App.currentPage.handleViewReport()">
                    查看报告
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    `}}export{v as SimpleCompleteGuidePage};
