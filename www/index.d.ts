declare module "*.vue" {
  import Vue from "vue";
  const _default: Vue;
  export default _default;
}

declare module "*.svg" {
  const content: any;
  export default content;
}
