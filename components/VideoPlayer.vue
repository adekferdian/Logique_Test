<script setup lang="ts">
import { ref } from "vue";
const data = defineProps(["image", "audio", "index"]);
const audioRefs = ref([]);

const currentPlayingIndex = ref(null);
const setAudioRef = (index) => (el) => {
  audioRefs.value[index] = el;
};

const toggleAudio = (index) => {
  const currentAudio = audioRefs.value[index];
  if (
    currentPlayingIndex.value !== null &&
    currentPlayingIndex.value !== index
  ) {
    const currentlyPlayingAudio = audioRefs.value[currentPlayingIndex.value];
    currentlyPlayingAudio.pause();
  }

  if (currentAudio.paused) {
    currentAudio.play();
    currentPlayingIndex.value = index;
  } else {
    currentAudio.pause();
    currentPlayingIndex.value = null;
  }
};

const isPlaying = (index) => {
  return currentPlayingIndex.value === index;
};

const config = defineMusicfyPlayer({
  audio: {
    provider: "dropbox",
    id: "soep3xvq8aee4eh6hcj4r",
    rlkey: "g7sqo9y5zl3f69oxftzo5auc5",
  },
  image: {
    src: data?.image,
    alt: "Dimatis - Reminiscences",
  },
  color: {
    detect: true,
  },
});
</script>

<template>
  <MusicfyPlayer
    style="height: 'fit'; width: 'fit'"
    class="z-1 h-fit w-fit"
    :config="config"
    width="100px"
  />
  <audio :ref="setAudioRef(data.index)" :src="data.audio"></audio>
  <div
    @click="toggleAudio(data.index)"
    class="absolute top-[35%] left-[35%] translate-y-px translate-x-px"
  >
    <PlayIcon
      v-if="!isPlaying(data.index)"
      size="40"
      class="custom-class"
    ></PlayIcon>
    <PauseIcon
      v-if="isPlaying(data.index)"
      size="40"
      class="custom-class"
    ></PauseIcon>
  </div>
</template>

<style>
.controls {
  display: none !important;
}
.musicfyplayer,
.musicfyplayer-color {
  height: 100px !important;
}
.musicfyplayer .box-2 {
  padding: 0rem !important;
}
</style>
