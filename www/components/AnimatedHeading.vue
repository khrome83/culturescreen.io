<template>
  <component :is="processedHeading"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class AnimatedHeading extends Vue {
  @Prop({ default: 1, type: Number }) level!: number;
  @Prop({ default: 3, type: Number }) delay!: number;
  @Prop({ default: 0.5, type: Number }) offset!: number;
  @Prop({ required: true, type: Object }) animatedList!: object;

  originalText = "";
  replacementsMap;

  createMap(text: string) {
    const textRegExp = /(\[\[|\[\%)(.*?)(\]\]|\%\])/g;
    let matches = textRegExp.exec(text);
    let index = 0;
    const replacements = {};

    while (matches != null) {
      const preNewLine = matches[1] === "[[" ? false : true;
      const postNewLine = matches[3] === "]]" ? false : true;

      replacements[matches[0]] = {
        index,
        source: matches[2],
        preNewLine,
        postNewLine
      };
      index++;
      matches = textRegExp.exec(text);
    }

    this.replacementsMap = replacements;
  }

  parseText(
    createElement: Function,
    text: string,
    delay: number,
    offset: number
  ) {
    let template = text;
    const output = [];
    let theme = 0;

    Object.keys(this.replacementsMap).forEach(key => {
      template = template.replace(`${key}`, `^${key}^`);
    });

    // Break the template into parts, including some that will become dynamic
    const parts = template.split("^");
    parts.forEach(part => {
      if (this.replacementsMap[part] === undefined) {
        output.push(part);
      } else {
        const { index, source, preNewLine, postNewLine } = this.replacementsMap[
          part
        ];
        const words = this.animatedList[source];
        let wordSet = [];
        let longestWord = words[0];
        const animation = `
          animation: rotateWord-${words.length}-${
          this.headingLevel
        } ${words.length * delay}s linear infinite 0s;
        `;

        // Create Elements for Each Word in the Set
        words.forEach((word, wordIndex) => {
          const style = `${animation} animation-delay: ${wordIndex * delay +
            index * offset}s`;

          wordSet.push(
            createElement("span", {
              class: `word theme-${theme % 5}`,
              style,
              domProps: { innerHTML: word }
            })
          );

          theme++; // Increment Theme
        });

        // Include longest word
        wordSet.push(
          createElement("span", { class: "word-filler" }, longestWord)
        );

        // Add to output (account for new lines)
        if (preNewLine) output.push(createElement("br"));
        output.push(
          createElement(
            "span",
            {
              class: `rotating-word ${this.headingLevel}`,
              attrs: { "aria-hidden": true }
            },
            wordSet
          )
        );
        if (postNewLine) output.push(createElement("br"));

        theme++; // Increment Theme
      }
    });

    return output;
  }

  created() {
    const text = this.$slots.default[0].text;
    this.originalText = text;
    this.createMap(text);
  }

  get headingLevel() {
    const headings = ["h1", "h2", "h3", "h4"];
    return !this.level || this.level > 4
      ? headings[2]
      : headings[this.level - 1];
  }

  get ariaLabel() {
    let output = this.originalText;
    Object.keys(this.replacementsMap).forEach(key => {
      const { source } = this.replacementsMap[key];
      const word = this.animatedList[source][0];
      output = output.replace(key, word);
    });

    return output.replace("&nbsp;", " ");
  }

  get processedHeading() {
    return {
      render: createElement => {
        return createElement(
          this.headingLevel,
          {
            class: "heading",
            attrs: { "aria-label": this.ariaLabel }
          },
          this.parseText(
            createElement,
            this.originalText,
            this.delay,
            this.offset
          )
        );
      }
    };
  }
}
</script>

<style>
.rotating-word {
  position: relative;
  margin: 0.5rem 0;
  line-height: 1;
}

.rotating-word > .word {
  position: absolute;
  opacity: 0;
  overflow: hidden;
  left: 0;
  line-height: 1.2;
}

.rotating-word.h1 > .word {
  top: 1px;
}

.rotating-word.h2 > .word,
.rotating-word.h3 > .word {
  top: 1px;
}

.rotating-word.h4 > .word {
  top: 0;
}

.rotating-word > .word-filler {
  visibility: hidden;
  pointer-events: none;
  user-select: none;
}

.rotating-word > .word.theme-0 {
  color: #ee0028;
}

/* Grey Modifications - .rotating-word > .word.theme-0  */
.__bg-grey .rotating-word > .word.theme-0 {
  color: #da0629;
}

/* Dark Modifications - .rotating-word > .word.theme-0  */
.__bg-dark .rotating-word > .word.theme-0 {
  color: #f32144;
}

.rotating-word > .word.theme-1 {
  color: #0080a3;
}

/* Grey Modifications - .rotating-word > .word.theme-1  */
.__bg-grey .rotating-word > .word.theme-1 {
  color: #007c9e;
}

/* Dark Modifications - .rotating-word > .word.theme-1  */
.__bg-dark .rotating-word > .word.theme-1 {
  color: #0090b8;
}

.rotating-word > .word.theme-2 {
  color: #008858;
}

