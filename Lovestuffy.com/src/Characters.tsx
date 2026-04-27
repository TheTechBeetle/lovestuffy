import CharacterCard from "./CharacterCard";
import LoveStuffy from "./assets/Lovestufy.jpg";

function Characters() {
  return (
    <div id="characters">
      <h1>Characters</h1>
      <CharacterCard name="Lovestufy" image={LoveStuffy} description="I EAT" />
      <CharacterCard
        name="KoKo"
        image={LoveStuffy}
        description="I am a axolotl INCORECT PICTURE"
      />
    </div>
  );
}

export default Characters;
