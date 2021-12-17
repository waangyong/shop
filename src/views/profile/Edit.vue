<template>
  <div>
    <van-nav-bar
      title="编辑个人信息"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div>
      <van-field v-model="text" label="账号" />
      <!-- 输入手机号，调起手机号键盘 -->
      <!-- 输入密码 -->
      <van-field v-model="password" type="password" label="旧密码" />
       <!-- 输入密码 -->
      <van-field v-model="password" type="password" label="新密码" />
      <van-button type="primary"  size="large" class="buttons">确定</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Edit",
  data() {
    return {
      editingContact: {}
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.buttons{
  position: absolute;
  bottom: 0;
  background-color: var(--color-tint);
  border-color: var(--color-tint);
}
</style>
