<template>
  <div class="radio-set">
    <input
      v-bind="[$attrs, linkProps.bindProps]"
      v-on="linkProps.onEvents"
      class="input"
      :class="{ disabled }"
    >
    <label :for="getId" class="label">
      <slot></slot>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Model, Vue } from "nuxt-property-decorator";
import nanoid from "nanoid";

@Component({
  inheritAttrs: false
})
export default class BaseRadio extends Vue {
  @Prop() id!: string;
  @Prop({ required: true }) group!: string;
  @Prop({ required: true }) value!: string;
  @Prop(Boolean) private disabled!: boolean;
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
  font-size: 1rem;
  padding: 1rem 1rem 1rem 2.75rem;
  cursor: pointer;
  line-height: 1.4;
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
  margin: 1.1rem 0.5rem 1rem 1rem;
  left: 0;
  top: 0;
  bottom: 0;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  border-radius: 1rem;
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
  background-color: #fafafa;
  border-color: #737373;
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
