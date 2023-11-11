export const getPokemons = async (limit = 50) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
        
        const res = await fetch(url);
        const data = await res.json();
        
        console.log(data.results);
        return data.results;
    } catch (error) {
        console.log("error: ", error);
    }
}

export const getPokemonData = async (url: string) => {
    try {  
        const res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log("error: ", error);
    }
}