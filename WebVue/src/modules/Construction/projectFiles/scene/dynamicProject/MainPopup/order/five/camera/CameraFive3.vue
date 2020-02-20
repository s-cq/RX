<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'安装'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">步骤</p>
            <div class="analyItemCon">
                <p class="col-md-12" v-for="(item, index) in installList" :key="index"><span class="cLightGray pr8">步骤{{ index+1 }}</span><span>{{ item }}</span></p>
            </div>
        </div>
        <div class="analyItem" v-for="(item, index) in pointsList" :key="index">
            <p class="analyItemTit tx-center">{{item.name === null ? `点位 ${index + 1}` : item.name}}</p>
            <div class="analyItemCon">
                <div class="clearfix mt10 fl">
                    <rx-upload
                        v-if="buttonIsShow"
                        class="fl"
                        :data="{id: item.id,index:index}" :init="{class: 2, mime: 1}"
                        :elStyle="{width:'90px', height: '80px'}"
                        @success="successUpload">
                        <div class="fl uiImgUpload uiImgUpload-gblock mr10">
                            <a href="javascript:">
                                <span type="file" value="" class="file"></span>
                                <em class="bgIcon file-ico"></em>
                            </a>
                        </div>
                    </rx-upload>
                    <rx-viewer :images="imgphoto" class="fl ml10">
                        <div class="clearfix">
                            <div v-for="(itemImg, indexImg) of imgphoto" :key="indexImg" class="fl mr10">
                                <img v-if="itemImg.id == item.id" :src="itemImg.src | smallImg(78, 78)" :alt="indexImg">
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <div class="cameraTitle"><span class="cRed">请对着安装好的摄像头拍照并上传</span></div>
                <div class="line90 fr">
                   <el-button  v-if="buttonIsShow" type="primary" @click="savePhoto(item.id,item.camera)">提交</el-button>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
               <div class="tx-center">
                    <input type="button" class="uiBtn-normal uiBtn-blue" @click="submitButton()" value="确定" v-if="buttonIsShow">
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { getPointByPro, uploadPhoto, getPhoto, PostJump } from '../../../../Resources/Api/index'
export default {
    props: ['type', 'role'],
    data () {
        return {
            installList: [
                '打孔', '装底座', '拧螺丝', '装摄像头', '通电', '拍照'
            ],
            pointsList: [], // 点位信息
            imgphoto: [],
            buttonIsShow: false // 按钮是否出现
        }
    },
    created () {
        this.getPointByPro()
        this.buttonType()
    },
    computed: {
        ...mapGetters(['leftInfo', 'twoToThreeInfo', 'userInfo'])
    },
    methods: {
        ...mapMutations({
            setUpDatePlate: `SET_UPDATE_PLATE`
        }),
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
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        },
        // 按项目查询点位
        getPointByPro () {
            let params = {
                order_no: this.leftInfo.orderno
            }
            getPointByPro(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.pointsList = result.data.Body.orderList
                    this.pointsList.forEach(element => {
                        this.$set(element, 'imgUrl', [])
                    })
                    this.getPhoto()
                }
            }).catch((err) => {
                console.log(`按项目查询点位接口错误,错误内容${err}`)
            })
        },

        getPhoto () {
            let params = {
                orderCode: this.$route.query.code
            }
            getPhoto(params).then((result) => {
                if (result.data.StatusCode === 1) {
                    let photoList = result.data.Body.photoEntityList
                    this.pointsList.forEach(item => {
                        photoList.forEach(el => {
                            if (Number(el.cameraNo) === item.id) {
                                let photo = {id: 0, src: ''}
                                photo.id = el.cameraNo
                                photo.src = el.photo
                                this.imgphoto.push(photo)
                            }
                        })
                    })
                }
            }).catch((err) => {
                console.log(`按项目查询点位接口错误,错误内容${err}`)
            })
        },

        savePhoto (id) {
            let photoList = []
            this.imgphoto.forEach(element => {
                if (element.id === id) {
                    photoList.push(element.src)
                }
            })

            let params = {
                orderCode: this.$route.query.code,
                orderNo: this.leftInfo.orderno,
                createUserNo: this.userInfo.as_cardNo,
                createUserName: this.userInfo.as_fullName,
                photoList: photoList,
                cameraNo: id
            }

            uploadPhoto(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.getPhoto()
                }
            }).catch((err) => {
                console.log(`按项目查询点位接口错误,错误内容${err}`)
            })
        },

        // 上传图片
        successUpload (value) {
            let photo = {id: 0, src: ''}
            photo.id = value.data.id
            photo.src = value.src
            this.imgphoto.push(photo)
        },
        // 提交
        submitButton () {
            let parm = {
                orderCode: this.$route.query.code,
                // createUserNo: this.getCookie('u_kahao'),
                // createUserName: this.getCookie('xinming')
                createUserNo: this.userInfo.as_cardNo,
                createUserName: this.userInfo.as_fullName
            }
            // const dataJson = JSON.stringify(parm)
            // 阶段接口
            PostJump(parm).then(results => {
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
<style>
   .cameraTitle{
        position: absolute;
        right: 5px;
        top: 4px;
   }
   .line90{
       line-height: 95px;
   }
</style>
