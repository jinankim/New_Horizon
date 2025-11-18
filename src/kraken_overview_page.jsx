import React from "react";

// 간단한 유틸 함수
export default function KrakenOverviewPage() {
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// 기본 레이아웃 컨테이너

function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-10">{children}</div>
    </div>
  );
}

// 카드 컴포넌트
function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-slate-200 shadow-sm p-6",
        className
      )}
      {...props}
    />
  );
}

// 탭 컴포넌트 (간단 버전)
const TABS = [
  "회사 개요",
  "연혁",
  "비즈니스 모델",
  "사업 분야",
  "성장 전략",
  "재무 현황",
  "진출 고려사항 & SWOT",
];

function Tabs({ active, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {TABS.map((tab) => {
        const isActive = active === tab;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className={cn(
              "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium border",
              isActive
                ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            )}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

// 작은 태그/라벨
function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 border border-sky-100 mr-2 mb-2">
      {children}
    </span>
  );
}

// 간단한 성장 추이 "차트" (막대 리스트)
const growthData = [
  { year: 2020, accounts: 10 },
  { year: 2021, accounts: 18 },
  { year: 2022, accounts: 28 },
  { year: 2023, accounts: 38 },
  { year: 2024, accounts: 50 },
  { year: 2025, accounts: 70 },
];

function GrowthChart() {
  const max = Math.max(...growthData.map((d) => d.accounts));
  return (
    <div className="space-y-3">
      {growthData.map((d) => (
        <div key={d.year} className="flex items-center gap-3 text-xs sm:text-sm">
          <span className="w-12 font-semibold text-slate-600">{d.year}</span>
          <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden">
            <div
              className="bg-sky-500 h-3 rounded-full"
              style={{ width: `${(d.accounts / max) * 100}%` }}
            />
          </div>
          <span className="w-16 text-right text-slate-700">
            {d.accounts}
            <span className="text-[10px] text-slate-400 ml-0.5">M 계정</span>
          </span>
        </div>
      ))}
      <p className="mt-1 text-[11px] text-slate-400">
        * FY24 기준 Kraken 플랫폼에 온보딩/계약된 유틸리티 고객 계정 수를 단순화해 표현한 예시입니다.
      </p>
    </div>
  );
}

// 섹션 헤더
function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold text-slate-900 mb-1">{title}</h2>
      {subtitle && (
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// 개요 탭 내용
function OverviewSection() {
  return (
    <div className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
      <Card>
        <SectionTitle
          title="회사 정체성"
          subtitle="Kraken Technologies는 유틸리티 산업 전반을 위한 올인원 스마트 운영 시스템(all-in-one smart operating system)을 제공하는 글로벌 기술 선도 기업입니다."
        />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>
            • <b>사명(Mission):</b> 유틸리티 변혁을 가속화하여 10년 이내 10억 명의 삶을 개선하는 것을 목표로 하는 AI 기반 운영 플랫폼
          </li>
          <li>
            • <b>법적 지위:</b> 영국 잉글랜드 & 웨일스 등록 유한회사 (Kraken Technologies Limited, KTL)
          </li>
          <li>
            • <b>출발점:</b> Octopus Energy Group 내부에서 개발된 코어 기술로 시작하여 현재는 전 세계 유틸리티에 라이선스 제공
          </li>
          <li>
            • <b>핵심 가치:</b> 운영 비용 최대 40% 절감, 업계 최고 수준의 고객 경험, 신제품 출시 속도 3배 향상
          </li>
          <li>
            • <b>플랫폼 포지셔닝:</b> 에너지·수도·통신 등 광의의 유틸리티를 위한 "Operating System for Utilities"
          </li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="규모 추이(예시)" subtitle="계약/운영 계정 수 성장" />
        <GrowthChart />
      </Card>

      <Card className="md:col-span-2">
        <SectionTitle title="주요 키워드" />
        <div className="flex flex-wrap">
          <Pill>AI 기반 유틸리티 운영</Pill>
          <Pill>End-to-End SaaS 플랫폼</Pill>
          <Pill>분산 에너지 자원(DER) & VPP</Pill>
          <Pill>저탄소 기술 설치/운영</Pill>
          <Pill>글로벌 라이선스 비즈니스</Pill>
          <Pill>낮은 한계비용, 높은 확장성</Pill>
        </div>
      </Card>
    </div>
  );
}

// 연혁 탭 내용
function HistorySection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <SectionTitle title="주요 연혁" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>
            • <b>2016</b> – Octopus Energy Group가 고객 중심·저탄소 에너지 공급을 위해 자체 AI 기반 운영 시스템 개발 시작 (내부 플랫폼 Kraken 탄생)
          </li>
          <li>
            • <b>2019</b> – Kraken Technologies Limited 설립, Octopus 내부 기술을 독립 법인으로 분리
          </li>
          <li>
            • <b>2020~2022</b> – Bulb, E.ON, Origin 등 대형 유틸리티 고객 대규모 마이그레이션 성공, 수천만 계정 온보딩
          </li>
          <li>
            • <b>FY24</b> – 계약 계정 5,050만, 라이브 계정 3,280만 돌파, 27개국 이상에서 활용
          </li>
          <li>
            • <b>2025.9</b> – Octopus Energy Group에서 공식적으로 분사, 독립 기업으로 성장 가속
          </li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="성장 포인트" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>• 모회사 Octopus Energy의 빠른 성장을 뒷받침한 핵심 기술 플랫폼</li>
          <li>• 레거시 시스템 대비 탁월한 비용 구조와 자동화 수준으로 시장 신뢰 확보</li>
          <li>• Shell Energy, EDF, Tokyo Gas 등 글로벌 유틸리티 레퍼런스 축적</li>
          <li>• EV·배터리·히트펌프 등 DER 통합 및 VPP 운영 역량을 통해 차세대 유틸리티 운영 표준 지향</li>
        </ul>
      </Card>
    </div>
  );
}

// 비즈니스 모델 탭
function BusinessModelSection() {
  return (
    <div className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
      <Card>
        <SectionTitle title="SaaS 비즈니스 모델" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>
            • <b>Core:</b> 유틸리티 운영 전반을 통합하는 클라우드 네이티브 SaaS 플랫폼 라이선스
          </li>
          <li>
            • <b>정기 수익(Recurring):</b> 계정 수 기반 또는 계약 규모 기반 라이선스 과금 – FY24 기준 약 £90m 수준
          </li>
          <li>
            • <b>비정기 수익(Non-recurring):</b> 신규 고객 온보딩, 대규모 마이그레이션, 커스텀 구축(BOT) 프로젝트 수수료
          </li>
          <li>
            • <b>비용 구조:</b> 초기 개발·인력 투자 후 한계비용이 매우 낮아 규모의 경제에 따른 높은 영업 레버리지 확보
          </li>
          <li>
            • <b>고객 가치 제안:</b> Cost-to-Serve 최대 40% 절감, NPS/Trustpilot 등 고객 만족도 개선, 신상품/요금제 출시 속도 3배 향상
          </li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="수익원 요약" />
        <ul className="space-y-1.5 text-sm text-slate-700">
          <li>• 플랫폼 라이선스 (계정 수 기반 고정/변동 요금)</li>
          <li>• 마이그레이션·구축 프로젝트 피(BOT)</li>
          <li>• 추가 모듈 (KrakenFlex, KrakenField 등) 업셀링</li>
          <li>• 파트너십 기반 수익 쉐어 (패키지 상품 등)</li>
        </ul>
      </Card>
    </div>
  );
}

// 사업 분야 탭
function BusinessAreasSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <SectionTitle title="주요 사업 영역" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>
            • <b>Customer Management:</b> CRM, 청구, 미터 데이터 관리(MDM), CIS를 하나의 플랫폼으로 통합
          </li>
          <li>
            • <b>DER & Flexibility (KrakenFlex):</b> EV, 가정용 배터리, 히트펌프 등 40만+ 장치와 1.7GW+ 저장 용량을 통합 제어하는 VPP 운영
          </li>
          <li>
            • <b>Large-scale Generation & Storage:</b> 풍력·태양광·그리드 규모 배터리 자산의 운영·거래 최적화
          </li>
          <li>
            • <b>Field Operations (KrakenField):</b> 스마트 미터, EV 충전기, 태양광, 히트펌프 설치·유지보수 워크플로우 관리
          </li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="산업 및 고객 세그먼트" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>• 에너지 소매 / 발전 / 배전 유틸리티</li>
          <li>• 수도 유틸리티 (Severn Trent, Portsmouth Water 등)</li>
          <li>• 통신 사업자 (Cuckoo Fibre 등)</li>
          <li>• C&I 대형 고객 포트폴리오를 보유한 공급사</li>
        </ul>
      </Card>
    </div>
  );
}

// 성장 전략 탭
function GrowthStrategySection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <SectionTitle title="성장 전략" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>• 파트너십 기반 글로벌 라이선스 확대 (유럽, 북미, APAC)</li>
          <li>• 에너지 → 수도·통신 등 유틸리티 전반으로 수평 확장</li>
          <li>• DER/VPP, C&I, 배전망 등 에너지 밸류체인 전 영역으로 수직 확장</li>
          <li>• 전략적 인수(Jedlix, Energetiq, Sennen, Kwest 등)를 통한 기능 보강</li>
          <li>• AI(Magic Ink) 기반 고객 서비스·운영 자동화 수준 고도화</li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="핵심 성장 드라이버" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>• 글로벌 에너지 전환(탈탄소·탈중앙화) 및 레거시 시스템 교체 수요</li>
          <li>• 규제 완화 및 자유화된 소매 시장 확대</li>
          <li>• EV/배터리/히트펌프 보급 확대에 따른 VPP·유연성 시장 성장</li>
        </ul>
      </Card>
    </div>
  );
}

