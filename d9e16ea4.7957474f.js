(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),c=(n(0),n(218)),i={title:"Root directory structure",sidebar_label:"Root directory",description:"Root directory structure reference documentation."},o={unversionedId:"reference/configuration/root-directory-structure",id:"reference/configuration/root-directory-structure",isDocsHomePage:!1,title:"Root directory structure",description:"Root directory structure reference documentation.",source:"@site/docs/reference/configuration/root-directory-structure.md",slug:"/reference/configuration/root-directory-structure",permalink:"/docs/reference/configuration/root-directory-structure",version:"current",sidebar_label:"Root directory",sidebar:"docs",previous:{title:"REST API",permalink:"/docs/api/rest"},next:{title:"Configuration properties",permalink:"/docs/reference/configuration/server"}},l=[{value:"<code>conf</code> directory",id:"conf-directory",children:[]},{value:"<code>db</code> directory",id:"db-directory",children:[]},{value:"<code>log</code> directory",id:"log-directory",children:[]},{value:"<code>public</code> directory",id:"public-directory",children:[]}],d={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"QuestDB creates the following file structure in it's ",Object(c.b)("inlineCode",{parentName:"p"},"root_directory"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-filestructure"}),"questdb\n\u251c\u2500\u2500 conf\n\u251c\u2500\u2500 db\n\u251c\u2500\u2500 log\n\u2514\u2500\u2500 public\n")),Object(c.b)("h2",{id:"conf-directory"},Object(c.b)("inlineCode",{parentName:"h2"},"conf")," directory"),Object(c.b)("p",null,"Contains configuration files for QuestDB:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-filestructure"}),"\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 date.formats\n\u2502\xa0\xa0 \u251c\u2500\u2500 mime.types\n\u2502\xa0\xa0 \u2514\u2500\u2500 server.conf\n")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"file"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"date.formats")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A list of date formats in plain text.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"mime.types")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mapping file used by the HTTP server to map file extension to response type when an user downloads a file.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"server.conf")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Server configuration file. Find out more in the ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/reference/configuration/server/"}),"server configuration")," section.")))),Object(c.b)("h2",{id:"db-directory"},Object(c.b)("inlineCode",{parentName:"h2"},"db")," directory"),Object(c.b)("p",null,"This directory contains all the files related to database tables. It is\norganised as follows:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Each table has its own ",Object(c.b)("inlineCode",{parentName:"li"},"table_directory")," under ",Object(c.b)("inlineCode",{parentName:"li"},"root_directory/db/table_name")),Object(c.b)("li",{parentName:"ul"},"Within a ",Object(c.b)("inlineCode",{parentName:"li"},"table_directory"),", each ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/concept/partitions/"}),"partition")," has\nits own ",Object(c.b)("inlineCode",{parentName:"li"},"partition_directory"),"."),Object(c.b)("li",{parentName:"ul"},"Within each ",Object(c.b)("inlineCode",{parentName:"li"},"partition directory"),", each column has its own ",Object(c.b)("inlineCode",{parentName:"li"},"column_file"),", for\nexample ",Object(c.b)("inlineCode",{parentName:"li"},"mycolumn.d")),Object(c.b)("li",{parentName:"ul"},"If a given column has an ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/concept/indexes/"}),"index"),", then there will also\nbe an ",Object(c.b)("inlineCode",{parentName:"li"},"index_file"),", for example ",Object(c.b)("inlineCode",{parentName:"li"},"mycolumn.k"))),Object(c.b)("p",null,"The table also stores metadata in ",Object(c.b)("inlineCode",{parentName:"p"},"_meta")," files:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-filestructure"}),"\u251c\u2500\u2500 db\n\u2502\xa0\xa0 \u251c\u2500\u2500 Table\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Partition 1\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 _archive\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 column1.d\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 column2.d\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 column2.k\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ...\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Partition 2\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 _archive\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 column1.d\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 column2.d\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 column2.k\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ...\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 _meta\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 _txn\n\u2502\xa0\xa0 \u2514\u2500\u2500  table_1.lock\n")),Object(c.b)("p",null,"If the table is not partitioned, data is stored in a directory called ",Object(c.b)("inlineCode",{parentName:"p"},"default"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-filestructure"}),"\u251c\u2500\u2500 db\n\u2502\xa0\xa0 \u251c\u2500\u2500 Table\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 default\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 _archive\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 column1.d\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 column2.d\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 column2.k\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ...\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 _meta\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 _txn\n\u2502\xa0\xa0 \u2514\u2500\u2500  table_1.lock\n")),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"As tempting as it may be to delete partitions by manually removing the\ndirectories from the file system, we really discourage this. The partitions are\norganised with metadata and deleting them directly could corrupt the table. We\nrecommend you use\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sql/alter-table-drop-partition/"}),"ALTER TABLE DROP PARTITION"),"\nfor this effect."))),Object(c.b)("h2",{id:"log-directory"},Object(c.b)("inlineCode",{parentName:"h2"},"log")," directory"),Object(c.b)("p",null,"Contains the log files for QuestDB:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-filestructure"}),"\u251c\u2500\u2500 log\n\u2502\xa0\xa0 \u251c\u2500\u2500 stdout-2020-04-15T11-59-59.txt\n\u2502\xa0\xa0 \u2514\u2500\u2500 stdout-2020-04-12T13-31-22.txt\n")),Object(c.b)("p",null,"Log files look like this:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"2020-04-15T16:42:32.879970Z I i.q.c.TableReader new transaction [txn=2, transientRowCount=1, fixedRowCount=1, maxTimestamp=1585755801000000, attempts=0]\n2020-04-15T16:42:32.880051Z I i.q.g.FunctionParser call to_timestamp('2020-05-01:15:43:21','yyyy-MM-dd:HH:mm:ss') -> to_timestamp(Ss)\n2020-04-15T16:42:32.880657Z I i.q.c.p.WriterPool >> [table=`table_1`, thread=12]\n2020-04-15T16:42:32.881330Z I i.q.c.AppendMemory truncated and closed [fd=32]\n2020-04-15T16:42:32.881448Z I i.q.c.AppendMemory open /usr/local/var/questdb/db/table_1/2020-05/timestamp.d [fd=32, pageSize=16777216]\n2020-04-15T16:42:32.881708Z I i.q.c.AppendMemory truncated and closed [fd=33]\n2020-04-15T16:42:32.881830Z I i.q.c.AppendMemory open /usr/local/var/questdb/db/table_1/2020-05/temperature.d [fd=33, pageSize=16777216]\n2020-04-15T16:42:32.882092Z I i.q.c.AppendMemory truncated and closed [fd=34]\n2020-04-15T16:42:32.882210Z I i.q.c.AppendMemory open /usr/local/var/questdb/db/table_1/2020-05/humidity.d [fd=34, pageSize=16777216]\n2020-04-15T16:42:32.882248Z I i.q.c.TableWriter switched partition to '/usr/local/var/questdb/db/table_1/2020-05'\n2020-04-15T16:42:32.882571Z I i.q.c.p.WriterPool << [table=`table_1`, thread=12]\n2020-04-15T16:44:33.245144Z I i.q.c.AppendMemory truncated and closed [fd=32]\n2020-04-15T16:44:33.245418Z I i.q.c.AppendMemory truncated and closed [fd=33]\n2020-04-15T16:44:33.245712Z I i.q.c.AppendMemory truncated and closed [fd=34]\n2020-04-15T16:44:33.246096Z I i.q.c.ReadWriteMemory truncated and closed [fd=30]\n2020-04-15T16:44:33.246217Z I i.q.c.ReadOnlyMemory closed [fd=31]\n2020-04-15T16:44:33.246461Z I i.q.c.TableWriter closed 'table_1'\n2020-04-15T16:44:33.246492Z I i.q.c.p.WriterPool closed [table=`table_1`, reason=IDLE, by=12]\n2020-04-15T16:44:33.247184Z I i.q.c.OnePageMemory closed [fd=28]\n2020-04-15T16:44:33.247239Z I i.q.c.ReadOnlyMemory closed [fd=27]\n2020-04-15T16:44:33.247267Z I i.q.c.TableReader closed 'table_1'\n2020-04-15T16:44:33.247287Z I i.q.c.p.ReaderPool closed 'table_1' [at=0:0, reason=IDLE]\n2020-04-15T16:44:39.763406Z I http-server disconnected [ip=127.0.0.1, fd=24]\n2020-04-15T16:44:39.763729Z I i.q.c.h.HttpServer pushed\n")),Object(c.b)("h2",{id:"public-directory"},Object(c.b)("inlineCode",{parentName:"h2"},"public")," directory"),Object(c.b)("p",null,"Contains the web files for the Web Console:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-filestructure"}),"\u2514\u2500\u2500 public\n    \u251c\u2500\u2500 assets\n    \u2502\xa0\xa0 \u251c\u2500\u2500 console-configuration.json\n    \u2502\xa0\xa0 \u2514\u2500\u2500 favicon.png\n    \u251c\u2500\u2500 index.html\n    \u251c\u2500\u2500 qdb.js\n    \u251c\u2500\u2500 qdb.css\n    \u2514\u2500\u2500 ...\n")))}b.isMDXComponent=!0}}]);