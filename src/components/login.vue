<template>
  <div :style="backgroundDiv">
    <div class="block">
      <el-form  class="demo-ruleForm login-container" >
        <h3 class="title">系统登录</h3>
          <!--blur 属性 失去焦点时-->
        <el-form-item >
          <el-input placeholder="请输入账号" v-model="userName" clearable></el-input>
          <p class="error">{{ accountError }}</p>
        </el-form-item>
         <el-form-item >
           <!--el-input封了一层，直接@keyup.enter是用不了的要在后面加个native，变成原来的方法-->
          <el-input @keyup.enter.native="login" placeholder="请输入密码" v-model="password" show-password></el-input>
          <p class="error">{{ pwdError }}</p>
         </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
          <router-link to="/register">
            <el-button type="primary" style="width:48%;">注册账号</el-button>
          </router-link>
          <el-button class="testq" type="primary" style="width:48%;" @click.native.prevent="login" :loading="isBtnLoading">{{butTest}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: '',
      accountError: '',
      pwdError: '',
      isBtnLoading: false,
      checked: '',
      backgroundDiv: {
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    }
  },
  /* // 监听回车键
  created: function () {
    var _this = this
    document.onkeydown = function (e) {
      let key = window.event.keyCode
      if (key === 13) {
        alert('回车键')
        _this.login()
      }
    }
  } */
  computed: {
  // 登入等待中改变等入按钮的状态
    butTest () {
      if (this.isBtnLoading) return '登入中。。。'
      return '登入'
    }
  },
  methods: {
    // 当账号输入框失去焦点时触发verifyAccount
    verifyAccount (e) {
      if (this.userName !== 'admin') {
        this.accountError = '账号为admin'
      } else {
        this.accountError = ''
      }
    },
    // 登入
    login () {
      console.log(1)
      // 判断是否输入用户名
      if (!this.username) {
        /* this.$message.error('请输入用户名') */
      }
      // 判断是否输入密码
      if (!this.password) {
      /*  this.$message.error('请输入密码') */
      }
      // isBtnLoading 登入按钮添加画面
      this.isBtnLoading = true
      // 验证用户名和密码是够正确
      // this.$axios.get().then(res => {
      // if (res.status === 200) { // 响应状态码
      // if (res.data.rst === '200') { // 响应结果
      Cookies.set('userName', this.userName)
      // 路由重定向
      this.$router.push({path: this.redirect || '/home'})
      // } else {
      // this.isBtnLoading = false
      // alert('账号或密码不对')
      // }
      // }
      // })
    },
    submit () {
      this.login()
    }
  }
}
</script>

<style scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;}
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
  .error {
    color: red;
    text-align: left;
    margin: 5px auto;
    font-size: 12px;
    padding-left: 30px;
    height: 20px;
  }
</style>
