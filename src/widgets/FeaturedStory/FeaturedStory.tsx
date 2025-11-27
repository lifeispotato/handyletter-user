import { cn } from '../../shared/lib/utils';

interface FeaturedStoryProps {
  imageUrl: string;
  title: string;
  description: string;
  author: string;
  className?: string;
}

export const FeaturedStory = ({
  imageUrl,
  title,
  description,
  author,
  className
}: FeaturedStoryProps) => {
  return (
    <section className={cn("w-full max-w-7xl  flex items-center  gap-[30px]", className)}>
      
      {/* 1. Left Image (625x280) */}
      <img
        src={imageUrl}
        alt={title}
        className="w-[625px] h-[280px] rounded-[10px] object-cover shrink-0 shadow-sm"
      />

      {/* 2. Right Text Content (Frame 8157 - Width 530) */}
      <div className="w-[530px] flex flex-col gap-4 py-2.5">
        
        {/* Title */}
        <h3 className="font-sans w-full font-semibold text-[22px] leading-[34px] text-gray-7 whitespace-pre-line">
          {title}
        </h3>
        
        {/* Description Body */}
        <p className="font-sans font-regular w-[490px] text-[16px] leading-6 text-gray-7 text-justify break-keep">
          {description}
        </p>
        
        {/* Author */}
        <p className="font-sans font-semibold text-[15px] text-gray-7 mt-2">
          {author}
        </p>
      </div>

    </section>
  );
};