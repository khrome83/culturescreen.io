<template>
  <section>
    <h1 class="header">Users</h1>
    <div class="users">
      <UserRow v-for="user in users" :key="user.id" :user="user"></UserRow>
    </div>
    <NewUser />
    <h3>Robot Cards</h3>
    <div class="cards">
      <Card v-for="person in people" :key="person.id" :person="person"></Card>
    </div>
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
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
