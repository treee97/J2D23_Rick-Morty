import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../services/fetchCharacters";

export const useCharacters = () => {
  const { data, status, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["characters"],
      queryFn: fetchCharacters,
      initialPageParam: 1,
      getNextPageParam: (_lastPage, allPages) => {
        return allPages.length + 1;
      },
    });

  const characters = data ? data.pages.flatMap((page) => page.results) : [];

  return {
    characters: characters,
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
  };
};
