import Searchbar from '@/components/Searchbar';
import { getPokemonData, getPokemons } from '@/pages/api/pokemonAPI';
import { useEffect, useState, useRef } from 'react';
import Pokemon from './pokemon';
import Pokelogo from '@/images/pokelogo.png';
import Image from 'next/image';
import { PokemonAll, PokemonUnique } from '@/types/poke';
import React, { useContext } from 'react';
import FavoriteContext from '../contexts/favoritesContext';
import { off } from 'process';

export default function Pokedex() {
  // lista com todos os pokemons da página inicial
  const [pokemons, setPokemons] = useState<PokemonUnique[]>([]);
  const [notFound, setNotFound] = useState(false);
  const [visiblePokemons, setVisiblePokemons] = useState<PokemonUnique[]>([]);
  const { favoritePokemons } = useContext(FavoriteContext);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const fetchPokemons = async () => {
    try {
      const result = await getPokemons();
      const promises = result.map(async (pokemon: PokemonAll) => {
        const pokeData = await getPokemonData(pokemon.url);
        return pokeData;
      });

      const data: PokemonUnique[] = await Promise.all(promises);
      setPokemons(data);
      // Define uma quantidade inicial de Pokémon a serem exibidos
      setVisiblePokemons(data.slice(0, 9));
    } catch (error) {
      console.log('fetch error: ', error);
    }
  };

  const fetchMorePokemons = async (offset: number) => {
    try {
      const result = await getPokemons(9, offset);
      const promises = result.map(async (pokemon: PokemonAll) => {
        const pokeData = await getPokemonData(pokemon.url);
        return pokeData;
      });

      const data: PokemonUnique[] = await Promise.all(promises);
      return data;
    } catch (error) {
      console.log('fetch error: ', error);
    }
  };

  const loadMorePokemons = async () => {
    const currentLength = visiblePokemons.length;
    const totalLength = pokemons.length;

    if (totalLength + 18 >= currentLength) {
      const newData = await fetchMorePokemons(totalLength)
      if (newData)
      setPokemons([...pokemons,...newData]);
    }
    const nextPokemons = pokemons.slice(currentLength, currentLength + 9);
    setVisiblePokemons([...visiblePokemons, ...nextPokemons]);

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

    if (result.length === 0) {
      setNotFound(true);
    } else {
      setPokemons(result);
      setVisiblePokemons(result.slice(0, 10));
    }
  };

  const filterFavorites = () => {
    const result = pokemons.filter((pokemon) => favoritePokemons.includes(pokemon.id));
    setPokemons(result);
    setVisiblePokemons(result.slice(0, 50));
  };

  // ---------------------------------------
  // Efeitos dinâmicos
  const handleScroll = () => {
    const containerHeight = containerRef.current?.clientHeight;
    const scrollTop = 420 + document.documentElement.scrollTop;
    if (containerHeight)
      if (scrollTop >= containerHeight) {
        loadMorePokemons();
      }
  };
  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visiblePokemons]);

  return (
    <div className="body">
      <div className="title">
        <Image src={Pokelogo} alt="pokelogo" style={{ display: 'block' }} />
        <h1>Pokédex</h1>
      </div>

      <Searchbar onSearch={onSearchHandler} />
      <div className="filters">
        <h3>Filtro:</h3>
        <button onClick={fetchPokemons} className="fetchPokemons">
          Todos os Pokemons
        </button>
        <button onClick={filterFavorites} className="filterFavorites">
          Apenas os favoritos
        </button>
      </div>

      {notFound ? (
        <h2>Pokemon não encontrado! Você digitou o nome certo?</h2>
      ) : (
        <div className="pokemons" ref={containerRef}>
          {/* retorna lista de pokemons da página inicial */}
          {visiblePokemons.map((pokemon) => {
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
