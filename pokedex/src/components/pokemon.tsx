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
        <div>
            {/* nome do pokemon */}
            <p> {name} </p>
            

            {/* imagem do pokemon*/}
            <div>
                <img src={sprites.front_default} alt= {name} />
            </div>
            
            {/* tipos do pokemon */}
            {types.map((type, index : number) => {
                return(
                    <div key={index}>
                        {type.type.name}
                    </div>
                )
            })}

            {/* botão de favoritar */}
            <button onClick={onHeartClick}>
                {heart}
            </button>
        </div>
    )
}