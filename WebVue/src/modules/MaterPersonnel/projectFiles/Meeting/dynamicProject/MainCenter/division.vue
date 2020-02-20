<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="100">
        <router-link tag="div" exact :to="routerPath('divisionDivisionInfo?region='+item.dq_id+'&name='+item.dq_name)+'&dai='+zongDai+'&yi='+zongYi" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item,index) in Record" :key="index">
            <p class="analyItemTit tx-center">{{item.dq_name}}</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">待结算</span>
                    <span>{{item.dai}}</span>
                </p>
                 <p class="col-md-4">
                    <span class="cLightGray pr8">已结算</span>
                    <span>{{item.yi}}</span>
                </p>
            </div>
        </router-link>
    </div>
     <div class="pr10">
       <div class="analyItem">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">待结算</span>
                    <span>{{zongDai}}</span>
                </p>
                 <p class="col-md-4">
                    <span class="cLightGray pr8">已结算</span>
                    <span>{{zongYi}}</span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import { GetByUidDiQuList, GetyyMoneyListByUserID } from '../Resources/Api'
export default {
    data () {
        return {
            Record: [],
            zongDai: 0,
            zongYi: 0
        }
    },
    created () {
        this.GetByUidDiQuListFn()
    },
    methods: {
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        },
        // 查询项目所负责的项目地区信息
        GetByUidDiQuListFn () {
            let _this = this
            _this.Record = []
            _this.zongDai = 0
            _this.zongYi = 0
            GetByUidDiQuList({
                uid: _this.leftInfo.uid
            }).then(results => {
                _this.Record = results.data.Body
                for (let i = 0; i < _this.Record.length; i++) {
                    _this.Record[i].dai = 0
                    _this.Record[i].yi = 0
                    GetyyMoneyListByUserID({
                        uid: _this.leftInfo.uid,
                        flag: 2
                    }).then(results => {
                        for (let a = 0; a < results.data.Body.length; a++) {
                            if (results.data.Body[a].OrderID.split('-')[0] === _this.Record.dq_id) {
                                _this.Record[i].dai = _this.Record[i].dai + (results.data.Body[a].XMJLWFMoney - results.data.Body[a].SUMJSMoney)
                                _this.Record[i].yi = _this.Record[i].yi + (results.data.Body[a].SUMJSMoney - results.data.Body[a].SUMRenGong)
                            }
                        }
                    }).catch(error => {
                        console.log(error)
                    })
                }
                for (let i = 0; i < _this.Record.length; i++) {
                    _this.zongDai = _this.zongDai + _this.Record[i].dai
                    _this.zongYi = _this.zongYi + _this.Record[i].yi
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        leftInfo () {
            this.GetByUidDiQuListFn()
        }
    }
}
</script>