/* Grey Modifications - .rotating-word > .word.theme-2  */
.__bg-grey .rotating-word > .word.theme-2 {
  color: #06855f;
}

/* Dark Modifications - .rotating-word > .word.theme-2  */
.__bg-dark .rotating-word > .word.theme-2 {
  color: #0fa172;
}

.rotating-word > .word.theme-3 {
  color: #ca5000;
}

/* Grey Modifications - .rotating-word > .word.theme-3  */
.__bg-grey .rotating-word > .word.theme-3 {
  color: #b65c00;
}

/* Dark Modifications - .rotating-word > .word.theme-3  */
.__bg-dark .rotating-word > .word.theme-3 {
  color: #e26d43;
}

.rotating-word > .word.theme-4 {
  color: #e21d65;
}

/* Grey Modifications - .rotating-word > .word.theme-4  */
.__bg-grey .rotating-word > .word.theme-4 {
  color: #d3356e;
}

/* Dark Modifications - .rotating-word > .word.theme-4  */
.__bg-dark .rotating-word > .word.theme-4 {
  color: #ff3867;
}

@keyframes rotateWord-3-h1 {
  4% {
    opacity: 0;
    transform: translateY(-18px);
  }
  10% {
    opacity: 1;
    transform: translateY(0px);
  }
  32% {
    opacity: 1;
    transform: translateY(0px);
  }
  38% {
    opacity: 0;
    transform: translateY(18px);
  }
}

@keyframes rotateWord-3-h2 {
  4% {
    opacity: 0;
    transform: translateY(-15px);
  }
  10% {
    opacity: 1;
    transform: translateY(0px);
  }
  32% {
    opacity: 1;
    transform: translateY(0px);
  }
  38% {
    opacity: 0;
    transform: translateY(15px);
  }
}

@keyframes rotateWord-3-h3 {
  4% {
    opacity: 0;
    transform: translateY(-10px);
  }
  10% {
    opacity: 1;
    transform: translateY(0px);
  }
  32% {
    opacity: 1;
    transform: translateY(0px);
  }
  38% {
    opacity: 0;
    transform: translateY(10px);
  }
}

@keyframes rotateWord-3-h4 {
  4% {
    opacity: 0;
    transform: translateY(-5px);
  }
  10% {
    opacity: 1;
    transform: translateY(0px);
  }
  32% {
    opacity: 1;
    transform: translateY(0px);
  }
  38% {
    opacity: 0;
    transform: translateY(5px);
  }
}

@keyframes rotateWord-4-h1 {
  4% {
    opacity: 0;
    transform: translateY(-18px);
  }
  8% {
    opacity: 1;
    transform: translateY(0px);
  }
  25% {
    opacity: 1;
    transform: translateY(0px);
  }
  29% {
    opacity: 0;
    transform: translateY(18px);
  }
}

@keyframes rotateWord-4-h2 {
  4% {
    opacity: 0;
    transform: translateY(-15px);
  }
  8% {
    opacity: 1;
    transform: translateY(0px);
  }
  25% {
    opacity: 1;
    transform: translateY(0px);
  }
  29% {
    opacity: 0;
    transform: translateY(15px);
  }
}

@keyframes rotateWord-4-h3 {
  4% {
    opacity: 0;
    transform: translateY(-10px);
  }
  8% {
    opacity: 1;
    transform: translateY(0px);
  }
  25% {
    opacity: 1;
    transform: translateY(0px);
  }
  29% {
    opacity: 0;
    transform: translateY(10px);
  }
}

@keyframes rotateWord-4-h4 {
  4% {
    opacity: 0;
    transform: translateY(-5px);
  }
  8% {
    opacity: 1;
    transform: translateY(0px);
  }
  25% {
    opacity: 1;
    transform: translateY(0px);
  }
  29% {
    opacity: 0;
    transform: translateY(5px);
  }
}

@keyframes rotateWord-5-h1 {
  4% {
    opacity: 0;
    transform: translateY(-18px);
  }
  7% {
    opacity: 1;
    transform: translateY(0px);
  }
  21% {
    opacity: 1;
    transform: translateY(0px);
  }
  24% {
    opacity: 0;
    transform: translateY(18px);
  }
}

@keyframes rotateWord-5-h2 {
  4% {
    opacity: 0;
    transform: translateY(-15px);
  }
  7% {
    opacity: 1;
    transform: translateY(0px);
  }
  21% {
    opacity: 1;
    transform: translateY(0px);
  }
  24% {
    opacity: 0;
    transform: translateY(15px);
  }
}

@keyframes rotateWord-5-h3 {
  4% {
    opacity: 0;
    transform: translateY(-10px);
  }
  7% {
    opacity: 1;
    transform: translateY(0px);
  }
  21% {
    opacity: 1;
    transform: translateY(0px);
  }
  24% {
    opacity: 0;
    transform: translateY(10px);
  }
}

@keyframes rotateWord-5-h4 {
  4% {
    opacity: 0;
    transform: translateY(-5px);
  }
  7% {
    opacity: 1;
    transform: translateY(0px);
  }
  21% {
    opacity: 1;
    transform: translateY(0px);
  }
  24% {
    opacity: 0;
    transform: translateY(5px);
  }
}
</style>
