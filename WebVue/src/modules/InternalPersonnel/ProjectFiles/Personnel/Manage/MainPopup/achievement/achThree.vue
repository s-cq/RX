<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'累计成就'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem" v-for="(item,index) in everyOneAllCompletedName" :key="index">
                <p class="analyItemTit tx-center">成就{{index}}</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">项目名称</span>
                        <span>{{item.proName| slice(0,4)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">金额</span>
                        <span>{{item.achMoney}}元</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">总数</span>
                        <span>{{everyOneAllCompletedNameLength}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">总金额</span>
                        <span>{{everyOneAllCompletedNameMoney}}元</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getAllThreeAchievement } from '../../Resources/Api'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            body: {},
            everyOneAllCompletedName: {},
            everyOneAllCompletedNameLength: 0,
            everyOneAllCompletedNameMoney: 0
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.getAllThreeAchievementFn()
    },
    methods: {
        getAllThreeAchievementFn () {
            getAllThreeAchievement({
                user_card_no: this.leftInfo.cardNo
            }).then(result => {
                this.body = result.data.Body
                if (this.body != null) {
                    this.everyOneAllCompletedName = this.body.everyOneAllCompletedName
                    this.everyOneAllCompletedNameLength = this.everyOneAllCompletedName.length
                    for (var i = 0; i < this.everyOneAllCompletedName.length; i++) {
                        this.everyOneAllCompletedNameMoney += this.everyOneAllCompletedName[i].achMoney
                    }
                }
            })
        }
    }
}
</script>
