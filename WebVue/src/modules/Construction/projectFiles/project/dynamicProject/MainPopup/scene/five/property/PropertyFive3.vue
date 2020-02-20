
<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
      <three-title :title="{name:'资料打印'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem"  v-for="(data, index) in dataList" :key="index" >
            <p class="analyItemTit tx-center">{{data.name | truncate(5) }}</p>
            <div class="analyItemCon">
                <a :href="href" class="cBlue" @click="jump(3)">{{data.name}}</a>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">总共</span>
                    <span>{{dataList.length}}</span>
                </p>
                <input type="button" class="uiBtn-normal uiBtn-blue" value="提交" v-if="buttonIsShow">
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { getFindDetailData, GetContractPageUrl } from '../../../../Resources/Api/scene'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            dataList: [],
            buttonIsShow: false, // 是否显示按钮
            href: '#'
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo', 'twoToThreeInfo'])
    },
    created () {
        this.getFindDetailData()
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
        jump (id, currentId) {
            let parm = {
                dataID: currentId,
                orderNo: this.leftInfo.orderno
            }
            // 获取模板数据
            GetContractPageUrl(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    let url = results.data.Body.url
                    if (url) {
                        let data = ''
                        if (url.photoUrl.length > 0) {
                            data = url.photoUrl
                            const code = this.$route.query.code
                            let routeData = this.$router.resolve({path: '/print', query: {ID: id, code: code, data: data}})
                            window.open(routeData.href, '_blank')
                        } else {
                            data = url.pageUrl
                            if (data === '') {
                                this.$message({
                                    type: 'info',
                                    message: '没有打印数据'
                                })
                            } else {
                                this.href = data
                            }
                        }
                    } else {
                        this.$message({
                            type: 'info',
                            message: '没有打印数据'
                        })
                    }
                } else {
                    this.$message({
                        type: 'info',
                        message: '没有打印数据'
                    })
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 获取数据
        getFindDetailData () {
            let parm = {
                code: this.$route.query.code
            }
            // 接口获取数据
            getFindDetailData(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    this.dataList = results.data.Body.DetailDataList
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    watch: {
        leftInfo () {
            this.getFindDetailData()
        }
    }
}
</script>
<style lang="">
    .dataTitle {
        position: absolute;
        right: 10px;
        bottom: 5px;
    }
    .w100 {
        width:100px;
    }
</style>
