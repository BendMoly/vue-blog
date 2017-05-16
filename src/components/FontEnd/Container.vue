<template>
    <div>
        <div class="app-container">
          <el-row :gutter="20">
            <el-col :span="19">
                <div class="grid-content bg-purple">
                    <h5>Articles</h5>
                    <router-view></router-view>
                </div>
            </el-col>
            <el-col :span="5" v-show="navShow">
                <div class="grid-content bg-purple">
                    <NavContainer></NavContainer>
                </div>
            </el-col>
          </el-row>
        </div>
    </div>
</template>

<script>
// 引入组件
import NavContainer from './Nav.vue'

import {mapGetters} from 'vuex'

export default {
    computed: mapGetters([
        'navShow'
    ]),
    components: {
        NavContainer
    }
}

</script>

<style>
.app-container{
  width: 1160px;
  height: 100px;
  margin: 0 auto;
}
</style>