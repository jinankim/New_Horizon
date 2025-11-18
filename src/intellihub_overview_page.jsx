import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "./ui-shim";

import { Building2, BarChart3, Cpu, Zap, Users, Globe, LineChart as LineChartIcon, Landmark, PlugZap, ShieldCheck, Layers, Network, History } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const meterSeries = [
  { year: 2018, meters: 800_000 },
  { year: 2019, meters: 1_200_000 },
  { year: 2020, meters: 1_500_000 },
  { year: 2021, meters: 1_900_000 },
  { year: 2022, meters: 2_200_000 },
  { year: 2023, meters: 2_500_000 },
  { year: 2024, meters: 2_700_000 },
  { year: 2025, meters: 2_800_000 },
];

export default function IntellihubOverview() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-2 text-center">Intellihub Group Overview</h1>
      <p className="text-center max-w-4xl mx-auto mb-6 text-gray-700">
        Intellihub은 호주 및 뉴질랜드(ANZ) 최대의 독립 스마트 계량 및 데이터 전문 기업으로, 스마트 미터 인프라(하드웨어)와 
        데이터·제어 플랫폼(소프트웨어)을 결합해 분산 에너지 자원(CER)을 통합하고 VPP 운영을 가능하게 합니다.
      </p>

      <div className="flex items-center justify-center gap-2 mb-8">
        <Badge variant="secondary">PEP</Badge>
        <Badge variant="secondary">Brookfield</Badge>
        <Badge variant="outline">Green Loan (CBI)</Badge>
        <Badge variant="outline">deX Platform</Badge>
        <Badge variant="outline">EVSE • Zelora • Pooled</Badge>
      </div>

      <Tabs defaultValue="overview" className="max-w-7xl mx-auto">
        <TabsList className="grid grid-cols-6 mb-4">
          <TabsTrigger value="overview">회사 개요</TabsTrigger>
          <TabsTrigger value="history">연혁</TabsTrigger>
          <TabsTrigger value="business">비즈니스 모델</TabsTrigger>
          <TabsTrigger value="strategy">성장 전략</TabsTrigger>
          <TabsTrigger value="collab">협업 사례</TabsTrigger>
          <TabsTrigger value="consider">진출 고려사항 & SWOT</TabsTrigger>
        </TabsList>

        {/* 1) 회사 개요 */}
        <TabsContent value="overview">
          <div className="grid lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle><Building2 className="inline-block w-5 h-5 mr-2"/>회사 정체성</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-4 space-y-2">
                  <li>2018년 설립: Acumen(Origin의 스마트미터 사업) & Metrix(NZ) 통합 기반</li>
                  <li>스마트 미터 250만~280만대 관리, 월 4만대 수준 신규 설치</li>
                  <li>소유 구조: <b>PEP–Brookfield 50/50</b> 공동 소유</li>
                  <li>비전: 데이터와 제어로 <b>지속 가능한 에너지 전환을 단순화</b></li>
                  <li>다중 유틸리티: 전기·온수·수도·EV 충전·태양광·배터리·수영장 부하</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle><LineChartIcon className="inline-block w-5 h-5 mr-2"/>규모 추이(추정)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-60">
                  <ResponsiveContainer>
                    <LineChart data={meterSeries} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="meters" dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-gray-500 mt-2">* 자료 기반 내부 시각화용 가늠치. 세부 수치는 계약/실사 자료로 보정 권장.</p>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle><Users className="inline-block w-5 h-5 mr-2"/>주요 고객·파트너</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">유틸리티/리테일러</h4>
                    <ul className="list-disc ml-4 space-y-1">
                      <li>Origin Energy, Telstra Energy(10년 IoT), Trustpower(NZ), Aurora Energy(TAS)</li>
                      <li>Endeavour Energy(Off Peak+), Hunter Water(디지털 수도 시범)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">기술/생태계</h4>
                    <ul className="list-disc ml-4 space-y-1">
                      <li>GreenSync(deX), Evergen, CrescoNet</li>
                      <li>EVSE(자회사), ENGIE ANZ 충전 네트워크 인수</li>
                      <li>Bunnings(Zelora), Smart(Enreal Home Energy Kit)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 2) 연혁 */}
        <TabsContent value="history">
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle><History className="inline-block w-5 h-5 mr-2"/>주요 설립·M&A</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-4 space-y-2 text-sm">
                  <li>2018: Landis+Gyr & PEP JV로 출범, Acumen 인수, Metrix 인수(NZ)</li>
                  <li>2021: Landis+Gyr 지분 매각 → Brookfield 합류, PEP–Brookfield 50/50 체제</li>
                  <li>2022: GreenSync 인수(deX), Off Peak+ 확대</li>
                  <li>2022~2023: Pooled 자산 인수(수영장 부하), Influx Energy Data 인수(NZ)</li>
                  <li>2024: Downer SAM 일부 자산 인수</li>
                  <li>2025: EVSE가 ENGIE ANZ 공용 충전 네트워크 인수(200+ 충전소)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle><Landmark className="inline-block w-5 h-5 mr-2"/>그린 파이낸싱</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-4 space-y-2 text-sm">
                  <li>2021: CBI 기준 충족 세계 최초 <b>Green Loan 인증</b></li>
                  <li>2025: 약 A$30억 규모 그린 론 증액·리파이낸싱</li>
                  <li>주요 금융기관: ANZ(그린 론 코디네이터), BNP, Crédit Agricole, MUFG, NAB, SMBC, SocGen 등</li>
                  <li>용도: 스마트 미터 대규모 배포 및 인프라 확장</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 3) 비즈니스 모델 */}
        <TabsContent value="business">
          <div className="grid lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle><BarChart3 className="inline-block w-5 h-5 mr-2"/>이중 수익 구조</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal ml-5 space-y-2">
                  <li><b>Metering as a Service</b>: 자산관리·설치·운영·유지보수·금융</li>
                  <li><b>Software & Data</b>: deX 기반 VPP/CER 제어, 고속 데이터 분석, FCAS 연계</li>
                </ol>
                <p className="mt-2 text-sm text-gray-600">다중 제조사(EDMI, Landis+Gyr, Honeywell 등) 조달로 하드웨어 독립성 확보.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle><Cpu className="inline-block w-5 h-5 mr-2"/>Beyond the Meter 포트폴리오</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-4 space-y-2">
                  <li><b>Zelora</b>: 태양광·배터리 구독형 번들(선불비용 장벽 제거)</li>
                  <li><b>EVSE</b>: 가정/공공 EV 충전 인프라 공급 및 네트워크 운영</li>
                  <li><b>Pooled</b>: 수영장 장비 스마트 제어로 대규모 부하(최대 수 GW) 최적화</li>
                  <li><b>임베디드 온수·수도</b>: 온수 부하 동적 제어, 디지털 수도 계량</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle><Network className="inline-block w-5 h-5 mr-2"/>데이터·연결성</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-4 space-y-2">
                  <li>Telstra와 10년 IoT 계약: 최대 수백만 연결 장치 수용</li>
                  <li>엣지 컴퓨팅/고속 측정 기반 실시간 제어 및 분석</li>
                  <li>다양한 OEM·프로토콜과 상호운용성 확보(플랫폼 통합 방식)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 4) 성장 전략 */}
        <TabsContent value="strategy">
          <div className="grid lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle><Zap className="inline-block w-5 h-5 mr-2"/>스케일 & 풋프린트</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-4 space-y-2">
                  <li>공격적 보급: 월 4만대 수준 설치로 시장 장악</li>
                  <li>지역 전진배치: TasMetering 설립(태즈메이니아) 등 현지화</li>
                  <li>NZ 확장: Influx 인수 및 별도 NZ 리더십 배치</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle><Layers className="inline-block w-5 h-5 mr-2"/>플랫폼 수직 확장</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-4 space-y-2">
                  <li>GreenSync 인수로 deX 내재화, 다양한 CER 통합·제어</li>
                  <li>고부하 자원(수영장, 온수) VPP 편입으로 그리드 안정화</li>
                  <li>EV 충전 네트워크 확대(ENGIE ANZ 자산 편입)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle><ShieldCheck className="inline-block w-5 h-5 mr-2"/>거버넌스·보안·ESG</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-4 space-y-2">
                  <li>시장 선도 규정 준수와 안전 최우선 문화</li>
                  <li>대규모 에너지 데이터 보안·사이버 복원력 강화</li>
                  <li>ESG 프레임워크 기반 지속가능 경영 및 녹색 금융</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 5) 협업 사례 */}
        <TabsContent value="collab">
          <div className="grid lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle><PlugZap className="inline-block w-5 h-5 mr-2"/>유틸리티/공공</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-4 space-y-2 text-sm">
                  <li>Endeavour Energy <b>Off Peak+</b>: 일라와라 지역 온수 부하 제어(2,500+ 스마트미터 연계)</li>
                  <li>Hunter Water: 디지털 수도 미터 시범 운영</li>
                  <li>Aurora Energy(TAS): 계량 코디네이터 선정, TasMetering 운영</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle><Users className="inline-block w-5 h-5 mr-2"/>민간·기술 파트너</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-4 space-y-2 text-sm">
                  <li>Origin Energy: 장기 MSA 확대, 임베디드 네트워크 미터 인수</li>
                  <li>Telstra Energy: <b>10년 IoT 계약</b>으로 대규모 연결성 확보</li>
                  <li>Bunnings: <b>Zelora</b> 구독형 태양광·배터리 출시(파일럿)</li>
                  <li>Smart(Enreal): 홈 에너지 키트(태양광·배터리·최적화) 공동 제공</li>
                  <li>ENGIE: ANZ 공용 충전 네트워크 인수(200+ 충전소)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 6) 진출 고려사항 & SWOT */}
        <TabsContent value="consider">
          <div className="grid lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle><Globe className="inline-block w-5 h-5 mr-2"/>핵심 고려사항</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal ml-5 space-y-2 text-sm">
                  <li><b>인프라·규모</b>: 대량 설치·운영·유지보수 E2E 역량과 다중 유틸리티 확장</li>
                  <li><b>자본</b>: 그린 파이낸싱/인프라 투자자 파트너십(PEP/Brookfield 유사)</li>
                  <li><b>플랫폼</b>: VPP/CER 제어 SW 내재화(deX 유사), OEM 상호운용성</li>
                  <li><b>시장 접근</b>: 리테일러·네트워크 장기계약, B2C 구독 모델(Zelora)로 진입장벽 제거</li>
                  <li><b>리스크</b>: 규제 변화, 도매가 변동성, M&A 통합 난이도, 보안·데이터 거버넌스</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle><ShieldCheck className="inline-block w-5 h-5 mr-2"/>SWOT 상세</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold">S 강점</h4>
                    <ul className="list-disc ml-4 space-y-1">
                      <li>ANZ 최대 독립 스마트미터·데이터 사업자</li>
                      <li>PEP–Brookfield 자본력, CBI 인증 그린 론</li>
                      <li>deX 기반 플랫폼과 다각 포트폴리오</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">W 약점</h4>
                    <ul className="list-disc ml-4 space-y-1">
                      <li>자본 집약·부채 의존, 수익성 초기 부담</li>
                      <li>M&A 통합 복잡성, B2C 접점 제한</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">O 기회</h4>
                    <ul className="list-disc ml-4 space-y-1">
                      <li>DER/CER 급성장과 정부 지원(ARENA 등)</li>
                      <li>구독형 모델로 가정 전력화 확대</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">T 위협</h4>
                    <ul className="list-disc ml-4 space-y-1">
                      <li>규제·정책 변화, 표준·상호운용성 리스크</li>
                      <li>도매가격 급등 시 사업 안정성 저하</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
