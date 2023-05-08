(function(){"use strict";var t={5352:function(t,e,a){var n=a(144),l=a(998),i=function(){var t=this,e=t._self._c;return e(l.Z,[e("div",{staticClass:"main"},[e("router-view")],1)])},s=[],r={name:"App"},o=r,u=a(1001),c=(0,u.Z)(o,i,s,!1,null,"cf3c79aa",null),d=c.exports,h=a(1705);n.ZP.use(h.Z);var p=new h.Z({}),m=a(8345),f=a(6570),g=a(266),b=a(1713),v=a(7414),y=a(7808),x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-3"},[e(b.Z,{staticClass:"elevation-3 light-blue lighten-5"},[e(g.Z,{staticClass:"text-center blue--text text-decoration-underline text-sm-h4"},[t._v(" EMI Calculator ")])],1),e(b.Z,{staticClass:"pt-2",attrs:{align:"center",justify:"center"}},[e(g.Z,{attrs:{sm:"6"}},[e(y.Z,{attrs:{label:"Loan Amount",type:"number",outlined:"",suffix:"₹",dense:!0,rules:[t=>t>1e5||"Invalid"]},model:{value:t.loanAmount,callback:function(e){t.loanAmount=e},expression:"loanAmount"}}),e(v.Z,{attrs:{min:"0",max:"10000000",step:"1","track-color":"orange darken-3","track-fill-color":"orange darken-3","thumb-color":"orange darken-3"},model:{value:t.loanAmount,callback:function(e){t.loanAmount=e},expression:"loanAmount"}})],1)],1),e(b.Z,{attrs:{align:"center",justify:"center"}},[e(g.Z,{attrs:{sm:"6"}},[e(y.Z,{attrs:{label:"Interest Rate",type:"number",outlined:"",suffix:"%",dense:!0,rules:[t=>t>0||"Invalid"]},model:{value:t.interestRate,callback:function(e){t.interestRate=e},expression:"interestRate"}}),e(v.Z,{attrs:{min:"0",max:"100",step:"0.1","track-color":"orange darken-3","track-fill-color":"orange darken-3","thumb-color":"orange darken-3"},model:{value:t.interestRate,callback:function(e){t.interestRate=e},expression:"interestRate"}})],1)],1),e(b.Z,{attrs:{align:"center",justify:"center"}},[e(g.Z,{attrs:{sm:"6"}},[e(y.Z,{staticClass:"loan-tenure-input",attrs:{label:"Loan Tenure",type:"number",outlined:"",dense:!0,rules:[t=>t>0||"Invalid"]},scopedSlots:t._u([{key:"append",fn:function(){return[e("div",{staticClass:"loan-tenure-suffix-buttons"},[e(f.Z,{class:["suffix-button",{active:"Yr"===t.selectedSuffix}],attrs:{text:""},on:{click:function(e){t.selectedSuffix="Yr"}}},[t._v(" Yr ")]),e(f.Z,{class:["suffix-button",{active:"Mo"===t.selectedSuffix}],attrs:{text:""},on:{click:function(e){t.selectedSuffix="Mo"}}},[t._v(" Mo ")])],1)]},proxy:!0}]),model:{value:t.loanTenure,callback:function(e){t.loanTenure=e},expression:"loanTenure"}}),e(v.Z,{attrs:{min:"0",max:"30",step:"10","track-color":"orange darken-3","track-fill-color":"orange darken-3","thumb-color":"orange darken-3",ticks:!0,"tick-size":"6","tick-labels":t.tenureTicks,"thumb-label-always":"","thumb-size":"32"},model:{value:t.loanTenure,callback:function(e){t.loanTenure=e},expression:"loanTenure"}}),e(b.Z,{attrs:{justify:"center"}},[e(g.Z,{staticClass:"text-center",attrs:{cols:"6"}},[e("div",{staticClass:"column"},[e("div",{staticClass:"row-item"},[e("span",{staticClass:"loanLabel"},[t._v("EMI : ")]),e("span",{staticClass:"loanNumber"},[t._v("₹"+t._s(t.getEMI))])]),e("div",{staticClass:"row-item"},[e("span",{staticClass:"loanLabel"},[t._v("Total Interest : ")]),e("span",{staticClass:"loanNumber"},[t._v("₹"+t._s(t.getTotalInterest))])]),e("div",{staticClass:"row-item"},[e("span",{staticClass:"loanLabel"},[t._v("Total Amount : ")]),e("span",{staticClass:"loanNumber"},[t._v("₹"+t._s(t.getTotalAmountPayable))])])])]),e(g.Z,{staticClass:"text-center",attrs:{cols:"6"}},[e("PieChart",{attrs:{data:t.getPieChartData}})],1)],1)],1)],1),e(b.Z,{attrs:{align:"center",justify:"center"}},[e(g.Z,{staticClass:"elevation-3",attrs:{sm:"6"}},[e("emi-table",{attrs:{loanAmount:parseInt(t.loanAmount),interestRate:parseInt(t.interestRate),loanTerm:parseInt(t.loanTenure)}})],1)],1)],1)},T=[],k=(a(7658),a(1272)),C=a(4324),M=function(){var t=this,e=t._self._c;return e(k.Z,{staticClass:"elevation-1 grey lighten-3",attrs:{"hide-default-footer":"","items-per-page":-1,headers:t.headers,items:t.yearlyData,"item-key":"year","single-expand":t.singleExpand,"show-expand":"",dense:!0,expanded:t.expanded},on:{"update:expanded":function(e){t.expanded=e}},scopedSlots:t._u([{key:"expanded-item",fn:function({headers:a,item:n,isMobile:l}){return[l?e("div",{staticClass:"pt-3 pb-3"},[t._v(t._s(l)+" "),e(k.Z,{staticClass:"elevation-1",attrs:{"hide-default-footer":"","items-per-page":-1,headers:t.monthlyHeaders,items:n.monthwise}})],1):e("td",{staticClass:"pt-3 pb-3",attrs:{colspan:a.length}},[e(k.Z,{staticClass:"elevation-1",attrs:{"hide-default-footer":"","items-per-page":-1,headers:t.monthlyHeaders,items:n.monthwise}})],1)]}},{key:"item.data-table-expand",fn:function({item:a,isExpanded:n}){return[e(C.Z,{on:{click:function(e){return t.handleExpansion(a,n)}}},[t._v(t._s(n?"mdi-minus":"mdi-plus"))])]}}],null,!0)})},P=[],Z={name:"emiTable",props:{loanAmount:Number,interestRate:Number,loanTerm:Number},data(){return{singleExpand:!0,expanded:[]}},computed:{headers(){return[{text:"",value:"data-table-expand",class:"light-blue lighten-5"},{text:"Year",value:"year",class:"light-blue lighten-5"},{text:"Principal",value:"principal",class:"light-blue lighten-5"},{text:"Interest",value:"interest",class:"light-blue lighten-5"},{text:"Total Payment",value:"totalPayment",class:"light-blue lighten-5"},{text:"Ending Balance",value:"endingBalance",class:"light-blue lighten-5"},{text:"Loan Paid to Date",value:"loanPaidToDate",class:"light-blue lighten-5"}]},monthlyHeaders(){return[{text:"Month",value:"month",class:"light-blue lighten-4"},{text:"Principal",value:"principal",class:"light-blue lighten-4"},{text:"Interest",value:"interest",class:"light-blue lighten-4"},{text:"Total Payment",value:"totalPayment",class:"light-blue lighten-4"},{text:"Ending Balance",value:"endingBalance",class:"light-blue lighten-4"},{text:"Loan Paid to Date",value:"loanPaidToDate",class:"light-blue lighten-4"}]},yearlyData(){const t=this.interestRate,e=Math.ceil(this.loanTerm/12),a=t/12/100,n=this.loanAmount*a*Math.pow(1+a,this.loanTerm)/(Math.pow(1+a,this.loanTerm)-1);let l=this.loanAmount,i=this.loanAmount,s=[],r=[],o=(new Date).getFullYear(),u=(new Date).getMonth(),c={year:o,principal:0,interest:0,endingBalance:0,loanPaidToDate:0,monthwise:[]};for(let d=0;d<e;d++){let t={year:o,month:"",principal:0,interest:0,totalPayment:0,endingBalance:0,loanPaidToDate:0};s=[],c.principal=0,c.interest=0;for(let e=u;e<12;e++){let i=l*a,r=n-i,o=l-r,u=r/l;l=o,t.month=this.getMonthName(e),t.principal=Math.ceil(r),t.interest=Math.ceil(i),t.endingBalance=Math.ceil(o),t.loanPaidToDate=(100*u).toFixed(2)+"%",c.principal+=Math.ceil(t.principal),c.interest+=Math.ceil(t.interest),t.totalPayment=t.principal+t.interest,s.push({...t})}c.year=o,c.totalPayment=c.principal+c.interest,c.endingBalance=Math.ceil(i-c.principal)<0?0:Math.ceil(i-c.principal),c.loanPaidToDate=Math.ceil(c.principal/i*100)>100?"100%":Math.ceil(c.principal/i*100)+"%",i=Math.ceil(c.endingBalance),c.monthwise=s,r.push({...c}),o++,u=0}return console.log("yearData",r),r}},methods:{getMonthName(t){const e=["January","February","March","April","May","June","July","August","September","October","November","December"];return e[t]},handleExpansion(t,e){const a=this.expanded.indexOf(t);e?this.expanded.splice(a,1):this.expanded.push(t)}}},w=Z,_=(0,u.Z)(w,M,P,!1,null,"192bdbea",null),A=_.exports,I=function(){var t=this,e=t._self._c;return e("div",[e("Pie",{attrs:{"chart-options":t.chartOptions,"chart-data":t.getChartData,"chart-id":t.chartId,"dataset-id-key":t.datasetIdKey,plugins:t.plugins,"css-classes":t.cssClasses,styles:t.styles,width:t.width,height:t.height}})],1)},D=[],O=a(3764),S=a(6300);S.kL.register(S.Dx,S.u,S.De,S.qi,S.uw);var E={name:"PieChart",components:{Pie:O.by},props:{data:{type:Array},chartId:{type:String,default:"pie-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[]}},data(){return{chartData:{labels:["Total Interest","Principal Loan Amount"],datasets:[{backgroundColor:["#41B883","#E46651"],data:this.data}]},chartOptions:{responsive:!0,maintainAspectRatio:!1}}},computed:{getChartData(){return{labels:["Total Interest","Principal Loan Amount"],datasets:[{backgroundColor:["#41B883","#E46651"],data:this.data}]}}},watch:{data(t){console.log(this.chartData),this.chartData.datasets.data=t}},mounted(){}},j=E,R=(0,u.Z)(j,I,D,!1,null,null,null),N=R.exports,B={name:"emiCalculator",data(){return{loanAmount:0,interestRate:0,loanTenure:0,loanTerm:0,selectedSuffix:null,tenureTicks:[0,10,20,30]}},components:{emiTable:A,PieChart:N},computed:{getEMI(){let t=this.interestRate/12/100,e="MO"==this.selectedSuffix?this.loanTenure:12*this.loanTenure,a=Math.pow(1+t,e),n=Math.pow(1+t,e)-1,l=this.loanAmount*t*(a/n);return isNaN(l)||"infinity"==l?0:Math.ceil(l)},getTotalAmountPayable(){let t=this.getEMI,e="MO"==this.selectedSuffix?this.loanTenure:12*this.loanTenure,a=t*e;return Math.ceil(a)},getTotalInterest(){let t=this.getTotalAmountPayable,e=t-this.loanAmount;return Math.ceil(e)},getPieChartData(){let t=[],e=this.getTotalInterest/this.getTotalAmountPayable*100;return t.push(parseFloat(e.toFixed(2))),t.push(parseFloat((100-e).toFixed(2))),t}}},L=B,F=(0,u.Z)(L,x,T,!1,null,null,null),Y=F.exports;n.ZP.use(m.Z);var H=new m.Z({routes:[{path:"/",name:"emiCalculator",component:Y},{path:"/piechart",name:"pieChart",component:N}]});n.ZP.config.productionTip=!1,new n.ZP({router:H,vuetify:p,render:t=>t(d)}).$mount("#app")}},e={};function a(n){var l=e[n];if(void 0!==l)return l.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,n,l,i){if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],l=t[c][1],i=t[c][2];for(var r=!0,o=0;o<n.length;o++)(!1&i||s>=i)&&Object.keys(a.O).every((function(t){return a.O[t](n[o])}))?n.splice(o--,1):(r=!1,i<s&&(s=i));if(r){t.splice(c--,1);var u=l();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,l,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var l,i,s=n[0],r=n[1],o=n[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(l in r)a.o(r,l)&&(a.m[l]=r[l]);if(o)var c=o(a)}for(e&&e(n);u<s.length;u++)i=s[u],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(c)},n=self["webpackChunkemicalculator"]=self["webpackChunkemicalculator"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(5352)}));n=a.O(n)})();
//# sourceMappingURL=app.9ee2f352.js.map