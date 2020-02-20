<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="col-md-4">&nbsp;</p>
                <p class="col-md-4">
                    <strong class="cGreen fz14">审计</strong>
                </p>
                <el-button type="primary" class="addButton" icon="el-icon-plus" circle size="mini" data-title="添加标准" @click="dialogVisible = true" ></el-button>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="routerPath('twoTab2TwoDetail1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">标准一</p>
            <div class="analyItemCon">
                <div class="col-md-4">
                    <rx-viewer :images="data">
                        <div class="clearfix">
                            <div class="col-md-4" v-for="(item, index) of data" :key="index">
                                <img :src="item | smallImg(60, 60)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <div class="col-md-8">
                   <div class="clearfix col-md-9 cLightGray">
                            1、验收标准：现场入户门进入后的左侧或者右侧上面粘贴；要求高度标识牌下沿距离地面1.5米，粘贴端正。...
                   </div>
                </div>
            </div>
        </router-link>
    </div>
    <el-dialog title="添加标准" :visible.sync="dialogVisible" width="550px" :before-close="handleClose">
        <div class="mb10">
            <label class="width80" style="display: inline-block;" >标准名称：</label>
            <input class="form-control" type="text" placeholder="" style="width:150px">
        </div>
        <div class="mb10">
            <label class="width80" style="display: inline-block;">检验标准：</label>
            <textarea style="width:80%;height:200px;"></textarea>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>
<script>
export default {
    data () {
        return {
            dialogVisible: false, // 弹框默认值
            data: []
        }
    },
    created () {
        this.data = [
            'https://proj01.oss-cn-beijing.aliyuncs.com/common/15590980606M7sdkCH5f.png'
        ]
    },
    methods: {
        handleClose (done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done()
                })
                .catch(_ => {
                })
        },
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        }
    }
}
</script>
<style lang="">
    .addButton {
        position: absolute;
        top: 50%;
        margin-top: -14px;
        right: 15px;
    }
</style>
