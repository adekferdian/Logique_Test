<template>
  <div class="text-[red]">Music Details {{ id }}</div>
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({
  layout: "music",
});
</script>

<style lang="scss" scoped></style>
