<template lang="html">
    <li class="J-has-share listNews-item-s2 listNews-item- clearfix">
        <h3>
            <router-link :to="{ path: '/show', query: { userId: 123 }}" class="J-share-a" target="_blank">{{shareTxt}}</router-link>
        </h3>
        <p class="img-wrap clearfix">
            <router-link :to="{ path: '/show', query: { userId: 123 }}" target="_blank" title="list.imgTitle" class="fl" v-for="list in content">
                <img class="animation" :src="list.src" alt="" width="200" height="150">
            </router-link>
        </p>
        <p class="from">{{from}}</p>
        <!-- <div class="J-bdsharebuttonbox-wrap">
            <div class="J-bdsharebuttonbox bdsharebuttonbox clearfix bdshare-button-style0-16" data-bd-bind="1493884410604">
                <span class="fl">分享</span>
                <a class="J-bdshare bds-tsina fl" data-cmd="tsina" href="javascript:;" title="分享到新浪微博"></a>
                <a class="J-bdshare bds-qzone fl" data-cmd="qzone" href="javascript:;" title="分享到QQ空间"></a>
                <a class="J-bdshare bds-tqq fl" data-cmd="tqq" href="javascript:;" title="分享到腾讯微博"></a>
                <a class="J-bdshare bds-weixin fl" data-cmd="weixin" href="javascript:;" title="分享到微信"></a>
            </div>
        </div> -->
    </li>
</template>

<script>
export default {
    data(){
        return {
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
        }
    },
    methods:{

    }
}
</script>

<style lang="css">
</style>
