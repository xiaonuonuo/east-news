<template lang="html">
    <div class="slider_cnt_channel">
        <h1 id="titleNewsSlider">
            <router-link :to="{ path: 'user', params: { userId: 123 }}" target="_blank">{{flashImg.content[showIndex].alt}}</router-link>
            <em>
                <i class="now">{{showIndex+1}}</i>/<i class="sum">{{flashImg.content.length}}</i>
            </em>
        </h1>
        <ul id="sliderContain" class="sliderContain" @mouseover="arrowShow" @mouseout="arrowHide">
            <li v-show="showIndex == index" v-for="(list,index) in flashImg.content">
                <router-link :to="{ path: 'user', params: { userId: 123 }}" target="_blank">
                    <img :src="list.src" :alt="list.alt">
                </router-link>
            </li>
            <a class="btn_left" href="javascript:;" @click="prev(index)" :style="{'left':move}"></a>
            <a class="btn_right" href="javascript:;" @click="next(index)" :style="{'right':move}"></a>
        </ul>
    </div>
</template>

<script>
export default {
    name:'falshImg',
    props:['flashImg'],
    data(){
        return {
            showIndex:0,
            move:'-42px',
            intervalId:null,
        }
    },
    methods:{
        prev(index){
            if(this.showIndex == 0){
                this.showIndex = this.flashImg.content.length-1
            }else{
                this.showIndex--
            }
        },
        next(){
            if(this.showIndex == this.flashImg.content.length-1){
                this.showIndex = 0
            }else{
                this.showIndex++
            }
        },
        arrowShow(){
            this.move = 0
            clearInterval(this.intervalId)
        },
        arrowHide(){
            this.move = '-42px'
            this.autoRun()
        },
        autoRun(){
            let _this = this
            this.intervalId =  setInterval(function(){
                _this.next()
            },3000)
        }
    },
    created(){
        this.autoRun()
    }
}
</script>

<style lang="css" scoped>
</style>
