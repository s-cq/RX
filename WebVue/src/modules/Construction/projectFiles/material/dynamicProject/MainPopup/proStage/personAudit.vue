<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'项目分析'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div  v-for="(item,index) in workerSelectList" :key="index" class="analyItem">
            <p class="analyItemTit tx-center">{{item.WorkerTypeName}}</p>
            <div class="analyItemCon">
                <div class="col-md-4"><span class="cLightGray pr8">状态</span><span class="cGreen">{{item.IsSelected===1?'开启':'关闭'}}</span></div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-9"></p>
                <p class="fr col-md-3">
                    <span class="cLightGray">统计</span>
                    <span class="cGreen fz14 bold">0分</span>
                </p>
                <p class="fl"><span class="circlemark circlemark-green">优</span></p>
            </div>
        </div>
        <div class="tx-center">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { } from '../../Resources/Api/proStage'
export default {
    data () {
        return {
            workerSelectList: []// 工种列表
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
            // let proparm = {
            //     orderNo: _this.leftInfo.orderno,
            //     grade: 1,
            //     workerTypeCode: 1
            // }
            // 获取项目人工信息
            // getWorkTypeSelectedAll(proparm).then(results => {
            //     if (results.data.StatusCode === 0) {
            //         _this.workerSelectList = results.data.Body.workerTypeSelectedList
            //     }
            // }).catch(error => {
            //     console.log(error)
            // })
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
