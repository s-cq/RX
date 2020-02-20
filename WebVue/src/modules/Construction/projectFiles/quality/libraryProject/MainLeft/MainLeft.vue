<template>
<div class="tc-left pr10 fl">
    <ul class="clearfix uiTab1 mb5 j_outerHeight">
        <!-- <router-link tag="li" class="col-md-4 fl" to="/projectFiles/Quality" active-class="uiTab1-active"><a href="javascript:">项</a></router-link>
        <router-link tag="li" class="col-md-4 fl" to="/projectFiles/QualityLibrary" active-class="uiTab1-active"><a href="javascript:">质量库</a></router-link> -->
    </ul>
    <div class="daily_title j_outerHeight">
        <ul class="clearfix">
            <li class="title_cur" data-title="全部">全</li>
              <span aria-hidden="true" class="iconfont icon-add icon-2x bold pointer cBlue fr mt2 mr5" @click="addPage()" data-title="添加工艺"></span>
        </ul>
    </div>
    <div class="contentbox">
        <table class="uiTable j_outerHeight">
            <thead>
               <tr>
                    <th width="20%">编号</th>
                    <th width="15%">类</th>
                    <th width="20%">科目</th>
                    <th width="15%">子目</th>
                    <th width="10%">业</th>
                    <th>处理</th>
                </tr>
            </thead>
        </table>
        <div class="scroll-content thinScroll thinScroll-table" v-loading="loading" v-scrollHeight="36">
            <table class="uiTable uiTable-striped uiTable-hover" id="tab1">
                <tbody>
                    <tr v-for="(item,index) in leftListData" :key="index" :class="{'tractive':index == trIndex}" @click="siderBarTrclick(index,item)">
                        <td width="20%" :data-title="item.ProcerssCard">{{item.ProcessCard }}</td>
                        <td width="15%" :data-title="item.ProcessClass">{{item.ProcessClass | truncate(2)}}</td>
                        <td width="20%" :data-title="item.ProcessChildClass">{{item.ProcessChildClass | truncate(2)}}</td>
                        <td width="15%" :data-title="item.ProcessName">{{item.ProcessName | truncate(2)}}</td>
                        <td width="10%" :class="item.BusinessState == 0 ? 'cRed':'cGreen'">{{item.BusinessState == 0 ? '未':'完'}}</td>
                        <td class="cRed">{{item.VisitHour}}</td>
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
import { getProcessLibraryByCondition } from '../Resources/Api/index'

export default {
    data () {
        return {
            loading: false,
            trIndex: 0,
            leftListData: [] // 遍历的数据
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.getProcessLibraryByCondition()
    },
    methods: {
        ...mapMutations({
            setLeftData: `SET_LEFT_INFO`
        }),
        // 点击 + 号二段弹窗页面
        addPage () {
            this.$router.push('/projectFiles/QualityLibrary/addPage')
        },
        siderBarTrclick (index, item) {
            this.trIndex = index
            // 保存字段时 一定要确认公共字段一致
            this.setLeftData(item)
            // 关闭弹窗
            this.$router.push(this.$route.matched[1].path)
        },
        // 刷新质量库
        RefreshQualityLibrary () {
            this.getProcessLibraryByCondition()
        },
        // 请求一段的数据
        getProcessLibraryByCondition () {
            // 用_this 代替this
            let _this = this
            _this.loading = true
            // 接收参数
            let parm = {
                ProcessName: '',
                ProcessCode: ''
            }
            getProcessLibraryByCondition(parm).then(resluts => {
                if (resluts.data.StatusCode === 0) {
                    _this.leftListData = resluts.data.Body.processLibrary
                    this.setLeftData(_this.leftListData[0])
                }
                _this.loading = false
            }).catch(error => {
                console.info(error)
            })
        }
    }
}
</script>
