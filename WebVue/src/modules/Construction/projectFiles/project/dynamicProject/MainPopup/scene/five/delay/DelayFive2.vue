<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'上传延期单'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137" >
        <div class="analyItem">
            <p class="analyItemTit tx-center">工期</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">开工日期</span>
                    <span>{{delayData !== null ? $utils.format('yyyy-MM-dd', delayData.beginDate) : '--'}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">工期</span>
                    <span>{{workTime}} {{delayValue ? '+' : ''}} {{delayValue}}天</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">天数</p>
            <div class="analyItemCon">
                <p class="flex">
                    <span class="cLightGray pr8">请输入延期单上的天数</span>
                    <span><input type="text" v-model="delayValue" class="width80" :readonly="delayData !== null ? true : false"></span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">延期单</p>
            <div class="analyItemCon">
                <rx-viewer :images="delayImg" class="fl" v-if="delayImg.length > 0">
                    <div class="clearfix">
                        <div class="fl mr10" :option={}  v-for="(imgitem, imgindex) of delayImg" :key="imgindex">
                            <img :src="imgitem | smallImg(80, 80)" >
                        </div>
                    </div>
                </rx-viewer>
                <rx-upload
                    v-if="buttonIsShow"
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
import { getDelayOrderStandard, updateDelayOrderStandard } from '../../../../Resources/Api/scene'
export default {
    props: ['type', 'role'],
    data () {
        return {
            delayValue: '', // 延期天数
            delayData: {}, // 延期数据
            buttonIsShow: false, // 按钮是否显示
            delayImg: [], // 延期图片
            workTime: '--'
        }
    },
    created () {
        this.getDelayOrderStandard()
        this.buttonType()
    },
    computed: {
        ...mapGetters(['leftInfo', 'twoToThreeInfo', 'updatePlate', 'userInfo'])
    },
    methods: {
        // 按钮显示与隐藏
        buttonType () {
            if (this.userInfo.as_diquId === 39) {
                if (this.twoToThreeInfo.status === this.type) {
                    this.buttonIsShow = true
                } else {
                    this.buttonIsShow = false
                }
            } else {
                const userLevel = this.userInfo.as_level

                if (userLevel.length > 0) {
                    userLevel.forEach(ele => {
                        if (Number(ele) === 82 || Number(ele) === 83) {
                            if (this.twoToThreeInfo.status === this.type) {
                                this.buttonIsShow = true
                            } else {
                                this.buttonIsShow = false
                            }
                        } else if (Number(ele) === 47) {
                            if (Number(this.userInfo.as_cardNo) === Number(this.leftInfo.supervisor_userno)) {
                                if (this.twoToThreeInfo.status === this.type) {
                                    this.buttonIsShow = true
                                } else {
                                    this.buttonIsShow = false
                                }
                            } else {
                                this.buttonIsShow = false
                            }
                        } else {
                            this.buttonIsShow = false
                        }
                    })
                } else {
                    this.buttonIsShow = false
                }
            }
        },
        ...mapMutations({
            setUpDatePlate: `SET_UPDATE_PLATE`
        }),
        // 上传图片
        successUpload (value) {
            this.delayImg.push(value.src)
        },
        // 获取数据
        getDelayOrderStandard () {
            let parm = {
                projectOrderCode: this.$route.query.code
            }
            // 根据条件阶段查询订单
            getDelayOrderStandard(parm).then((result) => {
                if (result.data.StatusCode === 1) {
                    this.delayData = result.data.Body.delayOrderStandard
                    let delayImg = result.data.Body.photoList
                    delayImg.forEach(element => {
                        this.delayImg.push(element.orderPhoto)
                    })
                    if (this.delayData !== null) {
                        const days = new Date(this.delayData.endDate).getTime() - new Date(this.delayData.beginDate).getTime()
                        this.workTime = parseInt(days / (1000 * 60 * 60 * 24))
                        this.delayValue = this.delayData.id
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 获取cookie
        getCookie (name) {
            let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            if ((arr = document.cookie.match(reg))) { return unescape(arr[2]) } else { return null }
        },
        // 提交订单
        submitButton () {
            let delayOrderStandard = {}
            delayOrderStandard.id = this.delayData.id
            delayOrderStandard.delayDay = this.delayValue
            let parm = {
                delayOrderStandard: delayOrderStandard,
                photoList: this.delayImg,
                projectOrderCode: this.$route.query.code,
                // createUserNo: this.getCookie('u_kahao'),
                // createUserName: this.getCookie('xinming')
                createUserNo: this.userInfo.as_cardNo,
                createUserName: this.userInfo.as_fullName
            }
            // 提交图片
            updateDelayOrderStandard(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    this.setUpDatePlate()
                    this.$parent.$parent.clickFiveShow()
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
