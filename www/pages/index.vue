<template>
  <div>
    <section>
      <div>
        <Title/>
        <div class="links">
          <nuxt-link to="/about">About</nuxt-link>
        </div>
      </div>
    </section>
    <section class="video-preview-container">
      <VideoPreview />
    </section>
  </div>
</template>

<script>
import Title from '~/components/Title.vue'
import VideoPreview from '~/components/VideoPreview.vue'

export default {
  components: {
    Title,
    VideoPreview,
  }
}
</script>

<style>
  .video-preview-container {
    margin: 0px auto;
    width: 500px;
    height: 375px;
    border: 10px #333 solid;
  }

  .links {
    padding-top: 15px;
  }
</style>
