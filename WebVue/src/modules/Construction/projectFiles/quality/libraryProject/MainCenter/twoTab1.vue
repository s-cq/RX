<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>

    <div class="thinScroll pr10" v-scrollHeight="10" >
        <router-link tag="div" :to="routerPath(`twoTab1Twodetail1?${index}`)" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item,index) in processchildlibrarystepClone1"  :key="index">
            <p class="analyItemTit tx-center"> 设置 </p>
            <div class="analyItemCon clearfix" style="display:flex;align-items:center;">
                <div class="col-md-2">
                    <span>编号:{{item.PId}}</span>
                    <rx-viewer :images="data">
                        <div class="clearfix">
                            <!-- <div class="col-md-4" v-for="(item, index) of data" :key="index">
                                <img :src="item | smallImg(60, 60)" :alt="index">
                            </div> -->
                            <img :src="item.StepImg | smallImg(60, 60)" :alt="index">
                        </div>
                    </rx-viewer>
                </div>
                <div style="margin-left:4px;" class="col-md-8">
                    <p>
                        <span>{{item.StepName}}</span>
                    </p>
                    <p>
                        <span :data-title="item.StepContent">{{item.StepContent | truncate(25)}}</span>
                    </p>
                </div>

                <span class="circlemark circlemark-lightGreen" v-if="item.StepImg!='' && item.StepImg!=null">完</span>
                <span class="circlemark circlemark-lightGreen" v-else>未</span>


            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('twoTab1TwoDetail2')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">主案图标</p>
             <div class="analyItemCon clearfix" style="display:flex;align-items:center;">
                <div class="col-md-2">
                    <rx-viewer :images="data1">
                        <div class="clearfix">
                            <div class="col-md-4" v-for="(item, index) of data" :key="index">
                                <img :src=" 'https://rxjy-test.oss-cn-beijing.aliyuncs.com/ProjectBusiness/Images/1563432445M7aEdRDhw8Mi08z2ctXbmyGK.jpg' | smallImg(60, 60)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                </div>
            </div>
        </router-link>

        <router-link v-for="(item,index) in processchildlibrarystepClone2" :key="index" tag="div" :to="routerPath(`twoTab1TwoDetail4?${index}`)" class="analyItem anItemBor" active-class="anItemBor-active" >
            <p class="analyItemTit tx-center">工序{{index+1}}</p>
             <div class="analyItemCon clearfix" style="display:flex;align-items:center;">
                <div class="col-md-2">
                    <rx-viewer :images="data3">
                        <div class="clearfix">
                            <!-- <div class="col-md-4" v-for="(item, index) of data" :key="index">
                                <img :src="item | smallImg(60, 60)" :alt="index">
                            </div> -->
                            <img :src="item.StepImg | smallImg(60, 60)" >
                        </div>
                    </rx-viewer>
                </div>
                <p class="col-md-3 ml5">
                    <span id="spanName">{{item.StepName}}</span>
                </p>
                <p class="col-md-9 ml5">
                    <span class="width180 fl omit" :data-title="item.StepContent" id="spanContent">{{item.StepContent | truncate(25)}}</span>
                </p>
                <span href="javascript:" class="titleFixed">{{item.StepPeriod}}</span>

                <span class="circlemark circlemark-lightGreen" v-if="item.StepImg!='' && item.StepImg!=null">完</span>
                <span class="circlemark circlemark-lightGreen" v-else>未</span>

            </div>
        </router-link>
        <router-link v-for="(item,index) in processchildlibrarystepClone3" :key="index" tag="div" :to="routerPath('twoTab1TwoDetail3')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">竣检</p>
            <div class="analyItemCon clearfix" style="display:flex;align-items:center;">
                <div class="col-md-2">
                    <rx-viewer :images="data2">
                        <div class="clearfix">
                            <!-- <div class="col-md-4" v-for="(item, index) of data" :key="index">
                                <img :src="item.StepImg | smallImg(60, 60)" :alt="index">
                            </div> -->
                            <img :src="item.StepImg | smallImg(60, 60)" :alt="index">
                        </div>
                    </rx-viewer>
                </div>
                <p class="col-md-4 ml5">
                    <span id="spanName">{{item.StepName}}</span>
                </p>
                <p class="col-md-8 ml5">
                    <span class="width180 fl omit" :data-title="item.StepContent" id="spanContent">{{item.StepContent | truncate(25)}}</span>
                </p>

                <span class="circlemark circlemark-lightGreen" v-if="item.StepImg!='' && item.StepImg!=null">完</span>
                <span class="circlemark circlemark-lightGreen" v-else>未</span>

            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { technology } from '../Resources/Api/index'


