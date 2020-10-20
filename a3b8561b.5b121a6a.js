(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return A})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),o=n(6),i=(n(0),n(218)),A={title:"Light-weight, blazing fast stack for your IoT application",author:"Shan Desai",author_title:"QuestDB Contributor",author_url:"https://github.com/shantanoo-desai",author_image_url:"https://avatars.githubusercontent.com/shantanoo-desai",description:"Create a simple IoT stack with Mosquitto MQTT Broker, Telegraf and QuestDB.",tags:["iot","docker","community-written"]},r={permalink:"/blog/2020/08/25/questitto",source:"@site/blog/2020-08-25-questitto.md",description:"Create a simple IoT stack with Mosquitto MQTT Broker, Telegraf and QuestDB.",date:"2020-08-25T00:00:00.000Z",tags:[{label:"iot",permalink:"/blog/tags/iot"},{label:"docker",permalink:"/blog/tags/docker"},{label:"community-written",permalink:"/blog/tags/community-written"}],title:"Light-weight, blazing fast stack for your IoT application",readingTime:6.06,truncated:!0,prevItem:{title:"Why performance matters in time-series data",permalink:"/blog/2020/09/24/why-performance-matters"},nextItem:{title:"Re-examining our approach to memory mapping",permalink:"/blog/2020/08/19/memory-mapping-deep-dive"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Stack",id:"stack",children:[{value:"Setup",id:"setup",children:[]},{value:"User Management for Mosquitto MQTT Broker",id:"user-management-for-mosquitto-mqtt-broker",children:[]},{value:"Input Data Format + MQTT Topic Design",id:"input-data-format--mqtt-topic-design",children:[]},{value:"Telegraf Configuration",id:"telegraf-configuration",children:[]},{value:"Data Insertion to QuestDB",id:"data-insertion-to-questdb",children:[]},{value:"Visualize It!",id:"visualize-it",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Nuggets",id:"nuggets",children:[]},{value:"Repository",id:"repository",children:[]}],s={rightToc:c};function l(e){var t=e.components,A=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,A,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Note: I wanted you to know that this post is written by one of our contributors,\nShan Desai. Shan is a research scientist working for the Bremen Institute for\nProduction and Logistics (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.biba.uni-bremen.de/"}),"BIBA"),"). His work\ninvolves the use of IoT devices in order to improve product tracking and\ntransparency in a B2B marketplace. You can find more details on\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://shantanoo-desai.github.io/"}),"Shan's personnal website"),"."),Object(i.b)("p",null,"Thanks a lot for your contribution Shan!"),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"QuestDB is the fastest open-source Time-Series Database out there in terms of\nperformance.")),Object(i.b)("p",null,"The developers were kind enough to welcome me into their community and I wanted\nto make things easier for people trying things out with QuestDB."),Object(i.b)("p",null,"Lo! and behold ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/shantanoo-desai/questitto"}),"Questitto")," an ",Object(i.b)("em",{parentName:"p"},"out-of-the-box")," repository for your initial\nIoT Applications. The repository is an altered version for my repository\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/shantanoo-desai/tiguitto"}),"tiguitto")," which helps users deploy the highly used ",Object(i.b)("strong",{parentName:"p"},"TIG+Mosquitto\n(Telegraf, InfluxDB, Grafana) + Mosquitto MQTT Broker")," stack in no time."),Object(i.b)("h2",{id:"motivation"},"Motivation"),Object(i.b)("p",null,"I am really looking forward to use some ",Object(i.b)("inlineCode",{parentName:"p"},"SQL")," queries with Time-Series Databases\nand ",Object(i.b)("inlineCode",{parentName:"p"},"QuestDB")," provides such functionalities as well as some cool new features of\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/function/timestamp/"}),"Dynamic Timestamping"),"."),Object(i.b)("p",null,"Not to mention, my staple\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.influxdata.com/influxdb/v1.8/write_protocols/line_protocol_tutorial/"}),"InfluxDB's line Protocol"),"\nis supported via sockets too!"),Object(i.b)("h2",{id:"stack"},"Stack"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"questitto")," currently comes with basic user authentication support for Mosquitto\nMQTT broker. The Broker allows only specific users to publish / subscribe data\nhence reducing misuse. Telegraf writes the incoming data via subscribing to the\nMQTT Broker and pushes the data to QuestDB."),Object(i.b)("p",null,"In order to make it easy to deploy, the stack is deployable via ",Object(i.b)("inlineCode",{parentName:"p"},"docker")," and\nconfiguration is made simple via usage of text files (MQTT broker's users) and\nan Environment File (for Telegraf)"),Object(i.b)("h3",{id:"setup"},"Setup"),Object(i.b)("p",null,"Clone the repository:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/shantanoo-desai/questitto.git && cd questitto/\n")),Object(i.b)("p",null,"Your Directory structure should look like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"\u251c\u2500\u2500 docker-compose.yml\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 mosquitto\n\u2502   \u251c\u2500\u2500 config\n\u2502   \u2502   \u251c\u2500\u2500 mosquitto.conf\n\u2502   \u2502   \u2514\u2500\u2500 passwd\n\u2502   \u2514\u2500\u2500 data\n\u251c\u2500\u2500 questitto.env\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 telegraf\n    \u2514\u2500\u2500 telegraf.conf\n")),Object(i.b)("p",null,"Some brief information on the files:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mosquitto/config/passwd"),": file that has the usernames and passwords necessary\nfor publishing/subscribing to the MQTT broker"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"questitto.env"),": environment variable file used by ",Object(i.b)("inlineCode",{parentName:"li"},"telegraf")," container to\nsubscribe to the MQTT Broker for data ingestion"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"telegraf/telegraf.conf"),": TOML Configuration file for letting ",Object(i.b)("inlineCode",{parentName:"li"},"telegraf")," do\nthe heavy lifting and inserting the data into QuestDB")),Object(i.b)("h3",{id:"user-management-for-mosquitto-mqtt-broker"},"User Management for Mosquitto MQTT Broker"),Object(i.b)("p",null,"In the repository there are two users added by default (see\n",Object(i.b)("inlineCode",{parentName:"p"},"mosquitto/config/passwd")," file):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"pubclient:questitto\nsubclient:questitto\n")),Object(i.b)("p",null,"You can use the ",Object(i.b)("inlineCode",{parentName:"p"},"pubclient")," credential on your IoT Devices / MQTT Client to\npublish information to the Broker. Similarly, ",Object(i.b)("inlineCode",{parentName:"p"},"subclient")," credential will be\nused by ",Object(i.b)("inlineCode",{parentName:"p"},"telegraf")," or any other user of the stack in order to subscribe to the\nincoming data. Feel free to change the passwords for the usernames or add more\ncredentials according to your needs. The format for the credential entries is as\nfollows (in plain text):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"username1:password1\nusername2:password2\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Mosquitto Broker requires the the credentials to be encrypted and hence you\nbring the stack up with encrypting the passwords, the broker container will fail\nto start"))),Object(i.b)("p",null,"Let's encrypt the passwords using the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# assuming your current directory is questitto\ndocker run -it --rm -v $(pwd)/mosquitto/config:/mosquitto/config eclipse-mosquitto mosquitto_passwd -U /mosquitto/config/passwd\n")),Object(i.b)("p",null,"The command does not return anything hence, after executing the command check\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"mosquitto/config/passwd")," file using:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cat mosquitto/config/passwd\n")),Object(i.b)("h3",{id:"input-data-format--mqtt-topic-design"},"Input Data Format + MQTT Topic Design"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"For IoT Applications, let the higher components in the stack do the\nheavy-lifting i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"telegraf")," and ",Object(i.b)("inlineCode",{parentName:"p"},"mosquitto")," and keep the payload and topics\nvery simple")),Object(i.b)("p",null,"As an example the MQTT Topics are selected as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"IOT/<SensorID>/<measurement_name>\n")),Object(i.b)("p",null,"if your IoT sensor publishes temperature data then you can publish it to a\ntopic:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"IOT/sensor1/temp\n")),Object(i.b)("p",null,"with the payload in ",Object(i.b)("strong",{parentName:"p"},"InfluxDB line protocol string"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"environment,type=BME280 temp=23.9\n")),Object(i.b)("p",null,"We then let ",Object(i.b)("inlineCode",{parentName:"p"},"telegraf")," translate the location of ",Object(i.b)("inlineCode",{parentName:"p"},"sensor1")," for us using the\n",Object(i.b)("inlineCode",{parentName:"p"},"processors")," plugin and the MQTT topic itself."),Object(i.b)("h3",{id:"telegraf-configuration"},"Telegraf Configuration"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"telegraf")," subscribes to the MQTT Broker using the ",Object(i.b)("inlineCode",{parentName:"p"},"subclient")," credential\nmentioned above."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you change the user credentials, make sure to encrypt the password and change\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"questitto.env")," file with the actual credentials for ",Object(i.b)("inlineCode",{parentName:"p"},"telegraf")))),Object(i.b)("p",null,"Let's look at how ",Object(i.b)("inlineCode",{parentName:"p"},"telegraf")," can add our sensor's location for us."),Object(i.b)("p",null,"We use the ",Object(i.b)("inlineCode",{parentName:"p"},"inputs.mqtt_consumer")," plugin to connect to our broker and subscribe\nto it via the credentials in the ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'[[inputs.mqtt_consumer]]\n\n    servers = [ "tcp://mosquitto:1883" ]\n\n    # Topics to subscribe to:\n    topics = [\n        "IOT/+/acc",\n        "IOT/+/mag",\n        "IOT/+/gyro",\n        "IOT/+/temp"\n    ]\n\n    # Telegraf will also store the topic as a tag with name `topic`\n    # NOTE: necessary for the Processor REGEX to extract <Sensor_ID>\n    topic_tag = "topic"\n\n    username = "${TG_MOSQUITTO_USERNAME}"\n    password = "${TG_MOSQUITTO_PASSWORD}"\n\n    # Connection timeout\n    connection_timeout = "30s"\n\n    # Incoming MQTT Payload from Sensor nodes is in InfluxDB line protocol strings\n    data_format = "influx"\n')),Object(i.b)("p",null,"we store the MQTT topic as a ",Object(i.b)("inlineCode",{parentName:"p"},"tag")," called ",Object(i.b)("inlineCode",{parentName:"p"},"topic")," and now leverage it for some\nRegular Expression and Enumeration Magic as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'[[processors.regex]]\n\n    order = 1\n\n    [[processors.regex.tags]]\n\n        # use the `topic` tag to extract information from the MQTT Topic\n        key = "topic"\n        # Topic: IOT/<SENSOR_ID>/<measurement>\n        # Extract <SENSOR_ID>\n        pattern = ".*/(.*)/.*"\n        # Replace the first occurrence\n        replacement = "${1}"\n        # Store it in tag called:\n        result_key = "sensorID"\n\n\n[[processors.enum]]\n\n    order = 2\n\n    [[processors.enum.mapping]]\n\n        # create a mapping between extracted sensorID and some meta-data\n        tag = "sensorID"\n        dest = "location"\n\n        [processors.enum.mapping.value_mappings]\n            "sensor1" = "kitchen"\n            "sensor2" = "livingroom"\n')),Object(i.b)("p",null,"Based on our MQTT Topic design we know that the ",Object(i.b)("inlineCode",{parentName:"p"},"SensorID")," will be on the second\nlevel i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"IOT/(.*)/#"),"."),Object(i.b)("p",null,"We perform the Regular Expression to extract the sensor's ID and use ",Object(i.b)("inlineCode",{parentName:"p"},"enum")," to\nmap it to its dedicated location:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"sensor1 --\x3e kitchen\nsensor2 --\x3e livingroom\n")),Object(i.b)("p",null,"The location will be stored as a ",Object(i.b)("inlineCode",{parentName:"p"},"tag")," called ",Object(i.b)("inlineCode",{parentName:"p"},"location"),"."),Object(i.b)("h3",{id:"data-insertion-to-questdb"},"Data Insertion to QuestDB"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'[[outputs.socket_writer]]\n    address = "tcp://questdb:9009"\n')),Object(i.b)("p",null,"will send the line protocol String to port 9009 of the ",Object(i.b)("inlineCode",{parentName:"p"},"questdb")," container and\nyou don't even need to define a schema beforehand!"),Object(i.b)("h3",{id:"visualize-it"},"Visualize It!"),Object(i.b)("p",null,"QuestDB comes with its own cool UI available on ",Object(i.b)("inlineCode",{parentName:"p"},"http://<IP_address>:9000")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"Get the Stack up:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up -d\n")),Object(i.b)("p",null,"As a simple Example I used ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mqttfx.org"}),"MQTT.fx")," as a client to publish information in\nline Protocol to the following Topic:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "topic": "IOT/sensor1/acc",\n  "payload": [\n    "accleration,type=BNO055 x=2.3,y=3.2,z=0.01",\n    "accleration,type=BNO055 x=2.3,y=3.2,z=0.01",\n    "accleration,type=BNO055 x=2.3,y=3.2,z=0.02"\n  ]\n}\n')),Object(i.b)("p",null,"with the ",Object(i.b)("inlineCode",{parentName:"p"},"pubclient:questitto")," credentials and on the QuestDB UI you can see:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Automatic table creation based on InfluxDB line protocol measurement name",src:n(334).default})),Object(i.b)("p",null,"With the ",Object(i.b)("inlineCode",{parentName:"p"},"location")," and other ",Object(i.b)("inlineCode",{parentName:"p"},"tags")," from the line protocol inserted:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Columns created by QuestDB for acceleration Table",src:n(335).default})),Object(i.b)("p",null,"A simple query where I would like to know the acceleration value in the\n",Object(i.b)("inlineCode",{parentName:"p"},"kitchen")," for the ",Object(i.b)("strong",{parentName:"p"},"X-axis")," is as simple as:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-questdb-sql"}),"SELECT timestamp, x FROM acceleration\nWHERE location = 'kitchen';\n")),Object(i.b)("h2",{id:"nuggets"},"Nuggets"),Object(i.b)("p",null,"If you need to add/remove or adapt the Users or the ",Object(i.b)("inlineCode",{parentName:"p"},"telegraf.conf")," without\nbringing down the stack or the services within ",Object(i.b)("inlineCode",{parentName:"p"},"questitto")," simply use the\n",Object(i.b)("inlineCode",{parentName:"p"},"SIGHUP")," signal for the containers."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker kill --signal=SIGHUP mosquitto\n# OR\ndocker kill --signal=SIGHUP telegraf\n")),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://shantanoo-desai.github.io/posts/technology/nugget_mqtt_iot/"}),"my blog post")," for a detailed write up."),Object(i.b)("h2",{id:"repository"},"Repository"),Object(i.b)("p",null,"You can find the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/shantanoo-desai/questitto"}),"repository on GitHub"),". Please feel free to open Issues/PRs\nand ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://slack.https://fsharechat.github.io/"}),"join")," the Slack Community, the developers are really helpful\nthere!"))}l.isMDXComponent=!0},334:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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D3JXXzE+lconyPQcuTLv5SZlP5QXHOKumHyzvnButd7ycz+gmw9y4+suVZxVvsB2LvIGIqtK92XmeGuO7Oa9lKkiir3Ha1+mVXPo9/4GeUfdS7VqnArZerbO92r+fU9mhmJfC365ATpT5wd5eXds2F9xM4la0VzeHS/2fxgjE1M1w3xPQV7enb+xxsiN2te63kuQG153hZp/FKE1QS4dcRg90sKjvLmbfZQO596IkVo3BqnavpmYnrgcJ/srRz8SCvLytXMjHrnsVNVnk8vNlk2YAx4tD0WQecCKR6ium21Kz5H8TUEmP91b9QvGi1s/LBz1uzEIPKo6/l7WPEgvxYZdZwvhmInMkXu51OnRU7zmfHLkcNk8hlXrt8XAqauFW6lejcF7mrEOdKqaQV65pmfuvtSttH88GyvX9LR9o2lW9R2sym9PWaqxW3jeXc9AAtv3YMxNXJvnPPJE5X3MgUdGzSB3Le+OFd1r4vlXt7fUiu41bd9gFuNukOue050jyPW9FDsGhyMzWTGPITsTk2MXa5z/Bh4ldYMMADw4ggwACRBkAEiAIANAAgQZABIgyACQAEEGgAQIMgAkQJABIAGCDAAJEGQASIAgA0ACBBkAEiDIAJAAQQaABAgyACRAkAEgAYIMAAkQZABIgCADQAIEGQASIMgAkABBBoAECDIAJECQASABggwACRBkAEiAIANAAgQZABIgyACQAEEGgAQIMgAkQJABIAGCDAAJEGQASIAgA0ACBBkAEiDIAJAAQQaABAgyACRAkAEgAYIMAAkQZABIgCADQAIEGQASIMgAkABBBoAECDIAJECQASABggwACRBkAEiAIANAAgQZABIgyACQAEEGgAQIMgAkQJABIAGCDAAJEGQASIAgA0ACBBkAEiDIAJAAQQaABAgyACRAkAEgAYIMAAkQZABIgCADQAIEGQASIMgAkABBBoAECDIAJECQASABggwACRBkAEiAIANAAgQZABIgyACQAEEGgAQIMgAkQJABIAGCDAAJEGQASIAgA0ACBBkAEiDIAJAAQQaABAgyACRAkAEgAYIMAAkQZABIgCADQAIEGQASIMgAkABBBoAECDIAJECQASABggwACRBkAEiAIANAAgQZABIgyACQAEEGgAQIMgAkQJABIAGCDAAJEGQASIAgA0ACBBkAEiDIAJAAQQaABAgyACRAkAEgAYIMAAkQZABIgCADQAIEGQASIMgAkABBBoAECDIAJECQASABggwACRBkAEiAIANAAgQZABIgyACQAEEGgAQIMgAkQJABIAGCDAAJEGQASIAgA0ACBBkAEiDIAJAAQQaABAgyACRAkAEgAYIMAAkQZABIgCADQAIEGQASIMgAkABBBnJAF4EAAALsSURBVIAECDIAJECQASABggwACRBkAEiAIANAAgQZABIgyACQAEEGgAQIMgAkQJABIAGCDAAJEGQASIAgA0ACBBkAEiDIAJAAQQaABAgyACRAkAEgAYIMAAkQZABIgCADQAIEGQASIMgAkABBBoAECDIAJECQASABggwACRBkAEiAIANAAgQZABIgyACQAEEGgAQIMgAkQJABIAGCDAAJEGQASIAgA0ACBBkAEiDIAJAAQQaABAgyACRAkAEgAYIMAAkQZABIgCADQAIEGQASIMgAkABBBoAECDIAJECQASABggwACRBkAEiAIANAAgQZABIgyACQAEEGgAQIMgAkQJABIAGCDAAJEGQASIAgA0ACBBkAEiDIAJAAQQaABAgyACRAkAEgAYIMAAkQZABIgCADQAIEGQASIMgAkABBBoAECDIAJECQASABggwACRBkAEiAIANAAgQZABIgyACQAEEGgAQIMgAkQJABIAGCDAAJEGQASIAgA0ACBBkAEiDIAJAAQQaABAgyACRAkAEgAYIMAAkQZABIgCADQAIEGQASIMgAkABBBoAECDIAJECQASABggwACRBkAEiAIANAAgQZABIgyACQAEEGgAQIMgAkQJABIAGCDAAJEGQASIAgA0ACBBkAEiDIAJAAQQaABAgyACRAkAEgAYIMAAkQZABIgCADQAIEGQASIMgAkABBBoAECDIAJECQASABggwACRBkAEiAIANAAgQZABIgyACQAEEGgAQIMgAkQJABIAGCDAAJEGQASIAgA0ACBBkAEiDIAJAAQQaABAgyACRAkAEgAYIMAAkQZABIgCADQAIEGQASIMgAkABBBoAECDIAJECQASABggwACRBkAEiAIANAAgQZABIgyACQAEEGgAQIMgAkQJABIAGCDAAJEGQASIAgA0ACBBkAEiDIAJAAQQaABAgyACRAkAEgAYIMAAkQZABIgCADQAIEGQASIMgAkABBBoAECDIAJOD/A8GQ4yonnW6KAAAAAElFTkSuQmCC"},335:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/schema-e7e1daa3dce2ec1867b68c33fe9d3ec8.png"}}]);