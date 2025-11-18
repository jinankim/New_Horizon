// src/renew_home_webjsx.jsx
import React from "react";

/* ================================
   간단 UI 컴포넌트 셋 (Card / Tabs / Badge)
   => ./ui-shim 없이 이 파일 하나로 실행 가능
   ================================ */

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/* ----- Card ----- */

function Card({ className, ...props }) {
  return (
    <div
      className={cn("bg-white rounded-2xl border border-slate-200", className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      className={cn("px-5 py-4 border-b border-slate-100", className)}
      {...props}
    />
  );
}

function CardTitle({ className, children, ...props }) {
  return (
    <h2 className={cn("font-semibold text-slate-900", className)} {...props}>
      {children}
    </h2>
  );
}

function CardContent({ className, ...props }) {
  return <div className={cn("px-5 py-4", className)} {...props} />;
}

/* ----- Tabs ----- */

const TabsContext = React.createContext(null);

function Tabs({ defaultValue, className, children }) {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({ className, ...props }) {
  return (
    <div
      className={cn("inline-flex items-center gap-2 flex-wrap", className)}
      {...props}
    />
  );
}

function TabsTrigger({ value, className, children, ...props }) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error("TabsTrigger must be used inside <Tabs>");

  const active = ctx.value === value;

  return (
    <button
      type="button"
      onClick={() => ctx.setValue(value)}
      className={cn(
        "px-3 py-2 text-xs md:text-sm rounded-full border transition",
        className,
        active
          ? "bg-slate-900 text-white border-slate-900"
          : "bg-white text-slate-500 border-slate-200 hover:border-slate-400"
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function TabsContent({ value, className, children, ...props }) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error("TabsContent must be used inside <Tabs>");
  if (ctx.value !== value) return null;

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

/* ----- Badge ----- */

function Badge({ className, children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium",
        "bg-slate-900 text-white",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

/* ================================
   메인 페이지 컴포넌트
   ================================ */

export default function RenewHomePage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* 헤더 영역 */}
        <header className="text-center space-y-3">
          <p className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
            VPP · DER · Demand Response
          </p>
          <h1 className="text-4xl font-bold">Renew Home Overview</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
            Google의 Nest Renew 서비스와 DR 스타트업 OhmConnect의 합병으로 탄생한 북미 최대 주거용 가상 발전소(VPP)
            플랫폼 Renew Home에 대한 종합 분석 페이지입니다.
          </p>

          {/* 상단 서브 태그 버튼들 (예시) */}
          <div className="flex flex-wrap justify-center gap-2 pt-2 text-xs md:text-sm">
            <span className="px-3 py-1 rounded-full border bg-white shadow-sm">
              Renew Home
            </span>
            <span className="px-3 py-1 rounded-full border bg-white shadow-sm">
              Nest Renew
            </span>
            <span className="px-3 py-1 rounded-full border bg-white shadow-sm">
              OhmConnect
            </span>
            <span className="px-3 py-1 rounded-full border bg-white shadow-sm">
              SIP 투자
            </span>
            <span className="px-3 py-1 rounded-full border bg-white shadow-sm">
              유틸리티 · OEM 파트너
            </span>
          </div>
        </header>

        {/* 상단 탭 네비게이션 */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2 bg-transparent p-0">
            <TabsTrigger
              value="overview"
              className="rounded-full text-xs md:text-sm"
            >
              회사 개요
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="rounded-full text-xs md:text-sm"
            >
              연혁
            </TabsTrigger>
            <TabsTrigger
              value="model"
              className="rounded-full text-xs md:text-sm"
            >
              비즈니스 모델
            </TabsTrigger>
            <TabsTrigger
              value="strategy"
              className="rounded-full text-xs md:text-sm"
            >
              성장 전략
            </TabsTrigger>
            <TabsTrigger
              value="collab"
              className="rounded-full text-xs md:text-sm"
            >
              협업 사례
            </TabsTrigger>
            <TabsTrigger
              value="entry"
              className="rounded-full text-xs md:text-sm"
            >
              진출 고려사항 &amp; SWOT
            </TabsTrigger>
          </TabsList>

          {/* 1. 회사 개요 탭 */}
          <TabsContent value="overview" className="mt-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* 회사 정체성 카드 (왼쪽) */}
              <Card className="shadow-sm rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base md:text-lg flex items-center gap-2">
                    <span className="text-xl">🏢</span>
                    <span>회사 정체성</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed space-y-3">
                  <p>
                    Renew Home은 2023년 말 Google의 <strong>Nest Renew</strong>{" "}
                    서비스와 <strong>OhmConnect</strong>가 합병되면서 설립된
                    주거용 VPP 플랫폼 기업입니다. Sidewalk Infrastructure
                    Partners(SIP)가 약 1억 달러를 투자하며 대주주가 되었고,
                    Alphabet는 소수 지분을 보유한 전략적 파트너로 참여하고
                    있습니다.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    <li>북미 최대 규모의 주거용 VPP 플랫폼(자칭)</li>
                    <li>
                      스마트 온도조절기, 스마트 온수기, EV 충전 등을 하나의
                      전력 자원처럼 통합
                    </li>
                    <li>
                      고객에게는 현금·포인트 보상, 유틸리티에는 저렴한 피크
                      대응 수단 제공
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* 규모/지표 카드 (오른쪽) */}
              <Card className="shadow-sm rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base md:text-lg flex items-center gap-2">
                    <span className="text-xl">📈</span>
                    <span>규모 및 성장 목표(추정)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed space-y-3">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-xl bg-slate-50 p-3">
                      <p className="text-[10px] text-slate-500">연결 가구 수</p>
                      <p className="text-lg font-semibold">5M+</p>
                      <p className="text-[11px] text-slate-500">미국 전역</p>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3">
                      <p className="text-[10px] text-slate-500">관리 용량</p>
                      <p className="text-lg font-semibold">3 GW</p>
                      <p className="text-[11px] text-slate-500">
                        제어 가능한 수요
                      </p>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3">
                      <p className="text-[10px] text-slate-500">2030 목표</p>
                      <p className="text-lg font-semibold">50 GW</p>
                      <p className="text-[11px] text-slate-500">
                        누적 부하 관리
                      </p>
                    </div>
                  </div>

                  {/* 의사 그래프 영역 */}
                  <div className="mt-3">
                    <p className="text-[11px] text-slate-500 mb-1">
                      용량 성장 이미지 (개념도)
                    </p>
                    <div className="h-32 rounded-xl border bg-gradient-to-t from-slate-50 to-white flex items-end gap-2 px-4 pb-3">
                      {[0.4, 0.7, 0.9, 1].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-full bg-sky-200"
                          style={{ height: `${h * 100}%` }}
                        />
                      ))}
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">
                      * 실제 수치는 공개 자료와 내부 가정에 기반한 개념적 표현
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 주요 고객·파트너 요약 카드 */}
            <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base md:text-lg flex items-center gap-2">
                  <span className="text-xl">🤝</span>
                  <span>주요 고객 · 파트너</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4 text-sm leading-relaxed">
                <div>
                  <p className="font-semibold mb-1">유틸리티 / 리테일러</p>
                  <p className="text-slate-700 text-[13px]">
                    미국 전역 100개 이상의 유틸리티와 DR 프로그램(Rush Hour
                    Rewards 등)을 연동하여, 피크 시간대 부하 감소 자원을
                    공급합니다.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">기술 / 생태계 파트너</p>
                  <p className="text-slate-700 text-[13px]">
                    Google Cloud, NRG Energy, LG, SunPower, Rheem, Honeywell
                    등과 협력하여 DER 통합·AI 기반 VPP 운영·설치 채널을
                    확보하고 있습니다.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 2. 연혁 탭 */}
          <TabsContent value="history" className="mt-6">
            <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base md:text-lg">2. 히스토리</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-relaxed">
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>2013년</strong> – OhmConnect 설립, 캘리포니아를
                    중심으로 주거용 수요반응(DR) 프로그램 운영 및 현금 보상
                    모델 확립
                  </li>
                  <li>
                    <strong>2010년대 중반</strong> – Google, Nest Labs 인수 후
                    스마트 온도조절기 기반 에너지 효율화 서비스 전개
                  </li>
                  <li>
                    <strong>2021~2023년</strong> – Nest Renew를 통해 재생 에너지
                    비중이 높은 시간대로 부하를 이동시키는 Energy Shift 기능
                    고도화
                  </li>
                  <li>
                    <strong>2022년</strong> – OhmConnect, Series D 등 VC 투자로
                    누적 1억 달러 이상 자본 조달 및 VPP 용량 확대
                  </li>
                  <li>
                    <strong>2023년 말</strong> – Nest Renew + OhmConnect 합병,
                    SIP의 1억 달러 투자 유치와 함께 Renew Home 출범
                  </li>
                </ul>
                <p className="text-slate-600">
                  요약하면, <strong>기술·UX 강점(Google)</strong>과{" "}
                  <strong>시장·수익화 역량(OhmConnect)</strong>을 결합하여
                  대규모 주거용 VPP 플랫폼을 구축한 인수·합병(M&amp;A)
                  사례입니다.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 3. 비즈니스 모델 탭 */}
          <TabsContent value="model" className="mt-6">
            <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base md:text-lg">
                  3. 비즈니스 모델 (4단계 선순환 구조)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="step1" className="w-full">
                  <TabsList className="flex flex-wrap gap-2 bg-transparent p-0">
                    <TabsTrigger
                      value="step1"
                      className="rounded-full text-xs md:text-sm"
                    >
                      ① 고객 참여
                    </TabsTrigger>
                    <TabsTrigger
                      value="step2"
                      className="rounded-full text-xs md:text-sm"
                    >
                      ② VPP 자원화
                    </TabsTrigger>
                    <TabsTrigger
                      value="step3"
                      className="rounded-full text-xs md:text-sm"
                    >
                      ③ 그리드 판매
                    </TabsTrigger>
                    <TabsTrigger
                      value="step4"
                      className="rounded-full text-xs md:text-sm"
                    >
                      ④ 수익 분배
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent
                    value="step1"
                    className="mt-4 text-sm leading-relaxed"
                  >
                    <p className="font-semibold mb-1">
                      고객 참여(Enrollment)
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      <li>
                        고객은 Nest 온도조절기, 스마트 온수기, EV 충전기 등을
                        플랫폼에 무료로 연결
                      </li>
                      <li>
                        유틸리티·리테일러 채널을 통한{" "}
                        <strong>옵트아웃(Opt-out)</strong> 방식 등록으로 진입
                        장벽 최소화
                      </li>
                      <li>
                        전기요금 절감 + 현금·기프트 카드 보상이라는 명확한
                        인센티브 제공
                      </li>
                    </ul>
                  </TabsContent>

                  <TabsContent
                    value="step2"
                    className="mt-4 text-sm leading-relaxed"
                  >
                    <p className="font-semibold mb-1">
                      VPP 자원화(Aggregation &amp; Optimization)
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      <li>
                        수백만 가구의 냉난방·온수·EV 충전을 AI로 예측·제어해
                        하나의 전력 자원처럼 통합
                      </li>
                      <li>
                        날씨, 시장가격, 수요 패턴을 반영하여 실시간 최적화 및
                        스케줄링 수행
                      </li>
                      <li>
                        공급 확대가 아닌{" "}
                        <strong>부하 감소(네가와트)</strong> 자체를 상품화하여
                        용량 자원으로 판매
                      </li>
                    </ul>
                  </TabsContent>

                  <TabsContent
                    value="step3"
                    className="mt-4 text-sm leading-relaxed"
                  >
                    <p className="font-semibold mb-1">
                      그리드 판매(Market Participation)
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      <li>
                        피크 시간대 확보된 부하 감소 용량을 유틸리티 DR
                        프로그램 및 도매 전력시장(CAISO, ERCOT 등)에 판매
                      </li>
                      <li>
                        전통 발전소 대비 40~60% 저렴한 비용으로 용량 제공,
                        유틸리티의 피크 대응 비용 절감
                      </li>
                      <li>
                        NRG Energy, 지역 유틸리티 등과 파트너십을 통해 다양한
                        상품 형태로 수익 극대화
                      </li>
                    </ul>
                  </TabsContent>

                  <TabsContent
                    value="step4"
                    className="mt-4 text-sm leading-relaxed"
                  >
                    <p className="font-semibold mb-1">
                      수익 분배(Revenue Sharing)
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      <li>
                        시장 참여 수익의 일부를 고객에게 현금·포인트·기프트
                        카드로 지급
                      </li>
                      <li>
                        2024년 Rush Hour Rewards 참가자에게만 4천만 달러 이상
                        보상이 지급된 것으로 추정
                      </li>
                      <li>
                        명확한 보상 구조를 통해 재참여율, 추천(Referral), 장기
                        유지(Retention)를 강화
                      </li>
                    </ul>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 4. 성장 전략 탭 */}
          <TabsContent value="strategy" className="mt-6">
            <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base md:text-lg">
                  4. 성장 전략 (4대 축)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed">
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>
                    <strong>[기술] DER 생태계 확장</strong> – HVAC 중심에서 EV,
                    가정용 배터리(ESS), 스마트 온수기까지 확장하여 하나의
                    통합 플랫폼 구축
                  </li>
                  <li>
                    <strong>[시장] 유틸리티·도매시장 직접 접근</strong> – 미국
                    100개 이상 유틸리티와 DR 프로그램 연동, CAISO·ERCOT 등
                    도매 시장 직접 참여
                  </li>
                  <li>
                    <strong>[고객] 마찰 없는 등록(Frictionless)</strong> –
                    옵트아웃 구조, POS 시점 등록, 간편 인증 등을 통해 CAC를
                    낮추고 가입률 확대
                  </li>
                  <li>
                    <strong>[채널] OEM 기반 B2B2C 확대</strong> – LG, SunPower,
                    Rheem 등 제조사 및 지역 설치업체와 제휴하여 설치 순간에
                    VPP 가입을 자연스럽게 연계
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 5. 전략적 협업 사례 탭 */}
          <TabsContent value="collab" className="mt-6">
            <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base md:text-lg">
                  5. 전략적 협업 사례
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed">
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>
                    <strong>Google / Alphabet</strong> – Nest 하드웨어 및 UX,
                    클라우드·AI 역량을 제공하며 소수 지분을 보유한 전략적
                    파트너
                  </li>
                  <li>
                    <strong>SIP(Sidewalk Infrastructure Partners)</strong> – 1억
                    달러 투자 및 대주주 지위, 장기 인프라 관점에서 VPP 사업을
                    지원
                  </li>
                  <li>
                    <strong>NRG Energy &amp; Google Cloud</strong> – 텍사스
                    ERCOT 시장에서 최대 1GW 규모 AI 기반 VPP 구축 협력
                  </li>
                  <li>
                    <strong>Rheem</strong> – 스마트 온수기 설치 시점에 VPP
                    가입을 연계하는 Plug &amp; Play 모델 구현, 2030년까지
                    16GW 이상 잠재 용량 확보의 핵심 파트너
                  </li>
                  <li>
                    <strong>OEM &amp; 설치업체 네트워크</strong> – LG, SunPower,
                    Honeywell, 지역 HVAC 설치업체 등과 협력하여 전국 단위
                    채널 확보
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 6. 진출 고려사항 & SWOT 탭 */}
          <TabsContent value="entry" className="mt-6 space-y-6">
            {/* 신규 진입 고려사항 */}
            <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base md:text-lg">
                  6. 신규 진입 시 고려해야 할 사항
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed">
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>
                    <strong>기술 장벽</strong> – 다양한 DER를 통합·제어하는
                    플랫폼 설계, AI 기반 수요 예측 및 최적화 엔진 확보가 필수
                  </li>
                  <li>
                    <strong>시장 접근성</strong> – CAISO·ERCOT 등 도매시장
                    참여 자격, 각 주(State)별 DR 규제 이해 및 유틸리티 제휴
                    체결 필요
                  </li>
                  <li>
                    <strong>고객 인센티브 설계</strong> – 단순 요금 할인보다
                    강력한 현금·포인트 보상 구조 설계와 안정적인 재원 조달
                    계획 필요
                  </li>
                  <li>
                    <strong>대규모 초기 자본</strong> – 플랫폼 구축, 채널
                    파트너십, 마케팅을 위한 수천만~억 단위(달러)의 초기 자본
                    확보 필요
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* SWOT 분석 */}
            <Card className="shadow-sm rounded-2xl mb-4">
              <CardHeader>
                <CardTitle className="text-base md:text-lg">
                  7. SWOT 분석 (Renew Home 유형 비즈니스)
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6 text-sm leading-relaxed">
                <div className="border rounded-xl p-4 bg-green-50">
                  <Badge className="mb-2">Strengths</Badge>
                  <ul className="list-disc pl-6 space-y-1 text-slate-700">
                    <li>AI 기반 자동화·최적화 플랫폼 보유</li>
                    <li>자산 경량(Asset-Light) 구조로 CAPEX 부담이 낮음</li>
                    <li>현금 보상 중심의 강력한 고객 가치 제안</li>
                    <li>대규모 유틸리티·OEM 파트너 네트워크</li>
                  </ul>
                </div>
                <div className="border rounded-xl p-4 bg-yellow-50">
                  <Badge className="mb-2">Weaknesses</Badge>
                  <ul className="list-disc pl-6 space-y-1 text-slate-700">
                    <li>신뢰할 수 있는 VPP 용량 형성까지 상당한 시간·비용 소요</li>
                    <li>고객 확보 비용(CAC)이 높을 수 있음</li>
                    <li>주(State)별 상이한 규제로 인한 운영 복잡성</li>
                  </ul>
                </div>
                <div className="border rounded-xl p-4 bg-blue-50">
                  <Badge className="mb-2">Opportunities</Badge>
                  <ul className="list-disc pl-6 space-y-1 text-slate-700">
                    <li>에너지 전환·전기화 확대로 DER·VPP 시장의 구조적 성장</li>
                    <li>미국 정부(DOE)·IRA 등 정책·보조금 지원 확대</li>
                    <li>온수기·EV·배터리 등 신규 자원의 VPP 편입 가능성</li>
                    <li>200GW 수준까지 성장 가능한 잠재 시장</li>
                  </ul>
                </div>
                <div className="border rounded-xl p-4 bg-red-50">
                  <Badge className="mb-2">Threats</Badge>
                  <ul className="list-disc pl-6 space-y-1 text-slate-700">
                    <li>
                      Renew Home과 같은 선도 사업자의 선점 효과 및 규모의
                      경제
                    </li>
                    <li>도매 시장 가격 변동성 및 규제 변화 리스크</li>
                    <li>AI·데이터 기반 경쟁 플랫폼의 등장 가능성</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
