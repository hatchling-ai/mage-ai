(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1009],{66757:function(e,n,t){"use strict";var r=t(19319),o=t(94178),i=t(67240),c="localStorage"in t.g&&t.g.localStorage?t.g.localStorage:r;function u(e,n){return 1===arguments.length?l(e):a(e,n)}function l(e){const n=c.getItem(e);return o(n)}function a(e,n){try{return c.setItem(e,JSON.stringify(n)),!0}catch(t){return!1}}u.set=a,u.get=l,u.remove=function(e){return c.removeItem(e)},u.clear=function(){return c.clear()},u.backend=function(e){return e&&(c=e),c},u.on=i.on,u.off=i.off,e.exports=u},94178:function(e){"use strict";e.exports=function(e){const n=function(e){try{return JSON.parse(e)}catch(n){return e}}(e);return void 0===n?null:n}},19319:function(e){"use strict";var n={};e.exports={getItem:function(e){return e in n?n[e]:null},setItem:function(e,t){return n[e]=t,!0},removeItem:function(e){return!!(e in n)&&delete n[e]},clear:function(){return n={},!0}}},67240:function(e,n,t){"use strict";var r=t(94178),o={};function i(e){e||(e=t.g.event);var n=o[e.key];n&&n.forEach((function(n){n(r(e.newValue),r(e.oldValue),e.url||e.uri)}))}e.exports={on:function(e,n){o[e]?o[e].push(n):o[e]=[n],t.g.addEventListener?t.g.addEventListener("storage",i,!1):t.g.attachEvent?t.g.attachEvent("onstorage",i):t.g.onstorage=i},off:function(e,n){var t=o[e];t.length>1?t.splice(t.indexOf(n),1):o[e]=[]}}},17903:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(82394),o=t(12691),i=t.n(o),c=t(82684),u=t(10919),l=t(19711),a=t(46313),s=t(23831),d=t(49125),f=a.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-0"})(["contain:size;width:100%;"]),p=a.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-1"})(["",""],(function(e){return!e.noHover&&"\n    &:hover {\n      background: ".concat((e.theme.interactive||s.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),v=(0,a.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(e){return!e.alignTop&&"\n    vertical-align: middle;\n  "}),(function(e){return e.alignTop&&"\n    vertical-align: top;\n  "}),(function(e){return!e.noBorder&&"\n    border-bottom: 1px solid ".concat((e.theme.borders||s.Z.borders).light,";\n  ")}),(function(e){return e.compact&&"\n    padding: ".concat(d.iI/2,"px ").concat(d.iI,"px;\n  ")}),(function(e){return!e.compact&&"\n    padding: ".concat(d.iI,"px ").concat(2*d.iI,"px;\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,";\n  ")})),g=a.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-2"})(["",""],v),h=a.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-3"})([""," ",""],v,(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||s.Z.interactive).activeBorder,";\n  ")})),m=t(28598);function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var x=function(e){var n=e.alignTop,t=e.buildLinkProps,r=e.columnFlex,o=e.columnMaxWidth,a=e.columns,s=void 0===a?[]:a,d=e.compact,v=e.isSelectedRow,b=e.noBorder,x=e.onClickRow,O=e.rows,j=e.uuid,w=(0,c.useMemo)((function(){return r.reduce((function(e,n){return e+(n||0)}),0)}),r),P=(0,c.useCallback)((function(e){if(r[e]){var n=Math.round(r[e]/w*100);return"".concat(n,"%")}return null}),[]),_=(0,c.useMemo)((function(){return null===O||void 0===O?void 0:O.map((function(e,r){var c=null===t||void 0===t?void 0:t(r),l=e.map((function(e,t){return(0,m.jsx)(h,{alignTop:n,compact:d,maxWidth:null===o||void 0===o?void 0:o(t),noBorder:b,selected:null===v||void 0===v?void 0:v(r),width:P(t),children:e},"".concat(j,"-row-").concat(r,"-cell-").concat(t))})),a=(0,m.jsx)(p,{noHover:!(c||x),onClick:x?function(){return x(r)}:null,children:l},"".concat(j,"-row-").concat(r));return c?(0,m.jsx)(i(),y(y({},c),{},{passHref:!0,children:(0,m.jsx)(u.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:a})})):a}))}),[n,t,P,o,s,d,v,b,x,O]);return(0,m.jsxs)(f,{children:[(null===s||void 0===s?void 0:s.length)>=1&&(0,m.jsx)(p,{noHover:!0,children:s.map((function(e,n){return(0,m.jsx)(g,{compact:d,noBorder:b,children:(0,m.jsx)(l.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:e.label?e.label():e.uuid})},"".concat(j,"-col-").concat(e.uuid,"-").concat(n))}))}),_]})}},66050:function(e,n,t){"use strict";var r;t.d(n,{V:function(){return r}}),function(e){e.CANCELLED="cancelled",e.COMPLETED="completed",e.FAILED="failed",e.INITIAL="initial",e.RUNNING="running"}(r||(r={}))},92597:function(e,n,t){"use strict";t.r(n);var r=t(82394),o=t(82684),i=t(34376),c=t(51404),u=t(67971),l=t(51099),a=t(97496),s=t(55378),d=t(86673),f=t(19711),p=t(41374),v=t(47409),g=t(66050),h=t(49125),m=t(33766),b=t(24224),y=t(59e3),x=t(28598);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.default=function(){var e=(0,i.useRouter)(),n=(0,y.iV)(),t=null!==n&&void 0!==n&&n.page?n.page:0,r=p.ZP.pipelines.list().data,O={_limit:25,_offset:25*t};null!==n&&void 0!==n&&n.status&&(O.status=n.status);var w=p.ZP.pipeline_runs.list(O,{refreshInterval:3e3,revalidateOnFocus:!0}),P=w.data,_=w.mutate,I=(0,o.useMemo)((function(){return(null===r||void 0===r?void 0:r.pipelines)||[]}),[r]),E=((0,o.useMemo)((function(){return(0,b.HK)(I,(function(e){return e.uuid}))}),[I]),(0,o.useMemo)((function(){return(null===P||void 0===P?void 0:P.pipeline_runs)||[]}),[P])),Z=(0,o.useMemo)((function(){return(null===P||void 0===P?void 0:P.total_count)||[]}),[P]);return(0,x.jsxs)(c.Z,{title:"Pipeline runs",uuid:"pipeline_runs/index",children:[(0,x.jsx)(d.Z,{mx:2,my:1,children:(0,x.jsxs)(u.Z,{alignItems:"center",children:[(0,x.jsx)(f.ZP,{bold:!0,default:!0,large:!0,children:"Filter runs by status:"}),(0,x.jsx)(d.Z,{mr:1}),(0,x.jsxs)(s.Z,{compact:!0,defaultColor:!0,fitContent:!0,onChange:function(n){n.preventDefault(),"all"===n.target.value?e.push("/pipeline-runs"):(0,m.u)({page:0,status:n.target.value})},paddingRight:4*h.iI,placeholder:"Select run status",value:(null===n||void 0===n?void 0:n.status)||"all",children:[(0,x.jsx)("option",{value:"all",children:"All statuses"},"all_statuses"),Object.values(g.V).map((function(e){return(0,x.jsx)("option",{value:e,children:v.D[e]},e)}))]})]})}),(0,x.jsx)(a.Z,{fetchPipelineRuns:_,pipelineRuns:E}),(0,x.jsx)(d.Z,{p:2,children:(0,x.jsx)(l.Z,{maxPages:9,onUpdate:function(t){var r=Number(t),o=j(j({},n),{},{page:r>=0?r:0});e.push("/pipeline-runs","/pipeline-runs?".concat((0,y.uM)(o)))},page:Number(t),totalPages:Math.ceil(Z/25)})})]})}},60710:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipeline-runs",function(){return t(92597)}])}},function(e){e.O(0,[4259,2740,2874,1374,6182,1404,9898,4846,9774,2888,179],(function(){return n=60710,e(e.s=n);var n}));var n=e.O();_N_E=n}]);