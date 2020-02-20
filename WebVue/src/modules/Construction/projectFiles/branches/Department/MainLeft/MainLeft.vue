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
                <input type="text" placeholder="卡号/状态/拍摄状态" class="col-md-12 searchName" v-model="searchText"  @keyup.enter="selectFilter()">
                <i class="uiText-searchIcon bgIcon" @click="selectFilter()"></i>
            </div>
        </div>
        <table class="uiTable j_outerHeight">
            <thead>
                <tr>
                    <th width="20%">
                        <span class="serial_number" @click="souFlag = true">卡号<i class="bgIcon"></i></span>
                    </th>
                    <th width="20%">监控名称</th>
                    <th width="20%">使用状态</th>
                    <th width="20%">拍摄状态</th>
                    <th width="10%">时间</th>
                </tr>
            </thead>
        </table>
        <div class="scroll-content thinScroll thinScroll-table" v-loading="loading" v-scrollHeight="36">
            <table class="uiTable uiTable-striped uiTable-hover" id="tab1">
                <tbody>
                    <tr v-for="(item,index) in leftListData" :key="index" :class="{'tractive':index == trIndex}" @click="siderBarTrclick(index,item)">
                        <td width="20%" :title="item.card">{{ item.card | truncate(5) }}</td>
                        <td width="20%" :title="item.camera_name">{{ item.camera_name | truncate(3) }}</td>
                        <td width="20%">
                            <span v-if="item.state === 0">在线</span>
                            <span v-else-if="item.state === 1">不在线</span>
                            <span v-else>未检测</span>
                        </td>
                        <td width="20%">
                            <span v-if="item.camera_state === 0">库存</span>
                            <span v-else-if="item.camera_state === 1">已出库</span>
                            <span v-else>已归库</span>
                        </td>
                        <td width="10%"></td>
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
import { getCamerasListByRegion } from '../Resources/Api/index.js'
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
        this._getCamerasListByRegionFn()
    },
    methods: {
        ...mapMutations({
            setLeftData: `SET_LEFT_INFO`
        }),
        selectFilter () {
            this.trIndex = 0
            // 搜索清空前后空格以及转化为大写
            this.searchText = this.searchText.replace(/(^\s*)|(\s*$)/g, '').toUpperCase()
            if (this.searchText === '在线' || this.searchText === '库存') {
                this.searchText = 0
            } else if (this.searchText === '不在线' || this.searchText === '已出库') {
                this.searchText = 1
            } else if (this.searchText === '已归库' || this.searchText === '未检测') {
                this.searchText = 2
            }
            let searchReg = new RegExp(`^${this.searchText}$`)
            if (!this.searchText) searchReg = new RegExp(/[\s\S]*/)

            this.leftListData = this.leftListDataClone.filter(item => (
                searchReg.test(item.card) || searchReg.test(item.camera_name) || searchReg.test(item.state) || searchReg.test(item.camera_state)
            ))
            if (this.leftListData.length > 0) {
                this.siderBarTrclick(this.trIndex, this.leftListData[this.trIndex])
            }
            this.souFlag = false
        },
        /* 按分公司获取设备列表信息。 */
        _getCamerasListByRegionFn () {
            // const cityId = Number(this.userInfo.as_diquId) === 39 ? 1 : this.userInfo.as_diquId
            // let params
            // params = {
            //     region_id: cityId,
            //     area_id: this.userInfo.as_diquId
            // }
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
                        region_id: this.userInfo.as_diquId,
                        area_id: 0
                    }
                } else {
                    params = {
                        region_id: 1, // 地区ID eg: 11
                        area_id: _this.userInfo.as_areaId === '' ? _this.userInfo.as_diquId : _this.userInfo.as_areaId
                    }
                }
            }
            getCamerasListByRegion(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.leftListDataClone = result.data.Body.orderList
                    this.leftListData = this.leftListDataClone
                    if (this.leftListData.length > 0) {
                        this.siderBarTrclick(this.trIndex, this.leftListData[this.trIndex])
                    }
                    this.selectFilter()
                }
            }).catch((err) => {
                console.log(`按分公司获取设备接口错误,错误内容${err}`)
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
            this._getCamerasListByRegionFn()
        }
    }
}
</script>
