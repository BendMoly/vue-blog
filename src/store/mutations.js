import {
    HEAD_SHOW,
    HEAD_HIDE,
    NAV_SHOW,
    NAV_HIDE,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './type'

// 状态控制变量
const state = {
    headShow: true,
    navShow: true,
    authorized: true
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
    },
    [LOGIN_SUCCESS](state){
        state.authorized = false;
    },
    [LOGIN_FAIL](state){
        state.authorized = true;
    }
}

const getters = {
    headShow(state){
        return state.headShow;
    },
    navShow(state){
        return state.navShow;
    },
    authorized(state){
        return state.authorized
    }
}

export default {
    state,
    mutations,
    getters
}