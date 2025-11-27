import { Button } from "../../shared/components/atoms/Button";
import characterDuck from "../../shared/assets/images/duck.png";
import bg from "../../shared/assets/images/bg_card.jpg";
import comma from "../../shared/assets/icons/comma.svg";

interface BrandDetailContentProps {
  isSubscribed: boolean;
}

export const BrandDetailContent = ({
  isSubscribed,
}: BrandDetailContentProps) => {
  return (
    <article className="w-full max-w-[844px] mx-auto px-4 py-[80px]">
      {/* 1. Quote Block */}
      <div className="bg-primary-light rounded-[10px] flex flex-col justify-center items-center p-[40px] gap-[18px] mb-[60px] text-center">
        <img src={comma} className="w-[32px] h-[25px] "></img>
        <h3 className="font-sans font-semibold text-[26px] leading-[34px] text-gray-7 ">
          쉬기 좋은 카페? 이상한 세상, 이상한 사람들?
        </h3>
        <p className="font-sans text-[18px] font-regular leading-[28px] text-[#4B5563]">
          뉴니커, 요즘 세상을 살다보면 세상이 이상한지 내가 이상한지 헷갈리는
          순간들이 있잖아요.
          <br />
          답답한 뉴스도 많고, 내가 제대로 살고 있는 것인지 의심도 들고요.
          <br />
          우리가 느끼는 이상함을 나누고, 자신만의 방식으로 이겨나가는 사람들을
          만나봤어요.
          <br />세 번째 인터뷰이는 뉴닉 CEO 킴이에요.
        </p>
      </div>

      {/* 2. Body Text (Visible Part) */}
      <div className="prose max-w-none font-normal text-center font-sans text-[16px] leading-[30px] text-[#4B5563] mb-[60px]">
        <p className="mb-4">
          본문 서체입니다. 본문 서체입니다. 본문 서체입니다. 본문 서체입니다.
          본문 서체입니다. 본문 서체입니다. 본문 서체입니다. 본문 서체입니다.
          본문 서체입니다. 본문 서체입니다. 본문 서체입니다. 본문 서체입니다.
          본문 서체입니다. 본문 서체입니다. 본문 서체입니다. 본문 서체입니다.
          본문 서체입니다. 본문 서체입니다. 본문 서체입니다. 본문 서체입니다.
          본문 서체입니다. 본문 서체입니다. 본문 서체입니다. 본문 서체입니다.
        </p>
      </div>

      {/* 3. Image Block */}
      <div className="mb-[60px]">
        <h4 className="font-bold text-[20px] mb-4 text-center">
          헤더 스타일입니다.
        </h4>

        {/* WRAPPER: Added relative container to hold image + gradient */}
        <div className="relative w-full h-[436px] rounded-[10px] overflow-hidden mb-4">
          <img
            src={bg}
            alt="Article Content"
            className="w-full h-full object-cover"
          />

          {/* GRADIENT OVERLAY: 
              Matches: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%) 
          */}
          <div
            className="absolute bg-amber-300 inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)",
            }}
          />
        </div>

        <p className="text-[14px] text-gray-5 text-center">
          본문 서체입니다.본문 서체입니다.본문 서체입니다.본문 서체입니다.본문
          서체입니다.본문 서체입니다.본문 서체입니다.본문 서체입니다.본문
          서체입니다.본문 서체입니다.본문 서체입니다.본문 서체입니다.본문
          서체입니다.본문 서체입니다.본문 서체입니다.본문 서체입니다.본문
          서체입니다..본문 서체입니다.본문 서체입니다.본문 서체입니다..본문
          서체입니다.본문 서체입니다.본문 서체입니다..본문 서체입니다.본문
          서체입니다.본문 서체입니다..본문 서체입니다.본문 서체입니다.본문
          서체입니다..본문 서체입니다.본문 서체입니다.본문 서체입니다..본문
          서체입니다.본문 서체입니다.본문 서체입니다..본문 서체입니다.본문
          서체입니다.본문 서체입니다..본문 서체입니다.본
        </p>
      </div>

      {/* 4. SUBSCRIPTION GATE (The Blur Effect) */}
      {!isSubscribed && (
        <div className="relative mt-[-300px] pt-[200px] pb-[100px]">
          {/* Gradient Fade Overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%)",
            }}
          />

          {/* Lock Content Box */}
          <div className="relative z-20 flex flex-col items-center text-center gap-[13px]">
            <img src={characterDuck} alt="Subscribe" className="w-[70px]" />

            <div>
              <p className="text-[18px] font-semibold text-primary">
                그 다음 내용이 궁금하시다면?
              </p>
              <h3 className="font-sans font-bold text-[30px] leading-[34px] text-gray-7">
                핸디레터 바로 구독하고 숨겨진 여러 맛집,
                <br />
                놀거리 확인해 보세요!
              </h3>
            </div>

            <Button
              variant="primary"
              className="h-[52px] w-[351px] px-10 rounded-full text-[16px] font-bold"
            >
              로그인/회원가입 하기
            </Button>
          </div>
        </div>
      )}

      {/* 5. Full Content (Only visible if subscribed) */}
      {isSubscribed && (
        <div className="prose max-w-none font-sans text-[16px] leading-[30px] text-[#4B5563]">
          <p>
            여기는 구독자만 볼 수 있는 숨겨진 내용입니다! 정말 맛있는 골뱅이
            소면집의 위치는 바로... (더 많은 콘텐츠가 여기에 이어집니다)
          </p>
          {/* Add more content blocks here */}
        </div>
      )}
    </article>
  );
};
