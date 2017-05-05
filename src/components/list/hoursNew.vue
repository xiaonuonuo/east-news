<template lang="html">
    <div class="">
        <div class="main_r_title hours-new-title"><h4><span><em style="width:130px;"></em>{{conponentsTitle}}</span></h4></div>
            <div class="main_item_cnt">
                <ul id="hoursListNews" class="special_more_item">

                    <li v-for="(list,index) in content">
                        <i :class="[('i'+index)]"></i>
                        <router-link :to="{ path: '/show', query: { userId: 123 }}" class="news_pic" target="_blank" :title="list.hoursNewTitles">{{list.hoursNewContent}}</router-link>
                    </li>

                </ul>
      		</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'hoursNew',
    data(){
        return {
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


        }
    }
}
</script>

<style lang="css" scpoed>
    .main_item_cnt ul.special_more_item li {
        width: 280px;
        padding-left: 24px;
        height: 36px;
        overflow: hidden;
        position: relative;
        line-height: 36px;
    }
    .main_r_title.hours-new-title {
        width: auto;
        padding-left: 32px;
        height: 40px;
        padding-bottom: 10px;
        padding-top: 10px;
        position: relative;
        margin: 0;
    }

    .main_item_cnt ul.special_more_item li i {
        position: absolute;
        display: block;
        width: 20px;
        height: 16px;
        line-height: 14px;
        left: 0;
        top: 12px;
        background-repeat: no-repeat;
    }
</style>
