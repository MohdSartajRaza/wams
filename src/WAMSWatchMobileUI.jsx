import React, { useState } from "react";

const INK = "#080D18";
const INK2 = "#0e1525";
const PANEL = "#121a2c";
const LINE = "#222c42";
const GREEN = "#12B76A";
const TEAL = "#0EA5A4";
const AMBER = "#F59E0B";
const RED = "#E5484D";
const TEXT = "#eaf0fb";
const MUTED = "#8b93b5";

const Phone = ({ label, children }) => (
  <div style={{ flexShrink: 0 }}>
    <div style={{ width: 288, borderRadius: 40, background: "#000", padding: 10, boxShadow: "0 24px 60px rgba(0,0,0,.45)" }}>
      <div style={{ background: INK, borderRadius: 32, overflow: "hidden", height: 620, display: "flex", flexDirection: "column", position: "relative" }}>
        <div style={{ background: INK, color: TEXT, fontSize: 11, padding: "9px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0, zIndex: 2 }}>
          <span>9:41</span>
          <span style={{ width: 64, height: 19, background: "#000", borderRadius: 999 }} />
          <span>100% ▮</span>
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>{children}</div>
      </div>
    </div>
    <div style={{ textAlign: "center", marginTop: 11 }}>
      <span style={{ background: PANEL, border: `1px solid ${LINE}`, color: TEXT, fontSize: 11.5, fontWeight: 700, padding: "5px 14px", borderRadius: 999 }}>{label}</span>
    </div>
  </div>
);

const Nav = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 16px", borderBottom: `1px solid ${LINE}`, position: "sticky", top: 0, background: "rgba(8,13,24,.9)", backdropFilter: "blur(8px)", zIndex: 3 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ width: 26, height: 26, borderRadius: 8, background: `linear-gradient(135deg,${GREEN},${TEAL})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🛡️</div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 13, color: TEXT, lineHeight: 1 }}>WAMS Watch</div>
        <div style={{ fontSize: 8, color: MUTED, letterSpacing: 1, textTransform: "uppercase" }}>Scam reports</div>
      </div>
    </div>
    <div style={{ background: `linear-gradient(135deg,${GREEN},${TEAL})`, color: "#031b10", fontSize: 11, fontWeight: 700, padding: "7px 12px", borderRadius: 8 }}>Report</div>
  </div>
);

// SCREEN 1 — Hero + stats
const Hero = () => (
  <div>
    <Nav />
    <div style={{ padding: "22px 16px" }}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 9.5, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: GREEN, background: "rgba(18,183,106,.1)", border: "1px solid rgba(18,183,106,.28)", padding: "5px 11px", borderRadius: 999 }}>🇮🇳 Buyer-powered protection</span>
      <div style={{ fontSize: 28, fontWeight: 700, color: TEXT, lineHeight: 1.08, marginTop: 16, letterSpacing: "-.5px" }}>
        Got scammed by a store? <span style={{ color: GREEN }}>Warn the next buyer.</span>
      </div>
      <div style={{ fontSize: 13, color: MUTED, marginTop: 14, lineHeight: 1.5 }}>Report any fake shop, Instagram seller, or website that cheated you. Every report protects thousands of shoppers.</div>
      <div style={{ display: "flex", gap: 22, marginTop: 24 }}>
        <div><div style={{ fontSize: 24, fontWeight: 700, color: TEXT }}>1,204</div><div style={{ fontSize: 9.5, color: MUTED, fontWeight: 600, textTransform: "uppercase" }}>Stores reported</div></div>
        <div><div style={{ fontSize: 24, fontWeight: 700, color: TEXT }}>3,847</div><div style={{ fontSize: 9.5, color: MUTED, fontWeight: 600, textTransform: "uppercase" }}>Total reports</div></div>
      </div>
      <div style={{ background: "linear-gradient(135deg,rgba(18,183,106,.08),rgba(14,165,164,.05))", border: `1px solid ${LINE}`, borderRadius: 14, padding: 16, marginTop: 22 }}>
        <div style={{ fontWeight: 700, fontSize: 13, color: TEXT }}>Check a store before buying?</div>
        <div style={{ fontSize: 11.5, color: MUTED, marginTop: 3, marginBottom: 12 }}>Get an instant trust score in the checker.</div>
        <div style={{ border: `1px solid ${GREEN}`, borderRadius: 9, padding: "9px", textAlign: "center", fontSize: 12, fontWeight: 700, color: TEXT }}>Open the checker →</div>
      </div>
    </div>
  </div>
);

