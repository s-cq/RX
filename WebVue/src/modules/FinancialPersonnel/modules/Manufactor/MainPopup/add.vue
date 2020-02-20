<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'添加'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "140">
        <div class="analyItem">
            <p class="analyItemTit tx-center">名称</p>
            <div class="analyItemCon">
                <input placeholder="请输入名称" class="form-control width250" type="text" value="">
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">类型</p>
            <div class="analyItemCon">
                <select class="width250">
                    <option>请选择类型</option>
                    <option>标尺</option>
                    <option>定尺</option>
                </select>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">规格</p>
            <div class="analyItemCon">
                <input placeholder="请输入规格" class="form-control width250" type="text" value="">
            </div>
        </div>
    </div>
    <div class="layerRtb-footer" style="height:140px;">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">

            </div>
        </div>
       <div class="tx-center"><input type="button" value="确定" class="uiBtn-normal uiBtn-blue"></div>
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
