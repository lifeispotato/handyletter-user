// 1. Import the SVG files directly
import contractIconUrl from "../../shared/assets/icons/contract.svg";
import arrowIconUrl from "../../shared/assets/icons/right.svg";

// 2. Import your new Reusable Button
import { Button } from "../../shared/components/atoms/Button";

export const TopBanner = () => {
  return (
    <div className="w-full h-[62px] bg-primary flex items-center justify-center px-4">
      <div className="flex items-center gap-[21px]">
        {/* Icon Image */}
        <img
          src={contractIconUrl}
          alt="Contract"
          className="w-[43px] h-[37px]"
        />

        {/* Text */}
        <span className="font-sans font-semibold text-[18px] leading-[26.5px] tracking-[-0.003em] text-white">
          곳곳에 숨어있는 로컬 브랜드를 핸디하게 소개해요!
        </span>

        {/* Reusable Button with Icon passed as prop */}
        <Button
          variant="white"
          className="w-fit" // Force exact width from Figma
          icon={<img src={arrowIconUrl} alt="" className="w-4 h-4" />} // <--- Passing the icon here!
        >
          핸디레터 구독하기
        </Button>
      </div>
    </div>
  );
};
