<template lang="html">
    <div class="">
        <div class="main_r_title hours-new-title"><h4><span><em style="width:130px;"></em>{{hoursNew.conponentsTitle}}</span></h4></div>
            <div class="main_item_cnt">
                <ul id="hoursListNews" class="special_more_item">
                    <li v-for="(list,index) in hoursNew.content">
                        <i :class="[('i'+index)]"></i>
                        <router-link :to="{ path: '/show', query: { userId: 123 }}" class="news_pic" target="_blank" :title="list.hoursNewTitles">{{list.hoursNewContent}}</router-link>
                    </li>
                </ul>
      		</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'hoursNew',
    props:['hoursNew'],
    data(){
        return {

        }
    },
    created(){
    }
}
</script>

<style lang="css" scpoed>
    .main_item_cnt ul.special_more_item li {
        width: 280px;
        padding-left: 24px;
        height: 36px;
        overflow: hidden;
        position: relative;
        line-height: 36px;
    }
    .main_r_title.hours-new-title {
        width: auto;
        padding-left: 32px;
        height: 40px;
        padding-bottom: 10px;
        padding-top: 10px;
        position: relative;
        margin: 0;
    }

    .main_item_cnt ul.special_more_item li i {
        position: absolute;
        display: block;
        width: 20px;
        height: 16px;
        line-height: 14px;
        left: 0;
        top: 12px;
        background-repeat: no-repeat;
    }
</style>
