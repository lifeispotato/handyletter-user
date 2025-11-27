import { useState } from 'react';
import { Button } from '../../shared/components/atoms/Button';
import { FormInput } from '../../shared/components/molecules/FormInput';
import { Checkbox } from '../../shared/components/atoms/Checkbox';
// Placeholder for the duck character. Replace with your real PNG.
import characterImg from '../../shared/assets/images/duck.png'; 

export const SubscriptionBanner = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    // Main Container: 1920px Width (w-full), 368px Height, Bg Color #BAEDD6
    <section className="w-full h-[368px] bg-[#BAEDD6] flex items-center justify-center">
      
      {/* Inner Content Wrapper - Centered to match your design's spacing */}
      <div className="w-full max-w-7xl px-4 flex items-center justify-between">
        
        {/* --- LEFT SIDE: Character + Text --- */}
        <div className="flex items-center gap-[30px]">
          {/* Character Image (194x268) */}
          {/* Use object-contain to keep aspect ratio */}
          <img 
            src={characterImg} 
            alt="Handy Character" 
            className="w-[194px] h-[268px] object-contain drop-shadow-lg"
          />

          {/* Text Block */}
          <div className="flex flex-col gap-3">
            {/* Headline */}
            <h1 className="font-sans font-bold text-[30px] leading-10 text-gray-7">
              숨겨진 동네 장소들을 발굴하고,<br/>
              이야기를 전달해요
            </h1>
            {/* Subtext */}
            <p className="font-sans font-normal text-[16px] leading-[26px] text-gray-7 ">
              나도 몰랐던 동네 맛집, 놀거리 구경부터<br/>
              진솔한 사장님의 이야기까지 매주 알려드려요!
            </p>
          </div>
        </div>

        {/* --- RIGHT SIDE: Subscription Form --- */}
        {/* Width 441px, Height 193px */}
        <div className="max-w-[441px] min-w-[441px] flex flex-col gap-2">
          
          {/* Input 1 (Name/ID) */}
          <FormInput 
            placeholder="아이디를 입력해주세요" // "Enter ID"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="max-w-full h-12 w-full border-none shadow-sm"
          />

          {/* Input 2 (Email/Password) */}
          <FormInput 
            placeholder="비밀번호를 입력해주세요" // "Enter Password" (or Email based on context)
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="max-w-full w-full h-12 border-none shadow-sm"
          />

          {/* Checkbox Row */}
          <div className="py-1">
             <Checkbox 
               label="개인정보 수집 이용 및 광고 수신 동의 (필수)" 
               checked={isAgreed}
               onChange={setIsAgreed}
               labelClassName="text-[15px] text-gray-5"
             />
          </div>

          {/* Subscribe Button */}
          {/* Green Button matching design */}
          
         <Button 
            className="h-[51px] w-full rounded-[26px] bg-primary hover:bg-[#2db376] text-white font-bold text-[16px]"
          >
            구독하기
          </Button>
          
         

        </div>

      </div>
    </section>
  );
};