"use strict";(self.webpackChunkgtfsride_org=self.webpackChunkgtfsride_org||[]).push([[430],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return u}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),f=p(r),u=a,m=f["".concat(s,".").concat(u)]||f[u]||c[u]||i;return r?n.createElement(m,o(o({ref:e},d),{},{components:r})):n.createElement(m,o({ref:e},d))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5218:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:3},s="GTFS-ride Files",p={unversionedId:"files",id:"files",title:"GTFS-ride Files",description:"This standard builds on top of GTFS and adds files necessary for ridership data standardization and reporting. The files that GTFS-ride adds are:",source:"@site/docs/files.md",sourceDirName:".",slug:"/files",permalink:"/docs/files",editUrl:"https://github.com/ODOT-PTS/odot-pts.github.io/blob/master/docs/files.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"GTFS-ride Tools",permalink:"/docs/tools"}},d=[{value:"GTFS-ride File Relationships",id:"gtfs-ride-file-relationships",children:[],level:3}],c={toc:d};function f(t){var e=t.components,l=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gtfs-ride-files"},"GTFS-ride Files"),(0,i.kt)("p",null,"This standard builds on top of ",(0,i.kt)("a",{parentName:"p",href:"http://gtfs.org"},"GTFS")," and adds files necessary for ridership data standardization and reporting. The files that GTFS-ride adds are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"File Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/specification#board_alighttxt"},(0,i.kt)("inlineCode",{parentName:"a"},"board_alight.txt"))),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"Tracks boardings/alightings along with associated information at stop-level.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/specification#trip_capacitytxt"},(0,i.kt)("inlineCode",{parentName:"a"},"trip_capacity.txt"))),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides the capability to identify the capacities of vehicles used to provide service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/specification#rider_triptxt"},(0,i.kt)("inlineCode",{parentName:"a"},"rider_trip.txt"))),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"Includes anonymized data about specific riders' trip.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/specification#ridershiptxt"},(0,i.kt)("inlineCode",{parentName:"a"},"ridership.txt"))),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides the capability to supply ridership counts at various levels of aggregation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/specification#ride_feed_infotxt"},(0,i.kt)("inlineCode",{parentName:"a"},"ride_feed_info.txt"))),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"Information specific to the source and attributes of the additional ridership files.")))),(0,i.kt)("p",null,"Full detail on each file is available in the ",(0,i.kt)("a",{parentName:"p",href:"/specification"},"GTFS-ride specification"),"."),(0,i.kt)("h3",{id:"gtfs-ride-file-relationships"},"GTFS-ride File Relationships"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:r(3096).Z},(0,i.kt)("img",{alt:"GTFS-ride File Relationships",src:r(3213).Z,title:"GTFS-Ride File Relationships"}))))}f.isMDXComponent=!0},3096:function(t,e,r){e.Z=r.p+"assets/files/gtfs-ride-file-relationships-d549e516a35905ea87cc1683fe26308d.png"},3213:function(t,e,r){e.Z=r.p+"assets/images/gtfs-ride-file-relationships-d549e516a35905ea87cc1683fe26308d.png"}}]);