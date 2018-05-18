<template>
    <div class="search_input_box" :style="{width:width}">
        <input type="text" :placeholder="placeholder" :value="value" @input="$emit('input',$event.target.value)" @focus="focusState=true" @blur="blurSearchInput($event.target.value)" :class="['main_search_input',focusState ? 'main_search_input_focus' : '']">
        <transition name="fade">
            <div class="search_recommend" v-if="focusState">
                <ul>
                    <li class="search_recommend_item" v-for="option in options" :key="option.id" @click="emitItem(option)">
                        <slot :option="option"></slot>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: "SjInputSearch",
  props: {
    // 搜索推荐列表
    options: {
      type: Array,
      default: function() {
        return [];
      }
    },
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: "请输入搜索内容"
    },
    width: {
      type: String,
      default: "300px"
    }
  },
  data() {
    return {
      focusState: false
    };
  },
  methods: {
    blurSearchInput(value) {
      this.focusState = false;
      this.$emit("input", value);
    },
    // 传递选中项信息
    emitItem(item) {
      this.$emit("getSelectedOption", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.search_input_box {
  display: inline-block;
  text-align: left;
  position: relative;
  .main_search_input {
    border: 1px solid #b6b6b6;
    background: #fff;
    display: inline-block;
    overflow: hidden;
    height: 36px;
    width: 100%;
    outline: none;
    text-indent: 5px;
    box-sizing: border-box;
  }
  .main_search_input_focus {
    border: 1px solid #0084ff;
  }
  .search_recommend {
    position: absolute;
    background: #fff;
    width: 100%;
    border: 1px solid transparent;
    outline: none;
    overflow: hidden;
    margin-top: 2px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
    transition: opacity 0.3s ease, transform 0.3s ease,
      -webkit-transform 0.3s ease;
    box-sizing: border-box;
    .search_recommend_item {
      width: 100%;
      padding: 3px 3px 3px 8px;
      text-align: left;
      height: 34px;
      line-height: 34px;
      box-sizing: border-box;
      &:hover {
        background-color: #f6f6f6;
        cursor: pointer;
      }
    }
  }
}
</style>
