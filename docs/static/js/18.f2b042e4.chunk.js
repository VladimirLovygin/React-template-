(this["webpackJsonpReact-template-"]=this["webpackJsonpReact-template-"]||[]).push([[18],{662:function(e,t,a){"use strict";a.r(t);var n=a(85),c=a(1),r=a(664),o=a(665),i=a(544),s=a(545),l=a(598),h=a(597),b=a(144),d=a.n(b),u=a(382),j=a(676),p=a(625),y=a(623),O=a(330),f=a(638),m=a(663),x=a(25),g=a(241),w=a.n(g),k=a(5);function M(e){return d()(new Date(1e3*e),"MMMM d, p yyyy")}function v(e,t,a){var n=Number.POSITIVE_INFINITY;return e.forEach((function(e){n>e[t]&&(n=e[t])})),Math.round(n-n*a)}var S=["1 Week","1 Month","6 Months"];t.default=Object(x.a)((function(e){return{cardContentInner:{marginTop:e.spacing(-4)}}}),{withTheme:!0})((function(e){var t=e.color,a=e.data,b=e.title,d=e.classes,x=e.theme,g=e.height,C=Object(c.useState)(null),I=Object(n.a)(C,2),N=I[0],E=I[1],T=Object(c.useState)("1 Month"),W=Object(n.a)(T,2),F=W[0],L=W[1],R=Object(c.useCallback)((function(e){E(e.currentTarget)}),[E]),H=Object(c.useCallback)((function(e){return[e,b]}),[b]),P=Object(c.useCallback)((function(){switch(F){case"1 Week":return"Last week";case"1 Month":return"Last month";case"6 Months":return"Last 6 months";default:throw new Error("No branch selected in switch-statement")}}),[F]),z=Object(c.useCallback)((function(){var e;switch(F){case"1 Week":e=604800;break;case"1 Month":e=2678400;break;case"6 Months":e=16070400;break;default:throw new Error("No branch selected in switch-statement")}for(var t=new Date/1e3-e,n=[],c=0;c<a.length;c+=1)t<a[c].timestamp&&n.unshift(a[c]);return n}),[a,F]),D=Object(c.useCallback)((function(){E(null)}),[E]),J=Object(c.useCallback)((function(e){L(e),D()}),[L,D]),K=Boolean(N);return Object(k.jsxs)(u.a,{children:[Object(k.jsx)(j.a,{pt:2,px:2,pb:4,children:Object(k.jsxs)(j.a,{display:"flex",justifyContent:"space-between",children:[Object(k.jsxs)("div",{children:[Object(k.jsx)(p.a,{variant:"subtitle1",children:b}),Object(k.jsx)(p.a,{variant:"body2",color:"textSecondary",children:P()})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)(y.a,{"aria-label":"More","aria-owns":K?"long-menu":void 0,"aria-haspopup":"true",onClick:R,children:Object(k.jsx)(w.a,{})}),Object(k.jsx)(O.a,{id:"long-menu",anchorEl:N,open:K,onClose:D,PaperProps:{style:{maxHeight:216,width:200}},disableScrollLock:!0,children:S.map((function(e){return Object(k.jsx)(f.a,{selected:e===F,onClick:function(){J(e)},name:e,children:e},e)}))})]})]})}),Object(k.jsx)(m.a,{children:Object(k.jsx)(j.a,{className:d.cardContentInner,height:g,children:Object(k.jsx)(r.a,{width:"100%",height:"100%",children:Object(k.jsxs)(o.a,{data:z(),type:"number",children:[Object(k.jsx)(i.a,{dataKey:"timestamp",type:"number",domain:["dataMin","dataMax"],hide:!0}),Object(k.jsx)(s.a,{domain:[v(a,"value",.05),"dataMax"],hide:!0}),Object(k.jsx)(l.a,{type:"monotone",dataKey:"value",stroke:t,fill:t}),Object(k.jsx)(h.a,{labelFormatter:M,formatter:H,cursor:!1,contentStyle:{border:"none",padding:x.spacing(1),borderRadius:x.shape.borderRadius,boxShadow:x.shadows[1]},labelStyle:x.typography.body1,itemStyle:{fontSize:x.typography.body1.fontSize,letterSpacing:x.typography.body1.letterSpacing,fontFamily:x.typography.body1.fontFamily,lineHeight:x.typography.body1.lineHeight,fontWeight:x.typography.body1.fontWeight}})]})})})})]})}))}}]);
//# sourceMappingURL=18.f2b042e4.chunk.js.map