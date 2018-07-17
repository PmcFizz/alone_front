<!--公司-->
<template>
  <div class="sj_company">
    <div class="container">
      <Card class="sj_company_box">
        <Row :gutter="10">
          <Col span="3">
          <img :src="company.logo" alt="company.shortName">
          </Col>
          <Col span="21">
          <h2 class="company_name">
            <a :href="company.href" target="blank">{{company.name}}</a>
          </h2>
          <p>"{{company.company_word}}"</p>
          <p class="company_basic">
            <Icon type="bookmark"></Icon>
            <span>{{company.basic?company.basic.type:''}}</span>
            <Icon type="arrow-graph-up-right"></Icon>
            <span>{{company.basic?company.basic.process:''}}</span>
            <Icon type="ios-person"></Icon>
            <span>{{company.basic?company.basic.number:''}}</span>
            <Icon type="ios-location"></Icon>
            <span>{{company.basic?company.basic.address:''}}</span>
            <span class="toggleTag" @click="isTextHide=!isTextHide">{{isTextHide?'展开':'收起'}}</span>
          </p>
          <p :class="['marginTop10','company_intro',isTextHide?'limitThreeRow':'']">
            <span>简介：</span>
            {{company.company_intro_text}}
          </p>
          </Col>
        </Row>
      </Card>
      <Card shadow>
        <Button type="primary" @click="$Notice.warning({ title: '页面还没做呢'})">我要提问题</Button>
        <Button type="info" class="marginLeft10" @click="toComment">我要评价</Button>
      </Card>
      <div class="user_comment">
        <!-- 评价区 -->
        <transition name="fade" mode="out-in">
          <Col class="my_comment marginTop20 marginBottom20" v-if="isShow">
          <Row>
            <Form ref="form" :model="user" :rules="ruleValidate">
              <FormItem label="" prop="comment">
                <Input v-model="user.comment" type="textarea" :rows="4" placeholder="点评一下这一家公司"></Input>
              </FormItem>
            </Form>
          </Row>
          <Row>
            <Button class="c_submit marginTop10" type="primary" @click="confirmComment">提交</Button>
            <Button class="c_submit marginTop10 marginRight10" type="ghost" @click="cancelComment">取消</Button>
          </Row>
          </Col>
        </transition>
        <!-- 展示区 -->
        <template v-if="comments.length>0">
          <Card class="user_comment_item" v-for="item in comments" :key="item._id">
            <p class="comment_head" slot="title">
              <img class="head_picture" :src="item.headPicture">
              <span>{{item.nickName}}</span>
            </p>
            <p class="comment_content">
              {{item.content}}
            </p>
          </Card>
        </template>
        <template v-else>
          <Card class="no_comment">
            <h2>该公司还没有对应的问题和评价哦~</h2>
          </Card>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { queryCompanyById } from "@/api/sj/company";
import { createOneEvaluate, queryCompanyEvaluate } from "@/api/sj/evaluate";
import util from "@/utils/util";
export default {
  name: "sjCompany",
  data() {
    return {
      ruleValidate: {
        comment: [
          {
            required: true,
            message: "评论不能为空",
            trigger: "blur"
          }
        ]
      },
      id: this.$route.params.id,
      company: {},
      isTextHide: true,
      comments: [],
      user: {},
      // 我的评价
      isShow: false,
      content: ""
    };
  },
  mounted() {
    let id = this.id;
    this.getCompanyInfo(id);
    this.getCompanyEvaluate(id);
  },
  methods: {
    // 获取公司信息
    getCompanyInfo(id) {
      let self = this;
      queryCompanyById({ _id: id }).then(res => {
        let data = res.data.data;
        if (res.data.code === 200) {
          self.company = data;
        } else {
          self.$Message.error(data.msg);
        }
      });
    },
    // 获取公司评论
    getCompanyEvaluate(id) {
      let self = this;
      queryCompanyEvaluate({ _id: id }).then(res => {
        let data = res.data.data;
        if (res.data.code === 200) {
          self.comments = data;
        } else {
          self.$Message.error(data.msg);
        }
      });
    },
    toComment() {
      this.isShow = true;
      this.user.comment = "";
    },
    confirmComment() {
      let self = this;
      if (!util.handleSubmit(self, "form")) {
        return false;
      }
      createOneEvaluate({
        content: self.user.comment,
        companyId: self.$route.params.id
      }).then(res => {
        let data = res.data.data;
        if (res.data.code === 200) {
          self.isShow = false;
          self.$Message.success("评价成功");
          // 获取评论
          self.getCompanyEvaluate(self.id);
        } else {
          self.$Message.error(data.msg);
        }
      });
    },
    cancelComment() {
      let self = this;
      self.isShow = false;
    }
  }
};
</script>
<style lang="less" scoped>
.sj_company {
  .sj_company_box {
    img {
      padding: 10px;
    }
    .company_basic {
      font-size: 18px;
      color: #bbbec4;
      span {
        font-size: 12px;
      }
    }
    .company_name {
      &:hover {
        color: #3385ff;
      }
    }
    .company_intro {
      position: relative;
      span {
        color: #495060;
      }
    }
    .toggleTag {
      float: right;
      padding: 2px;
      margin-right: 2px;
      background-color: #bbbec4;
      color: #fff;
      cursor: pointer;
    }
  }
  .user_comment {
    margin-top: 30px;
    .user_comment_item {
      margin-top: 10px;
      .comment_head {
        height: 30px;
        line-height: 30px;
        > * {
          float: left;
          display: block;
          margin-right: 10px;
          height: 30px;
        }
      }
      .head_picture {
        width: 30px;
        height: 30px;
      }
    }
    .no_comment {
      width: 100%;
      min-height: 300px;
      h2 {
        margin: 30px 0;
      }
      text-align: center;
    }
    .my_comment {
      .c_submit {
        float: right;
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
