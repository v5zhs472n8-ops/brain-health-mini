const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./app-C8gTfAaU.js","./assessment-mJmy6gOP.js","./modulepreload-polyfill-B5Qt9EMX.js","./assessment-GolXxfC2.css","./state-store-Dvo1jwmm.js","./controller-BzOXqHts.js","./daily-plan-service-BrmnaNfE.js","./completion-store-DYswhfNf.js","./character-ai-iframe-BrqXIuNV.js","./sop-manager-4mqRR8Su.js","./fixed-voice-registry-diGuCvn_.js","./simple-mode-CobKn34m.js"])))=>i.map(i=>d[i]);
var it=Object.defineProperty;var nt=(e,t,s)=>t in e?it(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var P=(e,t,s)=>nt(e,typeof t!="symbol"?t+"":t,s);import{_ as p,I as ot,R as lt,C as dt,a as ct,U as mt,g as h,b as g}from"./assessment-mJmy6gOP.js";import{C as _}from"./character-ai-iframe-BrqXIuNV.js";import{B as E,F as C}from"./controller-BzOXqHts.js";import{D as ut}from"./overview-B3MGWg2M.js";import{L as pt}from"./launch-action-router-Cmk_eiTp.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./sop-manager-4mqRR8Su.js";import"./app-C8gTfAaU.js";import"./state-store-Dvo1jwmm.js";import"./daily-plan-service-BrmnaNfE.js";import"./completion-store-DYswhfNf.js";import"./fixed-voice-registry-diGuCvn_.js";import"./game-data-store-B4FloeTJ.js";const ht={render(e){e.innerHTML=`
			<section class="sm-dev-settings-empty-panel">
				<h2>下一个测试面板</h2>
			</section>
		`},destroy(){}},gt=`
.sm-permission-panel { color: #172033; font-size: 1.4rem; }
.sm-permission-heading { margin-bottom: 1.8rem; }
.sm-permission-heading h2 { margin: 0; font-size: 2.2rem; }
.sm-permission-heading p { margin: .6rem 0 0; color: #667085; }
.sm-permission-summary { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .8rem; margin-bottom: 1.2rem; }
.sm-permission-summary div { min-width: 0; padding: 1rem; border: .1rem solid #e4e7ec; background: #f8fafc; }
.sm-permission-summary span { display: block; color: #667085; font-size: 1.2rem; }
.sm-permission-summary strong { display: block; margin-top: .4rem; overflow-wrap: anywhere; }
.sm-permission-card { margin-bottom: 1.2rem; padding: 1.6rem; border: .1rem solid #e4e7ec; background: #fff; }
.sm-permission-card h3 { margin: 0; font-size: 1.7rem; }
.sm-permission-note { margin: .5rem 0 1.2rem; color: #667085; font-size: 1.3rem; }
.sm-permission-actions { display: flex; flex-wrap: wrap; gap: .8rem; }
.sm-permission-button { min-height: 3.8rem; padding: .7rem 1.2rem; border: .1rem solid #cfd5dd; border-radius: .5rem; background: #fff; color: #344054; font-weight: 600; cursor: pointer; }
.sm-permission-button:hover { border-color: #175cd3; color: #175cd3; }
.sm-permission-button.primary { border-color: #175cd3; background: #175cd3; color: #fff; }
.sm-permission-result { min-height: 4.4rem; margin: 1rem 0 0; padding: 1rem; overflow: auto; border: .1rem solid #e4e7ec; background: #f8fafc; color: #344054; white-space: pre-wrap; overflow-wrap: anywhere; }
.sm-permission-result[data-state="success"] { border-color: #6ce9a6; background: #ecfdf3; color: #067647; }
.sm-permission-result[data-state="error"] { border-color: #fda29b; background: #fef3f2; color: #b42318; }
.sm-permission-preview { display: none; width: min(100%, 48rem); max-height: 26rem; margin-top: 1rem; background: #101828; object-fit: contain; }
.sm-permission-preview.is-visible { display: block; }
@media (max-width: 720px) { .sm-permission-summary { grid-template-columns: 1fr; } }
`;function U(e){return e instanceof DOMException?`${e.name}: ${e.message||"操作被系统拒绝"}`:e instanceof Error?e.message:String(e||"未知错误")}function ft(e){return`${e.name}
类型：${e.type||"未知"}
大小：${(e.size/1024).toFixed(1)} KiB`}const bt={content:null,cleanupHandlers:[],activeStreams:new Set,objectUrls:new Set,permissionRequests:new Map,permissionRequestSequence:0,permissionResultHandler:null,render(e){var t;this.destroy(),this.content=e,e.innerHTML=`
			<style>${gt}</style>
			<section class="sm-permission-panel">
				<header class="sm-permission-heading">
					<h2>Android 权限测试</h2>
					<p>仅在综合测试面板中调用浏览器能力；关闭或切换分类后自动释放摄像头、麦克风和预览资源。</p>
				</header>
				<div class="sm-permission-summary">
					<div><span>运行环境</span><strong data-summary="environment"></strong></div>
					<div><span>安全上下文</span><strong data-summary="secure"></strong></div>
					<div><span>WebView 桥</span><strong data-summary="bridge"></strong></div>
				</div>

				<section class="sm-permission-card">
					<h3>摄像头与麦克风</h3>
					<p class="sm-permission-note">分别调用 getUserMedia，验证 CAMERA 与 RECORD_AUDIO。视频和音频不会上传。</p>
					<div class="sm-permission-actions">
						<button class="sm-permission-button primary" data-action="camera">测试摄像头</button>
						<button class="sm-permission-button" data-action="microphone">测试麦克风</button>
						<button class="sm-permission-button" data-action="stop-media">停止媒体</button>
					</div>
					<video class="sm-permission-preview" data-preview="camera" autoplay muted playsinline></video>
					<pre class="sm-permission-result" data-result="camera">等待测试</pre>
					<pre class="sm-permission-result" data-result="microphone">等待测试</pre>
				</section>

				<section class="sm-permission-card">
					<h3>本地媒体文件</h3>
					<p class="sm-permission-note">打开系统文件选择器，分别验证图片、视频和音频选择。文件只在本机预览，不会上传。</p>
					<div class="sm-permission-actions">
						<button class="sm-permission-button" data-pick="image">选择图片</button>
						<button class="sm-permission-button" data-pick="video">选择视频</button>
						<button class="sm-permission-button" data-pick="audio">选择音频</button>
					</div>
					<input data-file="image" type="file" accept="image/*" hidden>
					<input data-file="video" type="file" accept="video/*" hidden>
					<input data-file="audio" type="file" accept="audio/*" hidden>
					<img class="sm-permission-preview" data-preview="image" alt="所选图片预览">
					<video class="sm-permission-preview" data-preview="video" controls playsinline></video>
					<audio class="sm-permission-preview" data-preview="audio" controls></audio>
					<pre class="sm-permission-result" data-result="files">等待选择</pre>
				</section>

				<section class="sm-permission-card">
					<h3>蓝牙附近设备权限</h3>
					<p class="sm-permission-note">通过忆启时光 WebView 宿主检查或申请 BLUETOOTH_SCAN 与 BLUETOOTH_CONNECT。不会扫描、连接或上传设备信息。</p>
					<div class="sm-permission-actions">
						<button class="sm-permission-button primary" data-action="bluetooth-check">检查蓝牙权限</button>
						<button class="sm-permission-button" data-action="bluetooth-request">申请蓝牙权限</button>
					</div>
					<pre class="sm-permission-result" data-result="bluetooth">等待测试</pre>
				</section>
			</section>
		`,this._setSummary("environment",/Android/i.test(navigator.userAgent)?"Android":"非 Android"),this._setSummary("secure",window.isSecureContext?"是":"否"),this._setSummary("bridge",(t=window.ReactNativeWebView)!=null&&t.postMessage?"忆启时光 WebView":"普通浏览器"),this._installPermissionResultHandler(),this._bindActions()},_bindActions(){this._bind('[data-action="camera"]',"click",()=>void this._testCamera()),this._bind('[data-action="microphone"]',"click",()=>void this._testMicrophone()),this._bind('[data-action="stop-media"]',"click",()=>this._stopMedia()),this._bind('[data-action="bluetooth-check"]',"click",()=>this._testBluetoothPermissions("check")),this._bind('[data-action="bluetooth-request"]',"click",()=>this._testBluetoothPermissions("request")),this.content.querySelectorAll("[data-pick]").forEach(e=>{this._bind(`[data-pick="${e.dataset.pick}"]`,"click",()=>{var t,s;(s=(t=this.content)==null?void 0:t.querySelector(`[data-file="${e.dataset.pick}"]`))==null||s.click()})}),this.content.querySelectorAll("[data-file]").forEach(e=>{this._bind(`[data-file="${e.dataset.file}"]`,"change",()=>this._handleFile(e))})},_bind(e,t,s){var r;const a=(r=this.content)==null?void 0:r.querySelector(e);a==null||a.addEventListener(t,s),this.cleanupHandlers.push(()=>a==null?void 0:a.removeEventListener(t,s))},_installPermissionResultHandler(){this.permissionResultHandler=(e={})=>{const t=this.permissionRequests.get(e.requestId);if(!t)return;if(this.permissionRequests.delete(e.requestId),clearTimeout(t.timeout),e.error){this._setResult("bluetooth",`蓝牙权限测试失败
${e.error}`,"error");return}const s=e.statuses||{},a=s.BLUETOOTH_SCAN||"unknown",r=s.BLUETOOTH_CONNECT||"unknown",i=["granted","not-required"].includes(a)&&["granted","not-required"].includes(r);this._setResult("bluetooth",`蓝牙权限${i?"可用":"未完全授权"}
扫描附近设备：${this._formatPermissionStatus(a)}
连接蓝牙设备：${this._formatPermissionStatus(r)}`,i?"success":"error")},window.__onAndroidPermissionTestResult=this.permissionResultHandler},_testBluetoothPermissions(e){var a;if(!((a=window.ReactNativeWebView)!=null&&a.postMessage)){this._setResult("bluetooth","蓝牙权限测试仅支持忆启时光 Android WebView","error");return}const t=`bluetooth-${Date.now()}-${++this.permissionRequestSequence}`;this._setResult("bluetooth",e==="request"?"正在申请蓝牙权限...":"正在检查蓝牙权限...");const s=setTimeout(()=>{this.permissionRequests.delete(t),this._setResult("bluetooth","蓝牙权限测试超时，请重试","error")},6e4);this.permissionRequests.set(t,{timeout:s}),window.ReactNativeWebView.postMessage(JSON.stringify({type:"androidPermissionTest",cmd:e,requestId:t}))},_formatPermissionStatus(e){return{granted:"已授权",denied:"未授权",never_ask_again:"已拒绝且不再询问","not-required":"当前 Android 版本无需动态授权"}[e]||`未知（${e}）`},async _testCamera(){var e,t;this._setResult("camera","正在请求摄像头...");try{if(!((e=navigator.mediaDevices)!=null&&e.getUserMedia))throw new Error("当前环境不支持 getUserMedia");this._stopMedia();const s=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});this.activeStreams.add(s);const a=(t=this.content)==null?void 0:t.querySelector('[data-preview="camera"]');a&&(a.srcObject=s,a.classList.add("is-visible"));const r=s.getVideoTracks()[0];this._setResult("camera",`摄像头可用
设备：${(r==null?void 0:r.label)||"Android Camera"}`,"success")}catch(s){this._setResult("camera",`摄像头测试失败
${U(s)}`,"error")}},async _testMicrophone(){var e;this._setResult("microphone","正在请求麦克风...");try{if(!((e=navigator.mediaDevices)!=null&&e.getUserMedia))throw new Error("当前环境不支持 getUserMedia");const t=await navigator.mediaDevices.getUserMedia({video:!1,audio:!0});this.activeStreams.add(t);const s=t.getAudioTracks()[0];this._setResult("microphone",`麦克风可用
设备：${(s==null?void 0:s.label)||"Android Microphone"}
状态：${(s==null?void 0:s.readyState)||"live"}`,"success")}catch(t){this._setResult("microphone",`麦克风测试失败
${U(t)}`,"error")}},_stopMedia(){var t;this.activeStreams.forEach(s=>s.getTracks().forEach(a=>a.stop())),this.activeStreams.clear();const e=(t=this.content)==null?void 0:t.querySelector('[data-preview="camera"]');e&&(e.srcObject=null,e.classList.remove("is-visible"))},_handleFile(e){var i,o,l;const t=(i=e.files)==null?void 0:i[0];if(!t)return;const s=e.dataset.file;this._clearObjectUrls();const a=URL.createObjectURL(t);this.objectUrls.add(a),(o=this.content)==null||o.querySelectorAll('[data-preview="image"], [data-preview="video"], [data-preview="audio"]').forEach(d=>{d.classList.remove("is-visible"),d.removeAttribute("src")});const r=(l=this.content)==null?void 0:l.querySelector(`[data-preview="${s}"]`);r&&(r.src=a,r.classList.add("is-visible")),this._setResult("files",`${s==="image"?"图片":s==="video"?"视频":"音频"}选择成功
${ft(t)}`,"success"),e.value=""},_setSummary(e,t){var a;const s=(a=this.content)==null?void 0:a.querySelector(`[data-summary="${e}"]`);s&&(s.textContent=t)},_setResult(e,t,s=""){var r;const a=(r=this.content)==null?void 0:r.querySelector(`[data-result="${e}"]`);a&&(a.textContent=t,a.dataset.state=s)},_clearObjectUrls(){this.objectUrls.forEach(e=>URL.revokeObjectURL(e)),this.objectUrls.clear()},destroy(){this.cleanupHandlers.forEach(e=>e()),this.cleanupHandlers=[],this.permissionRequests.forEach(({timeout:e})=>clearTimeout(e)),this.permissionRequests.clear(),window.__onAndroidPermissionTestResult===this.permissionResultHandler&&delete window.__onAndroidPermissionTestResult,this.permissionResultHandler=null,this._stopMedia(),this._clearObjectUrls(),this.content=null}},vt=[{phonemes:"n ǐ h ǎo n ǐ h ǎo",keyword:"你好你好",type:"wakeup"},{phonemes:"j ié sh ù",keyword:"结束",type:"stop"},{phonemes:"g uà d uàn",keyword:"挂断",type:"stop"}],S="5.0.2",yt=`https://cdn.keepwork.com/npm/local-rtc/sherpaonnx-full-js@${S}/`,wt=`http://127.0.0.1:18900/sherpaonnx-full-js@${S}/`,D="silvermindLocalRtcSpeakerEnrollments",O="silvermindLocalRtcSpeakerPhrase",B="你好，欢迎来到我的世界",q=120;function R(e){return e instanceof Error?e.message:String(e)}function St(e,t){if(!e||!t||e.length!==t.length)return 0;let s=0,a=0,r=0;for(let i=0;i<e.length;i+=1)s+=e[i]*t[i],a+=e[i]**2,r+=t[i]**2;return s/(Math.sqrt(a)*Math.sqrt(r)||1)}class kt extends EventTarget{constructor(){super(),this.sdkController=null,this.rtc=null,this.busyByModule={kws:!1,asr:!1,models:!1,speaker:!1,tts:!1},this.initialized=!1,this.speakerReady=!1,this.ttsReady=!1,this.ttsSynthesizing=!1,this.ttsSpeaking=!1,this.ttsSynthesisStartedAt=null,this.ttsPlaybackStartedAt=null,this.modelsStatus="等待同步",this.logs=[],this.moduleStates=new Map,this.moduleUnsubscribers=[],this.audioContext=null,this.mediaStream=null,this.mediaSource=null,this.audioProcessor=null,this.recordingChunks=[],this.recording=!1,this.speakerClips={a:null,b:null,clone:null,last:null},this.speakerEnrollments=this._loadEnrollments(),this.speakerPhrase=localStorage.getItem(O)||B,this.destroyed=!1,this.state={rtcState:"IDLE",phase:"等待操作",progress:0,progressSource:"",lastKws:"尚未命中",asrPartial:"等待语音输入...",asrResults:[],speakerResult:"等待声纹测试",ttsResult:"等待 MOSS TTS 测试",ttsSynthesisStatus:"等待合成",ttsSynthesisDurationMs:null,ttsPlaybackStatus:"等待播放",ttsPlaybackDurationMs:null,ttsAudioDurationMs:null},this._logEnvironmentInfo()}getSnapshot(){var l,d,c;const t=this._getRuntime(),s=((d=(l=this.rtc)==null?void 0:l.getState)==null?void 0:d.call(l))||this.state.rtcState,a=window.KeepworkSDK,r=!!window.LocalRtcModelBridge,i=((c=window.SherpaOnnxSpeakerBridge)==null?void 0:c.runtime)==="android",o=!!window.MossTtsBridge;return{...this.state,rtcState:s,busy:Object.values(this.busyByModule).some(Boolean),busyByModule:{...this.busyByModule},initialized:this.initialized,speakerReady:this.speakerReady,ttsReady:this.ttsReady,ttsSynthesizing:this.ttsSynthesizing,ttsSpeaking:this.ttsSpeaking,modelsStatus:this.modelsStatus,runtime:t,environment:/Android/i.test(navigator.userAgent)?"Android WebView / Browser":"Desktop Browser",keepworkSdk:{loaded:typeof a=="function"&&typeof window.LocalRTCController=="function",instanceReady:!!window.keepwork,source:(a==null?void 0:a.source)||"未知来源",bundleType:a!=null&&a.sourceIsModule?"ES Module / Vite":"IIFE / Script"},baseUrl:this._getBaseUrl(),sherpaVersion:S,bridgeAvailable:this._isAndroidAsrAvailable(),speakerRuntime:i?"Speaker ID · Android 原生":"Speaker ID · 仅 Android 原生支持",ttsRuntime:o?"MOSS TTS · Android 原生":"MOSS TTS · 当前环境不可用",speakerPhrase:this.speakerPhrase,capabilities:{androidAsr:t==="android"&&this._isAndroidAsrAvailable(),models:r,speaker:i,tts:o},moduleStates:Object.fromEntries(this.moduleStates),logs:[...this.logs]}}async initialize(){return this._run("kws","加载 LocalRTC KWS",()=>this._initializeKws())}async startKws(){return this._run("kws","开启 KWS 监听",async()=>{if(this.initialized||await this._initializeKws(),!await this.sdkController.start())throw new Error("KWS 麦克风启动失败")})}async stopKws(){var t,s,a;(t=this.sdkController)==null||t.stop(),this._setState({rtcState:((a=(s=this.rtc)==null?void 0:s.getState)==null?void 0:a.call(s))||"IDLE"}),this._log("KWS 已停止并释放麦克风")}async startAsr(){return this._run("asr","开启 Android ASR",async()=>{const t=await this._ensureRtc();if(this._getRuntime()!=="android")throw new Error("当前不是 Android LocalRTC 环境");if(!await t.startAsr())throw new Error("ASR 不可用，请确认模型已安装")})}stopAsr(){var t,s,a,r;(s=(t=this.rtc)==null?void 0:t.stopAsr)==null||s.call(t,{returnToKws:!1}),this._setState({rtcState:((r=(a=this.rtc)==null?void 0:a.getState)==null?void 0:r.call(a))||"IDLE"}),this._log("ASR 已停止")}clearOutput(){var t,s;this.logs=[],(s=(t=this.rtc)==null?void 0:t.clearAsrResults)==null||s.call(t),this._setState({lastKws:"尚未命中",asrPartial:"等待语音输入...",asrResults:[]})}async refreshModules(){if(window.LocalRtcModelBridge&&!this.busyByModule.models){this.busyByModule.models=!0,this.modelsStatus="读取资源状态",this._emitChange();try{const t=await this._ensureRtc();await Promise.all(["asr","speaker-id","tts"].map(async s=>{try{const[a,r]=await Promise.all([t.getModuleState(s),t.getModuleInfo(s)]);this._updateModule({...a,info:r});const i=(r==null?void 0:r.downloadUrl)||(r==null?void 0:r.url);i&&this._log(`模型 ${s} URL：${i}`)}catch(a){this._updateModule({moduleId:s,status:"error",error:R(a)})}})),this.modelsStatus="资源状态已同步"}catch(t){throw this.modelsStatus=`状态读取失败：${R(t)}`,t}finally{this.busyByModule.models=!1,this._emitChange()}}}async downloadModule(t){return this._run(`model:${t}`,`下载 ${t} 模型`,async()=>{const s=await this._ensureRtc();this._updateModule(await s.ensureModule(t)),await this.refreshModules()})}async removeModule(t){return this._run(`model:${t}`,`删除 ${t} 模型`,async()=>{const s=await this._ensureRtc();this._updateModule(await s.removeModule(t)),t==="speaker-id"&&(this.speakerReady=!1),t==="tts"&&(this.ttsReady=!1)})}async loadSpeaker(){return this._run("speaker","加载 Speaker ID",async()=>{const t=await this._ensureRtc();await t.startSpeakerId(),await t.importSpeakerEnrollments(this.speakerEnrollments),this.speakerReady=!0,this._setState({speakerResult:`声纹模型已就绪，已恢复 ${Object.keys(this.speakerEnrollments).length} 人`})})}stopSpeaker(){var t,s;this._stopRecordingResources(),(s=(t=this.rtc)==null?void 0:t.stopSpeakerId)==null||s.call(t),this.speakerReady=!1,this._setState({speakerResult:"Speaker ID 已停止"})}async startRecording(){this.recording||(this.mediaStream=await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}}),this.audioContext||(this.audioContext=new AudioContext),this.audioContext.state==="suspended"&&await this.audioContext.resume(),this.recordingChunks=[],this.mediaSource=this.audioContext.createMediaStreamSource(this.mediaStream),this.audioProcessor=this.audioContext.createScriptProcessor(4096,1,1),this.audioProcessor.onaudioprocess=t=>{this.recording&&this.recordingChunks.push(new Float32Array(t.inputBuffer.getChannelData(0)))},this.mediaSource.connect(this.audioProcessor),this.audioProcessor.connect(this.audioContext.destination),this.recording=!0,this._emitChange())}stopRecording(){var i,o,l;if(!this.recording)return null;this.recording=!1,(i=this.audioProcessor)==null||i.disconnect(),(o=this.mediaSource)==null||o.disconnect(),this.audioProcessor=null,this.mediaSource=null;const t=this.recordingChunks.reduce((d,c)=>d+c.length,0),s=new Float32Array(t);let a=0;for(const d of this.recordingChunks)s.set(d,a),a+=d.length;const r={pcm:s,sampleRate:((l=this.audioContext)==null?void 0:l.sampleRate)||48e3};return this.speakerClips.last=r,this._emitChange(),r}async processSpeakerClip(t,s,a={}){var d;if(!(s!=null&&s.pcm.length))throw new Error("未录到有效音频");const r=await this._ensureRtc(),i=((d=a.name)==null?void 0:d.trim())||"speaker1",o=Number(a.threshold)||.5,l=this._describeClip(s);if(t==="enroll"){const c=await r.enrollSpeaker(i,s.pcm,s.sampleRate);this.speakerEnrollments[i]=Array.from(c),this._persistEnrollments(),this._setState({speakerResult:`已注册“${i}”
${l}`})}else if(t==="verify"){const c=await r.verifySpeaker(i,s.pcm,s.sampleRate,o);this._setState({speakerResult:`验证“${i}”：${c.score.toFixed(3)}，${c.accept?"通过":"拒绝"}
${l}`})}else if(t==="identify"){const c=await r.identifySpeaker(s.pcm,s.sampleRate,o);this._setState({speakerResult:`辨认结果：${c||"无匹配"}
${l}`})}else if(t==="record-a"||t==="record-b"){const c=t==="record-a"?"a":"b";this.speakerClips[c]={...s,embedding:await r.computeSpeakerEmbedding(s.pcm,s.sampleRate)},this._setState({speakerResult:`音频 ${c.toUpperCase()} 已就绪
${l}`})}else t==="clone"&&(this.speakerClips.clone=s,this._setState({ttsResult:`克隆样本已就绪
${l}`}));this._emitChange()}compareSpeakerClips(){var s,a;const t=St((s=this.speakerClips.a)==null?void 0:s.embedding,(a=this.speakerClips.b)==null?void 0:a.embedding);this._setState({speakerResult:`A / B 相似度：${t.toFixed(3)}
同一人通常 > 0.6，不同人通常 < 0.4`})}clearSpeakers(){var t,s;for(const a of((s=(t=this.rtc)==null?void 0:t.listSpeakers)==null?void 0:s.call(t))||[])this.rtc.removeSpeaker(a);this.speakerEnrollments={},this._persistEnrollments(),this._setState({speakerResult:"已清空声纹注册库"})}async loadTts(){return this._run("tts","加载 MOSS TTS",async()=>{const t=await this._ensureRtc();if(!await t.preloadTts())throw new Error("MOSS TTS 加载失败");this.ttsReady=!0,this._setState({ttsResult:`MOSS TTS 已就绪，${t.listTtsVoices().length} 个音色
${t.canCloneVoice()?"声音克隆可用":"声音克隆不可用"}`})})}getTtsVoices(){var t,s;return((s=(t=this.rtc)==null?void 0:t.listTtsVoices)==null?void 0:s.call(t))||[]}async speak(t,s){return this._run("tts","MOSS 朗读文字",async()=>{if(!t.trim())throw new Error("请输入要朗读的文字");this.ttsSynthesizing=!0,this.ttsSpeaking=!1,this.ttsSynthesisStartedAt=performance.now(),this.ttsPlaybackStartedAt=null,this._setState({ttsSynthesisStatus:"合成中",ttsSynthesisDurationMs:null,ttsPlaybackStatus:"等待合成完成",ttsPlaybackDurationMs:null,ttsAudioDurationMs:null});try{await(await this._ensureRtc()).speak(t.trim(),s)}catch(a){throw this.ttsSynthesizing=!1,this.ttsSpeaking=!1,this._setState({ttsSynthesisStatus:this.ttsPlaybackStartedAt===null?"合成失败":this.state.ttsSynthesisStatus,ttsPlaybackStatus:this.ttsPlaybackStartedAt===null?"未播放":"播放失败"}),a}})}stopTts(){var r,i;(i=(r=this.rtc)==null?void 0:r.stopTts)==null||i.call(r);const t=performance.now(),s=this.ttsSynthesizing&&this.ttsSynthesisStartedAt!==null?t-this.ttsSynthesisStartedAt:this.state.ttsSynthesisDurationMs,a=this.ttsSpeaking&&this.ttsPlaybackStartedAt!==null?t-this.ttsPlaybackStartedAt:this.state.ttsPlaybackDurationMs;this.ttsSynthesizing=!1,this.ttsSpeaking=!1,this._setState({ttsSynthesisStatus:this.state.ttsSynthesisStatus==="合成中"?"合成已停止":this.state.ttsSynthesisStatus,ttsSynthesisDurationMs:s,ttsPlaybackStatus:this.state.ttsPlaybackStatus==="播放中"?"播放已停止":this.state.ttsPlaybackStatus,ttsPlaybackDurationMs:a})}async registerClone(t){return this._run("tts","注册克隆音色",async()=>{const s=this.speakerClips.clone;if(!t.trim()||!s)throw new Error("请先输入音色名并录制样本");const a=await(await this._ensureRtc()).registerVoice(t.trim(),s.pcm,s.sampleRate);this._setState({ttsResult:`克隆音色“${t.trim()}”注册成功，${a.frames} 帧`})})}removeVoice(t){var s,a;(a=(s=this.rtc)==null?void 0:s.removeVoice)==null||a.call(s,t),this._setState({ttsResult:`已尝试删除音色“${t}”`})}async previewClone(){const t=this.speakerClips.clone;if(!t)throw new Error("请先录制克隆样本");await(await this._ensureRtc()).previewReferenceVoice(t.pcm,t.sampleRate)}async dumpClone(){const t=this.speakerClips.clone;if(!t)throw new Error("请先录制克隆样本");const s=await(await this._ensureRtc()).dumpReferenceCodes(t.pcm,t.sampleRate);this._setState({ttsResult:`参考音频 Codes
frames=${s.frames} · nVq=${s.nVq} · quantizers=${s.numQuantizers}
sampleRate=${s.sampleRate}`})}setSpeakerPhrase(t){this.speakerPhrase=t.trim()||B,localStorage.setItem(O,this.speakerPhrase),this._emitChange()}async destroy(){var t,s,a,r,i,o,l,d,c,m;if(!this.destroyed){this.destroyed=!0,this._stopRecordingResources(),(s=(t=this.sdkController)==null?void 0:t.stop)==null||s.call(t),(r=(a=this.rtc)==null?void 0:a.stopAsr)==null||r.call(a,{returnToKws:!1}),(o=(i=this.rtc)==null?void 0:i.stopTts)==null||o.call(i),(d=(l=this.rtc)==null?void 0:l.stopSpeakerId)==null||d.call(l);for(const u of this.moduleUnsubscribers)u==null||u();this.moduleUnsubscribers=[],await((m=(c=this.sdkController)==null?void 0:c.destroy)==null?void 0:m.call(c)),this.sdkController=null,this.rtc=null,this.audioContext&&this.audioContext.state!=="closed"&&await this.audioContext.close(),this.audioContext=null}}_createRuntimeOptions(){const t=this._getRuntime();return{asrRuntime:t,minAudioRms:.015,vadConfig:t==="android"?{enabled:!0,threshold:.3,minSilenceDuration:.4,minSpeechDuration:.1}:void 0,audioSource:"voice_communication",aecEnabled:!0,ttsRuntime:t==="android"?"android":"none",ttsStreaming:!1,ttsPrebufferMs:600,onLog:s=>this._log(s),onError:s=>this._log(s,"error"),onStateChange:(s,a)=>{this._setState({rtcState:s}),this._log(`状态：${a} → ${s}`)},onProgress:(s,a,r)=>this._setState({phase:`加载 ${s}`,progress:a,progressSource:r||""}),onKwsDetected:(s,a)=>this._setState({lastKws:`${s} · ${a}`}),onAsrPartial:s=>this._setState({asrPartial:s||"等待语音输入..."}),onAsrResult:(s,a)=>{this._setState({asrPartial:"等待语音输入...",asrResults:a!=null&&a.length?[...a]:[s]}),this._log(`ASR：${s}`)},onTtsLog:s=>this._log(`MOSS：${s}`),onTtsStart:()=>{const s=performance.now();this.ttsSynthesizing=!1,this.ttsSpeaking=!0,this.ttsPlaybackStartedAt=s,this._setState({ttsSynthesisStatus:"合成完成",ttsSynthesisDurationMs:this.ttsSynthesisStartedAt===null?null:s-this.ttsSynthesisStartedAt,ttsPlaybackStatus:"播放中"})},onTtsDone:s=>{const a=performance.now();this.ttsSynthesizing=!1,this.ttsSpeaking=!1,this._setState({ttsPlaybackStatus:"播放完成",ttsPlaybackDurationMs:this.ttsPlaybackStartedAt===null?null:a-this.ttsPlaybackStartedAt,ttsAudioDurationMs:s,ttsResult:`播放完成 · 音频时长 ${Math.round(s)} ms`})}}}_getRuntime(){return this._isAndroidAsrAvailable()?"android":"wasm"}_getBaseUrl(){return new URLSearchParams(location.search).get("local")==="true"?wt:yt}_logEnvironmentInfo(){var i;const t=this._getBaseUrl(),s=((i=window.KeepworkSDK)==null?void 0:i.source)||"未知来源",a=/Android/i.test(navigator.userAgent),r=a&&/; wv\)|\bwv\b|Version\/\d+(?:\.\d+)* Chrome\//i.test(navigator.userAgent);this._log(`页面 URL：${location.href}`),this._log(`KeepworkSDK URL：${s}`),this._log(`Sherpa 基础 URL：${t}`);for(const o of["sherpa-onnx-local-rtc.js","sherpa-onnx-kws.js"])this._log(`Runtime 脚本 URL：${new URL(o,t).href}`);this._log(`浏览器：${r?"Android WebView":a?"Android Browser":"Desktop Browser"}`),this._log(`User-Agent：${navigator.userAgent}`),this._log(`平台：${navigator.platform||"未知"} · 语言：${navigator.language||"未知"} · Online：${navigator.onLine}`),this._log(`视口：${window.innerWidth} × ${window.innerHeight} · DPR：${window.devicePixelRatio||1} · 屏幕：${screen.width} × ${screen.height}`)}_isAndroidAsrAvailable(){return!!(window.SherpaOnnxAsrBridge||window.AndroidAsrBridge)}async _ensureRtc(){if(this.destroyed)throw new Error("LocalRTC 测试单元已关闭");if(this.sdkController||this._createSdkController(),this.rtc||(this.rtc=await this.sdkController.ensureRuntime(),this._bindModuleEvents()),!this.rtc)throw new Error("LocalRTC 尚未初始化");return this.rtc}async _initializeKws(){var t,s;if(this.sdkController||this._createSdkController(),this.rtc=await this.sdkController.preload(),!this.rtc)throw new Error("LocalRTC 初始化失败");return this.initialized=!0,this._bindModuleEvents(),this._setState({phase:"KWS 已就绪",progress:100,rtcState:this.rtc.getState()}),this._log(`LocalRTC 已就绪，版本 ${((s=(t=this.rtc).getVersion)==null?void 0:s.call(t))||"未知"}`),await this.refreshModules(),this.rtc}_createSdkController(){if(!window.LocalRTCController)throw new Error("KeepworkSDK LocalRTCController 未加载");this.sdkController=new window.LocalRTCController({config:{enabled:!0,baseUrl:this._getBaseUrl(),version:S,kws:{keywords:vt,threshold:.25},runtimeOptions:this._createRuntimeOptions()},hooks:{onStatus:t=>this._log(t),onLoadProgress:t=>{this._setState({phase:t.phase,progress:Math.max(t.wasm,t.kws,0),progressSource:t.source||""})}}})}async _run(t,s,a){if(this.destroyed)throw new Error("LocalRTC 测试单元已关闭");if(!this.busyByModule[t]){this.busyByModule[t]=!0,this._log(s),this._emitChange();try{return await a()}catch(r){throw this._log(`${s}失败：${R(r)}`,"error"),this._setState({phase:"操作失败"}),r}finally{this.busyByModule[t]=!1,this._emitChange()}}}_bindModuleEvents(){var t;this.moduleUnsubscribers.length||typeof((t=this.rtc)==null?void 0:t.onModuleStateChange)!="function"||this.moduleUnsubscribers.push(this.rtc.onModuleStateChange(s=>this._updateModule(s)),this.rtc.onModuleProgress(s=>this._updateModule(s)))}_updateModule(t){if(!(t!=null&&t.moduleId))return;const s=this.moduleStates.get(t.moduleId)||{};this.moduleStates.set(t.moduleId,{...s,...t}),this._emitChange()}_setState(t){this.state={...this.state,...t},this._emitChange()}_log(t,s="info"){this.logs.push({time:new Date().toLocaleTimeString("zh-CN",{hour12:!1}),message:String(t),level:s}),this.logs.length>q&&(this.logs=this.logs.slice(-q)),this._emitChange()}_emitChange(){this.dispatchEvent(new CustomEvent("change",{detail:this.getSnapshot()}))}_loadEnrollments(){try{return JSON.parse(localStorage.getItem(D)||"{}")}catch{return{}}}_persistEnrollments(){localStorage.setItem(D,JSON.stringify(this.speakerEnrollments))}_describeClip(t){let s=0;for(const r of t.pcm)s+=r*r;const a=Math.sqrt(s/Math.max(1,t.pcm.length));return`${(t.pcm.length/t.sampleRate).toFixed(1)} 秒 @ ${t.sampleRate} Hz，RMS ${a.toFixed(3)}
朗读内容：${this.speakerPhrase}`}_stopRecordingResources(){var t,s,a;this.recording=!1,(t=this.audioProcessor)==null||t.disconnect(),(s=this.mediaSource)==null||s.disconnect(),(a=this.mediaStream)==null||a.getTracks().forEach(r=>r.stop()),this.audioProcessor=null,this.mediaSource=null,this.mediaStream=null}}const _t=`
.sm-rtc-panel { color: #172033; font-size: 1.4rem; }
.sm-rtc-heading { margin-bottom: 1.8rem; }
.sm-rtc-heading h2 { margin: 0; font-size: 2.2rem; }
.sm-rtc-heading p { margin: .6rem 0 0; color: #667085; }
.sm-rtc-status-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: .8rem; margin-bottom: 1.2rem; }
.sm-rtc-status { min-width: 0; padding: 1rem; border: .1rem solid #e4e7ec; background: #f8fafc; }
.sm-rtc-status span { display: block; color: #667085; font-size: 1.2rem; }
.sm-rtc-status strong { display: block; margin-top: .4rem; overflow-wrap: anywhere; }
.sm-rtc-sdk-info { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: .8rem; margin-bottom: 1.2rem; padding: 1rem; border: .1rem solid #d0d5dd; background: #fff; }
.sm-rtc-sdk-info div { min-width: 0; }
.sm-rtc-sdk-info span { display: block; color: #667085; font-size: 1.2rem; }
.sm-rtc-sdk-info strong { display: block; margin-top: .4rem; overflow-wrap: anywhere; }
.sm-rtc-card { margin-bottom: 1.2rem; padding: 1.6rem; border: .1rem solid #e4e7ec; background: #fff; }
.sm-rtc-card h3 { margin: 0; font-size: 1.7rem; }
.sm-rtc-card-note { margin: .5rem 0 1.2rem; color: #667085; font-size: 1.3rem; }
.sm-rtc-actions { display: flex; flex-wrap: wrap; gap: .8rem; margin-top: 1.2rem; }
.sm-rtc-button { min-height: 3.8rem; padding: .7rem 1.2rem; border: .1rem solid #cfd5dd; border-radius: .5rem; background: #fff; color: #344054; -webkit-text-fill-color: currentColor; font-weight: 600; cursor: pointer; }
.sm-rtc-button:hover:not(:disabled) { border-color: #175cd3; color: #175cd3; }
.sm-rtc-button.primary { border-color: #175cd3; background: #175cd3; color: #fff; }
.sm-rtc-button.danger { border-color: #fda29b; color: #b42318; }
.sm-rtc-button.recording { border-color: #d92d20; background: #fee4e2; color: #b42318; }
.sm-rtc-button:disabled { cursor: not-allowed; opacity: .45; }
.sm-rtc-progress { width: 100%; height: .9rem; margin-top: 1rem; }
.sm-rtc-progress-label { display: flex; justify-content: space-between; gap: 1rem; color: #667085; font-size: 1.2rem; }
.sm-rtc-model { display: grid; grid-template-columns: 10rem minmax(0,1fr) auto; gap: 1rem; align-items: center; padding: 1rem 0; border-top: .1rem solid #eaecf0; }
.sm-rtc-model:first-of-type { margin-top: 1rem; }
.sm-rtc-model-detail { min-width: 0; color: #667085; font-size: 1.2rem; overflow-wrap: anywhere; }
.sm-rtc-two-column { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 1.2rem; }
.sm-rtc-fields { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 1rem; }
.sm-rtc-field { display: grid; gap: .5rem; color: #475467; }
.sm-rtc-field input, .sm-rtc-field textarea, .sm-rtc-field select { width: 100%; min-height: 3.8rem; box-sizing: border-box; padding: .7rem .9rem; border: .1rem solid #d0d5dd; border-radius: .4rem; background: #fff; color: #172033; font: inherit; }
.sm-rtc-field textarea { min-height: 7rem; resize: vertical; }
.sm-rtc-output { min-height: 6rem; margin: 1rem 0 0; padding: 1rem; overflow: auto; border: .1rem solid #e4e7ec; background: #f8fafc; color: #344054; white-space: pre-wrap; overflow-wrap: anywhere; }
.sm-rtc-logs { height: 18rem; background: #101828; color: #6ce9a6; font-family: Consolas, monospace; font-size: 1.2rem; }
.sm-rtc-inline { display: flex; align-items: center; gap: .6rem; min-height: 3.8rem; }
@media (max-width: 900px) { .sm-rtc-status-grid, .sm-rtc-sdk-info, .sm-rtc-two-column { grid-template-columns: repeat(2, minmax(0,1fr)); } }
@media (max-width: 620px) { .sm-rtc-status-grid, .sm-rtc-sdk-info, .sm-rtc-two-column, .sm-rtc-fields { grid-template-columns: 1fr; } .sm-rtc-model { grid-template-columns: 1fr; } }
`;function N(e){const t=Number(e)||0;return t<1024?`${t} B`:t<1024**2?`${(t/1024).toFixed(1)} KiB`:`${(t/1024**2).toFixed(1)} MiB`}function Et(e){return{asr:"ASR + VAD","speaker-id":"Speaker ID",tts:"MOSS TTS"}[e]||e}const Ct={controller:null,container:null,changeHandler:null,cleanupHandlers:[],activationId:0,gateAcquired:!1,gateChangeHandler:null,render(e){this.container=e,e.innerHTML=`
			<style>${_t}</style>
			<section class="sm-rtc-panel">
				<header class="sm-rtc-heading">
					<h2>LocalRTC 测试单元</h2>
					<p>通过 KeepworkSDK 验证 KWS、Android ASR、模型资源、声纹与 MOSS TTS。</p>
				</header>
				<div class="sm-rtc-status-grid">
					<div class="sm-rtc-status"><span>环境</span><strong data-view="environment">检测中</strong></div>
					<div class="sm-rtc-status"><span>Android ASR 桥</span><strong data-view="bridge">检测中</strong></div>
					<div class="sm-rtc-status"><span>ASR Runtime</span><strong data-view="runtime">检测中</strong></div>
					<div class="sm-rtc-status"><span>RTC 状态</span><strong data-view="rtc-state">IDLE</strong></div>
					<div class="sm-rtc-status"><span>Sherpa 版本</span><strong data-view="sherpa-version">检测中</strong></div>
				</div>
				<div class="sm-rtc-sdk-info">
					<div><span>KeepworkSDK</span><strong data-view="sdk-status">检测中</strong></div>
					<div><span>默认 SDK 实例</span><strong data-view="sdk-instance">检测中</strong></div>
					<div><span>Bundle 类型</span><strong data-view="sdk-bundle-type">检测中</strong></div>
					<div><span>Bundle 来源</span><strong data-view="sdk-source">检测中</strong></div>
				</div>

				<section class="sm-rtc-card">
					<h3>KWS 关键词唤醒</h3>
					<p class="sm-rtc-card-note">关键词：你好你好（唤醒）、结束（停止）、挂断（停止）；检测阈值 0.25。</p>
					<div class="sm-rtc-progress-label"><strong data-view="phase">等待操作</strong><span data-view="progress-text">0%</span></div>
					<progress class="sm-rtc-progress" data-view="progress" max="100" value="0"></progress>
					<p class="sm-rtc-card-note">资源地址：<span data-view="base-url">检测中</span></p>
					<div class="sm-rtc-actions">
						<button class="sm-rtc-button primary" data-action="initialize">加载 KWS</button>
						<button class="sm-rtc-button" data-action="start-kws">开启 KWS</button>
						<button class="sm-rtc-button" data-action="stop-kws">停止 KWS</button>
					</div>
					<div><strong>最近命中</strong><pre class="sm-rtc-output" data-view="last-kws">尚未命中</pre></div>
				</section>

				<section class="sm-rtc-card">
					<div class="sm-rtc-progress-label"><div><h3>Android 原生模型资源</h3><p class="sm-rtc-card-note">按需版分别安装 ASR、声纹和 TTS；下载后执行 SHA-256 与文件完整性校验。</p></div><strong data-view="models-status">检测中</strong></div>
					<p class="sm-rtc-card-note">资源版本：<strong data-view="models-version">检测中</strong></p>
					<p class="sm-rtc-card-note">资源地址：<span data-view="models-base-url">检测中</span></p>
					${["asr","speaker-id","tts"].map(s=>`
						<div class="sm-rtc-model" data-module-id="${s}">
							<strong>${s==="asr"?"ASR + VAD":s==="speaker-id"?"Speaker ID":"MOSS TTS"}</strong>
							<div class="sm-rtc-model-detail"><span data-role="status">查询中</span> · <span data-role="size">--</span><br><span data-role="url"></span><progress class="sm-rtc-progress" data-role="progress" max="100" value="0"></progress></div>
							<div class="sm-rtc-actions"><button class="sm-rtc-button primary" data-model-action="download">下载</button><button class="sm-rtc-button danger" data-model-action="remove">删除</button></div>
						</div>
					`).join("")}
				</section>

				<section class="sm-rtc-card">
					<div class="sm-rtc-progress-label"><div><strong>ASR 语音识别</strong><p class="sm-rtc-card-note">Android App 使用原生 ASR；普通浏览器仅支持 WASM KWS。</p></div><strong data-view="asr-status">模型未启动</strong></div>
					<div class="sm-rtc-actions"><button class="sm-rtc-button primary" data-action="start-asr">开启 ASR</button><button class="sm-rtc-button danger" data-action="stop-asr">停止 ASR</button></div>
					<p class="sm-rtc-card-note" style="margin-top:1rem">实时结果</p>
					<p data-view="asr-partial" class="sm-rtc-card-note">等待语音输入...</p>
					<p class="sm-rtc-card-note">最终结果</p>
					<pre class="sm-rtc-output" data-view="asr-results">暂无最终结果</pre>
				</section>

				<section class="sm-rtc-card">
					<div class="sm-rtc-progress-label"><div><strong>离线语音合成 / 声音克隆</strong><p data-view="tts-runtime" class="sm-rtc-card-note">MOSS TTS · 检测中</p></div><strong data-view="tts-status">模型未加载</strong></div>
					<p class="sm-rtc-card-note">Android App 使用原生 MOSS-TTS-Nano。声音克隆建议录制 5–10 秒清晰人声。</p>
					<label class="sm-rtc-field">合成文字<textarea data-input="tts-text">你好，这是 MOSS 本地语音合成。</textarea></label>
					<div class="sm-rtc-fields" style="margin-top: 1rem"><label class="sm-rtc-field">音色<select data-input="tts-voice"></select></label><label class="sm-rtc-field">预缓冲 ms<input data-input="tts-prebuffer" type="number" min="0" max="3000" value="600"></label></div>
					<label class="sm-rtc-inline"><input data-input="tts-streaming" type="checkbox">流式播放</label>
					<div class="sm-rtc-actions"><button class="sm-rtc-button primary" data-action="load-tts">加载 MOSS</button><button class="sm-rtc-button primary" data-action="speak">朗读文字</button><button class="sm-rtc-button danger" data-action="stop-tts">停止</button></div>
					<div class="sm-rtc-fields" style="margin-top: 1rem">
						<div class="sm-rtc-field">合成状态<strong data-view="tts-synthesis-status">等待合成</strong><span data-view="tts-synthesis-time" class="sm-rtc-card-note">耗时 --</span></div>
						<div class="sm-rtc-field">播放状态<strong data-view="tts-playback-status">等待播放</strong><span data-view="tts-playback-time" class="sm-rtc-card-note">耗时 --</span></div>
					</div>
					<label class="sm-rtc-field" style="margin-top: 1rem">克隆音色名<input data-input="clone-name" value="MyVoice"></label>
					<div class="sm-rtc-actions"><button class="sm-rtc-button" data-record-action="clone">按住录制样本</button><button class="sm-rtc-button" data-action="register-clone">注册克隆音色</button><button class="sm-rtc-button danger" data-action="remove-clone">删除克隆音色</button><button class="sm-rtc-button" data-action="preview-clone">回环试听样本</button><button class="sm-rtc-button" data-action="dump-clone">导出 Codes 摘要</button></div>
					<pre class="sm-rtc-output" data-view="tts-result">等待 MOSS TTS 测试</pre>
				</section>

				<section class="sm-rtc-card">
					<div class="sm-rtc-progress-label"><div><strong>声纹识别</strong><p data-view="speaker-runtime" class="sm-rtc-card-note">Speaker ID · 检测中</p></div><strong data-view="speaker-status">模型未加载</strong></div>
					<p class="sm-rtc-card-note">声纹识别仅支持 Android App 原生环境。按住按钮朗读下面内容约 5 秒。</p>
						<div class="sm-rtc-fields">
							<label class="sm-rtc-field">说话人<input data-input="speaker-name" value="speaker1"></label>
							<label class="sm-rtc-field">阈值<input data-input="speaker-threshold" value="0.5" inputmode="decimal"></label>
						</div>
						<label class="sm-rtc-field" style="margin-top:1rem">朗读内容<textarea data-input="speaker-phrase">你好，欢迎来到我的世界</textarea></label>
						<div class="sm-rtc-actions">
							<button class="sm-rtc-button primary" data-action="load-speaker">加载声纹</button>
							<button class="sm-rtc-button danger" data-action="stop-speaker">停止</button>
							<button class="sm-rtc-button" data-record-action="enroll">按住注册</button>
							<button class="sm-rtc-button" data-record-action="verify">按住验证 1:1</button>
							<button class="sm-rtc-button" data-record-action="identify">按住辨认 1:N</button>
							<button class="sm-rtc-button danger" data-action="clear-speakers">清空注册库</button>
						</div>
						<div class="sm-rtc-actions">
							<button class="sm-rtc-button" data-record-action="record-a">按住录音 A</button>
							<button class="sm-rtc-button" data-record-action="record-b">按住录音 B</button>
							<button class="sm-rtc-button" data-action="compare-speakers">对比 A / B</button>
						</div>
						<pre class="sm-rtc-output" data-view="speaker-result">等待声纹测试</pre>
						<audio data-view="recording-playback" controls style="width:100%; margin-top:1rem"></audio>
				</section>

				<section class="sm-rtc-card">
					<div class="sm-rtc-progress-label"><h3>Runtime log</h3><button class="sm-rtc-button" data-action="clear">清空</button></div>
					<pre class="sm-rtc-output sm-rtc-logs" data-view="logs"></pre>
				</section>
			</section>
		`;const t=++this.activationId;this._setPanelDisabled(!0),this._activate(t)},async _activate(e){const t=window.LocalRtcTestGate;if(t){if(this.gateChangeHandler=r=>{var o;if((o=r.detail)!=null&&o.active||!this.container)return;this.gateAcquired=!1,this._setPanelDisabled(!0);const i=this.controller;this.changeHandler&&(i==null||i.removeEventListener("change",this.changeHandler)),this.changeHandler=null,this.controller=null,i==null||i.destroy()},window.addEventListener("silvermind-local-rtc-test-gate",this.gateChangeHandler),!await t.acquire()||e!==this.activationId||!this.container){t.release();return}this.gateAcquired=!0}if(e!==this.activationId||!this.container)return;this.controller=new kt,this.changeHandler=a=>this._renderSnapshot(a.detail),this.controller.addEventListener("change",this.changeHandler),this._bindActions(),this._input("speaker-phrase").value=this.controller.speakerPhrase;const s=this.controller.getSnapshot();this._renderSnapshot(s),s.capabilities.models&&this.controller.refreshModules().catch(()=>{})},_setPanelDisabled(e){var t;(t=this.container)==null||t.querySelectorAll("button, input, textarea, select").forEach(s=>{s.disabled=e})},_bindActions(){const e=(s,a,r)=>{const i=this.container.querySelector(s);i==null||i.addEventListener(a,r),this.cleanupHandlers.push(()=>i==null?void 0:i.removeEventListener(a,r))},t=s=>{s().catch(()=>{})};e('[data-action="initialize"]',"click",()=>t(()=>this.controller.initialize())),e('[data-action="start-kws"]',"click",()=>t(()=>this.controller.startKws())),e('[data-action="stop-kws"]',"click",()=>t(()=>this.controller.stopKws())),e('[data-action="start-asr"]',"click",()=>t(()=>this.controller.startAsr())),e('[data-action="stop-asr"]',"click",()=>this.controller.stopAsr()),e('[data-action="load-speaker"]',"click",()=>t(()=>this.controller.loadSpeaker())),e('[data-action="stop-speaker"]',"click",()=>this.controller.stopSpeaker()),e('[data-action="clear-speakers"]',"click",()=>this.controller.clearSpeakers()),e('[data-action="compare-speakers"]',"click",()=>this.controller.compareSpeakerClips()),e('[data-action="load-tts"]',"click",()=>t(()=>this.controller.loadTts())),e('[data-action="speak"]',"click",()=>t(()=>this.controller.speak(this._input("tts-text").value,{voice:this._input("tts-voice").value,streaming:this._input("tts-streaming").checked,prebufferMs:Number(this._input("tts-prebuffer").value)||0}))),e('[data-action="stop-tts"]',"click",()=>this.controller.stopTts()),e('[data-action="register-clone"]',"click",()=>t(()=>this.controller.registerClone(this._input("clone-name").value))),e('[data-action="remove-clone"]',"click",()=>this.controller.removeVoice(this._input("tts-voice").value)),e('[data-action="preview-clone"]',"click",()=>t(()=>this.controller.previewClone())),e('[data-action="dump-clone"]',"click",()=>t(()=>this.controller.dumpClone())),e('[data-action="clear"]',"click",()=>this.controller.clearOutput()),e('[data-input="speaker-phrase"]',"change",()=>this.controller.setSpeakerPhrase(this._input("speaker-phrase").value)),this.container.querySelectorAll("[data-module-id]").forEach(s=>{const a=s.dataset.moduleId;e(`[data-module-id="${a}"] [data-model-action="download"]`,"click",()=>t(()=>this.controller.downloadModule(a))),e(`[data-module-id="${a}"] [data-model-action="remove"]`,"click",()=>{window.confirm(`确定删除 ${Et(a)} 原生模型资源吗？删除后需要重新下载才能使用。`)&&t(()=>this.controller.removeModule(a))})}),this.container.querySelectorAll("[data-record-action]").forEach(s=>this._bindHoldRecording(s))},_bindHoldRecording(e){let t=null;const s=r=>{var i;r.preventDefault(),t=r.pointerId,(i=e.setPointerCapture)==null||i.call(e,t),e.classList.add("recording"),this.controller.startRecording().catch(()=>e.classList.remove("recording"))},a=async r=>{if(t===null||r.pointerId!==t)return;t=null,e.classList.remove("recording");const i=this.controller.stopRecording();i&&(this._setPlayback(i),await this.controller.processSpeakerClip(e.dataset.recordAction,i,{name:this._input("speaker-name").value,threshold:this._input("speaker-threshold").value}))};e.addEventListener("pointerdown",s),e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),this.cleanupHandlers.push(()=>{e.removeEventListener("pointerdown",s),e.removeEventListener("pointerup",a),e.removeEventListener("pointercancel",a)})},_renderSnapshot(e){var a,r;if(!this.container)return;const t=(i,o)=>{const l=this.container.querySelector(`[data-view="${i}"]`);l&&(l.textContent=o)},s=this.container.querySelector('[data-action="speak"]');s&&s.textContent!=="朗读文字"&&(s.textContent="朗读文字"),t("environment",e.environment),t("sdk-status",e.keepworkSdk.loaded?"已加载 · LocalRTC 可用":"未完整加载"),t("sdk-instance",e.keepworkSdk.instanceReady?"window.keepwork 已就绪":"未创建"),t("sdk-bundle-type",e.keepworkSdk.bundleType),t("sdk-source",e.keepworkSdk.source),t("bridge",e.bridgeAvailable?"已检测到":"未检测到"),t("runtime",e.runtime==="android"?"Android 原生":"浏览器 WASM KWS"),t("rtc-state",e.rtcState),t("sherpa-version",`v${e.sherpaVersion}`),t("base-url",e.baseUrl),t("models-version",((a=Object.values(e.moduleStates).find(i=>{var o;return(o=i.info)==null?void 0:o.version}))==null?void 0:a.info.version)||"等待资源信息"),t("models-base-url",((r=Object.values(e.moduleStates).find(i=>{var o;return(o=i.info)==null?void 0:o.baseUrl}))==null?void 0:r.info.baseUrl)||"由原生资源清单管理"),t("models-status",e.capabilities.models?e.modelsStatus:"仅 Android App 可用"),t("phase",e.phase),t("progress-text",`${Math.round(e.progress||0)}%${e.progressSource?` · ${e.progressSource}`:""}`),this.container.querySelector('[data-view="progress"]').value=e.progress||0,t("last-kws",e.lastKws),t("asr-partial",e.asrPartial),t("asr-results",e.asrResults.length?e.asrResults.join(`
`):"暂无最终结果"),t("asr-status",e.rtcState==="ASR_LISTENING"?"识别中":e.busyByModule.asr?"正在启动":"模型未启动"),t("speaker-runtime",e.speakerRuntime),t("speaker-status",e.speakerReady?`Android 原生已就绪 · ${Object.keys(this.controller.speakerEnrollments).length} 人`:e.busyByModule.speaker?"模型加载中":"模型未加载"),t("speaker-result",e.speakerResult),t("tts-runtime",e.ttsRuntime),t("tts-status",e.ttsSynthesizing?"合成中":e.ttsSpeaking?"播放中":e.ttsReady?"MOSS 已就绪":e.busyByModule.tts?"模型加载中":"模型未加载"),t("tts-synthesis-status",e.ttsSynthesisStatus),t("tts-synthesis-time",e.ttsSynthesisDurationMs===null?"耗时 --":`耗时 ${Math.round(e.ttsSynthesisDurationMs)} ms`),t("tts-playback-status",e.ttsPlaybackStatus),t("tts-playback-time",e.ttsPlaybackDurationMs===null?"耗时 --":`耗时 ${Math.round(e.ttsPlaybackDurationMs)} ms${e.ttsAudioDurationMs===null?"":` · 音频 ${Math.round(e.ttsAudioDurationMs)} ms`}`),t("tts-result",e.ttsResult),t("logs",e.logs.map(i=>`[${i.time}] ${i.message}`).join(`
`)),this.container.querySelectorAll("[data-module-id]").forEach(i=>this._renderModule(i,e.moduleStates[i.dataset.moduleId],e)),this._updateButtons(e),this._updateVoices()},_renderModule(e,t,s){var m,u;const a=e.querySelector('[data-role="status"]'),r=e.querySelector('[data-role="size"]'),i=e.querySelector('[data-role="url"]'),o=e.querySelector('[data-role="progress"]');if(!s.capabilities.models){a.textContent="当前环境不可用";return}if(!t)return;const l=Number(t.totalBytes)||0,d=Number(t.downloadedBytes)||0,c=t.status==="ready"?100:l?d/l*100:0;a.textContent={ready:"已安装并校验通过",downloading:`下载中 ${Math.round(c)}%`,"not-installed":"未安装",error:`失败：${t.error||"未知错误"}`}[t.status]||t.status,r.textContent=t.info?`${N(t.info.size)} / 解压 ${N(t.info.unpackedSize)}`:"--",i.textContent=((m=t.info)==null?void 0:m.downloadUrl)||((u=t.info)==null?void 0:u.url)||"",o.value=c},_updateButtons(e){const t=(r,i)=>{const o=this.container.querySelector(r);o&&(o.disabled=i)},s=e.busyByModule;t('[data-action="initialize"]',s.kws||e.initialized),t('[data-action="start-kws"]',s.kws||!e.initialized||e.rtcState==="KWS_LISTENING"),t('[data-action="stop-kws"]',s.kws||e.rtcState!=="KWS_LISTENING"),t('[data-action="start-asr"]',s.asr||!e.capabilities.androidAsr||e.rtcState==="ASR_LISTENING"),t('[data-action="stop-asr"]',s.asr||e.rtcState!=="ASR_LISTENING"),t('[data-action="load-speaker"]',s.speaker||!e.capabilities.speaker||e.speakerReady),t('[data-action="stop-speaker"]',s.speaker||!e.speakerReady),this.container.querySelectorAll('[data-record-action]:not([data-record-action="clone"])').forEach(r=>{r.disabled=s.speaker||!e.speakerReady}),t('[data-action="compare-speakers"]',s.speaker||!this.controller.speakerClips.a||!this.controller.speakerClips.b),t('[data-action="clear-speakers"]',s.speaker||!e.speakerReady),t('[data-action="load-tts"]',s.tts||!e.capabilities.tts||e.ttsReady),t('[data-action="speak"]',s.tts||!e.ttsReady||e.ttsSynthesizing||e.ttsSpeaking),t('[data-action="stop-tts"]',!e.ttsSynthesizing&&!e.ttsSpeaking),t('[data-record-action="clone"]',s.tts||!e.ttsReady);const a=!this.controller.speakerClips.clone;["register-clone","preview-clone","dump-clone"].forEach(r=>t(`[data-action="${r}"]`,s.tts||!e.ttsReady||a)),t('[data-action="remove-clone"]',s.tts||!e.ttsReady),this.container.querySelectorAll("[data-module-id]").forEach(r=>{const i=e.moduleStates[r.dataset.moduleId],o=!!s[`model:${r.dataset.moduleId}`];r.querySelector('[data-model-action="download"]').disabled=o||!e.capabilities.models||(i==null?void 0:i.status)==="ready"||(i==null?void 0:i.status)==="downloading",r.querySelector('[data-model-action="remove"]').disabled=o||(i==null?void 0:i.status)!=="ready"})},_updateVoices(){const e=this._input("tts-voice"),t=e.value,s=this.controller.getTtsVoices();e.options.length===s.length&&s.every((a,r)=>{var i;return((i=e.options[r])==null?void 0:i.value)===a})||(e.replaceChildren(...s.map(a=>new Option(a,a))),s.includes(t)&&(e.value=t))},_setPlayback(e){const t=this.container.querySelector('[data-view="recording-playback"]');t.dataset.objectUrl&&URL.revokeObjectURL(t.dataset.objectUrl);const s=new ArrayBuffer(44+e.pcm.length*2),a=new DataView(s),r=(o,l)=>[...l].forEach((d,c)=>a.setUint8(o+c,d.charCodeAt(0)));r(0,"RIFF"),a.setUint32(4,36+e.pcm.length*2,!0),r(8,"WAVE"),r(12,"fmt "),a.setUint32(16,16,!0),a.setUint16(20,1,!0),a.setUint16(22,1,!0),a.setUint32(24,e.sampleRate,!0),a.setUint32(28,e.sampleRate*2,!0),a.setUint16(32,2,!0),a.setUint16(34,16,!0),r(36,"data"),a.setUint32(40,e.pcm.length*2,!0),e.pcm.forEach((o,l)=>a.setInt16(44+l*2,Math.max(-1,Math.min(1,o))*(o<0?32768:32767),!0));const i=URL.createObjectURL(new Blob([s],{type:"audio/wav"}));t.dataset.objectUrl=i,t.src=i},_input(e){return this.container.querySelector(`[data-input="${e}"]`)},destroy(){var a,r;this.activationId+=1,this.gateChangeHandler&&window.removeEventListener("silvermind-local-rtc-test-gate",this.gateChangeHandler),this.gateChangeHandler=null,this.cleanupHandlers.forEach(i=>i()),this.cleanupHandlers=[],this.changeHandler&&((a=this.controller)==null||a.removeEventListener("change",this.changeHandler));const e=(r=this.container)==null?void 0:r.querySelector('[data-view="recording-playback"]');e!=null&&e.dataset.objectUrl&&URL.revokeObjectURL(e.dataset.objectUrl);const t=this.controller,s=this.gateAcquired?window.LocalRtcTestGate:null;this.gateAcquired=!1,t==null||t.destroy().finally(()=>s==null?void 0:s.release()),t||s==null||s.release(),this.changeHandler=null,this.controller=null,this.container=null}},Q="silvermindDevOpenUrlHistory",X="silvermindDevOpenUrlLastValue",tt=20,k="https://keepwork.com/api/raw/maisi/maisi/webgames/silvermind/r/v2/index.html?dev=true",I="http://10.177.13.47:3000/?dev=true",H="http://127.0.0.1:3000/?dev=true",z="https://keepwork.com/api/raw/maisi/maisi/published-games-animation-benchmark.html",V="https://keepwork.com/api/raw/maisi/maisi/webgames/silvermind/r/preview/index.html?dev=true";function Rt(e){const t=e.trim();if(!t)throw new Error("请输入网址");const s=/^[a-z][a-z\d+.-]*:\/\//i.test(t)?t:`https://${t}`,a=new URL(s);if(!["http:","https:"].includes(a.protocol))throw new Error("仅支持 HTTP 或 HTTPS 网址");return a.toString()}function At(){try{const e=JSON.parse(localStorage.getItem(Q)||"[]");return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,tt):[]}catch{return[]}}function K(e){localStorage.setItem(Q,JSON.stringify(e.slice(0,tt)))}function $t(){try{return localStorage.getItem(X)||k}catch{return k}}function v(e){try{localStorage.setItem(X,e)}catch{}}const Mt={_content:null,_history:[],render(e){this._content=e,this._history=At(),e.innerHTML=`
			<section class="sm-open-url-panel">
				<div class="sm-dev-settings-content-heading">
					<h2>打开网址</h2>
					<p>在移动端使用全屏 WebView 打开指定网页。</p>
				</div>
				<form class="sm-open-url-form">
					<label for="sm-open-url-input">网址</label>
					<div class="sm-open-url-input-row">
						<input id="sm-open-url-input" type="url" inputmode="url" autocomplete="url" />
						<button type="submit">打开</button>
						<button type="button" class="sm-open-url-main-window">主窗口</button>
					</div>
					<div class="sm-open-url-recommendations">
						<div class="sm-open-url-recommendation"><span>默认网址</span><button type="button" data-recommended-url="${k}">${k}</button></div>
						<div class="sm-open-url-recommendation"><span>本地调试</span><button type="button" data-recommended-url="${I}">${I}</button></div>
						<div class="sm-open-url-recommendation"><span>ADB 调试</span><button type="button" data-recommended-url="${H}">${H}</button></div>
						<div class="sm-open-url-recommendation"><span>动画基准</span><button type="button" data-recommended-url="${z}">${z}</button></div>
						<div class="sm-open-url-recommendation"><span>预览环境</span><button type="button" data-recommended-url="${V}">${V}</button></div>
					</div>
					<p class="sm-open-url-message" role="status"></p>
				</form>
				<div class="sm-open-url-history-section">
					<h3>历史记录</h3>
					<div class="sm-open-url-history"></div>
				</div>
			</section>
		`,e.querySelector(".sm-open-url-form").addEventListener("submit",s=>{s.preventDefault(),this._openCurrentUrl()}),e.querySelector(".sm-open-url-main-window").addEventListener("click",()=>{this._openCurrentUrl(!0)});const t=e.querySelector("#sm-open-url-input");t.value=$t(),t.addEventListener("input",()=>v(t.value)),e.querySelectorAll("[data-recommended-url]").forEach(s=>{s.addEventListener("click",()=>{t.value=s.dataset.recommendedUrl,v(t.value),t.focus()})}),this._renderHistory()},_openCurrentUrl(e=!1){var a,r,i;const t=(a=this._content)==null?void 0:a.querySelector("#sm-open-url-input"),s=(r=this._content)==null?void 0:r.querySelector(".sm-open-url-message");if(!(!t||!s))try{const o=Rt(t.value);if(!((i=window.ReactNativeWebView)!=null&&i.postMessage))throw new Error("此功能仅支持忆启时光移动端");this._history=[o,...this._history.filter(l=>l!==o)],t.value=o,v(o),K(this._history),this._renderHistory(),s.textContent="",window.ReactNativeWebView.postMessage(JSON.stringify({type:e?"navigateMainWebView":"openWebView",url:o,title:"网页"}))}catch(o){s.textContent=o instanceof Error?o.message:"网址无效"}},_renderHistory(){var t;const e=(t=this._content)==null?void 0:t.querySelector(".sm-open-url-history");if(e){if(e.replaceChildren(),this._history.length===0){const s=document.createElement("p");s.className="sm-open-url-empty",s.textContent="暂无历史记录",e.appendChild(s);return}this._history.forEach(s=>{const a=document.createElement("div");a.className="sm-open-url-history-row";const r=document.createElement("button");r.type="button",r.className="sm-open-url-history-reuse",r.textContent=s,r.title=s,r.addEventListener("click",()=>{var l;const o=(l=this._content)==null?void 0:l.querySelector("#sm-open-url-input");o&&(o.value=s,v(s),o.focus())});const i=document.createElement("button");i.type="button",i.className="sm-open-url-history-delete",i.textContent="删除",i.setAttribute("aria-label",`删除 ${s}`),i.addEventListener("click",()=>{this._history=this._history.filter(o=>o!==s),K(this._history),this._renderHistory()}),a.append(r,i),e.appendChild(a)})}},destroy(){this._content=null}},A=[{id:"open-url",label:"打开网址",panel:Mt},{id:"android-permissions",label:"Android 权限测试",panel:bt},{id:"local-rtc-test-unit",label:"LocalRTC 测试单元",panel:Ct},{id:"next",label:"下一个测试面板",panel:ht}],Lt=`
.sm-dev-settings-mask {
	position: fixed;
	inset: 0;
	z-index: 2147483601;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: clamp(1.6rem, 4vw, 4.8rem);
	background: rgba(15, 23, 42, 0.42);
}
.sm-dev-settings-dialog {
	width: min(112rem, 100%);
	height: min(76rem, calc(100vh - clamp(3.2rem, 8vw, 9.6rem)));
	min-height: 34rem;
	display: grid;
	grid-template-rows: auto minmax(0, 1fr);
	overflow: hidden;
	border: 0.1rem solid #dfe4ea;
	border-radius: 1.2rem;
	background: #fff;
	color: #172033;
	box-shadow: 0 2.4rem 7rem rgba(15, 23, 42, 0.25);
	font-family: "Microsoft YaHei", sans-serif;
}
.sm-dev-settings-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 6.4rem;
	padding: 0 2.4rem;
	border-bottom: 0.1rem solid #e8ebef;
}
.sm-dev-settings-title { margin: 0; font-size: 2.4rem; font-weight: 700; letter-spacing: 0; }
.sm-dev-settings-close {
	width: 4rem;
	height: 4rem;
	border: 0;
	border-radius: 0.6rem;
	background: transparent;
	color: #667085;
	font-size: 2.8rem;
	line-height: 1;
	cursor: pointer;
}
.sm-dev-settings-close:hover { background: #f2f4f7; color: #172033; }
.sm-dev-settings-layout { min-height: 0; display: grid; grid-template-columns: 26rem minmax(0, 1fr); }
.sm-dev-settings-nav { padding: 1.6rem; border-right: 0.1rem solid #e8ebef; background: #f7f8fa; }
.sm-dev-settings-nav-button {
	width: 100%;
	min-height: 5.2rem;
	margin-bottom: 0.8rem;
	padding: 1.2rem 1.6rem;
	border: 0;
	border-radius: 0.6rem;
	background: transparent;
	color: #475467;
	font-size: 1.7rem;
	font-weight: 600;
	text-align: left;
	cursor: pointer;
}
.sm-dev-settings-nav-button:hover { background: #eceff3; }
.sm-dev-settings-nav-button.is-active { background: #e2e8f0; color: #175cd3; }
.sm-dev-settings-content { min-width: 0; overflow: auto; padding: 2.4rem 3rem 3rem; background: #fff; }
.sm-dev-settings-content-heading { margin-bottom: 2rem; }
.sm-dev-settings-content-heading h2, .sm-dev-settings-empty-panel h2 { margin: 0; font-size: 2.2rem; letter-spacing: 0; }
.sm-dev-settings-content-heading p { margin: 0.6rem 0 0; color: #667085; font-size: 1.4rem; }
.sm-dev-settings-empty-panel { min-height: 20rem; }
.sm-open-url-form { padding: 2rem; border: 0.1rem solid #e4e7ec; background: #f9fafb; }
.sm-open-url-form label, .sm-open-url-history-section h3 { display: block; margin: 0 0 1rem; font-size: 1.6rem; font-weight: 600; }
.sm-open-url-input-row { display: grid; grid-template-columns: minmax(0, 1fr) auto auto; gap: 1rem; }
.sm-open-url-input-row input { min-width: 0; height: 4.6rem; padding: 0 1.3rem; border: 0.1rem solid #cfd4dc; border-radius: 0.6rem; font-size: 1.5rem; }
.sm-open-url-input-row button { min-width: 9rem; border: 0; border-radius: 0.6rem; background: #175cd3; color: #fff; font-size: 1.5rem; font-weight: 600; cursor: pointer; }
.sm-open-url-recommendations { display: grid; gap: .6rem; margin-top: 1rem; }
.sm-open-url-recommendation { display: grid; grid-template-columns: 7rem minmax(0, 1fr); align-items: center; gap: 1rem; color: #667085; font-size: 1.3rem; }
.sm-open-url-recommendation button { min-width: 0; padding: 0; overflow: hidden; border: 0; background: transparent; color: #175cd3; font: inherit; text-align: left; text-overflow: ellipsis; white-space: nowrap; cursor: pointer; }
.sm-open-url-recommendation button:hover { text-decoration: underline; }
.sm-open-url-message { min-height: 2rem; margin: 0.8rem 0 0; color: #b42318; font-size: 1.3rem; }
.sm-open-url-history-section { margin-top: 2.4rem; }
.sm-open-url-history-row { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 1rem; align-items: center; min-height: 4.8rem; padding: 0.6rem 0; border-bottom: 0.1rem solid #eaecf0; }
.sm-open-url-history-reuse { min-width: 0; overflow: hidden; border: 0; background: transparent; color: #175cd3; font-size: 1.4rem; text-align: left; text-overflow: ellipsis; white-space: nowrap; cursor: pointer; }
.sm-open-url-history-delete { border: 0; background: transparent; color: #b42318; font-size: 1.3rem; cursor: pointer; }
.sm-open-url-empty { color: #667085; font-size: 1.4rem; }
@media (max-width: 720px) {
	.sm-dev-settings-mask { padding: 1.2rem; }
	.sm-dev-settings-dialog { height: calc(100vh - 2.4rem); }
	.sm-dev-settings-layout { grid-template-columns: 18rem minmax(0, 1fr); }
	.sm-dev-settings-nav { padding: 1rem; }
	.sm-dev-settings-nav-button { padding: 1rem; font-size: 1.4rem; }
	.sm-dev-settings-content { padding: 1.8rem; }
	.sm-open-url-input-row { grid-template-columns: 1fr; }
	.sm-open-url-input-row button { height: 4.6rem; }
}
`;let j=!1;function Tt(){if(j)return;const e=document.createElement("style");e.id="sm-dev-settings-styles",e.textContent=Lt,document.head.appendChild(e),j=!0}const xt={_mask:null,_activePanel:null,_keydownHandler:null,open(){if(this._mask)return;Tt();const e=document.createElement("div");e.className="sm-dev-settings-mask",e.innerHTML=`
			<section class="sm-dev-settings-dialog" role="dialog" aria-modal="true" aria-labelledby="sm-dev-settings-title">
				<header class="sm-dev-settings-header">
					<h1 class="sm-dev-settings-title" id="sm-dev-settings-title">综合测试面板</h1>
					<button class="sm-dev-settings-close" type="button" title="关闭" aria-label="关闭">&times;</button>
				</header>
				<div class="sm-dev-settings-layout">
					<nav class="sm-dev-settings-nav" aria-label="测试面板功能"></nav>
					<main class="sm-dev-settings-content"></main>
				</div>
			</section>
		`,e.addEventListener("click",s=>{s.target===e&&this.close()}),e.querySelector(".sm-dev-settings-close").addEventListener("click",()=>this.close());const t=e.querySelector(".sm-dev-settings-nav");A.forEach(({id:s,label:a})=>{const r=document.createElement("button");r.type="button",r.className="sm-dev-settings-nav-button",r.dataset.panelId=s,r.textContent=a,r.addEventListener("click",()=>this._selectPanel(s)),t.appendChild(r)}),this._keydownHandler=s=>{s.key==="Escape"&&this.close()},document.addEventListener("keydown",this._keydownHandler),document.body.appendChild(e),this._mask=e,this._selectPanel(A[0].id)},_selectPanel(e){var s,a;const t=A.find(r=>r.id===e);!t||!this._mask||((a=(s=this._activePanel)==null?void 0:s.destroy)==null||a.call(s),this._activePanel=t.panel,this._mask.querySelectorAll(".sm-dev-settings-nav-button").forEach(r=>{r.classList.toggle("is-active",r.dataset.panelId===e)}),t.panel.render(this._mask.querySelector(".sm-dev-settings-content")))},close(){var e,t,s;(t=(e=this._activePanel)==null?void 0:e.destroy)==null||t.call(e),this._activePanel=null,this._keydownHandler&&document.removeEventListener("keydown",this._keydownHandler),this._keydownHandler=null,(s=this._mask)==null||s.remove(),this._mask=null}},n={barEl:null,panelEl:null,mountContainer:null,mounted:!1,displayName:"",username:"",phone:"",email:"",portrait:"",isVip:!1,isSvip:!1,vipExpiration:"",svipExpiration:"",panelVisible:!1,activating:!1};function Pt(){const e=pt.getLatestLaunchMessage();return JSON.stringify(e,null,2)}const W=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M25.3333 28V25.3333C25.3333 23.9188 24.7714 22.5623 23.7712 21.5621C22.771 20.5619 21.4145 20 20 20H12C10.5855 20 9.22896 20.5619 8.22876 21.5621C7.22857 22.5623 6.66667 23.9188 6.66667 25.3333V28" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 14.6667C18.9455 14.6667 21.3333 12.2789 21.3333 9.33333C21.3333 6.38781 18.9455 4 16 4C13.0545 4 10.6667 6.38781 10.6667 9.33333C10.6667 12.2789 13.0545 14.6667 16 14.6667Z" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,Ut=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.9 6.1a5.6 5.6 0 0 0-7.1 7.1L4.7 20.3a2.4 2.4 0 0 0 0 3.4l3.6 3.6a2.4 2.4 0 0 0 3.4 0l7.1-7.1a5.6 5.6 0 0 0 7.1-7.1l-3.6 3.6-3.2-3.2 3.6-3.4a5.5 5.5 0 0 0-3.8-1.5Z" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="m9.8 22.2 1.3 1.3" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
</svg>`,Dt=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 5.5h14a2 2 0 0 1 2 2v19H7v-19a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M12 4h8v4h-8V4Z" fill="white" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="m11 15 2 2 4-4M11 22h10" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,Ot=`
/* ── 设计画布右上角容器 ── */
.sm-auth-bar {
  position: absolute;
  top: 2.6rem;
  right: 4.8rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

/* ── 图标按钮（登录 / 已登录共用） ── */
.sm-auth-icon-btn {
  width: 6rem;
  height: 6rem;
  border-radius: 1.6rem;
  border: 0.3rem solid #fff;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0.4rem 0.6rem -0.1rem rgba(0, 0, 0, 0.1), 0 0.2rem 0.4rem -0.2rem rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: box-shadow 0.2s, background 0.2s;
}
.sm-auth-icon-btn svg {
  width: 3.2rem;
  height: 3.2rem;
}
/* 已登录：蓝色图标 */
.sm-auth-icon-btn--active {
  color: #5B8FF9;
}
/* 未登录：灰色图标 */
.sm-auth-icon-btn--inactive {
  color: #C0C4CC;
}
.sm-auth-icon-btn--debug {
  color: #e67e22;
}
.sm-auth-icon-btn--test-panel {
  color: #0f9f8f;
}

/* ── 弹出面板 ── */
.sm-auth-panel-mask {
  position: fixed;
  inset: 0;
  z-index: 10001;
  background: rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: smAuthFadeIn 0.2s ease;
}
.sm-auth-panel {
  background: #fff;
  border-radius: 1.6rem;
  width: min(64rem, 92vw);
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 0.4rem 2.4rem rgba(0,0,0,0.15);
  color: #333;
  animation: smAuthSlideUp 0.25s ease;
}
.sm-auth-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 3.2rem 1.6rem;
  border-bottom: 1px solid #eee;
}
.sm-auth-panel-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #1a1a2e;
}
.sm-auth-panel-close {
  background: none;
  border: none;
  color: #999;
  font-size: 3rem;
  cursor: pointer;
  padding: 0.4rem;
  line-height: 1;
}
.sm-auth-panel-close:hover { color: #333; }

.sm-auth-panel-body {
  padding: 2rem 3.2rem 3.2rem;
}

/* 信息行 */
.sm-auth-info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 2rem;
}
.sm-auth-info-label {
  color: #999;
  flex-shrink: 0;
}
.sm-auth-info-value {
  color: #333;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sm-auth-debug-section {
  margin-top: 2.4rem;
  padding: 2rem;
  border: 0.1rem solid #dbeafe;
  border-radius: 1.4rem;
  background: #f8fbff;
}
.sm-auth-debug-section-title {
  color: #1a1a2e;
  font-size: 2rem;
  font-weight: 700;
}
.sm-auth-debug-section-description {
  margin-top: 0.8rem;
  color: #64748b;
  font-size: 1.6rem;
  line-height: 1.6;
}
.sm-auth-debug-action {
  width: 100%;
  margin-top: 1.6rem;
}

.sm-auth-debug-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.sm-auth-debug-item {
  overflow: hidden;
  border: 0.1rem solid #e5e7eb;
  border-radius: 1.2rem;
  background: #fff;
}
.sm-auth-debug-item-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  padding: 1.8rem 2rem;
  border: 0;
  background: #fff;
  color: #333;
  font-size: 2rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
}
.sm-auth-debug-item-trigger::after {
  content: '+';
  color: #9ca3af;
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 1;
}
.sm-auth-debug-item-trigger[aria-expanded='true']::after {
  content: '−';
}
.sm-auth-debug-item-detail {
  max-height: 40rem;
  padding: 0 2rem 2rem;
  opacity: 1;
  transition: max-height 0.25s ease, padding 0.25s ease, opacity 0.2s ease;
}
.sm-auth-debug-item-detail[aria-hidden='true'] {
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  opacity: 0;
  pointer-events: none;
}

/* VIP 标签 */
.sm-auth-vip-badge {
  display: inline-block;
  padding: 0.4rem 1.2rem;
  border-radius: 1.2rem;
  font-size: 1.6rem;
  font-weight: 600;
}
.sm-auth-vip-badge--vip {
  background: linear-gradient(135deg, #f6d365, #fda085);
  color: #7a4e1d;
}
.sm-auth-vip-badge--svip {
  background: linear-gradient(135deg, #a18cd1, #fbc2eb);
  color: #4a2d6e;
}
.sm-auth-vip-badge--free {
  background: #f5f5f5;
  color: #999;
}

/* 分区标题 */
.sm-auth-section-title {
  font-size: 2rem;
  font-weight: 600;
  color: #666;
  margin: 2.4rem 0 1.2rem;
}

/* 输入行 */
.sm-auth-input-row {
  display: flex;
  gap: 1.2rem;
  align-items: center;
}
.sm-auth-input {
  flex: 1;
  padding: 1.2rem 1.6rem;
  border: 1px solid #ddd;
  border-radius: 1rem;
  background: #fff;
  color: #333;
  font-size: 2rem;
  outline: none;
  transition: border-color 0.2s;
}
.sm-auth-input:focus {
  border-color: #409eff;
}
.sm-auth-input::placeholder {
  color: #bbb;
}

/* 通用按钮 */
.sm-auth-btn {
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  white-space: nowrap;
}
.sm-auth-btn:hover { opacity: 0.85; }
.sm-auth-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.sm-auth-btn--primary {
  background: #409eff;
  color: #fff;
}
.sm-auth-btn--danger {
  background: #fef0f0;
  color: #f56c6c;
  margin-top: 1.6rem;
  width: 100%;
}
.sm-auth-btn--danger:hover {
  background: #fde2e2;
}

/* 提示/错误 */
.sm-auth-msg {
  font-size: 1.6rem;
  margin-top: 0.8rem;
  min-height: 2rem;
}
.sm-auth-msg--ok { color: #67c23a; }
.sm-auth-msg--err { color: #f56c6c; }
.sm-auth-launcher-message {
  max-height: 9rem;
  overflow: auto;
  margin: 1.2rem 0 0;
  padding: 1rem 1.2rem;
  border-radius: 0.8rem;
  background: #f5f7fa;
  color: #606266;
  font-size: 1.3rem;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
}

/* ── 动画 ── */
@keyframes smAuthFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes smAuthSlideUp {
  from { opacity: 0; transform: translateY(1.2rem); }
  to { opacity: 1; transform: translateY(0); }
}
`;function Bt(e){return!e||e.length<7?e||"":e.slice(0,3)+"****"+e.slice(-4)}function F(e){if(!e)return"";const t=e instanceof Date?e:new Date(e);if(isNaN(t.getTime()))return String(e);const s=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${s}-${a}-${r}`}let G=!1;function qt(){if(G)return;const e=document.createElement("style");e.textContent=Ot,document.head.appendChild(e),G=!0}function Nt(e,t){return!!(e&&e.isConnected&&e.parentNode===t)}function Y(){return n.mountContainer}function f(...e){for(const t of e)if(typeof t=="string"&&t.trim())return t.trim();return""}function It(){return window.__silvermindWxAuthResult||null}function J(e=null){var o;const t=It(),s=((o=window.keepwork)==null?void 0:o.user)||null,a=e||s||{},r=f(a==null?void 0:a.nickname,a==null?void 0:a.username,t==null?void 0:t.nickname,t==null?void 0:t.username,t==null?void 0:t.name),i=f(a==null?void 0:a.username,t==null?void 0:t.username,t==null?void 0:t.name);return{displayName:r,username:i,phone:f(a==null?void 0:a.cellphone,a==null?void 0:a.phone,t==null?void 0:t.cellphone,t==null?void 0:t.phone,t==null?void 0:t.mobile),email:f(a==null?void 0:a.email,t==null?void 0:t.email),portrait:f(a==null?void 0:a.portrait,a==null?void 0:a.avatarUrl,t==null?void 0:t.portrait,t==null?void 0:t.avatarUrl,t==null?void 0:t.headimgurl)}}function $(e={}){n.displayName=e.displayName||"",n.username=e.username||"",n.phone=e.phone||"",n.email=e.email||"",n.portrait=e.portrait||""}function y(){$({})}function Ht(){return n.displayName&&n.username&&n.displayName!==n.username?`${n.displayName} (${n.username})`:n.displayName||n.username||""}function zt(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Vt(){var e;return lt.capabilities.developerTools&&((e=window.keepwork)==null?void 0:e.token)}function Kt(e){return{male:"男",female:"女",other:"保密",男:"男",女:"女",保密:"保密"}[e]||"未选择"}function jt(e={}){return[["姓名",e.name||"未填写"],["年龄",e.age?`${e.age} 岁`:"未填写"],["性别",Kt(e.gender)],["学历/教育",e.education||"未选择"]].map(([s,a])=>`
    <div class="sm-auth-info-row">
      <span class="sm-auth-info-label">${s}</span>
      <span class="sm-auth-info-value">${zt(a)}</span>
    </div>
  `).join("")}const w={mount(e){var s;if(!(e instanceof HTMLElement))return!1;if(qt(),Nt(n.barEl,e))return n.mounted=!0,!0;(s=n.barEl)!=null&&s.parentNode&&n.barEl.parentNode.removeChild(n.barEl);const t=document.createElement("div");return t.className="sm-auth-bar",t.id="sm-auth-bar",t.style.display="none",e.appendChild(t),n.barEl=t,n.mountContainer=e,n.mounted=!0,this._refreshLoginState(),!0},destroy(){var e,t;(e=n.barEl)!=null&&e.parentNode&&n.barEl.parentNode.removeChild(n.barEl),(t=n.panelEl)!=null&&t.parentNode&&n.panelEl.parentNode.removeChild(n.panelEl),n.barEl=null,n.panelEl=null,n.mountContainer=null,n.mounted=!1,n.panelVisible=!1},show(e){var t;this.mount(e)&&(n.barEl&&(n.barEl.style.display=""),(t=window.keepwork)!=null&&t.token?this._renderLoggedIn():this._renderLoggedOut())},async refresh(){await this._refreshLoginState()},hide(){n.barEl&&(n.barEl.style.display="none"),this._hidePanel()},async _refreshLoginState(){const e=window.keepwork;if(!e){this._renderLoggedOut();return}if(e.token)try{const t=await e.getUserProfile({forceRefresh:!1});t?($(J(t)),this._renderLoggedIn()):(y(),this._renderLoggedOut())}catch{e.setToken(null),y(),this._renderLoggedOut()}else y(),this._renderLoggedOut()},_renderLoggedOut(){n.barEl&&(n.barEl.innerHTML=`
      <button class="sm-auth-icon-btn sm-auth-icon-btn--inactive" id="sm-auth-login-trigger"
              title="登录">${W}</button>
    `,n.barEl.querySelector("#sm-auth-login-trigger").addEventListener("click",()=>this._doLogin()))},_renderLoggedIn(){var a,r;if(!n.barEl)return;const e=Vt(),t=e?`<button class="sm-auth-icon-btn sm-auth-icon-btn--test-panel" id="sm-auth-dev-settings-trigger"
              title="综合测试面板">${Dt}</button>`:"",s=e?`<button class="sm-auth-icon-btn sm-auth-icon-btn--debug" id="sm-auth-developer-debug-trigger"
              title="开发者调试">${Ut}</button>`:"";n.barEl.innerHTML=`
      ${t}
      ${s}
      <button class="sm-auth-icon-btn sm-auth-icon-btn--active" id="sm-auth-user-trigger"
              title="个人信息">${W}</button>
    `,(a=n.barEl.querySelector("#sm-auth-dev-settings-trigger"))==null||a.addEventListener("click",()=>xt.open()),(r=n.barEl.querySelector("#sm-auth-developer-debug-trigger"))==null||r.addEventListener("click",()=>this._showDeveloperDebugPanel()),n.barEl.querySelector("#sm-auth-user-trigger").addEventListener("click",()=>this._showPanel())},async _doLogin(){const{App:e}=await p(async()=>{const{App:t}=await import("./app-C8gTfAaU.js").then(s=>s.a);return{App:t}},__vite__mapDeps([0,1,2,3,4]),import.meta.url);await e.beginLogin(),await this._refreshLoginState()},async _showPanel(){var l;if(n.panelVisible)return;n.panelVisible=!0;const e=window.keepwork;try{n.isVip=await e.isUserVip(),n.isSvip=await e.isUserSvip(),n.vipExpiration=await e.getUserVipExpiration()||"",n.svipExpiration=await e.getUserSvipExpiration()||""}catch{}try{const d=await e.getUserProfile({forceRefresh:!0});$(J(d))}catch{}const t=document.createElement("div");t.className="sm-auth-panel-mask",t.id="sm-auth-panel-mask";const s=n.isSvip?'<span class="sm-auth-vip-badge sm-auth-vip-badge--svip">SVIP</span>':n.isVip?'<span class="sm-auth-vip-badge sm-auth-vip-badge--vip">VIP</span>':'<span class="sm-auth-vip-badge sm-auth-vip-badge--free">非会员</span>',a=n.isSvip?F(n.svipExpiration)||"—":n.isVip?F(n.vipExpiration)||"—":"",r=!n.isVip&&!n.isSvip;t.innerHTML=`
      <div class="sm-auth-panel" id="sm-auth-panel">
        <div class="sm-auth-panel-header">
          <span class="sm-auth-panel-title">个人信息</span>
          <button class="sm-auth-panel-close" id="sm-auth-panel-close">&times;</button>
        </div>
        <div class="sm-auth-panel-body">
          <!-- 基本信息 -->
          <div class="sm-auth-info-row">
            <span class="sm-auth-info-label">用户名</span>
            <span class="sm-auth-info-value">${Ht()||"—"}</span>
          </div>
          <div class="sm-auth-info-row">
            <span class="sm-auth-info-label">手机号</span>
            <span class="sm-auth-info-value">${Bt(n.phone)||"未绑定"}</span>
          </div>
          <div class="sm-auth-info-row">
            <span class="sm-auth-info-label">邮箱</span>
            <span class="sm-auth-info-value">${n.email||"未绑定"}</span>
          </div>

          <!-- 会员状态 -->
          <div class="sm-auth-info-row">
            <span class="sm-auth-info-label">会员状态</span>
            <span class="sm-auth-info-value">${s}</span>
          </div>
          ${a?`
          <div class="sm-auth-info-row">
            <span class="sm-auth-info-label">到期时间</span>
            <span class="sm-auth-info-value">${a}</span>
          </div>`:""}

          ${r?`
          <!-- 激活码 -->
          <div class="sm-auth-section-title">激活码</div>
          <div class="sm-auth-input-row">
            <input class="sm-auth-input" id="sm-auth-activate-input" type="text" placeholder="请输入激活码" autocomplete="off" />
            <button class="sm-auth-btn sm-auth-btn--primary" id="sm-auth-activate-btn">激活</button>
          </div>
          <div class="sm-auth-msg" id="sm-auth-activate-msg"></div>`:""}

          ${ot?`
          <div class="sm-auth-section-title">Launcher 消息</div>
          <pre class="sm-auth-launcher-message" id="sm-auth-launcher-message"></pre>`:""}

          <!-- 退出登录 -->
          <button class="sm-auth-btn sm-auth-btn--danger" id="sm-auth-logout-btn">退出登录</button>
        </div>
      </div>
    `,(l=Y())==null||l.appendChild(t),n.panelEl=t,t.querySelector("#sm-auth-panel-close").addEventListener("click",()=>this._hidePanel()),t.addEventListener("click",d=>{d.target===t&&this._hidePanel()});const i=t.querySelector("#sm-auth-activate-btn");i&&i.addEventListener("click",()=>this._activateCode());const o=t.querySelector("#sm-auth-launcher-message");o&&(o.textContent=Pt()),t.querySelector("#sm-auth-logout-btn").addEventListener("click",()=>this._doLogout())},async _showDeveloperDebugPanel(){var t;if(n.panelVisible)return;n.panelVisible=!0;const e=document.createElement("div");e.className="sm-auth-panel-mask",e.id="sm-auth-panel-mask",e.innerHTML=`
      <div class="sm-auth-panel" id="sm-auth-panel">
        <div class="sm-auth-panel-header">
          <span class="sm-auth-panel-title">开发者调试</span>
          <button class="sm-auth-panel-close" id="sm-auth-panel-close" aria-label="关闭">&times;</button>
        </div>
        <div class="sm-auth-panel-body" id="sm-auth-developer-debug-body">
          <div class="sm-auth-debug-list">
            <div class="sm-auth-debug-item">
              <button class="sm-auth-debug-item-trigger" type="button" aria-expanded="false" aria-controls="sm-auth-profile-debug-detail">
                已采集档案
              </button>
              <div class="sm-auth-debug-item-detail" id="sm-auth-profile-debug-detail" aria-hidden="true">
                <div class="sm-auth-info-row"><span class="sm-auth-info-label">读取状态</span><span class="sm-auth-info-value">加载中</span></div>
              </div>
            </div>
            <div class="sm-auth-debug-item">
              <button class="sm-auth-debug-item-trigger" type="button" aria-expanded="false" aria-controls="sm-auth-business-flow-debug-detail">
                业务动线测试
              </button>
              <div class="sm-auth-debug-item-detail" id="sm-auth-business-flow-debug-detail" aria-hidden="true">
                <div class="sm-auth-debug-section-description">
                  从第一步重新播放无数字人业务引导。本次调试仅修改内存状态，不会覆盖云端记录。
                </div>
                <button class="sm-auth-btn sm-auth-btn--primary sm-auth-debug-action"
                        id="sm-auth-replay-business-flow" type="button">
                  从头重播新手引导
                </button>
              </div>
            </div>
            <div class="sm-auth-debug-item">
              <button class="sm-auth-debug-item-trigger" type="button" aria-expanded="false" aria-controls="sm-auth-daily-overview-debug-detail">
                每日推荐总览卡
              </button>
              <div class="sm-auth-debug-item-detail" id="sm-auth-daily-overview-debug-detail" aria-hidden="true">
                <div class="sm-auth-debug-section-description">
                  清除已展示记录，下次进入每日推荐时重新显示总览卡。
                </div>
                <button class="sm-auth-btn sm-auth-btn--primary sm-auth-debug-action"
                        id="sm-auth-clear-daily-overview" type="button">
                  清除总览卡展示记录
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,(t=Y())==null||t.appendChild(e),n.panelEl=e,e.querySelectorAll(".sm-auth-debug-item-trigger").forEach(s=>{s.addEventListener("click",()=>{const a=e.querySelector(`#${s.getAttribute("aria-controls")}`);if(!a)return;const r=s.getAttribute("aria-expanded")==="true";e.querySelectorAll(".sm-auth-debug-item-trigger").forEach(i=>{i!==s&&i.setAttribute("aria-expanded","false")}),e.querySelectorAll(".sm-auth-debug-item-detail").forEach(i=>{i!==a&&i.setAttribute("aria-hidden","true")}),s.setAttribute("aria-expanded",String(!r)),a.setAttribute("aria-hidden",String(r))})}),e.querySelector("#sm-auth-panel-close").addEventListener("click",()=>this._hidePanel()),e.addEventListener("click",s=>{s.target===e&&this._hidePanel()});try{const{KeepworkStorage:s}=await p(async()=>{const{KeepworkStorage:i}=await import("./assessment-mJmy6gOP.js").then(o=>o.aY);return{KeepworkStorage:i}},__vite__mapDeps([1,2,3]),import.meta.url),a=await s.loadRootProfile(),r=e.querySelector("#sm-auth-profile-debug-detail");r&&n.panelEl===e&&(r.innerHTML=jt(a),this._bindDeveloperDebugActions(e))}catch(s){const a=e.querySelector("#sm-auth-profile-debug-detail");a&&n.panelEl===e&&(a.innerHTML=`
          <div class="sm-auth-info-row">
            <span class="sm-auth-info-label">读取状态</span>
            <span class="sm-auth-info-value">读取失败</span>
          </div>
        `,this._bindDeveloperDebugActions(e)),console.warn("[AuthBar] 读取账号主档失败:",s)}},_bindDeveloperDebugActions(e){const t=e.querySelector("#sm-auth-replay-business-flow");t==null||t.addEventListener("click",async()=>{var a,r,i,o;if(!t.disabled){t.disabled=!0,t.textContent="正在重置…";try{const{BusinessFlowController:l}=await p(async()=>{const{BusinessFlowController:c}=await import("./controller-BzOXqHts.js").then(m=>m.c);return{BusinessFlowController:c}},__vite__mapDeps([5,4,1,2,3,6,7,8,9,0,10]),import.meta.url);this._hidePanel(),await l.replayOnboardingForDevelopment()||(r=(a=window.Utils)==null?void 0:a.showToast)==null||r.call(a,"该功能仅在本地开发模式可用")}catch(l){t.disabled=!1,t.textContent="从头重播新手引导",(o=(i=window.Utils)==null?void 0:i.showToast)==null||o.call(i,"重播失败，请稍后重试"),console.warn("[AuthBar] 重播业务动线失败:",l)}}});const s=e.querySelector("#sm-auth-clear-daily-overview");s==null||s.addEventListener("click",async()=>{var a,r,i,o;if(!s.disabled){s.disabled=!0;try{await ut.clear(),s.textContent="已清除",(r=(a=window.Utils)==null?void 0:a.showToast)==null||r.call(a,"已清除每日推荐总览卡展示记录")}catch(l){s.disabled=!1,(o=(i=window.Utils)==null?void 0:i.showToast)==null||o.call(i,"清除失败，请稍后重试"),console.warn("[AuthBar] 清除每日推荐总览卡记录失败:",l)}}})},_hidePanel(){var e;(e=n.panelEl)!=null&&e.parentNode&&n.panelEl.parentNode.removeChild(n.panelEl),n.panelEl=null,n.panelVisible=!1},async _activateCode(){var i;if(n.activating)return;const e=window.keepwork,t=document.getElementById("sm-auth-activate-input"),s=document.getElementById("sm-auth-activate-msg"),a=((t==null?void 0:t.value)||"").replace(/[^a-zA-Z0-9]/g,"");if(!a){s&&(s.textContent="请输入激活码",s.className="sm-auth-msg sm-auth-msg--err");return}n.activating=!0;const r=document.getElementById("sm-auth-activate-btn");r&&(r.disabled=!0,r.textContent="激活中…");try{const o=window.location.hostname||"keepwork.com",d=`https://api.${e.extractMainDomain(o)}`,m=await(((i=e.fetchWithAuth)==null?void 0:i.bind(e))||fetch)(`${d}/core/v0/activateCodes/activate`,{method:"POST",headers:{"Content-Type":"application/json",...e.getAuthHeaders()},body:JSON.stringify({key:a})},{source:"silvermind.activateCode"});if(!m.ok){const rt=await m.text(),x=new Error(`HTTP ${m.status}: ${rt}`);throw x.status=m.status,x}const u=await m.json(),at=u&&u.role&&u.role.zhName?`${u.role.zhName} 激活成功！`:"激活成功！";s&&(s.textContent=at,s.className="sm-auth-msg sm-auth-msg--ok"),t&&(t.value="");try{n.isVip=await e.isUserVip({forceRefresh:!0}),n.isSvip=await e.isUserSvip({forceRefresh:!0})}catch{}this._hidePanel(),await this._showPanel()}catch(o){let l="激活失败";if(o.message){const d=o.message.match(/HTTP \d+:\s*(\{.*\})/);if(d)try{l=JSON.parse(d[1]).message||l}catch{}else l=o.message}s&&(s.textContent=l,s.className="sm-auth-msg sm-auth-msg--err")}finally{n.activating=!1,r&&(r.disabled=!1,r.textContent="激活")}},async _doLogout(){const e=window.keepwork;try{const{CharacterAIIframePage:t}=await p(async()=>{const{CharacterAIIframePage:s}=await import("./character-ai-iframe-BrqXIuNV.js").then(a=>a.c);return{CharacterAIIframePage:s}},__vite__mapDeps([8,1,2,3,9,0,4]),import.meta.url);t.isVoiceChatActive()&&await t.stopVoiceChat()}catch{}try{await e.logout()}catch{}window.__silvermindWxAuthResult=null,y(),n.isVip=!1,n.isSvip=!1,n.vipExpiration="",n.svipExpiration="";try{const{KeepworkStorage:t}=await p(async()=>{const{KeepworkStorage:s}=await import("./assessment-mJmy6gOP.js").then(a=>a.aY);return{KeepworkStorage:s}},__vite__mapDeps([1,2,3]),import.meta.url);t.clearCache()}catch{}try{const{BusinessFlowStore:t}=await p(async()=>{const{BusinessFlowStore:s}=await import("./state-store-Dvo1jwmm.js");return{BusinessFlowStore:s}},__vite__mapDeps([4,1,2,3]),import.meta.url);t.resetForAuthChange()}catch{}this._hidePanel(),this._renderLoggedOut();try{const{App:t}=await p(async()=>{const{App:s}=await import("./app-C8gTfAaU.js").then(a=>a.a);return{App:s}},__vite__mapDeps([0,1,2,3,4]),import.meta.url);await t.navigateWithControl("login-gateway",{},{clearHistory:!0,reason:"logout"})}catch{}}},Wt="https://cdn.keepwork.com/silvermind/games/shared/assets/background.png",M={id:"full",title:"认知能力筛查",subtitle:"专业脑健康检测",aiHint:"进入完整版认知能力筛查流程。这是专业脑健康检测，不是训练小游戏，也不是3分钟自测；会进入正式测评与个人信息流程。",iconBg:"#00bcff",iconSrc:h(g.splashFull),action:"navigateFull"},et={id:"quick",title:"脑健康评估",subtitle:"3分钟游戏化自测",aiHint:"进入3分钟游戏化脑健康自测。这是简版快速评估，不是健脑训练目录，也不是完整版专业筛查。",iconBg:"#ff8904",iconSrc:h(g.splashQuick),action:"navigateSimple"},st={id:"assistant",title:"添加小助手",subtitle:"扫码添加客服企微",aiHint:"打开统一的小助手企微二维码引导，可选择我已添加或稍后再说。",iconBg:"linear-gradient(135deg, #36c8ff, #4a8dff)",iconSrc:h(g.splashAssistant),action:"showAssistantComingSoon"},L={id:"today",title:"每日推荐",subtitle:"根据脑力情况制定专属训练计划",aiHint:"进入每日训练探索地图。未完成筛查时可进行覆盖四个维度的探索训练；完成部分或完整筛查后，计划会根据已有测评结果变得更有针对性。沿路径逐个完成小游戏，可在训练打卡日历回顾记录。",iconBg:"linear-gradient(135deg, #ffb703, #ff6467)",iconSrc:h(g.splashToday),action:"navigateToday",badge:"今日",accent:!0},T=[{id:"train",title:"健脑训练",subtitle:"针对核心能力的自由练习",aiHint:"进入健脑训练小游戏目录。这里是日常训练与练习，不是3分钟测评，也不是完整版认知筛查；进入后可自由选择具体训练游戏。",iconBg:"#a684ff",iconSrc:h(g.splashTrain),action:"navigateTrain"},{id:"class",title:"老年课堂",subtitle:"轻松学点新知识",aiHint:"进入老年课堂媒体列表，可选择压缩画质或原画质并播放视频、音频课程。",iconBg:"linear-gradient(135deg, #42b883, #25a56a)",iconSrc:h(g.splashClass),action:"showClassComingSoon"},{id:"memoir",title:"人生回忆录",subtitle:"慢慢聊，把故事记下来",aiHint:"进入「人生回忆录」。这是一本会自己写字的回忆录：长者用语音或打字，陪伴 AI 逐章聊自己的人生故事（童年、求学、工作、成家、儿女、难忘时刻、如今生活），聊过的内容会写进一本可翻页的书里，还能贴老照片、录原声、手绘涂鸦、写未寄出的信、分享给家人。这是慢节奏的陪伴与记录功能，不是测评或训练小游戏。",iconBg:"linear-gradient(135deg, #b5793a, #c99a4a)",iconSrc:h(g.splashMemoir),action:"navigateMemoir"}],Ft=[M,et,L,...T,st],b=class b extends dt{onMount(){w.show(this.container.querySelector(".splash-page")),w.refresh(),this._bindEntryEvents(),this._initCharacterAi(),this._loadAssessmentStatus().finally(()=>{this.mounted&&E.onSplashMounted()})}onUpdate(){w.show(this.container.querySelector(".splash-page")),this._bindEntryEvents()}_bindEntryEvents(){Ft.forEach(t=>{const s=this.container.querySelector(`[data-entry="${t.id}"]`);s&&s.addEventListener("click",()=>this[t.action]())})}async _loadAssessmentStatus(){try{const t=await E.getHomeSummary();this.setState({hasCompletedAssessment:t.hasAssessment})}catch(t){console.warn("[SplashPage] 首页测评状态获取失败:",t),this.setState({hasCompletedAssessment:!1})}}_prefetchGameCatalogBg(){if(!b._gameCatalogBgPrefetched){b._gameCatalogBgPrefetched=!0;try{const t=new Image;t.src=Wt}catch{}}}onUnmount(){w.destroy(),_.hideEmbedded()}async _initCharacterAi(){try{if(await _.preload(),!this.mounted)return;_.showEmbedded({top:"auto",right:"1.6rem",bottom:"7rem",left:"auto",width:"32rem",height:"38rem"})}catch(t){console.warn("[SplashPage] CharacterAI 初始化失败:",t)}}async navigateSimple(){if(!this._assessmentStarting){this._assessmentStarting=!0;try{const{SimpleMode:t}=await p(async()=>{const{SimpleMode:s}=await import("./simple-mode-CobKn34m.js");return{SimpleMode:s}},__vite__mapDeps([11,1,2,3,0,4]),import.meta.url);await t.enter()}finally{this._assessmentStarting=!1}}}async navigateFull(){if(!this._assessmentStarting){this._assessmentStarting=!0;try{if(!await ct.ensureCurrentProfileSnapshot()){mt.showToast("个人信息加载失败，请稍后重试");return}await App.navigate("assessment-home")}finally{this._assessmentStarting=!1}}}navigateTrain(){return C.open("training","splash")}showClassComingSoon(){return C.open("course","splash")}async showAssistantComingSoon(){if(!this._assistantGuideOpening){this._assistantGuideOpening=!0;try{return await E.showWechatGuide()}finally{this._assistantGuideOpening=!1}}}navigateMemoir(){return C.open("memoir","splash")}async navigateToday(){if(!this._todayEntryChecking){this._todayEntryChecking=!0;try{await App.navigate("daily-recommend")}finally{this._todayEntryChecking=!1}}}renderEntryCard(t,s,a="",r=0){const i=t.accent?"splash-card--accent":"";return`
      <button class="splash-card splash-card--${s} ${i}" data-entry="${t.id}" style="--splash-entry-index:${r}" aria-label="${t.title}" data-ai-hint="${t.aiHint}">
        <div class="splash-card-inner">
          <div class="splash-card-icon" style="background:${t.iconBg}">
            <img src="${t.iconSrc}" alt="" />
          </div>
          <div class="splash-card-text">
            <p class="splash-card-title">${t.title}${t.badge?`<span class="splash-badge-today">${t.badge}</span>`:""}</p>
            <p class="splash-card-subtitle">${t.subtitle}</p>
            ${a?`<p class="splash-card-status">${a}</p>`:""}
          </div>
        </div>
      </button>`}renderLoadingEntries(){const t=(s,a)=>`
      <div class="splash-loading-card splash-loading-card--${s}" style="--splash-entry-index:${a}" aria-hidden="true">
        <div class="splash-loading-card__icon"></div>
        <div class="splash-loading-card__text">
          <span class="splash-loading-card__title"></span>
          <span class="splash-loading-card__subtitle"></span>
        </div>
      </div>`;return`
      <div class="splash-entries splash-entries--loading" aria-label="首页入口加载中">
        <div class="splash-priority-row">
          ${t("primary",0)}
          ${t("supporting",1)}
        </div>
        <div class="splash-lower-grid">
          ${t("memoir",2)}
          ${t("secondary",3)}
          ${t("secondary",4)}
          ${t("utility",5)}
          ${t("utility",6)}
        </div>
      </div>`}render(){const t=typeof this.state.hasCompletedAssessment!="boolean",s=this.state.hasCompletedAssessment===!0,a=s?L:M,r=s?M:L,i=s?"已完成":"完成筛查后更精准";return`
      <div class="page-bg-profile splash-page ${s?"splash--assessment-complete":"splash--assessment-pending"} h-full relative overflow-hidden flex items-center justify-center"
           aria-label="应用首页 — 忆启时光认知能力评估平台"
           data-ai-hint="这是忆启时光应用首页。${s?"您已完成过认知能力筛查。当前首页优先入口是每日推荐，计划固定由六款训练游戏组成；认知能力筛查仍可再次进入。健脑训练、老年课堂和人生回忆录是同级功能。":"您尚未完成认知能力筛查。当前首页优先入口是认知能力筛查；每日推荐可直接开始探索训练，完成筛查后会更精准。健脑训练、老年课堂和人生回忆录是同级功能。"}">
        <!-- 装饰光晕 -->
        <!-- 首页入口在状态解析完成后直接替换骨架 -->
        ${t?this.renderLoadingEntries():`
          <div class="splash-entries">
            <div class="splash-priority-row">
              ${this.renderEntryCard(a,"primary","",0)}
              ${this.renderEntryCard(r,"supporting",i,1)}
            </div>
            <div class="splash-lower-grid">
              ${this.renderEntryCard(T[2],"memoir","",2)}
              ${T.slice(0,2).map((d,c)=>this.renderEntryCard(d,"secondary","",c+3)).join("")}
              ${this.renderEntryCard(et,"utility","",5)}
              ${this.renderEntryCard(st,"utility","",6)}
            </div>
          </div>`}

        <!-- 右侧 CharacterAI iframe（由 _initCharacterAi 控制 overlay root 显示） -->

      </div>
    `}};P(b,"_gameCatalogBgPrefetched",!1);let Z=b;export{Z as SplashPage};
