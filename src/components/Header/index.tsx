import Image from "next/image";
import img from "./logo.png";
import SearchBox from "../SearchBox";

export default function Header() {
  return (
    <header className="pt-[64px] px-1 sticky overflow-x-hidden">
      <div className="flex justify-between">
        <div>
          <Image src={img} alt="logo" />
        </div>
        <div className="flex justify-between space-x-4 text-white font-bold">
            <button>Home</button>
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
