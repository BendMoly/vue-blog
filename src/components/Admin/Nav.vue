<template>
    <div class="nav-container">
        <div class="nav-container-bg"></div>
        <el-col :span="24">
            <h5><router-link to="/admin">Admin</router-link></h5>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" router>
                <el-menu-item index="/admin/dashboard">Dashboard</el-menu-item>
                <el-menu-item index="/admin/adminarticlelist">ArticleList</el-menu-item>
                <el-menu-item index="/admin/release">Release</el-menu-item>
                <el-menu-item index="/admin/comment">Comment</el-menu-item>
                <el-menu-item index="/login" @click="logout">Logout</el-menu-item>
            </el-menu>
            <!-- <div class="logout" @click="logout">Logout</div> -->
        </el-col>
    </div>
</template>

<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      logout(){
        this.$store.dispatch('FAIL_LOGIN');
        // this.$router.push({path:'/admin/dashboard'})
        // console.log("logout");
      }
    }
}
</script>

<style scoped>
h5{
    text-align: center;
}
a{
    color: #fff;
    text-decoration: none;
}
.logout{
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    color: #bfcbd9;
    padding: 0 20px;
    cursor: pointer;
    position: relative;
    transition: border-color .3s,background-color .3s,color .3s;
    box-sizing: border-box;
    white-space: nowrap;
}
.logout:hover{
    color: #20a0ff;
}
</style>