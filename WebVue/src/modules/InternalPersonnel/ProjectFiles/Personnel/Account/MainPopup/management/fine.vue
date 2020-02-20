<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'罚款'}"></three-title>
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
                        <span class="cLightGray pr8">罚款金额</span>
                        <span>{{item.fine_money.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">客户评分</span>
                        <span>{{item.score}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">级别比例</span>
                        <span>{{item.fine_formula | toSplict}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">实际提成</span>
                        <span title="">{{item.comprehensive_fine.toFixed(2)}}</span>
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
                </div>
            </div>
            <!-- <div class="tx-center">
                <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
            </div> -->
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            completionList: {},
            countSum: 0,
            completion_money: 0,
            comprehensive_completion: 0
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.completionList = this.$route.params.completionList
        this.load()
    },

    methods: {
        load () {
            for (var i = 0; i < this.completionList.length; i++) {
                this.countSum++
                this.completion_money += this.completionList[i].fine_money
                this.comprehensive_completion += this.completionList[i].comprehensive_fine
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
            return str
        }
    }
}
</script>
