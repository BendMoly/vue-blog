<template>
  <div>
    <!-- 头部 -->
    <el-row>
      <el-col :span="24">
        <div class="header grid-content bg-purple-dark">
          <div class="overlay">
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="personal-img grid-content bg-purple">
                  <div>
                    <img src="../../assets/personal.png" alt="">
                  </div>
                </div>
              </el-col>
              <el-col :span="16">
                <div class="personal-info grid-content bg-purple">
                  <div>
                    <h1>MolyCHN`s personal blogger</h1>
                    <p>All my learning experience will be summarized here, including programming, language, painting and writing</p>
                    <h2>Contact me</h2>
                    <p><img class="personal-icon" src="../../assets/icon_github.png" /><a class="github" href="https://github.com/BendMoly">https://github.com/BendMoly</a></p>
                    <p><img class="personal-icon" src="../../assets/icon_email.png" />ssomkhyy@qq.com</p>
                    <p><img class="personal-icon" src="../../assets/icon_wechat.png" />Lcy_170849261</p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.header {
  background-color: #0C739B;
  background: url(../../assets/bg.jpg) no-repeat center center;
  padding: 0;
  -webkit-background-size: cover;
  background-size: cover;
  -moz-background-size: cover;
  color: #E2E2E2;
}
.header .overlay {
    background-color: rgba(2, 2, 2, 0.56);
    height: 350px;
    position: relative;
    overflow: hidden;
}
.personal-img,
.personal-info{
  position: relative;
  height: 350px;
}
.personal-img div{
  position: absolute;
  top: 50px;
  /*left: 50%;*/
  right: 0;
  width: 164px;
  height: 164px;
  /*margin: -82px 0 0 -82px;*/
  /*margin-top: -82px;*/
  border-radius: 50%;
  overflow: hidden;
}
.personal-img div img{
  width: 100%;
}
.personal-info div{
  position: absolute;
  top: 25px;
  left: 75px;
}
.personal-info *{
  margin-top: 0;
}
.personal-icon{
  width: 30px;
  vertical-align: middle;
  margin-right: 10px;
}
.github{
  color: #ffffff;
  text-decoration: none;
}
</style>
