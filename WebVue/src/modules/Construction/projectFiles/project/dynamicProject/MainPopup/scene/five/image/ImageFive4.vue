<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
     <three-title :title="{name:'客户评价'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">评价</p>
            <div class="analyItemCon">
                <div class="pb10">
                    <el-rate v-model="starLength" @change="starChange1()" v-if="evalData === null"></el-rate>
                    <el-rate v-model="evalData.evaluateStar" v-if="evalData !== null" disabled></el-rate>
                </div>
                <div class="clearfix LinkCellBox" v-if="evalData !== null">
                   <span class="LinkCell fl mr10 mb10 LinkCellActive"   v-for="(item, index) of evalData.projectOrderEvaluateLabelEntityList" :key="index">{{item.label}}</span>
                </div>
                <div class="clearfix LinkCellBox" v-if="evalData === null">
                   <span :class="{ 'LinkCell': true, 'fl': true, 'mr10': true, 'mb10': true, 'LinkCellActive' :  item.flag }" v-for="(item, index) of starList" :key="index" @click="startLabelChange(item)">{{item.content}}</span>
                </div>

                <div class="clearfix">
                    <textarea class="col-md-10" rows="3" v-model="evalData.evaluateContent"   readonly v-if="evalData !== null"></textarea>
                    <textarea class="col-md-10" rows="3" v-model="evaValue" placeholder="您对这次的服务还满意吗？您的评价会帮助我们更好的提升哦~" v-if="evalData === null"></textarea>
                </div>
                <div class="clearfix mt10 fl" v-if="evalData === null">
                    <rx-upload
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
                    <rx-viewer :images="evalImgArray" class="fl ml10">
                        <div class="clearfix">
                            <div v-for="(item, index) of evalImgArray" :key="index" class="fl mr10">
                                <img :src="item | smallImg(80, 80)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <div class="clearfix mt10 fl" v-if="evalData !== null">
                    <rx-viewer :images="evalData.projectOrderPhotoEntities" class="fl ml10">
                        <div class="clearfix">
                            <div v-for="(item, index) of evalData.projectOrderPhotoEntities" :key="index" class="fl mr10">
                                <img :src="item.orderPhoto | smallImg(80, 80)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
               <div class="tx-center">
                    <input type="button" class="uiBtn-normal uiBtn-blue" value="确定" @click="submitDate()" v-if="buttonIsShow">
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { getProjectOrderEvaluateMsg, saveProjectOrderEvaluate } from '../../../../Resources/Api/scene'
export default {
    props: ['type', 'role'],
    data () {
        return {
            starLength: null, // 几个星
            starList: [], // 星星标签
            evalImg: '',
            evalImgArray: [], // 图片
            evalLabelArray: [],
            evalLabel: '',
            evaValue: '',
            evalData: null, // 评价数据
            buttonIsShow: false // 按钮显示
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'twoToThreeInfo', 'userInfo'])
    },
    created () {
        this.getProjectOrderEvaluateMsg()
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
        // 获取cookie
        getCookie (name) {
            let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            if ((arr = document.cookie.match(reg))) { return unescape(arr[2]) } else { return null }
        },
        // 改变星星
        starChange1 () {
            this.starSwitch()
        },
        // 标签点击
        startLabelChange (item) {
            item.flag = !item.flag
            if (item.flag) {
                this.evalLabelArray.push(item.content)
            } else {
                const currentIndex = this.evalLabelArray.findIndex((item) => { return item === item.content })
                this.evalLabelArray.splice(currentIndex, 1)
            }
            this.evalLabel = this.evalLabelArray.join(',')
        },
        // 判断标签
        starSwitch () {
            switch (this.starLength) {
            case 1:
                this.starList = [
                    {
                        content: '没有防护',
                        flag: false
                    },
                    {
                        content: '现场混乱',
                        flag: false
                    },
                    {
                        content: '无安全意识',
                        flag: false
                    },
                    {
                        content: '暴力施工',
                        flag: false
                    }
                ]
                break
            case 2:
                this.starList = [
                    {
                        content: '没有防护',
                        flag: false
                    },
                    {
                        content: '管理混乱',
                        flag: false
                    },
                    {
                        content: '无完全意识',
                        flag: false
                    },
                    {
                        content: '暴力施工',
                        flag: false
                    }
                ]
                break
            case 3:
                this.starList = [
                    {
                        content: '防护专业',
                        flag: false
                    },
                    {
                        content: '管理规范',
                        flag: false
                    },
                    {
                        content: '安全意识强',
                        flag: false
                    },
                    {
                        content: '施工规范',
                        flag: false
                    }
                ]
                break
            case 4:
                this.starList = [
                    {
                        content: '防护专业',
                        flag: false
                    },
                    {
                        content: '管理规范',
                        flag: false
                    },
                    {
                        content: '安全意识强',
                        flag: false
                    },
                    {
                        content: '施工规范',
                        flag: false
                    }
                ]
                break
            case 5:
                this.starList = [
                    {
                        content: '做事专业',
                        flag: false
                    },
                    {
                        content: '服务高效',
                        flag: false
                    },
                    {
                        content: '良心出品',
                        flag: false
                    },
                    {
                        content: '值得推荐',
                        flag: false
                    }
                ]
                break
            }
        },
        successUpload (value) {
            this.evalImgArray.push(value.src)
            this.evalImg = this.evalImgArray.join(',')
        },
        // 获取评价数据
        getProjectOrderEvaluateMsg () {
            let parm = {
                orderCode: this.twoToThreeInfo.code
            }
            getProjectOrderEvaluateMsg(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    this.evalData = results.data.Body
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 提交数据
        submitDate () {
            let parm = {
                label: this.evalLabel,
                img: this.evalImg,
                content: this.evaValue,
                star: this.starLength,
                orderCode: this.twoToThreeInfo.code,
                // createUserNo: this.getCookie('u_kahao'),
                // createUserName: this.getCookie('xinming')
                createUserNo: this.userInfo.as_cardNo,
                createUserName: this.userInfo.as_fullName
            }
            // 接口订单数据
            saveProjectOrderEvaluate(parm).then(results => {
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
