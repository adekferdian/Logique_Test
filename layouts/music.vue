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
            <a
              href="/music"
              class="flex justify-center align-center items-center hover:underline hover:underline-offset-4 cursor-pointer"
            >
              <SearchIcon size="20" class="custom-class"></SearchIcon>
            </a>
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
    <slot />
  </div>
</template>

<script setup>
const router = useRouter();
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
