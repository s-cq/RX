<template>
<div class="tc-left pr10 fl">
    <ul class="clearfix uiTab1 mb5 j_outerHeight">
        <!-- <li class="col-md-3 fl uiTab1-active"><a href="javascript:">项</a></li> -->
    </ul>
    <div class="daily_title j_outerHeight">
        <ul class="clearfix">
            <li :class="{ 'title_cur':tindex == 0 }" data-title="全部" @click="filterStage(0)">全</li>
            <li :class="{ 'title_cur':tindex == 20 }" data-title="准备" @click="filterStage(20)">准</li>
            <li :class="{ 'title_cur':tindex == 30 }" data-title="在施" @click="filterStage(30)">施</li>
            <li :class="{ 'title_cur':tindex == 40 }" data-title="竣工" @click="filterStage(40)">竣</li>
        </ul>
    </div>
    <div class="contentbox">
        <table class="uiTable j_outerHeight">
            <thead>
                <tr>
                    <th width="20%">编号</th>
                    <th width="30%">名称</th>
                    <th width="15%">
                        <select class="theadselect thinScroll" @change="selectFilter()" v-model="stageValue">
                            <option value="">阶段</option>
                            <option value="20">准备</option>
                            <option value="30">在施</option>
                            <option value="40">竣工</option>
                        </select>
                    </th>
                    <th width="10%">业</th>
                    <th width="15%">处理</th>
                </tr>
            </thead>
        </table>
        <div class="scroll-content thinScroll thinScroll-table" v-loading="loading" v-scrollHeight="36">
            <table class="uiTable uiTable-striped uiTable-hover" id="tab1">
                <tbody>
                    <tr v-for="(item,index) in leftListData" :key="index" :class="{'tractive':index == trIndex}" @click="siderBarTrclick(index,item)">
                        <td  width="20%">{{item.id}}</td>
                        <td width="30%">{{item.name}}</td>
                        <td width="15%">{{item.state}}</td>
                        <td width="10%">--</td>
                        <td width="15%">{{ item.other }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="j_outerHeight clearfix tj_bottom">
            <p class="col-md-3" data-title="全部">{{allCount}}</p>
            <p class="col-md-3 cGreen" data-title="正常">0</p>
            <p class="col-md-3 cOrange" data-title="异常">0</p>
            <p class="col-md-3 cRed" data-title="问题">0</p>
        </div>
    </div>
</div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
// import { getListSupervisorOrder } from '../Resources/Api/index'
export default {
    data () {
        return {
            loading: false,
            trIndex: 0,
            tindex: 0,
            stageValue: '',
            leftListData: [
                {
                    id: 1,
                    name: '开工仪式',
                    state: '准备',
                    stage: 20,
                    other: 168
                },
                {
                    id: 2,
                    name: '开工日期',
                    state: '准备',
                    stage: 20,
                    other: 168
                },
                {
                    id: 3,
                    name: '物业办理',
                    state: '准备',
                    stage: 20,
                    other: 168
                },
                {
                    id: 4,
                    name: '现场保护',
                    state: '准备',
                    stage: 20,
                    other: 168
                },
                {
                    id: 5,
                    name: '现场交底',
                    state: '准备',
                    stage: 20,
                    other: 168
                },
                {
                    id: 6,
                    name: '摄像头',
                    state: '准备',
                    stage: 20,
                    other: 168
                },
                {
                    id: 7,
                    name: '形象布置',
                    state: '准备',
                    stage: 20,
                    other: 168
                },
                {
                    id: 8,
                    name: '临电布设',
                    state: '准备',
                    stage: 20,
                    other: 168
                },
                {
                    id: 9,
                    name: '现场放线',
                    state: '准备',
                    stage: 20,
                    other: 168
                },
                {
                    id: 10,
                    name: '安全订单',
                    state: '在施',
                    stage: 30,
                    other: 168
                },
                {
                    id: 11,
                    name: '环境订单',
                    state: '在施',
                    stage: 30,
                    other: 168
                },
                {
                    id: 12,
                    name: '形象订单',
                    state: '在施',
                    stage: 30,
                    other: 168
                },
                // {
                //     id: 13,
                //     name: '巡检订单',
                //     state: '在施',
                //     stage: 30,
                //     other: 168
                // },
                {
                    id: 14,
                    name: '洽商订单',
                    state: '在施',
                    stage: 30,
                    other: 168
                },
                {
                    id: 15,
                    name: '延期订单',
                    state: '在施',
                    stage: 30,
                    other: 168
                },
                {
                    id: 16,
                    name: '投诉订单',
                    state: '在施',
                    stage: 30,
                    other: 168
                },
                {
                    id: 17,
                    name: '罚款订单',
                    state: '在施',
                    stage: 30,
                    other: 168
                },
                {
                    id: 18,
                    name: '竣工总检',
                    state: '竣工',
                    stage: 40,
                    other: 168
                },
                {
                    id: 19,
                    name: '材料确认',
                    state: '竣工',
                    stage: 40,
                    other: 168
                }
            ]
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        // this.load()
        this.updateBottom()
        this.leftListDataClone = this.leftListData
        this.setLeftData(this.leftListData[0])
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
        // 筛选
        selectFilter () {
            // // let searchReg = new RegExp(`^${this.searchText}$`)
            let stageReg = new RegExp(`^${this.stageValue}$`)
            if (!this.stageValue) {
                stageReg = new RegExp(/[\s\S]*/)
            }
            if (this.stageValue >= 30 && this.stageValue < 40) {
                this.tindex = 30
            } else {
                this.tindex = this.stageValue
            }
            if (this.stageValue === 30) {
                let construction = new RegExp(`^3`)
                this.leftListData = this.leftListDataClone.filter(item => (
                    construction.test(item.stage)
                ))
            } else {
                this.leftListData = this.leftListDataClone.filter(item => (
                    stageReg.test(item.stage)
                ))
            }

            if (this.leftListData.length > 0) {
                this.siderBarTrclick(this.trIndex, this.leftListData[this.trIndex])
            }
        },
        // 更新底部正常异常问题的数量
        updateBottom () {
            this.allCount = this.leftListData.length
        },
        // 头部小表情筛选
        filterStage (Stage) {
            let _this = this
            _this.tindex = Stage
            switch (Stage) {
            case 0:
                _this.tindex = 0
                _this.stageValue = ''
                break
            case 30:
                _this.tindex = Stage
                _this.stageValue = Stage
                break
            default:
                _this.tindex = Stage
                _this.stageValue = Stage
                break
            }
            _this.selectFilter()
        },
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[0].path + '/' + path
        }
    }
}
</script>
