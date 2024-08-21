<template>
  <p class="mt-[100px] px-[50px]" v-if="flagContent">
    Search result for : {{ search }}
  </p>
  <div class="w-full flex flex-row flex-wrap gap-5 mt-[20px] px-[50px]">
    <div v-if="!flagContent" class="bg-light h-screen w-full overflow-y-hidden">
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
    <div
      v-if="flagContent"
      v-for="(item, index) in response?.results"
      :key="item.collectionArtistId"
      class="mt-5 border rounded-lg shadow-sm dekstop:w-[21rem] tablet:w-[18rem] smartphone:w-full"
    >
      <div class="gap-5 flex flex-row w-full">
        <div class="min-w-[100px] relative h-fit">
          <VideoPlayer
            :image="item.artworkUrl100"
            :audio="item.previewUrl"
            :index="index"
          />
        </div>
        <NuxtLink :to="`/music/${item.collectionId}`">
          <div class="p-2 w-full flex flex-col gap-1">
            <p class="font-semibold text-[14px] pr-2 line-clamp-1">
              {{ item?.artistName }}
            </p>
            <p class="font-bold text-[16px] line-clamp-1 pr-2 max-w-[10.5rem]">
              {{ item?.trackName }}
            </p>
            <div
              class="flex flex-row flex-wrap justify-between dekstop:min-w-[12rem] tablet:min-w-[9rem] smartphone:min-w-[10.5rem]"
            >
              <div class="border rounded-lg px-4 bg-green">
                <p>{{ item.primaryGenreName }}</p>
              </div>
              <div class="items-center flex flex-row text-gold">
                <DollarSignIcon size="16" class="custom-class"></DollarSignIcon>
                <p>{{ item.trackPrice }}</p>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
definePageMeta({
  layout: "music",
});

onMounted(() => {
  const keyword = router?.currentRoute?._rawValue?.query?.search;
  if (keyword) {
    onSearch(keyword);
  }

  flagContent.value = false;
});
const response = useState("response", () => []);
const flagContent = useState("flagContent", () => false);
const search = useState("search", () => "");
const toggleState = () => {
  flagContent.value = !flagContent.value;
};
const handleSearch = () => {
  search.value = search.value;
};
const onSearch = async () => {
  const { data } = await useFetch(`/api/itunesSearch?search=${search.value}`);
  const stringData = JSON.stringify(data);
  const jsonStringData = JSON.parse(stringData);
  response.value = JSON.parse(jsonStringData._rawValue);
  toggleState();
};
</script>

<style lang="scss" scoped></style>
