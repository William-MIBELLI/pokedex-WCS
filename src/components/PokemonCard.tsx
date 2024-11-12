const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const PokemonCard = () => {
  const pokemon = pokemonList[0];
  const { name, imgSrc } = pokemon;
  return (
    <div>
      <figure>
        {imgSrc ? <img src={imgSrc} alt={`${name}'s img`} /> : <p>???</p>}
      </figure>
      <figcaption>{name}</figcaption>
    </div>
  );
};

export default PokemonCard;
