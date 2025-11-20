import React, { useState } from 'react';
import { 
  Globe, 
  TrendingUp, 
  Users, 
  Zap, 
  Activity, 
  Droplets, 
  Shield, 
  Search,
  Lightbulb,
  LayoutGrid,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

// --- 메인 컴포넌트 ---
export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewTab />;
      case 'history': return <HistoryTab />;
      case 'business': return <BusinessModelTab />;
      case 'growth': return <GrowthStrategyTab />;
      case 'collab': return <CollaborationTab />;
      case 'swot': return <SwotTab />;
      default: return <OverviewTab />;
    }
  };

  const navItems = [
    { id: 'overview', label: '회사 개요', icon: LayoutGrid },
    { id: 'history', label: '연혁', icon: Activity },
    { id: 'business', label: '비즈니스 모델', icon: Zap },
    { id: 'growth', label: '성장 전략', icon: TrendingUp },
    { id: 'collab', label: '협업 사례', icon: Users },
    { id: 'swot', label: 'SWOT & 전략', icon: Search },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      {/* 상단 네비게이션 바 */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 p-1.5 rounded-lg">
                <Zap className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-tight">Itron <span className="font-light text-blue-400">Group</span></span>
            </div>
            
            {/* 데스크탑 메뉴 */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                    activeTab === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>

            {/* 모바일 메뉴 버튼 */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* 모바일 메뉴 드롭다운 */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeTab === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* 메인 컨텐츠 영역 */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 min-h-[600px] p-6 md:p-8 animate-fade-in">
          {renderContent()}
        </div>
      </main>

      {/* 푸터 */}
      <footer className="bg-white border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-slate-500">
          &copy; 2024 Itron Group Overview Dashboard. Generated for Analysis.
        </div>
      </footer>
    </div>
  );
}

// --- 1. 회사 개요 탭 ---
function OverviewTab() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-wide mb-4">
            GLOBAL LEADER
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            지능형 인프라를 통해<br />
            <span className="text-blue-600">더 풍요로운 세상</span>을 만듭니다.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Itron은 유틸리티와 도시가 에너지와 물을 더 효율적이고 안전하게 관리하도록 돕는 검증된 글로벌 파트너입니다. 
            단순한 계량기 제조사를 넘어, <strong>데이터 분석, IoT 플랫폼, 그리드 엣지 인텔리전스</strong>를 제공하는 기술 기업으로 진화했습니다.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <StatBox icon={Globe} label="글로벌 진출" value="100개국+" />
            <StatBox icon={Users} label="고객사" value="8,000개+" />
            <StatBox icon={Zap} label="엔드포인트 공급" value="2.8억 개" />
            <StatBox icon={Activity} label="관리 중인 기기" value="1억 개+" />
          </div>
        </div>

        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" 
            alt="Global Connectivity" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-6">
            <p className="text-white font-medium">Connecting the World's Infrastructure</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-8">
        <h3 className="text-xl font-bold text-slate-800 mb-6">재무 성장 궤적 (매출 추이)</h3>
        <div className="bg-slate-50 rounded-xl p-6">
          <SimpleBarChart />
          <p className="text-center text-xs text-slate-400 mt-4">* IR 자료 기반 연간 매출 추정치 (단위: US$ Billion)</p>
        </div>
      </div>
    </div>
  );
}

// --- 2. 연혁 탭 ---
function HistoryTab() {
  const milestones = [
    { 
      title: "초기 혁신 (Founding Era)", 
      desc: "AMR(자동 검침) 기술을 개척하여 수동 검침을 자동화하고 데이터 수집의 효율성을 혁신했습니다.",
      icon: Search
    },
    { 
      title: "AMI 시대로의 도약", 
      desc: "단순 검침을 넘어 양방향 통신이 가능한 AMI(지능형 검침 인프라)를 구축하여 유틸리티 비즈니스의 핵심 인프라를 제공했습니다.",
      icon: Zap
    },
    { 
      title: "현재: Grid Edge & Smart City", 
      desc: "배전망의 끝단(Grid Edge)까지 지능을 확장하고, AI 기반 분석과 스마트 시티 솔루션을 통합한 IoT 플랫폼 기업으로 도약했습니다.",
      icon: Globe
    }
  ];

  return (
    <div>
       <h2 className="text-2xl font-bold text-slate-900 mb-2">혁신의 여정</h2>
       <p className="text-slate-600 mb-8">단순 하드웨어 제조사에서 데이터 중심의 플랫폼 기업으로의 진화</p>
       
       <div className="relative border-l-4 border-blue-200 ml-6 space-y-12 my-10">
         {milestones.map((item, idx) => (
           <div key={idx} className="relative pl-8">
             <div className="absolute -left-[21px] top-0 bg-blue-600 border-4 border-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
               <item.icon className="w-5 h-5 text-white" />
             </div>
             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
               <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
               <p className="text-slate-600 leading-relaxed">{item.desc}</p>
             </div>
           </div>
         ))}
       </div>
    </div>
  );
}

