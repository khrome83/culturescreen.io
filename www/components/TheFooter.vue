<template>
  <footer>
    <div class="container">
      <div class="footer-navigation">
        <div class="logo">
          <img
            src="~assets/svg/logo-vertical-on-light.svg"
            alt="Vertical Culture Screen Logo"
          />
        </div>
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
      <div class="utility-navigation">
        <div class="copyright">Copyright © 2018 Culture Screen, LLC</div>
        <nav class="utility">
          <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
          <NuxtLink to="/sitemap">Sitemap</NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { NuxtLink } from "nuxt";
import { Component, Vue } from "nuxt-property-decorator";
import { Person } from "~/types";

@Component({
  components: {
    NuxtLink
  }
})
export default class TheFooter extends Vue {}
</script>

<style scoped>
footer {
  padding: 2rem;
}
</style>
