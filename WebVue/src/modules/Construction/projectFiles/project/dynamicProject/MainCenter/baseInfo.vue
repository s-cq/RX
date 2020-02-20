<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="{path:routerPath('baseInfo'), query:{ind: 1,loginList: loginList }}" class="analyItem anItemBor" active-class="anItemBor-active" exact>
            <p class="analyItemTit tx-center">基础</p>
            <div class="analyItemCon">
                 <div class="col-md-3">
                    <span class="cLightGray pr5">PC登陆</span>
                    <span>{{PCLoginList.length}}次</span>
                </div>
                <div class="col-md-3">
                    <span class="cLightGray pr5">APP登陆</span>
                    <span>{{AppLoginList.length}} 次</span>
                </div>
                <div class="col-md-6">
                    <span class="cLightGray pr5">最后一次</span>
                    <span>{{loginList.length> 0 ? loginList[0].createTime : ''}}</span>
                </div>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { GetLoginList } from '../Resources/Api/index'
export default {
    data () {
        return {
            loginList: [],
            PCLoginList: [],
            AppLoginList: []
        }
    },
    created () {
        this.getLoginList()
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    methods: {
        // 获取登陆信息及次数
        getLoginList () {
            let parm = {
                rwdId: this.leftInfo.orderno
            }
            GetLoginList(parm).then((result) => {
                this.loginList = result.data.Body
                this.PCLoginList = this.loginList.filter((item) => { return item.loginType === 'PC' })
                this.AppLoginList = this.loginList.filter((item) => { return item.loginType === 'APP' })
                console.log(this.loginList)
            }).catch((err) => {
                console.log(err)
            })
        },
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        }
    },
    watch: {
        leftInfo () {
            this.getLoginList()
        }
    }
}
</script>
