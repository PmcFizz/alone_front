<!--职场首页 -->
<template>
  <div class="sj_index">
    <Header class="sj_header">
      <div class="sj_user_box">
        <div v-if="isLogin">
          <Dropdown style="margin-left: 20px">
            <a href="javascript:void(0)" @click="jumpTo('userManage')">
              <Avatar icon="person" class="avatar" />
              <span>{{userInfo.nickName}}</span>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem @click.native="jumpTo('userManage')">我的信息</DropdownItem>
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
    <div class="container">
      <div class="log_wrap">
        <img :src="logImgSrc" width="270px" height="129px" />
      </div>
      <div class="search_wrap">
        <Row>
          <Col span="18" style="padding-right:10px">
          <Select v-model="searchWord" :placeholder="searchPlaceholder" filterable remote :remote-method="remoteMethod" :loading="loading1">
            <Option v-for="option in filteredList" :value="option.name" :key="option._id">{{option.name}}</Option>
          </Select>
          </Col>
          <Col span="6">
          <span class="search_btn" @click="search">{{searchBtnText}}</span>
          </Col>
        </Row>
      </div>
      <div class="search_result">
        <template v-if="searchResultData.length>0">
          <div class="search_result_item" v-for="item in searchResultData">
            <Card class="user_info float-left">
              <p slot="title">
                <img height="24" width="24" class="user_info_img" :src="user_img" />
                <span class="user_name">是晚</span>
                <span class="user_des">爱好吃喝拉撒睡</span>
              </p>
              <!-- <a href="#" slot="extra" @click.prevent="changeLimit">
              <Icon type="ios-loop-strong"></Icon>
              Change
            </a> -->
              <p class="question_title">深圳xxxxxxx公司怎么样？</p>
              <p class="answer">
                当我们谈论这家公司的时候，其实我们是在谈论这家公司的制度，福利，领导的人品，以及未来的发展等等 首先说。。。。。。。。。。。
              </p>
            </Card>
          </div>
        </template>
        <template v-else>
          <Card class="nocomments">
            <p><span class="curCompany">{{curCompany.name}}</span>公司目前还没有评论哦！╮(๑•́ ₃•̀๑)╭</p>
            <Button type="primary">我来评论~</Button>
          </Card>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import user_img from "../../assets/img/user_img2.jpg";
import logImgSrc from "../../assets/img/sj.png";
import { queryMyInfo, logout } from "@/api/sj/user";
import { queryCompanyByKeyWord } from "@/api/sj/company";
export default {
  name: "sjIndex",
  data() {
    return {
      isLogin: false,
      userInfo: {
        nickName: ""
      },
      loading1: false,
      logImgSrc,
      searchPlaceholder: "请输入你要查询的公司",
      searchWord: "",
      searchBtnText: "反击一下",
      searchResultData: [{},{},{},{},{}],
      user_img,
      showDialog: false,
      filteredList: [],
      // 选中的公司
      curCompany:{}
    };
  },
  mounted() {
    let self = this;
    queryMyInfo({}).then(res => {
      let data = res.data.data;
      if (res.data.code === 200) {
        self.isLogin = true;
        self.userInfo = res.data.data;
      }
    });
  },
  methods: {
    // 搜索分页获取数据
    getDataByPage() {},
    // 默认加载最新问答
    getNewestInfo() {},
    // 获取选中的数据
    getSelectedOption(obj) {
      this.curCompany = obj;
      this.searchWord = obj.name;
      console.log("selected", obj);
    },
    // 搜索
    search(){
      // 此处会有个接口
      this.searchResultData = []
    },
    remoteMethod(query) {
      let self = this;
      if (query !== "") {
        this.loading1 = true;
        queryCompanyByKeyWord({
          name: query
        }).then(res => {
          let data = res.data.data;
          if (res.data.code === 200) {
            this.loading1 = false;
            self.filteredList = data;
          } else {
            self.filteredList = [];
          }
        });
      } else {
        this.filteredList = [];
      }
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
    confirm() {
      alert(1);
    },
    // 路由跳转
    jumpTo(name) {
      this.$router.push(name);
    }
  }
};
</script>