(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{105:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a(2),s=a(6),r=(a(0),a(224)),i={title:"Homebrew",sidebar_label:"Homebrew",description:"Instructions explaining how install and use QuestDB with Homebrew on macOS."},b={unversionedId:"packages/homebrew",id:"packages/homebrew",isDocsHomePage:!1,title:"Homebrew",description:"Instructions explaining how install and use QuestDB with Homebrew on macOS.",source:"@site/docs/packages/homebrew.md",slug:"/packages/homebrew",permalink:"/docs/packages/homebrew",version:"current",sidebar_label:"Homebrew"},l=[{value:"Setup",id:"setup",children:[]},{value:"Root directory",id:"root-directory",children:[]},{value:"Using QuestDB",id:"using-questdb",children:[{value:"Start",id:"start",children:[]},{value:"Stop",id:"stop",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Status",id:"status",children:[]},{value:"Examples",id:"examples-1",children:[]}]}],c={rightToc:l};function o(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"QuestDB is distributed via Homebrew for macOS users."),Object(r.b)("h2",{id:"setup"},"Setup"),Object(r.b)("p",null,"Follow the steps below to install and uninstall QuestDB:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"brew install questdb\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"brew uninstall questdb\n")),Object(r.b)("h2",{id:"root-directory"},"Root directory"),Object(r.b)("p",null,"By default, QuestDB's\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/configuration/root-directory-structure/"}),"root directory")," will\nbe the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"/usr/local/var/questdb/\n")),Object(r.b)("h2",{id:"using-questdb"},"Using QuestDB"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"questdb [start|stop|status] [-d dir] [-f] [-t tag]\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Command"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#start"}),"start")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Starts the service. Default service name is ",Object(r.b)("inlineCode",{parentName:"td"},"QuestDB"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#stop"}),"stop")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stops the service")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#status"}),"status")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Shows service status. This command is useful for troubleshooting problems with the service. It prints ",Object(r.b)("inlineCode",{parentName:"td"},"RUNNING")," or ",Object(r.b)("inlineCode",{parentName:"td"},"INACTIVE")," if the service is start or stopped respectively")))),Object(r.b)("h3",{id:"start"},"Start"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"start")," - starts the QuestDB service."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"questdb start\n")),Object(r.b)("p",null,"QuestDB will start and run in the background and continue running even if you\nclose the session. You will need to actively ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#stop"}),"stop it"),"."),Object(r.b)("h4",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-d")," - specify QuestDB's ",Object(r.b)("inlineCode",{parentName:"li"},"root_directory"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-f")," - force reload the Web Console. The Web Console is cached otherwise and\nthe HTML page will not be reloaded automatically in case it has been changed."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-t")," - specify a service tag. You can use this option to run several services\nand administer them separately.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:'title="Example with -d and -t"',title:'"Example',with:!0,"-d":!0,and:!0,'-t"':!0}),"questdb start -d '/home/user/my_new_root_directory' -t 'mytag'\n")),Object(r.b)("h3",{id:"stop"},"Stop"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"stop")," - stops the default ",Object(r.b)("inlineCode",{parentName:"p"},"questdb")," service, or the service specified with the\n",Object(r.b)("inlineCode",{parentName:"p"},"-t")," option."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:'title="Stop the default service"',title:'"Stop',the:!0,default:!0,'service"':!0}),"questdb stop\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:'title="Stop a specific service"',title:'"Stop',a:!0,specific:!0,'service"':!0}),"questdb stop -t 'my-questdb-service'\n")),Object(r.b)("h3",{id:"status"},"Status"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"status")," shows service status. This command is useful for troubleshooting\nproblems with the service. It prints ",Object(r.b)("inlineCode",{parentName:"p"},"Running")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Not running")," if the service\nis start or stopped respectively. On ","*","nix operating systems, it also prints the\n",Object(r.b)("inlineCode",{parentName:"p"},"PID"),"."),Object(r.b)("h3",{id:"examples-1"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:'title="Default service"',title:'"Default','service"':!0}),"questdb status\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:'title="Specific service"',title:'"Specific','service"':!0}),"questdb status -t 'my-questdb-service'\n")))}o.isMDXComponent=!0}}]);