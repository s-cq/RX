<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'订单确认'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <ul class="clearfix uiTab5">
        <li :class="['fl', currentIndex === 79 ? 'uiTab5-active' : '']" @click="tabClick(79)">形象标识<i class="uiTab-i"></i></li>
        <li :class="['fl', currentIndex === 85 ? 'uiTab5-active' : '']" @click="tabClick(85)">着装形象<i class="uiTab-i"></i></li>
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
            currentIndex: 79,
            currentList: [],
            dataList: [],
            identificationData: [],
            clothingData: [],
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
            case 79:
                this.currentList = this.identificationData
                break
            case 85:
                this.currentList = this.clothingData
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
                    // 形象标识
                    this.identificationData = this.dataList.filter(function (item) {
                        return item.worker_type_Id === 79
                    })
                    // 着装形象
                    this.clothingData = this.dataList.filter(function (item) {
                        return item.worker_type_Id === 85
                    })
                    this.currentList = this.identificationData
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
