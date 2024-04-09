"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function PokeSearchPage() {
  const params = useParams();

  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(pokeData);

  const fetchPokeData = async () => {
    setLoading(true);
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokeName}`);
        const data = await response.json();
        setPokeData(data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokeData();
  },[])

  return (
    <div className="m-10">
      <Link href="/" className="bg-blue-500 px-4 py-2 rounded-md text-white">
        {" "}
        Back{" "}
      </Link>
      <div className="flex justify-center items-center ">
        <div className="shadow-md rounded-md p-10">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <h3 className="text-3xl text-center">{pokeData.name}</h3>
              <Image src={pokeData.sprites?.front_shiny} width={150} height={100} className="mx-auto"/>
              <p className="mt-2">Weight: {pokeData.weight}</p>
              <p className="mt-2">Abilities: {pokeData.abilities?.map((val, index) => (
                <span key={index} className="bg-blue-200 mx-1 p-1 rounded-md">{val.ability.name}</span>
              ))}</p>
              <p className="mt-2">Types: {pokeData.types?.map((val, index) => (
                <span key={index} className="bg-blue-200 mx-1 p-1 rounded-md">{val.type.name}</span>
              ))}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokeSearchPage;
