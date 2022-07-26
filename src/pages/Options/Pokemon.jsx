import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../../utils/Api";

function Pokemon() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, isLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        Api()
          .get(`${id}`)
          .then((res) => {
            setPokemonData(res.data);
            isLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id, setPokemonData]);

  console.log(pokemonData);

  return (
    <div>
      {loading ? <span>loading</span> : <span>{pokemonData.name}</span>}
    </div>
  );
}

export default Pokemon;
