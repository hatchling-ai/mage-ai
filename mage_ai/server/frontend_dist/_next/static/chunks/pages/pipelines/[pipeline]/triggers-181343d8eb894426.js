(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4249],{58122:function(e,n,t){"use strict";t.d(n,{CL:function(){return f},FS:function(){return h},JZ:function(){return b},e7:function(){return v},v0:function(){return p},wx:function(){return g}});var r=t(75582),i=t(82394),o=t(43313),c=t(93348),u=t(1286),l=t(90211),a=t(84779);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e){var n=e.statistics,t=Object.keys(n),r=Array(o.Dy.length).fill(0);return 0===t.length?null:(t.forEach((function(e){if(o.Dy.includes(e)){var t=o.CC[e],i=n[e],c=i,u=!1,l=[2,3],s=o.Ub[e],d=o.oH[e],p=o.OD[e];if(o.y_.includes(e))u=!0,l=[2,1,2];else if(e in o.Sq){i=(0,a.Jw)(i,0);var f=o.Sq[e];c=n[f]}var h={columnFlexNumbers:l,name:t,progress:u,rate:c,successDirection:d,warning:p};o.y_.includes(e)||(h.value=i),r[s]=h}})),r)}function f(e){var n=e.columnTypes,t=void 0===n?{}:n,r=e.statistics,i=Object.keys(r);if(0===i.length)return null;var c=Object.values(t),a=c.length,s=[];s.push({name:"Column count",successDirection:o.oH.column_count,value:(0,l.x6)(a)}),i.forEach((function(e){if(o.Zu.includes(e)){var n=o.CC[e],t=r[e],i=o.OD[e];s.push({name:n,successDirection:o.oH[e],value:(0,l.x6)(t),warning:i})}}));var d=(0,u.QO)(c),p=d.countCategory,f=d.countDatetime,h=d.countNumerical;return s.push({name:"Categorical Features",rate:p/a,value:(0,l.x6)(p)},{name:"Numerical Features",rate:h/a,value:(0,l.x6)(h)},{name:"Datetime Features",rate:f/a,value:(0,l.x6)(f)}),s}function h(e){return"string"===typeof e?e:JSON.stringify(e)}function g(e,n){var t,r;return null===e||void 0===e||null===(t=e.find((function(e){var t=e.block;return n(t)})))||void 0===t||null===(r=t.variables)||void 0===r?void 0:r.map((function(e){var n=e.value;return d(d({},e),{},{value:h(n)})}))}function b(e,n){return n===c.Xm.TIME?e.push({uuid:"execution_date",value:"<run datetime>"}):n===c.Xm.EVENT&&e.push({uuid:"event",value:"<trigger event>"}),e}function v(e){return e?Object.entries(e).reduce((function(e,n){var t=(0,r.Z)(n,2),o=t[0],c=t[1],u=c;try{u=JSON.parse(c)}catch(l){}return d(d({},e),{},(0,i.Z)({},o,u))}),{}):e}},97225:function(e,n,t){"use strict";var r=t(75582),i=t(12691),o=t.n(i),c=t(82684),u=t(83455),l=t(34376),a=t(60328),s=t(47999),d=t(67971),p=t(10919),f=t(93348),h=t(62609),g=t(86673),b=t(87815),v=t(19711),m=t(82531),x=t(10503),j=t(49125),y=t(45838),O=t(9736),Z=t(96510),w=t(66653),P=t(28598);n.Z=function(e){var n=e.fetchPipelineSchedules,t=e.highlightRowOnHover,i=e.includeCreatedAtColumn,_=e.includePipelineColumn,k=e.pipeline,C=e.pipelineSchedules,S=e.selectedSchedule,I=e.setErrors,E=e.setSelectedSchedule,T=e.stickyHeader,D=null===k||void 0===k?void 0:k.uuid,N=(0,l.useRouter)(),A=(0,c.useRef)({}),H=(0,c.useState)(null),V=H[0],R=H[1],Y=(0,c.useState)(0),M=Y[0],B=Y[1],F=(0,c.useState)(0),W=F[0],q=F[1],J=(0,u.Db)((function(e){return m.ZP.pipeline_schedules.useUpdate(e.id)({pipeline_schedule:e})}),{onSuccess:function(e){return(0,Z.wD)(e,{callback:function(){n()},onErrorCallback:function(e,n){return I({errors:n,response:e})}})}}),L=(0,r.Z)(J,1)[0],z=(0,u.Db)((function(e){return m.ZP.pipeline_schedules.useDelete(e)()}),{onSuccess:function(e){return(0,Z.wD)(e,{callback:function(){n(),D?N.push("/pipelines/[pipeline]/triggers","/pipelines/".concat(D,"/triggers")):n()},onErrorCallback:function(e,n){return I({errors:n,response:e})}})}}),U=(0,r.Z)(z,1)[0],X=[{label:function(){return""},uuid:"action"},{uuid:"Status"},{uuid:"Type"},{uuid:"Name"},{uuid:"Frequency"},{uuid:"Runs"},{uuid:"Latest run status"},{uuid:"Logs"}];(0,O.Ct)()||X.push({label:function(){return""},uuid:"edit/delete"});var G=[null,1,1,3,1,null,null,null,null];return _&&(X.splice(2,0,{uuid:"Pipeline"}),G.splice(2,0,2)),i&&(X.splice(3,0,{uuid:"Created at"}),G.splice(3,0,null)),(0,P.jsx)(y.cl,{overflowVisible:!0,children:0===C.length?(0,P.jsx)(g.Z,{px:3,py:1,children:(0,P.jsx)(v.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No triggers available"})}):(0,P.jsx)(b.Z,{columnFlex:G,columns:X,highlightRowOnHover:t,isSelectedRow:function(e){return C[e].id===(null===S||void 0===S?void 0:S.id)},onClickRow:E?function(e){return null===E||void 0===E?void 0:E(C[e])}:null,rowVerticalPadding:6,rows:C.map((function(e,n){var t,r=e.id,u=e.created_at,l=e.pipeline_runs_count,b=e.pipeline_uuid,m=e.last_pipeline_run_status,y=e.name,Z=e.schedule_interval,k=e.status,C=D||b;A.current[r]=(0,c.createRef)();var S=[(0,P.jsx)(a.Z,{iconOnly:!0,noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(n){(0,w.j)(n),L({id:e.id,status:f.fq.ACTIVE===k?f.fq.INACTIVE:f.fq.ACTIVE})},children:f.fq.ACTIVE===k?(0,P.jsx)(x.dz,{muted:!0,size:2*j.iI}):(0,P.jsx)(x.Py,{default:!0,size:2*j.iI})},"toggle_trigger_".concat(n)),(0,P.jsx)(v.ZP,{default:f.fq.INACTIVE===k,monospace:!0,success:f.fq.ACTIVE===k,children:k},"trigger_status_".concat(n)),(0,P.jsx)(v.ZP,{default:!0,monospace:!0,children:null===(t=f.Z4[e.schedule_type])||void 0===t?void 0:t.call(f.Z4)},"trigger_type_".concat(n)),(0,P.jsx)(o(),{as:"/pipelines/".concat(C,"/triggers/").concat(r),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,P.jsx)(p.Z,{bold:!0,onClick:function(e){(0,w.j)(e),N.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(C,"/triggers/").concat(r))},sameColorAsText:!0,children:y})},"trigger_name_".concat(n)),(0,P.jsx)(v.ZP,{default:!0,monospace:!0,children:Z},"trigger_frequency_".concat(n)),(0,P.jsx)(v.ZP,{default:!0,monospace:!0,children:l},"trigger_run_count_".concat(n)),(0,P.jsx)(v.ZP,{default:!0,monospace:!0,children:m||"N/A"},"latest_run_status_".concat(n)),(0,P.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return N.push("/pipelines/".concat(C,"/logs?pipeline_schedule_id[]=").concat(r))},children:(0,P.jsx)(x.B4,{default:!0,size:2*j.iI})},"logs_button_".concat(n))];return(0,O.Ct)()||S.push((0,P.jsxs)(d.Z,{children:[(0,P.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return N.push("/pipelines/".concat(C,"/triggers/").concat(r,"/edit"))},title:"Edit",children:(0,P.jsx)(x.I8,{default:!0,size:2*j.iI})}),(0,P.jsx)(g.Z,{mr:1}),(0,P.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){var e,n,t,i;R(r),B((null===(e=A.current[r])||void 0===e||null===(n=e.current)||void 0===n?void 0:n.offsetTop)||0),q((null===(t=A.current[r])||void 0===t||null===(i=t.current)||void 0===i?void 0:i.offsetLeft)||0)},ref:A.current[r],title:"Delete",children:(0,P.jsx)(x.rF,{default:!0,size:2*j.iI})}),(0,P.jsx)(s.Z,{onClickOutside:function(){return R(null)},open:V===r,children:(0,P.jsx)(h.Z,{danger:!0,left:(W||0)-286,onCancel:function(){return R(null)},onClick:function(){R(null),U(r)},title:"Are you sure you want to delete the trigger ".concat(y,"?"),top:(M||0)-(n<=1?40:96),width:40*j.iI})})]},"edit_delete_buttons_".concat(n))),_&&S.splice(2,0,(0,P.jsx)(v.ZP,{default:!0,monospace:!0,children:C},"pipeline_name_".concat(n))),i&&S.splice(3,0,(0,P.jsx)(v.ZP,{default:!0,monospace:!0,children:u},"created_at_".concat(n))),S})),stickyHeader:T,uuid:"pipeline-triggers"})})}},93348:function(e,n,t){"use strict";t.d(n,{TR:function(){return d},U5:function(){return l},Xm:function(){return o},Z4:function(){return s},fq:function(){return u},kJ:function(){return a}});var r,i,o,c=t(82394);!function(e){e.API="api",e.EVENT="event",e.TIME="time"}(o||(o={}));var u,l,a,s=(r={},(0,c.Z)(r,o.API,(function(){return"API"})),(0,c.Z)(r,o.EVENT,(function(){return"event"})),(0,c.Z)(r,o.TIME,(function(){return"schedule"})),r);!function(e){e.ACTIVE="active",e.INACTIVE="inactive"}(u||(u={})),function(e){e.ONCE="@once",e.HOURLY="@hourly",e.DAILY="@daily",e.WEEKLY="@weekly",e.MONTHLY="@monthly"}(l||(l={})),function(e){e.CREATED_AT="created_at",e.NAME="name",e.PIPELINE="pipeline_uuid",e.STATUS="status",e.TYPE="schedule_type"}(a||(a={}));var d=(i={},(0,c.Z)(i,a.CREATED_AT,"Created at"),(0,c.Z)(i,a.NAME,"Name"),(0,c.Z)(i,a.PIPELINE,"Pipeline"),(0,c.Z)(i,a.STATUS,"Status"),(0,c.Z)(i,a.TYPE,"Type"),i)},29237:function(e,n,t){"use strict";var r=t(9518),i=t(67971),o=t(86673),c=t(19711),u=t(23831),l=t(73942),a=t(37391),s=t(49125),d=t(28598),p=(0,r.css)(["padding:","px;padding-bottom:","px;padding-top:","px;"],2*s.iI,1.5*s.iI,1.5*s.iI),f=r.default.div.withConfig({displayName:"Panel__PanelStyle",componentId:"sc-1ct8cgl-0"})(["border-radius:","px;overflow:hidden;"," "," "," "," "," "," "," "," "," ",""],l.n_,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "}),(function(e){return"\n    border: 1px solid ".concat((e.theme.interactive||u.Z.interactive).defaultBorder,";\n  ")}),(function(e){return!e.dark&&"\n    background-color: ".concat((e.theme.background||u.Z.background).panel,";\n  ")}),(function(e){return e.dark&&"\n    background-color: ".concat((e.theme.background||u.Z.background).content,";\n  ")}),(function(e){return!e.fullHeight&&"\n    height: fit-content;\n  "}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,"px;\n  ")}),(function(e){return e.minWidth&&"\n    min-width: ".concat(e.minWidth,"px;\n\n    @media (max-width: ").concat(e.minWidth,"px) {\n      min-width: 0;\n    }\n  ")}),(function(e){return e.borderless&&"\n    border: none;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),h=r.default.div.withConfig({displayName:"Panel__HeaderStyle",componentId:"sc-1ct8cgl-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;"," "," "," ",""],l.n_,l.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||u.Z.background).chartBlock,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||u.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),p,(function(e){return e.headerPaddingVertical&&"\n    padding-bottom: ".concat(e.headerPaddingVertical,"px;\n    padding-top: ").concat(e.headerPaddingVertical,"px;\n  ")})),g=r.default.div.withConfig({displayName:"Panel__ContentStyle",componentId:"sc-1ct8cgl-2"})(["overflow-y:auto;padding:","px;height:100%;"," "," "," "," ",""],1.75*s.iI,a.w5,(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: calc(".concat(e.maxHeight," - ").concat(15*s.iI,"px);\n  ")}),(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),b=r.default.div.withConfig({displayName:"Panel__FooterStyle",componentId:"sc-1ct8cgl-3"})(["border-style:",";border-top-width:","px;padding:","px;"],l.M8,l.YF,1.75*s.iI);n.Z=function(e){var n=e.borderless,t=e.children,r=e.containerRef,u=e.contentContainerRef,l=e.dark,a=e.footer,s=e.fullHeight,p=void 0===s||s,v=e.fullWidth,m=void 0===v||v,x=e.header,j=e.headerHeight,y=e.headerIcon,O=e.headerPaddingVertical,Z=e.headerTitle,w=e.maxHeight,P=e.maxWidth,_=e.minWidth,k=e.noPadding,C=e.overflowVisible,S=e.subtitle;return(0,d.jsxs)(f,{borderless:n,dark:l,fullHeight:p,fullWidth:m,maxHeight:w,maxWidth:P,minWidth:_,overflowVisible:C,ref:r,children:[(x||Z)&&(0,d.jsxs)(h,{headerPaddingVertical:O,height:j,children:[x&&x,Z&&(0,d.jsx)(i.Z,{alignItems:"center",justifyContent:"space-between",children:(0,d.jsxs)(i.Z,{alignItems:"center",children:[y&&y,(0,d.jsx)(o.Z,{ml:y?1:0,children:(0,d.jsx)(c.ZP,{bold:!0,default:!0,children:Z})})]})})]}),(0,d.jsxs)(g,{maxHeight:w,noPadding:k,overflowVisible:C,ref:u,children:[S&&(0,d.jsx)(o.Z,{mb:2,children:(0,d.jsx)(c.ZP,{default:!0,children:S})}),t]}),a&&(0,d.jsx)(b,{children:a})]})}},38435:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=t(82684),c=t(9518),u=t(69898),l=t(28598),a=["rows"];function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=c.default.textarea.withConfig({displayName:"TextArea__TextInputStyle",componentId:"sc-112wx63-0"})(["",""],u.p),f=function(e,n){var t=e.rows,r=void 0===t?3:t,o=(0,i.Z)(e,a);return(0,l.jsx)(u.Z,d(d({},o),{},{input:(0,l.jsx)(p,d({rows:r},o)),ref:n}))};n.Z=o.forwardRef(f)},70902:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=t(82684),c=t(9518),u=t(69898),l=t(23831),a=t(28598),s=["checked","disabled","onCheck"];function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=c.default.label.withConfig({displayName:"ToggleSwitch__ToggleSwitchStyle",componentId:"sc-179r5zs-0"})([""," position:relative;display:inline-block;width:","px;min-width:","px;height:",'px;& input[type="checkbox"]{display:none;}& span{position:absolute;cursor:',";background-color:",";border-radius:13px;",';top:0;right:0;bottom:0;left:0;transition:background-color 0.2s ease;}& span::before{position:absolute;content:"";left:2px;top:2px;width:22px;height:22px;background-color:#787A85;border-radius:50%;transition:transform 0.3s ease;}& input[type="checkbox"]:checked + span::before{transform:translateX(20px);}',""],u.p,46,46,26,(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?l.Z.monotone.white:l.Z.monotone.black}),(function(e){return e.disabled&&"border: 1px solid ".concat(l.Z.monotone.grey200)}),(function(e){return!e.disabled&&'\n    & input[type="checkbox"]:checked + span {\n      background-color: #6AA1E0;\n    }\n\n    & input[type="checkbox"]:checked + span::before {\n      background-color: '.concat(l.Z.monotone.white,";\n    }\n  ")})),h=function(e,n){var t=e.checked,r=e.disabled,o=e.onCheck,c=(0,i.Z)(e,s);return(0,a.jsx)(u.Z,p(p({},c),{},{disabled:r,input:(0,a.jsxs)(f,p(p({},c),{},{disabled:r,noBackground:!0,noBorder:!0,children:[(0,a.jsx)("input",{checked:t,type:"checkbox"}),(0,a.jsx)("span",{onClick:r?null:function(){return null===o||void 0===o?void 0:o((function(e){return!e}))}})]})),noBackground:!0,ref:n}))};n.Z=o.forwardRef(h)},6087:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ue}});var r=t(77837),i=t(82394),o=t(75582),c=t(38860),u=t.n(c),l=t(12691),a=t.n(l),s=t(82684),d=t(83455),p=t(34376),f=t(60328),h=t(86532),g=t(34744),b=t(67971),v=t(87372),m=t(11135),x=t(10919),j=t(2626),y=t(93348),O=t(41788),Z=t(29237),w=t(86673),P=t(87815),_=t(19711),k=t(38435),C=t(82944),S=t(70902),I=t(23831),E=t(9518),T=t(73942),D=t(49125),N=E.default.div.withConfig({displayName:"indexstyle__ToggleStyle",componentId:"sc-f9kt7n-0"})(["padding:","px ","px;border-radius:","px;",""],1.5*D.iI,2*D.iI,T.n_,(function(e){return"\n    border: 1px solid ".concat((e.theme||I.Z).borders.light,";\n    background-color: ").concat((e.theme||I.Z).background.popup,";\n  ")})),A=t(90211),H=t(58122),V=t(28598);function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var M="".concat(D.iI,"px ").concat(3*D.iI,"px");var B=function(e){var n=e.initialPipelineSchedulePayload,t=e.onCancel,r=e.onSuccess,c=e.variables,u=(0,s.useState)(!1),l=u[0],a=u[1],d=(0,s.useState)({}),p=d[0],h=d[1],g=(0,s.useState)(c||{}),m=g[0],x=g[1],j=(0,s.useMemo)((function(){return Y(Y({},n),{},{name:(0,A.Y6)(),variables:l?(0,H.e7)(m):null})}),[n,l,m]),y=function(e,n){var t={borderless:!0,key:"variable_uuid_input_".concat(e),monospace:!0,onChange:function(n){n.preventDefault(),x((function(t){return Y(Y({},t),{},(0,i.Z)({},e,n.target.value))}))},paddingHorizontal:0,placeholder:"Variable value",value:n};return p[e]?(0,V.jsx)(k.Z,Y(Y({},t),{},{rows:1,value:n})):(0,V.jsx)(C.Z,Y({},t))};return(0,s.useEffect)((function(){var e=Object.entries(m).reduce((function(e,n){var t=(0,o.Z)(n,2),r=t[0],c=t[1],u=(0,A.Pb)(c)&&"object"===typeof JSON.parse(c)&&!Array.isArray(JSON.parse(c))&&null!==JSON.parse(c);return Y(Y({},e),{},(0,i.Z)({},r,u))}),{});h(e)}),[]),(0,V.jsxs)(Z.Z,{footer:(0,V.jsxs)(b.Z,{alignItems:"center",fullWidth:!0,justifyContent:"flex-end",children:[(0,V.jsx)(f.Z,{onClick:function(){r({pipeline_schedule:j}),t()},padding:M,primaryAlternate:!0,children:"Run now"}),(0,V.jsx)(w.Z,{mr:1}),(0,V.jsx)(f.Z,{borderColor:I.Z.background.page,onClick:t,padding:M,secondary:!0,children:"Cancel"})]}),header:(0,V.jsx)(v.Z,{level:5,children:"Run pipeline now"}),maxHeight:"90vh",minWidth:85*D.iI,subtitle:"Creates a new trigger and immediately runs the current pipeline once.",children:[(0,V.jsx)(N,{children:(0,V.jsxs)(b.Z,{alignItems:"center",children:[(0,V.jsx)(w.Z,{mr:2,children:(0,V.jsx)(S.Z,{checked:l,onCheck:a})}),(0,V.jsx)(_.ZP,{bold:!0,large:!0,children:"Overwrite runtime variables"})]})}),l&&m&&Object.entries(m).length>0&&(0,V.jsx)(w.Z,{mt:2,children:(0,V.jsx)(P.Z,{columnFlex:[null,1],columns:[{uuid:"Variable"},{uuid:"Value"}],rows:Object.entries(m).map((function(e){var n=(0,o.Z)(e,2),t=n[0],r=n[1];return[(0,V.jsx)(_.ZP,{default:!0,monospace:!0,children:t},"variable_".concat(t)),y(t,r)]}))})})]})},F=t(37391),W=E.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1xgfh62-0"})(["border-bottom:1px solid ",";padding:","px;"],I.Z.borders.medium,D.tr),q=E.default.div.withConfig({displayName:"indexstyle__CardsStyle",componentId:"sc-1xgfh62-1"})([""," height:80px;display:flex;overflow-x:scroll;"],F.w5),J=E.default.div.withConfig({displayName:"indexstyle__VariableCardStyle",componentId:"sc-1xgfh62-2"})(["background-color:",";border-radius:","px;flex-shrink:0;margin-right:","px;padding:","px;"],I.Z.background.output,T.n_,D.iI,D.tr),L=t(73899);var z=function(e){var n=e.hasOverride,t=e.scheduleType,r=e.variables,i=e.variablesOverride,c=[];return Object.entries(r).forEach((function(e){var n=(0,o.Z)(e,2),t=n[0],r=n[1],u=null===i||void 0===i?void 0:i[t];c.push({uuid:t,value:(0,H.FS)(u||r)})})),(0,H.JZ)(c,t),(0,V.jsxs)(W,{children:[(0,V.jsx)(w.Z,{mb:2,children:(0,V.jsxs)(_.ZP,{bold:!0,large:!0,monospace:!0,muted:!0,children:["Runtime variables",n&&" (override)"]})}),(0,V.jsx)(q,{noScrollbarTrackBackground:!0,children:r&&c.map((function(e){var n=e.uuid,t=e.value;return(0,V.jsxs)(J,{children:[(0,V.jsx)(_.ZP,{monospace:!0,small:!0,children:n}),(0,V.jsx)(_.ZP,{color:L.Or,monospace:!0,small:!0,children:(0,H.FS)(t)})]})}))})]})},U=t(46261),X=t(97225),G=t(82531),Q=t(10503),$=t(59920),K=t(42305),ee=t(7715),ne=t(9736),te=t(96510),re=t(83608);function ie(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function oe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ie(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ie(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ce(e){var n=e.pipeline,t=(0,p.useRouter)(),r=(0,ne.Ct)(),c=n.uuid,u=(0,s.useState)(null),l=u[0],O=u[1],Z=G.ZP.variables.pipelines.list(c).data,P=null===Z||void 0===Z?void 0:Z.variables,k=G.ZP.pipeline_schedules.pipelines.list(c,{},{refreshInterval:7500}),C=k.data,S=k.mutate,I=(0,s.useMemo)((function(){return(null===C||void 0===C?void 0:C.pipeline_schedules)||[]}),[C]),E=function(e){return(0,d.Db)(G.ZP.pipeline_schedules.pipelines.useCreate(c),{onSuccess:function(n){return(0,te.wD)(n,{callback:function(n){var t=n.pipeline_schedule.id;null===e||void 0===e||e(t)},onErrorCallback:function(e,n){return O({errors:n,response:e})}})}})},T=E((function(e){return t.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(null===n||void 0===n?void 0:n.uuid,"/triggers/").concat(e,"/edit"))})),N=(0,o.Z)(T,2),R=N[0],Y=N[1].isLoading,M=E(S),F=(0,o.Z)(M,2),W=F[0],q=F[1].isLoading,J=(0,s.useMemo)((function(){var e;return null===(e=(0,H.wx)(P,(function(e){return"global"===e.uuid})))||void 0===e?void 0:e.reduce((function(e,n){var t=n.uuid,r=n.value;return oe(oe({},e),{},(0,i.Z)({},t,r))}),{})}),[P]),L={name:(0,A.Y6)(),schedule_interval:y.U5.ONCE,schedule_type:y.Xm.TIME,start_time:(0,K.d$)((new Date).toISOString(),{dayAgo:!0,utcFormat:!0}),status:y.fq.ACTIVE},ie=(0,re.dd)((function(){return(0,V.jsx)(B,{initialPipelineSchedulePayload:L,onCancel:le,onSuccess:W,variables:J})}),{},[P,J],{background:!0,uuid:"run_pipeline_now_popup"}),ce=(0,o.Z)(ie,2),ue=ce[0],le=ce[1],ae=(0,s.useState)(),se=ae[0],de=ae[1],pe=(0,s.useMemo)((function(){var e=null===se||void 0===se?void 0:se.variables,n=!(0,ee.Qr)(e),t=n?null===se||void 0===se?void 0:se.variables:(0,ee.Qr)(J)?null:J;return function(i){var o=i.height-(t?151:0);return(0,V.jsxs)(V.Fragment,{children:[t&&(0,V.jsx)(z,{hasOverride:n,scheduleType:null===se||void 0===se?void 0:se.schedule_type,variables:J,variablesOverride:e}),!t&&(0,V.jsxs)(w.Z,{p:D.cd,children:[(0,V.jsx)(_.ZP,{children:"This pipeline has no runtime variables."}),!r&&(0,V.jsxs)(w.Z,{mt:1,children:[(0,V.jsx)(a(),{as:"/pipelines/".concat(c,"/edit?sideview=variables"),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,V.jsx)(x.Z,{primary:!0,children:"Click here"})})," ",(0,V.jsx)(_.ZP,{inline:!0,children:"to add variables to this pipeline."})]})]}),(0,V.jsx)(h.Z,oe(oe({},i),{},{height:o,noStatus:!0}))]})}}),[P,se]);return(0,V.jsxs)(j.Z,{breadcrumbs:[{label:function(){return"Triggers"}}],buildSidekick:pe,errors:l,pageName:$.M.TRIGGERS,pipeline:n,setErrors:O,subheaderBackgroundImage:"/images/banner-shape-purple-peach.jpg",subheaderButton:(0,V.jsx)(m.ZP,{beforeElement:(0,V.jsx)(Q.mm,{size:2.5*D.iI}),blackBorder:!0,inline:!0,loading:Y,noHoverUnderline:!0,onClick:function(){return R({pipeline_schedule:{name:(0,A.Y6)()}})},sameColorAsText:!0,uuid:"PipelineDetailPage/add_new_schedule",children:"Create new trigger"}),subheaderText:(0,V.jsx)(_.ZP,{bold:!0,large:!0,children:"Run this pipeline using a schedule, event, or API."}),title:function(e){var n=e.name;return"".concat(n," triggers")},uuid:"".concat($.M.TRIGGERS,"_").concat(c),children:[(0,V.jsx)(w.Z,{mt:D.cd,px:D.cd,children:(0,V.jsxs)(b.Z,{justifyContent:"space-between",children:[(0,V.jsx)(v.Z,{level:5,children:"Pipeline triggers"}),(0,V.jsx)(U.Z,{appearBefore:!0,default:!0,fullSize:!0,label:"Creates an @once trigger and runs pipeline immediately",widthFitContent:!0,children:(0,V.jsx)(f.Z,{beforeIcon:(0,V.jsx)(Q.JM,{inverted:!0,size:2*D.iI}),disabled:r,loading:q,onClick:(0,ee.Qr)(J)?function(){return W({pipeline_schedule:L})}:ue,outline:!0,success:!r,children:"Run pipeline now"})})]})}),(0,V.jsx)(g.Z,{light:!0,mt:D.cd,short:!0}),(0,V.jsx)(X.Z,{fetchPipelineSchedules:S,pipeline:n,pipelineSchedules:I,selectedSchedule:se,setErrors:O,setSelectedSchedule:de})]})}ce.getInitialProps=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var ue=(0,O.Z)(ce)},42305:function(e,n,t){"use strict";t.d(n,{A5:function(){return d},AY:function(){return p},BP:function(){return s},JX:function(){return a},OC:function(){return o},Pc:function(){return f},d$:function(){return l},lJ:function(){return h},n1:function(){return u}});var r=t(92083),i=t.n(r),o="YYYY-MM-DD HH:mm:ss",c="YYYY-MM-DD HH:mm",u="YYYY-MM-DD";function l(e,n){var t=n.utcFormat,r=n.dayAgo,o=i()(e);return t&&(o=o.utc()),r&&(o=o.subtract(1,"days")),o.format(c)}function a(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i().unix(e).format(null!==n&&void 0!==n&&n.withSeconds?o:c)}function s(e,n,t){return i()(e).utc().hours(+n).minutes(+t).format()}function d(e){return i()(e).unix()}function p(e,n,t){return"".concat(e.toISOString().split("T")[0]," ").concat(n,":").concat(t)}function f(e){var n=i().unix(+e).utc();return{date:n.toDate(),hour:String(n.hour()),minute:String(n.minute())}}function h(e){return e.padStart(2,"0")}},40183:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/triggers",function(){return t(6087)}])}},function(e){e.O(0,[3850,2083,5896,4804,1774,5872,2344,9386,1830,2626,4463,6532,1286,9774,2888,179],(function(){return n=40183,e(e.s=n);var n}));var n=e.O();_N_E=n}]);