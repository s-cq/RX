<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【处理版块】详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">合同</p>
            <div class="analyItemCon">
                    <span style="color:red;font-weight:bolder">未确认</span>
                    <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">成本</p>
            <div class="analyItemCon">
                    <span style="color:red;font-weight:bolder">未确认</span>
                    <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">人工</p>
            <div class="analyItemCon">
                    <span style="color:red;font-weight:bolder">未确认</span>
                    <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">材料</p>
            <div class="analyItemCon">
                    <span style="color:red;font-weight:bolder">未确认</span>
                    <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">分项账</p>
            <div class="analyItemCon">
                    <span style="color:red;font-weight:bolder">未确认</span>
                    <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">盈余账</p>
            <div class="analyItemCon">
                    <span style="color:red;font-weight:bolder">未确认</span>
                    <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon"></div>
        </div>
        <div class="clearfix">
            <div class="col-md-7 fl">
                <div class="clearfix">
                    <ul class="handle-ul mt5">
                        <li :class="{'current':title==0}" @click="changeTitile(0)">正常</li>
                        <li :class="{'current':title==1}" @click="changeTitile(1)">甲方</li>
                        <li :class="{'current':title==2}" @click="changeTitile(2)">乙方</li>
                        <li :class="{'current':title==3}" @click="changeTitile(3)">其他</li>
                    </ul>
                </div>
                <div class="clearfix">
                    <ul v-if="title == 0" class="handle-ul mt5">
                        <li :class="{'current':secondTitle==0}" @click="changeSecondTitile(0)">正常跟进</li>
                    </ul>
                    <ul v-if="title == 1" class="handle-ul mt5">
                        <li :class="{'current':secondTitle==0}" @click="changeSecondTitile(0)">未定</li>
                        <li :class="{'current':secondTitle==1}" @click="changeSecondTitile(1)">物业</li>
                        <li :class="{'current':secondTitle==2}" @click="changeSecondTitile(2)">延施</li>
                        <li :class="{'current':secondTitle==3}" @click="changeSecondTitile(3)">消空</li>
                        <li :class="{'current':secondTitle==4}" @click="changeSecondTitile(4)">交房</li>
                        <li :class="{'current':secondTitle==5}" @click="changeSecondTitile(5)">退单</li>
                    </ul>
                    <ul v-if="title == 2" class="handle-ul mt5">
                        <li  :class="{'current':secondTitle==0}" @click="changeSecondTitile(0)">回款</li>
                        <li :class="{'current':secondTitle==1}" @click="changeSecondTitile(1)">方案</li>
                        <li :class="{'current':secondTitle==2}" @click="changeSecondTitile(2)">未施工</li>
                    </ul>
                    <ul v-if="title == 3" class="handle-ul mt5">
                        <li :class="{'current':secondTitle==0}" @click="changeSecondTitile(0)">其他</li>
                    </ul>
                </div>
                <div class="pr10">
                    <textarea placeholder="审计&准备阶段回访格式
1，项目首期款未回款原因处理方法和和时间节点；
2，开工准备项目的实际状态和具体的开工时间。" class="evaluate-textarea"></textarea>
                </div>
            </div>
            <div class="col-md-5 fl operate-bottomDiv EventBanner operate-bottomR pt20 pl10 relative" style="overflow: hidden;">
                     <div class="pt10 tx-center" style="padding:96px 0 10px;">
                       <input type="button" class="uiBtn-normal uiBtn-blue" value="提交">
                       <input type="button" class="uiBtn-normal uiBtn-blue" value="提交">
                     </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            title: 0,
            secondTitle: 0,
            fourIndex: undefined,
            src: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1556070802NRnhKTB5GG.png'
        }
    },
    created () {
        console.log(this.$route)
    },
    methods: {
        changeTitile (val) {
            this.title = val
        },
        changeSecondTitile (val) {
            this.secondTitle = val
        },
        clickFourShow (index) {
            this.fourIndex = index
        }
    }
}
</script>
<style lang="scss" scoped>
    .orderDetailBtn {
       background: #43ccec;
        color: #fff;
        display: block;
        width: 60px;
        border-radius: 4px;
        margin: 0 auto;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
    }
    .staticSRyle {
        width: 25px;
        line-height: 25px!important;
        top: 2px;
        left: 2px;
        background: #000;
        opacity: .6;
        height: 25px;
        position: absolute;
        border-radius: 5px;
        color: #fff;
        text-align: center;
    }
    .operate-bottomR {
    border-left: 5px solid #f1f1f1;
}
.evaluate-textarea {
    width: 100%;
    height: 66px;
    padding: 4px 8px;
    overflow: auto;
    line-height: 20px;
    padding: 4px 8px;
    border-radius: 3px;
    vertical-align: middle;
}
</style>
