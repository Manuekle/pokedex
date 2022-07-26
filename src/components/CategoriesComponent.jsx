import React from "react";

function CategoriesComponent(props) {
  return (
    <div className="grid grid-cols-3 gap-2 p-6">
      {props.types.map((type) => (
        <span
          key={type.id}
          className="text-xs text-white font-semibold rounded-2xl capitalize bg-opacity-20 bg-black pr-4 pl-4 pt-1 pb-1"
        >
          {type.name}
        </span>
      ))}
    </div>
  );
}

export default CategoriesComponent;
