<template>
  <div class="fieldset" :class="{ error }">
    <label :for="getId" class="label" :class="{ hide, internal: internalLabel, disabled }">
      <slot></slot>
    </label>
    <input
      v-bind="[$attrs, linkProps.bindProps]"
      v-on="linkProps.onEvents"
      class="input"
      :class="{ disabled, inline }"
    >
    <component v-if="helpText && !error" :is="parsedHelpText"></component>
    <component v-if="error" :is="parsedErrorText"></component>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";
import nanoid from "nanoid";
import { parseLinks } from "~/library";

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
  @Prop() errorText!: string;
  @Prop({ default: Type.Text }) private type!: Type;
  @Prop(Boolean) private disabled!: boolean;
  @Prop(Boolean) private hiddenLabel!: boolean;
  @Prop(Boolean) private internalLabel!: boolean;
  @Prop(Boolean) private inline!: boolean;

  @Emit("input")
  onInputChange(e) {
    return e.target.value;
  }

  get error() {
    return !this.disabled && !!this.errorText;
  }

  get getId() {
    return this.id ? this.id : `input-${nanoid()}`;
  }

  get helpTextId() {
    return `${this.getId}-help`;
  }

  get errorTextId() {
    return `${this.getId}-error`;
  }

  get parsedHelpText() {
    return {
      render: createElement => {
        return createElement(
          "div",
          {
            class: "help-text",
            attrs: {
              id: this.helpTextId
            }
          },
          parseLinks(createElement, this.helpText)
        );
      }
    };
  }

  get parsedErrorText() {
    return {
      render: createElement => {
        return createElement(
          "div",
          {
            class: "error-text",
            attrs: {
              id: this.errorTextId
            }
          },
          parseLinks(createElement, this.errorText)
        );
      }
    };
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

    if (this.error) {
      bindProps["aria-describedby"] = this.errorTextId;
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
  margin-bottom: 2rem;
}

.label {
  display: block;
  font-weight: 400;
  font-size: 1rem;
  text-align: left;
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
  min-width: 17.5rem;
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

.input.inline {
  margin: 0;
  min-width: initial;
  width: 100%;
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

.help-text,
.error-text {
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

.error-text,
.error .label {
  color: #ff3867;
}

/* Grey Modifications - .error-text, .error .label */
.__bg-grey .error-text,
.__bg-grey .error .label {
  color: #d30260;
}

/* Dark Modifications - .error-text, .error .label */
.__bg-dark .error-text,
.__bg-dark .error .label {
  color: #f30b73;
}

.error {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.error .input {
  border-color: #ff3867;
}

/* Grey Modifications - .error .input */
.__bg-grey .error .input {
  border-color: #d30260;
}

/* Dark Modifications - .error .input */
.__bg-dark .error .input {
  border-color: #f30b73;
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

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-0.0625rem, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(0.125rem, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-0.25rem, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(0.25rem, 0, 0);
  }
}
</style>
