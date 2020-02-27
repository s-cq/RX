<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'竣工'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem" v-for="(item,index) in completionList" :key="index">
                <p class="analyItemTit tx-center">项目{{index+1}}</p>
                <div class="analyItemCon">

                    <p class="col-md-4">
                        <span class="cLightGray pr8">名称</span>
                        <span>{{item.project_name| slice(0,4)}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">单号</span>
                        <span>{{item.project_id}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">绩效金额</span>
                        <span>{{item.completion_money.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">客户评分</span>
                        <span>{{item.score}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">级别比例</span>
                        <span>{{item.completion_formula | toSplict}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">实际提成</span>
                        <span title="">{{item.comprehensive_completion.toFixed(2)}}</span>
                    </p>
                    <!-- <span class="circlemark circlemark-yellow">中</span> -->
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">项目数</span>
                        <span>{{countSum}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">绩效金额</span>
                        <span>{{completion_money.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">级别提成</span>
                        <span title="">{{comprehensive_completion.toFixed(2)}}</span>
                    </p>
                    <span class="circlemark" :class="junStateObject.hasOwnProperty('stageName') && junStateObject.stageNum !== null ? junStateObject.stageNum : 0 | stageColor">{{junStateObject.hasOwnProperty('stageName') && junStateObject.stageName !== null ? junStateObject.stageName : '' }}</span>
                    <!-- <span class="circlemark" :class="junStateObject.hasOwnProperty('stageName') && junStateObject.stageNum !== null ? junStateObject.stageNum : 0 | stageColor">{{junStateObject.hasOwnProperty('stageName') && junStateObject.stageName !== null ? junStateObject.stageName : '' }}</span> -->
                </div>

            </div>
            <!-- <div class="tx-center">
                <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
            </div> -->
        </div>
    </div>
</template>
<script>
import { getExcellentGoodModeratePoor } from '../../Resources/Api'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            completionList: {},
            countSum: 0,
            completion_money: 0,
            comprehensive_completion: 0,
            junStateObject: {}, // 竣工的状态按钮显示
            fineStateObjdect: {}, // 罚款的状态按钮显示
            qiaStateObjdect: {}, // 洽商的状态按钮显示
            junQuanzhong: 0, // 竣工的权重
            fineQuanzhong: {}, // 罚款的权重
            qiaQuanzhong: {} // 洽商的权重
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.completionList = this.$route.params.completionList
        this.load()
        const junMoney = (this.completion_money) / 10000
        this.getExcellentGoodModeratePoor(junMoney, 1)
    },

    methods: {
    // 获取状态中的按钮
        getExcellentGoodModeratePoor (money, flag) {
            let type = 0
            if (flag === 1) {
                type = 5
            } else if (flag === 2) {
                type = 9
            } else if (flag === 3) {
                type = 10
            }
            getExcellentGoodModeratePoor({
                user_card_no: this.leftInfo.cardNo,
                standard: money,
                abilityLevel: this.leftInfo.abilityLevel,
                abilityType: type
            }).then(results => {
                if (results.data.StatusCode === 0) {
                    this.jungongStandard = results.data.Body
                    this.$set(this.junStateObject, 'stageName', results.data.Body.standardName)
                    this.$set(this.junStateObject, 'stageNum', results.data.Body.userGoodBad)
                    // this.junStateObject.stageName = results.data.Body.standardName
                    // this.junStateObject.stageNum = results.data.Body.userGoodBad
                    this.junQuanzhong = results.data.Body.quanzhong
                    console.log(this.junStateObject)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        load () {
            for (var i = 0; i < this.completionList.length; i++) {
                this.countSum++
                this.completion_money += this.completionList[i].completion_money
                this.comprehensive_completion += this.completionList[i].comprehensive_completion
            }
        },
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        }
    },

    filters: {
        toSplict: function (str) {
            str = str.substring(str.indexOf('（') + 1, str.indexOf('）'))
            console.log(str + 'str')
            return str
        },
        stageColor (str) {
            switch (Number(str)) {
            case 1:
                return 'circlemark-green'
            case 2:
                return 'circlemark-lightGreen'
            case 3:
                return 'circlemark-yellow'
            case 4:
                return 'circlemark-lightRed'
            case 5:
                return 'circlemark-purple'
            }
        }

    }
}
</script>
