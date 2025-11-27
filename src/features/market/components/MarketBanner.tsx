import market_banner_img from "@/shared/assets/images/market_banner_img.png";
import beyond_history_bg from "@/shared/assets/images/beyond_history_bg.png";

export const MarketBanner = () => {
  return (
    <section className="w-full h-[338px] bg-primary-light flex items-center justify-center overflow-hidden relative">
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${beyond_history_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Centered Content Container */}
        <div className="w-full max-w-[1280px] px-4 flex items-center justify-around relative h-full">
          {/* --- LEFT TEXT CONTENT (Frame 1410117186) --- */}
          <div className="flex flex-col gap-[19px]  z-10">
            <h1 className="font-sans font-bold text-[28px] leading-[40px] text-gray-7">
              핸디레터에서만 볼 수 있는
              <br />
              부산 맛집 놀거리 특가!
            </h1>
            <p className="font-sans font-normal text-[16px] text-gray-7 opacity-80">
              오직 핸디레터에서만 특가가 적용돼요
            </p>
          </div>
          <div className="h-full flex items-end">
            <img
              src={market_banner_img}
              alt="Eyes"
              className="w-[488px] object-contain" // Adjust width/height to match your Figma exactly
            />
          </div>
        </div>
      </div>
    </section>
  );
};
