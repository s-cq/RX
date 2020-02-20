<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'发起投诉'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137" >
        <div class="analyItem">
            <p class="analyItemTit tx-center"></p>
            <div class="analyItemCon">
                <div class="col-md-12 flex">
                    <label class="fl mr10 cLightGray pr8 label"> 投诉内容</label>
                    <textarea value="" class="textArea"></textarea>
                </div>
                <div class="col-md-12 mt10">
                    <label class="fl mr10 cLightGray pr8 label"> 投诉图片</label>
                </div>
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
import { mapGetters, mapMutations } from 'vuex'
// import { getinspectionData, saveInspection } from '../../../../Resources/Api/scene'
export default {
    props: ['type', 'role'],
    data () {
        return {

        }
    },
    created () {
        this.buttonType()
    },
    computed: {
        ...mapGetters(['leftInfo', 'twoToThreeInfo', 'updatePlate'])
    },
    methods: {
        ...mapMutations({
            setUpDatePlate: `SET_UPDATE_PLATE`
        }),
        // 判断按钮是否显示
        buttonType () {
            if (this.twoToThreeInfo.status === this.type) {
                this.buttonIsShow = true
            } else {
                this.buttonIsShow = false
            }
            // if (Number(this.getCookie('u_diqu')) === 39) {
            //    this.buttonIsShow = true
            // } else {
            //     if (juesename) {
            //         if (currentRole === 6) {
            //             $("#submit .uiBtn-normal").show()
            //         }
            //     } else if ('@currentUser.Level' == '82' || '@currentUser.Level' == '83') {
            //         if (currentRole === 3) {
            //             $("#submit .uiBtn-normal").show();
            //         }
            //     }
            // }
        },
        // 获取cookie
        getCookie (name) {
            let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            if ((arr = document.cookie.match(reg))) { return unescape(arr[2]) } else { return null }
        }
    }
}
</script>
<style lang="scss">
    .label {
        display:flex;
        align-items:center
    }
    .textArea {
        resize:auto;
        width:60%;
        max-height:200px;
    }
</style>
