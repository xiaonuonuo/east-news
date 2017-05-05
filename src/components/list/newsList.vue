<template lang="html">
    <li class="J-has-share listNews-item-s1 listNews-item- clearfix">
        <div class="img fl">
            <router-link :to="{ path: '/show', query: { userId: 123 }}" target="_blank">
                <img class="animation" :src="newsList.titleImg" :alt="newsList.titleAlt" width="180" height="135">
            </router-link>
        </div>
        <div class="info">
            <h3>
                <router-link :to="{ path: '/show', query: { userId: 123 }}" class="J-share-a" target="_blank">{{newsList.infoText}}</router-link>
            </h3>
            <p class="desc">{{newsList.infoDesc}}</p>
            <p class="from">{{newsList.from}}</p>
            <!-- <div class="J-bdsharebuttonbox-wrap">
                <div class="J-bdsharebuttonbox bdsharebuttonbox clearfix bdshare-button-style0-16" data-bd-bind="1493884410604">
                    <span class="fl">分享</span>
                    <a class="J-bdshare bds-tsina fl" data-cmd="tsina" href="javascript:;" title="分享到新浪微博"></a><a class="J-bdshare bds-qzone fl" data-cmd="qzone" href="javascript:;" title="分享到QQ空间"></a>
                    <a class="J-bdshare bds-tqq fl" data-cmd="tqq" href="javascript:;" title="分享到腾讯微博"></a>
                    <a class="J-bdshare bds-weixin fl" data-cmd="weixin" href="javascript:;" title="分享到微信"></a>
                </div>
            </div> -->
        </div>
    </li>
</template>

<script>
export default {
    props:['newsList'],
    data(){
        return {

        }
    },
    methods:{

    },
    created(){
    }
}
</script>

<style lang="css">
</style>
