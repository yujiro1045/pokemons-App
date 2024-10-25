import React from "react";

interface Pokemon {
  id: number;
  name: string;
  img: string;
}

const Pokemon = ({ id, img, name }) => {
  return (
    <div
      key={id}
      className="p-5 border border-gray-300 shadow-md rounded-lg justify-center items-center flex flex-col transition-transform hover:scale-105 duration-300 bg-slate-200 gap-2"
    >
      <img className="w-28 h-28" src={img} alt={name} />
      <p className="flex justify-center items-center bg-yellow-700 text-[#f2f2f2] font-bold px-2 py-1.5 rounded-xl w-auto gap-2 p-1">
        <span className="text-center font-medium">N°{id}</span>
        <span className="text-center font-medium capitalize">{name}</span>
      </p>
    </div>
  );
};

export default Pokemon;
