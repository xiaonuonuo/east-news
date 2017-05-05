<template lang="html">
    <div class="specialRecommend">
        <div class="main_r_title">
			<h4><span><em></em>特别推荐</span></h4>
		</div>
        <div class="main_item_cnt" id="unartificial">
			<ul id="special_more_item" class="special-list">
				<li class="special-item" v-for="(list,idx) in content" @mouseover="enter($event,idx)">
                    <router-link :to="{ path: '/show', params: { userId: 123 }}" class="clearfix" :class="{'active':activeIndex == idx?true:false}" :title="list.title" target="_blank">
						<span :class="['index',('i'+idx)]"></span>
						<p class="fl img"><img class="scrollLoading" data-url="//07.imgmini.eastday.com/mobile/20170504/20170504075400_88129dd988c547f3f6f783992d69f5ca_4_mwpm_03200403.jpeg" :src="list.src" width="100" height="75" :alt="list.alt"></p>
						<p class="txt">{{list.txt}}</p>
					</router-link>
				</li>
			</ul>
		</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activeIndex:0,
            content:[{
                href:"/a/170504075400873.html?xx=1",
                title:"男子与旧情人开房 事后却突然冲进来两个美女",
                src:"//07.imgmini.eastday.com/mobile/20170504/20170504075400_88129dd988c547f3f6f783992d69f5ca_4_mwpm_03200403.jpeg",
                alt:"男子与旧情人开房 事后却突然冲进来两个美女",
                txt:"男子与旧情人开房 事后却突然冲进来两个美女"
            },
            {
                href:"/a/170504193838622.html?xx=1",
                title:"十天之后，北京要办一件大事！你想知道的全在这…",
                src:"//07.imgmini.eastday.com/mobile/20170504/20170504193838_700bce931ad983f2e86c21b52e89afb7_1_mwpm_03200403.jpeg",
                alt:"十天之后，北京要办一件大事！你想知道的全在这…",
                txt:"十天之后，北京要办一件大事！你想知道的全在这…"
            },
            {
                href:"/a/170504192932754.html?xx=1",
                title:"发芽的大蒜是个宝，它有4种神奇效果",
                src:"//07.imgmini.eastday.com/mobile/20170504/20170504193838_700bce931ad983f2e86c21b52e89afb7_1_mwpm_03200403.jpeg",
                alt:"发芽的大蒜是个宝，它有4种神奇效果",
                txt:"发芽的大蒜是个宝，它有4种神奇效果"
            },
            {
                href:"/a/170504195142858.html?xx=1",
                title:"200吨轰炸机被F22跟踪 飞行员发怒 做出大动作欲撞向美军",
                src:"//06.imgmini.eastday.com/mobile/20170504/20170504195142_7ad1ef3340823cbebd0c3fc88c9cd9c6_3_mwpm_03200403.jpeg",
                alt:"200吨轰炸机被F22跟踪 飞行员发怒 做出大动作欲撞向美军",
                txt:"200吨轰炸机被F22跟踪 飞行员发怒 做出大动作欲撞向美军"
            }]
        }
    },
    methods:{
        enter(e,index){
            let target = e.target
            this.activeIndex = index
        }
    }
}
</script>

<style lang="css">
</style>
