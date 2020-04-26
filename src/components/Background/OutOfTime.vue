<template>
<div>
  <el-row>
    <el-col :span="21">
      <div class="" align="left">
      <span class="qq">当前呼出时间为"每天外呼",点击设置可更改(系统工作时间为08:30-21:00)</span>
      </div>
    </el-col>
    <el-col :span="1">
      <div class="el-el" align="center">
        <el-tooltip content="保存" placement="bottom" effect="light">
        <span><i class="el-icon-mobile"></i></span>
        </el-tooltip>
      </div>
    </el-col>
    <el-col :span="1">
      <div class="el-el" align="center">
        <el-tooltip content="设置" placement="bottom" effect="light">
        <span><i class="el-icon-setting"></i></span>
        </el-tooltip>
      </div>
    </el-col>
    <el-col :span="1">
      <div class="el-el" align="center">
        <el-tooltip content="刷新" placement="bottom" effect="light">
        <span><i class="el-icon-refresh"></i></span>
        </el-tooltip>
      </div>
    </el-col>
  </el-row>
  <div class="el-table-padding">
    <el-table :data="tableData" style="width:100%" @selection-change="changeFun" border>
    <el-table-column type="selection" style="width: 65px"></el-table-column>
    <el-table-column prop="serialnumber" label="序号" width="300"></el-table-column>
    <el-table-column prop="starttime" label="开始时间" width="350"></el-table-column>
    <el-table-column prop="endtime" label="结束时间" width="350"></el-table-column>
    <el-table-column prop="indexes" label="索引" width="350"></el-table-column>
    <el-table-column label="开启否" width="350">
      <template slot-scope="scope">
      <el-switch v-model="status" :active-value="1" :inactive-value="0" @change="change($event,status)"></el-switch>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <el-row style="padding-top: 20px">
      <el-col :span="2">
        <el-select v-model="value11" placeholder="请输入话术模板" style="width: 150px">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
      <div class="span1">
      <span >每页50条,共4条</span>
      </div>
      </el-col>
    </el-row>
  </div>
</div>
</div>
</template>
<script>
export default {
  name: 'OutOfTime',
  data () {
    return {
      value11: '',
      status: 1,
      tableData: [{serialnumber: 1, starttime: '2020-01-01', endtime: '2020-01-02', indexes: '12'}],
      options: [
        {value: '选项1', label: '黄金糕'},
        {value: '选项2', label: '双皮奶'},
        {value: '选项3', label: '蚵仔煎'},
        {value: '选项4', label: '龙须面'},
        {value: '选项5', label: '北京烤鸭'}
      ]
    }
  }
}
</script>

<style scoped>
  .block{
    text-align: left
  }
  .el-el{
    font-size: 25px;
  }
  .el-table-padding{
    padding-top: 20px;
    padding-left: 10px
  }
  .qq{
    padding-left: 10px;
    font-size: 15px;
    font-family: "Arial Unicode MS";
  }
  .span1{
    padding-left: 10px;
    padding-top: 12px;
    font-family: "Arial Unicode MS";
  }
</style>
