<template>
<div class="tc-left pr10 fl">
    <ul class="clearfix uiTab1 mb5 j_outerHeight">
        <li class="col-md-3 fl uiTab1-active"><a href="javascript:">半成品</a></li>
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
                    <th width="30%">名称</th>
                    <th width="25%">品牌</th>
                    <th width="30%">规格</th>
                    <th width="15%"><i class="AddIcon AddIconNew"></i></th>
                </tr>
            </thead>
        </table>
        <div class="scroll-content thinScroll thinScroll-table" v-scrollHeight="36">
            <table class="uiTable uiTable-striped uiTable-hover" id="tab1">
                <tbody>
                    <!-- <tr v-for="(item,index) in leftListData" :key="index" :class="{'tractive':index == trIndex}" @click="siderBarTrclick(index,item)">
                        <td class="relative" width="30%" :data-title="item.ci_ClientName+',' + item.ci_SalesmanName">
                            {{ item.ci_RwdId }}
                            <span v-if="index === 1" class="title-tips-left blue">顶</span>
                            <span v-if="index === 2" class="title-tips-left red">顶</span>
                            <span v-if="index === 3" class="title-tips-left green">顶</span>
                            <span v-if="index === 4" class="title-tips-left orange">顶</span>
                            <span v-if="index === 5" class="title-tips-left gray">顶</span>
                            <span v-if="index === 6" class="title-tips-right red">顶</span>
                            <span v-if="index === 7" class="title-tips-right green">顶</span>
                            <span v-if="index === 8" class="title-tips-right orange">顶</span>
                            <span v-if="index === 9" class="title-tips-right gray">顶</span>
                            <span v-if="index === 10" class="title-tips-right blue">顶</span>
                        </td>
                        <td width="20%">
                            <span>{{item.ci_DesignerName || '-'}}</span>
                        </td>
                        <td width="20%">
                            <span>{{item.ci_Stage | stage }}</span>
                        </td>
                        <td width="15%" :class="{'cRed':item.DiffDate < 0}">{{item.DiffDate}}</td>
                        <td width="15%">
                            <span :class="{'cRed':item.DiffHoure < 0}">{{ -999 > item.DiffHoure ?  '-999+' : item.DiffHoure }}</span>
                        </td>
                    </tr> -->

                     <tr>
                        <td width="30%" title="普通烤漆玻璃">普通烤漆</td>
                        <td width="25%">瑞祥</td>
                        <td width="30%">5mm</td>
                        <td width="15%">72</td>
                    </tr>
                    <tr>
                        <td width="30%" title="普通烤漆玻璃">普通烤漆</td>
                        <td width="25%">瑞祥</td>
                        <td width="30%">8mm</td>
                        <td width="15%">72</td>
                    </tr>
                    <tr>
                        <td width="30%" title="钢化烤漆玻璃">钢化烤漆</td>
                        <td width="25%">瑞祥</td>
                        <td width="30%">5mm</td>
                        <td width="15%">72</td>
                    </tr>
                    <tr>
                        <td width="30%" title="钢化烤漆玻璃">钢化烤漆</td>
                        <td width="25%">瑞祥</td>
                        <td width="30%">8mm</td>
                        <td width="15%">72</td>
                    </tr>

                    <tr>
                        <td width="30%" title="钢化烤漆玻璃">钢化烤漆</td>
                        <td width="25%">瑞祥</td>
                        <td width="30%">10mm</td>
                        <td width="15%">72</td>
                    </tr>
                    <tr>
                        <td width="30%" title="钢化烤漆玻璃">钢化烤漆</td>
                        <td width="25%">瑞祥</td>
                        <td width="30%">12mm</td>
                        <td width="15%">72</td>
                    </tr>
                    <tr>
                        <td width="30%" title="超白普通烤漆玻璃">超白普通</td>
                        <td width="25%">瑞祥</td>
                        <td width="30%">5mm</td>
                        <td width="15%">72</td>
                    </tr>
                    <tr>
                        <td width="30%" title="超白普通烤漆玻璃">超白普通</td>
                        <td width="25%">瑞祥</td>
                        <td width="30%">8mm</td>
                        <td width="15%">72</td>
                    </tr>
                    <tr>
                        <td width="30%" title="超白钢化烤漆玻璃">超白钢化</td>
                        <td width="25%">瑞祥</td>
                        <td width="30%">5mm</td>
                        <td width="15%">72</td>
                    </tr>
                    <tr>
                        <td width="30%" title="超白钢化烤漆玻璃">超白钢化</td>
                        <td width="25%">瑞祥</td>
                        <td width="30%">8mm</td>
                        <td width="15%">72</td>
                    </tr>
                    <tr>
                        <td width="30%" title="轻钢龙骨">轻钢龙骨</td>
                        <td width="25%">瑞祥</td>
                        <td width="30%">38主骨/3M</td>
                        <td width="15%">72</td>
                    </tr>
                    <tr>
                        <td width="30%" title="轻钢龙骨">轻钢龙骨</td>
                        <td width="25%">瑞祥</td>
                        <td width="30%">50付骨/3M</td>
                        <td width="15%">72</td>
                    </tr>
                    <tr>
                        <td width="30%" title="轻钢龙骨">轻钢龙骨</td>
                        <td width="25%">瑞祥</td>
                        <td width="30%">75竖向/3M</td>
                        <td width="15%">72</td>
                    </tr>
                     <tr>
                        <td width="30%" title="轻钢龙骨">轻钢龙骨</td>
                        <td width="25%">瑞祥</td>
                        <td width="30%">75天地/3M</td>
                        <td width="15%">72</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="j_outerHeight clearfix tj_bottom">
            <p class="col-md-3" data-title="全部">10</p>
            <p class="col-md-3 cGreen" data-title="正常" >10</p>
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
