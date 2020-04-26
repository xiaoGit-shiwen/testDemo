<template>
  <div>
    <div ref="myChart" style="height: 300px; width: 100%"></div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item  prop="region">
        <el-select v-model="formInline.region" placeholder="请选择子账号">
          <el-option  v-model=user.name lable="" v-for="(user) in list" v-bind:key="user.id"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-popover
      placement="left"
      title="标题"
      width="400px"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <el-button slot="reference">click 激活</el-button>
    </el-popover>
    <el-popover
      placement="top-start"
      width="20px"
      trigger="hover"
      content="这是">
      <el-button slot="reference">hover 激活</el-button>
       <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    </el-popover>
    <el-aside  class="el-aside" style="width:150px">
      <el-menu :default-openeds="['1','2']" style="height:100%">
          <el-submenu index="1" class="ell" v-for="item in valueeee.opt1" :key="item.id">
            <template slot="title" style="padding: 0px" :model="valueeee">{{item.name}}</template>
            <el-menu-item-group v-for="list in item.tree1" :key="list.id">
              <el-menu-item>{{list.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
      </el-menu>
    </el-aside>
      <input placeholder="请输入账号" type="text">
      <input placeholder="请输入密码" type="password" @keyup.enter="login">
      <button @click="login">登录</button>
    <Asingleadd></Asingleadd>
    </div>
</template>
<script>
import Asingleadd from '@/components/OrganizationAndManagement/bypassaccount/Asingleadd'
export default {
  name: 'test',
  data () {
    return {
      valueeee: {
        opt1: [
          {id: 1, name: '呼叫管理', tree1: [{id: 1, name: '任务管理', componentname: ''}]},
          {id: 2, name: '数据分析', tree1: [{id: 1, name: '任务分析', componentname: ''}]},
          {id: 3, name: '客户管理', tree1: [{id: 1, name: '通话流水', componentname: ''}]},
          {id: 4, name: '组织管理', tree1: [{id: 1, name: '用户列表', componentname: ''}]},
          {
            id: 5,
            name: '后台维护',
            tree1: [{id: 1, name: '操作日志', componentname: ''}, {id: 2, name: '呼出时间', componentname: ''}]
          }
        ],
        opt2: [
          {id: 1, name: '任务管理'},
          {id: 2, name: '任务分析'}
        ]
      },
      visible: false,
      formInline: {},
      list: [
        {id: 1, name: 'zs1'},
        {id: 2, name: 'zs2'},
        {id: 3, name: 'zs3'}
      ],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      columns1: [
        {
          title: '序号',
          key: 'serNum'
        },
        {
          title: '选择',
          key: 'choose',
          align: 'center',
          render: (h, params) => {
            if (params.row.status !== '1' && params.row.status !== '2') {
              return h('div', [
                h('checkbox', {
                  props: {
                    type: 'selection'
                  },
                  on: {
                    'input': (val) => {
                      console.log(val)
                    }
                  }
                })
              ])
            } else {
              return h('span', {
                style: {
                  color: '#587dde',
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    // this.$router.push({name: '', query: { id: params.row.id }})
                  }
                }
              }, '查看订单')
            }
          }
        }
      ]
    }
  },
  components: {
    Asingleadd
  },
  methods: {
    login () {
      console.log('哎呀，登录中...')
    },
    /* getExcel (res) {
      require.ensure([], () => {
        const { export_json_to_excel } = require('@/vendor/Export2Excel.js')
        const tHeader = ['姓名', '年龄']
        const filterVal = ['name', 'age']
        const list = res
        const data = this.formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, '导出列表名称')
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }, */
    /* handleDownload () {
      this.downloadLoading = true
      require.ensure([], () => {
        const {export_json_to_excel} = require('src/vendor/Export2Excel')
        const tHeader = Util.cutValue(this.columns1, 'title')
        const filterVal = Util.cutValue(this.columns1, 'key')
        const list = this.tableData1
        const data = this.formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, '列表excel')
        this.downloadLoading = false
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }, */
    /* utils.cutValue = function (target, name) {
      let arr = []
      for (let i = 0; i < target.length; i++) {
        arr.push(target[i][name])
      }
      return arr
    }, */
    drawLine () {
      let myChart = this.$echarts.init(this.$refs.myChart)
      myChart.setOption({
        title: {text: '例子'},
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 40, 10, 15, 20]
          }
        ]
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.drawLine()
    })
  }
}
</script>

<style scoped>

</style>
