<template>
<div class="tc-left pr10 fl">
    <ul class="clearfix uiTab1 mb5 j_outerHeight">
        <li class="col-md-3 fl uiTab1-active"><a href="javascript:">项</a></li>
        <li class="col-md-3 fl "><a href="javascript:">薪</a></li>
        <li class="col-md-3 fl "><a href="javascript:">钱</a></li>
    </ul>
    <div class="daily_title j_outerHeight">
        <ul class="clearfix">
            <li :class="stageValue == 0 ? 'title_cur' : ''" @click="titleClick(0)" data-title="全部">全</li>
            <li :class="stageValue == 1 ? 'title_cur' : ''" @click="titleClick(1)" data-title="审计">S</li>
            <li :class="stageValue == 2 ? 'title_cur' : ''" @click="titleClick(2)" data-title="准备">Z</li>
            <li :class="stageValue == 3 ? 'title_cur' : ''" @click="titleClick(3)" data-title="在施">Z</li>
            <li :class="stageValue == 4 ? 'title_cur' : ''" @click="titleClick(4)" data-title="竣工">J</li>
            <li :class="stageValue == 5 ? 'title_cur' : ''" @click="titleClick(5)" data-title="完工">W</li>
            <li style="float:right" :class="stageValue == 6 ? 'title_cur' : ''" @click="titleClick(6)" data-title="历史">L</li>
        </ul>
    </div>
    <div class="contentbox">
        <!--编号搜索 开始-->
        <div class="dailyftSearch clearfix" v-show="searchFlag === true">
            <div class="fl uiHas-textIcon" style="width:248px;z-index:1000">
                <input type="text" class="col-md-12" v-model="searcValue" placeholder="项目编号/工程名称/项目经理姓名" id="searchtext">
                <i class="uiText-searchIcon bgIcon" @click="searcClick()"></i>
            </div>
        </div>
        <!--编号搜索 结束-->
        <table class="uiTable j_outerHeight">
            <thead>
                <tr>
                    <th width="25%">
                        <span class="serial_number" title="项目编号">编号<i class="bgIcon"  @click="searchFlag = true"></i></span>
                    </th>
                    <th width="15%">
                        <span class="serial_number" title="地区">地区</span>
                         <!-- <select class="theadselect thinScroll">
                            <option value="">地区</option>
                            <option :value="item.DiquID" v-for="(item, index) of regionList" :key="index">{{item.DiquName}}</option>
                        </select> -->
                    </th>
                    <th width="15%">
                         <select class="theadselect thinScroll" v-model="stageValue" @click="stageClick()">
                            <option value="0" >阶段</option>
                            <option value="1" >审计</option>
                            <option value="2" >准备</option>
                            <option value="3" >在施</option>
                            <option value="4" >竣工</option>
                            <option value="5" >完工</option>
                        </select>
                    </th>
                    <th width="15%">管</th>
                    <th width="15%">
                        <select class="theadselect thinScroll">
                            <option value="">业</option>
                            <option value="">回款</option>
                            <option value="">巡检</option>
                            <option value="">正常</option>
                            <option value="">工期</option>
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
                        <td width="25%" :data-title="item.orderno">{{item.orderno}}</td>
                        <td width="15%">{{item.dq_name}}</td>
                        <td width="15%">{{stageFilter(item.AfterMarketState)}}</td>
                        <td width="15%" class="cPurple">--</td>
                        <td width="15%" class="cRed">--</td>
                        <td width="15%" :class="item.timeout>0 ? 'cGreen' : 'cRed'" >{{item.timeout}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="j_outerHeight clearfix tj_bottom">
            <p class="col-md-3" data-title="全部">{{allCount}}</p>
            <p class="col-md-3 cGreen" data-title="正常" >--</p>
            <p class="col-md-3 cOrange" data-title="异常" >--</p>
            <p class="col-md-3 cRed" data-title="问题">--</p>
        </div>
    </div>
</div>
</template>
<script>
import { mapMutations } from 'vuex'
import { getWorkorderList } from '../Resources/Api'
export default {
    data () {
        return {
            searchFlag: false, // 搜索按钮显示
            titleIndex: 1, // 当前的title的索引
            loading: true,
            trIndex: 0,
            regionList: [], // 地区列表
            leftListData: [], // 遍历的数据
            leftListDataClone: [], // 保存原始数据

            diquValue: '', // 地区筛选
            stageValue: 0, // 阶段筛选
            signValue: '', // 正/异/问题

            allCount: 0,
            zcCount: 0,
            ycCount: 0,
            wtCount: 0,
            searcValue: ''
        }
    },
    computed: {
        // ...mapGetters(['leftInfo'])
    },
    created () {
        this.siderBarTrclick(0, this.leftListData[0])
        this.load()
    },
    methods: {
        ...mapMutations({
            setLeftData: `SET_LEFT_INFO`
        }),
        // title 栏点击
        titleClick (index) {
            this.stageValue = index
            this.load()
        },
        stageClick () {
            this.load()
        },
        // guolv
        stageFilter (stage) {
            var stageName = ''
            switch (stage) {
            case 1:
                stageName = '审计'
                break
            case 2:
                stageName = '准备'
                break
            case 3:
                stageName = '在施'
                break
            case 4:
                stageName = '竣工'
                break
            case 5:
                stageName = '完工'
                break
            case 6:
                stageName = '历史'
                break
            }
            return stageName
        },
        /**
         * 获取左侧列表
         */
        load () {
            this.loading = true
            let param = {
                afterMarketState: Number(this.stageValue),
                keyWord: this.searcValue,
                logUserNo: ''
            }
            getWorkorderList(param).then(results => {
                this.leftListData = this.leftListDataClone = results.data.Body.workorderList
                this.loading = false
                // this.selectFilter()
                if (this.leftListData.length > 0) {
                    this.siderBarTrclick(0, this.leftListData[0])
                }
                this.updateBottom()
            }).catch(() => {})
        },
        /**
         * 左侧点击保存当前项信息
         */
        siderBarTrclick (index, item) {
            this.trIndex = index
            // 保存字段时 一定要确认公共字段一致
            this.setLeftData(item)
            // 点击是否关闭弹窗
            this.$router.push(this.$route.matched[1].path)
        },
        // 搜索
        searcClick () {
            this.load()
            this.searchFlag = false
        },
        /**
         * 条件筛选
         */
        selectFilter () {
            let diquReg = new RegExp(`^${this.diquValue}$`)
            let stageReg = new RegExp(`^${this.stageValue}$`)
            let signReg = new RegExp(`^${this.signValue}$`)

            if (!this.diquValue) diquReg = new RegExp(/[\s\S]*/)
            if (!this.stageValue) stageReg = new RegExp(/[\s\S]*/)
            if (!this.signValue) signReg = new RegExp(/[\s\S]*/)

            this.leftListData = this.leftListDataClone.filter(item => (
                diquReg.test(item.tb_diqu)) &&
                stageReg.test(item.ci_Stage) &&
                signReg.test(item.signs)
            )

            if (!this.signValue) {
                this.signValue = ''
                this.updateBottom()
            }

            if (this.leftListData.length > 0) {
                this.siderBarTrclick(0, this.leftListData[0])
            }
        },
        /**
         * 更新底部正常异常问题的数量
         */
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
        }
    }
}
</script>
