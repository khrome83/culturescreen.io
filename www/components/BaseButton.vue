<template>
  <component
    :is="element"
    v-bind="linkProps.bindProps"
    v-on="linkProps.onEvents"
    class="button"
    :class="{ secondary, tertiary, danger, disabled, small, large, isLoading }"
  >
    <span class="text" :aria-hidden="isLoading">
      <slot name="pre-icon"></slot>
      <slot></slot>
      <slot name="post-icon"></slot>
    </span>
    <span
      v-if="isLoading"
      class="loading"
      draggable="false"
      role="progressbar"
      aria-valuetext="Loading"
    >
      <loading-icon/>
    </span>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue, namespace } from "nuxt-property-decorator";
import LoadingIcon from "~/assets/svg/loading.svg";

const overpanel = namespace("overpanel");

@Component({
  components: { LoadingIcon }
})
export default class BaseButton extends Vue {
  @Prop({ default: "#" }) to!: string;
  @Prop() title!: string;
  @Prop(Boolean) private secondary!: boolean;
  @Prop(Boolean) private tertiary!: boolean;
  @Prop(Boolean) private danger!: boolean;
  @Prop(Boolean) private disabled!: boolean;
  @Prop(Boolean) private small!: boolean;
  @Prop(Boolean) private large!: boolean;
  @Prop(Boolean) private isLoading!: boolean;
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

    if (this.disabled === true || this.isLoading) {
      bindProps["aria-disabled"] = true;
      bindProps["disabled"] = true;
      delete onEvents["click"];
      delete bindProps["href"];
      delete bindProps["to"];
    }

    return { onEvents, bindProps };
  }
}
</script>

<style scoped>
.button {
  display: inline-block;
  text-align: center;
  color: #fff;
  fill: #fff;
  background-color: #ee0028;
  border-radius: 0.25rem;
  padding: 0.25rem 1rem;
  text-decoration: none;
  font-family: "Raleway", sans-serif;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.025rem;
  cursor: pointer;
  border: thin solid #ee0028;
  transition: all 200ms ease-in-out;
  position: relative;
  white-space: nowrap;
}

.button:not(.isLoading):hover,
.button:not(.isLoading):active,
.button:not(.isLoading):focus {
  background-color: #fff;
  color: #ee0028;
  fill: #ee0028;
  transition: all 200ms ease-in-out;
  box-shadow: inset 0 0 0 0 #fff, inset 0 0 0 0 #ee0028;
}

.button:not(.isLoading):focus {
  box-shadow: inset 0 0 0 0.0625rem #fff, inset 0 0 0 0.125rem #ee0028;
}

/* Grey Modifications - Button */
.__bg-grey .button {
  background-color: #da0629;
  color: #fdfcfb;
  fill: #fdfcfb;
  border-color: #da0629;
}

.__bg-grey .button:not(.isLoading):hover,
.__bg-grey .button:not(.isLoading):active,
.__bg-grey .button:not(.isLoading):focus {
  background-color: #fdfcfb;
  color: #da0629;
  fill: #da0629;
  box-shadow: inset 0 0 0 0 #fdfcfb, inset 0 0 0 0 #da0629;
}

.__bg-grey .button:not(.isLoading):focus {
  box-shadow: inset 0 0 0 0.0625rem #fdfcfb, inset 0 0 0 0.125rem #da0629;
}

/* Dark Modifications - Button */
.__bg-dark .button {
  background-color: #f32144;
  color: #111119;
  fill: #111119;
  border-color: #f32144;
  font-weight: 400;
}

.__bg-dark .button:not(.isLoading):hover,
.__bg-dark .button:not(.isLoading):active,
.__bg-dark .button:not(.isLoading):focus {
  background-color: #111119;
  color: #f32144;
  fill: #f32144;
  box-shadow: inset 0 0 0 0 #111119, inset 0 0 0 0 #f32144;
}

.__bg-dark .button:not(.isLoading):focus {
  box-shadow: inset 0 0 0 0.0625rem #111119, inset 0 0 0 0.125rem #f32144;
}

.small,
.small:hover,
.small:focus,
.small:active {
  padding: 0.4rem 0.75rem 0.25rem;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.25;
  letter-spacing: 0.0781rem;
  text-transform: uppercase;
}

