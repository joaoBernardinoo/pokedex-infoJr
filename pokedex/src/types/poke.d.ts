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
    id: number;
    name: string;
    sprites: {
        front_default: string;
    }
    species?: {
        url: string;
    }
    color?: string;
    types: TypeElement[];
}

