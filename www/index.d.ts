import Vue from "vue";

declare module "*.vue" {
  import Vue from "vue";
  const _default: Vue;
  export default _default;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    layout?: string;
  }
}
