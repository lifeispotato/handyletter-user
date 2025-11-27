import { useRef } from 'react';
import { CarouselNavigation } from '../../shared/components/molecules/CarouselNavigation';
import { ContentCard } from '../../shared/components/molecules/ContentCard';
import type { CardData } from '../HomeSection/HomeSection'; 
import { Button } from '@/shared/components/atoms/Button';

interface SliderSectionProps {
  tagline: string;
  description: string;
  cards: CardData[];
}

export const SliderSection = ({ tagline, description, cards }: SliderSectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 408; 
      const gap = 20; 
      const scrollAmount = cardWidth + gap; 

      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    // Main Container: Light Green
    <section className="w-full bg-[#D3F7E7] h-[661px] py-[60px] flex flex-col overflow-hidden">
      
      {/* 1. Header Container: Constrained to the standard 1280px grid to keep text and buttons aligned */}
      <div className="w-full max-w-[1280px] mx-auto  flex items-end justify-between mb-[20px]">
        
        {/* Text Group */}
        <div className="flex flex-col gap-2">
          <span className="font-sans font-semibold text-[18px] text-[#34C987]">
            {tagline}
          </span>
          <h2 className="font-sans font-semibold text-[18px] leading-[26px] text-[#262C31] max-w-[600px] whitespace-pre-line">
            {description}
          </h2>
        </div>

        {/* Navigation Buttons: Aligned to the right edge of the 1280px grid */}
        <CarouselNavigation 
          onPrev={() => scroll('left')} 
          onNext={() => scroll('right')} 
        />
      </div>

      {/* 2. Cards Slider Container */}
      {/* Smart Padding: Calculates the left spacing to match the 1280px grid start, 
          but allows the right side to bleed off-screen */}
      <div className="w-full pl-[max(16px,calc(50%-640px))] pr-4">
        <div 
          ref={scrollContainerRef}
          className="flex gap-[20px] overflow-x-auto no-scrollbar scroll-smooth "
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card) => (
            <ContentCard
              key={card.id}
              title={card.title}
              author={card.author}
              imageUrl={card.imageUrl}
              badgeText={card.badgeText}
              isLiked={card.isLiked}
              className="shrink-0 w-[408px] h-[321px]" // Fixed dimensions
            />
          ))}
          {/* Spacer to ensure the last card has right padding when scrolled */}
          <div className="shrink-0 w-[16px]" />
        </div>
      </div>

      {/* 3. Bottom CTA Button */}
      <div className="flex justify-center mt-[25px]">
        <Button
          variant="primary"
          className="w-[351px] h-[52px]  text-[16px] font-bold shadow-sm hover:shadow-md transition-shadow"
        >
          지금 바로 구독하기
        </Button>
      </div>

    </section>
  );
};