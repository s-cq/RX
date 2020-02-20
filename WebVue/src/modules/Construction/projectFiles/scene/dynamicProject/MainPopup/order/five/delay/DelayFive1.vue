<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'延期开启'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "18">
        <div class="analyItem">
            <p class="analyItemTit tx-center">延期开启</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">开启类型</span>
                    <span> {{delayData !== null && delayData.type === 2 ? '客户开启' : '自动开启'}}</span>
                </p>
                <!-- <p class="col-md-4">
                    <span class="pr8">开启</span>
                    <el-switch
                        v-model="switchValue"
                        active-text="开"
                        inactive-text="关"
                        active-color="#33adff"
                        inactive-color="#ddd">
                    </el-switch>
                </p> -->
            </div>
        </div>
    </div>
    <!-- <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <div class="tx-center">
                    <input type="button" class="uiBtn-normal uiBtn-blue" value="确定" @click="submitButton()" v-if="buttonIsShow && switchValue">
                </div>
            </div>
        </div>
    </div> -->
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { getDelayOrderStandard } from '../../../../Resources/Api/index'
export default {
    props: ['type', 'role'],
    data () {
        return {
            // switchValue: false, // 开关初始化状态
            buttonIsShow: false, // 按钮是否显示
            delayData: null// 延期数据
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'updatePlate', 'twoToThreeInfo'])
    },
    created () {
        this.getDelayOrderStandard()
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
        // 获取数据
        getDelayOrderStandard () {
            let parm = {
                projectOrderCode: this.$route.query.code
            }
            // 根据条件阶段查询订单
            getDelayOrderStandard(parm).then((result) => {
                if (result.data.StatusCode === 1) {
                    this.delayData = result.data.Body.delayOrderStandard
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
        }
        // 提交数据
        // submitButton () {
        //     let parm = {
        //         orderNo: this.leftInfo.orderno,
        //         createUserNo: this.getCookie('u_kahao'),
        //         createUserName: this.getCookie('xinming')
        //     }
        //     // const dataJson = JSON.stringify(parm)
        //     // 接口订单数据
        //     saveDelayOrderStandard(JSON.stringify(parm)).then(results => {
        //         if (results.data.StatusCode === 1) {
        //             this.setUpDatePlate()
        //             this.$parent.$parent.clickFiveShow()
        //             this.buttonIsShow = false
        //         }
        //     }).catch(error => {
        //         console.log(error)
        //     })
        // }
    }
}
</script>
