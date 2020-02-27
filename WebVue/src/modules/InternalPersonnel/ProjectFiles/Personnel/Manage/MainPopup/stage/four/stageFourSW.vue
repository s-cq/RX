<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'思维'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div>
            <div class="analyItem" >
                <p class="analyItemTit tx-center">思维</p>
                <div class="analyItemCon">
                    <p class="col-md-12 mb20">
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox label="1" data-title="对事物甲乙分析，从中抽象出共同的属性或特征加以归纳" >分析性</el-checkbox>
                            <el-checkbox label="2" data-title="凭借知识、经验对客观事物进行的间接的反应" >理论性</el-checkbox>
                            <el-checkbox label="3" data-title="有一定的形式、方法，并按着一定的规律进行" >逻辑性</el-checkbox>
                            <el-checkbox label="4" data-title="善于深入地思考问题，抓住事物的规律和本质，预见事物的发展进程" >深究性</el-checkbox>
                            <el-checkbox label="5" data-title="从不同角度、方向、方面，能用多种方法来解决问题" >灵活性</el-checkbox>
                            <el-checkbox label="6" data-title="独立思考创造出有价值的、具有新颖性成分的产物" >创新性</el-checkbox>
                            <el-checkbox label="7" data-title="能够适应迫切的情况来积极地思维，周密地考虑，正确地判断和迅速地作出结论" >敏捷性</el-checkbox>
                        </el-checkbox-group>
                    </p>
                    <p class="col-md-12">
                        <span class="cLightGray pr8 col-md-1">备注:</span>
                        <span class="col-md-8">
                         <el-input  v-model="input" placeholder="输入备注"></el-input>
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
            input: '',
            checkList: ['1', '2']
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
