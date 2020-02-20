<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'权利'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">标题</p>
            <div class="analyItemCon">
                <p class="col-md-5">
                    <el-input
                placeholder="请输入内容"
                    v-model="input"
                clearable>
                    </el-input>
                </p>
                <p class="col-md-5">
                    <span class="cLightGray pr8"></span>
                </p>
                <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self">
                <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="$parent.$parent.clickFourShow()">
            </div>
        </div>
         <div class="analyItem">
            <p class="analyItemTit tx-center">描述</p>
            <div class="analyItemCon">
                <p class="col-md-10">
                  <el-input
                type="textarea"
                    autosize
                    placeholder="请输入内容"
                    v-model="textarea1">
</el-input>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">启动</p>
            <div class="analyItemCon">
                <p class="col-md-2">
                    <el-radio v-model="state" label="1">启动</el-radio>
                </p>
            </div>
        </div>

    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-9"></p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { getUserMarkDetailList
} from '../../../Resources/Api/index'
export default {
    data () {
        return {
            state: '1',
            textarea1: '',
            userMarket: [],
            input: ''
        }
    },
    created () {
        this.GetUserMarkDetail()
    },
    methods: {
        GetUserMarkDetail () {
            let _this = this
            _this.userMarket = []
            getUserMarkDetailList({
                pmUserInfo: { signType: 4,
                    abilityLevel: 10,
                    signFlag: 3
                }
            }).then(results => {
                _this.userMarket = results.data.Body
                console.log(_this.userMarket)
            })
        }
    }
}
</script>
