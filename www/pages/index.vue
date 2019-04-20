<template>
  <section>
    <h1 class="header">Nuxt TypeScript Starter</h1>
    <div class="users">
      <UserRow v-for="user in users" :key="user.id" :user="user"></UserRow>
    </div>
    <div class="cards">
      <Card v-for="person in people" :key="person.id" :person="person"></Card>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import { Person, User } from "~/types";
import Card from "~/components/Card.vue";
import UserRow from "~/components/UserRow.vue";

@Component({
  components: {
    Card,
    UserRow
  }
})
export default class extends Vue {
  @State people!: Person;
  @State users!: User;

  created() {
    this.$store.dispatch("bindUsers");
  }
}
</script>

<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
