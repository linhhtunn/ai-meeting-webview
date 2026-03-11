"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

type TestimonialId =
  | "nguyenA"
  | "tranB"
  | "leC"
  | "phamD"
  | "hoangE"
  | "doF"
  | "vuG";

const TESTIMONIAL_ITEMS: ReadonlyArray<{
  readonly id: TestimonialId;
  readonly avatar: string;
}> = [
  { id: "nguyenA", avatar: "/img/aoHong.png" },
  { id: "tranB", avatar: "/img/aoTrang.png" },
  { id: "leC", avatar: "/img/aoBe.png" },
  { id: "phamD", avatar: "/img/aoHong.png" },
  { id: "hoangE", avatar: "/img/aoDen'.png" },
  { id: "doF", avatar: "/img/aoTrang.png" },
  { id: "vuG", avatar: "/img/aoBe.png" },
];

export function Testimonials() {
  const tTestimonials = useTranslations("testimonials");
  const tItems = useTranslations("testimonials.items");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(1.15);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1.15);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = TESTIMONIAL_ITEMS.length;
  const maxIndex = Math.ceil(Math.max(0, totalSlides - itemsToShow));

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section className="sec bg-[#F6F6FB]">
      <div className="wrap">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="h-title">
            <span className="text-[#203596]">
              {tTestimonials("titleHighlight")}
            </span>
            <span>{tTestimonials("titleRest")}</span>
          </h2>
          <p className="h-sub mt-3 max-w-[560px] mx-auto">
            {tTestimonials("description")}
          </p>
        </div>

        <div
          className="relative px-4 md:px-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${Math.min(
                  currentIndex * (100 / itemsToShow),
                  Math.max(0, totalSlides - itemsToShow) *
                    (100 / itemsToShow),
                )}%)`,
              }}
            >
              {TESTIMONIAL_ITEMS.map((item) => {
                const rating = tItems(`${item.id}.rating`);
                const [score, stars] = rating.split(" ");

                return (
                  <div
                    key={item.id}
                    className="shrink-0 px-2 md:px-3"
                    style={{ width: `${100 / itemsToShow}%` }}
                  >
                    <div className="bg-white rounded-xl p-4 md:p-6 border h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 md:gap-4 mb-4">
                          <div className="relative w-12 h-12 shrink-0">
                            <Image
                              src={item.avatar}
                              alt={tItems(`${item.id}.name`)}
                              fill
                              className="rounded-full object-cover border border-gray-200"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-base md:text-lg lg:text-xl truncate">
                              {tItems(`${item.id}.name`)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 border-b border-gray-200 pb-4 mb-4">
                          <span className="text-black text-lg md:text-xl">
                            {score}
                          </span>
                          <span className="text-yellow-400 text-2xl md:text-3xl tracking-widest leading-none">
                            {stars}
                          </span>
                        </div>
                        <p className="text-base md:text-lg lg:text-xl text-[#444] leading-relaxed line-clamp-4">
                          {tItems(`${item.id}.content`)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-[-15px] md:left-[-40px] lg:left-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#EFF2FC] rounded-full items-center justify-center text-[#203596] hover:bg-[#E2E8F5] transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-[-15px] md:right-[-40px] lg:right-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#EFF2FC] rounded-full items-center justify-center text-[#203596] hover:bg-[#E2E8F5] transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}

