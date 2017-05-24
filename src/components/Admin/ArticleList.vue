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
                <el-select v-model="select" slot="prepend" placeholder="请选择" class="elselect">
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
                  width="100">
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
              :total="50">
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
        }],
        dialogVisible: false
      }
    },
    methods: {
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