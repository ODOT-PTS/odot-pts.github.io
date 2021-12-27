"use strict";(self.webpackChunkgtfsride_org=self.webpackChunkgtfsride_org||[]).push([[388],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8814:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={},s=void 0,u={unversionedId:"change-process",id:"change-process",title:"change-process",description:"GTFS-ride is a new data standard looking to meet the needs of transit organizations to store and share their ridership data. It is a new standard, and input is encouraged to ensure the standard works for varying parties.",source:"@site/specification/change-process.md",sourceDirName:".",slug:"/change-process",permalink:"/specification/change-process",tags:[],version:"current",frontMatter:{},sidebar:"specificationsSidebar",previous:{title:"index",permalink:"/specification/"}},c=[{value:"Quarterly reviews",id:"quarterly-reviews",children:[],level:2},{value:"Discussion",id:"discussion",children:[],level:2},{value:"Initiated changes",id:"initiated-changes",children:[{value:"Initiation",id:"initiation",children:[],level:3},{value:"Pull request",id:"pull-request",children:[],level:3},{value:"Implementation",id:"implementation",children:[],level:3}],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"GTFS-ride is a new data standard looking to meet the needs of transit organizations to store and share their ridership data. It is a new standard, and input is encouraged to ensure the standard works for varying parties."),(0,a.kt)("h1",{id:"specification-modification"},"Specification modification"),(0,a.kt)("h2",{id:"quarterly-reviews"},"Quarterly reviews"),(0,a.kt)("p",null,"GTFS-ride is dependent upon filesets created using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/transit/tree/master/gtfs"},"GTFS specification"),". Due to that dependency, quarterly reviews on the first business day of January, April, July, and October will occur to ensure ongoing compatibility. Any changes as a result of the review will be identified in the ",(0,a.kt)("a",{parentName:"p",href:"CHANGES.md#changelog"},"Changelog"),"."),(0,a.kt)("h2",{id:"discussion"},"Discussion"),(0,a.kt)("p",null,"Any modification to GTFS-ride may be discussed in the ",(0,a.kt)("a",{parentName:"p",href:"https://groups.google.com/forum/#!forum/gtfs-ride"},"GTFS-ride Google Group"),". While starting a new topic discussing the desired change is not required for the change process, feedback received may ease the change's approval. "),(0,a.kt)("h2",{id:"initiated-changes"},"Initiated changes"),(0,a.kt)("p",null,"There are multiple reasons why a change to GTFS-ride may occur: security vulnerability, usability defect, or new/improved feature sought. Depending on the change immediacy and method of change, the specification modification process will vary."),(0,a.kt)("h3",{id:"initiation"},"Initiation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If a change is desired, but the exact change to the code is not known, an ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ODOT-PTS/GTFS-ride/issues"},"issue")," should be opened. The current ",(0,a.kt)("a",{parentName:"li",href:"AUTHORS"},"authors")," will respond to the issue within 7 business days. An open issue presents an opportunity for collaboration between the authors and the community to craft a solution better serving GTFS-ride users. A branch will be created of the solution, and a pull request initiated."),(0,a.kt)("li",{parentName:"ul"},"If a change is desired, and the exact change to the code is known, a branch should be created implementing the change where applicable (i.e. documentation, specification, etc.). The initiator of the change will create a pull request for the modified branch.")),(0,a.kt)("h3",{id:"pull-request"},"Pull request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Once a pull request is made, voting will occur for a minimum of 7 business days, and a new topic announcing the pull request must be posted to the ",(0,a.kt)("a",{parentName:"li",href:"https://groups.google.com/forum/#!forum/gtfs-ride"},"GTFS-ride Google Group")," the same day."),(0,a.kt)("li",{parentName:"ul"},"Voting shall occur on the pull request by leaving a comment that begins with either ",(0,a.kt)("inlineCode",{parentName:"li"},"+1")," to support or ",(0,a.kt)("inlineCode",{parentName:"li"},"-1")," to not support the change in its current form. The submitter of a pull request may not vote on their own change."),(0,a.kt)("li",{parentName:"ul"},"During voting, any ",(0,a.kt)("inlineCode",{parentName:"li"},"-1")," votes require the voting party to identify the reason for their vote and engage with the change seeking party to resolve."),(0,a.kt)("li",{parentName:"ul"},"The change will be adopted only with a minimum of three ",(0,a.kt)("inlineCode",{parentName:"li"},"+1")," votes and no outstanding ",(0,a.kt)("inlineCode",{parentName:"li"},"-1")," votes. If the adoption threshold is not met at the end of day 7, the voting process continues until the threshold is met or the initiating party withdraws their pull request.")),(0,a.kt)("h3",{id:"implementation"},"Implementation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For security or functionality changes, the modified branch will be merged into the master branch immediately upon approval of the pull request."),(0,a.kt)("li",{parentName:"ul"},"For feature creation or enhancement changes, the modified branch will be merged into the master branch during the next quarterly review. This is done to provide some stability to the specification to ease development and adoption.")),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"September 6, 2017")," - Initial release."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"January 1, 2018")," - Quarterly review and new elements.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"load_count")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"board_alight.txt")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"April 1, 2018")," - Quarterly review."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"July 1, 2018")," - Quarterly review."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"October 1, 2018")," - Quarterly review."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"January 1, 2020")," - Quarterly review."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"July 1, 2020")," - Quarterly review.")))}p.isMDXComponent=!0}}]);