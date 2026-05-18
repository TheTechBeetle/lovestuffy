type Props = {
  name: string;
  image: string;
  description: string;
};

function CharacterCard({ name, image, description }: Props) {
  return (
    <div className="card">
      <p>{name}</p>
      <div>
        <img src={image} alt={name} width="200" />
      </div>
      <p>{description}</p>
    </div>
  );
}

export default CharacterCard;
