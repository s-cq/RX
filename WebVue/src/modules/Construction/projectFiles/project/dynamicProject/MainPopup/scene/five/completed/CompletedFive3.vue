<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'检查上传'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137" >
        <div class="analyItem">
            <p class="analyItemTit tx-center">项目总检</p>
            <div class="analyItemCon">
                <rx-viewer :images="projectImg" class="fl" v-if="projectImg.length > 0">
                    <div class="clearfix">
                        <div class="fl mr10" :option={}  v-for="(imgitem, imgindex) of projectImg" :key="imgindex">
                            <img :src="imgitem | smallImg(80, 80)" >
                        </div>
                    </div>
                </rx-viewer>
                <rx-upload
                    v-if="projectList.length === 0"
                    :data="{id: 11}"
                    :init="{class: 2, mime: 1}"
                    :elStyle="{width:'80px', height: '80px'}"
                    @success="successUploadProjectList" class="fl">
                    <div class="fl uiImgUpload uiImgUpload-gblock">
                        <a href="javascript:">
                            <span type="file" value="" class="file"></span>
                            <em class="bgIcon file-ico"></em>
                        </a>
                    </div>
                </rx-upload>
            </div>
        </div>
         <div class="analyItem">
            <p class="analyItemTit tx-center">竣工验收</p>
            <div class="analyItemCon">
                <rx-viewer :images="completedImg" class="fl" v-if="completedImg.length > 0">
                    <div class="clearfix">
                        <div class="fl mr10" :option={}  v-for="(imgitem, imgindex) of completedImg" :key="imgindex">
                            <img :src="imgitem | smallImg(80, 80)" >
                        </div>
                    </div>
                </rx-viewer>
                <rx-upload
                    v-if="completedList.length === 0"
                    :data="{id: 11}"
                    :init="{class: 2, mime: 1}"
                    :elStyle="{width:'80px', height: '80px'}"
                    @success="successUploadCompleted" class="fl">
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
import { getPhototList, checkUpload } from '../../../../Resources/Api/scene'
export default {
    props: ['type', 'role'],
    data () {
        return {
            projectImg: [], // 项目图片
            completedImg: [], // 竣工图片
            projectList: [], // 项目数组
            completedList: [], // 竣工数组
            buttonIsShow: false // 按钮是否显示
        }
    },
    created () {
        this.getPhototList()
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
        successUploadProjectList (value) {
            this.projectImg.push(value.src)
        },
        successUploadCompleted (value) {
            this.completedImg.push(value.src)
        },
        getPhototList () {
            let parm = {
                orderCode: this.$route.query.code
            }
            // 图片数据
            getPhototList(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    let completedList = results.data.Body.completionInspection
                    let projectList = results.data.Body.projectInspection
                    console.log(completedList, projectList)
                }
            }).catch(error => {
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
            if (this.projectImg.length === 0 || this.completedImg.length === 0) {
                this.$message('有图片没上传')
            } else {
                let parm = {
                    projectInspection: this.projectImg,
                    completionInspection: this.completedImg,
                    projectOrderCode: this.$route.query.code,
                    // createUserNo: this.getCookie('u_kahao'),
                    // createUserName: this.getCookie('xinming')
                    createUserNo: this.userInfo.as_cardNo,
                    createUserName: this.userInfo.as_fullName
                }
                // 提交图片
                checkUpload(parm).then(results => {
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
}
</script>
