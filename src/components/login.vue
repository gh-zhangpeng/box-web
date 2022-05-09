<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue'

//账户
const account = ref("")
//密码
const password = ref("")
//控制登陆按钮状态
const canClick = computed(() => account.value.length > 0 && password.value.length > 0)
//登陆按钮的操作
function login(params) {
    console.log(account)
    console.log(password)
}
</script>

<template>
    <div class="login">
        <p>a: {{ canClick }}</p>
        <el-input v-model="account" placeholder="请输入账户" />
        <el-input v-model="password" placeholder="请输入密码" />
        <el-button type="primary" :disabled="!canClick" @click="login">Primary</el-button>
    </div>
</template>