<template>
<div class="">
    <div class="noprint"  v-if="printButton">
        <input type="button" value="打印" class="uiBtn-normal uiBtn-blue" @click="Project_print()"/>
    </div>
    <div class="print">
        <rx-qrcode :value="list[0].sn" :options="{width: 100, height:100}" class="codeClass"></rx-qrcode>
        <span class="print_project_Name">{{userList.length === 0 ? '' : userList.projectName}}</span>
        <span class="print_project_Address">{{userList.length === 0  ? '' : userList.address}}</span>
        <span class="print_project_ContractNumber1">{{userList.length === 0   ? '' : userList.contractNumber}}</span>
        <span class="print_project_StartuserList">{{userList.length  === 0 ? '' : userList.beginTime.split(' ')[0]}}</span>
        <span class="print_project_EnduserList">{{userList.length === 0 ? '' : userList.endTime.split(' ')[0]}}</span>
        <span class="print_project_OrderNo1">SG-{{userList.length === 0 ? '':userList.orderNo}}</span>
        <span class="print_project_Date1">{{$utils.format('yyyy-MM-dd',new Date())}}</span>
        <span class="print_project_ProjectLeader">{{userList.length === 0 ? '' : userList.projectLeader}}</span>
        <span class="print_project_ProjectManagerName">{{userList.length === 0  ? '' : userList.projectManagerName}}</span>
        <span class="print_project_SupervisorName">{{userList.length === 0  ? '' : userList.supervisorName}}</span>
        <span class="print_project_EngineeringManagerName">{{userList.length === 0  ? '' : userList.engineeringManagerName}}</span>
        <span class="print_project_DesignerName">{{userList.length === 0  ? '' : userList.designerName}}</span>
        <table class="inspecTable1 printTable">
            <tbody>
                <tr  v-for="(item, index) in Data1" :key="index">
                    <td></td>
                    <td>{{item.title}}</td>
                    <td>{{item.content}}</td>
                    <td>{{item.result}}</td>
                </tr>
            </tbody>
        </table>
         <table class="inspecTable2 printTable">
            <tbody  v-for="(item, index) in Data2" :key="index">
                <tr>
                    <td></td>
                    <td>{{item.title}}</td>
                    <td>{{item.content}}</td>
                    <td>{{item.result}}</td>
                </tr>
            </tbody>
         </table>
         <table class="inspecTable3 printTable">
            <tbody v-for="(item, index) in Data3" :key="index">
                <tr>
                    <td></td>
                    <td>{{item.title}}</td>
                    <td>{{item.content}}</td>
                    <td>{{item.result}}</td>
                </tr>
            </tbody>
        </table>
        <table class="inspecTable4 printTable">
            <tbody v-for="(item, index) in Data4" :key="index">
                <tr v-if="index === 1">
                    <td></td>
                    <td>{{item.title}}</td>
                    <td>{{item.content}}</td>
                    <td>{{item.result}}</td>
                </tr>
                <tr v-if="index === 1" class="heightClass">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr v-if="index !== 1">
                    <td></td>
                    <td>{{item.title}}</td>
                    <td>{{item.content}}</td>
                    <td>{{item.result}}</td>
                </tr>
            </tbody>
        </table>
        <table class="inspecTable5 printTable">
            <tbody v-for="(item, index) in Data5" :key="index" >
                <tr>
                    <td></td>
                    <td>{{item.title}}</td>
                    <td>{{item.content}}</td>
                    <td>{{item.result}}</td>
                </tr>
            </tbody>
        </table>
        <table class="inspecTable6 printTable">
            <tbody v-for="(item, index) in Data6" :key="index" >
                <tr>
                    <td></td>
                    <td>{{item.title}}</td>
                    <td>{{item.content}}</td>
                    <td>{{item.result}}</td>
                </tr>
            </tbody>
        </table>
        <span class="print_project_Date2"></span>
        <span class="print_project_Date3"></span>
        <span class="print_project_OrderNo2"></span>
        <span class="print_project_OrderNo3"></span>
        <span class="print_project_ContractNumber2"></span>
        <span class="print_project_ContractNumber3"></span>
        <img src="../Resources/Static/images/项目总检01.jpg" />
        <span class="heightSpan" v-if="printButton"></span>
        <img src="../Resources/Static/images/项目总检02.jpg" />
        <span class="heightSpan" v-if="printButton"></span>
        <img src="../Resources/Static/images/项目总检03.jpg" />
    </div>
