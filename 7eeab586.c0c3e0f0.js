(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(2),s=a(6),i=(a(0),a(218)),o={title:"The art of thread messaging",author:"Vlad Ilyushchenko",author_title:"QuestDB Team",author_url:"https://github.com/bluestreak01",author_image_url:"https://avatars.githubusercontent.com/bluestreak01",tags:["deep-dive"],description:"Detailed explanation of QuestDB's thread messaging system. A benchmark also shows the capabilities of this system."},r={permalink:"/blog/2020/03/15/interthread",source:"@site/blog/2020-03-15-interthread.md",description:"Detailed explanation of QuestDB's thread messaging system. A benchmark also shows the capabilities of this system.",date:"2020-03-15T00:00:00.000Z",tags:[{label:"deep-dive",permalink:"/blog/tags/deep-dive"}],title:"The art of thread messaging",readingTime:6.135,truncated:!0,prevItem:{title:"Aggregating billions of rows per sec with SIMD",permalink:"/blog/2020/04/02/using-simd-to-aggregate-billions-of-rows-per-second"},nextItem:{title:"Speeding up InfluxDB line protocol",permalink:"/blog/2019/12/19/lineprot"}},l=[],d={rightToc:l};function u(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("img",{alt:"Flock of birds flying in a harmonised way",className:"banner",src:"/img/blog/2020-03-15/header.png"}),Object(i.b)("p",null,"Inter-thread messaging is a fundamental part of any asynchronous system. It is\nthe component responsible for transportation of data between threads. Messaging\nforms the infrastructure, the scaffolding of multi-threaded application and just\nlike real-world transport infrastructure we want it to be inexpensive, fast,\nreliable and clean."),Object(i.b)("p",null,"For QuestDB we wrote our own messaging system and this post is about how it\nworks and how fast it is."))}u.isMDXComponent=!0}}]);