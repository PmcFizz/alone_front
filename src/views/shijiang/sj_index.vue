<!--职场首页 -->
<template>
  <div class="sj_index">
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
          <div class="search_result_item" v-for="item in searchResultData" :key="item._id" @click="toCompanyPage(item._id)">
            <Card class="user_info">
              <p slot="title">
                <img height="24" width="24" class="user_info_img" :src="item.logo" />
                <span class="user_name">{{item.name}}</span>
              </p>
              <Row class="">
                <Col span="3">公司简介</Col>
                <Col span="21" class="limitTwoRow">{{item.company_intro_text}}</Col>
              </Row>
              <Row class="marginTop20" style="color:#3385ff;">0条评论</Row>
              <!-- <p class="question_title">深圳xxxxxxx公司怎么样？</p>
              <p class="answer">
                当我们谈论这家公司的时候，其实我们是在谈论这家公司的制度，福利，领导的人品，以及未来的发展等等 首先说。。。。。。。。。。。
              </p> -->
            </Card>
          </div>
        </template>
        <template v-else>
          <Card class="noCompanys">
            <p>没找到相关公司</p>
          </Card>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import user_img from "../../assets/img/user_img2.jpg";
import logImgSrc from "../../assets/img/sj.png";
import { queryCompanyByPage } from "@/api/sj/company";
export default {
  name: "sjIndex",
  data() {
    return {
      loading1: false,
      logImgSrc,
      searchPlaceholder: "请输入你要查询的公司",
      query: "",
      searchWord: "",
      searchBtnText: "反击一下",
      searchResultData: [{}, {}, {}, {}, {}],
      user_img,
      showDialog: false,
      filteredList: [],
      // 选中的公司
      curCompany: {}
    };
  },
  mounted() {
    let self = this;
    self.search();
  },
  methods: {
    // 搜索分页获取数据
    getDataByPage() {},
    // 默认加载最新问答
    getNewestInfo() {},
    // 搜索
    search() {
      let self = this;
      queryCompanyByPage({
        name: self.query
      }).then(res => {
        let data = res.data.data;
        if (res.data.code === 200) {
          self.searchResultData = data.records;
        } else {
          self.searchResultData = [];
        }
      });
    },
    remoteMethod(query) {
      let self = this
      self.query = query
      if (query !== "") {
        this.loading1 = true;
        queryCompanyByPage({
          name: query
        }).then(res => {
          let data = res.data.data;
          if (res.data.code === 200) {
            this.loading1 = false;
            self.filteredList = data.records;
          } else {
            self.filteredList = [];
          }
        });
      } else {
        this.filteredList = [];
      }
    },
    confirm() {
      alert(1);
    },
    toCompanyPage(id){
      this.$router.push({name:'sjCompany',params:{id:id}});
    }
  }
};
</script>