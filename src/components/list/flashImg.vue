<template lang="html">
    <div class="slider_cnt_channel">
        <h1 id="titleNewsSlider">
            <router-link :to="{ path: 'user', params: { userId: 123 }}" target="_blank">{{content[showIndex].alt}}</router-link>
            <em>
                <i class="now">{{showIndex+1}}</i>/<i class="sum">{{content.length}}</i>
            </em>
        </h1>
        <ul id="sliderContain" class="sliderContain" @mouseover="arrowShow" @mouseout="arrowHide">
            <li v-show="showIndex == index" v-for="(list,index) in content">
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
    data(){
        return {
            content:[{
                src:"//imgmini.eastday.com/pushimg/20170503/59095e84629a2.jpg",
                alt:"国产大飞机C919计划5月5日首飞 天气条件不具备则顺延"
            },{
                src:"//imgmini.eastday.com/pushimg/20170503/59095ee29b652.jpg",
                alt:"中国量子计算机诞生！量子计算水平创世界纪录"
            },{
                src:"//imgmini.eastday.com/pushimg/20170503/59095be5ad578.jpg",
                alt:"陈树隆被双开，中纪委为何单说他三观'严重扭曲';？"
            },{
                src:"//imgmini.eastday.com/pushimg/20170503/59095b912b946.jpg",
                alt:"大学生'缺钱花'揭秘：都穷过，但从未像今天这样拜金？"
            }],
            showIndex:0,
            move:'-42px',
            intervalId:null,
        }
    },
    methods:{
        prev(index){
            if(this.showIndex == 0){
                this.showIndex = this.content.length-1
            }else{
                this.showIndex--
            }
        },
        next(){
            if(this.showIndex == this.content.length-1){
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
