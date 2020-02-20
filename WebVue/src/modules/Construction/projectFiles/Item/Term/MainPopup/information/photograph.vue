<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name: '拍照'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">拍照</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cRed">手动拍照,供测试用,正常会按照拍照设置执行。</span>
                </p>
                <p class="col-md-2 fr">
                    <el-button type="primary" @click="_addManualCaptureFn">拍照</el-button>
                </p>
            </div>
        </div>
        <div class="analyItem" v-for="(item, index) in photoList" :key="index">
            <p class="analyItemTit tx-center">第{{ photoList.length - index }}天</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">拍摄张数</span><span>{{ item.tot }}张</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">拍摄时间</span><span>{{ item.create_date }}</span>
                </p>
                <p class="col-md-4 tx-right">
                    <rx-viewer :images="item.imgUrlAry" :options="{}">
                        <img v-for="(list, ind) in item.imgUrlAry" :key="ind" :src="list.img_url" alt="" v-show="false">
                        <a href="javascript:" class="enlarge_link enlarge_viewer cBlue">详情</a>
                    </rx-viewer>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer" style="padding-bottom: 1px;">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">天数</span><span>{{ photoList.length }}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">照片个数</span><span>{{ photoCount }}</span></p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
// vuex
import { mapGetters } from 'vuex'

// Api
import { getImgStatisticsByPoi, getImgListByDate, addManualCapture } from '../../Resources/Api/index'
export default {
    data () {
        return {
            photoList: [], // 拍照信息列表
            photoTime: '',
            photoImgAry: []
        }
    },
    created () {
        this._getImgStatisticsByPoiFn()
    },
    methods: {
        /* 按点位查询拍摄的照片按天统计 */
        _getImgStatisticsByPoiFn () {
            let params = {
                camera: this.$route.query.pointId
            }
            getImgStatisticsByPoi(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.photoList = result.data.Body.orderList
                    this.photoList.forEach((item, index) => {
                        this._getImgListByDateFn(item.create_date, index)
                    })
                }
            }).catch((err) => {
                console.log(`按点位查询拍摄的照片按天统计接口错误,错误内容${err}`)
            })
        },
        /* 按点位和时间查询当天拍摄的照片详情 */
        _getImgListByDateFn (createDate, index) {
            let params = {
                camera: this.$route.query.pointId, // 监控编号
                create_date: createDate// 创建时间：格式：yyyy-MM-dd
            }
            getImgListByDate(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.$set(this.photoList[index], 'imgUrlAry', result.data.Body.orderList)
                }
            }).catch((err) => {
                console.log(`按点位和时间查询当天拍摄的照片详情接口错误,错误内容${err}`)
            })
        },
        /* 根据监控点抓拍图片 */
        _addManualCaptureFn () {
            let params = {
                'camera': this.twoToThreeInfo.camera, // 监控点编号
                'region': this.leftInfo.region_id, // 地区编号
                'orderNo': this.leftInfo.order_no, // 单号
                'poiId': this.twoToThreeInfo.id // 点位
            }
            addManualCapture(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.$message({
                        type: 'success',
                        message: '抓拍成功'
                    })
                    this._getImgStatisticsByPoiFn()
                } else {
                    this.$message({
                        type: 'error',
                        message: result.data.StatusMsg
                    })
                }
            }).catch((err) => {
                console.log(`根据监控点抓拍图片接口错误,错误内容${err}`)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'twoToThreeInfo']),
        photoCount () {
            let count = 0
            this.photoList.forEach(item => {
                count += item.tot
            })
            return count
        }
    },
    watch: {
        photoTime () {
            this._getImgListByDateFn()
        }
    }
}
</script>
