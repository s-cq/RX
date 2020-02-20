<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'订单执行'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <ul class="clearfix uiTab5">
        <li :class="['fl', currentIndex === 86 ? 'uiTab5-active' : '']" @click="tabClick(86)">现场保护<i class="uiTab-i"></i></li>
     </ul>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137" >
        <div class="analyItem" v-for="(item, index) in currentList" :key="index">
            <p class="analyItemTit tx-center">{{item.standard_name}}</p>
            <div class="analyItemCon">
                <div class="clearfix">
                    <rx-viewer style="position:relative" class="fl">
                        <div class="clearfix tx-center">
                            <div class="mr10">
                                <img :src="item.picturePath | smallImg(80, 80)">
                                <span class="standardStyle">标</span>
                            </div>
                        </div>
                    </rx-viewer>
                    <div class="fl">
                        <rx-viewer :images="item.photoList" >
                            <div class="clearfix tx-center">
                                <div class="mr10 fl" v-for="(imgitem, imgindex) of item.photoList" :key="imgindex" style="position:relative">
                                    <img :src="imgitem.orderPhoto | smallImg(80, 80)">
                                    <span class="sceneStyle">现</span>
                                </div>
                            </div>
                        </rx-viewer>
                    </div>
                    <rx-upload
                        v-if="buttonIsShow"
                        class="fl"
                        :data="{id: item.id,index: index}" :init="{class: 2, mime: 1}"
                        :elStyle="{width:'90px', height: '80px'}"
                        @success="successUpload">
                        <div class="fl uiImgUpload uiImgUpload-gblock mr10">
                            <a href="javascript:">
                                <span type="file" value="" class="file"></span>
                                <em class="bgIcon file-ico"></em>
                            </a>
                        </div>
                    </rx-upload>
                    <span :class="['circlemark',item.photoList.length> 0 ? 'circlemark-lightGreen' : 'circlemark-lightRed']">{{item.photoList.length> 0 ? '完' : '未'}}</span>
                </div>
                 <div>{{item.content}}</div>
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
import { getFindSafetyOrderStandard, uploadSafetyOrderStandard } from '../../../../Resources/Api/scene'
export default {
    props: ['Projectcode', 'type', 'role'],
    data () {
        return {
            sceneImgList: [], // 图片数据
            currentIndex: 86, // 当前index
            currentList: [], // 当前数组
            protectData: [], // 现场保护
            dataList: [], // 总的数组
            buttonIsShow: true
        }
    },
    created () {
        this.getFindSafetyOrderStandard()
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
            let currentData = this.dataList.filter((item) => { return item.id === value.data.id })
            let pushArray = {}
            pushArray.orderPhoto = value.src
            currentData[0].photoList.push(pushArray)
        },
        // tab 切换
        tabClick (index) {
            this.currentIndex = index
            switch (index) {
            case 86:
                this.currentList = this.protectData
                break
            default:
                break
            }
        },
        getFindSafetyOrderStandard () {
            let parm = {
                projectOrderCode: this.Projectcode
            }
            // 接口订单数据
            getFindSafetyOrderStandard(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    this.dataList = results.data.Body.safeList
                    // 现场保护
                    this.protectData = this.dataList.filter(function (item) {
                        return item.worker_type_Id === 86
                    })
                    this.currentList = this.protectData
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
            this.sceneImgList = []
            // 提交的数据
            this.dataList.forEach(element => {
                if (element.photoList.length > 0) {
                    let currentImgInfo = {}
                    let photoUrl = []
                    element.photoList.forEach(item => {
                        photoUrl.push(item.orderPhoto)
                    })
                    currentImgInfo.id = String(element.id)
                    currentImgInfo.photoUrl = photoUrl
                    this.sceneImgList.push(currentImgInfo)
                }
            })
            if (this.sceneImgList.length !== this.dataList.length) {
                this.$message('有现场图没上传')
            } else {
                let parm = {
                    safetyList: [ ],
                    orderNo: this.leftInfo.orderno,
                    photoList: JSON.stringify(this.sceneImgList),
                    projectOrderCode: this.twoToThreeInfo.code,
                    // createUserNo: this.getCookie('u_kahao'),
                    // createUserName: this.getCookie('xinming')
                    createUserNo: this.userInfo.as_cardNo,
                    createUserName: this.userInfo.as_fullName
                }
                // 接口订单数据
                uploadSafetyOrderStandard(parm).then(results => {
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
