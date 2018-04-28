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
      <p class="text_center">
        <button class="sub_btn" @click="toLogin" type="button">去登录</button>
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
      },
      // 去登录
      toLogin () {
        this.$router.push({ path: '/sj/login'})
      }
    }
  }
</script>
