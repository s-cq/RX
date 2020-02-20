<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'入口'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">卡号登录</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">卡号</span><span class="curUserNo">g00006062</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">密码</span>******</p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">手机登录</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">手机</span><span class="curUserMobile">18627098688</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">密码</span>******</p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">二维码</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8 fl" style="text-align: center; margin-top: 10px;">二维码</span><img alt="二维码" style="width:45px;height: 45px;" class="ewmImg" src="https://piapi.rxjy.com//Content/image/ewm/RXBE8D5D851EE743599EE53E459BF4C084.png"></p>
                <p class="col-md-4" style="margin-top: 10px; margin-left:-60px;text-align: center;"><span class="cLightGray pr8">密码</span>******</p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">密码设置</p>
            <div class="analyItemCon">
                <p class="col-md-12">
                    <span class="cLightGray pr8 fl">验&nbsp;&nbsp;证&nbsp;码</span>
                    <input type="text" class="width80 fl validatecode">&nbsp;&nbsp;
                        <input type="button" value="获取验证码" class="uiBtn-normal uiBtn-green  getvcode">
                </p>
                <p class="col-md-12 pt20"><span class="cLightGray pr8 fl">新&nbsp;&nbsp;密&nbsp;码</span><input type="password" class="width80 fl newpasswords"></p>
                <p class="col-md-12 pt20"><span class="cLightGray pr8 fl">密码确认</span><input type="password" class="width80 fl newpasswords_">&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="重置密码" class="uiBtn-normal uiBtn-blue  updatepasswords " style="width:80px;"></p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">行为</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">最近登录</span><span class="lastedlogintime">2019/09/19 15:14</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">登录详情</span><span class="loginlist">--</span></p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-9"></p>
                <p class="fr col-md-3">
                </p>
                <p class="fl"><span class="circlemark circlemark-green">完</span></p>
            </div>
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
