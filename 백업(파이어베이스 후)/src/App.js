import "bootstrap/dist/css/bootstrap.min.css";
import "./Reset.css";
import "./App.css";
import NavBar from "./component/NavBar";
import { Route, Routes } from "react-router-dom";
import CommunityPage from "./pages/CommunityPage";
import WritePage from "./pages/WritePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ShelterPage from "./pages/ShelterPage";
import WishlistPage from "./pages/WishlistPage";
import Footer from "./component/Footer";
import PostPage from "./pages/PostPage";
import CommunityList from "./component/CommunityList";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import PetDetailPage from "./pages/PetDetailPage";
import ShelterDetailPage from "./pages/ShelterDetailPage";
import { useDispatch } from "react-redux";
import CommunityDetailPage from "./pages/CommunityDetailPage";

function App() {
  const dispatch = useDispatch();

  // 페이지가 이동될 때 이전 데이터 삭제
  const clearLocalStorage = () => {
    localStorage.removeItem("selectedPet");
    localStorage.removeItem("selectedShelter");
  };
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              clearLocalStorage={clearLocalStorage} // 이동 시 로컬 스토리지 삭제 함수 전달
            />
          }
        />
        <Route path="/pet/:id" element={<PetDetailPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/:id" element={<CommunityDetailPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route
          path="/shelter"
          element={
            <ShelterPage
              clearLocalStorage={clearLocalStorage} // 이동 시 로컬 스토리지 삭제 함수 전달
            />
          }
        />
        <Route
          path="/shelter/:id"
          element={
            <ShelterDetailPage
              clearLocalStorage={clearLocalStorage} // 이동 시 로컬 스토리지 삭제 함수 전달
            />
          }
        />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
