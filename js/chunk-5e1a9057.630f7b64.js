(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e1a9057"],{"057f":function(t,e,r){var n=r("fc6a"),c=r("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return c(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?a(t):c(n(t))}},"159b":function(t,e,r){var n=r("da84"),c=r("fdbc"),o=r("17c2"),i=r("9112");for(var a in c){var u=n[a],f=u&&u.prototype;if(f&&f.forEach!==o)try{i(f,"forEach",o)}catch(s){f.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,c=r("a640"),o=c("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),c=r("b622"),o=r("2d00"),i=c("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4de4":function(t,e,r){"use strict";var n=r("23e7"),c=r("b727").filter,o=r("1dde"),i=o("filter");n({target:"Array",proto:!0,forced:!i},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"65f0":function(t,e,r){var n=r("861d"),c=r("e8b5"),o=r("b622"),i=o("species");t.exports=function(t,e){var r;return c(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!c(r.prototype)?n(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),c=r("5135"),o=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});c(e,t)||i(e,t,{value:o.f(t)})}},"7f79":function(t,e,r){},8418:function(t,e,r){"use strict";var n=r("c04e"),c=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?c.f(t,i,o(0,r)):t[i]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),c=r("da84"),o=r("d066"),i=r("c430"),a=r("83ab"),u=r("4930"),f=r("fdbf"),s=r("d039"),b=r("5135"),d=r("e8b5"),l=r("861d"),p=r("825a"),O=r("7b0b"),j=r("fc6a"),h=r("c04e"),v=r("5c6c"),g=r("7c73"),y=r("df75"),m=r("241c"),w=r("057f"),P=r("7418"),S=r("06cf"),x=r("9bf2"),k=r("d1e7"),E=r("9112"),R=r("6eeb"),_=r("5692"),C=r("f772"),z=r("d012"),N=r("90e3"),A=r("b622"),D=r("e538"),q=r("746f"),I=r("d44e"),J=r("69f3"),B=r("b727").forEach,F=C("hidden"),T="Symbol",U="prototype",M=A("toPrimitive"),Q=J.set,V=J.getterFor(T),W=Object[U],$=c.Symbol,G=o("JSON","stringify"),H=S.f,K=x.f,L=w.f,X=k.f,Y=_("symbols"),Z=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),rt=_("wks"),nt=c.QObject,ct=!nt||!nt[U]||!nt[U].findChild,ot=a&&s((function(){return 7!=g(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=H(W,e);n&&delete W[e],K(t,e,r),n&&t!==W&&K(W,e,n)}:K,it=function(t,e){var r=Y[t]=g($[U]);return Q(r,{type:T,tag:t,description:e}),a||(r.description=e),r},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof $},ut=function(t,e,r){t===W&&ut(Z,e,r),p(t);var n=h(e,!0);return p(r),b(Y,n)?(r.enumerable?(b(t,F)&&t[F][n]&&(t[F][n]=!1),r=g(r,{enumerable:v(0,!1)})):(b(t,F)||K(t,F,v(1,{})),t[F][n]=!0),ot(t,n,r)):K(t,n,r)},ft=function(t,e){p(t);var r=j(e),n=y(r).concat(pt(r));return B(n,(function(e){a&&!bt.call(r,e)||ut(t,e,r[e])})),t},st=function(t,e){return void 0===e?g(t):ft(g(t),e)},bt=function(t){var e=h(t,!0),r=X.call(this,e);return!(this===W&&b(Y,e)&&!b(Z,e))&&(!(r||!b(this,e)||!b(Y,e)||b(this,F)&&this[F][e])||r)},dt=function(t,e){var r=j(t),n=h(e,!0);if(r!==W||!b(Y,n)||b(Z,n)){var c=H(r,n);return!c||!b(Y,n)||b(r,F)&&r[F][n]||(c.enumerable=!0),c}},lt=function(t){var e=L(j(t)),r=[];return B(e,(function(t){b(Y,t)||b(z,t)||r.push(t)})),r},pt=function(t){var e=t===W,r=L(e?Z:j(t)),n=[];return B(r,(function(t){!b(Y,t)||e&&!b(W,t)||n.push(Y[t])})),n};if(u||($=function(){if(this instanceof $)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),r=function(t){this===W&&r.call(Z,t),b(this,F)&&b(this[F],e)&&(this[F][e]=!1),ot(this,e,v(1,t))};return a&&ct&&ot(W,e,{configurable:!0,set:r}),it(e,t)},R($[U],"toString",(function(){return V(this).tag})),R($,"withoutSetter",(function(t){return it(N(t),t)})),k.f=bt,x.f=ut,S.f=dt,m.f=w.f=lt,P.f=pt,D.f=function(t){return it(A(t),t)},a&&(K($[U],"description",{configurable:!0,get:function(){return V(this).description}}),i||R(W,"propertyIsEnumerable",bt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:$}),B(y(rt),(function(t){q(t)})),n({target:T,stat:!0,forced:!u},{for:function(t){var e=String(t);if(b(tt,e))return tt[e];var r=$(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(b(et,t))return et[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!a},{create:st,defineProperty:ut,defineProperties:ft,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:lt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:s((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(O(t))}}),G){var Ot=!u||s((function(){var t=$();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));n({target:"JSON",stat:!0,forced:Ot},{stringify:function(t,e,r){var n,c=[t],o=1;while(arguments.length>o)c.push(arguments[o++]);if(n=e,(l(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),c[1]=e,G.apply(null,c)}})}$[U][M]||E($[U],M,$[U].valueOf),I($,T),z[F]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},a8b3:function(t,e,r){"use strict";r("7f79")},b64b:function(t,e,r){var n=r("23e7"),c=r("7b0b"),o=r("df75"),i=r("d039"),a=i((function(){o(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(t){return o(c(t))}})},b727:function(t,e,r){var n=r("0366"),c=r("44ad"),o=r("7b0b"),i=r("50c4"),a=r("65f0"),u=[].push,f=function(t){var e=1==t,r=2==t,f=3==t,s=4==t,b=6==t,d=7==t,l=5==t||b;return function(p,O,j,h){for(var v,g,y=o(p),m=c(y),w=n(O,j,3),P=i(m.length),S=0,x=h||a,k=e?x(p,P):r||d?x(p,0):void 0;P>S;S++)if((l||S in m)&&(v=m[S],g=w(v,S,y),t))if(e)k[S]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return S;case 2:u.call(k,v)}else switch(t){case 4:return!1;case 7:u.call(k,v)}return b?-1:f||s?s:k}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},c11b:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),c=Object(n["C"])("data-v-0d115fc0");Object(n["t"])("data-v-0d115fc0");var o={class:"btn"},i={key:0,class:"container-reports"};Object(n["r"])();var a=c((function(t,e,r,c,a,u){var f=Object(n["x"])("NavBar"),s=Object(n["x"])("Card");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(f,{login:"0"}),Object(n["h"])("div",o,[Object(n["h"])("button",{onClick:e[1]||(e[1]=function(t){return u.redirigir()})},"Nuevo reporte")]),null!=a.reportes?(Object(n["q"])(),Object(n["d"])("div",i,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(a.reportes[0].report,(function(t,e){return Object(n["q"])(),Object(n["d"])("div",{class:"report",key:e},[Object(n["h"])(s,{id:e,id2:e+9999,reportes:t},null,8,["id","id2","reportes"])])})),128))])):Object(n["e"])("",!0)],64)})),u=r("1da1"),f=r("5530"),s=(r("96cf"),r("d000")),b=Object(n["C"])("data-v-7546e50e");Object(n["t"])("data-v-7546e50e");var d={class:"container-card"},l={class:"acordeon"},p={class:"acordeon_item"},O={class:"contenido"},j=Object(n["h"])("span",null,"Denominacion:",-1),h=Object(n["h"])("span",null,"Codigo EAN:",-1),v=Object(n["h"])("span",null,"Precio Unitario:",-1),g=Object(n["h"])("span",null,"Unidad Medida:",-1),y=Object(n["h"])("span",null,"Cantidad Producida:",-1),m=Object(n["h"])("span",null,"Cantidad Vendida:",-1),w={class:"flex"},P={class:"botonera"},S={class:"acordeon2"},x={class:"contenido"},k=Object(n["h"])("span",null,"¿Estas seguro?",-1),E={class:"container-btn-eliminar"};Object(n["r"])();var R=b((function(t,e,r,c,o,i){return Object(n["q"])(),Object(n["d"])("div",d,[Object(n["h"])("h1",null,"Periodo: "+Object(n["z"])(r.reportes.periodo.month)+"/"+Object(n["z"])(r.reportes.periodo.year),1),Object(n["h"])("span",null,"Fecha de carga: "+Object(n["z"])(r.reportes.date_upload.replaceAll("-","/").substring(0,10)),1),Object(n["h"])("div",l,[Object(n["h"])("div",p,[Object(n["h"])("input",{type:"checkbox",id:r.id},null,8,["id"]),Object(n["h"])("label",{for:r.id,class:"acordeon_titulo"},"Productos",8,["for"]),Object(n["h"])("div",O,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(r.reportes.listaRegistro,(function(t,e){return Object(n["q"])(),Object(n["d"])("div",{class:"producto",key:e},[Object(n["h"])("p",null,[j,Object(n["g"])(" "+Object(n["z"])(t.denominacion),1)]),Object(n["h"])("p",null,[h,Object(n["g"])(" "+Object(n["z"])(t.codigo_ean),1)]),Object(n["h"])("p",null,[v,Object(n["g"])(" $"+Object(n["z"])(t.precio_unidad),1)]),Object(n["h"])("p",null,[g,Object(n["g"])(" "+Object(n["z"])(t.unidad_medida),1)]),Object(n["h"])("p",null,[y,Object(n["g"])(" "+Object(n["z"])(t.cantidad_prod),1)]),Object(n["h"])("p",null,[m,Object(n["g"])(" "+Object(n["z"])(t.cantidad_vend),1)])])})),128))])])]),Object(n["h"])("div",w,[Object(n["h"])("div",P,[Object(n["h"])("div",null,[Object(n["h"])("button",{class:"btn-editar",onClick:e[1]||(e[1]=function(t){return i.editarReporte(r.reportes._id)})},"Editar")])]),Object(n["h"])("div",S,[Object(n["h"])("input",{type:"checkbox",id:r.id2},null,8,["id"]),Object(n["h"])("label",{for:r.id2,class:"acordeon_titulo2"},"Eliminar",8,["for"]),Object(n["h"])("div",x,[k,Object(n["h"])("div",E,[Object(n["h"])("button",{class:"btn-eliminar",onClick:e[2]||(e[2]=function(t){return i.eliminarReporte(r.reportes._id)})},"Confirmar")])])])])])})),_=r("5502"),C={name:"Card",props:["id","id2","reportes"],methods:Object(f["a"])(Object(f["a"])({},Object(_["b"])(["deleteReport"])),{},{editarReporte:function(t){window.location="/reportes/actualizar/".concat(t)},eliminarReporte:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.deleteReport(t);case 2:n=r.sent,200==n&&(window.location="/reportes");case 4:case"end":return r.stop()}}),r)})))()}})};r("cfdf");C.render=R,C.__scopeId="data-v-7546e50e";var z=C,N={name:"Reports",components:{NavBar:s["a"],Card:z},data:function(){return{reportes:[{report:{}}]}},mounted:function(){localStorage.getItem("token")||(window.location="/ingresar")},created:function(){this.obtenerReportes()},methods:Object(f["a"])(Object(f["a"])({},Object(_["b"])(["getReports"])),{},{obtenerReportes:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getReports();case 2:t.reportes=e.sent;case 3:case"end":return e.stop()}}),e)})))()},redirigir:function(){window.location="/reportes/nuevo"}})};r("a8b3");N.render=a,N.__scopeId="data-v-0d115fc0";e["default"]=N},cfdf:function(t,e,r){"use strict";r("cfee")},cfee:function(t,e,r){},dbb4:function(t,e,r){var n=r("23e7"),c=r("83ab"),o=r("56ef"),i=r("fc6a"),a=r("06cf"),u=r("8418");n({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(t){var e,r,n=i(t),c=a.f,f=o(n),s={},b=0;while(f.length>b)r=c(n,e=f[b++]),void 0!==r&&u(s,e,r);return s}})},e439:function(t,e,r){var n=r("23e7"),c=r("d039"),o=r("fc6a"),i=r("06cf").f,a=r("83ab"),u=c((function(){i(1)})),f=!a||u;n({target:"Object",stat:!0,forced:f,sham:!a},{getOwnPropertyDescriptor:function(t,e){return i(o(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-5e1a9057.630f7b64.js.map