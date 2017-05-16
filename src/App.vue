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
    $route(to){
        var id;
        if (to.params.id) {
          console.log(to.params.id);
          id = to.params.id;
        }
        this.headChange(id);
    }
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
a{
  text-decoration: none;
  color: #fff;
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  min-width: 1160px;
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

</style>
