(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(189)),b={title:"Timestamp generator",sidebar_label:"Timestamp generator",description:"Timestamp generator function reference documentation."},c={unversionedId:"reference/function/timestamp-generator",id:"reference/function/timestamp-generator",isDocsHomePage:!1,title:"Timestamp generator",description:"Timestamp generator function reference documentation.",source:"@site/docs/reference/function/timestamp-generator.md",slug:"/reference/function/timestamp-generator",permalink:"/docs/reference/function/timestamp-generator",version:"current",sidebar_label:"Timestamp generator"},l=[{value:"timestamp_sequence",id:"timestamp_sequence",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Description",id:"description",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Examples",id:"examples",children:[]}]}],m={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"timestamp_sequence"},"timestamp_sequence"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"timestamp_sequence(startTimestamp, step)")," - generates increasing timestamps.")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"startTimestamp"),": is a ",Object(i.b)("inlineCode",{parentName:"li"},"timestamp")," representing the starting (i.e lowest)\ngenerated timestamp in the sequence."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"step"),": is a ",Object(i.b)("inlineCode",{parentName:"li"},"long")," representing the interval between 2 consecutive generated\ntimestamps in ",Object(i.b)("inlineCode",{parentName:"li"},"microseconds"),".")),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"timestamp_sequnence(startTimestamp, step)")," generates a sequence of\n",Object(i.b)("inlineCode",{parentName:"li"},"timestamp")," starting at ",Object(i.b)("inlineCode",{parentName:"li"},"startTimestamp"),", and incrementing by a ",Object(i.b)("inlineCode",{parentName:"li"},"step")," set as\na ",Object(i.b)("inlineCode",{parentName:"li"},"long")," value in microseconds. This ",Object(i.b)("inlineCode",{parentName:"li"},"step")," can be."),Object(i.b)("li",{parentName:"ul"},"a static value, in which case the growth will be monotonic."),Object(i.b)("li",{parentName:"ul"},"a randomized value, in which case the growth will be randomized. This is done\nusing\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/reference/function/random-value-generator/"}),"random value generator functions"),".")),Object(i.b)("h3",{id:"return-value"},"Return value"),Object(i.b)("p",null,"Return value type is ",Object(i.b)("inlineCode",{parentName:"p"},"timestamp"),"."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-questdb-sql",metastring:'title="Monotonic timestamp increase"',title:'"Monotonic',timestamp:!0,'increase"':!0}),"SELECT x, timestamp_sequence(\n            to_timestamp('2019-10-17T00:00:00', 'yyyy-MM-ddTHH:mm:ss'),\n            100000L)\nFROM long_sequence(5);\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"x"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"timestamp_sequence"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2019-10-17T00:00:00.000000Z")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2019-10-17T00:00:00.100000Z")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2019-10-17T00:00:00.200000Z")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2019-10-17T00:00:00.300000Z")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2019-10-17T00:00:00.400000Z")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-questdb-sql",metastring:'title="Randomized timestamp increase"',title:'"Randomized',timestamp:!0,'increase"':!0}),"SELECT x, timestamp_sequence(\n            to_timestamp('2019-10-17T00:00:00', 'yyyy-MM-ddTHH:mm:ss'),\n            rnd_short(1,5) * 100000L)\nFROM long_sequence(5);\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"x"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"timestamp_sequence"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2019-10-17T00:00:00.000000Z")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2019-10-17T00:00:00.100000Z")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2019-10-17T00:00:00.600000Z")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2019-10-17T00:00:00.900000Z")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2019-10-17T00:00:01.300000Z")))))}s.isMDXComponent=!0}}]);