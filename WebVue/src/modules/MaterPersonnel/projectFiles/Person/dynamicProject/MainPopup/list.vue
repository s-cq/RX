<template>
    <div class="layerRtbContain cover">
        <!-- 切换标题 (定位) -->
        <div class="clearfix list-title" style="position: absolute;top: 0px;left: 0px;">
            <ul class="uiTab3 fl">
                <li class="uiTab3-active"><a href="javascript:">选中项</a></li>
                <!-- <li><a href="javascript:">选中项一</a></li>
                <li><a href="javascript:">选中项二</a></li>
                <li><a href="javascript:">选中项三</a></li> -->
            </ul>
        </div>
        <!-- 选中项 111 -->
        <div class="list-content">
            <div class="clearfix mb10">
                <div class="fr">
                    <router-link :to="this.$route.matched[1].path">
                        <input type="button" class="uiBtn-normal uiBtn-orange fl" value="返回">
                    </router-link>
                </div>
                <div class="fr mr5" v-show="timeType == 1">
                    <input @click="timeType = 2" type="button" class="uiBtn-normal uiBtn-blue fl mr5" value="周期">
                    <input type="button" class="uiBtn-normal uiBtn-blue fl mr5" value="今日">
                    <input type="button" class="uiBtn-normal uiBtn-blue fl mr5" value="本周">
                    <el-date-picker value-format="yyyy-MM" v-model="startEndTime" type="month" placeholder="选择月"></el-date-picker>
                </div>
                <div class="fr mr5" v-show="timeType == 2">
                    <el-date-picker class="fl mr5" value-format="yyyy-MM-dd" v-model="startTime" type="date" placeholder="开始日期"></el-date-picker>
                    <el-date-picker class="fl mr5" value-format="yyyy-MM-dd" v-model="endTime" type="date" placeholder="结束日期"></el-date-picker>
                    <input @click="timeType = 1" type="button" class="uiBtn-normal uiBtn-blue fl mr5" value="查询">
                </div>
            </div>
            <table class="uiTable">
                <thead>
                    <tr>
                        <th width="36%"  colspan="4"><input v-model="mensrText"  placeholder="请输入姓名/地区"/>
                        <span class="serial_number">
                            <i class="bgIcon select-btn" @click="menst()"></i></span></th>
                        <th width="50%" colspan="5" class="relative">保证金
                            <!-- <div v-show="seachIco" class="dailyftSearch dailyftSearch1 clearfix">
                                <div class="fl uiHas-textIcon">
                                    <input @keyup.enter="seachIcoSwitch()" type="text" class="col-md-12" placeholder="点击搜索 / Enter" id="contract_no">
                                    <i class="uiText-searchIcon bgIcon" @click="seachIcoSwitch()"></i>
                                </div>
                            </div>
                            <span class="serial_number" @click="seachIcoSwitch()" v-show="!seachIco">客户姓名<i class="bgIcon"></i></span> -->
                        </th>
                        <th width="14%" colspan="2">平台费</th>
                        <!-- <th wi1th="10%">业务</th>
                        <th width="10%">金额</th>
                        <th width="10%">
                            <div class="thSortBox2 clearfix">
                                <span class="fl">预约时间</span>
                                <div class="thSort">
                                    <a href="javascript:;" class="thSortA thSortAt">
                                        <i class="thSortI thSort-up"></i>
                                    </a>
                                    <a href="javascript:;" class="thSortA thSortAb current">
                                        <i class="thSortI thSort-down"></i>
                                    </a>
                                </div>
                            </div>
                        </th>
                        <th width="10%">
                            <select class="theadselect">
                                <option>地区</option>
                                <option>北京</option>
                                <option>南京</option>
                                <option>合肥</option>
                                <option>武汉</option>
                            </select>
                        </th>
                        <th width="10%">
                            <div class="thSortBox2 clearfix">
                                <span class="fl">面积</span>
                                <div class="thSort">
                                    <a href="javascript:;" class="thSortA thSortAt">
                                        <i class="thSortI thSort-up"></i>
                                    </a>
                                    <a href="javascript:;" class="thSortA thSortAb">
                                        <i class="thSortI thSort-down"></i>
                                    </a>
                                </div>
                            </div>
                        </th>
                        <th width="10%">
                            y
                        </th>
                        <th width="10%">备注</th>
                        <th width="5%">操作</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>序号</td>
                        <td>地区</td>
                        <td>姓名</td>
                        <td>级别</td>
                        <td>应缴</td>
                        <td>实缴</td>
                        <td>旧账</td>
                        <td>实差</td>
                        <td>总差</td>
                        <td>金额</td>
                        <td>到期</td>
                    </tr>
                </tbody>
            </table>
            <div class="thinScroll thinScroll-table" v-scrollHeight="10">
                <table class="uiTable uiTable-striped-odd uiTable-hover">
                    <tbody v-if="mentData.length == 0">
                        <tr v-for="(item,index) in mentList" :key="index">
                            <td width="9%">{{index+1}}</td>
                            <td width="9%">{{item.dq_name}}</td>
                            <td width="9%">{{item.user_name}}</td>
                            <td width="9%">{{item.user_level}}</td>
                            <td width="10%">{{item.le_deposit}}</td>
                            <td width="10%">{{item.SumPmeposit}}</td>
                            <td width="10%">{{item.deposit_old_cash}}</td>
                            <td width="10%">{{item.DifferenceMoney}}</td>
                            <td width="10%">{{item.TotalDifferenceMoney}}</td>
                            <td width="7%">{{item.payable}}</td>
                            <td width="7%">{{formatDate(item.endTime)}}</td>
                        </tr>
                    </tbody>
                    <tbody v-if="mentData.length > 0">
                        <tr v-for="(item,index) in mentData" :key="index">
                             <td width="9%">{{index+1}}</td>
                            <td width="9%">{{item.dq_name}}</td>
                            <td width="9%">{{item.user_name}}</td>
                            <td width="9%">{{item.user_level}}</td>
                            <td width="10%">{{item.le_deposit}}</td>
                            <td width="10%">{{item.SumPmeposit}}</td>
                            <td width="10%">{{item.deposit_old_cash}}</td>
                            <td width="10%">{{item.DifferenceMoney}}</td>
                            <td width="10%">{{item.TotalDifferenceMoney}}</td>
                            <td width="7%">{{item.payable}}</td>
                            <td width="7%">{{formatDate(item.endTime)}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- 选中项 222 -->
        <div class="list-content">

        </div>
    </div>
</template>
<script>
import {findByUserNameAeaId} from '../Resources/Api'
export default {
    data () {
        return {
            startTime: '',
            startEndTime: '',
            endTime: '',
            timeType: 1,
            seachIco: false,
            mentList: [],
            mensrText: '',
            mentData: []
        }
    },
    created () {
        this.findByUserNameAeaId()
    },
    methods: {
        findByUserNameAeaId () {
            findByUserNameAeaId({
                userName: '',
                areaName: ''
            }).then(res => {
                this.mentList = res.data.body
            }).catch(err => {
                console.log(err)
            })
        },
        menst () {
            var mensrText = this.mensrText
            if (mensrText !== ' ') {
                this.mentData = this.mentList.filter(function (product) {
                    return Object.keys(product).some(function (key) {
                        return (
                            String(product[key])
                                .toLowerCase()
                                .indexOf(mensrText) > -1
                        )
                    })
                })
                console.log(this.mentData)
            } else {
                this.findByUserNameAeaId()
            }
        },
        formatDate (now) {
            var time = new Date(now)
            var year = time.getFullYear()
            var month = time.getMonth() + 1
            var date = time.getDate()
            // eslint-disable-next-line no-unused-vars
            var hour = time.getHours()
            // eslint-disable-next-line no-unused-vars
            var minute = time.getMinutes()
            // eslint-disable-next-line no-unused-vars
            var second = time.getSeconds()
            return year + '-' + month + '-' + date + '     '
        },
        // 切换搜索
        seachIcoSwitch () {
            this.seachIco = !this.seachIco
        }
    }
}
</script>