// --- 3. 비즈니스 모델 탭 ---
function BusinessModelTab() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-900 text-white rounded-xl p-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
           <Zap className="w-64 h-64" />
        </div>
        <h2 className="text-2xl font-bold mb-4 relative z-10">핵심 가치: 지능형 자원 관리 관제탑</h2>
        <p className="text-blue-100 leading-relaxed max-w-3xl relative z-10">
          Itron은 하드웨어(미터), 네트워크(통신), 소프트웨어(분석)를 수직 통합하여 제공합니다. 
          이를 통해 고객은 단순히 자원을 측정하는 것을 넘어, <strong>실시간으로 감지하고 분석하며 제어</strong>할 수 있습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="1. 계량 및 인프라" icon={Zap}>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></div>전기, 가스, 수도 스마트 미터</li>
            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></div>AMI 통신 네트워크 구축</li>
            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></div>Intelis 가스 미터 (안전 기능)</li>
          </ul>
        </Card>
        <Card title="2. 그리드 엣지 & DI" icon={Activity}>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></div>엣지 디바이스 데이터 분석</li>
            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></div>정전 감지 및 부하 관리</li>
            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></div>DERMS (분산 자원 통합)</li>
          </ul>
        </Card>
        <Card title="3. 스마트 시티 & SW" icon={LayoutGrid}>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5"></div>CityEdge 플랫폼 (가로등 제어)</li>
            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5"></div>수도 관리 클라우드 (Temetra)</li>
            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5"></div>데이터 공유 허브 (DataHub)</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

// --- 4. 성장 전략 탭 ---
function GrowthStrategyTab() {
  const strategies = [
    { title: "그리드 엣지 인텔리전스", desc: "중앙 제어를 넘어 엣지(단말) 컴퓨팅 강화" },
    { title: "탈탄소화 & 에너지 전환", desc: "재생 에너지 통합 및 CO2 감축 지원" },
    { title: "운송 수단 전력화 (EV)", desc: "EV 충전 부하 관리 및 플릿 최적화" },
    { title: "파트너 생태계 확장", desc: "개방형 API 및 개발자 프로그램 활성화" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">미래 성장 동력</h2>
        <p className="text-slate-600">
          전통적인 미터링 시장의 성숙을 넘어, 데이터와 친환경 에너지 전환이라는 거대한 파도를 타고 성장합니다.
        </p>
        <div className="grid grid-cols-1 gap-4">
          {strategies.map((s, i) => (
            <div key={i} className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{s.title}</h4>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden h-[400px] shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop" 
          alt="Smart Grid Concept" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

// --- 5. 협업 사례 탭 ---
function CollaborationTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">글로벌 성공 사례</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CaseCard 
          title="시카고 (Chicago)" 
          category="스마트 시티"
          stat="1억 달러 절감"
          desc="스마트 가로등 교체를 통해 10년간 에너지 및 유지보수 비용 1억 달러 이상 절감 예상"
          img="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1000&auto=format&fit=crop"
        />
        <CaseCard 
          title="BC Hydro" 
          category="전력 그리드"
          stat="에너지 절도 80% ↓"
          desc="스마트 그리드 데이터 분석을 통해 전력 절도를 획기적으로 줄이고 안전성 확보"
          img="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=1000&auto=format&fit=crop"
        />
        <CaseCard 
          title="Rogers Water" 
          category="수도 유틸리티"
          stat="누수 18% → 5%"
          desc="음향 누수 센서를 활용하여 무수수량(돈이 되지 않고 새는 물)을 획기적으로 감축"
          img="https://images.unsplash.com/photo-1523538290311-a6e4baae4681?q=80&w=1000&auto=format&fit=crop"
        />
      </div>
    </div>
  );
}

// --- 6. SWOT 탭 ---
function SwotTab() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-slate-900">신규 진입자 관점 분석</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <SwotCard type="S" title="강점 (Strength)" items={[
           "특정 고가치 틈새 시장(EV 플릿, 특수 센서) 집중 가능",
           "Itron의 개방형 생태계에 '파트너'로 진입하여 인프라 구축 비용 절감"
         ]} />
         <SwotCard type="W" title="약점 (Weakness)" items={[
           "규모의 경제 및 8,000개 이상의 레퍼런스 부족",
           "보수적인 유틸리티 시장 특성상 신뢰 구축에 장시간 소요"
         ]} />
         <SwotCard type="O" title="기회 (Opportunity)" items={[
           "폭발적인 EV 충전 수요에 따른 그리드 부하 관리 솔루션",
           "전 세계적인 탈탄소화 정책 및 노후 인프라 효율화 니즈"
         ]} />
         <SwotCard type="T" title="위협 (Threat)" items={[
           "기존 AMI 네트워크의 강력한 락인(Lock-in) 효과",
           "Itron의 독점적인 분산 지능(DI) 기술 장벽"
         ]} />
      </div>

      <div className="bg-slate-800 text-slate-200 rounded-xl p-6 mt-6 flex items-start gap-4">
        <Lightbulb className="w-8 h-8 text-yellow-400 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-bold text-white mb-2">전략적 제언</h3>
          <p className="text-sm leading-relaxed">
            Itron과 전면전을 펼치기보다는, 그들의 <strong>플랫폼(CityEdge, DataHub) 위에 올라타는 애플리케이션 파트너 전략</strong>이 유효합니다. 
            특히 EV 충전 관리나 특수 목적의 센서 데이터 분석과 같이 Itron이 커버하지 못하는 <strong>'라스트 마일'의 고통을 해결</strong>하는 틈새 솔루션으로 진입하십시오.
          </p>
        </div>
      </div>
    </div>
  );
}


