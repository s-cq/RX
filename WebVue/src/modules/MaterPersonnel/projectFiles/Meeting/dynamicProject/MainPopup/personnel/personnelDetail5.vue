<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'通知'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div v-if="record.length>0">
                <div class="analyItem" v-for="(item,index) in record" :key="index">
                    <p class="analyItemTit tx-center wid-back relative" style="background: #fff;"><img
                            :src="item.image" style="width: 55px;">
                            <i class="pos-mun ng-binding ng-scope" v-if="item.notice_count>0">{{item.notice_count}}</i>
                    </p>
                    <div class="analyItemCon clearfix">
                        <p class="fl col-md-12"><span class="fl fz14">{{item.group_name}}</span>
                        <span class="fr" v-if="item.notice_count>0">{{item.create_date}}</span>
                        </p>
                        <p class="fl col-md-12"><span class="cLightGray"
                                style="font-size:12px;">{{item.txt}}</span></p>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="analyItem">
                    <p class="analyItemTit tx-center">记录</p>
                    <div class="analyItemCon">
                        <p class="col-md-12">
                            <span>暂无数据！</span>
                        </p>
                    </div>
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
import {
    mapGetters
} from 'vuex'
import {
    GetAppNoticeGroup
} from '../../Resources/Api'
export default {
    data () {
        return {
            record: []
        }
    },
    created () {
        this.GetAppNoticeGroupFn()
    },
    methods: {
        // 获取人事通知统计数据
        GetAppNoticeGroupFn () {
            let _this = this
            _this.record = []
            GetAppNoticeGroup({
                CardNo: _this.leftInfo.app_cardNo,
                IsApp: 5
            }).then(results => {
                _this.record = results.data.Body
            }).catch(error => {
                console.log(error)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    }
}

</script>
<style scoped>
.pos-mun {
        position: absolute;
        top: 3px;
        right: 3px;
        width: 18px;
        height: 18px;
        background: red;
        border-radius: 50%;
        color: #fff;
        font-size: 12px;
        text-align: center;
        line-height: 18px;
    }
</style>
