import Vue from 'vue';
import SimpleAnalytics from "simple-analytics-vue";

Vue.use(SimpleAnalytics, { skip: process.env.NODE_ENV !== "production" });
