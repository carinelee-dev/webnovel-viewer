import React, { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Settings,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronDown, // 추가됨
  User,
  Eye,
  Key,
  Moon,
  Heart,
  Clock,
  Flame,
  DollarSign,
  MapPin,
  Sword,
  Flag,
  Skull,
  Feather,
  Scroll,
  AlertOctagon,
  AlertTriangle,
  Mail,
  Lock,
  FileText,
  UserCheck,
  ShieldAlert,
  Gavel,
  Zap,
  Diamond,
  XCircle,
  Check, // 추가됨
} from "lucide-react";

// --- 캐릭터 데이터 (전체 등장인물 통합) ---
const CHARACTERS = {
  바니나: {
    name: "바니나 바니니",
    color: "#be123c",
    icon: "/icons/vanini_icon.png",
    avatar: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-rose-50">
        <circle cx="50" cy="50" r="45" fill="#ffe4e6" />
        <path d="M30 20 Q 50 5, 70 20 V 90 H 30 Z" fill="#09090b" />
        <path
          d="M30 60 Q 50 90, 70 60"
          fill="none"
          stroke="#be123c"
          strokeWidth="2"
        />
        <path
          d="M35 50 L 45 52 M 55 52 L 65 50"
          stroke="#000"
          strokeWidth="2"
        />
        <path
          d="M45 70 Q 50 72, 55 70"
          fill="none"
          stroke="#000"
          strokeWidth="1"
        />
      </svg>
    ),
  },
  피에트로: {
    name: "피에트로 미시릴리",
    color: "#15803d",
    icon: "/icons/pietro_icon.png",
    avatar: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-green-50">
        <circle cx="50" cy="50" r="45" fill="#dcfce7" />
        <path d="M30 30 Q 50 15, 70 30" fill="#4b5563" />
        <path
          d="M35 45 L 45 48 M 55 48 L 65 45"
          stroke="#000"
          strokeWidth="2"
        />
        <path
          d="M40 70 Q 50 65, 60 70"
          fill="none"
          stroke="#000"
          strokeWidth="1"
        />
        <rect x="30" y="80" width="40" height="10" fill="#374151" />
        <path
          d="M30 50 Q 35 60, 30 70"
          fill="none"
          stroke="#b91c1c"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    ),
  },
  리비오: {
    name: "돈 리비오",
    color: "#eab308",
    icon: "/icons/livio_icon.png",
    avatar: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-yellow-50">
        <circle cx="50" cy="50" r="45" fill="#fef9c3" />
        <path d="M25 30 Q 50 10, 75 30" fill="#facc15" />
        <circle cx="40" cy="50" r="3" fill="#000" />
        <circle cx="60" cy="50" r="3" fill="#000" />
        <path
          d="M40 70 Q 50 80, 60 70"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  아스드루발레: {
    name: "돈 아스드루발레",
    color: "#475569",
    avatar: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-slate-100">
        <circle cx="50" cy="50" r="45" fill="#e2e8f0" />
        <path d="M30 25 Q 50 10, 70 25" fill="#94a3b8" />
        <path
          d="M25 60 Q 50 90, 75 60"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="5"
        />
        <circle cx="40" cy="50" r="2" fill="#000" />
        <circle cx="60" cy="50" r="2" fill="#000" />
      </svg>
    ),
  },
  총독: {
    name: "카탄차라 몬시뇰",
    color: "#7f1d1d",
    icon: "/icons/monsignor_icon.png",
    avatar: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-red-100">
        <circle cx="50" cy="50" r="45" fill="#fca5a5" />
        <path d="M30 20 H 70 V 40 H 30 Z" fill="#b91c1c" />
        <path
          d="M25 60 Q 50 80, 75 60"
          fill="none"
          stroke="#991b1b"
          strokeWidth="2"
        />
        <circle cx="40" cy="50" r="2" fill="#000" />
        <circle cx="60" cy="50" r="2" fill="#000" />
      </svg>
    ),
  },
  외국인들: {
    name: "외국인들",
    color: "#64748b",
    avatar: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-gray-100">
        <circle cx="50" cy="50" r="45" fill="#f1f5f9" />
        <circle cx="35" cy="45" r="2" fill="#000" />
        <circle cx="65" cy="45" r="2" fill="#000" />
        <path
          d="M40 70 Q 50 80, 60 70"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  "낯선 이": {
    name: "???",
    color: "#9ca3af",
    avatar: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-gray-200">
        <circle cx="50" cy="50" r="45" fill="#e5e7eb" />
        <path d="M30 30 Q 50 10, 70 30" fill="#d1d5db" />
        <circle cx="35" cy="45" r="2" fill="#9ca3af" />
        <circle cx="65" cy="45" r="2" fill="#9ca3af" />
        <path
          d="M40 70 Q 50 75, 60 70"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  의사: {
    name: "의사",
    color: "#94a3b8",
    avatar: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-slate-200">
        <circle cx="50" cy="50" r="45" fill="#e2e8f0" />
        <path d="M30 40 H 70 V 60 H 30 Z" fill="#94a3b8" opacity="0.5" />
        <path d="M50 30 V 70 M 30 50 H 70" stroke="#64748b" strokeWidth="8" />
        <circle cx="50" cy="50" r="3" fill="#fff" />
      </svg>
    ),
  },
  "보나파르트(회상)": {
    name: "나폴레옹",
    color: "#1e40af",
    avatar: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-blue-100">
        <circle cx="50" cy="50" r="45" fill="#dbeafe" />
        <path d="M20 40 Q 50 10, 80 40" fill="#1e3a8a" />
        <path d="M35 60 L 65 60" stroke="#000" strokeWidth="2" />
      </svg>
    ),
  },
  하녀: {
    name: "옛 하녀",
    color: "#78716c",
    avatar: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-stone-100">
        <circle cx="50" cy="50" r="45" fill="#e7e5e4" />
        <path d="M30 30 Q 50 10, 70 30" fill="#a8a29e" />
        <circle cx="40" cy="50" r="2" fill="#000" />
        <circle cx="60" cy="50" r="2" fill="#000" />
        <path
          d="M40 75 Q 50 80, 60 75"
          fill="none"
          stroke="#000"
          strokeWidth="1"
        />
      </svg>
    ),
  },
  특사: {
    name: "추기경 특사",
    color: "#7f1d1d",
    avatar: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-red-50">
        <circle cx="50" cy="50" r="45" fill="#fecaca" />
        <path d="M30 20 H 70 V 40 H 30 Z" fill="#991b1b" />
        <path
          d="M30 60 Q 50 50, 70 60"
          fill="none"
          stroke="#000"
          strokeWidth="1"
        />
        <circle cx="40" cy="50" r="2" fill="#000" />
        <circle cx="60" cy="50" r="2" fill="#000" />
      </svg>
    ),
  },
  하인: {
    name: "카르보나리 하인",
    color: "#475569",
    avatar: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-slate-200">
        <circle cx="50" cy="50" r="45" fill="#cbd5e1" />
        <path d="M30 30 Q 50 10, 70 30" fill="#475569" />
        <path
          d="M35 50 L 45 52 M 55 52 L 65 50"
          stroke="#000"
          strokeWidth="2"
        />
        <path
          d="M40 70 Q 50 65, 60 70"
          fill="none"
          stroke="#000"
          strokeWidth="1"
        />
      </svg>
    ),
  },
  교황: {
    name: "교황",
    color: "#facc15",
    avatar: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-yellow-100">
        <circle cx="50" cy="50" r="45" fill="#fef08a" />
        <path
          d="M25 20 H 75 V 50 H 25 Z"
          fill="#fff"
          stroke="#ca8a04"
          strokeWidth="2"
        />
        <path d="M50 10 V 20" stroke="#ca8a04" strokeWidth="2" />
        <circle cx="40" cy="60" r="2" fill="#000" />
        <circle cx="60" cy="60" r="2" fill="#000" />
      </svg>
    ),
  },
  간수: {
    name: "간수",
    color: "#475569",
    avatar: (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-gray-300">
        <circle cx="50" cy="50" r="45" fill="#9ca3af" />
        <path d="M30 30 H 70 V 45 H 30 Z" fill="#374151" />
        <path
          d="M35 60 L 45 62 M 55 62 L 65 60"
          stroke="#000"
          strokeWidth="2"
        />
        <rect x="40" y="80" width="20" height="10" fill="#000" />
      </svg>
    ),
  },
};

