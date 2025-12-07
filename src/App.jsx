import React, { useState } from "react";
import LandingPage from "./LandingPage";
import NovelViewer from "./NovelViewer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  return (
    <>
      {/* LandingPage에서 onNavigate를 통해 'viewer'로 상태 변경 */}
      {currentPage === "landing" && <LandingPage onNavigate={setCurrentPage} />}

      {/* NovelViewer에서 onBack을 통해 'landing'으로 상태 변경 */}
      {currentPage === "viewer" && (
        <NovelViewer onBack={() => setCurrentPage("landing")} />
      )}

      {/* 화면 전환 애니메이션 스타일 */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
        .animate-bounce-subtle { animation: bounce 2s infinite; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-fade-in-up {
          animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </>
  );
}
