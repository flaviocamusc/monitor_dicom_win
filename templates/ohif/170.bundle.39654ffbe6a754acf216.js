"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[170],{42170:(e,n,t)=>{t.r(n),t.d(n,{createReferencedImageDisplaySet:()=>ee,default:()=>ae,hydrateStructuredReport:()=>J.Z,srProtocol:()=>_});var o=t(43001);const a=JSON.parse('{"u2":"@ohif/extension-cornerstone-dicom-sr"}').u2,r="dicom-sr",s=`${a}.sopClassHandlerModule.${r}`;var i=t(71771),c=t(45451),d=t(76634),l=t(56846),u=t(64035);const S={POINT:"POINT",MULTIPOINT:"MULTIPOINT",POLYLINE:"POLYLINE",CIRCLE:"CIRCLE",ELLIPSE:"ELLIPSE"};class g extends d.AnnotationTool{constructor(e={},n={configuration:{}}){super(e,n),this.isPointNearTool=()=>null,this.getHandleNearImagePoint=()=>null,this.renderAnnotation=(e,n)=>{const{viewport:t}=e,{element:o}=t;let a=d.annotation.state.getAnnotations(this.getToolName(),o);if(!a?.length)return;if(a=this.filterInteractableAnnotationsForElement(o,a),!a?.length)return;const r=(0,u.yR)(o),{activeIndex:s,trackingUniqueIdentifiers:i}=r,c=i[s],l=a.filter((e=>i.includes(e.data?.cachedStats?.TrackingUniqueIdentifier)));if(!t._actors?.size)return;const g={toolGroupId:this.toolGroupId,toolName:this.getToolName(),viewportId:e.viewport.id};for(let e=0;e<l.length;e++){const o=l[e],a=o.annotationUID,{renderableData:r}=o.data.cachedStats,{cachedStats:s}=o.data,{referencedImageId:i}=o.metadata;g.annotationUID=a;const u=this.getStyle("lineWidth",g,o),f=this.getStyle("lineDash",g,o),m={color:s.TrackingUniqueIdentifier===c?"rgb(0, 255, 0)":this.getStyle("color",g,o),lineDash:f,lineWidth:u};Object.keys(r).forEach((e=>{const s=r[e];let c,l;switch(e){case S.POINT:c=this.renderPoint;break;case S.MULTIPOINT:c=this.renderMultipoint;break;case S.POLYLINE:c=this.renderPolyLine;break;case S.CIRCLE:c=this.renderEllipse;break;case S.ELLIPSE:c=this.renderEllipse,l=d.utilities.math.ellipse.getCanvasEllipseCorners;break;default:throw new Error(`Unsupported GraphicType: ${e}`)}const u=c(n,t,s,a,i,m);this.renderTextBox(n,t,u,l,o,g,m)}))}}}_getTextBoxLinesFromLabels(e){const n=Math.min(e.length,3),t=[];for(let o=0;o<n;o++){const n=e[o];t.push(`${m(n.label)}${n.value}`)}return t}renderPolyLine(e,n,t,o,a,r){const s={color:r.color,width:r.lineWidth};let i=[];return t.map(((t,a)=>{const r=t.map((e=>n.worldToCanvas(e))),c=`${a}`;2===r.length?d.drawing.drawLine(e,o,c,r[0],r[1],s):d.drawing.drawPolyline(e,o,c,r,s),i=i.concat(r)})),i}renderMultipoint(e,n,t,o,a,r){let s;t.map(((t,a)=>{s=t.map((e=>n.worldToCanvas(e)));d.drawing.drawHandles(e,o,"0",s,{color:r.color})}))}renderPoint(e,n,t,o,a,r){const s=[];return t.map(((t,i)=>{const c=t[0];s.push(n.worldToCanvas(c));const u=l.metaData.get("imagePixelModule",a);let S=10,g=10;if(u){const{columns:e,rows:n}=u;S=e/10,g=n/10}const f=l.utilities.worldToImageCoords(a,c),m=l.utilities.imageToWorldCoords(a,[f[0]+S,f[1]+g]);s.push(n.worldToCanvas(m));const I=`${i}`;d.drawing.drawArrow(e,o,I,s[1],s[0],{color:r.color,width:r.lineWidth})})),s}renderEllipse(e,n,t,o,a,r){let s;return t.map(((t,a)=>{if(0===t.length)return;const i=t,c=n.getRotation();let l;s=i.map((e=>n.worldToCanvas(e))),l=90==c||270==c?d.utilities.math.ellipse.getCanvasEllipseCorners([s[2],s[3],s[0],s[1]]):d.utilities.math.ellipse.getCanvasEllipseCorners(s);const u=`${a}`;d.drawing.drawEllipse(e,o,u,l[0],l[1],{color:r.color,width:r.lineWidth})})),s}renderTextBox(e,n,t,o,a,r,s={}){if(!t||!a)return;const{annotationUID:i,data:c={}}=a,{label:l}=c,{color:u}=s;let S=t;"function"==typeof o&&(S=o(t));const g=this._getTextBoxLinesFromLabels(l),f=d.utilities.drawing.getTextBoxCoordsCanvas(S);a.data?.handles?.textBox?.worldPosition||(a.data.handles.textBox.worldPosition=n.canvasToWorld(f));const m=n.worldToCanvas(a.data.handles.textBox.worldPosition),I=this.getLinkedTextBoxStyle(r,a),p=d.drawing.drawLinkedTextBox(e,i,"1",g,m,t,{},{...I,color:u}),{x:h,y:R,width:C,height:T}=p;a.data.handles.textBox.worldBoundingBox={topLeft:n.canvasToWorld([h,R]),topRight:n.canvasToWorld([h+C,R]),bottomLeft:n.canvasToWorld([h,R+T]),bottomRight:n.canvasToWorld([h+C,R+T])}}}g.toolName="DICOMSRDisplay";const f={"Short Axis":"W: ","Long Axis":"L: ",AREA:"Area: ",Length:"",CORNERSTONEFREETEXT:""};function m(e){const n=f[e];return void 0!==n?n:e}const I={DICOMSRDisplay:g.toolName,SRLength:"SRLength",SRBidirectional:"SRBidirectional",SREllipticalROI:"SREllipticalROI",SRCircleROI:"SRCircleROI",SRArrowAnnotate:"SRArrowAnnotate",SRAngle:"SRAngle",SRCobbAngle:"SRCobbAngle",SRRectangleROI:"SRRectangleROI",SRPlanarFreehandROI:"SRPlanarFreehandROI"},p=1e-4;function h(e,n,t){const o=I.DICOMSRDisplay,a={TrackingUniqueIdentifier:e.TrackingUniqueIdentifier,renderableData:{},labels:e.labels,imageId:n};e.coords.forEach((t=>{const{GraphicType:o,GraphicData:r}=t;void 0===a.renderableData[o]&&(a.renderableData[o]=[]),a.renderableData[o].push(function(e,n,t,o){const[a,r]=o.split(":");let s;switch(e){case S.POINT:case S.MULTIPOINT:case S.POLYLINE:s=[];for(let e=0;e<n.length;e+=2){const o=l.utilities.imageToWorldCoords(t,[n[e],n[e+1]]);s.push(o)}break;case S.CIRCLE:{const e=[];for(let o=0;o<n.length;o+=2){const a=l.utilities.imageToWorldCoords(t,[n[o],n[o+1]]);e.push(a)}const o=e[0],a=e[1],r=c.R3.distance(o,a),i=l.metaData.get("imagePlaneModule",t);if(!i)throw new Error("No imagePlaneModule found");const{columnCosines:d,rowCosines:u}=i,S=c.R3.create();c.R3.scaleAndAdd(S,o,d,r);const g=c.R3.create();c.R3.scaleAndAdd(g,o,d,-r);const f=c.R3.create();c.R3.scaleAndAdd(f,o,u,r);const m=c.R3.create();c.R3.scaleAndAdd(m,o,u,-r),s=[S,g,f,m];break}case S.ELLIPSE:{const e=[];for(let o=0;o<n.length;o+=2){const a=l.utilities.imageToWorldCoords(t,[n[o],n[o+1]]);e.push(a)}const o=c.R3.fromValues(...e[0]),a=c.R3.fromValues(...e[1]),r=c.R3.fromValues(...e[2]),i=c.R3.fromValues(...e[3]),d=c.R3.create();c.R3.sub(d,a,o),c.R3.normalize(d,d);const u=c.R3.create();c.R3.sub(u,i,r),c.R3.normalize(u,u);const S=l.metaData.get("imagePlaneModule",t);if(!S)throw new Error("imageId does not have imagePlaneModule metadata");const{columnCosines:g}=S,f=c.R3.fromValues(...g),m=Math.abs(c.R3.dot(f,d)),I=Math.abs(c.R3.dot(f,u)),h=Math.abs(m),R=Math.abs(I);s=[],Math.abs(h-1)<p?s=[e[0],e[1],e[2],e[3]]:Math.abs(R-1)<p?s=[e[2],e[3],e[0],e[1]]:console.warn("OBLIQUE ELLIPSE NOT YET SUPPORTED");break}default:console.warn("Unsupported GraphicType:",e)}return s}(o,r,n,e.TrackingIdentifier))}));const r=l.metaData.get("imagePlaneModule",n),s=d.annotation.state.getAnnotationManager(),i=e.coords[0].ReferencedSOPSequence&&e.coords[0].ReferencedSOPSequence[0]?.ReferencedFrameNumber||1,u={annotationUID:e.TrackingUniqueIdentifier,metadata:{FrameOfReferenceUID:r.frameOfReferenceUID,toolName:o,referencedImageId:n},data:{label:e.labels,handles:{textBox:e.textBox??{}},cachedStats:{TrackingUniqueIdentifier:a.TrackingUniqueIdentifier,renderableData:a.renderableData},frameNumber:i}};s.addAnnotation(u),e.loaded=!0,e.imageId=n,e.displaySetInstanceUID=t,e.ReferencedSOPInstanceUID=e.coords[0].ReferencedSOPSequence.ReferencedSOPInstanceUID,e.frameNumber=i,delete e.coords}var R=t(91202);const C=R.adaptersSR.Cornerstone3D.MeasurementReport.CORNERSTONE_TOOL_CLASSES_BY_UTILITY_TYPE,T=["cornerstoneTools@^4.0.0"],D=C.CORNERSTONE_3D_TAG;const{CodeScheme:O}=R.adaptersSR.Cornerstone3D,{ImageSet:E,MetadataProvider:y}=i.classes,b=["1.2.840.10008.5.1.4.1.1.88.11","1.2.840.10008.5.1.4.1.1.88.22","1.2.840.10008.5.1.4.1.1.88.33","1.2.840.10008.5.1.4.1.1.88.34"],U="Cornerstone3DTools",N="0.1",w=(e,n)=>{n.forEach((n=>{if(n.StudyInstanceUID!==e)throw console.warn("Not all instances have the same UID",e,n),new Error(`Instances ${n.SOPInstanceUID} does not belong to ${e}`)}))},M={ImagingMeasurementReport:"126000",ImageLibrary:"111028",ImagingMeasurements:"126010",MeasurementGroup:"125007",ImageLibraryGroup:"126200",TrackingUniqueIdentifier:"112040",TrackingIdentifier:"112039",Finding:"121071",FindingSite:"G-C0E3",CornerstoneFreeText:O.codeValues.CORNERSTONEFREETEXT},v={SRT:"SRT",CornerstoneCodeSchemes:[O.CodingSchemeDesignator,"CST4"]},P={INFERRED_FROM:"INFERRED FROM",CONTAINS:"CONTAINS"},q="CORNERSTONEFREETEXT";function A(e,n){return this.instances.push(...e),i.utils.sortStudyInstances(this.instances),this.instance=this.instances[this.instances.length-1],this.isLoaded=!1,this}function L(e,n,t){if(!e||!e.length)throw new Error("No instances were provided");i.utils.sortStudyInstances(e);const o=e[e.length-1],{StudyInstanceUID:a,SeriesInstanceUID:r,SOPInstanceUID:c,SeriesDescription:d,SeriesNumber:l,SeriesDate:u,ConceptNameCodeSequence:S,SOPClassUID:g}=o;if(w(o.StudyInstanceUID,e),!S||S.CodeValue!==M.ImagingMeasurementReport)return n.services.uiNotificationService.show({title:"DICOM SR",message:"OHIF only supports TID1500 Imaging Measurement Report Structured Reports. The SR you’re trying to view is not supported.",type:"warning",duration:6e3}),[];const f={Modality:"SR",displaySetInstanceUID:i.utils.guid(),SeriesDescription:d,SeriesNumber:l,SeriesDate:u,SOPInstanceUID:c,SeriesInstanceUID:r,StudyInstanceUID:a,SOPClassHandlerId:s,SOPClassUID:g,instances:e,referencedImages:null,measurements:null,isDerivedDisplaySet:!0,isLoaded:!1,sopClassUids:b,instance:o,addInstances:A};return f.load=()=>function(e,n,t){const{displaySetService:o,measurementService:a}=n.services,r=t.getDataSources(),s=r[0],{ContentSequence:i}=e.instance;e.referencedImages=function(e){const n=B(e.find((e=>e.ConceptNameCodeSequence.CodeValue===M.ImageLibrary)).ContentSequence).find((e=>e.ConceptNameCodeSequence.CodeValue===M.ImageLibraryGroup)),t=[];return B(n.ContentSequence).forEach((e=>{const{ReferencedSOPSequence:n}=e;if(n)for(const e of B(n))if(e.ReferencedSOPClassUID){const{ReferencedSOPClassUID:n,ReferencedSOPInstanceUID:o}=e;t.push({ReferencedSOPClassUID:n,ReferencedSOPInstanceUID:o})}})),t}(i),e.measurements=function(e){const n=e.find((e=>e.ConceptNameCodeSequence.CodeValue===M.ImagingMeasurements)),t=function(e){const n={};return e.forEach((e=>{const t=B(e.ContentSequence),o=t.find((e=>e.ConceptNameCodeSequence.CodeValue===M.TrackingUniqueIdentifier));o||console.warn("No Tracking Unique Identifier, skipping ambiguous measurement.");const a=o.UID;void 0===n[a]?n[a]=[...t]:t.forEach((e=>{e.ConceptNameCodeSequence.CodeValue!==M.TrackingUniqueIdentifier&&n[a].push(e)}))})),n}(B(n.ContentSequence).filter((e=>e.ConceptNameCodeSequence.CodeValue===M.MeasurementGroup))),o=[];return Object.keys(t).forEach((e=>{const n=function(e){if(e.some((e=>"SCOORD"===e.ValueType||"SCOORD3D"===e.ValueType)))return function(e){const n=e.find((e=>"SCOORD"===e.ValueType)),t=e.find((e=>"UIDREF"===e.ValueType)),o=e.find((e=>e.ConceptNameCodeSequence.CodeValue===M.TrackingIdentifier));if(!n)return void console.warn(`graphic ValueType ${n.ValueType} not currently supported, skipping annotation.`);const a=e.filter((e=>"NUM"===e.ValueType)),r={loaded:!1,labels:[],coords:[V(n)],TrackingUniqueIdentifier:t.UID,TrackingIdentifier:o.TextValue};return a.forEach((e=>{const{ConceptNameCodeSequence:n,MeasuredValueSequence:t}=e;t&&r.labels.push(F(n,t))})),r}(e);return function(e){const n=e.filter((e=>"NUM"===e.ValueType)),t=e.find((e=>"UIDREF"===e.ValueType)),o=e.find((e=>e.ConceptNameCodeSequence.CodeValue===M.TrackingIdentifier)),a=e.find((e=>e.ConceptNameCodeSequence.CodeValue===M.Finding)),r=e.filter((e=>e.ConceptNameCodeSequence.CodingSchemeDesignator===v.SRT&&e.ConceptNameCodeSequence.CodeValue===M.FindingSite)),s={loaded:!1,labels:[],coords:[],TrackingUniqueIdentifier:t.UID,TrackingIdentifier:o.TextValue};a&&v.CornerstoneCodeSchemes.includes(a.ConceptCodeSequence.CodingSchemeDesignator)&&a.ConceptCodeSequence.CodeValue===M.CornerstoneFreeText&&s.labels.push({label:q,value:a.ConceptCodeSequence.CodeMeaning});if(r.length){const e=r.find((e=>v.CornerstoneCodeSchemes.includes(e.ConceptCodeSequence.CodingSchemeDesignator)&&e.ConceptCodeSequence.CodeValue===M.CornerstoneFreeText));e&&s.labels.push({label:q,value:e.ConceptCodeSequence.CodeMeaning})}return n.forEach((e=>{const{ConceptNameCodeSequence:n,ContentSequence:t,MeasuredValueSequence:o}=e,{ValueType:a}=t;if("SCOORD"===!a)return void console.warn(`Graphic ${a} not currently supported, skipping annotation.`);const r=V(t);r&&s.coords.push(r),o&&s.labels.push(F(n,o))})),s}(e)}(t[e]);n&&o.push(n)})),o}(i);const c=a.getSourceMappings(U,N);e.isHydrated=!1,e.isRehydratable=function(e,n){if(!n||!n.length)return!1;const t=n.map((e=>e.annotationType)),{measurements:o}=e,a=Object.keys(C).filter((e=>"function"==typeof C[e].isValidCornerstoneTrackingIdentifier)),r=[];a.forEach((e=>{t.includes(e)&&r.push(C[e])}));for(let e=0;e<o.length;e++){const{TrackingIdentifier:n}=o[e]||{};if(r.some((e=>{let[t,o]=n.split(":");T.includes(t)&&(t=D);const a=`${t}:${o}`;return e.isValidCornerstoneTrackingIdentifier(a)})))return!0;console.log("Measurement is not rehydratable",n,o[e])}return console.log("No measurements found which were rehydratable"),!1}(e,c),e.isLoaded=!0,o.activeDisplaySets.forEach((t=>{k(e,t,s,n)})),o.subscribe(o.EVENTS.DISPLAY_SETS_ADDED,(t=>{const{displaySetsAdded:o}=t;o.forEach((t=>{k(e,t,s,n)}))}))}(f,n,t),[f]}function k(e,n,t,o){const{customizationService:a}=o.services;let r=e.measurements.filter((e=>!1===e.loaded));if(0===r.length)return;if(!n instanceof E)return;if(n.unsupported)return;const{sopClassUids:s}=n;if(r=r.filter((e=>e.coords.some((e=>s.includes(e.ReferencedSOPSequence.ReferencedSOPClassUID))))),0===r.length)return;const i=[];r.forEach((e=>{const{coords:n}=e;n.forEach((e=>{const n=e.ReferencedSOPSequence.ReferencedSOPInstanceUID;i.includes(n)||i.push(n)}))}));const c=t.getImageIdsForDisplaySet(n);for(const t of c){if(!r.length)return;const{SOPInstanceUID:o,frameNumber:s}=y.getUIDsFromImageID(t);if(i.includes(o))for(let i=r.length-1;i>=0;i--){let c=r[i];const d=a.getModeCustomization("onBeforeSRAddMeasurement")?.value;"function"==typeof d&&(c=d({measurement:c,StudyInstanceUID:e.StudyInstanceUID,SeriesInstanceUID:e.SeriesInstanceUID})),x(c,o,s)&&(h(c,t,n.displaySetInstanceUID),r.splice(i,1))}}}function x(e,n,t){const{coords:o}=e,a=e.coords[0].ReferencedSOPSequence&&e.coords[0].ReferencedSOPSequence[0]?.ReferencedFrameNumber||1;if(t&&Number(t)!==Number(a))return!1;for(let e=0;e<o.length;e++){const t=o[e],{ReferencedSOPInstanceUID:a}=t.ReferencedSOPSequence;if(a===n)return!0}}function V(e){const{ValueType:n,RelationshipType:t,GraphicType:o,GraphicData:a}=e;if(t!=P.INFERRED_FROM&&t!=P.CONTAINS)return void console.warn(`Relationshiptype === ${t}. Cannot deal with NON TID-1400 SCOORD group with RelationshipType !== "INFERRED FROM" or "CONTAINS"`);const r={ValueType:n,GraphicType:o,GraphicData:a};if("SCOORD"===n){const{ReferencedSOPSequence:n}=e.ContentSequence;r.ReferencedSOPSequence=n}else if("SCOORD3D"===n){const{ReferencedFrameOfReferenceSequence:n}=e.ContentSequence;r.ReferencedFrameOfReferenceSequence=n}return r}function F(e,n){const{CodeMeaning:t}=e,{NumericValue:o,MeasurementUnitsCodeSequence:a}=n,{CodeValue:r}=a;return{label:t,value:`${o?Number(o).toFixed(2):""} ${r}`}}function B(e){return e?Array.isArray(e)?e:[e]:[]}const $=function({servicesManager:e,extensionManager:n}){return[{name:r,sopClassUids:b,getDisplaySetsFromSeries:t=>L(t,e,n)}]},_={id:"@ohif/sr",name:"SR Key Images",protocolMatchingRules:[],toolGroupIds:["default"],numberOfPriorsReferenced:0,defaultViewport:{viewportOptions:{viewportType:"stack",toolGroupId:"default",allowUnmatchedView:!0},displaySets:[{id:"srDisplaySetId",matchedDisplaySetsIndex:-1}]},displaySetSelectors:{srDisplaySetId:{seriesMatchingRules:[{attribute:"Modality",constraint:{equals:"SR"}}]}},stages:[{name:"SR Key Images",viewportStructure:{layoutType:"grid",properties:{rows:1,columns:1}},viewports:[{viewportOptions:{allowUnmatchedView:!0},displaySets:[{id:"srDisplaySetId"}]}]}]};var G=t(67540);const{log:W}=i.default;const H=function(e,n){const t={};function o(o,a){if(!o.metadata?.referencedImageId)return void W.warn(`[DICOMSR] No referencedImageId found for ${a} ${o.id}`);const r=o.metadata.referencedImageId;t[r]||(t[r]={});const s=t[r];s[a]||(s[a]={data:[]});const i=e.find((e=>e.uid===o.annotationUID)),c=s[a].data;let{finding:d}=i;const l=[];i.label&&(n.includes(a)?d={CodeValue:"CORNERSTONEFREETEXT",CodingSchemeDesignator:"CORNERSTONEJS",CodeMeaning:i.label}:l.push({CodeValue:"CORNERSTONEFREETEXT",CodingSchemeDesignator:"CORNERSTONEJS",CodeMeaning:i.label})),i.findingSites&&l.push(...i.findingSites);const u=Object.assign({},o,{finding:d,findingSites:l});c.push(u)}const a=e.map((e=>e.uid)).slice(),r=d.annotation.state.getAnnotationManager(),s=r.getFramesOfReference();for(let e=0;e<s.length;e++){const n=s[e],i=r.getAnnotations(n),c=Object.keys(i);for(let e=0;e<c.length;e++){const n=c[e],r=i[n];if(r)for(let e=0;e<r.length;e++){const s=r[e],i=a.findIndex((e=>e===s.annotationUID));if(-1!==i&&(o(s,n),a.splice(i,1),!a.length))return t}}}return t},{MeasurementReport:j}=R.adaptersSR.Cornerstone3D,{log:z}=i.default,Y=e=>{const{servicesManager:n}=e,{customizationService:t}=n.services,o={downloadReport:({measurementData:e,additionalFindingTypes:n,options:t={}})=>{const a=o.generateReport(e,n,t),r=G.default.data.datasetToBlob(a);var s=URL.createObjectURL(r);window.location.assign(s)},storeMeasurements:async({measurementData:e,dataSource:n,additionalFindingTypes:o,options:a={}})=>{if(z.info("[DICOMSR] storeMeasurements"),!n||!n.store||!n.store.dicom)return z.error("[DICOMSR] datasource has no dataSource.store.dicom endpoint!"),Promise.reject({});try{const r=((e,n,t={})=>{const o=H(e,n),a=j.generateReport(o,l.metaData,l.utilities.worldToImageCoords,t),{dataset:r}=a;return void 0===r.SpecificCharacterSet&&(r.SpecificCharacterSet="ISO_IR 192"),r})(e,o,a),{StudyInstanceUID:s,ContentSequence:c}=r;if(!c?.[4].ContentSequence?.length)throw console.log("naturalizedReport missing imaging content",r),new Error("Invalid report, no content");const d=t.getModeCustomization("onBeforeDicomStore")?.value;let u;return"function"==typeof d&&(u=d({measurementData:e,naturalizedReport:r})),await n.store.dicom(r,null,u),s&&n.deleteStudyMetadataPromise(s),i.DicomMetadataStore.addInstances([r],!0),r}catch(e){throw console.warn(e),z.error(`[DICOMSR] Error while saving the measurements: ${e.message}`),new Error(e.message||"Error while saving the measurements.")}}},a={downloadReport:{commandFn:o.downloadReport,storeContexts:[],options:{}},storeMeasurements:{commandFn:o.storeMeasurements,storeContexts:[],options:{}}};return{actions:o,definitions:a,defaultContext:"CORNERSTONE_STRUCTURED_REPORT"}};function X(e,n,t){class o extends n{}o.toolName=e,(0,d.addTool)(o)}var J=t(38965);const K=i.classes.ImageSet,Z=(e,n)=>{const{displaySetInstanceUID:t,ReferencedSOPInstanceUID:o}=e,a=n.getDisplaySetByUID(t);if(a.images)return a.images.find((e=>e.SOPInstanceUID===o))},Q=(e,n)=>{const t=[],o={};for(const a of n.measurements){const{imageId:n}=a;if(!n)continue;if(o[n])continue;const r=Z(a,e);r?(o[n]=r,t.push(r)):console.log("Measurement",a,"had no instances found")}return t},ee=(e,n)=>{const t=Q(e,n),o=new K(t),a=t[0];return o.setAttributes({displaySetInstanceUID:o.uid,SeriesDate:a.SeriesDate,SeriesTime:a.SeriesTime,SeriesInstanceUID:o.uid,StudyInstanceUID:a.StudyInstanceUID,SeriesNumber:a.SeriesNumber||0,SOPClassUID:a.SOPClassUID,SeriesDescription:`${n.SeriesDescription} KO ${n.instance.SeriesNumber}`,Modality:"KO",isMultiFrame:!1,numImageFrames:t.length,SOPClassHandlerId:"@ohif/extension-default.sopClassHandlerModule.stack",isReconstructable:!1,isCompositeStack:!0,madeInClient:!0,excludeFromThumbnailBrowser:!0,updateInstances:function(){this.images.splice(0,this.images.length,...Q(e,n)),this.numImageFrames=this.images.length}}),e.addDisplaySets(o),o};function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ne.apply(this,arguments)}const te=o.lazy((()=>t.e(886).then(t.bind(t,48886)))),oe=e=>o.createElement(o.Suspense,{fallback:o.createElement("div",null,"Loading...")},o.createElement(te,e)),ae={id:a,onModeEnter:function({servicesManager:e}){const{displaySetService:n}=e.services;[...n.getDisplaySetCache().values()].filter((e=>e.SOPClassHandlerId===s)).forEach((e=>{e.isHydrated=!1}))},preRegistration:function({configuration:e={}}){(0,d.addTool)(g),X(I.SRLength,d.LengthTool),X(I.SRBidirectional,d.BidirectionalTool),X(I.SREllipticalROI,d.EllipticalROITool),X(I.SRCircleROI,d.CircleROITool),X(I.SRArrowAnnotate,d.ArrowAnnotateTool),X(I.SRAngle,d.AngleTool),X(I.SRCobbAngle,d.CobbAngleTool),X(I.SRPlanarFreehandROI,d.PlanarFreehandROITool);const n={lineDash:"4,4"};d.annotation.config.style.setToolGroupToolStyles("SRToolGroup",{SRLength:n,SRBidirectional:n,SREllipticalROI:n,SRCircleROI:n,SRArrowAnnotate:n,SRCobbAngle:n,SRAngle:n,SRPlanarFreehandROI:n,global:{}})},getViewportModule:({servicesManager:e,extensionManager:n})=>[{name:"dicom-sr",component:t=>o.createElement(oe,ne({servicesManager:e,extensionManager:n},t))}],getCommandsModule:Y,getSopClassHandlerModule:$,getUtilityModule:({servicesManager:e})=>[{name:"tools",exports:{toolNames:I}}]}},64035:(e,n,t)=>{t.d(n,{l2:()=>r,yR:()=>s});var o=t(56846);const a={TrackingUniqueIdentifier:null,trackingIdentifiersByViewportId:{}};function r(e,n,t=0){const r=(0,o.getEnabledElement)(e),{viewport:s}=r;a.trackingIdentifiersByViewportId[s.id]={trackingUniqueIdentifiers:n,activeIndex:t}}function s(e){const n=(0,o.getEnabledElement)(e),{viewport:t}=n;return a.trackingIdentifiersByViewportId[t.id]?a.trackingIdentifiersByViewportId[t.id]:{trackingUniqueIdentifiers:[]}}},38965:(e,n,t)=>{t.d(n,{Z:()=>I});var o=t(56846),a=t(71771);var r=t(91202),s=t(76634);const{locking:i}=s.annotation,{guid:c}=a.default.utils,{MeasurementReport:d,CORNERSTONE_3D_TAG:l}=r.adaptersSR.Cornerstone3D,u="Cornerstone3DTools",S="0.1",g=["cornerstoneTools@^4.0.0"],f=(e,n)=>{if(!n||"CORNERSTONEJS"===n.CodingSchemeDesignator)return;const t=`${n.CodingSchemeDesignator}:${n.CodeValue}`;return{...e[t],ref:t,...n,text:n.CodeMeaning}},m=(e,n)=>{if(!n||!n.length)return;const t=[];for(let o=0;o<n.length;o++){const a=f(e,n[o][0]||n[o]);a&&t.push(a)}return t.length&&t||void 0};function I({servicesManager:e,extensionManager:n,appConfig:t},r){const I=s.annotation.state.getAnnotationManager(),R=t?.disableEditing,C=n.getActiveDataSource()[0],{measurementService:T,displaySetService:D,customizationService:O}=e.services,E=O.getCustomization("codingValues",{}),y=D.getDisplaySetByUID(r),b=T.getSourceMappings(u,S);if(!b||!b.length)throw new Error("Attempting to hydrate measurements service when no mappings present. This shouldn't be reached.");const U=a.DicomMetadataStore.getInstance(y.StudyInstanceUID,y.SeriesInstanceUID,y.SOPInstanceUID),N={},w={};y.measurements.forEach((e=>{const{ReferencedSOPInstanceUID:n,imageId:t,frameNumber:o}=e;N[n]||(N[n]=t,w[n]=[]),w[n][o]||(w[n][o]=t)}));const M=function(e){const n="Imaging Measurements",t="Measurement Group",o="Tracking Identifier",a=p(e.ContentSequence).find(h(n)),r=p(a.ContentSequence).filter(h(t)),s={},i=d.CORNERSTONE_TOOL_CLASSES_BY_UTILITY_TYPE,c=[];return Object.keys(i).forEach((e=>{c.push(i[e]),s[e]=[]})),r.forEach(((e,n)=>{const t=p(e.ContentSequence).find((e=>e.ConceptNameCodeSequence.CodeMeaning===o)),a=t.TextValue;let[r,s]=a.split(":");g.includes(r)&&(r=l);const i=`${r}:${s}`;t.TextValue=i})),e}(U);let v=d.generateToolState(M,N,o.utilities.imageToWorldCoords,o.metaData);const P=O.getModeCustomization("onBeforeSRHydration")?.value;"function"==typeof P&&(v=P({storedMeasurementByAnnotationType:v,displaySet:y}));const q=b.map((e=>e.annotationType)),A={};Object.keys(v).forEach((e=>{q.includes(e)&&(A[e]=v[e])}));const L=[];let k;Object.keys(A).forEach((e=>{A[e].forEach((e=>{const n=e.annotation.data&&e.annotation.data.frameNumber||1,t=w[e.sopInstanceUid][n]||N[e.sopInstanceUid];L.includes(t)||L.push(t)}))}));const x=[];for(let e=0;e<L.length;e++){const n=L[e],{SeriesInstanceUID:t,StudyInstanceUID:a}=o.metaData.get("instance",n);x.includes(t)||x.push(t),k?k!==a&&console.warn("NO SUPPORT FOR SRs THAT HAVE MEASUREMENTS FROM MULTIPLE STUDIES."):k=a}return Object.keys(A).forEach((e=>{A[e].forEach((n=>{const t=n.annotation.data&&n.annotation.data.frameNumber||1,a=w[n.sopInstanceUid][t]||N[n.sopInstanceUid];n.uid=c();const r=o.metaData.get("instance",a),{FrameOfReferenceUID:s}=r,d={annotationUID:n.annotation.annotationUID,data:n.annotation.data,metadata:{toolName:e,referencedImageId:a,FrameOfReferenceUID:s}},l=T.getSource(u,S);d.data.label=function(e){const{findingSites:n=[],finding:t}=e;let o=n.find((e=>"CORNERSTONEFREETEXT"===e.CodeValue));return o?o.CodeMeaning:t&&"CORNERSTONEFREETEXT"===t.CodeValue?t.CodeMeaning:void 0}(n),d.data.finding=f(E,n.finding?.[0]),d.data.findingSites=m(E,n.findingSites),d.data.site=d.data.findingSites?.[0];const g=b.find((n=>n.annotationType===e)),p=T.addRawMeasurement(l,e,{annotation:d},g.toMeasurementSchema,C);if(R){const e=I.getAnnotation(p);i.setAnnotationLocked(e,!0)}L.includes(a)||L.push(a)}))})),y.isHydrated=!0,{StudyInstanceUID:k,SeriesInstanceUIDs:x}}const p=function(e){return Array.isArray(e)?e:[e]},h=e=>n=>n.ConceptNameCodeSequence.CodeMeaning===e}}]);
//# sourceMappingURL=170.bundle.39654ffbe6a754acf216.js.map