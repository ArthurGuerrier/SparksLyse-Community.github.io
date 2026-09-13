import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
}

const REVIEWS: Testimonial[] = [
  {
    id: 1,
    name: "Sophia M.",
    role: "Concepteuse de produits",
    comment: "J’ai testé d’innombrables outils d’IA, mais celui-ci est différent — moins de bug, utilisation simple clair. Je recommande cette ia à tous pris.",
  },
  {
    id: 2,
    name: "David K",
    role: "Hacker Indépendant",
    comment: "En quelques jours, il a rationalisé mon flux de travail. L'équilibre entre précision et inspiration qu'il offre est unique.",
  },
  {
    id: 3,
    name: "Aria L.",
    role: "Chercheuse",
    comment: "Au début, j'étais sceptique. Mais la clarté qu'elle apporte aux problèmes complexes donne presque l'impression de travailler avec un deuxième cerveau.",
  },
  {
    id: 4,
    name: "Ethan R.",
    role: "Entrepreneur",
    comment: "Elle ne se contente pas de répondre, elle reformule. Chaque interaction me donne l'impression de me guider vers une voie plus claire.",
  },
];

export default function CarouselTestimonials() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: '#prev-btn',
          nextEl: '#next-btn',
        }}
        pagination={{
          el: '#custom-pagination',
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        className="pb-12"
      >
        {REVIEWS.map((review) => (
          <SwiperSlide key={review.id} className="h-auto">
            <div className="border p-6 shadow-sm flex flex-col justify-between h-full bg-[#121212]" style={{ borderColor: "rgba(255, 255, 255, 0.12)" }}>
              <div>
                <p className="text-white text-[20px] mb-6">{review.comment}</p>
              </div>

              <div className="flex items-center gap-3 border-t pt-4" style={{ borderColor: "rgba(255, 255, 255, 0.12)" }}>
                <div>
                  <h3 className="font-semibold text-white text-sm">{review.name}</h3>
                  <p className="text-xs text-white/45">{review.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div 
        id="custom-pagination" 
        className="flex justify-center items-center gap-2 mt-6 [&>.swiper-pagination-bullet]:w-2 [&>.swiper-pagination-bullet]:h-2 [&>.swiper-pagination-bullet]:bg-white [&>.swiper-pagination-bullet]:rounded-full [&>.swiper-pagination-bullet]:transition-all [&>.swiper-pagination-bullet]:cursor-pointer [&>.swiper-pagination-bullet-active]:bg-white! [&>.swiper-pagination-bullet-active]:w-4! [&>.swiper-pagination-bullet-active]:h-4!"
        />
      <div className="flex items-center gap-2">
          <button
            id="prev-btn"
            className="p-2.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
            aria-label="Avis précédent"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            id="next-btn"
            className="p-2.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
            aria-label="Avis suivant"
          >
            <ChevronRight size={20} />
          </button>
        </div>
    </div>
  );
}