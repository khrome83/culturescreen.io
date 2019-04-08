<template>
  <video autoplay="true" id="videoPreview" class="video-preview">
  </video>
</template>

<script>
  var video = document.querySelector("#videoPreview");

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  }
</script>


<style>
  .video-preview {
    width: 31.25rem;
    height: 23.4375;
    background-color: #666;
  }
</style>
