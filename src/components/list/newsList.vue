<template lang="html">
    <li class="J-has-share listNews-item-s1 listNews-item- clearfix">
        <div class="img fl">
            <router-link :to="{ path: '/show', query: { userId: 123 }}" target="_blank">
                <img class="animation" :src="titleImg" :alt="titleAlt" width="180" height="135">
            </router-link>
        </div>
        <div class="info">
            <h3>
                <router-link :to="{ path: '/show', query: { userId: 123 }}" class="J-share-a" target="_blank">{{infoText}}</router-link>
            </h3>
            <p class="desc">{{infoDesc}}</p>
            <p class="from">{{from}}</p>
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
    data(){
        return {
            titleAlt:"城管队员工作不尽责 集体被罚做50个俯卧撑",
            titleImg:"//09.imgmini.eastday.com/mobile/20170504/20170504154408_a1e7ed1c79103c64fd5f2a07c339ce9b_2_mwpm_03200403.jpeg",
            infoText:"城管队员工作不尽责 集体被罚做50个俯卧撑",
            infoDesc:"现代快报讯（记者李伟豪）近日，一组城管队员在城管局门口集体做俯卧撑的图片，引发无数网友的围观和好奇，这是...",
            from:"2017-05-04 15:44 来源：扬子晚报网"
        }
    },
    methods:{

    }
}
</script>

<style lang="css">
</style>
