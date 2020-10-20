(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{173:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return p})),o.d(n,"metadata",(function(){return i})),o.d(n,"rightToc",(function(){return s})),o.d(n,"default",(function(){return b}));var t=o(2),r=o(6),c=(o(0),o(224)),p={layout:"post",title:"Windows\u5355\u673a\u90e8\u7f72\u5b9e\u8df5",description:"docker IM cloud native",category:"IM"},i={unversionedId:"guide/windows",id:"guide/windows",isDocsHomePage:!1,title:"Windows\u5355\u673a\u90e8\u7f72\u5b9e\u8df5",description:"docker IM cloud native",source:"@site/docs/guide/windows.md",slug:"/guide/windows",permalink:"/docs/guide/windows",version:"current",sidebar:"docs",previous:{title:"Ubuntu\u4e0a\u5355\u673a\u90e8\u7f72\u5b9e\u8df5",permalink:"/docs/guide/ubuntu"}},s=[{value:"push-connector\u914d\u7f6e",id:"push-connector\u914d\u7f6e",children:[]},{value:"push-group\u914d\u7f6e",id:"push-group\u914d\u7f6e",children:[]}],a={rightToc:s};function b(e){var n=e.components,o=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},a,o,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4e3b\u8981\u8bf4\u660e\u5728windows\u90e8\u7f72\u6b65\u9aa4"),Object(c.b)("h1",{id:"\u57fa\u7840\u73af\u5883"},"\u57fa\u7840\u73af\u5883"),Object(c.b)("p",null,"\u57fa\u7840\u73af\u5883\u540ccentos.\u4e3b\u8981\u5305\u62ec",Object(c.b)("inlineCode",{parentName:"p"},"zookeeper"),",",Object(c.b)("inlineCode",{parentName:"p"},"mysql5.7"),",",Object(c.b)("inlineCode",{parentName:"p"},"minio"),",",Object(c.b)("inlineCode",{parentName:"p"},"JDK1.8")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"NOTE:")," \u5728\u8fd0\u884c\u4e4b\u524d\u8bf7\u786e\u4fdd",Object(c.b)("inlineCode",{parentName:"p"},"zookeeper"),",",Object(c.b)("inlineCode",{parentName:"p"},"mysql"),"\u5df2\u7ecf\u90e8\u7f72\u6210\u529f. ",Object(c.b)("inlineCode",{parentName:"p"},"minio"),"\u662f\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\u5668,\u5728\u53d1\u9001\u56fe\u7247,\u6587\u4ef6\u7c7b\u578b\u7c7b\u578b\u6d88\u606f\u65f6\u9700\u8981\u4f7f\u7528.\u5728\u8fd0\u884c\u4e4b\u524d\u8bf7\u68c0\u67e5\u662f\u5426\u5b89\u88c5",Object(c.b)("inlineCode",{parentName:"p"},"Jdk")),Object(c.b)("h1",{id:"\u5b89\u88c5\u5305"},"\u5b89\u88c5\u5305"),Object(c.b)("p",null,"\u4e0b\u8f7d\u5982\u4e0b\u5b89\u88c5\u5305,\u89e3\u538b\u6587\u4ef6\u5230\u4efb\u610f\u76ee\u5f55\u5373\u53ef"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(t.a)({parentName:"li"},{href:"https://media.comsince.cn/minio-bucket-file-name/fshare-chat-windows-pro.tar.gz"}),"\u98de\u4eabwindows\u5b89\u88c5\u5305"))),Object(c.b)("h1",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(c.b)("p",null,"\u89e3\u538b\u6210\u529f\u540e,\u4f1a\u770b\u5230",Object(c.b)("inlineCode",{parentName:"p"},"boot"),"\u5982\u4e0b\u76ee\u5f55"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-shell"}),"boot\n\u251c\u2500\u2500 download\n\u2502\xa0\xa0 \u2514\u2500\u2500 chat-debug.apk\n\u251c\u2500\u2500 push-connector\n\u2502\xa0\xa0 \u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 application.properties\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 chat.comsince.cn.jks\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 chat.comsince.cn.trustkeystore.jks\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 logback.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 jvm.ini\n\u2502\xa0\xa0 \u251c\u2500\u2500 lib\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 spring-boot-dubbo-push-connector-1.2.3.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 logs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 push-connector-error.log\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 push-connector-error.log.20201013\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 push-connector.log\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 push-connector.log.20201013\n\u2502\xa0\xa0 \u251c\u2500\u2500 push-connector\n\u2502\xa0\xa0 \u2514\u2500\u2500 push-connector.bat\n\u2514\u2500\u2500 push-group\n    \u251c\u2500\u2500 config\n    \u2502\xa0\xa0 \u2514\u2500\u2500 application.properties\n    \u251c\u2500\u2500 jvm.ini\n    \u251c\u2500\u2500 lib\n    \u2502\xa0\xa0 \u2514\u2500\u2500 spring-boot-web-push-group-1.2.3.jar\n    \u251c\u2500\u2500 logs\n    \u2502\xa0\xa0 \u251c\u2500\u2500 push-group-error.log\n    \u2502\xa0\xa0 \u251c\u2500\u2500 push-group-error.log.20201013\n    \u2502\xa0\xa0 \u251c\u2500\u2500 push-group.log\n    \u2502\xa0\xa0 \u2514\u2500\u2500 push-group.log.20201013\n    \u251c\u2500\u2500 push-group\n    \u2514\u2500\u2500 push-group.bat\n\n")),Object(c.b)("h2",{id:"push-connector\u914d\u7f6e"},"push-connector\u914d\u7f6e"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4fee\u6539",Object(c.b)("inlineCode",{parentName:"p"},"push-connector\\config\\application.properties"))),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"# wss ssl \u914d\u7f6e,\u8fd9\u91cc\u914d\u7f6ejks\u9700\u8981\u6307\u5b9a\u5176\u7edd\u5bf9\u8def\u5f84\u5730\u5740.\u6d4b\u8bd5\u6f14\u793a\u53ef\u4ee5\u5148\u4e0d\u8d77\u52a8ssl.\u8fd9\u91cc\u505a\u914d\u7f6e\u4e3a\u7a7a\u5373\u53ef\npush.ssl.keystore=\npush.ssl.truststore=\npush.ssl.password=\n## Dubbo Registry\ndubbo.registry.address=zookeeper://{\u4fee\u6539\u8fd9\u91cc\u4e3a\u4f60\u7684zookeeper\u5730\u5740}:2181\n\n## kafka broker \n#push.kafka.broker=kafka:9092\n\n## \u591a\u4eba\u97f3\u89c6\u9891\u5a92\u4f53\u670d\u52a1,\u9ed8\u8ba4\u4f7f\u7528\u516c\u7f51\u670d\u52a1,\u53ef\u5148\u6682\u65f6\u4e0d\u7528\u4fee\u6539\nkurento.clientUrl=ws://media.comsince.cn:8888/kurento\n\n## minio\u5bf9\u8c61\u5b58\u50a8,\u5982\u679c\u6682\u65f6\u4e0d\u9700\u8981\u652f\u6301\u6587\u4ef6,\u56fe\u7247,\u89c6\u9891\u7c7b\u6d88\u606f\u53d1\u9001,\u53ef\u4ee5\u6682\u65f6\u4e0d\u7528\u914d\u7f6e\nminio.url=https://media.comsince.cn\n## minio access_key\nminio.access_key=\n## minio secret_key\nminio.secret_key=\n")),Object(c.b)("h2",{id:"push-group\u914d\u7f6e"},"push-group\u914d\u7f6e"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4fee\u6539",Object(c.b)("inlineCode",{parentName:"p"},"push-group\\config\\application.properties"))),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"\n## Dubbo \u6ce8\u518c\u4e2d\u5fc3\ndubbo.registry.address=zookeeper://{\u4fee\u6539\u8fd9\u91cc\u4e3a\u4f60\u7684zookeeper\u5730\u5740}:2181\n\n## \u7ed1\u5b9adubbo \u672c\u673ahost\u5730\u5740,\u9632\u6b62dubbo\u65e0\u6cd5\u7ed1\u5b9a\u670d\u52a1\u5730\u5740,\u5bfc\u81f4\u4e0d\u540c\u673a\u5668\u65e0\u6cd5\u8bbf\u95ee\u670d\u52a1,push-group\u4e0epush-connector\u90e8\u7f72\u5728\u4e0d\u540c\u673a\u5668\u65f6\u6700\u597d\u8bbe\u7f6e\n#dubbo.protocol.host=172.16.47.60\n\n#\u4e91\u77ed\u4fe1\u5382\u5546,0: \u4ee3\u8868\u6682\u65f6\u5173\u95ed\u77ed\u4fe1\u901a\u9053 1:\u4ee3\u8868\u963f\u91cc\u4e91\u77ed\u4fe1 2: \u4ee3\u8868\u817e\u8baf\u4e91\u77ed\u4fe1\nsms.cp=0\n# \u5e94\u7528id\nsms.appid=LTAI4Ff1jtqrSr3rkHMKEnfs\n# \u5e94\u7528key\nsms.appkey=gG33mvmMAxGYol7Vd1AEG6InRK9VCD\n# \u6a21\u677fid\nsms.templateId=SMS_180355435\n# \u77ed\u4fe1\u7b7e\u540d\u7531\u4e8e\u7f16\u7801\u95ee\u9898,\u8bf7\u5230\u76f8\u5e94\u7684\u4ee3\u7801\u91cc\u9762\u8bbe\u7f6e\n\n# \u77ed\u4fe1\u8d85\u7ea7\u9a8c\u8bc1\u7801,\u6b63\u5f0f\u4e0a\u7ebf\u8bf7\u4fee\u6539,\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u8d85\u7ea7\u9a8c\u8bc1\u7801\u767b\u5f55\u4efb\u610f\u5e10\u53f7\nsms.superCode=66666\n\n# \u662f\u5426\u4f7f\u7528\u5185\u7f6e\u6570\u636e\u5e93 1: \u8868\u793a\u4f7f\u7528 0: \u4f7f\u7528mySql\nim.embed_db=0\n# jdbc url\nim.jdbc_url=jdbc:mysql://{\u4f60\u7684mysql\u670d\u52a1\u5730\u5740}:3306/fsharechat?useSSL=false&serverTimezone=GMT&allowPublicKeyRetrieval=true&useUnicode=true&characterEncoding=utf8\n# mysql\u6570\u636e\u5e93\u8bbf\u95ee\u7528\u6237\u540d\nim.user=root\n#mysql\u6570\u636e\u5e93\u8bbf\u95ee\u5bc6\u7801\nim.password=123456\n\n")),Object(c.b)("h1",{id:"\u542f\u52a8\u670d\u52a1"},"\u542f\u52a8\u670d\u52a1"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"NOTE:")," \u542f\u52a8\u670d\u52a1\u8bf7\u5230\u5404\u81ea\u670d\u52a1\u76ee\u5f55\u4e0b\u542f\u52a8bat\u811a\u672c"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u542f\u52a8",Object(c.b)("inlineCode",{parentName:"p"},"push-group"),"\u670d\u52a1,\u5230",Object(c.b)("inlineCode",{parentName:"p"},"data\\push-group"),"\u76ee\u5f55\u4e0b\u6267\u884c",Object(c.b)("inlineCode",{parentName:"p"},"push-group.bat"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u542f\u52a8",Object(c.b)("inlineCode",{parentName:"p"},"push-connector"),"\u670d\u52a1,\u5230",Object(c.b)("inlineCode",{parentName:"p"},"data\\push-connector"),"\u76ee\u5f55\u4e0b\u6267\u884c",Object(c.b)("inlineCode",{parentName:"p"},"push-connector.bat")))))}b.isMDXComponent=!0}}]);