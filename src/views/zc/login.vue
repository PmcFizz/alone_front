<!--用户登陆-->
<template>
  <div class="zc_login">
11111111111
  </div>
</template>
<script>
  import { regiseterUser } from '@/api/zc/user'

  export default {
    name: 'zcLogin',
    data () {
      return {}
    },
    mounted () {
      regiseterUser().then(res => {
        console.log(res)
      })
    },
    methods: {}
  }
</script>
