(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a6f5d07"],{"6f2f":function(e,t,o){"use strict";o("785e")},"785e":function(e,t,o){},d7ee:function(e,t,o){"use strict";o.r(t);var c=o("7a23"),n=Object(c["C"])("data-v-47e2b85c");Object(c["t"])("data-v-47e2b85c");var r=Object(c["h"])("div",{class:"titulo"},[Object(c["h"])("h1",null,"Nuevo reporte")],-1),a={id:"formulario"},u={class:"campo"},d={class:"producto"},i={class:"oculto",id:"producto"},l={class:"producto"},s={class:"producto"};Object(c["r"])();var p=n((function(e,t,o,n,p,b){var v=Object(c["x"])("NavBar"),m=Object(c["x"])("Campo"),h=Object(c["x"])("Producto");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["h"])(v,{login:"0"}),r,Object(c["h"])("div",null,[Object(c["h"])("form",a,[Object(c["h"])("div",u,[Object(c["h"])(m,{label:"Periodo",id:"periodo"})]),Object(c["h"])("div",d,[Object(c["h"])(h,{index:"1"})]),Object(c["h"])("div",i,[Object(c["h"])(h,{index:p.index},null,8,["index"])])]),Object(c["h"])("div",l,[Object(c["h"])("button",{onClick:t[1]||(t[1]=function(e){return b.nuevoProducto()})},"+1 Producto")]),Object(c["h"])("div",s,[Object(c["h"])("button",{onClick:t[2]||(t[2]=function(e){return b.crearReporte()})},"Cargar")])])],64)})),b=o("1da1"),v=o("5530"),m=(o("96cf"),o("d000")),h=o("88db"),j=o("e6c7"),O=o("5502"),f={name:"NuevoReporte",components:{NavBar:m["a"],Producto:j["a"],Campo:h["a"]},data:function(){return{index:2}},mounted:function(){localStorage.getItem("token")||(window.location="/ingresar")},methods:Object(v["a"])(Object(v["a"])({},Object(O["b"])(["postReports"])),{},{nuevoProducto:function(){this.index++;var e=document.querySelector("#formulario"),t=document.querySelector("#producto");t=t.cloneNode(!0),t.classList.add("producto"),t.classList.remove("oculto"),e.appendChild(t)},crearReporte:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var o,c,n,r,a,u,d,i,l,s,p,b,v;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(o=document.querySelector("#periodo"),c=o.value.substring(0,2),n=o.value.substring(3,5),r=document.querySelectorAll(".class_denominacion > input"),a=document.querySelectorAll(".class_ean > input"),u=document.querySelectorAll(".class_pre_uni > input"),d=document.querySelectorAll(".class_uni_med > input"),i=document.querySelectorAll(".class_cant_prod > input"),l=document.querySelectorAll(".class_cant_vend > input"),s=[],p=0;p<r.length;p++)1!=p&&s.push({denominacion:r[p].value,codigo_ean:a[p].value,precio_unidad:u[p].value,unidad_medida:d[p].value,cantidad_prod:i[p].value,cantidad_vend:l[p].value});return b={infoEmpresa:{cuit:localStorage.getItem("cuit"),razon_social:localStorage.getItem("razon_social")},listaRegistro:s,periodo:{year:n,month:c}},t.next=14,e.postReports(b);case 14:v=t.sent,200==v&&e.$router.push("/reportes");case 16:case"end":return t.stop()}}),t)})))()}})};o("6f2f");f.render=p,f.__scopeId="data-v-47e2b85c";t["default"]=f}}]);
//# sourceMappingURL=chunk-5a6f5d07.f156bc18.js.map