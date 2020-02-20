<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <span class="cGreen pr8" title="当前阶段">{{leftInfo.AfterMarketState | stage}}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link v-for="(item,index) in workerTypeList" :key="index" tag="div" exact :to="routerPath('default?'+index)" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">{{item.WorkerTypeName}}</p>
            <div class="analyItemCon">
                <div class="col-md-4"><span class="cLightGray pr8">所需工人</span><span>{{item.WorkmenNumber}}</span></div>
                <div class="col-md-4"><span class="cLightGray pr8">已选</span><span>{{item.SettledWorkmenNumber}}人</span></div>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getOrderPersonAuditInfo } from '../Resources/Api/proStage'
export default {
    data () {
        return {
            workerTypeList: []// 工种列表
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.load()
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
        // 加载
        load () {
            // 用_this 代替this
            let _this = this
            _this.loading = true
            // 接口请求项目信息
            let proparm = {
                orderNo: _this.leftInfo.orderno,
                selectedType: 1

            }
            // 获取项目信息 人工+现场+质量
            getOrderPersonAuditInfo(proparm).then(results => {
                if (results.data.StatusCode === 0) {
                    _this.workerTypeList = results.data.Body.workerTypeList
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    filters: {
        stage (parone) {
            let value = ''
            switch (parone) {
            case 0:
            case 10:
                value = '审计'
                break
            case 20:
                value = '准备'
                break
            case 30:
                value = '在施'
                break
            case 31:
                value = '施前'
                break
            case 32:
                value = '施中'
                break
            case 33:
                value = '施尾'
                break
            case 40:
                value = '竣工'
                break
            case 50:
                value = '完工'
                break
            case 60:
                value = '历史'
                break
            case 70:
                value = '坏账'
                break
            case 80:
                value = '退单'
                break
            }
            return value
        }
    }
}
</script>
