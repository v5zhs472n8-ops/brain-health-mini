import{C as Ie,K as B,S as z,r as ge,h as fe,e as Fe,j as He,c as D,k as Be,l as De,m as Le,n as Oe,o as We,q as je,s as ze,E as Ke,W as Ge,P as Ue,g as w,b as x}from"./assessment-mJmy6gOP.js";import{D as be,C as J}from"./character-ai-iframe-BrqXIuNV.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./sop-manager-4mqRR8Su.js";import"./app-C8gTfAaU.js";import"./state-store-Dvo1jwmm.js";const oe=Object.freeze(["processing-speed","working-memory","executive-function","visual-discrimination","visual-search"]),Ve=Object.freeze({"noise-digit-recognition":"visual-discrimination","visual-search":"visual-search"});function Z(r){if(r==null||r==="")return null;const e=Number(r);return Number.isFinite(e)?e:null}function ee(r={}){return oe.reduce((e,t)=>{var s;return e[t]=Z((s=r==null?void 0:r[t])==null?void 0:s.tScore),e},{})}function qe(r,e=""){return r==="visual-perception"?Ve[e]||null:oe.includes(r)?r:null}function ve(r={},e,t=""){const s=qe(e,t);return s?Z(r==null?void 0:r[s]):null}function Ye(r={}){return oe.some(e=>Z(r==null?void 0:r[e])!=null)}function K(r){const e=Z(r);return e==null?"-":String(e)}const Ne={"processing-speed":Ue,"working-memory":Ge,"executive-function":Ke,"visual-perception":ze};function ye(r,e){const t=e==null?void 0:e.age,s=(e==null?void 0:e.educationYears)??(e==null?void 0:e.education)??12,i={};for(const c of r){const m=D.TASKS[c.taskType];if(!m)continue;const u=m.module;i[u]||(i[u]=[]),i[u].push(c)}const a={},n=[];for(const[c,m]of Object.entries(Ne)){const u=i[c];if(u!=null&&u.length)if(c==="visual-perception"){const h={};for(const f of u){const v=m.calculateCompositeScore([f],t,s);h[f.taskType]=v,v.meanZScore!=null&&Object.keys(v.taskScores).every(k=>v.taskScores[k].hasNorm!==!1)&&n.push(v.meanZScore)}const b=u.length>1?m.calculateCompositeScore(u,t,s):Object.values(h)[0];a[c]={composite:b,taskComposites:h,individual:!0}}else if(c==="executive-function"){const h=i["working-memory"]||[],b=m.calculateCompositeScore(u,t,s,h);n.push(b.meanZScore),a[c]={composite:b,individual:!1}}else{const h=m.calculateCompositeScore(u,t,s);n.push(h.meanZScore),a[c]={composite:h,individual:!1}}}const l=n.length>0?n.reduce((c,m)=>c+m,0)/n.length:0,o=Math.max(-3,Math.min(3,l));return{totalScore:Math.round(70+10*o),Mz:o,moduleData:a}}const P={"processing-speed":"加工速度","working-memory":"工作记忆","executive-function":"执行功能","visual-discrimination":"视觉分辨","visual-search":"视觉搜索"},Ze={"processing-speed":["按顺序做事","快速识别物品训练"],"working-memory":["记数字","背简单口诀","分步记事情训练"],"executive-function":["策略类棋牌游","多任务训练","制定每日小计划","分步完成家务训练"],"visual-discrimination":["找不同","辨认模糊字迹","区分相似小物件","挑豆子训练"],"visual-search":["快速找名字","杂物里找东西","图片里找小目标训练"]};function Qe(r,e){if(r.length<=e)return[...r];const t=[...r];for(let s=t.length-1;s>0;s--){const i=Math.floor(Math.random()*(s+1));[t[s],t[i]]=[t[i],t[s]]}return t.slice(0,e)}function Xe(r){const e=r.length>=2?2:1/0;return r.flatMap(s=>{const i=Ze[s]||[];return Qe(i,e)}).join("、")}function _e(r={},e={}){const t={};for(const s of Object.keys(P)){const i=e[s];t[s]=i!=null&&Number.isFinite(Number(i))?Number(i):r[s]??null}return t}function Se(r,e){const t=[],s=[],i=[];for(const[h,b]of Object.entries(P)){const f=r[h];f==null||!Number.isFinite(f)||(f>=80?t.push(h):f<60?s.push(h):i.push(h))}const a=t.length>0,n=s.length>0,l=t.map(h=>P[h]).join("、"),o=s.map(h=>P[h]).join("、"),d=n?Xe(s):"",c=t.length+s.length+i.length,m=n&&s.length===c,u=a&&t.length===c;if(e<60){if(a&&n)return`本次认知能力测评总分为${e}分，多项核心认知能力需要重点关注和提升。在${l}方面表现突出，说明该领域的认知功能保持良好。${o}方面的得分偏低，建议在日常生活中多进行相关的认知训练，如${d}，同步保持社交活动与规律运动，持续关注自身认知健康，如有需要可咨询专业医疗人员，定期进行认知评估以监测认知变化。`;if(m)return`本次认知能力测评总分为${e}分，您的加工速度、工作记忆、执行功能、视觉分辨、视觉搜索五项核心认知能力得分均显著低于同龄人平均水平，会直接影响您的日常独立生活能力，存在较高的认知衰退风险，需要您高度重视。建议关注认知健康，保持社交活动和规律运动，如有需要可咨询专业医疗人员，定期进行认知评估以监测认知变化。`;if(!a&&n)return`本次认知能力测评总分为${e}分，多项核心认知能力需要重点关注和提升。${o}方面的得分偏低，建议在日常生活中多进行相关的认知训练，如${d}，同步保持社交活动与规律运动，持续关注自身认知健康，如有需要可咨询专业医疗人员，定期进行认知评估以监测认知变化。`}if(e>=80){if(u)return`本次认知能力测评总分为${e}分，整体表现处于优秀水平。您的加工速度、工作记忆、执行功能、视觉分辨、视觉搜索五项核心认知能力均处于同龄人上游水平，全维度认知功能保持良好，说明您日常的思维训练和生活习惯对认知保持起到了极强的积极作用。建议您继续保持良好的生活习惯，定期进行认知评估以监测认知变化，维持当前出色的大脑健康状态。`;if(a&&n)return`本次认知能力测评总分为${e}分，整体表现处于优秀水平。在${l}方面表现突出，说明该领域的认知功能保持良好，日常的思维训练和生活习惯对认知保持起到了积极作用。${o}方面的得分偏低，建议在日常生活中多进行相关的认知训练，如${d}，针对性补全相关认知能力。建议您保持当前优质的生活与思维训练习惯，巩固并维持当前出色的认知状态。`;if(a&&!n)return`本次认知能力测评总分为${e}分，整体表现处于优秀水平。在${l}方面表现突出，说明该领域的认知功能保持良好，日常的思维训练和生活习惯对认知保持起到了积极作用。建议您保持当前优质的生活与思维训练习惯，巩固并维持当前出色的认知状态。`}return a&&n?`本次认知能力测评总分为${e}分，整体表现处于中等水平。在${l}方面表现突出，说明该领域的认知功能保持良好，日常的思维训练和生活习惯对认知保持起到了积极作用。${o}方面的得分偏低，建议在日常生活中多进行相关的认知训练，如${d}，针对性提升相关认知能力。建议继续保持良好的生活习惯，关注认知健康，定期进行认知评估以监测认知变化。`:a&&!n?`本次认知能力测评总分为${e}分，整体表现处于中等水平。在${l}方面表现突出，说明该领域的认知功能保持良好，日常的思维训练和生活习惯对认知保持起到了积极作用。建议继续保持良好的生活习惯，关注认知健康，定期进行认知评估以监测认知变化。`:!a&&n?`本次认知能力测评总分为${e}分，整体表现处于中等水平。${o}方面的得分偏低，建议在日常生活中多进行相关的认知训练，如${d}，针对性提升相关认知能力。建议继续保持良好的生活习惯，关注认知健康，定期进行认知评估以监测认知变化。`:`本次认知能力测评总分为${e}分，整体表现处于中等水平。您的五项核心认知能力均与同龄人平均水平持平，能够支撑日常基础生活事务，但各项认知能力均有较大提升空间。可以及时进行针对性的认知训练，避免出现认知能力逐步下滑的情况。建议在日常生活中进行全维度的认知健脑训练，配合规律作息与适度脑力活动，定期进行认知评估以监测认知变化。`}const ie=Object.freeze([{min:85,key:"excellent",label:"优秀（85–100）",title:"本次整体表现亮眼",spokenTitle:"整体表现亮眼",identity:"活力生活家"},{min:60,key:"steady",label:"平稳（60–84）",title:"本次整体表现平稳",spokenTitle:"整体表现平稳",identity:"稳健生活家"},{min:0,key:"focus",label:"待加强（0–59）",title:"有些能力可以慢慢加强",spokenTitle:"有些能力可以慢慢加强",identity:"脑健康守护者"}]),te=Object.freeze({"processing-speed":{strength:"理解信息、及时回应时更从容",steady:"面对熟悉、清楚的信息时，通常能够按自己的节奏处理",focus:"理解和回应信息的节奏稍慢，但不代表理解能力有问题"},"working-memory":{strength:"记住信息后能顺利接着做",steady:"熟悉的信息和简单步骤通常能够较好记住",focus:"临时记住信息时稍费力，但不代表记忆能力全面下降"},"executive-function":{strength:"安排步骤、应对变化时更有章法",steady:"面对步骤明确的日常事务时，通常能够顺利完成",focus:"安排步骤或转换做法时稍慢，但不代表无法独立做事"},"visual-discrimination":{strength:"分辨相似物品和细节时更准确",steady:"在信息清楚、光线合适时，通常能够较稳定地分辨细节",focus:"辨认相似细节时稍费力，但不能直接等同于视力问题"},"visual-search":{strength:"从复杂信息中找目标时更容易抓住重点",steady:"在目标明确、环境熟悉时，通常能够较顺利地找到需要的信息或物品",focus:"在复杂画面中找目标稍慢，但不代表视力或整体认知下降"}}),Je=Object.freeze({"processing-speed":{strength:"反应很利落",steady:"反应有节奏"},"working-memory":{strength:"记事有条理",steady:"记事较平稳"},"executive-function":{strength:"安排有章法",steady:"做事较稳当"},"visual-discrimination":{strength:"细节看得准",steady:"细节看得稳"},"visual-search":{strength:"目标找得快",steady:"找东西有章法"}}),ke=Object.freeze({"processing-speed":"每天用 5 分钟给常见物品分类，练习看清信息后及时作出选择","working-memory":"每天记住 3 件小事，隔几分钟后再试着完整回想一遍","executive-function":"做家务前先写下 3 个步骤，再按照顺序逐项完成","visual-discrimination":"每天做一组“找不同”，逐项对照容易混淆的细节","visual-search":"每天用 5 分钟，在报纸或图片中寻找指定的文字或物品",fallback:"一次只做一件事，按自己的节奏来"}),Ae=Object.freeze({"processing-speed":"看通知或操作手机时，先看清一项信息，再完成对应的一步。","working-memory":"购物前先记住3样物品，到店后回想一遍，再查看清单。","executive-function":"做一件家务前写下3个步骤，再按照顺序逐项完成。","visual-discrimination":"辨认相似包装时，把颜色、文字和形状逐项对照。","visual-search":"找物品或文字时，一次只找一个目标，并按从左到右的顺序查看。",fallback:"选择一件熟悉的小事，把练习中的方法用一遍"});function et(r){return ie.find(e=>r>=e.min)||ie[2]}function G(r,e){return Object.keys(P).map(t=>({key:t,score:(r==null?void 0:r[t])==null?NaN:Number(r[t])})).filter(t=>Number.isFinite(t.score)&&e(t.score))}function U(r,e){return r.reduce((t,s)=>!t||e*s.score>e*t.score?s:t,null)}const se=Object.freeze({"processing-speed":{context:"看懂一条手机提示，再决定下一步怎么操作，需要及时处理信息。",practice:"看清信息，再作出选择",method:"在分类、比较和判断任务中，练习看懂信息后作出回应。"},"working-memory":{context:"临时记住要买的东西，接着完成购物，会用到“边记边做”的能力。",practice:"记住信息，接着完成任务",method:"在记忆类任务中，练习记住刚出现的信息，再根据提示作答。"},"executive-function":{context:"安排做事顺序、遇到变化时调整做法，都需要这项能力参与。",practice:"跟随规则，灵活调整",method:"在规则与策略任务中，练习按要求行动，并在规则变化后调整做法。"},"visual-discrimination":{context:"比较相似物品的形状和细节，需要分辨信息之间的差别。这项任务不能代替视力检查。",practice:"比较细节，分辨差别",method:"从观察与比较任务开始，练习对照目标、辨认相似图形之间的差别。"},"visual-search":{context:"在名单里找名字、在货架上找物品，都需要从多条信息中找到目标。",practice:"找到目标，减少干扰",method:"在找目标的任务中，练习从多种图案和干扰信息里找到指定对象。"}});function tt(r,e){const t=et(e),s=U(G(r,()=>!0),-1),i=U(G(r,u=>u>=80),1),a=U(G(r,u=>u>=60&&u<80),1),n=U(G(r,u=>u<60),-1),l=i||a,o=l?Je[l.key][i?"strength":"steady"]:"",d=n?"【"+P[n.key]+"】需要多一点时间，"+te[n.key].focus+"。":"",c=i?"您的【"+P[i.key]+"】表现突出，"+te[i.key].strength+"。"+d:a?"五项能力整体表现较为平稳，其中【"+P[a.key]+"】保持得更稳，"+te[a.key].steady+"。"+d:n?d:"愿意完成这次测评，本身就是对脑健康的一份认真关照。详细结果还在整理，稍后再回来看看吧。",m=[s?ke[s.key]:ke.fallback,"睡眠规律、适量运动，也别忘了和家人朋友多聊聊"];return{scoreRange:t,focusKey:(n==null?void 0:n.key)||null,hasScores:!!s,identity:t.identity,trait:o,narrative:c,dailyTips:m,trainingAction:s?Ae[s.key]:Ae.fallback,spokenItems:[`您本次测评综合得分${e}分，${t.spokenTitle}。总的来说，${c.replace(/[。！？；]$/,"").replace(/[【】]/g,"")}。日常可以用一些小方法，给大脑一些关照，比如，${m[0]}，同时也要保持${m[1]}，让大脑持续健康。`]}}function st(r,e){return r==null||isNaN(r)?"-":e==="ms"||e==="位"||e==="次"?`${Math.round(r)}${e}`:`${Number(r).toFixed(1)}${e}`}function rt(r){if(!r||r<=0)return"-";const e=Math.floor(r/36e5),t=Math.floor(r%36e5/6e4),s=Math.floor(r%6e4/1e3),i=String(e).padStart(2,"0"),a=String(t).padStart(2,"0"),n=String(s).padStart(2,"0");return`${i}:${a}:${n}`}function it(r){if(!r)return"-";const e=new Date(r),t=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${t}-${s}-${i}`}function at(r){return r==="male"?"男":r==="female"?"女":r==="other"?"保密":r||"-"}function Te(r){return r==="female"?"female":"male"}function W(r,e,t){return Math.max(e,Math.min(t,r))}const F=[6,18,36,51,66,80],q=11.2,le=1.6;function Pe(r=F.length){return r*q+Math.max(r-1,0)*le}function nt(r){const e=Y[r]||Y.male,t=q+le;return e.map((s,i)=>i*t+(q+s.frameWidth)/2)}function ot(r,e=F.length){return`calc(50% - ${Pe(e)/2}rem + ${r}rem)`}function $e(r,e){const t=nt(e);if(!t.length)return{markerLeft:"50%",bubbleLeft:"50%"};let s=0;if(r<=F[0])s=Number.isFinite(r)?t[0]:0;else{const a=F.length-1;if(r>=F[a])s=t[a];else for(let n=0;n<a;n++){const l=F[n],o=F[n+1];if(r<=o){const d=t[n],c=t[n+1],m=(r-l)/(o-l);s=d+(c-d)*m;break}}}const i=ot(s,t.length);return{markerLeft:i,bubbleLeft:`clamp(10rem, ${i}, calc(100% - 10rem))`}}function Re(r,e){return!Number.isFinite(r)||!Number.isFinite(e)?"您的大脑状态评估中":r<e-1?"您的大脑处于年轻活力状态":r<=e+1?"您的大脑处于平稳健康状态":"您的大脑处于活力待唤醒状态"}const j=[{key:"processing-speed",label:"加工速度",color:"#F59E0B",gradientStart:"#FBBF24",gradientEnd:"#F59E0B",interpretKey:"processing-speed",sceneImage:w(x.reportProcessingSpeedScenes),definition:"加工速度是看清信息、完成比较判断并及时作出反应的速度和效率。",sceneCaption:"做饭时找调料、外出时看指示、使用手机时看提示和按钮"},{key:"working-memory",label:"工作记忆",color:"#3B82F6",gradientStart:"#60A5FA",gradientEnd:"#3B82F6",interpretKey:"working-memory",sceneImage:w(x.reportWorkingMemoryScenes),definition:"工作记忆是暂时记住信息，并在做事时持续更新和使用这些信息的能力。",sceneCaption:"做饭时记住步骤、购物时记住物品、使用手机时按步骤操作"},{key:"executive-function",label:"执行功能",color:"#EF4444",gradientStart:"#F87171",gradientEnd:"#EF4444",interpretKey:"executive-function",sceneImage:w(x.reportExecutiveFunctionScenes),definition:"执行功能是安排步骤、分清轻重、排除干扰并按情况调整做事方法的能力。",sceneCaption:"出行前做好安排、处理多件事情、遇到变化时调整计划"},{key:"visual-discrimination",label:"视觉分辨",color:"#8B5CF6",gradientStart:"#A78BFA",gradientEnd:"#8B5CF6",interpretKey:"visual-discrimination",sceneImage:w(x.reportVisualDiscriminationScenes),definition:"视觉分辨是在字迹不清、背景较杂或细节相似时，准确分辨关键信息的能力。",sceneCaption:"看清略模糊的通知、分辨相似包装、辨认门牌提示"},{key:"visual-search",label:"视觉搜索",color:"#F97316",gradientStart:"#FB923C",gradientEnd:"#F97316",interpretKey:"visual-search",sceneImage:w(x.reportVisualSearchScenes),definition:"视觉搜索是在很多信息或物品中，较快找到自己需要目标的能力。",sceneCaption:"在名单中找名字、在书架上找书、在场所中找入口或集合点"}],lt=Object.freeze({"processing-speed":{mediumTitle:"反应节奏稳稳的，让人很安心",task:{high:"从这次数字比较、图形比较和数字连线的结果来看，您看懂信息并作出反应的速度较快。",medium:"从本次数字比较、图形比较和数字连线的结果来看，您处理信息的节奏比较平稳。",low:"从这次数字比较、图形比较和数字连线的结果来看，您处理信息时更适合放慢一点。"},life:{high:["看手机提示时，能较快看懂该点哪里","做饭找调料、外出看指示，不容易被信息绕住"],medium:["熟悉的手机操作、找常用物品，一般能顺利完成","信息一多或节奏一快时，可能需要多看一眼"],low:["看提示或找东西时，可能要多花一点时间","同时出现很多信息时，更容易漏看或拿不准"]},tips:{high:["保持阅读、烹饪和棋牌游戏，让日常判断继续保持活跃。","信息较多时也不必求快，看清以后再回应会更稳。","疲劳或睡眠不足时反应偶尔变慢，是很常见的情况。"],medium:["保持阅读、散步和日常用脑，稳住现在的反应节奏。","信息较多时一次看一项，确认以后再继续操作。","当天的精神和身体状态会影响速度，不必因一次波动紧张。"],low:["从熟悉的分类和判断活动开始，每次轻松练一会儿。","看提示时一次处理一项，给自己留出确认时间。","反应慢一点不等于理解能力下降，按自己的节奏来就好。"]}},"working-memory":{mediumTitle:"记事有节奏，日常更省心",task:{high:"从本次三项记忆任务的结果来看，您能够较好地记住信息，并接着完成后面的步骤。",medium:"从本次三项记忆任务的结果来看，您记住和处理信息的表现比较平稳。",low:"从本次三项记忆任务的结果来看，您同时记住和处理多条信息时，需要多一点时间。"},life:{high:["做饭记火候、记步骤，通常有条不紊","买菜记清单、记临时交代的事，不容易漏掉"],medium:["熟悉的事情和简单步骤，通常能够记得住","事情一多或中途被打断时，可能要再确认一下"],low:["做饭做到一半，偶尔会想不起下一步","出门买东西时，可能会漏掉原本想买的一两样"]},tips:{high:["学一道新菜、记简单步骤，都能继续保持这项优势。","事情较多时也可以记下重点，让好状态发挥得更轻松。","被打断后偶尔需要重新确认，是很正常的情况。"],medium:["阅读、做饭时记步骤，让大脑经常练习边记边做。","事情较多时用清单或便签，按顺序一件件完成。","临时忘记不代表记忆力变差，睡眠和情绪也会影响表现。"],low:["从记住两三件小事开始，少量练习更容易坚持。","善用清单、便签和闹钟，把需要记的事情放到眼前。","借助提醒不代表能力不好，而是在帮助大脑减轻负担。"]}},"executive-function":{mediumTitle:"做事有条理，这份稳当很珍贵",task:{high:"从本次连线和规则转换任务的结果来看，您日常能够较快地跟上变化、调整做法。",medium:"从本次连线和规则转换任务的结果来看，您日常安排步骤、转换做法的表现比较平稳。",low:"从本次连线和规则转换任务的结果来看，规则发生变化时，您需要多一点时间调整。"},life:{high:["出门前收拾物品、安排时间，通常心里有数","临时有变化时，也比较容易重新安排好"],medium:["熟悉的家务和日常安排，一般能够顺利完成","事情突然变多或计划被打乱时，需要理一理再继续"],low:["几件事情碰到一起时，可能会一时不知先做哪件","原来的安排被打乱后，需要更多时间重新理顺"]},tips:{high:["继续保持列计划、做家务和策略类棋牌游戏等活动。","遇到临时变化时，先确定当前最重要的一件事。","事情特别多时偶尔需要停下来整理，并不代表能力下降。"],medium:["每天安排一件有步骤的小事，保持计划和执行的节奏。","事情多时先排好顺序，再按照步骤逐项完成。","陌生规则会增加难度，多花一点时间理清很正常。"],low:["把复杂事情拆成简单步骤，每次先完成其中一步。","计划被打乱时先停一下，再重新确定最重要的目标。","需要提示和整理不等于不能独立做事，不必着急。"]}},"visual-discrimination":{mediumTitle:"细节看得稳，是很实用的本领",task:{high:"从不同清晰度下辨认数字的结果来看，您能够较准确地看清细节、分辨差别。",medium:"从不同清晰度下辨认数字的结果来看，您分辨细节的表现比较平稳。",low:"从不同清晰度下辨认数字的结果来看，画面不够清楚时，您需要多确认一下。"},life:{high:["看药盒说明、辨别相似包装时，通常不容易弄混","字迹稍浅或背景有点杂，也能较快抓住细节"],medium:["信息清楚、光线合适时，一般能够顺利看清","字小、包装相似或背景较杂时，需要多确认一下"],low:["药盒小字或相似包装，可能更容易看混","光线不够或画面杂乱时，找关键细节会更费力"]},tips:{high:["保持阅读、观察细节和找不同等轻松活动。","查看包装或说明时，仍建议保证光线充足。","光线、屏幕亮度和眼睛疲劳都会影响一次辨认表现。"],medium:["通过阅读和找不同，保持观察细节的习惯。","遇到小字或相似包装时，可以照亮、放大再逐项确认。","看不清时先调整环境，不必马上担心认知能力。"],low:["从清晰、差别明显的图片开始，轻松练习分辨细节。","看小字或相似物品时，用好光线和手机放大功能。","这项结果反映细节辨认效率，不能直接等同于视力问题。"]}},"visual-search":{mediumTitle:"找东西有章法，日常少费心",task:{high:"从不同复杂程度画面中的找图结果来看，您能够较快地找到指定目标。",medium:"从不同复杂程度画面中的找图结果来看，您寻找目标的节奏比较平稳。",low:"从不同复杂程度画面中的找图结果来看，画面内容增多时，您需要多一点时间找到目标。"},life:{high:["在名单里找名字、在货架上找东西，通常比较快","到了陌生场所，也更容易找到入口或指示牌"],medium:["目标明显、环境熟悉时，一般能够顺利找到","东西一多或线索很杂时，可能需要多找一会儿"],low:["在杂乱抽屉里找钥匙，可能会看久了觉得累","在名单里找名字时，容易来回看却漏过目标"]},tips:{high:["继续做分类整理、图片找目标等轻松活动。","在复杂环境中先明确目标，再开始寻找会更省力。","疲劳时寻找速度偶尔变慢，是很正常的情况。"],medium:["用报纸或图片做找目标练习，每次几分钟就好。","找东西时一次只找一个目标，再按区域慢慢查看。","环境杂乱会增加寻找难度，多花一点时间不代表看不见。"],low:["每天用几分钟，在图片中寻找一个指定目标。","找东西时一次只找一样，再从左到右分区域查看。","干扰信息越多越容易找得慢，不代表视力或整体认知下降。"]}}});function ct(r){const e=Number(r);return e>=80?"high":e>=60?"medium":"low"}const dt={width:542,height:412,center:{x:270,y:220},peerAverageScore:70,axisEndpoints:{"processing-speed":{x:270,y:36.999969482421875},"working-memory":{x:448,y:162.00009155273438},"executive-function":{x:379.5,y:374.5},"visual-discrimination":{x:160,y:374.5},"visual-search":{x:91,y:162}},gridLevels:[20,40,60,80,100],scaleLabels:[{value:0,x:271,y:210},{value:20,x:298,y:205},{value:40,x:333,y:195},{value:60,x:368,y:187},{value:80,x:403,y:175},{value:100,x:438,y:167}],labelPositions:{"processing-speed":{x:227,y:0},"working-memory":{x:460,y:141},"executive-function":{x:342,y:386},"visual-discrimination":{x:95,y:386},"visual-search":{x:0,y:162}}};function we(r){var s,i,a,n,l;const e={};for(const o of["processing-speed","working-memory","executive-function"]){const d=r[o];e[o]=((s=d==null?void 0:d.composite)==null?void 0:s.compositeTScore)??null}const t=r["visual-perception"];return e["visual-discrimination"]=((a=(i=t==null?void 0:t.taskComposites)==null?void 0:i["noise-digit-recognition"])==null?void 0:a.compositeTScore)??null,e["visual-search"]=((l=(n=t==null?void 0:t.taskComposites)==null?void 0:n["visual-search"])==null?void 0:l.compositeTScore)??null,e}function ce(r){const e=Number(r);return Number.isFinite(e)?W(Number(e.toFixed(1)),0,100):0}function pt(r){const e=ce(r);return Number.isInteger(e)?String(e):e.toFixed(1)}function ut(r){if(r==null||!Number.isFinite(Number(r)))return{label:"结果待完善",symbol:"○",tone:"steady"};const e=Number(r);return e>=80?{label:"优秀 · 值得保持",symbol:"★",tone:"strong"}:e>=60?{label:"平稳",symbol:"◆",tone:"steady"}:{label:"优先关照",symbol:"◉",tone:"focus"}}function xe(r,e){const t=Number(r==null?void 0:r.totalScore);return Number.isFinite(t)?t:e}function mt(r){const e=Number(r);return Number.isFinite(e)?String(e):"-"}function ht(r){return r.length>=5?"5.4rem":r.length>=4?"6.4rem":"7.6rem"}function gt(r){return j.reduce((e,t)=>{const s=r==null?void 0:r[t.key];return e[t.key]=s!=null&&!isNaN(s)?bt(s):0,e},{})}function ft(r={},e={}){var s;const t={...r};for(const i of j){const a=(s=e==null?void 0:e[i.key])==null?void 0:s.percentile;a!=null&&!isNaN(a)&&(t[i.key]=ce(a))}return t}function bt(r){if(r==null||isNaN(r))return 0;const e=(r-70)/10,t=.254829592,s=-.284496736,i=1.421413741,a=-1.453152027,n=1.061405429,l=.3275911,o=e<0?-1:1,d=Math.abs(e)/Math.SQRT2,c=1/(1+l*d),m=1-((((n*c+a)*c+i)*c+s)*c+t)*c*Math.exp(-d*d),u=.5*(1+o*m);return Math.max(0,Math.min(100,Math.round(u*100)))}const re={primary:"#3599F6",tableAltBg:"#F3F6FA"},vt={tableProperties:w(x.reportTableProperties),volume:w(x.reportVolume)},yt="能力得分由各项 “考察结果” 数据加权计算得出，不等同于题目正确率，更能体现你的反应与处理速度哦。",Ce="16rem 19rem 29.4rem 16rem 20.8rem";function _t(){return`
    <span class="assessment-report-detail-score-tooltip-trigger">
      <span>能力得分</span>
      <span data-detail-score-info class="assessment-report-detail-score-tooltip-info">
        <button
          type="button"
          data-detail-score-trigger
          onclick="App.currentPage.toggleDetailScoreTooltip(event)"
          aria-label="查看能力得分说明"
          aria-expanded="false"
          class="assessment-report-detail-score-tooltip-button"
        >!</button>
      </span>
    </span>
  `}function St(){return`
    <div
      data-detail-score-floating-bubble
      data-open="false"
      class="assessment-report-detail-score-tooltip"
    >
      <span data-detail-score-floating-arrow class="assessment-report-detail-score-tooltip-arrow"></span>
      <div class="assessment-report-detail-score-tooltip-text">${yt}</div>
    </div>
  `}const ae={male:w(x.brainAgeMaleSprite),female:w(x.brainAgeFemaleSprite)},V={figures:w(x.brainAgeBgFigures),ground:w(x.brainAgeBgGround),icon:w(x.brainAgeIcon)},kt=[...Object.values(ae),...Object.values(V)];let ne=!1;function At(r){return new Promise(e=>{if(typeof Image>"u"){e();return}const t=new Image;let s=!1;const i=()=>{s||(s=!0,e())};t.onload=i,t.onerror=i,t.decoding="async",t.loading="eager",t.src=r,t.complete&&(typeof t.decode=="function"?t.decode().catch(()=>{}).finally(i):i())})}const Tt=Promise.all(kt.map(At)).finally(()=>{ne=!0}),Y={male:[{frameWidth:8,frameHeight:16.6,imageWidth:710.7,imageHeight:192.05,imageLeft:-68.11,imageTop:1.64},{frameWidth:8,frameHeight:16.6,imageWidth:710.7,imageHeight:192.05,imageLeft:-305.9,imageTop:1.64},{frameWidth:8,frameHeight:16.6,imageWidth:710.7,imageHeight:192.05,imageLeft:-541.18,imageTop:1.64},{frameWidth:8,frameHeight:16.6,imageWidth:710.7,imageHeight:192.05,imageLeft:-68.11,imageTop:-93.2},{frameWidth:11.2,frameHeight:15,imageWidth:477.96,imageHeight:198.16,imageLeft:-198.14,imageTop:-97.87},{frameWidth:11.2,frameHeight:14,imageWidth:457.16,imageHeight:204.12,imageLeft:-331.13,imageTop:-99.92}],female:[{frameWidth:8,frameHeight:17.2,imageWidth:514.74,imageHeight:134.25,imageLeft:2.38,imageTop:-20.68},{frameWidth:6.8,frameHeight:17.2,imageWidth:605.58,imageHeight:134.25,imageLeft:-113.11,imageTop:-20.68},{frameWidth:6.4,frameHeight:17.2,imageWidth:643.42,imageHeight:134.25,imageLeft:-225.5,imageTop:-20.68},{frameWidth:6.6,frameHeight:17.2,imageWidth:623.93,imageHeight:134.25,imageLeft:-313.62,imageTop:-20.68},{frameWidth:6.6,frameHeight:17.2,imageWidth:623.93,imageHeight:134.25,imageLeft:-409.14,imageTop:-20.68},{frameWidth:6.8,frameHeight:17.2,imageWidth:605.58,imageHeight:134.25,imageLeft:-493.41,imageTop:-20.68}]};class Pt extends Ie{constructor(){super(),this.state={phase:"results",viewHistory:!1,historySession:null,historyProfile:null,historyNumber:null,historyBackTarget:"history-list"},this._brainAgeAssetsReady=ne,this._brainAgeApiResolved=!1,this._dimensionMetricsResolved=null,this._isUnmounted=!1,this._detailScoreTooltipDocHandler=null,this._detailScoreTooltipKeyHandler=null,this._activeReportPageName=null,this._activeReportCache=null,this._reportCacheSaved=!1,this._reportCacheSaving=!1,this._reportCacheLoading=!1,this._initialized=!1,this._cachedSession=null,this._cachedResults=[],this._cachedModuleData={},this._cachedProfile={},this._currentProfile={},this._profileBindingMode="legacy-unknown",this._profileResolved=!1,this._showDigitalHuman=!1,this._reportScrollContainer=null,this._reportScrollHandler=null,this._reportScrollInterruptHandler=null,this._reportScrollFrame=null,this._reportScrollTargetId=null,this._reportScrollUnlockTimer=null}async onMount(e={}){var s,i;this._businessFlowReturnTarget=e.businessFlowReturnTarget||null,this._initialized=!0,this._isUnmounted=!1,this._brainAgeAssetsReady=ne,this._brainAgeApiResolved=!1,Tt.then(()=>{this._isUnmounted||this._brainAgeAssetsReady||(this._brainAgeAssetsReady=!0,this._syncBrainAgeLoadingMask())}),this._brainAgeFetched=!1,this.state.apiBrainAge=null,this._dimensionPercentilesFetched=!1,this._dimensionMetricsResolved=null,this._reportCacheSaved=!1,this._reportCacheSaving=!1,this._reportCacheLoading=!1,this._activeReportCache=null,this._activeReportPageName=e.viewHistory?e.historyPageName||null:B.PAGE_NAME;const t=e.viewHistory?e.historySession:z.current;if(e.viewHistory||this._loadCurrentProfile(e,t),e.historyReportCache&&this._applyReportCache(e.historyReportCache),e.viewHistory){const a=await ge(e.historySession||null,e.historyProfile||null);this.state.phase="results",this.state.viewHistory=!0,this.state.historySession=e.historySession||((s=this._activeReportCache)==null?void 0:s.session)||null,this.state.historyProfile=Object.keys(a.profile||{}).length>0?a.profile:((i=this._activeReportCache)==null?void 0:i.profile)||{},this.state.historyNumber=e.historyNumber,this.state.historyBackTarget=e.historyBackTarget||"history-list",this._profileBindingMode=a.mode,this._primeReportCache(e,t),this._tryShowDigitalHuman(e),this.update();return}this._tryShowDigitalHuman(e),this.update()}handleBack(){var e,t;return this._businessFlowReturnTarget?(e=window.App)==null?void 0:e.navigate(this._businessFlowReturnTarget):(t=window.App)==null?void 0:t.goBack()}_tryShowDigitalHuman(e){e.fromReportEntry&&this._showCharacterAiWhenReady()}onUpdate(){this._bindReportSectionNavigation(),this.setTimeout(()=>{fe.stop()},100)}scrollToReportSection(e){var n;const t=this.$(".assessment-report-page"),s=(n=this.container)==null?void 0:n.querySelector(`#${e}`);if(!t||!s)return;this._reportScrollTargetId=e,this._setActiveReportSection(e),this._reportScrollUnlockTimer&&this.clearTimer(this._reportScrollUnlockTimer),this._reportScrollUnlockTimer=this.setTimeout(()=>{this._reportScrollTargetId=null,this._reportScrollUnlockTimer=null,this._syncActiveReportSection()},1200);const i=t.scrollTop+s.getBoundingClientRect().top-this._getReportSectionAnchorTop(),a=Math.max(0,t.scrollHeight-t.clientHeight);t.scrollTo({top:W(i,0,a),behavior:"smooth"})}_getReportSectionAnchorTop(){const e=this.$(".assessment-report-page"),t=this.$(".assessment-report-section-nav");if(!e||!t)return 0;const s=window.getComputedStyle(t),i=Number.parseFloat(s.top)||0,a=Number.parseFloat(s.paddingBottom)||0;return e.getBoundingClientRect().top+i+t.offsetHeight+a}_setActiveReportSection(e){this.$$(".assessment-report-section-nav-item").forEach(t=>{const s=t.dataset.reportSection===e;t.classList.toggle("is-active",s),s?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}_syncActiveReportSection(){const e=Array.from(this.$$("[data-report-section-content]"));if(!e.length)return;const t=this.$(".assessment-report-page"),s=this._getReportSectionAnchorTop(),i=t&&t.scrollTop+t.clientHeight>=t.scrollHeight-2;if(this._reportScrollTargetId){const n=e.find(o=>o.id===this._reportScrollTargetId);if(!(n&&Math.abs(n.getBoundingClientRect().top-s)<=2)&&!i){this._setActiveReportSection(this._reportScrollTargetId);return}this._reportScrollTargetId=null}if(i){this._setActiveReportSection(e[e.length-1].id);return}let a=e[0];e.forEach(n=>{n.getBoundingClientRect().top<=s+1&&(a=n)}),this._setActiveReportSection(a.id)}_bindReportSectionNavigation(){this._cleanupReportSectionNavigation();const e=this.$(".assessment-report-page");e&&(this._reportScrollContainer=e,this._reportScrollHandler=()=>{this._reportScrollFrame==null&&(this._reportScrollFrame=requestAnimationFrame(()=>{this._reportScrollFrame=null,this._syncActiveReportSection()}))},this._reportScrollInterruptHandler=()=>{this._reportScrollTargetId=null},e.addEventListener("scroll",this._reportScrollHandler,{passive:!0}),e.addEventListener("wheel",this._reportScrollInterruptHandler,{passive:!0}),e.addEventListener("touchstart",this._reportScrollInterruptHandler,{passive:!0}),this._syncActiveReportSection())}_cleanupReportSectionNavigation(){this._reportScrollFrame!=null&&(cancelAnimationFrame(this._reportScrollFrame),this._reportScrollFrame=null),this._reportScrollContainer&&this._reportScrollHandler&&this._reportScrollContainer.removeEventListener("scroll",this._reportScrollHandler),this._reportScrollContainer&&this._reportScrollInterruptHandler&&(this._reportScrollContainer.removeEventListener("wheel",this._reportScrollInterruptHandler),this._reportScrollContainer.removeEventListener("touchstart",this._reportScrollInterruptHandler)),this._reportScrollContainer=null,this._reportScrollHandler=null,this._reportScrollInterruptHandler=null}onUnmount(){this._isUnmounted=!0,this.clearTimers(),this._cleanupReportSectionNavigation(),fe.stop(),Fe.stopSpeak(),this._cleanupDetailScoreTooltipEvents(),be.hide(),this._showDigitalHuman&&(J.hideEmbedded(),this._showDigitalHuman=!1)}_applyReportCache(e){var t,s,i,a;e!=null&&e.report&&(this._activeReportCache=e,this.state.apiBrainAge=((t=e.report)==null?void 0:t.apiBrainAge)??null,this._dimensionMetricsResolved=((s=e.report)==null?void 0:s.dimensionMetrics)||{},!((i=this._dimensionMetricsResolved)!=null&&i.totalScore)&&((a=e.report)==null?void 0:a.totalScore)!=null&&(this._dimensionMetricsResolved={...this._dimensionMetricsResolved,totalScore:e.report.totalScore}),this._brainAgeFetched=!0,this._brainAgeApiResolved=!0,this._dimensionPercentilesFetched=!0,this._reportCacheSaved=!0)}async _loadCurrentProfile(e={},t=null){const s=await ge(z.current,B._cache.profile);this._currentProfile=s.profile,this._profileBindingMode=s.mode,this._profileResolved=!0,this.mounted&&!this.state.viewHistory&&(this._primeReportCache(e,t),this.update())}async _showCharacterAiWhenReady(){!await J.whenReady()||!this.mounted||(this._showDigitalHuman=!0,J.showEmbedded({top:"auto",left:"auto",bottom:"7rem",right:"1.6rem",width:"32rem",height:"38rem"}))}async _primeReportCache(e={},t=null){var i,a;if(this._activeReportCache||!B.isAvailable())return;const s={sessionId:t==null?void 0:t.id,pageName:this._activeReportPageName,completedAt:e.historyCompletedAt??(t==null?void 0:t.endTime)??null,calculationContext:!e.viewHistory&&this._profileBindingMode==="account-live"?{age:Number((i=this._currentProfile)==null?void 0:i.age)||null,educationYears:Number((a=this._currentProfile)==null?void 0:a.educationYears)||null,algorithmVersion:1}:null};if(!(!s.sessionId&&!(s.pageName&&s.completedAt!=null))){this._reportCacheLoading=!0;try{const n=await B.loadReportCache(s);if(!n||this._isUnmounted)return;this._applyReportCache(n),e.viewHistory&&(!this.state.historySession&&n.session&&(this.state.historySession=n.session),(!this.state.historyProfile||Object.keys(this.state.historyProfile).length===0)&&n.profile&&(this.state.historyProfile=n.profile))}catch(n){console.warn("[CompletePage] 读取云端报告缓存失败:",n)}finally{this._isUnmounted||(this._reportCacheLoading=!1,this.update())}}}closeDetailScoreTooltips(){const e=document.querySelector("#detail-modal [data-detail-score-floating-bubble]");e&&(e.dataset.open="false",e.style.opacity="0",e.style.transform="translateY(0.8rem)",e.style.pointerEvents="none"),document.querySelectorAll("#detail-modal [data-detail-score-trigger]").forEach(t=>{t.setAttribute("aria-expanded","false")})}_positionDetailScoreTooltip(e){var h,b;const t=document.querySelector("#detail-modal [data-detail-table-shell]"),s=(h=t==null?void 0:t.querySelector)==null?void 0:h.call(t,"[data-detail-score-floating-bubble]"),i=(b=s==null?void 0:s.querySelector)==null?void 0:b.call(s,"[data-detail-score-floating-arrow]");if(!t||!s||!(e!=null&&e.getBoundingClientRect))return;s.style.left="0px",s.style.top="0px";const a=t.getBoundingClientRect(),n=e.getBoundingClientRect(),l=s.offsetWidth,o=12,d=n.right-a.left-l+8,c=Math.max(o,a.width-l-o),m=W(d,o,c),u=n.bottom-a.top+14;if(s.style.left=`${m}px`,s.style.top=`${u}px`,i){const f=n.left-a.left+n.width/2,v=W(f-m-8,24,Math.max(24,l-32));i.style.left=`${v}px`}}toggleDetailScoreTooltip(e){e==null||e.preventDefault(),e==null||e.stopPropagation();const t=(e==null?void 0:e.currentTarget)||(e==null?void 0:e.target),s=document.querySelector("#detail-modal [data-detail-score-floating-bubble]");if(!t||!s)return;const i=t.getAttribute("aria-expanded")!=="true";this.closeDetailScoreTooltips(),i&&(this._positionDetailScoreTooltip(t),s.dataset.open="true",s.style.opacity="1",s.style.transform="translateY(0)",s.style.pointerEvents="auto",t.setAttribute("aria-expanded","true"))}_registerDetailScoreTooltipEvents(){this._detailScoreTooltipDocHandler||(this._detailScoreTooltipDocHandler=e=>{const t=e==null?void 0:e.target;(!(t!=null&&t.closest)||!t.closest("[data-detail-score-info]"))&&this.closeDetailScoreTooltips()},document.addEventListener("click",this._detailScoreTooltipDocHandler,!0)),this._detailScoreTooltipKeyHandler||(this._detailScoreTooltipKeyHandler=e=>{(e==null?void 0:e.key)==="Escape"&&this.closeDetailScoreTooltips()},document.addEventListener("keydown",this._detailScoreTooltipKeyHandler))}_cleanupDetailScoreTooltipEvents(){this.closeDetailScoreTooltips(),this._detailScoreTooltipDocHandler&&(document.removeEventListener("click",this._detailScoreTooltipDocHandler,!0),this._detailScoreTooltipDocHandler=null),this._detailScoreTooltipKeyHandler&&(document.removeEventListener("keydown",this._detailScoreTooltipKeyHandler),this._detailScoreTooltipKeyHandler=null)}renderResultsPage(){var de,pe,ue,me,he;const e=this.state.viewHistory,t=((de=this._activeReportCache)==null?void 0:de.session)||null,s=((pe=this._activeReportCache)==null?void 0:pe.profile)||{},i=((ue=this._activeReportCache)==null?void 0:ue.report)||{},a=e?((me=this.state.historySession)==null?void 0:me.results)||(t==null?void 0:t.results)||[]:((he=z.current)==null?void 0:he.results)||(t==null?void 0:t.results)||[],n=He(a),l=e?this.state.historyProfile||s||{}:this._currentProfile||s||{},o=e?this.state.historySession||t||{}:z.current||t||{},d="认知能力筛查报告",c="App.currentPage.handleBack()",m=ye(n,l),u=i==null?void 0:i.moduleData,h=u&&Object.keys(u).length>0?u:m.moduleData;let b=xe(this._dimensionMetricsResolved,(i==null?void 0:i.totalScore)??m.totalScore);const f=o._scoreOverrides,v=new Set;let k=!1;f&&f.totalScore!=null&&(b=f.totalScore,k=!0);let C=mt(b);const M=ht(C),T=!!o._isTestData&&D.DEV.enabled,I=this.state.apiBrainAge??"--",y=Number(I),A=Number(l.age),p=Te(l.gender),g=$e(y,p),S=Re(y,A),$=this._initialized&&!this._reportCacheLoading&&(e||this._profileResolved);$&&!this._brainAgeFetched&&(this._brainAgeFetched=!0,this._fetchApiBrainAge(n,l));const Q=Number.isFinite(Number(o.durationMs))?Number(o.durationMs):o.endTime&&o.startTime?o.endTime-o.startTime:Be(o);this._cachedResults=n,this._cachedModuleData=h,this._cachedProfile=l,this._cachedSession=o;const N=we(h),H=ee(this._dimensionMetricsResolved),E=_e(N,H);if(f)for(const R of Object.keys(P))f[R]!=null&&(H[R]=f[R],E[R]=f[R],N[R]=f[R],v.add(R));i!=null&&i.interpretation||Se(E,b);const _=tt(E,b);_.hasScores||(C="—");const O=l.age!=null?`${l.age}`:"-",X=at(l.gender),Ee=gt(N),Me=ft(Ee,this._dimensionMetricsResolved);return $&&!this._dimensionPercentilesFetched&&(this._dimensionPercentilesFetched=!0,this._fetchDimensionPercentiles(n,l)),`
      <div class="h-full flex flex-col assessment-report-page">
        <!-- 顶部导航栏（返回按钮样式/位置与报告列表页统一） -->
        <div class="assessment-report-header">
          <div class="assessment-report-header-inner">
            <button onclick="${c}" class="btn-press flex items-center justify-center assessment-report-back-button" aria-label="返回上一页" data-ai-hint="返回上一个页面">
              ${De}
            </button>
            <h1 class="font-bold assessment-report-title">${d}</h1>
          </div>
        </div>

        <div class="assessment-report-content">

          <!-- 区块一：标题 + 用户信息 -->
          <div class="assessment-report-card assessment-report-profile-card">
            ${T?'<div class="assessment-report-test-badge">⚠ 测试数据（非正式测评）</div>':""}
            <h2 class="assessment-report-profile-name">测评人：${l.name||"-"}</h2>
            <div class="assessment-report-profile-meta">
              <span>性别：${X}</span>
              <span class="assessment-report-profile-separator">|</span>
              <span>年龄：${O}</span>
              <span class="assessment-report-profile-separator">|</span>
              <span>测评时间：${it(o.startTime)}</span>
              <span class="assessment-report-profile-separator">|</span>
              <span>用时：${rt(Q)}</span>
            </div>
            <p class="assessment-report-disclaimer">本报告用于帮助了解当前表现，不作为医学诊断或治疗依据；如需帮助，请咨询专业医师。</p>
            <details class="assessment-report-basis">
              <summary class="assessment-report-basis-summary">
                <span>了解报告依据</span>
                <span class="assessment-report-basis-summary-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M7 10l5 5 5-5"></path>
                  </svg>
                </span>
              </summary>
              <div class="assessment-report-basis-content">
                <div class="assessment-report-basis-content-inner">
                  <div class="assessment-report-basis-table">
                    <div class="assessment-report-basis-cell assessment-report-basis-label">分数怎么算来</div>
                    <div class="assessment-report-basis-cell">综合各项测评任务的结果，并结合相应的同龄参考数据形成。</div>
                    <div class="assessment-report-basis-cell assessment-report-basis-label">结果怎么看</div>
                    <div class="assessment-report-basis-cell">速度、正确性和任务难度需要一起理解，不能只用一项原始数据判断能力。</div>
                    <div class="assessment-report-basis-cell assessment-report-basis-label">建议为什么这样安排</div>
                    <div class="assessment-report-basis-cell">参考老年认知训练研究，重视规律参与，并适当关注本次较费力的能力。</div>
                    <div class="assessment-report-basis-cell assessment-report-basis-label">报告的使用边界</div>
                    <div class="assessment-report-basis-cell">一次表现会受到睡眠、情绪和身体状态影响，本报告不能代替医学诊断。</div>
                  </div>
                  <p class="assessment-report-basis-reference">参考说明：主要参考：ACTIVE老年认知训练试验，以及计算机化认知训练、数字干预和训练依从性的系统综述与元分析。</p>
                </div>
              </div>
            </details>
          </div>

          <nav class="assessment-report-card assessment-report-section-nav" aria-label="报告内容导航">
            <button type="button" class="assessment-report-section-nav-item is-active" data-report-section="report-overview" aria-current="page" onclick="App.currentPage.scrollToReportSection('report-overview')">整体结果</button>
            <button type="button" class="assessment-report-section-nav-item" data-report-section="report-abilities" onclick="App.currentPage.scrollToReportSection('report-abilities')">能力总览</button>
            <button type="button" class="assessment-report-section-nav-item" data-report-section="report-details" onclick="App.currentPage.scrollToReportSection('report-details')">逐项解读</button>
            <button type="button" class="assessment-report-section-nav-item" data-report-section="report-training" onclick="App.currentPage.scrollToReportSection('report-training')">今日行动</button>
          </nav>

          <!-- 区块二：得分 + 脑年龄 （暂时隐藏，未来样本量大了，才考虑重新放开。否则易引起争议）-->
          <div class="assessment-report-card assessment-report-hidden-score-card">
            <div class="assessment-report-score-layout">
              <div class="assessment-report-score-main">
                <div class="assessment-report-score-heading">
                  <p id="brain-age-status-text" class="assessment-report-score-status">${S}</p>
                </div>
                ${this.renderBrainAgeVisual(p,y,g)}
              </div>

              <!-- 右侧分隔线 + 得分 -->
              <div class="assessment-report-score-divider"></div>
              <div class="assessment-report-score-value">
                <span class="assessment-report-score-label">得分:</span>
                <span class="assessment-report-score-number" style="--report-score-font-size: ${M};">${C}</span>
                ${k&&T?'<span class="assessment-report-manual-score">手动指定</span>':""}
              </div>
            </div>
          </div>

          <!-- 区块三：整体结果 -->
          <section id="report-overview" class="assessment-report-card assessment-report-overview-card" data-report-section-content>
            <div class="assessment-report-overview-main">
              <div class="assessment-report-score-ring" style="--report-score-progress: ${Math.max(0,Math.min(100,b))*.75}%; --report-score-mark-angle: ${225+Math.max(0,Math.min(100,b))*2.7}deg;">
                <span class="assessment-report-score-ring-cap assessment-report-score-ring-cap--start" aria-hidden="true"></span>
                <span class="assessment-report-score-ring-cap assessment-report-score-ring-cap--end" aria-hidden="true"></span>
                <span class="assessment-report-score-ring-mark" aria-hidden="true"></span>
                <div class="assessment-report-score-ring-inner"><strong>${C}</strong><span>综合参考分</span></div>
              </div>
              <div class="assessment-report-overview-copy">
                <div class="assessment-report-overview-heading">
                  <h2 class="font-bold assessment-report-overview-title">${_.hasScores?_.scoreRange.title:"结果正在整理"}</h2>

                </div>
                <p class="assessment-report-overview-narrative">${_.focusKey?`这次的${P[_.focusKey]}任务相对费力。今天可以先关注这项能力，从一次适合自己的训练开始。`:_.hasScores?"这次没有明显需要优先关注的低分项。继续保持日常用脑，今天从系统安排的一轮训练开始。":"结果还在整理，待信息完整后再查看解读与训练建议。"}</p>
              </div>
            </div>
            <div class="assessment-report-score-legend" aria-label="综合参考分区间">
              ${(_.hasScores?ie:[]).slice().reverse().map(R=>`<span class="assessment-report-score-legend-item${R.key===_.scoreRange.key?" is-current":""}"><i></i>${R.label}${R.key===_.scoreRange.key?" ✓ 当前":""}</span>`).join("")}
            </div>
            <div class="report-next-action">
              <div><span class="report-eyebrow">今天，从这里开始</span>
                <h3>${_.focusKey?se[_.focusKey].practice:_.hasScores?"给大脑安排一次日常练习":"等待完整结果"}</h3>
                <p>${_.focusKey?se[_.focusKey].method:_.hasScores?"今日训练会结合最新筛查结果安排内容。先完成一轮，再查看训练记录。":"暂不根据缺失结果推荐重点能力。"}</p>
              </div>
              ${_.hasScores?`<button class="btn-press assessment-report-training-button" onclick="App.navigate('daily-recommend', { backTarget: 'splash', overviewContext: 'assessment-report' })">开始今日训练 <span aria-hidden="true">→</span></button>`:""}
            </div>
          </section>

          <!-- 区块四：五项认知能力总览 -->
          <section id="report-abilities" class="assessment-report-card assessment-report-ability-card" data-report-section-content>
            <!-- 标题栏 + 测评详情按钮 -->
            <div class="flex items-center justify-between assessment-report-ability-header">
              <h2 class="font-bold assessment-report-section-title">五项认知能力总览</h2>
              <button onclick="App.currentPage.showDetailModal()" class="btn-press assessment-report-detail-button">
                <span>测评详情</span>
                <span class="assessment-report-detail-arrow">›</span>
              </button>
            </div>

            <div class="assessment-report-ability-overview">
              <div class="assessment-report-ability-radar-column">
                <div class="assessment-report-radar">
                  ${this.renderRadarChart(E)}
                </div>
                <div class="assessment-report-radar-legend">
                  <span class="assessment-report-radar-legend-item">
                    <span class="assessment-report-radar-data-marker"></span>
                    <span>蓝色区域：本次得分</span>
                  </span>
                  <span class="assessment-report-radar-legend-item">
                    <span class="assessment-report-radar-peer-marker"></span>
                    <span>金色虚线：同龄参考</span>
                  </span>
                </div>
              </div>
              <div class="assessment-report-ability-comparison">
                <div class="assessment-report-ability-comparison-legend" aria-label="能力对比图例">
                  <span class="assessment-report-ability-comparison-legend-item">
                    <i class="assessment-report-ability-comparison-legend-marker assessment-report-ability-comparison-legend-marker--score"></i>
                    <span>本次得分</span>
                  </span>
                  <span class="assessment-report-ability-comparison-legend-item">
                    <i class="assessment-report-ability-comparison-legend-marker assessment-report-ability-comparison-legend-marker--peer"></i>
                    <span>同龄参考均值（70 分）</span>
                  </span>
                </div>
                ${this.renderAbilityComparisonCards(E,Me)}
              </div>
            </div>
          </section>

          <!-- 模块解读卡片列表 -->
          <div id="report-details" class="assessment-report-module-list" data-report-section-content>
            ${this.renderModuleCards(E,T?v:null)}
          </div>

          <section id="report-training" class="assessment-report-card assessment-report-training-card">
            <span class="report-eyebrow">接下来怎么做</span>
            <h2 class="assessment-report-training-title">先完成今天的一次训练</h2>
            <div class="report-action-steps">
              <article><b>01</b><h3>查看今日安排</h3><p>系统结合最新一次筛查结果安排训练，历史报告用于回顾。</p></article>
              <article><b>02</b><h3>按提示完成练习</h3><p>先理解玩法，再开始训练。感到疲劳时可以暂停休息。</p></article>
              <article><b>03</b><h3>留下训练记录</h3><p>完成后查看本次表现，逐步了解自己的训练情况。</p></article>
            </div>
            <div class="assessment-report-training-entry"><strong>不用一次想完所有计划，今天先开始。</strong><p>复测时间和长期训练安排，可结合后续情况与专业建议确定。</p><button class="btn-press assessment-report-training-button" onclick="App.navigate('daily-recommend', { backTarget: 'splash', overviewContext: 'assessment-report' })">查看今日训练 →</button></div>
          </section>

        </div>
      </div>
    `}renderBrainAgeVisual(e,t,s){const i=ae[e]||ae.male,a=Y[e]||Y.male,n=Pe(a.length),l=Number.isFinite(t)?Math.round(t):"--",o=!this._isBrainAgeCardReady(),d=a.map(c=>`
        <div class="brain-age-people-slot" style="--brain-age-slot-width: ${q}rem;">
          <div class="brain-age-person-frame" style="--brain-age-frame-width: ${c.frameWidth}rem; --brain-age-frame-height: ${c.frameHeight}rem;">
            <img class="brain-age-person-sprite" src="${i}" alt="" loading="eager" decoding="async" style="--brain-age-image-width: ${c.imageWidth}%; --brain-age-image-height: ${c.imageHeight}%; --brain-age-image-left: ${c.imageLeft}%; --brain-age-image-top: ${c.imageTop}%;" />
          </div>
        </div>
      `).join("");return`
      <div class="brain-age-container">
        <div class="brain-age-track-wrapper">
          <!-- 背景图（人物剪影 + 地面），对齐在容器底部 -->
          <div class="brain-age-background">
            <img class="brain-age-background-figures" src="${V.figures}" alt="" loading="eager" decoding="async" />
            <img class="brain-age-background-ground" src="${V.ground}" alt="" loading="eager" decoding="async" />
          </div>

          <!-- 人物层（正常颜色） -->
          <div class="brain-age-people" style="--brain-age-track-width: ${n}rem; --brain-age-track-gap: ${le}rem;">
            ${d}
          </div>

          <!-- 灰色蒙层：从进度位置到右边全部覆盖灰色 -->
          <div class="brain-age-gray-overlay" style="--brain-age-marker-left: ${s.markerLeft};"></div>

          <!-- 分割线：跟随进度位置 -->
          <div class="brain-age-progress-line" style="--brain-age-marker-left: ${s.markerLeft};">
            <div class="brain-age-progress-line-inner"></div>
          </div>

          <div class="brain-age-loading-mask" style="--brain-age-loading-opacity: ${o?"1":"0"}; --brain-age-loading-blur: ${o?"1.8rem":"0rem"};"></div>
        </div>

        <!-- 认知年龄气泡：放在 overflow: hidden 外部以免被截断，跟随进度位置且距人物保留一定高度 -->
        <div class="brain-age-bubble" style="--brain-age-marker-left: ${s.markerLeft};">
          <div class="brain-age-bubble-content">
            <img class="brain-age-bubble-icon" src="${V.icon}" alt="" />
            <span class="brain-age-bubble-label">认知年龄</span>
            <span id="brain-age-value" class="brain-age-bubble-value">${l} 岁</span>
            <div class="brain-age-bubble-highlight"></div>
          </div>
        </div>

      </div>
    `}async _fetchApiBrainAge(e,t){const s=Le(e),i=Oe(e),a=Number(t==null?void 0:t.age),n=Number((t==null?void 0:t.educationYears)??(t==null?void 0:t.education)??12);if(!s||!Number.isFinite(a)){console.warn("[CompletePage] 缺少脑年龄 API 所需参数"),this._updateBrainAgeDom("-"),this._brainAgeApiResolved=!0,this._maybePersistReportCache(),requestAnimationFrame(()=>this._syncBrainAgeLoadingMask());return}const l=await We({age:a,educationYears:n,taskScores:s,protocolVersions:i,onError:o=>console.warn("[CompletePage] 脑年龄 API 失败:",o)});if(!this._isUnmounted){if(l!=null){const o=Math.round(l);this._updateBrainAgeDom(o),this.state.apiBrainAge=o}else this._updateBrainAgeDom("-");this._brainAgeApiResolved=!0,this._maybePersistReportCache(),requestAnimationFrame(()=>this._syncBrainAgeLoadingMask())}}_updateBrainAgeDom(e){var h,b,f,v,k;const t=Number(e),s=Number.isFinite(t)?Math.round(t):"--",i=(h=this.container)==null?void 0:h.querySelector("#brain-age-value");i&&(i.textContent=`${s} 岁`);const a=this._cachedProfile||{},n=Number(a==null?void 0:a.age),l=(b=this.container)==null?void 0:b.querySelector("#brain-age-status-text");l&&(l.textContent=Re(t,n));const o=Te(a==null?void 0:a.gender),d=$e(t,o),c=(f=this.container)==null?void 0:f.querySelector(".brain-age-gray-overlay");c&&(c.style.left=d.markerLeft);const m=(v=this.container)==null?void 0:v.querySelector(".brain-age-progress-line");m&&(m.style.left=d.markerLeft);const u=(k=this.container)==null?void 0:k.querySelector(".brain-age-bubble");u&&(u.style.left=d.markerLeft),this._syncBrainAgeLoadingMask()}async _fetchDimensionPercentiles(e,t){const s=await je({profile:t,results:e,fallback:{},onError:i=>console.warn("[CompletePage] 维度百分位 API 失败:",i)});this._isUnmounted||(this._dimensionMetricsResolved=s,this._maybePersistReportCache(),this.update())}async _maybePersistReportCache(){var o,d,c,m,u;if(this._reportCacheSaved||this._reportCacheSaving||!this._activeReportPageName||!this._brainAgeApiResolved)return;const e=Number((o=this._dimensionMetricsResolved)==null?void 0:o.totalScore);if(!Number.isFinite(e))return;const t=ye(this._cachedResults||[],this._cachedProfile||{}),s=xe(this._dimensionMetricsResolved,e),i=we(t.moduleData),a=ee(this._dimensionMetricsResolved),n=_e(i,a),l=Se(n,s);this._reportCacheSaving=!0;try{if(!await B.saveReportCache({sessionId:(d=this._cachedSession)==null?void 0:d.id,pageName:this._activeReportPageName,completedAt:(c=this._cachedSession)==null?void 0:c.endTime,session:this._cachedSession,profile:this._cachedProfile,profileBindingMode:this._profileBindingMode,report:{totalScore:e,apiBrainAge:this.state.apiBrainAge,dimensionMetrics:this._dimensionMetricsResolved,moduleData:t.moduleData,interpretation:l}})){console.warn(`[CompletePage] 云端报告缓存保存失败: ${this._activeReportPageName}`);return}this._reportCacheSaved=!0,this._activeReportCache=await B.loadReportCache({sessionId:(m=this._cachedSession)==null?void 0:m.id,pageName:this._activeReportPageName,completedAt:(u=this._cachedSession)==null?void 0:u.endTime})}finally{this._reportCacheSaving=!1}}_isBrainAgeCardReady(){return this._brainAgeApiResolved&&this._brainAgeAssetsReady}_syncBrainAgeLoadingMask(){var s;const e=(s=this.container)==null?void 0:s.querySelector(".brain-age-loading-mask");if(!e)return;const t=!this._isBrainAgeCardReady();e.style.opacity=t?"1":"0",e.style.backdropFilter=`blur(${t?"1.8rem":"0rem"}) saturate(1.08)`,e.style.webkitBackdropFilter=`blur(${t?"1.8rem":"0rem"}) saturate(1.08)`}showDetailModal(){const e=this._cachedResults||[],t=this._cachedModuleData||{},s=this._cachedProfile||{},i=ee(this._dimensionMetricsResolved),a=`
      <div class="assessment-report-detail-title-icon">
        <img src="${vt.tableProperties}" alt="" />
      </div>
    `;this._cleanupDetailScoreTooltipEvents();const n=`
      <div data-detail-table-shell class="assessment-report-detail-table-shell">
        <div class="assessment-report-detail-table">
          <div class="assessment-report-detail-table-header" style="--report-detail-columns: ${Ce};">
            <span class="assessment-report-detail-table-header-cell">筛查能力</span>
            <span class="assessment-report-detail-table-header-cell assessment-report-detail-table-header-cell--task">题目名称</span>
            <span class="assessment-report-detail-table-header-cell assessment-report-detail-table-header-cell--focus">考察要点</span>
            <span class="assessment-report-detail-table-header-cell assessment-report-detail-table-header-cell--center">考察结果</span>
            <span class="assessment-report-detail-table-header-cell assessment-report-detail-table-header-cell--center assessment-report-detail-table-header-cell--score">${_t()}</span>
          </div>
          ${this.renderDetailModules(e,t,s,i)}
        </div>
        ${St()}
      </div>
    `;be.show({title:"任务详情",titleIconHtml:a,contentHtml:n,onClose:()=>{this._cleanupDetailScoreTooltipEvents()}}),this._registerDetailScoreTooltipEvents()}renderRadarChart(e){const{width:t,height:s,center:i,axisEndpoints:a,gridLevels:n,peerAverageScore:l,scaleLabels:o,labelPositions:d}=dt,c=j,m=c.length,u=i.x,h=i.y,b=c.map(p=>a[p.key]),f=p=>{const g=Number(p);return(Number.isFinite(g)?Math.max(0,Math.min(100,g)):0)/100},v=(p,g)=>{const S=b[p];return[u+(S.x-u)*g,h+(S.y-h)*g]};let k="";for(const p of n){const g=[],S=p/100;for(let $=0;$<m;$++)g.push(v($,S).join(","));k+=`<polygon points="${g.join(" ")}" fill="none" stroke="#D5DEE8" stroke-width="1.2" />`}let C="";for(let p=0;p<m;p++){const[g,S]=v(p,1);C+=`<line x1="${u}" y1="${h}" x2="${g}" y2="${S}" stroke="#D5DEE8" stroke-width="1.2" />`}const M=[];for(let p=0;p<m;p++)M.push(v(p,f(l)));const L=`<polygon points="${M.map(p=>p.join(",")).join(" ")}" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="8 7" stroke-linejoin="round" />`;let T="",I="";if(Ye(e)){const p=[];for(let g=0;g<m;g++){const S=e[c[g].key],$=f(S);p.push(v(g,$))}T=`<polygon points="${p.map(g=>g.join(",")).join(" ")}" fill="rgba(53, 153, 246, 0.2)" stroke="${re.primary}" stroke-width="3" stroke-linejoin="round" />`;for(const[g,S]of p)I+=`<circle cx="${g}" cy="${S}" r="6" fill="${re.primary}" stroke="#FFFFFF" stroke-width="3" />`}let y="";for(let p=0;p<m;p++){const g=d[c[p].key];y+=`<text x="${g.x}" y="${g.y}" text-anchor="start" dominant-baseline="text-before-edge" font-size="21.677" fill="#475569" font-weight="400">${c[p].label}</text>`}let A="";for(const p of o)A+=`<text x="${p.x}" y="${p.y}" font-size="14" fill="#475569" text-anchor="start" dominant-baseline="text-before-edge">${p.value}</text>`;return`
      <svg viewBox="0 0 ${t} ${s}" class="assessment-report-radar-svg">
        ${k}
        ${C}
        ${A}
        ${L}
        ${T}
        ${I}
        ${y}
      </svg>
    `}renderAbilityComparisonCards(e,t){return j.map((s,i)=>{const a=e==null?void 0:e[s.key];return{...s,score:a!=null&&Number.isFinite(Number(a))?Number(a):null,percentile:ce(t==null?void 0:t[s.key]),index:i}}).sort((s,i)=>{const a=Number.isFinite(s.score)?s.score:-1/0;return(Number.isFinite(i.score)?i.score:-1/0)-a||s.index-i.index}).map(s=>{const i=Number.isFinite(s.score),a=i?W(s.score,0,100):0,n=i?K(s.score):"-",l=ut(s.score);return`
          <div class="assessment-report-ability-comparison-card assessment-report-ability-comparison-card--${l.tone}">
            <div class="assessment-report-ability-comparison-heading">
              <strong>${s.label}</strong>
              <span class="assessment-report-ability-status"><i>${l.symbol}</i>${l.label}</span>
              <span class="assessment-report-ability-score"><b>${n}</b>分</span>
            </div>
            <div class="assessment-report-ability-bars" aria-label="${s.label}本次得分${n}分，同龄参考70分">
              <span class="assessment-report-ability-bar assessment-report-ability-bar--score" style="--report-ability-width: ${a}%;"></span>
              <span class="assessment-report-ability-bar assessment-report-ability-bar--peer" style="--report-ability-width: 70%;"></span>
            </div>
            <div class="assessment-report-ability-comparison-meta">
              <span>同龄参考 70 分</span>
              <strong>超过${pt(s.percentile)}%的同龄人</strong>
            </div>
          </div>
        `}).join("")}renderModuleCards(e,t=null){return'<div class="report-detail-heading"><div><span class="report-eyebrow">读懂自己的表现</span><h2>五项能力，逐项了解</h2></div><p>优先查看较费力的项目，点击展开其他结果</p></div>'+j.map((i,a)=>({...i,index:a,score:(e==null?void 0:e[i.key])!=null&&Number.isFinite(Number(e[i.key]))?Number(e[i.key]):null})).sort((i,a)=>(i.score??1/0)-(a.score??1/0)||i.index-a.index).map((i,a)=>{const n=i.score==null?null:ct(i.score),l=lt[i.key],o=se[i.key],d=n?n==="low"?"建议关注":n==="medium"?"表现平稳":"值得保持":"结果待完善";return`<details class="assessment-report-module-card report-dimension" ${a===0&&n==="low"?"open":""}>
        <summary><span class="report-dimension-index">0${a+1}</span><div class="report-dimension-label"><h3>${i.label}</h3><span>${d}</span></div><strong class="report-dimension-score">${i.score==null?"—":K(i.score)}<small>${i.score==null?"":"分"}</small></strong><span class="report-expand" aria-hidden="true">＋</span></summary>
        <div class="report-dimension-body">
          <section><span class="report-eyebrow">本次任务表现</span><p>${n?l.task[n]:"这项结果暂不完整，不作分档解读。"}</p></section>
          <section><span class="report-eyebrow">这项能力用在哪里</span><p>${o.context}</p><small>这里说明能力与生活的联系，不代表您一定有相应的生活困难。</small></section>
          ${n?`<section class="report-practice"><span class="report-eyebrow">可以怎样练习</span><h4>${o.practice}</h4><p>${o.method}</p><button class="btn-press report-text-button" onclick="App.navigate('daily-recommend', { backTarget: 'splash', overviewContext: 'assessment-report' })">查看系统安排的今日训练 →</button></section>`:""}
        </div>
      </details>`}).join("")}renderInfoItem(e,t){return`
      <div class="assessment-report-info-item">
        <span class="assessment-report-info-label">${e}：</span>
        <span class="assessment-report-info-value">${t}</span>
      </div>
    `}renderDetailModules(e,t,s,i={}){const a=Object.keys(D.MODULES),n=Ce;let l="",o=!1;return a.forEach((d,c)=>{const m=D.MODULES[d],u=Ne[d];if(!u)return;const h=e.filter(y=>{const A=D.TASKS[y.taskType];return A&&A.module===d});if(!h.length)return;const b=m.tasks||[];h.sort((y,A)=>{const p=b.indexOf(y.taskType),g=b.indexOf(A.taskType);return(p===-1?999:p)-(g===-1?999:g)}),o=!0;const f=t[d],v=f&&f.individual,k=c%2===0?"#FFFFFF":re.tableAltBg;let C=0;const M=[];h.forEach(y=>{const A=D.TASKS[y.taskType]||{},p=u.calculateTaskScore(y),g=p.indicators||[{rawScore:p.rawScore,unit:p.unit,description:p.description}];M.push({r:y,taskInfo:A,taskScore:p,indicators:g}),C+=g.length});const L=C;let T="";T+=`
        <div class="assessment-report-detail-module-cell" style="--report-detail-row-span: 1 / ${L+1}; --report-detail-row-background: ${k};">
          <span class="assessment-report-detail-module-name">${m.name}</span>
        </div>
      `;let I=0;if(M.forEach(({r:y,taskInfo:A,taskScore:p,indicators:g})=>{const S=g.length;g.forEach(($,Q)=>{const N=I+1,H=k,E=$.description||"-",_=st($.rawScore,$.unit);if(Q===0){const O=S>1?`grid-row: ${N} / ${N+S};`:`grid-row: ${N};`;T+=`
              <div class="assessment-report-detail-task-cell" style="--report-detail-row-span: ${O.replace("grid-row: ","")}; --report-detail-row-background: ${H};">
                <span class="assessment-report-detail-task-name">${A.name||y.taskType}</span>
              </div>
            `}if(T+=`
            <div class="assessment-report-detail-focus-cell" style="--report-detail-row: ${N}; --report-detail-row-background: ${H};">
              <span class="assessment-report-detail-cell-text">${E}</span>
            </div>
            <div class="assessment-report-detail-result-cell" style="--report-detail-row: ${N}; --report-detail-row-background: ${H};">
              <span class="assessment-report-detail-result-text">${_}</span>
            </div>
          `,v){const O=ve(i,d,y.taskType),X=K(O);T+=`
              <div class="assessment-report-detail-score-cell" style="--report-detail-row-span: ${N}; --report-detail-row-background: ${k};">
                <span class="assessment-report-detail-score-text">${X}</span>
              </div>
            `}I++})}),!v){const y=ve(i,d),A=K(y);T+=`
          <div class="assessment-report-detail-score-cell" style="--report-detail-row-span: 1 / ${L+1}; --report-detail-row-background: ${k};">
            <span class="assessment-report-detail-score-text">${A}</span>
          </div>
        `}l+=`
        <div class="assessment-report-detail-grid" style="--report-detail-columns: ${n};">
          ${T}
        </div>
      `}),o||(l=`
        <div class="assessment-report-detail-empty">
          暂无测评数据
        </div>
      `),l}render(){return this.renderResultsPage()}}export{Pt as CompletePage};
