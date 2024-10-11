import Image from "next/image";
import featureImage from "./featured-image.png";
import { FaArrowRight } from "react-icons/fa";

export default function MainBanner() {
  return (
    <div className="bg-custom-purple w-full h-1/2 border-b-green-400 border-b-4 pt-44 pb-16">
      <article className="flex flex-col md:flex-row justify-around">
        <div className="max-w-xl space-y-7">
          <h1 className="text-2xl md:text-4xl text-purple-500 font-bold"> {/* Tamanhos de fonte responsivos */}
            Veja o guia definitivo para conquistar seus objetivos como DEV em
            2022
          </h1>
          <p className="text-white text-base md:text-lg"> {/* Tamanhos de fonte responsivos */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
            sed tristique placerat hac.
          </p>
          <div>
            <button type="button" className="text-purple-500 font-bold">
              Veja mais <FaArrowRight className="inline text-custom-green" />
            </button>
          </div>
        </div>
        <div className="mt-8 md:mt-0"> {/* Margem superior para telas menores */}
          <Image src={featureImage} alt="Imagem de destaque" />
        </div>
      </article>
    </div>
  );
}
