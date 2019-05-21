<template>
  <header>
    <div class="container" v-bind:class="{ closed: isClosed }">
      <div class="logo">
        <horizontal-logo/>
      </div>
      <div class="controls">
        <button
          ref="menu"
          class="menu"
          @click="toggleMenu"
          aria-controls="menu"
          aria-haspopup="true"
          aria-label="Menu"
          role="button"
          :aria-expanded="String(!isClosed)"
          @keydown.prevent.down="openMenu"
        >
          <menu-icon class="menu-icon"/>
          <close-icon class="close-icon"/>
        </button>
      </div>
      <hr class="break one">
      <nav
        class="navigation-set"
        id="menu"
        role="menu"
        :hidden="!!isClosed"
        @keyup.esc="closeMenu"
        @keydown.prevent.home="setFirst"
        @keydown.prevent.end="setLast"
        @keydown.prevent.up="cycleUp"
        @keydown.prevent.down="cycleDown"
      >
        <nuxt-link class="primary" to="/features" role="menuitem" ref="menuItem1">Features</nuxt-link>
        <nuxt-link class="primary" to="/pricing" role="menuitem" ref="menuItem2">Pricing</nuxt-link>
        <nuxt-link class="primary" to="/support" role="menuitem" ref="menuItem3">Support</nuxt-link>
        <nuxt-link class="primary" to="/blog" role="menuitem" ref="menuItem4">Blog</nuxt-link>
        <nuxt-link class="primary demo" to="/app/demo" role="menuitem" ref="menuItem5">Demo</nuxt-link>
      </nav>
      <hr class="break two">
      <base-button class="signin" to="/app/login">Sign in</base-button>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";
import HorizontalLogo from "~/assets/svg/logo-horizontal-on-light.svg";
import CloseIcon from "~/assets/svg/close.svg";
import MenuIcon from "~/assets/svg/menu.svg";

@Component({
  components: {
    BaseButton,
    HorizontalLogo,
    MenuIcon,
    CloseIcon
  }
})
export default class TheHeader extends Vue {
  @Prop({ required: true, type: Number }) readonly menuItems!: number;

  isClosed = true;
  selected: null | number = null;

  openMenu() {
    this.isClosed = false;
    this.selected = 1;
    setTimeout(() => {
      this.setFocus(this.selected);
    }, 200);
  }

  closeMenu() {
    this.isClosed = true;
    this.selected = null;
    this.$nextTick(() => (this.$refs.menu as HTMLAnchorElement).focus());
  }

  toggleMenu() {
    this.selected = this.isClosed ? 1 : null;
    this.isClosed = !this.isClosed;
    this.setFocus(this.selected);
  }

  setFirst() {
    this.selected = 1;
    this.setFocus(this.selected);
  }

  setLast() {
    this.selected = this.menuItems;
    this.setFocus(this.selected);
  }

  cycleUp() {
    if (this.selected !== null && this.selected > 1) {
      this.selected = this.selected - 1;
    } else {
      this.selected = this.menuItems;
    }

    this.setFocus(this.selected);
  }

  cycleDown() {
    if (this.selected !== null && this.selected < this.menuItems) {
      this.selected = this.selected + 1;
    } else {
      this.selected = 1;
    }

    this.setFocus(this.selected);
  }

  setFocus(index: number | null) {
    if (index !== null && index > 0 && index <= this.menuItems) {
      this.$nextTick(() =>
        ((this.$refs[`menuItem${index}`] as Vue)
          .$el as HTMLAnchorElement).focus()
      );
    }
  }
}
</script>

<style scoped>
header {
  font-family: "Montserrat", sans-serif;
}

.container {
  padding: 0.5rem 2.5vw 1.5rem;
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.controls {
  align-self: center;
}

.menu-icon,
.container.closed .close-icon {
  display: none;
}

.close-icon,
.container.closed .menu-icon {
  display: flex;
}

.menu {
  display: flex;
  align-content: center;
  padding: 0.5rem;
  width: 2.5rem;
  border: thin solid #ee0028;
  border-radius: 0.25rem;
  cursor: pointer;
  background-color: inherit;
  border: none;
  box-shadow: inset 0 0 0 0 #fff;
  transition: all 200ms ease-in-out;
}

.menu:focus {
  box-shadow: inset 0 0 0 0.0625rem #ee0028;
  transition: all 200ms ease-in-out;
}

.menu svg {
  fill: #ee0028;
}

.menu:hover svg,
.menu:active svg {
  fill: #ffffff;
}

.menu:hover,
.menu:active {
  background-color: #ee0028;
  transition: all 200ms ease-in-out;
}

.break {
  flex-basis: 100%;
  height: 0;
  margin: 0;
  border: 0;
}

.primary {
  display: block;
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: 0.1rem;
  text-align: center;
  color: #ee0028;
  text-decoration: none;
  padding: 1rem 0;
}

.primary:hover,
.primary:active,
.primary:focus {
  text-decoration: underline;
}

.primary:focus {
  box-shadow: inset 0 0 0 0.0625rem #ee0028;
}

.navigation-set {
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  max-height: 25rem;
  visibility: initial;
  transition: all 200ms ease-in-out;
  overflow: hidden;
  padding: 0.5rem 0;
}

.closed .navigation-set {
  max-height: 0;
  visibility: hidden;
  transition: all 200ms ease-in-out;
}

.signin {
  flex-basis: 100%;
}

@media (min-width: 48rem) {
  .logo {
    order: 1;
  }

  .controls {
    order: 3;
  }

  .signin {
    order: 2;
    display: inline-block;
    width: auto;
    flex-basis: initial;
    margin: 0;
    align-self: center;
    margin-left: auto;
    margin-right: 1rem;
  }

  .break.one {
    order: 4;
  }

  .break.two {
    order: 4;
  }

  .navigation-set {
    order: 5;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .demo {
    align-self: flex-end;
  }

  .primary {
    display: flex;
    padding: 0.5rem 0.75rem;
    margin: 0.5rem 0 0;
  }
}
@media (min-width: 71.25rem) {
  .logo {
    order: 1;
  }

  .navigation-set {
    order: 2;
    flex-basis: initial;
    padding-left: 2rem;
    padding: 0;
    justify-content: flex-start;
    flex: 1;
  }

  .primary {
    margin: 0.5rem 0.5rem 0.25rem;
  }

  .demo {
    margin-left: auto;
    margin-right: 2rem;
    align-self: center;
  }

  .closed .navigation-set {
    max-height: 25rem;
    visibility: initial;
    justify-content: center;
  }

  .signin {
    order: 3;
    margin: 0.2rem 0 0;
  }

  .controls {
    display: none;
  }

  .break.one {
    order: 4;
  }

  .break.two {
    order: 4;
  }
}
</style>
