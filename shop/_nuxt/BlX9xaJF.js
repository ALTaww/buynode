import{_ as j,a2 as X,ad as U,d as Y,a$ as e1,af as t1,ac as o1,c as s1,m as a1,a as n1,a5 as l1}from"./CZwgHzzz.js";import{b as i,l as B,c as u1,D as r1,M as n,N as l,O as e,a0 as v,J as r,V as I,H as b,S as E,W as p,u as o,a1 as A,a5 as D,P as h,y as R,Q as N}from"./QxlODfZ-.js";import{V as i1}from"./C0XtWIz_.js";const $=""+new URL("loading.DrbEhbc-.gif",import.meta.url).href,c1={class:"goldContainer"},d1={class:"goldContainer__text"},_1={class:"goldContainer__row"},C1=["onClick"],v1={class:"goldContainer__bonus"},p1={class:"goldContainer__tooltip"},m1={class:"goldContainer__row goldContainer__row-second"},L1=["onClick"],g1={class:"goldContainer__bonus-long"},b1={class:"goldContainer__tooltip-long"},h1={class:"goldContainer__submit"},f1={key:0,src:$,class:"w-4 h-4 mx-auto",alt:""},w1={class:"goldContainer__col"},x1={class:"goldContainer__col-text"},M1={key:0,class:"goldContainer__bonus-amount"},k1={key:0,src:$,class:"w-4 h-4 mx-auto",alt:""},Z1={key:0,class:"goldContainer__error"},y1={key:1,class:"goldContainer__error"},N1={class:"vaucher"},$1={key:0,src:$,class:"w-4 h-4 mx-auto",alt:""},V1={__name:"ModalGold",emits:["close-dialog"],setup(S1,{emit:F}){const{$axios:x}=X(),M=U(),m=t1(),s=i(""),c=i(!1),d=i(!1),k=i(!1),G=i([{value:1e3,bonuses:20},{value:2e3,bonuses:40},{value:4e3,bonuses:200},{value:8e3,bonuses:400}]),K=i([{value:1e4,bonuses:500},{value:4e4,bonuses:3200}]),V=B(()=>s.value===""||Number(s.value)<100||s.value===""||Number(s.value)>4e4?!1:Number(s.value)<4e3?(Number(s.value)*.02).toFixed(0)??"-":Number(s.value)<35e3?(Number(s.value)*.05).toFixed(0)??"-":(Number(s.value)*.08).toFixed(0)??"-"),O=Y(async()=>{if(s.value===""){d.value=!1;return}if(Number(s.value)<100){d.value=!0;return}if(Number(s.value)>4e4){k.value=!0;return}d.value=!1},300),S=a=>{s.value=a},T=async()=>{if(c.value=!0,Number(s.value)<100){d.value=!0,c.value=!1;return}if(Number(s.value)>4e4){k.value=!0,c.value=!1;return}try{let g=function(C){return C.replace(/^https?:\/\//,"").replace(/\?.*$/,"").replace(/\/$/,"")};const{data:{data:{transaction:{link:a},uuid:t}}}=await x.post("/orders",{product_id:22802,quantity:s.value.toString()}),Z=/iPhone/.test(navigator.userAgent)||!1;if(a.includes("palych")&&!Z){m(a,!0);return}if(a.startsWith("token=")){const C="https://steam.kupikod.com/pay?"+a+`&uuid=${t}&url=${g(window.location.href)}`;m(C,!0),setTimeout(()=>{m(`${o1}${t}`)},3e3)}else m(a)}catch{c.value=!1}},P=a=>{a=a||window.event;var t=a.which?a.which:a.keyCode;if(t>31&&(t<48||t>57))a.preventDefault();else return!0};u1(s,()=>{setTimeout(()=>O(),300)});const _=i(""),L=i(!1),f=i(!1),H=B(()=>!(!_.value.length||L.value)),W=()=>{L.value=!1},q=F,z=async()=>{if(!(!_.value.length||L.value)){f.value=!0;try{const{data:a}=await x.patch("/vouchers/update_user",{code:_.value}),t=await x.patch(`/vouchers/${a.data.id}/update_is_activated`);await M.getUser(),q("close-dialog")}catch{L.value=!0}f.value=!1}},J=U();return r1(()=>{e1("access_token")||m(`${J.steam_link}/auth?gold=${window.location.origin+window.location.pathname}`)}),(a,t)=>{const Z=s1,g=a1,C=n1,w=l1;return n(),l("div",c1,[e("div",{class:"goldContainer__close",onClick:t[0]||(t[0]=u=>a.$emit("close-dialog"))},"✕"),t[9]||(t[9]=e("h1",{class:"goldContainer__header"},"Выберите номинал",-1)),e("p",d1,[t[4]||(t[4]=v(" За пополнение баланса мы даем бонусы в подарок. Больше пополнение — больше КупиБонусов. ")),r(Z,{target:"_blank",to:"/bonus-program"},{default:I(()=>t[3]||(t[3]=[v(" Как работает? ")])),_:1})]),e("div",_1,[(n(!0),l(b,null,E(o(G),(u,y)=>(n(),l("div",{key:y,class:"goldContainer__tab",onClick:Q=>S(u.value)},[e("p",null,p(u.value),1),r(g,{class:"w-[16px] h-[16px]"}),e("div",v1,[r(C,{name:"gift",filled:"",class:"w-[16px] h-[16px]"}),e("div",p1,[r(w,{class:"w-[16px] h-[16px]"}),e("p",null,p(u.bonuses),1)])])],8,C1))),128))]),e("div",m1,[(n(!0),l(b,null,E(o(K),(u,y)=>(n(),l("div",{key:y,onClick:Q=>S(u.value),class:"goldContainer__tab-long"},[e("p",null,p(u.value),1),r(g,{class:"w-[16px] h-[16px]"}),e("div",g1,[r(C,{name:"gift",filled:"",class:"w-[16px] h-[16px]"}),e("div",b1,[r(w,{class:"w-[16px] h-[16px]"}),e("p",null,p(u.bonuses),1)])])],8,L1))),128))]),e("div",h1,[A(e("input",{placeholder:"Сумма",class:h(["goldContainer__submit-input",{"goldContainer__submit-input-error":o(d)}]),onKeypress:P,"onUpdate:modelValue":t[1]||(t[1]=u=>R(s)?s.value=u:null)},null,34),[[D,o(s)]]),e("button",{onClick:T,class:h(["goldContainer__submit-btn",{"goldContainer__submit-btn-disabled":o(d)||o(c)||o(s)===""||Number(o(s))<100}])},[o(c)?(n(),l("img",f1)):(n(),l(b,{key:1},[v("Пополнить")],64))],2),e("div",w1,[e("div",x1,[e("p",null,p(Number(o(s))>=100?Number(o(M).gold_balance.value)+Number(o(s)):Number(o(M).gold_balance.value)),1),r(g,{class:"w-[24px] h-[24px]"})]),t[5]||(t[5]=e("p",{class:"goldContainer__col-info"},"Текущий баланс",-1)),o(V)?(n(),l("div",M1,[v(" +"+p(o(V))+" ",1),r(w,{class:"w-4 h-4 ml-1"})])):N("",!0)]),t[6]||(t[6]=e("div",{class:"goldContainer__arrow"},[e("svg",{width:"234",height:"38",viewBox:"0 0 234 38",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{opacity:"0.1",d:"M234 37L231.419 25.7451L222.963 33.6078L234 37ZM1.71676 37.6973C2.16892 37.2325 2.63139 36.772 3.10397 36.3156L1.71467 34.8769C1.2274 35.3475 0.750182 35.8227 0.283237 36.3027L1.71676 37.6973ZM6.05925 33.6283C7.04533 32.7824 8.06738 31.9524 9.12399 31.1384L7.90338 29.554C6.82007 30.3886 5.77077 31.2407 4.75711 32.1102L6.05925 33.6283ZM12.3418 28.7821C13.42 28.031 14.5286 27.2948 15.6665 26.5737L14.5958 24.8844C13.4343 25.6205 12.3015 26.3727 11.1986 27.141L12.3418 28.7821ZM19.0664 24.5133C20.2137 23.8482 21.3867 23.1971 22.5844 22.5602L21.6453 20.7944C20.4268 21.4424 19.2324 22.1053 18.0633 22.783L19.0664 24.5133ZM26.1164 20.7573C27.3065 20.1741 28.5181 19.604 29.7501 19.047L28.9262 17.2246C27.6759 17.7899 26.4456 18.3688 25.2364 18.9613L26.1164 20.7573ZM33.4063 17.4573C34.629 16.9461 35.8697 16.4472 37.1273 15.9605L36.4056 14.0953C35.1317 14.5882 33.8744 15.0939 32.6349 15.6121L33.4063 17.4573ZM40.8758 14.5643C42.124 14.1169 43.3874 13.6811 44.6649 13.257L44.0347 11.3589C42.7426 11.7879 41.4644 12.2288 40.201 12.6816L40.8758 14.5643ZM48.4819 12.0373C49.7508 11.6472 51.0324 11.2682 52.3259 10.9003L51.7788 8.97661C50.472 9.34826 49.1769 9.73126 47.8942 10.1256L48.4819 12.0373ZM56.1939 9.84267C57.4799 9.50482 58.7766 9.17765 60.0831 8.86121L59.6123 6.91741C58.2935 7.23683 56.9844 7.56714 55.6857 7.90831L56.1939 9.84267ZM63.9893 7.95356C65.2895 7.66402 66.5985 7.38485 67.9157 7.1161L67.5158 5.15648C66.1872 5.42758 64.8665 5.70922 63.5546 6.00138L63.9893 7.95356ZM71.8508 6.3486C73.1627 6.10437 74.4818 5.87029 75.8074 5.64638L75.4743 3.67431C74.1378 3.90006 72.8077 4.13609 71.4848 4.38238L71.8508 6.3486ZM79.7648 5.01111C81.086 4.80996 82.413 4.61876 83.7452 4.43756L83.4757 2.4558C82.133 2.63842 80.7955 2.83113 79.4637 3.0339L79.7648 5.01111ZM87.7199 3.92839C89.0483 3.76865 90.3812 3.61873 91.7179 3.47868L91.5095 1.48957C90.1627 1.63067 88.8197 1.78173 87.4811 1.9427L87.7199 3.92839ZM95.7064 3.0911C97.0393 2.97163 98.3753 2.86191 99.714 2.76197L99.5651 0.767516C98.2166 0.868197 96.8706 0.978729 95.5278 1.09908L95.7064 3.0911ZM103.715 2.49279C105.051 2.4128 106.388 2.3425 107.727 2.28192L107.637 0.283966C106.288 0.344979 104.941 0.415791 103.596 0.496372L103.715 2.49279ZM111.739 2.12967C113.076 2.08866 114.415 2.05735 115.753 2.03578L115.721 0.0360422C114.373 0.0577662 113.025 0.0892989 111.678 0.130608L111.739 2.12967ZM119.769 2.00032C121.108 1.99827 122.446 2.00599 123.784 2.02351L123.81 0.0236841C122.463 0.00602955 121.115 -0.00174558 119.766 0.000326455L119.769 2.00032ZM127.798 2.10568C129.138 2.14301 130.476 2.19023 131.812 2.2474L131.898 0.249226C130.551 0.191635 129.203 0.144057 127.854 0.106459L127.798 2.10568ZM135.818 2.44901C137.158 2.5266 138.495 2.61429 139.829 2.7121L139.975 0.717454C138.631 0.618888 137.284 0.530533 135.934 0.452355L135.818 2.44901ZM143.821 3.03602C145.161 3.15525 146.496 3.28483 147.827 3.42479L148.036 1.43576C146.694 1.29467 145.348 1.16406 143.999 1.0439L143.821 3.03602ZM151.805 3.87585C153.14 4.03839 154.471 4.21156 155.795 4.39542L156.07 2.41442C154.734 2.229 153.393 2.05437 152.046 1.8905L151.805 3.87585ZM159.755 4.97998C161.085 5.18801 162.407 5.40703 163.723 5.63708L164.067 3.66699C162.74 3.43485 161.406 3.21388 160.065 3.00403L159.755 4.97998ZM167.66 6.36316C168.981 6.6195 170.293 6.88726 171.597 7.16647L172.016 5.21084C170.699 4.92888 169.374 4.65854 168.041 4.39979L167.66 6.36316ZM175.503 8.04399C176.813 8.35223 178.112 8.6724 179.401 9.00455L179.9 7.06782C178.598 6.7321 177.284 6.40857 175.961 6.09716L175.503 8.04399ZM183.265 10.0455C184.561 10.4102 185.845 10.7874 187.115 11.1772L187.702 9.2651C186.416 8.87064 185.117 8.48905 183.807 8.12027L183.265 10.0455ZM190.922 12.3958C192.2 12.8225 193.464 13.2625 194.712 13.7159L195.395 11.836C194.13 11.3766 192.85 10.9309 191.556 10.4988L190.922 12.3958ZM198.442 15.129C199.697 15.6246 200.935 16.1344 202.154 16.6585L202.944 14.8211C201.706 14.2889 200.45 13.7715 199.177 13.2688L198.442 15.129ZM205.781 18.2853C207.006 18.8581 208.21 19.4462 209.392 20.0497L210.301 18.2684C209.098 17.6542 207.873 17.056 206.629 16.4737L205.781 18.2853ZM212.895 21.919C214.074 22.5762 215.228 23.2499 216.357 23.9401L217.4 22.2338C216.248 21.5292 215.07 20.8421 213.869 20.1723L212.895 21.919ZM219.707 26.0879C220.819 26.8357 221.902 27.6011 222.956 28.3842L224.149 26.7788C223.069 25.9765 221.96 25.193 220.823 24.4283L219.707 26.0879ZM226.095 30.8423C227.122 31.6899 228.115 32.5565 229.074 33.4419L230.431 31.9725C229.444 31.0612 228.423 30.1705 227.369 29.3001L226.095 30.8423Z",fill:"white"})])],-1))]),e("button",{onClick:T,class:h(["goldContainer__submit-btn goldContainer__submit-btn-mobile",{"goldContainer__submit-btn-disabled":o(d)||o(c)||o(s)===""||Number(o(s))<100}])},[o(c)?(n(),l("img",k1)):(n(),l(b,{key:1},[v("Пополнить")],64))],2),r(i1,null,{default:I(()=>[o(d)?(n(),l("div",Z1," Минимальная сумма пополнения 100 ₽ ")):N("",!0),o(k)?(n(),l("div",y1," Максимальная сумма пополнения 40000 ₽ ")):N("",!0)]),_:1}),t[10]||(t[10]=e("div",{class:"line"},null,-1)),e("div",N1,[t[8]||(t[8]=e("div",{class:"vaucher__title"},"Или активируйте подарочную карту:",-1)),e("div",{class:h(["vaucher__input",{error:o(L)}])},[A(e("input",{onInput:W,placeholder:"Введите код","onUpdate:modelValue":t[2]||(t[2]=u=>R(_)?_.value=u:null),type:"text"},null,544),[[D,o(_)]]),e("button",{onClick:z,class:h({active:o(H),loading:o(f)})},[o(f)?(n(),l("img",$1)):(n(),l(b,{key:1},[v(" Пополнить ")],64))],2),t[7]||(t[7]=e("div",{class:"vaucher__error"},"Такой карты не существует",-1))],2)])])}}},I1=j(V1,[["__scopeId","data-v-040fbba8"]]);export{I1 as default};