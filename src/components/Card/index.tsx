import Image, { StaticImageData } from "next/image";

export interface CardProps {
  image: StaticImageData;
  date: string;
  title: string;
  description: string;
}

export default function Card({ image, date, title, description }: CardProps) {
  return (
    <article className="flex flex-col space-y-4">
      <div>
        {/* ta 370 por 259 no figma */}
        <Image src={image} alt={title} />
      </div>
      <div className="flex flex-col space-y-4 max-w-96">
        <p className="font-roboto">{date}</p>
        <h2 className="text-custom-purple font-bold text-2xl">{title}</h2>
        <p className="font-roboto">{description}</p>
      </div>
    </article>
  );
}
