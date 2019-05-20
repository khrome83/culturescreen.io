<template>
  <div class="radio-set">
    <input
      v-bind="[$attrs, linkProps.bindProps]"
      v-on="linkProps.onEvents"
      class="input"
      :class="{ disabled }"
    >
    <label :for="id" class="label">
      <slot></slot>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Model, Vue } from "nuxt-property-decorator";

@Component({
  inheritAttrs: false
})
export default class BaseRadio extends Vue {
  @Prop({ required: true }) id!: string;
  @Prop({ required: true }) group!: string;
  @Prop({ required: true }) value!: string;
  @Prop(Boolean) private disabled!: boolean;
  @Model("change", { type: String }) readonly modelValue!: string;

  @Emit("change")
  onInputChange() {
    return this.value;
  }

  get linkProps() {
    const onEvents = {
      input: this.onInputChange
    };
    const bindProps = {
      type: "radio",
      id: this.id,
      name: this.group,
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
    return this.modelValue == this.value;
  }

  mounted() {}
}
</script>

<style scoped>
.radio-set {
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
  font-size: 0.875rem;
  padding: 1rem 1rem 1rem 2.5rem;
}

.input:focus + .label {
  box-shadow: inset 0 0 0 0.0625rem #ee0028;
}

.input + .label:before {
  content: "";
  background-color: #fff;
  border: thin solid #a0a9ba;
  display: block;
  position: absolute;
  width: 0.95rem;
  height: 0.95rem;
  margin: 1rem 0.5rem 1rem 1rem;
  left: 0;
  top: 0;
  bottom: 0;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  border-radius: 1rem;
  box-shadow: inset 0 0 0 0 #fff;
}

.input:checked {
  border-color: #010b19;
}

.input:checked + .label:before {
  background-color: #ee0028;
  box-shadow: inset 0 0 0 0.125rem #fff;
  transition: all 200ms ease-in-out;
}

.disabled + .label {
  color: #737373;
}

.disabled + .label:before {
  transition: all 200ms ease-in-out;
  background-color: #fafafa;
  border-color: #eaeaea;
  color: #737373;
  fill: #737373;
  cursor: not-allowed;
  text-decoration: none;
  box-shadow: inset 0 0 0 0 #fafafa, inset 0 0 0 0 #eaeaea;
}

.disabled + .label::after {
  content: " (disabled)";
}

.disabled:checked + .label:before {
  background-color: rgba(238, 0, 40, 0.5);
  box-shadow: inset 0 0 0 0.125rem #fff,
  inset 0 0 0 0.1875rem rgba(238, 0, 40, 0.5);
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
