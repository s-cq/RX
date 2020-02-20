<template>
<div class="tc-left pr10 fl">
    <div class="daily_title j_outerHeight" style="margin-top:35px">
        <ul class="clearfix">
            <li class="title_cur" data-title="全部">全</li>
        </ul>
    </div>

    <div class="contentbox">
        <table class="uiTable j_outerHeight">
            <thead>
                <tr>
                    <th width="33%">级别</th>
                    <th width="33%" class="tx-center">职称</th>
                    <th width="33%" class="tx-center">处理</th>
                </tr>
            </thead>
        </table>
        <div class="scroll-content thinScroll thinScroll-table" v-loading="loading" v-scrollHeight="36">
            <table class="uiTable uiTable-striped uiTable-hover" id="tab1">
                <tbody>
                    <tr v-for="(item,index) in leftListData" :key="index" :class="{'tractive':index == trIndex}" @click="siderBarTrclick(index,item)">
                        <td width="33%" class="relative">{{item.leLevel}}</td>
                        <td width="33%" class="relative">{{item.leName}}</td>
                        <td width="33%" class="relative">{{item.leUpdateDate}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="j_outerHeight clearfix tj_bottom">
            <p class="col-md-3" data-title="全部">{{leftListData.length}}</p>
            <p class="col-md-3 cGreen" data-title="正常">0</p>
            <p class="col-md-3 cOrange" data-title="异常">0</p>
            <p class="col-md-3 cRed" data-title="问题">0</p>
        </div>
    </div>
</div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import {
    getStayLevel
} from '../Resources/Api'
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
        this.GetLevel()
    },
    methods: {
        ...mapMutations({
            setLeftData: `SET_LEFT_INFO`
        }),
        siderBarTrclick (index, item) {
            this.trIndex = index
            // 保存字段时 一定要确认公共字段一致
            this.setLeftData(item)
            // 关闭弹窗
            this.$router.push(this.$route.matched[1].path)
        },
        GetLevel () {
            let _this = this
            _this.leftListData = []
            getStayLevel({

            }).then(results => {
                _this.leftListData = results.data.Body
                this.setLeftData(_this.leftListData[0])
            }).catch(error => {
                console.log(error)
            }
            )
        }
    }
}
</script>
