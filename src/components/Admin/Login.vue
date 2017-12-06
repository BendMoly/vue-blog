<template>
    <div>
        <div class="login-container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="User">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="Password">
                    <el-input v-model="form.password" type="password"></el-input>
                  </el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                    <el-button>取消</el-button>
                  </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import qs from 'qs'
export default {
    data() {
      return {
        form: {
          name: '',
          password: '',
          remember: false
        }
      }
    },
    methods: {
      onSubmit() {
        this.$http.post(this.hostRequest.login_api, {
          name: this.form.name,
          password: this.form.password
        }).then(res => {
          if(res.status == 200){
            if(res.data.code == '40001'){
              // this.$store.dispatch("SUCCESS_LOGIN");
              if (this.$route.query.referrer) {
                this.$router.push({path: this.$route.query.referrer});
              }else{
                this.$router.push({path: '/admin/dashboard'});
              }
            }
          }
        })
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
