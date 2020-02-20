<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3">
                        <span class="cGreen pr8" title="当前阶段">{{leftInfo.AfterMarketState | stage}}</span>
                    </div>
                    <div class="col-md-3">
                        <span class="cGreen pr8" title="进入该阶段的日期">{{leftInfo.AfterMarketStateTime}}</span>
                    </div>
                    <div class="col-md-3">
                        <span class="cGreen pr8">未开启</span>
                    </div>
                    <span class="circlemark circlemark-lightGreen">正</span>
                </div>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <div  v-for="(item, index) of cameraList" :key="index">
            <router-link :to="{path: routerPath('camera'), query:{cameraId: item.camera}}" exact class="analyItem anItemBor" active-class="anItemBor-active" v-if="item.name !== null">
                <p class="analyItemTit tx-center">{{item.name}}</p>
                <div class="analyItemCon">
                    <div class="col-md-12"><span class="cLightGray pr8">编号</span><span :data-title="item.camera">{{item.camera }}</span></div>
                    <!-- <div class="col-md-3"><span class="cLightGray pr8">状态</span><span>{{item.camera_state | camera_state()}}</span></div> -->
                </div>
            </router-link>
        </div>
    </div>
    <div class="pr10">
        <router-link tag="div" :to="routerPath('default')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                </div>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { getPointByPro } from '../Resources/Api/index'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            cameraList: [] // 摄像头信息
        }
    },
    created () {
        this.load()
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
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
        load () {
            getPointByPro({
                order_no: this.leftInfo.orderno
            }).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.cameraList = result.data.Body.orderList
                    console.log(this.cameraList)
                }
            }).catch((err) => {
                console.log(err)
            })
        }

    },
    watch: {
        leftInfo () {
            this.load()
        }
    },
    filters: {
        // 状态过滤
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
        },
        camera_state (stage) {
            let value = ''
            switch (stage) {
            case 0:
                value = '在线'
                break
            case 1:
                value = '不在线'
                break
            default:
                value = '未检测'
                break
            }
            return value
        }
    }
}
</script>
