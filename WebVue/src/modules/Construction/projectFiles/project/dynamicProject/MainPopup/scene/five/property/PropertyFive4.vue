<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'开工证'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">开工证</p>
            <div class="analyItemCon">
                <div class="analyItemCon">
                    <rx-viewer :images="workImg" class="fl" v-if="workImg !== ''">
                        <div class="clearfix">
                            <div class="fl mr10" :option={}>
                                <img :src="workImg | smallImg(80, 80)" >
                            </div>
                        </div>
                    </rx-viewer>
                    <rx-upload
                        v-if="protectList.length === 0"
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
        <div class="analyItem">
            <p class="analyItemTit tx-center">开工日期</p>
            <div class="analyItemCon">
                <el-date-picker
                    v-model="timevalue"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <div class="tx-center">
                    <input type="button" class="uiBtn-normal uiBtn-blue" value="提交" @click="submitData()" v-if="buttonIsShow"/>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { findStartPermit, uploadStartPermit } from '../../../../Resources/Api/scene'
import { mapGetters, mapMutations } from 'vuex'
export default {
    props: ['type'],
    data () {
        return {
            workImg: '',
            timevalue: '',
            protectList: [],
            buttonIsShow: false // 是否显示按钮
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'twoToThreeInfo', 'userInfo'])
    },
    created () {
        this.findStartPermit()
        this.buttonType()
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
                this.buttonIsShow = false
            }
        },
        ...mapMutations({
            setUpDatePlate: `SET_UPDATE_PLATE`
        }),
        // 上传图片
        successUpload (value) {
            this.workImg = value.src
            // this.$set(this.workImg, value.src)
        },
        // 获取开工证数据
        findStartPermit () {
            let parm = {
                projectOrderCode: this.$route.query.code
            }
            // 根据条件阶段查询订单
            findStartPermit(parm).then((result) => {
                if (result.data.StatusCode === 1) {
                    this.protectList = result.data.Body.startPermitlist
                    const imgList = this.protectList.filter((item) => { return item.data_type === 6 })
                    const dataList = this.protectList.filter((item) => { return item.data_type === 7 })
                    this.workImg = imgList[0].data
                    this.timevalue = dataList[0].data
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
        // 保存数据库数据
        submitData () {
            if (this.workImg === '') {
                this.$message('必须上传图片')
            } else {
                let imgData = {}
                let timeData = {}
                imgData.name = '开工证'
                imgData.data = this.workImg
                timeData.name = '开工日期'
                timeData.data = this.timevalue
                let startPermitData = [imgData, timeData]
                let parm = {
                    projectOrderCode: this.$route.query.code,
                    // userNo: this.getCookie('u_kahao'),
                    // userName: this.getCookie('xinming'),
                    userNo: this.userInfo.as_cardNo,
                    userName: this.userInfo.as_fullName,
                    orderNo: this.leftInfo.orderno,
                    orderNumber: this.$route.query.project.orderNumber,
                    startPermitData: JSON.stringify(startPermitData)
                }
                uploadStartPermit(parm).then((result) => {
                    if (result.data.StatusCode === 1) {
                        this.setUpDatePlate()
                        this.$parent.$parent.clickFiveShow()
                        this.buttonIsShow = false
                    }
                }).catch((error) => {
                    console.log(error)
                })
            }
        }
    }
}
</script>
