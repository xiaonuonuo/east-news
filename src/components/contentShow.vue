<template lang="html">
    <div class="con">
        <headCut></headCut>
        <headSearch></headSearch>
        <div class="section">
            <div class="detail_cnt clear-fix">
                <div class="main_content">
                    <div class="article">
                        <div class="detail_left  clear-fix">
            				<div class="detail_left_cnt">

            					<!-- <div class="pop_comment_n pop_3"><i></i>亲，暂时无法评论！</div> -->
            					<div class="J-title_detail title_detail">
            						<h1><span>深圳中学牵手港中大（深圳）向智能机器人研究迈进</span></h1>

            						<div class="share_cnt_p clearfix">
            							<div class="fl">
            								<i>2017-05-04 22:48</i>
            								<i>央广网</i>
            							</div>
            							<div class="user_error_op fl"><i></i><span id="j_user_op">我要报错</span></div>
            														<a class="discuss-wrap clearfix" href="#pinglun">
            								<span class="conment-bg fl"></span>
            								<span class="discuss_a fl"><i id="conment_tole_in">0</i>评论</span>
            							</a>
            							<div class="J-bdsharebuttonbox-wrap bdshare-special clearfix" style="display: block;">
            								<div class="J-bdsharebuttonbox bdsharebuttonbox clearfix bdshare-button-style0-16" data-bd-bind="1493909981861">
            									<a class="J-bdshare bds-qzone fl" data-cmd="qzone" href="javascript:;" title="分享到QQ空间"></a>
            									<a class="J-bdshare bds-tsina fl" data-cmd="tsina" href="javascript:;" title="分享到新浪微博"></a>
            									<a class="J-bdshare bds-weixin fl" data-cmd="weixin" href="javascript:;" title="分享到微信"></a>

            								</div>
            							</div>
            						</div>
            					</div>
            						<div class="gg_detail_cnt clearfix" id="dsp_btxf">
            							<!-- 广告位：测试_嵩恒_头条_新闻页面_标题下方 -->
            						</div>
            						<div class="J-contain_detail_cnt contain_detail_cnt" id="J-contain_detail_cnt">
            						<p>央广网深圳5月04日消息(记者 于扬）5月4日下午，一场《聪明能干的机器人》对话在深圳中学成美楼先锋剧场开展，来自香港中文大学（深圳）的校长徐扬生与深圳中学数百名学子一同探讨“机器人”的奥秘，此外，深圳中学与香港中文大学（深圳）签署了共建“智能机器人创新实验室”和“优质生源基地”的合作协议。据悉，“智能机器人创新实验室”的建设意在以期打造一个先进科学技术与教育教学深度融合的专业示范性实践教育平台，合作培养具有国际视野、创新能力、实践能力的科技人才。“优质生源基地”的设立，则可以促进中学和大学的交流互动，加强优质教育共享，双方携手培养具有国际视野、专业素养、才得兼备及对社会有承担的新一代创新型高层次人才。</p>
                                    <div class="widt_ad">
                                        <img class="scrollLoading" width="500" height="333" src="//02.imgmini.eastday.com/mobile/20170504/20170504224843_2a77a20d55de081b309a4aa142087586_1.jpeg"></div>
                                        <p></p><p></p><div class="widt_ad"><img class="scrollLoading" width="500" height="333" src="//02.imgmini.eastday.com/mobile/20170504/20170504224843_2a77a20d55de081b309a4aa142087586_2.jpeg"></div>
                                        <p></p><p>记者了解到，截止目前，深圳中学拥有11个与企业合作创新体验中心，与高校合作3个主题创新实验室，其中与中国科学技术大学建立语音识别实验室，美国斯坦福大学建立生化创新实验室及此次牵手港中大（深圳）的“智能机器人创新实验室”。港中大（深圳）将组建机器人创新实验室专项工作小组，调集专业人员针对中学学生设计适合其使用的课程及研究课题，更组织安排讲座分享介绍学术专业领域前沿科技资讯，拓宽学生视野。</p><p></p><div class="widt_ad"><img class="scrollLoading" width="500" height="375" src="//02.imgmini.eastday.com/mobile/20170504/20170504224843_2a77a20d55de081b309a4aa142087586_3.jpeg"></div><p></p><p>深圳中学从2013年至今，已举办了17期“深中大讲堂”。今天举行的是2017年的第二期，由徐扬生院士主讲《聪明能干的机器人》。值得一提的是，“优质生源基地”的合作将港中大（深圳）优秀的文化进一步下沉到中学，为深中学子在传承中国传统文化、开拓国际视野等方面提供更专业更前沿的资讯与培养。<a id="goback_home" href="//mini.eastday.com?frdetail" target="_blank"><span class="left_logo"></span>返回东方头条首页&gt;&gt;</a></p>
            					</div>
            				</div>
            				<div class="gg_item_bomttom_cnt">
            					<!-- 广告位：嵩恒_头条_新闻页面_正文下方 -->
            					<!-- <iframe frameborder="0" scrolling="no" src="/frames/sy/left_2.html" width="620" height="110"></iframe> -->
            				</div>
            				<!-- <div class="dark-line"></div> -->
            				<div class="pagination" style="display: none;"></div>
            			</div>
                    </div>
                    <div class="aside">
                        <div class="detail_right_cnt clear-fix">
                            <div class="xfcnt_lft clear-fix">
                                <todayNews :todayNews="todayNewsData"></todayNews>
                                <specialRecommend></specialRecommend>
                                <editRecommend :editRecommend="editRecommendData"></editRecommend>
                                <hotLine :hotline="hotLineData"></hotLine>
                            </div>
                        </div>
                    </div>
                    <div class="bottom_over_cnt">
                        <div class="guess_like  clear-fix">
                            <aboutRecommend :aboutRecommend="aboutRecommendData"></aboutRecommend>
                        </div>
                        <div class="guess_like  clear-fix">
                            <div class="hot_recommend_cnt clear-fix" id="hot_recommend_cnt">
                                <ul class="tjnewsrcontent">
                                    <guessLike class="recommend_news" :guessLike="guessLikeData"></guessLike>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import guessLike from './show/guessLike'
import aboutRecommend from './show/aboutRecommend'
import todayNews from './show/todayNews'
import hotLine from './show/hotLine'
import editRecommend from './show/editRecommend'
import specialRecommend from './show/specialRecommend'
import headCut from './headCnt'
import headSearch from './headSearch'

export default {
    name:'contentShow',
    data(){
        return {
            guessLikeData:{
                title:'猜你喜欢',
                content:[{
                    imgSrc:'//06.imgmini.eastday.com/mobile/20170504/20170504_16a5b8f5d50245f6be88c02213227c06_cover_mwpm_03200403.jpeg',
                    imgAlt:"农村这种野菜到处都是，是疾病的好药，很多人不知道",
                    contentTxt:"农村这种野菜到处都是，是疾病的好药，很多人不知道",
                    contentTitle:"农村这种野菜到处都是，是疾病的好药，很多人不知道",
                    contentDesc:"农村这种野菜到处都是，城里人闻不了这种味道，是疾病的好药，很多人不知道  春天到了农村的田间又长出了许多的折耳根...",
                    from:"来源：汽车大联盟",
                },{
                    imgSrc:'//04.imgmini.eastday.com/mobile/20170504/20170504125106_99e5e6afc55509d7e43d32150ef308ed_1_mwpm_03200403.jpeg',
                    imgAlt:"河北原邯郸县委书记何志刚落马 曾获“全国优秀县委书记",
                    contentTxt:"河北原邯郸县委书记何志刚落马 曾获“全国优秀县委书记",
                    contentTitle:"河北原邯郸县委书记何志刚落马 曾获“全国优秀县委书记",
                    contentDesc:"何志刚。河北省纪委监察厅网站2017年5月4日发布通报称，经省委批准，原邯郸县委书记、邯郸市交通运输局局长何志刚涉嫌严重违纪...",
                    from:"来源：澎湃新闻",
                }]
            },
            editRecommendData:{
                title:"小编精选",
                content:[{
                    contentTxt:"女人多吃这食物，杀菌消炎，不得妇科炎症远离癌细胞",
                    contentTitle:"女人多吃这食物，杀菌消炎，不得妇科炎症远离癌细胞"
                },{
                    contentTxt:"外媒评法大选终辩：马克龙勒庞用“人身攻击”全程互怼",
                    contentTitle:"外媒评法大选终辩：马克龙勒庞用“人身攻击”全程互怼"
                },{
                    contentTxt:"小伙求婚被女孩嫌弃太穷，在爷爷床下发现几张烂纸币，跪下倒追",
                    contentTitle:"小伙求婚被女孩嫌弃太穷，在爷爷床下发现几张烂纸币，跪下倒追"
                },{
                    contentTxt:"山东通报2名5岁儿童死亡事件：爬进汽车后备厢窒息",
                    contentTitle:"山东通报2名5岁儿童死亡事件：爬进汽车后备厢窒息"
                },{
                    contentTxt:"武术打假第一人！他的“火”真正的拯救了武术！",
                    contentTitle:"武术打假第一人！他的“火”真正的拯救了武术！"
                }]
            },
            hotLineData:{
                title:"热点排行",
                content:[{
                    linkTitle:"想到黄岩岛搞事？没等特朗普动手，美军上将已连续3次遭打脸",
                    imgSrc:"//08.imgmini.eastday.com/mobile/20170504/20170504_bcaba1326c95785f7cc5151bc94eb004_cover_mwpm_03200403.jpeg",
                    imgAlt:"想到黄岩岛搞事？没等特朗普动手，美军上将已连续3次遭打脸",
                    contentTxt:"想到黄岩岛搞事？没等特朗普动手，美军上将已连续3次遭打脸"
                },{
                    linkTitle:"陆毅童年照曝光 微笑露出一排小牙仿佛看到了女儿贝儿的影子",
                    imgSrc:"//06.imgmini.eastday.com/mobile/20170504/20170504140229_0e4564aa71dce31d074d89c370995729_2_mwpm_03200403.jpeg",
                    imgAlt:"陆毅童年照曝光 微笑露出一排小牙仿佛看到了女儿贝儿的影子",
                    contentTxt:"陆毅童年照曝光 微笑露出一排小牙仿佛看到了女儿贝儿的影子"
                },{
                    linkTitle:"中国留德女生遭性侵案开庭 受害者勇敢赴德作证",
                    imgSrc:"//06.imgmini.eastday.com/mobile/20170504/20170504104236_ef1814686524a08b7a8f93d2809422a5_3_mwpm_03200403.jpeg",
                    imgAlt:"中国留德女生遭性侵案开庭 受害者勇敢赴德作证",
                    contentTxt:"中国留德女生遭性侵案开庭 受害者勇敢赴德作证"
                },{
                    linkTitle:"泰国女孩身患怪病 每当头痛便七窍流血",
                    imgSrc:"//01.imgmini.eastday.com/mobile/20170504/20170504112833_d7d7ac295e8d0ab1821976d819e17571_5_mwpm_03200403.jpeg",
                    imgAlt:"泰国女孩身患怪病 每当头痛便七窍流血",
                    contentTxt:"泰国女孩身患怪病 每当头痛便七窍流血"
                }]
            },
            todayNewsData:{
                title:"今日热点",
                content:[{
                    linkTitle:"农产品加工厂老板亏损100万，将厂房改造后养殖黄鳝赚300万",
                    imgSrc:"//00.imgmini.eastday.com/mobile/20170504/20170504_884e6c0f1dcc26b55e4b9f48f79fd0f3_cover_mwpm_03200403.jpeg",
                    imgAlt:"农产品加工厂老板亏损100万，将厂房改造后养殖黄鳝赚300万",
                    contentTitle:"农产品加工厂老板亏损100万，将厂房改造后养殖黄鳝赚300万",
                    contentTxt:"农产品加工厂老板亏损100万，将厂房改造后养殖黄鳝赚300万"
                },{
                    linkTitle:"台军坚持向美买导弹 遭讽:说好的“国防”自主呢",
                    imgSrc:"//05.imgmini.eastday.com/mobile/20170504/20170504120239_fbb6a7ae17432f547b3455d88a896e19_2_mwpm_03200403.jpeg",
                    imgAlt:"台军坚持向美买导弹 遭讽:说好的“国防”自主呢",
                    contentTitle:"台军坚持向美买导弹 遭讽:说好的“国防”自主呢",
                    contentTxt:"台军坚持向美买导弹 遭讽:说好的“国防”自主呢"
                },{
                    linkTitle:"美军欲巡航黄岩岛被否 美媒：特朗普上台后美南海巡航减少",
                    imgSrc:"//07.imgmini.eastday.com/mobile/20170504/20170504113957_edacdeb0bbe77f1fa644196b0c3fdbdf_2_mwpm_03200403.jpeg",
                    imgAlt:"美军欲巡航黄岩岛被否 美媒：特朗普上台后美南海巡航减少",
                    contentTitle:"美军欲巡航黄岩岛被否 美媒：特朗普上台后美南海巡航减少",
                    contentTxt:"美军欲巡航黄岩岛被否 美媒：特朗普上台后美南海巡航减少"
                },{
                    linkTitle:"凌晨3点 一个错误决定让她眼看着儿子公公被撞死",
                    imgSrc:"//08.imgmini.eastday.com/mobile/20170504/20170504074818_87dda306e95f1be3273eba002027af12_2_mwpm_03200403.jpeg",
                    imgAlt:"凌晨3点 一个错误决定让她眼看着儿子公公被撞死",
                    contentTitle:"凌晨3点 一个错误决定让她眼看着儿子公公被撞死",
                    contentTxt:"凌晨3点 一个错误决定让她眼看着儿子公公被撞死"
                }]
            },
            aboutRecommendData:{
                title:"相关推荐",
                content:[{
                    contentTitle:"农村这种野菜到处都是，是疾病的好药，很多人不知道",
                    contentTxt:"农村这种野菜到处都是，是疾病的好药，很多人不知道"
                },{
                    contentTitle:"柯蓝：她15岁成模特45岁不婚不育 活出真自我",
                    contentTxt:"柯蓝：她15岁成模特45岁不婚不育 活出真自我"
                },{
                    contentTitle:"孙莉四十岁产后亮相冻龄如少女",
                    contentTxt:"孙莉四十岁产后亮相冻龄如少女"
                },{
                    contentTitle:"美国人评选二战5大元帅：只有一个亚洲人，美军在他手上惨败！",
                    contentTxt:"美国人评选二战5大元帅：只有一个亚洲人，美军在他手上惨败！"
                },{
                    contentTitle:"男子在女友上厕所的时候在马桶上涂满了强力胶，结果悲剧了",
                    contentTxt:"男子在女友上厕所的时候在马桶上涂满了强力胶，结果悲剧了"
                },{
                    contentTitle:"湖南人看到这10人赶快报警 最高奖励1万元",
                    contentTxt:"湖南人看到这10人赶快报警 最高奖励1万元"
                },{
                    contentTitle:"最受喜爱的韩星，嫁到中国被婆婆感动哭，在农村和婆婆一起干活！",
                    contentTxt:"最受喜爱的韩星，嫁到中国被婆婆感动哭，在农村和婆婆一起干活！"
                },{
                    contentTitle:"黄之锋李柱铭在美上演“卖港辱国”闹剧 港媒痛批：令人不齿！",
                    contentTxt:"黄之锋李柱铭在美上演“卖港辱国”闹剧 港媒痛批：令人不齿！"
                },{
                    contentTitle:"轰6K王牌飞行员怎样炼成？将参加国际军事比赛",
                    contentTxt:"轰6K王牌飞行员怎样炼成？将参加国际军事比赛"
                },{
                    contentTitle:"云南在押毒贩冲破隔离网越狱 警方悬赏10万通缉",
                    contentTxt:"云南在押毒贩冲破隔离网越狱 警方悬赏10万通缉"
                },{
                    contentTitle:"解放军用雷达做诱饵全歼越军精锐",
                    contentTxt:"解放军用雷达做诱饵全歼越军精锐"
                },{
                    contentTitle:"琼瑶与继子女撕破脸？只因昔日小三上位难被原谅？",
                    contentTxt:"琼瑶与继子女撕破脸？只因昔日小三上位难被原谅？",
                }]
            }
        }
    },
    components:{
        guessLike,
        aboutRecommend,
        todayNews,
        hotLine,
        editRecommend,
        specialRecommend,
        headCut,
        headSearch,
    }
}
</script>

<style lang="css" scoped>
    @import '../assets/detail.css';
</style>
