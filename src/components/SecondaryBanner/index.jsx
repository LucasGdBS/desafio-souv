import Card from "../Card";
import post1 from "../../assets/post-1.jpeg";
import CardsSection from "../CardsSection";

export default function SecondaryBanner() {
  return (
    <article className="flex flex-col px-36 py-14 space-y-16">
      <article className="flex space-x-32 justify-between">
        <article>
          <Card
            title="Começando no ReactJS em 2022"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean."
            date="Janeiro 04, 2022"
            image={post1}
          />
        </article>
        <article>
          <Card
            title="Conheça as principais técnicas para conseguir uma vaga internacional em programação"
            date="Janeiro 04, 2022"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean."
          />
          <Card
            title="Veja a evolução do Front-end na prática"
            date="Janeiro 04, 2022"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean."
          />
        </article>
      </article>
      <CardsSection/>
    </article>
  );
}
