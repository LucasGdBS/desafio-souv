import Image from "next/image";
import img from "./logo.png";
import SearchBox from "../SearchBox";

export default function Header() {
  return (
    <header className="pt-[64px] px-60 fixed top-0 w-full overflow-x-hidden bg-black">
      <div className="flex justify-between items-center">
        <div>
          <Image src={img} alt="logo" />
        </div>
        <div className="flex justify-between space-x-4 text-white font-bold">
            <button className="border-l-green-500 border-l-4 pl-1">Home</button>
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
