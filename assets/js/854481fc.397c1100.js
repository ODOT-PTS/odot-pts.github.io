"use strict";(self.webpackChunkgtfsride_org=self.webpackChunkgtfsride_org||[]).push([[430],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(r),u=i,m=c["".concat(s,".").concat(u)]||c[u]||f[u]||n;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<n;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5218:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var a=r(7462),i=(r(7294),r(3905));const n={sidebar_position:3},l="GTFS-ride Files",o={unversionedId:"files",id:"files",title:"GTFS-ride Files",description:"This standard builds on top of GTFS and adds files necessary for ridership data standardization and reporting. The files that GTFS-ride adds are:",source:"@site/docs/files.md",sourceDirName:".",slug:"/files",permalink:"/docs/files",draft:!1,editUrl:"https://github.com/ODOT-PTS/odot-pts.github.io/blob/master/docs/files.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"GTFS-ride Tools",permalink:"/docs/tools"}},s={},d=[{value:"GTFS-ride File Relationships",id:"gtfs-ride-file-relationships",level:3}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gtfs-ride-files"},"GTFS-ride Files"),(0,i.kt)("p",null,"This standard builds on top of ",(0,i.kt)("a",{parentName:"p",href:"http://gtfs.org"},"GTFS")," and adds files necessary for ridership data standardization and reporting. The files that GTFS-ride adds are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"File Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/specification#board_alighttxt"},(0,i.kt)("inlineCode",{parentName:"a"},"board_alight.txt"))),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"Tracks boardings/alightings along with associated information at stop-level.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/specification#trip_capacitytxt"},(0,i.kt)("inlineCode",{parentName:"a"},"trip_capacity.txt"))),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides the capability to identify the capacities of vehicles used to provide service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/specification#rider_triptxt"},(0,i.kt)("inlineCode",{parentName:"a"},"rider_trip.txt"))),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"Includes anonymized data about specific riders' trip.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/specification#ridershiptxt"},(0,i.kt)("inlineCode",{parentName:"a"},"ridership.txt"))),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides the capability to supply ridership counts at various levels of aggregation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/specification#ride_feed_infotxt"},(0,i.kt)("inlineCode",{parentName:"a"},"ride_feed_info.txt"))),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"Information specific to the source and attributes of the additional ridership files.")))),(0,i.kt)("p",null,"Full detail on each file is available in the ",(0,i.kt)("a",{parentName:"p",href:"/specification"},"GTFS-ride specification"),"."),(0,i.kt)("h3",{id:"gtfs-ride-file-relationships"},"GTFS-ride File Relationships"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:r(8857).Z},(0,i.kt)("img",{alt:"GTFS-ride File Relationships",src:r(9445).Z,title:"GTFS-Ride File Relationships",width:"2530",height:"1472"}))))}c.isMDXComponent=!0},8857:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/files/gtfs-ride-file-relationships-d549e516a35905ea87cc1683fe26308d.png"},9445:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/gtfs-ride-file-relationships-d549e516a35905ea87cc1683fe26308d.png"}}]);