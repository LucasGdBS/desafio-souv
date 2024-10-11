import Image from "next/image";
import SearchBox from "../SearchBox";
import logo from "./logo.svg";

export default function Header() {
  return (
    <header className="pt-[64px] px-36 fixed top-0 w-full overflow-x-hidden z-50">
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
