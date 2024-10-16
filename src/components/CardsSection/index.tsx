"use client"
import { motion } from "framer-motion";
import Card from "../Card";
import post2 from "../../assets/post-2.jpeg";
import post3 from "../../assets/post-3.jpeg";
import post4 from "../../assets/post-4.jpeg";

const postVariants = {
  hidden: { opacity: 0, y: 50 }, // Começa invisível e mais abaixo
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Pequeno delay para cada item aparecer sequencialmente
      duration: 0.5, // Duração da animação
      ease: "easeInOut",
    },
  }),
};

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
  <div className="flex items-center justify-center">
    <article className="bg-white flex flex-col md:flex-row justify-center md:justify-between md:space-x-8 lg:space-x-8">
      {posts.map((post, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={postVariants}
        >
          <Card
            key={i}
            date={post.date}
            title={post.title}
            image={post.image}
            description={post.description}
          />
        </motion.div>
      ))}
    </article>
  </div>
);

}
