<template>
  <section>
    <h1 class="header">Users</h1>
    <TheFooter />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Action } from "nuxt-property-decorator";
import { State } from "vuex-class";
import { Person, User } from "~/types";
import TheFooter from "~/components/TheFooter.vue";

@Component({
  components: {
    TheFooter
  }
})
export default class extends Vue {
  @State people!: Person;
  @State users!: User;
  @Action bindUsers;

  created() {
    this.bindUsers();
  }
}
</script>

<style scoped>
.header { font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; }

.cards
{ display: flex; flex-wrap: wrap; }
</style>
