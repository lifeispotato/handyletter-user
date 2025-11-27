import { Link } from 'react-router-dom';
import { Button } from '../shared/components/atoms/Button'; // Reusing your Button component
import characterDuck from '../shared/assets/images/duck.png'; // Reusing the duck image
import logoUrl from '../shared/assets/images/logo.svg'; // Reusing the logo

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      
      {/* Top Logo */}
      <img 
        src={logoUrl} 
        alt="Handy Letter" 
        className="w-[120px] mb-10 opacity-50 grayscale"
      />

      {/* Main Content Container */}
      <div className="flex flex-col items-center max-w-md">
        
        {/* Duck Character Illustration */}
        <img 
          src={characterDuck} 
          alt="Page Not Found" 
          className="w-[180px] h-auto mb-8 drop-shadow-md"
        />
        
        {/* 404 Title */}
        <h1 className="font-sans font-bold text-[36px] leading-tight text-gray-7 mb-4">
          404 - 페이지를 찾을 수 없습니다.
        </h1>
        
        {/* Helpful Message */}
        <p className="font-sans text-[16px] text-gray-5 leading-relaxed mb-8">
          요청하신 페이지가 사라졌거나,<br className="hidden md:block" /> 
          잘못된 경로로 접근하셨습니다.
        </p>
        
        {/* Branded "Go Home" Button */}
        <Link to="/">
          <Button variant="primary" size="lg" className="rounded-full px-8">
            홈으로 돌아가기
          </Button>
        </Link>

      </div>

    </div>
  );
};

export default NotFoundPage;