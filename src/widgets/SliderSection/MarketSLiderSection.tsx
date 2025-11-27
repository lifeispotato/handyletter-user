import { MarketCard } from "@/shared/components/molecules/MarketCard";
import { useRef } from "react";
import type { MarketCardData } from "../../pages/market/MarketListPage";

interface SliderSectionProps {
  cards: MarketCardData[];
}

export const MarketSLiderSection = ({ cards }: SliderSectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    // Main Container: Light Green
    <section className="w-full bg-[#F2F4F5] py-[60px] flex gap-[110px] overflow-hidden">
      {/* 1. Header Container: Constrained to the standard 1280px grid to keep text and buttons aligned */}
      <div className="pl-[max(16px,calc(50%-640px))]">
        {/* Text Group */}
        <div className="w-max flex flex-col gap-2">
          <div className="px-4 py-2 rounded-full bg-[#CF2B491A] font-semibold text-[15px] text-red-600 w-fit">
            SALE
          </div>
          <span className="font-sans font-semibold text-[26px] text-gray-7">
            7일 이내로 마감돼요
          </span>
          <h2 className="font-sans font-semibold text-[16px] leading-[22px] text-gray-6 whitespace-pre-line">
            핸디레터 한정 특가! 일주일 남았어요.
          </h2>
        </div>

        {/* Navigation Buttons: Aligned to the right edge of the 1280px grid */}
        {/* <CarouselNavigation
          onPrev={() => scroll("left")}
          onNext={() => scroll("right")}
        /> */}
      </div>

      {/* 2. Cards Slider Container */}
      {/* Smart Padding: Calculates the left spacing to match the 1280px grid start, 
          but allows the right side to bleed off-screen */}
      <div className="pr-4">
        <div
          ref={scrollContainerRef}
          className="flex gap-[20px] overflow-x-auto no-scrollbar scroll-smooth "
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card) => (
            <MarketCard
              key={card.id}
              title={card.title}
              imageUrl={card.imageUrl}
              discount={card.discount}
              price={card.price}
              type={card.type}
              location={card.location}
            />
          ))}
          {/* Spacer to ensure the last card has right padding when scrolled */}
          <div className="shrink-0 w-[16px]" />
        </div>
      </div>
    </section>
  );
};
