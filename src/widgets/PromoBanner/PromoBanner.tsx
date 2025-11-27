import { Button } from '../../shared/components/atoms/Button';
import characterDuck from '../../shared/assets/images/duck.png'; // Reusing the duck
import arrowIcon from '../../shared/assets/icons/right.svg';

export const PromoBanner = () => {
  return (
    // Main Background Container: 1280px x 302px, Light Green #D3F7E7
    <section className="w-full max-w-7xl h-[302px] bg-primary-light  mx-auto relative overflow-hidden flex items-center px-[100px]">
      
      {/* --- LEFT CONTENT: Text & Button (Frame 8164) --- */}
      <div className="flex flex-col gap-6 z-10">
        
        {/* Text Block */}
        <div className="flex flex-col gap-2">
          <h2 className="font-sans font-bold text-[30px] leading-11 text-gray-7">
            선선한 가을에 어울리는<br/>
            숨겨진 ‘찐 맛집’ 모음 단독특가 🍁
          </h2>
        </div>

        {/* CTA Button */}
        <Button 
          variant="white" 
          className="w-fit h-[52px] px-6  text-[16px] font-semibold text-gray-7  gap-2"
          icon={<img src={arrowIcon} alt="" className="w-4 h-4" />}
        >
          지금 바로 만나 보세요
          
        </Button>
      </div>

      {/* --- RIGHT CONTENT: Decor & Character --- */}
      
      {/* Decorative Circle 1 (Big) */}
      <div 
        className="absolute rounded-full bg-white opacity-80"
        style={{
          width: '153px', // Scaled up slightly for visual balance or use 153px if exact
          height: '153px',
          top: '26px',
          left: '896px',
        }}
      />

      {/* Decorative Circle 2 (Small) */}
      <div 
        className="absolute rounded-full bg-white opacity-50"
        style={{
          width: '71px',
          height: '71px',
          top: '186px',
          left: '832px',
        }}
      />

      {/* Duck Character */}
      <img 
        src={characterDuck} 
        alt="Character" 
        className="absolute top-[54px] left-[849px] h-56 w-[162px] object-contain z-10"
      />

    </section>
  );
};