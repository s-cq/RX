<template>
<div class="">
    <div class="noprint"  v-if="printButton">
        <input type="button" value="打印" class="uiBtn-normal uiBtn-blue" @click="Project_print()"/>
    </div>
    <div class="print">
        <rx-qrcode :value="list[0].sn" :options="{width: 100, height:100}" class="codeClass"></rx-qrcode>
        <span class="print_project_bianhao">SG-{{userList.length === 0 ? '':userList.orderNo}}</span>
        <span class="print_project_Date">{{$utils.format('yyyy-MM-dd',new Date())}}</span>
        <span class="print_project_name">{{userList.length === 0 ? '' : userList.projectName}}</span>
        <span class="print_project_startTime">{{userList.length  === 0 ? '' : userList.beginTime.split(' ')[0]}}</span>
        <span class="print_project_endTime">{{userList.length === 0 ? '' : userList.endTime.split(' ')[0]}}</span>
        <img src="../Resources/Static/images/竣工验收移交单.jpg" />
    </div>
</div>
</template>
<script>
import { getInspection } from '../Resources/Api/index'
export default {
    data () {
        return {
            printButton: true, // 打印按钮是否显示
            userList: [], // 用户信息
            list: [
                {
                    cn: '无法访问此网站',
                    sn: 'This site can’t be reached'
                }
            ]
        }
    },
    created () {
        this.getInspection()
    },
    methods: {
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
<style lang="scss">
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

    .print_project_name {
        position: absolute;
        top: 257px;
        left: 196px;
        font-size: 14px;
        color: #555555;
    }

    .print_project_bianhao {
        position: absolute;
        top: 213px;
        left: 655px;
        font-size: 14px;
        color: #555555;
    }

    .print_project_dizhi {
        position: absolute;
        top: 257px;
        left: 604px;
        font-size: 14px;
        color: #555555;
    }

    .print_project_bianhao {
        position: absolute;
        top: 1351px;
        left: 488px;
        font-size: 14px;
        color: #555555;
    }

    .print_project_printDate {
        position: absolute;
        top: 1351px;
        left: 827px;
        font-size: 14px;
        color: #555555;
    }

    .print_project_Date {
        position: absolute;
        top: 1351px;
        left: 819px;
        font-size: 14px;
        color: #555555;
    }

    .print_project_startTime {
        position: absolute;
        top: 316px;
        left: 219px;
        font-size: 14px;
        color: #555555;
    }

    .print_project_endTime {
        position: absolute;
        top: 316px;
        left: 630px;
        font-size: 14px;
        color: #555555;
    }

    .print_project_gsname {
        position: absolute;
        top: 1188px;
        left: 219px;
        font-size: 14px;
        color: #555555;
    }

    .print_project_DQname {
        position: absolute;
        top: 1261px;
        left: 514px;
        font-size: 14px;
        color: #555555;
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

    .print_XM {
        position: absolute;
        top: 211px;
        left: 897px;
        font-size: 14px;
        color: #555555;
    }
    .print_XMCard {
        position: absolute;
        top: 85px;
        left: 266px;
        font-size: 18px;
        color: #555555;
    }
</style>