// SCREEN 2 — Report form
const Form = () => {
  const [sel, setSel] = useState("Never delivered");
  const issues = [["📦", "Never delivered"], ["💸", "Paid, no order"], ["🎭", "Fake product"], ["🚫", "No refund"], ["📮", "Wrong item"], ["📵", "Went silent"]];
  return (
    <div>
      <Nav />
      <div style={{ padding: "18px 16px" }}>
        <div style={{ background: PANEL, border: `1px solid ${LINE}`, borderRadius: 16, padding: 18 }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: TEXT }}>Report a scam store</div>
          <div style={{ fontSize: 11.5, color: MUTED, marginTop: 3, marginBottom: 14 }}>Takes 30 seconds. Stay anonymous.</div>

          <div style={{ fontSize: 9.5, fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: .5, marginBottom: 6 }}>Store link</div>
          <div style={{ background: INK2, border: `1px solid ${LINE}`, borderRadius: 10, padding: "11px 12px", fontSize: 12, color: MUTED }}>deals44.shop</div>

          <div style={{ fontSize: 9.5, fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: .5, margin: "14px 0 6px" }}>Where did you find them?</div>
          <div style={{ background: INK2, border: `1px solid ${LINE}`, borderRadius: 10, padding: "11px 12px", fontSize: 12, color: TEXT, display: "flex", justifyContent: "space-between" }}>Website / online store <span style={{ color: MUTED }}>▾</span></div>

          <div style={{ fontSize: 9.5, fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: .5, margin: "14px 0 8px" }}>What went wrong?</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {issues.map(([em, t]) => (
              <div key={t} onClick={() => setSel(t)} style={{ display: "flex", alignItems: "center", gap: 7, background: sel === t ? "rgba(229,72,77,.1)" : INK2, border: `1px solid ${sel === t ? RED : LINE}`, borderRadius: 10, padding: "10px 10px", fontSize: 11.5, fontWeight: 600, color: sel === t ? "#ffb4b6" : TEXT, cursor: "pointer" }}>
                <span style={{ fontSize: 14 }}>{em}</span>{t}
              </div>
            ))}
          </div>

          <div style={{ background: `linear-gradient(135deg,${GREEN},${TEAL})`, color: "#031b10", fontWeight: 700, fontSize: 14, textAlign: "center", padding: 13, borderRadius: 11, marginTop: 18 }}>Submit report</div>
          <div style={{ fontSize: 10, color: MUTED, textAlign: "center", marginTop: 10 }}>Reviewed before it affects a store's score.</div>
        </div>
      </div>
    </div>
  );
};

