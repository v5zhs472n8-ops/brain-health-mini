import{C as p,a as h,t as f,u,K as y,l as x}from"./assessment-hk5ZzQ2J.js";import{loadSimpleAssessmentData as b,openSimpleAssessmentReport as v}from"./simple-report-entry-C7wrLK_L.js";import{m as w,I as S,g as $,f as F,a as A,b as C,c as _,d as B}from"./history-list.icons-Y8U0IsaH.js";import"./modulepreload-polyfill-B5Qt9EMX.js";const a={pageBg:"#1E293B",contentWidth:"108rem",cardBg:"#FFFFFF",cardRadius:"2.8rem",cardBorderBottom:"0.5rem solid #F1F5F9",cardShadow:"0 0.6rem 0 rgba(0,0,0,0.06)",textPrimary:"#1D293D",textSecondary:"#62748E",scorePrimary:"#2B7FFF",arrowBg:"#E1E9F1"},g=["#3B82F6","#EC4899","#F97316","#8B5CF6","#10B981","#EF4444","#06B6D4"];function T(o){return o!=null?String(o):"-"}function H(o){return o.length>=5?"3.2rem":o.length>=4?"4rem":"4.8rem"}class E extends p{constructor(){super(),this.state={searchText:"",historyItems:[],loading:!0},this._isUnmounted=!1}async onMount(){this._isUnmounted=!1,await this._loadHistoryItems()}onUnmount(){this._isUnmounted=!0}_getSortedCompletedAssessments(){return[...h.getCompletedAssessments()].sort((e,t)=>{const i=Number(e==null?void 0:e.completedAt)||0;return(Number(t==null?void 0:t.completedAt)||0)-i})}async _loadHistoryItems(){var i;const e=this._getSortedCompletedAssessments(),t=[];for(const r of e)try{const{session:n,profile:s,profileBindingMode:d}=await b(r.pageName);if(!((i=n==null?void 0:n.results)!=null&&i.length))continue;let l;const c=n.simpleScoreCache;if(f(c,s,d))l=c.totalScore;else{const m=u(n.results,s||{});l=m.totalScore,n.simpleScoreCache=m,y.saveToPage(r.pageName,"current-session",n).catch(()=>{})}t.push({pageName:r.pageName,completedAt:r.completedAt??n.endTime??n.startTime??null,name:(s==null?void 0:s.name)||r.profileName||"未命名",age:(s==null?void 0:s.age)??null,gender:(s==null?void 0:s.gender)||"",totalScore:l})}catch(n){console.warn(`[SimpleHistoryList] 加载第 ${r.number} 份测评失败:`,n)}this._isUnmounted||(this.state.historyItems=t,this.state.loading=!1,this.update())}async viewReport(e){const t=h.getCompletedAssessments().find(i=>i.pageName===e);t&&await v(t,{backTarget:"simple-history-list"})}handleSearchInput(e){this.setStateQuiet({searchText:e}),this._updateListOnly()}_buildHistorySearchEntry(e){return{assessment:{completedAt:e==null?void 0:e.completedAt,profileName:(e==null?void 0:e.name)||""},detail:{profile:{name:(e==null?void 0:e.name)||""}}}}_getFiltered(e){const t=this.state.searchText||"";return e.filter(i=>{const r=this._buildHistorySearchEntry(i);return w(t,r.assessment,r.detail)})}_updateListOnly(){var r,n;const e=(r=this.container)==null?void 0:r.querySelector("#simple-history-list-content"),t=(n=this.container)==null?void 0:n.querySelector("#simple-history-record-count");if(!e)return;const i=this._getFiltered(this.state.historyItems);if(this.state.loading)e.innerHTML='<div style="text-align: center; padding: 8rem 2rem; color: rgba(255,255,255,0.6); font-size: 2rem;">正在加载...</div>';else if(i.length===0){const s=(this.state.searchText||"").trim();e.innerHTML=`<div style="text-align: center; padding: 8rem 2rem; color: rgba(255,255,255,0.6); font-size: 2rem;">${s?"未找到匹配的记录":"暂无历史报告"}</div>`}else e.innerHTML=i.map((s,d)=>this.renderHistoryItemCard(s,d)).join("");t&&(t.textContent=`共 ${i.length} 条记录，点击查看详细报告`)}renderSearchBar(){return`
      <div style="height: 5.6rem; background: rgba(255,255,255,0.1); border: 0.1rem solid rgba(255,255,255,0.15); border-radius: 1.6rem; display: flex; align-items: center; padding: 0 1.7rem; gap: 1.2rem; box-sizing: border-box;">
        ${S}
        <input type="text" placeholder="搜索姓名或日期..."
               value="${this.state.searchText}"
               oninput="App.currentPage.handleSearchInput(this.value)"
               style="flex: 1; min-width: 0; background: transparent; border: none; outline: none; font-size: 1.8rem; font-weight: 400; line-height: 2.7rem; color: #FFFFFF; font-family: inherit;"
               class="placeholder-white-60" />
      </div>
    `}renderHistoryItemCard(e,t){const i=(e==null?void 0:e.name)||"未命名",r=i.charAt(0),n=g[t%g.length],s=$(e==null?void 0:e.gender),d=(e==null?void 0:e.age)??"-",l=T(e==null?void 0:e.totalScore),c=H(l),m=F(e==null?void 0:e.completedAt);return`
      <button onclick='App.currentPage.viewReport(${JSON.stringify((e==null?void 0:e.pageName)||"")})'
              class="btn-press"
              aria-label="查看${i}的评估报告"
              data-ai-hint="点击查看该次简版评估报告详情"
              style="width: 100%; height: 12.8rem; background: ${a.cardBg}; border-radius: ${a.cardRadius}; border-bottom: ${a.cardBorderBottom}; box-shadow: ${a.cardShadow}; padding: 2.4rem; display: flex; align-items: center; text-align: left; box-sizing: border-box;">
          <div style="width: 6.4rem; height: 6.4rem; border-radius: 1.8rem; background: ${n}; border: 0.3rem solid white; box-shadow: 0 0.4rem 1.2rem rgba(0,0,0,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <span style="font-size: 2.4rem; font-weight: 600; color: white; line-height: 3.6rem;">${r}</span>
          </div>

          <div style="margin-left: 2rem; display: flex; flex-direction: column; gap: 0.6rem; flex: 1; min-width: 0; padding-top: 0.2rem;">
            <div style="font-size: 2.4rem; font-weight: 600; color: ${a.textPrimary}; line-height: 3.36rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${i}</div>
            <div style="display: flex; align-items: center; gap: 1.9rem; flex-wrap: wrap; color: ${a.textSecondary};">
              <span style="display: inline-flex; align-items: center; gap: 0.6rem;">
                ${A}
                <span style="font-size: 1.8rem; font-weight: 500; color: ${a.textSecondary}; line-height: 2.7rem;">${s} · ${d} 岁</span>
              </span>
              <span style="display: inline-flex; align-items: center; gap: 0.6rem;">
                ${C}
                <span style="font-size: 1.8rem; font-weight: 500; color: ${a.textSecondary}; line-height: 2.7rem;">${m}</span>
              </span>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.2rem; flex-shrink: 0; margin-left: 2rem; margin-right: 2.8rem; width: 8.4rem;">
            <span style="font-size: ${c}; font-weight: 600; color: ${a.scorePrimary}; line-height: 1; white-space: nowrap;">${l}</span>
            <span style="font-size: 1.4rem; font-weight: 500; color: #90A1B9; line-height: 2.1rem;">综合得分</span>
          </div>

          <div style="width: 4rem; height: 4rem; background: ${a.arrowBg}; border-radius: 1.4rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            ${_}
          </div>
      </button>
    `}render(){const e="App.navigate('simple-complete-guide')",t=this._getFiltered(this.state.historyItems),i=(this.state.searchText||"").trim();let r;return this.state.loading?r='<div style="text-align: center; padding: 8rem 2rem; color: rgba(255,255,255,0.6); font-size: 2rem;">正在加载...</div>':t.length===0?r=`<div style="text-align: center; padding: 8rem 2rem; color: rgba(255,255,255,0.6); font-size: 2rem;">${i?"未找到匹配的记录":"暂无历史报告"}</div>`:r=t.map((n,s)=>this.renderHistoryItemCard(n,s)).join(""),`
      <div class="h-full flex flex-col"
           style="background: ${a.pageBg}; overflow: hidden; position: relative;"
           aria-label="简版评估历史报告列表"
           data-ai-hint="这是简版脑健康评估的历史报告列表，展示用户完成过的多份简版评估。可按姓名或日期搜索，点击某条记录打开对应的简版评估报告。左上角返回按钮回到完成引导页。">
        <div style="flex-shrink: 0; padding: 0.8rem 0.8rem 0;">
          <div style="width: min(126.4rem, calc(100% - 1.6rem)); height: 8rem; margin: 0 auto; position: relative; display: flex; align-items: center; justify-content: center;">
            <button onclick="${e}" class="btn-press flex items-center justify-center" aria-label="返回上一页" data-ai-hint="返回完成引导页" style="position: absolute; left: 1.6rem; top: 1rem; width: 6rem; height: 6rem; border-radius: 1.6rem; background: rgba(255,255,255,0.2); border: 0.2rem solid rgba(255,255,255,0.1); color: white; box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.1), 0 0.4rem 0.6rem rgba(0,0,0,0.1);">
              ${x}
            </button>
            <div style="display: inline-flex; align-items: center; gap: 1.2rem; transform: translateY(-0.1rem);">
              <div style="width: 4rem; height: 4rem; background: #FE9A00; border-radius: 1.4rem; box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.1), 0 0.4rem 0.6rem rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center;">
                ${B}
              </div>
              <h1 style="font-size: 3.2rem; font-weight: 600; color: #FFFFFF; line-height: 3.2rem; margin: 0;">测评结果</h1>
            </div>
          </div>
        </div>

        <div style="flex: 1; overflow-y: auto; padding: 0.8rem 1.6rem 3.2rem; box-sizing: border-box;">
          <div style="width: min(${a.contentWidth}, 100%); margin: 0 auto; display: flex; flex-direction: column; gap: 2.4rem;">
            ${this.renderSearchBar()}

            <div id="simple-history-record-count" style="font-size: 2rem; font-weight: 500; color: rgba(255,255,255,0.8); line-height: 3rem;">
              共 ${t.length} 条记录，点击查看详细报告
            </div>

            <div id="simple-history-list-content" style="display: flex; flex-direction: column; gap: 1.6rem;">
              ${r}
            </div>
          </div>
        </div>
      </div>
    `}}export{E as SimpleHistoryListPage};
