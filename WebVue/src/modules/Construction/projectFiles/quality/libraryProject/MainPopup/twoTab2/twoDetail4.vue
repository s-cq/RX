<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'评价'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">项经</p>
            <div class="analyItemCon">
                <div class="pb10">
                    <el-rate v-model="value1" @change="starChange1()"></el-rate>
                </div>
                <div class="clearfix LinkCellBox">
                   <span class="LinkCell fl mr10 mb10"  :class="{ 'LinkCell': true, 'fl': true, 'mr10': true, 'mb10': true, 'LinkCellActive' :  item.flag }" v-for="(item, index) of starList1" :key="index" @click="item.flag = !item.flag">{{item.content}}</span>
                </div>
                <div class="clearfix">
                    <textarea class="col-md-10" rows="3" placeholder="您对这次的配送还满意吗？您的评价会帮助我们更好的提升哦~"></textarea>
                </div>
                <div class="clearfix mt10 fl">
                    <rx-upload  :data="{id: 11}" :init="{class: 1, mime: 1}"
                        :elStyle="{width:'90px', height: '80px'}"
                        @success="successUpload">
                        <div class="fl uiImgUpload uiImgUpload-gblock mr10">
                            <a href="javascript:">
                                <span type="file" value="" class="file"></span>
                                <em class="bgIcon file-ico"></em>
                            </a>
                        </div>
                    </rx-upload>
                    <rx-viewer class="fl">
                        <div class="clearfix">
                            <div class="col-md-4" >
                                <img>
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">客户</p>
            <div class="analyItemCon">
                <div class="pb10">
                    <el-rate v-model="value2" @change="starChange2()"></el-rate>
                </div>
                <div class="clearfix LinkCellBox">
                   <span class="LinkCell fl mr10 mb10"  :class="{ 'LinkCell': true, 'fl': true, 'mr10': true, 'mb10': true, 'LinkCellActive' :  item.flag }" v-for="(item, index) of starList2" :key="index" @click="item.flag = !item.flag">{{item.content}}</span>
                </div>
                <div class="clearfix">
                    <textarea class="col-md-10" rows="3" placeholder="您对这次的配送还满意吗？您的评价会帮助我们更好的提升哦~"></textarea>
                </div>
                <div class="clearfix mt10 fl">
                    <rx-upload  :data="{id: 11}" :init="{class: 1, mime: 1}"
                        :elStyle="{width:'90px', height: '80px'}"
                        @success="successUpload">
                        <div class="fl uiImgUpload uiImgUpload-gblock mr10">
                            <a href="javascript:">
                                <span type="file" value="" class="file"></span>
                                <em class="bgIcon file-ico"></em>
                            </a>
                        </div>
                    </rx-upload>
                    <rx-viewer class="fl">
                        <div class="clearfix">
                            <div class="col-md-4" >
                                <img>
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
         <div class="analyItem">
            <p class="analyItemTit tx-center">设计</p>
            <div class="analyItemCon">
                <div class="pb10">
                    <el-rate v-model="value3" @change="starChange3()"></el-rate>
                </div>
                <div class="clearfix LinkCellBox">
                   <span class="LinkCell fl mr10 mb10"  :class="{ 'LinkCell': true, 'fl': true, 'mr10': true, 'mb10': true, 'LinkCellActive' :  item.flag }" v-for="(item, index) of starList3" :key="index" @click="item.flag = !item.flag">{{item.content}}</span>
                </div>
                <div class="clearfix">
                    <textarea class="col-md-10" rows="3" placeholder="您对这次的配送还满意吗？您的评价会帮助我们更好的提升哦~"></textarea>
                </div>
                <div class="clearfix mt10 fl">
                    <rx-upload  :data="{id: 11}" :init="{class: 1, mime: 1}"
                        :elStyle="{width:'90px', height: '80px'}"
                        @success="successUpload">
                        <div class="fl uiImgUpload uiImgUpload-gblock mr10">
                            <a href="javascript:">
                                <span type="file" value="" class="file"></span>
                                <em class="bgIcon file-ico"></em>
                            </a>
                        </div>
                    </rx-upload>
                    <rx-viewer class="fl">
                        <div class="clearfix">
                            <div class="col-md-4" >
                                <img>
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <span class="circlemark circlemark-lightRed">未</span>
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
            value1: null,
            value2: null,
            value3: null,
            starList1: [],
            starList2: [],
            starList3: []
        }
    },
    created () {

    },
    methods: {
        starChange1 () {
            this.starSwitch1()
        },
        starChange2 () {
            this.starSwitch2()
        },
        starChange3 () {
            this.starSwitch3()
        },
        starSwitch1 () {
            switch (this.value1) {
            case 1:
                this.starList1 = [
                    {
                        content: '材料恶劣',
                        flag: false
                    },
                    {
                        content: '做工极差',
                        flag: false
                    },
                    {
                        content: '暴力施工',
                        flag: false
                    },
                    {
                        content: '无法直视',
                        flag: false
                    }
                ]
                break
            case 2:
                this.starList1 = [
                    {
                        content: '用材较次',
                        flag: false
                    },
                    {
                        content: '做工粗糙',
                        flag: false
                    },
                    {
                        content: '管理不当',
                        flag: false
                    },
                    {
                        content: '略有瑕疵',
                        flag: false
                    }
                ]
                break
            case 3:
                this.starList1 = [
                    {
                        content: '用材合格',
                        flag: false
                    },
                    {
                        content: '做工达标',
                        flag: false
                    },
                    {
                        content: '管理恰当',
                        flag: false
                    },
                    {
                        content: '整体满意',
                        flag: false
                    }
                ]
                break
            case 4:
                this.starList1 = [
                    {
                        content: '用材满意',
                        flag: false
                    },
                    {
                        content: '做工优良',
                        flag: false
                    },
                    {
                        content: '管理有序',
                        flag: false
                    },
                    {
                        content: '效果优良',
                        flag: false
                    }
                ]
                break
            case 5:
                this.starList1 = [
                    {
                        content: '用材优等',
                        flag: false
                    },
                    {
                        content: '做工精细',
                        flag: false
                    },
                    {
                        content: '严格规范',
                        flag: false
                    },
                    {
                        content: '完美精湛',
                        flag: false
                    }
                ]
                break
            }
        },
        starSwitch2 () {
            switch (this.value2) {
            case 1:
                this.starList2 = [
                    {
                        content: '材料恶劣',
                        flag: false
                    },
                    {
                        content: '做工极差',
                        flag: false
                    },
                    {
                        content: '暴力施工',
                        flag: false
                    },
                    {
                        content: '无法直视',
                        flag: false
                    }
                ]
                break
            case 2:
                this.starList2 = [
                    {
                        content: '用材较次',
                        flag: false
                    },
                    {
                        content: '做工粗糙',
                        flag: false
                    },
                    {
                        content: '管理不当',
                        flag: false
                    },
                    {
                        content: '略有瑕疵',
                        flag: false
                    }
                ]
                break
            case 3:
                this.starList2 = [
                    {
                        content: '用材合格',
                        flag: false
                    },
                    {
                        content: '做工达标',
                        flag: false
                    },
                    {
                        content: '管理恰当',
                        flag: false
                    },
                    {
                        content: '整体满意',
                        flag: false
                    }
                ]
                break
            case 4:
                this.starList2 = [
                    {
                        content: '用材满意',
                        flag: false
                    },
                    {
                        content: '做工优良',
                        flag: false
                    },
                    {
                        content: '管理有序',
                        flag: false
                    },
                    {
                        content: '效果优良',
                        flag: false
                    }
                ]
                break
            case 5:
                this.starList2 = [
                    {
                        content: '用材优等',
                        flag: false
                    },
                    {
                        content: '做工精细',
                        flag: false
                    },
                    {
                        content: '严格规范',
                        flag: false
                    },
                    {
                        content: '完美精湛',
                        flag: false
                    }
                ]
                break
            }
        },
        starSwitch3 () {
            switch (this.value3) {
            case 1:
                this.starList3 = [
                    {
                        content: '材料恶劣',
                        flag: false
                    },
                    {
                        content: '做工极差',
                        flag: false
                    },
                    {
                        content: '暴力施工',
                        flag: false
                    },
                    {
                        content: '无法直视',
                        flag: false
                    }
                ]
                break
            case 2:
                this.starList3 = [
                    {
                        content: '用材较次',
                        flag: false
                    },
                    {
                        content: '做工粗糙',
                        flag: false
                    },
                    {
                        content: '管理不当',
                        flag: false
                    },
                    {
                        content: '略有瑕疵',
                        flag: false
                    }
                ]
                break
            case 3:
                this.starList3 = [
                    {
                        content: '用材合格',
                        flag: false
                    },
                    {
                        content: '做工达标',
                        flag: false
                    },
                    {
                        content: '管理恰当',
                        flag: false
                    },
                    {
                        content: '整体满意',
                        flag: false
                    }
                ]
                break
            case 4:
                this.starList3 = [
                    {
                        content: '用材满意',
                        flag: false
                    },
                    {
                        content: '做工优良',
                        flag: false
                    },
                    {
                        content: '管理有序',
                        flag: false
                    },
                    {
                        content: '效果优良',
                        flag: false
                    }
                ]
                break
            case 5:
                this.starList3 = [
                    {
                        content: '用材优等',
                        flag: false
                    },
                    {
                        content: '做工精细',
                        flag: false
                    },
                    {
                        content: '严格规范',
                        flag: false
                    },
                    {
                        content: '完美精湛',
                        flag: false
                    }
                ]
                break
            }
        },
        successUpload (value) {
            console.log(value)
        }
    }
}
</script>
<style>
    .LinkCell   {
        background: #f1f1f1;
        padding:2px 5px;
        border: 1px solid #f1f1f1;
        border-radius: 15px;
        cursor: pointer;
    }
    .LinkCellActive {
        background: #ffeed6;
        color:  #ff9600;
        border-color: #ff9600;
    }
</style>
