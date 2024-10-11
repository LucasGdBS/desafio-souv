import Card from "../Card";
import post2 from "@/assets/post-2.png";

export default function CardsSection(){
    return (
        <div className="bg-white flex justify-between px-32">
          {Array.from({ length: 3 }, (_, i) => (
            <Card
              key={i}
              date="Janeiro 04, 2022"
              title="10 dicas para conseguir a vaga desejada"
              image={post2}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique."
            />
          ))}
        </div>
    )
}