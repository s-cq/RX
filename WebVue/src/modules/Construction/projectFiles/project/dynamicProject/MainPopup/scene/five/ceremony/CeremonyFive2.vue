<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'物品领取'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem"  v-for="(item, index) of protectList" :key="index">
            <p class="analyItemTit tx-center">{{item.name | truncate(5)}}</p>
            <div class="analyItemCon">
                <div class="fixedBox  flex">
                    <rx-viewer :images="item.standardPicture" class="ml10">
                        <div class="clearfix">
                            <div class="fl mr10" style=" margin-right: 30px;">
                                <img :src="item.standardPicture | smallImg(88, 88)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                    <div class="pomernxcfg">
                        <span>{{item.standardDescription}}</span>
                    </div>
                    <el-checkbox  v-if=" item.isSeceive === 1 " checked v-model="checkID[item.id]" @change="selctChange(item.id,index)"></el-checkbox>
                    <el-checkbox  v-else v-model="checkID[item.id]" @change="selctChange()"></el-checkbox>
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
                <input type="button" class="uiBtn-normal uiBtn-blue" @click="submit()" value="确定" v-if="buttonIsShow">
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { getStartingItem, updateGroundbreakingCeremony } from '../../../../Resources/Api/scene'
export default {
    props: ['type', 'role'],
    data () {
        return {
            value: 0,
            protectList: [],
            checkID: [],
            submitDataArray: [],
            submitData: '',
            buttonIsShow: false, // 按钮是否显示
            isAllSelect: false,
            selectNumber: 0 // 已选择
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
        // 全选
        selectAllChange () {
            if (this.isAllSelect) {
                this.protectList.forEach(element => {
                    this.checkID[element.id] = true
                })
                this.selectNumber = this.protectList.length
            } else {
                this.protectList.forEach(element => {
                    this.checkID[element.id] = false
                })
                this.selectNumber = 0
            }
        },
        // 获取cookie
        getCookie (name) {
            let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            if ((arr = document.cookie.match(reg))) { return unescape(arr[2]) } else { return null }
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
                    const cereData = result.data.Body.startingItemList
                    _this.protectList = cereData.filter((item) => { return item.isPlan === 1 })
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 提交
        submit () {
            this.submitDataArray = []
            // 用_this 代替this
            let _this = this
            _this.loading = true
            this.protectList.forEach(element => {
                if (this.checkID[element.id]) {
                    this.submitDataArray.push(element.id)
                }
            })
            this.submitData = this.submitDataArray.join(',')
            // 接收参数
            let parm = {
                orderCode: this.$route.query.code,
                orderNo: this.leftInfo.orderno,
                ids: this.submitData,
                type: this.type,
                // createUserNo: this.getCookie('u_kahao'),
                // createUserName: this.getCookie('xinming')
                createUserNo: this.userInfo.as_cardNo,
                createUserName: this.userInfo.as_fullName
            }
            // 根据条件阶段查询订单
            updateGroundbreakingCeremony(parm).then((result) => {
                if (result.data.StatusCode === 1) {
                    this.setUpDatePlate()
                    this.$parent.$parent.clickFiveShow()
                    this.buttonIsShow = false
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    watch: {
        leftInfo () {
            this.load()
        }
    }
}
</script>

<style>
    .fixedBox.flex {
        display: flex;
        align-content: center;
    }
    .pomernxcfg{
        width: 74%;
        height: 100% ;
    }
</style>
