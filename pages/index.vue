<template>
  <div class="mt-[100px] px-[50px] font-normal text-[18px]">
    <p>Hi, Nice to e-meet you,</p>
    <div>
      My name is
      <NuxtLink
        class="font-bold"
        to="https://adekferdian.online"
        target="_blank"
      >
        Adek Ferdian </NuxtLink
      >, and I am a fullstack developer.
    </div>
  </div>
  <div class="mt-10 px-[50px]">
    <p>
      This website is intended to fulfill my test requirements as a Frontend
      Developer.
    </p>
    <div>
      You can check my source code on Github:
      <NuxtLink
        class="underline"
        to="https://twitter.com/nuxt_js"
        target="_blank"
      >
        Link
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const { data } = await useFetch("/api/itunesSearch");
const stringData = JSON.stringify(data);
const jsonStringData = JSON.parse(stringData);
const response = JSON.parse(jsonStringData._rawValue);
</script>

<style lang="scss" scoped></style>
