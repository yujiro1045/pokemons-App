import React from "react";

interface SearchingProps {
  searchQuery: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Searching: React.FC<SearchingProps> = ({
  searchQuery,
  handleSearchChange,
}) => {
  return (
    <div>
      <h3 className="text-4xl font-normal text-center mt-8 mx-0 mb-4">
        Mas de 500 pokemones, busca tu favorito
      </h3>
      <section className=" flex justify-center items-center gap-5 py-5 px-0">
        <input
          type="text"
          placeholder="Encuentra tu pokémon"
          className="bg-gray-200 border border-[#ddd] rounded-lg p-3  text-base shadow-[4px_4px_16px_#00000020] w-96"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </section>
    </div>
  );
};

export default Searching;
