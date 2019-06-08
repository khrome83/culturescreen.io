<template>
  <footer>
    <div class="container">
      <div class="footer-navigation">
        <div class="logo">
          <vertical-logo/>
        </div>
        <div class="navigation-set">
          <nav class="footer">
            <nuxt-link class="footer-nav" to="/features">Features</nuxt-link>
            <nuxt-link class="footer-nav" to="/pricing">Pricing</nuxt-link>
            <nuxt-link class="footer-nav" to="/support">Support</nuxt-link>
            <nuxt-link class="footer-nav" to="/blog">Blog</nuxt-link>
          </nav>
          <div class="lang">
            <base-button to="/languages" tertiary small>Language: English</base-button>
          </div>
        </div>
      </div>
      <div class="break"></div>
      <div class="utility-navigation">
        <div class="copyright">Copyright © 2018 Culture Screen, LLC</div>
        <nav class="utility">
          <nuxt-link class="utility-nav" to="/privacy">Privacy Policy</nuxt-link>
          <nuxt-link class="utility-nav" to="/sitemap">Sitemap</nuxt-link>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";
import VerticalLogo from "~/assets/svg/logo-vertical-on-light.svg";

@Component({
  components: {
    BaseButton,
    VerticalLogo
  }
})
export default class TheFooter extends Vue {}
</script>

<style scoped>
footer {
  font-family: "Montserrat", sans-serif;
}

.container {
  padding: 2.5rem 2.5vw;
  max-width: 90rem;
  margin: 0 auto;
}

.footer-navigation {
  text-align: center;
}

.navigation-set {
  display: flex;
  flex-direction: column;
  padding: 0.625rem 0;
}

.logo {
  margin: 0 auto 2.5rem;
}

.footer {
  margin-bottom: 2rem;
}

.footer-nav {
  font-family: "Raleway", sans-serif;
  text-align: center;
  font-weight: 300;
  font-size: 0.9375rem;
  padding: 0.625rem 0;
  display: block;
  text-decoration: none;
  line-height: 1.25;
}

.footer-nav:hover,
.footer-nav:active,
.footer-nav:focus {
  text-decoration: underline;
}

.footer-nav {
  color: #5c6169;
}

.footer-nav:focus {
  box-shadow: inset 0 0 0 0.0625rem #5c6169;
}

.break {
  height: 0.0625rem;
  background-color: #5c6169;
  margin: 1.25rem -2.5vw 2rem;
  opacity: 0.5;
}

.utility-navigation {
  display: flex;
  flex-direction: column;
}

.copyright {
  order: 2;
  margin: 2rem auto 1.25rem;
  font-weight: 400;
  font-size: 0.8125rem;
  color: #5c6169;
  text-align: center;
}

.utility {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 0.75rem;
  order: 1;
}

.utility-nav {
  font-weight: 400;
  font-size: 0.8125rem;
  padding: 0.5rem 1rem;
  color: #5c6169;
  display: block;
  text-decoration: none;
  line-height: 1.5;
}

.utility-nav:hover,
.utility-nav:active,
.utility-nav:focus {
  text-decoration: underline;
}

.utility-nav:focus {
  box-shadow: inset 0 0 0 0.0625rem #5c6169;
}

@media (min-width: 48rem) {
  .footer-navigation {
    display: flex;
    justify-content: space-between;
  }

  .navigation-set {
    flex-direction: column;
    justify-content: space-between;
    padding: 1.25rem 0;
    margin-right: -1rem;
  }

  .logo {
    margin: 0 0 0 -1.875rem;
  }

  .footer,
  .lang {
    flex-direction: row;
    justify-content: space-between;
    align-self: flex-end;
  }

  .lang {
    padding-right: 1rem;
  }

  .lang .button {
    margin: 0;
  }

  .footer-nav {
    display: flex;
    display: inline;
    text-align: right;
    align-self: flex-end;
    padding: 0.5rem 1rem;
  }

  .utility-navigation {
    flex-direction: row;
    justify-content: space-between;
    margin-right: -1rem;
  }

  .copyright {
    order: 1;
    padding: 0.5rem 0;
    margin: 0;
  }

  .utility {
    order: 2;
  }

  .utility-nav {
    padding: 0.5rem 1rem;
  }
}

@media (min-width: 71.25rem) {
  .container {
    padding: 3.75rem 2.5vw;
  }

  .break {
    margin: 1.25rem 0 4.5rem;
  }

  .navigation-set {
    flex-direction: row;
    align-self: center;
    flex-basis: 100%;
  }

  .footer {
    margin: 0 0 0.25rem;
  }

  .logo {
    margin-right: 2rem;
  }
}
</style>
