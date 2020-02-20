<template>
<div class="tc-left pr10 fl">
    <ul class="clearfix uiTab1 mb5 j_outerHeight">
        <!-- <li class="col-md-3 fl uiTab1-active"><a href="javascript:">项</a></li> -->
    </ul>
    <div class="daily_title j_outerHeight">
        <ul class="clearfix">
            <li class="title_cur" data-title="全部">全</li>
            <!-- <li data-title="不超过10个字是不会出现的" data-title-length="10">S</li>
            <li data-title="我的背景色是蓝色的" data-title-color="#3385ff">Z</li>
            <li class="title_not_allowed">G</li>
            <li style="float:right;">D</li> -->
        </ul>
    </div>
    <div class="contentbox">
        <div class="dailyftSearch clearfix" v-if="souFlag" style="z-index:2">
            <div class="fl uiHas-textIcon">
                <input type="text" placeholder="单号/名称" class="col-md-12 searchName" v-model="searchText"  @keyup.enter="selectFilter()">
                <i class="uiText-searchIcon bgIcon" @click="selectFilter()"></i>
            </div>
        </div>
        <table class="uiTable j_outerHeight">
            <thead>
                <tr>
                    <th width="25%">
                        <span class="serial_number" @click="souFlag = true">单号<i class="bgIcon"></i></span>
                    </th>
                    <th width="25%">名称</th>
                    <th width="15%">点位</th>
                    <th width="15%">状态</th>
                    <th>时间</th>
                </tr>
            </thead>
        </table>
        <div class="scroll-content thinScroll thinScroll-table" v-loading="loading" v-scrollHeight="36">
            <table class="uiTable uiTable-striped uiTable-hover" id="tab1">
                <tbody>
                    <tr v-for="(item,index) in leftListData" :key="index" :class="{'tractive':index == trIndex}" @click="siderBarTrclick(index,item)">
                        <td width="25%">{{ item.order_no }}</td>
                        <td width="25%" :title="item.order_name">{{ item.order_name | truncate(4) }}</td>
                        <td width="15%">{{ item.order_points }}</td>
                        <td width="15%"></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="j_outerHeight clearfix tj_bottom">
            <p class="col-md-3" data-title="全部">{{ leftListData.length }}</p>
            <p class="col-md-3 cGreen" data-title="正常">0</p>
            <p class="col-md-3 cOrange" data-title="异常">0</p>
            <p class="col-md-3 cRed" data-title="问题">0</p>
        </div>
    </div>
</div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import { getProjectLeftList } from '../Resources/Api/index'
export default {
    data () {
        return {
            loading: false,
            trIndex: 0,
            leftListData: [], // 遍历的数据
            leftListDataClone: [],
            souFlag: false, // 搜索是否显示
            searchText: '' // 搜索内容
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'updateLeft', 'userInfo'])
    },
    created () {
        this._getProjectLeftListFn()
    },
    methods: {
        ...mapMutations({
            setLeftData: `SET_LEFT_INFO`
        }),
        // 筛选
        selectFilter () {
            this.trIndex = 0
            let searchReg = new RegExp(`^${this.searchText}$`)
            if (!this.searchText) searchReg = new RegExp(/[\s\S]*/)

            this.leftListData = this.leftListDataClone.filter(item => (
                searchReg.test(item.order_no) || searchReg.test(item.order_name)
            ))
            if (this.leftListData.length > 0) {
                this.siderBarTrclick(this.trIndex, this.leftListData[this.trIndex])
            }
            this.souFlag = false
        },
        _getProjectLeftListFn () {
            let params
            let _this = this
            if (Number(_this.userInfo.as_diquId) === 39) {
                params = {
                    region_id: 1,
                    area_id: 0
                }
            } else {
                if (_this.userInfo.as_areaId === null || _this.userInfo.as_areaId === undefined) {
                    params = {
                        region_id: _this.userInfo.as_diquId, // 地区ID eg: 11
                        order_checker: _this.userInfo.as_cardNo, // 监理卡号 eg: 00009930
                        area_id: 0
                    }
                } else {
                    params = {
                        region_id: 1, // 地区ID eg: 11
                        area_id: _this.userInfo.as_areaId === '' ? _this.userInfo.as_diquId : _this.userInfo.as_areaId
                    }
                }
            }

            getProjectLeftList(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.leftListDataClone = result.data.Body.orderList
                    this.leftListData = this.leftListDataClone
                    if (this.leftListData.length > 0) {
                        this.siderBarTrclick(this.trIndex, this.leftListData[this.trIndex])
                    }
                    this.selectFilter()
                } else {
                    console.log(result.data.StatusMsg)
                }
            }).catch((err) => {
                console.log(`获取项目列表数据接口错误,错误内容${err}`)
            })
        },
        siderBarTrclick (index, item) {
            this.trIndex = index
            // 保存字段时 一定要确认公共字段一致
            this.setLeftData(item)
            // 关闭弹窗
            this.$router.push(this.$route.matched[1].path)
        }
    },
    watch: {
        updateLeft () {
            this._getProjectLeftListFn()
        }
    }
}
</script>
