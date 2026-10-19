"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";

const features = [
  { n: "01", title: "See every utility", text: "Bring electricity, steam, compressed air, cooling, heating, and process data into one plant-level view." },
  { n: "02", title: "Find the root cause", text: "Combine rules and machine-learning models to identify anomalies, degradation, and production-normalized SEC deviations." },
  { n: "03", title: "Prioritize the next action", text: "Give operators, engineers, and leaders clear recommendations ranked by financial impact and implementation effort." },
  { n: "04", title: "Verify what changed", text: "Track interventions and validate savings with IPMVP-based measurement and verification workflows." },
  { n: "05", title: "Support the whole plant", text: "Connect equipment performance, forecasting, maintenance workflows, and emissions reporting." },
  { n: "06", title: "Deploy around operations", text: "Use a hybrid edge-and-cloud architecture designed for plant-side resilience and integration." },
];

const cases = [
  { sector: "Steel & metals", before: "2,126", after: "1,765", unit: "kWh / ton", reduction: "17%", result: "₹161.70 lakh / month energy savings reported" },
  { sector: "Food & beverage", before: "566.7", after: "396.7", unit: "kWh / ton", reduction: "30%", result: "₹25.50 lakh / month energy savings reported" },
  { sector: "Automotive & foundry", before: "105.2", after: "86.3", unit: "kWh / pump", reduction: "18%", result: "₹34.74 lakh / month energy savings reported" },
  { sector: "Textiles & apparel", before: "2.50", after: "2.12", unit: "kWh / kg", reduction: "15.2%", result: "Production-normalized SEC reduction reported" },
  { sector: "Paper & pulp", before: "120.9", after: "106.4", unit: "kWh / lakh SDP", reduction: "12%", result: "Production-normalized SEC reduction reported" },
];

const steps = ["Capture plant data", "Establish SEC baselines", "Diagnose and prioritize", "Implement and verify"];
const money = (n: number) => new Intl.NumberFormat("en-IN", { maximumFractionDigits: 1 }).format(n);

function SecCalculator() {
  const [bill, setBill] = useState(100);
  const [reduction, setReduction] = useState(20);
  const savings = useMemo(() => (bill * reduction) / 100, [bill, reduction]);
  return (
    <div className="calc-card">
      <div className="calc-heading"><div><span className="eyebrow">Interactive estimator</span><h3>Model your savings</h3></div><span className="calc-icon">↗</span></div>
      <p className="muted">Explore a simple energy-bill scenario. Adjust the assumptions to estimate potential savings.</p>
      <label className="range-label" htmlFor="bill">Monthly energy bill <strong>₹{money(bill)} lakh</strong></label>
      <input id="bill" type="range" min="25" max="500" step="5" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
      <label className="range-label" htmlFor="reduction">Illustrative savings rate <strong>{reduction}%</strong></label>
      <input id="reduction" type="range" min="12" max="30" step="1" value={reduction} onChange={(e) => setReduction(Number(e.target.value))} />
      <div className="calc-result"><span>Estimated monthly savings</span><strong>₹{money(savings)} lakh</strong><small>Illustrative only. Actual results depend on baseline, production mix, deployment scope, and implemented measures.</small></div>
      <div className="sec-note"><span className="pulse-dot" />SEC compares energy use with output, helping separate efficiency changes from production changes.</div>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setBusy(true); setStatus("");
    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    try {
      const response = await fetch("/api/contact", { method: "POST", body: JSON.stringify(Object.fromEntries(form)), headers: { "Content-Type": "application/json" } });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your request.");
      setStatus("Thanks. Your request has been sent."); formElement.reset();
    } catch (error) { setStatus(error instanceof Error ? error.message : "Unable to send your request."); }
    finally { setBusy(false); }
  }
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label>Name<input name="name" autoComplete="name" required maxLength={100} placeholder="Your name" /></label><label>Work email<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" /></label></div>
    <label>Company<input name="company" autoComplete="organization" required maxLength={120} placeholder="Company name" /></label>
    <label>What would you like to explore?<textarea name="message" rows={3} maxLength={1500} placeholder="Plant energy visibility, SEC baseline, or a specific utility…" /></label>
    <button className="button button-primary" disabled={busy}>{busy ? "Sending…" : "Request a conversation"}<span>↗</span></button>
    <p className="form-status" role="status" aria-live="polite">{status}</p>
  </form>;
}

