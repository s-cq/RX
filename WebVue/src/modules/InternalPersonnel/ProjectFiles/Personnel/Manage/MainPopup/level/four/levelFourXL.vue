<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'学历'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div>
            <div class="analyItem" >
                <p class="analyItemTit tx-center">学历</p>
                <div class="analyItemCon">
                    <p class="col-md-12 mb20">
                        <el-radio-group v-model="radio">
                            <el-radio :label="1" >硕士</el-radio>
                            <el-radio :label="2" >重本</el-radio>
                            <el-radio :label="3" >普本</el-radio>
                            <el-radio :label="4" >专科</el-radio>
                        </el-radio-group>
                    </p>
                    <p class="col-md-12">
                        <span class="cLightGray pr8 col-md-1">备注:</span>
                        <span class="col-md-8">
                            <!-- type="textarea" autosize  -->
                         <el-input  v-model="inputXue" placeholder="输入备注"></el-input>
                        </span>
                    </p>
                </div>
            </div>
            <div class="analyItem" >
                <p class="analyItemTit tx-center">专业</p>
                <div class="analyItemCon">
                    <p class="col-md-12">
                        <span class="cLightGray pr8">预留</span>
                    </p>
                    <p class="col-md-12">
                        <span class="cLightGray pr8 col-md-1">备注:</span>
                        <span class="col-md-8">
                         <el-input v-model="inputZhuan" placeholder="输入备注"></el-input>
                        </span>
                    </p>
                </div>
            </div>
            <!-- <div class="analyItem" >
                <p class="analyItemTit tx-center">备注</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">预留</span>
                    </p>
                </div>
            </div> -->
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <el-button class="fr" type="primary">提交</el-button>
            </div>
        </div>
    </div>

</div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {

    data () {
        return {
            radio: 1,
            inputXue: '',
            inputZhuan: ''
        }
    },

    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
    },
    methods: {
    },
    watch: {
        leftInfo () {
        },
        $route () {
        }
    }
}
</script>
