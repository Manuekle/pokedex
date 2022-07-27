import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchComponent(props) {
  const search = <FontAwesomeIcon icon={faSearch} />;
  return (
    //    input border icon
    <div className="flex items-center w-full">
      <div className="relative">
        <input          
          style={{
            border: "none",
            outline: "none",
          }}
          className="border-gray-300 bg-gray-200 rounded-3xl pt-3 pb-3 pl-12 pr-6 shadow-sm"
          type="text"
          placeholder="Search for a pokemon..."
          {...props}
        />
        <span className="text-gray-500 hover:text-gray-400 absolute pt-3 pb-3 left-4">
          {search}
        </span>
      </div>
    </div>
  );
}

export default SearchComponent;
