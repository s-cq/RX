<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <!-- <p class="col-md-3">
                    <span class="cLightGray pr8">总计</span>
                    <span>7个</span>
                </p> -->
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <!-- 合同账 -->
        <router-link tag="div" exact :to="routerPath('costDetailThreeHT?index='+1+'')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">合同账</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="合同金额= 与甲方（客户）签订合同金额">合同金额</span><br>
                    <span>480,000.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="成本金额（发包金额） = 与丙方（项目经理）实际的发包发包额">成本金额</span><br>
                    <span>425,000.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">毛利</span><br>
                    <span>55,000.00</span>
                </p>
                    <span class="circlemark circlemark-green">完</span>
            </div>
        </router-link>
        <!-- 成本账 -->
        <router-link tag="div" exact :to="routerPath('costDetailThreeCB?index='+2+'')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">成本账</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="发包金额 = 实际发包给项目经理的发包额">发包金额</span><br>
                    <span>425,000.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="计划总人工 = 来源工人联盟系统人工计划总额接口">计划人工</span><br>
                    <span>157,109.58</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="计划材料 = 来源材料系统材料计划总额">计划材料</span><br>
                    <span>267,890.42</span>
                </p>
                    <span class="circlemark circlemark-green">完</span>
            </div>
        </router-link>
        <!-- 人工 -->
        <router-link tag="div" exact :to="routerPath('costDetailThreeRG?index='+3+'')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">人工</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="计划总人工 = 来源工人联盟系统人工计划总额接口">计划总人工</span><br>
                    <span>157,109.58</span>
                </p>
                <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="人工可用 =（发包金额 - 材料计划总额）* 0.7 * 回款比例（不包含增项） - 已付人工 - 待付人工 ">人工可用</span><br>
                        <span>-59,016.31</span>
                </p>
                <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="未用人工 =人工计划总额 - 已付人工 - 待付人工 ">未用人工</span><br>
                        <span>21,109.58</span>
                </p>
                <span class="circlemark circlemark-green">完</span>
            </div>
        </router-link>
        <!-- 材料 -->
        <router-link tag="div" exact :to="routerPath('costDetailThreeCL?index='+4+'')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">材料</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="计划总材料 = 发包金额 - 计划总人工">计划总材料</span><br>
                    <span>267,890.42</span>
                </p>
                <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="材料可用 = 项目可用 - 人工可用">材料可用</span><br>
                        <span>-7,225.41</span>
                </p>
                <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="未用材料 = 材料计划总额 - 已付/待付材料 - 未付材料款">未用材料</span><br>
                        <span>217,681.32</span>
                </p>
                <span class="circlemark circlemark-green">完</span>
            </div>
        </router-link>
        <!-- 奖罚 -->
        <router-link tag="div" exact :to="routerPath('costDetailThreeJF?index='+5+'')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">奖罚</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">待办罚款</span><br>
                    <span>0.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">地方罚款</span><br>
                    <span>0.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">集团罚款</span><br>
                    <span>0.00</span>
                </p>

            </div>
        </router-link>
        <!-- 分项账 -->
        <router-link tag="div" exact :to="routerPath('costDetailThreeFX?index='+6+'')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">分项账</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">分项总额</span>
                    <span>0.00</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="发包日期 = 项目实际的发包日期">发包日期</span>
                        <span>2019-12-25</span>
                </p>
                    <span class="circlemark circlemark-green">完</span>
            </div>
        </router-link>
        <!-- 盈余账 -->
        <router-link tag="div" exact :to="routerPath('costDetailThreeYY?index='+7+'')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">盈余账</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title=" 盈余总额 =发包金额 - 计划总人工（来源工人联盟人工计划总额） - 计划总材料（来源材料业务材料计划总额） - 夜间施工费 - 远程施工费">盈余总额</span>
                        <span class="cRed layerui-title" data-title="【预警】 = 盈余总额大于10000或者盈余总额小于 -10000都属于问题，否则属于正常">-35,662.07</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">重审金额</span>
                    <span>0.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">预警</span>
                    <span class="cRed">问题</span>
                </p>
                <span class="circlemark circlemark-green">完</span>
                <div class="fixedTrangle">
                    <i  class="fixedtips"></i>
                    <div class="fixedtipscon pt10 pb10" style="display: none;">
                        <i></i>
                        <p>【盈余总额】 = 发包金额 - 计划总人工（来源工人联盟人工计划总额） - 计划总材料（来源材料业务材料计划总额） - 夜间施工费 - 远程施工费</p>
                        <p>【预警】 = 盈余总额大于10000或者盈余总额小于 -10000都属于问题，否则属于正常</p>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
    <div class="pr10">
        <router-link tag="div" exact :to="routerPath('costDetailThreeHandel?index='+index+'')" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item,index) in qualityList" :key="index">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8"> 合同</span>
                        <span style="color:green;font-weight:bolder">完</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8"> 成本</span>
                        <span style="color:green;font-weight:bolder">完</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8"> 人工</span>
                        <span style="color:green;font-weight:bolder">完</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8"> 材料</span>
                        <span style="color:green;font-weight:bolder">完</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8"> 分项</span>
                        <span style="color:green;font-weight:bolder">完</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8"> 盈余</span>
                        <span style="color:green;font-weight:bolder">完</span>
                </p>
                    <span class="circlemark circlemark-green">完</span>
        </div>
        </router-link>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            qualityList: [{
                src: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1558084186pbTTM587f3.png',
                isShow: false,
                name: '开槽修补',
                qualityNumber: null,
                worker: null,
                area: '电器工程',
                local: '其他',
                content: '修补采用1:3-1:4的水泥砂浆将孔洞、线管槽回填处理'
            },
            {
                src: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1558084186pbTTM587f3.png',
                isShow: false,
                name: '明装灯具',
                qualityNumber: null,
                worker: null,
                area: '电器工程',
                local: '其他',
                content: '据图纸安装位置，画出灯具固定位置，将电源线与灯具接线端子连接，用螺丝将灯具与挂件连接，用自攻螺丝将灯具底座安装在顶面，面罩卡扣与底座连接紧密，保持横平竖直，灯具安装牢固、无松动后通电调试。'
            },
            {
                src: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1558084186pbTTM587f3.png',
                isShow: false,
                name: '轻钢龙骨双面单层石膏板隔墙',
                qualityNumber: null,
                worker: null,
                area: '间隔工程',
                local: '其他',
                content: '根据施工方案进行放线定位，清理基层，用电锤安装12ø钻头打眼，其深度不小于60mm，将眼内灰尘清理干净，塞入10ø膨胀螺栓，将螺栓拧紧固定，固定点间距应不大于600mm，固定点至两端距离不大于100mm。竖向龙骨间距不超过400mm,与天地龙骨拉铆钉连接处理，单面封板进行岩棉填充，隐蔽验收后进行双面封板。'
            }]
        }
    },
    created () {

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
<style lang="scss" scoped>
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
    .fixedRight {
        position: absolute;
        right: 10px;
        top: 14%;
        margin-top: -12px;
        font-size: 14px;
        font-weight: 700;
    }
</style>
