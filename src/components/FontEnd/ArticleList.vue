<template>
    <div>
        <div class="article-container" v-for="item in articles">
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <h2>{{item.title}}</h2>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    Posted on {{item.time}}
                </div>
              </el-col>
               <el-col :span="24">
                <div class="grid-content bg-purple-dark tag">
                    <el-tag type="success">{{item.column}}</el-tag> <el-tag type="gray" v-for="tag in item.tag">{{tag}}</el-tag>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark article">
                    {{item.summary}}
                </div>
              </el-col>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <router-link :to="'/home/'+item.column+'/'+item.uuid">
                        <el-button>Read More ></el-button>
                    </router-link>
                </div>
              </el-col>
            </el-row>
        </div>
        <div class="block articlelist-pagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="10"
              layout="total, prev, pager, next"
              :total="totalPage">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import qs from 'qs'
export default {
    mounted(){
        this.fetchData(1);
    },
    watch: {
        $route(to){
            this.fetchData(1);
        }
    },
    data(){
        return {
            articles: null,
            totalPage: null,
            currentPage: 1
        }
    },
    methods: {
        // 获取文章列表
        fetchData(idx){
            this.$http.post(this.hostRequest.articleList_api, {
                'column': this.$route.params.index ? this.$route.params.index : '',
                'currentPage': idx
            }).then(res => {
                console.log(this.$route.params);
                if(res.status == 200){
                    this.articles = res.data.data;
                    this.totalPage = res.data.totalPage;
                }

                },err => {
                console.log(err);
                }
            )
        },
        //pageSize 改变时触发 cb->每页条数size
        handleSizeChange: function(){

        },
        //currentPage 改变时会触发 cb->当前页currentPage
        handleCurrentChange(val){
            this.currentPage = val;
            this.fetchData(val);
        }
    }
}
</script>

<style scoped>
.el-tag{
    margin-right: 5px;
}
.article-container{
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
    margin-right: 60px;
}
h2{
    margin-bottom: 0;
}
.tag{
    margin-top: 10px;
    margin-bottom: 20px;
}
.article{
    margin-bottom: 20px;
}
.articlelist-pagination{
    margin-top: 20px;
    margin-bottom: 30px;
    text-align: center;
}
</style>
