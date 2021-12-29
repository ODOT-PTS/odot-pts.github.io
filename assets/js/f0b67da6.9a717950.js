"use strict";(self.webpackChunkgtfsride_org=self.webpackChunkgtfsride_org||[]).push([[879],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(r),f=i,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6429:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),l=["components"],o={},p="Examples",c={unversionedId:"examples",id:"examples",title:"Examples",description:"Two GTFS-Ride examples are available:",source:"@site/specification/examples.md",sourceDirName:".",slug:"/examples",permalink:"/specification/examples",tags:[],version:"current",frontMatter:{},sidebar:"specificationsSidebar",previous:{title:"GTFS-ride Specification",permalink:"/specification/"},next:{title:"Specification Change Process",permalink:"/specification/change-process"}},s=[{value:"Simple Example",id:"simple-example",children:[],level:2},{value:"&quot;All&quot; Example",id:"all-example",children:[],level:2}],u={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Two GTFS-Ride examples are available:"),(0,a.kt)("h2",{id:"simple-example"},"Simple Example"),(0,a.kt)("p",null,'The "simple" example uses near-minimum inputs in all the GTFS-ride files.'),(0,a.kt)("a",{href:"https://github.com/ODOT-PTS/GTFS-ride/raw/master/spec/en/examples/ride_sample_simple.zip",class:"button button--primary"},"Download ride_sample_simple.zip"),(0,a.kt)("h2",{id:"all-example"},'"All" Example'),(0,a.kt)("p",null,'The "all" example uses every attribute in GTFS-ride at least once. '),(0,a.kt)("a",{href:"https://github.com/ODOT-PTS/GTFS-ride/raw/master/spec/en/examples/ride_sample_all.zip",class:"button button--primary"},"Download ride_sample_all.zip"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"For details on each file, see the ",(0,a.kt)("a",{parentName:"p",href:"/specification/#field-definitions"},"Field Definitions"),"."))}m.isMDXComponent=!0}}]);