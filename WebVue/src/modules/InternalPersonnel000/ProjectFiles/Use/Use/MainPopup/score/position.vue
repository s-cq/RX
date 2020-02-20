<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'职务'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem">
                <p class="analyItemTit tx-center">名片</p>
                <div class="analyItemCon">
                    <div class="clearfix relative">
                        <div class="col-md-2 pr10">
                            <img alt="个人照片" class="person-img" v-bind:src="userDetail.img_url" width="57" height="67">
                        </div>
                        <div class="col-md-9">
                            <p class="col-md-3"><span class="cLightGray pr8">姓名</span><span>{{userDetail.u_xingming}}</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">卡号</span><span>{{userDetail.u_kahao}}</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">邀请码</span><span>{{userDetail.code}}</span></p>
                            <p class="col-md-3"><span class="cLightGray pr8">工龄</span><span>{{userDetail.u_workyear}}月</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">入职</span><span>{{userDetail.u_ruzhitime}}</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">级别</span><span>{{abilityLevel}}</span></p>
                            <p class="col-md-3"><span class="cLightGray pr8">部门</span><span>{{userDetail.bm_name}}</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">分组</span><span>{{userDetail.js_name}}</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">职务</span><span title="userDetail.zw_name">{{userDetail.zw_name}}</span></p>
                        </div>
                        <div class="card-right2">
                            <img alt="二维码" v-bind:src="userDetail.code_url" width="57" height="67">
                        </div>
                    </div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center ">上级</p>
                <div class="analyItemCon">
                    <div class="clearfix relative">
                        <div class="col-md-2 pr10">
                            <img alt="暂无图片信息" src="../../Resources/img/unknown_person.png" width="57" height="67" class="person-img-noround">
                        </div>
                        <div class="col-md-9">
                            <p class="col-md-3"><span class="cLightGray pr8">姓名</span><span>{{userDetail.u_xingming}}</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">卡号</span><span>{{userDetail.u_kahao}}</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">邀请码</span><span>{{userDetail.code}}</span></p>
                            <p class="col-md-3"><span class="cLightGray pr8">工龄</span><span>{{userDetail.u_workyear}}月</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">入职</span><span>{{userDetail.u_ruzhitime}}</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">级别</span><span>{{abilityLevel - 1 &lt; 3 ? 3 : abilityLevel - 1}}</span></p>
                            <p class="col-md-3"><span class="cLightGray pr8">部门</span><span>{{userDetail.bm_name}}</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">分组</span><span>{{userDetail.js_name}}</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">职务</span><span title="userDetail.zw_name">{{userDetail.zw_name}}</span></p>
                        </div>
                        <div class="card-right2">
                            <img alt="二维码" v-bind:src="userDetail.code_url" width="57" height="67">
                        </div>
                    </div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">下级</p>
                <div class="analyItemCon">
                    <div class="clearfix relative">
                        <div class="col-md-2 pr10">
                            <img alt="暂无图片信息" src="../../Resources/img/unknown_person.png" width="57" height="67" class="person-img-noround">
                        </div>
                        <div class="col-md-9">
                            <p class="col-md-3"><span class="cLightGray pr8">姓名</span><span>{{userDetail.u_xingming}}</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">卡号</span><span>{{userDetail.u_kahao}}</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">邀请码</span><span>{{userDetail.code}}</span></p>
                            <p class="col-md-3"><span class="cLightGray pr8">工龄</span><span>{{userDetail.u_workyear}}月</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">入职</span><span>{{userDetail.u_ruzhitime}}</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">级别</span><span>{{abilityLevel + 1 > 12 ? 12 : abilityLevel + 1}}</span></p>
                            <p class="col-md-3"><span class="cLightGray pr8">部门</span><span>{{userDetail.bm_name}}</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">分组</span><span>{{userDetail.js_name}}</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">职务</span><span title="userDetail.zw_name">{{userDetail.zw_name}}</span></p>
                        </div>
                        <div class="card-right2">
                            <img alt="二维码" v-bind:src="userDetail.code_url" width="57" height="67">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="layerRtb-footer">
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
        </div> -->
    </div>
</template>
<script>
// import { } from '../Resources/Api'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            userDetail: [],
            abilityLevel: ''
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.userDetail = this.$route.params.user
        this.abilityLevel = this.$route.params.abilityLevel

    // this.load()
    },
    methods: {
    // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        }
    }
}
</script>
