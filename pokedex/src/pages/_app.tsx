import '@/styles/globals.css'
import '@/styles/auth.css'
import '@/styles/Pokedex.css'
import '@/styles/Pokemons.css'
import '@/styles/Searchbar.css'
import '@/styles/auth.css'
import type { AppProps } from 'next/app'
import { FavoriteProvider } from '@/contexts/favoritesContext';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
    // array de favoritos que contém os id's dos pokemons.
    const [favorites, setFavorites] = useState<number[]>([]);
  
    // att os pokemons favoritos
    const updateFavoritePokemons = (id: number) => {
      const updatedFavorites = [...favorites]
      const favoriteIndex = favorites.indexOf(id)
  
      // se clica de novo quando o pokemon ja é favorito, vai removê-lo
      if(favoriteIndex >= 0) {
        updatedFavorites.splice(favoriteIndex, 1);
      }else {
        updatedFavorites.push(id);
      }
      setFavorites(updatedFavorites);
    }

    // pega os favoritos do database
    // const loadFavoritePokemons = () => {
      
    //   setFavorites(pokemons)
    // }
  
    // useEffect(() => {
    //   loadFavoritePokemons()
    // }, []);

  return (
    <FavoriteProvider
        value={{
          favoritePokemons: favorites,
          updateFavoritePokemons: updateFavoritePokemons,
        }}
      >
        <Component {...pageProps} />
    </FavoriteProvider>
    
  )
  
}
