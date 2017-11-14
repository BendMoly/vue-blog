<template>
    <div>
        <HeaderContainer v-show="headShow"></HeaderContainer>
        <Container></Container>
    </div>
</template>

<script>
// 引入UI组件
import HeaderContainer from './Header.vue'
import Container from './Container.vue'

// 引入vuex
import {mapGetters} from 'vuex'

export default {
    computed: mapGetters([
        'headShow'
    ]),
    components: {
        HeaderContainer,
        Container
    }
}

</script>
