<template>
    <div class="dashboard-container">
        <div>
            <el-badge :value="12" class="item">
              <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="12" class="item">
              <el-button size="small">文章数</el-button>
            </el-badge>
        </div>
        <div class="msg-alert">
            <el-alert class="alert" title="自定义 close-text" type="info" close-text="知道了"></el-alert>
            <el-alert class="alert" title="自定义 close-text" type="info" close-text="知道了"></el-alert>
        </div>
        <div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.dashboard-container{
    padding: 50px;
}
.msg-alert{
    margin-top: 20px;
}
.item{
    margin-left: 30px;
}
.alert{
    margin-top: 10px;
}
.echarts {
  height: 300px;
}
</style>