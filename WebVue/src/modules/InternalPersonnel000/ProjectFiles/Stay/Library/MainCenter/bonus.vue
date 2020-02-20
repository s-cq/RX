<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">

                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="10" v-if="grade<13">

            <div class="analyItem">
                <p class="analyItemTit tx-center">工人录入</p>
                <div class="analyItemCon">
                    <p class="col-md-6"><span class="cLightGray pr8">人数</span><span>--</span></p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">单价</span><span v-if="!iconShow">{{moneyValue}}</span>
                        <input type="text" class="width60" v-if="iconShow" v-model="moneyValue" />
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="pointer ml20 imgIcon" v-if="iconShow" @click="savaData()" />
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="pointer m5 imgIcon" v-if="iconShow" @click="iconShow=false" />
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="pointer ml20 imgIcon" v-if="!iconShow" @click="iconShow=true" />
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
import {
    GetUserLevelStandardByAbilityLevel,
    updateWorkerMoney,
    getWorkerMoney
} from '../Resources/Api'
export default {
    data () {
        return {
            userLevel: {},
            grade: 0,
            iconShow: false,
            moneyValue: 0
        }
    },
    created () {
        this.grade = this.leftInfo.grade
        this.GetUserLevelStandardByAbilityLevelFn()
        this.getWorkerMoneyFn()
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
        // 查询登记对应的分项设置信息
        GetUserLevelStandardByAbilityLevelFn () {
            let _this = this
            _this.userLevel = {}
            GetUserLevelStandardByAbilityLevel({
                level: _this.leftInfo.grade
            }).then(results => {
                _this.userLevel = results.data.Body
            }).catch(error => {
                console.log(error)
            })
        },
        getWorkerMoneyFn () {
            getWorkerMoney({
                grade: this.leftInfo.grade
            }).then(results => {
                this.moneyValue = results.data.Body.worker_money
            })
        },
        savaData () {
            this.iconShow = false
            updateWorkerMoney({
                grade: this.leftInfo.grade,
                worker_money: this.moneyValue
            }).then(results => {
                if (results.data.Body.count > 0) {
                    layer.msg('修改成功！', { icon: 1, time: 3000 })
                    this.getWorkerMoneyFn()
                } else {
                    layer.msg('修改失败！', { icon: 5, time: 3000 })
                }
            })
        }


    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        leftInfo () {
            this.grade = this.leftInfo.grade
            this.GetUserLevelStandardByAbilityLevelFn()
            this.getWorkerMoneyFn()
        }
    }
}
</script>
<style lang="scss">
.imgIcon {
  position: relative;
  top: 5px;
}
</style>
