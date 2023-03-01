<template>
    <div class="side-nav">
        <el-scrollbar class="menu-scrollbar">
            <el-menu :router="false"
                     :default-active="currentIndex"
                     :unique-opened="true"
                     background-color="#324157"
                     text-color="#bfcbd9"
                     active-text-color="#20a0ff"
                     ref="menu">
                <el-menu-item index="/home" @click="toPage('Home')">Home</el-menu-item>
                <el-menu-item index="/form" @click="toPage('Form')">表单</el-menu-item>
                <el-menu-item index="/list" @click="toPage('List')">列表</el-menu-item>
                !<!-- 占位用字符，放止所有子菜单都隐藏后菜单栏消失 -->
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
    import { useRouter, useRoute } from 'vue-router'
    const route = useRoute()
    const router = useRouter()
    const currentIndex = computed(() => {
        return route.matched[0]?.path || ''
    })
    const toPage = (name: string) => {
        router.push(name)
    }
</script>

<style rel="stylesheet/less" lang="less">
    .side-nav {
        text-align: left;
        .el-menu {
            border-radius: 0;
            border: none;
        }
        .el-submenu__title {
            i {
                margin-right: 0;
                color: #eeeeee;
            }
        }
    }
    .menu-scrollbar {
        height: 100%;
        .el-scrollbar__view {
            height: 100%;
        }
        .el-scrollbar__wrap{
            overflow-x: hidden;
        }
        .el-scrollbar__bar.is-horizontal {
            display: none;
        }
    }
</style>
