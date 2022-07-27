import React, { useState, useEffect } from "react";
import axios from "axios";

function AboutPokemonComponent(props) {
  const [species, setSpecies] = useState([]);

  const [description, setDescription] = useState([]);

  const id = props.id;

  useEffect(() => {
    const getCharacteristic = async () => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${id}`
        );
        setSpecies(res.data);
        setDescription(res.data.flavor_text_entries[0].flavor_text);
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

  console.log(species)

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
                <br/>
                <div>
                  <h1 className="text-gray-400">Weight</h1>
                  <p className="text-sm font-normal">{props.weight} m</p>
                </div>
              </span>             
              <span className="text-lg font-medium">
                <h1 className="text-gray-400">Weight</h1>
                <p className="text-sm font-normal">{props.weight} Kg</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutPokemonComponent;
