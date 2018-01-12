<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  watch: {
    // $route(to){
    //     var id;
    //     if (to.params.id) {
    //       console.log(to.params.id);
    //       id = to.params.id;
    //     }
    //     this.headChange(id);
    // }
  },
  methods: {
    headChange(id){
      if (id) {
        this.$store.dispatch('HIDE_HEAD');
        // this.$store.dispatch('HIDE_NAV');
      }else{
        this.$store.dispatch('SHOW_HEAD');
        // this.$store.dispatch('SHOW_NAV');
      }
    }
  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
}

#app {
  /* font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif; */
  /* font-family: "MicrosoftYaHei",Arial,sans-serif; */
  font-family: "-apple-system,"Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","WenQuanYi Micro Hei","Microsoft Yahei",sans-serif";
  min-width: 1160px;;
  overflow: hidden;
}
.clear{
  zoom:1;
 }
.clear:after{
  content: "";
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
}
blockquote {
  background: #eee;
  color: #666;
  margin: 0;
  padding: 1px 10px;
  font-size: 14px;
}

.article .content p{
  font-size: 14px !important;
  /* color: #999; */
  text-indent: 2em;
}
.article .content h4{
  font-size: 20px;
  font-weight: normal;
  padding-left: 5px;
  border-left: 2px solid #37ac68;
  margin-bottom: 10px;
}
.article .content h5{
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 10px;
}
.article .content li{
  font-size: 14px;
}
.article .content a{
  display: inline-block;
  font-size: 14px;
  text-indent: 2em;
  color: #37ac68;
}
</style>
