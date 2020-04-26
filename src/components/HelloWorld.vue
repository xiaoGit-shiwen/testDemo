<template>
  <div>
  <div id="bardv" ref="chart"></div>
  <h1>你好</h1>
  </div>
</template>
<script>
/* // 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入饼状图组件
require('echarts/lib/chart/pie')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title') */
const DEFAULT_DATA = {
  xAxisData: ['重庆', '西安', '福州', '杭州', '长沙', '南昌'],
  yAxisData: [42, 42, 21, 45, 12, 45]
}

export default {
  name: 'HelloWorld',
  /* 接收外部传入一个label变量 */
  props: ['label', 'itemColor', 'backgroundColor', 'itemDataType', 'xAxisName', 'yAxisName', 'eventType'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      // var bar_dv = document.getElementById('bar_dv');
      var bardv = this.$refs.chart
      if (bardv) {
        console.log('bar_dv不为空')
        let myChart = this.$echarts.init(bardv)
        // 绘制图表 '火炉省会城市极端高温对比'
        myChart.setOption({
          title: {text: this.label},
          color: [this.itemColor],
          backgroundColor: [this.backgroundColor],
          tooltip: {},
          xAxis: {
            name: this.xAxisName,
            data: DEFAULT_DATA.xAxisData,
            nameTextStyle: {
              fontSize: 14,
              fontWeight: 'bolder'
            }
          },
          yAxis: {
            name: this.yAxisName,
            nameTextStyle: {
              fontSize: 14,
              fontWeight: 'bolder'
            }
          },
          series: [{
            name: this.itemDataType,
            type: 'bar',
            data: DEFAULT_DATA.yAxisData
          }]
        })
        console.log('this.eventType:' + this.eventType)
        myChart.on(this.eventType, function (params) {
          window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name))
        })
      } else {
        console.log('bar_dv为空!')
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
