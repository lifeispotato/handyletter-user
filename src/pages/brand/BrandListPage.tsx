import { BrandBanner } from '../../features/brand/components/BrandBanner/BrandBanner';
import { VideoCarouselSection, type VideoCardData } from '@/widgets/VideoCarouselSection/VideoCarouselSection.tsx';
import { HomeSection, type CardData } from '@/widgets/HomeSection/HomeSection.tsx';
import cardBg1 from '@/shared/assets/images/bg_card.jpg'; 
import cardVdeo from '@/shared/assets/images/video_card.png'; 

// --- MOCK DATA ---
const videoCards: VideoCardData[] = Array.from({ length: 4 }).map((_, i) => ({
  id: i,
  title: "골뱅이 소면",
  viewCount: 714,
  imageUrl: cardVdeo,
}));

const brandCards: CardData[] = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  title: i % 2 === 0 ? "전주 한옥마을 분위기 체험하기" : "지금이 제철, 무화과 디저트 맛집",
  author: "From. 핸디레터 MJ 에디터",
  imageUrl: i % 2 === 0 ? cardBg1 : cardBg1,
  badgeText: i === 0 ? "핸디 한정 판매" : undefined,
  isLiked: i === 1,
}));

const BrandListPage = () => {
  return (
    <div className="w-full bg-white pb-[100px]">
      
      {/* 1. Hero Banner */}
      <BrandBanner />

      <div className="h-[80px]"></div>

      {/* 2. Video Section */}
      <VideoCarouselSection 
        title="핸디 에디터들이 찾은"
        highlightText=" 로컬브랜드의 현장! 영상으로 미리 보기"
        cards={videoCards}
      />

      <div className="h-[40px]"></div>

      {/* 3. Curated Section 1 */}
      <HomeSection 
      subtitle='친구 혹은 연인과 함께하기 좋은 이색적인 곳들 소개해 볼게요. '
        title="✨ 매번 뻔한 데이트 코스가 지루하다면? 특별한 경험 해보세요 "
        // highlightText="" // No highlight in this title
        cards={brandCards}
        buttonText="전체 보러가기"
        buttonVariant="pill" highlightText={''}      />

      {/* 4. Curated Section 2 */}
      <HomeSection 

      subtitle='바쁜 일상 속에서 혼자만의 쉼이 필요할 때 방문해 보세요.'
        title="🍃 혼자만의 쉼이 필요할 때 조용한 카페에 머물러 봐요"
        cards={brandCards} // Using same mock data for demo
        buttonText="전체 보러가기"
        buttonVariant="pill" highlightText={''}      />

      {/* 5. Curated Section 3 */}
      <HomeSection 
      subtitle='사람들이 잘 모르지만 정말 맛있는 숨겨진 맛집들, 소개해 볼게요.'
        title="🍱 맛보장! 핸디 에디터들이 뽑은 숨겨진 맛집 모음"
        cards={brandCards}
        buttonText="전체 보러가기"
        buttonVariant="pill" highlightText={''}      />

    </div>
  );
};

export default BrandListPage;