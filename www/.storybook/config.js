import Vue from "vue";
import Vuex from "vuex";
import { configure, addDecorator, addParameters } from "@storybook/vue";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

// global css
import "../assets/css/reset.css";
import "../assets/css/main.css";

Vue.use(Vuex);

Vue.component("nuxt-link", {
  props: ["to"],
  methods: {
    log() {
      action("link target")(this.to);
    }
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>'
});

// global decorators
addDecorator(withKnobs);
addDecorator(withA11y);

// viewports
const newViewports = {
  kindleFire2: {
    name: "Laptop with HiDPI screen",
    styles: {
      width: "1140px",
      height: "900px"
    }
  },
  kindleFireHD: {
    name: "Laptop with MDPI screen",
    styles: {
      width: "1280px",
      height: "800px"
    }
  }
};

// global parameters
addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports
    }
  }
});

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
