// src/vpp_webpage.jsx
import React from "react";
import {
  Battery,
  Zap,
  Cloud,
  Cpu,
  Wifi,
  Globe,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

// ---- 간단 Card 컴포넌트 셋 (외부 UI 라이브러리 없이 사용) ----
function Card({ className = "", children }) {
  return (
    <div
      className={
        "bg-white rounded-2xl border border-gray-200 p-4 " + className
      }
    >
      {children}
    </div>
  );
}

function CardHeader({ children }) {
  return <div className="mb-2">{children}</div>;
}

function CardTitle({ className = "", children }) {
  return (
    <h3 className={"font-semibold text-lg " + className}>
      {children}
    </h3>
  );
}

function CardContent({ children }) {
  return <div>{children}</div>;
}

// -----------------------------------------------------------

const vppData = [
  { name: "태양광", value: 35 },
  { name: "풍력", value: 25 },
  { name: "ESS", value: 20 },
  { name: "수요반응(DR)", value: 15 },
  { name: "기타", value: 5 },
];

const usVppData = [
  { name: "스마트온도조절기", value: 35 },
  { name: "EV 관리충전", value: 25 },
  { name: "가정용 배터리", value: 25 },
  { name: "전기온수기", value: 10 },
  { name: "기타", value: 5 },
];

const euVppData = [
  { name: "풍력", value: 30 },
  { name: "바이오가스/CHP", value: 30 },
  { name: "태양광", value: 25 },
  { name: "수력", value: 10 },
  { name: "저장/DR", value: 5 },
];

const auVppData = [
  { name: "가정용 배터리", value: 60 },
  { name: "태양광", value: 35 },
  { name: "DR/기타", value: 5 },
];

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-4 p-3 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
    <Icon className="w-6 h-6 text-blue-600" />
    <div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-600 leading-snug">{desc}</p>
    </div>
  </div>
);

