<template>
<div class="tc-left pr10 fl">
    <ul class="clearfix uiTab1 mb5 j_outerHeight">
        <li class="col-md-3 fl uiTab1-active"><a href="javascript:">厂模</a></li>
    </ul>
    <div class="daily_title j_outerHeight">
        <ul class="clearfix">
            <li class="title_cur">全</li>
        </ul>
    </div>
    <div class="contentbox">
        <table class="uiTable j_outerHeight">
            <thead>
                <tr>
                    <th width="30%">厂名</th>
                    <th width="18%">级别</th>
                    <th width="18%">管状</th>
                    <th width="18%">业状</th>
                    <th><i class="AddIcon AddIconNew"></i></th>
                </tr>
            </thead>
        </table>
        <div class="scroll-content thinScroll thinScroll-table" v-scrollHeight="36">
            <table class="uiTable uiTable-striped uiTable-hover" id="tab1">
                <tbody>
                    <tr>
                        <td width="30%" title="玻璃厂">玻璃厂</td>
                        <td width="18%">5</td>
                        <td width="18%">正常</td>
                        <td width="18%">销售</td>
                        <td>72</td>
                    </tr>
                    <tr>
                        <td width="30%" title="龙骨厂">龙骨厂</td>
                        <td width="18%">5</td>
                        <td width="18%">正常</td>
                        <td width="18%">销售</td>
                        <td>72</td>
                    </tr>
                    <tr>
                        <td width="30%" title="方通扣板">方通扣板</td>
                        <td width="18%">5</td>
                        <td width="18%">正常</td>
                        <td width="18%">销售</td>
                        <td>72</td>
                    </tr>
                    <tr>
                        <td width="30%" title="木门厂">木门厂</td>
                        <td width="18%">5</td>
                        <td width="18%">正常</td>
                        <td width="18%">销售</td>
                        <td>72</td>
                    </tr>
                    <tr>
                        <td width="30%" title="石材厂">石材厂</td>
                        <td width="18%">5</td>
                        <td width="18%">正常</td>
                        <td width="18%">销售</td>
                        <td>72</td>
                    </tr>
                    <tr>
                        <td width="30%" title="不锈钢厂">不锈钢厂</td>
                        <td width="18%">5</td>
                        <td width="18%">正常</td>
                        <td width="18%">销售</td>
                        <td>72</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="j_outerHeight clearfix tj_bottom">
            <p class="col-md-3" data-title="全部">6</p>
            <p class="col-md-3 cGreen" data-title="正常" >6</p>
            <p class="col-md-3 cOrange" data-title="异常" >0</p>
            <p class="col-md-3 cRed" data-title="问题">0</p>
        </div>
    </div>
</div>
</template>
<script>
// import { mapMutations, mapGetters } from 'vuex'
// import { getManagerLeftList } from '../Resources/Api'
// export default {
//     data () {
//         return {
//             loading: true,
//             trIndex: 0,

//             regionList: [], // 地区列表
//             leftListData: [], // 遍历的数据
//             leftListDataClone: [], // 保存原始数据

//             diquValue: '', // 地区筛选
//             stageValue: '', // 阶段筛选
//             signValue: '', // 正/异/问题

//             allCount: 0,
//             zcCount: 0,
//             ycCount: 0,
//             wtCount: 0
//         }
//     },
//     computed: {
//         // ...mapGetters(['leftInfo'])
//     },
//     created () {
//         // this.getManagerLeftList()
//     },
//     methods: {
//         ...mapMutations({
//             setLeftData: `SET_LEFT_INFO`
//         }),
//         /**
//          * 获取左侧列表
//          */
//         getManagerLeftList () {
//             this.loading = true
//             getManagerLeftList({
//                 diqu: '',
//                 stage: '',
//                 startnumber: 1,
//                 endnumber: 200
//             }).then(results => {
//                 this.leftListData = this.leftListDataClone = results.data.Body
//                 this.loading = false
//                 this.selectFilter()
//                 if (this.leftListData.length > 0) {
//                     this.siderBarTrclick(0, this.leftListData[0])
//                 }
//             }).catch(() => {})
//         },
//         /**
//          * 左侧点击保存当前项信息
//          */
//         siderBarTrclick (index, item) {
//             this.trIndex = index
//             // 保存字段时 一定要确认公共字段一致
//             this.setLeftData(item)
//             // 点击是否关闭弹窗
//             this.$router.push(this.$route.matched[1].path)
//         },
//         /**
//          * 条件筛选
//          */
//         selectFilter () {
//             let diquReg = new RegExp(`^${this.diquValue}$`)
//             let stageReg = new RegExp(`^${this.stageValue}$`)
//             let signReg = new RegExp(`^${this.signValue}$`)

//             if (!this.diquValue) diquReg = new RegExp(/[\s\S]*/)
//             if (!this.stageValue) stageReg = new RegExp(/[\s\S]*/)
//             if (!this.signValue) signReg = new RegExp(/[\s\S]*/)

//             this.leftListData = this.leftListDataClone.filter(item => (
//                 diquReg.test(item.tb_diqu)) &&
//                 stageReg.test(item.ci_Stage) &&
//                 signReg.test(item.signs)
//             )

//             if (!this.signValue) {
//                 this.signValue = ''
//                 this.updateBottom()
//             }

//             if (this.leftListData.length > 0) {
//                 this.siderBarTrclick(0, this.leftListData[0])
//             }
//         },
//         /**
//          * 更新底部正常异常问题的数量
//          */
//         updateBottom () {
//             let zcCount = 0
//             let ycCount = 0
//             let wtCount = 0
//             for (var item of this.leftListData) {
//                 if (item.signs === 1) {
//                     zcCount = zcCount + 1
//                 } else if (item.signs === 2) {
//                     ycCount = ycCount + 1
//                 } else if (item.signs === 3) {
//                     wtCount = wtCount + 1
//                 }
//             }
//             this.allCount = this.leftListData.length
//             this.zcCount = zcCount
//             this.ycCount = ycCount
//             this.wtCount = wtCount
//         }
//     }
// }
</script>
