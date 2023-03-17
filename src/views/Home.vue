<template>
    home
    <!--<div>本页总阅读量<span id="busuanzi_value_page_pv"></span>次</div>-->
    <el-button size="small" type="primary" @click="clickMessage">message</el-button>
    <i-ep-CircleCheck></i-ep-CircleCheck>
</template>

<script setup lang="ts">
    const clickMessage = () => {
        ElMessage.success('hhh')
    }
</script>

<style scoped>

</style>
