import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import user from "~/store/user";
import profile from "~/store/profile";

let store = new Vuex.Store({
  modules: {
    user: { namespaced: true, ...user },
    profile: { namespaced: true, ...profile }
  }
});

store.$axios = axios;

export default store;
