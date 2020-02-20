<template>
<div class="layerRtb layerRtb-threecolumn">
   <three-title :title="{name:'订单确认'}"></three-title>
    <ul class="clearfix uiTab5">
        <li :class="['fl', currentIndex === 86 ? 'uiTab5-active' : '']" @click="tabClick(86)">现场保护<i class="uiTab-i"></i></li>
     </ul>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "28" >
        <div class="analyItem" v-for="(item, index) in currentList" :key="index">
            <p class="analyItemTit tx-center">{{item.name}}</p>
            <div class="analyItemCon">
                <div class="analyItemflex">
                    <rx-viewer style="position:relative">
                        <div class="clearfix tx-center">
                            <div class="mr10">
                                <img :src="item.data | smallImg(80, 80)">
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
export default {
    data () {
        return {
            currentIndex: 86,
            currentList: [],
            protectData: [
                {
                    name: '公共区域墙面保护',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554712893ApCxhii2KA.jpg',
                    content: '1、检验标准：公共区域墙面保护先使用5-8CM防火板做基层保护，面层使用公司PVC加棉材质保护膜，保护膜粘贴密实、平整、牢固。 2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。'
                }
            ],
            fourIndex: ''
        }
    },
    created () {
        this.currentList = this.protectData
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
        }
    }
}
</script>
