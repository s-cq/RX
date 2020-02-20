<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="col-md-4">&nbsp;</p>
                <p class="col-md-4">
                    <strong class="cGreen fz14">罚款</strong>
                </p>
                <el-button type="primary" class="addButton" icon="el-icon-plus" circle size="mini" data-title="添加标准" @click="dialogVisible = true" ></el-button>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
    </div>
    <el-dialog title="添加罚款标准" :visible.sync="dialogVisible" width="400px" :before-close="handleClose">
        <div class="mb10">
            <label class="width80" style="display: inline-block;" >罚款金额：</label>
            <input class="form-control" type="text" placeholder="" style="width:150px">
        </div>
        <div class="mb10">
           <label class="width80" style="display: inline-block;" >罚款标准：</label>
            <input class="form-control" type="text" placeholder="" style="width:150px">
        </div>
        <div class="mb10">
           <label class="width80" style="display: inline-block;" >罚款等级：</label>
            <el-select v-model="value" placeholder="请选择级别">
                <el-option v-for="item in options" :key="item.value"  :label="item.label" :value="item.value">
                </el-option>
            </el-select>
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
            data: [],
            options: [
                {
                    value: '无级别',
                    label: '无级别'
                },
                {
                    value: '一级',
                    label: '一级'
                },
                {
                    value: '二级',
                    label: '二级'
                },
                {
                    value: '三级',
                    label: '三级'
                },
                {
                    value: '四级',
                    label: '四级'
                },
                {
                    value: '五级',
                    label: '五级'
                },
                {
                    value: '六级',
                    label: '六级'
                },
                {
                    value: '七级',
                    label: '七级'
                },
                {
                    value: '八级',
                    label: '八级'
                },
                {
                    value: '九级',
                    label: '九级'
                },
                {
                    value: '十级',
                    label: '十级'
                },
                {
                    value: '环境',
                    label: '环境'
                }],
            value: ''
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
