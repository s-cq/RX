<template>
<div class="">
    <div class="noprint"  v-if="printButton">
        <input type="button" value="打印" class="uiBtn-normal uiBtn-blue" @click="Project_print()"/>
    </div>
    <div class="print">
        <div v-for="(item, index) of getData" :key="index">
            <img :src="item" />
        </div>

    </div>
</div>
</template>
<script>
import { waterHandle } from '@modules/Construction/Common/Utils/water.js'
export default {
    props: ['data'],
    data () {
        return {
            printButton: true, // 打印按钮是否显示
            getData: [] // 接收的数组
        }
    },
    created () {
        this.getInspection()
    },
    methods: {
        // 打印人数据
        getInspection () {
            this.getData = []
            this.data.forEach(element => {
                this.getData.push(waterHandle.setImageUrl(element, '瑞祥装饰'))
            })
            console.log(this.getData)
        },
        Project_print () {
            this.printButton = false
            setTimeout(() => {
                window.print()
                this.printButton = true
            }, 100)
        }
    }
}
</script>
<style lang="scss">
    #app{
        width:auto;
        height:auto;
        overflow:inherit
    }

    .print {
        position: relative;
        width: 1000px;
        margin: auto;
        overflow: hidden;
        padding: 10px 0px;
    }

    .print img {
        width: 100%;
        height: 100%;
    }

    .noprint {
        position: fixed;
        top: 15px;
        left: 50%;
        z-index: 1;
    }
    .uiBtn-blue {
        text-align: center;
        background: #09f;
        color: #fff;
        cursor: pointer;
        border: 1px solid #09f;
        border-radius: 3px;
    }

    .uiBtn-normal, .uiBtn-normal-no {
        padding: 0 16px;
        height: 28px;
        line-height: 26px;
        vertical-align: middle;
    }
</style>
