<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'工艺详情'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
   <div class="layerRtb-scroll thinScroll" v-scrollHeight = "270">
        <div tag="div" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">主案图纸</p>
            <div class="analyItemCon">
                <div class="fl">
                    <rx-viewer :images="data" style="position:relative">
                        <div class="clearfix">
                            <div class="mr10">
                                <img :src="src | smallImg(80, 80)">
                                <span class="standardImg pointer" @click="currentIndex(1)">标准</span>
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <div class="fl">
                    <rx-viewer :images="data" style="position:relative">
                        <div class="mr10">
                            <img :src="src | smallImg(80, 80)">
                            <span class="sceneImg">现</span>
                        </div>
                    </rx-viewer>
                </div>
                 <div class="fl">
                   <rx-viewer :images="data" style="position:relative">
                        <div class="clearfix">
                            <div class="mr10">
                                <img :src="src | smallImg(80, 80)">
                                <span class="sceneImg" onclick="getContent(8)">景</span>
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <span class="circlemark circlemark-lightGreen">已</span>
           </div>
        </div>
        <div tag="div" class="analyItem anItemBor"  v-for="(item, index) in this.constProcessList" :key="index">
            <p class="analyItemTit tx-center">{{item.step_name}}</p>
            <div class="analyItemCon">
                <div class="fl">
                    <rx-viewer style="position:relative">
                        <div class="clearfix">
                            <div class="mr10">
                                <img :src="item.standard_server_url | smallImg(80, 80)">
                                <span class="standardImg pointer" @click="currentIndex(index)">标准</span>
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <div class="fl">
                    <rx-viewer style="position:relative">
                        <div class="mr10">
                            <img :src="item.ServerUrl | smallImg(80, 80)">
                            <span class="sceneImg">现</span>
                        </div>
                    </rx-viewer>
                </div>
                <div class="col-md-11" v-if="clickIndex === index && !flag">
                    <p><span class="cLightGray pr8">名称</span><span>{{item.step_name}}</span></p>
                    <p class="col-md-11">
                        <span class="cLightGray pr8">工序标准</span>
                        <span>{{item.Acceptance_criteria}}</span>
                    </p>
                </div>
                <span :class="['circlemark',  item.ServerUrl ? 'circlemark-lightGreen' : 'circlemark-lightRed']">{{item.ServerUrl ? '完' : '未'}}</span>
           </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <!-- <p class="fl col-md-9"></p>
                <p class="fr col-md-3">
                    <span class="cLightGray">统计</span>
                    <span class="cGreen fz14 bold">0分</span>
                </p>
                <p class="fl"><span class="circlemark circlemark-green">优</span></p> -->
            </div>
        </div>
        <!-- <div class="tx-center">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
        </div> -->
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getTechnicsDetail } from '../../Resources/Api/index'
export default {
    props: ['processId'],
    data () {
        return {
            constProcessList: [],
            fourIndex: undefined,
            data: [],
            clickIndex: undefined, // 点击时的下标
            flag: true,
            src: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554356888tjKGjcXAZb.jpg'
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.getTechnicsDetail()
    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
        },
        // 获取数据
        getTechnicsDetail () {
            let _this = this
            let parm = {
                processId: this.processId
            }
            getTechnicsDetail(parm).then((result) => {
                _this.constProcessList = result.data.Body.constProcess
            }).catch((err) => {
                console.log(err)
            })
        },
        currentIndex (index) {
            if (this.flag) {
                this.clickIndex = index
            }
            this.flag = !this.flag
        }
    }
}
</script>
