import { Character } from "../types";

interface Props {
  character: Character;
}

export const CharacterCard = ({ character }: Props) => {
  return (
    <div className="border-4 border-yellow-400 min-w-fit rounded-md p-1 bg-[#77d46b]">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center min-w-max">
          <img
            src={character.image}
            alt={character.name}
            className="h-40 w-40 rounded-full border-4"
          />
          <p className="flex md:hidden">{character.name}</p>
        </div>
        <div className="hidden md:flex flex-col items-start justify-center ml-4">
          <p>Name: {character.name}</p>
          <p>Status: {character.status}</p>
          <p>Gender: {character.gender}</p>
          <p>Species: {character.species}</p>
        </div>
      </div>
    </div>
  );
};
