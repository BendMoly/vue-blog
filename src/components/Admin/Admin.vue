<template>
    <div class="admin-container clear">
        <div class="admin-nav">
            <NavContainer></NavContainer>
        </div>
        <div class="admin-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavContainer from './Nav.vue'

export default {
    components: {
        NavContainer
    }
}
</script>

<style>
html,body{
    width: 100%;
    height: 100%;
}
.admin-container{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /*background: #ccc;*/
    overflow: hidden;
    min-width: 1500px;
}
.admin-nav{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 188px;
    background: #324157;
}
.admin-content{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 188px;
}
</style>