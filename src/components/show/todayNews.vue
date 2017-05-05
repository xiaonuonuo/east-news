<template lang="html">
    <div class="todayNews">
        <div class="main_r_title">
    		<h4><span><em></em>{{todayNews.title}}</span></h4>
    	</div>
        <div class="main_item_cnt">
			<ul id="hot_daily" class="main_item_news">
				<li v-for="list in todayNews.content">
                    <router-link :to="{path: '/show', query: { plan: 'private' }}" target="_blank" :title="list.linkTitle" class="news_pic">
                        <img class="animation scrollLoading" :src="list.imgSrc" :alt="list.imgAlt" width="145" height="105">
                    </router-link>
                    <router-link :to="{path: '/show', query: { plan: 'private' }}" target="_blank" :title="list.contentTitle" class="title_news">{{list.contentTxt}}</router-link>
				</li>
			</ul>
		</div>
    </div>
</template>

<script>
export default {
    props:['todayNews'],
    data(){
        return {

        }

    }
}
</script>

<style lang="css">
</style>
