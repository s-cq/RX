<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <!-- <p class="col-md-3">
                    <span class="cLightGray pr8">总计</span>
                    <span>7个</span>
                </p>
                <p class="col-md-3 cursor">
                    <span class="cLightGray pr8">已完成</span>
                    <span> 0个</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">占比</span>
                    <span>0%</span>
                </p> -->
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <router-link tag="div" exact :to="routerPath('costDetailThree?index='+index+'')" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item,index) in qualityList" :key="index">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">
                <p class="col-md-4 cursor" >
                    <span class="pr8">预留</span><br>
                    <span>0</span>
                </p>
                <p class="col-md-4 cursor" >
                    <span class="pr8">预留</span><br>
                    <span>0</span>
                </p>
                 <p class="col-md-4 cursor" >
                    <span class="pr8">预留</span><br>
                    <span>0</span>
                </p>
                <!-- <div class="fixedTrangle">
                    <a href="javascript:" class="fixedtips"></a>
                    <div class="fixedtipscon pt10 pb10" style="display: none;">
                        <i></i>
                        <p>【盈余总额】 = 发包金额 - 计划总人工（来源工人联盟人工计划总额） - 计划总材料（来源材料业务材料计划总额） - 夜间施工费 - 远程施工费</p>
                        <p>【预警】 = 盈余总额大于10000或者盈余总额小于 -10000都属于问题，否则属于正常</p>
                    </div>
                </div> -->
            </div>
        </router-link>
    </div>
    <div class="pr10">
        <router-link tag="div" exact :to="routerPath('costDetailThreeHandel?index='+index+'')" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item,index) in qualityList" :key="index">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-2 cursor" style="cursor: pointer;">
                    <span class="pr8">待分配</span><br>
                    <span>0项</span>
                </p>
                <p class="col-md-2 cursor" style="cursor: pointer;">
                    <span class="pr8">工传</span> <br>
                    <span>0项</span>
                </p>
                <p class="col-md-2 cursor" style="cursor: pointer;">
                    <span class="pr8">项验</span> <br>
                    <span>0项</span>
                </p>
                <p class="col-md-2 cursor" style="cursor: pointer;">
                    <span class="pr8">工返</span><br>
                    <span>0项</span>
                </p>
                <p class="col-md-2 cursor" style="cursor: pointer;">
                    <span class="pr8">客评</span> <br>
                    <span>0项</span>
                </p>
                <p class="col-md-2 cursor" style="cursor: pointer;">
                    <span class="pr8">历史</span> <br>
                    <span>0项</span>
                </p>
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
