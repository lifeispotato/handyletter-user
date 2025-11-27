import { Link } from 'react-router-dom';
import { cn } from '../../shared/lib/utils';
import logoUrl from '../../shared/assets/images/logo.svg'; 

import searchIcon from '../../shared/assets/icons/ic_24_search.svg';
import arrowRightIcon from '../../shared/assets/icons/right.svg';

interface HeaderProps {
  isLoggedIn?: boolean;
  userName?: string;
}

export const Header = ({ 
  isLoggedIn = false, 
  userName = "홍길동" // Default name from your image
}: HeaderProps) => {
  return (
    <header className="w-full h-16 bg-white flex items-center justify-center border-b border-gray-100 sticky top-0 z-50">
      <div className="w-[1150px] h-[31px] flex items-center justify-between">
        
        {/* --- LEFT SIDE (Same as always) --- */}
        <div className="flex items-center gap-10">
          <Link to="/">
            <img 
              src={logoUrl} 
              alt="Handy Letter" 
              className="w-[106px] h-[31px] object-contain"
            />
          </Link>

          <nav className="flex items-center gap-7">
            <Link to="/brand" className="text-[16px] font-medium text-gray-7 hover:text-primary transition-colors">
              오늘의 브랜드
            </Link>
            <Link to="/beyondstory" className="text-[16px] font-medium text-gray-7 hover:text-primary transition-colors">
              간판너머 이야기
            </Link>
            <Link to="/market" className="text-[16px] font-medium text-gray-7 hover:text-primary transition-colors">
              핸디 마켓
            </Link>
          </nav>
        </div>

        {/* --- RIGHT SIDE (Changes based on Variant) --- */}
        <div className="flex items-center justify-end">
          
          {isLoggedIn ? (
            /* === Variant 7: LOGGED IN STATE === */
            <div className="flex items-center gap-5">
              
              {/* 1. Logout Text */}
              <button className="text-[14px] font-medium text-gray-5 hover:text-gray-7 transition-colors cursor-pointer">
                로그아웃
              </button>

              {/* Separator */}
              <div className="w-px h-3 bg-[#E6E8EB]"></div>

              {/* 2. User Badge Button */}
              <Link 
                to="/mypage"
                className={cn(
                  "flex items-center gap-1 px-3 py-1.5 rounded-[20px]",
                  "border border-[#E6E8EB] hover:bg-gray-50 transition-colors cursor-pointer",
                  "bg-white"
                )}
              >
                <span className="text-[14px] font-semibold text-gray-7">
                  {userName}님
                </span>
                {/* Small Arrow Icon */}
                <img 
                  src={arrowRightIcon} 
                  alt="" 
                  className="w-3 h-3 opacity-60" 
                />
              </Link>
            </div>

          ) : (
            /* === Default: LOGGED OUT STATE === */
            <div className="flex items-center gap-5">
              <button className="p-1 hover:bg-gray-50 rounded-full cursor-pointer">
                <img src={searchIcon} alt="Search" className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-3 text-[14px] font-medium text-gray-7">
                <Link to="/signup" className="hover:text-primary transition-colors">
                  회원가입
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/login" className="hover:text-primary transition-colors">
                  로그인
                </Link>
              </div>
            </div>
          )}

        </div>

      </div>
    </header>
  );
};