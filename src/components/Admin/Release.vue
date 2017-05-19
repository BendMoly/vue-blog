<template>
    <div class="release-container">
        <el-select class="single-select" v-model="value" placeholder="选择所属栏目">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
        <el-select
            v-model="value10"
            multiple
            filterable
            allow-create
            placeholder="选择二级标签">
            <el-option
              v-for="item in options5"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
        <div class="release-title">
            <el-input v-model="input" placeholder="输入标题"></el-input>
        </div>
        <div class="release-ctx clear">
            <div class="content">
                <el-input
                  type="textarea"
                  :rows="30"
                  resize="none"
                  placeholder="请输入内容"
                  v-model="textarea">
                </el-input>
            </div>
            <div class="html" v-html="html">
                
            </div>
        </div>
        <div class="release-btn">
            <el-button type="primary">发布</el-button>
            <el-button type="primary">保存至草稿箱</el-button>
            <el-button type="primary">上传图片<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>
    </div>
</template>

<script>
import marked from 'marked'
export default {
    data(){
        return {
            options: [{
                  value: '选项1',
                  label: '黄金糕'
                }, {
                  value: '选项2',
                  label: '双皮奶'
                }, {
                  value: '选项3',
                  label: '蚵仔煎'
                }, {
                  value: '选项4',
                  label: '是不是这样的夜晚你才这样的想起我'
                }, {
                  value: '选项5',
                  label: '阿茨海默综合征'
            }],
            value: '',
            options5: [{
              value: 'HTML',
              label: 'HTML'
            }, {
              value: 'CSS',
              label: 'CSS'
            }, {
              value: 'JavaScript',
              label: 'JavaScript'
            }],
            value10: [],
            input: '',
            textarea: '',
            html: ''
        }
    },
    watch: {
        textarea:{handler(curval,oldVal){
            this.markedToHTML(curval);
        },deep:true}
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
.release-title{
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
}
.release-btn{
    margin-top: 20px;
}
</style>