<template>
    <div class="con">
        <headCut></headCut>
        <headSearch></headSearch>
        <div class="main_contain_cnt clear-fix">
            <div class="main_left clear-fix">
                <flashImg></flashImg>
                <hr class="split-line">
                <ul id="listNewsTimeLy" class="listNewsTimeLy">
                    <imgList></imgList>
                    <newsList></newsList>
                </ul>
            </div>
            <div class="main_right clear-fix">
                <hoursNew></hoursNew>
                <hotNews></hotNews>
            </div>
        </div>
    </div>
</template>

<script>
import headCut from './headCnt'
import headSearch from './headSearch'
import flashImg from './list/flashImg'
import imgList from './list/imgList'
import newsList from './list/newsList'
import hoursNew from './list/hoursNew'
import hotNews from './list/hotNews'
export default {
  name: 'contentList',
  data() {
    return {
      msg: ''
    }
},
components:{
    headCut,
    headSearch,
    flashImg,
    imgList,
    newsList,
    hoursNew,
    hotNews,
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '../assets/channel.css';
    hr.split-line {
        margin-top: 25px;
        height: 0;
        font-size: 0;
        line-height: 0;
        border-bottom: 1px dashed #ddd;
    }
</style>
