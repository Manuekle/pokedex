import React from "react";

function MovesPokemonComponent(props) {
  const moves = props.moves;
  // console.log(moves);

  return (
    <section className="lg:p-7 lg:pl-14 p-4 lg:pr-12">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <span>This pokemon can learn the following moves:</span>
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-3 gap-2">
            {moves.map((move, i) => (
              <button className="active text-xs text-white font-semibold rounded-2xl capitalize bg-opacity-20 bg-black pr-4 pl-4 pt-1 pb-1 opacity-80 shadow-sm">
                {move.move.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default MovesPokemonComponent;
