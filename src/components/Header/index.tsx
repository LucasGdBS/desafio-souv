"use client";
import { motion } from "framer-motion";
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

  const handleClickScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
        >
          <div className="text-2xl md:text-4xl font-bold select-none">
            <Image src={logo} alt="Logo" className="w-24 md:w-auto cursor-pointer" onClick={handleClickScroll} />
          </div>
        </motion.div>

        {/* Menu hamburguer para telas pequenas */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navegação - Oculta em telas pequenas */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
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
        </motion.div>

        {/* SearchBox - Oculta em telas pequenas */}
        <div className="hidden md:block">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
          >
            <SearchBox />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
