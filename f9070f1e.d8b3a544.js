(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{122:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var a=t(2),c=t(6),r=(t(0),t(133)),o={layout:"post",title:"\u670d\u52a1\u68c0\u67e5\u914d\u7f6e\u6e05\u5355\u4e0e\u670d\u52a1\u542f\u52a8\u9879",description:"docker IM checklist native",category:"IM"},i={unversionedId:"guide/checklist",id:"guide/checklist",isDocsHomePage:!1,title:"\u670d\u52a1\u68c0\u67e5\u914d\u7f6e\u6e05\u5355\u4e0e\u670d\u52a1\u542f\u52a8\u9879",description:"docker IM checklist native",source:"@site/docs/guide/checklist.md",slug:"/guide/checklist",permalink:"/docs/guide/checklist",version:"current",sidebar:"docs",previous:{title:"\u98de\u4eabIM\u96c6\u7fa4\u67b6\u6784\u4e0e\u5b89\u88c5\u8bf4\u660e",permalink:"/docs/guide/cluster"},next:{title:"\u53d1\u9001\u7cfb\u7edf\u901a\u77e5",permalink:"/docs/api/pushapi"}},s=[{value:"\u97f3\u89c6\u9891\u76f8\u5173",id:"\u97f3\u89c6\u9891\u76f8\u5173",children:[{value:"coturn\u542f\u52a8",id:"coturn\u542f\u52a8",children:[]},{value:"kurento",id:"kurento",children:[]}]},{value:"\u5bf9\u8c61\u5b58\u50a8Minio",id:"\u5bf9\u8c61\u5b58\u50a8minio",children:[]},{value:"Nginx",id:"nginx",children:[{value:"\u81ea\u7b7e\u540d\u8bc1\u4e66\u914d\u7f6e",id:"\u81ea\u7b7e\u540d\u8bc1\u4e66\u914d\u7f6e",children:[]}]},{value:"\u670d\u52a1\u914d\u7f6e\u68c0\u67e5\u4e0e\u542f\u52a8",id:"\u670d\u52a1\u914d\u7f6e\u68c0\u67e5\u4e0e\u542f\u52a8",children:[]}],d={rightToc:s};function l(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u97f3\u89c6\u9891\u76f8\u5173"},"\u97f3\u89c6\u9891\u76f8\u5173"),Object(r.b)("h3",{id:"coturn\u542f\u52a8"},"coturn\u542f\u52a8"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"coturn")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-properties"}),"# \u76d1\u542c\u7aef\u53e3\uff0c\u4e0d\u914d\u7f6e\u7684\u8bdd\uff0c\u9ed8\u8ba4\u662f3478\nlistening-port=3478\n# \u5185\u7f51\u5730\u5740,\u8fd9\u91ccubuntu\u8bbe\u7f6e\u4e3a\u5916\u7f51\u5730\u5740,\u4e0d\u7136relay\u4f7f\u7528\u662f\u5185\u7f51\u5730\u5740,\u5bfc\u81f4\u6d4b\u8bd5\u65e0\u6cd5\u8054\u901a\nlistening-ip=169.254.30.2\n# \u5916\u7f51\u5730\u5740\nexternal-ip=169.254.30.2\n# \u8bbe\u7f6e\u7528\u6237\u540d\u53ca\u5bc6\u7801\uff0c\u53ef\u8bbe\u7f6e\u591a\u4e2a,\u81ea\u5df1\u53ef\u4ee5\u4fee\u6539\nuser=test:test\nno-cli\ncli-password=$5$79a316b350311570$81df9cfb9af7f5e5a76eada31e7097b663a0670f99a3c07ded3f1c8e59c5658a   \n\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u6b64\u6587\u4ef6\u653e\u7f6e\u4e8e/etc/turnserver.conf"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u542f\u52a8\u547d\u4ee4")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"/usr/local/coturn/bin/turnserver -v -r  169.254.30.2:3478 -a -o -c /etc/turnserver.conf\n")),Object(r.b)("h3",{id:"kurento"},"kurento"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u914d\u7f6e")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u5982\u679cmedia server\u6709\u5916\u90e8\u5730\u5740,\u53ef\u4ee5\u4e0d\u7528\u914d\u7f6eturn/stun server\u5730\u5740,\u4fee\u6539",Object(r.b)("inlineCode",{parentName:"p"},"/etc/kurento/modules/kurento/WebRtcEndpoint.conf.ini"),"\nexternalAddress=10.20.30.40"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u542f\u52a8\u4e0e\u505c\u6b62")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"sudo service kurento-media-server start\nsudo service kurento-media-server stop\n")),Object(r.b)("h2",{id:"\u5bf9\u8c61\u5b58\u50a8minio"},"\u5bf9\u8c61\u5b58\u50a8Minio"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u542f\u52a8\u811a\u672c")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"MINIO_ACCESS_KEY={access_key} MINIO_SECRET_KEY={secret_key} nohup ./data/minio/minio  server  /data/minio/miniodata/  > /data/minio/minio.log 2>&1 &\n")),Object(r.b)("h2",{id:"nginx"},"Nginx"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Nginx\u4e3b\u8981\u914d\u7f6e\u652f\u6301https,wss,\u590d\u5236\u6240\u6709http\u7684\u670d\u52a1\u8f6c\u53d1,\u5305\u62ecminio,nginx \u4e00\u822c\u662f\u968f\u5f00\u673a\u542f\u52a8"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u914d\u7f6e\u9879\u76ee")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'server {\n        listen       443 ssl;\n        server_name  localhost;\n\n        ssl_certificate      /data/ssl/ssl-fsharechat.crt; ## \u8fd9\u91cc\u53ef\u4ee5\u4f7f\u7528\u81ea\u7b7e\u540d\u8bc1\u4e66\n        ssl_certificate_key  /data/ssl/ssl-fsharechat.key;\n\n        ssl_session_cache    shared:SSL:1m;\n        ssl_session_timeout  5m;\n\n        ##\u98de\u4eabweb\u7248\u672c\n        location / {\n               proxy_set_header Host $host;\n               proxy_set_header X-Real-IP $remote_addr;\n               proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n               root   /data/boot/web/dist;\n               index  index.html index.htm;\n        }\n\n        ##\u98de\u4eabweb\u79fb\u52a8\u7248\u672c\n        location /mobile {\n               root   /data/boot/;\n               index  index.html index.htm;\n        }\n\n        location /admin {\n            alias   /data/boot/admin;\n                try_files $uri $uri/ /index.html =404;\n            index  index.html index.htm;\n        }\n\n        location /prod-api/{\n            proxy_set_header Host $http_host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header REMOTE-HOST $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_pass http://localhost:8080/;\n        }\n  \n        ##minio\u5bf9\u8c61\u5b58\n        location /minio {\n            proxy_pass  http://localhost:9000;\n        }\n\n        ##\u624b\u673a\u9a8c\u8bc1\u7801\u767b\u5f55\n        location /login {\n            proxy_pass http://localhost:8081;\n        }\n        ## \u53d1\u9001\u9a8c\u8bc1\u7801\n        location /send_code {\n            proxy_pass http://localhost:8081;\n        }\n\n        ##\u914d\u7f6eminio\u4e0a\u4f20url,\u652f\u6301\u6700\u5927500M\u6587\u4ef6\u4e0a\u4f20\n        location ~* /minio-bucket* {\n          proxy_set_header X-Real-IP $remote_addr;\n          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n          proxy_set_header X-Forwarded-Proto $scheme;\n          proxy_set_header Host $http_host;\n          client_max_body_size  500m;\n          proxy_connect_timeout 300;\n          # Default is HTTP/1, keepalive is only enabled in HTTP/1.1\n          proxy_http_version 1.1;\n          proxy_set_header Connection "";\n          chunked_transfer_encoding off;\n          proxy_pass  http://localhost:9000;\n        }\n\n        location /imopenapi {\n            proxy_pass http://localhost:8081;\n        }\n\n\n        ##\u652f\u6301wss\u914d\u7f6e\n        location /ws {\n           proxy_set_header X-Real-IP $remote_addr;\n           proxy_set_header X-Forwarded-Proto $scheme;\n           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n           proxy_set_header Host $host;\n           proxy_pass http://ws-backend;\n            \n\n           # proxy_ssl_certificate     /etc/letsencrypt/live/comsince.cn/fullchain.pem;\n           # proxy_ssl_certificate_key /etc/letsencrypt/live/comsince.cn/privkey.pem;\n \n            proxy_http_version 1.1;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection "Upgrade";\n        }\n}\n\n\nupstream ws-backend {\n      server 127.0.0.1:9326;\n} \n\n\n\nserver {\n        listen 80;\n        server_name chat.comsince.cn;  ## \u8fd9\u91cc\u4fee\u6539\u4e3a\u81ea\u5df1\u7684\u57df\u540d\n            #rewrite ^ https://$host$request_uri? permanent;\n            #rewrite ^(.*)$ https://$host$1 permanent;\n            if ($scheme != "https") {\n                return 301 https://$host$request_uri;\n            }            \n\n            if ($host = chat.comsince.cn) {\n               return 301 https://$host$request_uri;\n            }\n\n            #return 404;\n            root   html;\n        index  index.html index.htm index.php;\n        \n    }\n\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u5efa\u8bae\u5c06\u6b64\u914d\u7f6e\u5355\u72ec\u9632\u6b62\u5728",Object(r.b)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/fsharechat.conf"),"\u4e2d"))),Object(r.b)("h3",{id:"\u81ea\u7b7e\u540d\u8bc1\u4e66\u914d\u7f6e"},"\u81ea\u7b7e\u540d\u8bc1\u4e66\u914d\u7f6e"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u751f\u6210\u8bc1\u4e66")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"openssl req \\\n-newkey rsa:2048 \\\n-x509 \\\n-nodes \\\n-keyout ssl-fsharechat.key \\\n-new \\\n-out ssl-fsharechat.crt \\\n-subj /CN=Hostname \\\n-reqexts SAN \\\n-extensions SAN \\\n-config <(cat /etc/ssl/openssl.cnf \\\n    <(printf '[SAN]\\nsubjectAltName=DNS:hostname,IP:{\u4f60\u7684\u673a\u5668ip\u5730\u5740}')) \\\n-sha256 \\\n-days 3650\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'\u89e3\u51b3\u5185\u7f51\u8bc1\u4e66java\u5ba2\u6237\u7aef\u8c03\u7528\u5931\u8d25\u7684\u95ee\u9898\u89e3\u51b3 java \u4f7f\u7528ssl\u8fc7\u7a0b\u4e2d\u51fa\u73b0"PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderExcep')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE:")," \u89e3\u51b3\u65b9\u5f0f\u4e3a\u5c06\u81ea\u7b7e\u540d\u8bc1\u4e66\u6dfb\u52a0\u5230java\u7684\u8bc1\u4e66\u5217\u8868\u4e2d,\u9632\u6b62\u51fa\u73b0\u4ee5\u4e0a\u62a5\u9519"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"## \u8fdb\u5165jdk jre\u7684bin\u76ee\u5f55\u6267\u884ckeytool\u547d\u4ee4\ncd /data/jdk/jre/bin\nkeytool -import -alias cacerts -keystore cacerts -file /data/ssl/ssl-fsharechat.crt\n## \u6b64\u65f6\u547d\u4ee4\u884c\u4f1a\u63d0\u793a\u4f60\u8f93\u5165cacerts\u8bc1\u4e66\u5e93\u7684\u5bc6\u7801\n## \u6572\u5165changeit\uff0c\u8fd9\u662fjava\u4e2dcacerts\u8bc1\u4e66\u5e93\u7684\u9ed8\u8ba4\u5bc6\u7801\n")),Object(r.b)("h2",{id:"\u670d\u52a1\u914d\u7f6e\u68c0\u67e5\u4e0e\u542f\u52a8"},"\u670d\u52a1\u914d\u7f6e\u68c0\u67e5\u4e0e\u542f\u52a8"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u542f\u52a8\u670d\u52a1")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"/data/boot/push-group/push-group start\n/data/boot/push-connector/push-connector start\n/data/boot/push-api/push-api start\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE:")," \u5404\u4e2a\u670d\u52a1\u7684\u914d\u7f6e\u8bf7\u5230\u76f8\u5e94\u7684",Object(r.b)("inlineCode",{parentName:"p"},"config/application.properties"),"\u4e0b\u4fee\u6539"))}l.isMDXComponent=!0}}]);