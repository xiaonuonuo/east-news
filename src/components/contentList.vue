<template>
    <div class="con">
        <headCut></headCut>
        <headSearch></headSearch>
        <div class="main_contain_cnt clear-fix">
            <div class="main_left clear-fix">
                <flashImg :flashImg="flashImgData"></flashImg>
                <hr class="split-line">
                <ul id="listNewsTimeLy" class="listNewsTimeLy">
                    <imgList :imgList="imgListData"></imgList>
                    <newsList :newsList="newsListData"></newsList>
                </ul>
            </div>
            <div class="main_right clear-fix">
                <hoursNew :hoursNew="hoursNewData"></hoursNew>
                <hotNews :hotNews="hotNewsData"></hotNews>
            </div>
        </div>
    </div>
</template>

<script>
import headCut from './headCnt'
import headSearch from './headSearch'
import flashImg from './list/flashImg'
import imgList from './list/imgList'
import newsList from './list/newsList'
import hoursNew from './list/hoursNew'
import hotNews from './list/hotNews'
export default {
  name: 'contentList',
  data() {
    return {
        newsListData:{
            titleAlt:"城管队员工作不尽责 集体被罚做50个俯卧撑",
            titleImg:"//09.imgmini.eastday.com/mobile/20170504/20170504154408_a1e7ed1c79103c64fd5f2a07c339ce9b_2_mwpm_03200403.jpeg",
            infoText:"城管队员工作不尽责 集体被罚做50个俯卧撑",
            infoDesc:"现代快报讯（记者李伟豪）近日，一组城管队员在城管局门口集体做俯卧撑的图片，引发无数网友的围观和好奇，这是...",
            from:"2017-05-04 15:44 来源：扬子晚报网"
        },
        hotNewsData:{
            conponentsTitle:'新闻热点',
            content:[{
                hotNewsImg:"//06.imgmini.eastday.com/mobile/20170504/20170504_16a5b8f5d50245f6be88c02213227c06_cover_mwpm_03200403.jpeg",
                hotNewsAlt:"农村这种野菜到处都是，是疾病的好药，很多人不知道",
                hotNewsTitle:"农村这种野菜到处都是，是疾病的好药，很多人不知道",
                hotNewsContent:"农村这种野菜到处都是，是疾病的好药，很多人不知道"
            },{
                hotNewsImg:"//06.imgmini.eastday.com/mobile/20170504/20170504_16a5b8f5d50245f6be88c02213227c06_cover_mwpm_03200403.jpeg",
                hotNewsAlt:"农村这种野菜到处都是，是疾病的好药，很多人不知道",
                hotNewsTitle:"农村这种野菜到处都是，是疾病的好药，很多人不知道",
                hotNewsContent:"农村这种野菜到处都是，是疾病的好药，很多人不知道"
            },{
                hotNewsImg:"//06.imgmini.eastday.com/mobile/20170504/20170504_16a5b8f5d50245f6be88c02213227c06_cover_mwpm_03200403.jpeg",
                hotNewsAlt:"农村这种野菜到处都是，是疾病的好药，很多人不知道",
                hotNewsTitle:"农村这种野菜到处都是，是疾病的好药，很多人不知道",
                hotNewsContent:"农村这种野菜到处都是，是疾病的好药，很多人不知道"
            },{
                hotNewsImg:"//06.imgmini.eastday.com/mobile/20170504/20170504_16a5b8f5d50245f6be88c02213227c06_cover_mwpm_03200403.jpeg",
                hotNewsAlt:"农村这种野菜到处都是，是疾病的好药，很多人不知道",
                hotNewsTitle:"农村这种野菜到处都是，是疾病的好药，很多人不知道",
                hotNewsContent:"农村这种野菜到处都是，是疾病的好药，很多人不知道"
            }]
        },
        hoursNewData:{
            conponentsTitle:"24小时新闻排行",
            content:[{
                hoursNewTitle:"农村这种野菜到处都是，是疾病的好药，很多人不知道",
                hoursNewContent:"农村这种野菜到处都是，是疾病的好药，很多人不知道"
            },{
                hoursNewTitle:"河北原邯郸县委书记何志刚落马 曾获“全国优秀县委书记”",
                hoursNewContent:"河北原邯郸县委书记何志刚落马 曾获“全国优秀县委书记”"
            },{
                hoursNewTitle:"农民田里抓到疑似龙的生物，土豪花10万买走，事后却后悔...",
                hoursNewContent:"农民田里抓到疑似龙的生物，土豪花10万买走，事后却后悔..."
            },{
                hoursNewTitle:"昔有愚公移山，今有重庆村民的“悬崖天路”！",
                hoursNewContent:"昔有愚公移山，今有重庆村民的“悬崖天路”！"
            },{
                hoursNewTitle:"四川宜宾市珙县附近发生4.4级左右地震",
                hoursNewContent:"四川宜宾市珙县附近发生4.4级左右地震"
            },{
                hoursNewTitle:"女子拿祖传古董镶金宝扇拍蚊子，专家估价后令人惊呆",
                hoursNewContent:"女子拿祖传古董镶金宝扇拍蚊子，专家估价后令人惊呆"
            },{
                hoursNewTitle:"女子拿祖传古董镶金宝扇拍蚊子，专家估价后令人惊呆",
                hoursNewContent:"女子拿祖传古董镶金宝扇拍蚊子，专家估价后令人惊呆"
            },{
                hoursNewTitle:"千年古墓竟挖出会呻吟的活女人，工人差点被吓死",
                hoursNewContent:"千年古墓竟挖出会呻吟的活女人，工人差点被吓死"
            },{
                hoursNewTitle:"李登辉亲信吐槽蔡英文领导能力差：像“被狗遛的人”",
                hoursNewContent:"李登辉亲信吐槽蔡英文领导能力差：像“被狗遛的人”"
            },{
                hoursNewTitle:"雄安新区高铁来了！五大线路撑起一小时交通圈",
                hoursNewContent:"雄安新区高铁来了！五大线路撑起一小时交通圈"
            }]
        },
        imgListData:{
            shareTxt:"泾阳茯茶“古”法“新”技 传承创新中国茶文化",
            from:"2017-05-04 15:43 来源：国际在线",
            content:[{
                imgTitle:"泾阳茯茶“古”法“新”技 传承创新中国茶文化",
                src:"//02.imgmini.eastday.com/mobile/20170504/20170504154330_66c455cef74043d1b444c75125ecd580_1_mwpm_03200403.jpeg"
            },{
                imgTitle:"泾阳茯茶“古”法“新”技 传承创新中国茶文化",
                src:"//02.imgmini.eastday.com/mobile/20170504/20170504154330_66c455cef74043d1b444c75125ecd580_2_mwpm_03200403.jpeg"
            },{
                imgTitle:"泾阳茯茶“古”法“新”技 传承创新中国茶文化",
                src:"//02.imgmini.eastday.com/mobile/20170504/20170504154330_66c455cef74043d1b444c75125ecd580_3_mwpm_03200403.jpeg"
            }]
        },
        flashImgData:{
            content:[{
                src:"//imgmini.eastday.com/pushimg/20170503/59095e84629a2.jpg",
                alt:"国产大飞机C919计划5月5日首飞 天气条件不具备则顺延"
            },{
                src:"//imgmini.eastday.com/pushimg/20170503/59095ee29b652.jpg",
                alt:"中国量子计算机诞生！量子计算水平创世界纪录"
            },{
                src:"//imgmini.eastday.com/pushimg/20170503/59095be5ad578.jpg",
                alt:"陈树隆被双开，中纪委为何单说他三观'严重扭曲';？"
            },{
                src:"//imgmini.eastday.com/pushimg/20170503/59095b912b946.jpg",
                alt:"大学生'缺钱花'揭秘：都穷过，但从未像今天这样拜金？"
            }],
        }
    }
},
components:{
    headCut,
    headSearch,
    flashImg,
    imgList,
    newsList,
    hoursNew,
    hotNews,
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '../assets/channel.css';
    hr.split-line {
        margin-top: 25px;
        height: 0;
        font-size: 0;
        line-height: 0;
        border-bottom: 1px dashed #ddd;
    }
</style>
