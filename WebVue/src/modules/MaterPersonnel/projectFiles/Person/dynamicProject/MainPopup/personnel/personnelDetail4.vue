<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'培训'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
       <div class="analyItem">
            <p class="analyItemTit tx-center">函授</p>
            <div class="analyItemCon">
                <div class="col-md-10">
                    <p class="col-md-3">
                        <span class="cLightGray pr8">调级</span>
                        <span>
                            <input type="text" class="width40 level level1" name="upgrade">
                        </span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">原级别</span>
                        <span>3</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">现级别</span>
                        <span>3</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8"><input type="text" class=" level level1 width100" name="reason" value="事由"></span>
                    </p>
                </div>
                <span class="fr mt5">
                    <a href="javascript:" class="uiSwitchclick uiSwitch1 bgc0ccda fl " data-traintype="1" data-flag="">
                        <i class="uiSwitch-btn1"></i>
                    </a>
                    <span class="fl uiSwitch1Span ml5 ">启动</span>
                </span>
                <span class="fr mt5 fixright">函授启动</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">面授</p>
            <div class="analyItemCon">
                <span class="cLightGray pr8 col-md-2">分值</span>
                <div class="col-md-8">
                    <span>
                        <input type="text" class="col-md-12 level level1" value="事由">
                    </span>
                </div>
                <span class="fr mt5">
                    <a href="javascript:" class="uiSwitchclick uiSwitch1 bgc0ccda fl " data-traintype="1" data-flag="">
                        <i class="uiSwitch-btn1"></i>
                    </a>
                <span class="fl uiSwitch1Span ml5 ">启动</span>
                </span>
                <span class="fr mt5 fixright">函授启动</span>
            </div>
        </div>
       <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <div class="col-md-3">
                    <span class="cLightGray pr8">函授</span>
                    <span class="cRed">未开启</span>
                </div>
                <div class="col-md-3">
                    <span class="cLightGray pr8">面授</span>
                    <span class="cRed">未开启</span>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <div class="col-md-3">
                    <span class="cLightGray pr8">函授</span>
                    <span class="cRed">未开启</span>
                </div>
                <div class="col-md-3">
                    <span class="cLightGray pr8">面授</span>
                    <span class="cRed">未开启</span>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
       <div class="analyItem">
            <p class="analyItemTit tx-center">函历史</p>
            <div class="analyItemCon">
                <div class="col-md-3">
                    <span class="cLightGray pr8">次数</span>
                    <span>0</span>
                </div>
                <div class="col-md-3">
                    <span class="cLightGray pr8">总分</span>
                    <span>-</span>
                </div>
                <div class="col-md-3">
                    <span class="cLightGray pr8">平均分</span>
                    <span>-</span>
                </div>

            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">面历史</p>
            <div class="analyItemCon">
                <div class="col-md-3">
                    <span class="cLightGray pr8">次数</span>
                    <span>0</span>
                </div>
                <div class="col-md-3">
                    <span class="cLightGray pr8">总分</span>
                    <span>-</span>
                </div>
                <div class="col-md-3">
                    <span class="cLightGray pr8">平均分</span>
                    <span>-</span>
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
