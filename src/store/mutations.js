import {
    HEAD_SHOW,
    HEAD_HIDE,
    NAV_SHOW,
    NAV_HIDE
} from './type'

// 状态控制变量
const state = {
    headShow: true,
    navShow: true
}

const mutations = {
    // 头部显示
    [HEAD_SHOW](state){
        state.headShow = true;
    },
    [HEAD_HIDE](state){
        state.headShow = false;
    },
    [NAV_SHOW](state){
        state.navShow = true;
    },
    [NAV_HIDE](state){
        state.navShow = false;
    }
}

const getters = {
    headShow(state){
        return state.headShow;
    },
    navShow(state){
        return state.navShow;
    }
}

export default {
    state,
    mutations,
    getters
}