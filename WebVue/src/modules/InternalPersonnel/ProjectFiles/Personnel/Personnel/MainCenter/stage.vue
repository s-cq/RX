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
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to=" {path: routerPath('stageThree'), query: {level: item.ability_level}}" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item,index) in levelList" :key="index"  exact>
            <p class="analyItemTit tx-center analyLightGreen" v-if="Number(item.ability_level) === leftInfo.abilityLevel + 1 ">{{item.ability_level}} 级</p>
            <p :class="['analyItemTit', 'tx-center', Number(item.ability_level) < leftInfo.abilityLevel + 1 ? 'analyShallowGreen' : '']" v-else>{{item.ability_level}} 级</p>
            <div class="analyItemCon">
                 <p class="col-md-6">
                    <span class="cLightGray pr8">标准</span>
                    <span>
                        {{`竣工额${item.achieve_standard === null || item.achieve_standard === undefined ? '--': item.achieve_standard} 订单${item.orderCompletionRateMonth === null || item.orderCompletionRateMonth === undefined? '--' : item.orderCompletionRateMonth}、
                         好评${item.orderCompletionRateMonth === null || item.orderCompletionRateMonth === undefined? '--' :item.orderCompletionRateMonth }`}}
                    </span>
                </p>
                <p class="col-md-5" v-if=" Number(item.ability_level)<= leftInfo.abilityLevel">
                    <span class="cLightGray pr8">升级时间</span>
                    <span v-if="item.hasOwnProperty('createTime')">{{$utils.format('yyyy-MM-dd', item.createTime)}}</span>
                    <span v-else>{{item.ability_level | createFilter(leftInfo.abilityLevel,levelList)}}</span>
                </p>
                 <p class="col-md-1" v-if=" Number(item.ability_level) <= leftInfo.abilityLevel">
                    <span class="cGreen tx-fb">100%</span>
                </p>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getPersonnelPersonnelStage } from '../Resources/Api'
export default {
    data () {
        return {
            nextLevel: 0, // 级别
            levelList: [] // 级别数组
        }
    },
    created () {
        this.nextLevel = this.leftInfo.abilityLevel !== '' && this.leftInfo.abilityLevel >= 0 ? Number(this.leftInfo.abilityLevel) + 1 : ''
        this.getPersonnelPersonnelStage()
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
        },
        // 获取级别数据
        getPersonnelPersonnelStage () {
            let parms = {
                user_card_no: this.leftInfo.cardNo // '00220005'
            }
            getPersonnelPersonnelStage(parms).then((results) => {
                if (results.data.StatusCode === 0) {
                    this.levelList = []
                    const currentData = results.data.Body.allMonthStandard
                    if (currentData.length > 0) {
                        if (currentData.length > 10) {
                            for (let i = 1; i < 10; i++) {
                                this.levelList.push(currentData[i])
                            }
                        } else {
                            this.levelList = currentData
                        }
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        }

    },
    watch: {
        leftInfo () {
            this.nextLevel = this.leftInfo.abilityLevel !== '' && this.leftInfo.abilityLevel ? Number(this.leftInfo.abilityLevel) + 1 : ''
            this.getPersonnelPersonnelStage()
        }
    },
    filters: {
        createFilter (startLevel, endLevel, data) {
            let time = '--'
            data.forEach(item => {
                if (startLevel < item.ability_level && item.ability_level <= endLevel) {
                    if (time === '--') {
                        if (item.hasOwnProperty('createTime')) {
                            time = item.createTime.split(' ')[0]
                        }
                    } else {
                        return false
                    }
                }
            })
            return time
        }
    }
}
</script>
