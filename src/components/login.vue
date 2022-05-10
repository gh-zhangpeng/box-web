<script setup>
import { computed } from '@vue/reactivity';
import http from '../utils/http'
import { ref } from 'vue'

//账户
const email = ref("")
//密码
const password = ref("")
//控制登陆按钮状态
const canClick = computed(() => email.value.length > 0 && password.value.length > 0)

//登陆按钮的操作
function login(params) {
    console.log(import.meta.env)
    http.post('/account/login', {
        email: email.value,
        password: password.value
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}
</script>

<template>
    <div class="login">
        <el-input v-model="email" placeholder="请输入账户" clearable />
        <el-input v-model="password" placeholder="请输入密码" clearable />
        <el-button type="primary" :disabled="!canClick" @click="login">Primary</el-button>
    </div>
</template>
