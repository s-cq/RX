<template>
<div class="tc-right">
    <div class="tc-righttop-tab j-tc-righttop-tab">
        <ul class="RTtab clearfix">
            <li class="visitTab-btn RTtab-active2 fl">设计回访</li>
            <!-- <li class="visitTab-btn RTtab-active3 fl">客户回访</li> -->
            <li class="list-btn RTtab-active fl">其他按钮</li>
            <li class="list-btn RTtab-active fr">
                <router-link :to="routerPath('list')">列表</router-link>
            </li>
        </ul>
    </div>
    <div class="tc-right-top clearfix">
        <div class="fl needdealt">
            <ul>
                <li class="bgRed">待办一</li>
                <li class="bgOrange">待办二</li>
                <li class="bgGreen">待办三</li>
            </ul>
        </div>
        <div class="visitbox">
            <!-- 回访内容 #j-visit 是一个整体内容 切换列子看 Index/Right-->
            <div class="visit" id="j-visit" v-scrollHeight="250">
                <div class="visi-list tx-left">
                    <div class="visi-listtop">
                        <span class="visi-name">营</span>
                        <span class="visi-date">07-19 14:55</span>
                        <span class="cGreen">正常</span>
                    </div>
                    <p class="visi-listtxt">
                        主案设计师系统静态页面已经制作完毕，已经交付开发。
                    </p>
                </div>
                <div class="visi-list tx-right">
                    <div class="visi-listtop">
                        <span class="cGreen">正常</span>
                        <span class="visi-date">07-19 15:55</span>
                        <span class="visi-name">团</span>
                    </div>
                    <p class="visi-listtxt cBlue">
                        今日新增任务：3个，均有必须近期前端制作；
                        <br>在执行任务：5个，均为正常状态；
                        <br>完成任务:2个,其中有个新人未提交验收，明天教一下系统怎么使用，另外一个验收合格。
                    </p>
                </div>
                <div class="visi-list tx-left">
                    <div class="visi-listtop">
                        <span class="visi-name">营</span>
                        <span class="visi-date">07-21 14:55</span>
                        <span class="cOrange">异常</span>
                    </div>
                    <p class="visi-listtxt">
                        主案设计师系统静态页面未确定,任务延迟
                    </p>
                </div>
                <div class="visi-list tx-right">
                    <div class="visi-listtop">
                        <span class="cOrange">异常</span>
                        <span class="visi-date">07-21 16:55</span>
                        <span class="visi-name">团</span>
                    </div>
                    <p class="visi-listtxt cBlue">
                        在执行任务：1个,应用请假,任务延迟
                    </p>
                </div>
                <div class="visi-list tx-left">
                    <div class="visi-listtop">
                        <span class="visi-name">营</span>
                        <span class="visi-date">07-22 13:55</span>
                        <span class="cRed">问题</span>
                    </div>
                    <p class="visi-listtxt">
                        执行慢
                    </p>
                </div>
                <div class="visi-list tx-right">
                    <div class="visi-listtop">
                        <span class="cRed">问题</span>
                        <span class="visi-date">07-22 16:55</span>
                        <span class="visi-name">团</span>
                    </div>
                    <p class="visi-listtxt cBlue">
                        未确定静态页面无法开发
                    </p>
                </div>
                <div class="visi-list tx-left">
                    <div class="visi-listtop">
                        <span class="visi-name">营</span>
                        <span class="visi-date">07-19 14:55</span>
                        <span class="cGreen">正常</span>
                    </div>
                    <p class="visi-listtxt">
                        主案设计师系统静态页面已经制作完毕，已经交付开发。
                    </p>
                </div>
                <div class="visi-list tx-right" v-for="index in 10" :key="index">
                    <div class="visi-listtop">
                        <span class="cGreen">正常</span>
                        <span class="visi-date">07-19 15:55</span>
                        <span class="visi-name">团</span>
                    </div>
                    <p class="visi-listtxt cBlue">
                        今日新增任务：3个，均有必须近期前端制作；
                        <br>在执行任务：5个，均为正常状态；
                        <br>完成任务:2个,其中有个新人未提交验收，明天教一下系统怎么使用，另外一个验收合格。
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="tc-right-bottom pa10 relative">
        <div class="tc-right-bottom-left relative">
            <ul class="topdaily">
                <li>
                    <a class="topdailybtn" href="javascript:">业务</a>
                </li>
                <li>
                    <a class="topdailybtn" href="javascript:">管理</a>
                </li>
                <li>
                    <a class="topdailybtn" href="javascript:">系统</a>
                </li>
            </ul>
            <div class="dailyrgt-divZi">
                <p class="tx-center">先解决业务问题，才有资格说管理。前两个因素完成之后，再反馈系统问题。</p>
            </div>
        </div>
        <div class="EventpenaltyDiv">
            <a href="javascrpit:;" class="EventpenaltyBtn">事件平台</a>
            <a href="javascrpit:;" class="EventpenaltyBtn">平台</a>
        </div>
    </div>
    <!-- 三段渲染容器 -->
    <transition class="animated faster" enter-active-class="animated faster slideInLeft" leave-active-class="animated faster slideOutLeft">
        <router-view></router-view>
    </transition>
</div>
</template>
<script>
export default {
    name: '',
    components: {

    },
    data () {
        return {

        }
    },
    methods: {
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        }
    }
}
</script>
