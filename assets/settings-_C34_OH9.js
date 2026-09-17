import{C as g,e as c}from"./assessment-hk5ZzQ2J.js";import"./modulepreload-polyfill-B5Qt9EMX.js";const l={render(i={}){const{id:t="switch",checked:e=!1,onChange:o="",disabled:n=!1}=i,r=e?"checked":"",s=n?"disabled":"",a=n?"":`onclick="SwitchToggle.toggle('${t}', '${o}')"`,d=i.ariaLabel?` aria-label="${i.ariaLabel}"`:"";return`
      <div id="${t}" 
           class="switch-toggle ${r} ${s}" 
           role="switch"
           aria-checked="${e}"
           data-checked="${e}"${d}
           ${a}>
        <div class="switch-knob"></div>
      </div>
    `},toggle(i,t){const e=document.getElementById(i);if(!e||e.classList.contains("disabled"))return;const n=!(e.dataset.checked==="true");if(e.dataset.checked=n,e.classList.toggle("checked",n),e.setAttribute("aria-checked",String(n)),typeof t=="string"){const r=t.split(".");let s=window,a;for(let d=0;d<r.length-1;d++)if(s=s[r[d]],!s)return;a=s[r[r.length-1]],typeof a=="function"&&a.call(s,n)}else typeof t=="function"&&t(n)},isChecked(i){const t=document.getElementById(i);return t?t.dataset.checked==="true":!1},setChecked(i,t){const e=document.getElementById(i);e&&(e.dataset.checked=t,e.classList.toggle("checked",t))}};class m extends g{onMount(){document.addEventListener("click",this.closeDropdown)}onUnmount(){document.removeEventListener("click",this.closeDropdown)}closeDropdown(t){const e=document.getElementById("font-size-options"),o=document.getElementById("font-size-dropdown");e&&o&&!o.contains(t.target)&&!e.contains(t.target)&&e.classList.remove("show")}isFromProfile(){return window.App&&window.App.previousPage==="profile"}getBackTarget(){return this.isFromProfile()?"profile":"splash"}render(){return this.isFromProfile()?this.renderPortrait():this.renderLandscape()}renderPortrait(){const{hapticEnabled:t,voiceEnabled:e}=c.current;return`
      <div style="min-height: 100%; background-color: #F5EDE3; padding-bottom: 24px;">
        <div class="fade-in" style="max-width: 400px; width: 100%; margin: 0 auto; padding: 0 16px; box-sizing: border-box;">
          <!-- 顶栏 -->
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 20px 0; position: relative;">
            <button onclick="App.navigate('${this.getBackTarget()}')" aria-label="返回上一页" data-ai-hint="返回上一个页面"
                    style="display: flex; align-items: center; color: #333; font-size: 16px; background: none; border: none; cursor: pointer; padding: 0;">
              <svg style="width: 20px; height: 20px; margin-right: 4px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              返回
            </button>
            <h1 style="position: absolute; left: 50%; transform: translateX(-50%); font-size: 20px; font-weight: bold; color: #333; margin: 0;">设置</h1>
            <div style="width: 60px;"></div>
          </div>
          
          <!-- 设置项列表 -->
          <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
            
            <!-- 1. 震动反馈 -->
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px; border-bottom: 1px solid #f0f0f0;">
              <div style="display: flex; align-items: center;">
                <span style="color: #999; font-size: 14px; margin-right: 10px;">1</span>
                <span style="font-size: 16px; color: #333;">震动反馈</span>
              </div>
              ${l.render({id:"haptic-switch",checked:t,onChange:"Settings.setHaptic",ariaLabel:"开关震动反馈"})}
            </div>
            
            <!-- 2. 语音播报 -->
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px;">
              <div style="display: flex; align-items: center;">
                <span style="color: #999; font-size: 14px; margin-right: 10px;">2</span>
                <span style="font-size: 16px; color: #333;">语音播报</span>
              </div>
              ${l.render({id:"voice-switch",checked:e,onChange:"Settings.setVoice",ariaLabel:"开关语音播报"})}
            </div>
          </div>
          
          <!-- 清除数据按钮 -->
          <div style="margin-top: 20px;">
            <button onclick="Settings.clearData()" 
                    class="btn-press"
                    aria-label="清除所有数据" data-ai-hint="清除本地所有测评数据和缓存"
                    style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; background: linear-gradient(135deg, #FF9F43, #FF8C42); color: white; font-size: 16px; font-weight: 500; padding: 14px 20px; border-radius: 12px; border: none; cursor: pointer; box-shadow: 0 4px 12px rgba(255, 140, 66, 0.3);">
              <svg style="width: 20px; height: 20px;" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              清除所有数据
            </button>
          </div>
        </div>
      </div>
    `}renderLandscape(){const{hapticEnabled:t,voiceEnabled:e}=c.current;return`
      <div class="h-full overflow-y-auto flex items-center justify-center" style="background-color: #F5EDE3;">
        <div class="fade-in" style="max-width: 56rem; width: 100%;">
          <!-- 顶栏 -->
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 2.5rem; position: relative;">
            <button onclick="App.navigate('${this.getBackTarget()}')" aria-label="返回上一页" data-ai-hint="返回上一个页面"
                    style="display: flex; align-items: center; color: #333; font-size: 2.2rem; background: none; border: none; cursor: pointer;">
              <svg style="width: 2.4rem; height: 2.4rem; margin-right: 0.6rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              返回
            </button>
            <h1 style="position: absolute; left: 50%; transform: translateX(-50%); font-size: 2.8rem; font-weight: bold; color: #333; margin: 0;">设置</h1>
            <div style="width: 8rem;"></div>
          </div>
          
          <!-- 设置项列表 -->
          <div style="padding: 0 2.5rem 2.5rem;">
            <div style="background: white; border-radius: 1.6rem; overflow: hidden; box-shadow: 0 0.2rem 0.8rem rgba(0,0,0,0.05);">
              
              <!-- 1. 震动反馈 -->
              <div class="settings-item">
                <div style="display: flex; align-items: center;">
                  <span style="color: #999; font-size: 2rem; margin-right: 1.2rem;">1</span>
                  <span style="font-size: 2.4rem; color: #333;">震动反馈</span>
                </div>
                ${l.render({id:"haptic-switch",checked:t,onChange:"Settings.setHaptic",ariaLabel:"开关震动反馈"})}
              </div>
              
              <!-- 2. 语音播报 -->
              <div class="settings-item">
                <div style="display: flex; align-items: center;">
                  <span style="color: #999; font-size: 2rem; margin-right: 1.2rem;">2</span>
                  <span style="font-size: 2.4rem; color: #333;">语音播报</span>
                </div>
                ${l.render({id:"voice-switch",checked:e,onChange:"Settings.setVoice",ariaLabel:"开关语音播报"})}
              </div>
            </div>
            
            <!-- 清除数据按钮 -->
            <div style="margin-top: 2.5rem;">
              <button onclick="Settings.clearData()" 
                      class="btn-press"
                      aria-label="清除所有数据" data-ai-hint="清除本地所有测评数据和缓存"
                      style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 1rem; background: linear-gradient(135deg, #FF9F43, #FF8C42); color: white; font-size: 2.4rem; font-weight: 500; padding: 2rem 2.5rem; border-radius: 1.6rem; border: none; cursor: pointer; box-shadow: 0 0.4rem 1.2rem rgba(255, 140, 66, 0.3);">
                <svg style="width: 2.4rem; height: 2.4rem;" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
                清除所有数据
              </button>
            </div>
          </div>
        </div>
      </div>
    `}}export{m as SettingsPage};
