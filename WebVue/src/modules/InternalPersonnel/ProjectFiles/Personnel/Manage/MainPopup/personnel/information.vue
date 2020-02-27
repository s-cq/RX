<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'信息'}"></three-title>
        <iframe :src="src" frameborder="0" width="100%" height="100%"></iframe>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            pullIndex: undefined,
            loadData: ''
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
    // this.getLoad(this.leftInfo.cardNo, this.userInfo.as_cardNo)
        this.src = 'https://hr.rxjy.com/Recruit/ZPPin/PersonnelInfoLin?card_no=' + this.leftInfo.cardNo + '&loginCardNo=' + this.userInfo.as_cardNo + '&plate=1&pagetype=103'
    },
    mounted () {
    },
    methods: {
    // getLoad (orderno, loginCardNo) {
    //     this.$axios.get('https://hr.rxjy.com/Recruit/ZPPin/PersonnelInfoLin?card_no=' + orderno + '&loginCardNo=' + loginCardNo + '&plate=1&pagetype=103').then((result) => {
    //         this.loadData = result.data
    //     })
    // }
    },
    watch: {
    }
}
</script>
