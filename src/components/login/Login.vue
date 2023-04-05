<template>
  <div class="login">
    <div class="login-box">
      <h2 class="login-title">用户登录</h2>
      <el-form :model="loginForm" :rules="loginFormRules" label-width="100px">
        <el-form-item prop="username"  label="用户名" >
          <el-input v-model="loginForm.username" placeholder="请输入用户名" ></el-input>
        </el-form-item>
        <el-form-item prop="password"  label="密码" >
          <el-input v-model.trim="loginForm.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="captcha" label="验证码">
          <div class="captcha-box">
            <el-input v-model.trim="loginForm.captcha" placeholder="请输入验证码" class="captcha-input"></el-input>
            <img :src="captchaSrc" class="captcha-img" @click="refreshCaptcha">
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import {reactive} from "@vue/reactivity";

export default {
  name: 'Login',
  setup() {
    const loginForm =  reactive({
      username: '',
      password: '',
      captcha: '',
    });

    const form = reactive({
      name: '',
      description: '',
      price: '',
    })

    const loginFormRules = ref({
      username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
    });

    const captchaSrc = ref('/api/captcha');

    const refreshCaptcha = () => {
      captchaSrc.value = '/api/captcha?' + new Date().getTime();
    };

    const handleLogin = () => {
      const form = ref('loginForm');
      form.value.validate((valid) => {
        if (valid) {
          // TODO: 发送登录请求
          console.log('登录成功');
        } else {
          console.log('登录失败');
          return false;
        }
      });
    };

    return {
      loginForm,
      loginFormRules,
      captchaSrc,
      form,
      refreshCaptcha,
      handleLogin,
    };
  },
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-box {
  width: 400px;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-title {
  margin-bottom: 20px;
  text-align: center;
}

.captcha-box {
  display: flex;
  align-items: center;
}

.captcha-input {
  flex: 1;
  margin-right: 10px;
}

.captcha-img {
  cursor: pointer;
}
</style>
