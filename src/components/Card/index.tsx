import Image, { StaticImageData } from "next/image";

export interface CardProps {
  image?: StaticImageData;
  date: string;
  title: string;
  description: string;
}

export default function Card({ image, date, title, description }: CardProps) {
  return (
    <section className="flex flex-col space-y-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
      <div className="relative">
        <div className="absolute max-w-[569px] inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 opacity-50 rounded-md z-10" />
        {image && (
          <Image
            src={image}
            alt={title}
            className="relative rounded-md object-cover max-w-[569px] h-64 md:h-48"
            layout="responsive" // Garante que a imagem mantenha a proporção
          />
        )}
      </div>
      <div className="flex flex-col space-y-4">
        <p className="font-roboto">{date}</p>
        <h2 className="text-custom-purple font-bold text-xl sm:text-2xl">
          {title}
        </h2>
        <p className="font-roboto">{description}</p>
      </div>
    </section>
  );
}
