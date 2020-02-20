<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'设置'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">编号</p>
            <div class="analyItemCon">
                289
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">名片</p>
            <div class="analyItemCon">
                <p class="fl col-md-6"><span class="cLightGray pr8">&nbsp;&nbsp;&nbsp;类</span><span><input type="text" value="专项" placeholder="请输入工艺名称"></span></p>
                <p class="fl col-md-6"><span class="cLightGray pr8">科目</span><span><input type="text" value="实木栏板及扶手" placeholder="请输入工艺名称"></span></p>
                <p class="fl col-md-6 mt5"><span class="cLightGray pr8">子目</span><span><input type="text"  value="供应及安装" placeholder="请输入工艺名称"></span></p>
                <p class="fl col-md-6 mt5"><span class="cLightGray pr8">工艺</span><span><input type="text"  value="实木栏板及扶手" placeholder="请输入工艺名称"></span></p>
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
            <p class="analyItemTit tx-center">工艺介绍</p>
            <div class="analyItemCon">
                <textarea class=" col-md-12" placeholder="请输入工艺介绍">按照施工图进行放线，按栏板或栏杆底面的斜度，预制木扶手预装由上而下进行，先预装起步弯头，及连接第一步扶手的折弯弯头，进行分段预装，分段预装检查无误对扶手和栏杆上固定件，固定间距控制在16cm以内。</textarea>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">使用要求</p>
            <div class="analyItemCon">
                <textarea class=" col-md-12" placeholder="请输入工艺介绍">按照施工图进行放线，按栏板或栏杆底面的斜度，预制木扶手预装由上而下进行，先预装起步弯头，及连接第一步扶手的折弯弯头，进行分段预装，分段预装检查无误对扶手和栏杆上固定件，固定间距控制在16cm以内。</textarea>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">验收标准</p>
            <div class="analyItemCon">
                <textarea class=" col-md-12" placeholder="请输入工艺介绍">按照施工图进行放线，按栏板或栏杆底面的斜度，预制木扶手预装由上而下进行，先预装起步弯头，及连接第一步扶手的折弯弯头，进行分段预装，分段预装检查无误对扶手和栏杆上固定件，固定间距控制在16cm以内。</textarea>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">工种</p>
            <div class="analyItemCon">
               <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value"  :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
         <div class="analyItem">
            <p class="analyItemTit tx-center">施工</p>
            <div class="analyItemCon">
                <div class="relative textAreaBox ml5 fl" v-for="(item, index) in inputList" :key="index">
                    <input type="text"  class="pr8 SteNameClass" style="vertical-align: middle">
                    <el-button type="danger" icon="el-icon-delete" circle size="mini" data-title="删除" @click='delect(index)'></el-button>
                </div>
            </div>
            <el-button type="primary" icon="el-icon-plus" circle size="mini" data-title="添加工艺" @click="addInput()" style="position:relative;top:20px"></el-button>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem center">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <input type="button" class="uiBtn-normal uiBtn-blue" value="删除">
                 <input type="button" class="uiBtn-normal uiBtn-blue" value="提交">
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
            options: [
                {
                    value: '木工',
                    label: '木工'
                },
                {
                    value: '瓦工',
                    label: '瓦工'
                },
                {
                    value: '油工',
                    label: '油工'
                },
                {
                    value: '搬运工',
                    label: '搬运工'
                }],
            value: '',
            inputList: [{content: ''}]
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
