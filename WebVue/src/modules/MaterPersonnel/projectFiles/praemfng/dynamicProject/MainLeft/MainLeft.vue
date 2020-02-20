<template>
<div class="tc-left pr10 fl">
    <ul class="clearfix uiTab1 mb5 j_outerHeight">
        <!-- <li class="col-md-3 fl uiTab1-active"><a href="javascript:">项</a></li> -->
    </ul>
    <div class="daily_title j_outerHeight">
        <ul class="clearfix">
            <li :class="userState===12?'title_cur':''" @click="userState=12,GetProjectManagerListFn()" data-title="全部">全</li>
            <!-- <li data-title="不超过10个字是不会出现的" data-title-length="10">S</li>
            <li data-title="我的背景色是蓝色的" data-title-color="#3385ff">Z</li>
            <li class="title_not_allowed">G</li>
            <li style="float:right;">D</li> -->
        </ul>
    </div>
    <div class="contentbox">
        <table class="uiTable j_outerHeight">
            <thead>
                <tr class="tr-show" v-show="!seachIco">
                    <th width="33%">
                          等级
                    </th>
                    <th width="33%" class="tx-center">
                           职称
                    </th>
                    <th width="33%" class="tx-center">
                         时间
                    </th>
                </tr>
                 <!-- <tr class="tr-hide" v-show="seachIco">
                    <th>
                        <div class="dailyftSearch clearfix">
                            <div class="fl uiHas-textIcon">
                                <input type="text" class="col-md-12 lesson-title-input" v-model="inpu"
                                    placeholder="姓名/卡号" @keyup.enter="GetProjectManagerListFn()" >
                                <i class="uiText-searchIcon bgIcon select-cancel-btn" @click="GetProjectManagerListFn()"></i>
                            </div>
                        </div>
                    </th>
                </tr> -->
            </thead>
        </table>
        <div class="scroll-content thinScroll thinScroll-table" v-loading="loading" v-scrollHeight="36">
            <table class="uiTable uiTable-striped uiTable-hover" id="tab1">
                <tbody>
                    <tr v-for="(item,index) in pondweb" :key="index" :class="{'tractive':index == trIndex}" @click="siderBarTrclick(index,item)">
                        <td width="33%">{{item.leLevel}}</td>
                        <td width="33%">{{item.leName}}</td>
                        <td width="33%">{{item.leUpdateDate}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="j_outerHeight clearfix tj_bottom">
            <p class="col-md-3" data-title="全部">{{pondweb.length}}</p>
            <p class="col-md-3 cGreen" data-title="正常">{{pondweb.length}}</p>
            <p class="col-md-3 cOrange" data-title="异常">0</p>
            <p class="col-md-3 cRed" data-title="问题">0</p>
        </div>
    </div>
</div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'

import {
    getStatyLevel

} from '../Resources/Api'
export default {
    data () {
        return {
            loading: false,
            seachIco: false,
            trIndex: 0,
            leftListData: [], // 遍历的数据
            inpu: '',
            state: '',
            userState: 12,
            region: '',
            colonyList: [],
            cityList: [],
            colony_city: [],
            pondweb: []
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.getStatyLevel()
    },
    methods: {
        ...mapMutations({
            setLeftData: `SET_LEFT_INFO`
        }),
        siderBarTrclick (index, item) {
            this.trIndex = index
            // 保存字段时 一定要确认公共字段一致
            this.setLeftData(item)
            // 关闭弹窗
            this.$router.push(this.$route.matched[1].path)
        },
        getStatyLevel () {
            getStatyLevel({

            }).then(res => {
                this.pondweb = res.data.Body
            }).catch(err => {
                console.log(err)
            })
        }
    },
    watch: {
        userState () {
            this.GetUseUser()
        }
    }
}
</script>
