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
                  <el-form-item label="Remember">
                    <el-switch on-text="" off-text="" v-model="form.remember"></el-switch>
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
          // type: [],
        }
      }
    },
    methods: {
      onSubmit() {
        this.$http.post(this.hostRequest.login_api, qs.stringify({
          name: this.form.name,
          password: this.form.password
        })).then(res => {
          console.log(res);
          if(res.status == 200){
            if(res.data.code == '40001'){
              this.$store.dispatch("SUCCESS_LOGIN");
              if (this.$route.query.referrer) {
                this.$router.push({path: this.$route.query.referrer});
              }else{
                this.$router.push({path: '/admin/dashboard'});
              }
            }
          }
        })
        // console.log(this.$route.query.referrer);

        // this.$store.dispatch("SUCCESS_LOGIN");
        // if (this.$route.query.referrer) {
        //   this.$router.push({path: this.$route.query.referrer});
        // }else{
        //   this.$router.push({path: '/admin/dashboard'});
        // }
      }
      // onTest(){
      //   this.$http.post('http://localhost:8090/api/backup/articlesList', qs.stringify({
      //       'column': 'javascript',
      //       'currentPage': 1
      //   })).then(res => {
      //       console.log(res);
      //       },err => {
      //       console.log(err);
      //       }
      //   )
      // }
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
