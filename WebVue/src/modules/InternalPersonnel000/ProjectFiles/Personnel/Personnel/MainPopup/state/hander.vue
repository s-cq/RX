<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'处理详情'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="150">
            <div class="analyItem">
                <p class="analyItemTit tx-center">预留</p>
                <div class="analyItemCon"></div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">预留</p>
                <div class="analyItemCon"></div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">预留</p>
                <div class="analyItemCon"></div>
            </div>
        </div>
        <div class="layerRtb-footer" style="height:190px;">
            <div class="clearfix">
                <div class="col-md-7 handle-left pb10" style="min-height: 172px;">
                    <div class="clearfix">
                        <h2 class="uiTitle2 mt3">
                            <i class="uiTitle-icon"></i>
                            处理
                        </h2>
                        <ul class="handle-ul mt5">
                            <li v-for="(item,index) in handTitle" :key="index" :class="firstCurrentIndex === index ? 'current': ''" @click="handTitleClick(index)">{{item}}</li>
                        </ul>
                    </div>
                    <div class="clearfix" v-if="handleTitleTwoShow">
                        <ul class="handle-ul">
                            <li v-for="(item,index) in handleTitleTwo" :key="index" :class="twoCurrentIndex === index ? 'current': ''" @click="handleTitleTwoClick(index)">{{item}}</li>
                        </ul>
                    </div>
                    <div class="pr10 mb5">
                        <span class="pr8">截止时间</span>
                        <el-date-picker
                            :disabled="firstCurrentIndex !== 3 ? true :false"
                            :picker-options="pickerBeginDateBefore"
                            v-model="endTime"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </div>
                    <div class="pr10">
                        <span class="fl" style="padding-right: 12px;">内容描述</span>
                        <textarea class="evaluate-textarea col-md-9" placeholder="请输入描述" v-model="handleValue"></textarea>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="tx-center pl5">
                        <div class="dis-il-block">
                            <div class="clearfix pb10 pt10">
                                <span class="fl lh28 ">积分：</span>
                                <strong class="pr5 fl lh28 cRed fz16">-</strong>
                                <div class="dis-il-block fl">
                                    <div class="width65 uiText-selfAuto">
                                        <input type="Number" class="form-control noradius cRed" v-model="handleDelInt" :disabled="firstCurrentIndex !== 1 ? true :false">
                                        <div class="uiText-commonIcon uiText-commonIcon-right">分</div>
                                    </div>
                                </div>
                                <strong class="pr5 fl lh28 cGreen fz16 ml10">+</strong>
                                <div class="dis-il-block fl">
                                    <div class="width65 uiText-selfAuto">
                                        <input  type="Number" class="form-control noradius" v-model="handleAddInt" :disabled="firstCurrentIndex !== 1 ? true :false">
                                        <div class="uiText-commonIcon uiText-commonIcon-right" >分</div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix pb10">
                                <span class="fl lh28">奖罚：</span>
                                <strong class="pr5 fl lh28 cRed fz16">-</strong>
                                <div class="dis-il-block fl">
                                    <div class="width65 uiText-selfAuto">
                                        <input  type="Number" class="form-control" v-model="handleDelMon" :disabled="firstCurrentIndex !== 1 ? true :false">
                                    </div>
                                </div>
                                <strong class="pr5 fl lh28 cGreen fz16 ml10">+</strong>
                                <div class="dis-il-block fl">
                                    <div class="width65 uiText-selfAuto">
                                        <input type="Number" class="form-control" v-model="handleAddMon" :disabled="firstCurrentIndex !== 1 ? true :false">
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix pb10">
                                <span class="fl lh28">方式：</span>
                                <strong class="pr5 fl lh28 cRed fz16">&nbsp;</strong>
                                <div class="pt5">
                                    <el-radio v-model="handleRadio" label="2">工资</el-radio>
                                    <el-radio v-model="handleRadio" label="1">立即执行</el-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tx-center pb10">
                        <input type="button" class="uiBtn-normal uiBtn-blue" value="提交" @click="submitDate()">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { handleSaveUserHandInfo, AddChat, saveUserHandInfoMySql, pushUserHandToFinance, LaunchEventAndOver, pushTrainUser } from '../../Resources/Api'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            pickerBeginDateBefore: {
                disabledDate: (time) => {
                    return time.getTime() < Date.now() - 8.64e7// 如果没有后面的-8.64e7就是不可以选择今天的
                }
            },
            handleTitleTwoShow: false, // 二级是否显示
            handTitle: ['正常', '奖罚', '异常', '培训'], // 一级title数组
            handleTitleTwo: ['文修', '武练', '文修武练'], // 二级title数组
            firstCurrentIndex: '', // 一级Index
            twoCurrentIndex: '', // 二级Index
            handleValue: '', // 内容描述
            handleDelInt: '', // 积分-
            handleAddInt: '', // 积分+
            handleDelMon: '', // 奖罚-
            handleAddMon: '', // 奖罚+
            handleRadio: '2', // 提交选择
            endTime: '' // 截止时间
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {

    },
    methods: {
        // 一级title 点击
        handTitleClick (index) {
            this.firstCurrentIndex = index
            if (Number(index) === 3) {
                this.handleTitleTwoShow = true
            } else {
                this.handleTitleTwoShow = false
            }
            this.handleValue = '' // 内容描述
            this.handleDelInt = '' // 积分-
            this.handleAddInt = '' // 积分+
            this.handleDelMon = '' // 奖罚-
            this.handleAddMon = '' // 奖罚+
            this.handleRadio = '2' // 提交选择
            this.endTime = '' // 截止时间
        },
        // 二级title 点击
        handleTitleTwoClick (index) {
            this.twoCurrentIndex = index
        },
        // 正常提交接口
        handleSaveUserHandInfo (parms, parms1) {
            handleSaveUserHandInfo(parms).then(results => {
                if (results.data.StatusCode === 0) {
                    if (this.twoCurrentIndex !== 2) {
                        this.AddChat()
                    }
                    this.saveUserHandInfoMySql(parms1)
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 正常提交接口
        AddChat () {
            let type = 0
            if (this.firstCurrentIndex === 1) {
                type = 3
            } else if (this.firstCurrentIndex === 2) {
                type = 6
            } else if (this.firstCurrentIndex === 3) {
                type = 8
            }
            let parms = {
                departId: 4,
                departName: '工程部',
                postId: this.leftInfo.jsid,
                postName: this.userInfo.as_fullName,
                sysType: '工程人事系统回访',
                levelType: type, // 0，无数据 1正常，2问题，3异常 4、整改 5、淘汰6、奖罚 7、红包 8、培训 9、观察 10、培前 11、赔后 12、结束
                evaluate: 0,
                text: this.handleValue, // 内容描述
                cardNo: this.leftInfo.cardNo,
                loginCardNo: this.userInfo.as_cardNo,
                revisitDays: new Date().toLocaleDateString(),
                checkMainID: 4,
                regionId: this.leftInfo.regionId
            }
            AddChat(parms).then(results => {
                if (results.data.State === 0) {
                    this.$message('处理推送成功')
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 正常提交接口
        saveUserHandInfoMySql (parms) {
            saveUserHandInfoMySql(parms).then(results => {
                if (results.data.StatusCode === 0) {
                    this.pushUserHandToFinance(parms)
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 正常提交接口
        pushUserHandToFinance (parms) {
            pushUserHandToFinance(parms).then(results => {
                if (results.data.StatusCode === 0) {
                    this.$message('处理推送成功')
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 奖罚提交接口
        LaunchEventAndOver () {
            this.handleDelInt = this.handleDelInt === '' ? 0 : this.handleDelInt // 积分-
            this.handleAddInt = this.handleAddInt === '' ? 0 : this.handleAddInt // 积分-
            this.handleDelMon = this.handleDelMon === '' ? 0 : this.handleDelMon // 积分-
            this.handleAddMon = this.handleAddMon === '' ? 0 : this.handleAddMon // 积分-
            let parms = {
                em_Sponsor: this.userInfo.as_cardNo, // 操作人卡号
                em_Executor: this.leftInfo.cardNo,
                em_Content: `付${this.leftInfo.userName},${this.handleValue},奖金${this.handleAddMon - this.handleDelMon},积分${this.handleAddInt - this.handleDelInt}`, // 具体描述
                rp_Money: this.handleAddMon - this.handleDelMon, // 金钱
                em_theme: `${this.leftInfo.userName}奖罚工资:${this.handleAddMon - this.handleDelMon}`, // 标题描述
                rp_Method: Number(this.handleRadio) // 1现金，2工资，可不传，默认为工资
            }
            LaunchEventAndOver(parms).then(results => {
                if (results.data.status === 0) {
                    this.AddChat()
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 培训接口
        pushTrainUser () {
            let parms = {
                Region: this.leftInfo.regionId,
                CardNo: this.leftInfo.cardNo,
                TrainType: this.twoCurrentIndex + 1
            }
            pushTrainUser(parms).then(results => {
                if (results.data.StatusCode === 0) {
                    this.$message('提交成功')
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 处理提交
        submitDate () {
            if (this.firstCurrentIndex === '') {
                this.$message('请选择问题标签')
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
                outline: this.handleValue, // 内容描述
                remarks: this.userInfo.as_cardNo + this.userInfo.as_fullName + this.handleValue + this.leftInfo.cardNo, // 描述
                taskStatus: 1, // 写死1
                title: '', // 选中的标签
                userCard: this.leftInfo.cardNo // 用户卡号
            }
            let parms2 = {
                ...parms,
                operatorId: this.userInfo.as_cardNo, // 操作者卡号
                operatorName: this.userInfo.as_fullName, // 创建者名称
                personId: this.leftInfo.cardNo // 用户卡号
            }
            // 正常提交
            switch (Number(this.firstCurrentIndex)) {
            case 0:
                parms.title = '正常'
                this.handleSaveUserHandInfo(parms, parms2)
                break
            case 1:
                this.LaunchEventAndOver()
                break
            case 2:
                parms.title = '异常'
                parms.handType = 6
                this.handleSaveUserHandInfo(parms, parms2)
                break
            case 3:
                if (this.twoCurrentIndex === '') {
                    this.$message('请选择具体类型')
                    return false
                }
                parms.title = '培训'
                parms.handType = 7
                parms.taskStatus = 2
                parms.taskDeadline = this.endTime
                parms.outline = `${this.handleValue} 【截止时间】 ${this.$utils.format('yyyy-MM-dd', this.endTime)}`
                this.pushTrainUser()
                this.handleSaveUserHandInfo(parms, parms2)
                break
            default:
                break
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .width65 {
        width:65px
    }
</style>
