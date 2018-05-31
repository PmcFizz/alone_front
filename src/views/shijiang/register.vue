<!--注册用户-->
<template>
  <div class="sj_register container">
    <div class="form-wrap">
      <form>
        <div class="form-controller">
          <input class="common-input" v-model="userInfo.name" placeholder="昵称" type="text" />
        </div>
        <div class="form-controller">
          <input class="common-input" v-model="userInfo.phoneNo" placeholder="手机号" type="text" />
        </div>
        <div class="form-controller">
          <input class="common-input" v-model="userInfo.email" placeholder="邮箱" type="text" />
        </div>
        <div class="form-controller">
          <input class="common-input" v-model="userInfo.password" placeholder="密码" type="password" />
        </div>
      </form>
      <p class="text_center">
        <button class="sub_btn" @click="submitUserInfo" type="button">注册</button>
      </p>
      <p class="text_center">
        <button class="sub_btn" @click="toLogin" type="button">去登录</button>
      </p>
    </div>
    <!-- 弹出窗 -->
    <sj-dialog :visible.sync="dialog.show" :title="dialog.title" @confirm="dialog.cb">
      <div>{{dialog.msg}}</div>
    </sj-dialog>
  </div>
</template>
<script>
import { regiseterUser } from "@/api/sj/user";

export default {
  name: "sjRegister",
  data() {
    return {
      // 弹窗
      dialog: {
        show: false,
        title: "提示",
        msg: "",
        cb() {
          //
        }
      },
      userInfo: {}
    };
  },
  methods: {
    // 提交用户信息
    submitUserInfo() {
      let self = this;
      regiseterUser(this.userInfo).then(res => {
        // alert('创建成功')
        let data = res.data.data;
        self.dialog.show = true;
        if (res.data.code === 200) {
          // 注册成功
          let i = 3;
          let timer = null;
          let msg = `注册成功！页面将于${i}秒后跳转...`;
          self.dialog.msg = msg;
          setInterval(function() {
            self.dialog.msg = `注册成功！页面将于${i}秒后跳转...`;
            if (!i--) {
              clearInterval(timer);
              self.$router.push({ name: "sjIndex" });
            }
          }, 1000);
        } else {
          self.dialog.msg = data.msg;
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
