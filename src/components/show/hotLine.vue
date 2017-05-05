<template lang="html">
    <div class="hotLine">
        <div class="main_r_title">
			<h4><span><em></em>{{hotline.title}}</span></h4>
		</div>
        <div class="main_item_cnt" style="height:auto;">
			<ul id="sift_item_cnt" class="sift_item">
				<li v-for="list in hotline.content">
                    <router-link :to="{path: '/show', query: { plan: 'private' }}" target="_blank" :title="list.linkTitle" class="title-main">
						<span>
                            <img class="scrollLoading" :src="list.imgSrc" :alt="list.imgAlt">
                        </span>
						<p>{{list.contentTxt}}</p>
					</router-link>
				</li>
			</ul>
		</div>
    </div>
</template>

<script>
export default {
    props:['hotline'],
    data(){
        return {

        }
    }
}
</script>

<style lang="css">
</style>
