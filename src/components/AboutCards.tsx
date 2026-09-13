import { motion, type Variants } from "framer-motion";
import aboutImage1 from "../assets/images/about1.jpg";
import aboutImage2 from "../assets/images/about2.jpg";
import aboutImage3 from "../assets/images/about3.jpg";

export default function AboutCards() {
  const about: { title: string; description: string; image: ImageMetadata }[] =
    [
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

    const containerVariants = {
        hidden: { opacity: 0 },
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
            y: '0%',
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
        className="grid overflow-hidden rounded-3xl"
        style={{ gridTemplateColumns: `repeat(${about.length}, minmax(0, 1fr));` }}
        initial="hidden"
        whileInView="visible"
      >
      {about.map((ab) => (
        <motion.article
          className="p-2 md:p-1"
          variants={wordVariants}
        >
          <img
            src={ab.image.src}
            width="352"
            height="320"
            alt={`${ab.title}`}
            className="rounded-sm"
            loading="lazy"
          />
          <p className="mb-4 mt-2 text-lg text-white">{ab.title}</p>
          <p className="text-sm leading-7 text-white/55">{ab.description}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
