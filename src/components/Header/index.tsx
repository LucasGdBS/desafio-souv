"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // Ícones para o menu hamburguer
import SearchBox from "../SearchBox";
import logo from "./logo.svg";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeButton, setActiveButton] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu em telas pequenas

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
    setMenuOpen(false); // Fechar o menu ao clicar em um botão
  };

  const markedButton = "border-l-custom-green font-black border-l-4 pl-1";

  return (
    <header
      className={`pt-8 md:pt-[64px] px-4 md:px-36 fixed top-0 w-full overflow-x-hidden z-50 transition-transform duration-300 bg-custom-purple ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl md:text-4xl font-bold select-none">
          <Image src={logo} alt="Logo" className="w-24 md:w-auto" />
        </div>

        {/* Menu hamburguer para telas pequenas */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navegação - Oculta em telas pequenas */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex justify-between space-x-2 md:space-y-0 md:space-x-8 text-white font-bold md:items-center`}
        >
          <button
            className={`${activeButton === "Home" ? markedButton : ""}`}
            onClick={() => handleButtonClick("Home")}
          >
            Home
          </button>
          <button
            className={`${activeButton === "Sobre" ? markedButton : ""}`}
            onClick={() => handleButtonClick("Sobre")}
          >
            Sobre
          </button>
          <button
            className={`${activeButton === "Categorias" ? markedButton : ""}`}
            onClick={() => handleButtonClick("Categorias")}
          >
            Categorias
          </button>
          <button
            className={`${activeButton === "Contatos" ? markedButton : ""}`}
            onClick={() => handleButtonClick("Contatos")}
          >
            Contatos
          </button>
        </nav>

        {/* SearchBox - Oculta em telas pequenas */}
        <div className="hidden md:block">
          <SearchBox />
        </div>
      </div>
    </header>
  );
}
