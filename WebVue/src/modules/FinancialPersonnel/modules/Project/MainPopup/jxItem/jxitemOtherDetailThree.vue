<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【绩效】详情'}"></three-title>
    <div v-if="personal != null" class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">名片</p>
            <div class="analyItemCon">
                <div class="clearfix relative">
                    <div class="col-md-2 pr10">
                        <img alt="经理个人照片" class="person-img" :src="personal.img_url">
                    </div>
                    <div class="col-md-9">
                        <p class="col-md-3"><span class="cLightGray pr8">姓名</span><span>{{personal.userName}}</span></p>
                        <p class="col-md-4"><span class="cLightGray pr8">卡号</span><span>{{personal.userNo}}</span></p>
                        <p class="col-md-4"><span class="cLightGray pr8">工龄</span><span>{{personal.workingAge}} 月</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">入职</span><span>{{personal.u_ruzhitime}}</span></p>
                        <p class="col-md-4"><span class="cLightGray pr8">{{fourIndex == 1 ?'普级':'管级'}}</span><span>{{ fourIndex === 1 ? personal.superAbilityLevel:personal.engineerManageLevel}} 级</span></p>
                        <p class="col-md-4"><span class="cLightGray pr8">部门</span><span>{{personal.bm_name}}</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">分组</span><span>{{personal.js_name}}</span></p>
                        <p class="col-md-4"><span class="cLightGray pr8">职务</span><span class="layerui-title" data-title="工程经理">{{personal.js_name}}</span></p>
                    </div>
                    <div class="card-right2">
                        <img alt="二维码" :src="personal.code_url">
                    </div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">洽商</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="洽商利润 = （增项签单金额 - 增项发包金额 - 增项税金 - 增项代购）/ （增项签单金额 - 增项税金 - 增项代购）">洽商利润</span>
                    <span class="cGreen">{{performance.Amount | toFixed() }}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">公式</span>
                    <span class="cGreen">洽商利润 * {{personal.increment_ratio}}% * 客户评分 / 100</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="洽商提成 = 洽商利润 * 0.2 * 客户评分 / 100 ">洽商提成</span>
                    <span class="cGreen">{{personal.incrementMoney | toFixed() }}</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">罚款</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="监理罚款金额 = 支款已扣除的罚款 ">罚款金额</span>
                    <span class="cGreen">{{fourIndex === 1 ? ( performance.jlFineMoney.toFixed(2)) : (performance.gcjlFineMoney.toFixed(2)) }}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">公式</span>
                    <span class="cGreen">罚款金额 * {{personal.fine_ratio}}% * 客户评分 / 100</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="监理罚款提成 = 监理罚款金额 * 20.0%  * 客户评分 / 100">罚款提成</span>
                    <span class="cGreen">{{personal.fineMoney | toFixed() }}</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">竣工</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="绩效金额 = 绩效金额 ">绩效金额</span>
                    <span class="cGreen">{{performance.PerformanceMoney | toFixed() }}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">公式</span>
                    <span class="cGreen">绩效金额 * {{personal.complete_ratio}}% * 客户评分 / 100</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="预计绩效提成 = 绩效金额 * 0.002 * 客户评分 / 100 ">竣工提成</span>
                    <span class="cGreen">{{personal.completeMoney | toFixed() }}</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">客评</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="客户评分 = 来源于客户平台的评分数据  ">评分</span>
                    <span class="cGreen">{{performance.projectEvaluationMap ===null ? 60 : performance.projectEvaluationMap.fraction}} 分</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">评价内容</span>
                    <span class="cGreen layerui-title" data-title="此项目客户无评分，系统默认为60分">
                        {{performance.projectEvaluationMap ===null ? '此项目客户无评分，系统默认为60分' : performance.projectEvaluationMap.content}}
                    </span>
                </p>
                <!-- <p class="col-md-3">
                    <span class="cLightGray pr8">评价人</span>
                    <span class="cGreen">{{performance.projectEvaluationMap ===null ? '--' : performance.projectEvaluationMap.content}}</span>
                </p> -->
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">总提成</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="监理预计总提成 = （洽商预计提成 + 罚款预计提成 + 竣工预计提成） ">预计总提成</span>
                    <span class="cGreen">{{(personal.incrementMoney+personal.fineMoney+personal.completeMoney)/(performance.projectEvaluationMap===null?60/100:performance.projectEvaluationMap.fraction/100) | toFixed() }}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">公式</span>
                    <span class="cGreen">洽商提成 + 罚款提成 + 竣工提成</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="监理实际提成 = （洽商提成 + 罚款提成 + 竣工提成）">实际总提成</span>
                    <span class="cGreen">{{(personal.incrementMoney+personal.fineMoney+personal.completeMoney) | toFixed() }}</span>
                </p>
            </div>
        </div>
    </div>
    <div v-else class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <p class="cRed">抱歉，此地区无工程经理，暂无绩效信息！</p>
    </div>
    <div  class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div v-if="personal != null" class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="洽商提成 = 工程经理增项总提成">洽商提成 </span>
                    <span class="cGreen">{{personal.incrementMoney | toFixed() }}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="罚款提成 = 工程经理罚款提成 ">罚款提成</span>
                    <span class="cGreen">{{personal.fineMoney | toFixed() }}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="竣工提成 = 工程经理竣工提成">竣工提成</span>
                    <span class="cGreen">{{personal.completeMoney | toFixed() }}</span>
                </p>
                <!-- <p class="col-md-3 lh28">
                    <span class="c999 pr10"></span>
                        <input type="button" :value="flg==1?'监理绩效':'经理绩效'" class="uiBtn-blue uiBtn-small btnpost" data-jxinfo="0.00;洽商利润 * 洽商占比（7.0%） * 客户评分 / 100;0.00;0.00;罚款金额 * 罚款占比（7.0%） * 客户评分 / 100;0.00;138200.00;绩效金额 * 竣工占比（0.08%） * 客户评分 / 100;66.34;60;此项目客户无评分，系统默认为60分;;110.56;洽商提成 + 罚款提成 + 竣工提成;66.34;0.00;0.00;66.34;02800300;2;茶楼室内设计项目装饰工程;7.0;7.0;0.08">
                </p> -->
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
            <div v-else class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="洽商提成 = 工程经理增项总提成">洽商提成 </span>
                    <span class="cGreen">0.00</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="罚款提成 = 工程经理罚款提成 ">罚款提成</span>
                    <span class="cGreen">0.00</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="竣工提成 = 工程经理竣工提成">竣工提成</span>
                    <span class="cGreen">0.00</span>
                </p>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>

    </div>


