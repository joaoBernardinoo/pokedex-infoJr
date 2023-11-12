// pokemon.tsx

import React from 'react';
import { PokemonUnique } from '@/types/poke';

interface PokemonProps {
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
}

const Pokemon: React.FC<PokemonProps> = ({ name, sprites, types }) => {
  const typeColors: Record<string, string> = {
    grass: '#7AC74C',
    fire: '#EE8130',
    water: '#9cc1ed',
    electric: '#ffff6c',
  };

  return (
    <div className="pokemon">
      <div className="info">
        {/* nome do pokemon */}
        <p className="pokemon-name"> {name} </p>

        {/* tipos do pokemon */}
        {types.map((type, index: number) => (
          <div className="pokemon-types" key={index} style={{ backgroundColor: typeColors[types[0].type.name] || 'gray' }}>
            {type.type.name}
          </div>
        ))}
      </div>

      {/* imagem do pokemon*/}
      <div className="pokemon-sprites">
        <img src={sprites.front_default} alt={name} />
      </div>
    </div>
  );
};

export default Pokemon;
