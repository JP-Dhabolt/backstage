/*! For license information please see 99bee7c4.fef7374d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[654546],{166401:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>a});var n=r(824246),o=r(511151);const u={id:"plugin-kubernetes-react.podlogsoptions.previous",title:"PodLogsOptions.previous",description:"API reference for PodLogsOptions.previous"},s=void 0,c={id:"reference/plugin-kubernetes-react.podlogsoptions.previous",title:"PodLogsOptions.previous",description:"API reference for PodLogsOptions.previous",source:"@site/../docs/reference/plugin-kubernetes-react.podlogsoptions.previous.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-react.podlogsoptions.previous",permalink:"/docs/reference/plugin-kubernetes-react.podlogsoptions.previous",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-react.podlogsoptions.previous.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-react.podlogsoptions.previous",title:"PodLogsOptions.previous",description:"API reference for PodLogsOptions.previous"}},i={},a=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-react",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-kubernetes-react"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-react.podlogsoptions",children:(0,n.jsx)(t.code,{children:"PodLogsOptions"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-react.podlogsoptions.previous",children:(0,n.jsx)(t.code,{children:"previous"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"previous?: boolean;\n"})})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,u={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!i.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:l,props:u,_owner:c.current}}t.Fragment=u,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={};function m(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}function _(){}function b(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=m.prototype;var g=b.prototype=new _;g.constructor=b,h(g,m.prototype),g.isPureReactComponent=!0;var k=Array.isArray,S=Object.prototype.hasOwnProperty,j={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var o,u={},s=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(s=""+t.key),t)S.call(t,o)&&!x.hasOwnProperty(o)&&(u[o]=t[o]);var i=arguments.length-2;if(1===i)u.children=n;else if(1<i){for(var a=Array(i),l=0;l<i;l++)a[l]=arguments[l+2];u.children=a}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===u[o]&&(u[o]=i[o]);return{$$typeof:r,type:e,key:s,ref:c,props:u,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var O=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,u,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return s=s(i=e),e=""===u?"."+P(i,0):u,k(s)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),R(s,t,o,"",(function(e){return e}))):null!=s&&(w(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+e)),t.push(s)),1;if(i=0,u=""===u?".":u+":",k(e))for(var a=0;a<e.length;a++){var l=u+P(c=e[a],a);i+=R(c,t,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(c=e.next()).done;)i+=R(c=c.value,t,o,l=u+P(c,a++),s);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function C(e,t,r){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},L={transition:null},T={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:L,ReactCurrentOwner:j};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=s,t.PureComponent=b,t.StrictMode=u,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=j.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(a in t)S.call(t,a)&&!x.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==i?i[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){i=Array(a);for(var l=0;l<a;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:r,type:e.type,key:u,ref:s,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>s});var n=r(667294);const o={},u=n.createContext(o);function s(e){const t=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(u.Provider,{value:t},e.children)}}}]);