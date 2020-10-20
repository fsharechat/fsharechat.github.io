(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),l=(n(0),n(224)),i={title:"Telemetry",sidebar_label:"Telemetry",description:"What data QuestDB collects and how to disable telemetry collection."},c={unversionedId:"reference/configuration/telemetry",id:"reference/configuration/telemetry",isDocsHomePage:!1,title:"Telemetry",description:"What data QuestDB collects and how to disable telemetry collection.",source:"@site/docs/reference/configuration/telemetry.md",slug:"/reference/configuration/telemetry",permalink:"/docs/reference/configuration/telemetry",version:"current",sidebar_label:"Telemetry"},b=[{value:"Disabling telemetry",id:"disabling-telemetry",children:[]},{value:"Data collected",id:"data-collected",children:[]}],o={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"QuestDB sends telemetry data with information about usage which helps us improve\nthe product over time. We do not collect any personally-identifying information,\nand we do not share any of this data with third parties."),Object(l.b)("p",null,"This page describes what data is collected and how to disable the telemetry\nreporting function."),Object(l.b)("h2",{id:"disabling-telemetry"},"Disabling telemetry"),Object(l.b)("p",null,"To disable telemetry, add the following configuration key in\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/configuration/server"}),"server.conf")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:'title="Disabling telemetry"',title:'"Disabling','telemetry"':!0}),"telemetry.enabled=false\n")),Object(l.b)("h2",{id:"data-collected"},"Data collected"),Object(l.b)("p",null,"QuestDB collects the following usage data"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"id"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"long256")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A unique identifier generated once at runtime as the concatenation of microseconds timestamp with a nanosecond timestamp.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"created"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"date")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Event timestamp")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"event"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"short")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Event type ID. For example ",Object(l.b)("inlineCode",{parentName:"td"},"1")," for ",Object(l.b)("inlineCode",{parentName:"td"},"SELECT"),", ",Object(l.b)("inlineCode",{parentName:"td"},"2")," for ",Object(l.b)("inlineCode",{parentName:"td"},"INSERT"),", etc)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"origin"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"short")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Event origin ID, ",Object(l.b)("inlineCode",{parentName:"td"},"1")," for ",Object(l.b)("inlineCode",{parentName:"td"},"INTERNAL"),", ",Object(l.b)("inlineCode",{parentName:"td"},"2")," for ",Object(l.b)("inlineCode",{parentName:"td"},"HTTP"),", ",Object(l.b)("inlineCode",{parentName:"td"},"3")," for PG_WIRE, etc.)")))))}d.isMDXComponent=!0}}]);