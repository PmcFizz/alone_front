<!--评论 -->
<template>
  <div class="sj_evaluate">
    <div class="container">
      <h1 class="title">写下你对{{companyName}}的评论</h1>
      <p class="title_des">描述精确的问题更易得到解答</p>
      <div class="form-wrap">
        <Form ref="user" :model="user" :rules="ruleValidate" :label-width="80">
          <FormItem label="用户名" prop="nickName">
            <Input v-model="user.nickName" placeholder="请输入用户名" v-if="isEdit"></Input>
            <span v-else>{{user.nickName}}</span>
          </FormItem>
          <FormItem label="手机号" prop="phoneNo">
            <Input v-model="user.phoneNo" placeholder="请输入手机号" v-if="isEdit"></Input>
            <span v-else>{{user.phoneNo}}</span>
          </FormItem>
          <FormItem label="邮箱地址" prop="email">
            <Input v-model="user.email" placeholder="请输入邮箱地址" v-if="isEdit"></Input>
            <span v-else>{{user.email}}</span>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="submitForm('user')" v-if="isEdit">提交</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sjAsk",
  data() {
    return {
      askForm: {
        title: "",
        companyName: "",
        questionDes: "",
        isHideName: false
      }
    };
  },
  mounted() {},
  methods: {
    // 提交问题
    submitQuestion() {
      console.log(this.askForm);
    }
  }
};
</script>
<style lang="less" scoped>
.sj_evaluate {
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
    .title {
      margin-top: 40px;
      font-size: 24px;
      font-weight: 500;
      color: #1a1a1a;
      text-align: center;
      margin-bottom: 0px;
    }
    .title_des {
      padding: 0 38px;
      margin-top: 4px;
      font-size: 14px;
      line-height: 1.5;
      color: #8590a6;
      text-align: center;
      margin-bottom: 10px;
    }
    .form-wrap {
      width: 530px;
      margin: 0 auto;
      .form-controller {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 530px;
        font-size: 14px;
        background: #fff;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        box-sizing: border-box;
        transition: background 0.2s, border 0.2s;
        padding: 6px 12px;
        margin-bottom: 12px;
        :focus {
          border: 1px solid #8590a6;
        }
        .question_title {
          height: 58px;
          width: 100%;
          line-height: 24px;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          background: transparent;
          border: none;
          outline: none;
          resize: none;
          :focus {
            border: 1px solid #8590a6;
          }
        }
        .question_company {
          padding: 0;
          overflow: hidden;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          background: transparent;
          border: none;
          outline: none;
          resize: none;
          color: #1a1a1a;
          width: 100%;
          margin-left: 0;
          height: 30px;
          margin-top: 2px;
          margin-bottom: 2px;
          line-height: 24px;
        }
        .question_des {
          height: 58px;
          width: 100%;
          line-height: 24px;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          background: transparent;
          border: none;
          outline: none;
          resize: none;
          :focus {
            border: 1px solid #8590a6;
          }
        }
      }
      .question_des_tip {
        margin: 5px;
        color: #444;
        font-size: 15px;
        line-height: 25px;
        text-align: left;
      }
      .isHideName {
        color: #8590a6;
        margin-left: 5px;
        cursor: pointer;
      }
      .sub_btn {
        width: 232px;
        margin-top: 28px;
        margin-right: auto;
        margin-left: auto;
        font-size: 14px;
        line-height: 32px;
        text-align: center;
        cursor: pointer;
        border: 1px solid;
        border-radius: 3px;
        outline: none;
        padding: 2px 5px;
        color: #fff;
        background-color: #0084ff;
      }
    }
  }
}
</style>
