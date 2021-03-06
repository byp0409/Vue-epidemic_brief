import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// 导入模块
import home from './modules/home';
import china from './modules/china';
import global from './modules/global';

export default new Vuex.Store({
  modules: {
    home,
    china,
    global,
  },
});
