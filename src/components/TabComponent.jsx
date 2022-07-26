import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// components
import AboutPokemonComponent from "./AboutPokemonComponent";
import StatsPokemonComponent from "./StatsPokemonComponent";
import EvolutionPokemonComponent from "./EvolutionPokemonComponent";
import MovesPokemonComponent from "./MovesPokemonComponent";
function TabComponent(pokemon) {
  const tabs = ["About", "Stats", "Evolution", "Moves"];

  const panels = [
    <AboutPokemonComponent height={pokemon.height} weight={pokemon.weight}/>,
    <StatsPokemonComponent />,
    <EvolutionPokemonComponent />,
    <MovesPokemonComponent />,
  ];
  return (
    <>
      <Tabs>
        <div className="p-4">
          <TabList className="flex flex-row gap-9 lg:gap-96 justify-center">
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
