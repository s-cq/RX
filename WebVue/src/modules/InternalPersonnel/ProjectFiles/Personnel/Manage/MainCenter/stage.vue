<template>
<div class="">
    <div class="pr10">
     <div class="analyItem">
            <p class="analyItemTit tx-center ">状态</p>
        <div class="analyItemCon">
            <p class="col-md-12 ">
                    <span class="cLightGray pr8">下级</span>
                    <span>{{nextLevel > 12 ? 12 : nextLevel}}级</span>
            </p>
             <p class="col-md-4">
                <button class="uiBtn-normal " :class="{'uiBtn-blue':flg==2 }"  @click="flg=2">普级</button>
            </p>
             <p class="col-md-4">
                <button class="uiBtn-normal " :class="{'uiBtn-blue':flg==3 }"  @click="flg=3">管级</button>
            </p>
            <p class="col-md-4">
                <button class="uiBtn-normal " :class="{'uiBtn-blue':flg==1 }"  @click="flg=1">管培级</button>
            </p>
        </div>
     </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="94">
        <div v-if="flg==1">
                <router-link tag="div" :to="{path: routerPath('stageThreeGuan'), query: {index:1}}" exact class="analyItem anItemBor" active-class="anItemBor-active">
                    <p class="analyItemTit tx-center analyLightGreen">招</p>
                    <div class="analyItemCon">
                        <p class="col-md-4">
                            <span class="cLightGray pr8">学历</span>
                            <span class="">本科</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">全日制</span>
                            <span class="">是</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">专业</span>
                            <span class="">市场营销</span>
                        </p>
                    </div>
                </router-link>
                <router-link tag="div" :to="{path: routerPath('stageThreeGuan'), query: {index: 2}}" exact class="analyItem anItemBor" active-class="anItemBor-active">
                    <p class="analyItemTit tx-center analyLightGreen">培</p>
                    <div class="analyItemCon">
                        <p class="col-md-4">
                            <span class="cLightGray pr8">培养标准</span>
                        </p>
                    </div>
                </router-link>
                <router-link tag="div" :to="{path: routerPath('stageThreeGuan'), query: {index: 3}}" exact class="analyItem anItemBor" active-class="anItemBor-active">
                    <p class="analyItemTit tx-center analyLightGreen">用</p>
                    <div class="analyItemCon">
                        <p class="col-md-6">
                            <span class="cLightGray pr8">考核标准</span>
                        </p>
                    </div>
                </router-link>
        </div>
        <div v-else>
            <router-link tag="div" :to=" {path: routerPath('stageThree')}" class="analyItem anItemBor" active-class="anItemBor-active" exact>
                <p class="analyItemTit tx-center analyLightGreen">13 级</p>
                <div class="analyItemCon">
                    <p class="col-md-6">
                        <span class="cLightGray pr8">招人标准</span>
                    </p>
                </div>
            </router-link>
            <div class="analyItem"  v-for="(item,index) in levelList" :key="index" >
                <p class="analyItemTit tx-center analyLightGreen">{{item.ability_level}} 级</p>
                <div class="analyItemCon">
                    <p class="col-md-6">
                        <span class="cLightGray pr8">{{item.name}}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="pr10">
        <div v-if="flg!==1" class="analyItem ">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
            </div>
        </div>
        <router-link v-if="flg==1" tag="div" :to="{path: routerPath('stageThreeHander'), query: {index: 3}}" exact class="analyItem anItemBor" active-class="anItemBor-active">
                    <p class="analyItemTit tx-center ">处理</p>
                    <div class="analyItemCon">
                        <p class="col-md-6">
                            <span class="cLightGray pr8"></span>
                        </p>
                    </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
// import { getPersonnelPersonnelStage } from '../Resources/Api'
export default {
    data () {
        return {
            flg: 0,
            nextLevel: 0, // 级别
            levelList: [
                {
                    ability_level: 14,
                    name: '培养标准'
                },
                {
                    ability_level: 15,
                    name: '业务考核'
                },
                {
                    ability_level: 16,
                    name: '见习期'
                },
                {
                    ability_level: 17,
                    name: '正式经理'
                }
            ] // 级别数组
        }
    },
    created () {
        this.nextLevel = this.leftInfo.abilityLevel !== '' && this.leftInfo.abilityLevel >= 0 ? Number(this.leftInfo.abilityLevel) + 1 : ''
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    methods: {
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        }
    }
}
</script>
