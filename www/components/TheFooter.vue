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
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class TheFooter extends Vue {}
</script>

<style scoped>
footer { /* font-family: 'Raleway', sans-serif; */ font-family: "Montserrat",
  sans-serif; }

.container { padding: 2.5rem 2.5vw; }

.footer-navigation {
  text-align: center; font-weight: 700; }

.navigation-set { display: flex;
  flex-direction: column; padding: 0.625rem 0; }

.logo { margin: 0 auto 2.5rem; }

.footer a, .lang a { text-align: center; font-weight: 700; font-size: 0.9375rem;
  padding: 0.625rem 0; display: block; text-decoration: none; line-height: 1.25; }

.footer a:hover, .footer a:active, .lang a:hover, .lang a:active {
  text-decoration: underline; }

.footer a { color: #a0a9ba; }

.lang a { color: #ed303c; margin: 2.5rem 0; }

.break { height: 0.125rem; background-color: #a0a9ba; margin: 1.25rem -2.5vw 2rem; opacity: 0.5; }

.utility-navigation {
  display: flex; flex-direction: column; }

.copyright { order: 2; margin-bottom: 1.25rem; font-weight: 400; font-size: 0.8125rem; color: #a0a9ba; text-align: center; }

.utility { display: flex; flex-direction: row; justify-content: space-around; margin-bottom: 0.75rem; order: 1; }

.utility a { font-weight: 400;
  font-size: 0.8125rem; padding: 0.5rem 0; color: #a0a9ba; display: block;
  text-decoration: none; line-height: 1.5; }

.utility a:hover, .utility a:active {
  text-decoration: underline; } @media (min-width: 48rem) { .footer-navigation {
    display: flex; justify-content: space-between; }

  .navigation-set {
    flex-direction: column; justify-content: space-between; padding: 1.25rem 0; }

  .logo { margin: 0 0 0 -1.875rem; }

  .footer, .lang { flex-direction: row;
    justify-content: space-between; align-self: flex-end; }

  .footer a, .lang a {
    display: flex; display: inline; text-align: right; align-self: flex-end;
    padding: 1rem; }

  .footer a:last-of-type, .lang a:last-of-type { padding-right: 0; }

  .utility-navigation { flex-direction: row; justify-content: space-between;
  }

  .copyright { order: 1; }

  .utility { order: 2; }

  .utility a { padding: 0 1rem;
  }

  .utility a:last-of-type { padding-right: 0; } } @media (min-width: 71.25rem) {
  .container { padding: 3.75rem 2.5vw; }

  .break { margin: 1.25rem 0 7.5rem; }

  .navigation-set { flex-direction: row; align-self: center; flex-basis: 100%; } }
</style>
