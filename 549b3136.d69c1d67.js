(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(218)),l={title:"Telemetry",sidebar_label:"Telemetry",description:"What data QuestDB collects and how to disable telemetry collection."},c={unversionedId:"reference/configuration/telemetry",id:"reference/configuration/telemetry",isDocsHomePage:!1,title:"Telemetry",description:"What data QuestDB collects and how to disable telemetry collection.",source:"@site/docs/reference/configuration/telemetry.md",slug:"/reference/configuration/telemetry",permalink:"/docs/reference/configuration/telemetry",version:"current",sidebar_label:"Telemetry",sidebar:"docs",previous:{title:"Configuration properties",permalink:"/docs/reference/configuration/server"},next:{title:"Aggregation functions",permalink:"/docs/reference/function/aggregation"}},b=[{value:"Disabling telemetry",id:"disabling-telemetry",children:[]},{value:"Data collected",id:"data-collected",children:[]}],o={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"QuestDB sends telemetry data with information about usage which helps us improve\nthe product over time. We do not collect any personally-identifying information,\nand we do not share any of this data with third parties."),Object(i.b)("p",null,"This page describes what data is collected and how to disable the telemetry\nreporting function."),Object(i.b)("h2",{id:"disabling-telemetry"},"Disabling telemetry"),Object(i.b)("p",null,"To disable telemetry, add the following configuration key in\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/configuration/server"}),"server.conf")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:'title="Disabling telemetry"',title:'"Disabling','telemetry"':!0}),"telemetry.enabled=false\n")),Object(i.b)("h2",{id:"data-collected"},"Data collected"),Object(i.b)("p",null,"QuestDB collects the following usage data"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"id"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"long256")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A unique identifier generated once at runtime as the concatenation of microseconds timestamp with a nanosecond timestamp.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"created"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"date")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Event timestamp")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"event"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"short")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Event type ID. For example ",Object(i.b)("inlineCode",{parentName:"td"},"1")," for ",Object(i.b)("inlineCode",{parentName:"td"},"SELECT"),", ",Object(i.b)("inlineCode",{parentName:"td"},"2")," for ",Object(i.b)("inlineCode",{parentName:"td"},"INSERT"),", etc)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"origin"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"short")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Event origin ID, ",Object(i.b)("inlineCode",{parentName:"td"},"1")," for ",Object(i.b)("inlineCode",{parentName:"td"},"INTERNAL"),", ",Object(i.b)("inlineCode",{parentName:"td"},"2")," for ",Object(i.b)("inlineCode",{parentName:"td"},"HTTP"),", ",Object(i.b)("inlineCode",{parentName:"td"},"3")," for PG_WIRE, etc.)")))))}d.isMDXComponent=!0}}]);