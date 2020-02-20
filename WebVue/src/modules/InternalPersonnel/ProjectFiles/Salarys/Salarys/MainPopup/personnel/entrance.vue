<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'入口信息'}"></three-title>
        <iframe :src="src" frameborder="0" width="100%" height="100%"></iframe>
        <!-- <div class="thinScroll pr10" v-scrollHeight="10" v-html="loadData"></div> -->
    </div>

</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            pullIndex: undefined,
            loadData: '',
            src: ''
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
    // this.getLoad(this.leftInfo.cardNo, this.userInfo.as_cardNo)
        this.src = 'https://hr.rxjy.com/Recruit/ZPPin/PersonnelEntrance?CardNo=' + this.leftInfo.u_kahao + '&loginCardNo=' + this.userInfo.as_cardNo + '&plate=1'
    },
    mounted () {
    },
    methods: {
    // getLoad (orderno, loginCardNo) {
    //     this.$axios.get().then((result) => {
    //         this.loadData = result.data
    //     })
    // }
    },
    watch: {
    }
}
</script>
