<template>
  <div>
    <PostPreview v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { State } from "vuex-class";
import Post from "~/models/Post";
import PostPreview from "~/components/PostPreview.vue";

@Component({
  components: {
    PostPreview
  }
})
export default class FeedPage extends Vue {
  @State posts: Post[] = [];

  async asyncData() {
    let { data } = await axios.get(`/api/posts`);
    return {
      posts: data
    };
  }
}
</script>
