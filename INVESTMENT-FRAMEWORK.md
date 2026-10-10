# Investment Framework — Forward Earnings Visibility + Re-rating

Owner: Bharani. Living document — update as lessons accumulate.
Style: event-driven small/mid-cap investing, NOT ratio screening. Trailing ratios describe
the past; returns come from the future becoming visible before the price adjusts.

## Core thesis

Buy businesses where a concrete event (order win, capacity expansion, product launch,
turnaround, guidance) makes 2–3 year forward earnings visible, at a **forward P/E < 15**,
while the **price is already in an uptrend**. The win is double-barreled: earnings growth
+ multiple re-rating (e.g. forward P/E 5 → market pays 25–50 = multi-bagger).

**Underwrite the boring case, not the dream case.** The trade must work at a 15–20x exit
multiple. Re-rating to 40–50x is the market's gift, never the plan. A trade that *needs*
10x multiple expansion is fragile.

## Forward EPS — the correct math

```
Forward EPS = (Executable order book ÷ execution years) × realistic net margin ÷ diluted share count
```

Each input leaks — correct for all four:
1. **Executable book only** — strip GST and JV/consortium partners' share from headline
   order-book numbers (e.g. Kernex headline ₹3,346 Cr incl. GST/JV vs ~₹2,124 Cr own book).
2. **New-order margin ≠ historical margin** — competitive EPC/government bids often come
   at lower margins. Model the bid margin, not last year's blended margin.
3. **Diluted shares** — warrants, QIPs, preferential issues (SG Finserve ₹450 Cr warrants).
   Forward *EPS* matters, not forward profit.
4. **Execution slippage** — government timelines slip. Assume stated timeline × 1.3.

## The gates (all must pass)

| Gate | Rule |
|---|---|
| Valuation | Forward P/E < 15 on corrected forward EPS |
| Catalyst | Concrete event: order book / expansion / new product / turnaround / credible guidance |
| Uncharted earnings (added Jul 2026) | 2–3 yr forward EPS ≥ 2.0× the highest EPS in FULL financial history (incl. pre-IPO/DRHP years, min 5 yrs, computed as historical PAT ÷ CURRENT diluted shares) |
| Trend | Price > 50 DMA and > 200 DMA, higher high after the catalyst announcement (mechanical, not a feeling) |
| Size | Small/mid cap — big moves need small bases |

The uncharted-earnings gate separates structural step-changes from cyclical recoveries.
Earnings returning TOWARD an old peak (MRPL, Globus, Sandisk, homebuilders) don't re-rate —
the market remembers the old peak and what followed. Earnings going where the company has
NEVER been (Kernex, BSE, Zen, Gravita — all passed ≥2x at entry) have no anchor and no
overhead sellers; that's where 5–15x re-ratings live. 2x over 2–3 yrs ≈ 26–44% EPS CAGR,
the engine the 50% price-CAGR target needs even with a flat multiple. Not applicable to
NBFCs (P/B lens). Note: gate is on the modeled 2–3 yr forward, NOT next year (for steady
growers the ATH EPS is simply last year — next-year-2x would wrongly demand +100% in 12 months).

## The funding check (the Vikran filter)

**An order book a company can't fund is a liability dressed as a pipeline.**
Order-book size is not the signal — conversion into cash is. Before buying, ask:
*can they execute without heavy borrowing or dilution?*

- Operating cash flow positive or clearly improving (2-yr trend)
- Debtor days not exploding (absolute level < ~200 AND trend flat/falling)
- Debt/equity < 0.5. FLEX to < 1.0 (Gravita backtest lesson, Jul 2026) only when ALL hold:
  debt is working-capital debt (fast-turning inventory, not project/capex), debtor days < 60,
  interest coverage > 4x, cycle-average OCF positive. WC debt cycles to cash in weeks;
  project debt trapped in 296-day receivables is the Vikran disease — same ratio, opposite risk.
