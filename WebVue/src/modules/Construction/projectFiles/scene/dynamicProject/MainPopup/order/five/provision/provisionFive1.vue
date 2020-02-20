<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:name}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem"  v-for="(item, index) of protectList" :key="index" >
            <p class="analyItemTit tx-center">{{item.Name | truncate(5)}}</p>
            <div class="analyItemCon">
                <div class="fixedBox">
                    <rx-viewer :images="item.PicturePath" class="ml10">
                        <div class="clearfix">
                            <div class="fl mr10">
                                <img :src="item.PicturePath | smallImg(88, 88)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                    <div>
                        {{item.Content}}
                    </div>
                    <el-checkbox v-model="checkID[item.Id]" v-if="item.selectState === 1 && orderTypeId === 9" disabled></el-checkbox>
                    <el-checkbox v-model="checkID[item.Id]" @change="selctChange(item.Id)"  v-if="item.selectState === 0 && orderTypeId === 9"></el-checkbox>
                    <el-checkbox v-model="checkID[item.Id]" @change="selctChange(item.Id)"  v-if="orderTypeId !== 9"></el-checkbox>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">已选择</span>
                    <span>{{selectNumber}}</span>
                </p>
                <p class="col-md-4">
                    <el-checkbox v-model="isAllSelect" @change="selectAllChange()">全选</el-checkbox>
                </p>
                <input type="button" class="uiBtn-normal uiBtn-blue" value="确定" @click="submitButton()" v-if="buttonIsShow">
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { saveSenceData } from '../../../../Resources/Api/index'
export default {
    props: ['titleName', 'url', 'type', 'role'],
    data () {
        return {
            name: '',
            checkID: [],
            protectList: [],
            submitData: [],
            isAllSelect: false,
            selectNumber: 0,
            orderTypeId: '', // 订单id
            buttonIsShow: false // 按钮是否显示
        }
    },
    computed: {
        ...mapGetters(['updatePlate', 'twoToThreeInfo', 'userInfo'])
    },
    created () {
        this.name = this.titleName
        this.orderTypeId = this.$route.query.project.orderTypeId
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
                const userLevel = this.userInfo.as_level
                if (userLevel.length > 0) {
                    userLevel.forEach(ele => {
                        if (Number(ele) === 47) {
                            if (this.twoToThreeInfo.status === this.type) {
                                this.buttonIsShow = true
                            } else {
                                this.buttonIsShow = false
                            }
                        }
                    })
                } else {
                    this.buttonIsShow = false
                }
            }
        },
        // 全选
        selectAllChange () {
            if (this.isAllSelect) {
                this.protectList.forEach(element => {
                    this.checkID[element.Id] = true
                })
                this.selectNumber = this.protectList.length
            } else {
                this.protectList.forEach(element => {
                    if (element.selectState === 0 && this.orderTypeId !== 9) {
                        this.checkID[element.Id] = false
                    } else {
                        this.checkID[element.Id] = false
                    }
                })
                const selectArray = this.checkID.filter((item) => { return item === true })
                this.selectNumber = selectArray.length
            }
        },
        // 选中
        selctChange (currentID) {
            const selectArray = this.checkID.filter((item) => { return item === true })
            this.selectNumber = selectArray.length
            if (this.selectNumber === this.protectList.length) {
                this.isAllSelect = true
            } else {
                this.isAllSelect = false
            }
        },
        ...mapMutations({
            setUpDatePlate: `SET_UPDATE_PLATE`
        }),
        // 获取数据
        getData () {
            let url = this._props.url
            this.$axios.get(url).then((result) => {
                if (result.data.StatusCode === 1) {
                    this.protectList = result.data.Body
                    this.protectList.forEach(element => {
                        if (element.selectState === 1) {
                            this.checkID[element.Id] = true
                            this.selectNumber += 1
                        } else {
                            this.checkID[element.Id] = false
                        }
                    })
                    if (this.selectNumber === this.protectList.length) {
                        this.isAllSelect = true
                    }
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
            this.protectList.forEach(element => {
                if (this.checkID[element.Id]) {
                    let currentObject = {}
                    currentObject.senceId = element.Id
                    currentObject.senceImg = element.PicturePath
                    currentObject.senceContent = element.Content
                    currentObject.senceName = element.Name
                    this.submitData.push(currentObject)
                }
            })
            if (this.submitData.length === 0) {
                this.$message('至少选择一项')
            } else {
                let parm = {
                    senceData: JSON.stringify(this.submitData),
                    orderCode: this.$route.query.code,
                    // createUserNo: this.getCookie('u_kahao'),
                    // createUserName: this.getCookie('xinming')
                    createUserNo: this.userInfo.as_cardNo,
                    createUserName: this.userInfo.as_fullName
                }
                // const dataJson = JSON.stringify(parm)
                // 接口订单数据
                saveSenceData(parm).then(results => {
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
}
</script>
<style lang="">
    .fixedBox {
        display: flex;
        align-items: center;
    }
</style>
