(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{98:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return r})),t.d(n,"default",(function(){return s}));var c=t(2),a=t(6),i=(t(0),t(127)),b={layout:"post",title:"Centos\u4e0a\u5355\u673a\u90e8\u7f72\u5b9e\u8df5",description:"docker IM cloud native",category:"IM"},o={unversionedId:"guide/centos",id:"guide/centos",isDocsHomePage:!1,title:"Centos\u4e0a\u5355\u673a\u90e8\u7f72\u5b9e\u8df5",description:"docker IM cloud native",source:"@site/docs/guide/centos.md",slug:"/guide/centos",permalink:"/docs/guide/centos",version:"current",sidebar:"docs",previous:{title:"coturn\u670d\u52a1\u5b89\u88c5",permalink:"/docs/prepare/coturn"},next:{title:"Ubuntu\u4e0a\u5355\u673a\u90e8\u7f72\u5b9e\u8df5",permalink:"/docs/guide/ubuntu"}},r=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[]},{value:"\u90e8\u7f72\u8bf4\u660e",id:"\u90e8\u7f72\u8bf4\u660e",children:[]},{value:"\u524d\u7f6e\u5b89\u88c5\u8bf4\u660e",id:"\u524d\u7f6e\u5b89\u88c5\u8bf4\u660e",children:[{value:"centos \u73af\u5883\u51c6\u5907",id:"centos-\u73af\u5883\u51c6\u5907",children:[]},{value:"minio\u914d\u7f6e",id:"minio\u914d\u7f6e",children:[]}]},{value:"\u4e0b\u8f7d\u5b8c\u6574\u5b89\u88c5\u5305",id:"\u4e0b\u8f7d\u5b8c\u6574\u5b89\u88c5\u5305",children:[]},{value:"\u4e0b\u8f7d\u90e8\u7f72\u670d\u52a1",id:"\u4e0b\u8f7d\u90e8\u7f72\u670d\u52a1",children:[{value:"push-connector\u670d\u52a1",id:"push-connector\u670d\u52a1",children:[]},{value:"push-group\u670d\u52a1",id:"push-group\u670d\u52a1",children:[]}]},{value:"\u53c2\u6570\u914d\u7f6e",id:"\u53c2\u6570\u914d\u7f6e",children:[{value:"push-connector",id:"push-connector",children:[]},{value:"push-group",id:"push-group",children:[]},{value:"jvm.ini \u53c2\u6570\u914d\u7f6e",id:"jvmini-\u53c2\u6570\u914d\u7f6e",children:[]}]},{value:"\u542f\u52a8\u670d\u52a1",id:"\u542f\u52a8\u670d\u52a1",children:[]},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",children:[{value:"vue \u5ba2\u6237\u7aef\u914d\u7f6e",id:"vue-\u5ba2\u6237\u7aef\u914d\u7f6e",children:[]},{value:"android \u5ba2\u6237\u7aef",id:"android-\u5ba2\u6237\u7aef",children:[]}]}],l={rightToc:r};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(c.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),Object(i.b)("p",null,"\u5728\u90e8\u7f72\u4e4b\u524d,\u6709\u5fc5\u8981\u5bf9\u90e8\u7f72\u76ee\u5f55",Object(i.b)("inlineCode",{parentName:"p"},"boot"),"\u505a\u4e00\u4e9b\u8bf4\u660e"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-shell"}),"\u251c\u2500\u2500 download #android\u5ba2\u6237\u7aef Apk\n\u2502\xa0\xa0 \u2514\u2500\u2500 chat-debug.apk\n\u251c\u2500\u2500 push-connector # \u4fe1\u4ee4\u6d88\u606f\u670d\u52a1\u5668\u76ee\u5f55\uff0c\u652f\u6301TCP,WSS\u94fe\u63a5\n\u2502\xa0\xa0 \u251c\u2500\u2500 jvm.ini #jvm\u53c2\u6570\u914d\u7f6e\n\u2502\xa0\xa0 \u251c\u2500\u2500 lib\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 spring-boot-dubbo-push-connector-1.2.0-SNAPSHOT.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 logs # \u65e5\u5fd7\n\u2502\xa0\xa0 \u2514\u2500\u2500 push-connector # \u542f\u52a8\u811a\u672c\n\u2514\u2500\u2500 push-group # \u4e1a\u52a1\u76f8\u5173\u903b\u8f91\u670d\u52a1\uff0c\u5305\u62echttp\u767b\u5f55\u63a5\u53e3\n    \u251c\u2500\u2500 jvm.ini #jvm\u53c2\u6570\u914d\u7f6e\n    \u251c\u2500\u2500 lib\n    \u2502\xa0\xa0 \u2514\u2500\u2500 spring-boot-web-push-group-1.2.0-SNAPSHOT.jar\n    \u251c\u2500\u2500 logs # \u65e5\u5fd7\n    \u2514\u2500\u2500 push-group # \u542f\u52a8\u811a\u672c\n")),Object(i.b)("p",null,"\u53e6\u5916\u7531\u4e8e",Object(i.b)("inlineCode",{parentName:"p"},"Java"),"\u9879\u76ee\u9700\u8981jdk\u652f\u6301,\u4e3a\u4e86\u907f\u514d\u4e0e\u7cfb\u7edf\u5176\u4ed6jdk\u73af\u5883\u53d8\u91cf\u51b2\u7a81,\u5728shell\u811a\u672c\u542f\u52a8\u7684\u65f6\u5019,\u6307\u5b9a\u4e86",Object(i.b)("inlineCode",{parentName:"p"},"jdk"),"\u7684\u76ee\u5f55.\u53e6\u5916",Object(i.b)("inlineCode",{parentName:"p"},"Dubbo"),"\u9700\u8981\u6ce8\u518c\u4e2d\u5fc3\u652f\u6301,\u6240\u4ee5\u9700\u8981\u5b89\u88c5",Object(i.b)("inlineCode",{parentName:"p"},"zookeeper"),".\u5f53\u7136\u5982\u679c\u4f60\u4eec\u516c\u53f8\u6709\u73b0\u6210\u7684\u6ce8\u518c\u4e2d\u5fc3,\u53ef\u4ee5\u76f4\u63a5\u914d\u7f6e\u4e0d\u9700\u8981\u624b\u52a8\u5b89\u88c5\u4e00\u5957.\u56e0\u6b64\u6211\u4eec\u63a8\u8350\u5728",Object(i.b)("inlineCode",{parentName:"p"},"Centos"),",",Object(i.b)("inlineCode",{parentName:"p"},"/data"),"\u65bd\u884c\u5982\u4e0b\u7684\u76ee\u5f55\u914d\u7f6e"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-shell"}),"\u251c\u2500\u2500 boot //\u8fd9\u91cc\u6587\u4ef6\u5185\u5bb9\u5c31\u662f\u672c\u9879\u76ee\u7684\u5177\u4f53\u5185\u5bb9\n\u251c\u2500\u2500 jdk\n\u2514\u2500\u2500 zookeeper-3.4.6\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE:")," \u7531\u4e8e",Object(i.b)("inlineCode",{parentName:"p"},"jdk"),"\u548c",Object(i.b)("inlineCode",{parentName:"p"},"zookeeper"),"\u6587\u4ef6\u8fc7\u5927,\u5e76\u6ca1\u6709\u628a\u5b83\u4eec\u5305\u542b\u5728\u9879\u76ee\u4e2d,\u672c\u9879\u76ee\u4ec5\u4ec5\u5305\u62ecboot\u76ee\u5f55\u4e2d\u5185\u5bb9,\u6709\u4eba\u53ef\u80fd\u8981\u95ee\u4e3a\u4ec0\u4e48\u8981\u5728/data \u76ee\u5f55\u4e0b\u653e\u7f6e\u5982\u4e0a\u7684\u5185\u5bb9,\u4e0b\u9762\u5c55\u793a\u4e00\u6bb5shell\u547d\u4ee4."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"push-connecotor\u811a\u672c")),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-shell"}),'# \u5982\u679c\u662fubuntu\u7cfb\u7edf,\u8bf7\u5c06\u8fd9\u91cc\u6539\u4e3a#!/bin/bash\n#!/bin/sh\n# \u8fd9\u91cc\u53ef\u4ee5\u4fee\u6539JAVA_HOME\u7684\u8def\u5f84\nJAVA_HOME=/data/jdk\n\nAPP_NAME=$(basename "$0")\nAPP_DIR=/data/boot/${APP_NAME}\nAPP_VERSION_FILE=${APP_DIR}/version\nAPP_LIB=${APP_DIR}/lib\nJVM_INI=${APP_DIR}/jvm.ini\nJVM_INI_LOCAL=${APP_DIR}/../jvm.ini\n\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE:")," \u5982\u679c\u662fubuntu\u7cfb\u7edf,\u8bf7\u5c06\u8fd9\u91cc\u6539\u4e3a#!/bin/bash"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE:")," \u4e0a\u9762\u6307\u5b9a\u4e86",Object(i.b)("inlineCode",{parentName:"p"},"JAVA_HOME")," \u76ee\u5f55\u5728",Object(i.b)("inlineCode",{parentName:"p"},"/data/jdk"),".\u5f53\u7136\u4f60\u53ef\u4ee5\u628ajdk\u9632\u6b62\u5728\u4efb\u610f\u4f4d\u7f6e,\u53ea\u8981\u6307\u5b9a\u5176\u5177\u4f53\u4f4d\u7f6e\u5c31\u53ef\u4ee5,\u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u4fee\u6539\u811a\u672c,\u53ea\u9700\u8981\u914d\u7f6ejava\u73af\u5883\u53d8\u91cf\u5373\u53ef.\u4e00\u5207\u90fd\u662f\u4e3a\u4e86\u914d\u7f6e\u57fa\u7840\u7684\u8fd0\u884c\u73af\u5883,\u5982\u679c\u4f60\u719f\u6089java\u73af\u5883,\u4f60\u53ef\u4ee5\u968f\u65f6\u914d\u7f6e"),Object(i.b)("h2",{id:"\u90e8\u7f72\u8bf4\u660e"},"\u90e8\u7f72\u8bf4\u660e"),Object(i.b)("h2",{id:"\u524d\u7f6e\u5b89\u88c5\u8bf4\u660e"},"\u524d\u7f6e\u5b89\u88c5\u8bf4\u660e"),Object(i.b)("h3",{id:"centos-\u73af\u5883\u51c6\u5907"},"centos \u73af\u5883\u51c6\u5907"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-shell"}),"yum install nc\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://www.comsince.cn/2020/04/13/universe-push-start-on-centos/#java%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE"}),"java \u73af\u5883\u914d\u7f6e")),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"li"},"Mysql"),"\u8bf7\u5148\u4e8b\u5148\u5b89\u88c5,",Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://www.comsince.cn/wiki/2019-07-01-mysql-00-install/"}),"\u3010\u6570\u636e\u5e93\u3011- MySQL\u57fa\u672c\u5b89\u88c5"))),Object(i.b)("h3",{id:"minio\u914d\u7f6e"},"minio\u914d\u7f6e"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://www.comsince.cn/2020/04/13/universe-push-start-on-centos/#%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8"}),"\u5b89\u88c5")),Object(i.b)("li",{parentName:"ul"},"\u521b\u5efa\u4e0d\u540c\u7684bucket\u7528\u4e8e\u5b58\u50a8\u4e0d\u540c\u7684\u6587\u4ef6\u7c7b\u578b")),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-java"}),'    public static String MINIO_BUCKET_GENERAL_NAME = "minio-bucket-general-name";\n    public static String MINIO_BUCKET_IMAGE_NAME = "minio-bucket-image-name";\n    public static String MINIO_BUCKET_VOICE_NAME = "minio-bucket-voice-name";\n    public static String MINIO_BUCKET_VIDEO_NAME = "minio-bucket-video-name";\n    public static String MINIO_BUCKET_FILE_NAME = "minio-bucket-file-name";\n    public static String MINIO_BUCKET_PORTRAIT_NAME = "minio-bucket-portrait-name";\n    public static String MINIO_BUCKET_FAVORITE_NAME = "minio-bucket-favorite-name";\n')),Object(i.b)("img",{src:"https://media.comsince.cn/minio-bucket-image-name/1-373z3zNN-1594949312959-minio-bucket.png",alt:"minio-bucket",align:"center"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6743\u9650\u8bbe\u7f6e")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE:")," \u6240\u6709\u7684bucket\u90fd\u6309\u7167\u5982\u4e0b\u8fdb\u884c\u8bbe\u7f6e"),Object(i.b)("img",{src:"https://media.comsince.cn/minio-bucket-image-name/1-373z3zNN-1594949556742-bucket-policy.png",alt:"minio-bucket",align:"center"}),Object(i.b)("h2",{id:"\u4e0b\u8f7d\u5b8c\u6574\u5b89\u88c5\u5305"},"\u4e0b\u8f7d\u5b8c\u6574\u5b89\u88c5\u5305"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://media.comsince.cn/minio-bucket-file-name/fshare-chat-pro.tar.gz"}),"chat-server-deploy"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE:")," \u4e0b\u8f7d\u5b8c\u6210\u540e,\u8bf7\u5c06\u538b\u7f29\u6587\u4ef6\u89e3\u538b\u5230",Object(i.b)("inlineCode",{parentName:"p"},"/"),"\u6839\u76ee\u5f55\u4e0b\u5373\u53ef,\u6ce8\u610f\u4e0a\u9762\u7684\u547d\u4ee4\u884c\u90fd\u662f\u4ee5\u8fd9\u4e2a\u76ee\u5f55\u4e3a\u6807\u51c6\u7684,\u5207\u5fcc\u4e0d\u8981\u968f\u610f\u653e\u7f6e"),Object(i.b)("h2",{id:"\u4e0b\u8f7d\u90e8\u7f72\u670d\u52a1"},"\u4e0b\u8f7d\u90e8\u7f72\u670d\u52a1"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE:"),"  \u7531\u4e8egithub\u4ed3\u5e93\u9650\u5236\u4ee5\u53ca\u7f51\u7edc\u95ee\u9898,\u4e0d\u4fbf\u4e0a\u4f20.\u5f53\u4f60\u4e0b\u8f7d\u5b8c\u4e0b\u9762\u4e24\u4e2a\u670d\u52a1jar\u5305,\u5206\u522b\u653e\u5230\u76f8\u5e94\u670d\u52a1\u7684",Object(i.b)("inlineCode",{parentName:"p"},"lib"),"\u76ee\u5f55\u4e0b,\u8bf7\u9009\u62e9\u4ee5\u4e0b\u6700\u65b0\u7248\u672c\u4e0b\u8f7d"),Object(i.b)("h3",{id:"push-connector\u670d\u52a1"},"push-connector\u670d\u52a1"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://media.comsince.cn/minio-bucket-file-name/spring-boot-dubbo-push-connector-1.2.3.jar"}),"push-connector-1.2.3"))),Object(i.b)("h3",{id:"push-group\u670d\u52a1"},"push-group\u670d\u52a1"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"https://media.comsince.cn/minio-bucket-file-name/spring-boot-web-push-group-1.2.3.jar"}),"push-group-1.2.3"))),Object(i.b)("h2",{id:"\u53c2\u6570\u914d\u7f6e"},"\u53c2\u6570\u914d\u7f6e"),Object(i.b)("p",null,"\u76ee\u524d\u4ec5\u6709\u4e24\u4e2a\u670d\u52a1\u542f\u52a8\u65e2\u53ef\u8fd0\u884c,\u53c2\u6570\u914d\u7f6e\u4ec5\u9700\u5173\u5fc3,\u5404\u4e2a\u76ee\u5f55\u4e0bconfig\u5373\u53ef,\u4f60\u9700\u8981\u914d\u7f6e\u4e0b\u9762\u7684\u6587\u4ef6\u5373\u53ef,\u5177\u4f53\u5728\u6bcf\u4e2a\u670d\u52a1\u7684",Object(i.b)("inlineCode",{parentName:"p"},"config"),"\u76ee\u5f55\u4e0b"),Object(i.b)("h3",{id:"push-connector"},"push-connector"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-yaml"}),"# wss ssl \u914d\u7f6e,\u8fd9\u91cc\u914d\u7f6ejks\u9700\u8981\u6307\u5b9a\u5176\u7edd\u5bf9\u8def\u5f84\u5730\u5740,\u4e0d\u542f\u7528wss \u8bf7\u5c06\u8fd9\u91cc\u8bbe\u7f6e\u4e3a\u7a7a,\u5373\u8868\u793a\u4e0d\u542f\u7528wss,\u4f7f\u7528ws.\u672c\u5730\u90e8\u7f72\u53ef\u4ee5\u8003\u8651\u6682\u65f6\u4e0d\u542f\u7528wss\npush.ssl.keystore=/data/boot/push-connector/config/chat.comsince.cn.jks\npush.ssl.truststore=/data/boot/push-connector/config/chat.comsince.cn.trustkeystore.jks\npush.ssl.password=123456\n## Dubbo Registry\ndubbo.registry.address=zookeeper://zookeeper:2181\n\n## kafka broker \u6682\u65f6\u4e0d\u5efa\u8bae\u4f7f\u7528\u96c6\u7fa4,\u5355\u51fb\u90e8\u7f72\u53ef\u6682\u65f6\u4e0d\u7528\u914d\u7f6e\n#push.kafka.broker=kafka:9092\n\n## kurento client url,\u7fa4\u7ec4\u97f3\u89c6\u9891\u670d\u52a1\nkurento.clientUrl=ws://media.comsince.cn:8888/kurento\n\n## minio url\nminio.url=https://media.comsince.cn\n## minio access_key\nminio.access_key=\n## minio secret_key\nminio.secret_key=\n\n\n")),Object(i.b)("h3",{id:"push-group"},"push-group"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-yaml"}),"\n## Dubbo \u6ce8\u518c\u4e2d\u5fc3\ndubbo.registry.address=zookeeper://zookeeper:2181\n\n\n#\u4e91\u77ed\u4fe1\u5382\u5546,1:\u4ee3\u8868\u963f\u91cc\u4e91\u77ed\u4fe1 2: \u4ee3\u8868\u817e\u8baf\u4e91\u77ed\u4fe1.\u5982\u679c\u6ca1\u6709\u77ed\u4fe1\u670d\u52a1,\u53ef\u6682\u65f6\u4e0d\u7528\u914d\u7f6e,\u4f7f\u7528\u8d85\u7ea7\u9a8c\u8bc1\u7801\u767b\u5f55\nsms.cp=2\n# \u5e94\u7528id\nsms.appid=LTAI4Ff1jtqrSr3rkHMKEnfs\n# \u5e94\u7528key\nsms.appkey=gG33mvmMAxGYol7Vd1AEG6InRK9VCD\n# \u6a21\u677fid\nsms.templateId=SMS_180355435\n# \u77ed\u4fe1\u7b7e\u540d\u7531\u4e8e\u7f16\u7801\u95ee\u9898,\u8bf7\u5230\u76f8\u5e94\u7684\u4ee3\u7801\u91cc\u9762\u8bbe\u7f6e\n\n# \u77ed\u4fe1\u8d85\u7ea7\u9a8c\u8bc1\u7801,\u6b63\u5f0f\u4e0a\u7ebf\u8bf7\u4fee\u6539\nsms.superCode=6666\n\n# \u662f\u5426\u4f7f\u7528\u5185\u7f6e\u6570\u636e\u5e93 1: \u8868\u793a\u4f7f\u7528 0: \u4f7f\u7528mySql\nim.embed_db=0\n# jdbc url\nim.jdbc_url=jdbc:mysql://mysql:3306/fsharechat?useSSL=false&serverTimezone=GMT&allowPublicKeyRetrieval=true&useUnicode=true&characterEncoding=utf8\n# mysql\u6570\u636e\u5e93\u8bbf\u95ee\u7528\u6237\u540d\nim.user=root\n#mysql\u6570\u636e\u5e93\u8bbf\u95ee\u5bc6\u7801\nim.password=123456\n\n")),Object(i.b)("h3",{id:"jvmini-\u53c2\u6570\u914d\u7f6e"},"jvm.ini \u53c2\u6570\u914d\u7f6e"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(c.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(c.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(c.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(c.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(c.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u7531\u4e8e\u6211\u7684\u7ebf\u4e0a\u670d\u52a1\u5668\u4f7f\u7528\u7684\u5185\u5b58\u6bd4\u8f83\u5c0f,\u6240\u4ee5\u5bf9",Object(i.b)("inlineCode",{parentName:"p"},"push-connector"),",",Object(i.b)("inlineCode",{parentName:"p"},"push-group"),"\u7684jvm\u53c2\u6570\u505a\u4e86\u8c03\u6574.\u6240\u4ee5\u4ee5\u4e0b\u5185\u5b58\u53c2\u6570\u914d\u7f6e,\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u5b9e\u9645\u673a\u5668\u7684\u914d\u7f6e\u4fee\u6539"))),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-shell"}),"-Xmx300m  \u6700\u5927\u4f7f\u7528\u5185\u5b58\n-Xms300m  \u6700\u5c0f\u4f7f\u7528\u5185\u5b58\n-Xmn100m  \u65b0\u751f\u4ee3\u5185\u5b58\n")),Object(i.b)("h2",{id:"\u542f\u52a8\u670d\u52a1"},"\u542f\u52a8\u670d\u52a1"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-shell"}),"./push-group/push-group start\n./push-connector/push-connector start\n")),Object(i.b)("h2",{id:"\u5ba2\u6237\u7aef"},"\u5ba2\u6237\u7aef"),Object(i.b)("h3",{id:"vue-\u5ba2\u6237\u7aef\u914d\u7f6e"},"vue \u5ba2\u6237\u7aef\u914d\u7f6e"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6 ",Object(i.b)("inlineCode",{parentName:"li"},"vue-chat\\src\\constant\\index.js"))),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-java"}),"  //ws \u534f\u8bae\u914d\u7f6e\n  //export const WS_PROTOCOL = 'wss';\n  export const WS_PROTOCOL = 'ws';\n  \n  //websocket \u670d\u52a1\u5730\u5740  \n  //export const WS_IP = 'github.comsince.cn';\n  export const WS_IP = 'localhost';\n    \n  //\u767b\u5f55\u63a5\u53e3\u670d\u52a1\u914d\u7f6e,\u672c\u5730\u90e8\u7f72\u53ef\u4ee5\u4e0d\u542f\u7528https  \n  //export const HTTP_HOST = \"https://\"+WS_IP + \":8443/\"\n  export const HTTP_HOST = \"http://\"+WS_IP + \":8081/\"\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u7f16\u8bd1")),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-shell"}),"npm run build\n")),Object(i.b)("h3",{id:"android-\u5ba2\u6237\u7aef"},"android \u5ba2\u6237\u7aef"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6\u5728chat\u5de5\u7a0b\u4e0b\u7684",Object(i.b)("inlineCode",{parentName:"li"},"config.java"))),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-java"}),'//IM server \u5373\u662fpush-connector\u670d\u52a1\u5730\u5740\n    String IM_SERVER_HOST = "chat.comsince.cn";\n    int IM_SERVER_PORT = 6789;\n\n//push-group\u670d\u52a1\u5730\u5740\n    String APP_SERVER_HOST = "chat.comsince.cn";\n    int APP_SERVER_PORT = 8081;\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u7f16\u8bd1APK")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE:")," \u7f16\u8bd1\u524d\u8bf7\u786e\u4fdd",Object(i.b)("inlineCode",{parentName:"p"},"Android SDK"),"\u914d\u7f6e\u6b63\u786e"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-shell"}),"./gradlew clean assembleDebug\n")))}s.isMDXComponent=!0}}]);