// SCREEN 3 — Live feed
const Feed = () => {
  const items = [
    ["deals44.shop", "Never delivered", "2m ago", "pending", "🌐"],
    ["instagram.com/luxe_deals", "Fake product", "8m ago", "verified", "📷"],
    ["megaloot.online", "Paid, no order", "23m ago", "pending", "🌐"],
    ["trendycart.in", "No refund", "1h ago", "verified", "🌐"],
    ["instagram.com/shopnow99", "Went silent", "2h ago", "pending", "📷"],
  ];
  return (
    <div>
      <Nav />
      <div style={{ padding: "18px 16px" }}>
        <div style={{ background: PANEL, border: `1px solid ${LINE}`, borderRadius: 16, padding: 18 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: TEXT }}>Recently reported</div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10, fontWeight: 700, color: RED }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: RED }} /> LIVE
            </span>
          </div>
          {items.map(([d, issue, time, status, icon], i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "11px 0", borderBottom: i < items.length - 1 ? `1px solid ${LINE}` : "none" }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: "rgba(229,72,77,.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>{icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 12.5, color: TEXT, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{d}</div>
                <div style={{ fontSize: 10.5, color: MUTED, marginTop: 1 }}>{issue} · {time}</div>
              </div>
              <span style={{ fontSize: 8.5, fontWeight: 800, padding: "2px 8px", borderRadius: 999, textTransform: "uppercase", letterSpacing: .4, height: "fit-content", background: status === "verified" ? "rgba(18,183,106,.14)" : "rgba(245,158,11,.14)", color: status === "verified" ? GREEN : AMBER }}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// SCREEN 4 — Success state
const Success = () => (
  <div>
    <Nav />
    <div style={{ padding: "18px 16px" }}>
      <div style={{ background: PANEL, border: `1px solid ${LINE}`, borderRadius: 16, padding: 18 }}>
        <div style={{ background: "rgba(18,183,106,.1)", border: "1px solid rgba(18,183,106,.4)", borderRadius: 14, padding: 26, textAlign: "center" }}>
          <div style={{ fontSize: 38 }}>🎉</div>
          <div style={{ fontSize: 17, fontWeight: 700, color: TEXT, marginTop: 8 }}>Report submitted</div>
          <div style={{ fontSize: 12, color: MUTED, marginTop: 5 }}>Thank you for protecting other buyers. We'll review it shortly.</div>
        </div>
        <div style={{ background: `linear-gradient(135deg,${GREEN},${TEAL})`, color: "#031b10", fontWeight: 700, fontSize: 14, textAlign: "center", padding: 13, borderRadius: 11, marginTop: 16 }}>Report another store</div>
      </div>
      <div style={{ background: PANEL, border: `1px solid ${LINE}`, borderRadius: 16, padding: 16, marginTop: 14 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: TEXT, marginBottom: 4 }}>What happens next?</div>
        <div style={{ fontSize: 11, color: MUTED, lineHeight: 1.5 }}>Our team verifies your report. Once confirmed, this store's trust score drops in the WAMS checker — protecting every buyer who checks it.</div>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div style={{ background: "#05080f", minHeight: "100vh", fontFamily: "'Space Grotesk','Segoe UI',Helvetica,Arial,sans-serif", padding: "34px 22px 60px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ background: `linear-gradient(160deg,${INK},#0d3a2a 130%)`, border: `1px solid ${LINE}`, borderRadius: 20, padding: "28px 30px", marginBottom: 34 }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: "#8fe3b0", fontWeight: 700, textTransform: "uppercase" }}>Mobile UI · WAMS Watch</div>
          <div style={{ fontSize: 30, fontWeight: 700, color: TEXT, marginTop: 8 }}>Community scam-report site</div>
          <div style={{ fontSize: 14, color: MUTED, marginTop: 8, maxWidth: 640, lineHeight: 1.5 }}>Every screen of the report site on mobile. The form's issue selector is interactive — tap the options in the second phone.</div>
        </div>

        <div style={{ display: "flex", gap: 30, flexWrap: "wrap", justifyContent: "center" }}>
          <Phone label="Home · hero + stats"><Hero /></Phone>
          <Phone label="Report form (tap issues)"><Form /></Phone>
          <Phone label="Live feed"><Feed /></Phone>
          <Phone label="After submitting"><Success /></Phone>
        </div>

        <div style={{ background: "rgba(18,183,106,.08)", borderLeft: `3px solid ${GREEN}`, borderRadius: "0 12px 12px 0", padding: "16px 18px", fontSize: 13, color: "#cfe8dc", lineHeight: 1.6, marginTop: 34, maxWidth: 900 }}>
          <b style={{ color: TEXT }}>The 4 screens:</b> Home (hero, live stats, link to the checker) · Report form (link, platform, tap-to-pick issue, optional details, anonymous) · Live feed (recently reported, updates every 15s, pending/verified badges) · Success (confirmation + what-happens-next). Palette: midnight navy with WAMS green/teal, red only for scam signals.
        </div>
      </div>
    </div>
  );
}
