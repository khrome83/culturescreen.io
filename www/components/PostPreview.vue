<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.description }}</p>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue, Prop } from "nuxt-property-decorator";
import Post from "~/models/Post";

@Component
export default class PostPreview extends Vue {
  @Prop({ type: Object, required: true }) post!: Post;
}
</script>
