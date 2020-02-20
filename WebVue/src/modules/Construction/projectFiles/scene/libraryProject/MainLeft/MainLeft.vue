<template>
<div class="tc-left pr10 fl">
    <ul class="clearfix uiTab1 mb5 j_outerHeight">
        <!-- <router-link tag="li" class="col-md-4 fl" to="/projectFiles/scene" active-class="uiTab1-active"><a href="javascript:">项</a></router-link>
        <router-link tag="li" class="col-md-4 fl" to="/projectFiles/SceneLibrary" active-class="uiTab1-active"><a href="javascript:">现场库</a></router-link> -->
    </ul>
    <div class="daily_title j_outerHeight">
        <ul class="clearfix">
            <!-- <li class="title_cur" data-title="全部">全</li>
            <li class="title_cur" data-title="资">资</li> -->
            <router-link tag="li"  to="/projectFiles/SceneLibrary" active-class="title_cur" data-title="全部">全</router-link>
            <router-link tag="li"  to="/projectFiles/SceneData" active-class="title_cur" data-title="资">资</router-link>
            <span aria-hidden="true" class="iconfont icon-add icon-2x bold pointer cBlue fr mt2 mr5" @click="addPage()" data-title="添加标准"></span>
        </ul>
    </div>
    <div class="contentbox">
        <table class="uiTable j_outerHeight">
            <thead>
                <tr>
                    <th width="30%">编号</th>
                    <th width="20%" class="tx-center">
                        <select class="theadselect thinScroll">
                            <option value="">状</option>
                        </select>
                    </th>
                    <th width="20%" class="tx-center">
                        <select class="theadselect thinScroll">
                            <option value="">全</option>
                        </select>
                    </th>
                    <th width="20%" class="tx-center">
                        <select class="theadselect thinScroll">
                            <option value="">地区</option>
                        </select>
                    </th>
                    <th width="15%">处理</th>
                </tr>
            </thead>
        </table>
        <div class="scroll-content thinScroll thinScroll-table" v-loading="loading" v-scrollHeight="36">
            <table class="uiTable uiTable-striped uiTable-hover" id="tab1">
                <tbody>
                    <tr v-for="(item,index) in leftListData" :key="index" :class="{'tractive':index == trIndex}" @click="siderBarTrclick(index,item)">
                        <td class="relative">11</td>
                        <td width="20%">222</td>
                        <td width="20%">333</td>
                        <td width="15%">3333</td>
                        <td width="15%">5</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="j_outerHeight clearfix tj_bottom">
            <p class="col-md-3" data-title="全部">0</p>
            <p class="col-md-3 cGreen" data-title="正常">0</p>
            <p class="col-md-3 cOrange" data-title="异常">0</p>
            <p class="col-md-3 cRed" data-title="问题">0</p>
        </div>
    </div>
</div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
    data () {
        return {
            loading: false,
            trIndex: 0,
            leftListData: [1, 2, 3, 4] // 遍历的数据
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {

    },
    methods: {
        ...mapMutations({
            setLeftData: `SET_LEFT_INFO`
        }),
        // 点击 + 号二段弹窗页面
        addPage () {
            this.$router.push('/projectFiles/SceneLibrary/addPage')
        },
        siderBarTrclick (index, item) {
            this.trIndex = index
            // 保存字段时 一定要确认公共字段一致
            this.setLeftData(item)
            // 关闭弹窗
            this.$router.push(this.$route.matched[1].path)
        }
    }
}
</script>
