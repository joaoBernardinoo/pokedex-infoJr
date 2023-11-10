import { useEffect } from 'react';

export default function PokeTeste() {
  useEffect(() => {}, []);
  
  const fetchPokemon = async () => {
    fetch('https://pokeapi.co/api/v2/pokemon/', { method: 'GET' })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        return responseData.results[0].name;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <p>oiiii</p>
    </div>
  );
}
