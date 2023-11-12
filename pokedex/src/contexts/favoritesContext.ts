import React from "react";

interface ContextData {
    favoritePokemons: number[];
    updateFavoritePokemons: (id: number) => void;
}

const FavoriteContext = React.createContext<ContextData>({
    favoritePokemons:[],
    updateFavoritePokemons: (id: number) => null
})

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;