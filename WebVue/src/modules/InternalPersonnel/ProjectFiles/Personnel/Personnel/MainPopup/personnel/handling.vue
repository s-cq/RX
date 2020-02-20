<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'处理'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem">
                <p class="analyItemTit tx-center">处理</p>
                <div class="analyItemCon">

                    <p class="fl col-md-4"><span class="cLightGray pr8">升级次数</span><span>{{body.gradeUpNum}}</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">降级次数</span><span>{{body.gradeDownNum}}</span></p>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <!-- <p class="fl col-md-9"></p>
                    <p class="fr col-md-3">
                        <span class="cLightGray">统计</span>
                        <span class="cGreen fz14 bold">0分</span>
                    </p>
                    <p class="fl"><span class="circlemark circlemark-green">优</span></p> -->
                </div>
            </div>
            <!-- <div class="tx-center">
                <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
            </div> -->
        </div>
    </div>
</template>
<script>
import { getUserAllLevelCount } from '../../Resources/Api'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            body: {}
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.load()
    },
    methods: {
        load () {
            getUserAllLevelCount({ user_card_no: this.leftInfo.cardNo })
                .then(result => {
                    if (result.data.Body !== null) {
                        this.body = result.data.Body
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

}

</script>
