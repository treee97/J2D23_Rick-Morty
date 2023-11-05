import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../services/fetchCharacters";
import { Character } from "../types";

// TO REVIEW. Cant deploy this yet until I figure out how to fix this.

export const useCharacters = () => {
  //We use React Query and make a custom hook to get the data.

  const { data, status, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery<{ characters: Character[] }>({
      queryKey: ["characters"],
      queryFn: fetchCharacters,
      // no overload matches this call........ mucho texto. Algo relacionado con los parametros. Paginar es durisimo.
      initialPageParam: 1,
      getNextPageParam: (_lastPage, allPages) => {
        return allPages.length + 1;
      },
    });

  //results doesn't work here. Why? Well who knows. \o/
  const characters = data ? data.pages.flatMap((page) => page.results) : [];

  return {
    characters: characters,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
  };
};
