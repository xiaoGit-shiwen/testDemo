<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账户名" prop="name">
        <el-input v-model="ruleForm.name" style="text-align: left" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="用户" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入以中文或则英文开头的姓名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请确认密码"></el-input>
      </el-form-item>
      <el-form-item label="所属组织" prop="name">
        <span>组织管理</span>
      </el-form-item>
      <el-form-item label="角色" prop="name">
        <el-input v-model="role" placeholder="点击选择"></el-input>
      </el-form-item>
      <span>呼叫设置</span>
      <el-form-item label="AI数" prop="name">
        <el-input v-model="number" placeholder="0"></el-input>
      </el-form-item>
      <div>
        <el-form-item label="自动外呼主叫号码">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="呼出话术">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </div>
      <el-form-item label="手动外呼主叫号码">
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <div>
        <el-form-item label="呼入号码">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="呼入话术">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="WEB分机">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <span>注册方式</span>
        <span>网页分机注册</span><span>第三方注册</span>
        <span>技能组</span>
        <span>手动创建</span><span>自动创建</span>
      </div>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'batchadd',
  data () {
    return {
      ruleForm: {
        name: ''
      },
      value: '',
      options: []
    }
  },
  methods: {
    handleClick (tab, enent) {

    },
    submitForm () {

    }
  }
}
</script>

<style scoped>

</style>
