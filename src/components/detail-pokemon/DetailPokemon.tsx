import "./DetailPokemon.css";
import { getPokemonImage } from "../../helpers/get-pokemon-image.helper";
import { PokemonDetail } from "../../interfaces/PokemonResponse";
import { pokemonTypeColors } from "../../colors/pokemonTypeColors";
import React, { useEffect } from "react";

interface PokemonDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  pokemon: PokemonDetail | null;
}

const DetailPokemon: React.FC<PokemonDetailModalProps> = ({
  isOpen,
  onClose,
  pokemon,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!pokemon || !isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="bg-[#adcecb] text-white p-4 sm:p-6 rounded-lg w-full sm:w-[90%] max-w-[300px] md:max-w-[300px] shadow-lg relative mx-4 max-h-[100vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl font-bold text-white hover:text-[#ff6347] transition-colors"
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 className="text-xl sm:text-2xl font-extrabold mb-4 text-center capitalize">
          {pokemon.name}
        </h2>

        <img
          className="w-full mb-4 aspect-square object-cover rounded-md"
          src={getPokemonImage(pokemon.id)}
          alt={pokemon.name}
        />

        <div className="bg-[#a0a7a7] mb-4 sm:mb-6 p-4 shadow-md rounded-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">
            Habilidades
          </h3>
          {pokemon.abilities && pokemon.abilities.length > 0 ? (
            <ul className="list-none flex flex-wrap gap-2 justify-center">
              {pokemon.abilities.map((ability) => (
                <li
                  key={ability.ability.name}
                  className="capitalize bg-[#fdae42] text-white font-semibold py-1 px-3 rounded-full text-sm"
                >
                  {ability.ability.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-200">
              No tiene habilidades disponibles
            </p>
          )}
        </div>

        <div className="bg-[#a0a7a7] p-4 shadow-md rounded-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">
            Tipos
          </h3>
          {pokemon.types && pokemon.types.length > 0 ? (
            <ul className="flex justify-center gap-3">
              {pokemon.types.map((type) => (
                <li
                  key={type.type.name}
                  className="capitalize text-white font-semibold py-2 px-4 rounded-full text-sm"
                  style={{
                    backgroundColor:
                      pokemonTypeColors[type.type.name] || "#B8B8B8",
                  }}
                >
                  {type.type.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-200">
              No tiene tipos disponibles
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPokemon;
