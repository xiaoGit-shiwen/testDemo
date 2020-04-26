<template>
<div>
 <!-- <el-row>
    <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
      <el-card :body-style="{ padding: '3px' }">
        <div style="padding: 10px;">
          <div class="bottom clearfix">
            <time class="time"></time>
          </div>
        </div>
        <el-card style="width: 400px">
        </el-card>
      </el-card>
    </el-col>
  </el-row>-->
 <div class="ggg">
    <el-card class="box-card">
      <div class="ad">
        <el-row style="height: 40px">
          <el-col :span="22" class="lll">
        <span class="ap">子账号</span>
          </el-col>
          <el-col :span="2" style="font-size: 22px" class="kkkk">
        <el-tooltip content="添加" placement="bottom" effect="light">
       <i class="el-icon-circle-plus-outline" @click="add()"></i>
        </el-tooltip>
          </el-col>
        </el-row>
      </div>
      <div style="padding-top: 10px">
      <div class="fff"></div>
      </div>
      <div style="padding-top: 20px">
        <el-input placeholder="搜索账号/姓名" suffix-icon="el-icon-search" v-model="input1"></el-input>
      </div>
      <div style="padding-top: 20px">
      </div>
      <el-card class="vvv">
        <div>
          <el-row>
            <el-col :span="3"><el-avatar :size="55"></el-avatar></el-col>
            <el-col :span="14" class="qqq"><span>用户名</span><br><span>子账号</span></el-col>
            <el-col :span="2" class="bbb">
              <el-tooltip content="详情" placement="bottom" effect="light">
              <i class="el-icon-reading"></i>
              </el-tooltip>
            </el-col>
            <el-col :span="2" class="bbb">
              <el-tooltip content="编辑" placement="bottom" effect="light">
              <i class="el-icon-edit"></i>
              </el-tooltip>
            </el-col>
            <el-col :span="2" class="bbb">
              <el-tooltip content="刷新" placement="bottom" effect="light">
              <i class="el-icon-delete"></i>
              </el-tooltip>
            </el-col>
          </el-row>
        </div>
        <div class=adc>
        <div>
          <el-row style="padding-bottom: 10px">
            <el-col :span="12" style="text-align: left">
          <span>AI数:1</span>
            </el-col>
            <el-col :span="12" style="text-align: left">
            <span>主叫号码:900102</span>
            </el-col>
          </el-row>
        </div>
          <div>
          <el-row style="padding-bottom: 10px">
            <el-col :span="12" style="text-align: left">
          <span>呼入话术:不知道</span>
            </el-col>
            <el-col :span="12" style="text-align: left">
              <span>呼入号码:8257381</span>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-row>
            <el-col :span="12" style="text-align: left">
          <span>技能组:&#45;&#45;</span>
            </el-col>
            <el-col :span="12" style="text-align: left;">
            <span>登入时间:2020-04-08 18:21:19</span>
            </el-col>
          </el-row>
        </div>
        </div>
      </el-card>
    </el-card>
  </div>
    <div>
    <el-dialog title="新增子账号" :visible.sync="dialogEditFormVisible" class="pub_dialog">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick" @edit="handleTabsEdit">
        <el-tab-pane label="单个添加" name="first">
          <Asingleadd></Asingleadd>
        </el-tab-pane>
        <el-tab-pane label="批量添加" name="second">
          <batchadd></batchadd>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</div>
</template>
<script>
import Asingleadd from '@/components/OrganizationAndManagement/bypassaccount/Asingleadd'
import batchadd from '@/components/OrganizationAndManagement/bypassaccount/batchadd'
export default {
  name: 'UsersList',
  data () {
    return {
      activeName: 'first',
      input: '',
      dialogEditFormVisible: false,
      ruleForm: {},
      rules: {
        name: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        region: [
          {required: true, message: '请选择活动区域', trigger: 'change'}
        ],
        date1: [
          {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
        ],
        date2: [
          {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
        ],
        type: [
          {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
        ],
        resource: [
          {required: true, message: '请选择活动资源', trigger: 'change'}
        ],
        desc: [
          {required: true, message: '请填写活动形式', trigger: 'blur'}
        ]
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }]
    }
  },
  components: {
    Asingleadd,
    batchadd
  },
  created () {
    this.aaa()
  },
  methods: {
    add () {
      this.dialogEditFormVisible = true
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleClick (tab, enent) {

    },
    aaa () {
      document.getElementById('ggg').style.position = 'fixed'
    }
  }
}
</script>
<style scoped>
  .ad{
    padding-left: 6px;
    font-size: 18px;
    font-family: "Arial Unicode MS";
    border-left: solid 3px dodgerblue;
    height: 32px;
    vertical-align: middle;
  //display: inline-block;
  }
  .ap{
    text-align: left;
    font-family: "Arial Unicode MS";
    font-size: 22px
  }
  .adc{
    font-size: 15px;
    font-family: "Arial Unicode MS";
    padding-top: 40px
  }
  .qqq{
    padding-left: 5px;
    padding-top: 10px;
    text-align: left;
    font-family: "Arial Unicode MS";
    font-size: 13px;
  }
  .bbb{
    padding-top: 15px;
    font-size: 22px;
    align-content: center;
  }
  .el-card{
    height: 700px;
    width: 500px;
  }
  .vvv{
    height:auto;
    width: 460px;
  }
  .lll{
    text-align: left
  }
  .fff{
    background-color:#E6E3E3;
    height:1px;
    padding-top: 1px;
  }
  .ggg{
    padding-left: 10px
  }
  .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
  }
  /*.pub_dialog {
    display: flex;
    justify-content: center;
    align-items: Center;
    overflow: hidden;
  .el-dialog {
    margin: 0 auto !important;
    height: 90%;
    overflow: hidden;
  .el-dialog__body {
    position: absolute;
    left: 0;
    top: 54px;
    bottom: 0;
    right: 0;
    padding: 0;
    z-index: 1;
    overflow: hidden;
    overflow-y: auto;
  }
  }
  }*/
  /*.abow_dialog {
    display: flex;
    justify-content: center;
    align-items: Center;
    overflow: hidden;
  }

  el-dialog {
    margin: 0 auto !important;
    height: 70%;
    overflow: hidden;
  }
 el-dialog__body {
    position: absolute;
    left: 0;
    top: 54px;
    bottom: 0;
    right: 0;
    padding: 0;
    z-index: 1;
    overflow: hidden;
    overflow-y: auto;
  }*/
</style>
