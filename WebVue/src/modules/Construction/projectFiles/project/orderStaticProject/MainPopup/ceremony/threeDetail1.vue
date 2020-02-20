<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'物品准备'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem"  v-for="(item, index) of protectList" :key="index" >
            <p class="analyItemTit tx-center">{{item.name | truncate(5)}}</p>
            <div class="analyItemCon">
                <div class="fixedBox  flex">
                    <rx-viewer :images="item.data" class="ml10">
                        <div class="clearfix">
                            <div class="fl mr10" style=" margin-right: 30px;">
                                <img :src="item.data | smallImg(88, 88)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                    <div class="pomernxcfg">
                        <span>{{item.content}}</span>
                    </div>
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
export default {
    data () {
        return {
            protectList: [
                {
                    name: '条幅',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1571397410dB3KXxKi54.png',
                    content: '大项目：1、物料：背景喷绘布，可重复利用，文字直接印刷在背景布上。项目经理接单时领用，用完归还公司。 ；  2、横幅：尺寸600MM，需要每次根据项目制作。    中小项目：：1、物料：背景喷绘布，可重复利用，文字直接印刷在背景布上。项目经理接单时领用，用完归还公司。 ；  2、横幅：尺寸600MM，需要每次根据项目制作。 '
                },
                {
                    name: '王老吉',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1571397588R4QESAkTFt.jpg',
                    content: '王老吉由公司提供'
                },
                {
                    name: '背景布',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1571397410dB3KXxKi54.png',
                    content: '大项目：1、物料：背景喷绘布，可重复利用，文字直接印刷在背景布上。项目经理接单时领用，用完归还公司。 ；  2、横幅：尺寸600MM，需要每次根据项目制作。    中小项目：：1、物料：背景喷绘布，可重复利用，文字直接印刷在背景布上。项目经理接单时领用，用完归还公司。 ；  2、横幅：尺寸600MM，需要每次根据项目制作。 '
                },
                {
                    name: '桌子',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1571398391fppGd8dGbx.jpg',
                    content: '1、桌子尺寸：1200长x660宽x720高，桌布尺寸：桌布课制作2-3面，重复利用，LOGO直接印刷，项目经理接单时领取，用完随开工背景布一并归还公司；   2、材质标准：红绸布；   3、物料提供：王老吉公司提供项目经理接单时领取。'
                },
                {
                    name: '桌布',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1571397454KJ8KSDQzkR.png',
                    content: '1、桌子尺寸：1200长x660宽x720高，桌布尺寸：桌布课制作2-3面，重复利用，LOGO直接印刷，项目经理接单时领取，用完随开工背景布一并归还公司；   2、材质标准：红绸布；   3、物料提供：王老吉公司提供项目经理接单时领取。'
                },
                {
                    name: '地面布',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1571397432NKxMwBJxKB.png',
                    content: '1、地面物料：红色喷绘布，与背景布一致，文字是印刷的。参考价10元/每平米；  2、使用标准：重复利用，项目经理接单时与背景布、桌布、桌子、王老吉一并领取'
                }
            ]
        }
    },
    created () {

    },
    methods: {
        successUpload (value) {
            console.log(value)
            this.data.push(value.src)
        }
    }
}
</script>

<style>
    .fixedBox.flex {
        display: flex;
        align-content: center;
    }
    .pomernxcfg{
        width: 74%;
        height: 100% ;
    }
</style>
