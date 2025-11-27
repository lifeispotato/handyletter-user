import { Button } from "../../shared/components/atoms/Button";
import arrowRightIcon from "../../shared/assets/icons/right.svg";
import arrowGrayIcon from "../../shared/assets/icons/chevron_right.svg"; // New import kept
import type { MarketCardData } from "../../pages/market/MarketListPage";
import { MarketCard } from "@/shared/components/molecules/MarketCard";

interface MarketSectionProps {
  title: string;

  subtitle?: string;

  highlightText: string;

  cards: MarketCardData[];

  buttonText: string;

  buttonVariant?: "block" | "pill";
}

export const MarketSection = ({
  title,
  subtitle,
  highlightText,
  cards,
  buttonText,
  buttonVariant = "block",
}: MarketSectionProps) => {
  return (
    // Reverted to Code 2 styling (max-w-7xl, mb-20)
    <section className="w-full max-w-7xl mx-auto mt-[148px]">
      {/* 1. Section Title - Reverted to Code 2 styling */}
      <div className="mb-6 fle flex-col ">
        <h2 className="font-semibold text-[20px] leading-[34px] text-gray-7 ">
          {title} <span className="text-primary">{highlightText}</span>
        </h2>
        <h4 className="font-medium text-[16px] leading-[22px] text-gray-6 ">
          {subtitle}
        </h4>
      </div>

      {/* 2. Card Grid - Reverted to Code 2 styling (gap-x-5) */}
      <div className="grid grid-cols-4 gap-x-5 gap-y-[30px] mb-10">
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
      </div>

      {/* 3. Bottom Button - Logic from Code 1, but Styling from Code 2 */}
      {buttonVariant === "block" ? (
        // The Original Button (Reverted to Code 2 implementation using `icon` prop and `rounded-3xl`)
        <Button
          variant="primary"
          className="w-full h-[51px] p-3 text-[18px] rounded-3xl gap-2"
          icon={
            <img src={arrowRightIcon} className="brightness-0 invert" alt="" />
          }
        >
          {buttonText}
        </Button>
      ) : (
        // The New Variant (Kept from Code 1)
        <div className="flex justify-center">
          <Button
            variant="white"
            icon={
              <img src={arrowGrayIcon} className="w-4 h-4  opacity-50" alt="" />
            }
            className="w-[300px] h-[52px] rounded-3xl  border border-[#E6E8EB] text-[18px] font-semibold text-gray-7 hover:bg-gray-50 hover:text-gray-700 flex items-center justify-center gap-2"
          >
            {buttonText}
          </Button>
        </div>
      )}
    </section>
  );
};
