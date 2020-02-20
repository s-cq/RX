<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'职务'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem">
                <p class="analyItemTit tx-center">名片</p>
                <div class="analyItemCon pr10">
                    <span><img src="https://proj01.oss-cn-beijing.aliyuncs.com/common/1568698952Gch46Qnbmz.jpg"
                            height="80" width="60" class="imageClassThree"></span>
                </div>
                <div class="analyItemCon col-md-10">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">姓名</span>
                        <span class="pNameThree">张国平</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">卡号</span>
                        <span class="pCardNoThree">g00006062</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8 ">年龄</span>
                        <span class="ageClass"></span>
                    </p>


                    <p class="col-md-4">
                        <span class="cLightGray pr8">工龄</span>
                        <span class="pSeniorityThree">0月</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">签约</span>
                        <span class="dataTimeClassThree">2019-09-17</span>
                    </p>

                    <p class="col-md-4">
                        <span class="cLightGray pr8">级别</span>
                        <span class="rankClassThree">4</span>
                    </p>

                    <p class="col-md-4">
                        <span class="cLightGray pr8">地区</span>
                        <span class="regionClassThree">汉街</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">隶属</span>
                        <span class="memberOfClass">汉街</span>
                    </p>

                    <p class="col-md-4">
                        <span class="cLightGray pr8">职务</span>
                        <span>项目经理</span>
                    </p>
                </div>
                <div class="col-md-2" style="padding-top: 30px;">
                    <img style="width:45px;height: 45px;" alt="二维码" class="QRclassThree"
                        src="https://proj01.oss-cn-beijing.aliyuncs.com/camera/74b6722f-a761-450d-b1a8-7f0608014f21.png">
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="fl col-md-9"></p>
                    <p class="fr col-md-3">
                        <span class="cLightGray">统计</span>
                        <span class="cGreen fz14 bold">0分</span>
                    </p>
                    <p class="fl"><span class="circlemark circlemark-green">优</span></p>
                </div>
            </div>
            <div class="tx-center">
                <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    created () {

    },
    methods: {

    }
}

</script>
