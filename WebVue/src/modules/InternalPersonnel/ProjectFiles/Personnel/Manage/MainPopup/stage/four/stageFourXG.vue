<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'性格'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div>
            <div class="analyItem" >
                <p class="analyItemTit tx-center">性格</p>
                 <div class="analyItemCon">
                    <p class="col-md-4 mb20">
                        <el-radio-group v-model="radio1">
                        <el-radio-button label="1">开朗</el-radio-button>
                        <el-radio-button label="2">谨慎</el-radio-button>
                        </el-radio-group>
                    </p>
                    <p class="col-md-4 mb20">
                        <el-radio-group v-model="radio2">
                        <el-radio-button label="1">感性</el-radio-button>
                        <el-radio-button label="2">理性</el-radio-button>
                        </el-radio-group>
                    </p>
                    <p class="col-md-4 mb20">
                        <el-radio-group v-model="radio3">
                        <el-radio-button label="1">敏感</el-radio-button>
                        <el-radio-button label="2">随和</el-radio-button>
                        </el-radio-group>
                    </p>
                    <p class="col-md-4 mb20">
                        <el-radio-group v-model="radio4">
                        <el-radio-button label="1">细致</el-radio-button>
                        <el-radio-button label="2">粗糙</el-radio-button>
                        </el-radio-group>
                    </p>
                    <p class="col-md-4 mb20">
                        <el-radio-group v-model="radio5">
                        <el-radio-button label="1">活泼</el-radio-button>
                        <el-radio-button label="2">稳重</el-radio-button>
                        </el-radio-group>
                    </p>
                    <p class="col-md-12">
                        <span class="cLightGray pr8 col-md-1">备注:</span>
                        <span class="col-md-8">
                         <el-input  v-model="input" placeholder="输入备注"></el-input>
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
            radio1: '1',
            radio2: '2',
            radio3: '1',
            radio4: '2',
            radio5: '1',
            input: ''
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
