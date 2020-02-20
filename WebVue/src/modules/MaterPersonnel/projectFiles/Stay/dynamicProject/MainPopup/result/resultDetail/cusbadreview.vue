<template>
  <div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'评价'}" :close="false">
      <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight= "137">
      <div v-if="badReviewInfo!==null && badReviewInfo.length>0">
        <div class="analyItem" v-for="(item,index) in badReviewInfo" :key="index">
          <p class="analyItemTit tx-center">{{item.name}}</p>
          <div class="analyItemCon">
            <p class="col-md-6">
              <el-rate v-model="item.evaluateStar"></el-rate>
            </p>
            <p class="col-md-6">
              <span class="cLightGray pr8">评价日期</span>
              <span>{{item.projectOrderPhotoEntities[0].createTime}}</span>
            </p>
            <div class="clearfix">
              <a
                href="javascript;"
                class="LinkCell fl mr10 mb10 mt10 LinkCellActive"
                v-for="(item,index) in item.projectOrderEvaluateLabelEntityList"
                :key="index"
              >{{item.label}}</a>
            </div>
            <!-- <p class="col-md-3" v-for="(ite,index) in item.projectOrderEvaluateLabelEntityList" :key="index">
                            <label>{{ite.label}}</label>
            </p>-->
            <p class="col-md-12">
              <textarea style="width:80%" rows="2" readonly v-model="item.evaluateContent"></textarea>
            </p>
            <p
              class="col-md-4"
              v-for="(ite,index1) in item.projectOrderPhotoEntities"
              :key="index1"
            >
              <el-image style="width: 100px; height: 100px" :src="ite.orderPhoto" fit="fill"></el-image>
            </p>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="analyItem">
          <p class="analyItemTit tx-center">评价</p>
          <div class="analyItemCon">
            <p class="col-md-12">
              暂无评价
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCustomerBadReviewInfo } from '../../../Resources/Api'
export default {
    props: ['orderCodeList'],
    data () {
        return {
            orderCodes: [],
            value1: null,
            textarea: '',
            url: '',
            badReviewInfo: []
        }
    },
    mounted () {},
    created () {
        if (this.orderCodeList !== null && this.orderCodeList !== '') {
            this.orderCodes = this.orderCodeList
            // this.orderCodes = ['72115b06-7cdc-4eae-9ad0-8237679fe90c', 'd1478e1a-cffa-4d91-8937-485c72fbe2dc']
            this.getBadReviewInfo()
        }
    },
    methods: {
        getBadReviewInfo () {
            let _this = this
            _this.badReviewInfo = []
            getCustomerBadReviewInfo({
                orderCodes: this.orderCodes
            })
                .then(results => {
                    if (results.data.Body) {
                        _this.badReviewInfo = results.data.Body
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>
<style scoped>
.LinkCell {
  background: #f1f1f1;
  padding: 2px 5px;
  border: 1px solid #f1f1f1;
  border-radius: 15px;
}
.LinkCellActive {
  background: #ffeed6;
  color: #ff9600;
  border-color: #ff9600;
}
</style>
