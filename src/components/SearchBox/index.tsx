import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBox() {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Buscar"
        className="bg-black/25 text-white placeholder-white/75 px-4 py-2 rounded-tl-md rounded-bl-md outline-none"
      />
      <button className="bg-purple-letter py-4 px-6 rounded-tr-md rounded-br-md">
        <FaMagnifyingGlass className="text-xl" />
      </button>
    </div>
  );
}
