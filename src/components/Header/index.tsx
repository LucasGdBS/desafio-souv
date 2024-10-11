'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

import SearchBox from "../SearchBox";
import logo from "./logo.svg";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpa o evento ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`pt-[64px] px-36 fixed top-0 w-full overflow-x-hidden z-50 transition-transform duration-300 bg-custom-purple ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex text-4xl font-black select-none">
          <Image src={logo} alt="Logo" />
        </div>
        <div className="flex justify-between space-x-8 text-white font-bold">
          <button className="border-l-custom-green border-l-4 pl-1">
            Home
          </button>
          <button>Sobre</button>
          <button>Categorias</button>
          <button>Contato</button>
        </div>
        <div>
          <SearchBox />
        </div>
      </div>
    </header>
  );
}
