<template>
  <div class="fieldset">
    <label :for="id" class="label" :class="{ hide, internal: internalLabel }">
      <slot></slot>
    </label>
    <input
      v-bind="[$attrs, linkProps.bindProps]"
      v-on="linkProps.onEvents"
      class="input"
      :class="{ disabled }"
    />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

export enum Type {
  Text = "text",
  Email = "email",
  Hidden = "hidden",
  Number = "number",
  Password = "password",
  Tel = "tel"
}

@Component({
  inheritAttrs: false
})
export default class BaseInput extends Vue {
  @Prop({ required: true }) id!: string;
  @Prop({ required: true }) value!: string;
  @Prop({ default: Type.Text }) private type!: Type;
  @Prop(Boolean) private disabled!: boolean;
  @Prop(Boolean) private hiddenLabel!: boolean;
  @Prop(Boolean) private internalLabel!: boolean;

  @Emit("input")
  onInputChange(e) {
    return e.target.value;
  }

  get linkProps() {
    const onEvents = {
      input: this.onInputChange
    };
    const bindProps = {
      id: this.id,
      name: this.id,
      value: this.value,
      type: this.type
    };

    if (this.type === "text") {
    } else if (this.type === "email") {
    } else if (this.type === "hidden") {
    } else if (this.type === "number") {
    } else if (this.type === "password") {
    } else if (this.type === "tel") {
    }

    if (this.disabled) {
      bindProps["aria-disabled"] = true;
      bindProps["disabled"] = true;
      delete onEvents["click"];
    }

    if (this.internalLabel) {
      delete this.$attrs["placeholder"];
    }

    return { onEvents, bindProps };
  }

  get hide() {
    return (
      this.type === "hidden" ||
      this.hiddenLabel ||
      (this.internalLabel && this.value.length > 0)
    );
  }
}
</script>

<style scoped>
.fieldset {
  position: relative;
}

.label {
  display: inline-block;
  padding-top: 2rem;
  font-weight: 400;
  font-size: 0.875rem;
}

.internal {
  position: absolute;
  display: block;
  padding: 0.5rem;
  font-size: 1rem;
  top: 0;
  left: 0;
  color: #6d767e;
}

.fieldset:focus-within .internal,
.hide {
  border: 0;
  clip: rect(0 0 0 0);
  height: 0.0625rem;
  margin: -0.0625rem;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 0.0625rem;
}

.input {
  border: thin solid #010101;
  padding: 0.5rem;
  border-radius: 0.25rem;
  display: block;
  box-shadow: inset 0 0 0 0 #fff, inset 0 0 0 0 #010b19;
  transition: all 200ms ease-in-out;
  width: auto;
  margin-top: 0.5rem;
  color: #5c6169;
}

.input:focus {
  box-shadow: inset 0 0 0 0.0625rem #fff, inset 0 0 0 0.125rem #010b19;
  transition: all 200ms ease-in-out;
}

.disabled,
.disabled:hover,
.disabled:active,
.disabled:focus {
  background-color: #fafafa;
  border-color: #eaeaea;
  color: #cccccc;
  fill: #cccccc;
  cursor: not-allowed;
  text-decoration: none;
  box-shadow: inset 0 0 0 0 #fafafa, inset 0 0 0 0 #eaeaea;
}

.disabled:focus {
  box-shadow: inset 0 0 0 0.0625rem #fafafa, inset 0 0 0 0.125rem #eaeaea;
}
</style>
