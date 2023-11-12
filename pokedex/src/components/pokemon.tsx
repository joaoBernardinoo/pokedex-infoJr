import { PokemonUnique } from "@/types/poke"

export default function Pokemon ({name, sprites, types}: PokemonUnique){
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
        </div>
    )
}