<template>
  <div class="custom-container">
    <div>
      <h1 class="text-center">Sign In</h1>
      <el-form ref="loginForm" :model="loginData" :rules="loginRules">
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
const loginForm = ref('');

const login = () => {
  loginError.value = false;
  (loginForm.value as any).validate((valid: boolean) => {
    if (valid) {
      // Perform login logic here
      // add login api
    } else {
      loginError.value = true;
    }
  });
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
