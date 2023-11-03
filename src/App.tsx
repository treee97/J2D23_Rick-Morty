import "./App.css";
import { useState, useEffect } from "react";
import { type Character } from "./types";
import { CharacterCard } from "./components/CharacterCard";
import { useCharacters } from "./hooks/useCharacters";
import { SearchInput } from "./components/SearchInput";

function App() {
  // we import the hook that fetches the characters
  const { data, status, error, fetchNextPage, isFetchingNextPage } =
    useCharacters();
  const [searchCharacter, setSearchCharacter] = useState<string | null>(null);

  const handleValue = (character: string) => {
    setSearchCharacter(character);
  };

  useEffect(() => {
    const debouncing = setTimeout(() => {}, 300);
    return () => clearTimeout(debouncing);
  }, [searchCharacter]);

  return (
    <main className="border min-h-screen w-full flex flex-col items-center ">
      <h1>Rick & Morty</h1>

      <SearchInput handleValue={handleValue} />

      <div className="border grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {/* esto no es ideal. Tener solo el componente aqui de alguna manera? */}
        {data?.pages.map((item) =>
          item.results.map((character: Character, i: number) => (
            <CharacterCard key={i} character={character} />
          ))
        )}
      </div>

      <button type="button" onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading Data ..." : "Load More"}
      </button>

      {status == "pending" && <p>Data is loading ...</p>}
      {status == "error" && <p>Error fetching the data! {error?.message}</p>}
    </main>
  );
}

export default App;
