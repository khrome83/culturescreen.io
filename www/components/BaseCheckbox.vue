<template>
  <div class="checkbox-set">
    <input
      v-bind="[$attrs, linkProps.bindProps]"
      v-on="linkProps.onEvents"
      class="input"
      :class="{ disabled }"
    >
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
export default class BaseCheckbox extends Vue {
  @Prop() id!: string;
  @Prop() value!: string;
  @Prop(Boolean) private disabled!: boolean;
  @Model("change", { type: [Array, Boolean] }) readonly modelValue!:
    | Array<string>
    | boolean;

  @Emit("change")
  onInputChange(e) {
    let output = e.target.checked;

    if (this.modelValue instanceof Array) {
      const newValue = [...this.modelValue];

      if (output) {
        newValue.push(this.value);
      } else {
        newValue.splice(newValue.indexOf(this.value), 1);
      }

      return newValue.sort();
    }

    return output;
  }

  get getId() {
    return this.id ? this.id : `input-${nanoid()}`;
  }

  get linkProps() {
    const onEvents = {
      input: this.onInputChange
    };
    const bindProps = {
      type: "checkbox",
      id: this.getId,
      name: this.getId,
      checked: this.shouldBeChecked,
      value: this.value
    };

    if (this.disabled) {
      bindProps["aria-disabled"] = true;
      bindProps["disabled"] = true;
      delete onEvents["click"];
    }

    return { onEvents, bindProps };
  }

  get shouldBeChecked() {
    if (this.modelValue instanceof Array) {
      return this.modelValue.includes(this.value);
    }

    return this.modelValue === true;
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
.checkbox-set {
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
  display: block;
  padding-top: 2rem;
  font-weight: 400;
  font-size: 1rem;
  padding: 1rem 1rem 1rem 2.75rem;
  cursor: pointer;
  line-height: 1.4;
  text-align: left;
}

.input:focus + .label {
  box-shadow: inset 0 0 0 0.0625rem #ee0028;
}

/* Grey Modifications - .label */
.__bg-grey .input:focus + .label {
  box-shadow: inset 0 0 0 0.0625rem #da0629;
}

/* Dark Modifications - .label */
.__bg-dark .input:focus + .label {
  box-shadow: inset 0 0 0 0.0625rem #f32144;
}

.label:before {
  content: "";
  background-color: #fff;
  border: thin solid #a0a9ba;
  display: block;
  position: absolute;
  width: 1rem;
  height: 1rem;
  margin: 1.15rem 0.5rem 1rem 1rem;
  left: 0;
  top: 0;
  bottom: 0;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  box-shadow: inset 0 0 0 0 #fff;
}

/* Grey Modifications - .label:before */
.__bg-grey .label:before {
  background-color: #fdfcfb;
  border: thin solid #a0a9ba;
  box-shadow: inset 0 0 0 0 #fdfcfb;
}

/* Dark Modifications - .label:before */
.__bg-dark .label:before {
  background-color: #010b19;
  border: thin solid #a0a9ba;
  box-shadow: inset 0 0 0 0 #010b19;
}

.label:hover:before {
  border-color: #010b19;
}

/* Grey Modifications - .label:hover:before */
.__bg-grey .label:hover:before {
  border-color: #010b19;
}

/* Dark Modifications - .label:hover:before */
.__bg-dark .label:hover:before {
  border-color: #ffffff;
}

.input:checked + .label:before {
  background-color: #ee0028;
  box-shadow: inset 0 0 0 0.125rem #fff;
  transition: all 200ms ease-in-out;
}

/* Grey Modifications - .input:checked + .label:before */
.__bg-grey .input:checked + .label:before {
  background-color: #da0629;
  box-shadow: inset 0 0 0 0.125rem #fdfcfb;
}

/* Dark Modifications - .input:checked + .label:before */
.__bg-dark .input:checked + .label:before {
  background-color: #f32144;
  box-shadow: inset 0 0 0 0.125rem #010b19;
}

.disabled + .label {
  color: #737373;
  cursor: not-allowed;
}

.disabled + .label:before {
  transition: all 200ms ease-in-out;
  background-color: #ffffff;
  border-color: #eaeaea;
  color: #737373;
  fill: #737373;
  cursor: not-allowed;
  text-decoration: none;
  box-shadow: inset 0 0 0 0 #ffffff, inset 0 0 0 0 #eaeaea;
}

/* Grey Modifications - .disabled + .label:before */
.__bg-grey .disabled + .label:before {
  background-color: #fdfcfb;
  border-color: #cccbcb;
  color: #737373;
  fill: #737373;
  box-shadow: inset 0 0 0 0 #fdfcfb, inset 0 0 0 0 #cccbcb;
}

/* Dark Modifications - .disabled + .label:before */
.__bg-dark .disabled + .label:before {
  background-color: #010b19;
  border-color: #33333c;
  color: #737373;
  fill: #737373;
  box-shadow: inset 0 0 0 0 #010b19, inset 0 0 0 0 #33333c;
}

.disabled + .label::after {
  content: " (disabled)";
}

.disabled:checked + .label:before {
  background-color: rgba(238, 0, 40, 0.5);
  box-shadow: inset 0 0 0 0.125rem #fff,
    inset 0 0 0 0.1875rem rgba(238, 0, 40, 0.5);
}

/* Grey Modifications - .disabled:checked + .label:before */
.__bg-grey .disabled:checked + .label:before {
  background-color: rgba(218, 6, 41, 0.5);
  box-shadow: inset 0 0 0 0.125rem #fdfcfb,
    inset 0 0 0 0.1875rem rgba(218, 6, 41, 0.5);
}

/* Dark Modifications - .disabled:checked + .label:before */
.__bg-dark .disabled:checked + .label:before {
  background-color: rgba(243, 33, 68, 0.5);
  box-shadow: inset 0 0 0 0.125rem #010b19,
    inset 0 0 0 0.1875rem rgba(243, 33, 68, 0.5);
}

@media screen and (-ms-high-contrast: active) {
  .input:checked + .label:before {
    content: "\00d7";
    line-height: 0.75;
    background-color: transparent;
    box-shadow: none;
  }
}
</style>
