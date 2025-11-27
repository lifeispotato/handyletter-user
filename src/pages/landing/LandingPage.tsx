import { HomeSection, type CardData } from '../../widgets/HomeSection/HomeSection';
import cardBg1 from '../../shared/assets/images/bg_card.jpg'; // Ensure you have this or use placeholders
import { SubscriptionBanner } from '../../widgets/SubscriptionBanner/SubscriptionBanner';
import { PromoBanner } from '../../widgets/PromoBanner/PromoBanner';
import { FeaturedStory } from '../../widgets/FeaturedStory/FeaturedStory';
import storyImg from "../../shared/assets/images/home_landing.png"
// --- Mock Data for Section 1: Local Brands ---
const localBrandCards: CardData[] = [
  {
    id: 1,
    title: "지금이 제철, 무화과 디저트 맛집",
    author: "From. 핸디레터 MJ 에디터",
    imageUrl: cardBg1,
  },
  {
    id: 2,
    title: "전주 한옥마을 분위기 체험하기",
    author: "From. 핸디레터 MJ 에디터",
    imageUrl: cardBg1, // Using local image
    badgeText: "핸디 한정 판매",
    isLiked: true,
  },
  {
    id: 3,
    title: "지금이 제철, 무화과 디저트 맛집",
    author: "From. 핸디레터 MJ 에디터",
    imageUrl: cardBg1,
  },
  {
    id: 4,
    title: "전주 한옥마을 분위기 체험하기",
    author: "From. 핸디레터 MJ 에디터",
    imageUrl: cardBg1,
    badgeText: "핸디 한정 판매",
  },
  {
    id: 5,
    title: "지금이 제철, 무화과 디저트 맛집",
    author: "From. 핸디레터 MJ 에디터",
    imageUrl: cardBg1,
    isLiked: true,
  },
  {
    id: 6,
    title: "지금이 제철, 무화과 디저트 맛집",
    author: "From. 핸디레터 MJ 에디터",
    imageUrl: cardBg1,
  },
];

// --- Mock Data for Section 2: Success Stories ---
const successCards: CardData[] = [
  {
    id: 7,
    title: "핸디무화과 대표님께서 1년만에 매출이 8배 늘어난 이유",
    author: "From. 핸디레터",
    imageUrl: cardBg1,
  },
  {
    id: 8,
    title: "핸디무화과 대표님께서 1년만에 매출이 8배 늘어난 이유",
    author: "From. 핸디레터",
    imageUrl: cardBg1,
  },
  {
    id: 9,
    title: "핸디무화과 대표님께서 1년만에 매출이 8배 늘어난 이유",
    author: "From. 핸디레터",
    imageUrl: cardBg1,
  },
  {
    id: 10,
    title: "핸디무화과 대표님께서 1년만에 매출이 8배 늘어난 이유",
    author: "From. 핸디레터",
    imageUrl: cardBg1,
  },
  {
    id: 11,
    title: "핸디무화과 대표님께서 1년만에 매출이 8배 늘어난 이유",
    author: "From. 핸디레터",
    imageUrl: cardBg1,
  },
  {
    id: 12,
    title: "핸디무화과 대표님께서 1년만에 매출이 8배 늘어난 이유",
    author: "From. 핸디레터",
    imageUrl: cardBg1,
  },
  // ... repeat for 3 more cards if needed for the grid
];


const LandingPage = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center  pb-[100px]">
      
      {/* 1. Top Subscription Banner (Green Section) */}
      <SubscriptionBanner />

      {/* Spacer */}
           <div className="h-20"></div>
      
      {/* 2. NEW: Featured Story Component */}
      <FeaturedStory 
        imageUrl={storyImg} // Replace with your building image
        title={`시내 한가운데에서 간편하게 만날 수 있는\n면세점이 있다고? 롯데면세점 명동본점, 직접 다녀왔어요.`}
        description="넉넉하게 공항에 도착했지만 짐 부치고 하다 보면 시간이 없어서 쇼핑도 못 하고 허겁지겁 비행기에 오른 적, 한 번씩 있을 텐데요. 시간에 쫓기는 공항면세점과 달리, 시내면세점은 여유롭게 쇼핑을 즐길 수 있어요. 비행기 티켓 및 여권 정보만 있다면 출국 90일 전부터 쇼핑을 할 수 있기 때문."
        author="From. 핸디레터 MJ 에디터"
      />

      <div className="h-20"></div>

      {/* 2. Section 1: Local Brands */}
      <HomeSection 
        title="깐깐한 핸디 에디터들이 직접 뽑은!"
        highlightText=" 숨겨진 로컬 브랜드"
        cards={localBrandCards}
        buttonText="또다른 숨겨진 맛집, 놀거리 보러가기"
      />
       <div className="w-full px-4 mb-20">
        <PromoBanner />
      </div>

      {/* --- Section 2: Success Stories --- */}
      <HomeSection 
        title="성공한 사장님들의 성공비법은?"
        highlightText=" 브랜드의 간판 너머 이야기"
        cards={successCards} // Just showing 3 for this row example, or use full list
        buttonText="로컬브랜드 사장님들의 솔직한 이야기가 궁금하시다면?"
      />
      

    </div>
  );
};

export default LandingPage;