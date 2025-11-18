import React from "react";

// ===== 공통 유틸 & 레이아웃 =====
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-10">{children}</div>
    </div>
  );
}

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

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 border border-sky-100 mr-2 mb-2">
      {children}
    </span>
  );
}

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

// ===== 재무 데이터 (매출 추이) =====
// 단위: USD Million (Itron IR 기준, 단순화)
const revenueData = [
  { year: "2021", revenue: 2000 }, // US$ 2.0B
  { year: "2022", revenue: 1800 }, // US$ 1.8B
  { year: "2023", revenue: 2200 }, // US$ 2.2B
  { year: "2024", revenue: 2400 }, // US$ 2.4B
];

function GrowthBars() {
  const max = Math.max(...revenueData.map((d) => d.revenue));
  return (
    <div className="space-y-3">
      {revenueData.map((d) => (
        <div
          key={d.year}
          className="flex items-center gap-3 text-xs sm:text-sm"
        >
          <span className="w-12 font-semibold text-slate-600">{d.year}</span>
          <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden">
            <div
              className="bg-sky-500 h-3 rounded-full"
              style={{ width: `${(d.revenue / max) * 100}%` }}
            />
          </div>
          <span className="w-24 text-right text-slate-700">
            {(d.revenue / 1000).toFixed(2)}B
            <span className="text-[10px] text-slate-400 ml-0.5">US$</span>
          </span>
        </div>
      ))}
      <p className="mt-1 text-[11px] text-slate-400">
        * Itron 연간 매출 추이 (Full-year revenue, 2021–2024; 단위: US$ billion, IR 자료 기반 단순화).
      </p>
    </div>
  );
}

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

// ===== 1) 회사 개요 =====
function OverviewSection() {
  return (
    <div className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
      <Card>
        <SectionTitle
          title="회사 정체성"
          subtitle="Itron은 유틸리티와 도시가 에너지·물·가스·조명 인프라를 더 지능적으로 운영하도록 돕는 글로벌 리더로, 스마트 계량·통신 네트워크·데이터 분석·스마트 시티 플랫폼을 통합 제공하는 기술 기업입니다."
        />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>
            • <b>미션:</b> 기술 혁신가·컨설턴트·서비스 파트너와 협력하여 "더 지략 있는 세상(a more resourceful world)"을 만드는 것
          </li>
          <li>
            • <b>글로벌 입지:</b> 100개국 이상에서 8,000개 이상의 전기·가스·수도·도시 고객에게 솔루션 제공
          </li>
          <li>
            • <b>스케일:</b> 2억 8,500만 개 이상의 통신 엔드포인트를 공급하고, 1억 개 이상의 엔드포인트를 관리 중
          </li>
          <li>
            • <b>핵심 영역:</b> AMI(지능형 검침 인프라), 분산 지능(Distributed Intelligence), 그리드 엣지 관리, 데이터·분석, 스마트 시티
          </li>
          <li>
            • <b>고객 유형:</b> 전기·가스·수도·복합 유틸리티, 협동조합, 도시·지자체, 플릿 운영사 등
          </li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="규모 및 임팩트 (재무 중심)" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed mb-4">
          <li>
            • 2021–2024 매출: US$ 2.0B → 1.8B → 2.2B → 2.4B (2024년 전년 대비 약 +12%)
          </li>
          <li>
            • 2024년 기준 백로그 약 US$ 4.3B, 수년치 프로젝트에 대한 높은 매출 가시성
          </li>
          <li>
            • 8,000개 이상의 유틸리티·도시 고객, 100개국에서 2억 8,500만 개 이상의 통신 엔드포인트 공급
          </li>
        </ul>
        <GrowthBars />
      </Card>

      <Card className="md:col-span-2">
        <SectionTitle title="핵심 키워드" />
        <div className="flex flex-wrap">
          <Pill>Advanced Metering Infrastructure</Pill>
          <Pill>Distributed Intelligence (DI)</Pill>
          <Pill>Grid Edge Management</Pill>
          <Pill>Intelis 스마트 가스 계량기</Pill>
          <Pill>Temetra / DataHub</Pill>
          <Pill>CityEdge 스마트 시티 플랫폼</Pill>
        </div>
      </Card>
    </div>
  );
}

