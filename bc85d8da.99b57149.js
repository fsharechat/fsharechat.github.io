(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{108:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return b}));var o=t(2),c=t(6),a=(t(0),t(130)),r={layout:"post",title:"Windows\u5355\u673a\u90e8\u7f72\u5b9e\u8df5",description:"docker IM cloud native",category:"IM"},i={unversionedId:"guide/windows",id:"guide/windows",isDocsHomePage:!1,title:"Windows\u5355\u673a\u90e8\u7f72\u5b9e\u8df5",description:"docker IM cloud native",source:"@site/docs/guide/windows.md",slug:"/guide/windows",permalink:"/docs/guide/windows",version:"current",sidebar:"docs",previous:{title:"Ubuntu\u4e0a\u5355\u673a\u90e8\u7f72\u5b9e\u8df5",permalink:"/docs/guide/ubuntu"},next:{title:"\u98de\u4eabIM\u96c6\u7fa4\u67b6\u6784\u4e0e\u5b89\u88c5\u8bf4\u660e",permalink:"/docs/guide/cluster"}},p=[{value:"\u57fa\u7840\u73af\u5883",id:"\u57fa\u7840\u73af\u5883",children:[]},{value:"\u5b89\u88c5\u5305",id:"\u5b89\u88c5\u5305",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"push-connector\u914d\u7f6e",id:"push-connector\u914d\u7f6e",children:[]},{value:"push-group\u914d\u7f6e",id:"push-group\u914d\u7f6e",children:[]}]},{value:"\u542f\u52a8\u670d\u52a1",id:"\u542f\u52a8\u670d\u52a1",children:[]}],s={rightToc:p};function b(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u4e3b\u8981\u8bf4\u660e\u5728windows\u90e8\u7f72\u6b65\u9aa4"),Object(a.b)("h2",{id:"\u57fa\u7840\u73af\u5883"},"\u57fa\u7840\u73af\u5883"),Object(a.b)("p",null,"\u57fa\u7840\u73af\u5883\u540ccentos.\u4e3b\u8981\u5305\u62ec",Object(a.b)("inlineCode",{parentName:"p"},"zookeeper"),",",Object(a.b)("inlineCode",{parentName:"p"},"mysql5.7"),",",Object(a.b)("inlineCode",{parentName:"p"},"minio"),",",Object(a.b)("inlineCode",{parentName:"p"},"JDK1.8")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"NOTE:")," \u5728\u8fd0\u884c\u4e4b\u524d\u8bf7\u786e\u4fdd",Object(a.b)("inlineCode",{parentName:"p"},"zookeeper"),",",Object(a.b)("inlineCode",{parentName:"p"},"mysql"),"\u5df2\u7ecf\u90e8\u7f72\u6210\u529f. ",Object(a.b)("inlineCode",{parentName:"p"},"minio"),"\u662f\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\u5668,\u5728\u53d1\u9001\u56fe\u7247,\u6587\u4ef6\u7c7b\u578b\u7c7b\u578b\u6d88\u606f\u65f6\u9700\u8981\u4f7f\u7528.\u5728\u8fd0\u884c\u4e4b\u524d\u8bf7\u68c0\u67e5\u662f\u5426\u5b89\u88c5",Object(a.b)("inlineCode",{parentName:"p"},"Jdk")),Object(a.b)("h2",{id:"\u5b89\u88c5\u5305"},"\u5b89\u88c5\u5305"),Object(a.b)("p",null,"\u4e0b\u8f7d\u5982\u4e0b\u5b89\u88c5\u5305,\u89e3\u538b\u6587\u4ef6\u5230\u4efb\u610f\u76ee\u5f55\u5373\u53ef"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://media.comsince.cn/minio-bucket-file-name/fshare-chat-windows-pro.tar.gz"}),"\u98de\u4eabwindows\u5b89\u88c5\u5305"))),Object(a.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(a.b)("p",null,"\u89e3\u538b\u6210\u529f\u540e,\u4f1a\u770b\u5230",Object(a.b)("inlineCode",{parentName:"p"},"boot"),"\u5982\u4e0b\u76ee\u5f55"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"boot\n\u251c\u2500\u2500 download\n\u2502\xa0\xa0 \u2514\u2500\u2500 chat-debug.apk\n\u251c\u2500\u2500 push-connector\n\u2502\xa0\xa0 \u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 application.properties\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 chat.comsince.cn.jks\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 chat.comsince.cn.trustkeystore.jks\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 logback.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 jvm.ini\n\u2502\xa0\xa0 \u251c\u2500\u2500 lib\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 spring-boot-dubbo-push-connector-1.2.3.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 logs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 push-connector-error.log\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 push-connector-error.log.20201013\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 push-connector.log\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 push-connector.log.20201013\n\u2502\xa0\xa0 \u251c\u2500\u2500 push-connector\n\u2502\xa0\xa0 \u2514\u2500\u2500 push-connector.bat\n\u2514\u2500\u2500 push-group\n    \u251c\u2500\u2500 config\n    \u2502\xa0\xa0 \u2514\u2500\u2500 application.properties\n    \u251c\u2500\u2500 jvm.ini\n    \u251c\u2500\u2500 lib\n    \u2502\xa0\xa0 \u2514\u2500\u2500 spring-boot-web-push-group-1.2.3.jar\n    \u251c\u2500\u2500 logs\n    \u2502\xa0\xa0 \u251c\u2500\u2500 push-group-error.log\n    \u2502\xa0\xa0 \u251c\u2500\u2500 push-group-error.log.20201013\n    \u2502\xa0\xa0 \u251c\u2500\u2500 push-group.log\n    \u2502\xa0\xa0 \u2514\u2500\u2500 push-group.log.20201013\n    \u251c\u2500\u2500 push-group\n    \u2514\u2500\u2500 push-group.bat\n\n")),Object(a.b)("h3",{id:"push-connector\u914d\u7f6e"},"push-connector\u914d\u7f6e"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u4fee\u6539",Object(a.b)("inlineCode",{parentName:"p"},"push-connector\\config\\application.properties"))),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"# wss ssl \u914d\u7f6e,\u8fd9\u91cc\u914d\u7f6ejks\u9700\u8981\u6307\u5b9a\u5176\u7edd\u5bf9\u8def\u5f84\u5730\u5740.\u6d4b\u8bd5\u6f14\u793a\u53ef\u4ee5\u5148\u4e0d\u8d77\u52a8ssl.\u8fd9\u91cc\u505a\u914d\u7f6e\u4e3a\u7a7a\u5373\u53ef\npush.ssl.keystore=\npush.ssl.truststore=\npush.ssl.password=\n## Dubbo Registry\ndubbo.registry.address=zookeeper://{\u4fee\u6539\u8fd9\u91cc\u4e3a\u4f60\u7684zookeeper\u5730\u5740}:2181\n\n## kafka broker \n#push.kafka.broker=kafka:9092\n\n## \u591a\u4eba\u97f3\u89c6\u9891\u5a92\u4f53\u670d\u52a1,\u9ed8\u8ba4\u4f7f\u7528\u516c\u7f51\u670d\u52a1,\u53ef\u5148\u6682\u65f6\u4e0d\u7528\u4fee\u6539\nkurento.clientUrl=ws://media.comsince.cn:8888/kurento\n\n## minio\u5bf9\u8c61\u5b58\u50a8,\u5982\u679c\u6682\u65f6\u4e0d\u9700\u8981\u652f\u6301\u6587\u4ef6,\u56fe\u7247,\u89c6\u9891\u7c7b\u6d88\u606f\u53d1\u9001,\u53ef\u4ee5\u6682\u65f6\u4e0d\u7528\u914d\u7f6e\nminio.url=https://media.comsince.cn\n## minio access_key\nminio.access_key=\n## minio secret_key\nminio.secret_key=\n")),Object(a.b)("h3",{id:"push-group\u914d\u7f6e"},"push-group\u914d\u7f6e"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u4fee\u6539",Object(a.b)("inlineCode",{parentName:"p"},"push-group\\config\\application.properties"))),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"\n## Dubbo \u6ce8\u518c\u4e2d\u5fc3\ndubbo.registry.address=zookeeper://{\u4fee\u6539\u8fd9\u91cc\u4e3a\u4f60\u7684zookeeper\u5730\u5740}:2181\n\n## \u7ed1\u5b9adubbo \u672c\u673ahost\u5730\u5740,\u9632\u6b62dubbo\u65e0\u6cd5\u7ed1\u5b9a\u670d\u52a1\u5730\u5740,\u5bfc\u81f4\u4e0d\u540c\u673a\u5668\u65e0\u6cd5\u8bbf\u95ee\u670d\u52a1,push-group\u4e0epush-connector\u90e8\u7f72\u5728\u4e0d\u540c\u673a\u5668\u65f6\u6700\u597d\u8bbe\u7f6e\n#dubbo.protocol.host=172.16.47.60\n\n#\u4e91\u77ed\u4fe1\u5382\u5546,0: \u4ee3\u8868\u6682\u65f6\u5173\u95ed\u77ed\u4fe1\u901a\u9053 1:\u4ee3\u8868\u963f\u91cc\u4e91\u77ed\u4fe1 2: \u4ee3\u8868\u817e\u8baf\u4e91\u77ed\u4fe1\nsms.cp=0\n# \u5e94\u7528id\nsms.appid=LTAI4Ff1jtqrSr3rkHMKEnfs\n# \u5e94\u7528key\nsms.appkey=gG33mvmMAxGYol7Vd1AEG6InRK9VCD\n# \u6a21\u677fid\nsms.templateId=SMS_180355435\n# \u77ed\u4fe1\u7b7e\u540d\u7531\u4e8e\u7f16\u7801\u95ee\u9898,\u8bf7\u5230\u76f8\u5e94\u7684\u4ee3\u7801\u91cc\u9762\u8bbe\u7f6e\n\n# \u77ed\u4fe1\u8d85\u7ea7\u9a8c\u8bc1\u7801,\u6b63\u5f0f\u4e0a\u7ebf\u8bf7\u4fee\u6539,\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u8d85\u7ea7\u9a8c\u8bc1\u7801\u767b\u5f55\u4efb\u610f\u5e10\u53f7\nsms.superCode=66666\n\n# \u662f\u5426\u4f7f\u7528\u5185\u7f6e\u6570\u636e\u5e93 1: \u8868\u793a\u4f7f\u7528 0: \u4f7f\u7528mySql\nim.embed_db=0\n# jdbc url\nim.jdbc_url=jdbc:mysql://{\u4f60\u7684mysql\u670d\u52a1\u5730\u5740}:3306/fsharechat?useSSL=false&serverTimezone=GMT&allowPublicKeyRetrieval=true&useUnicode=true&characterEncoding=utf8\n# mysql\u6570\u636e\u5e93\u8bbf\u95ee\u7528\u6237\u540d\nim.user=root\n#mysql\u6570\u636e\u5e93\u8bbf\u95ee\u5bc6\u7801\nim.password=123456\n\n")),Object(a.b)("h2",{id:"\u542f\u52a8\u670d\u52a1"},"\u542f\u52a8\u670d\u52a1"),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"\u542f\u52a8\u670d\u52a1\u8bf7\u5230\u5404\u81ea\u670d\u52a1\u76ee\u5f55\u4e0b\u542f\u52a8bat\u811a\u672c"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u542f\u52a8",Object(a.b)("inlineCode",{parentName:"p"},"push-group"),"\u670d\u52a1,\u5230",Object(a.b)("inlineCode",{parentName:"p"},"data\\push-group"),"\u76ee\u5f55\u4e0b\u6267\u884c",Object(a.b)("inlineCode",{parentName:"p"},"push-group.bat"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u542f\u52a8",Object(a.b)("inlineCode",{parentName:"p"},"push-connector"),"\u670d\u52a1,\u5230",Object(a.b)("inlineCode",{parentName:"p"},"data\\push-connector"),"\u76ee\u5f55\u4e0b\u6267\u884c",Object(a.b)("inlineCode",{parentName:"p"},"push-connector.bat")))))}b.isMDXComponent=!0}}]);