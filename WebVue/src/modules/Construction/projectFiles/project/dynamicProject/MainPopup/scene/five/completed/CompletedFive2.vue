<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'打印'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137" >
        <div class="analyItem">
            <p class="analyItemTit tx-center">项目总检</p>
            <div class="analyItemCon">
                <div class="analyItemflex">
                    <div>项目总检验收单</div>
                      <a href="#" class="cBlue" @click="jump(1)">打印</a>
                </div>
            </div>
        </div>
         <div class="analyItem">
            <p class="analyItemTit tx-center">竣工验收</p>
            <div class="analyItemCon">
                <div class="analyItemflex">
                <div>竣工验收单</div>
                    <a href="#" class="cBlue" @click="jump(2)">打印</a>
                </div>
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
import { PostJump } from '../../../../Resources/Api/scene'
export default {
    props: ['type', 'role'],
    data () {
        return {
            buttonIsShow: false
        }
    },
    created () {
        this.buttonType()
    },
    computed: {
        ...mapGetters(['leftInfo', 'twoToThreeInfo', 'updatePlate', 'userInfo'])
    },
    methods: {
        ...mapMutations({
            setUpDatePlate: `SET_UPDATE_PLATE`
        }),
        jump (id) {
            const code = this.$route.query.code
            let routeData = this.$router.resolve({path: '/print', query: {ID: id, code: code}})
            window.open(routeData.href, '_blank')
        },
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
        // 获取cookie
        getCookie (name) {
            let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            if ((arr = document.cookie.match(reg))) { return unescape(arr[2]) } else { return null }
        },
        // 跳转阶段
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
