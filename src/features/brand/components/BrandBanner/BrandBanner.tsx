import arrowDiagonal from '@/shared/assets/icons/arrow_diagonal.svg';
// New Import for the double eye SVG
import eyesIcon from '@/shared/assets/icons/double_eye.svg'; 
import greenStar from '@/shared/assets/icons/green_star.svg'; 

export const BrandBanner = () => {
  return (
    <section className="w-full h-[338px] bg-[#D3F7E7] flex items-center justify-center overflow-hidden relative">
      
      {/* Centered Content Container */}
      <div className="w-full max-w-[1280px] px-4 flex items-center justify-around relative h-full">
        
        {/* --- LEFT TEXT CONTENT (Frame 1410117186) --- */}
        <div className="flex flex-col gap-[19px]  z-10">
          <h1 className="font-sans font-bold text-[28px] leading-[40px] text-[#262C31]">
            우리 동네의 숨겨진 브랜드만<br/>
            핸디가 전부 갖고 왔어요
          </h1>
          <p className="font-sans font-normal text-[16px] text-[#262C31] opacity-80">
            핸디에디터가 직접 방문하고 좋았던 곳들만 소개해요
          </p>
        </div>

        {/* --- RIGHT GRAPHIC COMPOSITION (Group 1115) --- */}
        <div className="relative w-[500px]  h-[300px]">
          
          {/* 1. White Box "Let's find brand" (Rectangle 961) */}
          <div className="absolute top-10 left-5 w-[174px] h-[150px] p-4 bg-white rounded-[11px] shadow-sm flex flex-col items-start justify-center gap-4 z-2">
             {/* Replaced CSS eyes with the SVG Image */}
             <img 
               src={eyesIcon} 
               alt="Eyes" 
               className="w-[60px] h-[48px] object-contain" // Adjust width/height to match your Figma exactly
             />
             <span className="font-sans font-bold text-[14px] text-black">Let's find brand</span>
          </div>

          {/* 2. Green Background Box (Subtract) */}
          <div className="absolute top-[110px] left-[150px] w-[252px] h-[150px] bg-[#34C987] rounded-[20px] flex items-center justify-center z-5">
            <div className="  w-[200px] h-[90px] bg-black border border-white rounded-[50%] flex flex-col items-center justify-center  ">
             <span className="font-sans font-bold text-[16px] text-white">#</span>
             <span className="font-sans font-bold text-[16px] text-white">FROM 핸디레터</span>
          </div>
          <button className="absolute -top-7 right-5 w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center z-30 hover:scale-110 transition-transform cursor-pointer shadow-md">
            <img src={arrowDiagonal} alt="Go" className="w-[32px] h-[32px]" />
          </button>
          <div 
            className="absolute border border-[#34C987]  rounded-[50%] -z-5 pointer-events-none"
            style={{
              width: '505px',
              height: '150px',
              top: '70px',    // Adjusted relative to container
              left: '-150px',   // Adjusted relative to container
              transform: 'rotate(-21deg)',
            }}
          />

          </div>

          

          {/* 5. Decorative Star (Vector) */}
          <div className="absolute bottom-[70px] left-[0px] text-[#34C987]">
            <img src={greenStar} alt="Go" className="w-[30px] h-[30px]" />
          </div>

        </div>

      </div>
    </section>
  );
};