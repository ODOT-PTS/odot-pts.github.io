"use strict";(self.webpackChunkgtfsride_org=self.webpackChunkgtfsride_org||[]).push([[195],{9832:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var n=a(7294),r=a(6010),l=a(7019),i=a(9960),c=a(2263),s="heroBanner_etFc",m="hero__image_U-aa",o="hero__title_lIuE",d="hero__subtitle_3H2k",g="buttons_+YzY",u=a(7462),E={features:"features_n4mZ"},p=[{title:"Track Transit Ridership",Img:n.createElement("img",{src:"/img/ridership-map.jpg",className:E.featureImg,width:"300",style:{marginBottom:"30px"}}),description:n.createElement(n.Fragment,null,"Answer questions like:",n.createElement("ul",{style:{textAlign:"left"}},n.createElement("li",null,"How many people rode the bus/train/ferry last week?"),n.createElement("li",null,"Which routes have the most riders?"),n.createElement("li",null,"What time of day is the busiest?"),n.createElement("li",null,"What are the busiest stops in the system?")))},{title:"Standardize Ridership Data",Img:n.createElement("img",{src:"/img/ridership-data.png",className:E.featureImg,width:"350",style:{marginBottom:"30px"}}),description:n.createElement(n.Fragment,null,"GTFS-ride provides transit agencies a standardized way to collect, store, share, report, and analyze their ridership data.")},{title:"Open Standard",Img:n.createElement("img",{src:"/img/osi-approved.png",className:E.featureImg,width:"150"}),description:n.createElement(n.Fragment,null,"GTFS-ride is an open, flexible, non-proprietary standard with a documented ",n.createElement("a",{href:"/specification/change-process"},"change process"),".")}];function h(e){var t=e.Img,a=e.title,l=e.description;return n.createElement("div",{className:(0,r.Z)("col col--4")},n.createElement("div",{className:"text--center"},t),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("h3",null,a),n.createElement("p",null,l)))}function v(){return n.createElement("section",{className:E.features},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},p.map((function(e,t){return n.createElement(h,(0,u.Z)({key:t},e))})))))}var f="company-logo_Gbzt",N="company-name_9XJe",y="agency-logo_ZoKU",b="agency-name_Xqtb",_=[{name:"GMV",imagePath:"img/gmv-logo.png"},{name:"Optibus",imagePath:"img/optibus-logo.svg"}],w=[{name:"Cascades East Transit",imagePath:"/img/cet-logo.png",location:"Bend, OR"},{name:"Cherriots",imagePath:"/img/cherriots-logo.png",location:"Salem, OR"},{name:"Lane Transit District",imagePath:"/img/ltd-logo.png",location:"Eugene, OR"},{name:"South Metro Area Regional Transit",imagePath:"/img/smart-logo.png",location:"Wilsonville, OR"}];function x(e){var t=e.name,a=e.imagePath;return n.createElement("div",{className:(0,r.Z)("col col--4"),style:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},n.createElement("div",{className:"text--center"},n.createElement("img",{src:a,className:f,alt:t})),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("div",{className:N},t)))}function Z(e){var t=e.name,a=e.imagePath,l=e.location;return n.createElement("div",{className:(0,r.Z)("col col--3"),style:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},n.createElement("div",{className:"text--center"},n.createElement("img",{src:a,className:y,alt:t})),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("div",{className:b},t),n.createElement("div",null,l)))}function S(){return n.createElement("section",null,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"card",style:{border:"1px solid #ddd"}},n.createElement("div",{className:"card__header"},n.createElement("h2",null,"Companies Supporting GTFS-ride")),n.createElement("div",{className:"card__body"},n.createElement("div",{className:"row"},_.map((function(e,t){return n.createElement(x,(0,u.Z)({key:t},e))})))))),n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"card",style:{border:"1px solid #ddd"}},n.createElement("div",{className:"card__header"},n.createElement("h2",null,"Agencies Using GTFS-ride")),n.createElement("div",{className:"card__body"},n.createElement("div",{className:"row"},w.map((function(e,t){return n.createElement(Z,(0,u.Z)({key:t},e))})))))))}function T(){var e=(0,c.Z)().siteConfig;return n.createElement("header",{className:(0,r.Z)("hero hero--primary",s)},n.createElement("div",{className:"container"},n.createElement("div",{class:"row"},n.createElement("div",{class:"col col--4"},n.createElement("h1",{className:o},n.createElement("img",{src:"/img/gtfs-ride-logo-white.svg",className:m,alt:"GTFS-ride"}))),n.createElement("div",{class:"col col--5"},n.createElement("p",{className:d},e.tagline),n.createElement("div",{className:g},n.createElement(i.Z,{className:"button button--secondary button--lg margin-right--sm margin-top--sm",to:"/docs/about"},"About GTFS-ride"),n.createElement(i.Z,{className:"button button--secondary button--lg margin-top--sm",to:"/specification"},"GTFS-ride Specification"))))))}function k(){var e=(0,c.Z)().siteConfig;return n.createElement(l.Z,{title:""+e.title,description:"Description will go into a meta tag in <head />"},n.createElement(T,null),n.createElement("main",null,n.createElement(v,null),n.createElement(S,null)))}}}]);