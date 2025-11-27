import { CarouselNavigation } from "../../shared/components/molecules/CarouselNavigation";
import { VerticalCard } from "../../shared/components/molecules/VerticalCard";
// Imports updated to point to SVG files directly
import instagramIcon from "../../shared/assets/icons/instagram.svg";
import youtubeIcon from "../../shared/assets/icons/youtube.svg";
import blogIcon from "../../shared/assets/icons/sns.svg";

export interface VideoCardData {
  id: string | number;
  title: string;
  viewCount: number;
  imageUrl: string;
}

interface VideoCarouselSectionProps {
  title: string;
  highlightText: string;
  cards: VideoCardData[];
}

export const VideoCarouselSection = ({
  title,
  highlightText,
  cards,
}: VideoCarouselSectionProps) => {
  return (
    <section className="w-full max-w-7xl mx-auto mb-[100px]">
      {/* --- Header Row --- */}
      <div className="flex items-end justify-between mb-[30px]">
        {/* Title */}
        <h2 className="font-sans font-semibold text-[20px] leading-[38px] text-gray-7">
          {title} <span className="text-primary">{highlightText}</span>
        </h2>

        {/* Right Controls */}
        <div className="flex items-center gap-5">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* Used <img> tags because Vite imports SVGs as URL strings by default */}
            <button className="hover:opacity-80 transition-opacity">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </button>
            <button className="hover:opacity-80 transition-opacity">
              <img src={youtubeIcon} alt="YouTube" className="w-6 h-6" />
            </button>
            <button className="hover:opacity-80 transition-opacity">
              <img src={blogIcon} alt="Blog" className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <CarouselNavigation
            onPrev={() => console.log("Prev")}
            onNext={() => console.log("Next")}
          />
        </div>
      </div>

      {/* --- Cards Slider --- */}
      <div className="flex gap-5 overflow-hidden">
        {cards.map((card) => (
          <VerticalCard
            key={card.id}
            title={card.title}
            viewCount={card.viewCount}
            imageUrl={card.imageUrl}
            className="shrink-0 flex-1"
          />
        ))}
      </div>
    </section>
  );
};
