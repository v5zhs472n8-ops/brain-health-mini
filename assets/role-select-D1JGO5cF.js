import{C as i,A as a,i as n,U as l}from"./assessment-hk5ZzQ2J.js";import{A as r}from"./app-Bt4wJaFs.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./state-store-BazEznd9.js";function c(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}class f extends i{constructor(){super(),this.state={name:""}}async onMount(){var s,o;const e=await a.load();if(!n(e)){await r.navigateWithControl("profile",{},{clearHistory:!0,reason:"profile-required"});return}this.mounted&&this.setState({name:(e==null?void 0:e.name)||"当前用户"}),(s=this.container.querySelector("#role-current-user"))==null||s.addEventListener("click",()=>this.openSplash()),(o=this.container.querySelector("#role-add-user"))==null||o.addEventListener("click",()=>l.showToast("添加用户功能暂未开放"))}async openSplash(){const e=await a.load();if(!n(e)){await r.navigateWithControl("profile",{},{clearHistory:!0,reason:"profile-required"});return}r.navigateWithControl("splash",{},{clearHistory:!0,reason:"role-selected"})}render(){const e=c(this.state.name||"当前用户");return`
      <main class="h-full flex items-center justify-center overflow-hidden" style="background: #3e8cd5 url('https://cdn.keepwork.com/silvermind/games/shared/assets/background.png') center bottom / cover no-repeat;"
            aria-label="角色选择"
            data-ai-hint="当前是单账号的角色选择页。页面只有一个可用的当前用户角色，点击该角色进入应用首页；添加用户当前不可用，应说明功能暂未开放。">
        <section style="width: min(66rem, 90vw); padding: 3.2rem; border-radius: 0.8rem; background: rgba(255, 255, 255, 0.9); box-shadow: 0 1.2rem 3.2rem rgba(25, 87, 126, 0.28); color: #1d293d;">
          <h1 class="text-center" style="font-size: 3.6rem; font-weight: 800;">请选择使用者</h1>
          <button id="role-current-user" class="btn-press mt-3.2rem flex items-center w-full text-left" style="min-height: 12rem; padding: 2.4rem; border: 0.2rem solid #58b88b; border-radius: 0.8rem; background: #fff; box-shadow: 0 0.6rem 0 #b6dfcc;">
            <span class="flex items-center justify-center" style="width: 6.8rem; height: 6.8rem; border-radius: 50%; background: #dff5e9; color: #168153; font-size: 3rem; font-weight: 800;">${e.slice(0,1)}</span>
            <span class="ml-2rem"><strong style="display: block; font-size: 2.6rem;">${e}</strong><span style="font-size: 1.8rem; color: #62748e;">当前使用者</span></span>
          </button>
          <button id="role-add-user" class="btn-press mt-2rem w-full" style="min-height: 5.8rem; border: 0.2rem dashed #96b8aa; border-radius: 0.8rem; background: transparent; color: #527468; font-size: 2rem;">添加用户</button>
        </section>
      </main>
    `}}export{f as RoleSelectPage};
