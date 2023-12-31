export const getPokemons = async (limit = 18, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    const res = await fetch(url);
    const data = await res.json();

    return data.results;
  } catch (error) {
    console.log('error: ', error);
  }
};

// usar a url na array do getPokemons para pegar o dado individual
export const getPokemonData = async (url: string) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log('error: ', error);
  }
};
