<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'人员信息'}"></three-title>
     <div class="layerRtb-scroll thinScroll" v-scrollHeight = "187" v-if="currentIndex === 1 ">
        <div class="analyItem">
            <p class="analyItemTit tx-center">基础信息</p>
            <div class="analyItemCon">
                <div class="col-md-12 flex">
                    <rx-viewer style="position:relative" v-if="userData.image!=='无'">
                        <div class="clearfix tx-center">
                            <div class="mr10">
                                <img :src="userData.image | smallImg(80, 80)">
                            </div>
                        </div>
                    </rx-viewer>
                     <rx-viewer style="position:relative" v-else>
                        <div class="clearfix tx-center">
                            <div class="mr10">
                                <img :src="data | smallImg(80, 80)">
                            </div>
                        </div>
                    </rx-viewer>
                    <div class="col-md-8" style="height:62ox;line-height:30px">
                        <div class="col-md-6"><span class="cLigthGray pr8">领域</span><span>{{userData.bigType ? userData.bigType : ''}}</span></div>
                        <div class="col-md-6"><span class="cLigthGray pr8">资费</span><span>{{userData.tariff ? userData.tariff : ''}}/㎡</span></div>
                        <div class="col-md-6"><span class="cLigthGray pr8">风格</span><span>{{userData.style ? userData.style : ''}}</span></div>
                        <div class="col-md-6"><span class="cLigthGray pr8">参与项目</span><span>{{userData.totalNumberOfCooperation ? userData.totalNumberOfCooperation : ''}}</span></div>
                        <div class="col-md-6"><span class="cLigthGray pr8">进行中项目</span><span>{{userData.completeOnTime ? userData.completeOnTime : ''}}</span></div>
                        <div class="col-md-6"><span class="cLigthGray pr8">竣工项目</span><span>{{userData.completionProjectCount ? userData.completionProjectCount : ''}}</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合实力</p>
            <div class="analyItemCon">
                <div class="col-md-4"><span class="cLigthGray pr8">面积</span><span class="fz18 cGreen">{{userData.totalArea ? userData.totalArea : ''}}m²</span></div>
                <div class="col-md-4"><span class="cLigthGray pr8">总签单</span><span class="fz18 cGreen">￥{{userData.totalSignMoney ? userData.totalSignMoney : ''}}</span></div>
                <div class="col-md-4"><span class="cLigthGray pr8">中标</span><span class="fz18 cGreen">{{userData.winningBid? userData.winningBid : '0'}}个</span></div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合评分</p>
            <div class="analyItemCon">
                <div class="col-md-3"><span class="cLigthGray pr8">评分</span><span class="fz18 cGreen">{{userData.score ? userData.score : '0'}}分</span></div>
                <div class="col-md-3"><span class="cLigthGray pr8">近三个月合作</span><span class="fz18 cGreen">{{userData.sumNumberOfCooperation ? userData.sumNumberOfCooperation : '0'}}个</span></div>
                <div class="col-md-3"><span class="cLigthGray pr8">好评</span><span class="fz18 cGreen">{{userData.excellentEvaluationCount ? userData.excellentEvaluationCount : '0'}}个</span></div>
                <div class="col-md-3"><span class="cLigthGray pr8">差评</span><span class="fz18 cGreen">{{userData.differentEvaluationCount ? userData.differentEvaluationCount : '0'}}个</span></div>
            </div>
        </div>
    </div>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "187" v-if="currentIndex === 2">
        <div class="analyItem">
            <p class="analyItemTit tx-center">基础信息</p>
            <div class="analyItemCon">
                <div class="col-md-12 flex">
                    <rx-viewer style="position:relative">
                        <div class="clearfix tx-center">
                            <div class="mr10" v-if="userData.managerImg!=='无'">
                                <img :src="userData.managerImg | smallImg(80, 80)">
                            </div>
                            <div class="mr10" v-else="" >
                                <img :src="data | smallImg(80, 80)">
                            </div>
                        </div>
                    </rx-viewer>
                    <div class="col-md-8" style="height:62ox;line-height:30px">
                        <div class="col-md-6"><span class="cLigthGray pr8">从业</span><span>{{userData.managerAge}} 年</span></div>

                        <div class="col-md-6"><span class="cLigthGray pr8">进行中项目</span><span>{{userData.managerCount}}</span></div>
                        <div class="col-md-6"><span class="cLigthGray pr8">竣工项目</span><span>{{userData.managerComplete}}</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="analyItem authenInfo">
            <p class="analyItemTit tx-center">认证信息</p>
            <div class="analyItemCon">
                <div class="col-md-6">
                    <span class="cLigthGray pr8">资格证书</span>
                    <span><img src="../Resources/Static/images/attest_icon2.png" alt=""></span>
                </div>
                <div class="col-md-6">
                    <span class="cLigthGray pr8">个人证书</span>
                    <span><img src="../Resources/Static/images/attest_icon1.png" alt=""></span>
                </div>
                <div class="col-md-6">
                    <span class="cLigthGray pr8">手机认证</span>
                    <span><img src="../Resources/Static/images/attest_icon1.png" alt=""></span>
                </div>
                <div class="col-md-6">
                    <span class="cLigthGray pr8">身份认证</span>
                    <span><img src="../Resources/Static/images/attest_icon1.png" alt=""></span>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合实力</p>
            <div class="analyItemCon">
                <div class="col-md-4"><span class="cLigthGray pr8">面积</span><span class="fz18 cGreen">{{userData.managerArea}}m²</span></div>
                <div class="col-md-4"><span class="cLigthGray pr8">成交额</span><span class="fz18 cGreen">￥{{userData.managerMoney}}</span></div>
                <div class="col-md-4"><span class="cLigthGray pr8">回头客</span><span class="fz18 cGreen">0个</span></div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合评分</p>
            <div class="analyItemCon">
                <div class="col-md-3"><span class="cLigthGray pr8">评分</span><span class="fz18 cGreen">0分</span></div>
                <div class="col-md-3"><span class="cLigthGray pr8">投诉数</span><span class="fz18 cGreen">0个</span></div>
                <div class="col-md-3"><span class="cLigthGray pr8">好评</span><span class="fz18 cGreen">0个</span></div>
                <div class="col-md-3"><span class="cLigthGray pr8">差评</span><span class="fz18 cGreen">0个</span></div>
            </div>
        </div>
    </div>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "187" v-if="currentIndex === 3">
        <div class="analyItem">
            <p class="analyItemTit tx-center">基础信息</p>
            <div class="analyItemCon">
                <div class="col-md-12 flex">
                    <rx-viewer style="position:relative">
                        <div class="clearfix tx-center">
                            <div class="mr10" v-if="userData.supervisorImg!=='无'">
                                <img :src="userData.supervisorImg | smallImg(80, 80)">
                            </div>
                            <div class="mr10" v-else="">
                                <img :src="data | smallImg(80, 80)">
                            </div>
                        </div>
                    </rx-viewer>
                    <div class="col-md-8" style="height:62ox;line-height:30px">
                        <div class="col-md-6"><span class="cLigthGray pr8">从业</span><span>{{userData.supervisorAge}} 年</span></div>
                        <div class="col-md-6"><span class="cLigthGray pr8">进行中项目</span><span>{{userData.superCount}}</span></div>
                        <div class="col-md-6"><span class="cLigthGray pr8">竣工项目</span><span>{{userData.superComplete}}</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="analyItem authenInfo">
            <p class="analyItemTit tx-center">认证信息</p>
            <div class="analyItemCon">
                <div class="col-md-6">
                    <span class="cLigthGray pr8">资格证书</span>
                    <span><img src="../Resources/Static/images/attest_icon2.png" alt=""></span>
                </div>
                <div class="col-md-6">
                    <span class="cLigthGray pr8">个人证书</span>
                    <span><img src="../Resources/Static/images/attest_icon1.png" alt=""></span>
                </div>
                <div class="col-md-6">
                    <span class="cLigthGray pr8">手机认证</span>
                    <span><img src="../Resources/Static/images/attest_icon1.png" alt=""></span>
                </div>
                <div class="col-md-6">
                    <span class="cLigthGray pr8">身份认证</span>
                    <span><img src="../Resources/Static/images/attest_icon1.png" alt=""></span>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合实力</p>
            <div class="analyItemCon">
                <div class="col-md-4"><span class="cLigthGray pr8">面积</span><span class="fz18 cGreen">{{userData.superArea}}m²</span></div>
                <div class="col-md-4"><span class="cLigthGray pr8">成交额</span><span class="fz18 cGreen">￥{{userData.superMoney}}</span></div>
                <div class="col-md-4"><span class="cLigthGray pr8">回头客</span><span class="fz18 cGreen">0个</span></div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合评分</p>
            <div class="analyItemCon">
                <div class="col-md-3"><span class="cLigthGray pr8">评分</span><span class="fz18 cGreen">0分</span></div>
                <div class="col-md-3"><span class="cLigthGray pr8">投诉数</span><span class="fz18 cGreen">0个</span></div>
                <div class="col-md-3"><span class="cLigthGray pr8">好评</span><span class="fz18 cGreen">0个</span></div>
                <div class="col-md-3"><span class="cLigthGray pr8">差评</span><span class="fz18 cGreen">0个</span></div>
            </div>
        </div>
    </div>

    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "187" v-if="currentIndex === 4">
        <div class="analyItem">
            <p class="analyItemTit tx-center">基础信息</p>
            <div class="analyItemCon">
                <div class="col-md-12 flex">
                    <rx-viewer style="position:relative">
                        <div class="clearfix tx-center">
                            <div class="mr10" v-if="userData.image!=='无'">
                                <img :src="userData.image | smallImg(80, 80)">
                            </div>
                            <div class="mr10" v-else="">
                                <img :src="data | smallImg(80, 80)">
                            </div>
                        </div>
                    </rx-viewer>
                    <div class="col-md-8" style="height:62ox;line-height:30px">
                        <div class="col-md-6"><span class="cLigthGray pr8">从业</span><span>{{userData.workYear}} 年</span><span class="cLigthGray pr8">团队 {{userData.workerNum}} 人</span></div>
                        <div class="col-md-6"><span class="cLigthGray pr8">进行中项目</span><span>{{userData.nowNum}}</span></div>
                        <div class="col-md-6"><span class="cLigthGray pr8">竣工项目</span><span>{{userData.oldNum}}</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="analyItem authenInfo">
            <p class="analyItemTit tx-center">认证信息</p>
            <div class="analyItemCon">
                <div class="col-md-6">
                    <span class="cLigthGray pr8">资格证书</span>
                    <span><img src="../Resources/Static/images/attest_icon2.png" alt=""></span>
                </div>
                <div class="col-md-6">
                    <span class="cLigthGray pr8">个人证书</span>
                    <span><img src="../Resources/Static/images/attest_icon1.png" alt=""></span>
                </div>
                <div class="col-md-6">
                    <span class="cLigthGray pr8">手机认证</span>
                    <span><img src="../Resources/Static/images/attest_icon1.png" alt=""></span>
                </div>
                <div class="col-md-6">
                    <span class="cLigthGray pr8">身份认证</span>
                    <span><img src="../Resources/Static/images/attest_icon1.png" alt=""></span>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合实力</p>
            <div class="analyItemCon">
                <div class="col-md-4"><span class="cLigthGray pr8">面积</span><span class="fz18 cGreen">{{userData.proArea}}m²</span></div>
                <div class="col-md-4"><span class="cLigthGray pr8">成交额</span><span class="fz18 cGreen">￥{{userData.money}}</span></div>
                <div class="col-md-4"><span class="cLigthGray pr8">回头客</span><span class="fz18 cGreen">{{userData.allNum}}个</span></div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合评分</p>
            <div class="analyItemCon">
                <div class="col-md-3"><span class="cLigthGray pr8">评分</span><span class="fz18 cGreen">{{userData.point}}分</span></div>
                <div class="col-md-3"><span class="cLigthGray pr8">投诉数</span><span class="fz18 cGreen">{{userData.complaint}}</span></div>
                <div class="col-md-3"><span class="cLigthGray pr8">好评</span><span class="fz18 cGreen">{{userData.good}}</span></div>
                <div class="col-md-3"><span class="cLigthGray pr8">差评</span><span class="fz18 cGreen">{{userData.finish}}</span></div>
            </div>
        </div>
    </div>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "187" v-if="currentIndex === 5 ">
        <div class="analyItem">
            <p class="analyItemTit tx-center">基础信息</p>
            <div class="analyItemCon">
                <div class="col-md-12 flex">
                    <rx-viewer style="position:relative">
                        <div class="clearfix tx-center">
                            <div class="mr10">
                                <img :src="customerImg | smallImg(80, 80)" style="width:80px;height:80px">
                            </div>
                        </div>
                    </rx-viewer>
                    <div class="col-md-8" style="height:62px;line-height:30px">
                        <div class="col-md-6"><span class="cLigthGray pr8">姓名</span><span>张萍</span></div>
                        <div class="col-md-6"><span class="cLigthGray pr8">编号</span><span>01011826</span></div>
                        <div class="col-md-6"><span class="cLigthGray pr8">级别</span><span>10级</span></div>
                        <div class="col-md-6"><span class="cLigthGray pr8">专线</span><span>400-070-5088</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">工作内容</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <span class="cLigthGray pr8">投诉受理范围:</span>
                    <span>设计师图纸、施工进度、工艺质量、施工现场安全及环境、材料使用等。</span>
                </div>
                <div class="col-md-12">
                    <span class="cLigthGray pr8">维修范围:</span>
                    <span>正常竣工后"质保期"内凡因我方施工造成的质量缺陷问题,我方无偿进行售后维保,质保时间与合同质保期一致。</span>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div> -->
</div>
</template>
<script>
export default {
    data () {
        return {
            currentIndex: '',
            data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1572060039EDheHQcxbw.png',
            customerImg: 'https://vip.wenes.cn/khmember/images/auditTeam/kefu.jpg',
            userData: {}
        }
    },
    created () {
        this.currentIndex = Number(this.$route.query.index)
        this.userData = this.$route.query.data
        console.log(this.$route.query.index)
        console.log(this.$route.query.data)
    },
    methods: {
    },
    watch: {
        $route () {
            this.currentIndex = Number(this.$route.query.index)
            this.userData = this.$route.query.data
        }
    }
}
</script>
