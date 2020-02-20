<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <div class="circlemark-vertical">
                    <span class="circlemark circlemark-lightRed">未</span>
                    <span class="circlemark circlemark-purple">待</span>
                </div>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <div class="analyItem">
            <p class="analyItemTit tx-center analyGreen">预留</p>
            <div class="analyItemCon">
                <div class="circlemark-horizontal">
                    <span class="circlemark circlemark-purple">待</span>
                    <span class="circlemark circlemark-lightRed">未</span>
                </div>
                <div class="fixedTrangle">
                    <span href="javascript:" class="fixedtips"></span>
                    <div class="fixedtipscon pt10 pb10" style="display: none;">
                        <span class="dis-il-block">绿色： 已完成</span> <br/>
                        <span class="dis-il-block">灰色： 待完成</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center analyShallowGreen">预留</p>
            <div class="analyItemCon">
                <span class="circlemark circlemark-green">优</span>
                <div class="fixedTrangle">
                    <span href="javascript:" class="fixedtips"></span>
                    <div class="fixedtipscon pt10 pb10" style="display: none;">
                        <span class="dis-il-block">绿色： 已完成</span> <br/>
                        <span class="dis-il-block">灰色： 待完成</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center analyLightGreen">预留</p>
            <div class="analyItemCon">
                <p class="fl col-md-4"><span class="cLightGray pr8">录入</span><span>2017-07-24</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">回访</span><span>18次</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">录入</span><span>2017-07-24</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">回访</span><span>18次</span></p>
                <span class="circlemark circlemark-lightGreen">良</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center analyRed">预留</p>
            <div class="analyItemCon">
                <p class="fl col-md-4"><span class="cLightGray pr8">录入</span><span>2017-07-24</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">回访</span><span>18次</span></p>
                <p class="fl col-md-12 cRed">
                    <span class="cLightGray pr8 cRed">问题</span>
                    <span class="">职务、工作年限、商圈</span>
                </p>
                <span class="circlemark circlemark-yellow">待</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center analyBlue">预留</p>
            <div class="analyItemCon">
                <p class="fl col-md-4"><span class="cLightGray pr8">录入</span><span>2017-07-24</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">回访</span><span>18次</span></p>
                <p class="fl col-md-12 cRed">
                    <span class="cLightGray pr8 cRed">问题</span>
                    <span class="">职务、工作年限、商圈</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center analyOrange">预留</p>
            <div class="analyItemCon">
                <p class="fl col-md-4"><span class="cLightGray pr8">录入</span><span>2017-07-24</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">回访</span><span>18次</span></p>
                <p class="fl col-md-12 cRed">
                    <span class="cLightGray pr8 cRed">问题</span>
                    <span class="">职务、工作年限、商圈</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center analyGray">预留</p>
            <div class="analyItemCon">
                <p class="fl col-md-4"><span class="cLightGray pr8">录入</span><span>2017-07-24</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">回访</span><span>18次</span></p>
                <p class="fl col-md-12 cRed">
                    <span class="cLightGray pr8 cRed">问题</span>
                    <span class="">职务、工作年限、商圈</span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: '',
    data () {
        return {

        }
    }
}
</script>
