<script setup>
// import { computed } from '@vue/reactivity';
// import { ref } from 'vue'

// //账户
// const account = ref("")
// //密码
// const password = ref("")
// //控制登陆按钮状态
// const canClick = computed(() => account.value.length > 0 && password.value.length > 0)
// //登陆按钮的操作
// function login(params) {
//     console.log(account)
//     console.log(password)
// }
</script>

<template>
    <div class="inputBox">
        <el-input v-model="account" placeholder="请输入账户" clearable />
        <span class="error">请输入正确的密码</span>
    </div>
</template>
