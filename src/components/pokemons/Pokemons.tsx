import { useSearchParams } from "react-router-dom";
import DetailPokemon from "../detail-pokemon/DetailPokemon";
import Pokemon from "./PokemonCards";
import React, { useEffect, useState } from "react";
import Searching from "../common/Searching";
import useFetchPokemons from "../../hooks/useFetchPokemons";

const Pokemons: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    allPokemons,
    currentPage,
    filterAndPaginate,
    loading,
    pokemons,
    setCurrentPage,
  } = useFetchPokemons();

  const ITEMS_PER_PAGE = 20;
  const TOTAL_PAGES = Math.ceil(allPokemons.length / ITEMS_PER_PAGE);

  const openModal = (pokemon: any) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
    setIsModalOpen(false);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString() });
  };

  useEffect(() => {
    const page = parseInt(searchParams.get("page") || "1", 10);
    setCurrentPage(page);
  }, [searchParams]);

  useEffect(() => {
    filterAndPaginate(searchQuery, currentPage);
  }, [searchQuery, currentPage]);

  return (
    <div>
      <Searching
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />

      {loading ? (
        <p className="text-center">Cargando Pokémon...</p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-10 max-w-7xl mx-auto">
          {pokemons.map((pokemon) => (
            <Pokemon
              {...pokemon}
              key={pokemon.id}
              onClick={() => openModal(pokemon)}
            />
          ))}
        </section>
      )}

      <DetailPokemon
        isOpen={isModalOpen}
        onClose={closeModal}
        pokemon={selectedPokemon}
      />

      <div className="flex justify-center items-center p-4 gap-2">
        <button
          onClick={() => handlePageClick(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Anterior
        </button>

        {Array.from({ length: TOTAL_PAGES }, (_, index) => index + 1)
          .slice(Math.max(0, currentPage - 3), currentPage + 2)
          .map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`px-3 py-1 ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              } rounded`}
            >
              {page}
            </button>
          ))}

        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === TOTAL_PAGES}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Pokemons;
