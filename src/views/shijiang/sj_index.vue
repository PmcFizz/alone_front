<!--职场首页 -->
<template>
  <div class="sj_index">
    <Header class="sj_header">
      <div class="sj_user_box">
        <div v-if="isLogin">
          <Avatar icon="person" class="avatar"/>
          <a>{{userInfo.nickName}}</a>
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
          <span class="search_btn" @click="showDialog=true">{{searchBtnText}}</span>
          </Col>
        </Row>
      </div>
      <div class="search_result">
        <div class="search_result_item" v-for="item in searchResultData">
          <div class="user_info float-left">
            <img height="24" width="24" class="user_info_img" :src="user_img" />
            <span class="user_name">是晚</span>
            <span class="user_des">爱好吃喝拉撒睡</span>
          </div>
          <p class="question_title">深圳xxxxxxx公司怎么样？</p>
          <p class="answer">
            当我们谈论这家公司的时候，其实我们是在谈论这家公司的制度，福利，领导的人品，以及未来的发展等等 首先说。。。。。。。。。。。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import user_img from "../../assets/img/user_img2.jpg";
import logImgSrc from "../../assets/img/sj.png";
import { queryMyInfo } from "@/api/sj/user";
import { queryCompanyByPage } from "@/api/sj/company";
export default {
  name: "sjIndex",
  data() {
    return {
      isLogin: false,
      userInfo:{},
      loading1: false,
      logImgSrc,
      searchPlaceholder: "请输入你要查询的公司",
      searchWord: "",
      searchBtnText: "反击一下",
      searchResultData: [{}, {}, {}, {}, {}, {}, {}],
      user_img,
      showDialog: false,
      filteredList: []
    };
  },
  watch: {
    searchWord: {
      handler(newVal) {
        let self = this;
        queryCompanyByPage({
          name: newVal
        }).then(res => {
          if (res.status === 200) {
            self.filteredList = res.data.data.records;
          } else {
            self.filteredList = [];
          }
        });
      },
      immediate: true
    }
  },
  mounted() {
    let self = this
    queryMyInfo({}).then(res => {
      if (res.status === 200) {
        self.isLogin = true
        self.userInfo = res.data.data[0];
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
      this.searchWord = obj.name;
      console.log("selected", obj);
    },
    remoteMethod(query) {
      if (query !== "") {
        this.loading1 = true;
        setTimeout(() => {
          this.loading1 = false;
          const list = this.list.map(item => {
            return {
              value: item,
              label: item
            };
          });
          this.options1 = list.filter(
            item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          );
        }, 200);
      } else {
        this.options1 = [];
      }
    },
    confirm() {
      alert(1);
    }
  }
};
</script>