// --- 스토리 데이터 (1~10화 완결) ---
const EPISODES = {
  1: [
    { type: "header", text: "제1화: 로마의 무도회와 탈옥수" },
    {
      type: "narrative",
      text: "1820년대 어느 봄날 저녁, 로마 전체가 들썩였다. 유명한 은행가 B 공작이 베네치아 광장에 있는 자신의 새로운 궁전에서 무도회를 열었기 때문이다.",
    },
    {
      type: "narrative",
      text: "인파는 엄청났다. 금발의 도도한 영국 미녀들도 이 무도회에 참석하는 영광을 간청하여 떼를 지어 도착했다. 로마 최고의 미녀들이 그녀들과 아름다움을 겨루었다.",
    },
    { type: "effect", text: "✨ 바니나 바니니 등장 ✨" },
    { type: "illustration", src: "/illustrations/episode1.jpeg" },
    {
      type: "narrative",
      text: "그때, 칠흑 같은 머리카락과 불타는 눈동자가 로마인임을 웅변하는 한 소녀가 아버지의 에스코트를 받으며 들어섰다. 모든 시선이 그녀를 쫓았다. 바니나 바니니 공녀였다.",
    },
    {
      type: "dialogue",
      speaker: "외국인들",
      text: "유럽 어떤 왕의 축제도 이 근처에는 못 미치겠군.",
    },
    {
      type: "narrative",
      text: "외국인들은 들어서자마자 무도회의 화려함에 눈에 띄게 감탄했다. B 공작은 오직 예쁜 여자들만 초대했고, 그날 저녁 그는 성공했다.",
    },
    {
      type: "narrative",
      text: "그토록 많은 뛰어난 여인들 중에서 누가 가장 아름다운지 결정하기란 어려운 일이었다. 하지만 마침내 검은 머리에 불타는 눈을 가진 소녀, 바니나 바니니 공녀가 무도회의 여왕으로 선포되었다.",
    },
    {
      type: "narrative",
      text: "그녀는 리비오 사벨리라는 젊은이를 괴롭히는 데서 더 큰 즐거움을 느끼는 듯했다. 그는 로마에서 가장 화려한 청년이었고, 게다가 그 또한 공작이었다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "(독백) 만약 저 사람에게 소설책을 한 권 쥐여주면 20페이지도 못 가서 머리가 아프다며 책을 던져버릴 위인이야.",
    },
    { type: "narrative", text: "그것은 바니나의 눈에 큰 단점이었다." },
    { type: "effect", text: "🚨 긴급 속보: 산탄젤로 성 탈옥 발생 🚨" },
    {
      type: "narrative",
      text: "자정 무렵, 한 가지 소식이 무도회장에 퍼지며 큰 소동이 일어났다. 산탄젤로 성에 갇혀 있던 젊은 카르보나리(이탈리아의 비밀 결사단) 당원이 바로 그날 밤 변장을 하고 탈출했다는 것이다.",
    },
    {
      type: "narrative",
      text: "낭만적인 대담함이 지나쳤던 그는 감옥의 마지막 경비 구역에 도착했을 때 단검으로 병사들을 공격했다. 그러나 그 자신도 부상을 입었다.",
    },
    {
      type: "narrative",
      text: "이 일화가 전해질 때, 방금 바니나와 춤을 추고 난 돈 리비오 사벨리는 그녀의 우아함과 승리에 눈이 멀어, 거의 사랑에 미친 사람처럼 그녀를 자리로 에스코트하며 물었다.",
    },
    {
      type: "dialogue",
      speaker: "리비오",
      text: "도대체 어떤 사람이 당신 마음에 들 수 있겠습니까?",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "방금 탈출했다는 그 젊은 카르보나리 당원이죠. 적어도 그는 태어나는 수고 이상의 무언가를 해냈으니까요.",
    },
  ],
  2: [
    { type: "header", text: "제2화: 다락방의 비밀" },
    {
      type: "narrative",
      text: "돈 아스드루발레 공작이 딸에게 다가왔다. 그는 부자였지만 지난 20년 동안 집사와 정산 한 번 제대로 한 적이 없었고, 집사는 공작의 수입을 공작에게 다시 아주 높은 이자로 빌려주곤 했다.",
    },
    {
      type: "narrative",
      text: "거리에서 그를 만난다면 늙은 배우로 착각했을 테지만, 그의 손에 커다란 다이아몬드가 박힌 반지가 대여섯 개나 끼워져 있다는 사실은 눈치채지 못했을 것이다.",
    },
    {
      type: "narrative",
      text: "그의 두 아들은 예수회에 들어갔다가 나중에 미쳐서 죽었다. 그는 아들을 잊었지만, 외동딸 바니나가 결혼하려 하지 않는 것에는 속을 태웠다. 그녀는 열아홉 살이었고, 가장 화려한 혼처들을 거절해왔다.",
    },
    {
      type: "dialogue",
      speaker: "아스드루발레",
      text: "(독백) 도대체 왜 결혼을 안 하겠다는 거냐? 로마 최고의 신랑감들이 줄을 섰는데.",
    },
    { type: "effect", text: "📅 다음 날 아침" },
    {
      type: "narrative",
      text: "무도회 다음 날, 바니나는 세상에서 가장 부주의해서 평생 열쇠 한번 챙겨본 적 없던 아버지가 궁전 3층의 방들로 이어지는 작은 계단 문을 매우 신중하게 잠그는 것을 목격했다. 그 방들의 창문은 오렌지 나무로 장식된 테라스를 향해 있었다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "(독백) 아버지가 열쇠를 챙기다니? 평생 없던 일인데.",
    },
    {
      type: "narrative",
      text: "바니나는 로마 시내에 볼일을 보러 나갔다. 돌아오는 길에 정문이 조명 장식 준비로 막혀 있어 마차는 뒤쪽 뜰로 들어갔다. 바니나가 고개를 들어보니, 아버지가 그토록 조심스레 잠갔던 방 중 하나의 창문이 열려 있는 것이 아닌가.",
    },
    {
      type: "narrative",
      text: "그녀는 동행을 따돌리고 궁전 꼭대기로 올라가 오렌지 나무 테라스가 보이는 작은 격자 창을 찾아냈다. 그녀가 봤던 열린 창문이 바로 옆에 있었다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "(독백) 그 방에는 분명 누군가 있어. 하지만 누구일까?",
    },
    { type: "effect", text: "🗝️ 다음 날: 열쇠 확보" },
    {
      type: "narrative",
      text: "다음 날, 바니나는 오렌지 나무 테라스로 통하는 작은 문 열쇠를 구하는 데 성공했다. 그녀는 살금살금 아직 열려 있는 창문으로 다가갔다. 덧창이 가려져 있었다.",
    },
    {
      type: "narrative",
      text: "방 안에는 침대가 있었고 누군가 누워 있었다. 처음에는 물러나려 했으나, 의자 위에 여자의 드레스가 던져져 있는 것을 보았다.",
    },
    {
      type: "narrative",
      text: "침대의 인물을 자세히 보니 금발에 매우 젊어 보였다. 그녀는 여자가 틀림없다고 확신했다. 의자에 던져진 드레스는 피로 얼룩져 있었고, 탁자 위에 놓인 여자의 구두에도 피가 묻어 있었다.",
    },
    {
      type: "narrative",
      text: "낯선 이가 움직이자 바니나는 그녀가 다쳤다는 것을 알았다. 피 얼룩진 큰 천이 가슴을 덮고 있었는데, 리본으로만 고정되어 있어 의사가 처치한 솜씨가 아니었다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "(독백) 세상에, 의사도 없이 저런 상태로...",
    },
    {
      type: "narrative",
      text: "바니나는 아버지가 매일 4시쯤 방에 틀어박혀 있다가 낯선 이를 보러 가고, 금방 내려와 마차를 타고 비텔레스키 백작 부인을 방문한다는 것을 알아챘다. 아버지가 나가자마자 바니나는 낯선 이를 볼 수 있는 작은 테라스로 올라갔다.",
    },
    {
      type: "narrative",
      text: "이 불행한 젊은 여인에 대해 동정심이 강하게 일었다. 그녀는 사연을 짐작해 보려 했다. 의자에 놓인 피 묻은 드레스는 단검에 찔린 듯 구멍이 나 있었다. 찢어진 곳을 셀 수 있을 정도였다.",
    },
    {
      type: "narrative",
      text: "하루는 낯선 이를 더 분명히 볼 수 있었는데, 푸른 눈으로 하늘을 응시하며 기도하는 듯했다. 이내 그 아름다운 눈에 눈물이 고였다. 젊은 공녀는 말을 걸고 싶은 것을 간신히 참았다.",
    },
    {
      type: "illustration",
      src: "/illustrations/episode2.png",
    },
  ],
  3: [
    { type: "header", text: "제3화: 위험한 고백" },
    {
      type: "narrative",
      text: "다음 날 바니나는 용기를 내어 아버지가 오기 전에 작은 테라스에 숨었다. 그녀는 돈 아스드루발레가 낯선 이의 방으로 들어가는 것을 보았다. 그는 음식이 든 작은 바구니를 들고 있었다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "(독백) 저 불쌍한 여자는 아주 무서운 적들을 가진 게 틀림없어. 평소 그렇게 부주의한 아버지가 아무도 믿지 못하고 매일 120개의 계단을 오르는 수고를 하다니.",
    },
    { type: "effect", text: "⚡ 시선 교차 ⚡" },
    {
      type: "narrative",
      text: "어느 날 저녁, 바니나가 낯선 이의 창문 쪽으로 살며시 고개를 내밀었을 때 눈이 마주쳤고, 모든 것이 들통났다. 바니나는 무릎을 꿇고 외쳤다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "당신을 사랑해요. 당신을 돕고 싶어요!",
    },
    { type: "narrative", text: "낯선 이는 들어오라고 손짓했다." },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "정말 죄송해요! 제 어리석은 호기심이 얼마나 불쾌하셨을까요! 비밀을 지킬게요. 원하신다면 다시는 오지 않겠습니다.",
    },
    {
      type: "dialogue",
      speaker: "낯선 이",
      text: "당신을 보고 기쁘지 않을 사람이 누가 있겠어요? 이 궁전에 사십니까?",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "물론이죠. 저는 바니나, 돈 아스드루발레의 딸입니다.",
    },
    {
      type: "narrative",
      text: "낯선 이는 놀란 듯 그녀를 바라보더니 얼굴을 붉히며 덧붙였다.",
    },
    {
      type: "dialogue",
      speaker: "낯선 이",
      text: "매일 와주셨으면 좋겠군요. 하지만 공작님께는 비밀로 해주십시오.",
    },
    {
      type: "narrative",
      text: "바니나의 심장이 빠르게 뛰었다. 낯선 이의 태도는 매우 기품 있어 보였다. 이 불쌍한 젊은 여인은 틀림없이 어떤 권력자의 심기를 거스른 게 분명했다.",
    },
    {
      type: "narrative",
      text: "낯선 이는 어깨에 상처를 입었는데 가슴까지 찔려 고통이 심하다고 말했다. 종종 입안 가득 피가 고인다고도 했다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "그런데 외과 의사도 없단 말이에요?",
    },
    {
      type: "dialogue",
      speaker: "낯선 이",
      text: "아시다시피, 로마의 의사들은 치료하는 모든 상처에 대해 경찰에 보고해야 합니다. 공작님께서 친히 제 상처를 저 천으로 감싸주신 겁니다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "이름을 알 수 있다면 기쁘겠어요.",
    },
    {
      type: "dialogue",
      speaker: "낯선 이",
      text: "클레멘타인이라고 부릅니다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "그럼, 사랑하는 클레멘타인, 내일 5시에 다시 올게요.",
    },
    { type: "effect", text: "🚑 상태 악화" },
    {
      type: "narrative",
      text: "다음 날, 바니나는 새 친구의 상태가 매우 나빠진 것을 발견했다.",
    },
    { type: "dialogue", speaker: "바니나", text: "의사를 모셔와야겠어요." },
    {
      type: "dialogue",
      speaker: "낯선 이",
      text: "차라리 죽는 게 낫습니다. 은인들을 위험에 빠뜨릴 순 없어요.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "로마 총독이신 사벨리 카탄차라 몬시뇰의 주치의는 우리 하인의 아들이에요. 그는 우리에게 헌신적이고, 그 위치라면 누구도 두려워하지 않아요. 제가 그를 부르겠어요.",
    },
    {
      type: "dialogue",
      speaker: "낯선 이",
      text: "의사는 필요 없어요. 그냥 와서 저를 봐주세요. 신께서 저를 부르신다면, 당신 품에서 행복하게 죽겠습니다.",
    },
    { type: "narrative", text: "다음 날, 낯선 이는 더 악화되었다." },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "나를 사랑한다면, 의사를 만나세요.",
    },
    {
      type: "dialogue",
      speaker: "낯선 이",
      text: "그가 오면, 내 행복은 끝입니다.",
    },
    {
      type: "narrative",
      text: "말없이 낯선 이는 그녀를 붙잡고 손에 입을 맞추었다. 긴 침묵이 흘렀다. 낯선 이의 눈에 눈물이 가득했다. 마침내 그녀는 바니나의 손을 놓고, 죽으러 가는 사람 같은 표정으로 말했다.",
    },
    { type: "effect", text: "🚨 충격적인 진실 🚨" },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "고백할 게 있습니다. 그저께 제가 클레멘타인이라고 한 건 거짓말이었어요. 저는 불행한 카르보나리 당원입니다...",
    },
    { type: "narrative", text: "바니나는 놀라서 의자를 박차고 일어섰다." },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "압니다. 이 고백으로 인해 저를 삶에 붙들어매던 유일한 좋은 것을 잃게 되리라는 것을. 하지만 당신을 속이는 건 비겁한 짓입니다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "제 이름은 피에트로 미시릴리, 열아홉 살입니다. 아버지는 산탄젤로 인 바도의 가난한 외과 의사이고, 저는 카르보나리입니다.",
    },
    {
      type: "narrative",
      text: "그는 자신이 13개월간 지하 감옥에 갇혀 있다가 여자 옷을 입고 탈출한 경위, 경솔하게 간수의 뺨을 때린 일, 그리고 추격 끝에 비텔레스키 백작 부인의 정원으로 뛰어든 이야기를 털어놓았다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "어쨌든, 이름을 입에 올려선 안 될 그분이 제 목숨을 구했습니다. 병사들이 저를 잡으러 집으로 들어왔을 때, 당신의 아버지가 마차로 저를 빼내셨습니다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "몸이 아주 안 좋습니다. 저는 절망 속에 죽어갈 겁니다. 당신을 다시는 보지 못할 테니까요.",
    },
    {
      type: "narrative",
      text: "바니나는 참을성 있게 듣다가 급히 밖으로 나갔다. 미시릴리는 그녀의 아름다운 눈에서 어떤 연민도 찾을 수 없었다. 오직 상처받은 오만한 성격의 표정뿐이었다.",
    },
    {
      type: "illustration",
      src: "/illustrations/episode3.jpeg",
    },
  ],
  4: [
    { type: "header", text: "제4화: 오만의 몰락" },
    {
      type: "narrative",
      text: "밤에 의사가 나타났다. 혼자였다. 미시릴리는 절망했다. 다시는 바니나를 보지 못할까 두려웠다. 그는 의사에게 질문했지만, 의사는 피를 뽑을 뿐 대답하지 않았다. 며칠 동안 같은 침묵이 이어졌다.",
    },
    {
      type: "narrative",
      text: "피에트로의 눈은 바니나가 들어오곤 했던 테라스 창문을 떠나지 않았다. 그는 매우 불행했다. 한번은 자정 무렵, 테라스의 어둠 속에서 누군가를 본 것 같았다. 바니나였을까?",
    },
    { type: "effect", text: "🌙 한밤중의 테라스" },
    {
      type: "narrative",
      text: "바니나는 매일 밤 와서 젊은 카르보나리의 창문에 뺨을 대고 있었다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "(독백) 그에게 말을 걸면 난 끝장이야! 아니, 다시는 그를 봐선 안 돼!",
    },
    {
      type: "narrative",
      text: "이렇게 결심했지만, 그녀는 자신도 모르게 그를 여자로 착각했을 때 품었던 애정을 떠올렸다. 그토록 달콤했던 친밀함 뒤에 그를 잊어야 하다니! 이성적인 순간에 바니나는 자신의 생각이 변해버린 것에 겁이 났다.",
    },
    {
      type: "narrative",
      text: "미시릴리가 이름을 밝힌 이후로, 그녀가 생각하곤 했던 모든 것들이 베일에 싸인 듯 아주 멀게 느껴졌다.",
    },
    {
      type: "narrative",
      text: "일주일이 채 지나지 않아, 바니나는 창백하게 떨며 의사와 함께 젊은 카르보나리의 방으로 들어왔다. 그녀는 공작을 설득해 하인이 그를 대신하게 하라고 말하러 온 것이었다. 그녀는 10초도 머물지 않았다.",
    },
    {
      type: "narrative",
      text: "하지만 며칠 후 그녀는 인도주의적 차원에서 의사와 다시 왔다. 어느 날 밤, 미시릴리가 많이 호전되어 더 이상 생명을 걱정할 핑계가 없어졌음에도 그녀는 감히 혼자 찾아왔다.",
    },
    {
      type: "narrative",
      text: "미시릴리는 그녀를 보고 더할 나위 없이 행복했지만, 사랑을 숨기려 했다. 무엇보다 그는 남자로서의 존엄을 잊고 싶지 않았다.",
    },
    {
      type: "narrative",
      text: "얼굴을 붉히며 사랑의 말을 듣게 될까 두려워하며 들어온 바니나는, 고귀하고 헌신적이지만 전혀 다정하지 않은 그의 우정 어린 태도에 당황했다. 그녀는 그가 붙잡지도 않는데 방을 나갔다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "(독백) 그토록 오만했던 내가 이런 꼴이라니... 나 혼자만 사랑에 빠진 건 아닐까?",
    },
    {
      type: "narrative",
      text: "그녀는 쾌활한 척, 심지어 차가운 척하며 방문 횟수를 줄였지만, 젊은 환자를 보러 가는 것을 멈출 수는 없었다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "(독백) 그녀가 일주일 동안 나를 보러 오지 않는 일이 생기지 않는 한, 절대 사랑을 입에 올리지 않겠어.",
    },
    {
      type: "narrative",
      text: "젊은 공녀의 자존심은 한 걸음 한 걸음마다 저항했다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "(독백) 좋아. 내가 그를 보는 건 나를 위해서야. 내 즐거움을 위해서라고. 그에게 끌린다는 건 절대 인정하지 않을 거야.",
    },
    { type: "effect", text: "💘 항복 선언" },
    {
      type: "illustration",
      src: "/illustrations/episode4.jpeg",
    },
    {
      type: "narrative",
      text: "어느 날 밤, 하루 종일 그를 미워하며 평소보다 더 차갑고 엄하게 대하겠다고 다짐했던 그녀는, 그에게 사랑한다고 말해버렸다. 곧 그녀는 그에게 거절할 것이 아무것도 남지 않게 되었다.",
    },
    {
      type: "narrative",
      text: "그녀의 어리석음은 컸지만, 바니나가 완벽하게 행복했다는 것은 인정해야 한다. 미시릴리는 남자로서의 체면 따위는 더 이상 생각하지 않았다. 그는 열아홉 살 이탈리아인이 처음 사랑하듯 사랑했다.",
    },
    {
      type: "narrative",
      text: "그는 열정적인 사랑의 모든 망설임을 가지고 있었고, 심지어 그녀가 자신을 사랑하게 만들기 위해 썼던 전략까지도 이 오만한 공녀에게 고백했다. 그는 자신의 행복이 넘쳐나는 것에 놀랐다.",
    },
    { type: "effect", text: "⏳ 4개월 후" },
    {
      type: "narrative",
      text: "4개월이 너무나 빨리 지나갔다. 어느 날 의사가 환자에게 다 나았다고 알렸다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "(독백) 이제 어떻게 해야 하지? 로마 최고의 미녀 집 지붕 아래 숨어 지내야 하나? 나를 열세 달이나 햇빛도 못 보게 가뒀던 저 비열한 폭군들은 내 기백이 꺾였다고 생각하겠지!",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "(독백) 이탈리아여, 그대의 자식들이 고작 이 정도에 그대를 버린다면 그대는 참으로 불행하구나!",
    },
    {
      type: "narrative",
      text: "바니나는 피에트로가 영원히 그녀 곁에 머무는 것이 그의 가장 큰 행복일 거라고 믿어 의심치 않았다. 그는 너무나 행복해 보였으니까.",
    },
    {
      type: "narrative",
      text: "하지만 보나파르트 장군의 한 마디 말이 청년의 가슴에 맺혀 여성에 대한 그의 모든 행동에 영향을 미치고 있었다.",
    },
    {
      type: "narrative",
      text: "1796년 보나파르트 장군이 브레시아를 떠날 때, 성문까지 배웅 나온 관리들이 브레시아인들은 다른 어떤 이탈리아인들보다 자유를 사랑한다고 말했다.",
    },
    {
      type: "dialogue",
      speaker: "보나파르트(회상)",
      text: "그렇소. 그들은 애인에게 자유에 대해 떠벌리는 것을 좋아하지.",
    },
    { type: "narrative", text: "미시릴리는 바니나에게 다소 어색하게 말했다." },
    { type: "dialogue", speaker: "피에트로", text: "해가 지면 나가봐야겠어." },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "동트기 전에는 꼭 궁전으로 돌아와야 해요. 기다릴게요.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "동틀 무렵이면 나는 로마에서 수 마일 떨어져 있을 거야.",
    },
    { type: "narrative", text: "바니나가 차갑게 말했다." },
    { type: "dialogue", speaker: "바니나", text: "그래요? 어디로 가는데요?" },
    { type: "dialogue", speaker: "피에트로", text: "로마냐로. 복수하러." },
  ],
  5: [
    { type: "header", text: "제5화: 조국인가, 사랑인가" },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "난 부자니까, 내 무기와 돈을 좀 받아주면 좋겠어요.",
    },
    {
      type: "narrative",
      text: "미시릴리는 잠시 꼼짝 않고 그녀를 바라보다가 그녀의 품에 몸을 던졌다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "내 영혼의 영혼이여, 당신은 나로 하여금 모든 것을, 내 의무마저 잊게 만드는군. 하지만 당신의 마음이 고결할수록 나를 더 잘 이해해주어야 하오.",
    },
    {
      type: "narrative",
      text: "바니나는 하염없이 울었고, 그가 이틀 더 로마에 머물기로 합의했다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "피에트로, 당신은 종종 돈이 많은 로마의 귀족 같은 유력 인사가 오스트리아가 먼 곳에서 전쟁에 휘말렸을 때 자유를 위해 큰일을 할 수 있을 거라고 했잖아요.",
    },
    { type: "dialogue", speaker: "피에트로", text: "물론이지." },
    { type: "narrative", text: "피에트로가 놀라서 말했다." },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "그럼, 당신에겐 용기가 있고 부족한 건 지위뿐이에요. 내 손과 1년에 20만 리브르의 수입을 당신에게 줄게요. 아버지의 승낙은 내가 받아내겠어요.",
    },
    { type: "effect", text: "💍 파격적인 청혼" },
    {
      type: "narrative",
      text: "피에트로는 그녀의 발치에 몸을 던졌다. 바니나는 기쁨으로 빛났다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "당신을 열렬히 사랑하오. 하지만 나는 조국의 가난한 종이오. 이탈리아가 불행할수록 나는 더 충실해야 하오.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "돈 아스드루발레의 승낙을 얻으려면 나는 수년 동안 비굴한 연극을 해야 할 거요. 바니나, 거절하겠소.",
    },
    {
      type: "narrative",
      text: "미시릴리는 서둘러 이렇게 말해버렸다. 용기가 꺾일 것 같았기 때문이다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "내 불행은 목숨보다 당신을 더 사랑한다는 것이오. 로마를 떠나는 게 나에겐 최악의 고문이오. 아! 왜 이탈리아는 야만인들로부터 해방되지 못하는가? 그랬다면 얼마나 기쁘게 당신과 함께 배를 타고 미국으로 가서 살았겠소!",
    },
    {
      type: "narrative",
      text: "바니나는 얼어붙은 듯했다. 청혼 거절은 그녀의 자존심을 놀라게 했다. 하지만 곧 그녀는 미시릴리의 품에 안겼다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "지금처럼 당신이 소중해 보인 적이 없어요. 그래요, 나의 작은 시골 의사 선생님, 나는 영원히 당신 거예요. 당신은 우리 고대 로마인들처럼 위대한 사람이에요.",
    },
    {
      type: "narrative",
      text: "미래에 대한 생각, 이성이 제시하는 우울한 제안들은 모두 사라졌다. 완벽한 사랑의 순간이었다. 이성적인 대화가 가능해졌을 때 바니나가 말했다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "나도 당신과 거의 동시에 로마냐에 도착할 거예요. 포레타 온천으로 보내달라고 할게요. 포를리 근처 산 니콜로에 있는 우리 성에 머물 거예요...",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "거기서 당신과 평생을 보내겠소!",
    },
    {
      type: "narrative",
      text: "바니나는 방문해야 할 곳이 있었다. 그녀가 떠나자마자 미시릴리는 자신의 행동이 잔인하다고 생각하기 시작했다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "(독백) 도대체 조국이란 무엇인가? 어떤 은혜를 입어 감사해야 하거나, 감사하지 않으면 불행해지거나 저주를 퍼붓는 그런 존재가 아니지 않은가.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "(독백) 조국과 자유는 내 망토 같은 것이다. 유용하기에, 물려받지 않았다면 사야만 하는 것. 하지만 결국 나는 조국과 자유가 내게 유용하기 때문에 사랑하는 것이다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "(독백) 아, 내가 떠나면 그녀는 나를 잊을 거고, 나는 영원히 그녀를 잃게 될 거야!",
    },
    {
      type: "narrative",
      text: '한밤중에 바니나가 그를 보러 왔을 때, 그는 자신이 빠졌던 고민과, 그녀를 사랑하기 때문에 "조국"이라는 거창한 단어를 시험해 보았노라고 털어놓았다. 바니나는 매우 행복했다.',
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "(독백) 만약 그가 조국과 나 중에서 하나를 선택해야 한다면, 선택은 나일 거야.",
    },
    { type: "effect", text: "🕰️ 이별의 시간" },
    {
      type: "illustration",
      src: "/illustrations/episode5.png",
    },
    {
      type: "narrative",
      text: "이웃 교회의 시계가 3시를 쳤다. 마지막 작별의 순간이 왔다. 피에트로는 연인의 품에서 억지로 몸을 떼어냈다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "내가 가난한 여자라고 생각하고, 내 수고에 대한 보답으로 감사의 표시로 3일을 더 주세요.",
    },
    {
      type: "narrative",
      text: "미시릴리는 남았다. 마침내 그가 로마를 떠났다. 외국 대사관에서 산 여권 덕분에 그는 고향에 도착했다.",
    },
    {
      type: "narrative",
      text: "큰 환영이 있었다. 사람들은 그가 죽은 줄 알았던 것이다. 친구들은 그의 무사 귀환을 축하하며 교황령의 경찰인 카라비니에리 한두 명을 죽이려 했다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "부득이한 경우가 아니면 무기를 다룰 줄 아는 이탈리아인은 죽이지 말자. 우리나라는 행복한 영국 같은 섬나라가 아니야. 유럽 왕들의 개입에 저항하려면 군인이 필요해.",
    },
    {
      type: "narrative",
      text: "얼마 후, 카라비니에리에게 쫓기던 미시릴리는 바니나가 준 권총으로 그들 중 두 명을 죽였다. 그의 목에 현상금이 걸렸다.",
    },
    {
      type: "narrative",
      text: "바니나는 로마냐에 나타나지 않았다. 미시릴리는 자신이 잊혔다고 생각했다. 자존심이 상했다. 그는 자신과 연인을 갈라놓는 신분의 차이를 곱씹기 시작했다.",
    },
    {
      type: "narrative",
      text: "지난 행복에 대한 그리움과 마음이 약해진 순간, 그는 바니나가 무엇을 하고 있는지 보러 로마로 돌아가려는 미친 생각을 하게 되었다. 이 무모한 생각이 그가 의무라고 믿는 것을 압도하려는 찰나...",
    },
    { type: "effect", text: "🔔 이상한 종소리" },
    {
      type: "narrative",
      text: "어느 날 저녁 산악 교회의 종이 삼종기도를 알리는데, 마치 종지기가 딴생각을 하는 듯 이상하게 울렸다. 그것은 미시릴리가 로마냐에 도착하자마자 가입한 카르보나리 지부의 모임 신호였다.",
    },
    {
      type: "narrative",
      text: "그날 밤, 그들은 숲속의 한 암자에서 만났다. 매우 낙담한 채 도착한 미시릴리는 지부장이 체포되었으며, 겨우 스무 살인 자신이 1815년 뮈라 원정 때부터 음모에 가담해 온 50대들이 포함된 지부의 장으로 선출될 것이라는 소식을 들었다.",
    },
    {
      type: "narrative",
      text: "이 뜻밖의 영광에 피에트로의 심장이 뛰었다. 혼자가 되자마자 그는 자신을 잊은 로마의 젊은 귀부인을 더 이상 생각하지 않고, 오직 야만인들로부터 이탈리아를 해방시키는 일에 모든 생각을 바치기로 결심했다.",
    },
    {
      type: "narrative",
      text: "이틀 후, 미시릴리는 지부장으로서 받은 도착 및 출발 명단에서 바니나 공녀가 산 니콜로의 성에 막 도착했다는 것을 보았다. 이 이름을 읽은 것은 그의 영혼에 기쁨보다 괴로움을 더했다.",
    },
    {
      type: "narrative",
      text: "조국에 대한 충성심을 다지기 위해 그날 밤 당장 산 니콜로 성으로 달려가는 것을 참으려 애썼지만 헛수고였다. 자신이 소홀히 대하고 있는 바니나에 대한 생각 때문에 의무를 이성적으로 수행할 수 없었다.",
    },
    {
      type: "narrative",
      text: "그는 다음 날 그녀를 보았다. 그녀는 로마에서처럼 그를 사랑했다. 그녀를 결혼시키고 싶어 한 아버지가 출발을 방해했던 것이다.",
    },
    {
      type: "narrative",
      text: "그녀는 2천 세키노를 가져왔다. 이 뜻밖의 지원은 미시릴리가 새로운 직책에서 입지를 굳히는 데 놀라운 도움이 되었다. 그 돈 덕분에 그들은 코르푸에서 단검을 제작해 왔고, 정부의 스파이 노릇을 하는 본당 신부들의 명단도 입수했다.",
    },
  ],
  6: [
    { type: "header", text: "제6화: 자유를 저주하다" },
    {
      type: "narrative",
      text: "불행한 이탈리아에서 시도된 음모 중 가장 비합리적이지 않았던 계획이 최종적으로 조직된 것이 바로 이 시기였다. 결정적인 순간이 다가왔지만, 언제나 그렇듯 지도자들의 체포로 음모는 마비되었다.",
    },
    {
      type: "narrative",
      text: "바니나는 로마냐에 도착한 지 얼마 되지 않아 애국심이 연인으로 하여금 다른 모든 사랑을 잊게 만들리라는 것을 느꼈다. 로마 소녀의 자존심이 상처 입었다.",
    },
    {
      type: "narrative",
      text: "그녀는 헛되이 스스로를 타이르려 애썼다. 검은 실망감이 그녀를 사로잡았다. 그녀는 자유를 저주하게 되었다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "정말이지, 당신은 나를 남편처럼 사랑하는군요. 내가 원하는 건 그게 아니에요.",
    },
    {
      type: "narrative",
      text: "곧 그녀의 눈물이 흐르기 시작했다. 하지만 그것은 비난을 퍼부을 정도로 자신이 추락했다는 수치심의 눈물이었다. 미시릴리는 딴생각에 잠긴 사람처럼 그녀의 눈물에 반응했다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "(독백) 그를 떠나 로마로 돌아가야겠어. 내가 떠나면 그가 날 찾겠지? 하지만 그가 날 찾지 못해 슬퍼할까? 아니야...",
    },
    {
      type: "narrative",
      text: "그녀는 그토록 많은 어리석은 짓을 감수하며 사랑한 남자로부터 사랑을 얻지 못했다는 생각이 그녀의 모든 애정을 되살렸다. 그녀는 침묵을 깨고 그에게서 사랑의 말 한마디를 듣기 위해 세상의 모든 노력을 다했다.",
    },
    {
      type: "narrative",
      text: "그는 건성으로 다정한 말을 몇 마디 했지만, 정치적 계획에 대해 이야기할 때 훨씬 더 깊은 어조로 슬프게 외쳤다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "아, 이번 일이 성공하지 못하면, 정부가 이번에도 발각한다면, 나는 포기할 거야!",
    },
    { type: "effect", text: "⚡ 치명적인 결심" },
    {
      type: "narrative",
      text: "바니나는 얼어붙었다. 한 시간 넘게 그녀는 연인을 마지막으로 보고 있다는 느낌을 받고 있었다. 그의 말은 치명적인 빛이 되어 그녀의 머릿속을 스치고 지나갔다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "(독백) 카르보나리는 이미 나에게서 수천 세키노를 가져갔어. 음모에 대한 내 헌신은 의심할 여지가 없어.",
    },
    {
      type: "narrative",
      text: "바니나는 마침내 몽상에서 깨어나 피에트로에게 말했다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "산 니콜로 성에서 나와 24시간만 보내주겠어요? 오늘 저녁 모임은 당신이 없어도 되잖아요. 내일 아침 산 니콜로에서 산책해요. 당신의 흥분을 가라앉히고, 이런 중요한 시점에 필요한 냉정함을 되찾게 해줄 거예요.",
    },
    {
      type: "narrative",
      text: "피에트로는 동의했다. 바니나는 여행 준비를 위해 그를 남겨두고 나왔다. 평소처럼 그를 숨겨둔 작은 방을 잠갔다.",
    },
    {
      type: "narrative",
      text: "그녀는 결혼해서 나가 포를리에서 작은 가게를 하고 있는 예전 하녀에게 서둘러 갔다. 그 여자의 집에 도착하자마자 그녀는 방에 있던 기도서 여백에 그날 밤 카르보나리 지부가 모이는 장소를 정확히 적었다.",
    },
    { type: "effect", text: "📜 배신의 명부" },
    {
      type: "illustration",
      src: "/illustrations/episode6.png",
    },
    {
      type: "narrative",
      text: '그녀는 고발장을 이렇게 끝맺었다. "이 지부는 19명의 회원으로 구성되어 있습니다. 여기 그들의 이름과 주소가 있습니다."',
    },
    {
      type: "narrative",
      text: "미시릴리의 이름만 빼고 정확하게 명단을 적은 후, 믿을 만한 그 여자에게 말했다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "이 책을 추기경 특사에게 가져가. 적힌 내용을 읽게 하고 책을 돌려받아. 여기 10세키노야.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "만약 특사가 네 이름을 말하면 넌 죽은 목숨이지만, 특사가 방금 내가 쓴 페이지를 읽게만 한다면 넌 내 목숨을 구하는 거야.",
    },
    {
      type: "narrative",
      text: "모든 것이 완벽하게 성공했다. 특사는 겁이 많아 귀족처럼 행동하지 못했다. 그는 자신과 말하고 싶어 하는 평민 여자가 가면을 쓰고, 손을 묶는 조건으로만 들어오게 했다.",
    },
    {
      type: "narrative",
      text: "특사는 혹시 모를 독극물을 두려워하여 기도서를 멀찌감치 들고 읽었다. 그는 책을 돌려주었고 여자를 미행시키지 않았다.",
    },
    {
      type: "narrative",
      text: "연인을 떠난 지 40분도 채 안 되어, 하녀가 돌아오는 것을 본 바니나는 이제 그가 온전히 자신의 것이 되었다고 확신하며 미시릴리에게 다시 나타났다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "마을에 심상치 않은 소란이 일고 있어요. 평소에는 가지 않던 거리에 카라비니에리 순찰대가 보여요. 내 말을 듣는다면, 지금 당장 산 니콜로로 출발해요.",
    },
    {
      type: "narrative",
      text: "미시릴리는 동의했다. 그들은 마을 밖 반 킬로미터 지점에서 입이 무겁고 보수를 넉넉히 받는 측근과 함께 기다리고 있는 공녀의 마차까지 걸어갔다.",
    },
  ],
  7: [
    { type: "header", text: "제7화: 배신의 대가" },
    {
      type: "narrative",
      text: "산 니콜로 성에 도착하자, 자신이 저지른 이상한 행동에 불안해진 바니나는 연인에게 더욱 다정하게 대했다. 하지만 사랑을 말하는 자신의 모습이 연기처럼 느껴졌다.",
    },
    {
      type: "narrative",
      text: "전날 밤 배신을 저지를 때는 죄책감 따위는 잊고 있었다. 연인을 껴안으며 그녀는 생각했다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "(독백) 그가 듣는 데서 딱 한 마디만 하면, 그는 즉시 그리고 영원히 나를 혐오하게 될 텐데.",
    },
    { type: "effect", text: "🚨 비보(悲報)" },
    {
      type: "narrative",
      text: "한밤중에 바니나의 하인 중 한 명이 급히 방으로 들어왔다. 그는 카르보나리였는데, 바니나는 그 사실을 몰랐다. 그러니까 미시릴리는 그런 세세한 것까지 그녀에게 비밀로 했던 것이다. 그녀는 전율했다.",
    },
    {
      type: "narrative",
      text: "그 남자는 밤사이 포를리에 있는 카르보나리 19명의 집이 수색당했고, 그들이 모임에서 돌아오자마자 체포되었다고 미시릴리에게 알리러 온 것이었다.",
    },
    {
      type: "narrative",
      text: "기습을 당했지만 9명은 탈출했다. 카라비니에리는 10명을 요새 감옥으로 끌고 갔다. 들어가는 길에 그중 한 명이 아주 깊은 우물에 몸을 던져 자살했다.",
    },
    {
      type: "narrative",
      text: "바니나는 당황스러웠다. 다행히 피에트로는 눈치채지 못했다. 그녀의 눈에서 범죄를 읽을 수도 있었을 텐데...",
    },
    {
      type: "dialogue",
      speaker: "하인",
      text: "지금 이 순간, 포를리 수비대가 모든 거리에 저지선을 치고 있습니다. 병사들은 서로 말소리가 들릴 거리에 서 있습니다. 장교가 있는 곳을 제외하고는 길을 건널 수도 없습니다.",
    },
    {
      type: "narrative",
      text: "하인이 나간 뒤 피에트로는 생각에 잠겼으나, 잠시뿐이었다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "지금 당장 할 수 있는 건 아무것도 없어.",
    },
    {
      type: "narrative",
      text: "바니나는 죽을 것만 같았다. 연인의 시선 아래서 그녀는 떨었다.",
    },
    { type: "dialogue", speaker: "피에트로", text: "도대체 왜 그래?" },
    {
      type: "narrative",
      text: "그러고는 다른 생각을 하기 시작하며 그녀를 보지 않았다. 정오쯤 되어 그녀는 감히 이렇게 말했다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "또 다른 지부가 발각되었네요. 이제 당분간은 조용히 지내시겠죠.",
    },
    { type: "dialogue", speaker: "피에트로", text: "아주 조용히." },
    {
      type: "narrative",
      text: "미시릴리가 몸서리쳐지는 미소를 지으며 대답했다.",
    },
    { type: "effect", text: "💔 파국" },
    {
      type: "narrative",
      text: "그녀는 예수회의 스파이일지도 모르는 산 니콜로의 본당 신부를 방문해야 했다. 7시에 저녁 식사를 하러 돌아왔을 때, 연인을 숨겨둔 작은 방은 비어 있었다.",
    },
    {
      type: "narrative",
      text: "제정신이 아닌 상태로 집 안을 뒤지며 그를 찾았지만 없었다. 절망에 빠져 작은 방으로 돌아와서야 쪽지를 발견했다. 이렇게 적혀 있었다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "(쪽지) 나는 특사에게 자수하러 가오. 우리 대업에 절망했소. 하늘은 우리 편이 아니오. 누가 우리를 배신했나? 우물에 몸을 던진 그 불행한 친구가 그런 것 같소.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "(쪽지) 내 목숨이 불쌍한 이탈리아에 쓸모없으니, 나 혼자 체포되지 않은 것을 보고 동지들이 내가 그들을 팔았다고 생각하는 것은 원치 않소. 안녕.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "(쪽지) 나를 사랑한다면, 내 복수를 어떻게 할지 생각해주시오. 우리를 배신한 그 추악한 자를 파멸시키고 없애버리시오. 그가 내 아버지일지라도.",
    },
    {
      type: "narrative",
      text: "바니나는 의자에 쓰러져 반쯤 기절한 채 가장 잔인한 불행에 빠졌다. 말 한마디 할 수 없었다. 눈은 메마르고 불타올랐다.",
    },
    {
      type: "illustration",
      src: "/illustrations/episode7.png",
    },
  ],
  8: [
    { type: "header", text: "제8화: 미녀와 꼭두각시" },
    { type: "narrative", text: "마침내 그녀는 무릎을 꿇었다." },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "하느님! 제 맹세를 받아주소서. 네, 배신한 그 추악한 자를 벌하겠습니다. 하지만 피에트로가 먼저 자유를 되찾아야 합니다.",
    },
    {
      type: "narrative",
      text: "한 시간 후 그녀는 로마로 향하고 있었다. 아버지는 오랫동안 그녀에게 돌아오라고 재촉해왔다. 그녀가 없는 동안 아버지는 리비오 사벨리 왕자와의 결혼을 주선해 놓았다.",
    },
    {
      type: "narrative",
      text: "놀랍게도 그녀는 첫마디에 승낙했다. 그날 저녁 비텔레스키 백작 부인의 집에서 아버지는 돈 리비오를 거의 공식적으로 그녀에게 소개했다.",
    },
    {
      type: "narrative",
      text: "그녀는 그와 많은 이야기를 나누었다. 그는 가장 우아한 청년이었고 최고의 말을 가지고 있었다. 하지만 영리하다고는 해도 성격이 너무 가벼워 정부의 의심을 살 만한 인물은 아니라고 여겨졌다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "(독백) 먼저 이 남자의 마음을 사로잡으면, 아주 편리한 대리인으로 만들 수 있을 거야.",
    },
    {
      type: "narrative",
      text: "그가 로마 총독이자 경찰 장관인 사벨리 카탄차라 몬시뇰의 조카였기에, 스파이들도 감히 그를 미행하지 않을 것이라 추측했다.",
    },
    { type: "effect", text: "🎭 유혹과 조종" },
    {
      type: "narrative",
      text: "며칠 동안 상냥한 돈 리비오를 극진히 대접한 후, 바니나는 그에게 결코 그와 결혼하지 않을 것이라고 선언했다. 그녀 말에 따르면 그는 머리가 텅 비었다는 것이었다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "당신이 어린애가 아니라면, 삼촌의 서기들이 당신에게 비밀을 감추지 않을 거예요. 예를 들어, 최근 포를리에서 발각된 카르보나리들에 대해 어떻게 결정되었는지 같은 거요.",
    },
    {
      type: "narrative",
      text: "이틀 후 돈 리비오가 와서 포를리에서 잡힌 카르보나리들이 모두 탈출했다고 말했다. 그녀는 가장 깊은 경멸이 담긴 쓴웃음을 지으며 큰 검은 눈으로 그를 쏘아보고는, 저녁 내내 말 한마디 건네지 않았다.",
    },
    {
      type: "narrative",
      text: "이틀 뒤 돈 리비오는 얼굴을 붉히며 와서 처음에 속았음을 인정했다.",
    },
    {
      type: "dialogue",
      speaker: "리비오",
      text: "하지만 삼촌 서재의 열쇠를 구했습니다. 거기서 찾은 서류를 보니 주요 추기경들과 고위 성직자들로 구성된 위원회가 극비리에 모여 이 카르보나리들을 라벤나에서 재판할지 로마에서 재판할지 논의 중이더군요.",
    },
    {
      type: "dialogue",
      speaker: "리비오",
      text: "포를리에서 잡힌 9명의 카르보나리와 자수할 만큼 어리석었던 우두머리 미시릴리는 현재 산 레오 성에 갇혀 있습니다.",
    },
    {
      type: "narrative",
      text: "'어리석다'는 말에 바니나는 왕자를 있는 힘껏 꼬집고 싶은 마음을 간신히 참았다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "공문서를 직접 보고 싶어요. 당신과 함께 삼촌 서재에 들어가겠어요. 당신이 잘못 읽었을 수도 있잖아요.",
    },
    {
      type: "narrative",
      text: "이 말에 돈 리비오는 몸서리쳤다. 바니나는 거의 불가능한 것을 요구하고 있었다. 하지만 이 젊은 여인의 기이한 천재성은 그의 사랑을 배가시켰다.",
    },
    { type: "effect", text: "🕵️‍♀️ 남장 잠입" },
    {
      type: "illustration",
      src: "/illustrations/episode8.png",
    },
    {
      type: "narrative",
      text: "하루 이틀 후, 남장을 하고 사벨리 가문의 예쁜 제복을 입은 바니나는 경찰 장관의 가장 은밀한 서류들 속에서 30분을 보낼 수 있었다.",
    },
    {
      type: "narrative",
      text: '"미결수 피에트로 미시릴리"에 대한 일일 보고서를 발견했을 때 그녀는 전율과도 같은 기쁨을 느꼈다. 서류를 쥔 손이 떨렸다. 그 이름을 읽자마자 쓰러질 뻔했다.',
    },
    {
      type: "narrative",
      text: "로마 총독 관저를 나설 때 바니나는 돈 리비오가 포옹하는 것을 허락했다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "내가 내리는 시험을 잘 통과하고 있군요.",
    },
    {
      type: "narrative",
      text: "그런 말을 듣고 나면 젊은 왕자는 바니나를 기쁘게 하기 위해 바티칸에 불이라도 질렀을 것이다. 그날 저녁 프랑스 대사관 무도회에서 그녀는 춤을 많이 추었고, 거의 항상 돈 리비오와 함께였다.",
    },
    {
      type: "narrative",
      text: "그는 행복에 취했다. 그녀는 그가 생각할 틈을 주어서는 안 되었다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "아버지는 가끔 이상해. 오늘 아침 하인 두 명을 해고했는데, 그들이 내게 와서 사정하더군요. 한 명은 당신 삼촌인 로마 총독 밑에서 일하고 싶어 하고, 프랑스군 포병 출신인 다른 한 명은 산탄젤로 성에서 일하고 싶어 해요.",
    },
    { type: "dialogue", speaker: "리비오", text: "둘 다 내 하인으로 쓰겠소." },
    { type: "narrative", text: "젊은 왕자가 흔쾌히 말했다." },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "그게 내가 부탁한 건가요? 그 불쌍한 사람들의 청원을 토시 하나 안 틀리고 전했잖아요. 그들은 엉뚱한 게 아니라 요청한 걸 얻어야 해요.",
    },
    {
      type: "narrative",
      text: "그보다 어려운 일은 없었다. 카탄차라 몬시뇰은 결코 경솔한 사람이 아니었고, 잘 아는 하인들만 집에 들였다.",
    },
  ],
  9: [
    { type: "header", text: "제9화: 침실의 협상가" },
    {
      type: "narrative",
      text: "겉보기에 온갖 즐거움으로 가득 찬 삶 속에서, 죄책감에 시달리는 바니나는 매우 불행했다. 사건의 진행이 더딘 것이 그녀를 죽어가게 했다.",
    },
    {
      type: "narrative",
      text: "아버지의 재정 관리인이 그녀에게 돈을 구해주었다. 아버지 집을 도망쳐 로마냐로 가서 연인을 감옥에서 빼내려 시도해야 할까? 이 무모한 생각을 막 실행에 옮기려던 찰나, 우연이 그녀를 가엽게 여겼다.",
    },
    {
      type: "dialogue",
      speaker: "리비오",
      text: "미시릴리 지부의 카르보나리 10명이 로마로 이송될 예정입니다. 유죄 판결을 받은 후 로마냐에서 처형한다는 조건으로요.",
    },
    {
      type: "dialogue",
      speaker: "리비오",
      text: "그게 오늘 저녁 삼촌이 교황께 재가 받은 내용입니다. 로마에서 이 비밀을 아는 사람은 당신과 나뿐이오. 이제 만족하나요!",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "이제야 남자가 되어가는군요. 당신 초상화를 선물로 주세요.",
    },
    {
      type: "narrative",
      text: "미시릴리가 로마에 도착하기 전날, 바니나는 핑계를 만들어 치타 카스텔라나로 갔다. 그 마을 감옥은 카르보나리들이 로마냐에서 로마로 이송될 때 밤을 보내는 곳이었다.",
    },
    {
      type: "narrative",
      text: "아침에 감옥에서 나오는 미시릴리를 보았다. 그는 수레에 혼자 묶여 있었고, 창백해 보였지만 기가 꺾인 것 같지는 않았다. 한 노파가 그에게 제비꽃 다발을 던져주자 미시릴리는 미소로 감사를 표했다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "(독백) 다행이야... 아직 살아있어.",
    },
    {
      type: "narrative",
      text: "바니나는 연인을 보았다. 모든 생각이 새로워진 것 같았다. 새로운 용기가 솟았다.",
    },
    { type: "effect", text: "⚖️ 사형 판결" },
    {
      type: "narrative",
      text: "포를리 카르보나리들의 재판은 오래 걸리지 않았다. 그들의 로마 도착을 막지 못한 것에 대한 보복으로, 강경파는 그들을 재판할 위원회를 가장 야심 찬 고위 성직자들로 구성했다.",
    },
    {
      type: "narrative",
      text: "이 위원회는 경찰 장관이 주재했다. 재판관들은 사형뿐만 아니라 손목 절단 같은 잔혹한 고문까지 선고했다.",
    },
    {
      type: "narrative",
      text: "이미 부를 축적한 경찰 장관은 잘린 손목 따위는 필요 없었다. 그가 교황에게 판결문을 올렸을 때, 교황은 사형수 전원을 수년 형의 징역으로 감형했다.",
    },
    {
      type: "narrative",
      text: "단 한 사람, 피에트로 미시릴리만 제외되었다. 장관은 그 청년을 위험한 광신도로 여겼고, 게다가 앞서 언급한 두 명의 카라비니에리 살해 혐의로 이미 사형 선고를 받은 상태였기 때문이다.",
    },
    {
      type: "narrative",
      text: "바니나는 장관이 교황 알현을 마치고 돌아온 지 몇 분 만에 판결과 감형 소식을 알게 되었다.",
    },
    { type: "effect", text: "🔫 침실의 침입자" },
    {
      type: "narrative",
      text: "다음 날 카탄차라 몬시뇰은 자정 무렵 관저로 돌아왔는데 방에 하인이 보이지 않았다. 놀란 장관이 여러 번 벨을 울렸다. 마침내 늙고 멍청한 하인이 나타났다.",
    },
    {
      type: "narrative",
      text: "참다못한 장관은 혼자 옷을 벗기로 했다. 그는 문을 잠갔다. 날이 매우 더웠다. 그는 가운을 벗어 의자에 휙 던졌다. 너무 세게 던진 가운이 의자를 넘어 창문의 모슬린 커튼을 쳤고, 사람의 형상이 드러났다.",
    },
    {
      type: "illustration",
      src: "/illustrations/episode9.png",
    },
    {
      type: "narrative",
      text: "장관은 재빨리 침대로 달려가 권총을 집어 들었다. 그가 창문으로 돌아오자 제복을 입은 아주 젊은 사람이 권총을 들고 그에게 다가왔다. 이 광경에 장관은 권총을 들어 겨누었다.",
    },
    { type: "narrative", text: "막 쏘려는 순간, 젊은이가 웃으며 말했다." },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "아니, 몬시뇰, 바니나 바니니를 못 알아보십니까?",
    },
    {
      type: "dialogue",
      speaker: "총독",
      text: "이게 무슨 볼썽사나운 장난입니까?",
    },
    { type: "narrative", text: "장관이 화가 나서 되물었다." },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "우리 차분하게 얘기해요. 우선, 당신 권총엔 탄알이 없어요.",
    },
    {
      type: "narrative",
      text: "놀란 장관은 사실임을 확인했다. 그러고는 조끼 주머니에서 단검을 꺼냈다. 바니나는 매력적이고 위엄 있는 태도로 말했다.",
    },
    { type: "dialogue", speaker: "바니나", text: "앉으세요, 몬시뇰." },
    { type: "narrative", text: "그리고 그녀는 태연하게 소파에 앉았다." },
    { type: "dialogue", speaker: "총독", text: "혼자인가?" },
    { type: "dialogue", speaker: "바니나", text: "완전히 혼자예요, 맹세해요!" },
    {
      type: "narrative",
      text: "장관은 신중하게 확인했다. 방을 둘러보고 모든 곳을 살핀 뒤 바니나에게서 세 걸음 떨어진 의자에 앉았다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "제가 온건한 분의 목숨을 노릴 이유가 뭐가 있겠어요? 당신 후임으로는 자신과 타인을 파멸시킬 약하고 성급한 사람이 올 텐데요.",
    },
    {
      type: "dialogue",
      speaker: "총독",
      text: "도대체 원하는 게 뭡니까, 부인? 이런 장면은 내 취향이 아닙니다. 그만합시다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "이제 덧붙일 말은, 저보다 당신에게 더 중요한 문제입니다. 카르보나리 미시릴리의 목숨을 살려야 합니다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "그가 처형된다면 당신도 일주일을 못 넘길 거예요.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "전 이 일에 아무 이해관계가 없어요. 당신이 한탄하는 이 광란은 첫째는 제 재미를 위해서, 둘째는 제 친구인 어느 부인의 부탁을 들어주기 위해서 벌인 일이에요.",
    },
    { type: "narrative", text: "바니나가 다시 상냥함을 되찾으며 계속했다." },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "저는 곧 제 삼촌이 되실, 그리고 보아하니 가문의 운명을 크게 일으키실 훌륭한 분께 봉사하고 싶었어요.",
    },
    {
      type: "narrative",
      text: "장관은 언짢은 표정을 거두었다. 바니나의 아름다움이 이 급격한 변화에 한몫했을 것이다. 카탄차라 몬시뇰의 미녀 취향은 로마에 잘 알려져 있었고, 사벨리 가문의 하인 복장에 꼭 맞는 비단 스타킹, 붉은 조끼, 은색 끈으로 장식된 하늘색 코트를 입고 권총을 든 바니나는 황홀했다.",
    },
    {
      type: "dialogue",
      speaker: "총독",
      text: "나의 예비 조카딸, 큰 실수를 하고 있군. 이게 마지막이 아닐 거야.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "당신처럼 신중한 분이 제 비밀을 지켜주실 거라 믿어요. 특히 돈 리비오에게는요. 약속을 확실히 하기 위해, 사랑하는 삼촌, 제 친구가 보호하는 사람의 목숨을 살려주신다면 키스해 드릴게요.",
    },
    {
      type: "narrative",
      text: "곧 카탄차라 몬시뇰은 두려움 때문에 움직인다는 생각은 경멸하면서도, 미시릴리를 살리는 데 겪게 될 모든 어려움을 조카딸에게 설명하기에 이르렀다.",
    },
    {
      type: "narrative",
      text: "이야기를 나누며 장관은 바니나와 함께 방을 거닐었다. 그는 벽난로 위에 있던 레모네이드 병을 집어 크리스털 잔에 따랐다. 막 입에 대려는 순간 바니나가 잔을 가로챘고, 잠시 들고 있다가 실수인 척 정원으로 떨어뜨렸다.",
    },
    {
      type: "narrative",
      text: "잠시 후 장관이 사탕 상자에서 초콜릿을 꺼냈다. 바니나는 그것을 낚아채며 웃으며 말했다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "조심하세요. 집안의 모든 게 독이 들었어요. 그들이 당신을 죽이려 했거든요. 제가 사벨리 가문에 빈손으로 들어가지 않으려고 예비 삼촌의 유예를 얻어낸 거예요.",
    },
    {
      type: "narrative",
      text: "크게 놀란 카탄차라 몬시뇰은 조카딸에게 감사하며 미시릴리의 목숨에 대해 큰 희망을 주었다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "거래 성립이에요. 증거로 여기 보상이에요.",
    },
    { type: "narrative", text: "그녀는 그를 포옹했다. 장관은 보상을 받았다." },
    {
      type: "dialogue",
      speaker: "총독",
      text: "인정해야겠구나, 사랑하는 바니나. 난 피를 좋아하지 않아. 게다가 난 아직 젊어. 네 눈엔 아주 늙어 보이겠지만. 지금 흘린 피가 얼룩으로 남는 날을 보게 될지도 모르지.",
    },
    {
      type: "narrative",
      text: "새벽 2시 종이 울릴 때 카탄차라 몬시뇰은 바니나를 정원 쪽문까지 배웅했다.",
    },
  ],
  10: [
    { type: "header", text: "최종화: 사슬과 다이아몬드" },
    {
      type: "narrative",
      text: "이틀 후, 어떻게 해야 할지 꽤나 고심하며 교황 앞에 나타난 장관에게 교황이 말했다.",
    },
    {
      type: "dialogue",
      speaker: "교황",
      text: "더 진행하기 전에 부탁 하나 하겠소. 사형 선고를 받은 포를리 출신 카르보나리 한 명 있잖소. 그 생각 때문에 잠이 오질 않아. 그자를 살려야겠소.",
    },
    {
      type: "narrative",
      text: "장관은 교황이 마음을 굳힌 것을 보고 여러 반대 의견을 내놓다가, 결국 관례와 달리 교황이 직접 서명하는 칙령, 즉 자의 교서(motu proprio)를 작성했다.",
    },
    {
      type: "narrative",
      text: "바니나는 연인의 사면을 얻어내더라도 그들이 그를 독살하려 할지도 모른다는 생각이 들었다. 전날 저녁, 미시릴리는 그녀의 고해 신부인 아바테 카리로부터 국가지급 음식은 입에 대지 말라는 경고와 함께 작은 건빵 꾸러미를 받았다.",
    },
    {
      type: "narrative",
      text: "바니나의 운명을 결정할 날이 밝았다. 이른 아침부터 그녀는 감옥 예배당에 틀어박혔다. 그 긴 하루 동안 그녀의 마음을 뒤흔든 생각들을 누가 짐작할 수 있을까?",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "(독백) 죄를 지었다면 그것은 지나친 사랑 때문이었어. 그가 나를 용서할까?",
    },
    { type: "effect", text: "⛓️ 차가운 재회" },
    {
      type: "narrative",
      text: "모든 소리가 멈춘 지 오래였다. 바니나는 암울한 생각에 잠겨 있었다. 자정이 지나고 얼마 후, 박쥐 날갯짓 같은 작은 소리가 들린 듯했다.",
    },
    {
      type: "narrative",
      text: "그 순간 두 유령이 소리도 없이 그녀 곁에 섰다. 간수와, 사슬에 칭칭 감기다시피 한 미시릴리였다. 간수는 등불을 열어 바니나 옆 제단 난간에, 죄수가 잘 보이도록 놓았다. 그러고는 문 근처 뒤쪽으로 물러났다.",
    },
    {
      type: "narrative",
      text: "그를 안았을 때 차갑고 날카로운 사슬만 느껴졌다. 연인을 안았지만 기쁨은 없었다. 이 고통 뒤에 더 날카로운 고통이 이어졌다. 그의 반응이 너무 차가웠다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "사랑하는 친구여, 당신이 내게 품은 사랑이 유감스럽소. 아무리 찾아봐도 그 사랑을 불러일으킬 만한 장점을 내게서 찾을 수 없구려.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "부탁이니 더 기독교적인 감정으로 돌아가시오. 한때 우리를 현혹했던 환상은 잊읍시다. 나는 당신의 것이 될 수 없소.",
    },
    {
      type: "narrative",
      text: "미시릴리는 여위지는 않았지만 서른 살은 되어 보였다. 사실 죽음이 임박하자 이탈리아 해방에 대한 열정과 양립할 수 있는 모든 종교적 원칙이 젊은 카르보나리의 마음속에 되살아난 것이었다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "의무란 잔인한 것이오, 나의 친구여. 하지만 그것을 수행하는 데 고통이 없다면 영웅심이 어디 있겠소? 다시는 나를 보려 하지 않겠다고 약속해 주시오.",
    },
    {
      type: "narrative",
      text: "그는 꽉 조인 사슬이 허락하는 한도 내에서 손목을 움직여 바니나에게 손가락을 뻗었다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "당신을 아꼈던 사람으로서 조언하자면, 현명하게 처신하여 부친께서 정해주신 훌륭한 분과 결혼하시오.",
    },
    {
      type: "narrative",
      text: '바니나는 압도당했다. 그녀에게 말하는 동안 피에트로의 눈은 "조국"이라는 단어를 말할 때를 제외하고는 한 번도 빛나지 않았다.',
    },
    {
      type: "narrative",
      text: "마침내 자존심이 젊은 공녀를 구원했다. 그녀는 다이아몬드와 작은 줄(file)을 준비해 왔었다. 대답 없이 그녀는 그것들을 미시릴리에게 내밀었다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "의무감으로 받겠소. 탈출을 시도해야 하니까. 하지만 다시는 당신을 보지 않겠소. 당신의 새로운 은혜 앞에서 맹세하리다. 안녕, 바니나.",
    },
    { type: "effect", text: "🩸 최후의 고백" },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "아니요! 내가 당신을 사랑해서 무슨 짓을 했는지 알게 하고 말겠어요.",
    },
    {
      type: "narrative",
      text: "그러고는 미시릴리가 산 니콜로 성을 떠나 특사에게 자수하던 순간부터의 자신의 모든 행동을 그에게 말했다. 이야기가 끝났을 때 바니나가 말했다.",
    },
    {
      type: "dialogue",
      speaker: "바니나",
      text: "그건 아무것도 아니에요. 당신을 사랑해서 더한 일도 했어요.",
    },
    { type: "narrative", text: "그리고 그녀는 자신의 배신을 털어놓았다." },
    { type: "dialogue", speaker: "피에트로", text: "아, 괴물!" },
    {
      type: "narrative",
      text: "피에트로가 분노에 차 소리치며 그녀에게 몸을 던졌다. 사슬로 그녀를 쳐 죽일 기세였다.",
    },
    {
      type: "narrative",
      text: "그의 첫 비명에 달려온 간수가 없었다면 성공했을 것이다. 간수가 미시릴리를 붙잡았다.",
    },
    {
      type: "dialogue",
      speaker: "피에트로",
      text: "자, 괴물! 네게 빚진 건 아무것도 없어.",
    },
    {
      type: "narrative",
      text: "미시릴리가 사슬에 묶인 채 줄과 다이아몬드를 그녀에게 집어 던지며 말했다. 그리고 서둘러 멀어졌다.",
    },
    {
      type: "illustration",
      src: "/illustrations/episode10.png",
    },
    { type: "effect", text: "Epilogue" },
    {
      type: "narrative",
      text: "바니나는 완전히 짓밟힌 채 남겨졌다. 그녀는 로마로 돌아왔고, 신문에는 그녀가 방금 리비오 사벨리 왕자와 결혼했다는 소식이 실려 있다.",
    },
    {
      type: "illustration",
      src: "/illustrations/epilogue.png",
    },
  ],
};

