<!--用户管理-->
<template>
  <div class="sj_user_manage container">
    <Card class="sj_userinfo_box">
      <p slot="title">
        <Icon type="person"></Icon>
        用户信息
      </p>
      <a href="#" slot="extra" v-if="!isEdit" @click.prevent="editUser()">
        <Icon type="edit"></Icon>
        编辑
      </a>
      <a href="#" slot="extra" v-if="isEdit" @click.prevent="cancelEdit()">
        <Icon type="android-cancel"></Icon>
        取消
      </a>
      <Form ref="user" :model="user" :rules="ruleValidate" :label-width="80">
        <FormItem label="用户名" prop="nickName">
          <Input v-model="user.nickName" placeholder="请输入用户名" v-if="isEdit"></Input>
          <span v-else>{{user.nickName}}</span>
        </FormItem>
        <FormItem label="手机号" prop="phoneNo">
          <Input v-model="user.phoneNo" placeholder="请输入手机号" v-if="isEdit"></Input>
          <span v-else>{{user.phoneNo}}</span>
        </FormItem>
        <FormItem label="邮箱地址" prop="email">
          <Input v-model="user.email" placeholder="请输入邮箱地址" v-if="isEdit"></Input>
          <span v-else>{{user.email}}</span>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="submitForm('user')" v-if="isEdit">提交</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script>
import { queryMyInfo, updateUserInfo } from "@/api/sj/user";

export default {
  name: "sjUserManage",
  data() {
    return {
      isEdit: false,
      user: {
        nickName: "",
        phoneNo: "",
        email: ""
      },
      ruleValidate: {
        nickName: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        phoneNo: [
          {
            required: true,
            message: "手机号不能为空",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "邮箱不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    // 获取用户信息
    getUserInfo() {
      this.$Spin.show();
      queryMyInfo().then(res => {
        this.$Spin.hide();
        let data = res.data.data;
        this.user.nickName = data.nickName;
        this.user.email = data.email;
        this.user.phoneNo = data.phoneNo + "";
      });
    },
    // 编辑用户信息
    editUser() {
      this.isEdit = !this.isEdit;
      // 暂存数据
      this.temporaryUser = JSON.parse(JSON.stringify(this.user));
    },
    // 取消编辑
    cancelEdit() {
      this.isEdit = !this.isEdit;
      this.user = this.temporaryUser;
      this.temporaryUser = null;
    },
    // 更新用户信息
    submitForm(ref) {
      let self = this;
      if (this.handleSubmit(ref)) {
        updateUserInfo(this.user).then(res => {
          if (res.data.code == 200) {
            self.$Message.success(res.data.data.msg);
            self.isEdit = false;
          } else {
            self.$Message.error(res.data.data.msg);
          }
        });
      }
    },
    handleSubmit(name) {
      let isCorrect;
      this.$refs[name].validate(valid => {
        isCorrect = valid;
      });
      return isCorrect;
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
<style lang="less">
.container {
  position: relative;
  width: 750px;
  padding: 0 16px;
  margin: 10px auto;
  min-height: 200px;
  .form-wrap {
    width: 530px;
    margin: 0 auto;
    .form-controller {
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      width: 530px;
      font-size: 14px;
      background: #fff;
      border: 1px solid #ebebeb;
      border-radius: 3px;
      box-sizing: border-box;
      transition: background 0.2s, border 0.2s;
      padding: 6px 12px;
      margin-bottom: 12px;
      :focus {
        border: 1px solid #8590a6;
      }
      .common-input {
        padding: 0;
        overflow: hidden;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        background: transparent;
        border: none;
        outline: none;
        resize: none;
        color: #1a1a1a;
        width: 100%;
        margin-left: 0;
        height: 30px;
        margin-top: 2px;
        margin-bottom: 2px;
        line-height: 24px;
      }
    }
  }
  .sub_btn {
    width: 232px;
    margin-top: 28px;
    margin-right: auto;
    margin-left: auto;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
    border: 1px solid;
    border-radius: 3px;
    outline: none;
    padding: 2px 5px;
    color: #fff;
    background-color: #0084ff;
  }
}
</style>
