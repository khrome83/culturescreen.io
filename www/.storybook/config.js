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

// icons
import CloseIcon from "../assets/svg/close.svg";
import MenuIcon from "../assets/svg/menu.svg";

// logos
import HorizontalLogo from "../assets/svg/logo-horizontal-on-light.svg";
import VerticalLogo from "../assets/svg/logo-vertical-on-light.svg";

// components
import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";

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
    name: "Kindle Fire 2",
    styles: {
      width: "600px",
      height: "963px"
    }
  },
  kindleFireHD: {
    name: "Kindle Fire HD",
    styles: {
      width: "533px",
      height: "801px"
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

// register icons
Vue.component("close-icon", CloseIcon);
Vue.component("menu-icon", MenuIcon);

// register logos
Vue.component("horizontal-logo", HorizontalLogo);
Vue.component("vertical-logo", VerticalLogo);

// register components - single use
Vue.component("the-header", TheFooter);
Vue.component("the-footer", TheHeader);

configure(loadStories, module);
