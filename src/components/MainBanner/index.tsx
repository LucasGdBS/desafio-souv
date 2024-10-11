"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import featureImage from "./featured-image.jpeg";
import { FaArrowRight } from "react-icons/fa";

export default function MainBanner() {
  return (
    <div className="bg-custom-purple w-full h-full border-b-green-400 border-b-4 pt-24 md:pt-44 pb-16 px-4 md:px-36">
      <article className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="max-w-full md:max-w-xl space-y-5 md:space-y-7 text-center md:text-left">
          <h1 className="text-xl md:text-4xl text-purple-letter font-bold">
            Veja o guia definitivo para conquistar seus objetivos como DEV em
            2022
          </h1>
          <p className="text-white text-sm md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
            sed tristique placerat hac.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              type="button"
              className="text-purple-letter font-bold flex items-center"
            >
              Veja mais <FaArrowRight className="inline text-custom-green ml-2" />
            </button>
          </div>
        </div>
        <div className="relative mt-8 md:mt-0 max-w-full md:max-w-none">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative rounded-md overflow-hidden cursor-pointer"
          >
            <div className="absolute w-full h-full bg-gradient-to-br from-[rgba(239,35,243,0.7)] via-[rgba(195,38,228,0.7)] to-[rgba(92,44,193,0.7)] opacity-60 rounded-md z-10" />
            <Image
              src={featureImage}
              alt="Imagem de destaque"
              width={570}
              height={346}
              className="relative rounded-md object-cover w-full md:max-w-[569px]"
            />
          </motion.div>
        </div>
      </article>
    </div>
  );
}
