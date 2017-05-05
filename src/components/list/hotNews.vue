<template lang="html">
    <div class="hot-news">
        <div class="main_r_title hot-news-title"><h4><span><em></em>{{hotNews.conponentsTitle}}</span></h4></div>
        <div class="main_item_cnt">
            <ul id="news_hot_day_item" class="main_item_news">
                <li v-for="list in hotNews.content">
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
    props:['hotNews'],
    data(){
        return {

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
