<template>
  <form class="new-user" id="newUser" name="New User" action method="post">
    <h2>Enter User</h2>
    <label class="form-label" for="firstName">First Name:</label>
    <input class="form-field" v-model="firstName" name="firstName" id="firstName">
    <label class="form-label" for="lastName">Last Name:</label>
    <input class="form-field" v-model="lastName" name="lastName" id="lastName">
    <label class="form-label" for="dob">Date of Birth:</label>
    <input class="form-field" v-model="dob" name="dob" id="dob">
    <label class="form-label" for="favoriteBook">Favorite Book:</label>
    <input class="form-field" v-model="favoriteBook" name="favoriteBook" id="favoriteBook">
    <input class="form-button" @click="submitForm" type="button" value="Add User">
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide, Action } from "nuxt-property-decorator";

@Component({})
export default class NewUser extends Vue {
  @Provide() firstName = null;
  @Provide() lastName = null;
  @Provide() dob = null;
  @Provide() favoriteBook = null;
  @Action createUser;

  submitForm() {
    console.log("form submitted");

    this.createUser({
      firstName: this.firstName,
      lastName: this.lastName,
      dob: this.dob,
      favoriteBook: this.favoriteBook
    });
  }
}
</script>

<style scoped>
.new-user {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 1rem;
  margin: 0.25rem;
  border: 0.25rem solid gainsboro;
}
</style>
