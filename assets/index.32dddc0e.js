var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{r as l,i as o,c as s,f as c,d as i,a as u,m,F as _,b as d}from"./vendor.edc87c5c.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,l)=>{const o=new URL(e,r);if(self[t].moduleMap[o])return a(self[t].moduleMap[o]);const s=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){l(new Error(`Failed to import: ${e}`)),n(c)},onload(){a(self[t].moduleMap[o]),n(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("https://bengalurucares.github.io/bengalurucares.in/assets/");var p,E;function f(...e){let t="";return e.forEach((e=>{"string"==typeof e?t+=` ${e}`:Array.isArray(e)?t+=" "+f(...e):"object"==typeof e&&(t+=" "+f(...Object.keys(e).filter((t=>function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(e,t)&&!!e[t]))))})),t}(E=p||(p={})).ArrowDown="ArrowDown",E.ArrowLeft="ArrowLeft",E.ArrowRight="ArrowRight",E.ArrowUp="ArrowUp",E.KEYCODE_DPAD_DOWN="KEYCODE_DPAD_DOWN",E.KEYCODE_DPAD_LEFT="KEYCODE_DPAD_LEFT",E.KEYCODE_DPAD_RIGHT="KEYCODE_DPAD_RIGHT",E.KEYCODE_DPAD_UP="KEYCODE_DPAD_UP",E.Enter="Enter";const v=e=>{const t=new AbortController;return{promise:fetch(e,{signal:t.signal}).then((e=>e.json())),controller:t}},w=e=>`https://bengalurucares.github.io/bengalurucares.in/${e}`;var g="_root_7uji0_1";const h=({className:e,children:t})=>{const a=f(g,e);return l.createElement("span",{className:a},t)};var D="_root_fpara_1",b="_focus_fpara_12",N="_input_fpara_21",y="_placeholder_fpara_34";const C=l.forwardRef(((e,t)=>{const[a,r]=o({focused:!1,value:e.value||""});l.useEffect((()=>{r((t=>{t.value=e.value||""}))}),[e.value]);const n=e=>{r((t=>{t.focused=e}))},s=f(D,e.className,{[b]:a.focused}),c=f(y,{hidden:!!a.value});return l.createElement("span",{ref:t,className:s},l.createElement("input",{onBlur:()=>n(!1),onFocus:()=>n(!0),onChange:t=>{r((e=>{e.value=t.target.value})),e.onChange&&e.onChange(t)},onKeyDown:e.onKeyDown,type:"text",value:a.value,className:N}),e.placeholder&&l.createElement("span",{className:c},e.placeholder))}));C.displayName="ForwardRef(Search)";var O="_root_17sip_4";const A=({className:e})=>{const t=f(O,e);return l.createElement("h1",{className:t},"Bengaluru Cares")},P=/^prod/i.test("production"),k=e=>(t,a,r)=>e((e=>t(c(e))),a,r),x={wardList:[],selected:null},j=(R="WardStore",L=e=>({state:x,updateState:(t,a)=>{e((e=>{e.state[t]=a}))}}),s(P?k(L):i((e=>(t,a,r)=>e((e=>{t(e),console.log("  %cNew State:: ","color: #ef9a9a",a().state)}),a,r))(k(L)),R)));var R,L;const K=e=>e.updateState,S=e=>e.state.wardList,U=e=>e.state.selected,W=()=>{const e=j(K);return l.useEffect((()=>{let t=null;return(async()=>{const a=await v(w("data/wards/metadata.json")).promise;for(let n=0;n<a.total;n++){if(t&&t.signal.aborted)return;const a=`${n+1}`.padStart(3,"0"),{promise:l,controller:o}=v(w(`data/wards/${a}.json`));let s;t=o;try{s=await l}catch(r){}s&&e("wardList",s)}})(),()=>{t&&t.abort()}}),[]),null};var $={root:"_root_1a6t0_1",listWrapper:"_listWrapper_1a6t0_5",list:"_list_1a6t0_5",item:"_item_1a6t0_29",active:"_active_1a6t0_41",itemContent:"_itemContent_1a6t0_46",wardNo:"_wardNo_1a6t0_52",content:"_content_1a6t0_57"};const Y=e=>{const t=l.useRef(null),a=f($.item,{[$.active]:e.value.active});return l.createElement("li",{ref:t,tabIndex:0,className:a,onClick:()=>e.onClick&&e.onClick(e.value)},l.createElement("span",{className:$.itemContent},l.createElement("span",{className:$.wardNo},l.createElement(h,null,"#",e.value.ward_no)),l.createElement("span",{className:$.content},e.value.ward_name)))},F={includeScore:!0,keys:["division","sub_div","ward_no","ward_name"]},M={name:"applyMaxSize",enabled:!0,phase:"beforeWrite",requires:["maxSize"],fn({state:e}){let{height:t}=e.modifiersData.maxSize;const a=getComputedStyle(e.elements.popper),r=e.elements.popper.children[0];t=Math.max(200,t),e.elements.popper.style.maxHeight=`${t}px`,r.style.maxHeight=`calc(${t}px - ${a.paddingBottom})`}},B=(e,t)=>{let a=-1;e.forEach(((r,n)=>{r.active&&(a=e.length+n+t),r.active=!1})),a=-1===a?0:a,e[a%e.length].active=!0},I=()=>{var e;const s=l.useRef(null),c=l.useRef(null),i=l.useRef(),d=l.useRef(),[E,v]=o({list:[],activeWard:null}),w=j(K),g=j(S);l.useEffect((()=>{const e=()=>{var e;null==(e=i.current)||e.update()};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),l.useEffect((()=>{if(s.current&&c.current)return i.current=u(s.current,c.current,{modifiers:[m,M]}),()=>{var e;null==(e=i.current)||e.destroy()}}),[]),l.useEffect((()=>{d.current=new _(g,F)}),[g]);const h=e=>{e&&(v((t=>{t.list=[],t.activeWard=e})),w("selected",e))},D=e=>{e.code!==p.ArrowDown&&e.code!==p.KEYCODE_DPAD_DOWN||(e.preventDefault(),e.stopPropagation(),v((e=>{B(e.list,1)}))),e.code!==p.ArrowUp&&e.code!==p.KEYCODE_DPAD_UP||(e.preventDefault(),e.stopPropagation(),v((e=>{B(e.list,-1)}))),e.code===p.Enter&&h(E.list.find((e=>e.active)))},b=f($.listWrapper,{show:E.list.length>0});return l.createElement("div",{className:$.root},l.createElement(C,{ref:s,className:$.input,placeholder:l.createElement(l.Fragment,null,l.createElement("span",null,"Enter "),l.createElement("b",null,l.createElement("i",null,"“Ward”")),l.createElement("span",null," or "),l.createElement("b",null,l.createElement("i",null,"“District”"))),value:null==(e=E.activeWard)?void 0:e.ward_name,onChange:({target:e})=>{if(!d.current)return;const l=d.current.search(e.value);v((e=>{const o=l.slice(0,5).map((e=>((e,l)=>{for(var o in l||(l={}))t.call(l,o)&&n(e,o,l[o]);if(a)for(var o of a(l))r.call(l,o)&&n(e,o,l[o]);return e})({},e.item)));o.forEach(((e,t)=>0===t&&(e.active=!0))),e.list=o}))},onKeyDown:e=>{D(e)}}),l.createElement("div",{ref:c,className:b,onKeyDown:e=>{D(e)}},l.createElement("ul",{tabIndex:0,className:$.list},E.list.map((e=>l.createElement(Y,{key:e.ward_no,onClick:h,value:e}))))))};var z="_root_1k1rx_1",T="_header_1k1rx_12",H="_badge_1k1rx_19",G="_title_1k1rx_23",q="_pinBadge_1k1rx_32",J="_pin_1k1rx_32",Q="_content_1k1rx_41",V="_emptyPlaceholder_1k1rx_68";const X=()=>{const e=j(U);if(!e)return null;const t=e.pin_code.filter((e=>!!e));return l.createElement("div",{className:z},l.createElement("header",{className:T},l.createElement(h,{className:H},"#",e.ward_no),l.createElement("span",{className:G},e.ward_name),t.length>0&&l.createElement(h,{className:q},l.createElement("b",null,"Pin: "),l.createElement("span",{className:J},t.join(", ")))),l.createElement("main",{className:Q},e.telegram_group&&l.createElement("a",{href:e.telegram_group},e.telegram_group),!e.telegram_group&&l.createElement("div",{className:V},"No chat group link found")))};var Z="_root_1s3k8_1",ee="_brandTitle_1s3k8_23",te="_card_1s3k8_27";const ae=()=>l.createElement("div",{className:Z},l.createElement(W,null),l.createElement(A,{className:ee}),l.createElement(I,null),l.createElement("div",{className:te},l.createElement(X,null)));d.render(l.createElement(l.StrictMode,null,l.createElement(ae,null)),document.getElementById("root"));
