import SearchBox from "../SearchBox";

export default function Header() {
  return (
    <header className="pt-[64px] px-20 fixed top-0 w-full overflow-x-hidden">
      <div className="flex justify-between items-center">
        <div className="flex text-4xl font-black select-none">
          <h1 className="text-white">The Blog</h1>
          <h1 className="text-custom-green">.</h1>
          {/* Escolhi fazer a logo dessa forma por conta da qualidade da imagem que não ficou muito legal */}
        </div>
        <div className="flex justify-between space-x-8 text-white font-bold">
            <button className="border-l-custom-green border-l-4 pl-1">Home</button>
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
