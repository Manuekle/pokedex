import React, { useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function EvolutionPokemonComponent(props) {
  const [evolution, setEvolution] = useState([]);
  const [species, setSpecies] = useState([]);

  const arrow = <FontAwesomeIcon icon={faArrowRight} size="xl" />;

  const id = props.id;

  const evoChain = species.url;

  useEffect(() => {
    const getSpecies = async () => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${id}`
        );
        setSpecies(res.data.evolution_chain);
      } catch (error) {
        console.log(error);
      }
    };

    const getEvolution = async () => {
      const response = await axios.get(evoChain);
      setEvolution(response.data.chain);
    };

    getSpecies();
    getEvolution();
  }, [id, setSpecies, setEvolution, evoChain]);

  console.log(evolution);

  return (
    <>
      
    </>
  );
}
export default EvolutionPokemonComponent;