// 재무 현황 탭
function FinancialsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <SectionTitle title="FY24 주요 재무 지표" />
        <table className="w-full text-sm text-left text-slate-700">
          <tbody>
            <tr>
              <td className="py-1.5 pr-4 text-slate-500">총 매출 (Turnover)</td>
              <td className="py-1.5 font-semibold">£136.3m</td>
            </tr>
            <tr>
              <td className="py-1.5 pr-4 text-slate-500">정기 수익 (Recurring)</td>
              <td className="py-1.5 font-semibold">£89.6m (+68% YoY)</td>
            </tr>
            <tr>
              <td className="py-1.5 pr-4 text-slate-500">영업 이익 (Operating Profit)</td>
              <td className="py-1.5 font-semibold">£44.0m (+104% YoY)</td>
            </tr>
            <tr>
              <td className="py-1.5 pr-4 text-slate-500">당기 순이익</td>
              <td className="py-1.5 font-semibold">£34.9m</td>
            </tr>
            <tr>
              <td className="py-1.5 pr-4 text-slate-500">계약된 연간 정기 수익(CARR)</td>
              <td className="py-1.5 font-semibold">£212m (+67% YoY)</td>
            </tr>
          </tbody>
        </table>
      </Card>

      <Card>
        <SectionTitle title="그룹 내 위치" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>• Octopus Energy Group 총매출의 비중은 아직 1%대 수준</li>
          <li>• 하지만 고마진 라이선스 사업으로 그룹 전체 매출총이익률 개선에 크게 기여</li>
          <li>• 에너지 공급 사업 대비 자본 집약도가 낮고 확장성이 높아 장기 성장 축으로 인식</li>
        </ul>
      </Card>
    </div>
  );
}

