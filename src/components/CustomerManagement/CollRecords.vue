<template>
      <div class="block" >
        <el-row>
          <el-col :span="18">
       <el-select v-model="value11" placeholder="请输入话术模板" style="width: 150px">
         <el-option v-for="item in options.optio1" :key="item.value" :label="item.label" :value="item.value">
         </el-option>
       </el-select>
            <el-select v-model="value12" placeholder="请选择子账号" style="width: 150px">
              <el-option v-for="item in options.optio2" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="value13" placeholder="请选择通话类型" style="width: 150px">
              <el-option v-for="item in options.optio3" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          <el-input v-model="input1" placeholder="任务名称/姓名/电话/标签/子分类" style="width: 200px"></el-input>
          <span class="demonstration"></span>
          <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
          </el-date-picker>
          <el-input v-model="input2" placeholder="通话时长≥"></el-input>
          <el-input v-model="input3" placeholder="通话时长≤"></el-input>
          </el-col>
          <el-col :span="1" class="el-span">
            <el-tooltip content="分享" placement="bottom" effect="light">
              <span><i class="el-icon-share"></i></span>
            </el-tooltip>
          </el-col>
          <el-col :span="1" class="el-span">
            <el-tooltip content="测试" placement="bottom" effect="light">
            <span><i class="el-icon-download"></i></span>
            </el-tooltip>
          </el-col>
          <el-col :span="1" class="el-span">
            <el-tooltip content="设置" placement="bottom" effect="light">
            <span><i class="el-icon-setting"></i></span>
            </el-tooltip>
          </el-col>
          <el-col :span="1" class="el-span">
            <el-tooltip content="删除" placement="bottom" effect="light">
            <span><i class="el-icon-delete"></i></span>
            </el-tooltip>
          </el-col>
          <el-col :span="1" class="el-span">
            <el-tooltip content="测试" placement="bottom" effect="light">
            <span><i class="el-icon-mobile-phone"></i></span>
            </el-tooltip>
          </el-col>
          <el-col :span="1" class="el-span">
            <el-tooltip content="刷新" placement="bottom" effect="light">
            <span><i class="el-icon-refresh-right"></i></span>
            </el-tooltip>
          </el-col>
        </el-row>
        <div>
          <span style="color: dodgerblue" class="spans">展开更过筛选</span>
          <el-button type="primary" icon="el-icon-search" style="font-size: 2px" @click="screen()"></el-button>
        </div>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        </el-checkbox-group>
        <div>
    <el-table :data="tableData" style="width:100%" @selection-change="changeFun" border>
      <el-table-column type="selection" style="width: 55px"></el-table-column>
      <el-table-column prop="serialnumber" label="序号" width="55"></el-table-column>
      <el-table-column prop="operation" label="操作" width="200"></el-table-column>
      <el-table-column prop="state" label="状态" width="55"></el-table-column>
      <el-table-column prop="classify" label="分类" width="55"></el-table-column>
      <el-table-column prop="callrecords" label="通话流水" width="100"></el-table-column>
      <el-table-column prop="hostnumber" label="主叫号码" width="100"></el-table-column>
      <el-table-column prop="phone" label="电话" width="100"></el-table-column>
      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="label" label="标签" width="55"></el-table-column>
      <el-table-column prop="value" label="分值" width="55"></el-table-column>
      <el-table-column prop="gender" label="性别" width="100"></el-table-column>
      <el-table-column prop="company" label="公司" width="100"></el-table-column>
      <el-table-column prop="site" lable="地址" width="100"></el-table-column>
      <el-table-column prop="endtime" label="通话结束时间" width="120"></el-table-column>
      <el-table-column prop="outboundtime" label="外呼时间" width="100"></el-table-column>
      <el-table-column prop="customerremarks" label="客户备注" width="100"></el-table-column>
      <el-table-column prop="BreatheOutTheResults" label="呼出结果" width="200"></el-table-column>
      <el-table-column prop="turnonTime" label="接通时间" width="200"></el-table-column>
      <el-table-column prop="founder" label="创建人" width="200"></el-table-column>
      <el-table-column prop="bypassaccount" label="子账号" width="200"></el-table-column>
      <el-table-column prop="taskname" label="任务名称" width="200"></el-table-column>
      <el-table-column prop="templatename" label="模板名称" width="200"></el-table-column>
      <el-table-column prop="Numberofprobleminteractions" label="问题互动次数" width="200"></el-table-column>
      <el-table-column prop="jumpoutofthenode" label="跳出节点" width="200"></el-table-column>
      <el-table-column prop="numberhome" label="号码归属地" width="200"></el-table-column>
      <el-table-column prop="subclassification" label="子分类" width="200"></el-table-column>
      <el-table-column prop="manualintervention" label="人工介入" width="200"></el-table-column>
      <el-table-column prop="calltype" label="通话类型" width="200"></el-table-column>
    </el-table>
        </div>
      </div>
</template>
<script>
const cityOptions = ['A类', 'B类', 'C类', 'D类', 'E类', 'F类', 'G类']
export default {
  name: 'CollRecords',
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
      value13: '',
      tableData: [{serialnumber: 1, operation: 1, state: 1, classify: 1, callrecords: 1, hostnumber: 1, phone: 1, name: 1, label: 1, value: 1, gender: 1, company: 1, site: 1, endtime: 1, outboundtime: 1, customerremarks: 1, exhalationresule: 1, BreatheOutTheResults: 1, turnonTime: 1, founder: 1, bypassaccount: 1, taskname: 1, templatename: 1, Numberofprobleminteractions: 1, jumpoutofthenode: 1, numberhome: 1, subclassification: 1, manualintervention: 1, calltype: 1},
        {serialnumber: 1, operation: 1, state: 1, classify: 1, callrecords: 1, hostnumber: 1, phone: 1, name: 1, label: 1, value: 1, gender: 1, company: 1, site: 1, endtime: 1, outboundtime: 1, customerremarks: 1, exhalationresule: 1, BreatheOutTheResults: 1, turnonTime: 1, founder: 1, bypassaccount: 1, taskname: 1, templatename: 1, Numberofprobleminteractions: 1, jumpoutofthenode: 1, numberhome: 1, subclassification: 1, manualintervention: 1, calltype: 1}],
      input1: '',
      input2: '',
      input3: '',
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true
    }
  },
  methods: {
    handleCheckAllChange (val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
    screen () {
      console.log(1)
    }
  }
}
</script>

<style scoped>
  .el-input{
    width: 110px;
  }
  .block{
    text-align: left;
    padding-left: 10px;
  }
  .el-span{
    padding-top: 11px;
    font-size: 20px;
  }
  .spans {
    font-size: 15px;
    font-family: "Arial Unicode MS";
  }
</style>
