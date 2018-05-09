<!--职场首页 -->
<template>
  <div class="sj_index">
    <div class="container">
      <div class="log_wrap">
        <img :src="logImgSrc" width="270px" height="129px"/>
      </div>
      <div class="search_wrap">
        <input class="main_search_input" :placeholder="searchPlaceholder" v-model="searchWord"/><span
        class="search_btn">{{searchBtnText}}</span>
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
  import user_img from '../../assets/img/user_img2.jpg'
  import logImgSrc from '../../assets/img/sj.png'
  export default {
    name: 'sjIndex',
    data () {
      return {
        logImgSrc,
        searchPlaceholder: '请输入你要查询的公司',
        searchWord: '',
        searchBtnText: '反击一下',
        searchResultData: [{}, {}, {}, {}, {}, {}, {}],
        user_img
      }
    },
    mounted(){

    },
    methods: {
      // 搜索分页获取数据
      getDataByPage(){

      },
      // 默认加载最新问答
      getNewestInfo(){

      }
    }
  }
</script>
<style lang="scss">
  .sj_index {
    background-color: #fff;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    .container {
      position: relative;
      width: 750px;
      padding: 0 16px;
      margin: 10px auto;
      min-height: 200px;
      .log_wrap {
        width: 100%;
        text-align: center;
        img {
          width: 270px;
          height: 129px;
        }
      }
      .search_wrap {
        width: 80%;
        margin: 0 auto;
        .main_search_input {
          border: 1px solid #b6b6b6;
          background: #fff;
          display: inline-block;
          overflow: hidden;
          height: 34px;
          width: 80%;
          outline: none;
          padding-left: 5px;
        }
        .search_btn {
          display: inline-block;
          vertical-align: top;
          width: 100px;
          height: 34px;
          color: #fff;
          font-size: 15px;
          letter-spacing: 1px;
          border: 1px solid #3385ff;
          background: #3385ff;
          line-height: 36px;
          cursor: pointer;
        }
      }
      .search_result {
        margin-top: 20px;
        padding: 20px;
        .search_result_item {
          float: left;
          min-height: 100px;
          max-height: 200px;
          border: 1px solid #ddd;
          margin-bottom: 15px;
          padding: 12px 20px;
          text-align: left;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
          .user_info {
            display: block;
            width: 100%;
            text-align: left;
            margin-bottom: 12px;
            .user_info_img {
              border-radius: 2px;
              vertical-align: top;
            }
            .user_name {
              color: #444;
              font-weight: 600;
            }
            .user_des {
              margin-top: 0;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #646464;
              font-size: 14px;
            }
          }
          .question_title {
            float: left;
            display: block;
            color: #1a1a1a;
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: 0px;
            margin-bottom: 9px;
            width: 100%;
          }
          .answer {
            float: left;
            font-weight: 400;
            white-space: normal;
            margin-bottom: -4px;
            max-height: 42px;
            margin-top: 0px;
            overflow: hidden;
            text-overflow: ellipsis;
          }

        }
      }
    }
  }
</style>
