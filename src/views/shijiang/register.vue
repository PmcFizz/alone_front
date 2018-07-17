<!--注册用户-->
<template>
  <div class="sj_register container">
    <div class="form-wrap">
      <Form ref="form" :model="userInfo" :rules="ruleValidate">
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
        <FormItem label="" prop="passwordcheck">
          <Input type="password" v-model="userInfo.passwordcheck" placeholder="密码"></Input>
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
import { isPhoneNumber, isValidPassword } from "@/utils/validate";
import util from "@/utils/util";
export default {
  name: "sjRegister",
  data() {
    const validatePhoneNo = (rule, value, callback) => {
      if (!isPhoneNumber(value)) {
        callback(new Error("手机号必须是11位数字"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (!isValidPassword(value)) {
        callback(
          new Error(
            "密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线"
          )
        );
      } else {
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value !== this.userInfo.password) {
        callback(new Error("两次密码不一样"));
      } else if (!isValidPassword(value)) {
        callback(
          new Error(
            "密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线"
          )
        );
      } else {
        callback();
      }
    };
    return {
      userInfo: {},
      ruleValidate: {
        nickName: [
          {
            required: true,
            message: "昵称不能为空",
            trigger: "blur"
          }
        ],
        phoneNo: [
          {
            required: true,
            message: "手机号不能为空",
            trigger: "blur"
          },
          {
            validator: validatePhoneNo,
            trigger: "blur"
          }
        ],
        email: [
          {
            type: "email",
            message: "邮箱格式不正确",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            validator: validatePass,
            trigger: "blur"
          }
        ],
        passwordcheck: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            validator: validatePassCheck,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // 提交用户信息
    submitUserInfo() {
      let self = this;
      if (!util.handleSubmit(self, "form")) {
        return false;
      }
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
