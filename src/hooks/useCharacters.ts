import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../services/fetchCharacters";

export const useCharacters = () => {
  //We use React Query and make a custom hook to get the data.

  const { data, status, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["characters"],
      queryFn: fetchCharacters,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length + 1;
      },
    });

  return { data, status, error, fetchNextPage, isFetchingNextPage };
};
