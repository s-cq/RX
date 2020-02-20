<template>
    <div class="layerRtb layerRtb-threecolumn layerRtb-right">
        <three-title :title="{name:'工人详情'}" :close="false">
            <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow1()"></span>
        </three-title>
        <div class="alertBox02 pl10 pr5 threeScroll" style="height: 396px; overflow: hidden; width: auto;" v-scrollHeight="18">

            <div class="analyItem">
                <p class="analyItemTit tx-center">员工姓名</p>
                <div class="analyItemCon">
                    <p class="col-md-3">
                        <span class="pr8 cLightGray" id="worker_name">{{body.worker_name}}</span></p>

                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">员工编号</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="pr8 cLightGray" id="worker_number">{{body.worker_number}}</span></p>

                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">身份证正面</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="pr8 cLightGray" id="id_card_front">
                            <img :src='body.id_card_front' style="width:100px;height:80px" /></span></p>

                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">身份证反面</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="pr8 cLightGray" id="id_card_reverse">
                            <img :src='body.id_card_reverse' style="width:100px;height:80px" /></span></p>

                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">形象照</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="pr8 cLightGray" id="image_photo">
                            <img :src='body.image_photo' style="width:100px;height:80px" /></span></p>
                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">支付宝账号</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="pr8 cLightGray" id="zhiHuBao_account">{{body.zhiHuBao_account}}</span></p>
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
import {
    mapGetters
} from 'vuex'
import {
    getWorkerOneDetail
} from '../../../../Resources/Api'
export default {
    props: ['workerIds'],
    data () {
        return {
            workerId: 0,
            body: {}

        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.workerId = this.workerIds
        console.log('this.workerIds1' + this.workerIds)
        this.getWorkerOneDetailFn()
    },
    methods: {
        getWorkerOneDetailFn () {
            getWorkerOneDetail({
                workerId: this.workerId
            }).then(results => {
                this.body = results.data.Body
            }).catch(error => {
                console.log(error)
            })
        }

    }

}
</script>
