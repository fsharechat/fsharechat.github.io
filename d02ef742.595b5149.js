(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{160:function(e,I,t){"use strict";t.r(I),t.d(I,"frontMatter",(function(){return n})),t.d(I,"metadata",(function(){return A})),t.d(I,"rightToc",(function(){return C})),t.d(I,"default",(function(){return c}));var g=t(2),i=t(6),a=(t(0),t(193)),n={title:"ALTER TABLE DROP PARTITION keywords",sidebar_label:"ALTER TABLE DROP PARTITION",description:"DROP PARTITION SQL keyword reference documentation."},A={unversionedId:"reference/sql/alter-table-drop-partition",id:"reference/sql/alter-table-drop-partition",isDocsHomePage:!1,title:"ALTER TABLE DROP PARTITION keywords",description:"DROP PARTITION SQL keyword reference documentation.",source:"@site/docs/reference/sql/alter-table-drop-partition.md",slug:"/reference/sql/alter-table-drop-partition",permalink:"/docs/reference/sql/alter-table-drop-partition",version:"current",sidebar_label:"ALTER TABLE DROP PARTITION"},C=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Examples",id:"examples",children:[]}],b={rightToc:C};function c(e){var I=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(g.a)({},b,n,{components:I,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Drops a partition from an existing table."),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",Object(g.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(g.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(g.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(a.b)("path",Object(g.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(a.b)("div",Object(g.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"This action irremediably deletes the data contained in the dropped partition"))),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Flow chart showing the syntax of the ALTER TABLE keyword",src:t(207).default}),"\n",Object(a.b)("img",{alt:"Flow chart showing the syntax of ALTER TABLE with DROP PARTITION keyword",src:t(302).default})),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Drops one or more table partitions. Partition name must match the name of the\ndirectory for the given partition."),Object(a.b)("p",null,"Just like with columns dropping of partitions is a non-blocking and non-waiting\noperation. While being atomic for a single partitions, dropping of multiple\npartitions is in itself non-atomic. Drop partition will bail on the first\nfailure and will not continue with the list."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(g.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(g.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(g.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(g.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(g.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The last partition (active partition) cannot be removed. This will be\nimplemented in a future release."))),Object(a.b)("p",null,"Naming convention for partition directories is as follows:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(g.a)({parentName:"tr"},{align:null}),"Table Partition"),Object(a.b)("th",Object(g.a)({parentName:"tr"},{align:null}),"Partition format"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(g.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"DAY")),Object(a.b)("td",Object(g.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"YYYY-MM-DD"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(g.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"MONTH")),Object(a.b)("td",Object(g.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"YYYY-MM"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(g.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"YEAR")),Object(a.b)("td",Object(g.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"YYYY"))))),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",Object(g.a)({parentName:"pre"},{className:"language-questdb-sql",metastring:'title="Drop a single partition"',title:'"Drop',a:!0,single:!0,'partition"':!0}),"--DAY\nALTER TABLE measurements DROP PARTITION '2019-05-18';\n--MONTH\nALTER TABLE measurements DROP PARTITION '2019-05';\n--YEAR\nALTER TABLE measurements DROP PARTITION '2019';\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(g.a)({parentName:"pre"},{className:"language-questdb-sql",metastring:'title="Drop multiple partitions"',title:'"Drop',multiple:!0,'partitions"':!0}),"ALTER TABLE measurements DROP PARTITION '2018','2019';\n")))}c.isMDXComponent=!0},302:function(e,I,t){"use strict";t.r(I),I.default="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNzkiIGhlaWdodD0iODEiPgogICAgPGRlZnM+CiAgICAgICAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KICAgICAgICAgICAgQG5hbWVzcGFjZSAiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciOwogICAgICAgICAgICAgICAgLmxpbmUgICAgICAgICAgICAgICAgIHtmaWxsOiBub25lOyBzdHJva2U6ICM2MzYyNzM7fQogICAgICAgICAgICAgICAgLmJvbGQtbGluZSAgICAgICAgICAgIHtzdHJva2U6ICM2MzYyNzM7IHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgc3Ryb2tlLXdpZHRoOiAyOyB9CiAgICAgICAgICAgICAgICAudGhpbi1saW5lICAgICAgICAgICAge3N0cm9rZTogIzYzNjI3Mzsgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzfQogICAgICAgICAgICAgICAgLmZpbGxlZCAgICAgICAgICAgICAgIHtmaWxsOiAjNjM2MjczOyBzdHJva2U6IG5vbmU7fQogICAgICAgICAgICAgICAgdGV4dC50ZXJtaW5hbCAgICAgICAgIHtmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAiU2Vnb2UgVUkiLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7CiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7CiAgICAgICAgICAgICAgICBmaWxsOiAjZmZmZmZmOwogICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB0ZXh0Lm5vbnRlcm1pbmFsICAgICAge2ZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsKICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsKICAgICAgICAgICAgICAgIGZpbGw6ICNlMjg5YTQ7CiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgdGV4dC5yZWdleHAgICAgICAgICAgIHtmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAiU2Vnb2UgVUkiLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7CiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7CiAgICAgICAgICAgICAgICBmaWxsOiAjMDAxNDFGOwogICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIHJlY3QsIGNpcmNsZSwgcG9seWdvbiB7ZmlsbDogbm9uZTsgc3Ryb2tlOiBub25lO30KICAgICAgICAgICAgICAgIHJlY3QudGVybWluYWwgICAgICAgICB7ZmlsbDogbm9uZTsgc3Ryb2tlOiAjYmUyZjViO30KICAgICAgICAgICAgICAgIHJlY3Qubm9udGVybWluYWwgICAgICB7ZmlsbDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpOyBzdHJva2U6IG5vbmU7fQogICAgICAgICAgICAgICAgcmVjdC50ZXh0ICAgICAgICAgICAgIHtmaWxsOiBub25lOyBzdHJva2U6IG5vbmU7fQogICAgICAgICAgICAgICAgcG9seWdvbi5yZWdleHAgICAgICAgIHtmaWxsOiAjQzdFQ0ZGOyBzdHJva2U6ICMwMzhjYmM7fQogICAgICAgIDwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICA8cG9seWdvbiBwb2ludHM9IjkgNjEgMSA1NyAxIDY1Ii8+CiAgICA8cG9seWdvbiBwb2ludHM9IjE3IDYxIDkgNTcgOSA2NSIvPjxhIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bGluazpocmVmPSIjZHJvcCIgeGxpbms6dGl0bGU9ImRyb3AiPgogICAgPHJlY3QgeD0iMzEiIHk9IjQ3IiB3aWR0aD0iNDgiIGhlaWdodD0iMzIiLz4KICAgIDxyZWN0IHg9IjI5IiB5PSI0NSIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjMyIiBjbGFzcz0ibm9udGVybWluYWwiLz4KICAgIDx0ZXh0IGNsYXNzPSJub250ZXJtaW5hbCIgeD0iMzkiIHk9IjY1Ij5kcm9wPC90ZXh0PjwvYT48YSB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeGxpbms6aHJlZj0iI3BhcnRpdGlvbiIgeGxpbms6dGl0bGU9InBhcnRpdGlvbiI+CiAgICA8cmVjdCB4PSI5OSIgeT0iNDciIHdpZHRoPSI3NCIgaGVpZ2h0PSIzMiIvPgogICAgPHJlY3QgeD0iOTciIHk9IjQ1IiB3aWR0aD0iNzQiIGhlaWdodD0iMzIiIGNsYXNzPSJub250ZXJtaW5hbCIvPgogICAgPHRleHQgY2xhc3M9Im5vbnRlcm1pbmFsIiB4PSIxMDciIHk9IjY1Ij5wYXJ0aXRpb248L3RleHQ+PC9hPjxyZWN0IHg9IjIxMyIgeT0iNDciIHdpZHRoPSIxMTgiIGhlaWdodD0iMzIiIHJ4PSIxMCIvPgogICAgPHJlY3QgeD0iMjExIiB5PSI0NSIgd2lkdGg9IjExOCIgaGVpZ2h0PSIzMiIgY2xhc3M9InRlcm1pbmFsIiByeD0iMTAiLz4KICAgIDx0ZXh0IGNsYXNzPSJ0ZXJtaW5hbCIgeD0iMjIxIiB5PSI2NSI+cGFydGl0aW9uIG5hbWU8L3RleHQ+CiAgICA8cmVjdCB4PSIyMTMiIHk9IjMiIHdpZHRoPSIyNCIgaGVpZ2h0PSIzMiIgcng9IjEwIi8+CiAgICA8cmVjdCB4PSIyMTEiIHk9IjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIzMiIgY2xhc3M9InRlcm1pbmFsIiByeD0iMTAiLz4KICAgIDx0ZXh0IGNsYXNzPSJ0ZXJtaW5hbCIgeD0iMjIxIiB5PSIyMSI+LDwvdGV4dD4KICAgIDxwYXRoIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJsaW5lIiBkPSJtMTcgNjEgaDIgbTAgMCBoMTAgbTQ4IDAgaDEwIG0wIDAgaDEwIG03NCAwIGgxMCBtMjAgMCBoMTAgbTExOCAwIGgxMCBtLTE1OCAwIGwyMCAwIG0tMSAwIHEtOSAwIC05IC0xMCBsMCAtMjQgcTAgLTEwIDEwIC0xMCBtMTM4IDQ0IGwyMCAwIG0tMjAgMCBxMTAgMCAxMCAtMTAgbDAgLTI0IHEwIC0xMCAtMTAgLTEwIG0tMTM4IDAgaDEwIG0yNCAwIGgxMCBtMCAwIGg5NCBtMjMgNDQgaC0zIi8+CiAgICA8cG9seWdvbiBwb2ludHM9IjM2OSA2MSAzNzcgNTcgMzc3IDY1Ii8+CiAgICA8cG9seWdvbiBwb2ludHM9IjM2OSA2MSAzNjEgNTcgMzYxIDY1Ii8+PC9zdmc+Cg=="}}]);