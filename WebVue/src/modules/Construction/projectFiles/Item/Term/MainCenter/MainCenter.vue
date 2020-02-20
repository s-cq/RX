<template>
<div class="tc-center fl">
    <ul class="clearfix uiTab9 j_uiTab9">
        <li :class="{'uiTab9-active':subIndex == index}" :title="item" @click="subSwitch(index),setTwoToThreeInfo(pointsList[subIndex-1])" v-for="(item, index) of title" :key="index">{{item | slice(0,3)}}</li>
    </ul>
    <div id="j-tc-center-content">
        <!-- 状态 state -->
        <div class="uiTab9Con" v-if="subIndex == 0">
            <rx-state></rx-state>
        </div>
        <!-- 信息 information -->
        <div class="uiTab9Con" v-if="subIndex !== 0">
            <rx-information :pointsInfo="pointsList[subIndex-1]"></rx-information>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

import { getPointByPro } from '../../../branches/Department/Resources/Api/index'

// 注: 所有的大组件已 rx-xxx 命名, 不要使用此示例文件命名，可保留作为参考
import rxState from './state'
import rxInformation from './information'

export default {
    components: {
        rxState,
        rxInformation
    },
    data () {
        return {
            title: ['状态'],
            subIndex: 0,
            pointsList: [] // 点位信息
        }
    },
    created () {
        this._getPointByProFn()
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    methods: {
        ...mapMutations({
            setTwoToThreeInfo: `SET_TWO_TO_THREE_INFO`
        }),
        subSwitch (index) {
            this.subIndex = index
            // 关闭弹窗
            this.$router.push(this.$route.matched[1].path)
        },
        // 按项目查询点位
        _getPointByProFn () {
            this.title = ['状态']
            this.subIndex = 0
            let params = {
                order_no: this.leftInfo.order_no
            }
            getPointByPro(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    result.data.Body.orderList.forEach((item, index) => {
                        if (item.name === null) {
                            this.title.push('点位' + (index + 1))
                        } else {
                            this.title.push(item.name)
                        }
                    })
                    this.pointsList = result.data.Body.orderList
                }
            }).catch((err) => {
                console.log(`按项目查询点位接口错误,错误内容${err}`)
            })
        }
    },
    watch: {
        leftInfo () {
            this._getPointByProFn()
        }
    }
}
</script>
