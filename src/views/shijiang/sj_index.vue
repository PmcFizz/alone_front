<!--职场首页 -->
<template>
  <div class="sj_index">
    <div class="container">
      <div class="log_wrap">
        <img :src="logImgSrc" width="270px" height="129px" />
      </div>
      <div class="search_wrap">
        <sj-input-search v-model="searchWord" :placeholder="searchPlaceholder" :options="filteredList" @getSelectedOption="getSelectedOption" width="80%">
          <template slot-scope="{option}">
            <span>{{option.name}}</span>
          </template>
        </sj-input-search>
        <span class="search_btn" @click="showDialog=true">{{searchBtnText}}</span>
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
    <!-- 弹出窗 -->
    <sj-dialog :visible.sync="showDialog" title="欢迎" @confirm="confirm">
      <div>hello visitor</div>
    </sj-dialog>
  </div>
</template>
<script>
import user_img from "../../assets/img/user_img2.jpg";
import logImgSrc from "../../assets/img/sj.png";
import { queryCompanyByPage } from "@/api/sj/company";
import SjDialog from "@/components/common/SjDialog";
import SjInputSearch from "@/components/common/SjInputSearch";
export default {
  name: "sjIndex",
  data() {
    return {
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
  components: {
    SjDialog,
    SjInputSearch
  },
  watch: {
    searchWord: {
      handler(newVal) {
        let self = this;
        queryCompanyByPage({
          name: newVal
        }).then(res => {
          if (res.status === 200) {
            self.filteredList = res.data.data;
          } else {
            self.filteredList = [];
          }
        });
      },
      immediate: true
    }
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
    confirm() {
      alert(1);
    }
  }
};
</script>