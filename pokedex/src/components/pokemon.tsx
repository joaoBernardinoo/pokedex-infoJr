export default function Pokemon ({name, sprites, types}: PokemonUnique){
    return(
        <div>
            {/* nome do pokemon */}
            {name}

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