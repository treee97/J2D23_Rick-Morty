import "./App.css";
import { useState, useEffect, useMemo } from "react";
import { type Character } from "./types";
import { CharacterCard } from "./components/CharacterCard";
import { useCharacters } from "./hooks/useCharacters";
import { SearchInput } from "./components/SearchInput";
import logo from "./assets/rick&morty.svg";

function App() {
  // we import the hook that fetches the characters
  const { characters, status, error, fetchNextPage, isFetchingNextPage } =
    useCharacters();

  const [filteredCharacter, setFilteredCharacter] = useState<string | null>(
    null
  );

  const handleValue = (character: string) => {
    setFilteredCharacter(character);
  };

  const sortedCharacters = useMemo(() => {
    return filteredCharacter
      ? characters.filter((character: Character) =>
          character.name.toLowerCase().includes(filteredCharacter.toLowerCase())
        )
      : characters;
  }, [filteredCharacter, characters]);

  useEffect(() => {
    const debouncing = setTimeout(() => {}, 300);
    return () => clearTimeout(debouncing);
  }, [filteredCharacter]);

  return (
    <>
      <header className="flex items-center justify-center p-4">
        <img src={logo} alt="logo" />
      </header>
      <main className="min-h-screen w-full flex flex-col items-center px-4">
        <div className="w-full flex items-center justify-center m-8">
          <SearchInput handleValue={handleValue} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedCharacters.map((character: Character, i: number) => (
            <CharacterCard key={i} character={character} />
          ))}
        </div>
        <div className="w-full flex items-center justify-center my-8">
          <button
            type="button"
            className="text-2xl border-4 border-yellow-300 bg-yellow-600 text-white font-semibold cursor-pointer rounded-md p-4"
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? "Loading Data ..." : "Load More"}
          </button>
        </div>

        {status == "pending" && <p>Data is loading ...</p>}
        {status == "error" && <p>Error fetching the data! {error?.message}</p>}
      </main>
    </>
  );
}

export default App;
