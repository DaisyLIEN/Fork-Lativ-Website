(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-571037f8"],{"8b45":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h5",[t._v("抗UV系列")]),e("div",{staticClass:"cards"},t._l(t.womenOuterwears,(function(t){return e("MainCard",{key:t.id,attrs:{"initial-cards":t}})})),1)])},r=[],s=e("f87c"),n={components:{MainCard:s["a"]},props:{initialWomenAllShirts:{type:Array,required:!0}},data(){return{womenOuterwears:[]}},created(){this.filterWomenOuterwears()},methods:{filterWomenOuterwears(){this.womenOuterwears=this.initialWomenAllShirts.filter(t=>"外套類"===t.category[0])}}},c=n,l=(e("b26c"),e("2877")),o=Object(l["a"])(c,i,r,!1,null,"7c27071d",null);a["default"]=o.exports},"8fee":function(t,a,e){},ac83:function(t,a,e){"use strict";e("8fee")},b26c:function(t,a,e){"use strict";e("c03b")},c03b:function(t,a,e){},f87c:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main-card"},[e("div",{staticClass:"photo"},[e("router-link",{attrs:{to:{name:"detail",params:{id:t.card.id}}}},[e("img",{attrs:{src:t.card.image.main,alt:""}})])],1),e("div",{staticClass:"text"},[e("p",{staticClass:"title"},[t._v(t._s(t.card.title))]),e("p",{staticClass:"price"},[e("span",{class:{onsale:t.card.onSale}},[t._v("NT$"+t._s(t.card.originalPrice))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.card.onSale,expression:"card.onSale"}]},[t._v("活動價 NT$"+t._s(t.card.nowPrice))])])])])},r=[],s={props:{initialCards:{type:Object,required:!0}},data(){return{card:this.initialCards}},watch:{initialCards(t){this.card={...this.card,...t}}}},n=s,c=(e("ac83"),e("2877")),l=Object(c["a"])(n,i,r,!1,null,"0bea141b",null);a["a"]=l.exports}}]);
//# sourceMappingURL=chunk-571037f8.fb61227a.js.map