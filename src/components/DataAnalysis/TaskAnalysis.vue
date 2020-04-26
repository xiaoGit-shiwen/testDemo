<template>
  <div class="block" >
    <el-select v-model="value11" placeholder="请选择子账号" style="width: 150px">
      <el-option v-for="item in options.optio1" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
      <el-input v-model="input" placeholder="搜索任务名称" style="width: 150px"></el-input>
    <el-select v-model="value12" placeholder="请选择话术模板" style="width: 150px">
      <el-option v-for="item in options.optio2" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="value13" placeholder="请选择任务状态" style="width: 150px">
      <el-option v-for="item in options.optio3" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>      <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
      </el-date-picker>
      <el-button type="primary" icon="el-icon-search"></el-button>
    <div class="fff"></div>
    <div>
      <el-container>
        <el-aside width="352px">
          <el-card class="box-card" shadow="always">
          <div class="text item">
            <span>测试1</span>
            <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
            <div><span>开始时间:</span></div>
            <div><span>结束时间:</span></div>
            <div><span>创建人:</span></div>
          </div>
        </el-card>
          <el-card class="box-card" shadow="always">
            <div class="text item">
              <span>测试2</span>
              <el-progress :text-inside="true" :stroke-width="22" :percentage="50" status="warning"></el-progress>
              <div><span>开始时间:</span></div>
              <div><span>结束时间:</span></div>
              <div><span>创建人:</span></div>
            </div>
          </el-card>
        </el-aside>
        <el-main>
          <div class="bbb">
          <el-row style="padding-left: 30px">
            <el-col :span="2" align="center">
              <div class="ddd">
              <div><span>已呼数:</span></div>
              <div class="size"><span>2个</span></div>
              </div>
            </el-col>
            <el-col :span="2" align="center">
              <div class="ddd">
              <div><span>未呼数:</span></div>
              <div class="size"><span>2个</span></div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="ddd" align="center">
              <div><span>接通数:</span></div>
              <div class="size"><span>2个</span></div>
              </div>
            </el-col>
            <el-col :span="3" align="center">
              <div class="ddd">
              <div><span>接通率:</span></div>
              <div class="size"><span>50%</span></div>
              </div>
            </el-col>
            <el-col :span="3" align="center">
              <div class="ddd">
              <div><span>总通话时长:</span></div>
              <div class="size"><span>2秒</span></div>
              </div>
            </el-col>
            <el-col :span="3" align="center">
              <div class="ddd">
              <div><span>平均通话时长:</span></div>
              <div class="size"> <span>2秒</span></div>
              </div>
            </el-col>
            <el-col :span="3" align="center">
              <div class="ddd">
                <div><span>A/B/C客户类型:</span><span @click="AS()" style="color: deepskyblue">切换ABC</span></div>
              <div class="size"><span>2个</span></div>
              </div>
            </el-col>
            <el-col :span="3" align="center">
              <div class="ddd">
              <div><span>意向客户比例:</span></div>
              <div class="size"><span>2%</span></div>
              </div>
            </el-col>
            <el-col :span="3" align="center">
              <div class="ddd">
              <div><span>转人工坐席次数:</span></div>
              <div class="size"><span>2次</span></div>
              </div>
            </el-col>
          </el-row>
          </div>
          <div class="ccc">
            <div class="aaa"></div>
          </div>
          <div>
            <el-row>
              <el-col :span="14" style="padding-top: 20px;padding-left: 20px">
                <div class="ap">
                <div ref="myChart" style="height:300px"></div>
                </div>
              </el-col>
             <el-col :span="9" align="center" style="padding-top: 50px;padding-left:55px">
                <div ref="myChart2" style="height:300px"></div>
              </el-col>
            </el-row>
          </div>
          <div style="padding-left: 20px">
          <div class="ad">
            <span>热门问题</span>
          </div>
            <div class="adc"></div>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskAnalysis',
  data () {
    return {
      options: {
        optio1: [{value: '选项1', label: '黄金糕'},
          {value: '选项2', label: '双皮奶'},
          {value: '选项3', label: '蚵仔煎'},
          {value: '选项4', label: '龙须面'},
          {value: '选项5', label: '北京烤鸭'}
        ],
        optio2: [{value: '选项1', label: '黄金糕'},
          {value: '选项2', label: '双皮奶'},
          {value: '选项3', label: '蚵仔煎'},
          {value: '选项4', label: '龙须面'},
          {value: '选项5', label: '北京烤鸭'}
        ],
        optio3: [{value: '选项1', label: '黄金糕'},
          {value: '选项2', label: '双皮奶'},
          {value: '选项3', label: '蚵仔煎'},
          {value: '选项4', label: '龙须面'},
          {value: '选项5', label: '北京烤鸭'}
        ]
      },
      value2: '',
      value11: '',
      value12: '',
      value13: ''
    }
  },
  methods: {
    format (percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    },
    drawLine () {
      let myChart = this.$echarts.init(this.$refs.myChart)
      myChart.setOption({
        title: {text: '分类统计'},
        /* color: ['#3398DB'], */
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['A类', 'B类', 'C类', 'D类', 'E类', 'F类', 'G类']
        },
        // 控制边距
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['A类', 'B类', 'C类', 'D类', 'E类', 'F类', 'G类'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '数量',
            type: 'bar',
            // 设置柱子的宽度
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220],
            // 配置样式
            itemStyle: {
              // 通常情况下:
              normal: {
                // 每个柱子的颜色既为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params) {
                  let colorList = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622']
                  return colorList[params.dataIndex]
                }
              }
            }
          }
        ]
      })
    },
    bingtu () {
      let myChart2 = this.$echarts.init(this.$refs.myChart2)
      myChart2.setOption({
        tooltip: {
          tooltip: 'item',
          formatter: '{a}<br/>{b}:{c}({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: ['A类', 'B类', 'C类', 'D类', 'E类', 'F类', 'G类']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            // 鼠标悬停时
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 335, name: 'A类'},
              {value: 310, name: 'B类'},
              {value: 234, name: 'C类'},
              {value: 135, name: 'D类'},
              {value: 1548, name: 'E类'},
              {value: 200, name: 'F类'},
              {value: 400, name: 'G类'}
            ]
          }
        ]
      })
    },
    AS () {
      alert('你好')
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.drawLine()
      this.bingtu()
    })
  }
}
</script>

