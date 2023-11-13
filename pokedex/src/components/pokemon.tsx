// pokemon.tsx
import { PokemonUnique } from '@/types/poke';
import React, { useContext } from 'react';
import FavoriteContext from '../contexts/favoritesContext';


export default function Pokemon({ id, name, sprites, types, color }: PokemonUnique) {
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);

  const heart = favoritePokemons.includes(id) ? '❤️' : '🖤';
  const onHeartClick = () => {
    console.log("clique funciona");
    updateFavoritePokemons(id);
  };

  const typeColors: Record<string, string> = {
    grass: '#7AC74C',
    fire: '#EE8130',
    water: '#9cc1ed',
    electric: '#f8d030',
    bug: '#a8b820',
    psychic: '#f85888',
    normal: '#a8a878',
    poison: '#a040a0',
    ghost: '#705898',
    ground: '#e1c168',
    flying: '#a991f0',
    fighting: '#c03028',
    fairy: '#ef9aae',
    rock: '#b8a038',
    steel: '#b8b8d0',
    ice: '#98d8d8',
    dragon: '#7038f8',
    dark: '#705848',
  };

  return (
    <div className="pokemon" style={{ background: typeColors[types[0].type.name] + '20' }}>
      <div className="info">
        {/* nome do pokemon */}
        <p className="pokemon-name"> {name[0].toUpperCase() + name.slice(1)} </p>

        {/* tipos do pokemon */}
        {types.map((type, index: number) => {
          return (
            <div
              className="pokemon-types"
              key={index}
              style={{ backgroundColor: typeColors[types[index].type.name] || 'gray' }}
            >
              {type.type.name.toUpperCase()}
            </div>
          );
        })}
      </div>

      {/* imagem do pokemon*/}
      <div className="pokemon-sprites">
        <img src={sprites.front_default} alt={name} />
      </div>

      {/* botão de favoritar */}
      <button className="onHeart" onClick={onHeartClick}>
        {heart}
      </button>
    </div>
  );
}