export default function VppWebPage() {
  const [tab, setTab] = React.useState("usmix");

  const BizItem = ({ title, bullets }) => (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-3">
          가상 발전소(VPP) 
        </h1>
        <p className="text-lg text-gray-600">
          분산 에너지 자원을 통합하여 미래 전력망 혁신
        </p>
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Feature
          icon={Battery}
          title="에너지 저장장치(ESS)"
          desc="전력 수급 불균형을 완화하고 피크 시 전력공급을 지원."
        />
        <Feature
          icon={Zap}
          title="재생에너지 통합"
          desc="태양광, 풍력 등의 소규모 발전소를 하나의 네트워크로 묶어 효율적 제어."
        />
        <Feature
          icon={Cpu}
          title="AI 기반 예측"
          desc="기상 데이터와 과거 발전량을 학습하여 전력 수요 및 공급을 예측."
        />
        <Feature
          icon={Wifi}
          title="IoT 통신망"
          desc="각 분산 자원에서 수집된 실시간 데이터를 중앙 플랫폼으로 전송."
        />
        <Feature
          icon={Cloud}
          title="클라우드 플랫폼"
          desc="분산 자원 관리 시스템(DERMS)을 통해 통합 제어 및 최적화 수행."
        />
        <Feature
          icon={Globe}
          title="전력시장 연계"
          desc="가상발전소의 집합 용량을 전력 도매시장에 입찰 및 거래."
        />
      </section>

      {/* 비즈니스 모델 */}
      <section className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">VPP 비즈니스 모델</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <BizItem
            title="전력중개 수수료"
            bullets={[
              "소규모 DER(태양광·ESS·DR) 집합자원 거래 대행",
              "도매/보조/용량시장 정산 수수료",
              "정확도·이행률 기반 성과형 요율",
            ]}
          />
          <BizItem
            title="예측·최적화 SW(구독)"
            bullets={[
              "발전·부하 예측(MAPE) 모델 구독형(SaaS)",
              "자동입찰·스케줄링(Autobidder류) 라이선스",
              "API/DERMS 연동 과금(디바이스/포인트당)",
            ]}
          />
          <BizItem
            title="플랫폼 마켓플레이스"
            bullets={[
              "지역전력/P2P 매칭 수수료",
              "DR 리워드 정산 대행 마진",
              "RE100·탄소크레딧 번들링 판매",
            ]}
          />
          <BizItem
            title="하드웨어 번들"
            bullets={[
              "스마트미터·인버터·게이트웨이 판매/리스",
              "ESS 설치·운영(O&M) 패키지",
              "성능보증(Availability) 기반 과금",
            ]}
          />
          <BizItem
            title="보조서비스 매출"
            bullets={[
              "주파수조정(FR)·예비력·신속응답 서비스",
              "반응시간/정확도 인센티브",
              "계통혼잡 완화(컨젝션) 서비스",
            ]}
          />
          <BizItem
            title="데이터·컨설팅"
            bullets={[
              "기상/수요/정산 데이터 판매",
              "부하관리 컨설팅(상업·산업·주거)",
              "시장참여·규제 대응 자문",
            ]}
          />
        </div>
        <div className="mt-4 text-xs text-gray-600 space-y-1">
          <p>
            수익 식 예시: 중개수수료(원) = 거래전력(kWh) × 도매가(원/kWh) ×
            수수료율(%)
          </p>
          <p>
            보조서비스: 정산(원) = 제공용량(kW) × 정산단가(원/kW·h) × 가동시간(h) ×
            성능계수
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>한국 VPP 구성 비중</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={vppData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#3b82f6" name="비중(%)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>해외 VPP 구성 비중(대표 사례)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => setTab("usmix")}
                className={`px-3 py-1 rounded-full text-xs ${
                  tab === "usmix"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border"
                }`}
              >
                미국
              </button>
              <button
                onClick={() => setTab("eumix")}
                className={`px-3 py-1 rounded-full text-xs ${
                  tab === "eumix"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border"
                }`}
              >
                유럽(EU)
              </button>
              <button
                onClick={() => setTab("aumix")}
                className={`px-3 py-1 rounded-full text-xs ${
                  tab === "aumix"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border"
                }`}
              >
                호주
              </button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              {tab === "usmix" && (
                <BarChart data={usVppData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#10b981" name="비중(%)" />
                </BarChart>
              )}
              {tab === "eumix" && (
                <BarChart data={euVppData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#f59e0b" name="비중(%)" />
                </BarChart>
              )}
              {tab === "aumix" && (
                <BarChart data={auVppData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#6366f1" name="비중(%)" />
                </BarChart>
              )}
            </ResponsiveContainer>
            <p className="text-[11px] text-gray-500 mt-2">
              ※ 사례 기반 참고치: 미국(Brattle/DOE VPP Liftoff), 유럽(Next
              Kraftwerke 포트폴리오), 호주(테슬라 SA VPP). 시장/프로그램에 따라
              달라질 수 있음.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 주요 플레이어 */}
      <section className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">주요 플레이어</h2>
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setTab("krplayer")}
            className={`px-4 py-2 rounded-full text-sm ${
              tab === "krplayer"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
          >
            한국
          </button>
          <button
            onClick={() => setTab("globalplayer")}
            className={`px-4 py-2 rounded-full text-sm ${
              tab === "globalplayer"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
          >
            글로벌
          </button>
        </div>

        {tab === "krplayer" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <BizItem
              title="한전KDN"
              bullets={[
                "DERMS 및 예측·입찰 플랫폼 개발",
                "국가 전력시장 연계 실증(VPP Pilot)",
                "AI 기반 정확도 향상 모델",
              ]}
            />
            <BizItem
              title="SK에코플랜트"
              bullets={[
                "AI 예측기반 PowerZEN VPP 운영",
                "재생에너지+ESS 중개사업 확대",
                "DR 통합제어 플랫폼",
              ]}
            />
            <BizItem
              title="KT"
              bullets={[
                "통신망 기반 IoT 모니터링",
                "클라우드형 VPP 운영시스템",
                "스마트빌딩·EV 연계 사업",
              ]}
            />
            <BizItem
              title="해줌 / 솔라커넥트"
              bullets={[
                "태양광 발전소 데이터 중개",
                "SMP/REC 거래 대행",
                "예측 정확도 기반 정산",
              ]}
            />
            <BizItem
              title="그리드위즈"
              bullets={[
                "DR 자원 모집 및 통합 운영",
                "DERMS 개발·수출",
                "전력피크 완화 서비스",
              ]}
            />
            <BizItem
              title="지자체/공사"
              bullets={[
                "도시형 VPP 실증(서울·부산)",
                "지역 분산자원 플랫폼 구축",
              ]}
            />
          </div>
        )}

        {tab === "globalplayer" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <BizItem
              title="Next Kraftwerke (EU)"
              bullets={[
                "유럽 최대 규모의 상업형 VPP",
                "풍력·태양광·CHP 12GW 이상 관리",
                "Balancing/Intraday Market 거래",
              ]}
            />
            <BizItem
              title="Tesla Autobidder (US)"
              bullets={[
                "Powerwall·Megapack 통합 제어",
                "자동 입찰 및 가격 최적화",
                "SA VPP 핵심 운영엔진",
              ]}
            />
            <BizItem
              title="Octopus Energy / Renew Home (UK/US)"
              bullets={[
                "주거형 VPP 고객 100만 이상",
                "스마트가전·EV 자동 DR 참여",
                "Dynamic Tariff 기반 요금제",
              ]}
            />
            <BizItem
              title="AutoGrid / Enel X (Global)"
              bullets={[
                "유틸리티용 DERMS 소프트웨어",
                "실시간 최적화 및 정산엔진",
                "30개국 이상 배포",
              ]}
            />
            <BizItem
              title="Sonnen (DE)"
              bullets={[
                "가정용 ESS 클러스터링",
                "재생에너지 잉여전력 거래",
                "보조서비스 시장 참여",
              ]}
            />
            <BizItem
              title="Virtual Peaker / EnergyHub (US)"
              bullets={[
                "스마트홈 장치 통합제어",
                "유틸리티 수요반응 관리 솔루션",
              ]}
            />
          </div>
        )}
      </section>

      {/* 기술 아키텍처 비교 */}
      <section className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">기술 아키텍처 비교</h2>
        <p className="text-sm text-gray-600 mb-4">
          레이어 관점(디바이스/엣지 → 통신 → 플랫폼(DERMS/VPP OS) → 시장/정산)에서
          지역·모델별 차이를 비교합니다.
        </p>
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setTab("arch_us")}
            className={`px-3 py-1 rounded-full text-xs ${
              tab === "arch_us"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
          >
            미국(주거 DR 중심)
          </button>
          <button
            onClick={() => setTab("arch_eu")}
            className={`px-3 py-1 rounded-full text-xs ${
              tab === "arch_eu"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
          >
            유럽(발전+CHP 혼합)
          </button>
          <button
            onClick={() => setTab("arch_au")}
            className={`px-3 py-1 rounded-full text-xs ${
              tab === "arch_au"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
          >
            호주(가정 ESS 중심)
          </button>
          <button
            onClick={() => setTab("arch_kr")}
            className={`px-3 py-1 rounded-full text-xs ${
              tab === "arch_kr"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
          >
            한국(초기 혼합형)
          </button>
        </div>

        {tab === "arch_us" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <BizItem
              title="디바이스/엣지"
              bullets={[
                "스마트 온도조절기, EVSE, 전기온수기",
                "가정용 배터리(선택)",
                "Wi-Fi/스마트미터 HAN",
              ]}
            />
            <BizItem
              title="통신"
              bullets={[
                "Wi-Fi, LTE/5G, AMI Mesh",
                "OpenADR/IEEE 2030.5(SEP2)",
                "유틸리티 프로그램 연동",
              ]}
            />
            <BizItem
              title="플랫폼"
              bullets={[
                "DERMS + 오케스트레이션",
                "수요감축 예측/스케줄러",
                "자동입찰(도매/RA)",
              ]}
            />
            <BizItem
              title="시장/정산"
              bullets={[
                "DR 프로그램, 용량시장(RA)",
                "도매시장(ISO/RTO) 참여",
                "정확도/성능기반 정산",
              ]}
            />
          </div>
        )}

        {tab === "arch_eu" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <BizItem
              title="디바이스/엣지"
              bullets={[
                "풍력·태양광·바이오가스/CHP",
                "상업·산업 부하제어",
                "BESS/수력(소형)",
              ]}
            />
            <BizItem
              title="통신"
              bullets={[
                "전용망+LTE/5G 혼합",
                "IEC 60870-5-104/IEC 61850",
                "보안 게이트웨이",
              ]}
            />
            <BizItem
              title="플랫폼"
              bullets={[
                "포트폴리오 최적화(유럽 다국가)",
                "Intraday/밸런싱 마켓 연동",
                "재생예측+제약기반 최적화",
              ]}
            />
            <BizItem
              title="시장/정산"
              bullets={[
                "밸런싱·보조서비스(FCR/aFRR)",
                "Intraday/Day-Ahead 거래",
                "PPAs/가상PPA",
              ]}
            />
          </div>
        )}

        {tab === "arch_au" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <BizItem
              title="디바이스/엣지"
              bullets={[
                "루프탑 PV + Powerwall",
                "스마트 인버터(AS4777)",
                "스마트미터(Interval)",
              ]}
            />
            <BizItem
              title="통신"
              bullets={[
                "LTE/5G + 유틸리티 AMI",
                "IEEE 2030.5, API 연동",
                "현장 펌웨어 OTA",
              ]}
            />
            <BizItem
              title="플랫폼"
              bullets={[
                "Autobidder/DERMS",
                "FCAS 대응 초단기 제어",
                "상태추정·SoC 관리",
              ]}
            />
            <BizItem
              title="시장/정산"
              bullets={[
                "NEM(도매) + FCAS 보조시장",
                "네트워크 서비스(지연투자 대체)",
                "가정 리베이트/리워드",
              ]}
            />
          </div>
        )}

        {tab === "arch_kr" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <BizItem
              title="디바이스/엣지"
              bullets={[
                "태양광·ESS·소형발전",
                "상업·산업 DR 부하",
                "EV 충전(시범)",
              ]}
            />
            <BizItem
              title="통신"
              bullets={[
                "AMI/전용선+LTE 혼합",
                "모듈형 게이트웨이",
                "보안(개인정보/정산연계)",
              ]}
            />
            <BizItem
              title="플랫폼"
              bullets={[
                "국내형 DERMS/VPP OS",
                "발전예측·입찰/정산 모듈",
                "지자체 실증(도시형 VPP)",
              ]}
            />
            <BizItem
              title="시장/정산"
              bullets={[
                "소규모 중개시장, 도매시장",
                "보조서비스(도입 확대 검토)",
                "RE100·지역전력 실증",
              ]}
            />
          </div>
        )}

        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">공통 핵심 모듈</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                <li>포캐스팅: 재생/부하/가격 예측 (MAPE 관리)</li>
                <li>오케스트레이션: 디스패치·스케줄링·제약관리</li>
                <li>정산/리스크: 입찰전략, 성능평가, 헤지</li>
                <li>보안/신뢰성: 암호화, 인증, 펌웨어 서명, 로컬 페일세이프</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">설계 포인트</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                <li>응답시간(주파수/FCAS/FR)과 통신 SLA</li>
                <li>SoC/SoH 관리와 배터리 열화 비용 반영</li>
                <li>DR 고객 경험: opt-in/opt-out, 공정한 보상</li>
                <li>규제 적합성: 계량/정산·개인정보·사이버보안</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">
                권장 레퍼런스 스택
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                <li>프로토콜: OpenADR, IEEE 2030.5(SEP2), MQTT</li>
                <li>표준: IEC 61850, 60870-5-104(유럽)</li>
                <li>클라우드: 이벤트 기반 마이크로서비스, 스트림 처리</li>
                <li>AI: 시계열 포캐스팅, 강화학습 기반 입찰</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="text-center mt-16 text-gray-500 text-sm">
        © 2025 VPP Insight | 데이터 출처: KBThink, SKEcoPlant,
        Software.Energy
      </footer>
    </div>
  );
}
