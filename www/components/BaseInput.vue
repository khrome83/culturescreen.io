<template>
  <div class="fieldset">
    <label :for="getId" class="label" :class="{ hide, internal: internalLabel, disabled }">
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
import nanoid from "nanoid";

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
  @Prop() id!: string;
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

  get getId() {
    return this.id ? this.id : `input-${nanoid()}`;
  }

  get helpTextId() {
    return `${this.getId}-help`;
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
      template: `<div id="${
        this.helpTextId
      }" class="help-text">${helpText}</div>`
    };

    return "";
  }

  get linkProps() {
    const onEvents = {
      input: this.onInputChange
    };
    const bindProps = {
      id: this.getId,
      name: this.getId,
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
  line-height: 1.5;
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
  border: thin solid #010b19;
  background-color: #ffffff;
  padding: 0.5rem;
  border-radius: 0.25rem;
  display: block;
  box-shadow: inset 0 0 0 0 #ffffff, inset 0 0 0 0 #010b19;
  transition: all 200ms ease-in-out;
  width: auto;
  margin-top: 0.5rem;
  color: #5c6169;
  line-height: 1;
}

/* Grey Modifications - .input */
.__bg-grey .input {
  border: thin solid #010b19;
  background-color: #ffffff;
  color: #5c6169;
  box-shadow: inset 0 0 0 0 #ffffff, inset 0 0 0 0 #010b19;
}

/* Dark Modifications - .input */
.__bg-dark .input {
  border: thin solid #ffffff;
  background-color: #010b19;
  color: #cccbcb;
  box-shadow: inset 0 0 0 0 #010b19, inset 0 0 0 0 #ffffff;
}

.input:focus {
  box-shadow: inset 0 0 0 0.0625rem #ffffff, inset 0 0 0 0.125rem #010b19;
  transition: all 200ms ease-in-out;
}

/* Grey Modifications - .input:focus */
.__bg-grey .input:focus {
  box-shadow: inset 0 0 0 0.0625rem #fdfcfb, inset 0 0 0 0.125rem #010b19;
}

/* Dark Modifications - .input:focus */
.__bg-dark .input:focus {
  box-shadow: inset 0 0 0 0.0625rem #010b19, inset 0 0 0 0.125rem #ffffff;
}

.help-text {
  font-family: "Raleway", sans-serif;
  display: block;
  font-weight: 300;
  font-size: 0.875rem;
  color: #5c6169;
  line-height: 1.4;
  padding: 0.25rem 0 0.5rem;
}

/* Dark Modifications - .help-text */
.__bg-dark .help-text {
  color: #cccbcb;
}

.disabled,
.disabled:hover,
.disabled:active,
.disabled:focus {
  background-color: #ffffff;
  border-color: #eaeaea;
  color: #737373;
  fill: #737373;
  cursor: not-allowed;
  text-decoration: none;
  box-shadow: inset 0 0 0 0 #ffffff, inset 0 0 0 0 #eaeaea;
}

.label.disabled::after {
  content: " (disabled)";
}

/* Grey Modifications - .disabled */
.__bg-grey .disabled,
.__bg-grey .disabled:hover,
.__bg-grey .disabled:active,
.__bg-grey .disabled:focus {
  background-color: #fdfcfb;
  border-color: #cccbcb;
  color: #737373;
  fill: #737373;
  box-shadow: inset 0 0 0 0 #fdfcfb, inset 0 0 0 0 #cccbcb;
}

/* Dark Modifications - .disabled */
.__bg-dark .disabled,
.__bg-dark .disabled:hover,
.__bg-dark .disabled:active,
.__bg-dark .disabled:focus {
  background-color: #010b19;
  border-color: #33333c;
  color: #737373;
  fill: #737373;
  box-shadow: inset 0 0 0 0 #010b19, inset 0 0 0 0 #33333c;
}

.disabled:focus {
  box-shadow: inset 0 0 0 0.0625rem #fafafa, inset 0 0 0 0.125rem #eaeaea;
}

.disabled + .label {
  color: #f00;
}
</style>
