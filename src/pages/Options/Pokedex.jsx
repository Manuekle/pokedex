import React, { useState, useEffect } from "react";
// Components
import SearchComponent from "../../components/SearchComponent";
import CardComponent from "../../components/CardComponent";
// Services
import { getPokemon, getAllPokemon } from "../../services/PokeService";

function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, isLoading] = useState(true);
  const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=151";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(apiURL);
      await loadPokemon(response.results);
      isLoading(false);
      console.log(response);
    }
    fetchData();
  }, []);

  console.log(pokemonData);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonGet = await getPokemon(pokemon);
        return pokemonGet;
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
    <div className="grid grid-cols-5 gap-6 pt-8">
      <div className="col-span-5 lg:col-span-1">
        <SearchComponent />
      </div>
      <div className="col-span-5 lg:col-span-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {/* <CardComponent /> */}
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {pokemonData.map((pokemon, i) => (
                <CardComponent key={i} pokemon={pokemon}/>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
