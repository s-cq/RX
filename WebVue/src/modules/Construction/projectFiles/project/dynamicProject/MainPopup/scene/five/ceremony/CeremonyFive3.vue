<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'举行'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">图片上传</p>

            <div class="analyItemCon">
                <div class="clearfix mt10 fl">
                    <rx-upload
                        v-if="buttonIsShow"
                        class="fl"
                        :data="{id: 11}" :init="{class: 1, mime: 1}"
                        :elStyle="{width:'90px', height: '80px'}"
                        @success="successUpload">
                        <div class="fl uiImgUpload uiImgUpload-gblock mr10">
                            <a href="javascript:">
                                <span type="file" value="" class="file"></span>
                                <em class="bgIcon file-ico"></em>
                            </a>
                        </div>
                    </rx-upload>
                    <rx-viewer :images="data" class="fl ml10">
                        <div class="clearfix">
                            <div v-for="(item, index) of data" :key="index" class="fl mr10">
                                <img :src="item | smallImg(78, 78)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">文字描述</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <textarea style="width:80%" v-model="description" :readonly="!this.buttonIsShow"></textarea>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
               <div class="tx-center">
                    <input type="button" class="uiBtn-normal uiBtn-blue" @click="submit()" value="确定" v-if="buttonIsShow">
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { getStartingItem, savePhoto } from '../../../../Resources/Api/scene'
export default {
    props: ['type', 'role'],
    data () {
        return {
            data: [],
            value1: null,
            starList1: [],
            description: '', // 描述
            photoListArray: [], // 现场图片
            buttonIsShow: false
        }
    },
    created () {
        this.load()
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
                this.buttonIsShow = false
            }
        },
        getCookie (name) {
            let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            if ((arr = document.cookie.match(reg))) { return unescape(arr[2]) } else { return null }
        },
        starChange1 () {
            this.starSwitch1()
        },
        successUpload (value) {
            this.data.push(value.src)
        },

        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        },
        // 自动加载
        load () {
            // 用_this 代替this
            let _this = this
            _this.loading = true
            // 接收参数
            let parm = {
                orderCode: this.$route.query.code
            }
            // 根据条件阶段查询订单
            getStartingItem(parm).then((result) => {
                if (result.data.StatusCode === 1) {
                    _this.data = result.data.Body.photoList
                    _this.description = result.data.Body.description
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 提交
        submit () {
            // 用_this 代替this
            let _this = this
            _this.loading = true
            // 接收参数
            let parm = {
                userNo: this.userInfo.as_cardNo,
                userName: this.userInfo.as_fullName,
                // userNo: this.getCookie('u_kahao'),
                // userName: this.getCookie('xinming'),
                orderCode: this.$route.query.code,
                photoList: this.data,
                description: this.description
            }
            // 根据条件阶段查询订单
            savePhoto(parm).then((result) => {
                if (result.data.StatusCode === 1) {
                    _this.description = ''
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
</script>
<style>
    .LinkCell   {
        background: #f1f1f1;
        padding:2px 5px;
        border: 1px solid #f1f1f1;
        border-radius: 15px;
        cursor: pointer;
    }
    .LinkCellActive {
        background: #ffeed6;
        color:  #ff9600;
        border-color: #ff9600;
    }
</style>
