import * as types from './type'

export default {
    // 头部信息
    SHOW_HEAD:({commit})=>{
        commit(types.HEAD_SHOW);
    },
    HIDE_HEAD:({commit})=>{
        commit(types.HEAD_HIDE);
    },
    // 导航
    SHOW_NAV:({commit})=>{
        commit(types.NAV_SHOW);
    },
    HIDE_NAV:({commit})=>{
        commit(types.NAV_HIDE);
    }
}