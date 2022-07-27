import React, { useState, useEffect } from "react";
import axios from "axios";

import Colors from "./Colors";

function CategoriesComponent({ pokemon }) {
  const [filter, setFilter] = useState(pokemon);
  const [typed, setTypes] = useState([]);

  useEffect(() => {
    const getTypes = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/type");
        setTypes(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getTypes();
    // setFilter(pokemon);
  }, [pokemon]);

  console.log(typed);

  const filtered = (typeq) => {
    setFilter(pokemon);

    if (typeq === "all") {
      setFilter(pokemon);
    } else {
      let filteredType = pokemon
        .filter((p) => p.types.some((t) => t.type.name === typeq))
        .map((temp) => {
          let newTemp = { ...temp };
          return newTemp;
        });
      setFilter(filteredType);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-2 p-6 mr-6">
      <button
        className="text-xs text-white font-semibold rounded-2xl capitalize bg-opacity-20 bg-black pr-4 pl-4 pt-1 pb-1"
        onClick={() => filtered("all")}
      >
        Show all
      </button>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4">
          {typed.map((type) => (
            <button
              className="text-xs text-white font-semibold rounded-2xl capitalize bg-opacity-20 bg-black pr-4 pl-4 pt-1 pb-1"
              style={{
                backgroundColor: Colors[type.name],
              }}
              onClick={() => filtered(type.name)}
            >
              {type.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1">
        {filter
          ? filter.map((p) => (
              <span>
                {p.types.map((typed) => (
                  <span>{p.name}</span>
                ))}
              </span>
            ))
          : null}
      </div>
      {/* <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4">
          <span className="text-xs text-white font-semibold rounded-2xl capitalize bg-opacity-20 bg-black pr-4 pl-4 pt-1 pb-1">
            
          </span>
        </div>
      </div> */}
    </div>
  );
}

export default CategoriesComponent;
