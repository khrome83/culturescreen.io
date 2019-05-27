<template>
  <div class="select-set">
    <label :for="getId" class="label" :class="{ hide: hiddenLabel, disabled }">{{label}}</label>
    <div class="select" :class="{ disabled }">
      <select
        v-bind="[$attrs, linkProps.bindProps]"
        v-on="linkProps.onEvents"
        class="select-input"
        ref="select"
      >
        <slot></slot>
      </select>
      <div class="action">
        <updown-icon class="updown-icon"/>
      </div>
    </div>
    <component v-if="helpText" :is="parsedHelpText"></component>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";
import nanoid from "nanoid";
import UpdownIcon from "~/assets/svg/updown.svg";

@Component({
  components: { UpdownIcon },
  inheritAttrs: false
})
export default class BaseSelect extends Vue {
  @Prop() id!: string;
  @Prop() helpText!: string;
  @Prop() label!: string;
  @Prop(Boolean) private disabled!: boolean;
  @Prop(Boolean) private hiddenLabel!: boolean;

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
      name: this.getId
    };

    if (this.disabled) {
      bindProps["aria-disabled"] = true;
      bindProps["disabled"] = true;
      delete onEvents["click"];
    }

    if (this.helpText) {
      bindProps["aria-describedby"] = this.helpTextId;
    }

    return { onEvents, bindProps };
  }
}
</script>

<style scoped>
.select-set {
  position: relative;
}

.label {
  display: block;
  padding-top: 2rem;
  font-weight: 400;
  font-size: 1rem;
}

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

.select {
  border: thin solid #010b19;
  background-color: #ffffff;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 0 #ffffff, inset 0 0 0 0 #010b19;
  transition: all 200ms ease-in-out;
  width: auto;
  min-width: 17.5rem;
  margin-top: 0.5rem;
  display: block;
  cursor: pointer;
  position: relative;
}

/* Grey Modifications - .select */
.__bg-grey .select {
  border-color: #010b19;
  background-color: #ffffff;
  color: #5c6169;
  box-shadow: inset 0 0 0 0 #ffffff, inset 0 0 0 0 #010b19;
}

/* Dark Modifications - .select */
.__bg-dark .select {
  border-color: #ffffff;
  background-color: #010b19;
  color: #cccbcb;
  box-shadow: inset 0 0 0 0 #010b19, inset 0 0 0 0 #ffffff;
}

.select:focus-within {
  box-shadow: inset 0 0 0 0.0625rem #ffffff, inset 0 0 0 0.125rem #010b19;
  transition: all 200ms ease-in-out;
}

/* Grey Modifications - .select:focus-within */
.__bg-grey .select:focus-within {
  box-shadow: inset 0 0 0 0.0625rem #fdfcfb, inset 0 0 0 0.125rem #010b19;
}

/* Dark Modifications - .select:focus-within */
.__bg-dark .select:focus-within {
  box-shadow: inset 0 0 0 0.0625rem #010b19, inset 0 0 0 0.125rem #ffffff;
}

.select-input {
  background-color: transparent;
  display: block;
  color: #5c6169;
  line-height: 1;
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  border: none;
  margin: 0;
  padding: 0.625rem 6rem 0.5625rem 0.5rem;
  cursor: pointer;
  height: 40px;
  width: 100%;
  border-radius: 0;
}

/* Grey Modifications - .select-input */
.__bg-grey .select-input {
  color: #5c6169;
}

/* Dark Modifications - .select */
.__bg-dark .select-input {
  color: #cccbcb;
}

.action {
  padding: 0.5rem;
  border-left: thin solid #010b19;
  display: flex;
  align-items: center;
  flex-direction: row;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

/* Grey Modifications - .action */
.__bg-grey .action {
  border-left-color: #010b19;
}

/* Dark Modifications - .action */
.__bg-dark .action {
  border-left-color: #ffffff;
}

.updown-icon {
  width: 1.5rem;
  height: 1.5rem;
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
  box-shadow: inset 0 0 0 0 #fdfcfb, inset 0 0 0 0 #cccbcb;
}

/* Dark Modifications - .disabled */
.__bg-dark .disabled,
.__bg-dark .disabled:hover,
.__bg-dark .disabled:active,
.__bg-dark .disabled:focus {
  background-color: #010b19;
  border-color: #33333c;
  box-shadow: inset 0 0 0 0 #010b19, inset 0 0 0 0 #33333c;
}

.disabled:focus {
  box-shadow: inset 0 0 0 0.0625rem #fafafa, inset 0 0 0 0.125rem #eaeaea;
}

.disabled .action {
  border-left-color: #eaeaea;
  fill: #737373;
}

/* Grey Modifications - .disabled .action */
.__bg-grey .disabled .action {
  border-left-color: #cccbcb;
}

/* Dark Modifications - .disabled .action */
.__bg-dark .disabled .action {
  border-left-color: #33333c;
}

.disabled .select-input {
  color: #737373;
  cursor: not-allowed;
}

/* Grey Modifications - .disabled .select-input */
.__bg-grey .disabled .select-input {
  color: #737373;
}

/* Dark Modifications - .disabled .select-input */
.__bg-dark .disabled .select-input {
  color: #737373;
}
</style>
