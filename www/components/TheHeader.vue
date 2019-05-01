<template>
  <header>
    <div class="container">
      <div class="footer-navigation">
        <div class="logo">
          <img
            src="~assets/svg/logo-vertical-on-light.svg"
            alt="Vertical Culture Screen Logo"
          />
        </div>
        <div class="navigation-set">
          <nav class="footer">
            <NuxtLink to="/features">Features</NuxtLink>
            <NuxtLink to="/pricing">Pricing</NuxtLink>
            <NuxtLink to="/support">Support</NuxtLink>
            <NuxtLink to="/blog">Blog</NuxtLink>
          </nav>
          <div class="lang">
            <NuxtLink to="/languages">Language: English</NuxtLink>
          </div>
        </div>
      </div>
      <div class="break"></div>
      <div class="utility-navigation">
        <div class="copyright">Copyright © 2018 Culture Screen, LLC</div>
        <nav class="utility">
          <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
          <NuxtLink to="/sitemap">Sitemap</NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class TheHeader extends Vue {}
</script>

<style scoped>
header { /* font-family: 'Raleway', sans-serif; */ font-family: "Montserrat",
  sans-serif; }

.container { padding: 2.5rem 2.5vw; } @media (min-width: 48rem) {
} @media (min-width: 71.25rem) { }
</style>
