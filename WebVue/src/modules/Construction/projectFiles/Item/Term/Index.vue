<template>
<div id="components">
    <rx-left></rx-left>
    <rx-center></rx-center>
    <rx-right></rx-right>
    <!-- 从右边出来 -->
    <transition class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <router-view name="right"></router-view>
    </transition>
    <!-- 从左边出来 -->
    <transition class="animated faster" enter-active-class="animated faster slideInLeft" leave-active-class="animated faster slideOutLeft">
        <router-view name="left"></router-view>
    </transition>
    <!-- 从上边出来 -->
    <transition class="animated faster" enter-active-class="animated faster slideInDown" leave-active-class="animated faster slideOutUp">
        <router-view name="top"></router-view>
    </transition>
</div>
</template>
<script>
import rxLeft from './MainLeft/MainLeft'
import rxCenter from './MainCenter/MainCenter'
import rxRight from './MainRight/MainRight'
export default {
    components: {
        rxLeft,
        rxCenter,
        rxRight
    },
    data () {
        return {

        }
    }
}
</script>
