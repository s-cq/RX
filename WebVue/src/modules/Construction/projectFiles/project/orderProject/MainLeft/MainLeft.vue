<template>
<div class="tc-left pr10 fl">
    <ul class="clearfix uiTab1 mb5 j_outerHeight">
        <!-- <li class="col-md-3 fl uiTab1-active"><a href="javascript:">项</a></li> -->
    </ul>
    <div class="daily_title j_outerHeight">
        <ul class="clearfix">
            <li :class="{ 'title_cur':tindex == 0 }" data-title="全部" @click="filterStage(0)">全</li>
            <li :class="{ 'title_cur':tindex == 2 }" data-title="准备" @click="filterStage(2)">准</li>
            <li :class="{ 'title_cur':tindex == 3 }" data-title="在施" @click="filterStage(3)">施</li>
            <li :class="{ 'title_cur':tindex == 4 }" data-title="竣工" @click="filterStage(4)">竣</li>
            <li :class="{ 'title_cur':tindex == -1 }" style="float: right" data-title="历史" @click="filterStage(-1)">历</li>
        </ul>
    </div>
    <div class="contentbox">
        <div class="dailyftSearch clearfix" v-if="souFlag" style="z-index:2">
            <div class="fl uiHas-textIcon">
                <input type="text" placeholder="搜索" class="col-md-12 searchName" v-model="searchText">
                <i class="uiText-searchIcon bgIcon" @click="selectFilter()"></i>
                <!-- <select class="theadselect thinScroll" @change="selectFilter()" v-model="orderName" style="background:#fff">
                    <option value="">订单名称</option>
                    <option value="KGYS">开工仪式</option>
                    <option value="KGRQ">开工日期</option>
                    <option value="WYBL">物业办理</option>
                    <option value="XCBH">现场保护</option>
                    <option value="XXBZ">形象布置</option>
                    <option value="LDBS">临电布设</option>
                    <option value="XCFX">现场放线</option>
                    <option value="AQDD">安全订单</option>
                    <option value="HHDD">环境订单</option>
                    <option value="XJDD">巡检订单</option>
                    <option value="QSDD">洽商订单</option>
                    <option value="TSDD">投诉订单</option>
                    <option value="YQDD">延期订单</option>
                    <option value="JGZQ">竣工总检</option>
                </select> -->
            </div>
        </div>
        <table class="uiTable j_outerHeight">
            <thead>
                <tr>
                    <th width="30%">
                        <span class="serial_number" @click="search()">项目单号<i class="bgIcon"></i></span>
                    </th>
                    <th width="20%">名称</th>
                    <th width="15%">
                        <select class="theadselect thinScroll" @change="selectFilter()" v-model="stageValue">
                            <option value="0">阶段</option>
                            <option value="2">准备</option>
                            <option value="3">在施</option>
                            <option value="4">竣工</option>
                            <option value="-1">历史</option>
                        </select>
                    </th>
                    <!-- <th width="10%">业</th> -->
                    <th width="15%">状态</th>
                </tr>
            </thead>
        </table>
        <div class="scroll-content thinScroll thinScroll-table" v-loading="loading" v-scrollHeight="36">
            <table class="uiTable uiTable-striped uiTable-hover" id="tab1">
                <tbody>
                    <tr v-for="(item,index) in leftListData" :key="index" :class="{'tractive':index == trIndex}" @click="siderBarTrclick(index,item)">
                        <td  width="30%">{{item.order_no}}</td>
                        <td width="20%">{{item.name}}</td>
                        <td width="15%">{{item.stage | stage}}</td>
                        <!-- <td width="10%">--</td> -->
                        <td width="15%" :class="item.status === 0 ? 'cGreen': 'cRed'">{{item.status === 0 ? '完' : '未' }}</td>
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
import { getProjectOrderByStage } from '../Resources/Api/index'
export default {
    data () {
        return {
            loading: false,
            trIndex: 0,
            tindex: 0,
            stageValue: '',
            leftListData: [],
            leftListDataClone: [],
            allCount: 0,
            souFlag: false,
            searchText: '',
            orderName: ''
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.load('', 0)
        this.updateBottom()
    },
    methods: {
        ...mapMutations({
            setLeftData: `SET_LEFT_INFO`
        }),
        // 单号搜索
        search () {
            this.souFlag = true
        },
        siderBarTrclick (index, item) {
            this.trIndex = index
            // 保存字段时 一定要确认公共字段一致
            this.setLeftData(item)
            // 关闭弹窗
            this.$router.push(this.$route.matched[1].path)
        },
        // 加载页面
        load (keyWordName, stage) {
            // 用_this 代替this
            let _this = this
            _this.loading = true
            // 接收参数
            let parm = {
                keyWord: keyWordName,
                stage: stage,
                userRole: '',
                // userNo: this.getCookie('u_kahao')
                userNo: this.userInfo.as_cardNo
            }
            // 接口获取数据，对项目阶段进行转换
            getProjectOrderByStage(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    _this.leftListData = results.data.Body.projectOrderList
                    _this.leftListDataClone = _this.leftListData
                    if (_this.leftListData.length > 0) {
                        _this.siderBarTrclick(_this.trIndex, _this.leftListData[_this.trIndex])
                    }
                    _this.updateBottom()
                }
            }).catch(error => {
                console.log(error)
            })
            _this.loading = false
        },
        // 筛选
        selectFilter () {
            // let stageReg = new RegExp(`^${this.stageValue}$`)
            // if (!this.stageValue) {
            //     stageReg = new RegExp(/[\s\S]*/)
            // }
            const keyWord = this.searchText
            const stage = this.stageValue
            this.trIndex = 0
            this.load(keyWord, stage)
            // if (this.stageValue === '') {
            //     this.leftListData = this.leftListDataClone.filter(item => {
            //         if (this.searchText !== '' && this.orderName === '') {
            //             return item.order_no === this.searchText
            //         } else if (this.orderName !== '' && this.searchText === '') {
            //             return item.order_number.substring(0, 4) === this.orderName
            //         } else if (this.searchText !== '' && this.orderName !== '') {
            //             return item.order_no === this.searchText && item.order_number.substring(0, 4) === this.orderName
            //         } else {
            //             return true
            //         }
            //     })
            //     this.tindex = -1
            // } else {
            //     this.tindex = this.stageValue
            //     this.leftListData = this.leftListDataClone.filter(item => {
            //         if (this.searchText !== '' && this.orderName === '') {
            //             return item.stage === Number(this.stageValue) && item.order_no === this.searchText
            //         } else if (this.orderName !== '' && this.searchText === '') {
            //             return item.order_number.substring(0, 4) === this.orderName && item.stage === Number(this.stageValue)
            //         } else if (this.searchText !== '' && this.orderName !== '') {
            //             return item.order_no === this.searchText && item.order_number.substring(0, 4) === this.orderName && item.stage === Number(this.stageValue)
            //         } else {
            //             return item.stage === Number(this.stageValue)
            //         }
            //     })
            // }
            // if (this.leftListData.length > 0) {
            //     this.siderBarTrclick(this.trIndex, this.leftListData[this.trIndex])
            // }
            this.updateBottom()
            this.souFlag = false
        },
        // 更新底部正常异常问题的数量
        updateBottom () {
            this.allCount = this.leftListData.length
        },
        // 头部小表情筛选
        filterStage (Stage) {
            let _this = this
            _this.tindex = Stage
            _this.stageValue = Stage
            _this.selectFilter()
        },
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[0].path + '/' + path
        },
        // 获取cookie
        getCookie (name) {
            let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            if ((arr = document.cookie.match(reg))) { return unescape(arr[2]) } else { return null }
        }
    },
    filters: {
        stage (parone) {
            let value = ''
            switch (parone) {
            case -1:
                value = '历史'
                break
            case 2:
                value = '准备'
                break
            case 3:
                value = '在施'
                break
            case 4:
                value = '竣工'
                break
            default:
                break
            }
            return value
        }
    }
}
</script>