export default function Home() {
  return <main>
    <header className="site-header"><a className="brand" href="#top" aria-label="Zerowatt Energy home"><span className="brand-mark">Z</span><span>ZEROWATT <b>ENERGY</b></span></a><nav><a href="#platform">Platform</a><a href="#proof">Results</a><a href="#how">How it works</a></nav><a className="header-cta" href="#contact">Talk to our team <span>↗</span></a></header>

    <section className="hero section-wrap" id="top">
      <div className="hero-copy"><div className="eyebrow"><span className="pulse-dot" />INDUSTRIAL ENERGY INTELLIGENCE</div><h1>Make every unit of energy <em>work harder.</em></h1><p className="hero-lede">ZOE turns plant data into clear actions: detect waste, understand the cause, and verify what changed.</p><div className="hero-actions"><a className="button button-primary" href="#contact">Explore ZOE <span>↗</span></a><a className="text-link" href="#proof">See published results <span>↓</span></a></div><div className="hero-proof"><div><strong>12–30%</strong><span>SEC reductions across six published case studies</span></div><div><strong>3–6 mo.</strong><span>Typical payback reported by Zerowatt</span></div></div></div>
      <div className="hero-visual" aria-label="Illustration of an industrial energy intelligence dashboard"><div className="visual-grid" /><div className="visual-top"><span><i className="pulse-dot" /> LIVE PLANT VIEW</span><span>ZONE 04 / UTILITIES</span></div><div className="energy-orb"><div className="orb-ring ring-one"/><div className="orb-ring ring-two"/><div className="orb-core"><span>ZOE</span><small>ENERGY<br/>INTELLIGENCE</small></div><div className="node node-a">AIR</div><div className="node node-b">STEAM</div><div className="node node-c">COOLING</div><div className="node node-d">MOTORS</div></div><div className="visual-metric"><span>SEC VARIANCE</span><strong>−18.4%</strong><small>vs. production baseline</small></div><div className="visual-bottom"><span>DETECT</span><b>→</b><span>DIAGNOSE</span><b>→</b><span>VERIFY</span></div></div>
    </section>

    <section className="trust-strip"><span>BUILT FOR ENERGY-INTENSIVE OPERATIONS</span><div><b>Steel</b><b>Food & beverage</b><b>Automotive</b><b>Textiles</b><b>Paper</b><b>Process industries</b></div></section>

    <section className="section-wrap problem-section"><div className="section-intro"><span className="eyebrow">THE OPERATIONAL GAP</span><h2>Energy waste rarely shows up in one place.</h2><p>Plant teams work across meters, control systems, audits, and spreadsheets. The result is often a delayed picture of where energy is going and why.</p></div><div className="problem-grid"><article><span className="problem-index">01 / STATIC SNAPSHOTS</span><h3>Waste grows between audits</h3><p>Periodic reviews can miss drift in operating conditions, equipment performance, and controls.</p></article><article><span className="problem-index">02 / HIDDEN LOADS</span><h3>Auxiliary systems keep running</h3><p>Compressors, chillers, pumps, and fans may run through breaks, shutdowns, and low-production periods.</p></article><article><span className="problem-index">03 / RAW KWH</span><h3>Production changes distort the story</h3><p>A lower energy bill can reflect lower output. SEC helps normalize energy use against production.</p></article><article><span className="problem-index">04 / FRAGMENTED ACTION</span><h3>Teams lack a shared savings view</h3><p>Operations, maintenance, finance, and sustainability need a common record of actions and verified impact.</p></article></div></section>

    <section className="solution-band" id="platform"><div className="section-wrap solution-layout"><div><span className="eyebrow">MEET THE ZOE PLATFORM</span><h2>From plant signals to verified savings.</h2><p>ZOE is an industrial energy-intelligence platform that continuously monitors plant utilities and processes, diagnoses root causes, and guides teams toward measurable action.</p><a className="text-link" href="#how">See the operating loop <span>↓</span></a></div><SecCalculator /></div></section>

    <section className="section-wrap features-section"><div className="section-intro"><span className="eyebrow">ONE CLOSED-LOOP PLATFORM</span><h2>Clarity across the energy workflow.</h2><p>Connect data capture, analytics, action, and measurement in one continuous operating rhythm.</p></div><div className="features-grid">{features.map((f, i) => <motion.article className="feature-card" key={f.n} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.4, delay: i * 0.06 }}><span>{f.n}</span><h3>{f.title}</h3><p>{f.text}</p><i>↗</i></motion.article>)}</div></section>

    <section className="process-section" id="how"><div className="section-wrap"><div className="section-intro"><span className="eyebrow">A PRACTICAL PATH TO VALUE</span><h2>Built to work with the plant.</h2><p>The brief describes a hybrid edge-and-cloud deployment designed to integrate with plant systems.</p></div><div className="process-line">{steps.map((step, i) => <div className="process-step" key={step}><span>0{i + 1}</span><div className="process-node">{i === 0 ? "⌁" : i === 1 ? "◉" : i === 2 ? "⌘" : "✓"}</div><h3>{step}</h3><p>{["Connect meters, utilities, sensors, and existing plant systems.", "Build production-aware baselines to track SEC over time.", "Surface root-cause hypotheses and financially ranked actions.", "Track interventions and validate impact with IPMVP-based M&V."][i]}</p></div>)}</div><div className="deployment-note"><span className="pulse-dot" /> Typical deployment: 4–8 weeks, as reported in the company brief.</div></div></section>

    <section className="section-wrap proof-section" id="proof"><div className="proof-heading"><div className="section-intro"><span className="eyebrow">PUBLISHED CASE-STUDY SIGNAL</span><h2>Measure efficiency against output.</h2><p>Specific Energy Consumption (SEC) makes the comparison production-aware. The figures below are reported in Zerowatt’s supplied brief.</p></div><div className="proof-stat"><strong>6</strong><span>published case studies</span><strong>12–30%</strong><span>reported SEC reductions</span></div></div><div className="case-grid">{cases.map((c) => <article className="case-card" key={c.sector}><div className="case-top"><span>{c.sector}</span><b>{c.reduction}</b></div><div className="case-bars"><div><span>BASELINE</span><div className="bar-track"><i style={{ width: "100%" }} /></div><strong>{c.before} <small>{c.unit}</small></strong></div><div><span>AFTER ZOE</span><div className="bar-track"><i className="after-bar" style={{ width: `${(Number(c.after) / Number(c.before)) * 100}%` }} /></div><strong>{c.after} <small>{c.unit}</small></strong></div></div><p>{c.result}</p><small className="case-foot">Reported case-study result · SEC reduction</small></article>)}</div><p className="disclaimer">Case-study figures and company metrics are reproduced from the supplied company brief and have not been independently audited for this website.</p></section>

    <section className="cta-section" id="contact"><div className="section-wrap cta-layout"><div><span className="eyebrow">START WITH YOUR PLANT DATA</span><h2>Find the next measurable improvement.</h2><p>Talk with Zerowatt about your utilities, production baseline, and energy priorities.</p><div className="cta-detail"><span className="pulse-dot" />Designed for manufacturers with complex utilities and material energy spend.</div></div><div className="contact-card"><h3>Start a conversation</h3><p>Share a few details and the team can follow up with next steps.</p><ContactForm /></div></div></section>

    <footer className="site-footer"><a className="brand" href="#top"><span className="brand-mark">Z</span><span>ZEROWATT <b>ENERGY</b></span></a><span>Industrial energy intelligence · Chennai, India</span><a href="#top">Back to top ↑</a></footer>
  </main>;
}
