<template>
  <div class="custom-container">
    <div>
      <h1 class="text-center">Sign In</h1>
      <el-form
        ref="loginForm"
        :model="loginData"
        :rules="loginRules"
        label-width="120px"
      >
        <el-form-item label="Username" prop="username">
          <el-input v-model="loginData.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="loginData.password"
            type="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">Login</el-button>
        </el-form-item>
      </el-form>
      <el-alert
        v-if="loginError"
        title="Invalid login"
        type="error"
        description="Please check your credentials and try again."
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElForm } from 'element-plus';
import { loginWithUsrPwd } from '@/api/auth.ts';
import router from '@/router/index.ts';

interface LoginData {
  username: string;
  password: string;
}

const loginData = ref<LoginData>({
  username: '',
  password: '',
});

const loginRules = {
  username: [
    { required: true, message: 'Please enter your username', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please enter your password', trigger: 'blur' },
  ],
};

const loginError = ref(false);
const loginForm = ref<InstanceType<typeof ElForm>>();

const login = async () => {
  try {
    const valid = await loginForm.value.validate();
    if (!valid) return;
    await loginWithUsrPwd(loginData.value.username, loginData.value.password);
    // 登录成功，重定向到主页或其他页面
    router.push({ name: 'WhatsNew' });
  } catch (error) {
    // 登录失败，显示错误信息
    loginError.value = true;
  }
};
</script>

<style scoped>
.custom-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
