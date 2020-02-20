<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'处理结果'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137" >
        <div class="analyItem">
            <p class="analyItemTit tx-center">项目</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">投诉来源</span><span>客户来电</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">投诉时间</span><span>2019-7-29</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">投诉等级</span><span>一级</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">投诉类型</span><span>现场-工期-项目延期 未按时交付</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">合同编号</span><span>WJ90600706025G</span></p>
                <p class="col-md-4 textOverFlow"><span class="cLightGray pr8">公司名称</span><span>斯贝斯拓展斯贝斯拓展斯贝斯拓展斯贝斯拓展斯贝斯拓展斯贝斯拓展</span></p>
                <p class="col-md-4 textOverFlow"><span class="cLightGray pr8">项目名称</span><span>北京北京北极光</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">工经</span><span>雷忠华</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">预计罚款</span><span>50</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">完成时间</span><span>2019-11-9</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">描述</span><span>在预定时间内完成投诉订单，超出后罚款</span></p>
            </div>
        </div>
         <div class="analyItem">
            <p class="analyItemTit tx-center">整改</p>
            <div class="analyItemCon">
                <div class="col-md-12 mt10 flex">
                    <label class="fl mr10 cLightGray pr8 label"> 投诉图片</label>
                    <rx-viewer :images="complantImg" class="fl">
                        <div class="clearfix">
                            <div class="fl mr10" :option={}  v-for="(imgitem, imgindex) of complantImg" :key="imgindex">
                                <img :src="imgitem | smallImg(80, 80)" >
                            </div>
                        </div>
                    </rx-viewer>
                    <rx-upload
                        :data="{id: 11}"
                        :init="{class: 2, mime: 1}"
                        :elStyle="{width:'80px', height: '80px'}"
                        @success="successUpload" class="fl">
                        <div class="fl uiImgUpload uiImgUpload-gblock">
                            <a href="javascript:">
                                <span type="file" value="" class="file"></span>
                                <em class="bgIcon file-ico"></em>
                            </a>
                        </div>
                    </rx-upload>
                </div>

            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <div class="tx-center">
                    <input type="button" class="uiBtn-normal uiBtn-blue" value="确定" @click="submitButton()" v-if="buttonIsShow">
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
// import { getPhototList, checkUpload } from '../../../../Resources/Api/scene'
export default {
    props: ['type', 'role'],
    data () {
        return {
            complantImg: []
        }
    },
    created () {
        this.buttonType()
    },
    computed: {
        ...mapGetters(['leftInfo', 'twoToThreeInfo', 'updatePlate'])
    },
    methods: {
        // 按钮是否显示
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
        ...mapMutations({
            setUpDatePlate: `SET_UPDATE_PLATE`
        }),
        // 上传图片
        successUpload (value) {
            this.complantImg.push(value.src)
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
