<!--师匠接口文档 -->
<template>
  <div class="container interfaceDoc">
    <ul class="interface-ul">
      <li class="interface-item" v-for="(item,index) in interaceDocArr">
        <p class="des" @click="toggleShow(index)">{{item.interfaceName}}{{item.interfaceURL}}</p>
        <div class="detail" v-show="showIndex === index">
          <p>请求方式和数据格式:{{item.requestWay}}</p>
          <p style="margin-top: 10px">请求参数:</p>
          <table class="send-data">
            <thead>
            <tr>
              <td>字段属性</td>
              <td>字段描述</td>
              <td>是否必填</td>
              <td>备注</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="sendItem in item.sendData">
              <td>{{sendItem.prototype}}</td>
              <td>{{sendItem.des}}</td>
              <td>{{sendItem.mustHave}}</td>
              <td>{{sendItem.remark}}</td>
            </tr>
            </tbody>
          </table>
          <p>返回参数:</p>
          <p class="return-data" v-html="item.returnData">
          </p>
        </div>
      </li>
    </ul>

  </div>
</template>
<script>
  export default {
    name: 'sjInterfaceDoc',
    data () {
      return {
        interaceDocArr: [ // 接口文档数据
          {
            interfaceName: '用户注册接口',
            interfaceURL: '/api/user/createOne',
            requestWay: 'POST | JSON',
            sendData: [{prototype: 'name', des: '用户名', mustHave: true, remark: '无'}],
            returnData: `{
                "code": 200,
                  "data": {
                  "msg": "注册成功"
                },
                  "msg": "请求成功"
                }`
          }
        ],
        showIndex: -1
      }
    },
    components: {},
    methods: {
      toggleShow (index) {
        if (this.showIndex !== index) {
          this.showIndex = index
        } else {
          this.showIndex = -1
        }
      }
    }
  }
</script>
