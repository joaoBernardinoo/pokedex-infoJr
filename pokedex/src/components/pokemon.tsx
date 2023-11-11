import { PokemonUnique } from "@/types/poke"

export default function Pokemon ({name, sprites, types}: PokemonUnique){
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
        </div>
    )
}