// ===== 2) 연혁 =====
function HistorySection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <SectionTitle title="주요 연혁" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>• AMR(자동 검침) 기술을 개척하며 지능형 계량 분야를 선도</li>
          <li>• AMI를 유틸리티 비즈니스의 핵심 인프라로 정립, 수백만 계량기 네트워크 구축</li>
          <li>• 분산 지능(DI) 기반 그리드 엣지 인텔리전스 솔루션 상용화</li>
          <li>• Temetra, CityEdge, DataHub 등 클라우드·데이터 플랫폼 출시</li>
          <li>• 글로벌 스마트 가로등·스마트 시티 레퍼런스 다수 확보</li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="역사적 포지셔닝" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>
            • 계량기 제조사에서 통신·소프트웨어·서비스를 망라한 엔드투엔드 솔루션 기업으로
            진화
          </li>
          <li>
            • 유틸리티 인프라의 디지털 전환을 위한 "표준 레퍼런스" 중 하나로 자리매김
          </li>
          <li>• 스마트 시티·교통 전기화·물 보존 등 인접 영역으로 사업 확장</li>
        </ul>
      </Card>
    </div>
  );
}

// ===== 3) 비즈니스 모델 =====
function BusinessModelSection() {
  return (
    <div className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
      <Card>
        <SectionTitle
          title="엔드투엔드 유틸리티·스마트시티 플랫폼"
          subtitle="계량기·통신망·소프트웨어·분석·서비스를 통합 제공함으로써, 노후 인프라 현대화와 에너지 전환을 동시에 지원하는 구조입니다."
        />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>
            • <b>하드웨어:</b> 전기·가스·수도 스마트 계량기, 통신 모듈, 센서 – AMI/AMR 엔드포인트 공급에서 반복 매출의 기반 확보
          </li>
          <li>
            • <b>네트워크 & 플랫폼:</b> RF Mesh, 셀룰러, 혼합 네트워크와 Head-End 시스템, DataHub, DI 플랫폼 등
          </li>
          <li>
            • <b>소프트웨어 & 분석:</b> MDM, 그리드 엣지 애플리케이션, Temetra, CityEdge, Revenue Assurance 분석 등
          </li>
          <li>
            • <b>서비스:</b> 컨설팅, 설계·구축, O&M, 아웃소싱 검침 서비스 등 전문 서비스
          </li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="수익 구조 요약" />
        <table className="w-full text-sm text-left text-slate-700">
          <tbody>
            <tr>
              <td className="py-1.5 pr-4 text-slate-500">장치·네트워크</td>
              <td className="py-1.5">계량기·통신 인프라 판매, 설치 프로젝트</td>
            </tr>
            <tr>
              <td className="py-1.5 pr-4 text-slate-500">소프트웨어 라이선스</td>
              <td className="py-1.5">MDM, DI 앱, Temetra, CityEdge 등 구독형(SaaS)</td>
            </tr>
            <tr>
              <td className="py-1.5 pr-4 text-slate-500">서비스 & 분석</td>
              <td className="py-1.5">컨설팅, O&M, 분석·리포팅, 데이터 서비스</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}

// ===== 4) 성장 전략 =====
function GrowthStrategySection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <SectionTitle title="그리드 엣지 인텔리전스 강화" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>
            • 분산 지능(DI) 앱을 통해 변전소 너머 배전계통 에지까지 실시간 가시성·제어 확대
          </li>
          <li>
            • EV·태양광·배터리 등 분산 에너지 자원(DER) 인식·제어 기능 고도화
          </li>
          <li>• 전압 관리, 변압기 부하, 전력 품질 모니터링 등 고부가 애플리케이션 확대</li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="데이터·AI 기반 비즈니스 확장" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>• DataHub, Revenue Assurance, NRW 분석 등 데이터 서비스 강화</li>
          <li>• AI 기반 수요·부하 예측, 이상 탐지, 자산 상태 진단 솔루션 개발</li>
          <li>• DI/AI를 활용한 운영 효율·수익 보호·탄소 감축 인사이트 제공</li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="지속 가능한 자원 관리 & 스마트 시티" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>
            • CityEdge를 중심으로 스마트 가로등, 교통, 환경 모니터링, 공공 안전까지 확장
          </li>
          <li>• 물 손실(NRW) 저감, 가스 안전, EV 충전 최적화 등 핵심 과제에 집중</li>
          <li>• 에너지 전환·탈탄소·물 부족 등 구조적 메가트렌드를 성장 축으로 활용</li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="파트너 생태계 강화" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>
            • 기술 혁신가·컨설턴트·서비스·채널 파트너와의 협력을 통한 글로벌 커버리지 확대
          </li>
          <li>• Itron Developer Program으로 DI·연결성 기반 앱 생태계 조성</li>
        </ul>
      </Card>
    </div>
  );
}

