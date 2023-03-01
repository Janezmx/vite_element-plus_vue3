<template>
    home
    <el-button size="small" type="primary" @click="clickMessage">message</el-button>
</template>

<script setup lang="ts">
    import useCurrentInstance from '@/plugin/global'
    const { Global } = useCurrentInstance()
    const clickMessage = () => {
        Global.$message({
            type: 'success',
            message: 'hhh'
        })
    }
</script>

<style scoped>

</style>
