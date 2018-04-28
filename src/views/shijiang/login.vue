<!--用户登陆-->
<template>
  <div class="container sj_login">
    <div class="form-wrap">
      <form>
        <div class="form-controller">
          <input class="common-input" v-model="userInfo.phone" placeholder="手机号或邮箱" type="text"/>
        </div>
        <div class="form-controller">
          <input class="common-input" v-model="userInfo.password" placeholder="密码" type="password"/>
        </div>
      </form>
      <p class="text_center">
        <button class="sub_btn" @click="login()" type="button">登录</button>
      </p>
      <p class="text_center">
        <button class="sub_btn" @click="toRegister" type="button">去注册</button>
      </p>
    </div>
  </div>
</template>
<script>
  import { login } from '@/api/sj/user'

  export default {
    name: 'sjLogin',
    data () {
      return {
        userInfo: {}
      }
    },
    mounted () { },
    methods: {
      // 去注册
      toRegister(){
        this.$router.push({path: '/sj/register'})
      },
      // 去登录
      login(){
        login(this.userInfo).then(res => {
          alert('登录成功')
        })
      }
    }
  }
</script>

