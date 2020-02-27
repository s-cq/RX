<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'品德'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div>
            <div class="analyItem" >
                <p class="analyItemTit tx-center">人品</p>
                <div class="analyItemCon">
                    <p class="col-md-12 mb20">
                        <el-checkbox-group v-model="checkListPeople">
                            <el-checkbox label="1" data-title="待人诚恳，能宽容，不刻薄">厚道</el-checkbox>
                            <el-checkbox label="2" data-title="讲究言必行，信必果">守信</el-checkbox>
                            <el-checkbox label="3" data-title="有容乃大容纳不同的想法">格局</el-checkbox>
                            <el-checkbox label="4" data-title="实事求是，绝不可弄虚作假">务实</el-checkbox>
                            <el-checkbox label="5" data-title="虚心请假，不恃才傲物">谦虚</el-checkbox>
                            <el-checkbox label="6" data-title="坚持真理，遇到问题要有自己的见解">原则</el-checkbox>
                            <el-checkbox label="7" data-title="认准的事，干方百计把它完成好">执著</el-checkbox>
                        </el-checkbox-group>
                    </p>
                    <p class="col-md-12">
                        <span class="cLightGray pr8 col-md-1">备注:</span>
                        <span class="col-md-8">
                         <el-input  v-model="inputPeople" placeholder="输入备注"></el-input>
                        </span>
                    </p>
                </div>
            </div>
            <div class="analyItem" >
                <p class="analyItemTit tx-center">管品</p>
                <div class="analyItemCon">
                    <p class="col-md-12 mb20">
                        <el-checkbox-group v-model="checkListGuan">
                            <el-checkbox label="1" >原则性</el-checkbox>
                            <el-checkbox label="2" >责任心</el-checkbox>
                            <el-checkbox label="3" >团队意识</el-checkbox>
                            <el-checkbox label="4" >人格魅力</el-checkbox>
                        </el-checkbox-group>
                    </p>
                    <p class="col-md-12">
                        <span class="cLightGray pr8 col-md-1">备注:</span>
                        <span class="col-md-8">
                         <el-input  v-model="inputGuan" placeholder="输入备注"></el-input>
                        </span>
                    </p>
                </div>
            </div>
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
            checkListPeople: ['1', '2'],
            inputPeople: '',
            checkListGuan: ['1', '2'],
            inputGuan: ''
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
