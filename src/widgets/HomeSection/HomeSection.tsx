import { Button } from '../../shared/components/atoms/Button';
import { ContentCard } from '../../shared/components/molecules/ContentCard';
import arrowRightIcon from '../../shared/assets/icons/right.svg'; 
import arrowGrayIcon from '../../shared/assets/icons/chevron_right.svg'; // New import kept

export interface CardData {
  id: string | number;
  title: string;
  subtitle?: string;
  author: string;
  imageUrl: string;
  badgeText?: string;
  isLiked?: boolean;
}

interface HomeSectionProps {
  title: string;

  subtitle?: string;

  highlightText: string;

  cards: CardData[];

  buttonText: string;

  buttonVariant?: 'block' | 'pill'; 
}

export const HomeSection = ({ 
  title, 
  subtitle,
  highlightText, 
  cards, 
  buttonText,
  buttonVariant = 'block' 
}: HomeSectionProps) => {
  return (
    // Reverted to Code 2 styling (max-w-7xl, mb-20)
    <section className="w-full max-w-7xl mx-auto mb-20">
      
      {/* 1. Section Title - Reverted to Code 2 styling */}
      <div className='mb-6 fle flex-col '>
       <h2 className="font-semibold text-[20px] leading-[34px] text-gray-7 ">
        {title} <span className="text-primary">{highlightText}</span>
      </h2>
      <h4 className="font-medium text-[16px] leading-[22px] text-gray-6 ">
        {subtitle}
      </h4>
      </div>
     

      {/* 2. Card Grid - Reverted to Code 2 styling (gap-x-5) */}
      <div className="grid grid-cols-3 gap-x-5 gap-y-[30px] mb-10">
        {cards.map((card) => (
          <ContentCard
            key={card.id}
            title={card.title}
            author={card.author}
            imageUrl={card.imageUrl}
            badgeText={card.badgeText}
            isLiked={card.isLiked}
            className="w-full"
          />
        ))}
      </div>

      {/* 3. Bottom Button - Logic from Code 1, but Styling from Code 2 */}
      {buttonVariant === 'block' ? (
        // The Original Button (Reverted to Code 2 implementation using `icon` prop and `rounded-3xl`)
        <Button 
          variant="primary" 
          className="w-full h-[51px] p-3 text-[18px] rounded-3xl gap-2"
          icon={<img src={arrowRightIcon} className="brightness-0 invert" alt="" />}
        >
          {buttonText}
        </Button>
      ) : (
        // The New Variant (Kept from Code 1)
        <div className="flex justify-center">
          <Button 
            variant="white" 
            icon={<img src={arrowGrayIcon} className="w-4 h-4  opacity-50" alt="" /> }
            className="w-[300px] h-[52px] rounded-3xl  border border-[#E6E8EB] text-[18px] font-semibold text-gray-7 hover:bg-gray-50 hover:text-gray-700 flex items-center justify-center gap-2"
          >
            {buttonText}
            
          </Button>
        </div>
      )}

    </section>
  );
};