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
                     <el-checkbox v-model="item[index]"></el-checkbox>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">已选择</span>
                    <span>0</span>
                </p>
                <p class="col-md-4">
                    <el-checkbox >全选</el-checkbox>
                </p>
                <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    props: ['Projectcode'],
    data () {
        return {
            currentIndex: 79,
            currentList: [],
            dataList: [],
            identificationData: [
                {
                    name: '配电箱',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554712893ApCxhii2KA.jpg',
                    content: '1、验收标准：配电箱标牌粘贴区域二级配电箱或三级配电箱上方，高度沿地面上1.5米，粘贴端正。 2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。'
                },
                {
                    name: '注意安全',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554712893ApCxhii2KA.jpg',
                    content: '1、验收标准：施工现场安全隐患处（如电梯井、楼梯无扶手、有高空坠物处等随现场而定）粘贴，要求高度标识牌下沿距离地面1.5米，粘贴端正。 2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。'
                }
            ],
            clothingData: [
                {
                    name: '工服',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1555584285ctT8kzaGMx.jpg',
                    content: '1、验收标准：配电箱标牌粘贴区域二级配电箱或三级配电箱上方，高度沿地面上1.5米，粘贴端正。 2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。'
                }
            ],
            fourIndex: ''
        }
    },
    created () {
        this.currentList = this.identificationData
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
        }
    }
}
</script>
