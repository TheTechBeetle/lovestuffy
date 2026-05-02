import CharacterCard from "./CharacterCard";
import LoveStuffy from "./assets/Lovestufy.jpg";
import Koko from "./assets/Koko,png";

const CHARACTERS = [
  { name: "Lovestufy", image: LoveStuffy, description: "I EAT" },
  {
    name: "KoKo",
    image: Koko,
    description: "I am a axolotl INCORECT PICTURE",
  },
];

function Characters() {
  return (
    <div id="characters">
      <h1>Characters</h1>
      {CHARACTERS.map((character) => (
        <CharacterCard
          key={character.name}
          name={character.name}
          image={character.image}
          description={character.description}
        />
      ))}
    </div>
  );
}

export default Characters;
