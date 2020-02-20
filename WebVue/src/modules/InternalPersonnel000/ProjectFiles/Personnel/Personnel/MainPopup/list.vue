<template>
    <div class="layerRtbContain cover">
        <!-- 切换标题 (定位) -->
        <div class="clearfix list-title" style="position: absolute;top: 0px;left: 0px;">
            <ul class="uiTab3 fl">
                <li class="uiTab3-active"><a href="javascript:">选中项</a></li>
                <li><a href="javascript:">选中项一</a></li>
                <li><a href="javascript:">选中项二</a></li>
                <li><a href="javascript:">选中项三</a></li>
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
                        <th width="5%">编号</th>
                        <th width="10%" class="relative">
                            <div v-show="seachIco" class="dailyftSearch dailyftSearch1 clearfix">
                                <div class="fl uiHas-textIcon">
                                    <input @keyup.enter="seachIcoSwitch()" type="text" class="col-md-12" placeholder="点击搜索 / Enter" id="contract_no">
                                    <i class="uiText-searchIcon bgIcon" @click="seachIcoSwitch()"></i>
                                </div>
                            </div>
                            <span class="serial_number" @click="seachIcoSwitch()" v-show="!seachIco">客户姓名<i class="bgIcon"></i></span>
                        </th>
                        <th width="10%">客户电话</th>
                        <th width="10%">业务</th>
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
                            <select class="theadselect">
                                <option value="">客户申请类型</option>
                                <option value="1">底部栏</option>
                                <option value="2">右侧栏</option>
                                <option value="3">红包</option>
                                <option value="4">设计师列表</option>
                                <option value="5">设计师详情</option>
                                <option value="6">业务商城</option>
                                <option value="7">手机站</option>
                            </select>
                        </th>
                        <th width="10%">备注</th>
                        <th width="5%">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>合计</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>6500</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div class="thinScroll thinScroll-table" v-scrollHeight="10">
                <table class="uiTable uiTable-striped-odd uiTable-hover">
                    <tbody>
                        <tr v-for="index in 50" :key="index">
                            <td width="5%">{{index}}</td>
                            <td width="10%">111</td>
                            <td width="10%">15566778899</td>
                            <td width="10%">其他-手术室</td>
                            <td width="10%">1500</td>
                            <td width="10%">2018-08-06</td>
                            <td width="10%">北京</td>
                            <td width="10%">170.00㎡</td>
                            <td width="10%">商城</td>
                            <td width="10%"></td>
                            <td width="5%"><input type="button" class="uiBtn-small uiBtn-red" value="删除"></td>
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
export default {
    data () {
        return {
            startTime: '',
            startEndTime: '',
            endTime: '',
            timeType: 1,
            seachIco: false
        }
    },
    created () {

    },
    methods: {
        // 切换搜索
        seachIcoSwitch () {
            this.seachIco = !this.seachIco
        }
    }
}
</script>
