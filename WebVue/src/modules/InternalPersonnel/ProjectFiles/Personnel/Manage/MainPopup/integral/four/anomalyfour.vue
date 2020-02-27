<template>
    <div class="layerRtb layerRtb-threecolumn layerRtb-right">
        <three-title :title="{name:'培训历史'}" :close="false">
            <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFour()"></span>
        </three-title>
        <div class="thinScroll pr10" v-scrollHeight="0">
            <iframe :src="getUrl" frameborder="0" width="100%" height="100%"></iframe>
        </div>
    </div>
</template>
<script>
import { getLatelyClassTrainResultByCardNo } from '../../../Resources/Api'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            getUrl: null // 获取的Url
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.getLatelyClassTrainResultByCardNo()
    },
    methods: {
        // 获取培训三段URl
        getLatelyClassTrainResultByCardNo () {
            getLatelyClassTrainResultByCardNo({ cardNo: this.leftInfo.cardNo }).then((results) => {
                if (results.data.statusCode === 1) {
                    const data = results.data.body
                    if (data !== null) {
                        this.getUrl = data.jumpUrl
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>
