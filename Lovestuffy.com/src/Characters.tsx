import CharacterCard from "./CharacterCard";
import LoveStufy from "./assets/Lovestufy.jpg";
import Koko from "./assets/Koko.png";

const CHARACTERS = [
  { 
    name: "Lovestufy(real)",
    image: LoveStuffy,
    description: "The real Lovestufy",
  },
  {
    name: "KoKo(real)",
    image: KoKo,
    description: "The real KoKo”,
  },
  {
    name: "lovestufy",
    image:lovestufy,
    description:"I EAT",
  },
  {
    name: "KoKo",
    image: Koko,
    description: "I am a axolotl",
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
