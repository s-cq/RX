<template>
<div class="tc-left pr10 fl">
    <ul class="clearfix uiTab1 mb5 j_outerHeight">
        <!-- <li class="col-md-3 fl uiTab1-active"><a href="javascript:">项</a></li> -->
    </ul>
    <div class="daily_title j_outerHeight">
        <ul class="clearfix">
            <li class="title_cur" data-title="模板">模</li>
            <router-link tag="li" data-title="全部" :to="routerPath('Project')">全</router-link>
        </ul>
    </div>
    <div class="contentbox">
        <table class="uiTable j_outerHeight">
            <thead>
                <tr>
                    <th width="30%">
                        <div class="relative">
                            <span>编号</span>
                            <i class="uiText-searchIcon bgIcon" @click="souFlag = !souFlag" style="margin-top:-4px"></i>
                        </div>
                        <div class="dailyftSearch clearfix" v-if="souFlag" style="z-index:2">
                            <div class="fl uiHas-textIcon">
                                <input type="text" placeholder="项目编号" class="col-md-12" v-model="searchText" @keyup.enter="selectFilter()">
                                <i class="uiText-searchIcon bgIcon" @click="selectFilter()"></i>
                            </div>
                        </div>
                    </th>
                    <th width="20%" class="tx-center">管</th>
                    <th width="15%">业</th>
                    <th width="20%">
                        <select class="theadselect thinScroll" v-model="stageValue" @change="selectFilter()">
                            <option value="">阶段</option>
                            <option value="11">审计</option>
                            <option value="12">准备</option>
                            <option value="13">施前</option>
                            <option value="14">施中</option>
                            <option value="15">施尾</option>
                            <option value="16">竣工</option>
                            <option value="17">完工</option>
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
                        <td class="relative" width="30%" :data-title="item.orderNo">
                            {{ item.orderNo }}
                        </td>
                        <td width="20%">
                            <span>{{item.guan || '-'}}</span>
                        </td>
                        <td width="15%" :class="{'cRed':item.DiffDate < 0}">{{item.ye}}</td>
                        <td width="20%">
                            <!-- <span>{{item.stage | stage }}</span> -->
                            <span>{{item.stageName}}</span>
                        </td>

                        <td width="15%">
                            <span :class="{'cRed':item.chuli < 0}">{{ -999 > item.chuli ?  '-999+' : item.chuli }}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="j_outerHeight clearfix tj_bottom">
            <p class="col-md-3" data-title="全部" @click="signValue = '', selectFilter()">{{allCount}}</p>
            <p class="col-md-3 cGreen" data-title="正常" @click="signValue = 1, selectFilter()">{{zcCount}}</p>
            <p class="col-md-3 cOrange" data-title="异常" @click="signValue = 2, selectFilter()">{{ycCount}}</p>
            <p class="col-md-3 cRed" data-title="问题" @click="signValue = 3, selectFilter()">{{wtCount}}</p>
        </div>
    </div>
</div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
    data () {
        return {
            loading: true,
            trIndex: 0,

            souFlag: false,
            leftListData: [], // 遍历的数据
            leftListDataClone: [], // 保存原始数据

            searchText: '', // 编号筛选
            stageValue: '', // 阶段筛选
            signValue: '', // 正/异/问题

            allCount: 0,
            zcCount: 0,
            ycCount: 0,
            wtCount: 0
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.getManagerLeftList()
    },
    methods: {
        ...mapMutations({
            setLeftData: `SET_LEFT_INFO`
        }),
        // 获取左侧列表
        getManagerLeftList () {
            this.loading = true
            this.leftListData = this.leftListDataClone = [
                {
                    'orderNo': 'HS19019',
                    'guan': '款项',
                    'ye': '正常',
                    'stage': 11,
                    'stageName': '审计',
                    'chuli': 55
                },
                {
                    'orderNo': 'HS19019',
                    'guan': '款项',
                    'ye': '正常',
                    'stage': 12,
                    'stageName': '准备',
                    'chuli': 20
                },
                {
                    'orderNo': 'HS19019',
                    'guan': '款项',
                    'ye': '正常',
                    'stage': 13,
                    'stageName': '施前',
                    'chuli': 1000
                },
                {
                    'orderNo': 'HS19019',
                    'guan': '款项',
                    'ye': '正常',
                    'stage': 14,
                    'stageName': '施中',
                    'chuli': 10
                },
                {
                    'orderNo': 'HS19019',
                    'guan': '款项',
                    'ye': '正常',
                    'stage': 15,
                    'stageName': '施尾',
                    'chuli': 20
                },
                {
                    'orderNo': 'HS19019',
                    'guan': '款项',
                    'ye': '正常',
                    'stage': 16,
                    'stageName': '竣工',
                    'chuli': -40
                },
                {
                    'orderNo': 'HS19019',
                    'guan': '款项',
                    'ye': '正常',
                    'stage': 17,
                    'stageName': '完工',
                    'chuli': -1001
                }
            ]
            this.loading = false
            this.selectFilter()
            if (this.leftListData.length > 0) {
                this.siderBarTrclick(0, this.leftListData[0])
            }
        },
        // 左侧点击保存当前项信息
        siderBarTrclick (index, item) {
            this.trIndex = index
            // 保存字段时 一定要确认公共字段一致
            this.setLeftData(item)
            // 点击是否关闭弹窗
            this.$router.push(this.$route.matched[1].path)
        },
        // 筛选
        selectFilter () {
            // let searchReg = new RegExp(`^${this.searchText}$`)
            let stageReg = new RegExp(`^${this.stageValue}$`)
            let signReg = new RegExp(`^${this.signValue}$`)
            // 该正则是去掉空格
            // if (!this.searchText) searchReg = new RegExp(/[\s\S]*/)
            if (!this.stageValue) stageReg = new RegExp(/[\s\S]*/)
            if (!this.signValue) signReg = new RegExp(/[\s\S]*/)

            this.leftListData = this.leftListDataClone.filter(item => (
                // orderNoReg.test(item.orderNo)) &&
                stageReg.test(item.stage) &&
                signReg.test(item.signs)
            ))

            if (!this.signValue) {
                this.signValue = ''
                this.updateBottom()
            }

            if (this.leftListData.length > 0) {
                this.siderBarTrclick(0, this.leftListData[0])
            }
            this.souFlag = false
        },
        // 更新底部正常异常问题的数量
        updateBottom () {
            let zcCount = 0
            let ycCount = 0
            let wtCount = 0
            for (var item of this.leftListData) {
                if (item.signs === 1) {
                    zcCount = zcCount + 1
                } else if (item.signs === 2) {
                    ycCount = ycCount + 1
                } else if (item.signs === 3) {
                    wtCount = wtCount + 1
                }
            }
            this.allCount = this.leftListData.length
            this.zcCount = zcCount
            this.ycCount = ycCount
            this.wtCount = wtCount
        },
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[0].path + '/' + path
        }
    }
}
</script>
