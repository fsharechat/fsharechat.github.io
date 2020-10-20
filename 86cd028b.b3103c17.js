(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return c}));var a=n(2),s=n(6),i=(n(0),n(224)),l={title:"How to use QuestDB with Homebrew",sidebar_label:"Homebrew",description:"Tutorial showing how to use QuestDB with Homebrew on macOS."},b={unversionedId:"guide/homebrew",id:"guide/homebrew",isDocsHomePage:!1,title:"How to use QuestDB with Homebrew",description:"Tutorial showing how to use QuestDB with Homebrew on macOS.",source:"@site/docs/guide/homebrew.md",slug:"/guide/homebrew",permalink:"/docs/guide/homebrew",version:"current",sidebar_label:"Homebrew"},r=[{value:"Installing Homebrew",id:"installing-homebrew",children:[]},{value:"Installing QuestDB",id:"installing-questdb",children:[]},{value:"Starting QuestDB",id:"starting-questdb",children:[]},{value:"Status",id:"status",children:[]},{value:"Using QuestDB",id:"using-questdb",children:[]},{value:"Stopping QuestDB",id:"stopping-questdb",children:[]},{value:"Uninstalling QuestDB",id:"uninstalling-questdb",children:[]}],o={rightToc:r};function c(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This guide shows how to use Homebrew to install and start QuestDB. This is a\nquick guide. For more reference, please refer to our\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/packages/homebrew/"}),"Homebrew package"),"."),Object(i.b)("h2",{id:"installing-homebrew"},"Installing Homebrew"),Object(i.b)("p",null,"If you already have Homebrew installed, you can skip this part."),Object(i.b)("p",null,"To install Homebrew, run the following."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:'title="Install Homebrew"',title:'"Install','Homebrew"':!0}),'/bin/bash -c \\\n"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"\n')),Object(i.b)("h2",{id:"installing-questdb"},"Installing QuestDB"),Object(i.b)("p",null,"The command below will install the ",Object(i.b)("inlineCode",{parentName:"p"},"questdb")," service."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"brew install questdb\n")),Object(i.b)("h2",{id:"starting-questdb"},"Starting QuestDB"),Object(i.b)("p",null,"Run the below to start the QuestDB service. The service will run in the\nbackground."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"questdb start\n")),Object(i.b)("p",null,"This service will create the default ",Object(i.b)("inlineCode",{parentName:"p"},"root directory")," in\n",Object(i.b)("inlineCode",{parentName:"p"},"/usr/local/var/questdb/"),". For a reference of startup options, please refer to\nour ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/packages/homebrew/"}),"Homebrew package"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"QuestDB will start and run in the background and continue running even if you\nclose the session. You will need to actively ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#stopping-questdb"}),"stop it"),"."))),Object(i.b)("h2",{id:"status"},"Status"),Object(i.b)("p",null,"You can use the following to get the status of the QuestDB service:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"questdb status\n")),Object(i.b)("h2",{id:"using-questdb"},"Using QuestDB"),Object(i.b)("p",null,"Here are some guides to get started using the QuestDB service. These will show\nyou how to import data and run queries:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"with ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/guide/rest/"}),"REST")),Object(i.b)("li",{parentName:"ul"},"with ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/guide/postgres-wire/"}),"Postgres wire"))),Object(i.b)("h2",{id:"stopping-questdb"},"Stopping QuestDB"),Object(i.b)("p",null,"To stop the QuestDB service, run the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"questdb stop\n")),Object(i.b)("h2",{id:"uninstalling-questdb"},"Uninstalling QuestDB"),Object(i.b)("p",null,"To uninstall the QuestDB service, run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"questdb uninstall\n")))}c.isMDXComponent=!0}}]);