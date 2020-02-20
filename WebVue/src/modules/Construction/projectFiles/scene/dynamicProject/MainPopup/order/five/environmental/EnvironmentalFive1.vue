<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'订单确认'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <ul class="clearfix uiTab5">
        <li :class="['fl', currentIndex === 86 ? 'uiTab5-active' : '']" @click="tabClick(86)">现场保护<i class="uiTab-i"></i></li>
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
import { getFindSafetyOrderStandard } from '../../../../Resources/Api/index'
export default {
    props: ['Projectcode', 'type', 'role'],
    data () {
        return {
            currentIndex: 86,
            currentList: [],
            protectData: [],
            dataList: [],
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
            case 86:
                this.currentList = this.protectData
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
                    // 现场保护
                    this.protectData = this.dataList.filter(function (item) {
                        return item.worker_type_Id === 86
                    })
                    this.currentList = this.protectData
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
