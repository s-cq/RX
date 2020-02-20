<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3">
                        <span class="cLightGreen pr8">工期第四天</span>
                    </div>
                    <div class="col-md-3">
                        <span class="cLightGreen pr8">准备</span>
                    </div>
                    <div class="col-md-3">
                        <span class="cLightGreen pr8"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <div class="analyItem">
            <p class="analyItemTit tx-center">工艺总览</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">现有</span><span>38</span>种</div>
                    <div class="col-md-3"><span class="cLightGray pr8">正常</span><span>2</span>种</div>
                    <div class="col-md-3"><span class="cLightGray pr8">异常</span><span>3</span>种</div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <router-link tag="div" :to="routerPath('preview')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">玻璃镜饰</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span></span></div>
                </div>
            </div>
        </router-link>
        <div class="analyItem">
            <p class="analyItemTit tx-center">拆除</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>拆除</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">单面单层</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>木工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">隐形门</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>木工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">截止阀</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>水暖工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">开关面板</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>电工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">台面</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>木工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">卫生间隔</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span></span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">墙砖铺贴</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>瓦工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">拆除</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>拆除</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">批刮腻子</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>油工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">强电线路</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>电工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">搬运</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>搬运</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">拆除</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>拆除</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">拆除</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>拆除</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">拆除</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>拆除</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">木基门</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span></span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">拆除</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>壮工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">石材吧台</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span></span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">下水管道</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>水暖工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">木质踢脚</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>木工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">木质踢脚</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>木工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">墙面插座</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>电工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">拆除</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>拆除</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">拆除</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>壮工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">乳胶漆</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>油工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">铺贴复合</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>壮工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">水泥找平</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>瓦工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">清理</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>壮工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">接线盒</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>电工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">清理</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>壮工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">接线盒</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>电工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">石膏板平</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>木工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">洁具</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>水暖工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">铝合金踢</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>木工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">铝合金踢</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>木工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">平开玻璃</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span></span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">上水管道</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">实施工种</span><span>水暖工</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">未</span>
            </div>
        </div>
    </div>
    <div class="pr10">
        <router-link tag="div" :to="routerPath('hander')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">当前阶段</span><span class="cGreen">准备</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8"></span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8"></span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8"></span><span></span></div>
                </div>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    created () {

    },
    methods: {
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        }
    }
}
</script>
