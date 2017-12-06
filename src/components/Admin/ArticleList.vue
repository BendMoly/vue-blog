<template>
    <div class="adminArticleList-container">
        <div class="conditional-search clear">
            <label>条件检索</label>
            <div class="block">
                <el-date-picker
                  v-model="timeSearch"
                  type="daterange"
                  align="right"
                  placeholder="按日期范围检索"
                  :picker-options="pickerOptions2">
                </el-date-picker>
            </div>
            <div class="input-search">
              <el-input placeholder="请输入内容" v-model="searchText">
                <el-select v-model="select" slot="prepend" placeholder="请选择" class="elselect">
                  <el-option label="标题" value="title"></el-option>
                  <el-option label="标签" value="column"></el-option>
                </el-select>
                <el-button slot="append" icon="search" @click="searchBtn"></el-button>
              </el-input>
            </div>
        </div>
        <div style="margin-top:50px;">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column
                  prop="title"
                  label="标题">
                </el-table-column>
                <el-table-column
                  prop="column"
                  label="标签"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="time"
                  label="日期"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="oprate"
                  label="操作"
                  width="180">
                  <template scope="scope">
                    <el-button
                      size="small"
                      @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                      size="small"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="list-pagi">
            <el-pagination
              small
              layout="prev, pager, next"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="10"
              :total="totalPage">
            </el-pagination>
        </div>
        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          size="tiny"
          :before-close="handleDelete">
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
import { dateFormate } from '../../utils/dateFormate'
export default {
    mounted(){
      this.fetchData(this.currentPage);
    },
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        timeSearch: '',
        timeSearchFormate: [],
        searchText: '',
        select: '',
        tableData: [],
        dialogVisible: false,
        currentPage: 1,
        totalPage: 1
      }
    },
    methods: {
      fetchData(idx){
        this.$http.post(this.hostRequest.articleList_backup, {
          'select': this.select ? this.select : '',
          'text': this.searchText ? this.searchText : '',
          'currentPage': idx
        }).then(
          res => {
            if(res.status == 200){
              if(res.data.code == '40001'){
                this.tableData = res.data.data;
                // this.currentPage = Number(res.data.currrentPage);
                this.totalPage = res.data.totalPage;
              }
            }
          }
        )
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      //currentPage 改变时会触发 cb->当前页currentPage
      handleCurrentChange(val){
        this.currentPage = val;
        if(this.timeSearch){
          this.timesearch(this.timeSearchFormate[0], this.timeSearchFormate[1], val);
        }else{
          this.fetchData(val);
        }

      },
      searchBtn(){
        this.fetchData(1);
      },
      timesearch(pastTime, newTime, idx){
        this.$http.post(this.hostRequest.articleListTimeSearch_backup, {
          pastTime: pastTime,
          newTime: newTime,
          currentPage: idx
        }).then(res => {
          if(res.status == 200){
              if(res.data.code == '40001'){
                this.tableData = res.data.data;
                // this.currentPage = Number(res.data.currrentPage);
                this.totalPage = res.data.totalPage;
              }
            }
        })
      }
    },
    watch: {
      timeSearch: {
        handler(newVal, oldVal){
          if(newVal[0]){
            let newDate = dateFormate(newVal[1]);
            this.timeSearchFormate[0] = dateFormate(newVal[0]);
            this.timeSearchFormate[1] = dateFormate(newVal[1]);
            this.timesearch(dateFormate(newVal[0]), dateFormate(newVal[1]), 1);
          }else{
            this.fetchData(1);
          }
        },
        deep: true
      }
    }
}
</script>

<style scoped>
.elselect{
    width: 100px;
}
.adminArticleList-container{
    padding: 50px;
}
.conditional-search{
    line-height: 36px;
}
.conditional-search > label,
.conditional-search > div{
    float: left;
}
.conditional-search > label{
    margin-right: 20px;
}
.conditional-search > div{
    margin-right: 15px;
}
.input-search{
    width: 500px;
}
.list-pagi{
    text-align: center;
    margin-top: 20px;
}
</style>
