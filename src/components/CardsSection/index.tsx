import Card from "../Card";
import post1 from "../../assets/post-1.jpeg";
import post2 from "../../assets/post-2.jpeg";
import post3 from "../../assets/post-3.jpeg";
import post4 from "../../assets/post-4.jpeg";

export default function CardsSection() {
  const posts = [
    {
      title: "10 dicas para conseguir a vaga desejada",
      date: "Janeiro 04, 2022",
      image: post2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.",
    },
    {
      title: "Deixe seu código mais semântico com essas dicas",
      date: "Janeiro 04, 2022",
      image: post3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.",
    },
    {
      title: "Use essas dicas nas suas aplicações mobile",
      date: "Janeiro 04, 2022",
      image: post4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.",
    },
  ];

  return (
    <div>
      <section className="bg-white flex flex-col md:flex-row justify-between px-4 md:px-8 lg:px-32 space-x-0 md:space-x-8">
        {posts.map((post, i) => (
          <Card
            key={i}
            date={post.date}
            title={post.title}
            image={post.image}
            description={post.description}
          />
        ))}
      </section>
    </div>
  );
}
