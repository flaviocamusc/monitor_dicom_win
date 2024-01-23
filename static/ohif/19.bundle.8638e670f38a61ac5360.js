"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[19,579],{41832:(e,t,n)=>{n.d(t,{Z:()=>L,I:()=>P});var s=n(43001),r=n(3827),a=n.n(r),i=n(261),o=n(44530),c=n(89556);const d=-1,u=0,l=1,S=2,p=3,y=4,I=5,m={id:"measurementTracking",initial:"idle",context:{activeViewportId:null,trackedStudy:"",trackedSeries:[],ignoredSeries:[],prevTrackedStudy:"",prevTrackedSeries:[],prevIgnoredSeries:[],ignoredSRSeriesForHydration:[],isDirty:!1},states:{off:{type:"final"},idle:{entry:"clearContext",on:{TRACK_SERIES:"promptBeginTracking",SET_TRACKED_SERIES:[{target:"tracking",actions:["setTrackedStudyAndMultipleSeries","setIsDirtyToClean"]}],PROMPT_HYDRATE_SR:{target:"promptHydrateStructuredReport",cond:"hasNotIgnoredSRSeriesForHydration"},RESTORE_PROMPT_HYDRATE_SR:"promptHydrateStructuredReport",HYDRATE_SR:"hydrateStructuredReport",UPDATE_ACTIVE_VIEWPORT_ID:{actions:(0,i.f0)({activeViewportId:(e,t)=>t.activeViewportId})}}},promptBeginTracking:{invoke:{src:"promptBeginTracking",onDone:[{target:"tracking",actions:["setTrackedStudyAndSeries","setIsDirty"],cond:"shouldSetStudyAndSeries"},{target:"off",cond:"shouldKillMachine"},{target:"idle"}],onError:{target:"idle"}}},tracking:{on:{TRACK_SERIES:[{target:"promptTrackNewStudy",cond:"isNewStudy"},{target:"promptTrackNewSeries",cond:"isNewSeries"}],UNTRACK_SERIES:[{target:"tracking",actions:["removeTrackedSeries","setIsDirty"],cond:"hasRemainingTrackedSeries"},{target:"idle"}],SET_TRACKED_SERIES:[{target:"tracking",actions:["setTrackedStudyAndMultipleSeries"]}],SAVE_REPORT:"promptSaveReport",SET_DIRTY:[{target:"tracking",actions:["setIsDirty"],cond:"shouldSetDirty"},{target:"tracking"}]}},promptTrackNewSeries:{invoke:{src:"promptTrackNewSeries",onDone:[{target:"tracking",actions:["addTrackedSeries","setIsDirty"],cond:"shouldAddSeries"},{target:"tracking",actions:["discardPreviouslyTrackedMeasurements","setTrackedStudyAndSeries","setIsDirty"],cond:"shouldSetStudyAndSeries"},{target:"promptSaveReport",cond:"shouldPromptSaveReport"},{target:"tracking"}],onError:{target:"idle"}}},promptTrackNewStudy:{invoke:{src:"promptTrackNewStudy",onDone:[{target:"tracking",actions:["discardPreviouslyTrackedMeasurements","setTrackedStudyAndSeries","setIsDirty"],cond:"shouldSetStudyAndSeries"},{target:"tracking",actions:["ignoreSeries"],cond:"shouldAddIgnoredSeries"},{target:"promptSaveReport",cond:"shouldPromptSaveReport"},{target:"tracking"}],onError:{target:"idle"}}},promptSaveReport:{invoke:{src:"promptSaveReport",onDone:[{target:"idle",actions:["clearAllMeasurements","showStructuredReportDisplaySetInActiveViewport"],cond:"shouldSaveAndContinueWithSameReport"},{target:"tracking",actions:["discardPreviouslyTrackedMeasurements","setTrackedStudyAndSeries"],cond:"shouldSaveAndStartNewReport"},{target:"tracking"}],onError:{target:"idle"}}},promptHydrateStructuredReport:{invoke:{src:"promptHydrateStructuredReport",onDone:[{target:"tracking",actions:["setTrackedStudyAndMultipleSeries","jumpToFirstMeasurementInActiveViewport","setIsDirtyToClean"],cond:"shouldHydrateStructuredReport"},{target:"idle",actions:["ignoreHydrationForSRSeries"],cond:"shouldIgnoreHydrationForSR"}],onError:{target:"idle"}}},hydrateStructuredReport:{invoke:{src:"hydrateStructuredReport",onDone:[{target:"tracking",actions:["setTrackedStudyAndMultipleSeries","jumpToFirstMeasurementInActiveViewport","setIsDirtyToClean"]}],onError:{target:"idle"}}}},strict:!0},g={services:{promptBeginTracking:(e,t)=>{},promptTrackNewStudy:(e,t)=>{},promptTrackNewSeries:(e,t)=>{}},actions:{discardPreviouslyTrackedMeasurements:(e,t)=>{console.log("discardPreviouslyTrackedMeasurements: not implemented")},clearAllMeasurements:(e,t)=>{console.log("clearAllMeasurements: not implemented")},jumpToFirstMeasurementInActiveViewport:(e,t)=>{console.warn("jumpToFirstMeasurementInActiveViewport: not implemented")},showStructuredReportDisplaySetInActiveViewport:(e,t)=>{console.warn("showStructuredReportDisplaySetInActiveViewport: not implemented")},clearContext:(0,i.f0)({trackedStudy:"",trackedSeries:[],ignoredSeries:[],prevTrackedStudy:"",prevTrackedSeries:[],prevIgnoredSeries:[]}),setTrackedStudyAndSeries:(0,i.f0)(((e,t)=>({prevTrackedStudy:e.trackedStudy,prevTrackedSeries:e.trackedSeries.slice(),prevIgnoredSeries:e.ignoredSeries.slice(),trackedStudy:t.data.StudyInstanceUID,trackedSeries:[t.data.SeriesInstanceUID],ignoredSeries:[]}))),setTrackedStudyAndMultipleSeries:(0,i.f0)(((e,t)=>{const n=t.StudyInstanceUID||t.data.StudyInstanceUID,s=t.SeriesInstanceUIDs||t.data.SeriesInstanceUIDs;return{prevTrackedStudy:e.trackedStudy,prevTrackedSeries:e.trackedSeries.slice(),prevIgnoredSeries:e.ignoredSeries.slice(),trackedStudy:n,trackedSeries:[...e.trackedSeries,...s],ignoredSeries:[]}})),setIsDirtyToClean:(0,i.f0)(((e,t)=>({isDirty:!1}))),setIsDirty:(0,i.f0)(((e,t)=>({isDirty:!0}))),ignoreSeries:(0,i.f0)(((e,t)=>({prevIgnoredSeries:[...e.ignoredSeries],ignoredSeries:[...e.ignoredSeries,t.data.SeriesInstanceUID]}))),ignoreHydrationForSRSeries:(0,i.f0)(((e,t)=>({ignoredSRSeriesForHydration:[...e.ignoredSRSeriesForHydration,t.data.srSeriesInstanceUID]}))),addTrackedSeries:(0,i.f0)(((e,t)=>({prevTrackedSeries:[...e.trackedSeries],trackedSeries:[...e.trackedSeries,t.data.SeriesInstanceUID]}))),removeTrackedSeries:(0,i.f0)(((e,t)=>({prevTrackedSeries:e.trackedSeries.slice().filter((e=>e!==t.SeriesInstanceUID)),trackedSeries:e.trackedSeries.slice().filter((e=>e!==t.SeriesInstanceUID))})))},guards:{shouldSetDirty:(e,t)=>void 0===t.SeriesInstanceUID||e.trackedSeries.includes(t.SeriesInstanceUID),shouldKillMachine:(e,t)=>t.data&&t.data.userResponse===d,shouldAddSeries:(e,t)=>t.data&&t.data.userResponse===S,shouldSetStudyAndSeries:(e,t)=>t.data&&t.data.userResponse===p,shouldAddIgnoredSeries:(e,t)=>t.data&&t.data.userResponse===y,shouldPromptSaveReport:(e,t)=>t.data&&t.data.userResponse===l,shouldIgnoreHydrationForSR:(e,t)=>t.data&&t.data.userResponse===u,shouldSaveAndContinueWithSameReport:(e,t)=>t.data&&t.data.userResponse===l&&!0===t.data.isBackupSave,shouldSaveAndStartNewReport:(e,t)=>t.data&&t.data.userResponse===l&&!1===t.data.isBackupSave,shouldHydrateStructuredReport:(e,t)=>t.data&&t.data.userResponse===I,hasRemainingTrackedSeries:(e,t)=>e.trackedSeries.length>1||!e.trackedSeries.includes(t.SeriesInstanceUID),hasNotIgnoredSRSeriesForHydration:(e,t)=>!e.ignoredSRSeriesForHydration.includes(t.SeriesInstanceUID),isNewStudy:(e,t)=>!e.ignoredSeries.includes(t.SeriesInstanceUID)&&e.trackedStudy!==t.StudyInstanceUID,isNewSeries:(e,t)=>!e.ignoredSeries.includes(t.SeriesInstanceUID)&&!e.trackedSeries.includes(t.SeriesInstanceUID)}};var D=n(73577);const E={NO_NEVER:-1,CANCEL:0,CREATE_REPORT:1,ADD_SERIES:2,SET_STUDY_AND_SERIES:3};const v=function({servicesManager:e,extensionManager:t},n,s){const{uiViewportDialogService:r}=e.services,{viewportId:a,StudyInstanceUID:i,SeriesInstanceUID:o}=s;return new Promise((async function(e,t){let n=await function(e,t){return new Promise((function(n,s){const r=D.Z.t("MeasurementTable:Track measurements for this series?"),a=[{id:"prompt-begin-tracking-cancel",type:c.LZ.dt.secondary,text:D.Z.t("Common:No"),value:E.CANCEL},{id:"prompt-begin-tracking-no-do-not-ask-again",type:c.LZ.dt.secondary,text:D.Z.t("MeasurementTable:No, do not ask again"),value:E.NO_NEVER},{id:"prompt-begin-tracking-yes",type:c.LZ.dt.primary,text:D.Z.t("Common:Yes"),value:E.SET_STUDY_AND_SERIES}],i=t=>{e.hide(),n(t)};e.show({viewportId:t,id:"measurement-tracking-prompt-begin-tracking",type:"info",message:r,actions:a,onSubmit:i,onOutsideClick:()=>{e.hide(),n(E.CANCEL)}})}))}(r,a);e({userResponse:n,StudyInstanceUID:i,SeriesInstanceUID:o,viewportId:a})}))},R={NO_NEVER:-1,CANCEL:0,CREATE_REPORT:1,ADD_SERIES:2,SET_STUDY_AND_SERIES:3,NO_NOT_FOR_SERIES:4};const T=function({servicesManager:e,extensionManager:t},n,s){const{UIViewportDialogService:r}=e.services,{viewportId:a,StudyInstanceUID:i,SeriesInstanceUID:o}=s;return new Promise((async function(e,t){let s=await function(e,t){return new Promise((function(n,s){const r="Do you want to add this measurement to the existing report?",a=[{type:c.LZ.dt.secondary,text:"Cancel",value:R.CANCEL},{type:c.LZ.dt.primary,text:"Create new report",value:R.CREATE_REPORT},{type:c.LZ.dt.primary,text:"Add to existing report",value:R.ADD_SERIES}],i=t=>{e.hide(),n(t)};e.show({viewportId:t,type:"info",message:r,actions:a,onSubmit:i,onOutsideClick:()=>{e.hide(),n(R.CANCEL)}})}))}(r,a);s===R.CREATE_REPORT&&(s=n.isDirty?await function(e,t){return new Promise((function(n,s){const r="You have existing tracked measurements. What would you like to do with your existing tracked measurements?",a=[{type:"cancel",text:"Cancel",value:R.CANCEL},{type:"secondary",text:"Save",value:R.CREATE_REPORT},{type:"primary",text:"Discard",value:R.SET_STUDY_AND_SERIES}],i=t=>{e.hide(),n(t)};e.show({viewportId:t,type:"warning",message:r,actions:a,onSubmit:i,onOutsideClick:()=>{e.hide(),n(R.CANCEL)}})}))}(r,a):R.SET_STUDY_AND_SERIES),e({userResponse:s,StudyInstanceUID:i,SeriesInstanceUID:o,viewportId:a,isBackupSave:!1})}))},f={NO_NEVER:-1,CANCEL:0,CREATE_REPORT:1,ADD_SERIES:2,SET_STUDY_AND_SERIES:3,NO_NOT_FOR_SERIES:4};const k=function({servicesManager:e,extensionManager:t},n,s){const{UIViewportDialogService:r}=e.services,{viewportId:a,StudyInstanceUID:i,SeriesInstanceUID:o}=s;return new Promise((async function(e,t){let s=await function(e,t){return new Promise((function(n,s){const r=D.Z.t("MeasurementTable:Track measurements for this series?"),a=[{type:"cancel",text:D.Z.t("MeasurementTable:No"),value:f.CANCEL},{type:"secondary",text:D.Z.t("MeasurementTable:No, do not ask again"),value:f.NO_NOT_FOR_SERIES},{type:"primary",text:D.Z.t("MeasurementTable:Yes"),value:f.SET_STUDY_AND_SERIES}],i=t=>{e.hide(),n(t)};e.show({viewportId:t,type:"info",message:r,actions:a,onSubmit:i,onOutsideClick:()=>{e.hide(),n(f.CANCEL)}})}))}(r,a);s===f.SET_STUDY_AND_SERIES&&(s=n.isDirty?await function(e,t){return new Promise((function(n,s){const r="Measurements cannot span across multiple studies. Do you want to save your tracked measurements?",a=[{type:"cancel",text:"Cancel",value:f.CANCEL},{type:"secondary",text:"No, discard previously tracked series & measurements",value:f.SET_STUDY_AND_SERIES},{type:"primary",text:"Yes",value:f.CREATE_REPORT}],i=t=>{e.hide(),n(t)};e.show({viewportId:t,type:"warning",message:r,actions:a,onSubmit:i,onOutsideClick:()=>{e.hide(),n(f.CANCEL)}})}))}(r,a):f.SET_STUDY_AND_SERIES),e({userResponse:s,StudyInstanceUID:i,SeriesInstanceUID:o,viewportId:a,isBackupSave:!1})}))};var h=n(78738);const M=4700;const w={NO_NEVER:-1,CANCEL:0,CREATE_REPORT:1,ADD_SERIES:2,SET_STUDY_AND_SERIES:3,NO_NOT_FOR_SERIES:4};const U=function({servicesManager:e,commandsManager:t,extensionManager:n},s,r){const{uiDialogService:a,measurementService:i,displaySetService:o}=e.services,c=void 0===r.viewportId?r.data.viewportId:r.viewportId,d=void 0===r.isBackupSave?r.data.isBackupSave:r.isBackupSave,u=r?.data?.StudyInstanceUID,l=r?.data?.SeriesInstanceUID,{trackedStudy:S,trackedSeries:p}=s;let y;return new Promise((async function(s,r){const I=await(0,h.createReportDialogPrompt)(a,{extensionManager:n});if(I.action===w.CREATE_REPORT){const s=n.getDataSources()[0],r=i.getMeasurements().filter((e=>S===e.referenceStudyUID&&p.includes(e.referenceSeriesUID))),a=void 0===I.value||""===I.value?"Research Derived Series":I.value,c=function(e){const t=e.getActiveDisplaySets().filter((e=>"SR"===e.Modality)).map((e=>e.SeriesNumber));return Math.max(...t,M)+1}(o),d=async()=>t.runCommand("storeMeasurements",{measurementData:r,dataSource:s,additionalFindingTypes:["ArrowAnnotate"],options:{SeriesDescription:a,SeriesNumber:c}},"CORNERSTONE_STRUCTURED_REPORT");y=await(0,h.createReportAsync)({servicesManager:e,getReport:d})}else I.action;s({userResponse:I.action,createdDisplaySetInstanceUIDs:y,StudyInstanceUID:u,SeriesInstanceUID:l,viewportId:c,isBackupSave:d})}))};var A=n(42170);const b={NO_NEVER:-1,CANCEL:0,CREATE_REPORT:1,ADD_SERIES:2,SET_STUDY_AND_SERIES:3,NO_NOT_FOR_SERIES:4,HYDRATE_REPORT:5};const C=function({servicesManager:e,extensionManager:t,appConfig:n},s,r){const{uiViewportDialogService:a,displaySetService:i}=e.services,{viewportId:o,displaySetInstanceUID:d}=r,u=i.getDisplaySetByUID(d);return new Promise((async function(s,i){const l=await function(e,t){return new Promise((function(n,s){const r="Do you want to continue tracking measurements for this study?",a=[{type:c.LZ.dt.secondary,text:"No",value:b.CANCEL},{type:c.LZ.dt.primary,text:"Yes",value:b.HYDRATE_REPORT}],i=t=>{e.hide(),n(t)};e.show({viewportId:t,type:"info",message:r,actions:a,onSubmit:i,onOutsideClick:()=>{e.hide(),n(b.CANCEL)}})}))}(a,o);let S,p;if(l===b.HYDRATE_REPORT){console.warn("!! HYDRATING STRUCTURED REPORT");const s=(0,A.hydrateStructuredReport)({servicesManager:e,extensionManager:t,appConfig:n},d);S=s.StudyInstanceUID,p=s.SeriesInstanceUIDs}s({userResponse:l,displaySetInstanceUID:r.displaySetInstanceUID,srSeriesInstanceUID:u.SeriesInstanceUID,viewportId:o,StudyInstanceUID:S,SeriesInstanceUIDs:p})}))};const N=function({servicesManager:e,extensionManager:t,appConfig:n},s,r){const{displaySetService:a}=e.services,{viewportId:i,displaySetInstanceUID:o}=r,c=a.getDisplaySetByUID(o);return new Promise(((s,a)=>{const d=(0,A.hydrateStructuredReport)({servicesManager:e,extensionManager:t,appConfig:n},o),u=d.StudyInstanceUID,l=d.SeriesInstanceUIDs;s({displaySetInstanceUID:r.displaySetInstanceUID,srSeriesInstanceUID:c.SeriesInstanceUID,viewportId:i,StudyInstanceUID:u,SeriesInstanceUIDs:l})}))};var _=n(62657);const x=s.createContext();x.displayName="TrackedMeasurementsContext";const P=()=>(0,s.useContext)(x),O="@ohif/extension-cornerstone-dicom-sr.sopClassHandlerModule.dicom-sr";function V({servicesManager:e,commandsManager:t,extensionManager:n},{children:r}){const[a]=(0,_.M)(),[d,u]=(0,c.O_)(),{activeViewportId:l,viewports:S}=d,{measurementService:p,displaySetService:y}=e.services,I=Object.assign({},g);I.actions=Object.assign({},I.actions,{jumpToFirstMeasurementInActiveViewport:(e,t)=>{const{trackedStudy:n,trackedSeries:s,activeViewportId:r}=e,a=p.getMeasurements().filter((e=>n===e.referenceStudyUID&&s.includes(e.referenceSeriesUID)));console.log("jumping to measurement reset viewport",r,a[0]);const i=a[0].displaySetInstanceUID,o=y.getDisplaySetByUID(i).images,c=o[0].imageId.startsWith("volumeId"),d=a[0].data;let l=0;!c&&d&&(l=o.findIndex((e=>{const t=Object.keys(d)[0].substring(8);return e.imageId===t})),-1===l&&(console.warn("Could not find image index for tracked measurement, using 0"),l=0)),u.setDisplaySetsForViewport({viewportId:r,displaySetInstanceUIDs:[i],viewportOptions:{initialImageOptions:{index:l}}})},showStructuredReportDisplaySetInActiveViewport:(e,t)=>{if(t.data.createdDisplaySetInstanceUIDs.length>0){const e=t.data.createdDisplaySetInstanceUIDs[0];u.setDisplaySetsForViewport({viewportId:t.data.viewportId,displaySetInstanceUIDs:[e]})}},discardPreviouslyTrackedMeasurements:(e,t)=>{const n=p.getMeasurements().filter((t=>e.prevTrackedSeries.includes(t.referenceSeriesUID))).map((e=>e.id));for(let e=0;e<n.length;e++)p.remove(n[e])},clearAllMeasurements:(e,t)=>{const n=p.getMeasurements().map((e=>e.uid));for(let e=0;e<n.length;e++)p.remove(n[e])}}),I.services=Object.assign({},I.services,{promptBeginTracking:v.bind(null,{servicesManager:e,extensionManager:n,appConfig:a}),promptTrackNewSeries:T.bind(null,{servicesManager:e,extensionManager:n,appConfig:a}),promptTrackNewStudy:k.bind(null,{servicesManager:e,extensionManager:n,appConfig:a}),promptSaveReport:U.bind(null,{servicesManager:e,commandsManager:t,extensionManager:n,appConfig:a}),promptHydrateStructuredReport:C.bind(null,{servicesManager:e,extensionManager:n,appConfig:a}),hydrateStructuredReport:N.bind(null,{servicesManager:e,extensionManager:n,appConfig:a})});const D=(0,i.J)(m,I),[E,R]=(0,o.eO)(D);return(0,s.useEffect)((()=>{R("UPDATE_ACTIVE_VIEWPORT_ID",{activeViewportId:l})}),[l,R]),(0,s.useEffect)((()=>{if(S.size>0){const t=S.get(l);if(!t||!t?.displaySetInstanceUIDs?.length)return;const{displaySetService:n}=e.services,s=n.getDisplaySetByUID(t.displaySetInstanceUIDs[0]);if(!s)return;s.SOPClassHandlerId===O&&!s.isLoaded&&s.load&&s.load(),s.SOPClassHandlerId===O&&!0===s.isRehydratable&&(console.log("sending event...",E),R("PROMPT_HYDRATE_SR",{displaySetInstanceUID:s.displaySetInstanceUID,SeriesInstanceUID:s.SeriesInstanceUID,viewportId:l}))}}),[l,R,e.services,S]),s.createElement(x.Provider,{value:[E,R]},r)}V.propTypes={children:a().oneOf([a().func,a().node]),servicesManager:a().object.isRequired,commandsManager:a().object.isRequired,extensionManager:a().object.isRequired,appConfig:a().object};const L=function({servicesManager:e,extensionManager:t,commandsManager:n}){const s=V.bind(null,{servicesManager:e,extensionManager:t,commandsManager:n});return[{name:"TrackedMeasurementsContext",context:x,provider:s}]}},28030:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});var s=n(41832),r=n(43001),a=n(3827),i=n.n(a),o=n(62474),c=n(69190),d=n(71771),u=n(89556);const{formatDate:l}=d.utils;function S({servicesManager:e,getImageSrc:t,getStudiesForPatientByMRN:n,requestDisplaySetCreationForStudy:a,dataSource:i}){const{displaySetService:d,uiDialogService:S,hangingProtocolService:p,uiNotificationService:I}=e.services,m=(0,o.s0)(),{t:g}=(0,c.$G)("Common"),{StudyInstanceUIDs:D}=(0,u.zG)(),[{activeViewportId:E,viewports:v},R]=(0,u.O_)(),[T,f]=(0,s.I)(),[k,h]=(0,r.useState)("primary"),[M,w]=(0,r.useState)([...D]),[U,A]=(0,r.useState)([]),[b,C]=(0,r.useState)([]),[N,_]=(0,r.useState)({}),[x,P]=(0,r.useState)(null),O=v.get(E)?.displaySetInstanceUIDs,{trackedSeries:V}=T.context;(0,r.useEffect)((()=>{D.forEach((e=>async function(e){const t=await i.query.studies.search({studyInstanceUid:e});if(!t?.length)throw m("/notfoundstudy","_self"),new Error("Invalid study URL");let s=t;try{s=await n(t)}catch(e){console.warn(e)}const r=s.map((e=>({AccessionNumber:e.accession,StudyDate:e.date,StudyDescription:e.description,NumInstances:e.instances,ModalitiesInStudy:e.modalities,PatientID:e.mrn,PatientName:e.patientName,StudyInstanceUID:e.studyInstanceUid,StudyTime:e.time}))).map((e=>({studyInstanceUid:e.StudyInstanceUID,date:l(e.StudyDate)||g("NoStudyDate"),description:e.StudyDescription,modalities:e.ModalitiesInStudy,numInstances:e.NumInstances})));A((e=>{const t=[...e];for(const n of r)e.find((e=>e.studyInstanceUid===n.studyInstanceUid))||t.push(n);return t}))}(e)))}),[D,n]),(0,r.useEffect)((()=>{const e=d.activeDisplaySets;e.length&&e.forEach((async e=>{const n={},s=d.getDisplaySetByUID(e.displaySetInstanceUID),r=i.getImageIdsForDisplaySet(s),a=r[Math.floor(r.length/2)];a&&!s?.unsupported&&(n[e.displaySetInstanceUID]=await t(a),_((e=>({...e,...n}))))}))}),[d,i,t]),(0,r.useEffect)((()=>{const e=d.activeDisplaySets;if(!e.length)return;const t=y(e,N,V,v,R,i,d,S,I);C(t)}),[d.activeDisplaySets,V,v,i,N]),(0,r.useEffect)((()=>{const e=d.subscribe(d.EVENTS.DISPLAY_SETS_ADDED,(e=>{const{displaySetsAdded:n,options:s}=e;n.forEach((async e=>{const n=e.displaySetInstanceUID,r={},a=d.getDisplaySetByUID(n);if(a?.unsupported)return;s.madeInClient&&P(n);const o=i.getImageIdsForDisplaySet(a),c=o[Math.floor(o.length/2)];c&&(r[n]=await t(c),_((e=>({...e,...r}))))}))}));return()=>{e.unsubscribe()}}),[d,i,t,N,V,v]),(0,r.useEffect)((()=>{const e=d.subscribe(d.EVENTS.DISPLAY_SETS_CHANGED,(e=>{const t=y(e,N,V,v,R,i,d,S,I);C(t)})),t=d.subscribe(d.EVENTS.DISPLAY_SET_SERIES_METADATA_INVALIDATED,(()=>{const e=y(d.getActiveDisplaySets(),N,V,v,R,i,d,S,I);C(e)}));return()=>{e.unsubscribe(),t.unsubscribe()}}),[N,V,v,i,d]);const L=function(e,t,n,s){const r=[],a=[],i=[];t.forEach((t=>{const o=n.filter((e=>e.StudyInstanceUID===t.studyInstanceUid)),c=s.getDisplaySetSortFunction();o.sort(c);const d=Object.assign({},t,{displaySets:o});e.includes(t.studyInstanceUid)?(r.push(d),i.push(d)):(a.push(d),i.push(d))}));const o=(e,t)=>{const n=Date.parse(e);return Date.parse(t)-n},c=[{name:"primary",label:"Primary",studies:r.sort(((e,t)=>o(e.date,t.date)))},{name:"recent",label:"Recent",studies:a.sort(((e,t)=>o(e.date,t.date)))},{name:"all",label:"All",studies:i.sort(((e,t)=>o(e.date,t.date)))}];return c}(D,U,b,p);return(0,r.useEffect)((()=>{if(x){const e=x,t=document.getElementById(`thumbnail-${e}`);t&&"function"==typeof t.scrollIntoView&&(t.scrollIntoView({behavior:"smooth"}),P(null))}}),[x,M,k]),(0,r.useEffect)((()=>{if(!x)return;const e=function(e,t){for(let n=0;n<t.length;n++){const{studies:s}=t[n];for(let r=0;r<s.length;r++){const{displaySets:a}=s[r];for(let i=0;i<a.length;i++){if(a[i].displaySetInstanceUID===e)return{tabName:t[n].name,StudyInstanceUID:s[r].studyInstanceUid}}}}}(x,L);if(!e)return void console.warn("jumpToThumbnail: displaySet thumbnail not found.");const{tabName:t,StudyInstanceUID:n}=e;h(t);if(!M.includes(n)){const e=[...M,n];w(e)}}),[M,x,L]),r.createElement(u.eX,{tabs:L,servicesManager:e,activeTabName:k,expandedStudyInstanceUIDs:M,onClickStudy:function(e){const t=M.includes(e),n=t?[...M.filter((t=>t!==e))]:[...M,e];if(w(n),!t){a(d,e,!0)}},onClickTab:e=>{h(e)},onClickUntrack:e=>{const t=d.getDisplaySetByUID(e);f("UNTRACK_SERIES",{SeriesInstanceUID:t.SeriesInstanceUID})},onClickThumbnail:()=>{},onDoubleClickThumbnail:e=>{let t=[];const n=E;try{t=p.getViewportsRequireUpdate(n,e)}catch(e){console.warn(e),I.show({title:"Thumbnail Double Click",message:"The selected display sets could not be added to the viewport due to a mismatch in the Hanging Protocol rules.",type:"info",duration:3e3})}R.setDisplaySetsForViewports(t)},activeDisplaySetInstanceUIDs:O})}S.propTypes={servicesManager:i().object.isRequired,dataSource:i().shape({getImageIdsForDisplaySet:i().func.isRequired}).isRequired,getImageSrc:i().func.isRequired,getStudiesForPatientByMRN:i().func.isRequired,requestDisplaySetCreationForStudy:i().func.isRequired};const p=S;function y(e,t,n,s,a,i,o,c,d){const S=[],p=[];return e.filter((e=>!e.excludeFromThumbnailBrowser)).forEach((e=>{const y=t[e.displaySetInstanceUID],m=function(e){if(I.includes(e.Modality)||e?.unsupported)return"thumbnailNoImage";return"thumbnailTracked"}(e),g=a.getNumViewportPanes(),D=[];1!==g&&s.forEach((t=>{t?.displaySetInstanceUIDs?.includes(e.displaySetInstanceUID)&&D.push(t.viewportLabel)}));const E="thumbnailTracked"===m?S:p,{displaySetInstanceUID:v}=e,R={displaySetInstanceUID:v,description:e.SeriesDescription,seriesNumber:e.SeriesNumber,modality:e.Modality,seriesDate:l(e.SeriesDate),numInstances:e.numImageFrames,countIcon:e.countIcon,messages:e.messages,StudyInstanceUID:e.StudyInstanceUID,componentType:m,imageSrc:y,dragData:{type:"displayset",displaySetInstanceUID:v},isTracked:n.includes(e.SeriesInstanceUID),isHydratedForDerivedDisplaySet:e.isHydrated,viewportIdentificator:D};"thumbnailNoImage"===m&&(i.reject&&i.reject.series?(R.canReject=!e?.unsupported,R.onReject=()=>{c.create({id:"ds-reject-sr",centralize:!0,isDraggable:!1,showOverlay:!0,content:u.Vq,contentProps:{title:"Delete Report",body:()=>r.createElement("div",{className:"bg-primary-dark p-4 text-white"},r.createElement("p",null,"Are you sure you want to delete this report?"),r.createElement("p",{className:"mt-2"},"This action cannot be undone.")),actions:[{id:"cancel",text:"Cancel",type:u.LZ.dt.secondary},{id:"yes",text:"Yes",type:u.LZ.dt.primary,classes:["reject-yes-button"]}],onClose:()=>c.dismiss({id:"ds-reject-sr"}),onShow:()=>{document.querySelector(".reject-yes-button").focus()},onSubmit:async({action:t})=>{switch(t.id){case"yes":try{await i.reject.series(e.StudyInstanceUID,e.SeriesInstanceUID),o.deleteDisplaySet(v),c.dismiss({id:"ds-reject-sr"}),d.show({title:"Delete Report",message:"Report deleted successfully",type:"success"})}catch(e){c.dismiss({id:"ds-reject-sr"}),d.show({title:"Delete Report",message:"Failed to delete report",type:"error"})}break;case"cancel":c.dismiss({id:"ds-reject-sr"})}}}})}):R.canReject=!1),E.push(R)})),[...S,...p]}const I=["SR","SEG","SM","RTSTRUCT","RTPLAN","RTDOSE","DOC","OT"];const m=function(e,t){return new Promise(((n,s)=>{const r=document.createElement("canvas");e.utilities.loadImageToCanvas({canvas:r,imageId:t}).then((e=>{n(r.toDataURL())})).catch(s)}))};const g=function(e,t,n,s){t.activeDisplaySets.some((e=>e.StudyInstanceUID===n))||e.retrieve.series.metadata({StudyInstanceUID:n,madeInClient:s})};function D({commandsManager:e,extensionManager:t,servicesManager:n}){const s=t.getActiveDataSource()[0],a=function(e){const t=e.getModuleEntry("@ohif/extension-default.utilityModule.common"),{getStudiesForPatientByMRN:n}=t.exports;return n}(t),i=a.bind(null,s),o=(0,r.useCallback)(function(e){const t=e.getModuleEntry("@ohif/extension-cornerstone.utilityModule.common");try{const{cornerstone:e}=t.exports.getCornerstoneLibraries();return m.bind(null,e)}catch(e){throw new Error("Required command not found")}}(t),[]),c=g.bind(null,s);return r.createElement(p,{servicesManager:n,dataSource:s,getImageSrc:o,getStudiesForPatientByMRN:i,requestDisplaySetCreationForStudy:c})}D.propTypes={commandsManager:i().object.isRequired,extensionManager:i().object.isRequired,servicesManager:i().object.isRequired};const E=D;var v=n(10800),R=n(62657);function T({onExportClick:e,onCreateReportClick:t,disabled:n}){const{t:s}=(0,c.$G)("MeasurementTable");return r.createElement(r.Fragment,null,r.createElement(u.zx,{onClick:e,disabled:n,type:u.LZ.dt.secondary,size:u.LZ.dp.small},s("Export")),r.createElement(u.zx,{className:"ml-2",onClick:t,type:u.LZ.dt.secondary,size:u.LZ.dp.small,disabled:n},s("Create Report")))}T.propTypes={onExportClick:i().func,onCreateReportClick:i().func,disabled:i().bool},T.defaultProps={onExportClick:()=>alert("Export"),onCreateReportClick:()=>alert("Create Report"),disabled:!1};const f=T;var k=n(8324),h=n.n(k);const{downloadCSVReport:M}=d.utils,{formatDate:w}=d.utils,U={key:void 0,date:"",modality:"",description:""};function A({servicesManager:e,extensionManager:t}){const[n]=(0,u.O_)(),[a,i]=(0,r.useState)(Date.now().toString()),o=(0,v.N)(a,200),{measurementService:c,uiDialogService:l,displaySetService:S}=e.services,[p,y]=(0,s.I)(),{trackedStudy:I,trackedSeries:m}=p.context,[g,D]=(0,r.useState)(U),[E,T]=(0,r.useState)([]),k=(0,r.useRef)(null),[A]=(0,R.M)();(0,r.useEffect)((()=>{const e=c.getMeasurements().filter((e=>I===e.referenceStudyUID&&m.includes(e.referenceSeriesUID))).map((e=>function(e,t,n){const{referenceStudyUID:s,referenceSeriesUID:r,SOPInstanceUID:a}=e,i=(d.DicomMetadataStore.getInstance(s,r,a),n.getDisplaySetsForSeries(r));if(!i[0]||!i[0].images)throw new Error('The tracked measurements panel should only be tracking "stack" displaySets.');const{displayText:o,uid:c,label:u,type:l,selected:S,findingSites:p,finding:y}=e,I=p?.[0],m=u||y?.text||I?.text||"(empty)";let g=o||[];if(p){const e=[];p.forEach((t=>{t?.text!==m&&e.push(t.text)})),g=[...e,...g]}y&&y?.text!==m&&(g=[y.text,...g]);return{uid:c,label:m,baseLabel:u,measurementType:l,displayText:g,baseDisplayText:o,isActive:S,finding:y,findingSites:p}}(e,c.VALUE_TYPES,S)));T(e)}),[c,I,m,o]);const b=async()=>{if(p.matches("tracking")){const e=I,t=d.DicomMetadataStore.getStudy(e),n=t.series[0].instances[0],{StudyDate:s,StudyDescription:r}=n,a=new Set;t.series.forEach((e=>{m.includes(e.SeriesInstanceUID)&&a.add(e.instances[0].Modality)}));const i=Array.from(a).join("/");g.key!==e&&D({key:e,date:s,modality:i,description:r})}else""!==I&&void 0!==I||D(U)};(0,r.useEffect)((()=>{b()}),[g.key,p,I,b]),(0,r.useEffect)((()=>{const e=c.EVENTS.MEASUREMENT_ADDED,t=c.EVENTS.RAW_MEASUREMENT_ADDED,n=c.EVENTS.MEASUREMENT_UPDATED,s=c.EVENTS.MEASUREMENT_REMOVED,r=c.EVENTS.MEASUREMENTS_CLEARED,a=[];return[e,t,n,s,r].forEach((t=>{a.push(c.subscribe(t,(()=>{i(Date.now().toString()),t===e&&h()((()=>{k.current.scrollTop=k.current.scrollHeight}),300)()})).unsubscribe)})),()=>{a.forEach((e=>{e()}))}}),[c,y]);const C=({uid:e,isActive:t})=>{c.jumpToMeasurement(n.activeViewportId,e),_({uid:e,isActive:t})},N=({uid:e,isActive:t})=>{const n=c.getMeasurement(e);C({uid:e,isActive:t});const s=({action:t,value:s})=>{if("save"===t.id)c.update(e,{...n,...s},!0);l.dismiss({id:"enter-annotation"})};l.create({id:"enter-annotation",centralize:!0,isDraggable:!1,showOverlay:!0,content:u.Vq,contentProps:{title:"Annotation",noCloseButton:!0,value:{label:n.label||""},body:({value:e,setValue:t})=>r.createElement(u.II,{label:"Enter your annotation",labelClassName:"text-white grow text-[14px] leading-[1.2]",autoFocus:!0,id:"annotation",className:"border-primary-main bg-black",type:"text",value:e.label,onChange:e=>{e.persist(),t((t=>({...t,label:e.target.value})))},onKeyPress:t=>{"Enter"===t.key&&s({value:e,action:{id:"save"}})}}),actions:[{id:"cancel",text:"Cancel",type:u.LZ.dt.secondary},{id:"save",text:"Save",type:u.LZ.dt.primary}],onSubmit:s}})},_=({uid:e,isActive:t})=>{if(!t){const t=[...E],n=t.find((t=>t.uid===e));t.forEach((t=>t.isActive=t.uid===e)),n.isActive=!0,T(t)}},x=E.filter((e=>e.measurementType!==c.VALUE_TYPES.POINT)),P=E.filter((e=>e.measurementType===c.VALUE_TYPES.POINT));return r.createElement(r.Fragment,null,r.createElement("div",{className:"invisible-scrollbar overflow-y-auto overflow-x-hidden",ref:k,"data-cy":"trackedMeasurements-panel"},g.key&&r.createElement(u.YL,{date:w(g.date),modality:g.modality,description:g.description}),r.createElement(u.wt,{title:"Measurements",data:x,servicesManager:e,onClick:C,onEdit:N}),0!==P.length&&r.createElement(u.wt,{title:"Additional Findings",data:P,servicesManager:e,onClick:C,onEdit:N})),!A?.disableEditing&&r.createElement("div",{className:"flex justify-center p-4"},r.createElement(f,{onExportClick:async function(){const e=c.getMeasurements().filter((e=>I===e.referenceStudyUID&&m.includes(e.referenceSeriesUID)));M(e,c)},onCreateReportClick:()=>{y("SAVE_REPORT",{viewportId:n.activeViewportId,isBackupSave:!0})},disabled:0===P.length&&0===x.length})))}A.propTypes={servicesManager:i().shape({services:i().shape({measurementService:i().shape({getMeasurements:i().func.isRequired,VALUE_TYPES:i().object.isRequired}).isRequired}).isRequired}).isRequired};const b=A;var C=n(73577);const N=function({commandsManager:e,extensionManager:t,servicesManager:n}){return[{name:"seriesList",iconName:"tab-studies",iconLabel:"Studies",label:C.Z.t("SidePanel:Studies"),component:E.bind(null,{commandsManager:e,extensionManager:t,servicesManager:n})},{name:"trackedMeasurements",iconName:"tab-linear",iconLabel:"Measure",label:C.Z.t("SidePanel:Measurements"),component:b.bind(null,{commandsManager:e,extensionManager:t,servicesManager:n})}]};function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},_.apply(this,arguments)}const x=r.lazy((()=>n.e(822).then(n.bind(n,86822)))),P=e=>r.createElement(r.Suspense,{fallback:r.createElement("div",null,"Loading...")},r.createElement(x,e));const O=function({servicesManager:e,commandsManager:t,extensionManager:n}){return[{name:"cornerstone-tracked",component:s=>r.createElement(P,_({servicesManager:e,commandsManager:t,extensionManager:n},s))}]},V={id:JSON.parse('{"u2":"@ohif/extension-measurement-tracking"}').u2,getContextModule:s.Z,getPanelModule:N,getViewportModule:O}}}]);
//# sourceMappingURL=19.bundle.8638e670f38a61ac5360.js.map