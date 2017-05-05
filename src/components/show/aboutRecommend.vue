<template lang="html">
    <div class="">
        <div class="guess_title rel-recmmend">
            <span>{{aboutRecommend.title}}<i></i></span>
            <a href="/topic/index.html?uk=170504154408003&amp;frmore" pdata="detail|totopic|3|0" target="_blank">+更多</a>
        </div>
        <div class="guess_contain">
			<!-- 相关推荐广告 -->
			<!--<script type="text/javascript">left_4();</script>-->
			<ul class="recomend_content">

				<li v-for="list in aboutRecommend.content">
					<span></span>
					<a href="/a/170504143340339.html" pdata="detail|xgtj|0|0" :title="list.contentTitle" target="_blank">{{list.contentTxt}}</a>
				</li>

			</ul>

		</div>
    </div>
</template>

<script>
export default {
    props:['aboutRecommend'],
    data(){
        return {

        }
    }
}
</script>

<style lang="css">
</style>
