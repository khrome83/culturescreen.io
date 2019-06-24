<template>
  <div class="expander-set" v-bind:class="{ closed: isClosed }">
    <button
      class="heading"
      :class="headingLevel"
      ref="heading"
      @click="toggleMenu"
      @keydown.prevent.down="openMenu"
      :aria-expanded="String(!isClosed)"
    >
      <span>{{heading}}</span>
      <span aria-hidden="true" class="action">
        <expand-icon class="expand-icon"/>
        <collapse-icon class="collapse-icon"/>
      </span>
    </button>
    <div class="contents" ref="contents">
      <slot></slot>
    </div>
    <div class="break"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import ExpandIcon from "~/assets/svg/expand.svg";
import CollapseIcon from "~/assets/svg/collapse.svg";

@Component({
  components: { ExpandIcon, CollapseIcon }
})
export default class BaseExpander extends Vue {
  @Prop({ required: true }) heading!: string;
  @Prop({ default: 3, type: Number }) level!: number;
  @Prop(Boolean) private expanded!: boolean;

  isClosed = true;

  toggleMenu() {
    this.isClosed = !this.isClosed;
  }

  openMenu() {
    this.isClosed = false;
  }

  beforeMount() {
    this.isClosed = !this.expanded;
  }

  get headingLevel() {
    const headings = ["h1", "h2", "h3", "h4"];
    return !this.level || this.level > 4
      ? headings[2]
      : headings[this.level - 1];
  }
}
</script>

<style scoped>
.expander-set {
  position: relative;
}

.h1 {
  font-size: 3.5rem;
  line-height: 1;
  font-weight: 300;
}

.h2 {
  font-size: 2.25rem;
  line-height: 1.15;
  font-weight: 300;
}

.h3 {
  font-size: 1.5rem;
  line-height: 1.33;
  font-weight: 400;
  letter-spacing: 0.0781rem;
}

.h4 {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.0938rem;
}

.heading {
  margin: -0.0625rem 0 0;
  padding: 1.5rem 1rem;
  border: 0;
  border-top: thin solid #eaeaea;
  border-left: thin solid transparent;
  border-right: thin solid transparent;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: "nowrap";
  justify-content: space-between;
  align-items: center;
  background: transparent;
  width: 100%;
  text-align: left;
  font-family: "Raleway", sans-serif;
}

/* Grey Modifications - .heading */
.__bg-grey .heading {
  border-top-color: #cccbcb;
}

/* Dark Modifications - .heading */
.__bg-dark .heading {
  color: #fff;
  border-top-color: #33333c;
}

.heading:focus,
.heading:focus + .contents {
  outline: 0;
  border-left-color: #eaeaea;
  border-right-color: #eaeaea;
}

/* Grey Modifications - .heading:focus, .heading:focus + .contents */
.__bg-grey .heading:focus,
.__bg-grey .heading:focus + .contents {
  border-left-color: #cccbcb;
  border-right-color: #cccbcb;
}

/* Dark Modifications - .heading:focus, .heading:focus + .contents */
.__bg-dark .heading:focus,
.__bg-dark .heading:focus + .contents {
  border-left-color: #33333c;
  border-right-color: #33333c;
}

.break {
  height: 0;
  border-top: thin solid #eaeaea;
}

/* Grey Modifications - .break */
.__bg-grey .break {
  border-top-color: #cccbcb;
}

/* Dark Modifications - .break */
.__bg-dark .break {
  border-top-color: #33333c;
}

.action {
  fill: #737373;
  padding-left: 2rem;
}

/* Grey Modifications - .action */
.__bg-grey .action {
  fill: #010b19;
}

/* Dark Modifications - .action */
.__bg-dark .action {
  fill: #6b6a6a;
}

.contents {
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  max-height: 25rem;
  padding: 0 1rem;
  visibility: initial;
  overflow: hidden;
  border-left: thin solid transparent;
  border-right: thin solid transparent;
  text-align: left;
}

.closed .contents {
  max-height: 0;
  visibility: hidden;
}
.expand-icon,
.collapse-icon {
  width: 2rem;
  height: 2rem;
}
.expand-icon,
.closed .collapse-icon {
  display: none;
}

.collapse-icon,
.closed .expand-icon {
  display: flex;
}
</style>
