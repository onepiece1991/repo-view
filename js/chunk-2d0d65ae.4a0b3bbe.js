(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d65ae"],{"71ca":function(t,c,e){"use strict";e.r(c);var s=e("7a23");const l=Object(s["g"])("h1",null,"驾驶舱1号",-1),i={class:"c-wrapper"},a={class:"c-main cm01"},n=Object(s["h"])('<li class="cm-item cmi01"><h4>项目一</h4><ul class="cg-main"><li class="cg-item cg01"><p class="cg-msg">分类一</p><p class="cg-num">1111</p></li><li class="cg-item cg02"><p class="cg-msg">分类二</p><p class="cg-num">2222</p></li></ul></li>',1),o={class:"cm-item cmi06"},r=Object(s["g"])("h4",null,[Object(s["i"])("项目六"),Object(s["g"])("span",null,"单位：万元")],-1),u=Object(s["g"])("li",{class:"cm-item cmi09"},null,-1);function p(t,c,e,p,b,j){const g=Object(s["C"])("sim-select");return Object(s["u"])(),Object(s["f"])(s["a"],null,[l,Object(s["g"])("div",i,[Object(s["g"])("ul",a,[n,Object(s["g"])("li",o,[r,Object(s["j"])(g,{optionArr:b.pList01},null,8,["optionArr"])]),u])])],64)}var b=e("0392");const j={class:"s-txt"},g={class:"s-box"};function m(t,c,e,l,i,a){return Object(s["u"])(),Object(s["f"])("div",{class:"s-select",style:Object(s["q"])({width:e.sWidth+"px"})},[Object(s["g"])("p",j,Object(s["E"])(i.defaultTxt),1),Object(s["g"])("ul",g,[(Object(s["u"])(!0),Object(s["f"])(s["a"],null,Object(s["A"])(e.optionArr,(t,c)=>(Object(s["u"])(),Object(s["f"])("li",{class:"s-list",key:"option"+c},Object(s["E"])(t.txt),1))),128))])],4)}var O={props:{optionArr:{type:Array,default:()=>[]},sWidth:{type:Number,default:100}},data(){return{defaultTxt:""}},created(){},mounted(){this.$nextTick(()=>{setTimeout(()=>{console.log(this.optionArr),this.defaultTxt=this.optionArr[0].txt},200)})}},d=e("6b0d"),h=e.n(d);const f=h()(O,[["render",m]]);var x=f,w={components:{simSelect:x},data(){return{pList01:[]}},mounted(){this.$nextTick(()=>{this.getData()})},methods:{getData(){b["b"].get("/baseD/echartsData01.json").then(t=>{this.pList01=t.data.pList01}).catch(t=>{console.log(JSON.stringify(t))})}}};const A=h()(w,[["render",p]]);c["default"]=A}}]);
//# sourceMappingURL=chunk-2d0d65ae.4a0b3bbe.js.map