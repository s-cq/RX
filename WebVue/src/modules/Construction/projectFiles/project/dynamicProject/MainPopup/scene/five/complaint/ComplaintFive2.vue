<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'投诉查看'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137" >
        <div class="analyItem">
            <p class="analyItemTit tx-center"></p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">投诉来源</span><span>客户来电</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">投诉时间</span><span>2019-7-29</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">投诉等级</span><span>一级</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">问题类型</span><span>现场-工期-项目延期 未按时交付</span></p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center"></p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">合同编号</span><span>WJ90600706025G</span></p>
                <p class="col-md-4 textOverFlow"><span class="cLightGray pr8">公司名称</span><span>斯贝斯拓展斯贝斯拓展斯贝斯拓展斯贝斯拓展斯贝斯拓展斯贝斯拓展</span>个</p>
                <p class="col-md-4"><span class="cLightGray pr8">客户</span><span>赵总</span></p>
                <p class="col-md-4 textOverFlow"><span class="cLightGray pr8">项目名称</span><span>北京北京北极光</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">工程经理</span><span>李四</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">监理</span><span>王五</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">项目经理</span><span>王柳</span></p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center"></p>
            <div class="analyItemCon">
                <div class="col-md-12 mt10">
                    <label class="fl mr10 cLightGray pr8 label">图片</label>
                    <rx-viewer :images="projectImg" class="fl">
                        <div class="clearfix">
                            <div class="fl mr10" :option={}  v-for="(imgitem, imgindex) of projectImg" :key="imgindex">
                                <img :src="imgitem | smallImg(80, 80)" >
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <div class="col-md-12 clearfix">
                    <span class="cLightGray pr8">内容描述</span>
                    <span>项目延期严重,项目目前还有两个玻璃门没装,墙起皮,踢脚线没装,施工垃圾没处理等,另外我方从7月22号下午到26号期间无故停工,要求我方尽快把合同内的施工尽快完成支付</span>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
// import { getinspectionData, saveInspection } from '../../../../Resources/Api/scene'
export default {
    props: ['type', 'role'],
    data () {
        return {
            projectImg:
                [
                    'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554712893ApCxhii2KA.jpg',
                    'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554712893ApCxhii2KA.jpg'
                ]
        }
    },
    created () {
        this.buttonType()
    },
    computed: {
        ...mapGetters(['leftInfo', 'twoToThreeInfo', 'updatePlate'])
    },
    methods: {
        ...mapMutations({
            setUpDatePlate: `SET_UPDATE_PLATE`
        }),
        // 判断按钮是否显示
        buttonType () {
            if (this.twoToThreeInfo.status === this.type) {
                this.buttonIsShow = true
            } else {
                this.buttonIsShow = false
            }
            // if (Number(this.getCookie('u_diqu')) === 39) {
            //    this.buttonIsShow = true
            // } else {
            //     if (juesename) {
            //         if (currentRole === 6) {
            //             $("#submit .uiBtn-normal").show()
            //         }
            //     } else if ('@currentUser.Level' == '82' || '@currentUser.Level' == '83') {
            //         if (currentRole === 3) {
            //             $("#submit .uiBtn-normal").show();
            //         }
            //     }
            // }
        },
        // 获取cookie
        getCookie (name) {
            let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            if ((arr = document.cookie.match(reg))) { return unescape(arr[2]) } else { return null }
        }
    }
}
</script>
<style lang="scss">
    .label {
        display:flex;
        align-items:center
    }
    .textOverFlow {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
