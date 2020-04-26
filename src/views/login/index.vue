<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { login } from "@/api/login";
import { Vue,Component } from "vue-property-decorator";
import { setSession } from "@/utils/auth";
import { Sessions } from "@/utils/config";
@Component
export default class Login extends Vue {
  private form = {
    userName: "a",
    password: "b"
  };

  private async onSubmit() {
    // 调登录接口
    try {
      const userName: string = this.form.userName.trim();
      const password: string = this.form.password.trim();
      const response: any = await login(userName, password);

      if (response.code === 0) {
        const token: string = response.data.access_token;

        setSession(Sessions.userName, String(userName));
        setSession(Sessions.token, token);
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
</script>
