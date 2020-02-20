<template>
<rx-app>
    <!-- 头部 -->
    <rx-header :header="header"></rx-header>
    <!-- 侧栏 -->
    <rx-aside :slideBar="slideBar"></rx-aside>
    <!-- 主内容 -->
    <rx-main>
        <!-- 固定标题切换 -->
        <!-- <div id="components-title">
            <ul class="clearfix uiTab1 mb5">
                <router-link tag="li" class="col-md-4 fl" to="/ElementRx/Index" active-class="uiTab1-active"><a href="javascript:">材 料</a></router-link>
                <router-link tag="li" class="col-md-4 fl" to="/ElementRx/Index" active-class="uiTab1-active"><a href="javascript:">功 能</a></router-link>
            </ul>
        </div> -->
        <!-- 具体业务内容 -->
        <router-view></router-view>
    </rx-main>
</rx-app>
</template>
<script>
export default {
    metaInfo: {
        title: '瑞祥工程财务管理系统',
        titleTemplate: '%s'
    },
    data () {
        return {
            // header 传值对象
            header: {
                title: '瑞祥-工程-财务'
            },
            // slideBar 传值对象
            slideBar: [
                { // 一级切换tab
                    name: '管理',
                    list: [
                        {
                            name: '项目总会计',
                            na: '全',
                            link: `/ElementRx/project`,
                            menuFlag: 1
                        }
                        // {
                        //     name: '半成品',
                        //     na: '半',
                        //     link: `/ElementRx/Semimanufactures`,
                        //     menuFlag: 2
                        // },
                        // {
                        //     name: '原料',
                        //     na: '原',
                        //     link: `/ElementRx/RawMaterial`,
                        //     menuFlag: 3
                        // },
                        // {
                        //     name: '辅料',
                        //     na: '辅',
                        //     link: `/ElementRx/Accessories`,
                        //     menuFlag: 4
                        // },
                        // {
                        //     name: '人工',
                        //     na: '人',
                        //     link: `/ElementRx/Artificial`,
                        //     menuFlag: 5
                        // }
                    ]
                }
                // {
                //     name: '业务',
                //     list: [
                //         {
                //             name: '项目总会计',
                //             na: '全',
                //             link: `/ElementRx/Manufactor`,
                //             menuFlag: 6
                //         }
                //         // {
                //         //     name: '订单',
                //         //     na: '订',
                //         //     link: `/ElementRx/Order`,
                //         //     menuFlag: 7
                //         // }
                //     ]
                // }
            ]
        }
    },
    created () {

    },
    methods: {

    }
}
</script>
