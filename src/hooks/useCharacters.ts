import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../services/fetchCharacters";
import { Character } from "../types";

export const useCharacters = () => {
  //We use React Query and make a custom hook to get the data.

  const { data, status, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery<{ characters: Character[] }>({
      queryKey: ["characters"],
      queryFn: fetchCharacters,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length + 1;
      },
    });

  const characters = data ? data.pages.flatMap((page) => page.results) : [];

  return {
    characters: characters,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
  };
};
