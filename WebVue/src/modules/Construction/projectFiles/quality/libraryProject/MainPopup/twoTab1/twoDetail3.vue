<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'工序详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">名称</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <input type="text"  value="名称" placeholder="请输入名称">
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">图片</p>
            <div class="analyItemCon">
                <rx-viewer :images="data" class="fl">
                    <div class="clearfix">
                        <div class="col-md-4" v-for="(item, index) of data" :key="index">
                            <img :src="item | smallImg(80, 80)" :alt="index">
                        </div>
                    </div>
                </rx-viewer>
                <rx-upload  :data="{id: 11}" :init="{class: 1, mime: 1}"  class="fl ml10"
                    :elStyle="{width:'90px', height: '80px'}"
                    @success="successUpload">
                    <div class="fl uiImgUpload uiImgUpload-gblock mr10">
                        <a href="javascript:">
                            <span type="file" value="" class="file"></span>
                            <em class="bgIcon file-ico"></em>
                        </a>
                    </div>
                </rx-upload>
                <span class="circlemark circlemark-lightGreen">完</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">描述</p>
            <div class="analyItemCon">
                <p class="col-md-12">
                    <textarea class="col-md-12" placeholder="请输入工艺介绍">按照施工图进行放线，按栏板或栏杆底面的斜度，预制木扶手预装由上而下进行，先预装起步弯头，及连接第一步扶手的折弯弯头，进行分段预装，分段预装检查无误对扶手和栏杆上固定件，固定间距控制在16cm以内。</textarea>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">阶段</p>
            <div class="analyItemCon">
               <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value"  :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <div class="tx-center">
                    <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
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
            data: [],
            inputList: [{content: ''}],
            options: [
                {
                    value: '准备',
                    label: '准备'
                },
                {
                    value: '施前',
                    label: '施前'
                },
                {
                    value: '施中',
                    label: '施中'
                },
                {
                    value: '施尾',
                    label: '施尾'
                },
                {
                    value: '竣工',
                    label: '竣工'
                }],
            value: ''
        }
    },
    created () {
        setTimeout(() => {
            this.data = [
                'http://wenes01.oss-cn-beijing.aliyuncs.com/Project/Image/2017/10/20/14291087049232.jpg'
            ]
        }, 1000)
    },
    methods: {
        addInput () {
            let addData = {content: ''}
            this.inputList.push(addData)
        },
        successUpload (value) {
            console.log(value)
        }
    }
}
</script>