- No promoter pledging; promoter holding stable or rising
- Past revenue growth actually tracked past order inflow (execution track record)
- Red flag: withdrawing from announced orders = can't fund execution

## Visibility type 3: annuity/concession books (added Jul 2026, Genus Power lesson)

For concession/annuity revenue (AMISP smart meters, IPP PPAs, toll/HAM roads):
- Headline book converts over 8–25 years — model the ANNUAL conversion, not book ÷ 2
- Structural debt is inherent; the D/E < 0.5 gate does NOT apply. Instead require:
  OCF positive, interest coverage comfortable, counterparty collections improving
- Counterparty quality is the thesis (DISCOMs/govt = watch debtor days every quarter)
- Reject when leverage + valuation stack (ACME Solar: 54x P/E AND D/E 4 = no)

## The KPI tracking loop (added Jul 2026, BSE backtest lesson)

The edge = building forward EPS from public high-frequency operational data BEFORE
consensus forms. For every watchlist name, identify and track its published KPI:
exchange turnover (daily), order inflow announcements, monthly production/sales,
AUM disclosures, capacity commissioning. BSE 2023: catalyst live May 15, price flat
5 weeks while daily turnover data showed the ramp — the lag between disclosure and
repricing in under-covered names is the entire strategy.

## Armed triggers (added Jul 2026)