export default {
    data () {
        return {

            data: [],
            data1: [],
            data2: [],
            data3: [],

            processCode: '',
            processlibrary: [],
            processchildlibrarystep: [],
            processchildlibrarystepClone1: [],
            processchildlibrarystepClone2: [],
            processchildlibrarystepClone3: [],
            processchildlibrary: []
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        setTimeout(() => {
            this.data = [
                'https://proj01.oss-cn-beijing.aliyuncs.com/common/15590980606M7sdkCH5f.png'
            ]
            this.data1 = [
                'https://proj01.oss-cn-beijing.aliyuncs.com/common/15590980606M7sdkCH5f.png'
            ]
            this.data2 = [
                'https://proj01.oss-cn-beijing.aliyuncs.com/common/15590980606M7sdkCH5f.png'
            ]
            this.data3 = [
                'https://proj01.oss-cn-beijing.aliyuncs.com/common/15590980606M7sdkCH5f.png'
            ]
        }, 1000)

        this.technology()
    },
    methods: {
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        },
        // 请求后台
        // 设置板块
        technology () {
            // 用_this 代替this
            let _this = this
            _this.loading = true
            // 接收参数
            let parm = {
                processCode: this.leftInfo.ProcessCode
            }
            technology(parm).then(resluts => {
                if (resluts.data.StatusCode === 0) {
                    // 设置
                    _this.processchildlibrarystep = resluts.data.Body.processchildlibrarystep
                    _this.processchildlibrarystepClone1 = []
                    _this.processchildlibrarystep.forEach(element => {
                        if (element.StepPeriod === 1 && element.StepType === 1) {
                            _this.processchildlibrarystepClone1.push(element)
                        }
                    })

                    // 工艺
                    _this.processchildlibrarystepClone2 = []
                    _this.processchildlibrarystep.forEach(element => {
                        if (element.StepPeriod !== 1 && element.StepType === 1) {
                            element.StepPeriod = _this.$options.filters['stage'](element.StepPeriod)
                            _this.processchildlibrarystepClone2.push(element)
                        }
                    })

                    // 竣检
                    _this.processchildlibrarystepClone3 = []
                    _this.processchildlibrarystep.forEach(element => {
                        if (element.StepType === 3) {
                            element.StepPeriod = _this.$options.filters['stage'](element.StepPeriod)
                            _this.processchildlibrarystepClone3.push(element)
                        }
                    })
                }
                _this.loading = false
            }).catch(error => {
                console.info(error)
            })
        }
    },
    watch: {
        leftInfo () {
            this.technology()
        }
    },
    filters: {
        stage (parone) {
            let value = ''
            switch (parone) {
            case 1:
                value = '审计'
                break
            case 2:
                value = '准备'
                break
            case 3:
                value = '施前'
                break
            case 4:
                value = '施中'
                break
            case 5:
                value = '施尾'
                break
            case 6:
                value = '竣工'
                break
            }
            return value
        }
    }

}
</script>
<style>
    .titleFixed {
        position: absolute;
        right: 30px;
        top: 5px;
        font-family: Tahoma,Helvetica,Arial;
        font-size: 12px;
        color: #85da02;
        letter-spacing: 2px;
        transform: rotate(0deg);
        background: transparent;
        font-weight: normal;
    }
</style>
