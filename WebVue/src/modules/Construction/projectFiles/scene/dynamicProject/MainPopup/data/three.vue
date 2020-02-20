<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'在施'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">安全教育</p>
            <div class="analyItemCon">
               <rx-upload
                    :data="{id: 11}"
                    :init="{class: 1, mime: 1}"
                    :elStyle="{width:'140px', height: '170px'}"
                    @success="successUpload">
                    <div class="fl uiImgUpload uiImgUpload-gblock mr10">
                        <a href="javascript:">
                            <span type="file" value="" class="file"></span>
                            <em class="bgIcon file-ico"></em>
                        </a>
                    </div>
                </rx-upload>
                <div class="fl ml10">
                    <a href="/Scene/PrintData?attrModelId=9&amp;orderNo=20-206878" class="cBlue" target="_blank">样本</a>
                </div>
                <span class="circlemark circlemark-lightGreen">完</span>
                <div class="judge-divFour mr20">
                    <input type="text" class="judge-span judge-yes">
                    <input type="text" class="judge-span judge-no active">
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">总数</span>
                    <span class="fw700 ">14</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">打印次数</span>
                    <span class="fw700 cGreen">0</span>
                </p>
                <p class="col-md-4">
                    <input type="button" value="批量打印" class="uiBtn-normal uiBtn-blue batchprintbtn">
                </p>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    data () {
        return {
            fourIndex: undefined
        }
    },
    created () {
    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
        },
        successUpload (value) {
            // do what ...
            console.log(value)
            /**
             * data: {id: 11}
             * init: {class: 1, mime: 1}
             * src: "https://rxjy-test.oss-cn-beijing.aliyuncs.com/ProjectBusiness/Images/1562402405N9k4EByCdHMAx4hBzbwxd2Nr.jpg"
             */
        }
    }
}
</script>

