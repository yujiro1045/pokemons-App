import React from "react";
import { SearchIcon } from "./Icons";

const Searching = () => {
  return (
    <div>
      <h3 className="text-4xl font-normal text-center mt-8 mx-0 mb-4">
        Mas de 800 pokemones, elige tu favorito
      </h3>
      <section className=" flex justify-center items-center gap-5 py-5 px-0">
        <input
          type="text"
          placeholder="Encuentra tu pokémon"
          className="bg-gray-200 border border-[#ddd] rounded-lg p-3  text-base shadow-[4px_4px_16px_#00000020] w-96"
        />
        <button className="bg-blue-600 rounded-lg p-3 border-none shadow-[4px_4px_16px_#00000020] flex justify-center items-center cursor-pointer gap-2 text-base transition-transform duration-300 text-[#f2f2f2] hover:bg-blue-700 hover:scale-105">
          <SearchIcon fillColor="#f2f2f2" />
          Buscar pokémon
        </button>
      </section>
    </div>
  );
};

export default Searching;
