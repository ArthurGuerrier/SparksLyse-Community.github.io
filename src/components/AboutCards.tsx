import { motion, type Variants } from "framer-motion";
import type { ImageMetadata } from "astro";

import aboutImage1 from "../assets/images/about1.jpg";
import aboutImage2 from "../assets/images/about2.jpg";
import aboutImage3 from "../assets/images/about3.jpg";

export default function AboutCards() {
  const about: {
    title: string;
    description: string;
    image: ImageMetadata;
  }[] = [
    {
      title: "Le temps s'est déroulé",
      description:
        "Automatisez vos tâches et gagnez du temps : votre assistant IA transforme les tâches routinières en quelques secondes pour que vous puissiez vous concentrer sur votre croissance.",
      image: aboutImage1,
    },
    {
      title: "Des mots qui coulent",
      description:
        "Brouillons, articles de blog et courriels rédigés avec clarté et rapidité — l'élégance du langage sans la difficulté.",
      image: aboutImage2,
    },
    {
      title: "Un guide silencieux",
      description:
        "Toujours présents pour vous aider à rester concentré – suggestions, rappels et idées au moment précis où vous en avez besoin.",
      image: aboutImage3,
    },
  ];

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      y: "10%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="
        grid
        w-full
        grid-cols-1
        gap-8
        overflow-hidden
        rounded-3xl

        sm:grid-cols-2
        sm:gap-6

        lg:grid-cols-3
        lg:gap-6
      "
    >
      {about.map((ab) => (
        <motion.article
          key={ab.title}
          variants={wordVariants}
          className="
            min-w-0
            p-0

            sm:p-1

            lg:p-2
          "
        >
          <div className="w-full overflow-hidden rounded-xl">
            <img
              src={ab.image.src}
              width={352}
              height={320}
              alt={ab.title}
              loading="lazy"
              className="
                block
                aspect-352/320
                h-auto
                w-full
                rounded-xl
                object-cover
                transition-transform
                duration-500
                hover:scale-[1.03]
              "
            />
          </div>

          <div className="px-1 sm:px-0">
            <p
              className="
                mb-2
                mt-4
                text-lg
                font-medium
                text-white

                sm:text-xl
              "
            >
              {ab.title}
            </p>

            <p
              className="
                text-sm
                leading-7
                text-white/55

                sm:text-base
                sm:leading-7
              "
            >
              {ab.description}
            </p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}