import { Link } from 'react-router-dom';
// Make sure you have this image, or use a placeholder for now
import footerLogo from '../../shared/assets/images/logo.svg'; 

export const Footer = () => {
  return (
    <footer className="w-full bg-footer-bg border-t border-footer-bg py-[60px]">
      {/* Centered Container matching Header width */}
      <div className="w-full max-w-[1150px] mx-auto flex items-start px-4">
        
        {/* --- COL 1: Logo --- */}
        <div className="mr-[60px]">
          <img 
            src={footerLogo} 
            alt="Handy Letter" 
            className="w-[106px] h-[30px] object-contain opacity-50 grayscale" 
            // Note: I added grayscale/opacity to match the "grayish" look in your image
            // If your image is already gray, remove those classes.
          />
        </div>
        
        {/* --- COL 2: Company Info --- */}
        <div className="flex flex-col gap-6">
          
          {/* Company Name */}
          <h3 className="font-semibold text-[16px] text-gray-7">
            (주) 핸디컴퍼니
          </h3>

          {/* Business Details (Gray-5) */}
          <div className="flex flex-col gap-1 text-[14px] text-gray-5 leading-normal">
            <p>
              대표자명 : 조두현 <span className="mx-1">|</span> 사업자등록번호 : 677-20-01786 <span className="mx-1">|</span> 통신판매업신고번호 : 2024-인천서구-0466호
            </p>
            <p>
              주소 : 서울특별시 강서구 양천로 424, 508, 528-529호 <span className="mx-1">|</span> 대표번호 : 010-9959-6841
            </p>
          </div>

          {/* Legal Links (Gray-7 + Bold) */}
          <div className="flex items-center gap-6 text-[14px] font-semibold text-gray-7">
            <Link to="/terms">이용약관</Link>
            <Link to="/privacy">개인정보처리방침</Link>
          </div>

          {/* Copyright (#BDBDBD) */}
          <p className="text-[12px] text-gray-3 mt-2">
            © Copyright 2024. handy. All rights reserved.
          </p>
        </div>

        {/* --- COL 3: Navigation (Right Aligned) --- */}
        <div className="ml-auto flex gap-10 text-[14px] font-medium text-gray-7">
          <Link to="/brand" className="hover:text-primary transition-colors">
            오늘의 브랜드
          </Link>
          <Link to="/beyondstory" className="hover:text-primary transition-colors">
            간판너머 이야기
          </Link>
          <Link to="/market" className="hover:text-primary transition-colors">
            핸디 마켓
          </Link>
        </div>

      </div>
    </footer>
  );
};