<template>
<div class="" id="projectLoad">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
    <!-- <div class="thinScroll pr10" v-scrollHeight="10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">项目</p>
            <div class="analyItemCon">
                <div class="col-md-10">
                    <div class="col-md-4"><span class="cLightGray pr8">编号</span><span>NJ19006</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">名称</span><span>中国银河证</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">单号</span><span>15-223230</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">类型</span><span>办公</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">金额</span><span>324,000.00元</span></div>
                </div>
                <div class="col-md-2" style="margin-left:-2px;">
                    <rx-qrcode :value="1" :options="{width:60}"></rx-qrcode>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">甲方</p>
            <div class="analyItemCon" :class="{'components-pullwrap': pullIndex == 1}">
                <div class="col-md-12">
                    <p class="col-md-4"><span class="cLightGray pr8">地区</span><span>南京</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">公司</span><span>中国银河证券股</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">甲方地址</span><span></span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">工程地址</span><span>南京市秦淮区区</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">甲方姓名</span><span>胡恺涛</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">甲方电话</span><span>****</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">年龄</span><span>30岁-40岁</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">性格</span><span></span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">注重</span><span>设计</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">类型</span><span>办公</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">面积</span><span>0.00</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">身份</span><span>其他</span></p>
                </div>
                <span class="components-pullbtn" @click="pullSwitch(1)"></span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">日期</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-4"><span class="cLightGray pr8">签订时间</span><span>2019-06-17</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">开工日期</span><span>2019-06-17</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">工期</span><span>30</span></div>
                </div>
            </div>
        </div>
        <router-link tag="div" :to="routerPath('exampleFloor')" exact class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">楼盘</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-4"><span class="cLightGray pr8">施工时间</span><span>无</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">防火等级</span><span>无</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">环保等级</span><span>无</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">保护材料</span><span>无</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">围挡</span><span>无</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">消费维护</span><span>无</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">空调维护</span><span>无</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">物业要求</span><span>无</span></div>
                </div>
            </div>
        </router-link>
        <div class="analyItem">
            <p class="analyItemTit tx-center">设计师</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-4"><span class="cLightGray pr8">姓名</span><span>司贝贝</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">电话</span><span>15250017196</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">配合</span><span>盛贵池</span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">合同</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-4"><span class="cLightGray pr8">合同</span><span>6页</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">报价</span><span>2页</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">其它</span><span>0页</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">分项</span><span>1页</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">现场照片</span><span>10页</span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">图纸</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-4"><span class="cLightGray pr8">效果图</span><span>2页</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">图纸</span><span>5页</span></div>
                </div>
            </div>
        </div>
        <router-link tag="div" :to="routerPath('exampleBaojiainfo')" exact class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">报价</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-4"><span class="cLightGray pr8">多报</span><span>0页</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">少报</span><span>0页</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">临时</span><span>1页</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">单方报价520.23元/㎡</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">审计成本</span></div>
                </div>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('exampleMoney')" exact class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">款项</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-6"><span class="cLightGray pr8">总金额</span><span>90,000.00元</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">装饰合同额</span><span>90,000.00元</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">税金</span><span>0.00元</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">折前工程直接费</span><span>91,855.47元</span></div>
                </div>
            </div>
        </router-link>
        <div class="analyItem">
            <p class="analyItemTit tx-center">发包协议</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-6"><span class="cLightGray pr8">安全管理协议</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">项目施工协议</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">安全生产管理承诺书</span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">回款</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-6"><span class="cLightGray pr8">期款1</span><span>首期款</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">金额</span><span>45000.0</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">比例</span><span>50.0</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">期款2</span><span>中期款</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">金额</span><span>36000.0</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">比例</span><span>40.0</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">期款3</span><span>尾款</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">金额</span><span>9000.0</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">比例</span><span>10.0</span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">材料</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-4"><span class="cLightGray pr8">固定材料</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">临时材料</span></div>
                    <div class="col-md-4"><span class="cLightGray pr8">材料商</span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">备注</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-12"><span class="cLightGray pr8">物业要求：</span><span></span></div>
                    <div class="col-md-12"><span class="cLightGray pr8">口头承诺：</span><span></span></div>
                </div>
            </div>
        </div>
    </div> -->
    <div class="thinScroll pr10" v-scrollHeight="10"></div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
    },
    mounted () {
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
    },
    watch: {

    }
}
</script>
