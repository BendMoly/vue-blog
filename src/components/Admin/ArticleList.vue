<template>
    <div class="adminArticleList-container">
        <div class="conditional-search clear">
            <label>条件检索</label>
            <div class="block">
                <el-date-picker
                  v-model="value7"
                  type="daterange"
                  align="right"
                  placeholder="按日期范围检索"
                  :picker-options="pickerOptions2">
                </el-date-picker>
            </div>
            <div class="input-search">
              <el-input placeholder="请输入内容" v-model="input5">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                  <el-option label="关键字" value="1"></el-option>
                  <el-option label="标签" value="2"></el-option>
                </el-select>
                <el-button slot="append" icon="search"></el-button>
              </el-input>
            </div>
        </div>
        <div style="margin-top:50px;">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column
                  prop="title"
                  label="标题"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="tag"
                  label="标签"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="日期"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="abstract"
                  label="概要">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址"
                  width="180">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
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
        value7: '',
        input5: '',
        select: '',
        tableData: [{
          date: '2016-05-02',
          title: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          title: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          title: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '2016-05-01',
          title: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '2016-05-01',
          title: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '2016-05-01',
          title: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '2016-05-01',
          title: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '2016-05-01',
          title: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '2016-05-01',
          title: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          title: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      };
    }
}
</script>

<style>
.el-select .el-input {
    width: 110px;
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
</style>