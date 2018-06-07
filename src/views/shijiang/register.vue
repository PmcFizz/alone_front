<!--注册用户-->
<template>
  <div class="sj_register container">
    <div class="form-wrap">
      <Form ref="form" :model="userInfo">
        <FormItem label="" prop="nickName">
          <Input type="text" v-model="userInfo.nickName" placeholder="昵称"></Input>
        </FormItem>
        <FormItem label="" prop="phoneNo">
          <Input type="text" v-model="userInfo.phoneNo" placeholder="手机号"></Input>
        </FormItem>
        <FormItem label="" prop="email">
          <Input type="text" v-model="userInfo.email" placeholder="邮箱"></Input>
        </FormItem>
        <FormItem label="" prop="password">
          <Input type="password" v-model="userInfo.password" placeholder="密码"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="submitUserInfo" long>注册</Button>
          <Button type="ghost" @click="toLogin" style="margin-top:10px" long>去登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
import { regiseterUser } from "@/api/sj/user";

export default {
  name: "sjRegister",
  data() {
    return {
      userInfo: {}
    };
  },
  methods: {
    // 提交用户信息
    submitUserInfo() {
      let self = this;
      self.$Spin.show();
      regiseterUser(this.userInfo).then(res => {
        let data = res.data.data;
        if (res.data.code === 200) {
          // 注册成功
          this.$Message.success("注册成功！登录中。。。");
          setTimeout(function() {
            self.$Spin.hide();
            self.$router.push({ name: "sjIndex" });
          }, 1000);
        } else {
          self.$Spin.hide();
          this.$Message.error(data.msg);
        }
      });
    },
    // 去登录
    toLogin() {
      this.$router.push({ path: "/sj/login" });
    }
  }
};
</script>
