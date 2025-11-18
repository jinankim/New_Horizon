// src/App.jsx
import React, { useState } from "react";
import VppWebPage from "./vpp_webpage";
import ItronOverviewPage from "./itron_visual_jsx_page";   // ✅ Itron
import IntellihubOverviewPage from "./intellihub_overview_page";
import RenewHomePage from "./renew_home_webjsx";
import KrakenOverviewPage from "./kraken_overview_page";
import FluenceOverviewPage from "./fluence_overview_page"; // ✅ Fluence 추가

export default function App() {
  const [page, setPage] = useState("vpp");

  return (
    <div style={{ padding: "20px" }}>
      {/* 버튼 영역 */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
        <button
          onClick={() => setPage("vpp")}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: page === "vpp" ? "#007bff" : "white",
            color: page === "vpp" ? "white" : "black",
            cursor: "pointer",
          }}
        >
          VPP 페이지
        </button>

        <button
          onClick={() => setPage("itron")}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: page === "itron" ? "#007bff" : "white",
            color: page === "itron" ? "white" : "black",
            cursor: "pointer",
          }}
        >
          Itron 페이지
        </button>

        <button
          onClick={() => setPage("fluence")}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: page === "fluence" ? "#007bff" : "white",
            color: page === "fluence" ? "white" : "black",
            cursor: "pointer",
          }}
        >
          Fluence 페이지
        </button>

        <button
          onClick={() => setPage("intellihub")}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: page === "intellihub" ? "#007bff" : "white",
            color: page === "intellihub" ? "white" : "black",
            cursor: "pointer",
          }}
        >
          Intellihub 페이지
        </button>

        <button
          onClick={() => setPage("renew")}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: page === "renew" ? "#007bff" : "white",
            color: page === "renew" ? "white" : "black",
            cursor: "pointer",
          }}
        >
          Renew Home 페이지
        </button>

        <button
          onClick={() => setPage("kraken")}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: page === "kraken" ? "#007bff" : "white",
            color: page === "kraken" ? "white" : "black",
            cursor: "pointer",
          }}
        >
          Kraken 페이지
        </button>
      </div>

      {/* 콘텐츠 출력 영역 */}
      {page === "vpp" && <VppWebPage />}
      {page === "itron" && <ItronOverviewPage />}
      {page === "fluence" && <FluenceOverviewPage />}
      {page === "intellihub" && <IntellihubOverviewPage />}
      {page === "renew" && <RenewHomePage />}
      {page === "kraken" && <KrakenOverviewPage />}
    </div>
  );
}
