import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../../utils/Api";
import Colors from "../../components/Colors";

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
                <span className="text-white">{heart}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 pt-8">
              <div className="flex justify-start">
                <div className="flex flex-col">
                  <h1 className="text-white font-bold text-lg lg:text-4xl capitalize">
                    {pokemon.name}
                  </h1>
                  <div className="flex flex-wrap gap-1 pt-2 w-full">
                    {pokemon.types.map((type, i) => {
                      return (
                        <div
                          className="text-xs text-white font-semibold rounded-2xl capitalize bg-opacity-20 bg-white pr-4 pl-4 pt-1 pb-1"
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
          <div className="bg-white rounded-t-2xl rounded-b-lg p-4">
            <div className="flex flex-row items-center justify-center gap-6 lg:gap-96">
              <button className="text-sm lg:text-lg font-bold text-gray-400 capitalize">
                about
              </button>
              <button className="text-sm lg:text-lg font-bold text-gray-400 capitalize">
                base stats
              </button>
              <button className="text-sm lg:text-lg font-bold text-gray-400 capitalize">
                evolution
              </button>
              <button className="text-sm lg:text-lg font-bold text-gray-400 capitalize">
                moves
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Pokemon;
