<template>
  <video :srcObject.prop="stream" autoplay playsinline class="video-preview"></video>
</template>

<script lang="ts">
export default {
  name: "VideoPreview",
  data() {
    return {
      stream: null
    };
  },
  async mounted() {
    console.log("mounted");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      });

      this.stream = stream;
    } catch (e) {
      console.error(e.message);
    }
  }
};
</script>


<style scoped>
.video-preview {
  width: 31.25rem;
  height: 23.4375;
  background-color: #666;
}
</style>
