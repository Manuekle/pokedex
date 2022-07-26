import React from "react";

function AboutPokemonComponent(props) {
  return (
    <section className="lg:p-8 p-4 bg-gray-200">
      <div className="grid grid-cols-2 gap-8">
        <div className="p-9 bg-white rounded-md shadow-md border-1">
          <div class="flex flex-row gap-24 justify-start">
            <span className="text-gray-400 text-sm font-bold">
              <h1>Height</h1>
              <h1 className="text-black pt-2">{props.height}(cm)</h1>
            </span>
            <span className="text-gray-400 text-sm font-bold">
              <h1>Weight</h1>
              <h1 className="text-black pt-2">{props.weight}(Kg)</h1>
            </span>
          </div>
        </div>
        <div className="p-9 bg-white rounded-md shadow-md border-1"></div>
      </div>
    </section>
  );
}
export default AboutPokemonComponent;
