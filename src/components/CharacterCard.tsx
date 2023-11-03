import { Character } from "../types";

interface Props {
  character: Character;
}

export const CharacterCard = ({ character }: Props) => {
  return (
    <div className="border">
      <div className="flex ">
        <p>Name: {character.name}</p>
        <p>Status: {character.status}</p>
      </div>
    </div>
  );
};
