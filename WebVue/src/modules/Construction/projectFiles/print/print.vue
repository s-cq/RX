<template>
<div class="">
    <!-- 项目 example -->
    <rx-project v-if="currentID == 1"></rx-project>
    <!-- 竣工验收 -->
    <rx-completed v-if="currentID == 2"></rx-completed>
    <!-- 物业办理资料打印 -->
    <rx-property v-if="currentID == 3" :data="data"></rx-property>
</div>
</template>
<script>
import rxProject from './print/project'
import rxCompleted from './print/completed'
import rxProperty from './print/property'
export default {
    components: {
        rxProject,
        rxCompleted,
        rxProperty
    },
    data () {
        return {
            currentID: '',
            data: ''
        }
    },
    computed: {
    },
    created () {
        this.currentID = this.$route.query.ID
        this.data = this.$route.query.data
    },
    methods: {
    }
}
</script>
