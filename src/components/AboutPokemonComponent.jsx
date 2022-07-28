import React, { useState, useEffect } from "react";
import axios from "axios";

function AboutPokemonComponent(props) {
  const [species, setSpecies] = useState([]);

  const [description, setDescription] = useState([]);

  const [habitat, setHabitat] = useState([]);

  const id = props.id;
  const abilities = props.abilities;

  useEffect(() => {
    const getCharacteristic = async () => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${id}`
        );
        setSpecies(res.data);
        setDescription(res.data.flavor_text_entries[0].flavor_text);
        setHabitat(res.data.habitat);
      } catch (error) {
        console.log("error");
      }
    };

    getCharacteristic();
  }, [id, setSpecies]);

  // description map filter
  // const descriptionMap = description.map((item) => {
  //   if (item.language.name === "en") {
  //     return item.flavor_text.substring(0, item.flavor_text.indexOf("."));
  //   }
  // });

  // console.log(species);

  return (
    <section className="lg:p-7 lg:pl-14 p-4 lg:pr-12">
      <div className="grid grid-cols-1">
        <div className="lg:col-span-1 col-span-2">
          <span className="text-lg font-bold">Description</span>
          <p className="text-md font-normal">{description}</p>
          <div
            className="shadow-lg rounded-lg"
            style={{
              backgroundColor: "#f5f5f5",
              padding: "1rem",
              marginTop: "1rem",
              shadowColor: "rgba(0, 0, 0, 0.2)",
              shadowOffset: {
                width: 0,
                height: 2,
              },
            }}
          >
            <div className="flex flex-row gap-16">
              <span className="text-lg font-medium">
                <div>
                  <h1 className="text-gray-400">Height</h1>
                  <p className="text-sm font-normal">{props.height} m</p>
                </div>
                <br />
                <div>
                  <h1 className="text-gray-400">Weight</h1>
                  <p className="text-sm font-normal">{props.weight} m</p>
                </div>
              </span>
              <span className="text-lg font-medium">
                <div>
                  <h1 className="text-gray-400">Habitat</h1>
                  <p className="text-sm font-normal capitalize">
                    {habitat.name}
                  </p>
                </div>
                <br />
                <div>
                  <h1 className="text-gray-400">Abilities</h1>
                  <p className="text-sm font-normal capitalize flex lg:flex-row flex-col gap-2 pt-2">
                    {abilities.map((item) => (
                      <button
                        className="active text-xs text-white font-semibold rounded-2xl capitalize bg-opacity-20 bg-black pr-4 pl-4 pt-1 pb-1 opacity-80 shadow-sm"
                        key={item.ability.name}
                      >
                        {item.ability.name}
                      </button>
                    ))}
                  </p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutPokemonComponent;
