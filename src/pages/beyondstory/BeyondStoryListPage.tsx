import { BeyondStoryBanner } from "@/features/beyondStory/components/BeyondStoryBanner";
import cardBg1 from "@/shared/assets/images/bg_card.jpg";
import cardVdeo from "@/shared/assets/images/video_card.png";
import {
  HomeSection,
  type CardData,
} from "@/widgets/HomeSection/HomeSection.tsx";
import {
  VideoCarouselSection,
  type VideoCardData,
} from "@/widgets/VideoCarouselSection/VideoCarouselSection.tsx";

// --- MOCK DATA ---
const videoCards: VideoCardData[] = Array.from({ length: 4 }).map((_, i) => ({
  id: i,
  title: "골뱅이 소면",
  viewCount: 714,
  imageUrl: cardVdeo,
}));

const beyondStoryCards: CardData[] = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  title:
    i % 2 === 0
      ? "전주 한옥마을 분위기 체험하기"
      : "지금이 제철, 무화과 디저트 맛집",
  author: "From. 핸디레터 MJ 에디터",
  imageUrl: i % 2 === 0 ? cardBg1 : cardBg1,
  badgeText: i === 0 ? "핸디 한정 판매" : undefined,
  isLiked: i === 1,
}));

const BeyondStoryListPage = () => {
  return (
    <div className="w-full bg-white pb-[100px]">
      {/* 1. Hero Banner */}
      <BeyondStoryBanner />

      <div className="h-[80px]"></div>

      {/* 2. Video Section */}
      <VideoCarouselSection
        title="📢 핸디 에디터들이 직접 인터뷰한 사장님들의 사업 스토리 영상으로 미리 보기"
        highlightText=""
        cards={videoCards}
      />

      <div className="h-[40px]"></div>

      {/* 3. Curated Section 1 */}
      <HomeSection
        title="🤫 어디에서도 말씀하신 적 없는 사장님들의 진짜 이야기"
        subtitle="사장님들께서 사업을 성공시키기까지의 과정을 핸디레터가 직접 담아봤습니다."
        // highlightText="" // No highlight in this title
        cards={beyondStoryCards}
        buttonText="전체 보러가기"
        buttonVariant="pill"
        highlightText={""}
      />
    </div>
  );
};

export default BeyondStoryListPage;
