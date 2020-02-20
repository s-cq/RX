<template>
    <div class="layerRtbContain cover">
        <!-- 切换标题 (定位) -->
        <div class="clearfix list-title" style="position: absolute;top: 0px;left: 0px;">
            <ul class="uiTab3 fl">
                <li class="uiTab3-active"><a href="javascript:">订单统计</a></li>
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
                        <th width="5%">序号</th>
                        <th width="10%" class="relative">
                            <div v-show="seachIco" class="dailyftSearch dailyftSearch1 clearfix">
                                <div class="fl uiHas-textIcon">
                                    <input @keyup.enter="seachIcoSwitch()" type="text" class="col-md-12" placeholder="点击搜索 / Enter">
                                    <i class="uiText-searchIcon bgIcon" @click="seachIcoSwitch()"></i>
                                </div>
                            </div>
                            <span class="serial_number" @click="seachIcoSwitch()" v-show="!seachIco">地区<i class="bgIcon"></i></span>
                        </th>
                         <th width="10%">
                            <select class="theadselect">
                                <option>项目阶段</option>
                                <option>审计</option>
                                <option>准备</option>
                                <option>施前</option>
                                <option>施中</option>
                                <option>施尾</option>
                                <option>竣工</option>
                            </select>
                        </th>
                        <th width="5%">工人</th>
                        <th width="10%">材料订单</th>
                        <th width="10%">工艺订单</th>
                        <th width="10%">现场订单</th>
                        <th width="10%">项目经理</th>
                        <th width="10%">监理</th>
                        <th width="10%">摄像头</th>
                        <th width="5%">投诉</th>
                        <th>客户端登陆</th>
                    </tr>
                </thead>
            </table>
            <div class="thinScroll thinScroll-table" v-scrollHeight="10">
                <table class="uiTable uiTable-striped-odd uiTable-hover">
                    <tbody>
                        <tr v-for="index in 50" :key="index">
                            <td width="5%">{{index}}</td>
                            <td width="10%">世茂</td>
                            <td width="10%">在施</td>
                            <td width="5%">3/12</td>
                            <td width="10%">8/12</td>
                            <td width="10%">3/12</td>
                            <td width="10%">2/2</td>
                            <td width="10%">张三</td>
                            <td width="10%">李四</td>
                            <td width="10%">个数/正常/异常</td>
                            <td width="5%">有/无</td>
                            <td>登陆次数</td>
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
