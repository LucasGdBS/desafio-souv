import Image from "next/image";
import featureImage from "./featured-image.jpeg";
import { FaArrowRight } from "react-icons/fa";

export default function MainBanner() {
  return (
    <div className="bg-custom-purple w-full h-1/2 border-b-green-400 border-b-4 pt-44 pb-16 px-36">
      <article className="flex flex-col md:flex-row justify-between">
        <div className="max-w-xl space-y-7">
          <h1 className="text-2xl md:text-4xl text-purple-500 font-bold">
            Veja o guia definitivo para conquistar seus objetivos como DEV em
            2022
          </h1>
          <p className="text-white text-base md:text-lg">
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
        <div className="relative mt-8 md:mt-0">
          <div className="absolute max-w-[569px] inset-0 bg-gradient-to-br from-[rgba(239,35,243,0.7)] via-[rgba(195,38,228,0.7)] to-[rgba(92,44,193,0.7)] opacity-60 rounded-md z-10" />
          <Image
            src={featureImage}
            alt="Imagem de destaque"
            width={570}
            height={346}
            className="relative rounded-md object-cover max-w-[569px]"
          />
        </div>
      </article>
    </div>
  );
}