// ===== 5) 협업 사례 =====
function PartnershipSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <SectionTitle title="도시·스마트 시티 사례" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>
            • 시카고: LED 가로등 전환으로 10년간 1억달러 이상 비용 절감 예상, 스마트 가로등 인프라 구축
          </li>
          <li>
            • 글래스고: LED 업그레이드로 60% 에너지 절감 및 IIoT 네트워크 기반 도로 안전 개선
          </li>
          <li>• 코펜하겐: 18,500개 이상 네트워크 가로등에서 76% 에너지 절감</li>
          <li>
            • 여러 도시에서 CityEdge·스마트 조명 솔루션을 통해 탄소 감축·운영 효율·시민 안전 향상
          </li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="유틸리티 협업 & 성과" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>
            • ComEd: 스마트 그리드 투자로 정전 빈도 46% 감소, 폭풍 피해 고객 수 32% 감소
          </li>
          <li>• BC Hydro: 스마트 그리드 데이터 활용으로 에너지 절도 80% 절감</li>
          <li>
            • Con Edison: 메탄 감지·분석 솔루션으로 가스 누출의 85%에 30분 이내 대응
          </li>
          <li>
            • Rogers Water: NRW를 18% → 5%로 감소, 연간 20만달러 절감 효과
          </li>
        </ul>
      </Card>
    </div>
  );
}

// ===== 6) 진출 고려사항 & SWOT =====
function ConsiderationSwotSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <SectionTitle title="진출 고려사항" />
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>• 노후 인프라 교체에는 CAPEX와 장기간이 필요</li>
          <li>• AMI·DI·DERMS 등 핵심 기술 및 보안 역량 필수</li>
          <li>• EV·재생에너지·물 손실·가스 안전 등 우선 과제 해결 필요</li>
          <li>• 상호운용성·개방형 표준 기반 통합 설계 중요</li>
          <li>• 규제·인허가·유틸리티 영업 사이클 고려한 장기 전략 필요</li>
        </ul>
      </Card>

      <Card>
        <SectionTitle title="SWOT 분석" />
        <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
          <div>
            <h3 className="font-semibold text-emerald-700 mb-1">Strengths</h3>
            <ul className="space-y-1 text-slate-700">
              <li>• 특정 문제(가스 안전·NRW·EV) 초점 솔루션 가능</li>
              <li>• API 기반 Itron 생태계 활용 가능</li>
              <li>• 최신 클라우드·AI 기반 민첩한 개발</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-rose-700 mb-1">Weaknesses</h3>
            <ul className="space-y-1 text-slate-700">
              <li>• 대규모 엔드포인트 레퍼런스 부족</li>
              <li>• 규제 승인·영업까지 시간 소요</li>
              <li>• 엔드투엔드 포트폴리오 부족</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sky-700 mb-1">Opportunities</h3>
            <ul className="space-y-1 text-slate-700">
              <li>• 스마트시티·EV·DI 확산 구조적 성장</li>
              <li>• 기존 AMI 네트워크 기반 신규 앱 확장</li>
              <li>• 지능형 업그레이드 수요 증가</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-amber-700 mb-1">Threats</h3>
            <ul className="space-y-1 text-slate-700">
              <li>• AMI·DI 네트워크 보유 플레이어의 진입장벽</li>
              <li>• 핵심 인프라 장악 기업과 경쟁</li>
              <li>• 안전성·신뢰성 우선 유틸리티 환경</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}

// ===== 메인 컴포넌트 =====
export default function ItronOverviewPage() {
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
          Itron, Inc.
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
          Itron Group Overview
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Itron은 AMI·분산 지능·스마트 시티 솔루션을 통해 전 세계 유틸리티와 도시가 에너지·물·가스를 더 효율적이고 안전하게 관리하도록 돕는 글로벌 리더입니다. 이 페이지는 회사 개요, 비즈니스 모델, 성장 전략, 협업사례와 함께 신규 진입자 관점에서의 핵심 고려사항과 SWOT을 한 눈에 정리합니다.
        </p>
      </header>

      <section className="mb-6">
        <Tabs active={activeTab} onChange={setActiveTab} />
      </section>

      <main className="mb-10">{renderTab()}</main>
    </PageLayout>
  );
}
