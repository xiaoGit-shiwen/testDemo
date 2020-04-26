<template>
  <div  class="compentStyle">
    <el-row style="height: 60px;padding: 10px;">
      <el-col :span="21">
        <div class="block">
          <!--v-model的value值是选中的值-->
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
            <span class="demonstration"></span>
            <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
            </el-date-picker>
            <el-button type="primary" icon="el-icon-search" @click="search()"></el-button>
        </div>
      </el-col>
      <el-col :span="1" align="center" >
        <el-tooltip content="导出" placement="bottom" effect="light">
       <span class="aa" @click="share()"><i class="el-icon-share"></i></span>
        </el-tooltip>
      </el-col>
      <el-col :span="1">
        <el-tooltip content="刷新" placement="bottom" effect="light">
        <span class="aa" @click="refresh()"><i class="el-icon-refresh-right"></i></span>
        </el-tooltip>
      </el-col>
    </el-row>
  <el-table :data="tableData"  class="tableStyle" height="calc(100% - 100px)"  @selection-change="changeFun" border>
    <el-table-column type="selection" style="width: 55px"></el-table-column>
    <el-table-column prop="serialn_umber" label="序号" width="100"></el-table-column>
    <el-table-column prop="operation_user" label="操作账号" width="150"></el-table-column>
    <el-table-column prop="role" label="角色" width="100"></el-table-column>
    <el-table-column prop="operation_time" label="操作时间" width="200"></el-table-column>
    <el-table-column prop="ip" label="IP地址" width="200"></el-table-column>
    <el-table-column prop="operation_type" label="操作类型" width="200"></el-table-column>
    <el-table-column prop="operation_content" label="操作内容" width="auto"></el-table-column>
  </el-table>
    <div class="tt">
      <div class="block">
        <span class="demonstration"></span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage1"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OperationLog',
  data () {
    return {
      pickerOptions: {
      },
      options: [
        {value: '选项1', label: '黄金糕'},
        {value: '选项2', label: '双皮奶'},
        {value: '选项3', label: '蚵仔煎'},
        {value: '选项4', label: '龙须面'},
        {value: '选项5', label: '北京烤鸭'}
      ],
      value: '',
      value2: '',
      currentPage1: 4,
      tableData: [{serialn_umber: 1, operation_user: 'admin', role: 'admin', operation_time: '2020-01-02', ip: '192.168.1.1', operation_type: '修改数据', operation_content: '查询信息'},
        {serialn_umber: 1, operation_user: 'admin', role: 'admin', operation_time: '2020-01-02', ip: '192.168.1.1', operation_type: '修改数据', operation_content: '查询信息'}]
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log('每页')
    },
    handleCurrentChange (val) {
      console.log('当前也')
    },
    changeFun () {

    },
    // 刷新
    refresh () {
      console.log(1)
    },
    // 分享
    share () {
      console.log(1)
    },
    // 搜索
    search () {
      console.log(1)
    }
  }
}
</script>

<style scoped>
.block{
  text-align: left
}
.tt{
  text-align: left;
}
  .aa {
    font-size: 25px;
  }
  .tableStyle{
    padding-left: 10px;
  }

</style>
