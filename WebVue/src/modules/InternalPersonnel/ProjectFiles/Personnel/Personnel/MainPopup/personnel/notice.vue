<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'通知'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div :class="['analyItem', 'anItemBor', fourIndex === 0 ? 'anItemBor-active' : '']" @click="clickFourShow(0,3)" class="analyItem">
                <p class="analyItemTit tx-center">业务</p>
                <div class="analyItemCon">
                    <p class="fl col-md-6"><span class="cLightGray pr8">总数</span><span id="YW_BYCnt">{{YW_BYCnt}}</span></p>
                    <p class="fl col-md-6"><span class="cLightGray pr8">未读</span><span id="YW_BYWDCnt">{{YW_BYWDCnt}}</span></p>
                </div>
            </div>
            <div :class="['analyItem', 'anItemBor', fourIndex === 0 ? 'anItemBor-active' : '']" @click="clickFourShow(0,1)" class="analyItem">
                <p class="analyItemTit tx-center">薪酬</p>
                <div class="analyItemCon">
                    <p class="fl col-md-6"><span class="cLightGray pr8">总数</span><span id="XC_BYCnt">{{XC_BYCnt}}</span></p>
                    <p class="fl col-md-6"><span class="cLightGray pr8">未读</span><span id="XC_BYWDCnt">{{XC_BYWDCnt}}</span></p>
                </div>
            </div>
            <div :class="['analyItem', 'anItemBor', fourIndex === 0 ? 'anItemBor-active' : '']" @click="clickFourShow(0,2)" class="analyItem">
                <p class="analyItemTit tx-center">事件</p>
                <div class="analyItemCon">
                    <p class="fl col-md-6"><span class="cLightGray pr8">总数</span><span id="SJ_BYCnt">{{SJ_BYCnt}}</span>
                    </p>
                    <p class="fl col-md-6"><span class="cLightGray pr8">未读</span><span id="SJ_BYWDCnt">{{SJ_BYWDCnt}}</span></p>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">

                </div>
            </div>
            <!-- <div class="tx-center">
                <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
            </div> -->
        </div>
        <!-- 四段渲染容器 -->
        <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
            <event-Detail v-if="fourIndex === currentIndex" :key='currentIndex' :type='type'></event-Detail>
        </transition-group>
    </div>
</template>
<script>
import { GetAppNoticeGroup } from '../../Resources/Api'
import { mapGetters } from 'vuex'
import eventDetail from './four/eventDetails'
export default {
    components: {
        eventDetail
    },
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
            state: 0,
            fourIndex: undefined,
            currentIndex: 0,
            type: ''
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
            GetAppNoticeGroup({ CardNo: this.leftInfo.cardNo, isapp: 5 })
                .then(result => {
                    this.body = result.data.Body
                    console.log(this.body)
                    for (var i = 0; i < (this.body.length !== null ? this.body.length : 0); i++) {
                        this.group = this.body[i].group// 1  薪酬通知 2、奖罚通知  3、业务通知  4、其它
                        this.state = this.body[i].state// 0未读，1已读
                        switch (this.group) {
                        case '1':
                            this.XC_BYCnt = this.body[i].notice_countSum == null ? 0 : this.body[i].notice_countSum
                            this.XC_BYWDCnt = this.body[i].notice_count == null ? 0 : this.body[i].notice_count
                            break
                        case '2':
                            this.SJ_BYCnt = this.body[i].notice_countSum == null ? 0 : this.body[i].notice_countSum
                            this.SJ_BYWDCnt = this.body[i].notice_count == null ? 0 : this.body[i].notice_count
                            break
                        case '3':
                            this.YW_BYCnt = this.body[i].notice_countSum == null ? 0 : this.body[i].notice_countSum
                            this.YW_BYWDCnt = this.body[i].notice_count == null ? 0 : this.body[i].notice_count
                            break
                        }
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },
        // 点击四段
        clickFourShow (index, type) {
            this.fourIndex = index
            this.currentIndex = index
            this.type = type
        }
    }

}

</script>
