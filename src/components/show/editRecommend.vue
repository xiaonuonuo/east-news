<template lang="html">
    <div class="specialRecommend">
        <div class="main_r_title">
			<h4><span><em></em>{{editRecommend.title}}</span></h4>
		</div>
        <div id="editselect" class="main_item_cnt" style="height:auto;padding-left:33px;">
			<ul class="sl-list">

				<li class="sl-item pr" v-for="(list,index) in editRecommend.content" :class="{'first':index == 0}"><i class="dot"></i>
                    <router-link :to="{path: 'register', query: { plan: 'private' }}" target="_blank" :title="list.contentTitle" class="title-main">{{list.contentTxt}}</router-link>
				</li>
			</ul>
		</div>
    </div>
</template>

<script>
export default {
    props:['editRecommend'],
    data(){
        return {

        }
    }

}
</script>

<style lang="css">
    .sl-list .sl-item.first .title-main {
        font-size: 16px;
        font-weight: 700;
        display: block;
        height: 24px;
        line-height: 24px;
        overflow: hidden;
    }
</style>
