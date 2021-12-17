<template>
  <div class="wrap">
    <p class="p">登录</p>
    <el-input placeholder="请输入账号" class="user" v-model="form.userName">
      <i class="el-icon-user el-input__icon" slot="prefix"> </i
    ></el-input>
    <el-input
      v-model="form.password"
      class="password"
      placeholder="请输入密码"
      type="password"
      ><i class="el-icon-edit el-input__icon" slot="prefix"> </i
    ></el-input>
    <!-- <Verify class="verify" :type="3" @success="success"></Verify> -->
    <vue-simple-verify
      class="verify"
      ref="verify"
      @success="success"
      :width="250"
    />
    <el-button type="primary" class="login" round @click="login()"
      >登录</el-button
    >
  </div>
</template>
<script>
import Verify from "vue2-verify";
import { Toast as VanToast } from "vant";
export default {
  name: "Login",
  components: { Verify },
  data() {
    return {
      form: {
        userName: "",
        password: ""
      },
      disabled: true
    };
  },
  methods: {
    success() {
      this.disabled = false;
    },
    login() {
      if (this.disabled) {
        VanToast.fail("请正确验证！");
        return;
      }
      this.$refs.verify.reset()
      localStorage.setItem("userInfo", JSON.stringify(this.form));
      this.$router.push({ path: "/home" });
    }
  }
};
</script>
<style scoped lang="less">
.wrap {
  width: 80%;
  margin: 100px auto;
  text-align: center;
}
.user {
  margin-bottom: 20px;
}
.login {
  width: 80%;
  margin: 60px auto;
  margin-top: 80px;
  background: #ff8198;
  border: #ff8198;
}
.p {
  margin-bottom: 20px;
  font-weight: bold;
}
/deep/.verify-btn {
  background: #ff8198;
  border-radius: 15px;
  // display: none;
  position: absolute;
}
/deep/.verify-change-code {
  color: rgba(0, 0, 0.85);
}
.verify {
  margin: 15px auto;
}
</style>
