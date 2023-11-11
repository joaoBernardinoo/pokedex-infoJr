export interface PokemonAll{
    name: string;
    url: string;
}


export interface TypeElement{
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

export interface PokemonUnique{
    name: string;
    sprites: {
        front_default: string;
    }
    types: TypeElement[];
}

