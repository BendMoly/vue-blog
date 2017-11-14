<template>
    <div class="release-container">
        <el-button type="primary">新增栏目</el-button>
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
        this.$http.post(this.hostRequest.checkCatalogs_backup).then(
            res => {
                if(res.status == 200){
                    this.catalogs = res.data;
                }
            }
        )
    },
    data(){
        return {
            dialogVisible: false,

            // 目录
            catalog: '',
            catalogs: [],

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
            diff: []
        }
    },
    watch: {
        content:{handler(curval,oldVal){
            this.markedToHTML(curval);
        },deep:true},

        catalog:{
            handler(curval, oldVal){
                this.$http.post(this.hostRequest.checkColumns_backup, qs.stringify({
                    column: curval
                })).then(
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
                this.$http.post(this.hostRequest.checkTags_backup, qs.stringify({
                    tag: curval
                })).then(
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
                this.diff = result;
            }
        }
    },
    methods: {
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
                    that.$http.post(this.hostRequest.updateTags_backup, qs.stringify({
                        column: that.column,
                        tags: that.diff
                    })).then(res => {
                        if(res.status == 200){
                            console.log('插入成功');
                            if(res.data.code == '40001'){
                                // 如果更新标签成功，则开始对文章进行发布

                                // 先将二级标签格式化为数据库格式
                                var newTag = that.tag.join(',');
                                // 向服务器发送请求
                                that.$http.post(this.hostRequest.release_backup, qs.stringify({
                                    title: that.title,
                                    summary: that.summary,
                                    content: that.content,
                                    column: that.column,
                                    tags: newTag
                                })).then(
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
                    })

                    // setTimeout(() => {
                    //     done();
                    //     setTimeout(() => {
                    //     instance.confirmButtonLoading = false;
                    //     }, 300);
                    // }, 3000);
                } else {
                    console.log('取消了');
                    done();
                    instance.confirmButtonLoading = false;
                }
            }
            }).then(action => {
                this.$message({
                    type: 'info',
                    message: 'action: ' + action
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
</style>
