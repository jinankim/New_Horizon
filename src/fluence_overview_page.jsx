import React from "react";

// 간단 유틸
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// 기본 레이아웃
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

// 태그 Pill
function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 border border-sky-100 mr-2 mb-2">
      {children}
    </span>
  );
}

// 탭 정의
const TABS = [
  "회사 개요",
  "연혁",
  "비즈니스 모델",
  "성장 전략",
  "협업 사례",
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

// 간단 성장 차트용 데이터 (예시)
const revenueData = [
  { year: "FY22", revenue: 1198.6 },
  { year: "FY23", revenue: 2218.1 },
  { year: "FY24", revenue: 2698.6 },
];

function GrowthBars() {
  const max = Math.max(...revenueData.map((d) => d.revenue));
  return (
    <div className="space-y-3">
      {revenueData.map((d) => (
        <div key={d.year} className="flex items-center gap-3 text-xs sm:text-sm">
          <span className="w-12 font-semibold text-slate-600">{d.year}</span>
          <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden">
            <div
              className="bg-sky-500 h-3 rounded-full"
              style={{ width: `${(d.revenue / max) * 100}%` }}
            />
          </div>
          <span className="w-20 text-right text-slate-700">
            ${d.revenue.toLocaleString()}M
          </span>
        </div>
      ))}
      <p className="mt-1 text-[11px] text-slate-400">
        * FY22~FY24 Fluence 연간 매출 추이 (단위: US$ million) 기준 단순화 예시입니다.
      </p>
    </div>
  );
}

// 섹션 타이틀
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

// 1) 회사 개요
function OverviewSection() {
  return (
    <div className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
      <Card>
        <SectionTitle
          title="회사 정체성"
          subtitle="Fluence는 에너지 저장 시스템(ESS)과 디지털 애플리케이션을 결합해 글로벌 청정에너지 전환을 가속화하는 시장 선도 에너지 저장 솔루션 기업입니다."
        />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>
            • <b>설립:</b> 2018년 1월, Siemens와 AES Corporation 합작으로 설립된 독립 법인
          </li>
          <li>
            • <b>본사:</b> 미국 버지니아주 알링턴 (Washington, D.C. Metro)
          </li>
          <li>
            • <b>미션:</b> 세상을 움직이는 방식을 변화시켜 더 지속 가능한 미래를 만드는 것
          </li>
          <li>
            • <b>포지셔닝:</b> Utility-scale ESS, 서비스, AI 기반 소프트웨어(Mosaic, Nispera)를 포함한 통합 포트폴리오
          </li>
          <li>
            • <b>시장 지위:</b> S&P Global이 선정한 Tier 1 에너지 저장 공급업체이자 글로벌 선도 ESS 시스템 통합사
          </li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="규모 및 재무 스냅샷" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed mb-4">
          <li>• FY24 매출: 약 US$ 2.70B, 조정 EBITDA 흑자 전환</li>
          <li>• FY25 Q3 매출: US$ 603M, 조정 EBITDA US$ 27.4M</li>
          <li>• FY25 Q3 기준 수주잔고(Backlog): 약 US$ 4.9B</li>
          <li>• 2025년 6월 기준 유동성: US$ 0.9B+ 수준</li>
        </ul>
        <GrowthBars />
      </Card>

      <Card className="md:col-span-2">
        <SectionTitle title="핵심 키워드" />
        <div className="flex flex-wrap">
          <Pill>Utility-scale ESS</Pill>
          <Pill>Gridstack Pro / Smartstack</Pill>
          <Pill>AI Bidding (Mosaic)</Pill>
          <Pill>Asset Performance (Nispera)</Pill>
          <Pill>미국 Domestic Content 전략</Pill>
          <Pill>고마진 구독형 ARR</Pill>
        </div>
      </Card>
    </div>
  );
}

// 2) 연혁
function HistorySection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <SectionTitle title="주요 연혁" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>• 2018 – Siemens & AES 합작으로 Fluence 설립, 세계 최대 ESS 구축 포트폴리오 팀 기반 출범</li>
          <li>• 2020 – Guidehouse 선정 #1 유틸리티 규모 ESS 시스템 통합업체</li>
          <li>• 2021 – IHS Markit 선정 글로벌 배터리 ESS 공급업체 1위</li>
          <li>• 2022 – AI 입찰 소프트웨어 Mosaic, TIME Best Inventions 선정</li>
          <li>• 2023 – Energy Storage Awards ‘System Integrator of the Year’ 수상</li>
          <li>• 2024 – FY24 매출 US$ 2.70B, 조정 EBITDA US$ 78.1M 기록</li>
          <li>• 2025 – Smartstack 출시, 미국·베트남 제조 거점 확장, Tomago 500MW/2000MWh 등 대형 수주</li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="용량 및 실적 성장" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>• 누적 구축 용량: 2022년 5.0GWh → 2023년 7.2GWh → 2024년 12.8GWh</li>
          <li>• 2025년 기준 백로그 약 US$ 4.9B, 파이프라인 약 US$ 23.5B</li>
          <li>• Tier 1 공급업체 선정으로 글로벌 유틸리티 및 개발사와의 대규모 프로젝트 수주 가속</li>
        </ul>
      </Card>
    </div>
  );
}

