"use client";
import { motion } from "framer-motion";
import Card from "../Card";
import post1 from "../../assets/post-1.jpeg";
import CardsSection from "../CardsSection";

const postVariantsPost1 = {
  hidden: { opacity: 0, x: -50 }, // Começa invisível à esquerda
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7, // Duração da animação
      ease: "easeInOut",
    },
  },
};

const postVariantsPost2 = {
  hidden: { opacity: 0, x: 50 }, // Começa invisível à esquerda
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7, // Duração da animação
      ease: "easeInOut",
    },
  },
};

export default function SecondaryBanner() {
  return (
    <article className="flex flex-col px-4 md:px-8 lg:px-36 py-14 space-y-16">
      <article className="flex flex-col items-center md:flex-row md:space-x-0 lg:space-x-32 justify-between">
        {/* Primeira coluna */}
        <article className="mb-8 md:mb-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            animate="visible"
            variants={postVariantsPost1}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Card
              title="Começando no ReactJS em 2022"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean."
              date="Janeiro 04, 2022"
              image={post1}
            />
          </motion.div>
        </article>

        {/* Segunda coluna */}
        <article>
          <motion.div
            initial="hidden"
            whileInView="visible"
            animate="visible"
            variants={postVariantsPost2}
            viewport={{ once: true, amount: 0.1 }}
          >
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
          </motion.div>
        </article>
      </article>
      <CardsSection />
    </article>
  );
}

