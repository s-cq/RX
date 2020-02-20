<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'内容确认'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137" >
        <div class="analyItem" v-for="(item, index) in dataList" :key="index">
            <p class="analyItemTit tx-center">{{item.title |  truncate(5)}}</p>
            <div class="analyItemCon">
                <div class="analyItemflex">
                    <div>{{item.content}}</div>
                    <el-checkbox v-model="checkID[item.id]"></el-checkbox>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">已选择</span>
                    <span>0</span>
                </p>
                <p class="col-md-4">
                    <el-checkbox >全选</el-checkbox>
                </p>
                <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
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
