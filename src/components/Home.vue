<template>
<el-container id="home">
  <el-header height="60px" class="el-header">
    <el-row>
      <el-col :span="3">
        <div class="el-icon1">
        <div class="div1"><span>后台管理系统</span></div>
        </div>
      </el-col>
      <el-col :span="15">
        <div class="el-icon2">
        <div class="grid-content bg-purple" align="center">
          <i class ="el-icon-s-fold"></i>
        </div>
        </div>
      </el-col>
      <el-col :span="1" class="el-el">
        <div class="grid-content bg-purple" align="center">
          <i class="el-icon-setting"></i>
        </div>
      </el-col>
      <el-col :span="1" class="el-el">
      <div class="grid-content bg-purple" align="center">
        <i class="el-icon-setting"></i>
      </div>
    </el-col>
      <el-col :span="1" class="el-el">
        <div class="grid-content bg-purple" align="center">
          <i class="el-icon-menu"></i>
        </div>
      </el-col>
      <el-col :span="1" class="el-el">
        <div class="grid-content bg-purple" align="center">
          <i class="el-icon-bell"></i>
        </div>
      </el-col>
      <el-col :span="1" class="el-el">
        <div class="grid-c" align="center">
        <el-avatar style="margin-top: 8px" src="@/assets/logo.png"></el-avatar>
        </div>
      </el-col>
      <el-col :span="1" class="el-el">
        <div class="grid-content bg-purple" align="center">
          <el-dropdown>
            <span class="el-dropdown-link">{{getuserName()}}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="exitLogin()">退出登入</el-dropdown-item>
              <el-dropdown-item>更换账号</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </el-header>
  <el-main>
    <el-container>
      <el-aside>
        <el-menu :default-openeds="[1]" :collapse="isCollapse" class="el">
            <el-submenu :index="item.id" class="ell" v-for="(item,index) in valueeee.opt1" :key="index">
              <template slot="title" style="padding: 0px" :model="valueeee">{{item.name}}</template>
              <el-menu-item-group  :index="item.id" v-for="list in item.tree1" :key="list.id">
                <el-menu-item @click="handleTabsEdit('1','add',list.name,list.componentname)">{{list.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
      </el-aside>
      <el-main>
        <el-tabs v-model="editableTabsValue"  style="height: 100%" type="card" closable @tab-click="handTabClick" @edit="handleTabsEdit">
          <el-tab-pane style="height: 100%"
                       :key="item.name"
                       v-for="(item) in editableTabs"
                       :label="item.title"
                       :name="item.name">
            <div style="height: 100%;width: 100%" >
              <component  v-bind:is="tableContent" ></component>
            </div>
          </el-tab-pane>
        </el-tabs>
        </el-main>
    </el-container>
  </el-main>
</el-container>
</template>
<script>
import Cookies from 'js-cookie'
import OperationLog from '@/components/Background/OperationLog'
import OutOfTime from '@/components/Background/OutOfTime'
import CollRecords from '@/components/CustomerManagement/CollRecords'
import TaskManagement from '@/components/CallManagement/TaskManagement'
import TaskAnalysis from '@/components/DataAnalysis/TaskAnalysis'
import UsersList from '@/components/OrganizationAndManagement/UsersList'
export default {
  name: 'Home',
  data () {
    return {
      valueeee: {
        opt1: [
          {id: 1, name: '呼叫管理', tree1: [{id: 10, name: '任务管理', componentname: 'TaskManagement'}]},
          {id: 2, name: '数据分析', tree1: [{id: 11, name: '任务分析', componentname: 'TaskAnalysis'}]},
          {id: 3, name: '客户管理', tree1: [{id: 12, name: '通话流水', componentname: 'CollRecords'}]},
          {id: 4, name: '组织管理', tree1: [{id: 13, name: '用户列表', componentname: 'UsersList'}]},
          {id: 5, name: '后台维护', tree1: [{id: 14, name: '操作日志', componentname: 'OperationLog'}, {id: 15, name: '呼出时间', componentname: 'OutOfTime'}]
          }
        ]
      },
      collapseBtnClick: false, // 左侧收缩
      isCollapse: false, //  左侧收缩
      tableContent: OperationLog,
      editableTabsValue: 'OperationLog', //  默认展示的组件
      editableTabs: [{
        title: '操作日志',
        name: 'OperationLog',
        content: ''
      }]
    }
  },
  components: {
    OperationLog,
    OutOfTime,
    CollRecords,
    TaskManagement,
    TaskAnalysis,
    UsersList
  },
  methods: {
    // 获取用户名
    getuserName () {
      return Cookies.get('userName')
    },
    // 切换teb
    handTabClick (tab) {
      this.editableTabsValue = tab.name
      this.tableContent = tab.name
    },
    //  增加tab
    handleTabsEdit (targetName, action, title, componentsName) {
      if (action === 'add') {
        let ext = true
        this.editableTabs.forEach((tab, index) => {
          if (tab.title === title) {
            ext = false
          }
        })
        if (ext) {
          // 判断是否增加
          this.editableTabs.push({
            title: title,
            name: componentsName,
            content: componentsName
          })
          this.tableContent = componentsName
          this.editableTabsValue = componentsName
        } else {
          this.editableTabsValue = componentsName
          this.tableContent = componentsName
        }
      }
      // 删除teb
      if (action === 'remove') {
        let tabs = this.editableTabs
        let activeName = this.editableTabsValue
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }
        // 活跃的组件
        this.editableTabsValue = activeName
        // 过滤
        this.editableTabs = tabs.filter(tab => tab.name !== targetName)
      }
    },
    // 退出登入
    // cookies.remove('userName') 销毁cookies储存的值
    exitLogin () {
      console.log(1)
      this.$Cookies.remove('userName')
      this.$router.push({path: this.redirect || '/'})
    },
    //  侧栏收缩和展开
    collapseBtnClick1 () {
      this.collapseBtnClick = this.isCollapse
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style scoped>
  #home {
    height: 100%;
  }
  #home .el-aside{
    width:230px !important;
    background-color: aliceblue;
  }

  #home   .eee{
    padding: 0px;
  }

  #home  .el-container,.el-main{
    height: 100%;
  }

  #home  .el{
    background-color: aliceblue;
    color: azure;
    line-height: normal;
    font-size: 12px;
    color: aliceblue;
  }

  #home  .el-header{
    line-height: 60px;
    //background: linear-gradient(45deg,rgba(75,192,200,0.5),rgba(199,121,208,0.5),rgba(75,192,200,0.5));
    background-image: linear-gradient(-90deg,#99ccff 0%,#29bdd9 100%);
    text-align: right;
    font-size: 12px;
    color: black;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }
  #home  span{
    font-size: 17px;
  }
  .el-icon-s-grid{

  }
  #home   .el-submenu__title {
    font-size: 14px;
    color: #303133;
    padding: 0px;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }
  #home  .el-submenu .el-menu-item {
    height: 40px;
    line-height: 40px;
    padding: 0px;
    min-width: auto;
  }
  #home  .el-icon2{
    float: left;
    font-size: 25px
  }
  #home  .el-icon1{
    text-align: -webkit-center;
  }
  #home  .el-menu-item {
    font-size: 14px;
    color: #303133;
    padding: 0 20px;
    cursor: pointer;
    -webkit-transition: border-color .3s, background-color .3s, color .3s;
    transition: border-color .3s, background-color .3s, color .3s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: aliceblue;
  }
  #home  .el-el{
    font-size: 20px;
  }
  #home  .grid-c{
    text-align:center;
  }
</style>
