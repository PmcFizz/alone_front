<!--注册用户-->
<template>
  <div class="sj_register container">
    <div class="form-wrap">
      <form>
        <div class="form-controller">
          <input class="common-input" v-model="userInfo.name" placeholder="昵称" type="text"/>
        </div>
        <div class="form-controller">
          <input class="common-input" v-model="userInfo.phoneNo" placeholder="手机号" type="text"/>
        </div>
        <div class="form-controller">
          <input class="common-input" v-model="userInfo.email" placeholder="邮箱" type="text"/>
        </div>
        <div class="form-controller">
          <input class="common-input" v-model="userInfo.password" placeholder="密码" type="password"/>
        </div>
      </form>
      <p class="text_center">
        <button class="sub_btn" @click="submitUserInfo" type="button">注册</button>
      </p>
    </div>
  </div>
</template>
<script>
  import { regiseterUser } from '@/api/sj/user'

  export default {
    name: 'sjRegister',
    data () {
      return {
        userInfo: {}
      }
    },
    methods: {
      // 提交用户信息
      submitUserInfo () {
        regiseterUser(this.userInfo).then(res => {
          alert('创建成功')
        })
      }
    }
  }
</script>
<style lang="scss">
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
        transition: background .2s, border .2s;
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
