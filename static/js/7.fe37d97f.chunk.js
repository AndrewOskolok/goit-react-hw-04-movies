(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[7],{80:function(e,t,a){"use strict";a.r(t);var c=a(32),n=a(0),r=a.n(n),s=a(31),i=a(9),m=a.n(i),o=a(81),l=a.n(o),u=function(e){var t=e.movieId,a=Object(n.useState)(null),i=Object(c.a)(a,2),m=i[0],o=i[1];return Object(n.useEffect)((function(){Object(s.b)("/movie/".concat(t,"/credits")).then((function(e){return o(e.data)}))}),[t]),r.a.createElement(r.a.Fragment,null,m&&m.cast.map((function(e){return e.profile_path&&r.a.createElement("li",{className:l.a.castItem,key:e.id},r.a.createElement("img",{className:l.a.castImg,src:s.a+e.profile_path,alt:e.name}),r.a.createElement("p",null,e.name),r.a.createElement("p",null,"Character: ",e.character))})))};u.protoTypes={movieId:m.a.number.isRequired},t.default=u},81:function(e,t,a){e.exports={castItem:"Cast_castItem__1Jg6j",castImg:"Cast_castImg__2JTY7"}}}]);
//# sourceMappingURL=7.fe37d97f.chunk.js.map