.large,
.large:hover,
.large:focus,
.large:active {
  padding: 0.75rem 1.65rem;
  font-size: 1.375rem;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.025rem;
}

.secondary {
  border-color: #010b19;
  background-color: #010b19;
  color: #fff;
  fill: #fff;
}

.secondary:not(.isLoading):hover,
.secondary:not(.isLoading):active,
.secondary:not(.isLoading):focus {
  background-color: transparent;
  color: #010b19;
  fill: #010b19;
  border-color: #010b19;
  box-shadow: inset 0 0 0 0 #fff, inset 0 0 0 0 #010b19;
}

.secondary:not(.isLoading):focus {
  box-shadow: inset 0 0 0 0.0625rem #fff, inset 0 0 0 0.125rem #010b19;
}

/* Grey Modifications - Secondary */
.__bg-grey .secondary {
  background-color: #010b19;
  color: #fdfcfb;
  fill: #fdfcfb;
  border-color: #010b19;
}

.__bg-grey .secondary:not(.isLoading):hover,
.__bg-grey .secondary:not(.isLoading):active,
.__bg-grey .secondary:not(.isLoading):focus {
  background-color: #fdfcfb;
  color: #010b19;
  fill: #010b19;
  box-shadow: inset 0 0 0 0 #fdfcfb, inset 0 0 0 0 #010b19;
}

.__bg-grey .secondary:not(.isLoading):focus {
  box-shadow: inset 0 0 0 0.0625rem #fdfcfb, inset 0 0 0 0.125rem #010b19;
}

/* Dark Modifications - Secondary */
.__bg-dark .secondary {
  background-color: #ffffff;
  color: #010b19;
  fill: #010b19;
  border-color: #ffffff;
  font-weight: 400;
}

.__bg-dark .secondary:not(.isLoading):hover,
.__bg-dark .secondary:not(.isLoading):active,
.__bg-dark .secondary:not(.isLoading):focus {
  background-color: #010b19;
  color: #ffffff;
  fill: #ffffff;
  border-color: #ffffff;
  box-shadow: inset 0 0 0 0 #010b19, inset 0 0 0 0 #ffffff;
}

.__bg-dark .secondary:not(.isLoading):focus {
  box-shadow: inset 0 0 0 0.0625rem #010b19, inset 0 0 0 0.125rem #ffffff;
}

.tertiary {
  background-color: transparent;
  color: #5c6169;
  fill: #5c6169;
  border: thin solid #a0a9ba;
}

.tertiary:not(.isLoading):hover,
.tertiary:not(.isLoading):active,
.tertiary:not(.isLoading):focus {
  border-color: #010b19;
  color: #010b19;
  fill: #010b19;
  box-shadow: inset 0 0 0 0 #fff, inset 0 0 0 0 #010b19;
}

.tertiary:not(.isLoading):focus {
  box-shadow: inset 0 0 0 0.0625rem #fff, inset 0 0 0 0.125rem #010b19;
}

/* Grey Modifications - Tertiary */
.__bg-grey .tertiary {
  background-color: #fdfcfb;
  color: #5c6169;
  fill: #5c6169;
  border-color: #5c6169;
}

.__bg-grey .tertiary:not(.isLoading):hover,
.__bg-grey .tertiary:not(.isLoading):active,
.__bg-grey .tertiary:not(.isLoading):focus {
  background-color: #fdfcfb;
  color: #010b19;
  fill: #010b19;
  border-color: #010b19;
  box-shadow: inset 0 0 0 0 #fdfcfb, inset 0 0 0 0 #5c6169;
}

.__bg-grey .tertiary:not(.isLoading):focus {
  box-shadow: inset 0 0 0 0.0625rem #fdfcfb, inset 0 0 0 0.125rem #5c6169;
}

/* Dark Modifications - Tertiary */
.__bg-dark .tertiary {
  background-color: #010b19;
  color: #cccbcb;
  fill: #cccbcb;
  border-color: #cccbcb;
  font-weight: 300;
}

.__bg-dark .tertiary:not(.isLoading):hover,
.__bg-dark .tertiary:not(.isLoading):active,
.__bg-dark .tertiary:not(.isLoading):focus {
  background-color: #010b19;
  color: #ffffff;
  fill: #ffffff;
  border-color: #ffffff;
  box-shadow: inset 0 0 0 0 #010b19, inset 0 0 0 0 #ffffff;
}

