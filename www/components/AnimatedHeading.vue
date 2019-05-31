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
      const openingTag =
        matches[1] === "[["
          ? `<span class="rotating-word ${
              this.headingLevel
            }" aria-hidden="true">`
          : `<br><span class="rotating-word ${
              this.headingLevel
            }" aria-hidden="true">`;
      const closingTag = matches[3] === "]]" ? "</span>" : "</span><br>";
      replacements[matches[0]] = {
        index,
        source: matches[2],
        openingTag,
        closingTag
      };
      index++;
      matches = textRegExp.exec(text);
    }

    this.replacementsMap = replacements;
  }

  parseText(text: string, delay: number, offset: number) {
    let output = text;
    let theme = 0;

    Object.keys(this.replacementsMap).forEach(key => {
      const { index, source, openingTag, closingTag } = this.replacementsMap[
        key
      ];
      const words = this.animatedList[source];
      let wordSet = "";
      let longestWord = "";
      const animation = `animation: rotateWord-${words.length}-${
        this.headingLevel
      } ${words.length * delay}s linear infinite 0s;`;
      words.forEach((word, wordIndex) => {
        const style = `${animation} animation-delay: ${wordIndex * delay +
          index * offset}s`;
        wordSet = `${wordSet}<span class="word theme-${theme %
          5}" style="${style}">${word}</span>`;
        if (word.length > longestWord.length) longestWord = word;
        theme++;
      });
      const filler = `<span class="word-filler">${longestWord}</span>`;
      output = output.replace(
        `${key}`,
        `${openingTag}${filler}${wordSet}${closingTag}`
      );
      theme++;
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
      template: `<${this.headingLevel} class="heading" aria-label="${
        this.ariaLabel
      }">
        ${this.parseText(this.originalText, this.delay, this.offset)}
      </${this.headingLevel}>`
    };
  }
}
</script>

<style scoped>
.rotating-word {
  position: relative;
}

.heading-x {
  display: inline-block;
  text-align: center;
  color: #fff;
  fill: #fff;
  background-color: #ee0028;
  border-radius: 2px;
  padding: 4px 6px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
}

/* Grey Modifications - Badge */
.__bg-grey .badge {
  background-color: #da0629;
  color: #fdfcfb;
  fill: #fdfcfb;
}

/* Dark Modifications - Badge */
.__bg-dark .badge {
  background-color: #f32144;
  color: #010b19;
  fill: #010b19;
}
</style>
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
