interface PokemonAll{
    name: string;
    url: string;
}


interface TypeElement{
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

interface PokemonUnique{
    name: string;
    sprites: {
        front_default: string;
    }
    types: TypeElement[];
}

