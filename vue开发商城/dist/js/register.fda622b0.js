(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"0eb4":function(e,s,t){"use strict";var a=t("7a23");const r={class:"toast"};function n(e,s,t,n,c,o){return Object(a["t"])(),Object(a["f"])("div",r,Object(a["C"])(t.message),1)}var c={props:["message"]},o=(t("67a5"),t("6b0d")),p=t.n(o);const d=p()(c,[["render",n],["__scopeId","data-v-12f6a6fc"]]);s["a"]=d},"0f9e":function(e,s,t){"use strict";t.r(s);var a=t("7a23");const r=e=>(Object(a["w"])("data-v-115da3a4"),e=e(),Object(a["u"])(),e),n={class:"wrapper"},c=r(()=>Object(a["g"])("img",{class:"wrapper__img",src:"http://www.dell-lee.com/imgs/vue3/user.png",alt:"头像"},null,-1)),o={class:"wrapper__input"},p={class:"wrapper__input"},d={class:"wrapper__input"};function u(e,s,t,r,u,i){const l=Object(a["A"])("Toast");return Object(a["t"])(),Object(a["f"])("div",n,[c,Object(a["g"])("div",o,[Object(a["K"])(Object(a["g"])("input",{type:"text",class:"wrapper__input__content",placeholder:"请输入用户名","onUpdate:modelValue":s[0]||(s[0]=e=>r.username=e)},null,512),[[a["F"],r.username]])]),Object(a["g"])("div",p,[Object(a["K"])(Object(a["g"])("input",{autocomplete:"new-password",type:"password",class:"wrapper__input__content",placeholder:"请输入密码","onUpdate:modelValue":s[1]||(s[1]=e=>r.password=e)},null,512),[[a["F"],r.password]])]),Object(a["g"])("div",d,[Object(a["K"])(Object(a["g"])("input",{type:"password",class:"wrapper__input__content",placeholder:"确认密码","onUpdate:modelValue":s[2]||(s[2]=e=>r.surePassword=e)},null,512),[[a["F"],r.surePassword]])]),Object(a["g"])("div",{class:"wrapper__register-button",onClick:s[3]||(s[3]=(...e)=>r.handleRegister&&r.handleRegister(...e))},"注册"),Object(a["g"])("div",{class:"wrapper__register-link",onClick:s[4]||(s[4]=(...e)=>r.handleLoginClick&&r.handleLoginClick(...e))},"已有账号去登陆"),r.data.showToast?(Object(a["t"])(),Object(a["d"])(l,{key:0,message:r.data.toastMessage},null,8,["message"])):Object(a["e"])("",!0)])}var i=t("6605"),l=t("b775"),w=t("0eb4"),b={name:"Register",components:{Toast:w["a"]},setup(){const e=Object(a["x"])({username:"",password:"",surePassword:"",showToast:!1,toastMessage:""}),s=Object(i["d"])(),t=s=>{e.showToast=!0,e.toastMessage=s,setTimeout(()=>{e.showToast=!1,e.toastMessage=""},2e3)},r=async()=>{try{const{username:a,password:r,surePassword:n}=e;if(""===a)return t("用户名不能为空");if(""===r)return t("密码不能为空");if(n!==r)return t("两次密码不一致");const c=await Object(l["b"])("/api/user/register",{username:a,password:r});0===(null===c||void 0===c?void 0:c.errno)?s.push({name:"Login"}):t("注册失败")}catch(a){t("请求失败")}},n=()=>{s.push({name:"Login"})},{username:c,password:o,surePassword:p}=Object(a["D"])(e);return{username:c,password:o,surePassword:p,data:e,handleLoginClick:n,handleRegister:r}}},g=(t("ffcd"),t("6b0d")),_=t.n(g);const j=_()(b,[["render",u],["__scopeId","data-v-115da3a4"]]);s["default"]=j},"617f":function(e,s,t){},"67a5":function(e,s,t){"use strict";t("617f")},"886f":function(e,s,t){},ffcd:function(e,s,t){"use strict";t("886f")}}]);
//# sourceMappingURL=register.fda622b0.js.map