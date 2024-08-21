<template>
  <div>
    <div class="bg-main w-full h-[50px] z-10 fixed top-0">
      <header>
        <nav>
          <div
            class="flex flex-row justify-between w-full px-[50px] py-2 text-[white]"
          >
            <div class="flex flex-row gap-4">
              <div>
                <NuxtLink
                  class="hover:underline hover:underline-offset-4"
                  to="/"
                  >Home</NuxtLink
                >
              </div>
              <div>
                <NuxtLink
                  class="hover:underline hover:underline-offset-4"
                  to="/music"
                  >ngmusic</NuxtLink
                >
              </div>
            </div>
            <div
              @click="toggle"
              class="flex justify-center align-center items-center hover:underline hover:underline-offset-4 cursor-pointer"
            >
              <SearchIcon size="20" class="custom-class"></SearchIcon>
            </div>
          </div>
        </nav>
      </header>
    </div>
    <div class="custom-shape-divider-top-1724237389">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </div>
  <div>
    <UModal v-if="isOpen">
      <div class="p-4 bg-light h-screen w-full absolute">
        <div
          class="dekstop:pt-[100px] tablet:pt-[80px] smartphone:pt-[80px] flex flex-col justify-center items-center mt-10"
        >
          <MusicIcon size="100" class="custom-class"></MusicIcon>
          <p class="text-[24px]">ngmusic</p>
        </div>
        <div
          class="flex flex-col justify-center items-center gap-4 dekstop:mt-20 tablet:mt-10 smartphone:mt-10 w-full"
        >
          <input
            type="text"
            placeholder="Artist / Album / Title"
            class="smartphone:w-1/2 w-[20rem] mt-5 border rounded-xl px-6 py-3 bg-light shadow-xl cursor-pointer placeholder:text-center"
            v-model="search"
            @input="handleSearch"
          />
          <div
            class="border rounded-xl px-6 py-3 smartphone:w-1/2 w-[20rem] bg-main shadow-xl cursor-pointer"
            @click="onSearch"
          >
            <p class="text-center text-white">Search</p>
          </div>
        </div>
      </div>
    </UModal>
    <slot />
  </div>
</template>

<script setup>
const router = useRouter();
const isOpen = useState("isOpen", () => false);
const search = useState("search", () => "");
const toggle = () => {
  isOpen.value = !isOpen.value;
};
const handleSearch = () => {
  search.value = search.value;
};

const onSearch = async () => {
  router.push(`/music?search=${search.value}`);
  toggle();
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: blue;
}
.custom-shape-divider-top-1724237389 {
  position: fixed;
  top: 30px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 1;
}

.custom-shape-divider-top-1724237389 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 44px;
}

.custom-shape-divider-top-1724237389 .shape-fill {
  fill: #8e48e4;
}
</style>
