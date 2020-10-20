(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a(2),b=a(6),l=(a(0),a(224)),c={title:"LATEST BY keyword",sidebar_label:"LATEST BY",description:"LATEST BY SQL keyword reference documentation."},r={unversionedId:"reference/sql/latest-by",id:"reference/sql/latest-by",isDocsHomePage:!1,title:"LATEST BY keyword",description:"LATEST BY SQL keyword reference documentation.",source:"@site/docs/reference/sql/latest-by.md",slug:"/reference/sql/latest-by",permalink:"/docs/reference/sql/latest-by",version:"current",sidebar_label:"LATEST BY"},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Examples",id:"examples",children:[{value:"Single column",id:"single-column",children:[]},{value:"Multiple columns",id:"multiple-columns",children:[]},{value:"Execution order",id:"execution-order",children:[]},{value:"WHERE first",id:"where-first",children:[]},{value:"LATEST BY first",id:"latest-by-first",children:[]}]}],s={rightToc:i};function O(e){var t=e.components,c=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"LATEST BY")," finds the latest entry by timestamp for a given key or combination\nof keys as part of a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/sql/select/"}),"SELECT statement"),"."),Object(l.b)("p",null,"To find the latest values, QuestDB will search time series from the newest\nvalues to the oldest."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"For single SYMBOL columns, QuestDB will know all distinct values upfront and\nstop once the latest entry has been found for each symbol value."),Object(l.b)("li",{parentName:"ul"},"For other field types, or multiple fields, QuestDB will scan the entire time\nseries. Although scan is very fast this means the performance will degrade on\nhundreds of millions of records for non-symbol keys.")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"To use ",Object(l.b)("inlineCode",{parentName:"p"},"LATEST BY"),", one column needs to be designated as ",Object(l.b)("inlineCode",{parentName:"p"},"timestamp"),". Find out\nmore in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/concept/designated-timestamp/"}),"designated timestamp")," section."))),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("p",null,Object(l.b)("img",{alt:"Flow chart showing the syntax of the LATEST BY keyword",src:a(259).default})),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"By default, QuestDB executes ",Object(l.b)("inlineCode",{parentName:"p"},"where")," clauses before ",Object(l.b)("inlineCode",{parentName:"p"},"latest by"),". To execute\n",Object(l.b)("inlineCode",{parentName:"p"},"where")," after ",Object(l.b)("inlineCode",{parentName:"p"},"latest by"),", you need to use sub-queries using brackets. You can\nlearn how to do this in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#execution-order"}),"examples"),"."))),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("h3",{id:"single-column"},"Single column"),Object(l.b)("p",null,"LATEST BY can be used with single columns. When this column is of type SYMBOL,\nthe query will end as soon as all distinct symbol values have been found."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-questdb-sql",metastring:'title="Latest temperature by city"',title:'"Latest',temperature:!0,by:!0,'city"':!0}),"SELECT city, temperature\nFROM weather\nLATEST BY city;\n")),Object(l.b)("h3",{id:"multiple-columns"},"Multiple columns"),Object(l.b)("p",null,"LATEST BY can also reference multiple columns although this can be slower."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-questdb-sql",metastring:'title="Latest balance by customer and currency"',title:'"Latest',balance:!0,by:!0,customer:!0,and:!0,'currency"':!0}),"SELECT cust_id, balance_ccy, balance\nFROM balances\nLATEST BY cust_id, balance_ccy;\n")),Object(l.b)("h3",{id:"execution-order"},"Execution order"),Object(l.b)("p",null,"The below queries illustrate how to change the execution order in a query by\nusing brackets. Assume the following table"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"cust_id"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"balance_ccy"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"balance"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"inactive"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"timestamp"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"USD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1500"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FALSE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2020-04-22T16:11:22.704665Z")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EUR"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"650.5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FALSE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2020-04-22T16:11:32.904234Z")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"USD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"900.75"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FALSE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2020-04-22T16:12:43.504432Z")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EUR"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"880.2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FALSE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2020-04-22T16:18:34.404665Z")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"USD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"330.5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FALSE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2020-04-22T16:20:14.404997Z")))),Object(l.b)("h3",{id:"where-first"},"WHERE first"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-questdb-sql"}),"SELECT * FROM balances LATEST BY cust_id, balance_ccy\nWHERE balance > 800;\n")),Object(l.b)("p",null,"This query executes ",Object(l.b)("inlineCode",{parentName:"p"},"WHERE")," before ",Object(l.b)("inlineCode",{parentName:"p"},"LATEST BY"),". It will return the latest\nbalance which is above 800. The steps are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Filter out all balances below 800."),Object(l.b)("li",{parentName:"ul"},"Finds the latest balance for each combination of cust_id and balance_ccy.")),Object(l.b)("p",null,"Since the latest USD balance for customer 1 is equal to 330.5, it is filtered\nout in the first step. Therefore, the returned balance is 1500, which is the\nlatest possible balance above 800."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"cust_id"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"balance_ccy"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"balance"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"inactive"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"timestamp"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"USD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1500"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FALSE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2020-04-22T16:11:22.704665Z")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"USD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"900.75"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FALSE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2020-04-22T16:12:43.504432Z")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EUR"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"880.2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FALSE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2020-04-22T16:18:34.404665Z")))),Object(l.b)("h3",{id:"latest-by-first"},"LATEST BY first"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-questdb-sql"}),"(SELECT * FROM balances LATEST BY cust_id, balance_ccy) --note the brackets\nWHERE balance > 800;\n")),Object(l.b)("p",null,"This query executes ",Object(l.b)("inlineCode",{parentName:"p"},"LATEST BY")," before ",Object(l.b)("inlineCode",{parentName:"p"},"WHERE"),". It returns the latest balances,\nthen filters out those below 800. The steps are"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Find the latest balances, regardless of value"),Object(l.b)("li",{parentName:"ul"},"Filter out balances below 800. Since the latest balance for customer 1 is\nequal to 330.5, it is filtered out in the second step.")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"cust_id"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"balance_ccy"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"balance"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"inactive"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"timestamp"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"USD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"900.75"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FALSE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2020-04-22T16:12:43.504432Z")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EUR"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"880.2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FALSE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2020-04-22T16:18:34.404665Z")))))}O.isMDXComponent=!0}}]);