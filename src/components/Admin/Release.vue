<template>
    <div class="release-container">
      <el-popover
        class="popover-box"
        ref="popover"
        placement="right"
        width="800"
        trigger="click"
        content="xxx">
          <header class="popover-title">
            添加新栏目：
          </header>
          <el-row :gutter="20">
            <el-col :span="10">
              <div class="grid-content">
                <el-select class="popover-select" v-model="newCatalog1" placeholder="选择所属目录">
                    <el-option
                      v-for="item in newCatalogs"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="grid-content">
                <el-input v-model="newColumn1" placeholder="输入新栏目"></el-input>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content">
                <el-button type="primary" @click="createCatalog(1)">新增</el-button>
              </div>
            </el-col>
          </el-row>
          <header class="popover-title">
            添加新目录及栏目：
          </header>
          <el-row :gutter="20">
            <el-col :span="10">
              <div class="grid-content">
                <el-input v-model="newCatalog2" placeholder="输入新目录"></el-input>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="grid-content">
                <el-input v-model="newColumn2" placeholder="输入新栏目"></el-input>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content">
                <el-button type="primary" @click="createCatalog(2)">新增</el-button>
              </div>
            </el-col>
          </el-row>
        </el-popover>
        <el-button v-popover:popover type="primary">新增栏目</el-button>

        <el-select class="single-select" v-model="catalog" placeholder="选择所属目录">
            <el-option
              v-for="item in catalogs"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
        <el-select class="single-select" v-model="column" placeholder="选择所属栏目">
            <el-option
              v-for="item in columns"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
        <el-select
            class="mutiple-select"
            v-model="tag"
            multiple
            filterable
            allow-create
            placeholder="选择二级标签">
            <el-option
              v-for="item in tags"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
        <div class="release-title">
            <el-input v-model="title" placeholder="输入标题"></el-input>
        </div>
        <div class="release-summary">
            <el-input v-model="summary" placeholder="文章概要，无填写将截取文章前140个字符"></el-input>
        </div>
        <div class="release-ctx clear">
            <div class="content">
                <el-input
                  type="textarea"
                  :rows="30"
                  resize="none"
                  placeholder="请输入内容"
                  v-model="content">
                </el-input>
            </div>
            <div class="html" v-html="html">
            </div>
        </div>
        <div class="release-btn">
            <el-button type="primary" @click="handleRelease">发布</el-button>
            <el-button type="primary">保存至草稿箱</el-button>
            <el-button type="primary">上传图片<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>
    </div>
</template>

