<template>
  <div style="text-align: center;margin: 10px 0;">
    <el-pagination
            @size-change="sizeChange"
            @current-change="currentChange"
            :current-page="current"
            :page-sizes="prop.sizes"
            :page-size="pageSize"
            :layout="prop.layout"
            :total="prop.total">
    </el-pagination>
  </div>
</template>
<script setup lang="ts">
  import { ref, watch } from 'vue'
  const current = ref(1) // 页码
  interface props {
    size: number;
    total: number;
    layout?: string;
    sizes?: number[];
  }
  // props默认值
  let prop = withDefaults(defineProps<props>(), {
    sizes: [10, 20, 50, 100, 500, 1000] as any,
    layout: 'total, sizes, prev, pager, next, jumper',
    size: 10,
    total: 0
  })
  const total = ref(prop.total)
  const pageSize = ref(prop.size)
  watch(total, val => {
    // 自动修正current
    const maxPageNo = val % pageSize.value === 0 ? (val/pageSize.value) : (Math.floor(val/pageSize.value) + 1)
    if (maxPageNo === 0) {
      if (current.value !== 1) {
        currentChange(1)
      }
    } else if (current.value > maxPageNo) {
      currentChange(maxPageNo)
    }
  })
  const emit = defineEmits(['change'])
  const currentChange = (val: number) => {
    current.value = val
    emit('change', {pageSize, pageNo: val})
  }
  const sizeChange = (val: number) => {
    pageSize.value = val
    current.value = 1
    emit('change', {pageSize: val, pageNo: 1})
  }
  const setCurrent = (val: number) => {
    current.value = val
  }
</script>
<style lang="less">
  .el-pagination {
    justify-content: center;
  }
</style>
