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
    >
    <component v-if="helpText" :is="parsedHelpText"></component>
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
  @Prop() value!: string;
  @Prop() helpText!: string;
  @Prop({ default: Type.Text }) private type!: Type;
  @Prop(Boolean) private disabled!: boolean;
  @Prop(Boolean) private hiddenLabel!: boolean;
  @Prop(Boolean) private internalLabel!: boolean;

  @Emit("input")
  onInputChange(e) {
    return e.target.value;
  }

  get helpTextId() {
    return `${this.id}-help`;
  }

  get parsedHelpText() {
    const linkedTextRegExp = /\[\[(.*?)\]\]/g;
    let helpText = this.helpText;
    let matches = linkedTextRegExp.exec(helpText);
    const replacements = {};

    while (matches != null) {
      const [href, label] = matches[1].split("|");
      replacements[matches[0]] = { href, label };
      matches = linkedTextRegExp.exec(helpText);
    }

    Object.keys(replacements).forEach(key => {
      const { href, label } = replacements[key];
      const useLabel = label !== undefined ? label : href;

      helpText = helpText.replace(
        `${key}`,
        `<a href="${href}" rel="noopener" target="blank">${useLabel}</a>`
      );
    });

    return {
      template: `<div id="${this.id}-help}" class="help-text">${helpText}</div>`
    };

    return "";
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

    if (this.helpText) {
      bindProps["aria-describedby"] = this.helpTextId;
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
  display: block;
  padding-top: 2rem;
  font-weight: 400;
  font-size: 1rem;
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
  line-height: 1;
}

.input:focus {
  box-shadow: inset 0 0 0 0.0625rem #fff, inset 0 0 0 0.125rem #010b19;
  transition: all 200ms ease-in-out;
}

.help-text {
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  font-family: "Raleway", sans-serif;
  display: block;
  font-weight: 300;
  font-size: 0.875rem;
  color: #5c6169;
  line-height: 1.4;
}

.disabled,
.disabled:hover,
.disabled:active,
.disabled:focus {
  background-color: #fafafa;
  border-color: #eaeaea;
  color: #737373;
  fill: #737373;
  cursor: not-allowed;
  text-decoration: none;
  box-shadow: inset 0 0 0 0 #fafafa, inset 0 0 0 0 #eaeaea;
}

.disabled:focus {
  box-shadow: inset 0 0 0 0.0625rem #fafafa, inset 0 0 0 0.125rem #eaeaea;
}
</style>
