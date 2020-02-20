<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name: '拍照'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
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
import { getImgStatisticsByPoi, getImgListByDate } from '../../Resources/Api/index'
export default {
    data () {
        return {
            photoList: [], // 拍照信息列表
            photoTime: '',
            photoImgAry: [],
            cameraId: '' // 摄像头编号
        }
    },
    created () {
        this.cameraId = this.$route.query.cameraId
        this._getImgStatisticsByPoiFn()
    },
    methods: {
        /* 按点位查询拍摄的照片按天统计 */
        _getImgStatisticsByPoiFn () {
            let params = {
                camera: this.cameraId
            }
            getImgStatisticsByPoi(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.photoList = result.data.Body.orderList
                    this.photoList.forEach((item, index) => {
                        this.getImgListByDate(item.create_date, index)
                    })
                }
            }).catch((err) => {
                console.log(`按点位查询拍摄的照片按天统计接口错误,错误内容${err}`)
            })
        },
        /* 按点位和时间查询当天拍摄的照片详情 */
        getImgListByDate (createDate, index) {
            let params = {
                camera: this.$route.query.cameraId, // 监控编号
                create_date: createDate// 创建时间：格式：yyyy-MM-dd
            }
            getImgListByDate(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.$set(this.photoList[index], 'imgUrlAry', result.data.Body.orderList)
                }
            }).catch((err) => {
                console.log(`按点位和时间查询当天拍摄的照片详情接口错误,错误内容${err}`)
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
        $route () {
            this.cameraId = this.$route.query.cameraId
            this._getImgStatisticsByPoiFn()
        }
    }
}
</script>
