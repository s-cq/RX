<template>
<div class="layerRtb layerRtb-threecolumn">
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">设置</p>
            <div class="analyItemCon">
                <p class="col-md-10"></p>
                <p class="col-md-2">
                    <el-tooltip :content="'Switch value: ' + switchValue" placement="top">
                        <el-switch v-model="switchValue" active-color="#66b1ff" inactive-color="#ddd" active-value="100" inactive-value="0">
                        </el-switch>
                    </el-tooltip>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">施工标准</p>
            <div class="analyItemCon" >
                <h1 class="mb10 tx-center">暂无相应的施工标准</h1>
            </div>
        </div>
         <!-- 弹框 -->
        <el-dialog title="添加单条准则" :visible.sync="dialogVisible" width="400px" :before-close="handleClose" append-to-body>
            <textarea class="" style="width:100%;height:116px;"></textarea>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <div class="analyItemCon">
                <p class="col-md-12 tx-center">
                    <input type="button" class="uiBtn-orange uiBtn-normal ml10" style="background-color:red;" value="删除">
                    <input type="button" class="uiBtn-orange uiBtn-normal ml10"  value="修改" @click="isModify = 1">
                    <input type="button" class="uiBtn-blue uiBtn-normal ml10" v-if="isModify == 1" value="提交修改">
                    <input type="button" class="uiBtn-gray uiBtn-normal ml10" v-if="isModify == 1" value="取消修改"  @click="isModify = 0">
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            fourIndex: undefined,
            switchValue: 0,
            isModify: 0,
            dialogVisible: false
        }
    },
    created () {

    },
    methods: {
        delect (index) {
            console.log(index)
        },
        handleClose (done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done()
                }).catch(_ => {})
        },
        clickFourShow (index) {
            this.fourIndex = index
        }
    }
}
</script>
