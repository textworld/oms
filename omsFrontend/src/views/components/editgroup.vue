<template>
  <el-form :model="rowdata" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="名称" prop="name">
      <el-input v-model="rowdata.name"></el-input>
    </el-form-item>
    <el-form-item label="描述" prop="desc">
      <el-input v-model="rowdata.desc" type="textarea" :autosize="{ minRows: 5, maxRows: 10}"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即更新</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: ['rowdata'],
  data() {
    return {
      rules: {
        name: [
          { required: true, message: '请输入一个正确的内容', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('formdata', this.rowdata)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
