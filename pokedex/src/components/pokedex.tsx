import { getPokemonData, getPokemons } from "@/pages/api/pokemonAPI";
import {useEffect, useState } from "react";
import Pokemon from "./pokemon";

export default function Pokedex(){
    // lista com todos os pokemons da página inicial
    const [pokemons, setPokemons] = useState<PokemonUnique[]>([]);

    // pega as informações da API
    const fetchPokemons = async () => {
        try {
            // pega todos os pokemons para a página inicial
            const result = await getPokemons();

            // pega cada pokemon e extrai o objeto individual dele pela api (contém os atributos do pokemon)
            const promises = result.map(async (pokemon: PokemonAll) => {
                return await getPokemonData(pokemon.url);
            });
            
            // espera todas as requisições serem feitas para formar a lista
            const data = await Promise.all(promises);

            setPokemons(data);
        } catch (error) {
            console.log("fetch error: ", error);
        }
    };

    useEffect(() =>{
        fetchPokemons();
    }, []);

    return(
        <div>
            <p>oiiii</p>

            {pokemons.map((pokemon, index) => {
                return(
                    <Pokemon 
                        key={index}
                        name={pokemon.name}
                        sprites={pokemon.sprites}
                        types={pokemon.types}
                    />
                ); 
            })}
           
        </div>
    )
}