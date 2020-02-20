<template>
<rx-app>
    <!-- 头部 -->
    <rx-header :header="header"></rx-header>
    <!-- 侧栏 -->
    <rx-aside :slideBar="slideBar" @menuClickCall="menuClickCall"></rx-aside>
    <!-- 主内容 -->
    <rx-main>
        <!-- 固定标题切换 -->
        <div id="components-title">
            <ul class="clearfix uiTab1 mb5">
<!-- Library -->
                <router-link tag="li" class="col-md-4 fl" to="/projectFiles/Person" active-class="uiTab1-active"  v-if="menuCall.menuFlag == 0"><a href="javascript:">人</a></router-link>
                <router-link tag="li" class="col-md-4 fl" to="/projectFiles/Meeting" active-class="uiTab1-active" v-if="menuCall.menuFlag == 0"><a href="javascript:">会</a></router-link>
                <router-link tag="li" class="col-md-4 fl" to="/projectFiles/Recruit" active-class="uiTab1-active" v-if="menuCall.menuFlag == 1"><a href="javascript:">招</a></router-link>
                <router-link tag="li" class="col-md-4 fl" to="/projectFiles/Cultivate" active-class="uiTab1-active" v-if="menuCall.menuFlag == 2"><a href="javascript:">面</a></router-link>
                 <router-link tag="li" class="col-md-4 fl" to="/projectFiles/Library" active-class="uiTab1-active" v-if="menuCall.menuFlag == 3"><a href="javascript:">库</a></router-link>
                <router-link tag="li" class="col-md-4 fl" to="/projectFiles/Stay" active-class="uiTab1-active" v-if="menuCall.menuFlag == 3"><a href="javascript:">留</a></router-link>
                <router-link tag="li" class="col-md-4 fl" to="/projectFiles/praemfng" active-class="uiTab1-active" v-if="menuCall.menuFlag == 4"><a href="javascript:">库</a></router-link>

                <router-link tag="li" class="col-md-4 fl" to="/projectFiles/Use" active-class="uiTab1-active" v-if="menuCall.menuFlag == 4"><a href="javascript:">用</a></router-link>
                <router-link tag="li" class="col-md-4 fl" to="/projectFiles/Quit" active-class="uiTab1-active" v-if="menuCall.menuFlag == 5"><a href="javascript:">人</a></router-link>
                <router-link tag="li" class="col-md-4 fl" to="/projectFiles/Fine" active-class="uiTab1-active" v-if="menuCall.menuFlag == 6"><a href="javascript:">罚</a></router-link>
                <router-link tag="li" class="col-md-4 fl" to="/projectFiles/Deposit" active-class="uiTab1-active" v-if="menuCall.menuFlag == 7"><a href="javascript:">押</a></router-link>
                <router-link tag="li" class="col-md-4 fl" to="/projectFiles/Journalism" active-class="uiTab1-active" v-if="menuCall.menuFlag == 8"><a href="javascript:">头</a></router-link>
                <router-link tag="li" class="col-md-4 fl" to="/projectFiles/City" active-class="uiTab1-active" v-if="menuCall.menuFlag == 9"><a href="javascript:">城</a></router-link>
                <router-link tag="li" class="col-md-4 fl" to="/projectFiles/Meeting" active-class="uiTab1-active" v-if="menuCall.menuFlag == 10"><a href="javascript:">会</a></router-link>
            </ul>
        </div>
        <!-- 具体业务内容 -->
        <router-view></router-view>
    </rx-main>
</rx-app>
</template>
<script>
import { sliderMenu } from '@modules/MaterPersonnel/Common/Utils/menu.js'
export default {
    metaInfo: {
        title: '项目人事',
        titleTemplate: '%s'
    },
    data () {
        return {
            // header 传值对象
            header: {
                title: '项目人事'
            },
            // slideBar 传值对象
            slideBar: sliderMenu,
            // slideBar 返回对象
            menuCall: {}
        }
    },
    created () {},
    methods: {
        menuClickCall (data) {
            this.menuCall = data
        }
    }
}
</script>
