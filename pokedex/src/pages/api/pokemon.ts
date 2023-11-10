export const getPokemons = async (limit = 50, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        
        const res = await fetch(url);
        return res.json();
    } catch (error) {
        console.log("error: ", error);
    }
}