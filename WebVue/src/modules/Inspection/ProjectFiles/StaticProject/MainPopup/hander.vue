<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'处理'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "270">
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon"></div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon"></div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon"></div>
        </div>
    </div>
    <div class="layerRtb-footer" style="height:270px;">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div class="clearfix">
            <div class="col-md-7 handle-left pb10" style="min-height: 172px;">
                <div class="clearfix">
                    <h2 class="uiTitle2 mt3">
                        <i class="uiTitle-icon"></i>
                        处理
                    </h2>
                    <ul class="handle-ul mt5">
                        <li class="current">正常</li>
                        <li>整改</li>
                        <li>淘汰</li>
                        <li>奖罚</li>
                        <li>红包</li>
                        <li>培训</li>
                    </ul>
                </div>
                <div class="pr10">
                    <textarea class="evaluate-textarea"></textarea>
                </div>
            </div>
            <div class="col-md-5">
                <div class="tx-center pl5">
                    <div class="dis-il-block">
                        <div class="clearfix pb10 pt10">
                            <span class="fl lh28 ">积分：</span>
                            <strong class="pr5 fl lh28 cRed fz16">-</strong>
                            <div class="dis-il-block fl">
                                <div class="width65 uiText-selfAuto">
                                    <input type="text" class="form-control noradius cRed">
                                    <div class="uiText-commonIcon uiText-commonIcon-right">分</div>
                                </div>
                            </div>
                            <strong class="pr5 fl lh28 cGreen fz16 ml4">+</strong>
                            <div class="dis-il-block fl">
                                <div class="width65 uiText-selfAuto">
                                    <input type="text" class="form-control noradius">
                                    <div class="uiText-commonIcon uiText-commonIcon-right">分</div>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix pb10">
                            <span class="fl lh28">奖罚：</span>
                            <strong class="pr5 fl lh28 cRed fz16">-</strong>
                            <select class="fl width65 cRed">
                                <option>请选择</option>
                                <option>100元</option>
                                <option>200元</option>
                            </select>
                            <strong class="pr5 fl lh28 cGreen fz16 ml4">+</strong>
                            <select class="fl width65">
                                <option>请选择</option>
                                <option>100元</option>
                                <option>200元</option>
                            </select>
                        </div>
                        <div class="clearfix pb10">
                            <span class="fl lh28">方式：</span>
                            <strong class="pr5 fl lh28 cRed fz16">&nbsp;</strong>
                            <label class="uiRadio12 fl mt6"><input type="radio" name="a" class="uiRadio12-input">工资</label>
                            <label class="uiRadio12 fl mt6"><input type="radio" name="a" class="uiRadio12-input">立即支付</label>
                        </div>
                    </div>
                </div>
                <div class="tx-center pt10 pb10">
                    <input type="button" class="uiBtn-normal uiBtn-blue" value="提交">
                </div>
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
