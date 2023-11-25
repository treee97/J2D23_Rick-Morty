export const fetchCharacters = async ({
  pageParam,
}: {
  pageParam?: number;
}) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pageParam}`
  );
  return res.json();
  // this returns pageParam, pages.
};
