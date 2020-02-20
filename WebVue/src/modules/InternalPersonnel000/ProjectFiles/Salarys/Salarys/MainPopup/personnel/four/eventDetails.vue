<template>
    <div class="layerRtb layerRtb-threecolumn layerRtb-right">
        <!-- 四段 闫传强 -->
        <three-title :title="{name:'事件详情'}" :close="false">
            <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
        </three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem" v-for="(item,index) in body" :key="index">
                <p class="analyItemTit tx-center">消息</p>
                <div class="analyItemCon">
                    <p class="fl col-md-3"><span class="cLightGray pr8">类型</span><span>{{item.group == '1'?'薪酬':item.group == '2'?'奖罚':'业务'}}</span></p>
                    <p class="fl col-md-3"><span class="cLightGray pr8">渠道</span> <span>{{item.title == null ? '--' : item.title}}</span></p>
                    <p class="fl col-md-3"><span class="cLightGray pr8"></span><span class="c333">{{item.create_date}}</span></p>
                    <p class="fl col-md-3"><span class="cLightGray pr8">￥</span><span>{{item.reward_money}}</span></p>
                    <p class="fl col-md-11"><span class="cLightGray pr8">内容</span> <span>{{item.txt}}</span></p>
                    <p class="fl col-md-3"><span class="cLightGray pr8">发起人</span> <span>{{item.initiator_name}}</span></p> <a href="javascript:" class="circlemark circlemark-green">已</a>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { getUserNoticeDetail } from '../../../Resources/Api'
import { mapGetters } from 'vuex'
export default {
    props: ['type'],
    data () {
        return {
            body: {},
            YW_BYCnt: 0,
            YW_BYWDCnt: 0,
            XC_BYCnt: 0,
            XC_BYWDCnt: 0,
            SJ_BYCnt: 0,
            SJ_BYWDCnt: 0,
            group: 0,
            state: 0
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.load()
        this.loadEventDetails()
    },
    methods: {
        load () {

        },
        loadEventDetails () {
            getUserNoticeDetail({
                CardNo: this.leftInfo.u_kahao,
                group: this.type,
                isapp: 5
            }).then(result => {
                this.body = result.data.Body
            })
        }

    }

}

</script>