export default function NovelViewer({ onBack }) {
  const [currentEpisode, setCurrentEpisode] = useState(1);
  const [currentLine, setCurrentLine] = useState(0);
  const [showEpisodeList, setShowEpisodeList] = useState(false); // 회차 목록 표시 여부
  const scrollRef = useRef(null);

  // 현재 에피소드의 데이터를 가져옴
  const episodeData = EPISODES[currentEpisode] || [];

  const handleNext = () => {
    // 1. 현재 에피소드 내용이 남았으면 다음 줄 보여주기
    if (currentLine < episodeData.length - 1) {
      setCurrentLine((prev) => prev + 1);
    }
    // 2. 현재 에피소드가 끝났고, 다음 에피소드가 있다면 넘어갈지 물어보기
    else if (EPISODES[currentEpisode + 1]) {
      if (
        confirm(`제${currentEpisode}화가 끝났습니다. 다음 화로 이동할까요?`)
      ) {
        setCurrentEpisode((prev) => prev + 1);
        setCurrentLine(0); // 줄 번호 초기화
      }
    }
    // 3. 더 이상 에피소드가 없다면
    else {
      alert("작품이 완결되었습니다.");
    }
  };

  const handleEpisodeChange = (epNum) => {
    setCurrentEpisode(Number(epNum));
    setCurrentLine(0);
    setShowEpisodeList(false);
  };

  // 대사나 에피소드가 바뀔 때마다 스크롤을 맨 아래로 내림
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentLine, currentEpisode]);

  return (
    <div className="min-h-screen w-full bg-slate-950 flex justify-center items-center py-0 sm:py-8">
      {/* PC에서도 모바일 비율 유지 */}
      <div className="w-full max-w-md h-[100dvh] sm:h-[800px] bg-slate-900 text-slate-100 flex flex-col font-sans shadow-2xl relative sm:rounded-3xl overflow-hidden border border-slate-800">
        {/* 상단바 */}
        <header className="bg-slate-950 p-4 flex items-center justify-between border-b border-slate-800 z-10 sticky top-0">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={onBack}
          >
            <ChevronLeft className="text-slate-400 w-6 h-6 hover:text-white" />
            <BookOpen className="text-rose-500 w-5 h-5" />
            <h1 className="font-bold text-lg text-rose-50 tracking-wider truncate max-w-[120px]">
              바니나 바니니
            </h1>
          </div>
          <div className="flex items-center gap-2 relative">
            {/* 회차 선택 버튼 */}
            <button
              onClick={() => setShowEpisodeList(!showEpisodeList)}
              className="flex items-center gap-1 text-xs font-bold bg-slate-800 text-rose-300 px-3 py-1.5 rounded-full border border-slate-700 hover:bg-slate-700 hover:border-rose-500/50 transition-all active:scale-95"
            >
              <span>Ep.{currentEpisode}</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-300 ${showEpisodeList ? "rotate-180" : ""}`}
              />
            </button>
            <Settings className="text-slate-500 w-5 h-5 cursor-pointer hover:text-rose-400 transition-colors ml-1" />

            {/* 회차 목록 드롭다운 */}
            {showEpisodeList && (
              <div className="absolute top-full right-0 mt-3 w-64 max-h-80 overflow-y-auto bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 animate-fade-in-down custom-scrollbar">
                <div className="p-3 border-b border-slate-800 bg-slate-950/50 sticky top-0 backdrop-blur-sm z-10">
                  <h3 className="text-sm font-bold text-slate-400 px-1">
                    회차 목록
                  </h3>
                </div>
                <ul className="py-1">
                  {Object.keys(EPISODES).map((epKey) => {
                    const epNum = Number(epKey);
                    const title = EPISODES[epKey][0]?.text || `제${epNum}화`;
                    const isSelected = currentEpisode === epNum;

                    return (
                      <li key={epKey}>
                        <button
                          onClick={() => handleEpisodeChange(epKey)}
                          className={`w-full text-left px-4 py-3 text-sm flex items-start gap-3 transition-colors ${
                            isSelected
                              ? "bg-rose-900/20 text-rose-200"
                              : "text-slate-300 hover:bg-slate-800 hover:text-white"
                          }`}
                        >
                          <div
                            className={`mt-0.5 w-4 h-4 flex items-center justify-center rounded-full border ${isSelected ? "border-rose-500 bg-rose-500 text-white" : "border-slate-600 text-transparent"}`}
                          >
                            {isSelected && <Check size={10} strokeWidth={4} />}
                          </div>
                          <div className="flex-1">
                            <span
                              className={`block font-bold mb-0.5 ${isSelected ? "text-rose-400" : "text-slate-400"}`}
                            >
                              제{epNum}화
                            </span>
                            <span className="text-xs opacity-80 line-clamp-1 block">
                              {title.replace(/^제\d+화:\s*/, "")}
                            </span>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </header>

        {/* 본문 영역 (클릭 시 드롭다운 닫기) */}
        <div
          ref={scrollRef}
          onClick={() => setShowEpisodeList(false)}
          className="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth pb-32 bg-gradient-to-b from-slate-900 to-slate-950 relative"
        >
          {showEpisodeList && (
            <div className="absolute inset-0 bg-black/20 z-0 backdrop-blur-[1px]" />
          )}

          {episodeData.slice(0, currentLine + 1).map((item, index) => {
            if (item.type === "header") {
              return (
                <div
                  key={index}
                  className="text-center py-8 animate-fade-in relative z-0"
                >
                  <span className="text-rose-500 text-sm font-bold tracking-widest uppercase mb-2 block">
                    Episode {currentEpisode}
                  </span>
                  {EPISODES[currentEpisode]?.illustration && (
                    <div className="w-full my-4">
                      <img
                        src={EPISODES[currentEpisode].illustration}
                        alt="Episode illustration"
                        className="w-full rounded-xl shadow"
                      />
                    </div>
                  )}
                  <h2 className="text-2xl font-bold text-white font-serif">
                    {item.text}
                  </h2>
                  <div className="w-16 h-1 bg-rose-600 mx-auto mt-4 rounded-full" />
                </div>
              );
            }
            if (item.type === "illustration") {
              return (
                <div
                  key={index}
                  className="w-full my-6 animate-fade-in relative z-0"
                >
                  <img
                    src={item.src}
                    alt="episode illustration"
                    className="w-full rounded-xl shadow-xl border border-slate-700"
                  />
                </div>
              );
            }
            if (item.type === "effect") {
              return (
                <div
                  key={index}
                  className="flex items-center justify-center py-6 animate-pulse relative z-0"
                >
                  <div className="bg-slate-800/50 border border-slate-700 px-6 py-2 rounded-full flex items-center gap-2 shadow-lg shadow-black/20">
                    {/* 키워드에 따라 아이콘 변경 */}
                    {item.text.includes("열쇠") ? (
                      <Key className="w-4 h-4 text-emerald-400" />
                    ) : item.text.includes("진실") ||
                      item.text.includes("청혼") ||
                      item.text.includes("결심") ? (
                      <Heart className="w-4 h-4 text-red-400" />
                    ) : item.text.includes("한밤중") ? (
                      <Moon className="w-4 h-4 text-purple-300" />
                    ) : item.text.includes("시간") ||
                      item.text.includes("개월") ? (
                      <Clock className="w-4 h-4 text-blue-300" />
                    ) : item.text.includes("등장") ||
                      item.text.includes("불꽃") ? (
                      <Flame className="w-4 h-4 text-orange-400" />
                    ) : item.text.includes("종소리") ? (
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                    ) : item.text.includes("지도") ? (
                      <MapPin className="w-4 h-4 text-green-400" />
                    ) : item.text.includes("돈") ? (
                      <DollarSign className="w-4 h-4 text-yellow-500" />
                    ) : item.text.includes("무기") ||
                      item.text.includes("배신") ||
                      item.text.includes("침입자") ||
                      item.text.includes("재회") ? (
                      <Sword className="w-4 h-4 text-slate-400" />
                    ) : item.text.includes("명부") ||
                      item.text.includes("책") ? (
                      <Scroll className="w-4 h-4 text-amber-200" />
                    ) : item.text.includes("속보") ||
                      item.text.includes("경고") ||
                      item.text.includes("비보") ? (
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    ) : item.text.includes("죽음") ||
                      item.text.includes("파국") ? (
                      <Skull className="w-4 h-4 text-gray-400" />
                    ) : item.text.includes("잠입") ||
                      item.text.includes("남장") ? (
                      <UserCheck className="w-4 h-4 text-indigo-400" />
                    ) : item.text.includes("서류") ? (
                      <FileText className="w-4 h-4 text-slate-200" />
                    ) : item.text.includes("유혹") ? (
                      <Lock className="w-4 h-4 text-pink-400" />
                    ) : item.text.includes("판결") ? (
                      <Gavel className="w-4 h-4 text-slate-300" />
                    ) : item.text.includes("충격") ? (
                      <Zap className="w-4 h-4 text-yellow-400" />
                    ) : item.text.includes("보호") ? (
                      <ShieldAlert className="w-4 h-4 text-blue-400" />
                    ) : item.text.includes("End") ? (
                      <Diamond className="w-4 h-4 text-rose-500" />
                    ) : (
                      <Feather className="w-4 h-4 text-purple-400" />
                    )}
                    <span
                      className={`text-sm font-bold tracking-wide text-slate-100`}
                    >
                      {item.text}
                    </span>
                    {/* 오른쪽 아이콘 (대칭) */}
                    {item.text.includes("열쇠") ? (
                      <Key className="w-4 h-4 text-emerald-400" />
                    ) : item.text.includes("진실") ||
                      item.text.includes("청혼") ||
                      item.text.includes("결심") ? (
                      <Heart className="w-4 h-4 text-red-400" />
                    ) : item.text.includes("한밤중") ? (
                      <Moon className="w-4 h-4 text-purple-300" />
                    ) : item.text.includes("시간") ||
                      item.text.includes("개월") ? (
                      <Clock className="w-4 h-4 text-blue-300" />
                    ) : item.text.includes("등장") ||
                      item.text.includes("불꽃") ? (
                      <Flame className="w-4 h-4 text-orange-400" />
                    ) : item.text.includes("종소리") ? (
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                    ) : item.text.includes("지도") ? (
                      <MapPin className="w-4 h-4 text-green-400" />
                    ) : item.text.includes("돈") ? (
                      <DollarSign className="w-4 h-4 text-yellow-500" />
                    ) : item.text.includes("무기") ||
                      item.text.includes("배신") ||
                      item.text.includes("침입자") ||
                      item.text.includes("재회") ? (
                      <Sword className="w-4 h-4 text-slate-400" />
                    ) : item.text.includes("명부") ||
                      item.text.includes("책") ? (
                      <Scroll className="w-4 h-4 text-amber-200" />
                    ) : item.text.includes("속보") ||
                      item.text.includes("경고") ||
                      item.text.includes("비보") ? (
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    ) : item.text.includes("죽음") ||
                      item.text.includes("파국") ? (
                      <Skull className="w-4 h-4 text-gray-400" />
                    ) : item.text.includes("잠입") ||
                      item.text.includes("남장") ? (
                      <UserCheck className="w-4 h-4 text-indigo-400" />
                    ) : item.text.includes("서류") ? (
                      <FileText className="w-4 h-4 text-slate-200" />
                    ) : item.text.includes("유혹") ? (
                      <Lock className="w-4 h-4 text-pink-400" />
                    ) : item.text.includes("판결") ? (
                      <Gavel className="w-4 h-4 text-slate-300" />
                    ) : item.text.includes("충격") ? (
                      <Zap className="w-4 h-4 text-yellow-400" />
                    ) : item.text.includes("보호") ? (
                      <ShieldAlert className="w-4 h-4 text-blue-400" />
                    ) : item.text.includes("End") ? (
                      <Diamond className="w-4 h-4 text-rose-500" />
                    ) : (
                      <Feather className="w-4 h-4 text-purple-400" />
                    )}
                  </div>
                </div>
              );
            }
            if (item.type === "narrative") {
              return (
                <div
                  key={index}
                  className="animate-fade-in border-l-2 border-slate-800 pl-4 py-1 relative z-0"
                >
                  <p className="text-slate-400 text-[15px] leading-8 font-serif">
                    {item.text}
                  </p>
                </div>
              );
            }
            if (item.type === "dialogue") {
              const char = CHARACTERS[item.speaker] || {
                name: item.speaker,
                color: "#94a3b8",
                avatar: null,
              };
              const isThinking = item.text.includes("(독백)");
              const isNote = item.text.includes("(쪽지)");
              const cleanText = item.text
                .replace("(독백)", "")
                .replace("(쪽지)", "")
                .trim();
              const isUser = item.speaker === "바니나";
              const isFlashback = item.speaker.includes("회상");

              return (
                <div
                  key={index}
                  className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"} animate-slide-up relative z-0`}
                >
                  <div className="flex-shrink-0 flex flex-col items-center gap-1">
                    <div
                      className="w-10 h-10 rounded-full border-2 overflow-hidden bg-slate-800 shadow-md"
                      style={{ borderColor: char.color }}
                    >
                      {isNote ? (
                        <div className="w-full h-full bg-stone-700 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-stone-300" />
                        </div>
                      ) : char.icon ? (
                        <img
                          src={char.icon}
                          alt={char.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        char.avatar || (
                          <div className="w-full h-full bg-slate-700 flex items-center justify-center text-xs text-slate-400">
                            <User size={16} />
                          </div>
                        )
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-slate-500">
                      {char.name}
                    </span>
                  </div>

                  <div
                    className={`flex flex-col max-w-[85%] ${isUser ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-lg relative transition-all hover:scale-[1.01] ${
                        isThinking
                          ? "bg-slate-800 text-slate-300 border border-slate-600 border-dashed italic"
                          : isNote
                            ? "bg-[#fef3c7] text-stone-800 border border-amber-200 font-serif shadow-amber-900/10"
                            : isFlashback
                              ? "bg-amber-900/40 text-amber-100 border border-amber-800/50 font-serif italic"
                              : isUser
                                ? "bg-rose-900/90 text-rose-50 rounded-tr-none border border-rose-700"
                                : "bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700"
                      }`}
                    >
                      {cleanText}
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}

          <div className="h-4" />
        </div>

        {/* 하단 버튼 */}
        <div
          className="absolute bottom-0 w-full bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent p-6 pt-12 cursor-pointer z-20 flex justify-center"
          onClick={handleNext}
        >
          <button
            className={`flex items-center gap-2 px-8 py-3 transition-all rounded-full font-bold shadow-xl backdrop-blur-sm border ${
              currentLine >= episodeData.length - 1
                ? (EPISODES[currentEpisode + 1]
                    ? "bg-yellow-600/90 hover:bg-yellow-500 border-yellow-500"
                    : "bg-slate-700 border-slate-600") +
                  " text-white animate-pulse"
                : "bg-rose-700/90 hover:bg-rose-600 border-rose-600 text-white animate-bounce-subtle"
            }`}
            disabled={
              currentLine >= episodeData.length - 1 &&
              !EPISODES[currentEpisode + 1]
            }
          >
            {currentLine >= episodeData.length - 1
              ? EPISODES[currentEpisode + 1]
                ? "다음 화로 이동"
                : "작품 완결"
              : "Tap to Next"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