</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            flg: 0,
            fourIndex: undefined,
            personal: {}
        }
    },
    computed: {
        ...mapGetters['leftoInfo']
    },
    created () {
        this.performance = this.$route.query.performance
        this.fourIndex = this.$route.query.index
        if (this.$route.query.index === 1) {
            this.personal = this.$route.query.performance.superMap
        } else {
            this.personal = this.$route.query.performance.engineerMap
        }
    },
    methods: {

    },
    watch: {
        leftInfo () {
            this.flg = this.$route.query.index
        },
        $route () {
            this.performance = this.$route.query.performance
            this.fourIndex = this.$route.query.index
            if (this.$route.query.index === 1) {
                this.personal = this.$route.query.performance.superMap
            } else {
                this.personal = this.$route.query.performance.engineerMap
            }
        }
    },
    filters: {
        // 时间转换
        myFormatDate (date) {
            if (date === null || date === '') {
                return '--'
            } else {
                return this.$utils.format('yyyy-MM-dd', date)
            }
        },
        // 金额过滤
        toFixed (value) {
            if (value == null || isNaN(value) || value === undefined) {
                return '0.00'
            } else {
                return value.toFixed(2)
            }
        }
    }

}
</script>
<style lang="scss" scoped>
    .orderDetailBtn {
       background: #43ccec;
        color: #fff;
        display: block;
        width: 60px;
        border-radius: 4px;
        margin: 0 auto;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
    }
    .staticSRyle {
        width: 25px;
        line-height: 25px!important;
        top: 2px;
        left: 2px;
        background: #000;
        opacity: .6;
        height: 25px;
        position: absolute;
        border-radius: 5px;
        color: #fff;
        text-align: center;
    }
    .person-img, .person-img-noround {
    border-radius: 100px;
    overflow: hidden;
    border: 1px solid #e6e6e6;
    width: 65px;
    height: 65px;
    display: block;
    margin: 0 auto;
    margin-top: 8px;
}
.card-right2 {
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -32px;
}
.card-right2 img {
    border: 1px solid #e6e6e6;
    width: 65px;
    height: 65px;
}

</style>
