<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'订单确认'}"></three-title>
    <ul class="clearfix uiTab5">
        <li :class="['fl', currentIndex === 80 ? 'uiTab5-active' : '']" @click="tabClick(80)">用电安全<i class="uiTab-i"></i></li>
        <li :class="['fl', currentIndex === 82 ? 'uiTab5-active' : '']" @click="tabClick(82)">消防安全<i class="uiTab-i"></i></li>
        <li :class="['fl', currentIndex === 83 ? 'uiTab5-active' : '']" @click="tabClick(83)">设备安全<i class="uiTab-i"></i></li>
        <li :class="['fl', currentIndex === 84 ? 'uiTab5-active' : '']" @click="tabClick(84)">人员安全<i class="uiTab-i"></i></li>
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
            currentIndex: 80,
            currentList: [],
            dataList: [],
            equipmentSafeData: [

                {
                    name: '手推车',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554712893ApCxhii2KA.jpg',
                    content: '、检验标准：手推车必须车况良好，结构牢固，轮胎气压充足。握把及推车底部处必须做绝缘处理！ 2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。'
                }
            ],
            personnelSafeData: [

                {
                    name: '安全绳',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554712893ApCxhii2KA.jpg',
                    content: '1、检验标准：公共区域墙面保护先使用5-8CM防火板做基层保护，面层使用公司PVC加棉材质保护膜，保护膜粘贴密实、平整、牢固。2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。'
                },
                {
                    name: '安全帽',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554712893ApCxhii2KA.jpg',
                    content: '1、检验标准：超高（标准：脚手架2.5米以上）作业人员必须佩戴安全帽；安全帽在使用前，要进行外观检查，发现帽壳与帽衬有异常损伤、裂痕就不能再使用，而应当更换新的安全帽。必须戴正安全帽，扣好下颏带，防止飞来物体对头部的打击，高处坠落时对头部的伤害。 2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。'
                }
            ],
            fireSafeData: [
                {
                    name: '喷淋保护',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554712893ApCxhii2KA.jpg',
                    content: '1、 检验标准： 必须使用专用喷淋保护夹子保护、保证喷淋头施工过程中的安全。 2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。'
                }
            ],
            electricSafeData: [
                {
                    name: '临电线布设',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554712893ApCxhii2KA.jpg',
                    content: '1、检验标准： 临电线必须从二级配电箱出来使用电缆线并悬挂、悬挂高度不低于2米，入口处需有漏电保护。 2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。'
                }
            ],
            fourIndex: ''
        }
    },
    created () {
        this.currentList = this.equipmentSafeData
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
        }
    }
}
</script>
