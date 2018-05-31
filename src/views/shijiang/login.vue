<!--用户登陆-->
<template>
  <div class="container sj_login">
    <div class="form-wrap">
      <form>
        <div class="form-controller">
          <input class="common-input" v-model="userInfo.phoneNo" placeholder="手机号" type="text" />
        </div>
        <div class="form-controller">
          <input class="common-input" v-model="userInfo.password" placeholder="密码" type="password" />
        </div>
      </form>
      <p class="text_center">
        <button class="sub_btn" @click="login()" type="button">登录</button>
      </p>
      <p class="text_center">
        <button class="sub_btn" @click="toRegister" type="button">去注册</button>
      </p>
    </div>
    <!-- 弹出窗 -->
    <sj-dialog :visible.sync="dialog.show" :title="dialog.title" @confirm="dialog.cb">
      <div>{{dialog.msg}}</div>
    </sj-dialog>
  </div>
</template>
<script>
import { login } from "@/api/sj/user";
import SjDialog from "@/components/common/SjDialog";

export default {
  name: "sjLogin",
  components: {
    SjDialog
  },
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
  mounted() {},
  methods: {
    // 去注册
    toRegister() {
      this.$router.push({ path: "/sj/register" });
    },
    // 去登录
    login() {
      let self = this
      login(this.userInfo).then(res => {
        // alert('登录成功')
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
    }
  }
};
</script>

