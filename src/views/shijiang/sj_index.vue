<!--职场首页 -->
<template>
  <div class="sj_index">
    <div class="container">
      <div class="log_wrap">
        <img :src="logImgSrc" width="270px" height="129px" />
      </div>
      <div class="search_wrap">
        <input :class="['main_search_input',focusState ? 'main_search_input_focus' : '']" :placeholder="searchPlaceholder" v-model="searchWord" @focus="focusState=true"
               @blur="focusState=false"/><span class="search_btn">{{searchBtnText}}</span>
        <transition name="fade">
        <div class="search_recommend" v-if="focusState">
          <div class="search_recommend_item" v-for="item in searchRecommendData">
            <p>1111111</p>
          </div>
        </div>
        </transition>
      </div>
      <div class="search_result">
        <div class="search_result_item" v-for="item in searchResultData">
          <div class="user_info float-left">
            <img height="24" width="24" class="user_info_img" :src="user_img"/>
            <span class="user_name">是晚</span>
            <span class="user_des">爱好吃喝拉撒睡</span>
          </div>
          <p class="question_title">深圳xxxxxxx公司怎么样？</p>
          <p class="answer">
            当我们谈论这家公司的时候，其实我们是在谈论这家公司的制度，福利，领导的人品，以及未来的发展等等
            首先说。。。。。。。。。。。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import user_img from '../../assets/img/user_img2.jpg';
import logImgSrc from '../../assets/img/sj.png';
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
      searchRecommendData: [{}, {}, {}, {}, {}, {}, {}],
      focusState: false
    };
  },
  mounted() {},
  methods: {
    // 搜索分页获取数据
    getDataByPage() {},
    // 默认加载最新问答
    getNewestInfo() {},
  }
}
</script>

