<template>
    <div class="breadcrumb">
        <el-breadcrumb separator=">">
            <el-breadcrumb-item>列表</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <hr>
    <div>本页总阅读量<span id="busuanzi_value_page_pv"></span>次</div>
    <div v-loading="loading">
        <div style="margin: 10px 0;">
            <el-input v-model="query" style="width: 200px"/>
            <el-button type="primary" @click="fetchData" style="margin-left: 10px;">查询</el-button>
        </div>

        <el-table :data="tableDataShow" border>
            <el-table-column label="id" prop="id"/>
            <el-table-column label="名称" prop="name"/>
        </el-table>
        <div class="pagination">
            <Pagination ref="pagination" @change="setPagination" :total="tableData.length"/>
        </div>
    </div>

</template>

<script setup lang="ts">
    import { ref, reactive, computed, onMounted } from 'vue'
    import { useRouter, onBeforeRouteUpdate } from 'vue-router'
    import { fetchList } from '@/plugin/http/api/list'
    import useCurrentInstance from '@/plugin/global'
    const { Global } = useCurrentInstance()

    const loading = ref(false)
    const query = ref('')
    const tableData = ref([])
    // 查询列表
    const fetchData = () => {
        loading.value = true
        fetchList().then((res: any) => {
            tableData.value = res.data || []
        }).catch((e:any) => {
            Global.$message({
                type: 'error',
                message: e.message
            })
        }).finally(() => {
            loading.value = false
        })
    }
    // 前端分页
    const pagination = reactive({
        pageNo: 1,      // 页码
        pageSize: 10    // 每页显示数量
    })
    const setPagination = ({pageNo, pageSize}:{pageNo: number, pageSize: number}) => {
        pagination.pageNo = pageNo
        pagination.pageSize = pageSize
    }
    const tableDataShow = computed(() => {
        const start = (pagination.pageNo - 1) * pagination.pageSize
        return tableData.value.slice(start, start + pagination.pageSize)
    })
    onMounted(() => {
        fetchData()
    })
    onBeforeRouteUpdate((to, from) => {
      console.log('onBeforeRouteUpdate')
    })
</script>

<style scoped>

</style>
