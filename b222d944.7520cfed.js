(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return i}));var n=a(2),b=a(6),l=(a(0),a(193)),r={title:"Numeric functions",sidebar_label:"Numeric",description:"Numeric function reference documentation."},c={unversionedId:"reference/function/numeric",id:"reference/function/numeric",isDocsHomePage:!1,title:"Numeric functions",description:"Numeric function reference documentation.",source:"@site/docs/reference/function/numeric.md",slug:"/reference/function/numeric",permalink:"/docs/reference/function/numeric",version:"current",sidebar_label:"Numeric"},O=[{value:"round",id:"round",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Description",id:"description",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Examples",id:"examples",children:[]}]},{value:"round_down",id:"round_down",children:[{value:"Arguments",id:"arguments-1",children:[]},{value:"Description",id:"description-1",children:[]},{value:"Return value",id:"return-value-1",children:[]},{value:"Examples",id:"examples-1",children:[]}]},{value:"round_up",id:"round_up",children:[{value:"Arguments",id:"arguments-2",children:[]},{value:"Description",id:"description-2",children:[]},{value:"Return value",id:"return-value-2",children:[]},{value:"Examples",id:"examples-2",children:[]}]},{value:"round_half_even",id:"round_half_even",children:[{value:"Arguments",id:"arguments-3",children:[]},{value:"Description",id:"description-3",children:[]},{value:"Return value",id:"return-value-3",children:[]},{value:"Examples",id:"examples-3",children:[]}]},{value:"abs",id:"abs",children:[{value:"Arguments",id:"arguments-4",children:[]},{value:"Description",id:"description-4",children:[]},{value:"Return value",id:"return-value-4",children:[]},{value:"Examples",id:"examples-4",children:[]}]}],j={rightToc:O};function i(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"round"},"round"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"round(value, scale)"),' rounds a value to the specified scale using the "half up"\nmethod.'),Object(l.b)("h3",{id:"arguments"},"Arguments"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"value")," is any numeric value."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"scale")," is the number of decimal points returned. A negative scale means the\nrounding will occur to a digit to the left of the decimal point. For example,\n-1 means the number will be rounded to the nearest tens and +1 to the nearest\ntenths.")),Object(l.b)("h3",{id:"description"},"Description"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"round(value, scale)")," returns the ",Object(l.b)("strong",{parentName:"p"},"closest"),' value in the specified scale. It\nuses the "half up" tie-breaking method when the value is exactly halfway between\nthe ',Object(l.b)("inlineCode",{parentName:"p"},"round_up")," and ",Object(l.b)("inlineCode",{parentName:"p"},"round_down")," values."),Object(l.b)("h3",{id:"return-value"},"Return value"),Object(l.b)("p",null,"Return value type is ",Object(l.b)("inlineCode",{parentName:"p"},"double"),"."),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-questdb-sql"}),"SELECT\n    d,\n    round(d, -2),\n    round(d, -1),\n    round(d,0),\n    round(d,1),\n    round(d,2)\nFROM dbl;\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"d"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"round-2"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"round-1"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"round0"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"round1"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"round2"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-0.811905406"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-0.8"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-0.81")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-5.002768547"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-10"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-64.75487334"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-60"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-65"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-64.8"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-64.75")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-926.531695"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-900"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-930"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-927"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-926.5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-926.53")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.069361448"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.07")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4.003627053"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"86.91359825"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"90"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"87"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"86.9"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"86.91")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"376.3807766"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"400"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"380"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"376"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"376.4"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"376.38")))),Object(l.b)("h2",{id:"round_down"},"round_down"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"round_down(value, scale)")," - rounds a value down to the specified scale"),Object(l.b)("h3",{id:"arguments-1"},"Arguments"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"value")," is any numeric value."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"scale")," is the number of decimal points returned. A negative scale means the\nrounding will occur to a digit to the left of the decimal point. For example,\n-1 means the number will be rounded to the nearest tens and +1 to the nearest\ntenths.")),Object(l.b)("h3",{id:"description-1"},"Description"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"round_up(value, scale)")," rounds a value down to the specified scale."),Object(l.b)("h3",{id:"return-value-1"},"Return value"),Object(l.b)("p",null,"Return value type is ",Object(l.b)("inlineCode",{parentName:"p"},"double"),"."),Object(l.b)("h3",{id:"examples-1"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-questdb-sql"}),"SELECT\n    d,\n    round_down(d, -2),\n    round_down(d, -1),\n    round_down(d,0),\n    round_down(d,1),\n    round_down(d,2)\nFROM dbl;\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"d"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"r_down-2"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"r_down-1"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"r_down0"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"r_down1"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"r_down2"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-0.811905406"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-0.8"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-0.81")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-5.002768547"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-64.75487334"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-60"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-64"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-64.7"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-64.75")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-926.531695"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-900"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-920"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-926"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-926.5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-926.53")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.069361448"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.06")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4.003627053"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"86.91359825"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"80"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"86"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"86.9"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"86.91")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"376.3807766"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"400"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"370"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"376"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"376.3"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"376.38")))),Object(l.b)("h2",{id:"round_up"},"round_up"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"round_up(value, scale)")," - rounds a value up to the specified scale"),Object(l.b)("h3",{id:"arguments-2"},"Arguments"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"value")," is any numeric value."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"scale")," is the number of decimal points returned. A negative scale means the\nrounding will occur to a digit to the left of the decimal point. For example,\n-1 means the number will be rounded to the nearest tens and +1 to the nearest\ntenths.")),Object(l.b)("h3",{id:"description-2"},"Description"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"round_up(value, scale)")," rounds a value up to the specified scale"),Object(l.b)("h3",{id:"return-value-2"},"Return value"),Object(l.b)("p",null,"Return value type is ",Object(l.b)("inlineCode",{parentName:"p"},"double"),"."),Object(l.b)("h3",{id:"examples-2"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-questdb-sql"}),"SELECT\n    d,\n    round_up(d, -2),\n    round_up(d, -1),\n    round_up(d,0),\n    round_up(d,1),\n    round_up(d,2)\nFROM dbl;\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"d"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"r_up-2"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"r_up-1"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"r_up0"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"r_up1"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"r_up2"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-0.811905406"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-10"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-0.9"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-0.82")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-5.002768547"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-10"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-6"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-5.1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-5.01")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-64.75487334"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-70"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-65"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-64.8"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-64.76")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-926.531695"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-1000"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-930"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-927"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-926.6"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-926.54")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.069361448"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.07")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4.003627053"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4.1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4.01")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"86.91359825"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"90"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"87"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"87"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"86.92")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"376.3807766"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"400"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"380"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"377"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"376.4"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"376.39")))),Object(l.b)("h2",{id:"round_half_even"},"round_half_even"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"round_half_even(value, scale)")," - returns the ",Object(l.b)("strong",{parentName:"p"},"closest"),' value in the specified\nscale using the "half to even" behaviour'),Object(l.b)("h3",{id:"arguments-3"},"Arguments"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"value")," is any numeric value."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"scale")," is the number of decimal points returned. A negative scale means the\nrounding will occur to a digit to the left of the decimal point. For example,\n-1 means the number will be rounded to the nearest tens and +1 to the nearest\ntenths.")),Object(l.b)("h3",{id:"description-3"},"Description"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"round_half_even(value, scale)")," returns the ",Object(l.b)("strong",{parentName:"p"},"closest"),' value in the specified\nscale. It uses the "half up" tie-breaking method when the value is exactly\nhalfway between the ',Object(l.b)("inlineCode",{parentName:"p"},"round_up")," and ",Object(l.b)("inlineCode",{parentName:"p"},"round_down")," values."),Object(l.b)("h3",{id:"return-value-3"},"Return value"),Object(l.b)("p",null,"Return value type is ",Object(l.b)("inlineCode",{parentName:"p"},"double"),"."),Object(l.b)("h3",{id:"examples-3"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-questdb-sql",metastring:'title="Tie-breaker behavior"',title:'"Tie-breaker','behavior"':!0}),"SELECT\n    round_half_even(5.55, 1),\n    round_half_even(5.65, 1)\nFROM long_sequence(1);\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"round_half_even"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"round_half_even"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5.6"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5.6")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-questdb-sql",metastring:'title="More examples"',title:'"More','examples"':!0}),"SELECT\n    d,\n    round_half_even(d, -2),\n    round_half_even(d, -1),\n    round_half_even(d,0),\n    round_half_even(d,1),\n    round_half_even(d,2)\nFROM dbl;\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"d"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"r_h_e-2"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"r_h_e-1"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"r_h_e0"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"r_h_e1"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"r_h_e2"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-0.811905406"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-0.8"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-0.81")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-5.002768547"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-64.75487334"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-60"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-65"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-64.8"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-64.75")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-926.531695"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-900"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-930"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-927"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-926.5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-926.53")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.069361448"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.07")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4.003627053"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"86.91359825"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"90"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"87"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"86.9"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"86.91")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"376.3807766"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"400"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"380"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"376"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"376.4"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"376.38")))),Object(l.b)("h2",{id:"abs"},"abs"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"abs(value)")," return the absolute value."),Object(l.b)("h3",{id:"arguments-4"},"Arguments"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"value")," is any numeric value.")),Object(l.b)("h3",{id:"description-4"},"Description"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"abs(value)")," behaves as follow"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"When the input ",Object(l.b)("inlineCode",{parentName:"li"},"value")," is positive, ",Object(l.b)("inlineCode",{parentName:"li"},"abs")," returns ",Object(l.b)("inlineCode",{parentName:"li"},"value")),Object(l.b)("li",{parentName:"ul"},"When the input ",Object(l.b)("inlineCode",{parentName:"li"},"value")," is negative, ",Object(l.b)("inlineCode",{parentName:"li"},"abs")," returns ",Object(l.b)("inlineCode",{parentName:"li"},"- value")),Object(l.b)("li",{parentName:"ul"},"When the input ",Object(l.b)("inlineCode",{parentName:"li"},"value")," is ",Object(l.b)("inlineCode",{parentName:"li"},"0"),", ",Object(l.b)("inlineCode",{parentName:"li"},"abs")," returns ",Object(l.b)("inlineCode",{parentName:"li"},"0"))),Object(l.b)("h3",{id:"return-value-4"},"Return value"),Object(l.b)("p",null,"Return value type is ",Object(l.b)("inlineCode",{parentName:"p"},"double"),"."),Object(l.b)("h3",{id:"examples-4"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-questdb-sql"}),"SELECT\n    x - 2 a,\n    abs(x -2)\nFROM long_sequence(3);\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"a"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"abs"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1")))))}i.isMDXComponent=!0}}]);