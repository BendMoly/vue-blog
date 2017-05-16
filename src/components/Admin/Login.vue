<template>
    <div>
        <div class="login-container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="User">
                    <el-input v-model="form.user"></el-input>
                  </el-form-item>
                  <el-form-item label="Password">
                    <el-input v-model="form.psw"></el-input>
                  </el-form-item>
                  <el-form-item label="Remember">
                    <el-switch on-text="" off-text="" v-model="form.remember"></el-switch>
                  </el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                  </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          remember: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style>
.login-container{
    width: 1160px;
    margin: 0 auto;
}
.form-box{
    position: absolute;
    top: 150px;
    left: 50%;
    margin-left: -250px;
    width: 500px;
}
</style>