import { useLocation, useNavigate } from 'react-router-dom';
import { MenuItem } from '../../shared/components/molecules/MenuItem';

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  return (
    <aside className="w-[255px] flex flex-col gap-[38px]">
      
      {/* User Greeting Section (from your screenshot) */}
      <div>
        <h2 className="font-sans font-bold text-[28px] leading-[34px] text-gray-7">
          홍길동님
        </h2>
      </div>

      {/* Navigation Menu */}
      <ul className="flex flex-col gap-2">
        
        {/* Item 1: Info (Placeholder) */}
        <MenuItem 
          label="내 정보" 
          isActive={path === '/mypage/info'} 
          onClick={() => navigate('/mypage/info')}
        />

        {/* Item 2: Saved Newsletters */}
        <MenuItem 
          label="찜한 뉴스레터" 
          isActive={path === '/mypage/saved'} 
          onClick={() => navigate('/mypage/saved')}
        />

        {/* Item 3: Purchased Experiences */}
        <MenuItem 
          label="구매한 체험" 
          isActive={path === '/mypage/purchased'} 
          onClick={() => navigate('/mypage/purchased')}
        />

      </ul>
    </aside>
  );
};