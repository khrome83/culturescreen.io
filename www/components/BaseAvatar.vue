<template>
  <nuxt-link
    :to="profilePath"
    class="avatar"
    :title="labelName"
    :class="[theme, { small, large, hide }]"
  >
    <img v-if="src" :src="src" :alt="labelName">
    <span v-else class="letters">{{letters}}</span>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class BaseAvatar extends Vue {
  @Prop({ required: true }) username!: string;
  @Prop() displayName!: string;
  @Prop() src!: string;
  @Prop(Boolean) private hide!: boolean;
  @Prop(Boolean) private small!: boolean;
  @Prop(Boolean) private large!: boolean;

  get profilePath() {
    return `/app/user/${this.username}`;
  }

  get labelName() {
    return this.displayName
      ? `${this.username} - ${this.displayName}`
      : this.username;
  }

  get letters() {
    let parsed = this.displayName ? this.displayName : this.username;
    let alpha, beta;

    if (this.displayName && /\s/g.test(this.displayName.trim())) {
      const parts = this.displayName.split(" ");
      [alpha] = parts[0];
      [beta] = parts[1];
    } else {
      [alpha, beta] = parsed;
    }

    // Defaults to "AZ" for undefined spaces
    alpha = alpha === undefined ? "A" : alpha;
    beta = beta === undefined ? "Z" : beta;

    return `${alpha}${beta}`;
  }

  get theme() {
    if (this.src) return ""; // bail if we have a source

    const themes = ["a", "b", "c", "d", "e"]; // themes
    const sel = Math.floor(Math.random() * (themes.length - 1 + 1)) + 1;
    return `theme-${themes[sel]}`;
  }
}
</script>

<style scoped>
.avatar {
  border: thin solid #eaeaea;
  border-radius: 100%;
  display: flex;
  overflow: hidden;
  height: 3rem;
  width: 3rem;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  outline: 0;
  transition: transform 100ms ease-in-out;
  text-decoration: none;
}

.avatar:hover,
.avatar:active,
.avatar:focus {
  transform: scale(1.3);
  box-shadow: none;
  z-index: 2;
}

.avatar > img {
  display: block;
  width: 3.35rem;
}

.letters {
  display: inline-block;
  font-size: 1.9rem;
  line-height: 1.7;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  height: 100%;
  text-align: center;
}

.hide {
  position: absolute;
  top: auto;
  overflow: hidden;
  clip: rect(0.0625rem, 0.0625rem, 0.0625rem, 0.0625rem);
  width: 0.0625rem;
  height: 0.0625rem;
  white-space: nowrap;
}

.small {
  height: 2rem;
  width: 2rem;
}

.small .letters {
  font-size: 1.35rem;
  line-height: 1.6;
}

.avatar.small > img {
  width: 2.35rem;
}

.avatar.small:hover,
.avatar.small:active,
.avatar.small:focus {
  transform: scale(1.4);
}

.large {
  height: 6rem;
  width: 6rem;
}

.large .letters {
  font-size: 3.75rem;
  line-height: 1.6;
}

.avatar.large > img {
  width: 6.5rem;
}

.avatar.large:hover,
.avatar.large:active,
.avatar.large:focus {
  transform: scale(1.2);
}

.theme-a {
  color: #ee0028;
  border-color: #fbbfc9;
  background-color: #fde5e9;
}

.theme-b {
  color: #3b8183;
  border-color: #cedfe0;
  background-color: #ebf2f2;
}

.theme-c {
  color: #0fa172;
  border-color: #c3efde;
  background-color: #e7f8f1;
}

.theme-d {
  color: #e26d43;
  border-color: #ffe6d6;
  background-color: #fff5ee;
}

.theme-e {
  color: #ff3867;
  border-color: #ffcdd9;
  background-color: #ffebef;
}
</style>
