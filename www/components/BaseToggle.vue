<template>
  <div class="toggle">
    <input v-bind="[$attrs, linkProps.bindProps]" v-on="linkProps.onEvents" class="input">
    <component :is="parsedLabel" :for="getId" class="label"/>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Model, Vue } from "nuxt-property-decorator";
import nanoid from "nanoid";
import { parseLinks } from "~/library";

@Component({
  inheritAttrs: false
})
export default class BaseToggle extends Vue {
  @Prop() id!: string;
  @Prop({ required: true }) group!: string;
  @Prop({ required: true }) value!: string;
  @Model("change", { type: String }) readonly modelValue!: string;

  @Emit("change")
  onInputChange() {
    return this.value;
  }

  get getId() {
    return this.id ? this.id : `input-${nanoid()}`;
  }

  get linkProps() {
    const onEvents = {
      input: this.onInputChange
    };
    const bindProps = {
      type: "radio",
      id: this.getId,
      name: this.group,
      checked: this.shouldBeChecked,
      value: this.value
    };

    return { onEvents, bindProps };
  }

  get shouldBeChecked() {
    return this.modelValue == this.value;
  }

  get parsedLabel() {
    return {
      render: createElement => {
        return createElement(
          "label",
          parseLinks(createElement, this.$slots.default[0].text)
        );
      }
    };
  }
}
</script>

<style scoped>
.toggle {
  position: relative;
}

.input {
  position: absolute;
  top: auto;
  overflow: hidden;
  clip: rect(0.0625rem, 0.0625rem, 0.0625rem, 0.0625rem);
  width: 0.0625rem;
  height: 0.0625rem;
  white-space: nowrap;
}

.label {
  display: inline-block;
  text-align: center;
  color: #5c6169;
  fill: #5c6169;
  background-color: transparent;
  border: thin solid #a0a9ba;
  border-left-width: 0;
  border-right-width: 0;
  text-decoration: none;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  position: relative;
  padding: 0.4rem 1.25rem 0.25rem;
  line-height: 1.25;
  letter-spacing: 0.0781rem;
  text-transform: uppercase;
}

/* Grey Modifications - .label */
.__bg-grey .label {
  background-color: #fdfcfb;
  color: #5c6169;
  fill: #5c6169;
  border-color: #5c6169;
}

/* Dark Modifications - .label */
.__bg-dark .label {
  background-color: #010b19;
  color: #cccbcb;
  fill: #cccbcb;
  border-color: #cccbcb;
}

.label:hover,
.label:active,
.input:focus + .label {
  border-color: #010b19;
  color: #010b19;
  fill: #010b19;
  box-shadow: inset 0 0 0 0 #fff, inset 0 0 0 0 #010b19;
}

.input:focus + .label {
  box-shadow: inset 0 0 0 0.0625rem #fff, inset 0 0 0 0.125rem #010b19;
}

/* Grey Modifications - .label:hover, .label:active, .input:focus + .label */
.__bg-grey .label:hover,
.__bg-grey .label:active,
.__bg-grey .input:focus + .label {
  background-color: #fdfcfb;
  color: #010b19;
  fill: #010b19;
  border-color: #010b19;
  box-shadow: inset 0 0 0 0 #fdfcfb, inset 0 0 0 0 #5c6169;
}

.__bg-grey .input:focus + .label {
  box-shadow: inset 0 0 0 0.0625rem #fdfcfb, inset 0 0 0 0.125rem #5c6169;
}

/* Dark Modifications - .label:hover, .label:active, .input:focus + .label */
.__bg-dark .label:hover,
.__bg-dark .label:active,
.__bg-dark .input:focus + .label {
  background-color: #010b19;
  color: #ffffff;
  fill: #ffffff;
  border-color: #ffffff;
  box-shadow: inset 0 0 0 0 #010b19, inset 0 0 0 0 #ffffff;
}

.__bg-dark .input:focus + .label {
  box-shadow: inset 0 0 0 0.0625rem #010b19, inset 0 0 0 0.125rem #ffffff;
}

.input:checked + .label {
  background-color: #010b19;
  color: #ffffff;
  fill: #ffffff;
  border-color: #010b19;
  transform: scale(1.2);
  z-index: 2;
  border-radius: 0.25rem;
}

/* Grey Modifications - .input:checked + .label */
.__bg-grey .input:checked + .label {
  background-color: #010b19;
  color: #fdfcfb;
  fill: #fdfcfb;
  border-color: #010b19;
}

/* Dark Modifications - .input:checked + .label */
.__bg-dark .input:checked + .label {
  background-color: #ffffff;
  color: #010b19;
  fill: #010b19;
  border-color: #ffffff;
}

.input:checked:focus + .label {
  box-shadow: inset 0 0 0 0.0625rem #010b19, inset 0 0 0 0.125rem #ffffff;
}

/* Grey Modifications - .input:checked:focus + .label */
.__bg-grey .input:checked:focus + .label {
  box-shadow: inset 0 0 0 0.0625rem #5c6169, inset 0 0 0 0.125rem #fdfcfb;
}

/* Dark Modifications - .input:checked:focus + .label */
.__bg-dark .input:checked:focus + .label {
  box-shadow: inset 0 0 0 0.0625rem #ffffff, inset 0 0 0 0.125rem #010b19;
}
</style>
