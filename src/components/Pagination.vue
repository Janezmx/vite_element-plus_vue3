<template>
  <div style="text-align: center;margin: 10px 0;">
    <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page="current"
        :page-sizes="sizes"
        :page-size="pageSize"
        :layout="layout"
        :total="total">
    </el-pagination>
  </div>
</template>
<script setup lang="ts">
import { ref, toRefs, watch } from 'vue'
const current = ref(1) // 页码
const props = defineProps({
  total: {
    type: Number,
    default: 0
  },
  layout: {
    type: String,
    required: false,
    default: 'total, sizes, prev, pager, next, jumper'
  },
  size: {
    type: Number,
    required: false,
    default: 10
  },
  sizes: {
    type: Array,
    required: false,
    default: () => [10, 20, 50, 100, 500, 1000]
  }
})
const total = ref(props.total)
const pageSize = ref(props.size)
watch(pageSize, val => {
  console.log('watch', val, pageSize, total)
})
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
<style rel="stylesheet/less" lang="less">
</style>
