<template>
  <base-button v-if="userIsAuthenticated" class="logout" @click.native="signOut">Log Out</base-button>
</template>

<script lang="ts">
import { Getter, Action, Component, Prop, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";

@Component({
  components: { BaseButton }
})
export default class LogOut extends Vue {
  @Getter("user/isAuthenticated") userIsAuthenticated;
  @Action("user/signOut") userSignOut;

  async signOut() {
    try {
      await this.userSignOut();
      console.log("signed out");
      this.$router.replace({ path: "/" });
    } catch (e) {
      console.log(e.message);
    }
  }
}
</script>

<style scoped>
.logout {
  line-height: inherit;
}
</style>