// 3) 비즈니스 모델
function BusinessModelSection() {
  return (
    <div className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
      <Card>
        <SectionTitle
          title="통합 포트폴리오 기반 비즈니스 모델"
          subtitle="하드웨어(ESS), 서비스(O&M), 디지털 소프트웨어(SaaS)를 결합한 생태계형 모델로, 초기 프로젝트를 통해 설치 기반을 확보한 뒤 고마진 반복 수익을 확대합니다."
        />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>
            • <b>Solutions (하드웨어):</b> Gridstack Pro, Smartstack, Ultrastack 등 Utility-scale ESS – 매출의 80~85% 차지, 낮은 마진이지만 시장 풋프린트 확보의 핵심
          </li>
          <li>
            • <b>Services:</b> 설계·납품·설치·시운전을 포함한 풀 턴키 및 장기 O&M 계약 – 중간 수준 마진, 안정적 반복 수익
          </li>
          <li>
            • <b>Digital Applications:</b> Mosaic(시장 입찰 최적화), Nispera(APM) – 구독형(SaaS) 고마진 ARR, 고객 수익성 3~10% 개선에 기여
          </li>
          <li>
            • <b>수익 구조:</b> 저마진 하드웨어 + 중마진 서비스 + 고마진 소프트웨어 조합을 통해 포트폴리오 전체 수익성 향상
          </li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="수익원 요약" />
        <table className="w-full text-sm text-left text-slate-700">
          <tbody>
            <tr>
              <td className="py-1.5 pr-4 text-slate-500">ESS 솔루션 매출</td>
              <td className="py-1.5">총매출의 80~85%, 프로젝트 기반</td>
            </tr>
            <tr>
              <td className="py-1.5 pr-4 text-slate-500">서비스 & O&M</td>
              <td className="py-1.5">장기 계약, 중간 마진, 안정적 캐시플로우</td>
            </tr>
            <tr>
              <td className="py-1.5 pr-4 text-slate-500">디지털 애플리케이션</td>
              <td className="py-1.5">SaaS 구독, 높은 마진, ARR 확대</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}

// 4) 성장 전략
function GrowthStrategySection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <SectionTitle title="1. 미국 Domestic Content & 제조 전략" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>• OBBBA·IRA 등 미국 인센티브를 최대 활용하기 위해 국내 생산 비중 확대</li>
          <li>• 애리조나(Goodyear), 유타, 휴스턴 등지에 제조 거점 구축 – 배터리 모듈, 외함, HVAC·칠러 생산</li>
          <li>• 미국 Domestic Content 및 비-FEOC 요건을 충족하는 ESS를 시장에 최초 공급</li>
          <li>• 장기적으로 ITC(투자 세액 공제) + Domestic Content 보너스를 통한 가격 경쟁력 확보</li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="2. 디지털 & 서비스 비중 확대" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>• Mosaic·Nispera 중심의 ARR를 FY25 말까지 US$ 145M 수준으로 확대 목표</li>
          <li>• 기술 중립(Technology-agnostic) 소프트웨어로 타사 자산까지 포괄하는 플랫폼으로 확장</li>
          <li>• 예측 유지보수, 성능 최적화 기능 강화로 고객 수익률 3~10%p 개선</li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="3. 글로벌 프로젝트 & 신시장 공략" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>• 호주 AGL Tomago(500MW/2000MWh), 독일 LEAG 1GW/4GWh 등 대형 프로젝트 기반 레퍼런스 확대</li>
          <li>• 데이터센터 전력 안정화 수요를 겨냥한 BESS 솔루션 – 최소 US$ 8.5B 추가 TAM</li>
          <li>• 일본 도쿄 사무소 및 아태 지역 확장으로 글로벌 수주 파이프라인 다변화</li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="핵심 성장 드라이버" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>• 재생에너지 확대, 가스발전 대체, 데이터센터 수요 등 구조적 ESS 성장</li>
          <li>• 정책 인센티브·규제 변화에 따른 Storage의 경제성 향상</li>
          <li>• 안전·신뢰성 입증에 따른 Tier 1 공급자에 대한 선호 강화</li>
        </ul>
      </Card>
    </div>
  );
}