// 진출 고려사항 & SWOT 탭
function ConsiderationSwotSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <SectionTitle title="신규 진입자가 고려해야 할 사항" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>• CRM·청구·MDM·DER·현장 운영을 아우르는 통합 플랫폼 설계 역량</li>
          <li>• 수십만~수백만 계정 마이그레이션을 안전하게 수행할 수 있는 실행 능력</li>
          <li>• 낮은 한계비용을 전제로 한 SaaS 수익·비용 구조와 자본 조달 전략</li>
          <li>• 유틸리티 규제 환경, 데이터 보안·개인정보 보호에 대한 컴플라이언스</li>
          <li>• 초기 레퍼런스를 확보하기 위한 니치 타깃 및 파트너십 전략</li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="신규 진입자 관점 SWOT 요약" />
        <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
          <div>
            <h3 className="font-semibold text-emerald-700 mb-1">Strengths</h3>
            <ul className="space-y-1 text-slate-700">
              <li>• 최신 기술 스택·아키텍처 설계 가능</li>
              <li>• 특정 니치(예: DER, C&I) 집중 전략</li>
              <li>• 공격적인 가격 정책 여지</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-rose-700 mb-1">Weaknesses</h3>
            <ul className="space-y-1 text-slate-700">
              <li>• 대규모 레퍼런스·신뢰도 부족</li>
              <li>• 초기 개발·현지화에 큰 투자 필요</li>
              <li>• Octopus와 같은 테스트베드 부재</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sky-700 mb-1">Opportunities</h3>
            <ul className="space-y-1 text-slate-700">
              <li>• 글로벌 에너지 전환·VPP 시장 성장</li>
              <li>• 수도·통신 등 인접 유틸리티 확장</li>
              <li>• 레거시 시스템 교체 수요 확대</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-amber-700 mb-1">Threats</h3>
            <ul className="space-y-1 text-slate-700">
              <li>• Kraken의 빠른 성장과 높은 점유율</li>
              <li>• 복잡한 플랫폼·규제 요건에 따른 높은 진입 장벽</li>
              <li>• 대형 유틸리티·투자자의 Kraken 지지</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}

// 메인 페이지 컴포넌트

  const [activeTab, setActiveTab] = React.useState("회사 개요");

  const renderTab = () => {
    switch (activeTab) {
      case "회사 개요":
        return <OverviewSection />;
      case "연혁":
        return <HistorySection />;
      case "비즈니스 모델":
        return <BusinessModelSection />;
      case "사업 분야":
        return <BusinessAreasSection />;
      case "성장 전략":
        return <GrowthStrategySection />;
      case "재무 현황":
        return <FinancialsSection />;
      case "진출 고려사항 & SWOT":
        return <ConsiderationSwotSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <PageLayout>
      {/* 헤더 */}
      <header className="mb-8">
        <p className="text-xs font-medium tracking-wide text-sky-600 uppercase mb-1">
          Kraken Technologies Group
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
          Kraken Group Overview
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Kraken은 AI 및 클라우드 기반 데이터 분석을 결합한 스마트 운영 플랫폼으로, 전 세계 에너지·수도·통신 유틸리티의 디지털 전환과 탈탄소화를 가속화하는 독립 기술 기업입니다.
        </p>
      </header>

      {/* 탭 내비게이션 */}
      <section className="mb-6">
        <Tabs active={activeTab} onChange={setActiveTab} />
      </section>

      {/* 본문 */}
      <main className="mb-10">{renderTab()}</main>
    </PageLayout>
  );
}
