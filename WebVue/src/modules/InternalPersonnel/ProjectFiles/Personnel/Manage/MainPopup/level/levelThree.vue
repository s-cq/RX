<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'招人标准'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">学历要求</p>
            <div class="analyItemCon">
                <p class="col-md-10">
                    <!-- <span class="cLightGray pr8">标准</span> -->
                    <span class="cLightGray pr8">大专</span>
                </p>
                <p class="col-md-2">
                    <span class="cGreen tx-fb">达标</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
           <p class="analyItemTit tx-center">专业要求</p>
            <div class="analyItemCon">
                <p class="col-md-10">
                    <span class="cLightGray pr8">标准</span>
                    <span>土木工程、工程造价、工程管理</span>
                </p>
                <p class="col-md-2">
                    <span class="cRed tx-fb">未达标</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">性格</p>
            <div class="analyItemCon">
                <p class="col-md-12">
                    <el-radio-group v-model="radioX">
                        <el-radio :label="3">稳重平和性</el-radio>
                        <el-radio :label="6">活跃组织性</el-radio>
                        <el-radio :label="9">影响支配性</el-radio>
                        <el-radio :label="12">内向思考性</el-radio>
                    </el-radio-group>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">品德</p>
            <div class="analyItemCon">
                <p class="col-md-10">
                    <el-radio-group v-model="radioP">
                        <el-radio :label="3">责任</el-radio>
                        <el-radio :label="6">上心</el-radio>
                        <el-radio :label="9">负责</el-radio>
                    </el-radio-group>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">能力</p>
            <div class="analyItemCon">
                <p class="col-md-12">
                    <el-radio-group v-model="radioN">
                        <el-radio :label="1">组织能力</el-radio>
                        <el-radio :label="2">判断能力</el-radio>
                        <el-radio :label="3">沟通能力</el-radio>
                        <el-radio :label="4">协调能力</el-radio>
                        <el-radio :label="5">领导能力</el-radio>
                    </el-radio-group>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">证书</p>
            <div class="analyItemCon">
                <p class="col-md-12">
                    <el-radio-group v-model="radioZ">
                        <el-radio class="mb10" :label="1">一级建造师</el-radio>
                        <el-radio class="mb10" :label="2">二级建造师</el-radio>
                        <el-radio class="mb10" :label="3">给排水工程师</el-radio>
                        <el-radio class="mb10" :label="4">电器工程师</el-radio>
                        <el-radio class="mb10" :label="5">暖通工程师</el-radio>
                        <el-radio class="mb10" :label="6">结构工程师</el-radio>
                        <el-radio class="mb10" :label="7">安全员C</el-radio>
                        <el-radio class="mb10" :label="8">一级造价师</el-radio>
                        <el-radio class="mb10" :label="9">二级造价师</el-radio>
                        <el-radio class="mb10" :label="10">预算员</el-radio>
                    </el-radio-group>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            radioX: 3,
            radioP: 3,
            radioN: 3,
            radioZ: 1
        }
    },
    created () {
        this.nextLevel = this.$route.query.level !== '' && this.$route.query.level >= 0 ? Number(this.$route.query.level) + 1 : ''
    },
    computed: {
        ...mapGetters(['leftInfo'])
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
    },
    watch: {
        $route () {
        }
    }
}
</script>
<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>
