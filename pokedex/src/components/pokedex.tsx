import Searchbar from '@/components/Searchbar';
import { getPokemonData, getPokemons } from "@/pages/api/pokemonAPI";
import {useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import Pokelogo from '@/images/pokelogo.png';
import Image from 'next/image';
import { PokemonAll, PokemonUnique } from "@/types/poke";



export default function Pokedex(){
    // lista com todos os pokemons da página inicial
    const [pokemons, setPokemons] = useState<PokemonUnique[]>([]);
    const [notFound, setNotFound] = useState(false);

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

    // lida com as mudanças da barra de pesquisa
    const onSearchHandler = async (name: string | undefined) => {
        if(!name) {
            setNotFound(false);
            return fetchPokemons();
        }
    
        setNotFound(false);


        const result = pokemons.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(name.toLowerCase());
        })

        if(result.length == 0) {
          setNotFound(true);
        } else {
          setPokemons(result);
        } 
      }

    return(
        <div className="body">
            <Image src={Pokelogo}alt="pokelogo" style={{ display: 'block', margin: 'auto', marginTop: '36px' }}/>
            <Searchbar onSearch = {onSearchHandler}/>
            <h1>Pokédex</h1>
            {notFound ? (
                <h2>Pokemon não encontrado! Você digitou o nome certo?</h2>
            ) : 
                <div className="pokemons">
                    {/* retorna lista de pokemons da página inicial */}
                    {pokemons.map((pokemon) => {
                        return(
                            <Pokemon
                                key={pokemon.id}
                                id={pokemon.id}
                                name={pokemon.name}
                                sprites={pokemon.sprites}
                                types={pokemon.types}
                            />
                        ); 
                    })}
                </div>
            }
            
        </div>
    )
}