<template>
  <transition name="fade">
    <div class="dialog" v-if="visible">
      <div class="sj-dialog-mask" @click="closeDialog"></div>
      <div class="sj-dialog-wrap">
        <div class="sj-dialog-header">
          <div class="sj-dialog-header-inner">
            {{title}}
          </div>
          <a class="sj-dialog-close" @click="closeDialog">X</a>
        </div>
        <!-- 内容 -->
        <div class="sj-dialog-content">
          <slot v-if="typeof content === 'undefined'">
          </slot>
          <p v-else>{{content}}</p>
        </div>
        <!-- 底部栏 -->
        <div class="sj-dialog-footer">
          <button type="button" class="sj-btn-text sj-btn-large" @click="closeDialog">
            <span>取消</span>
          </button>
          <button type="button" class="sj-btn-primary sj-btn-large" @click="confirm">
            <span>确定</span>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "SjDialog",
  props: {
    // 显示隐藏
    visible: {
      type: Boolean,
      default: false
    },
    // 弹窗标题
    title: {
      type: String
    },
    // 内容(也可以通过slot导入)
    content: {
      type: String
    }
  },
  data() {
    return {
    };
  },
  methods:{
    closeDialog(){
      this.$emit('update:visible',false)
    },
    confirm(){
      this.$emit('confirm')
      this.closeDialog()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dialog {
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  -webkit-overflow-scrolling: touch;
  outline: 0;
  * {
    box-sizing: border-box;
  }
  .sj-dialog-wrap {
    width: 520px;
    // width: auto;
    margin: 0 auto;
    background-color: #fff;
    position: relative;
    outline: 0;
    top: 100px;
    border-radius: 4px;
    z-index: 1001;
    .sj-dialog-header {
      border-bottom: 1px solid #e9eaec;
      padding: 14px 16px;
      line-height: 1;
      .sj-dialog-close {
        display: block;
        color: #a99e90;
        &:hover {
          color: #655b4d;
        }
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        position: absolute;
        right: 16px;
        top: 8px;
        overflow: hidden;
        cursor: pointer;
      }
      .sj-dialog-header-inner {
        display: inline-block;
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #1c2438;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
      }
    }
    .sj-dialog-content {
      padding: 16px;
      font-size: 12px;
      line-height: 1.5;
    }
    .sj-dialog-footer {
      border-top: 1px solid #e9eaec;
      padding: 12px 18px;
      text-align: right;
      button {
        border: 0;
        cursor: pointer;
      }
      button + button {
        margin-left: 8px;
        margin-bottom: 0;
      }
      .sj-btn-large {
        padding: 6px 15px 7px;
        font-size: 14px;
        border-radius: 2px;
      }

      .sj-btn-primary {
        color: #fff;
        background-color: #3385ff;
        border-color: #3385ff;
        &:hover {
          background-color: #4c91f7;
          border-color: #4c91f7;
        }
      }
      .sj-btn-text {
        color: #495060;
        background-color: transparent;
        border-color: transparent;
        &:hover {
          color: #3385ff;
        }
      }
    }
  }
  .sj-dialog-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(55, 55, 55, 0.6);
    width: 100%;
    height: 100%;
    z-index: 1000;
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
