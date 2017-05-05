<template lang="html">
    <div class="">
        <div class="guess_title guess-yl"><span><i></i>{{guessLike.title}}</span></div>
        <div id="hot_recommend_cnt" class="hot_recommend_cnt clear-fix">
			<!-- 当前栏目下推荐 -->
			<ul class="tjnewsrcontent">
				<li class="recommend_news" v-for="list in guessLike.content">
					<div class="pic">
                        <router-link :to="{path: '/show', query: { plan: 'private' }}" target="_blank" title="">
                            <img class="scrollLoading" :src="list.imgSrc" :alt="list.imgAlt">
                        </router-link>
					</div>
					<div class="text">
						<h3>
							<router-link :to="{path: '/show', query: { plan: 'private' }}" target="_blank" :title="list.contentTitle">{{list.contentTxt}}</router-link></h3>

						<p class="content_so">{{list.contentDesc}}</p>

						<p class="source">
							<span>{{list.from}}</span>
						</p>
					</div>
				</li>
			</ul>
		</div>
    </div>
</template>

<script>
export default {
    props:['guessLike'],
    data(){
        return {

        }
    }
}
</script>

<style lang="css">
</style>
