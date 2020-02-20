<template>
<rx-app>
    <!-- 头部 -->
    <rx-header :header="header"></rx-header>
    <!-- 侧栏 -->
    <rx-aside :slideBar="slideBar"></rx-aside>
    <!-- 主内容 -->
    <rx-main>
        <!-- 固定标题切换 -->
        <div id="components-title">
            <ul class="clearfix uiTab1 mb5">
                <router-link tag="li" class="col-md-4 fl" to="/ProjectFiles" active-class="uiTab1-active"><a href="javascript:">项</a></router-link>
            </ul>
        </div>
        <!-- 具体业务内容 -->
        <router-view></router-view>
    </rx-main>
</rx-app>
</template>
<script>
import { sliderMenu } from '@modules/Inspection/Common/Utils/menu.js'
export default {
    metaInfo: {
        title: '项目总检',
        titleTemplate: '%s'
    },
    data () {
        return {
            // header 传值对象
            header: {
                title: '项目总检'
            },
            // slideBar 传值对象
            slideBar: sliderMenu
        }
    },
    created () {

    },
    methods: {

    }
}
</script>
