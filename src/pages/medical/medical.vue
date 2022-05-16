<script setup>
import { ref, onMounted, watch } from 'vue';
import http from '@/utils/http'
import { ElMessage } from 'element-plus'

//体检记录数据
const medicals = ref([])
//体检记录总数
const totalCount = ref(0)
//分页器
const currentPage = ref(1)
function currentPageChanged(newValue) {
    currentPage.value = newValue
    getMedicals(currentPage.value, 10)
}

onMounted(async () => {
    getMedicals(currentPage.value, 10)
})
//获取体检数据
function getMedicals(pageNo, pageSize) {
    http.get('/medical/retrieve', {
        pageNo: pageNo,
        pageSize: pageSize
    }).then(function (response) {
        console.debug(response)
        if (response.code != 0) {
            console.log(response.code);
            ElMessage.error(response.msg)
            return
        }
        medicals.value = response.data.medicals
        totalCount.value = response.data.totalCount
    }).catch(function (error) {
        console.log(error);
        ElMessage.error(error)
    });
}
</script>

<template>
    <el-table :data="medicals" stripe style="width: 100%">
        <el-table-column prop="ID" label="ID" width="180" />
        <el-table-column prop="height" label="身高（单位：厘米）" />
        <el-table-column prop="weight" label="体重（单位：公斤）" width="180" />
        <el-table-column prop="headCircumference" label="头围" width="180" />
        <el-table-column prop="updatedAt" label="更新时间" width="180" />
    </el-table>
    <el-pagination background layout="prev, pager, next" :page-size="10" :total="totalCount" :current-page="currentPage" @update:current-page="currentPageChanged"/>
</template>
