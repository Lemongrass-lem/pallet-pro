"use client";

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "home/home_1.jpg",
  "home/home_2.jpg",
  "home/home_3.jpg",
];

export default function HeroSwiper() {

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <div className="relative w-full container mx-auto px-4">

      <div
        className="overflow-hidden rounded-3xl"
        ref={emblaRef}
      >
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full"
            >
              <div className="relative min-w-full h-[260px] sm:h-[360px] md:h-[500px]">
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}