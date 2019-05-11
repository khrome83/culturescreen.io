<template>
  <component
    :is="element"
    v-bind="linkProps.bindProps"
    v-on="linkProps.onEvents"
    class="button"
    :class="{ secondary, tertiary, danger }"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue, namespace } from "nuxt-property-decorator";

const overpanel = namespace("overpanel");

@Component({})
export default class BaseButton extends Vue {
  @Prop({ default: "#" }) to!: string;
  @Prop() title!: string;
  @Prop(Boolean) private secondary!: boolean;
  @Prop(Boolean) tertiary!: boolean;
  @Prop(Boolean) danger!: boolean;
  @Prop() overpanel!: string;

  @overpanel.Mutation("openOverpanel") openOverpanel;

  get element() {
    if (
      /((https{0,1}|ftp|tel|mail):\/\/)|^www.|.{1}(com|net|org|io)/i.test(
        this.to
      )
    ) {
      return "a";
    }

    if (this.overpanel) {
      return "button";
    }

    return "nuxt-link";
  }

  get linkProps() {
    if (this.element === "a") {
      return {
        onEvents: {},
        bindProps: {
          href: this.to,
          target: "_blank",
          rel: "noopener",
          title: this.title
        }
      };
    }

    if (this.overpanel) {
      return {
        onEvents: {
          click: () => {
            this.openOverpanel(this.overpanel);
          }
        },
        bindProps: {}
      };
    }

    return {
      onEvents: {},
      bindProps: {
        to: this.to,
        title: this.title
      }
    };
  }
}
</script>

<style scoped>
.button, .button:hover, .button:active { position: relative; border: 0.125rem
  solid transparent; border-radius: 0.25rem; background-color: transparent;
  padding: 0.8rem 2rem; display: inline-block; font-size: 1.2rem; text-decoration: none; cursor: pointer; color: transparent; background: linear-gradient( to right
bottom, #3b8070, #398e77, #399c7c, #3caa80, #41b883 ); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  text-fill-color: transparent; }

.button::before { position: absolute; top: 0;
  right: 0; bottom: 0; left: 0; background: linear-gradient( to right bottom,
#3b8070, #398e77, #399c7c, #3caa80, #41b883 ); content: ""; z-index: -2;
  border-radius: 0.25rem; }

.button::after { position: absolute; top: 0; right: 0;
  bottom: 0; left: 0; background: #fff; content: ""; z-index: -1; border-radius: 0.25rem; border: 0.125rem solid transparent; background-clip: padding-box; }

.button:hover::after { border: 0.25rem solid transparent; }

.button.secondary,
.button.secondary:hover, .button.secondary:active { color: transparent;
  background: linear-gradient( to right bottom, #35495e, #3a5774, #40658a,
#4573a1, #4b81b9 ); -webkit-background-clip: text; background-clip: text;
  background-color: text; -webkit-text-fill-color: transparent; text-fill-color: transparent; }

.button.secondary::before { background: linear-gradient( to right
bottom, #35495e, #3a5774, #40658a, #4573a1, #4b81b9 ); }

.button.danger,
.button.danger:hover, .button.danger:active { color: transparent; background: linear-gradient( to right bottom, #922648, #a92851, #c12959, #d92a61, #f22b69 );
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; text-fill-color: transparent; }

.button.danger::before {
  background: linear-gradient( to right bottom, #922648, #a92851, #c12959,
#d92a61, #f22b69 ); }
</style>
