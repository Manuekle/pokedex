import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// components
import AboutPokemonComponent from "./AboutPokemonComponent";
import StatsPokemonComponent from "./StatsPokemonComponent";
import EvolutionPokemonComponent from "./EvolutionPokemonComponent";
import MovesPokemonComponent from "./MovesPokemonComponent";
function TabComponent(pokemon) {
  const tabs = ["About", "Stats", "Evolution", "Moves"];

  const panels = [
    <AboutPokemonComponent
      height={pokemon.height}
      weight={pokemon.weight}
      id={pokemon.id}
      abilities={pokemon.abilities}
    />,
    <StatsPokemonComponent stats={pokemon.stats}/>,
    <EvolutionPokemonComponent id={pokemon.id} />,
    <MovesPokemonComponent />,
  ];
  return (
    <>
      <Tabs>
        <div className="p-3">
          <TabList className="flex flex-row gap-6 lg:gap-12 justify-center">
            {tabs.map((tab, i) => {
              return (
                <Tab
                  className="text-gray-400 font-bold text-sm lg:text-xl capitalize cursor-pointer"
                  key={i}
                >
                  {tab}
                </Tab>
              );
            })}
          </TabList>
        </div>
        <hr />
        <>
          {tabs.map((tab, i) => {
            return <TabPanel key={i}>{panels[i]}</TabPanel>;
          })}
        </>
      </Tabs>
    </>
  );
}

export default TabComponent;
