<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'投诉'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">类型</p>
            <div class="analyItemCon">
                <el-radio-group v-model="typeValue">
                    <el-radio :label="item.spTypeId" v-for="(item,index) of typeArray" :key="index" @change="findTypeSubjectExecute(2)">{{item.spTypeName}}</el-radio>
                </el-radio-group>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">科目</p>
            <div class="analyItemCon">
                <el-radio-group v-model="projectValue">
                      <el-radio :label="item.spSubjectId" v-for="(item,index) of projectArray" :key="index" @change="findTypeSubjectExecute(3)">{{item.spSubjectName}}</el-radio>
                </el-radio-group>
            </div>
        </div>
         <div class="analyItem">
            <p class="analyItemTit tx-center">级别</p>
            <div class="analyItemCon">
                <el-radio-group v-model="levelValue" >
                    <el-radio :label="item.executeLevel" v-for="(item,index) of levelArray" :key="index">{{item.executeLevelNameShow}}</el-radio>
                </el-radio-group>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">描述</p>
            <div class="analyItemCon">
                <textarea class="col-md-10 h80" v-model="desValue" placeholder="为了更好的解决问题,请您输入详细情况"></textarea>
            </div>
        </div>
         <div class="analyItem">
            <p class="analyItemTit tx-center">上传图片</p>
            <div class="analyItemCon">
                <rx-viewer :images="imgData" class="fl ml10">
                    <div class="clearfix">
                        <div v-for="(item, index) of imgData" :key="index" class="fl mr10">
                            <img :src="item | smallImg(78, 78)" :alt="index">
                        </div>
                    </div>
                </rx-viewer>
                <rx-upload
                    class="fl"
                    :data="{id: 11}" :init="{class: 1, mime: 1}"
                    :elStyle="{width:'90px', height: '80px'}"
                    @success="successUpload">
                    <div class="fl uiImgUpload uiImgUpload-gblock mr10">
                        <a href="javascript:">
                            <span type="file" value="" class="file"></span>
                            <em class="bgIcon file-ico"></em>
                        </a>
                    </div>
                </rx-upload>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <div class="tx-center">
                    <input type="button" class="uiBtn-normal uiBtn-blue" value="提交" @click="submitDate()">
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { findTypeSubjectExecute, insertSpSolveTheProblem } from '../../Resources/Api/customer'
export default {
    data () {
        return {
            imgData: [], // 图片数组
            typeArray: [], // 类型数组
            typeValue: '', // 类型value
            projectArray: [], // 科目数组
            desValue: '', // 描述内容
            projectValue: '', // 科目value
            levelArray: [], // 级别数组
            levelValue: '' // 级别value
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.findTypeSubjectExecute(1)
    },
    methods: {
        // 获取类型
        findTypeSubjectExecute (type) {
            let parm = {}
            switch (type) {
            case 1:
                parm = {
                    sbeType: type
                }
                break
            case 2:
                parm = {
                    sbeType: type,
                    spTypeId: this.typeValue
                }
                break
            case 3:
                parm = {
                    sbeType: type,
                    spTypeId: this.typeValue,
                    spSubjectId: this.projectValue
                }
                break
            default:
                parm = {
                    sbeType: type
                }
                break
            }
            findTypeSubjectExecute(parm).then((results) => {
                if (results.data.statusCode === 1) {
                    if (type === 1) {
                        this.typeArray = results.data.body
                        this.typeValue = this.typeArray[0].spTypeId
                        this.findTypeSubjectExecute(2)
                    } else if (type === 2) {
                        this.projectArray = results.data.body
                        this.projectValue = this.projectArray[0].spSubjectId
                        this.findTypeSubjectExecute(3)
                    } else if (type === 3) {
                        this.levelArray = results.data.body
                        this.levelValue = this.levelArray[0].executeLevel
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 上传图片
        successUpload (value) {
            this.imgData.push(value.src)
        },
        // 提交数据
        submitDate () {
            let subject = {}
            subject.spSubjectId = this.projectValue
            subject.orderLevel = this.levelValue
            let subjectExecuteList = []
            subjectExecuteList.push(subject)
            if (subjectExecuteList.length === 0) {
                this.$message('至少选择一项')
            } else {
                let parm = {
                    projectId: this.leftInfo.orderno,
                    feedbackContent: this.desValue,
                    feedbackImgs: this.imgData.join(','),
                    subjectExecuteList: subjectExecuteList
                }
                insertSpSolveTheProblem(JSON.stringify(parm)).then((results) => {
                    if (results.data.statusCode === 1) {
                        this.$message('投诉提交成功')
                    }
                }).catch((error) => {
                    console.log(error)
                })
            }
        }
    }
}
</script>
