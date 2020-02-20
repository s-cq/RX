<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="col-md-10">
                    <span class="cLightGray pr8">标准数量</span>
                    <span id="PersonCompleteToPagePayMoney">2</span>
                </p>
                <el-button type="primary" icon="el-icon-plus" circle size="mini" data-title="添加准则" @click="dialogVisible = true" style="position:relative;top:2px"></el-button>
                <span class="circlemark circlemark-lightGreen">已</span>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="routerPath('twoTab1TwoDetail1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center" title="工人着装标准">工人着装标准</p>
            <div class="analyItemCon">
                <p class="col-md-10">
                    <span>工人着装标准</span>
                </p>
                <el-button type="warning" icon="el-icon-edit" circle size="small" data-title="修改标准名称"  @click.stop="editStandard()"></el-button>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('twoTab1TwoDetail2')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">名片</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8"></span><span>木工</span></p>
                <p class="col-md-4"><span class="cLightGray pr8"></span><span>隔墙工</span></p>
                <p class="col-md-4"><span class="cLightGray pr8"></span><span>三级</span></p>
            </div>
        </router-link>
        <el-dialog title="添加工种准则" append-to-body :visible.sync="dialogVisible" width="40%" :before-close="handleClose" lock-scroll  v-if="currentDialog == 1">
            <div class="mb20">
                <span class="cRed">注：请使用数字加中文顿号“、”分割每条准则，并使用句号结尾“。”，例如 1、工种准则。</span><br/>
                <input type="text" class="mt5 mb10" name="name" value="" style="width:92%" placeholder="请填写准则标题"/>
                <div class="relative textAreaBox mb5" v-for="(item, index) in workTypeCriterionList" :key="index">
                    <textarea style="width:92%;height:60px;" placeholder="请在此填写工种准则内容"  class="textareaClass" v-value="item.content"></textarea>
                    <el-button type="danger" icon="el-icon-delete" circle size="mini" data-title="删除" @click='delect(index)'></el-button>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel()">取 消</el-button>
                <el-button @click="addItem()">添加一条准则</el-button>
                <el-button type="primary">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="编辑标准内容" :visible.sync="dialogVisible" width="430px" :before-close="handleClose" v-if="currentDialog == 2">
            <span>
                <label>标准名称：</label>
                <input class="form-control" type="text" placeholder="木工施工规范及验收标准" style="width:300px">
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel()">取 消</el-button>
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
            dialogVisible: false, // 弹框默认值
            workTypeCriterionList: [{content: ''}], // 工种准则集合
            currentDialog: 1
        }
    },
    created () {

    },
    methods: {
        cancel () {
            this.dialogVisible = false
            this.workTypeCriterionList = [{content: ''}]
        },
        editStandard () {
            this.currentDialog = 2
            this.dialogVisible = true
        },
        handleClose (done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done()
                    this.workTypeCriterionList = [{content: ''}]
                })
                .catch(_ => {
                    this.workTypeCriterionList = [{content: ''}]
                })
        },
        addItem () {
            let addData = {content: ''}
            this.workTypeCriterionList.push(addData)
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
