<template>
  <div class="user">
    <h2>{{`${user.firstName} ${user.lastName}`}}</h2>
    <span class="dob">{{user.dob}}</span>
    <p>{{user.favoriteBook}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { User } from "~/types";

@Component({})
export default class UserRow extends Vue {
  @Prop() user!: User;
}
</script>
ßß
<style scoped>
.user {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 1rem;
  margin: 0.25rem;
  border: 0.25rem solid gainsboro;
}
</style>
