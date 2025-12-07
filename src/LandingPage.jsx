import React, { useState, useEffect } from "react";
import {
  BookOpen,
  MessageCircle,
  Heart,
  Sparkles,
  Download,
  Smartphone,
  ChevronRight,
  Star,
} from "lucide-react";
const BOOKS = [
  {
    id: 1,
    title: "바니나 바니니",
    author: "스탕달",
    tag: "로맨스 판타지",
    color: "from-rose-500 to-red-700",
    // [수정] 텍스트가 잘리지 않도록 줄바꿈 가능한 문자열로 유지
    desc: "로마 최고의 미녀와 혁명가의 치명적인 사랑",
    imageUrl: "/thumbnail/vanina_thumbnail.jpeg",
  },
  {
    id: 2,
    title: "하룻밤의 숙소",
    author: "스티븐슨",
    tag: "스릴러/느와르",
    color: "from-purple-600 to-indigo-800",
    desc: "도박과 살인, 그리고 시인의 기묘한 하룻밤",
    imageUrl: "https://placehold.co/100x133/4f46e5/ffffff?text=하룻밤",
  },
  {
    id: 3,
    title: "어느 관리의 죽음",
    author: "안톤 체호프",
    tag: "블랙 코미디",
    color: "from-blue-500 to-sky-700",
    desc: "재채기 한번에 나락으로 떨어진 관리의 이야기",
    imageUrl: "https://placehold.co/100x133/0ea5e9/ffffff?text=관리의+죽음",
  },
];

