<template>
<div class="">
    <div class="analyItem">
        <p class="analyItemTit tx-center">综合</p>
        <div class="analyItemCon">
            <div class="col-md-4"><span class="cLightGray pr8">应进场</span><span>{{workerTypeYCount}}人</span></div>
            <div class="col-md-8"><span class="cLightGray pr8">实进场</span><span>{{workerTypeSCount}}人</span></div>
            <div class="col-md-4"><span class="cLightGray pr8">应发生</span><span>{{workYhappenTime | toFixed(2) }}小时</span></div>
            <div class="col-md-8"><span class="cLightGray pr8">已发生</span><span>{{workShappenTime | toFixed(2) }}小时</span></div>
        </div>
    </div>
    <router-link v-for="(item,index) in workerTypeList" :key="index" tag="div" exact :to="routerPath('default?'+index)" class="analyItem anItemBor" active-class="anItemBor-active">
        <p class="analyItemTit tx-center">{{item.workerTypeName}}</p>
        <div class="analyItemCon">
            <div class="col-md-4"><span class="cLightGray pr8">应进场</span><span>{{item.workerNumber}}</span></div>
            <div class="col-md-4"><span class="cLightGray pr8">实进场</span><span>{{item.workCount}}</span></div>
            <div class="col-md-4"><span class="cLightGray pr8">已发生</span><span>{{item.activeWorkHours | toFixed(2)}}小时</span></div>
            <span class="circlemark circlemark-lightRed">未</span>
        </div>
    </router-link>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getWorkTypeAll } from '../../Resources/Api/proStage'
export default {
    data () {
        return {
            auditList: [], // 项目审计列表
            workerTypeList: [] // 人工列表

        }
    },
    created () {
        this.load()
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo']),
        // 应进场人数
        workerTypeYCount () {
            return this.workerTypeList.map(workertype => workertype.workerNumber).reduce((acc, cur) => (parseFloat(cur) + acc), 0)
        },
        // 实进场人数
        workerTypeSCount () {
            return this.workerTypeList.map(workertype => workertype.workCount).reduce((acc, cur) => (parseFloat(cur) + acc), 0)
        },
        // 应发生工时
        workYhappenTime () {
            return this.workerTypeList.map(workertype => workertype.workingHours).reduce((acc, cur) => (parseFloat(cur) + acc), 0)
        },
        // 实发生工时
        workShappenTime () {
            return this.workerTypeList.map(workertype => workertype.activeWorkHours).reduce((acc, cur) => (parseFloat(cur) + acc), 0)
        }
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
                orderNo: _this.leftInfo.orderno
            }
            // 获取项目信息 人工+现场+质量
            getWorkTypeAll(proparm).then(results => {
                if (results.data.StatusCode === 1) {
                    _this.workerTypeList = results.data.Body
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    watch: {
        leftInfo () {
            this.load()
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
