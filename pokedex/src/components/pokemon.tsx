import { PokemonUnique } from "@/types/poke"
import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";


export default function Pokemon ({id, name, sprites, types}: PokemonUnique){
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);
    
    const heart = favoritePokemons.includes(id) ? "❤️" : "🖤";
    const onHeartClick = () =>{
        updateFavoritePokemons(id);
    }
    return(
        <div className="pokemon">
            <div className="info">
                {/* nome do pokemon */}
                <p className="pokemon-name"> {name} </p>
                
                {/* tipos do pokemon */}
                {types.map((type, index : number) => {
                    return(
                        <div className="pokemon-types" key={index}>
                        {type.type.name}
                        </div>
                        
                    )
                })}
            </div>

            {/* imagem do pokemon*/}
            <div className="pokemon-sprites">
                <img src={sprites.front_default} alt= {name} />
            </div>

            {/* botão de favoritar */}
            <button onClick={onHeartClick}>
                {heart}
            </button>
        </div>
    )
}