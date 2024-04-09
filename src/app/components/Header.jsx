'use client'

import React from "react";

import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";

function Header() {

    const router = useRouter();

    const [pokeName, setPokeName] = useState("");

    const handleInput = (e) => {
        setPokeName(e.target.value)
        console.log(pokeName);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/pokesearch/${pokeName}`);
    }
  return (
    <header className="flex justify-center items-center p-10 bg-gradient-to-r from-purple-500 to-pink-500 h-[300px]">
      <div className="text-center">
        <h1 className=" text-5xl text-white">NextJS Pokemon Finder App</h1>
        <p className="text-2xl text-white">Find your favourite Pokemons</p>
        <form onSubmit={handleSubmit} className="flex mt-2">
          <input
            type="text"
            placeholder="Pokemon Name..."
            className="py-2 px-3 rounded-md w-full border border-gray-300 shadow-md"
            onChange={handleInput}
          />
          <button className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md inline-flex text-center mx-2">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
