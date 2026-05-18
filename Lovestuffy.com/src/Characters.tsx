import CharacterCard from "./CharacterCard";
import Characterlist from "./Characterlist"

function Characters() {
  return (
    <div id="characters">
      <h1>Characters</h1>
      {Characterlist().map((character) => (
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
