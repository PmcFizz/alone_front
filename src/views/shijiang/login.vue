<!--用户登陆-->
<template>
  <div class="container sj_login">
    <div class="form-wrap">
      <Form ref="form" :model="userInfo">
        <FormItem label="" prop="phoneNo">
          <Input type="text" v-model="userInfo.phoneNo"></Input>
        </FormItem>
        <FormItem label="" prop="password">
          <Input type="password" v-model="userInfo.password"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="login" long>登录</Button>
          <Button type="ghost" @click="toRegister" style="margin-top:10px" long>去注册</Button>
        </FormItem>
      </Form>
      </p>
    </div>
  </div>
</template>
<script>
import { login } from "@/api/sj/user";

export default {
  name: "sjLogin",
  data() {
    return {
      userInfo: {}
    };
  },
  mounted() {},
  methods: {
    // 去注册
    toRegister() {
      this.$router.push({ path: "/sj/register" });
    },
    // 去登录
    login() {
      let self = this;
      self.$Spin.show();
      login(this.userInfo).then(res => {
        let data = res.data.data;
        if (res.data.code === 200) {
          // 登录成功
          setTimeout(function() {
            self.$Spin.hide();
            self.$router.push({ name: "sjIndex" });
          }, 1000);
        } else {
          self.$Spin.hide();
          this.$Message.error(data.msg);
        }
      });
    }
  }
};
</script>

