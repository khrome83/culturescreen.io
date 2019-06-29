<template>
  <footer>
    <div class="container">
      <div class="break"></div>
      <div class="utility-navigation">
        <div class="copyright">Copyright © 2018 Culture Screen, LLC</div>
        <nav class="utility">
          <nuxt-link class="utility-nav" to="/terms">Terms of Service</nuxt-link>
          <nuxt-link class="utility-nav" to="/privacy">Privacy Policy</nuxt-link>
          <nuxt-link class="utility-nav" to="/cookies">Cookie Use</nuxt-link>
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
export default class TheAppFooter extends Vue {}
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
    flex-direction: row;
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
}
</style>
