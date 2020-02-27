<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="col-md-4 ">
                    <span class="cLightGray pr8">下级</span>
                    <span>{{nextLevel > 12 ? 12 : nextLevel}}级</span>
                </p>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="94">
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
    <div class="pr10">
        <div class="analyItem ">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
// import { getPersonnelPersonnelStage } from '../Resources/Api'
export default {
    data () {
        return {
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