const SettingsIcon = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const PhoneMockup = () => {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[280px] shadow-xl flex flex-col overflow-hidden pointer-events-none">
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-900 relative">
        {/* Mockup 내부 콘텐츠 */}
        <div className="bg-white/90 backdrop-blur absolute top-0 w-full p-3 border-b z-10 flex justify-between items-center text-xs">
          <span className="font-bold">바니나 바니니</span>
          <SettingsIcon size={14} />
        </div>
        <div className="p-3 pt-12 space-y-4 text-[10px]">
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-rose-100 flex-shrink-0 border border-rose-200 overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="#ffe4e6" />
                <path d="M30 20 Q 50 5, 70 20 V 90 H 30 Z" fill="#09090b" />
              </svg>
            </div>
            <div className="bg-rose-50 p-2 rounded-xl rounded-tl-none border border-rose-100 max-w-[80%]">
              <span className="block font-bold text-rose-800 mb-1">바니나</span>
              당신에게 부족한 건 지위뿐이에요. 내 손과 막대한 지참금을 당신에게
              줄게요. 나와 결혼해요.
            </div>
          </div>
          <div className="bg-gray-100 p-2 rounded text-center text-gray-500 text-[9px] my-2">
            --- (바니나의 눈빛이 싸늘하게 변한다) ---
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-rose-100 flex-shrink-0 border border-rose-200 overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="#ffe4e6" />
                <path d="M30 20 Q 50 5, 70 20 V 90 H 30 Z" fill="#09090b" />
              </svg>
            </div>
            <div className="bg-white border-2 border-dashed border-gray-300 p-2 rounded-xl rounded-tl-none max-w-[80%] text-gray-500 italic">
              (독백) 조국이라고? 내가 아닌 조국을 선택하겠다고? 그가 떠나면 나를
              잊을 거야. 절대 그를 보낼 수 없어.
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default function LandingPage({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 책 클릭 핸들러: 바니나 바니니(ID: 1)만 이동
  const handleBookClick = (bookId) => {
    if (bookId === 1) {
      onNavigate("viewer");
    } else {
      // alert() 대신 커스텀 메시지를 사용합니다.
      console.log("현재 준비 중인 작품입니다. '바니나 바니니'를 선택해주세요!");
      // 사용자에게 메시지를 보여주는 UI 컴포넌트가 필요하지만, 여기서는 console.log로 대체합니다.
      // 실제 앱에서는 Modal이나 Toast 메시지를 사용하세요.
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-rose-200">
      {/* 네비게이션 바 */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}
      >
        <div className="max-w-md mx-auto px-6 flex justify-between items-center">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <BookOpen className="w-6 h-6 text-rose-600" />
            <span className="font-bold text-xl tracking-tight">
              Classic<span className="text-rose-600">Re:</span>Book
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-sm font-medium hover:text-rose-600">
              작품 목록
            </button>
            <button
              className="bg-gray-900 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-gray-800 transition-colors"
              onClick={() => console.log("앱 스토어 준비 중입니다!")}
            >
              앱 다운로드
            </button>
          </div>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section className="pt-32 pb-16 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10 -translate-x-1/3 translate-y-1/3"></div>
        <div className="max-w-md mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-xs font-bold mb-6 animate-fade-in-up">
            <Sparkles size={12} />
            <span>고전이 이렇게 재밌었어?</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4 animate-fade-in-up delay-100">
            고전 문학,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600">
              웹소설
            </span>
            로 다시 읽다
          </h1>
          <p className="text-gray-500 mb-10 text-sm leading-relaxed animate-fade-in-up delay-200">
            읽다 포기한 명작들, 이제 채팅형 소설로 즐기세요.
            <br />
            지문은 깊이 있게, 대사는 생동감 있게.
          </p>

          {/* 메인 버튼: 바니나 바니니 뷰어로 바로 이동 */}
          <button
            onClick={() => onNavigate("viewer")}
            className="w-full md:w-auto px-8 bg-gradient-to-r from-rose-600 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-rose-500/30 transition-all transform hover:scale-105 flex items-center justify-center gap-2 animate-fade-in-up delay-300"
          >
            <BookOpen size={20} />
            무료로 읽기 시작
          </button>

          {/* 폰 목업 클릭 시 이동 */}
          <div
            onClick={() => onNavigate("viewer")}
            className="relative z-10 mt-10 animate-fade-in-up delay-300 transform hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
          >
            <PhoneMockup />
            <div className="absolute top-1/2 -right-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 animate-bounce">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span className="text-xs font-bold">몰입감 최고!</span>
              </div>
            </div>
            <div className="absolute bottom-1/3 -left-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 animate-pulse">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-bold">대화형 뷰어</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 인기 연재작 섹션 */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold">인기 연재작</h2>
          </div>
          <div className="space-y-4">
            {/* 책 목록 카드: ID에 따라 분기 처리 */}
            {BOOKS.map((book) => (
              <div
                key={book.id}
                onClick={() => handleBookClick(book.id)}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${book.color} opacity-90`}
                ></div>
                <div className="relative h-full p-6 flex flex-col justify-between text-white">
                  {/* 상단 정보 영역 (태그, 제목, 작가) */}
                  <div>
                    <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-[10px] font-bold mb-2">
                      {book.tag}
                    </span>
                    <h3 className="text-xl font-bold">{book.title}</h3>
                    <p className="text-white/80 text-xs">{book.author}</p>
                  </div>

                  {/* 하단 정보 및 썸네일 영역 */}
                  <div className="flex items-end relative">
                    {/* [수정] 썸네일 영역을 absolute로 오른쪽 아래에 고정 */}
                    <div className="absolute bottom-0 right-0">
                      <div className="relative w-36 h-52 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300 transform group-hover:scale-105">
                        <img
                          src={book.imageUrl}
                          alt={`${book.title} 썸네일`}
                          className="w-full h-full object-cover"
                          // 이미지 로드 실패 시 대체 텍스트 표시
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://placehold.co/144x208/cccccc/333333?text=NO+IMG";
                          }}
                        />
                        {/* 마우스 오버 시 어두워지는 효과 */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                      </div>
                    </div>

                    {/* [수정] 설명 텍스트: 썸네일의 공간을 침범하지 않도록 max-w-full로 설정하고, 3줄까지 표시 허용 */}
                    {/* Tailwind의 line-clamp 플러그인이 없다고 가정하고, flex 아이템으로 남은 공간을 채우게 설정 */}
                    <div className="mr-4 pr-[150px] relative">
                      {" "}
                      {/* 썸네일 공간 확보 (w-36 = 144px + 약간의 마진) */}
                      <p
                        className="text-xs opacity-90 text-justify overflow-hidden max-w-full"
                        style={{
                          maxHeight: "48px",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          display: "-webkit-box",
                        }}
                      >
                        {book.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 푸터 섹션 */}
      <footer className="py-10 px-6 bg-gray-900 text-white text-center text-sm">
        <div className="max-w-md mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4 text-rose-400" />
            <span className="font-bold">
              Classic<span className="text-rose-400">Re:</span>Book
            </span>
          </div>
          <p className="text-gray-400">
            고전 문학을 웹소설로 재탄생 시키는 프로젝트입니다.
          </p>
          <p className="text-gray-500 pt-4">
            &copy; 2025 Classic Re:Book. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
