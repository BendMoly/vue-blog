<template>
    <div>
        <el-row>
          <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                <h2>{{title}}</h2>
                <p>Posted on {{time}}</p>
              </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                <el-tag type="success">{{column}}</el-tag> <el-tag type="gray" v-for="tag in tags">{{tag}}</el-tag>
              </div>
          </el-col>
        </el-row>
        <el-row class="content">
          <el-col :span="24">

              <div v-html="html"></div>
          </el-col>
        </el-row>

        <!-- <el-row v-show="review">
          <el-row class="reviewarea">Review area</el-row>
          <el-row class="review-list" v-for="item in reviewList">
            <el-row class="review-question">
              <el-col class="review-name" :span="4">
                <el-row>{{item.nickName}}</el-row>
                <el-row>{{item.questionTime}}</el-row>
              </el-col>
              <el-col :span="20">{{item.question}}</el-col>
            </el-row>
            <el-row v-show="!!item.ask" class="review-ask">
              <el-col class="review-name" :span="4" :offset="1">
                <el-row>author</el-row>
                <el-row>{{item.askTime}}</el-row>
              </el-col>
              <el-col :span="19">{{item.ask}}</el-col>
            </el-row>
          </el-row>
        </el-row> -->

        <!-- <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="昵称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="form.contact"></el-input>
          </el-form-item>
          <el-form-item label="讨论内容">
            <el-input type="textarea" :rows="8" v-model="form.desc" resize="none"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">发给站长</el-button>
          </el-form-item>
        </el-form> -->
    </div>
</template>

<script>
import marked from 'marked'
import qs from 'qs'
export default {
    data() {
      return {
        form: {
          name: '',
          contact: '',
          desc: ''
        },
        title: '',
        time: '',
        column: '',
        tags: [],
        content: '',
        review: false,
        reviewList: [],
        html: ''
      }
    },
    created(){
      console.log(this.$route)
      this.$http.post(this.hostRequest.article_api, qs.stringify({
        'column': this.$route.params.index,
        'idx': Number(this.$route.params.id)
      })).then(res => {
        if(res.status == 200){
          // 将获取到的文章详情内容赋值给组件参数
          this.title = res.data.data.title;
          this.time = res.data.data.time;
          this.column = res.data.data.column;
          this.tags = res.data.data.tag;
          this.content = res.data.data.content;

          // 判断该文章是否有评论，有的话则请求评论内容
          if(res.data.data.review == 'true'){
            this.$http.post(this.hostRequest.review_api).then(res => {
              if(res.status == 200){
                // 将页面的评论元素打开
                this.review = true;
                // 赋值评论列表
                this.reviewList = res.data.data;
              }
            })
          }

        }
      })
    },
    watch: {
      $route(to){
        console.log(to);
      },
      content:{handler(curval,oldVal){
          this.markedToHTML(curval);
      },deep:true}
    },
    methods: {
      onSubmit() {
        this.$alert('本先森很乐意交你这个朋友', '提交评论', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: '提交成功'
            });
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let msg = {
              'nickName': this.form.name,
              'questionTime': `${year}-${month}-${day}`,
              'question': this.form.desc
            };
            this.reviewList.push(msg);
          }
        });
      },
      markedToHTML(ctx){
          var rendererMD = new marked.Renderer();
          marked.setOptions({
            renderer: rendererMD,
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false
          });
          marked.setOptions({
              highlight: function (code) {
                  return hljs.highlightAuto(code).value;
              }
          });
          this.html = marked(ctx);
          this.$nextTick(() =>{
              var tag = document.querySelectorAll("code");
              var img = document.querySelectorAll("img");
              for(var i = 0; i < tag.length; i++){
                  if (tag[i].className.indexOf('hljs') == -1) {
                      tag[i].className += ' hljs';
                  };
                  console.log(tag[i].className);
              }
              for(var j = 0; j < img.length; j++){
                  img[j].style.width = '100%';
              }
              // document.querySelectorAll("code")[0].className += ' hljs';
          })
      }
    }
}
</script>

<style scoped>
.el-tag{
    margin-right: 5px;
}
input{
    width: 100px !important;
}
.content{
  margin: 10px 0;
}
.reviewarea{
  color: #ffffff;
  line-height: 36px;
  min-height: 36px;
  background: #20a0ff;
  border-radius: 5px;
  padding-left: 20px;
  margin-bottom: 5px;
}
.review-list{
  background: #ece8e8;
  padding-bottom: 5px;
  margin-bottom: 15px;
}
.review-question{
  padding: 5px 0;
  border-bottom: 2px solid #f8f8f8;
}
.review-ask{
  padding: 5px 0;
}
.review-name{
  padding-left: 20px;
}
</style>
