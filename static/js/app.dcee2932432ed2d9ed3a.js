webpackJsonp([0],{"1BdK":function(t,e,s){t.exports=s.p+"static/img/activity4.5fcbfda.jpg"},"1SjA":function(t,e,s){t.exports=s.p+"static/img/expert4.2eddcf6.png"},"1mfP":function(t,e,s){t.exports=s.p+"static/img/employee6.b1d6ecd.jpg"},"4yh0":function(t,e){},"8SI2":function(t,e){},"9URH":function(t,e,s){t.exports=s.p+"static/img/employee8.0de8277.jpg"},BZdX:function(t,e,s){t.exports=s.p+"static/img/expert5.430e0a0.png"},DFui:function(t,e,s){t.exports=s.p+"static/img/WQR.25ea5aa.png"},FAvM:function(t,e,s){t.exports=s.p+"static/img/expert1.30eff4a.png"},Gnp7:function(t,e,s){t.exports=s.p+"static/img/volunteer3.3145cb5.jpg"},HLMz:function(t,e,s){t.exports=s.p+"static/img/employee4.6b730fd.jpg"},HURX:function(t,e,s){t.exports=s.p+"static/img/volunteer4.f7fde42.jpg"},HxQE:function(t,e,s){t.exports=s.p+"static/img/expert2.391220c.png"},L7fK:function(t,e,s){t.exports=s.p+"static/img/activity2.5af2ee1.jpg"},LXeV:function(t,e){},Lffw:function(t,e,s){t.exports=s.p+"static/img/web-logo.6828c3d.png"},LtcS:function(t,e){},Mj8Z:function(t,e,s){t.exports=s.p+"static/img/employee1.f680d19.jpg"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("tvR6");var a=s("qBF2"),i=s.n(a),n=s("7+uW"),r={name:"App",data:function(){return{isHid:!1}},methods:{handleSelect:function(t,e){console.log(t,e)},gotoHome:function(){location.href="/"}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-container",[a("el-header",[a("el-container",{staticClass:"headerd"},[a("a",{staticClass:"headlink",attrs:{href:"javascript:void(0)"},on:{click:t.gotoHome}},[a("img",{staticClass:"logo",attrs:{src:s("Lffw")}}),t._v(" "),a("img",{staticClass:"logos",attrs:{src:s("X10H")}})]),t._v(" "),a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":this.$route.fullPath,"router-mode":"horizontal",mode:"horizontal",router:!0},on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"/Home"}},[t._v("首页")]),t._v(" "),a("el-menu-item",{attrs:{index:"/Employees"}},[t._v("公司人事")]),t._v(" "),a("el-menu-item",{attrs:{index:"/Experts"}},[t._v("专家介绍")]),t._v(" "),a("el-menu-item",{attrs:{index:"/TimeLine"}},[t._v("历史活动")])],1),t._v(" "),a("div",{staticClass:"line"})],1)],1),t._v(" "),a("el-main",[a("router-view")],1)],1)],1)},staticRenderFns:[]};var c=s("VU/8")(r,l,!1,function(t){s("8SI2")},null,null).exports,o=s("/ocq"),v={data:function(){return{Desc:["助力健康中国2030，急救自救在我心","情怀化可视化立体化共享化","将“互帮互组、服务社群”的志愿者服务理念融入社区实践，","加强社区急救科普能力建设，","为社区急救能力提升贡献智慧和方案。"],acDesc:["公司下设社区急救服务站，业务上接受上级卫生行政主管部门指导，行政上接受公司管理。","社区急救服务站设站长 1 名，负责服务站日常工作，对外代表服务站，由公司任命。","社区急救服务站下设组织专员、宣传专员、财务专员、后勤专员各1 名，由社区急救服务站站长任命。","公司监事会下设监督委员会，成员由志愿者代表、捐赠方代表、","专业财务人员组成，负责社区急救服务站经费支出监督、急救器材采购审核。"],pict:[{src:s("gZAi"),path:""},{src:s("L7fK"),path:"/TimeLine"},{src:s("eCwG"),path:"/TimeLine"},{src:s("1BdK"),path:"/TimeLine"}]}},methods:{goto:function(t){this.$router.push(t)}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",{staticClass:"topmargin"},[t._v("桂林康泰医识健康服务有限公司")]),t._v(" "),a("div",{staticClass:"pblock"},[a("div",{staticClass:"carousel"},[a("el-carousel",{attrs:{trigger:"click",height:"350px",type:"card"}},t._l(t.pict,function(t){return a("el-carousel-item",{key:t.id},[a("router-link",{attrs:{to:t.path}},[a("img",{staticClass:"img1",attrs:{src:t.src}})])],1)}),1)],1)]),t._v(" "),a("h3",{staticClass:"demonstration"},[t._v("公司宗旨")]),t._v(" "),a("div",{staticClass:"Desctext"},t._l(t.Desc,function(e){return a("p",{key:e},[t._v(t._s(e))])}),0),t._v(" "),a("h3",{staticClass:"demonstration"},[t._v("公司人事")]),t._v(" "),a("div",{staticClass:"Desctext"},[t._l(t.acDesc,function(e){return a("p",{key:e},[t._v(t._s(e))])}),t._v(" "),a("el-button",{attrs:{type:"success",round:""},on:{click:function(e){return t.goto("/Employees")}}},[a("font-awesome-icon",{staticClass:"icon",attrs:{icon:"briefcase",size:"lg"}}),t._v(" 公司人员介绍")],1),t._v(" "),a("el-button",{attrs:{type:"success",round:""},on:{click:function(e){return t.goto("/Experts")}}},[a("font-awesome-icon",{staticClass:"icon",attrs:{icon:"id-card",size:"lg"}}),t._v(" 公司专家介绍")],1)],2),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"pblock"},[a("el-popover",{attrs:{placement:"top-start",title:"微信公众号",trigger:"click"}},[a("div",{staticClass:"iblock"},[a("img",{staticClass:"QR",attrs:{src:s("DFui")}})]),t._v(" "),a("el-button",{attrs:{slot:"reference",type:"success",plain:""},slot:"reference"},[t._v("微信公众号")])],1)],1),t._v(" "),a("br"),t._v(" "),a("footer",[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"关注微信公众号，了解更多信息",placement:"top-start"}},[a("span",{staticClass:"copyright"},[t._v(" 2019 © 桂林恒悦健康管理服务有限公司 Powered by "),a("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue.js")]),t._v(" & "),a("a",{attrs:{href:"https://element.eleme.io/"}},[t._v("Element UI")])])])],1)])},staticRenderFns:[]};var p=s("VU/8")(v,d,!1,function(t){s("q8rF")},"data-v-ff80883c",null).exports,_={name:"HelloWorld2",el:"#btn",methods:{backHome:function(){location.href="/"}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-container",[e("el-main",[e("div",{staticClass:"btn",attrs:{id:"btn"}},[e("h2",[this._v("404")]),this._v(" "),e("h1",[this._v("啊呀，这个页面可能在火星呢...")]),this._v(" "),e("el-button",{attrs:{type:"primary",plain:""},on:{click:this.backHome}},[this._v("返回主页")])],1)])],1)},staticRenderFns:[]};var u=s("VU/8")(_,m,!1,function(t){s("4yh0")},"data-v-28829530",null).exports,f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"viewbox"},[a("h1",{staticClass:"headline"},[t._v("专家介绍")]),t._v(" "),a("el-row",{attrs:{gutter:27}},[a("el-col",{attrs:{span:27}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("李小悦")]),t._v(" "),a("h4",[t._v("监督委员会兼专家委员会负责人")])]),t._v(" "),a("img",{staticClass:"hidden-sm-and-down",attrs:{src:s("FAvM")}}),t._v(" "),t._l(t.expert1,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:27}},[a("el-col",{attrs:{span:8}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("黄子通")]),t._v(" "),a("h4",[t._v("专家组成员")])]),t._v(" "),a("img",{staticClass:"hidden-sm-and-down",attrs:{src:s("HxQE")}}),t._v(" "),t._l(t.expert2,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("李恒")]),t._v(" "),a("h4",[t._v("专家组成员")])]),t._v(" "),a("img",{staticClass:"hidden-sm-and-down",attrs:{src:s("wMgS")}}),t._v(" "),t._l(t.expert3,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("吴智鑫")]),t._v(" "),a("h4",[t._v("专家组成员")])]),t._v(" "),a("img",{staticClass:"hidden-sm-and-down",attrs:{src:s("1SjA")}}),t._v(" "),t._l(t.expert4,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:27}},[a("el-col",{attrs:{span:16}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("张洪涛")]),t._v(" "),a("h4",[t._v("专家组成员")])]),t._v(" "),a("img",{staticClass:"hidden-sm-and-down",attrs:{src:s("BZdX")}}),t._v(" "),t._l(t.expert5,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("王永恒")]),t._v(" "),a("h4",[t._v("志愿者委员会负责人")])]),t._v(" "),a("img",{staticClass:"hidden-sm-and-down",attrs:{src:s("ePAD")}}),t._v(" "),t._l(t.expert6,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1)],1),t._v(" "),a("br"),a("br"),a("br"),t._v(" "),a("div",{staticClass:"pblock"},[a("el-popover",{attrs:{placement:"top-start",title:"微信公众号",trigger:"click"}},[a("div",{staticClass:"iblock"},[a("img",{staticClass:"QR",attrs:{src:s("DFui")}})]),t._v(" "),a("el-button",{attrs:{slot:"reference",type:"success",plain:""},slot:"reference"},[t._v("微信公众号")])],1)],1),t._v(" "),a("el-footer",[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"关注微信公众号，了解更多信息",placement:"top-start"}},[a("span",{staticClass:"copyright"},[t._v(" 2019 © 桂林恒悦健康管理服务有限公司 Powered by "),a("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue.js")]),t._v(" & "),a("a",{attrs:{href:"https://element.eleme.io/"}},[t._v("Element UI")])])])],1)],1)},staticRenderFns:[]};var g=s("VU/8")({data:function(){return{expert1:["现任遵义医科大学附属第五（珠海）医院重症医学科副主任、博士、重症医学/急诊医学硕士研究生导师。","2012 年至 2019 年历任东莞市人民医院重症医学科教学秘书、东莞市塘厦医院重症医学科副主任、桂林医学院第二附属医院重症医学科副主任、桂林医学院第二附属医院急诊科副主任、急诊医学/重症医学硕士研究生导师、桂林医学院急诊医学学术骨干、急诊医学住院医师规培基地教学主任。","对脓毒症相关急性肾损伤的早期诊断和治疗、严重脓毒症的免疫调理治疗、血糖变异度对脑出血术后生存率的预测、高危外科术后有创血流动力学和氧代谢监测、病毒性心肌炎有丰富的诊治经验，尤其擅长侵袭性真菌病、感染相关急性肾损伤、血流动力学和氧代谢监测。近年来在心跳骤停院前急救流程优化及复苏后集束化治疗、心跳骤停氧代谢监测、急救科普、心跳骤停流行病学调查等方面取得一定成绩。","主持国家自然科学基金、广西自然科学基金、广西科技基地和人才专项、国家级教育发展研究规划重点课题在内科研课题10 余项。发表 SCI 论著 4 篇、中文期刊 40 余篇，主编专著《心肺脑 复苏基础与临床》《心肺复苏学》、参编专著 2 部。","担任广西科技计划评审专家，北大核心期刊《实用医学杂志》《广东医学》审稿专家及国家级期刊《中国当代医药》《中国医学创新》编委。","目前担任广西医师协会科普分会副主任委员、中国民族医药学会科普分会常务理事、中国心胸血管麻醉学会心肺复苏委员会广西桂林市办事处主任、中国心胸血管麻醉学会急救与复苏分会全国委员、中国研究型医院学会卫生应急学专业委员会委员、广西医学会科普分会委员、广西医师协会急诊医师分会委员、广西医学救援协会理事、广东省肝脏病学会重症医学分会委员、广东省生物医学工程学会远程医疗分会委员。","曾获第七届东莞市优秀科技工作者称号。"],expert2:["中山大学二级教授、急诊/生物医学工程双博导，中山大学心肺脑复苏研究所所长、中大名医，主要研究方向为：心肺脑复苏和急危重症。","现任世界华人急诊医师协会副会长、中国心肺复苏联盟理事长，粤港澳大湾区急诊医师联盟主任、广东省医师协会急诊医师分会主任委员，广东省医疗大数据工程技术研究中心主任，广东省急诊医学医疗质量控制中心主任， 《岭南急诊医学杂志》主编等。","累计发表论著 220 篇、SCI26 篇；主编专著 10 部、国家规划教材 5部。","先后获得首届中国急诊医师奖和首届急诊事业坚守奖，获省部级科技奖 7 项、国家级专利 8 项、抗非典一等功、广东省五一劳动奖章。"],expert3:["中山大学急诊医学博士，副主任医师。现任中山大学附属东华医院心血管医学部秘书、东华医院松山湖院区心血管内科一区副主任，中山大学和赣南医学院硕士研究生导师，广东省生物医学工程学会远程医疗分会委员，并担任 《PLOSONE》、《实用医学杂志》、《岭南急诊医学杂志》审稿专家。","对特殊人群心跳骤停流行病学调查、心跳骤停氧代谢监测、心跳骤停预后标志物筛查、院前心肺复苏社会化和急救科普培训、短时程复合亚低温改善长时间室颤动物模型预后、治疗性亚低温对缺血再灌注损伤神经功能保护作用机制、心肺复苏质量监测有丰富的经验。","主持/参与包括国家自然科学 基金、广东省自然科学基金在内科研课题 10 余项。发表 SCI 收录论 文 8 篇，中文期刊 20 余篇，主编专著 2 部，参编专著 1 部，获实用 新型专利授权 1 项。"],expert4:["医学博士，佛山市中医院重症医学科、临床技能 培训中心副主任医师。美国亚利桑那大学（TheUniversityofArizona）、 亚利桑那州急救与创伤中心（Arizona Department of Health Service BureauofEMS&TraumaSystem）访问学者，中国医师协会急诊医师分会心肺复苏学组委员、中国中西医结合学会第八届急救医学专业委员会青年委员、中国医学救援协会心血管急救分会理事、吴阶平基金会模拟医学部委员、广东省中西医结合学会急救医学专业委员会委员、灾害医学专业委员会委员、广东省基层医药学会重症医学专业委员会委员、佛山市中西医结合学会急救专业委员会常务委员兼秘书长、佛山市中医院创伤中心副秘书长，NAEMT 美国院前创伤生命救 援（PHTLS）导师、美国心脏病协会（AHA）BLS 主任导师和 ACLS导师。"],expert5:["在职研究生，主管护师，现任遵义医科大学珠海校区护理学系急危重症护理学教研室负责人，第五附属（珠海）医院重症医学科护长，遵义医科大学珠海校区护理学研究生临床实践导师。","2009 年本科毕业于遵义医科大学护理系，历任遵义医科大学第五附属（珠海）医院重症医学科教学组长、护理组长。珠海市优秀护士、斗门区优秀护士、遵医五院十佳管理者、遵医五院先进教师。曾到香港医院管理局进修学院、广州医科大学附属第一医院（广州呼吸疾病研究所）、南方医科大学珠江医院及遵义医科大学附属医院等机构进修学习。","对重症患者并发症预防、人工气道管理、血流动力学监护、血液净化护理及 ICU 院感防控有较丰富的经验。","开展外周动脉 置管、血液净化串联等新技术新项目 3 项；开展循证护理，进行“降 低压疮发生率、降低 VAP 发生率、降低造影剂外渗发生率及非计划性拔管发生率”等质量改善项目，提高护理质量；率先在我院开展综合病例综合能力考核的新护士准入考核。","主持珠海市卫健局医学科研课题 1 项，参与国家自然科学基金项目、中国管理科学研究院教育发展研究规划课题、珠海市卫健局医学科研项目、省护理学会课题项目 4 项，第一作者发表论文 10 篇，参编专著 2 部，实用新型专利 1 项，担任《国际护理研究》审稿人，曾获广东省护理学会老年护理分会创新项目大赛三等奖。","参与遵义医科大学珠海校区护理系本科生急危重症护理学理论和实验授课及临床实践带教，参与指导护理系研究生临床实践。参与国家级、省级及市级继续教育培训班、珠海市科协科技月项目授课 5 次。目前担任广东省卫生经济学会护理分会委 员、广东省护士协会肺康复分会委员、珠海市护士协会 ICU 护士分会常务委员。"],expert6:["健康管理师，本科学历，珠海市恒悦健康管理服务有限公司总经理。","担任中国中医药信息学会智能诊疗分会理事，中国心胸血管麻醉学会心肺复苏委员会广西桂林办事处副主任。"]}}},f,!1,function(t){s("suN7")},null,null).exports,h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"viewbox"},[a("h1",{staticClass:"headline"},[t._v("历史活动")]),t._v(" "),a("div",{staticClass:"block"},[a("el-timeline",t._l(t.passages,function(e){return a("el-timeline-item",{key:e.id,attrs:{timestamp:e.time,placement:"top"}},[a("el-card",[a("h4",[t._v(t._s(e.title))]),t._v(" "),t._l(e.content,function(e){return a("p",{key:e},[t._v(t._s(e))])})],2)],1)}),1)],1),t._v(" "),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),t._v(" "),a("div",{staticClass:"pblock"},[a("el-popover",{attrs:{placement:"top-start",title:"微信公众号",trigger:"click"}},[a("div",{staticClass:"iblock"},[a("img",{staticClass:"QR",attrs:{src:s("DFui")}})]),t._v(" "),a("el-button",{attrs:{slot:"reference",type:"success",plain:""},slot:"reference"},[t._v("微信公众号")])],1)],1),t._v(" "),a("br"),t._v(" "),a("el-footer",[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"关注微信公众号，了解更多信息",placement:"top-start"}},[a("span",{staticClass:"copyright"},[t._v(" 2019 © 桂林恒悦健康管理服务有限公司 Powered by "),a("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue.js")]),t._v(" & "),a("a",{attrs:{href:"https://element.eleme.io/"}},[t._v("Element UI")])])])],1)],1)},staticRenderFns:[]};var C=s("VU/8")({data:function(){return{passages:[{id:4,title:"2019 年科普活动总结",time:"2019/12/31",content:["1. 2018 年 12 月29 日举行中国心胸血管麻醉学会心肺复苏委员会广西桂林市办事处成立大会，中国医师协会急诊医师分会黄子通副会长受聘办事处顾问，李小悦当选办事处主任，吕侣、陈丽娟、王永恒三位专家当选副主任，张玉奇、尹靖怡当选办事处秘书，20名专家组成学术委员会。同期举办心肺复苏培训班和“心脑血管急症科普进社区”活动。2019 年，继续急救科普社会化工作，立足基层，努力做好桂林市科普活动的布局和开展。","2. 根据公安部 2019 年7 月 27 日印发的《关于切实加强现场培训急救训练工作的通知》有关要求，由公安部与中国心胸血管麻醉学会联合开展“心手相连，点亮生命”——现场急救训练进警营活动。经与广西壮族自治区公安厅沟通，由中国心胸血管麻醉学会心肺复苏委员会广西桂林市办事处承担广西壮族自治区范围内公安系统的培训工作。2019 年10 月12 日在广西南宁举行启动仪式。公安厅党委委员、政治部主任宾正迎，中国心胸血管麻醉学会广西桂林市办事处主任李小悦副教授等领导出席启动仪式。同期举办“心脑血管急症科普进社区”活动。","3. 为进一步促进高质量心肺复苏技术在社区的推广、切实提示心脏骤停患者的院外抢救成功率，我们在心肺复苏技术社区培训过程中引入LinkCPR 人工按压质量反馈系统，运用该系统的实时CPR 质量监测和反馈功能，提高学员心肺复苏技术的培训效果、改善心肺复苏质量，切实提高心脑血管急症抢救成功率、降低致残率。本活动面向社区居民、志愿者及厂矿职工，将邀请有丰富临床经验的心脑血管急症领域专家进行宣教和培训，直接受益人口超过 10 万。","4. 出版专著《心肺复苏学》1 部，立项自治区级教学研究与改革项目2 项。"]},{id:3,title:"2018 年“心脑血管急症科普进社区”活动总结",time:"2018/12/31",content:["2018 年科普团队继续以“普及心脑血管急症知识、推广高质量心肺复苏术”为己任，依托社区、面向基层，开展一系列《心脑血管急症科普进社区》活动，取得良好的社会效益。","1. 举办《心脑血管急症科普进社区》系列活动八场，足迹遍布临桂奥林匹克花园社区、山水凤凰城社区、两江机场、社会福利院、中建八局山水凤凰城项目部，参与活动人员超过 2000 人，包括青年学生、社区工作人员、社区居民、厂矿职工等，收益人群近 10 万人。","2. 举办广西区医学继续教育项目《心血管急症与心肺脑复苏新进展》学习班暨第一届桂粤急危重症青年论坛，邀请来自广州、东莞、桂林、梧州、贺州等地从事心血管急症及心肺脑复苏领域的专家学者授课，近 200 名来自桂林市、柳州市、梧州市和贺州市的基层医务工作者参与，进一步扩大科普活动的宣传力度。","3. 培养兼职科普宣讲人员 20 人。","4. 出版《心肺脑复苏基础与临床》专著 1 部，第四篇中将科普团队在桂林开展心脑血管急症科普活动的经验归纳总结并进行推广。","5. 为进一步推动桂林市心脑血管急症科普基地建设，项目负责人将《关于加强社区心脑血管急症科普基地建设的建议》作为九三学社桂林医学院支社代表提案上报九三学社市委会。","6. 项目负责人当选中国民族医药学会科普分会常务委员、广西医师协会科普分会副主任委员、广西医学会科普分会委员；项目负责人牵头成立中国心胸血管麻醉学会心肺复苏全国委员会桂林办事处，并担任主任委员，进一步扩大桂林科普活动的影响力。"]},{id:2,title:"2017 年“心脑血管急症科普进社区”活动总结",time:"2017/9/9",content:["为增强我镇中心小学教职员工对心脑血管急症的认知水平，进一步提高教职员工对急危重症的自救互救能力，根据今年“全国科普日”活动安排和我院科普活动计划，我院重症医学科于 9 月 21 日在塘厦中心小学成功举办《心脑血管急症科普进社区》讲座，与广大教职员工面对面宣传心脑血管急症和心肺复苏医学知识，共 80名教职员工参与理论授课和技能培训，覆盖人口 6000 人。","全球所有的死亡原因数据调查中，据 WHO 世界卫生组织数据显示，在 2015年全球 5640 万例死亡中，半数以上（54%）由 10 个原因导致。缺血性心脏病和中风是世界最大的杀手，2016 年共造成 1500 万例死亡。这两种疾病在过去 15 年中一直是全球的主要死亡原因。以心血管急症中的心跳骤停为例，我国每年心跳骤停发生率为每年 54.4 人/10 万人，而仅有不到 1%患者存活，主要原因是我国目前医院外心跳骤停现场目击者实施心肺复苏的比例仅为 10%，也远低于欧美、日本等发达国家 90% 的水平。同样是属于心脑血管急症的急性脑梗死，由于错失溶栓“时间窗”而出现永久性肢体运动障碍的比例高达 70%以上，严重影响社区居民生活质量。","心肺复苏技术是心脏骤停患者最简单有效的治疗手段。当发生心搏骤停时，旁观者如能在意外发生后及时实施有效的心肺复苏，可显著提高患者生存率。2015 年 AHA 心肺复苏指南和 ERC 心肺复苏指南要求对心脏骤停患者实施高质量心肺复苏（High Quality CPR，HQ-CPR），即：按压频率达到 100~120 次/分钟，按压深度大于 5cm。2013 年 AHA 专家共识指出，确保高质量 CPR、优化 CPR 质量、预防低质量 CPR 是提高心脏复苏效果的重点工作。要达到高质量心肺复苏，按压深度和按压频率的指示和反馈非常重要。目前心肺复苏技术的社区培训大多为理论授课、教员演示和对学员进行模拟环境下的操作考核，学员考核是否通过多由教员主观评价，缺乏标准和量化的评价指标，不利于学员真正掌握高质量的心肺复苏技术，不利于该项技术在社区的开展。为进一步促进高质量心肺复苏技术在社区的推广、切实提示心脏骤停患者的院外抢救成功率，我们在心肺复苏技术社区培训过程中引入 LinkCPR 人工按压质量反馈系统，运用该系统的实时 CPR 质量监测和反馈功能，提高学员心肺复苏技术的培训效果、改善心肺复苏质量，切实提高心脑血管急症抢救成功率、降低致残率。"]},{id:1,title:"2016 年急救科普活动总结",time:"2016/12/31",content:["1. 2016 年 4 月 24 日东莞市塘厦医院重症医学科联合东莞东华医院重症医学科在塘厦镇社会事务大楼成功举办“心脑血管急症科普进社区”第一场讲座。","2. 2016 年 4 月 26 日东莞市塘厦医院重症医学科联合东莞东华医院重症医学科在塘厦镇社会社区卫生服务中心成功举办“心脑血管急症科普进社区”第二场讲座。","3. 2016 年 5 月 12 日东莞市塘厦医院重症医学科参加“塘厦镇 2016 年全国防灾减灾日现场活动”暨“心脑血管急症科普进社区”第三场讲座，为全镇机关、各社区人员讲授心肺复苏和止血包扎技术。","4. 2016 年8 月 14 日东莞市塘厦医院主办 2015 年东莞市科普项目暨首届东莞东部急危重症论坛：东莞市东南部片区镇级医院和社区卫生服务中心急危重症系列讲座。","5. 2016 年 9 月 17 日东莞市塘厦医院重症医学科联合东莞康华医院急诊科发在凤岗镇兴贸小区和中国邮政储蓄银行昌盛营业所成功举办“心脑血管急症科普进社区”第四场讲座。本讲座也是 2016 年全国科普日活动。"]}]}}},h,!1,function(t){s("LXeV")},null,null).exports,x=(s("sfy8"),{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"viewbox"},[a("h1",{staticClass:"headline"},[t._v("公司人事介绍")]),t._v(" "),a("el-row",{attrs:{gutter:27}},[a("el-col",{attrs:{span:7}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("李万里")]),t._v(" "),a("h4",[t._v("总经理")])]),t._v(" "),a("img",{staticClass:"imglimits hidden-sm-and-down",attrs:{src:s("Mj8Z")}}),t._v(" "),t._l(t.employee1,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1),t._v(" "),a("el-col",{attrs:{span:10}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("曾春瑛")]),t._v(" "),a("h4",[t._v("业务部负责人")])]),t._v(" "),a("img",{staticClass:"imglimits hidden-sm-and-down",attrs:{src:s("plSF")}}),t._v(" "),t._l(t.employee2,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1),t._v(" "),a("el-col",{attrs:{span:7}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("张恒")]),t._v(" "),a("h4",[t._v("行政部负责人")])]),t._v(" "),a("img",{staticClass:"imglimits hidden-sm-and-down",attrs:{src:s("YmyE")}}),t._v(" "),t._l(t.employee3,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:27}},[a("el-col",{attrs:{span:9}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("张玉奇")]),t._v(" "),a("h4",[t._v("财务部负责人")])]),t._v(" "),a("img",{staticClass:"imglimits hidden-sm-and-down",attrs:{src:s("HLMz")}}),t._v(" "),t._l(t.employee4,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("尹靖怡")]),t._v(" "),a("h4",[t._v("后勤部负责人")])]),t._v(" "),a("img",{staticClass:"imglimits hidden-sm-and-down",attrs:{src:s("xgyi")}}),t._v(" "),t._l(t.employee5,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1),t._v(" "),a("el-col",{attrs:{span:7}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("李木生")]),t._v(" "),a("h4",[t._v("市场部负责人")])]),t._v(" "),a("img",{staticClass:"imglimits hidden-sm-and-down",attrs:{src:s("1mfP")}}),t._v(" "),t._l(t.employee6,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:27}},[a("el-col",{attrs:{span:8}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("康凌垲")]),t._v(" "),a("h4",[t._v("大客户部负责人")])]),t._v(" "),a("img",{staticClass:"imglimits hidden-sm-and-down",attrs:{src:s("kGe8")}}),t._v(" "),t._l(t.employee7,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("蓝惠茹")]),t._v(" "),a("h4",[t._v("党支部负责人")])]),t._v(" "),a("img",{staticClass:"imglimits hidden-sm-and-down",attrs:{src:s("9URH")}}),t._v(" "),t._l(t.employee8,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1)],1),t._v(" "),a("h1",{staticClass:"headline"},[t._v("志愿者介绍")]),t._v(" "),a("el-row",{attrs:{gutter:27}},[a("el-col",{attrs:{span:7}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("张子枭")])]),t._v(" "),a("img",{staticClass:"imglimits hidden-sm-and-down",attrs:{src:s("Ovf0")}}),t._v(" "),t._l(t.volunteer1,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1),t._v(" "),a("el-col",{attrs:{span:7}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("刘洋")])]),t._v(" "),a("img",{staticClass:"imglimits hidden-sm-and-down",attrs:{src:s("dST7")}}),t._v(" "),t._l(t.volunteer2,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1),t._v(" "),a("el-col",{attrs:{span:10}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("韦逸芳")])]),t._v(" "),a("img",{staticClass:"imglimits hidden-sm-and-down",attrs:{src:s("Gnp7")}}),t._v(" "),t._l(t.volunteer3,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:27}},[a("el-col",{attrs:{span:16}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("杨金华")])]),t._v(" "),a("img",{staticClass:"imglimits hidden-sm-and-down",attrs:{src:s("HURX")}}),t._v(" "),t._l(t.volunteer4,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1),t._v(" "),a("el-col",{attrs:{span:7}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("覃思月")])]),t._v(" "),a("img",{staticClass:"imglimits hidden-sm-and-down",attrs:{src:s("wBKm")}}),t._v(" "),t._l(t.volunteer5,function(e){return a("div",{key:e,staticClass:"margintop align-left"},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1)],1),t._v(" "),a("br"),a("br"),a("br"),t._v(" "),a("div",{staticClass:"pblock"},[a("el-popover",{attrs:{placement:"top-start",title:"微信公众号",trigger:"click"}},[a("div",{staticClass:"iblock"},[a("img",{staticClass:"QR",attrs:{src:s("DFui")}})]),t._v(" "),a("el-button",{attrs:{slot:"reference",type:"success",plain:""},slot:"reference"},[t._v("微信公众号")])],1)],1),t._v(" "),a("br"),t._v(" "),a("el-footer",[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"关注微信公众号，了解更多信息",placement:"top-start"}},[a("span",{staticClass:"copyright"},[t._v(" 2019 © 桂林恒悦健康管理服务有限公司 Powered by "),a("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue.js")]),t._v(" & "),a("a",{attrs:{href:"https://element.eleme.io/"}},[t._v("Element UI")])])])],1)],1)},staticRenderFns:[]});var y=s("VU/8")({data:function(){return{employee1:["临床医学本科在读学生，中国心胸血管麻醉学会会员，中国心胸血管麻醉学会心肺复苏委员会广西桂林市办事处讲师团成员，广西红十字救护员，桂林医学院心肺复苏学培训员。","19年广西自治区区级大学生创业创新项目《血压变异度对肺源性心脏病患者远期生存率的预测价值》负责人，曾参与由公安部与中国心胸麻醉学会联合开展“心手相连，点亮生命”——现场急救训练进警营活动。"],employee2:["桂林医学院护理学院2018级本科在读学生，中国心胸血管麻醉学会心肺复苏委员会广西桂林市办事处讲师团成员、广西公安急救训练服务队队员。","主持课题《基于社区的“互联网+护理”模式创新与实践》获 2019 年自治区级大学生创新创业训练计划项目立项。发表论文《分级诊疗背景下西部欠发达地区社区卫生服务站面临的困境及对策》1 篇，参编专著《心肺复苏学》。主持创业项目《基于人工智能平台的“互联网+”社区康养模式创新》获 2019年创享高新大学生创新创业大赛暨桂林国家科技园大学生创业项目三等奖。2019年5月获得红十字会急救技能操作大赛一等奖。","2019年9月在桂林医学院临桂校区参加对2019级新生战地医疗救护培训。获“2018-2019学年社会积极分子”称号。2019年作为讲师团成员参加由公安部与中国心胸麻醉学会联合开展“心手相连，点亮生命”——现场急救训练进警营活动。"],employee3:["临床医学（免费医学生）大二学生，中国心胸血管麻醉学会会员，中国心胸血管麻醉学会心肺复苏委员会广西桂林市办事处讲师团成员，2019年桂林医学院暑期实践先进个人，班级班长。","参与编写《心肺复苏学》。参与由公安部与中国心胸麻醉学会联合开展“心手相连，点亮生命”——现场急救训练进警营活动。"],employee4:["桂林医学院研究生学院2017级急诊医学专业型硕士研究生在读，桂林医学院附属医院规培住院医师中国心胸血管麻醉学会心肺复苏委员会广西桂林市办事处秘书、广西公安急救训练服务队队员，","2019年5月获心肺复苏培训讲师资格，参与国家自然科学基金项目1项，以第三完成人获广西自然科学基金1项，参与自治区级本科及研究生教学改革工程项目2项，参与广西科技基地与人才专项项目1项，以第五完成人获东莞市社会发展重点项目1项，以第二完成人获广西高校中青年教师基础能力提升项目1项、广西医疗卫生适宜技术开发与推广应用项目1项，参与桂林市科普项目2项。以共同第一作者发表论著1篇；第二作者发表论著5篇，其中SCI论著1篇，国家级期刊4篇；以第五作者发表论著2篇；以第一作者在投文章两篇，以主要编者身份出版专著《心肺脑复苏基础与临床》，以编者身份出版专著《心肺复苏学》.2018年，在急诊全国年会上作口头汇报；2018年，在省级学术会议中授课"],employee5:["桂林医学院研究生学院2018级急诊医学专业型硕士研究生在读，桂林医学院附属医院规培住院医师，中国心胸血管麻醉学会心肺复苏委员会广西桂林市办事处秘书、广西公安急救训练服务队队员，2019年5月获心肺复苏培训讲师资格、11月获ITLS国际创伤生命支持高级课程提供者证书。","参与国家自然科学基金项目1项，参与广西科技基地与人才专项1项；参与自治区级本科教学改革工程项目1项，指导大学生创新创业训练计划项目3项，其中国家级1项，自治区级2项；获得桂林医学院特色高水平本科教育研究优秀论文三等奖；第二作者参与国家级大会发言1次、壁报交流2次；参加国家级会议4次；参与省级大会发言1次。","第一作者发表两篇，录用一篇；第三作者发表论文1篇；第四作者发表1篇。参与编写《心肺复苏学》专著一本。"],employee6:["桂林医学院研究生学院2019级急诊医学专业型硕士研究生在读，桂林医学院附属医院规培住院医师，中国心胸血管麻醉学会心肺复苏委员会广西桂林市办事处讲师团成员、广西公安急救训练服务队队员，桂林医学院研究生会宣传部干事，桂林医学院研究生院“医路随行”志愿者协会生活部干事，参与桂林医学院附属医院2020年第一期美国心脏协会（AHA）基础生命支持（BLS）学员培训班并获得BLS学员证。","参与编写《心肺复苏学》专著一本。"],employee7:["桂林医学院研究生学院2019级急诊医学专业型硕士研究生在读，桂林医学院附属医院规培住院医师，中国心胸血管麻醉学会心肺复苏委员会广西桂林市办事处讲师团成员、广西公安急救训练服务队队员。","第一作者已录用论文《长链非编码RNA介导脓毒症发病机制的研究进展》将于2020.05发表于《实用医学杂志》。参与编写《心肺复苏学》专著一本。"],employee8:["桂林医学院护理学院2011级国护本科班毕业，桂林医学院临床医学院辅导员，临床团委和临床新媒、临床艺术团的指导老师。曾任桂林医学院学生会副主席，护理学院学生会副主席，创立护理学院圣洁艺术团并任第一任团长，青马工程卓越班第一期学员。","曾获广西区优秀团员、广西区“三下乡”社会实践先进个人、桂林医学院优秀学子、桂林医学院青年五四奖章。多次获桂林医学院优秀学生干部、优秀共青团干部、优秀共青团员等荣誉称号。"],volunteer1:["桂林医学院临床医学本科在读学生，中国红十字救护员。获得中国人文医学执业技能资格证，已通过英语四级，计算机一级。"],volunteer2:["桂林医学院临床医学本科在读学生。曾任人文解剖社信息部理事，临床院学生会信息部助理。"],volunteer3:["桂林医学院临床医学本科在读学生，共青团桂林医学院临床医学院委员会秘书部干事，桂林医学院临床医学院学生委员会秘书长。","2018年获全国大学生英语等级考试四级证书，临床医学院“优秀迎新工作者”称号；2019年获桂林医学院基础医学院第三届人体寄生虫实验创意大赛暨绘图比赛优秀奖；2018-2019学年获桂林医学院“优秀共青团干部”、“优秀学生干部”、“社会工作积极分子”称号。"],volunteer4:["桂林医学院临床医学本科在读学生，曾任人文解剖社会长、青年新媒体中心行政公关部助理；临床医学院艺术团礼仪队队员、红十字会会员、校书画协会会员、乒乓球协会会员、青年志愿者会员。已获全国大学英语四级、全国计算机等级考试二级证书。","2017-2018学年荣获国家励志奖学金、三等奖学金；获评三好学生、临床医学院优秀共青团员；2018年全国大学生英语竞赛NECCS优秀奖，2017年桂林医学院临床医学院“炫起来，正青春”新生才艺大赛三等奖、最佳人气奖。","2018-2019学年荣获国家奖学金、一等奖学金；获评三号学生、临床医学院优秀共青团员；2018年“外研社杯全国英语阅读大赛”校级初赛三等奖，第十届（2018）广西翻译大赛三等奖，2018年环跑校园资助政策知识竞赛比赛二等奖，2018年临桂临床医学院第二届少数民族传统竞技三人板鞋赛三等奖；","2019年桂林医学院第二届“宏科杯”解剖学标本制作比赛三等奖，2019年基础医学院第三届人体寄生虫实验创意大赛暨微课比赛优秀奖，“2018年桂林银行桂林国际马拉松”志愿者服务证书，2019年桂林医学院田径运动会“优秀青年志愿者”，2019年“逐梦杯”三人斗牛篮球赛亚军。"],volunteer5:["桂林医学院临床医学本科在读学生。曾任桂林医学院人文解剖社信息技术部理事、桂林医学院宿舍管理委员会策划部助理、桂林医学院演讲与口才协会信息部助理。桂林医学院青年志愿者协会会员、乒乓球协会会员。","获中国医师人文医学职业技能资格证书和结业证书；2019年第一届“于泽杯”形态学科普美文二等奖，桂林医学院临床医学院2017年“炫起来，正青春”新生才艺大赛三等奖、最佳创意奖，2019年基础医学院人体寄生虫实验创意大赛暨微课比赛三等奖。","2019年环广西公路自行车世界巡回赛自愿者，2019年桂林国际马拉松医疗自愿者。"]}}},x,!1,function(t){s("LtcS")},null,null).exports;n.default.use(o.a);var b=new o.a({routes:[{path:"/",redirect:"/Home"},{path:"/Home",name:"主页",component:p,meta:{title:"恒悦健康管理"}},{path:"/404",name:"404",component:u,meta:{title:"404页"}},{path:"/Experts",name:"专家介绍",component:g,meta:{title:"专家介绍"}},{path:"/TimeLine",name:"历史活动",component:C,meta:{title:"历史活动"}},{path:"/Employees",name:"公司人事",component:y,meta:{title:"公司人事"}},{path:"*",redirect:"/404"}]}),k=s("C/JF"),w=s("fhbW"),j=s("Yu89"),H=s("DfMW"),S=s("1e6/");n.default.config.productionTip=!1,n.default.use(i.a),k.c.add(w.a,j.a,H.a),n.default.component("font-awesome-icon",S.a),n.default.component("font-awesome-layers",S.b),n.default.component("font-awesome-layers-text",S.c),b.beforeEach(function(t,e,s){t.meta.title&&(document.title=t.meta.title),s()}),new n.default({el:"#app",router:b,components:{App:c},template:"<App/>"})},Ovf0:function(t,e,s){t.exports=s.p+"static/img/volunteer1.6f0c6a7.jpg"},X10H:function(t,e,s){t.exports=s.p+"static/img/web-logos.117016a.png"},YmyE:function(t,e,s){t.exports=s.p+"static/img/employee3.aa42559.jpg"},dST7:function(t,e,s){t.exports=s.p+"static/img/volunteer2.b57a735.jpg"},eCwG:function(t,e,s){t.exports=s.p+"static/img/activity0.b57e5f9.jpg"},ePAD:function(t,e,s){t.exports=s.p+"static/img/expert6.f7e4a1d.png"},gZAi:function(t,e,s){t.exports=s.p+"static/img/pic1.1a97aec.jpg"},kGe8:function(t,e,s){t.exports=s.p+"static/img/employee7.06c9588.jpg"},plSF:function(t,e,s){t.exports=s.p+"static/img/employee2.5be2eda.jpg"},q8rF:function(t,e){},sfy8:function(t,e){},suN7:function(t,e){},tvR6:function(t,e){},wBKm:function(t,e,s){t.exports=s.p+"static/img/volunteer5.d03d764.jpg"},wMgS:function(t,e,s){t.exports=s.p+"static/img/expert3.eb77424.png"},xgyi:function(t,e,s){t.exports=s.p+"static/img/employee5.e121618.jpg"}},["NHnr"]);
//# sourceMappingURL=app.dcee2932432ed2d9ed3a.js.map