.__bg-dark .tertiary:not(.isLoading):focus {
  box-shadow: inset 0 0 0 0.0625rem #010b19, inset 0 0 0 0.125rem #ffffff;
}

.danger {
  background-color: transparent;
  border-color: transparent;
  color: #e80067;
  fill: #e80067;
}

.danger:not(.isLoading):hover,
.danger:not(.isLoading):active,
.danger:not(.isLoading):focus {
  text-decoration: underline;
  color: #e80067;
  fill: #e80067;
  border-color: transparent;
}

.danger:not(.isLoading):focus {
  box-shadow: inset 0 0 0 0.0625rem #e80067, inset 0 0 0 0.125rem #ffffff;
}

/* Grey Modifications - Danger */
.__bg-grey .danger {
  background-color: transparent;
  color: #d30260;
  fill: #d30260;
  border-color: transparent;
}

.__bg-grey .danger:not(.isLoading):hover,
.__bg-grey .danger:not(.isLoading):active,
.__bg-grey .danger:not(.isLoading):focus {
  background-color: transparent;
  color: #d30260;
  fill: #d30260;
  box-shadow: inset 0 0 0 0 #d30260, inset 0 0 0 0 #ffffff;
}

.__bg-grey .danger:not(.isLoading):focus {
  box-shadow: inset 0 0 0 0.0625rem #d30260, inset 0 0 0 0.125rem #ffffff;
}

/* Dark Modifications - Danger */
.__bg-dark .danger {
  background-color: transparent;
  color: #f30b73;
  fill: #f30b73;
  border-color: transparent;
  font-weight: 300;
}

.__bg-dark .danger:not(.isLoading):hover,
.__bg-dark .danger:not(.isLoading):active,
.__bg-dark .danger:not(.isLoading):focus {
  background-color: transparent;
  color: #f30b73;
  fill: #f30b73;
  box-shadow: inset 0 0 0 0 #f30b73, inset 0 0 0 0 #010b19;
}

.__bg-dark .danger:not(.isLoading):focus {
  box-shadow: inset 0 0 0 0.0625rem #f30b73, inset 0 0 0 0.125rem #010b19;
}

/* Disabled (w/ Grey and Dark Modifications) */

.disabled,
.disabled:hover,
.disabled:active,
.disabled:focus,
.__bg-grey .disabled,
.__bg-grey .disabled:hover,
.__bg-grey .disabled:active,
.__bg-grey .disabled:focus,
.__bg-dark .disabled,
.__bg-dark .disabled:hover,
.__bg-dark .disabled:active,
.__bg-dark .disabled:focus {
  background-color: #fafafa !important;
  border-color: #eaeaea !important;
  color: #737373 !important;
  fill: #737373 !important;
  cursor: not-allowed !important;
  text-decoration: none !important;
  box-shadow: inset 0 0 0 0 #fafafa, inset 0 0 0 0 #eaeaea !important;
}

.disabled:focus,
.__bg-grey .disabled:focus,
.__bg-dark .disabled:focus {
  box-shadow: inset 0 0 0 0.0625rem #fafafa, inset 0 0 0 0.125rem #eaeaea !important;
}

.button:not(.disabled).isLoading {
  cursor: progress;
}

.loading {
  display: none;
}

.isLoading .loading {
  display: inline-block;
}

.isLoading .text {
  visibility: hidden;
}

.text {
  visibility: initial;
}

.loading {
  position: absolute;
  top: calc(50% - 12px);
  left: calc(50% - 12px);
}

@keyframes ckw {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(720deg);
  }
}

.loading > svg {
  width: 24px;
  height: 24px;
  animation-name: ckw;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;
}
</style>
<style>
.button .text > svg {
  height: 1rem;
  width: 1rem;
  transform: scale(1.5);
  margin: 0 0.125rem -0.175rem;
}

.small .text > svg {
  height: 1rem;
  width: 1rem;
  transform: scale(1);
  margin: 0 0 -0.2188rem;
}

.large .text > svg {
  height: 1rem;
  width: 1rem;
  transform: scale(1.75);
  margin: 0 0.5rem 0;
}
</style>