// --- 보조 컴포넌트들 ---

function StatBox({ icon: Icon, label, value }) {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
      <div className="bg-blue-50 p-3 rounded-full">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <div>
        <div className="text-xs text-slate-500 font-medium">{label}</div>
        <div className="text-lg font-bold text-slate-900">{value}</div>
      </div>
    </div>
  );
}

function Card({ title, icon: Icon, children }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
        <Icon className="w-5 h-5 text-blue-600" />
        <h3 className="font-bold text-slate-800">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function CaseCard({ title, category, stat, desc, img }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all group">
      <div className="h-40 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="p-6">
        <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">{category}</div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
        <div className="text-2xl font-bold text-slate-800 mb-3">{stat}</div>
        <p className="text-sm text-slate-500 line-clamp-3">{desc}</p>
      </div>
    </div>
  );
}

function SwotCard({ type, title, items }) {
  const styles = {
    S: "bg-blue-50 border-l-4 border-blue-500 text-blue-900",
    W: "bg-orange-50 border-l-4 border-orange-500 text-orange-900",
    O: "bg-green-50 border-l-4 border-green-500 text-green-900",
    T: "bg-red-50 border-l-4 border-red-500 text-red-900"
  };

  return (
    <div className={`p-6 rounded-r-xl ${styles[type]}`}>
      <h3 className="font-bold text-lg mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start text-sm opacity-90">
            <span className="mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SimpleBarChart() {
  const data = [
    { year: '2021', value: 2.0, height: '83%' },
    { year: '2022', value: 1.8, height: '75%' },
    { year: '2023', value: 2.2, height: '91%' },
    { year: '2024', value: 2.4, height: '100%' },
  ];

  return (
    <div className="h-64 flex items-end justify-around gap-4 px-4 pt-10 pb-2">
      {data.map((d) => (
        <div key={d.year} className="w-full max-w-[100px] flex flex-col items-center gap-2 group">
          <div className="relative w-full bg-blue-100 rounded-t-lg overflow-hidden" style={{ height: '200px' }}>
             <div 
               className="absolute bottom-0 left-0 right-0 bg-blue-600 transition-all duration-1000 group-hover:bg-blue-500"
               style={{ height: d.height }}
             >
               <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                 ${d.value}B
               </div>
             </div>
          </div>
          <div className="text-sm font-medium text-slate-600">{d.year}</div>
        </div>
      ))}
    </div>
  );
}