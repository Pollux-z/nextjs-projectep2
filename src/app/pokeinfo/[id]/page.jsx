"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

function PokeDetailPage() {
  const params = useParams();
  console.log(params);

  const [poke, setPoke] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPokeDetails = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${params.id}`
        );
        const data = await response.json();
        setPoke(data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchPokeDetails();
  }, []);

  console.log(poke);
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
              <h3 className="text-3xl text-center">{poke.name}</h3>
              <Image src={poke.sprites?.front_shiny} width={150} height={100} className="mx-auto"/>
              <p className="mt-2">Weight: {poke.weight}</p>
              <p className="mt-2">Abilities: {poke.abilities?.map((val, index) => (
                <span key={index} className="bg-blue-200 mx-1 p-1 rounded-md">{val.ability.name}</span>
              ))}</p>
              <p className="mt-2">Types: {poke.types?.map((val, index) => (
                <span key={index} className="bg-blue-200 mx-1 p-1 rounded-md">{val.type.name}</span>
              ))}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokeDetailPage;