<script>
import marked from 'marked'
import qs from 'qs'
export default {
    mounted(){
        this.fetchCatalog()
    },
    data(){
        return {
            dialogVisible: false,

            // 目录
            catalog: '',
            catalogs: [],

            // 新目录新栏目
            newCatalog1: '',
            newCatalog2: '',
            newCatalogs: [],
            newColumn1: '',
            newColumn2: '',

            // 栏目
            column: '',
            columns: [],

            // 标签
            tag: '',
            tags: [],

            // 标题
            title: '',
            // 概要
            summary: '',
            // 内容
            content: '',
            // 内容md语法渲染
            html: '',
            // 新标签数组
            diff: [],

            gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
        }
    },
    watch: {
        content:{handler(curval,oldVal){
            this.markedToHTML(curval);
        },deep:true},

        catalog:{
            handler(curval, oldVal){
                this.$http.post(this.hostRequest.checkColumns_backup, {
                    column: curval
                }).then(
                    res => {
                        if(res.status == 200){
                            if(res.data.code == '40001'){
                                this.columns = res.data.data;
                            }
                        }
                    }
                )
            }
        },

        column:{
            handler(curval, oldVal){
                this.$http.post(this.hostRequest.checkTags_backup, {
                    tag: curval
                }).then(
                    res => {
                        if(res.status == 200){
                            if(res.data.code == '40001'){
                                this.tags = res.data.data;
                            }
                        }
                    }
                )
            }
        },

        tag:{
            handler(curval, oldVal){
                var result = [];
                var tagsArray = [];
                for(var i = 0; i < this.tags.length; i++){
                    tagsArray.push(this.tags[i].value);
                }
                for(var j = 0; j < this.tag.length; j++){
                    if(tagsArray.indexOf(this.tag[j]) === -1){
                        result.push(this.tag[j]);
                        continue;
                    }
                }
                console.log(result);
                this.diff = result;
            }
        }
    },
    methods: {
        fetchCatalog(){
          this.$http.post(this.hostRequest.checkCatalogs_backup).then(
              res => {
                  if(res.status == 200){
                      this.catalogs = res.data.data;
                      this.newCatalogs = res.data.data;
                  }
              }
          )
        },
        markedToHTML(ctx){
            // this.$initHighlight()
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

        },
        handleRelease() {
            var that = this;
            const h = this.$createElement;
            this.$msgbox({
              title: '发布操作',
              message: h('p', null, '你确定要发布么？'),
              showCancelButton: true,
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              beforeClose: (action, instance, done) => {
                  if (action === 'confirm') {
                      // 点击确定
                      instance.confirmButtonLoading = true;
                      instance.confirmButtonText = '执行中...';

                      // 更新该栏目下的新标签
                      that.$http.post(this.hostRequest.updateTags_backup, {
                          column: that.column,
                          tags: that.diff
                      }).then(res => {
                          if(res.status == 200){
                              console.log('插入成功');
                              if(res.data.code == '40001'){
                                  // 如果更新标签成功，则开始对文章进行发布

                                  // 先将二级标签格式化为数据库格式
                                  var newTag = that.tag.join(',');
                                  // 向服务器发送请求
                                  that.$http.post(this.hostRequest.release_backup, {
                                      title: that.title,
                                      summary: that.summary,
                                      content: that.content,
                                      column: that.column,
                                      tags: newTag
                                  }).then(
                                      res => {
                                          if(res.status == 200){
                                              if(res.data.code == '40001'){
                                                  done();
                                                  instance.confirmButtonLoading = false;
                                              }
                                          }
                                      }
                                  )
                              }
                          }
                      });
                  } else {
                      console.log('取消了');
                      done();
                      instance.confirmButtonLoading = false;
                  }
              }
            }).then(action => {
                this.$message({
                    type: 'info',
                    message: '发布成功_' + action
                });
            });
        },
        createCatalog(idx){
          if (idx == 1) {
            var req = {
              catalog: this.newCatalog1,
              column: this.newColumn1
            }
          }else {
            var req = {
              catalog: this.newCatalog2,
              column: this.newColumn2
            }
          }
          console.log(req);
          this.$confirm('此操作会更新栏目, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$http.post(this.hostRequest.createCatalog, req).then(
              res => {
                if (res.status == 200) {
                  this.fetchCatalog();
                  this.$message({
                    type: 'success',
                    message: '提交成功!'
                  });
                }
              }
            );
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消提交'
            });
          });
        }
    }
}
</script>

<style scoped>
.html a{
    text-decoration: none;
    color: #20a0ff !important;
}
.el-select .el-input {
    width: 250px;
}
.release-container{
    padding: 20px 50px 50px 50px;
}
.single-select{
    width: 250px;
}
.mutiple-select{
    width: 300px;
}
.release-title{
    margin: 20px 0;
}
.release-summary{
    margin: 20px 0;
}
.content{
    float: left;
    width: 55%;
    height: 642px;
}
.html{
    float: left;
    width: 42%;
    height: 640px;
    margin-left: 10px;
    padding: 0 5px;
    word-wrap:break-word;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: auto;
}
.release-btn{
    margin-top: 20px;
}
.popover-title{
  margin: 10px 0;
}
.popover-select{
  width: 100%;
}
</style>
