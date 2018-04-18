<!--职场首页 -->
<template>
  <div class="zc_index">
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

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'zcIndex',
    data () {
      return {
        logImgSrc: 'https://www.baidu.com/img/bd_logo1.png',
        searchPlaceholder: '请输入你要查询的',
        searchWord: '',
        searchBtnText: '百度一下',
        searchResultData: [{},{},{},{},{},{},{}]
      }
    }
  }
</script>
<style lang="scss">
  .zc_index {
    background-color: #fff;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    .container {
      position: relative;
      width: 1000px;
      padding: 0 16px;
      margin: 10px auto;
      min-height: 200px;
      border: 1px solid #0084ff;
      .log_wrap {
        width: 100%;
        text-align: center;
        img {
          width: 270px;
          height: 129px;
        }
      }
      .search_wrap {
        .main_search_input {
          border: 1px solid #b6b6b6;
          background: #fff;
          display: inline-block;
          overflow: hidden;
          height: 34px;
          width: 539px;
          outline: none;
          padding-left: 5px;
        }
        .search_btn {
          display: inline-block;
          vertical-align: top;
          width: 100px;
          height: 36px;
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
          min-height: 100px;
          max-height: 200px;
          border: 1px solid #ddd;
          margin-bottom: 15px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
        }
      }
    }
  }
</style>
