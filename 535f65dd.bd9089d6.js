(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),i=n(6),r=(n(0),n(218)),o={title:"Things we learned about sums",author:"Tancrede Collard",author_title:"QuestDB Team",author_url:"https://github.com/TheTanc",author_image_url:"https://avatars.githubusercontent.com/TheTanc",tags:["performance","deep-dive"],description:"What we learned implementing Kahan and Neumaier compensated sum algorithms, benchmark and comparison with Clickhouse."},s={permalink:"/blog/2020/05/12/interesting-things-we-learned-about-sums",source:"@site/blog/2020-05-12-interesting-things-we-learned-about-sums.md",description:"What we learned implementing Kahan and Neumaier compensated sum algorithms, benchmark and comparison with Clickhouse.",date:"2020-05-12T00:00:00.000Z",tags:[{label:"performance",permalink:"/blog/tags/performance"},{label:"deep-dive",permalink:"/blog/tags/deep-dive"}],title:"Things we learned about sums",readingTime:8.47,truncated:!0,prevItem:{title:"IoT on QuestDB",permalink:"/blog/2020/06/05/iot-on-questdb"},nextItem:{title:"Aggregating billions of rows per sec with SIMD",permalink:"/blog/2020/04/02/using-simd-to-aggregate-billions-of-rows-per-second"}},l=[{value:"How did we get there? TL;DR",id:"how-did-we-get-there-tldr",children:[]},{value:"Contents",id:"contents",children:[]},{value:"Inaccurate summation?",id:"inaccurate-summation",children:[]},{value:"Float representation and truncation accuracy loss",id:"float-representation-and-truncation-accuracy-loss",children:[]},{value:"Kahan&#39;s algorithm for compensated summation",id:"kahans-algorithm-for-compensated-summation",children:[]},{value:"Implementation with SIMD instructions",id:"implementation-with-simd-instructions",children:[]},{value:"Comparison with Clickhouse",id:"comparison-with-clickhouse",children:[{value:"Hardware",id:"hardware",children:[]},{value:"Test data",id:"test-data",children:[]},{value:"Storage engine",id:"storage-engine",children:[]},{value:"Commands",id:"commands",children:[]},{value:"Results",id:"results",children:[]}]},{value:"Concluding remarks",id:"concluding-remarks",children:[]}],c={rightToc:l};function u(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("img",{alt:"Wile E. Coyote and the Road Runner cartoon",className:"banner",src:"/img/blog/2020-05-12/banner.png"}),Object(r.b)("p",null,"In the world of databases, benchmarking performance has always been the hottest\ntopic. Who is faster for data ingestion and queries? About a month ago we\nannounced a new release with SIMD aggregations on\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://news.ycombinator.com/item?id=22803504"}),"HackerNews")," and\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.reddit.com/r/programming/comments/fwlk0k/questdb_using_simd_to_aggregate_billions_of/"}),"Reddit"),".\nFast. But were those results numerically accurate?"),Object(r.b)("p",null,'Speed is not everything. Some of the feedback we have received pointed us toward\nthe accuracy of our results. This is something typically overlooked in the\nspace, but our sums turned out to be "naive", with small errors for large\ncomputations. By compounding a very small error over and over through a set of\noperations, it can eventually become significant enough for people to start\nworrying about it.'),Object(r.b)("p",null,'We then went on to include an accurate summation algorithm (such as "Kahan" and\n"Neumaier" compensated sums). Now that we\'re doing the sums accurately, we\nwanted to see how it affected performance. There is typically a trade-off\nbetween speed and accuracy. However, by extracting even more performance out of\nQuestDB (see below for how we did it), we managed to compute accurate sums as\nfast as naive ones! Since comparisons to Clickhouse have been our most frequent\nquestion, we have run the numbers and the result is:\n',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#comparison-with-clickhouse"}),"2x faster for summing 1bn doubles will nulls"),"."),Object(r.b)("p",null,"All of this is included in our new\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/questdb/questdb/releases/tag/4.2.1"}),"release 4.2.1")),Object(r.b)("p",null,"You can find our repository on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/questdb/questdb"}),"GitHub"),". All your\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/questdb/questdb/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc"}),"issues"),",\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/questdb/questdb/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc"}),"pull-requests")," and\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/questdb/questdb"}),"stars")," are welcome \ud83d\ude42."),Object(r.b)("h2",{id:"how-did-we-get-there-tldr"},"How did we get there? TL;DR"),Object(r.b)("p",null,"We used prefetch and co-routines techniques to pull data from RAM to cache in\nparallel with other CPU instructions. Our performance was previously limited by\nmemory bandwidth - using these techniques would address this and allow us to\ncompute accurate sums as fast as naive sums."),Object(r.b)("p",null,"With the help of prefetch we implemented the fastest and most accurate summation\nwe have ever ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#comparison-with-clickhouse"}),"tested")," - 68ms over 1bn double values\nwith nulls (versus 139ms for Clickhouse). We believe this is a significant\nadvance in terms of performance for accurate summations, and will help\ndevelopers handling intensive computations with large datasets."),Object(r.b)("h2",{id:"contents"},"Contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#inaccurate-summation"}),"introductory example")," of the problem with summing\ndoubles."),Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#float-representation-and-truncation-accuracy-loss"}),"quick glance")," at\nfloating points inaccuracies."),Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#kahans-algorithm-for-compensated-summation"}),"presentation")," of the Kahan\nalgorithm."),Object(r.b)("li",{parentName:"ul"},"Our ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#implementation-with-simd-instructions"}),"compensated sum implementation"),"\nusing SIMD instructions."),Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#comparison-with-clickhouse"}),"benchmark versus Clickhouse")," for naive and\naccurate summation methods.")),Object(r.b)("h2",{id:"inaccurate-summation"},"Inaccurate summation?"),Object(r.b)("p",null,"Before we dig in, some of you might wonder how an addition can be inaccurate as\nopposed to simply right or wrong."),Object(r.b)("p",null,"CPUs are poor at dealing with floating-point values. Arithmetics are almost\nalways wrong, with a worst-case error proportional to the number of operations\n",Object(r.b)("inlineCode",{parentName:"p"},"n"),". As floating-point operations are intransitive, the order in which you\nperform them also has an impact on accuracy."),Object(r.b)("p",null,"Here is an example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public static void main(String[] args) {\n    System.out.println(5.1+9.2);\n}\n")),Object(r.b)("p",null,"We ask to add ",Object(r.b)("inlineCode",{parentName:"p"},"5.1")," to ",Object(r.b)("inlineCode",{parentName:"p"},"9.2"),". The result should be ",Object(r.b)("inlineCode",{parentName:"p"},"14.3"),", but we get the\nfollowing instead."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"14.299999999999999\n")),Object(r.b)("p",null,"It is a small difference (only ",Object(r.b)("inlineCode",{parentName:"p"},"0.000000000000001"),"), but it is still wrong. To\nmake matters worse, this error can be compounded."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public static void main(String[] args) {\n    double a = 5.1+9.2;\n    double b = a + 3.5;\n    double c = 14.3 + 3.5;\n    System.out.println("The result is: " + b);\n    System.out.print("But we expected: " + c);\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"The result is: 17.799999999999997\nBut we expected: 17.8\n")),Object(r.b)("p",null,"The error has just grown to ",Object(r.b)("inlineCode",{parentName:"p"},"0.000000000000003")," and will keep on growing as we\nadd operations."),Object(r.b)("h2",{id:"float-representation-and-truncation-accuracy-loss"},"Float representation and truncation accuracy loss"),Object(r.b)("p",null,"Decimal numbers are not accurately stored. This is well documented already, for\nexample on\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/588004/is-floating-point-math-broken/588014#588014"}),"StackOverlow"),"\nor ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://0.30000000000000004.com"}),"0.30000000000000004.com"),"."),Object(r.b)("p",null,"Consequently, operations on floating points will return inaccurate results. This\nis not the only problem. Performing operations is also likely to introduce more\nerrors and to grow the total error over time. One such case is once the result\nof an operation has to be truncated to fit the original format. Here is a\nsimplified example of the ",Object(r.b)("strong",{parentName:"p"},"truncation")," that happens when adding floats of\ndifferent orders of magnitude."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"For the below example we will be using base 10 and expressing the exponent as\na number rather than a binary for sake of simplicity. We assume 5 significant\ndigits.")),Object(r.b)("p",null,"We start with both our numbers expressed in scientific notation."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Numbers expressed in scientific notation",src:n(311).default})),Object(r.b)("p",null,"Let's expand into decimal notation and place them on a similar scale so all\ndigits fit."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Numbers expressed in decimal notation",src:n(312).default})),Object(r.b)("p",null,"Now, let us express this sum back as one number in scientific notation. We have\nto ",Object(r.b)("inlineCode",{parentName:"p"},"truncate")," the result back to 5 significant digits."),Object(r.b)("p",null,Object(r.b)("img",{alt:"A number expressed in 2 parts: the significant digits and the truncated part",src:n(313).default})),Object(r.b)("p",null,"The result is incorrect. In fact, it is as if we did not sum anything."),Object(r.b)("h2",{id:"kahans-algorithm-for-compensated-summation"},"Kahan's algorithm for compensated summation"),Object(r.b)("p",null,"Compensated sum maintains a sum of accumulated errors and uses it to attempt to\ncorrect the (inaccurate) sum by the total error amount. It does so by trying to\nadjust each new number by the total accumulated error."),Object(r.b)("p",null,"The main Compensated summation algorithm is the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Kahan_summation_algorithm"}),"Kahan")," sum. It runs in\n4 steps:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Subtract the ",Object(r.b)("inlineCode",{parentName:"li"},"running error")," from the new ",Object(r.b)("inlineCode",{parentName:"li"},"number")," to get the\n",Object(r.b)("inlineCode",{parentName:"li"},"adjusted number"),". If this is the first number, then the running error is 0."),Object(r.b)("li",{parentName:"ul"},"Add the ",Object(r.b)("inlineCode",{parentName:"li"},"adjusted number")," to the ",Object(r.b)("inlineCode",{parentName:"li"},"running total")," and truncate to the number of\nsignificant digits. This is the ",Object(r.b)("inlineCode",{parentName:"li"},"truncated result"),"."),Object(r.b)("li",{parentName:"ul"},"Calculate the ",Object(r.b)("inlineCode",{parentName:"li"},"new running error")," as\n",Object(r.b)("inlineCode",{parentName:"li"},"(truncated result - running total) - adjusted number"),"."),Object(r.b)("li",{parentName:"ul"},"Assign the ",Object(r.b)("inlineCode",{parentName:"li"},"truncated result")," as the new ",Object(r.b)("inlineCode",{parentName:"li"},"running total"),".")),Object(r.b)("p",null,"This works because of addition transitivity rules."),Object(r.b)("h2",{id:"implementation-with-simd-instructions"},"Implementation with SIMD instructions"),Object(r.b)("p",null,"Now, the interesting bit! QuestDB implements the same 4-step algorithm as Kahan.\nHowever, it uses vectorized instructions to make things a lot faster. The idea\ncame from Zach Bjornson who wrote about this on\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://blog.zachbjornson.com/2019/08/11/fast-float-summation.html"}),"his blog"),"."),Object(r.b)("p",null,"Here is our implementation in details:"),Object(r.b)("p",null,"We first define our vectors:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"Vec8d inputVec;\nconst int step = 8;\nconst auto *lim = d + count;\nconst auto remainder = (int32_t) (count - (count / step) * step);\nconst auto *lim_vec = lim - remainder;\nVec8d sumVec = 0.;\nVec8d yVec;\nVec8d cVec = 0.;\nVec8db bVec;\nVec8q nancount = 0;\nVec8d tVec;\n")),Object(r.b)("p",null,"Then we load vectors with data. What's happening below is exactly Kahan's\nalgorithm. However, instead of summing individual values, we are summing vectors\nof 8 values each."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"for (; d < lim_vec; d += step) {\n    _mm_prefetch(d + 63 * step, _MM_HINT_T1);\n    inputVec.load(d);\n    bVec = is_nan(inputVec);\n    nancount = if_add(bVec, nancount, 1);\n    yVec = select(bVec, 0, inputVec - cVec);\n    tVec = sumVec + yVec;\n    cVec = (tVec - sumVec) - yVec;\n    sumVec = tVec;\n}\n")),Object(r.b)("p",null,"The strategically placed ",Object(r.b)("inlineCode",{parentName:"p"},"prefetch")," relies on CPU pipelining. The goal is to\nhave the CPU fetching the next chunk of data from RAM to cache while we are\ncalculating the current vector."),Object(r.b)("p",null,"Lastly, we use ",Object(r.b)("inlineCode",{parentName:"p"},"horizontal_add")," to sum all values into a scalar value. Again, we\nrecognise Kahan's sum algorithm."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"double sum = horizontal_add(sumVec);\ndouble c = horizontal_add(cVec);\nint nans = horizontal_add(nancount);\nfor (; d < lim; d++) {\n      double x = *d;\n    if (x == x) {\n        auto y = x - c;\n        auto t = sum + y;\n        c = (t - sum) -y;\n        sum = t;\n    } else {\n        nans++;\n    }\n}\n")),Object(r.b)("h2",{id:"comparison-with-clickhouse"},"Comparison with Clickhouse"),Object(r.b)("p",null,"We compared how performance behaves when switching from naive (inaccurate) sum\nto Kahan compensated sum."),Object(r.b)("h3",{id:"hardware"},"Hardware"),Object(r.b)("p",null,"We run all databases on an ",Object(r.b)("inlineCode",{parentName:"p"},"c5.metal")," AWS instance, which has two Intel 8275CL\n24-core CPUs and 192GB of memory. QuestDB was running on 16 threads. As we\nshowed in a\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/blog/2020/04/02/using-simd-to-aggregate-billions-of-rows-per-second"}),"previous article"),",\nadding more threads does not improve performance beyond a certain point.\nClickhouse was running using all cores as per default configuration, however we\nincreased the memory limit from the default value from 10GB to 40GB\n",Object(r.b)("inlineCode",{parentName:"p"},"<max_memory_usage>40000000000</max_memory_usage>"),"."),Object(r.b)("h3",{id:"test-data"},"Test data"),Object(r.b)("p",null,"We generated two test files using our\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/function/random-value-generator/"}),"random generation functions"),"\nand exported the results to CSV. We then imported the CSV individually in the\ndatabases."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-questdb-sql"}),"SELECT rnd_double() FROM long_sequence(1_000_000_000l); -- non null\nSELECT rnd_double(2) FROM long_sequence(1_000_000_000l); -- with nulls\n")),Object(r.b)("h3",{id:"storage-engine"},"Storage engine"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"QuestDB"),": on disk"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Clickhouse"),": in memory (using the ",Object(r.b)("inlineCode",{parentName:"li"},"memory()")," engine)")),Object(r.b)("h3",{id:"commands"},"Commands"),Object(r.b)("h4",{id:"with-null"},"With null"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"QuestDB"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Clickhouse"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DDL"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"CREATE TABLE test_double AS(SELECT rnd_double() FROM long_sequence(1000000000L);")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"CREATE TABLE test_double (val Nullable(Float64)) Engine=Memory;"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Import"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not required"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'clickhouse-client --query="INSERT INTO test_double FORMAT CSVWithNames;" < test_double.csv'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Naive sum"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"SELECT sum(val) FROM test_double;")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"SELECT sum(val) FROM test_double;"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Kahan sum"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"SELECT ksum(val) FROM test_double;")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"SELECT sumKahan(val) FROM test_double;"))))),Object(r.b)("h4",{id:"non-null"},"Non-null"),Object(r.b)("p",null,"For non-null values, we adjusted the commands as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"use ",Object(r.b)("inlineCode",{parentName:"li"},"test_double_not_nul.csv")," instead of ",Object(r.b)("inlineCode",{parentName:"li"},"test_double.csv"),"."),Object(r.b)("li",{parentName:"ul"},"for Clickhouse, skip declaring val as ",Object(r.b)("inlineCode",{parentName:"li"},"nullable"),":\n",Object(r.b)("inlineCode",{parentName:"li"},"CREATE TABLE test_double_not_null (val Float64) Engine=Memory;"),"."),Object(r.b)("li",{parentName:"ul"},"for QuestDB, replace ",Object(r.b)("inlineCode",{parentName:"li"},"rnd_double()")," by ",Object(r.b)("inlineCode",{parentName:"li"},"rnd_double(2)")," at the DDL step.")),Object(r.b)("h3",{id:"results"},"Results"),Object(r.b)("p",null,"We ran each query several times for both QuestDB and Clickhouse and kept the\nbest result."),Object(r.b)("p",null,"Without null values, both databases sum naively at roughly the same speed. With\nKahan summation, QuestDB performs at the same speed while Clickhouse's\nperformance drops by ~40%."),Object(r.b)("p",null,Object(r.b)("img",{alt:"QuestDB vs Clickhouse benchmark for Kahan's sums",src:n(314).default})),Object(r.b)("p",null,"As we include null values, Clickhouse's performance degrades by 28% and 50% for\nnaive and Kahan summation, respectively."),Object(r.b)("p",null,Object(r.b)("img",{alt:"QuestDB vs Clickhouse benchmark for Kahan's sums with nulls",src:n(315).default})),Object(r.b)("h2",{id:"concluding-remarks"},"Concluding remarks"),Object(r.b)("p",null,"It is useful to stabilize aggregation with compensated sums. We learned that\nvector-based calculation produce different arithmetic errors compared to\nnon-vector calculations. The way the aggregation is executed by multiple threads\nis not constant. This can cause results to be different from one SQL run to\nanother, if the sum is accuracy naive. Through compensated sums, the results are\nconsistent and more accurate."),Object(r.b)("p",null,"It was also both interesting and surprising to be able to quantify the effect of\nprefetch on what is essentially sequential memory read."),Object(r.b)("p",null,"Your support means a lot to us! If you like content like this, what we do, and\nwhere we're going, please ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://slack.https://fsharechat.github.io/"}),"join our community")," and give us a\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/questdb/questdb"}),"star\ufe0f")," on GitHub."))}u.isMDXComponent=!0},311:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/significantDigits-35f31cbf78ee69d254ac95ac9a5eb84a.png"},312:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/digitsExpanded-3a266315a5bed656c8de128266d5f9ff.png"},313:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/digitsResult-5e5cff4654a26272384864c4ca550fc9.png"},314:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/kahanComparison-a120ecf15e76c693a639fc0af3908687.png"},315:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/kahanNullComparison-ce562d8fa2cafb5e8f02a72ca8b49f6b.png"}}]);