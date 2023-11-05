export const fetchCharacters = async ({
  pageParam,
}: {
  pageParam?: number;
}) => {
  // we fetch info and results from characters with pagination.
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pageParam}`
  );

  return res.json();
};
