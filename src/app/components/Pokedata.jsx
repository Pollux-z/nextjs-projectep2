"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Pokedata() {
  const [poke, setPoke] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);

    const fetchPokeData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPoke(data.results);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchPokeData();
  }, []);
  return (
    <div className="container text-center mx-auto">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-5">
          {poke.map((val, index) => (
            <Link
              key={val.name}
              href={`/pokeinfo/[id]`}
              as={`/pokeinfo/${index + 1}`}
            >
              <div key={index} className="flex justify-center items-center rounded-md border shadows-md transition hover:shadows-lg p-3 m-2">
                <div>
                  {val.name}
                  <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      index + 1
                    }.png`}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Pokedata;
