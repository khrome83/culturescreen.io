<template>
  <nuxt-link :to="profilePath" class="avatar" :class="[theme, { small, large }]">
    <img v-if="src" :src="src" :alt="labelName">
    <span v-else class="letters">{{letters}}</span>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  inheritAttrs: false
})
export default class BaseAvatar extends Vue {
  @Prop({ required: true }) username!: string;
  @Prop() displayName!: string;
  @Prop() src!: string;
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
  height: 6rem;
  width: 6rem;
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
  transform: scale(1.2);
  box-shadow: none;
}

.avatar .img {
  display: block;
}

.letters {
  display: inline-block;
  font-size: 3.75rem;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  height: 100%;
  line-height: 1.6;
  text-align: center;
}

.small {
  height: 3rem;
  width: 3rem;
}

.small .letters {
  font-size: 1.9rem;
  line-height: 1.7;
}

.large {
  height: 10rem;
  width: 10rem;
}

.large .letters {
  font-size: 6.5rem;
  line-height: 1.6;
}

.avatar.large:hover,
.avatar.large:active,
.avatar.large:focus {
  transform: scale(1.1);
}

.theme-a {
  color: #f3405e;
  border-color: #fbbfc9;
  background-color: #fde5e9;
}

.theme-b {
  color: #6ca1a2;
  border-color: #cedfe0;
  background-color: #ebf2f2;
}

.theme-c {
  color: #4dd19c;
  border-color: #c3efde;
  background-color: #e7f8f1;
}

.theme-d {
  color: #ffb584;
  border-color: #ffe6d6;
  background-color: #fff5ee;
}

.theme-e {
  color: #ff6a8d;
  border-color: #ffcdd9;
  background-color: #ffebef;
}
</style>
