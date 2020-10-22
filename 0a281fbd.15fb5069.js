(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{63:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return s})),t.d(e,"metadata",(function(){return a})),t.d(e,"rightToc",(function(){return c})),t.d(e,"default",(function(){return l}));var i=t(2),o=t(6),r=(t(0),t(123)),s={layout:"wiki",title:"Nginx\u5b89\u88c5\u914d\u7f6e\u8bf4\u660e"},a={unversionedId:"prepare/nginx",id:"prepare/nginx",isDocsHomePage:!1,title:"Nginx\u5b89\u88c5\u914d\u7f6e\u8bf4\u660e",description:"\u8fd9\u91cc\u4e3b\u8981\u8bf4\u660enginx\u90e8\u7f72\u98de\u4eabIM Web\u7248\u672c\u7684nginx\u914d\u7f6e,\u540c\u65f6\u8bf4\u660e\u914d\u7f6enginx\u652f\u6301https.\u4ee5\u652f\u6301minio\u5b9e\u73b0https\u8bbf\u95ee",source:"@site/docs/prepare/nginx.md",slug:"/prepare/nginx",permalink:"/docs/prepare/nginx",version:"current",sidebar:"docs",previous:{title:"\u8bc1\u4e66\u914d\u7f6e\u8bf4\u660e",permalink:"/docs/prepare/cert"},next:{title:"Centos\u4e0a\u5355\u673a\u90e8\u7f72\u5b9e\u8df5",permalink:"/docs/guide/centos"}},c=[{value:"Nginx\u5b89\u88c5",id:"nginx\u5b89\u88c5",children:[]},{value:"Nginx\u914d\u7f6eHttps\u8bf4\u660e",id:"nginx\u914d\u7f6ehttps\u8bf4\u660e",children:[]}],p={rightToc:c};function l(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u8bf4\u660enginx\u90e8\u7f72\u98de\u4eabIM Web\u7248\u672c\u7684nginx\u914d\u7f6e,\u540c\u65f6\u8bf4\u660e\u914d\u7f6enginx\u652f\u6301https.\u4ee5\u652f\u6301",Object(r.b)("inlineCode",{parentName:"p"},"minio"),"\u5b9e\u73b0https\u8bbf\u95ee"),Object(r.b)("h2",{id:"nginx\u5b89\u88c5"},"Nginx\u5b89\u88c5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://comsince.cn/wiki/2018-12-29-webserver-nginx/"}),"nginx\u5b89\u88c5"))),Object(r.b)("h2",{id:"nginx\u914d\u7f6ehttps\u8bf4\u660e"},"Nginx\u914d\u7f6eHttps\u8bf4\u660e"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),'server {\n        listen       443 ssl;\n        server_name  localhost;\n\n        ssl_certificate      /etc/letsencrypt/live/comsince.cn/fullchain.pem;\n        ssl_certificate_key  /etc/letsencrypt/live/comsince.cn/privkey.pem;\n\n        ssl_session_cache    shared:SSL:1m;\n        ssl_session_timeout  5m;\n\n        ##\u98de\u4eabweb\u7248\u672c\n        location /web {\n               root   /data/boot/;\n               index  index.html index.htm;\n        }\n\n        ##\u98de\u4eabweb\u79fb\u52a8\u7248\u672c\n        location /mobile {\n               root   /data/boot/;\n               index  index.html index.htm;\n        }\n  \n        ##minio\u5bf9\u8c61\u5b58\n        location /minio {\n            proxy_pass  http://localhost:9000;\n        }\n\n        ##\u624b\u673a\u9a8c\u8bc1\u7801\u767b\u5f55\n        location /login {\n            proxy_pass http://localhost:8081;\n        }\n        ## \u53d1\u9001\u9a8c\u8bc1\u7801\n        location /send_code {\n            proxy_pass http://localhost:8081;\n        }\n\n        ##\u914d\u7f6eminio\u4e0a\u4f20url,\u652f\u6301\u6700\u5927500M\u6587\u4ef6\u4e0a\u4f20\n        location ~* /minio-bucket* {\n          proxy_set_header X-Real-IP $remote_addr;\n          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n          proxy_set_header X-Forwarded-Proto $scheme;\n          proxy_set_header Host $http_host;\n          client_max_body_size  500m;\n          proxy_connect_timeout 300;\n          # Default is HTTP/1, keepalive is only enabled in HTTP/1.1\n          proxy_http_version 1.1;\n          proxy_set_header Connection "";\n          chunked_transfer_encoding off;\n          proxy_pass  http://localhost:9000;\n        }\n\n}\n')))}l.isMDXComponent=!0}}]);