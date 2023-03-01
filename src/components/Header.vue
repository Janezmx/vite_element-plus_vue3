<template>
    <div class="header">
        <div class="title">后台管理系统</div>
        <div class="info-bar">
            <el-dropdown trigger="click" @command="logout">
                    <span class="el-dropdown-link">
                        <span class="user-name">{{userInfo.username}}</span>
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                <template #dropdown>
                    <el-dropdown-menu class="user">
                        <el-dropdown-item id="btn_logout">注销</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { userInfoStore } from '@/store/user'
    import { storeToRefs } from 'pinia'
    import { ArrowDown } from '@element-plus/icons-vue'
    const store = userInfoStore()
    const {userInfo} = storeToRefs(store)
    const logout = () => {
        // window.location.href = '/cmp/logout'
        console.log('logout')
    }
</script>

<style rel="stylesheet/less" lang="less">
    @border-style: 1px solid black;
    .header {
        color: white;
        background-color: #36393f;
        display: flex;
        justify-content: space-between;
        .title {
            margin-left: 30px;
            font-size: 23px;
        }
        .info-bar {
            margin-right: 30px;
            max-width: calc(100% - 200px);
            .el-dropdown {
                width: 100%;
                .el-dropdown-link {
                    color: white;
                    cursor: pointer;
                    padding: 0 10px;
                }
            }
            .user-name{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: inline-block;
                font-size: 14px;
            }
        }
    }
</style>
