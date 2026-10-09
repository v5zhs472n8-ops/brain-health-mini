import{h as l}from"./base-component-DLCjIPPq.js";const p=["大多睡得安稳","偶尔睡不好","经常睡不好"],a=["不到1天","1～2天","3～4天","5～7天"];class d extends l{render(){const e=(s,t,n)=>s.map(i=>`<label class="supplement-choice"><input type="${n}" name="${t}" value="${i}"><span>${i}</span></label>`).join("");return`<div class="supplement-page"><form class="supplement-profile">
      <header class="supplement-intro">
        <h1>再了解一点您的日常</h1>
        <p>补充一些日常信息，帮助我们更全面地了解您。</p>
        <p class="supplement-hint">以下信息均为选填，也可以直接查看报告。</p>
      </header>
      <section class="supplement-fields">
        <div class="supplement-question">
          <label for="supplement-region">您常住在哪个地区？</label>
          <p>填写省、市即可，不需要详细地址</p>
          <input id="supplement-region" name="region" type="text" maxlength="40" autocomplete="off" placeholder="例如：浙江省杭州市">
        </div>
        <fieldset class="supplement-question">
          <legend>最近一个月，您通常睡得怎么样？</legend>
          <div class="supplement-choices supplement-sleep">${e(p,"sleepQuality","radio")}</div>
        </fieldset>
        <fieldset class="supplement-question">
          <legend>最近一个月，每周有几天活动身体？</legend>
          <p>比如散步、跳舞、打太极等，每天累计约30分钟。</p>
          <div class="supplement-choices">${e(a,"exerciseDaysPerWeek","radio")}</div>
        </fieldset>
      </section>
      <footer class="supplement-actions">
        <button type="submit" class="supplement-primary">保存并查看报告</button>
        <button type="button" class="supplement-skip">暂不填写，直接查看报告</button>
      </footer>
    </form>
    <div class="supplement-loading" hidden>
      <div class="supplement-loading-card" role="status" aria-live="polite" tabindex="-1">
        <div class="supplement-loading-ring" aria-hidden="true"></div>
        <h2>测评报告生成中</h2>
        <p>正在整理您的测评结果，请稍候</p>
        <div class="supplement-loading-dots" aria-hidden="true"><i></i><i></i><i></i></div>
      </div>
    </div></div>`}onMount({onContinue:e}){this.finished=!1,this.onContinue=e,this.form=this.$("form"),this.handleSubmit=s=>{s.preventDefault(),this.finish(!1)},this.handleSkip=()=>this.finish(!0),this.form.addEventListener("submit",this.handleSubmit),this.$(".supplement-skip").addEventListener("click",this.handleSkip)}readAnswers(){const e=new FormData(this.form);return{region:String(e.get("region")||"").trim(),sleepQuality:e.get("sleepQuality")||"",exerciseDaysPerWeek:e.get("exerciseDaysPerWeek")||""}}hasAnswers(){const e=this.readAnswers();return!!(e.region||e.sleepQuality||e.exerciseDaysPerWeek)}finish(e){if(this.finished)return;this.finished=!0;const s=e||!this.hasAnswers()?null:{...this.readAnswers(),updatedAt:new Date().toISOString()};this.form.inert=!0,this.$$(".supplement-actions button").forEach(t=>{t.disabled=!0}),this.$(".supplement-page").classList.add("is-loading"),this.container.scrollTop=0,this.$(".supplement-loading").hidden=!1,this.$(".supplement-loading-card").focus({preventScroll:!0}),this.setTimeout(()=>this.onContinue(s),1400)}onUnmount(){var e,s;(e=this.form)==null||e.removeEventListener("submit",this.handleSubmit),(s=this.$(".supplement-skip"))==null||s.removeEventListener("click",this.handleSkip)}}export{d as S};
