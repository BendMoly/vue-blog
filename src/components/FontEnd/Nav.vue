<template>
    <div>
        <el-row class="tac">
          <el-col :span="24">
            <h5>Catalog</h5>
            <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" router>
              <el-menu-item-group v-for="skills in skillList" v-bind:title="skills.name" >
                <el-menu-item v-for="items in skills.items" v-bind:index="items.index">{{items.name}}</el-menu-item> 
              </el-menu-item-group>
            </el-menu>
          </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                skillList: [
                    {
                        name: 'programming',
                        items: [
                            {  
                                name: 'Javascript',
                                index: '/home/javascript',
                                route: {
                                    route: '/javascript'
                                }
                            },{
                                name: 'Vue',
                                index: '/home/vue',
                                route: {
                                    route: '/javascript'
                                }
                            }
                        ]
                    },{
                        name: 'language',
                        items: [
                            {  
                                name: 'English',
                                index: '/home/english',
                                route: {
                                    route: '/javascript'
                                }
                            },{
                                name: 'Japanese',
                                index: '/home/japanese',
                                route: {
                                    route: '/javascript'
                                }
                            }
                        ]
                    }]
            }
        }
    }
</script>