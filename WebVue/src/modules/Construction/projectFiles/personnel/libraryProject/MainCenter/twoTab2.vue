<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="col-md-10">
                    <span class="cLightGray pr8">子工种数量</span>
                    <span id="PersonCompleteToPagePayMoney">3</span>
                </p>
                <el-button type="primary" icon="el-icon-plus" circle size="mini" data-title="添加准则" @click="dialogVisible = true" style="position:relative;top:2px"></el-button>
                <span class="circlemark circlemark-lightGreen">已</span>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="routerPath('twoTab2TwoDetail1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">子工种</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('twoTab2TwoDetail2')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">名片</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <el-dialog title="添加子工种" :visible.sync="dialogVisible" width="400px" :before-close="handleClose">
            <span>
                <div class="mb20">
                    <label class="width50">工种：</label>
                    <span>木工</span>
                </div>
                <div class="mb20">
                    <label class="width50">子工种：</label>
                    <input type="text" value="" class="width210">
                </div>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            dialogVisible: false // 弹框默认值
        }
    },
    created () {

    },
    methods: {
        handleClose (done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done()
                })
                .catch(_ => {})
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
