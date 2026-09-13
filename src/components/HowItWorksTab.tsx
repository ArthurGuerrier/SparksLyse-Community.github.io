import howItWorksImage1 from "../assets/images/howitworks1.jpg"
import howItWorksImage2 from "../assets/images/feature1.jpg"
import howItWorksImage3 from "../assets/images/howitworks3.jpg"
import type { ImageMetadata } from "astro";

export default function HowItWorksTab() {
  const howitworks: {
    title: string;
    description: string;
    logo: number;
    image: ImageMetadata;
  }[] = [
    {
      title: "1 – Le prompt",
      description: "Ecrivez votre prompt (question)",
      logo: 0,
      image: howItWorksImage1,
    },
    {
      title: "2 – Réflexion",
      description: "L'IA réfléchi pour vous répondre",
      logo: 1,
      image: howItWorksImage2,
    },
    {
      title: "3 - Réponse",
      description: "Sa réflexion est devant vous",
      logo: 2,
      image: howItWorksImage3,
    },
  ];
  const changeTabHowitworks = (e: React.MouseEvent) => {
    const allTab = document.getElementById("howitworks-content")?.children;
    const allTabHeader = document.getElementById("howitworks-header")?.children;
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
      element?.classList.remove("border-l-2", "text-white");
      element?.classList.add("border-l");
    }
    document
      .getElementById(
        e.currentTarget.id.replace("-header", "-howitworks-content"),
      )
      ?.removeAttribute("hidden");
    e.currentTarget.classList.add("border-l-2", "text-white");
  };

  const howitworksLogo = [
    <svg
      display="block"
      role="presentation"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 6.85 13.5 L 8.35 16.125 C 8.484 16.359 8.732 16.504 9.002 16.504 C 9.271 16.504 9.52 16.359 9.653 16.125 L 11.153 13.5 L 17.25 13.5 C 17.664 13.5 18 13.164 18 12.75 L 18 0.75 C 18 0.336 17.664 0 17.25 0 L 0.75 0 C 0.336 0 0 0.336 0 0.75 L 0 12.75 C 0 13.164 0.336 13.5 0.75 13.5 Z"
        fill-opacity="0"
        fill="currentColor"
        height="16.503561837456417px"
        transform="translate(3 4.5)"
        width="18px"
      />
      <path
        d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z"
        fill="currentColor"
        height="2.25px"
        transform="translate(10.875 10.125)"
        width="2.25px"
      />
      <path
        d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z"
        fill="currentColor"
        height="2.25px"
        transform="translate(6.75 10.125)"
        width="2.25px"
      />
      <path
        d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z"
        fill="currentColor"
        height="2.25px"
        transform="translate(15 10.125)"
        width="2.25px"
      />
      <path
        d="M 6.85 13.5 L 8.35 16.125 C 8.484 16.359 8.732 16.504 9.002 16.504 C 9.271 16.504 9.52 16.359 9.653 16.125 L 11.153 13.5 L 17.25 13.5 C 17.664 13.5 18 13.164 18 12.75 L 18 0.75 C 18 0.336 17.664 0 17.25 0 L 0.75 0 C 0.336 0 0 0.336 0 0.75 L 0 12.75 C 0 13.164 0.336 13.5 0.75 13.5 Z"
        fill="transparent"
        height="16.503561837456417px"
        stroke-dasharray=""
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        stroke="currentColor"
        transform="translate(3 4.5)"
        width="18px"
      />
    </svg>,
    <svg
      display="block"
      role="presentation"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 5.65 10.849 L 0.485 8.946 C 0.194 8.839 0 8.561 0 8.25 C 0 7.939 0.194 7.661 0.485 7.553 L 5.65 5.65 L 7.553 0.485 C 7.661 0.194 7.939 0 8.25 0 C 8.561 0 8.839 0.194 8.946 0.485 L 10.849 5.65 L 16.014 7.553 C 16.306 7.661 16.5 7.939 16.5 8.25 C 16.5 8.561 16.306 8.839 16.014 8.946 L 10.849 10.849 L 8.946 16.014 C 8.839 16.306 8.561 16.5 8.25 16.5 C 7.939 16.5 7.661 16.306 7.553 16.014 Z"
        fill-opacity="0"
        fill="currentColor"
        height="16.499524626865806px"
        transform="translate(2.25 5.25)"
        width="16.499524626865806px"
      />
      <path
        d="M 5.65 10.849 L 0.485 8.946 C 0.194 8.839 0 8.561 0 8.25 C 0 7.939 0.194 7.661 0.485 7.553 L 5.65 5.65 L 7.553 0.485 C 7.661 0.194 7.939 0 8.25 0 C 8.561 0 8.839 0.194 8.946 0.485 L 10.849 5.65 L 16.014 7.553 C 16.306 7.661 16.5 7.939 16.5 8.25 C 16.5 8.561 16.306 8.839 16.014 8.946 L 10.849 10.849 L 8.946 16.014 C 8.839 16.306 8.561 16.5 8.25 16.5 C 7.939 16.5 7.661 16.306 7.553 16.014 Z"
        fill="transparent"
        height="16.499524626865806px"
        stroke-dasharray=""
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        stroke="currentColor"
        transform="translate(2.25 5.25)"
        width="16.499524626865806px"
      />
      <path
        d="M 0 0 L 0 4.5"
        fill="transparent"
        height="4.5px"
        stroke-dasharray=""
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        stroke="currentColor"
        transform="translate(16.5 1.5)"
        width="1px"
      />
      <path
        d="M 0 0 L 0 3"
        fill="transparent"
        height="3px"
        stroke-dasharray=""
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        stroke="currentColor"
        transform="translate(21 6.75)"
        width="1px"
      />
      <path
        d="M 0 0 L 4.5 0"
        fill="transparent"
        height="1px"
        stroke-dasharray=""
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        stroke="currentColor"
        transform="translate(14.25 3.75)"
        width="4.5px"
      />
      <path
        d="M 0 0 L 3 0"
        fill="transparent"
        height="1px"
        stroke-dasharray=""
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        stroke="currentColor"
        transform="translate(19.5 8.25)"
        width="3px"
      />
    </svg>,
    <svg
      display="block"
      role="presentation"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 Z"
        fill-opacity="0"
        fill="currentColor"
        height="18px"
        transform="translate(3 3)"
        width="18px"
      />
      <path
        d="M 0 3 L 2.25 5.25 L 7.5 0"
        fill="transparent"
        height="5.25px"
        stroke-dasharray=""
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        stroke="currentColor"
        transform="translate(8.25 9.75)"
        width="7.5px"
      />
      <path
        d="M 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 Z"
        fill="transparent"
        height="18px"
        stroke-dasharray=""
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        stroke="currentColor"
        transform="translate(3 3)"
        width="18px"
      />
    </svg>,
  ];

  return (
    <div className="gap-3 flex">
      <div id="howitworks-content">
        {howitworks.map((feat, idx) => (
          <img
            id={`${feat.title}-howitworks-content`}
            alt={feat.title}
            src={feat.image.src}
            key={feat.title}
            hidden={idx !== 0}
            width={516}
            height={396.8}
            className="rounded-sm"
          />
        ))}
      </div>
      <div id="howitworks-header" className="p-12 text-white">
        {howitworks.map((feat, idx) => (
          <div
            id={`${feat.title}-header`}
            key={`${feat.title}-header`}
            className={`${idx === 0 ? "border-l-2" : "border-l"} hover:border-l-2 p-2 m-2 cursor-pointer`}
            onClick={changeTabHowitworks}
          >
            <div className="flex">
              <p className="w-6 mr-2">{howitworksLogo[feat.logo]}</p>
              <p className="text-[20px]">{feat.title}</p>
            </div>
            <p className="text-white/45 font-[16px]">{feat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
