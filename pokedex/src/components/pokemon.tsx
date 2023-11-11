export default function Pokemon ({name, sprites, types}: PokemonUnique){
    return(
        <div>
            {name}
            <div>
                <img src={sprites.front_default} alt= {name} />
            </div>
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