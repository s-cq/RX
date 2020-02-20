<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'职务'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem">
                <p class="analyItemTit tx-center">名片</p>
                <div class="analyItemCon pr10">
                    <span><img :src="user.image"
                            height="80" width="60" class="imageClassThree"></span>
                </div>
                <div class="analyItemCon col-md-10">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">姓名</span>
                        <span class="pNameThree">{{user.userName}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">卡号</span>
                        <span class="pCardNoThree">{{user.appCardNo}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8 ">年龄</span>
                        <span class="ageClass">{{user.age}}</span>
                    </p>


                    <p class="col-md-4">
                        <span class="cLightGray pr8">工龄</span>
                        <span class="pSeniorityThree">{{user.workingYears}}月</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">签约</span>
                        <span class="dataTimeClassThree">{{user.workDate | slice(0,10)}}</span>
                    </p>

                    <p class="col-md-4">
                        <span class="cLightGray pr8">级别</span>
                        <span class="rankClassThree">{{user.showLevel}}</span>
                    </p>

                    <p class="col-md-4">
                        <span class="cLightGray pr8">地区</span>
                        <span class="regionClassThree">{{user.region}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">隶属</span>
                        <span class="memberOfClass">{{user.region}}</span>
                    </p>

                    <p class="col-md-4">
                        <span class="cLightGray pr8">职务</span>
                        <span>项目经理</span>
                    </p>
                </div>
                <div class="col-md-2" style="padding-top: 30px;">
                    <img style="width:45px;height: 45px;" alt="二维码" class="QRclassThree"
                        :src="img">
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
import { GetByUIdUserInfo, GetQRCodeUrl } from '../../Resources/Api'
export default {
    data () {
        return {
            user: {},
            img: ''
        }
    },
    created () {
        this.GetByUIdUserInfoFn()
    },
    methods: {
        // 查询指定人员的人事信息
        GetByUIdUserInfoFn () {
            let _this = this
            _this.user = {}
            GetByUIdUserInfo({
                uid: _this.leftInfo.uid
            }).then(results => {
                _this.user = results.data.Body
                _this.GetQRCodeUrlFn()
            }).catch(error => {
                console.log(error)
            })
        },
        // 获取二维码
        GetQRCodeUrlFn () {
            let _this = this
            _this.img = ''
            GetQRCodeUrl({
                url: _this.user.appCardNo
            }).then(results => {
                _this.img = results.data
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