// 5) 협업 사례
function PartnershipSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <SectionTitle title="핵심 파트너 및 고객" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>• <b>Founders:</b> Siemens & AES – 기술·재무·영업 네트워크 기반 제공</li>
          <li>• <b>AGL (호주):</b> Tomago 500MW/2000MWh 포함 다수의 대형 BESS 프로젝트 수행</li>
          <li>• <b>LEAG (독일):</b> 유럽 최대 규모 1GW/4GWh 배터리 저장시설 프로젝트 파트너</li>
          <li>• <b>DTEK (우크라이나·폴란드):</b> 전쟁 상황에서도 200MW/400MWh 포트폴리오를 6개월 내 가동</li>
          <li>• <b>VERBUND, AMPYR, Torch Clean Energy</b> 등 유럽·미국·호주 주요 발전·개발사</li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="공급망 & 소프트웨어 협력" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>• <b>ACE Engineering (베트남 박장성):</b> 35GWh 규모 완전 자동화 ESS 공장 – Gridstack Pro / Smartstack 생산</li>
          <li>• <b>Bergstrom (미국):</b> Gridstack Pro용 HVAC·칠러 생산 파트너 – 미국 공급망 강화</li>
          <li>• <b>Mosaic / Nispera 고객:</b> Atmos Renewables, Tilt Renewables, Aediles, Lekela 등 재생에너지 자산 운영사</li>
        </ul>
      </Card>
    </div>
  );
}

// 6) 진출 고려사항 & SWOT
function ConsiderationSwotSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <SectionTitle title="신규 진입자를 위한 핵심 고려 사항" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>• 저마진 하드웨어 기반 사업 구조에서 자본·공급망 리스크를 감당할 수 있는 재무 체력</li>
          <li>• UL 9540A 등 최고 수준 안전성 및 열폭주 확산 방지 설계 역량</li>
          <li>• Mosaic·Nispera 유사 AI 최적화·APM 소프트웨어 역량 – 고마진 ARR 확보의 핵심</li>
          <li>• OBBBA·IRA, 관세·FEOC 규제 등 미국 정책 환경에 대한 이해와 국내 생산 전략</li>
          <li>• 대형 프로젝트를 제때·예산 내에 실행할 수 있는 EPC·프로젝트 관리 능력</li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="신규 진입자 관점 SWOT" />
        <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
          <div>
            <h3 className="font-semibold text-emerald-700 mb-1">Strengths</h3>
            <ul className="space-y-1 text-slate-700">
              <li>• 고마진 소프트웨어 중심 BM 설계 가능</li>
              <li>• 기술 중립적 플랫폼으로 타사 자산까지 타깃</li>
              <li>• 데이터센터·신규 시장 등 성장 모멘텀</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-rose-700 mb-1">Weaknesses</h3>
            <ul className="space-y-1 text-slate-700">
              <li>• 초기 레퍼런스 부족, 신뢰도 제약</li>
              <li>• 높은 CAPEX·운전자본 요구</li>
              <li>• 긴 프로젝트 사이클로 인한 캐시플로우 부담</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sky-700 mb-1">Opportunities</h3>
            <ul className="space-y-1 text-slate-700">
              <li>• 구조적 ESS 수요 성장, 데이터센터 TAM</li>
              <li>• OBBBA/IRA 등 정책 인센티브</li>
              <li>• FEOC 규제로 인한 일부 경쟁 제약</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-amber-700 mb-1">Threats</h3>
            <ul className="space-y-1 text-slate-700">
              <li>• Tesla·중국 업체 등 가격 경쟁</li>
              <li>• 관세·정책 변화에 따른 불확실성</li>
              <li>• 수익성 전환까지 장기간 적자 위험</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}

// 메인 컴포넌트
export default function FluenceOverviewPage() {
  const [activeTab, setActiveTab] = React.useState("회사 개요");

  const renderTab = () => {
    switch (activeTab) {
      case "회사 개요":
        return <OverviewSection />;
      case "연혁":
        return <HistorySection />;
      case "비즈니스 모델":
        return <BusinessModelSection />;
      case "성장 전략":
        return <GrowthStrategySection />;
      case "협업 사례":
        return <PartnershipSection />;
      case "진출 고려사항 & SWOT":
        return <ConsiderationSwotSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <PageLayout>
      <header className="mb-8">
        <p className="text-xs font-medium tracking-wide text-sky-600 uppercase mb-1">
          Fluence Energy, Inc.
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
          Fluence Group Overview
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Fluence는 Siemens와 AES가 공동 설립한 글로벌 에너지 저장 리더로, Utility-scale ESS 제품, 장기 서비스, AI 기반 디지털 애플리케이션을 결합한 통합 솔루션을 통해 전 세계 전력 시스템의 탈탄소화와 안정성을 동시에 추구합니다.
        </p>
      </header>

      <section className="mb-6">
        <Tabs active={activeTab} onChange={setActiveTab} />
      </section>

      <main className="mb-10">{renderTab()}</main>
    </PageLayout>
  );
}
