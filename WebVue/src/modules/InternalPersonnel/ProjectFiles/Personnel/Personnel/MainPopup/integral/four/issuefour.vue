<template>
    <div class="layerRtb layerRtb-threecolumn layerRtb-right">
        <three-title :title="{name:'培训'}" :close="false">
            <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFour()"></span>
        </three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem">
                <p class="analyItemTit tx-center">培训</p>
                <div class="analyItemCon">
                    <p class="col-md-12">
                        <span class="cLightGray pr8">开班</span>
                        <span>{{resonValue}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">时间</span>
                        <span>{{$utils.format('yyyy-MM-dd',new Date())}}</span>
                    </p>
                    <p class="col-md-5">
                        <span class="pr8">截止时间</span>
                        <el-date-picker :picker-options="pickerBeginDateBefore" v-model="endTime" type="date" placeholder="选择日期">
                        </el-date-picker>
                    </p>
                    <p class="fr train-div">
                        <input type="button" value="推送" class="uiBtn-blue uiBtn-small" @click="submitDate()">
                    </p>
                </div>
            </div>
            <!-- <div class="analyItem">
            <p class="analyItemTit tx-center">退回</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <textarea class="col-md-10 pl5" placeholder="请输入备注"></textarea>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">补分</span>
                    <input class="width100" type="text" placeholder="积分">
                </p>
                <p class="fr train-div">
                    <input type="button" value="退回" class="uiBtn-red uiBtn-small">
                </p>
            </div>
        </div> -->
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-3">
                        <span class="cLightGray">积分</span>
                        <span class="cGreen fz14 bold">{{$route.query.userIntegral}}分</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { pushTrainUser, pushUserHandToFinance } from '../../../Resources/Api'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            pickerBeginDateBefore: {
                disabledDate: (time) => {
                    return time.getTime() < Date.now() - 8.64e7// 如果没有后面的-8.64e7就是不可以选择今天的
                }
            },
            resonValue: '积分异常 参与培训',
            endTime: '' // 截至日期
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {

    },
    methods: {
    // 培训接口
        pushTrainUser () {
            let parms = {
                Region: this.leftInfo.regionId,
                CardNo: this.leftInfo.cardNo,
                TrainType: 3
            }
            pushTrainUser(parms).then(results => {
                if (results.data.StatusCode === 0) {
                    this.$message('提交成功')
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 提交接口
        pushUserHandToFinance (parms) {
            pushUserHandToFinance(parms).then(results => {
                if (results.data.StatusCode === 0) {
                    this.$message('处理推送成功')
                    this.$parent.$parent.clickFour()
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 推送提交
        submitDate () {
            if (this.endTime === '') {
                this.$message('请选择截止时间')
                return false
            }
            let parms = {
                cardId: 177, // 写死177
                createUserMan: this.userInfo.as_fullName, // 创建者名称
                createdBy: this.userInfo.as_cardNo, // 创建者卡号
                delFlag: 0, // 写死0
                handType: 1, // 写死1
                hrType: 1, // 1代表内部人事
                modifyBy: this.userInfo.as_cardNo, // 创建者卡号
                outline: this.resonValue, // 内容描述
                remarks: this.userInfo.as_cardNo + this.userInfo.as_fullName + this.resonValue + this.leftInfo.cardNo, // 描述
                taskStatus: 1, // 写死1
                title: '', // 选中的标签
                user_card_no: this.leftInfo.cardNo, // 用户卡号
                operatorId: this.userInfo.as_cardNo, // 操作者卡号
                operatorName: this.userInfo.as_fullName, // 创建者名称
                personId: this.leftInfo.cardNo // 用户卡号
            }
            parms.title = '培训'
            parms.handType = 7
            parms.taskStatus = 2
            parms.taskDeadline = this.endTime
            parms.outline = `${this.resonValue} 【截止时间】 ${this.$utils.format('yyyy-MM-dd', this.endTime)}`
            this.pushTrainUser()
            this.pushUserHandToFinance(parms)
        }
    }
}
</script>
