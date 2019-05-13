<template>
  <component
    :is="element"
    v-bind="linkProps.bindProps"
    v-on="linkProps.onEvents"
    class="button"
    :class="{ secondary, tertiary, danger, disabled }"
  >
    <slot name="pre-icon"></slot>
    <slot></slot>
    <slot name="post-icon"></slot>
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
  @Prop(Boolean) disabled!: boolean;
  @Prop() overpanel!: string;

  @overpanel.Mutation("openOverpanel") openOverpanel;

  get element() {
    if (this.overpanel || this.to === "#") {
      return "button";
    }

    if (
      /((https{0,1}|ftp|tel|mail):\/\/)|^www.|.{1}(com|net|org|io)/i.test(
        this.to
      )
    ) {
      return "a";
    }

    return "nuxt-link";
  }

  get linkProps() {
    const onEvents = {};
    const bindProps = {
      title: this.title
    };

    if (this.element === "a") {
      bindProps["href"] = this.to;
      bindProps["target"] = "_blank";
      bindProps["rel"] = "noopener";
    } else if (this.overpanel) {
      onEvents["click"] = () => {
        this.openOverpanel(this.overpanel);
      };
    } else if (this.element === "nuxt-link") {
      bindProps["to"] = this.to;
    }

    if (this.disabled === true) {
      bindProps["aria-disabled"] = true;
      bindProps["disabled"] = true;
      delete onEvents["click"];
    }

    return { onEvents, bindProps };
  }
}
</script>

<style scoped>
.button, .button:hover, .button:active { display: inline-block; text-align: center; color: #fff; fill: #fff; background-color: #ed303c; border-radius: 0.25rem; padding: 0.25rem 1rem; text-decoration: none; font-family: "Raleway",
  sans-serif; font-size: 1.125rem; font-weight: 300; line-height: 1.5;
  letter-spacing: 0.025rem; cursor: pointer; flex-basis: 100%; border: thin solid
  #ed303c; transition: all 200ms ease-in-out; }

.button:hover, .button:active,
.button:focus { background-color: #fff; color: #ed303c; fill: #ed303c;
  transition: all 200ms ease-in-out; }

.button:focus { outline: 0; box-shadow: inset 0 0 0 0.0625rem #fff, inset 0 0 0 0.125rem #ed303c; }

.secondary {
  border-color: #010b19; background-color: #010b19; color: #fff; fill: #fff; }

.secondary:hover, .secondary:active, .secondary:focus { background-color: transparent; color: #010b19; fill: #010b19; border-color: #010b19; }

.secondary:focus { box-shadow: inset 0 0 0 0.0625rem #fff, inset 0 0 0 0.125rem
  #010b19; }

.tertiary { background-color: transparent; color: #5c6169; fill: #5c6169; border: thin solid #a0a9ba; }

.tertiary:hover, .tertiary:active,
.tertiary:focus { border-color: #010b19; color: #010b19; fill: #010b19; }

.tertiary:focus { box-shadow: inset 0 0 0 0.0625rem #fff, inset 0 0 0 0.125rem
  #010b19; }

.danger { background-color: transparent; border-color: transparent;
  color: #ed303c; fill: #ed303c; }

.danger:hover, .danger:active {
  text-decoration: underline; color: #ed303c; fill: #ed303c; border-color: transparent; }

.disabled, .disabled:hover, .disabled:active, .disabled:focus {
  background-color: #fafafa; border-color: #eaeaea; color: #cccccc; fill: #cccccc;
  cursor: not-allowed; text-decoration: none; }

.disabled:focus { box-shadow: inset 0 0 0 0.0625rem #fafafa, inset 0 0 0 0.125rem #eaeaea; }
</style>
<style>
.button > svg { height: 1rem; width: 1rem; transform: scale(1.5); margin: 0
  0.125rem -0.2rem; }
</style>
