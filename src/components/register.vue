<template>
  <div class="demo-image__placeholder">
    <div class="block">
      <el-form  class="demo-ruleForm login-container" >
        <h3 class="title">注册账号</h3>
        <el-form-item >
          <!--blur 属性 失去焦点时-->
          <el-input placeholder="请输入账号" v-model="from.userName" clearable></el-input>
        </el-form-item>
        <el-form-item >
          <el-input placeholder="请输入密码" v-model="from.password" show-password ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="确认密码" v-model="password1" show-password></el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
          <router-link to="/">
            <el-button type="primary" style="width:48%;">取消</el-button>
          </router-link>
          <el-button type="primary" style="width:48%;" @click.native.prevent="registeUser" :loading="isBtnLoading">{{btnText}}</el-button> <!--loading动态的标签-->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'register',
  data () {
    return {
      from: {
        userName: '',
        password: ''
      },
      password1: '',
      isBtnLoading: false
    }
  },
  computed: {
    btnText () {
      if (this.isBtnLoading) return '注册中。。。'
      return '注册'
    }
  },
  methods: {
    registeUser () {
      // 判断是否输入用户名
      if (!this.from.userName) {
        this.$message.error('请输入用户名')
        return
      }
      // 判断是否输入密码
      if (!this.from.password) {
        this.$message.error('请输入密码')
        return
      }
      // isBtnLoading 登入按钮添加动画
      this.isBtnLoading = true
      if (this.password === this.password1) {
        this.$axios.post('/vue/registe', this.from).then(res => {
          console.log(res)
          if (res.status === 200) {
            if (res.data.rst === '200') {
              alert('注册成功')
              this.$router.push({path: this.redirect || '/'})
            } else {
              alert('注册失败')
              this.isBtnLoading = false
            }
          }
        })
      } else {
        alert('两次输入的密码不一样')
      }
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
