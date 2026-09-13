import { Image } from "astro:assets";
import featureImage1 from "../assets/images/feature1.jpg"
import featureImage2 from "../assets/images/feature2.jpg"
import featureImage3 from "../assets/images/feature3.jpg"
import featureImage4 from "../assets/images/feature4.jpg"
import type { ImageMetadata } from "astro";

export default function FeatureTab() {
  const features: { title: string; description: string; image: ImageMetadata }[] = [
    {
      title: "Création de contenu",
      description: "Demandez-lui des stories, posts, et idées",
      image: featureImage1,
    },
    {
      title: "Aide au codage",
      description: "Résoudez les problèmes de votre code",
      image: featureImage2,
    },
    {
      title: "Recherche",
      description: "Recherchez les infos importantes",
      image: featureImage3,
    },
    {
      title: "Productivité",
      description: "Restez concentré avec votre assistant",
      image: featureImage4,
    },
  ];
  const changeTabFeature = (e: React.MouseEvent) => {
    const allTab = document.getElementById("feature-content")?.children;
    const allTabHeader = document.getElementById("feature-header")?.children;
    if (!allTab) return;
    if (!allTabHeader) return;
    for (let i = 0; i < allTab.length; i++) {
      const element = allTab.item(i);
      if (typeof element?.getAttribute("hidden") === "object") {
        element.setAttribute("hidden", "");
      }
    }
    for (let i = 0; i < allTabHeader.length; i++) {
      const element = allTabHeader.item(i);
      element?.classList.remove("border-b-2", "text-white");
    }
    document
      .getElementById(e.currentTarget.id.replace("-header", "-feature-content"))
      ?.removeAttribute("hidden");
    e.currentTarget.classList.add("border-b-2", "text-white");
  };

  return (
    <div className="grid gap-4 sm:grid-cols-1">
      <div id="feature-header" className="flex text-white/45 border-b">
        {features.map((feat, idx) => (
          <p
            id={`${feat.title}-header`}
            key={`${feat.title}-header`}
            className={`${idx === 0 ? "border-b-2 text-white" : ""} hover:border-b-2 p-2 hover:text-white cursor-pointer`}
            onClick={changeTabFeature}
          >
            {feat.title}
          </p>
        ))}
      </div>
      <div id="feature-content">
        {features.map((feat, idx) => (
          <article
            id={`${feat.title}-feature-content`}
            key={feat.title}
            className="items-center flex rounded-2xl bg-white/2.5 p-7 transition hover:border-white/20 hover:bg-white/4.5 md:p-9"
            hidden={idx !== 0}
          >
            <img
              src={feat.image.src}
              alt={feat.title}
              width={516}
              height={396.8}
              className="rounded-sm"
              loading="lazy"
            />
            <div className="w-full ml-5">
              <p className="mb-4 text-xl text-[#858585]">{feat.title}</p>
              <p className="mb-8 max-w-md text-sm leading-7 text-white text-[20px]">
                {feat.description}
              </p>
              <a href="#final-cta" className="text-sm text-[#e8ff9c]">
                Commencer <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
