<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'攻坚'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem" v-for="(item, index) in valiantList" :key="index">
                <p class="analyItemTit tx-center">攻坚{{index + 1}}</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4"><span class="cLightGray pr8">开始</span><span>{{item.keep_time}}</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">地区</span><span>{{item.keep_end_time}}</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">状态</span><span :class="[item.finish_status == 0 ? 'cGreen' : 'cRed']">{{item.finish_status == 0 ? '完成' : '未完成'}}</span></p>

                    <p class="fl col-md-4"><span class="cLightGray pr8">结束</span><span>{{item.keep_end_time}}</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">补助</span><span>{{item.role_money}}</span></p>
                    <span href="javascript:" class="circlemark" :class="item.overall_value_status | mangerColor">{{item.overall_value_status | resultColor}}</span>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <!-- <p class="fl col-md-9"></p>
                    <p class="fr col-md-3">
                        <span class="cLightGray">统计</span>
                        <span class="cGreen fz14 bold">0分</span>
                    </p>
                    <p class="fl"><span class="circlemark circlemark-green">优</span></p> -->
                </div>
            </div>
            <!-- <div class="tx-center">
                <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
            </div> -->
        </div>
    </div>
</template>
<script>
import { getUseUseThreeEndTacklingDetail } from '../../Resources/Api'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            valiantList: {},
            valiant: {}
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.load()
    },
    filters: {
        mangerColor: function (str) {
            switch (str) {
            case 0:
                return 'circlemark-purple'
            case 1:
                return 'circlemark-green'
            case 2:
                return 'circlemark-lightGreen'
            case 3:
                return 'circlemark-yellow'
            case 4:
                return 'circlemark-lightRed'
            }
        },
        resultColor: function (str) {
            switch (str) {
            case 0:
                return '未'
            case 1:
                return '优'
            case 2:
                return '良'
            case 3:
                return '中'
            case 4:
                return '差'
            }
        }
    },
    methods: {
        load () {
            getUseUseThreeEndTacklingDetail({ cardNo: this.leftInfo.cardNo })
                .then(result => {
                    if (result !== null) {
                        this.valiant = result
                        this.valiantList = result.list
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

}

</script>
