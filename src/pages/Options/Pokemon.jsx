import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../../utils/Api";
import Colors from "../../components/Colors";

import TabComponent from "../../components/TabComponent";

import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Pokemon() {
  const heart = <FontAwesomeIcon icon={faHeart} size="xl" />;
  const arrow = <FontAwesomeIcon icon={faArrowLeft} size="xl" />;

  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState([]);
  const [loading, isLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        Api()
          .get(`${id}`)
          .then((res) => {
            setPokemon(res.data);
            isLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id, setPokemon]);

  console.log(pokemon);

  return (
    <div className="pt-8">
      {loading ? (
        <span>loading</span>
      ) : (
        <section
          className="bg-purple-400 rounded-lg shadow-lg"
          style={{
            backgroundColor: Colors[pokemon.name],
          }}
        >
          <div className="p-8">
            <div className="grid grid-cols-2">
              <div className="flex justify-start">
                <button onClick={() => navigate(-1)} className="text-white">
                  {arrow}
                </button>
              </div>
              <div className="flex justify-end">
                <span className="text-rose-500">{heart}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 pt-8">
              <div className="flex justify-start">
                <div className="flex flex-col">
                  <h1 className="text-white font-bold text-xl lg:text-4xl capitalize">
                    {pokemon.name}
                  </h1>
                  <div className="flex flex-wrap gap-1 pt-2 w-full">
                    {pokemon.types.map((type, i) => {
                      return (
                        <div
                          className="text-sm text-white font-semibold rounded-2xl capitalize bg-opacity-20 bg-white pr-4 pl-4 pt-1 pb-1"
                          key={i}
                        >
                          {type.type.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex flex-col items-end">
                  <h1 className="text-white font-bold text-lg">
                    #{pokemon.id}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-t-2xl rounded-b-lg">
            <TabComponent
              height={pokemon.height}
              weight={pokemon.weight}
              id={pokemon.id}
            />
          </div>
        </section>
      )}
    </div>
  );
}

export default Pokemon;