</div>
</template>
<script>
import rxQrcode from '@rx/packages/qrcode/Index'
import { getinspectionData, getInspection } from '../Resources/Api/index'
export default {
    components: {
        rxQrcode
    },
    data () {
        return {
            dataList: [], // 详细数据
            userList: [], // 用户信息
            Data1: [],
            Data2: [],
            Data3: [],
            Data4: [],
            Data5: [],
            Data6: [],
            printButton: true, // 打印按钮是否显示
            list: [
                {
                    cn: '无法访问此网站',
                    sn: 'This site can’t be reached'
                }
            ]
        }
    },
    computed: {
    },
    created () {
        this.getinspectionData()
        this.getInspection()
    },
    methods: {
        getinspectionData () {
            let parm = {
                orderCode: this.$route.query.code
            }
            // const dataJson = JSON.stringify(parm)
            // 接口打印资料数据
            getinspectionData(JSON.stringify(parm)).then(results => {
                if (results.data.StatusCode === 1) {
                    this.dataList = results.data.Body.inspectionDataList
                    this.Data1 = this.dataList.filter(function (item) {
                        return item.type === '1'
                    })
                    // 瓷砖、石材数据
                    this.Data2 = this.dataList.filter(function (item) {
                        return item.type === '2'
                    })
                    // 墙面数据
                    this.Data3 = this.dataList.filter(function (item) {
                        return item.type === '3'
                    })
                    // 地面数据
                    this.Data4 = this.dataList.filter(function (item) {
                        return item.type === '4'
                    })
                    // 电器数据
                    this.Data5 = this.dataList.filter(function (item) {
                        return item.type === '5'
                    })
                    this.Data6 = this.dataList.filter(function (item) {
                        return item.type === '6'
                    })
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 打印人数据
        getInspection () {
            let parm = {
                orderCode: this.$route.query.code
            }
            // const dataJson = JSON.stringify(parm)
            // 接口打印资料数据
            getInspection(JSON.stringify(parm)).then(results => {
                if (results.data.StatusCode === 1) {
                    this.userList = results.data.Body.inspectionList
                }
            }).catch(error => {
                console.log(error)
            })
        },
        Project_print () {
            this.printButton = false
            setTimeout(() => {
                window.print()
                this.printButton = true
            }, 100)
        }
    }
}
</script>
<style lang="scss" scope>
    #app{
        width:auto;
        height:auto;
        overflow:inherit
    }
    .codeClass {
        position: absolute;
        right: 80px;
        top: 40px;
    }
    .print {
        position: relative;
        width: 1000px;
        margin: auto;
        overflow: hidden;
        padding: 10px 0px;
    }
    /**开工日期**/
    .print_project_Date1,
    .print_project_Date2,
    .print_project_Date3,
    .print_project_OrderNo1,
    .print_project_OrderNo2,
    .print_project_OrderNo3,
    .print_project_Name,
    .print_project_ContractNumber1,
    .print_project_ContractNumber2,
    .print_project_ContractNumber3,
    .print_project_Address,
    .print_project_StartData,
    .print_project_EndData {
        position: absolute;
        top: 1370px;
        left: 819px;
        font-size: 14px;
        color: #555555;
    }
    .print_project_Date2 {
        top: 2814px;
        left: 819px;
    }
    .print_project_Date3 {
        bottom: 55px;
        top: auto;
    }
    .print_project_Name {
        top: 258px;
        width: 100%;
        left: 245px;
        font-weight: bold;
    }
    .print_project_Address {
        top: 315px;
        width: 100%;
        left: 245px;
        font-weight: bold;
    }
    .print_project_StartData {
        top: 373px;
        width: 200px;
        font-weight: bold;
        left: 245px;
    }
    .print_project_EndData {
        top: 373px;
        width: 200px;
        right: 55px;
        font-weight: bold;
        left: auto;
    }
    .print_project_OrderNo1 {
        top: 1370px;
        left: 490px;
    }
    .print_project_OrderNo2 {
        top: 2814px;
        left: 490px;
    }
    .print_project_OrderNo3 {
        bottom: 55px;
        left:490px;
        top:auto;
    }
    .print_project_ContractNumber1,
    .print_project_ContractNumber2,
    .print_project_ContractNumber3{
        top: 215px;
        width: 100px;
        right: 55px;
        font-weight: bold;
        left: auto;
    }
    .print_project_ContractNumber2 {
        top: 1663px;
    }
    .print_project_ContractNumber3 {
        top: auto;
        bottom:1205px;
    }
    .print_project_ProjectLeader,
    .print_project_ProjectManagerName,
    .print_project_EngineeringManagerName,
    .print_project_SupervisorName,
    .print_project_DesignerName {
        position: absolute;
        bottom: 965px;
        right: 660px;
        font-size: 14px;
        font-weight: bold;
    }
    .print_project_ProjectManagerName {
        right: 385px;
    }
    .print_project_EngineeringManagerName {
        right: 515px;
    }
    .print_project_SupervisorName {
        right: 265px;
    }
    .print_project_DesignerName {
        right: 125px;
    }
    .print img {
        width: 100%;
        height: 100%;
    }
    .noprint {
        position: fixed;
        top: 15px;
        left: 50%;
        z-index: 1;
    }
    .uiBtn-blue {
        text-align: center;
        background: #09f;
        color: #fff;
        cursor: pointer;
        border: 1px solid #09f;
        border-radius: 3px;
    }

    .uiBtn-normal, .uiBtn-normal-no {
        padding: 0 16px;
        height: 28px;
        line-height: 26px;
        vertical-align: middle;
    }
    /**table 样式**/
    .printTable {
        position: absolute;
        left: 55px;
        top: 468px;
        width: 86%;
        border: none;
    }
    .inspecTable1 {
        top: 468px;
    }
    .inspecTable2 {
        top:697px;
    }
    .inspecTable3 {
        top:925px;
    }
    .inspecTable4 {
        top:1221px;
    }
    .inspecTable5 {
        top:2160px
    }
    .inspecTable6 {
        top:2560px;
    }
    .printTable td {
        color: #555;
        font-weight: bold;
        font-size: 13px;
        text-align: center;
        height: 57px;
        border: none;
    }
    .printTable .inspecTable1 td {
        height: 53px;
        line-height: 53px;
    }
    .printTable td:nth-child(1) {
        width: 18%;
    }
    .printTable td:nth-child(2) {
        width: 18%;
    }
    .printTable td:nth-child(3) {
        width: 41%;
    }
    .printTable td:nth-child(4) {
        width: 11%;
    }
    .printTable .heightClass {
        height:425px;
    }
    .printTable .printClass {
        height:450px;
    }
    .heightSpan {
        height: 40px;
        display: inline-block;
    }
</style>
