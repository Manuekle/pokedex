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
      try {
        const res = await axios.get(evoChain);
        setEvolution(res.data.chain);
      } catch (error) {
        console.log("error");
      }
    };

    getSpecies();
    getEvolution();
  }, [evoChain, id, setSpecies, setEvolution]);

  // console.log(evolution);

  // chain map filter

  return (
    <div className="grid grid-cols-3 p-10 gap-8">
      <div className="flex justify-center ">
        <div className="flex flex-col">
          <span className="text-gray-300">{arrow}</span>
          <span className="text-black font-bold flex">Lvl.</span>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="flex flex-col">
          <span className="text-gray-300">{arrow}</span>
          <span className="text-black font-bold flex">Lvl.</span>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="flex flex-col">
          <span className="text-gray-300">{arrow}</span>
          <span className="text-black font-bold flex">Lvl.</span>
        </div>
      </div>

    </div>
  );
}
export default EvolutionPokemonComponent;
