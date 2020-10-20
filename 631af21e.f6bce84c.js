(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{127:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return j}));var b=a(2),l=a(6),n=(a(0),a(224)),c={title:"Meta functions",sidebar_label:"Meta",description:"Table and database metadata function reference documentation."},r={unversionedId:"reference/function/meta",id:"reference/function/meta",isDocsHomePage:!1,title:"Meta functions",description:"Table and database metadata function reference documentation.",source:"@site/docs/reference/function/meta.md",slug:"/reference/function/meta",permalink:"/docs/reference/function/meta",version:"current",sidebar_label:"Meta"},O=[{value:"all_tables",id:"all_tables",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Description",id:"description",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Examples:",id:"examples",children:[]}]},{value:"table_columns",id:"table_columns",children:[{value:"Arguments",id:"arguments-1",children:[]},{value:"Description",id:"description-1",children:[]},{value:"Return value",id:"return-value-1",children:[]},{value:"Examples:",id:"examples-1",children:[]}]}],u={rightToc:O};function j(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(n.b)("wrapper",Object(b.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"all_tables"},"all_tables"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"all_tables()")," returns a list of tables."),Object(n.b)("h3",{id:"arguments"},"Arguments"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"all_tables()")," does not require arguments.")),Object(n.b)("h3",{id:"description"},"Description"),Object(n.b)("p",null,"Returns all tables in the database."),Object(n.b)("h3",{id:"return-value"},"Return value"),Object(n.b)("p",null,"Returns a ",Object(n.b)("inlineCode",{parentName:"p"},"table"),"."),Object(n.b)("h3",{id:"examples"},"Examples:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Get all tables in the database")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-questdb-sql"}),"all_tables();\n")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"tableName"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"table1")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"table2")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"...")))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Get all tables in the database that match 'sales'")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-questdb-sql"}),"all_tables() WHERE tableName ~= 'sales';\n")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"tableName"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"sales-north")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"sales-west")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"sales-east")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"sales-south")))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Get all tables in reverse alphabetical order")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-questdb-sql"}),"all_tables() ORDER BY tableName DESC;\n")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"tableName"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"table_n")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"table_n-1")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"table_n-2")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"...")))),Object(n.b)("h2",{id:"table_columns"},"table_columns"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"table_columns('tableName')")," returns the schema of a table"),Object(n.b)("h3",{id:"arguments-1"},"Arguments"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"tableName")," is the name of an existing table as a string")),Object(n.b)("h3",{id:"description-1"},"Description"),Object(n.b)("p",null,"Returns the schema of the target table."),Object(n.b)("h3",{id:"return-value-1"},"Return value"),Object(n.b)("p",null,"Returns a ",Object(n.b)("inlineCode",{parentName:"p"},"table")," with two columns:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"columnName")," - name of the available columns in the table"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"columnType")," - type of the column")),Object(n.b)("h3",{id:"examples-1"},"Examples:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Get all columns in the table")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-questdb-sql"}),"table_columns('myTable')\n")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"columnName"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"columnType"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"TS"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"TIMESTAMP")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"STRING")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Age"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"INT")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Sex"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"SYMBOL")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Grade"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"DOUBLE")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"..."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"...")))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Get all columns in the database that match the name 'sales'")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-questdb-sql"}),"SELECT columnName FROM table_columns('myTable') WHERE columnName ~= 'sales';\n")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"columnName"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"sales-north")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"sales-west")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"sales-east")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"sales-south")))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Get the count of column types")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-questdb-sql"}),"SELECT columnType, count() FROM table_columns('wthr');\n")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"columnType"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"count"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"INT"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"4")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"DOUBLE"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"8")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"SYMBOL"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2")))))}j.isMDXComponent=!0}}]);