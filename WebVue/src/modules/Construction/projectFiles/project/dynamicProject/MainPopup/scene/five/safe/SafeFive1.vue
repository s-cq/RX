<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'订单确认'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <ul class="clearfix uiTab5">
        <li :class="['fl', currentIndex === 80 ? 'uiTab5-active' : '']" @click="tabClick(80)">用电安全<i class="uiTab-i"></i></li>
        <li :class="['fl', currentIndex === 82 ? 'uiTab5-active' : '']" @click="tabClick(82)">消防安全<i class="uiTab-i"></i></li>
        <li :class="['fl', currentIndex === 83 ? 'uiTab5-active' : '']" @click="tabClick(83)">设备安全<i class="uiTab-i"></i></li>
        <li :class="['fl', currentIndex === 84 ? 'uiTab5-active' : '']" @click="tabClick(84)">人员安全<i class="uiTab-i"></i></li>
    </ul>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "28" >
        <div class="analyItem" v-for="(item, index) in currentList" :key="index">
            <p class="analyItemTit tx-center">{{item.standard_name}}</p>
            <div class="analyItemCon">
                <div class="analyItemflex">
                    <rx-viewer style="position:relative">
                        <div class="clearfix tx-center">
                            <div class="mr10">
                                <img :src="item.picturePath | smallImg(80, 80)">
                                <span class="standardStyle">标</span>
                            </div>
                        </div>
                    </rx-viewer>
                    <div>{{item.content}}</div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
            </div>
        </div>
    </div> -->
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getFindSafetyOrderStandard } from '../../../../Resources/Api/scene'
export default {
    props: ['Projectcode', 'type', 'role'],
    data () {
        return {
            currentIndex: 80,
            currentList: [],
            dataList: [],
            equipmentSafeData: [],
            personnelSafeData: [],
            fireSafeData: [],
            electricSafeData: [],
            fourIndex: ''
        }
    },
    created () {
        this.getFindSafetyOrderStandard()
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    methods: {
        tabClick (index) {
            this.currentIndex = index
            switch (index) {
            case 83:
                this.currentList = this.equipmentSafeData
                break
            case 84:
                this.currentList = this.personnelSafeData
                break
            case 82:
                this.currentList = this.fireSafeData
                break
            case 80:
                this.currentList = this.electricSafeData
                break
            default:
                break
            }
        },
        getFindSafetyOrderStandard () {
            let parm = {
                projectOrderCode: this.Projectcode
            }
            // 接口订单数据
            getFindSafetyOrderStandard(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    this.dataList = results.data.Body.safeList
                    console.log(this.dataList)
                    // 设备安全数据
                    this.equipmentSafeData = this.dataList.filter(function (item) {
                        return item.worker_type_Id === 83
                    })
                    // 人员安全数据
                    this.personnelSafeData = this.dataList.filter(function (item) {
                        return item.worker_type_Id === 84
                    })
                    // 消防安全数据
                    this.fireSafeData = this.dataList.filter(function (item) {
                        return item.worker_type_Id === 82
                    })
                    // 用电安全数据
                    this.electricSafeData = this.dataList.filter(function (item) {
                        return item.worker_type_Id === 80
                    })
                    this.currentList = this.electricSafeData
                    console.log(this.electricSafeData, this.currentList)
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    watch: {
        $route () {
            this.getFindSafetyOrderStandard()
        }
    }
}
</script>
