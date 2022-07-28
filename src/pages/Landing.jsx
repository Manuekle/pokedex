import React from "react";
import SectionComponent from "../components/SectionComponent";
// Routes
import { Routes, Route } from "react-router-dom";
import Pokedex from "./Options/Pokedex";
import Pokemon from "./Options/Pokemon";

// Header
import NavComponent from "../components/NavComponent";
import FooterComponent from "../components/FooterComponent";

function Landing() {
  const text = "What pokemon are you looking for?";
  return (
    <div className="bg-gray-100">
      <NavComponent />
      <section className="container mx-auto pt-8 pb-8 pr-8 lg:pr-2 pl-8 lg:pl-2">
        <div className="flex flex-col">
          <span className="font-bold text-4xl lg:text-6xl pt-8">{text}</span>
          
        </div>
        <div className="pt-8 pb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2">
          <SectionComponent
            onClick={() => {
              // link
              window.location.href = "/pokedex";
            }}
            text="Pokédex"
            className="bg-emerald-400 shadow-lg shadow-emerald-400/50 relative p-2 overflow-hidden w:full mt:4 mb-4 lg:mt-0 lg:mb-0 lg:w-56 rounded-2xl pt-6 pb-6 pl-7 transition ease-out delay-10 hover:-translate-y-1 hover:scale-120 duration-300"
          />
          <SectionComponent
            text="Moves"
            onClick={() => {
              // link
              window.location.href = "/moves";
            }}
            className="bg-red-400 shadow-lg shadow-red-400/50 relative p-2 overflow-hidden w:full mt:4 mb-4 lg:mt-0 lg:mb-0 lg:w-56 rounded-2xl pt-6 pb-6 pl-7 transition ease-out delay-10 hover:-translate-y-1 hover:scale-120 duration-300"
          />
          <SectionComponent
            text="Abilities"
            onClick={() => {
              // link
              window.location.href = "/abilities";
            }}
            className="bg-sky-400 shadow-lg shadow-sky-400/50 relative p-2 overflow-hidden w:full mt:4 mb-4 lg:mt-0 lg:mb-0 lg:w-56 rounded-2xl pt-6 pb-6 pl-7 transition ease-out delay-10 hover:-translate-y-1 hover:scale-120 duration-300"
          />
          <SectionComponent
            text="Items"
            onClick={() => {
              // link
              window.location.href = "/items";
            }}
            className="bg-yellow-400 shadow-lg shadow-yellow-400/50 relative p-2 overflow-hidden w:full mt:4 mb-4 lg:mt-0 lg:mb-0 lg:w-56 rounded-2xl pt-6 pb-6 pl-7 transition ease-out delay-10 hover:-translate-y-1 hover:scale-120 duration-300"
          />
          <SectionComponent
            text="Locations"
            onClick={() => {
              // link
              window.location.href = "/locations";
            }}
            className="bg-purple-400 shadow-lg shadow-purple-400/50 relative p-2 overflow-hidden w:full mt:4 mb-4 lg:mt-0 lg:mb-0 lg:w-56 rounded-2xl pt-6 pb-6 pl-7 transition ease-out delay-10 hover:-translate-y-1 hover:scale-120 duration-300"
          />
          <SectionComponent
            text="Types"
            onClick={() => {
              // link
              window.location.href = "/type-charts";
            }}
            className="bg-yellow-700 shadow-lg shadow-yellow-700/50 relative p-2 overflow-hidden w:full mt:4 mb-4 lg:mt-0 lg:mb-0 lg:w-56 rounded-2xl pt-6 pb-6 pl-7 transition ease-out delay-10 hover:-translate-y-1 hover:scale-120 duration-300"
          />
        </div>
        <div className="bg-gray-200 rounded-xl mt-6 p-0.5 w-full"></div>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
        </Routes>
      </section>
      <FooterComponent />
    </div>
  );
}

export default Landing;
