<!--布局 -->
<template>
  <div class="sj_index">
    <Header class="sj_header">
      <router-link :to="{name:'sjIndex'}" class="sj_logo_box">
        <img class="sj_logo" src="../../assets/img/icon.png" alt="师匠logo">
      </router-link>
      <div class="sj_user_box">
        <div v-if="isLogin">
          <Dropdown style="margin-left: 20px">
            <a href="javascript:void(0)" @click="jumpTo('sjUserManage')">
              <Avatar icon="person" class="avatar" />
              <span>{{userInfo.nickName}}</span>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem @click.native="jumpTo('sjUserManage')">我的信息</DropdownItem>
              <DropdownItem @click.native="logout()">注销</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div v-else>
          <router-link :to="{name:'sjLogin'}">登录</router-link>
          <router-link :to="{name:'sjRegister'}">注册</router-link>
        </div>
      </div>
    </Header>
    <router-view></router-view>
  </div>
</template>
<script>
import { queryMyInfo, logout } from "@/api/sj/user"
export default {
  name: "sjLayout",
  data() {
    return {
      isLogin: false,
      userInfo: {
        nickName: ""
      },
    };
  },
  mounted() {
    let self = this
    // 获取当前用户信息
    queryMyInfo({}).then(res => {
      let data = res.data.data;
      if (res.data.code === 200) {
        self.isLogin = true;
        self.userInfo = res.data.data;
      }
    });
  },
  methods: {
    // 路由跳转
    jumpTo(name) {
      this.$router.push({name:name});
    },
    logout() {
      let self = this;
      logout().then(res => {
        let data = res.data.data;
        if (res.data.code === 200) {
          // 注销成功
          document.location.reload();
        } else {
          this.$Message.error(data.msg);
        }
      });
    },
  }
};
</script>
<style lang="less" scoped>
</style>
