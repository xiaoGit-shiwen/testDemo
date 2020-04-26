<template>
<div class="compentStyle">
    <el-row >
      <el-col :span="17">
        <el-select v-model="value12" placeholder="请选择子账号" style="width: 150px">
          <el-option v-for="item in options.optio1" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-input v-model="input" placeholder="搜索任务名称"></el-input>
        <el-select v-model="value13" placeholder="请选择话术模板" style="width: 150px">
          <el-option v-for="item in options.optio2" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value14" placeholder="请选择任务状态" style="width: 150px">
          <el-option v-for="item in options.optio3" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions"></el-date-picker>
        <el-button type="primary" icon="el-icon-search" :click="search()"></el-button>
    </el-col>
      <el-col :span="1" align="center" class="el-span">
        <el-tooltip content="任务" placement="bottom" effect="light">
          <span @click="a()"><i class="el-icon-s-claim"></i></span>
        </el-tooltip>
      </el-col>
      <el-col :span="1" align="center" class="el-span">
        <el-tooltip content="添加" placement="bottom" effect="light">
          <span @click="b()"><i class="el-icon-circle-plus-outline"></i></span>
        </el-tooltip>
      </el-col>
      <el-col :span="1" align="center" class="el-span">
        <el-tooltip content="暂停" placement="bottom" effect="light">
          <span @click="c()"><i class="el-icon-video-play"></i></span>
        </el-tooltip>
      </el-col>
      <el-col :span="1" align="center" class="el-span">
        <el-tooltip content="播放" placement="bottom" effect="light">
          <span @click="d()"><i class="el-icon-video-pause"></i></span>
        </el-tooltip>
      </el-col>
      <el-col :span="1" align="center" class="el-span">
        <el-tooltip content="下载" placement="bottom" effect="light">
          <span @click="d()"><i class="el-icon-bottom"></i></span>
        </el-tooltip>
      </el-col>
      <el-col :span="1" align="center" class="el-span">
        <el-tooltip content="删除" placement="bottom" effect="light">
      <span @click="Delete()"><i class="el-icon-delete"></i></span>
        </el-tooltip>
       </el-col>
       <el-col :span="1" align="center" class="el-span">
        <el-tooltip content="刷新" placement="bottom" effect="light">
        <span @click="refresh()"><i class="el-icon-refresh"></i></span>
        </el-tooltip>
       </el-col>
    </el-row>
    <el-table :data="tableData" class="tableStyle"  height="calc(100%)" @selection-change="changeFun"  border>
      <el-table-column type="selection" style="width: 55px"></el-table-column>
      <el-table-column prop="serialnumber" label="序号" width="55"></el-table-column>
      <el-table-column prop="operation" label="操作" width="100"></el-table-column>
      <el-table-column prop="taskname" label="任务名称" width="100"></el-table-column>
      <el-table-column prop="templatename" label="模板名称" width="100"></el-table-column>
      <el-table-column prop="starttime" label="开始时间" width="125"></el-table-column>
      <el-table-column prop="endtime" label="结束时间" width="125"></el-table-column>
      <el-table-column prop="breatheoutstate" label="呼出状态" width="100"></el-table-column>
      <el-table-column prop="total" label="总数" width="100"></el-table-column>
      <el-table-column prop="unnamed" label="未呼" width="100"></el-table-column>
      <el-table-column prop="hasbeencalled" label="已呼" width="100"></el-table-column>
      <el-table-column prop="succeed" label="成功" width="100"></el-table-column>
      <el-table-column prop="bedefeated" label="失败" width="100"></el-table-column>
      <el-table-column prop="callcompleting" label="接通率" width="100"></el-table-column>
      <el-table-column prop="creator" label="创建人" width="100"></el-table-column>
      <el-table-column prop="bypassaccount" label="子账号" width="150"></el-table-column>
      <el-table-column prop="describe" label="描述" width="150"></el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {
  name: 'TaskManagement',
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
      input: '',
      value12: '',
      value13: '',
      value14: '',
      value2: '',
      tableData: [{serialnumber: 1, operation: 1, taskname: 1, templatename: 1, starttime: 1, endtime: 1, breatheoutstate: 1, total: 1, unnamed: 1, hasbeencalled: 1, succeed: 1, bedefeated: 1, callcompleting: 1, creator: 1, bypassaccount: 1, describe: 1}]
    }
  },
  methods: {
    search () {
      console.log(1)
    },
    screen () {
      console.log(1)
    },
    Delete () {
      console.log(1)
    },
    refresh () {
      console.log(1)
    }
  }
}
</script>

<style scoped>
  .el-input{
    width: 150px;
  }
  .block{
    text-align: left;
    padding-left: 10px;
  }
  .el-span{
    font-size: 20px;
    padding-top: 11px;
  }
  .el-button--primary{
    font-size: 10px;
  }
</style>
