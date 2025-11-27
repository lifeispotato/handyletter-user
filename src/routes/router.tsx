import { createBrowserRouter } from "react-router-dom";

// Import Pages
import LandingPage from "../pages/landing/LandingPage";
import LoginPage from "../pages/auth/LoginPage";
import PasswordPage from "../pages/auth/PasswordPage";
import SavedNewslettersPage from "../pages/mypage/SavedNewslettersPage";
import PurchasedPage from "../pages/mypage/PurchasedPage";
import BrandListPage from "../pages/brand/BrandListPage";
import BrandDetailPage from "../pages/brand/BrandDetailPage";
import BeyondStoryListPage from "../pages/beyondstory/BeyondStoryListPage";
import MarketListPage from "../pages/market/MarketListPage";
import MarketDetailPage from "../pages/market/MarketDetailPage";
import PaymentPage from "../pages/market/PaymentPage";
import Layout from "../app/Layout";
import AuthLayout from "../pages/auth/AuthLayout";
import MyPageLayout from "../pages/mypage/MyPageLayout";
import NotFoundPage from "../app/NotFoundPage";

// Define Routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // <--- Layout wraps everything here
    children: [
      {
        index: true, // This means path="/"
        element: <LandingPage />,
      },
      {
        path: "/brand", // "today brand"
        element: <BrandListPage />,
      },
      {
        path: "/brand/:id", // "detail - before/after subscribe" (handled by state)
        element: <BrandDetailPage />,
      },
      {
        path: "/beyondstory", // "beyond story"
        element: <BeyondStoryListPage />,
      },
      {
        path: "/beyondstory/:id", // "detail - before/after subscribe" (handled by state)
        element: <BrandDetailPage />,
      },
      {
        path: "/market", // "핸디 마켓"
        element: <MarketListPage />,
      },
      {
        path: "/market/:id", // "detail - before/after subscribe" (handled by state)
        element: <MarketDetailPage />,
      },
      {
        path: "/market/payment", // "payment page"
        element: <PaymentPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        index: true, // ADDED THIS: Renders LoginPage at "/login"
        element: <LoginPage />,
      },
      {
        path: "password", // REMOVED SLASH: Renders at "/login/password"
        element: <PasswordPage />,
      },
    ],
  },
  {
    path: "/mypage",
    element: <MyPageLayout />,
    children: [
      {
        path: "saved", // "찜한 뉴스레터"
        element: <SavedNewslettersPage />,
      },
      {
        path: "purchased", // "구매한 체험"
        element: <PurchasedPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
