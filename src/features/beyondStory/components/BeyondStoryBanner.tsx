import beyond_history_hand from "@/shared/assets/images/beyond_history_hand.png";
import beyond_history_bg from "@/shared/assets/images/beyond_history_bg.png";

export const BeyondStoryBanner = () => {
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
              성공한 사장님들의
              <br />
              ‘진짜' 창업 스토리, 소개할게요
            </h1>
            <p className="font-sans font-normal text-[16px] text-gray-7 opacity-80">
              사장님들의 숨겨진 진짜 이야기, 핸디레터가 인터뷰 해봤습니다.
            </p>
          </div>
          <div className="h-full flex items-end">
            <img
              src={beyond_history_hand}
              alt="Eyes"
              className="w-[488px] object-contain" // Adjust width/height to match your Figma exactly
            />
          </div>
        </div>
      </div>
    </section>
  );
};
