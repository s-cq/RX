<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'打印'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137" >
        <div class="analyItem">
            <p class="analyItemTit tx-center">项目总检</p>
            <div class="analyItemCon">
                <div class="analyItemflex">
                    <div>项目总检验收单</div>
                      <a href="#" class="cBlue">打印</a>
                </div>
            </div>
        </div>
         <div class="analyItem">
            <p class="analyItemTit tx-center">竣工验收</p>
            <div class="analyItemCon">
                <div class="analyItemflex">
                <div>竣工验收单</div>
                    <a href="#" class="cBlue">打印</a>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <div class="tx-center">
                    <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
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
            checkID: [],
            dataList: [
                {
                    id: 1,
                    title: '墙、顶面腻',
                    content: '面平整，阴阳角横平竖直'
                },
                {
                    id: 2,
                    title: '天花、墙面',
                    content: '颜色一致，不得有透底、漏刷、掉粉、起皮、流坠'
                },
                {
                    id: 3,
                    title: '油漆',
                    content: '颜色一致，不得有透底、漏刷、起皮、流坠'
                },
                {
                    id: 4,
                    title: '金箔漆',
                    content: '面平整，阴阳角横平竖直'
                }
            ]
        }
    },
    created () {

    },
    methods: {

    }
}
</script>
