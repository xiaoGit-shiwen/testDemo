<template>
  <div id="app" style="height: 100%">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'

}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    height: 100%;
    width: 100%;
  }
  body {
    display: block;
    margin: 0px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    height:100%;
    width: 100%;
    overflow:auto;
  }
  .el-main {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    ms-flex-preferred-size: auto;
    flex-basis: auto;
    overflow: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0px;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }
  .el-menu-item-group__title {
     padding: 0px 0 0px 20px;
    line-height: normal;
    font-size: 12px;
    color: #909399;
    height: 100%;
  }

  .el-tabs .el-tabs__content{
    height: calc(100% - 60px);
  }
  .tableStyle{
    height: calc(100% - 40px);
  }
  .compentStyle{
    height: 100%;
  }
  .el-aside{
    height: 100%;
    background-color: darkgrey;
  }
</style>
