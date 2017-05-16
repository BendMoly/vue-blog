<template>
    <div>
        <el-row>
          <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                <h2>Curabitur nec nisl odio. Mauris vehicula at nunc id posuere</h2>
                <p>Posted on 2017-03-30 16:17:08</p>
              </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                <el-tag type="gray">标签二</el-tag>
              </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.</p>
              </div>
          </el-col>
        </el-row>
        <el-form ref="form" :model="form" label-width="80px">
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
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          name: '',
          contact: '',
          desc: ''
        }
      }
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
          }
        });
      }
    }
}
</script>

<style scoped>
input{
    width: 100px !important;
}
</style>