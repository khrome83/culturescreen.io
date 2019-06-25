import Vue from 'vue';

Vue.directive('focus', {
  inserted: function (el, bindings) {
    if (bindings.value) {
      Vue.nextTick(() => el.focus());
    }
  }
})
