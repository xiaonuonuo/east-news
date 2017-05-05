<template lang="html">
    <div class="hot-news">
        <div class="main_r_title hot-news-title"><h4><span><em></em>{{conponentsTitle}}</span></h4></div>
        <div class="main_item_cnt">
            <ul id="news_hot_day_item" class="main_item_news">
                <li v-for="list in content">
                    <router-link :to="{ path: '/show', query: { userId: 123 }}" class="news_pic" target="_blank">
                        <img class="animation" :src="list.hotNewsImg" :alt="list.hotNewsAlt" width="145" height="105">
                    </router-link>
                    <router-link :to="{ path: '/show', query: { userId: 123 }}" class="title_news" target="_blank" :title="list.hotNewsTitle">{{list.hotNewsContent}}</router-link>
                </li>
            </ul>
    	</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
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
        }
    },
}
</script>

<style lang="css" scoped>
    .main_r_title.hot-news-title {
        width: auto;
        padding-left: 32px;
        height: 40px;
        padding-bottom: 10px;
        padding-top: 10px;
        position: relative;
        margin: 0;
    }
</style>
