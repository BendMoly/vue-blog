<template>
    <div class="nav-container">
        <div class="nav-container-bg"></div>
        <el-col :span="24">
            <h5><router-link to="/admin">Admin</router-link></h5>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" router>
                <el-menu-item index="/admin/dashboard">Dashboard</el-menu-item>
                <el-menu-item index="/admin/adminarticlelist">ArticleList</el-menu-item>
                <el-menu-item index="/admin/release">Release</el-menu-item>
                <el-menu-item index="/dashboard">Comment</el-menu-item>
                <el-menu-item index="/dashboard">Tag</el-menu-item>
                <el-menu-item index="/dashboard">Logout</el-menu-item>
            </el-menu>
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
</style>