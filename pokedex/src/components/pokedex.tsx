import Searchbar from '@/components/Searchbar';
import { getPokemonData, getPokemons } from '@/pages/api/pokemonAPI';
import { useEffect, useState } from 'react';
import Pokemon from './pokemon';
import Pokelogo from '@/images/pokelogo.png';
import Image from 'next/image';
import { PokemonAll, PokemonUnique } from '@/types/poke';
import React, { useContext } from 'react';
import FavoriteContext from '../contexts/favoritesContext';


export default function Pokedex() {
  // lista com todos os pokemons da página inicial
  const [pokemons, setPokemons] = useState<PokemonUnique[]>([]);
  const [notFound, setNotFound] = useState(false);
  const { favoritePokemons } = useContext(FavoriteContext);

  // ---------------------------------
  // Funções
  
  // pega as informações da API
  const fetchPokemons = async () => {
    try {
      // pega todos os pokemons para a página inicial
      const result = await getPokemons();

      // pega cada pokemon e extrai o objeto individual dele pela api (contém os atributos do pokemon)
      const promises = result.map(async (pokemon: PokemonAll) => {
        const pokeData = await getPokemonData(pokemon.url);
        const species = await getPokemonData(pokeData.species.url);
        pokeData.color = species.color.name;
        return pokeData;
      });

      // espera todas as requisições serem feitas para formar a lista
      const data = await Promise.all(promises);
      setPokemons(data);
    } catch (error) {
      console.log('fetch error: ', error);
    }
  };

  // altera ambiente do site de acordo com o que é digitado
  const onSearchHandler = async (name: string | undefined) => {
    if (!name) {
      setNotFound(false);
      return fetchPokemons();
    }

    setNotFound(false);
    
    const result = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(name.toLowerCase());
    });

    if (result.length == 0) {
      setNotFound(true);
    } else {
      setPokemons(result);
    }
  };

  const filterFavorites = () => {
    const result = pokemons.filter((pokemon) => favoritePokemons.includes(pokemon.id));
    setPokemons(result);
  }

  // ---------------------------------------
  // Efeitos dinâmicos
  useEffect(() => {
    fetchPokemons();
  }, []);


  return (
    <div className="body">
      <Image
        src={Pokelogo}
        alt="pokelogo"
        style={{ display: 'block', margin: 'auto', marginTop: '36px', marginLeft: '47vw', marginRight: '47vw' }}
      />
      <Searchbar onSearch={onSearchHandler} />
      <h1>Pokédex</h1>
      <div className='filters'>
        <h3>Filtro</h3>
        <button onClick={fetchPokemons} className='fetchPokemons'>Todos os Pokemons</button>
        <button onClick={filterFavorites} className='filterFavorites'>Apenas os favoritos</button>
      </div>
      {notFound ? (
        <h2>Pokemon não encontrado! Você digitou o nome certo?</h2>
      ) : (
        <div className="pokemons">
          {/* retorna lista de pokemons da página inicial */}
          {pokemons.map((pokemon) => {
            return (
              <Pokemon
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                sprites={pokemon.sprites}
                types={pokemon.types}
                color={pokemon.color}
              />
            );
          })}
        </div>
      )}

    </div>
  );
}
