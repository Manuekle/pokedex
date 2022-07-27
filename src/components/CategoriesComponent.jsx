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
        console.log("error");
      }
    };
    getTypes();
    // setFilter(pokemon);
  }, [pokemon]);

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
    <div className="grid grid-cols-1 gap-2 mr-4 pt-4">
      <div className="col-span-1 flex justify-center">
        <button
          className="text-xs text-white font-semibold rounded-2xl capitalize bg-opacity-20 bg-black pr-24 pl-24 pt-1 pb-1 shadow-sm"
          onClick={() => filtered("all")}
        >
          Show all
        </button>
      </div>
      <div className="flex justify-center col-span-1">
        <div className="grid grid-cols-3 gap-2">
          {typed.map((type) => (
            <button
              className="text-xs text-white font-semibold rounded-2xl capitalize bg-opacity-20 bg-black pr-4 pl-4 pt-1 pb-1 opacity-80 shadow-sm"
              style={{
                backgroundColor: Colors[type.name],
                boxShadow: `0px 0px 4px ${Colors[type.name]}`,
                border: `1px solid ${Colors[type.name]}`,
              }}
              onClick={() => filtered(type.name)}
            >
              {type.name}
            </button>
          ))}
        </div>
      </div>

      {/* <div className="grid grid-cols-1">
        {filter
          ? filter.map((p) => (
              <div>
                {p.types.map((typed) => (
                  <span>{p.name}</span>
                ))}
              </div>
            ))
          : null}
      </div>       */}
    </div>
  );
}

export default CategoriesComponent;
