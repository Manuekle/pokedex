import React, { useState, useEffect } from "react";
import Colors from "./Colors";
import { Link } from "react-router-dom";

function CardComponent({ pokemon }) {
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    isLoading(false);
  }, []);

  return (
    <button
      className="bg-purple-400 shadow-purple-400/50 relative p-2 overflow-hidden w:full mt:4 mb-4 lg:mt-0 lg:mb-0 rounded-2xl pt-6 pb-6 pl-7 transition ease-out delay-10 hover:-translate-y-1 hover:scale-120 duration-300"
      style={{
        backgroundColor: Colors[pokemon.name],
        boxShadow: `0px 0px 10px ${Colors[pokemon.name]}`,
        border: `1px solid ${Colors[pokemon.name]}`,
      }}
    >
      <Link to={`/pokemon/${pokemon.name}`}>
        <div className="grid grid-cols-2">
          <div className="flex justify-start items-center col-span-1">
            <span className="text-white font-bold text-lg capitalize">
              {pokemon.name}
            </span>
          </div>
          <div className="flex justify-end items-center col-span-1 pr-4">
            <span className="text-white font-bold text-lg opacity-40">
              #{pokemon.id}
            </span>
          </div>
          <div className="flex justify-end items-center col-span-1">
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className="w-24 h-24"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-1 pt-2 w-full">
          {pokemon.types.map((type, i) => {
            return (
              <div
                className="text-xs text-white font-semibold rounded-2xl capitalize opacity-90  pr-4 pl-4 pt-1 pb-1"
                style={{
                  backgroundColor: Colors[type.type.name],
                  boxShadow: `0px 0px 10px ${type.type[pokemon.name]}`,
                  border: `1px solid ${Colors[type.type.name]}`,
                }}
                key={i}
              >
                {type.type.name}
              </div>
            );
          })}
        </div>

        <svg
          className="absolute w-64 h-64 top-10 left-44 md:left-44 lg:left-36 -z-1 opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 1024 1024"
        >
          <path
            id="pokeball"
            fill="#fff"
            stroke="none"
            stroke-width="1"
            d="M 512.00,359.18
           C 512.00,359.18 512.00,359.18 512.00,359.18
             596.40,359.18 664.81,427.60 664.82,512.00
             664.82,512.00 664.82,512.00 664.82,512.00
             664.82,596.40 596.40,664.81 512.00,664.82
             512.00,664.82 512.00,664.82 512.00,664.82
             427.60,664.82 359.19,596.40 359.18,512.00
             359.18,512.00 359.18,512.00 359.18,512.00
             359.18,427.60 427.60,359.18 512.00,359.18
             512.00,359.18 512.00,359.18 512.00,359.18
             512.00,359.18 512.00,359.18 512.00,359.18 Z
           M 512.00,410.12
           C 455.73,410.12 410.12,455.73 410.12,512.00
             410.12,568.27 455.73,613.88 512.00,613.88
             568.27,613.88 613.88,568.27 613.88,512.00
             613.88,455.73 568.27,410.12 512.00,410.12
             512.00,410.12 512.00,410.12 512.00,410.12 Z
           M 806.16,217.84
           C 884.17,295.86 928.00,401.67 928.00,512.00
             928.00,622.33 884.17,728.14 806.16,806.16
             728.14,884.17 622.33,928.00 512.00,928.00
             401.67,928.00 295.86,884.17 217.84,806.16
             139.83,728.14 96.00,622.33 96.00,512.00
             96.00,401.67 139.83,295.86 217.84,217.84
             295.86,139.83 401.67,96.00 512.00,96.00
             622.33,96.00 728.14,139.83 806.16,217.84 Z
           M 332.02,512.00
           C 332.02,512.00 138.45,512.00 138.45,512.00
             138.45,611.07 177.81,706.09 247.86,776.14
             317.91,846.19 412.93,885.55 512.00,885.55
             611.07,885.55 706.09,846.19 776.14,776.14
             846.19,706.09 885.55,611.07 885.55,512.00
             885.55,512.00 885.55,512.00 885.55,512.00
             885.55,512.00 691.98,512.00 691.98,512.00
             691.98,412.60 611.40,332.02 512.00,332.02
             412.60,332.02 332.02,412.60 332.02,512.00 Z"
          />
        </svg>
      </Link>
    </button>
  );
}

export default CardComponent;
