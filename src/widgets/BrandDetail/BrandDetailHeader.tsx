import { Button } from "../../shared/components/atoms/Button";
// Using standard icons or your assets
import heartIcon from "../../shared/assets/icons/heart_empty_white.svg";
// You might need a comment icon, creating a placeholder for now or use existing if you have one
import commentIcon from "../../shared/assets/icons/chat.svg"; // Using eye as placeholder for now

interface BrandDetailHeaderProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  category: string;
  date: string;
  author: string;
  likeCount: number;
  commentCount: number;
  onCommentClick?: () => void;
}

export const BrandDetailHeader = ({
  title,
  subtitle,
  imageUrl,
  category,
  date,
  author,
  likeCount,
  commentCount,
  onCommentClick,
}: BrandDetailHeaderProps) => {
  return (
    <section className="relative w-full h-[462px] flex items-center justify-center overflow-hidden">
      {/* 1. Background Image with Dark Overlay */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* 2. Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center text-white ">
        <div>
          {/* Category Badge */}
          <Button
            variant="white"
            className="text-[16px] text-gray-7 font-semibold"
          >
            {category}
          </Button>

          {/* Title */}
          <h1 className="font-sans font-bold text-[30px] leading-[54px]  drop-shadow-lg">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="font-sans font-regular text-[18px] text-gray-200 ">
            {subtitle}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-center font-medium gap-1 text-[15px] text-gray-300">
            <span>읽음 109</span>
            <span>|</span>
            <span>{date}</span>
            <span>|</span>
            <span>{author}</span>
          </div>
        </div>

        {/* Interaction Buttons */}
        <div className="flex gap-3">
          {/* Like Button */}
          <button className="flex items-center justify-center gap-0.5 px-4 py-2 h-10 min-w-[77px] rounded-[24px] bg-black/60 backdrop-blur-sm border border-white/20 hover:bg-black/80 transition-colors">
            <img src={heartIcon} className="w-4 h-4" alt="Like" />
            <span className="text-[14px] font-medium">{likeCount}</span>
          </button>

          {/* Comment Button */}
          <button
            onClick={onCommentClick}
            className="flex items-center justify-center gap-0.5 px-4 py-2 h-10 min-w-[77px] rounded-[24px] bg-black/60 backdrop-blur-sm border border-white/20 hover:bg-black/80 transition-colors"
          >
            <img src={commentIcon} className="w-4 h-4" alt="Comment" />
            <span className="text-[14px] font-medium">{commentCount}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
