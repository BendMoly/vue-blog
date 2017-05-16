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
                <div class="grid-content bg-purple-dark time">
                    Posted on {{item.time}}
                </div>
              </el-col>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark article">
                    {{item.article}}
                </div>
              </el-col>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <router-link :to="'/home/'+item.label+'/'+item.index">
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
              :page-size="100"
              layout="total, prev, pager, next"
              :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                articles: [
                    {
                        'title': 'Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.',
                        'time': '24th January 2015',
                        'index': 1,
                        'label': 'javascript',
                        'article': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.'
                    },
                    {
                        'title': 'Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.',
                        'time': '24th January 2015',
                        'index': 2,
                        'label': 'javascript',
                        'article': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.'
                    },
                    {
                        'title': 'Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.',
                        'time': '24th January 2015',
                        'index': 3,
                        'label': 'javascript',
                        'article': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.'
                    },
                    {
                        'title': 'Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.',
                        'time': '24th January 2015',
                        'index': 4,
                        'label': 'javascript',
                        'article': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.'
                    },
                    {
                        'title': 'Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.',
                        'time': '24th January 2015',
                        'index': 5,
                        'label': 'javascript',
                        'article': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.'
                    }
                ],
                currentPage: 1
            }
        },
        methods: {
            //pageSize 改变时触发 cb->每页条数size
            handleSizeChange: function(){

            },
            //currentPage 改变时会触发 cb->当前页currentPage
            handleCurrentChange: function(){

            }
        }
    }
</script>

<style scoped>
.article-container{
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
    margin-right: 60px;
}
h2{
    margin-bottom: 0;
}
.time{
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