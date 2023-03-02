<template>
    <div class="breadcrumb">
        <el-breadcrumb separator=">">
            <el-breadcrumb-item>表单</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <hr>
    <div>本页总阅读量<span id="busuanzi_value_page_pv"></span>次</div>
    <el-form ref="formRef" :model="formData" label-width="120px" :rules="rules" v-loading="loading">
        <el-form-item label="名字" prop="name">
            <el-input v-model.trim="formData.name" style="width: 215px;"></el-input>
        </el-form-item>
        <el-form-item label="标签" prop="tag">
            <el-select v-model="formData.tag" collapse-tags multiple filterable placeholder="请选择">
                <el-option label="作业" value="job"></el-option>
                <el-option label="任务" value="task"></el-option>
                <el-option label="进程" value="process"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
            <el-input v-model="formData.remark" type="textarea" style="width: 215px;"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">确认</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
    import {ref, reactive} from 'vue'
    import { submitForm } from '@/plugin/http/api/list'
    import useCurrentInstance from '@/plugin/global'
    const { Global } = useCurrentInstance()
    const loading = ref(false)
    const formData = reactive({
        name: '',
        remark: '',
        tag: []
    })
    // 校验规则
    const rules = reactive({
        tag: [{required: true, message: '请选择标签', trigger: 'blur'}],
        name: [
            {required: true, message: '请输入名称', trigger: 'blur'},
            {
                validator: (rule: any, value: string, callback: any) => {
                    if (!value) {
                        callback(new Error('请输入名称'))
                    } else if (!value.match(/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/)) {
                        return callback(new Error('只能输入中文、英文字母、数字和下划线'))
                    } else {
                        callback()
                    }
                }, trigger: 'blur'
            }
        ]
    })
    const formRef = ref(null)
    // 提交数据
    const onSubmit = () => {
        (formRef.value as any).validate(async (valid: any) => {
            if (valid) {
                if (valid) {
                    loading.value = true
                    const {name, tag, remark} = formData
                    const params = {
                        name,
                        tag: tag.join(','),
                        remark
                    }
                    submitForm(params).then(() => {
                        Global.$message({
                            type: 'success',
                            message: '提交成功'
                        })
                    }).catch((e:any) => {
                        Global.$message({
                            type: 'error',
                            message: `提交失败，原因：${e.message}`
                        })
                    }).finally(() => {
                        loading.value = false
                    })
                }
            }
        })
    }
</script>

<style scoped>

</style>
