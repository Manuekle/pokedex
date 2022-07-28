import React from "react";
import Colors from "./Colors";


function StatsPokemonComponent(props) {
  const stats = props.stats;

  return (
    <section className="lg:p-7 lg:pl-14 p-4 lg:pr-12">
      <div className="grid grid-cols-6 gap-4">
        {stats.map((stat, i) => (
          <>
            <div className="col-span-2 flex items-center justify-start">
              <span className="font-normal text-gray-500 capitalize">
                {stat.stat.name}
              </span>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <span className="font-normal">{stat.base_stat}</span>
            </div>
            <div className="col-span-3 flex items-center justify-end ">
              <div class="w-full bg-gray-200 rounded-full">
                <div
                  class="text-xs bg-green-400 font-medium text-black text-center p-0.5 leading-none rounded-l-full"
                  style={{ width: `${stat.base_stat}%`, backgroundColor: Colors[stat.stat.name] }}
                ></div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
export default StatsPokemonComponent;
