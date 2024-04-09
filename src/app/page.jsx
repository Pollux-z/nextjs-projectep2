import Image from "next/image";

import Header from "./components/Header";
import Pokedata from "./components/Pokedata";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Pokedata />
    </main>
  );
}