Watchlist names with live catalyst but unconfirmed trend get a WRITTEN trigger:
price reclaims 50 & 200 DMA + a volume-ignition day (multiples of average volume).
Buy the confirmation, not the hope. (BSE's ignition: 20–30M share days, Jun 2023.)

## Satellite slot — exceptional quality exception (added Jul 2026, NVDA backtest)

Forward P/E up to 20 (not 15) permitted when ALL of: fresh disclosure event creates
new earnings visibility + exceptional business quality (ROCE > 30%, dominant position)
+ all other gates pass. HARD LIMITS: max 1–2 positions, max ~10% of portfolio.
Catches May-2023-NVDA / TPC-type setups; still rejects AMD at 59x, Argan at 58x.

## Backtest record (Jul 2026)

- NVDA 2020–26: framework never buys (size + P/E gates) — misses 33x, but also refuses
  the Nov 2021 top (60x fwd → −66% drawdown). Verdict: correct specialization; mega-cap
  platform compounding is out of scope. Repricing in dense-coverage names is instant
  (May 2023 guidance: +24% overnight) — no exploitable lag.
- BSE 2020–26: framework buys Jul 2023 ~₹225 (catalyst: Sensex options relaunch + new
  CEO; daily turnover KPI; volume ignition; net-cash funding check) → ₹3,817 by Jul 2026
  = ~17x full hold; ~7–8x even with mechanical 40x-trim + trend-stop exits. Also correctly
  refuses 2020 BSE (cheap but zero catalyst).
- Zen Tech: buy Mar 2023 ~₹300 (order book 6x revenue, volume ignition Feb 15 + Mar 14 2023,
  fwd ~9–18x) → peak ₹2,588 Jan 2025; trims from 40x + Jan 13–14 2025 trend/thesis break exit
  ~₹1,700–2,100 = ~5–7x banked. Refuses 2026 Zen (49–56x fwd, book only 1.9x).
- Shakti Pumps: buy Feb 2024 ~₹245 (₹1,538 Cr Maharashtra order + results, twin ignition days
  Jan 29–30 2024, fwd ~13–16x) → trims ₹600–740, 2025 trend-break exit = ~2.3–2.7x.
  Refuses 2026 Shakti (order book 0.55x revenue, KUSUM 2.0 = hope not catalyst).
- Gravita: signals fired Dec 2020 ~₹52 (fwd ~4x, ignition Nov 19 2020, capacity catalyst → 29x
  potential) and Aug 2022 ~₹344 (BWMR regulatory catalyst, fwd ~11x → ~5x banked with exits).
  Strict D/E<0.5 would have VETOED 2020 entry → led to the WC-debt flex rule above.

## Financials/NBFCs — different lens entirely

Forward P/E is the wrong tool for lenders. A lender's "order book" is its loan book and
earnings power = ROE × book value.
- Use **P/B vs ROE**: pay ≤ ~1.5x book for ROE < 15%; 3x book needs sustained ROE > 20%
- Rapid loan-book growth (>50%/yr) is *risk*, not just growth — credit costs appear late
- "0 NPA while growing fast" = unseasoned book, not safety

## Portfolio construction (India + Canada + US)

- **Max 20 stocks, minimum ~10.** Return-driven, no fixed country quotas — capital goes
  wherever the best forward-P/E-vs-visibility setups are.
- **Country cap: max 60% in any one market** (currency + policy concentration).
- **Position sizing:** enter at 4–8%; hard cap 15% per stock — trim above it no matter
  how good the story (lesson: Kernex drifted to 47% of portfolio).
- **Sector cap:** max 3 stocks / ~30% on one theme (e.g. Indian rail capex).
- Same framework in all three markets. US/Canada equivalents of "order book": backlog
  (defense/engineering/industrial names report it), RPO (remaining performance
  obligations for SaaS), guidance, FDA/regulatory catalysts, capacity ramps.
- **Entry:** on results/filing confirmation of the catalyst, not on rumor.
- **Exit rules — define BEFORE buying, write it down per position:**
  - Thesis break: funding check fails 2 consecutive quarters (OCF negative, debtors rising)
  - Valuation: trim as trailing P/E crosses ~40x with no fresh catalyst
  - Trend break: close below 200 DMA after extended run = review, don't ignore
  - Time stop: catalyst hasn't shown up in reported numbers within 3–4 quarters → exit

## Watchlist row template

Every candidate gets a one-line thesis in this shape:
> "Order book 6x revenue ex-GST, 2-yr execution, ~9% margin → forward P/E 7,
> OCF positive, above 200 DMA. Exit if debtor days > 250 or two quarters of OCF burn."

If the thesis can't be written in one line with numbers, it isn't ready to buy.

## Lessons log

- **2026 Vikran (−22%):** 2–3x order book looked fine; failure was funding — debtor days
  149→296, OCF −₹437 Cr, withdrew from ₹354 Cr solar order. Funding check now mandatory.
- **2026 Kernex (+79%):** thesis worked (Kavach visibility, bought pre-re-rating) but
  position grew to 47% of portfolio — sizing caps now mandatory.
- **2026 SG Finserve (+62%):** growth delivered, but bought/held an NBFC on an order-book
  lens; correct lens is P/B vs ROE (3x book on 10% ROE = priced for perfection).

## Current focus list (July 2026 screen of 867 TradingView forecasts + manual research)

Tier 1 (deep-dive for conviction — verify forward EPS from primary data, funding check, trend):
1. Vikram Solar (~7–10x FY27) — 8.2 GW order book; NCLT overhang set aside 2026-06-29; WAIT for 50/200 DMA reclaim
2. Genus Power (~12–13x FY27) — ₹25,173 Cr net-of-tax 8–9 yr AMISP annuity book; watch DISCOM debtor days
3. Man Industries (~10x FY27) — record line-pipe order book, exports; funding check pending
4. Ganesha Ecosphere (~12.7x FY27) — rPET capacity + mandatory recycled-content regulation; only 2 analysts, build own EPS
5. KEC International (~12.6x fwd) — gate-6 RESTORED Jul 2026 after Bharani caught a data error:
   delivered FY26 EPS was ₹22.75 (not the ₹29.9 consensus figure) → ₹52 3-yr fwd = 2.29x ✅ passes
   (borderline 1.8x at the 2-yr point — size accordingly)

DATA RULES for gate 6 (learned Jul 2026 via KEC error): peak EPS must come from DELIVERED
filings (Screener/AR), never a consensus column. KNOWN QUIRK: the report.html TradingView
India columns are shifted one fiscal year (TV "FY1"=next unreported year, i.e. "FY26" column
= FY ending Mar 2027) — verified via KEC (₹29.9 col vs ₹22.75 actual) and Vikram Solar
(₹18.2 col vs ~₹13 actual). Fix scraper labels; until then treat India "FY27" cols as FY28.
All gate-6 rescan verdicts below need redo against delivered EPS history — borderline
fails (Sandhar, Zaggle, JTL, Oswal) may flip to passes with correct lower bases.

Gate-6 rescan (Jul 2026, uncharted-earnings gate applied — peak-EPS figures approximate, verify in deep dive):
- Survivors: Vikram Solar (~2.9x), Man Industries (~4x, strongest), Ganesha (~3.1x), TPC (~2.1x);
  borderline: Genus (1.7–2.0x — model FY28 from order book), BioMarin US (~2.0x)
- NEW leads surfaced: Sandhar Technologies (~2.2x, FY28E ₹78 vs ATH ₹36; auto-comp new lines; needs full workup),
  Camlin Fine Sciences (~3.5x, FY28E ₹22 vs ₹6 peak; vanillin ramp; 2 analysts, execution history — verify hard)
- Killed by gate 6: KNR, Greenpanel, Ashoka, Zaggle (1.8x), JTL (1.9x), Oswal Pumps (1.75x),
  and entire US cycle-recovery bloc (TMUS 1.4x, BLDR, BC, AGCO, MTH, NOV, NE, PSKY)

Tier 2: KEC International, KNR Constructions, Greenpanel, Ashoka Buildcon, Zaggle, JTL Industries
Watch-only: Websol (89% promoter pledge = hard-rule fail; revisit if pledge drops)
Separate sector bet (P/B lens): MFI recovery cluster — Ujjivan SFB, Utkarsh, Fusion, Spandana
US Tier 1: Tutor Perini TPC (~15x FY26 guide, ~11–12x FY27; $19.8B backlog = 3.5x revenue;
dispute-settlement turnaround; verify legacy fixed-price exposure in 10-Q; trend unconfirmed — armed trigger)
Oshkosh OSK: screened well (~10.2x FY27, NGDV+defense backlog) but SKIPPED by Bharani Jul 2026 —
do not re-pitch without new facts. US secondary: BioMarin BMRN
(9x FY27, Voxzogo GARP; −61% ATH, needs trigger). Conditional bucket: offshore drillers NE/VAL
(contract backlog visibility on oil beta). Named US trap: Sandisk SNDK 8.7x FY27 = memory-cycle
peak math (MRPL/Globus logic — cheapest exactly at the top); also cycle-recovery names AGCO/BC/MTH/BLDR.
US screen data: ~/Desktop/marketanalysis/data/tvus_forecasts.csv (638 names, 17 raw hits, Jul 2026).
Rejected Jul 2026: KPI Green (pledge+D/E), ACME Solar (54x, D/E 4), Shanti Gold (OCF −₹261 Cr + rights issue), Landmark (48x), MRPL (cycle), Globus Spirits (margin-cycle, 29x actual trailing, 7% ROE), AMD/Argan/Powell (re-rating already done: 42–59x fwd)

Data: parsed TV forecasts saved at ~/Desktop/marketanalysis/data/tv_forecasts.csv

## System build plan (AlphaForge Discovery module — pending)

1. Source layer: NSE/BSE announcements, results, concall guidance, Sovrenn order-book scraper
2. Forward-EPS calculator per event (corrected math above)
3. Gates: forward P/E < 15, size band, mechanical uptrend
4. Funding-check flags (OCF, debtor days, D/E, pledging)
5. Output: ranked watchlist, each row carrying its one-line thesis
