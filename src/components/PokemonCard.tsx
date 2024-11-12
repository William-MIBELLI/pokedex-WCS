import { FC } from "react";


interface IProps {
  pokemon: {
    name: string;
    imgSrc?: string;
  }
}

const PokemonCard: FC<IProps> = ({ pokemon }) => {

  // const pokemon = { name: "mew", imgSrc: null };
  const { name, imgSrc } = pokemon;

  console.log('PROPS : ', pokemon);

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
