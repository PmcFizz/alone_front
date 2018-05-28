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
          }, {
            interfaceName: '添加公司接口',
            interfaceURL: '/api/company/createOne',
            requestWay: 'POST | JSON',
            sendData: [
              {prototype: 'name', des: '公司名', mustHave: true, remark: '无'},
              {prototype: 'shortName', des: '公司短名', mustHave: false, remark: '无'},
              {prototype: 'companyLink', des: '公司链接', mustHave: false, remark: '无'},
              {prototype: 'logo', des: '公司logo地址', mustHave: false, remark: '无'},
              {prototype: 'createUserId', des: '创建人id', mustHave: false, remark: '无'},
              {prototype: 'basic', des: '融资阶段,人数,类型,地址', mustHave: false, remark: '对象Object'},
              {prototype: 'type', des: '公司类型', mustHave: false, remark: '无'},
              {prototype: 'companyAddress', des: '公司地址', mustHave: false, remark: '无'},
              {prototype: 'tags', des: '标签', mustHave: false, remark: '数字Array'},
              {prototype: 'companyIntroText', des: '公司介绍', mustHave: false, remark: '无'}
            ],
            returnData: `{
                "code": 200,
                  "data": {
                  "msg": "添加成功"
                },
                  "msg": "请求成功"
                }`
          }, {
            interfaceName: '添加任职经历接口',
            interfaceURL: '/api/occupationalHistory/createOne',
            requestWay: 'POST | JSON',
            sendData: [
              {prototype: 'companyName', des: '公司名', mustHave: true, remark: '无'},
              {prototype: 'startTime', des: '开始任职时间', mustHave: false, remark: '时间格式为2018-05-12'},
              {prototype: 'endTime', des: '结束任职时间', mustHave: false, remark: '无'},
              {prototype: 'position', des: '职位', mustHave: false, remark: '无'},
              {prototype: 'userId', des: '用户id', mustHave: false, remark: '无'},
              {prototype: 'workDes', des: '工作描述', mustHave: false, remark: '无'},
              {prototype: 'createUserId', des: '创建人id', mustHave: false, remark: '无'}
            ],
            returnData: `{
                "code": 200,
                  "data": {
                  "msg": "添加成功"
                },
                  "msg": "请求成功"
                }`
          }, {
            interfaceName: '添加公司评价接口',
            interfaceURL: '/api/evaluate/createOne',
            requestWay: 'POST | JSON',
            sendData: [
              {prototype: 'content', des: '评价内容', mustHave: true, remark: '无'},
              {prototype: 'companyId', des: '公司id', mustHave: false, remark: ''},
              {prototype: 'createUserId', des: '创建人id', mustHave: false, remark: '无'},
              {prototype: 'createDate', des: '创建时间', mustHave: false, remark: '无'},
              {prototype: 'status', des: '状态', mustHave: false, remark: '无'},
              {prototype: 'lastModifiedDate', des: '最后更新', mustHave: false, remark: '无'}
            ],
            returnData: `{
                "code": 200,
                  "data": {
                  "msg": "添加成功"
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
