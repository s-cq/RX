<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:name}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137" >
        <div class="analyItem" v-for="(item, index) in currentList" :key="index">
            <p class="analyItemTit tx-center">{{item.senceName | truncate(5)}}</p>
            <div class="analyItemCon">
                <div class="clearfix">
                    <rx-viewer style="position:relative" class="fl">
                        <div class="clearfix tx-center">
                            <div class="mr10">
                                <img :src="item.senceImg | smallImg(80, 80)">
                                <span class="standardStyle">标</span>
                            </div>
                        </div>
                    </rx-viewer>
                    <div class="fl" v-if="item.orderPhoto !== ''">
                        <rx-viewer :images="item.orderPhoto" style="position:relative" :option={}>
                            <div class="clearfix tx-center">
                                <div class="mr10">
                                    <img :src="item.orderPhoto | smallImg(80, 80)">
                                    <span class="standardStyle">现</span>
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
                    <span :class="['circlemark', item.orderPhoto == '' || item.orderPhoto === null ? 'circlemark-lightRed' : 'circlemark-lightGreen']">{{item.orderPhoto == '' || item.orderPhoto === null  ? '未' : '完'}}</span>
                </div>
                 <div>{{item.senceContent}}</div>
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
import { saveSencePhoto, updateSenceProjectOrderStage } from '../../../../Resources/Api/index'
export default {
    props: ['titleName', 'url', 'type', 'role'],
    data () {
        return {
            name: '',
            currentList: [],
            submitData: [],
            isAllSelect: false,
            selectNumber: 0,
            buttonIsShow: false // 按钮是否显示
        }
    },
    computed: {
        ...mapGetters(['updatePlate', 'twoToThreeInfo', 'userInfo'])
    },
    created () {
        this.name = this.titleName
        this.getData()
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
        // 上传图片
        successUpload (value) {
            const currentData = this.currentList.findIndex((item) => { return item.id === value.data.id })
            this.$set(this.currentList[currentData], 'orderPhoto', value.src)
            // 提交图片数据
            let parm = {
                orderCode: this.$route.query.code,
                senceId: value.data.id,
                sencePhoto: value.src,
                // createUserNo: this.getCookie('u_kahao'),
                // createUserName: this.getCookie('xinming')
                createUserNo: this.userInfo.as_cardNo,
                createUserName: this.userInfo.as_fullName
            }
            // const dataJson = JSON.stringify(parm)
            // 接口图片数据
            saveSencePhoto(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    console.log('图片上传成功')
                }
            }).catch(error => {
                console.log(error)
            })
        },
        ...mapMutations({
            setUpDatePlate: `SET_UPDATE_PLATE`
        }),
        // 获取数据
        getData () {
            let url = this._props.url
            this.$axios.get(url).then((result) => {
                if (result.data.StatusCode === 1) {
                    this.currentList = result.data.Body
                }
            })
        },
        // 获取cookie
        getCookie (name) {
            let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            if ((arr = document.cookie.match(reg))) { return unescape(arr[2]) } else { return null }
        },
        // 提交数据
        submitButton () {
            this.currentList.forEach(element => {
                if (element.orderPhoto === null || element.orderPhoto === undefined) {
                    this.message('有图片没上传完')
                    return false
                }
            })
            // const dataJson = JSON.stringify(parm)
            // 接口数据
            let parm = {
                orderCode: this.$route.query.code,
                // createUserNo: this.getCookie('u_kahao'),
                // createUserName: this.getCookie('xinming')
                createUserNo: this.userInfo.as_cardNo,
                createUserName: this.userInfo.as_fullName
            }
            updateSenceProjectOrderStage(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    this.setUpDatePlate()
                    this.$parent.$parent.clickFiveShow()
                    this.buttonIsShow = false
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