<style scoped>
  .aaa{
    background-color:#E6E3E3;
    height:1px;
    padding-top: 3px;
  }
  .bbb{
    padding-bottom: 20px;
  }
  .ccc{
    padding-left: 20px;
  }
  .ddd{
    border-left: solid 2px #C0C0C0;
    height: 50px;
    vertical-align: middle;
    margin-top: 20px;
  }
  .fff{
    background-color:#E6E3E3;
    height:1px;
    padding-top: 1px;
  }
  .el-input{
 width: 150px;
  }
  .block{
    text-align: left;
    padding-left: 10px;
  }
  .text {
    font-size: 14px;
  }
  .item{
    padding: 0px 0;
  }
  .box-card{
    width: 340px;
    height: 240px;
  }
  .el-row{
    font-size: 13px;
  }
  .size{
    font-size: 25px;
  }
  .el-aside{
    padding-left: 10px;
    background-color: aliceblue;
  }
  .ad{
    padding-left: 6px;
    font-size: 18px;
    font-family: "Arial Unicode MS";
    border-left: solid 3px dodgerblue;
    height: 23px;
    vertical-align: middle;
    //display: inline-block;
  }
  .ap{
    border-left: solid 3px dodgerblue;
    height: 23px;
    vertical-align: middle;
   // display: inline-block;
   // margin-top: 20px;
  }
  .adc{

  }
</style>
