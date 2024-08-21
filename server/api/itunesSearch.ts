export default defineEventHandler(async (event: any) => {
  const { search } = getQuery(event);
  if (search) {
    search.toString().replaceAll(" ", "+");
  }
  const data = await $fetch(
    `https://itunes.apple.com/search?term=${search}&media=music`
  );

  return data;
});
