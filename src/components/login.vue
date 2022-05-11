<script setup>
import { computed } from '@vue/reactivity';
import http from '../utils/http'
import Cookies from 'js-cookie'
import { ref } from 'vue'
import { ElMessage } from 'element-plus';

//账户
const email = ref("zhangpeng.0304@aliyun.com")
//密码
const password = ref("123456")
//控制登陆按钮状态
const canClick = computed(() => email.value.length > 0 && password.value.length > 0)

//登陆按钮的操作
function login(params) {
    http.post('/account/login', {
        email: email.value,
        password: password.value
    }).then(function (response) {
        Cookies.set('token', response.data.token, { expires: new Date(response.data.expiresAt) })
        ElMessage.success("登陆成功")
    }).catch(function (error) {
        console.log(error);
        ElMessage.error("登陆失败")
    });
}
</script>

<template>
    <div class="login">
        <el-input v-model="email" placeholder="请输入账户" clearable />
        <el-input v-model="password" placeholder="请输入密码" clearable />
        <el-button type="primary" :disabled="!canClick" @click="login">登陆</el-button>
    </div>
</template>
