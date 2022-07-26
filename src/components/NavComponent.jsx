import React from "react";
import { Link } from 'react-router-dom';
import Github from "./svg/Github";
import img from "../assets/pokeball.jpg"

function NavComponent(props) {

  const text = "Pokédex";

  return (
    <header className="border-b-2 border-b-slate-200 p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex col-row col-span-2 items-center gap-2">
            <span className="text-2xl font-bold">
              <img src={img} alt="pokeball" className="h-8" />
            </span>
            <span className="text-2xl font-bold">{text}</span>
          </div>
          <div className="flex items-center justify-end col-span-1">
            <div className="flex flex-row gap-4">
              <span>
                <Link to="">
                  <Github width="25px" height="25px" />
                </Link>
              </span>             
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavComponent;
