# RetireSmart — Comprehensive Test Scenarios

> Flow-based test scenarios covering every locator (output area) for every meaningful input combination.
> Locators referenced in every scenario:
> **L1** Status Banner · **L2** Total Savings Today · **L3** Savings at Retirement · **L4** Monthly Income from Portfolio · **L5** Funds Last Until · **L6** Your Assets at a Glance · **L7** Portfolio Over Time (chart) · **L8** Year-by-Year Breakdown
>
> Common abbreviations: **ytr** = years to retirement · **WR** = withdrawal rate · **SIP** = monthly recurring investment · **WG** = weighted growth rate · **B** = portfolio balance at retirement

---

## SECTION A — BASELINE / EMPTY STATE

### A1 · Nothing filled in
**Flow:** Open app → no DOB → no inputs anywhere
**Expected:**
- L1: hidden (no status)
- L2: hidden (placeholder "Results appear here" visible)
- L3: hidden
- L4: hidden
- L5: hidden
- L6: hidden
- L7: empty-state ("Add cash or investments…")
- L8: hidden

### A2 · DOB only, nothing else
**Flow:** DOB = 1990 (age 35) · Retire age = 65 (ytr=30) · no cash/inv/income/budget
**Expected:**
- L1: ✅ "savings will last" (because no spending)
- L2: ₹0 · "Cash + investments today"
- L3: ₹0 · "After 30yr"
- L4: ₹0/mo · "At 4% withdrawal rate"
- L5: "Age 100+" · "Lasts the full period"
- L6: "Total 0 · 100% · ₹0 · — · +₹0/yr"
- L7: flat line at 0
- L8: every year shows ₹0 balance, ₹0 withdrawal

### A3 · DOB + Retirement age = current age (ytr = 0)
**Flow:** DOB = 1990 · Retire age = 35 (ytr=0) · no other inputs
**Expected:**
- L1: ✅ status (no spending = lasts forever)
- L3: ₹0 · "After 0yr" *(no SIP/income suffix)*
- L4: ₹0/mo · "At 4% withdrawal rate"
- L5: Age 100+
- L6: no rows
- L7: flat zero line for full projection horizon

---

## SECTION B — SINGLE-VARIABLE SCENARIOS

### B1 · Cash only, no growth needed
**Flow:** ytr=10 · Cash = ₹500K · no investments/income/budget · WR=4% · infl=0%
**Expected:**
- L2: ₹500K · "Cash + investments today"
- L3: ₹500K · "After 10yr" (cash doesn't grow, no SIP, no income)
- L4: ₹1,667/mo (500K × 4% ÷ 12) · "At 4% withdrawal rate"
- L5: Age 100+
- L6: 1 cash row, 100% alloc, growth rate "—", annual growth +₹0/yr
- L7: flat ₹500K line until withdrawals start at retirement
- L8: Row 1 = retirement year, balance ₹500K, withdrawal ₹20K/yr, monthly ₹1,667

### B2 · Investment only, no growth rate set
**Flow:** ytr=10 · Investment = ₹500K, growth blank · no other inputs
**Expected:**
- L3: ₹500K · "After 10yr" (blank growth = 0%)
- L4: ₹1,667/mo
- L6: 1 inv row, growth = 0%, annual growth +₹0/yr
- L7: flat line ₹500K

### B3 · Investment with growth rate
**Flow:** ytr=10 · Investment = ₹500K, growth = 7% · WR=4% · infl=0%
**Expected:**
- L2: ₹500K
- L3: ≈ ₹983K (500K × 1.07^10) · "After 10yr"
- L4: ≈ ₹3,278/mo (983K × 4% ÷ 12)
- L6: WG = 7.00%, annual growth +₹35K/yr
- L7: smooth exponential curve up, then withdrawal-driven curve down
- L8: each year shows ~7% growth then withdrawals

### B4 · Investment growth = 0% explicitly
**Flow:** ytr=10 · Investment = ₹500K, growth = 0 (typed)
**Expected:** identical to B2 — growth treated as 0%

### B5 · Investment with Monthly SIP only (no lump sum)
**Flow:** ytr=10 · Investment amount = 0, SIP = ₹10K/mo, growth = 7%
**Expected:**
- L2: ₹0
- L3: ≈ ₹1.73M (FV of 10K/mo @ 7% for 120 months) · "After 10yr incl. monthly SIP"
- L4: ≈ ₹5,770/mo
- Left panel inv summary: "1 item · ₹0 · Avg 7.0% growth · SIP ₹10K/mo"
- SIP trow visible: "📅 Monthly SIP · ₹10,000/month"
- L6: row shows growth 7%, SIP column showing ₹10K
- L7: curve starts at ₹0 today, climbs to ~₹1.73M at retirement

### B6 · SIP entered but ytr = 0
**Flow:** ytr=0 · Investment ₹500K with SIP ₹10K/mo
**Expected:**
- L3: ₹500K (SIP does NOT contribute — no time to accumulate)
- L3 subtitle: "After 0yr" (no SIP/income suffix shown)
- L6: SIP column shows ₹10K but asset breakdown marks investment with "⚠️ not added (0yr to retire)" badge — *verify behavior*
- L8: starts immediately at ₹500K

### B7 · Income source with save% = 0
**Flow:** ytr=10 · Income ₹100K/mo, save = 0%
**Expected:**
- L3: ₹0 (nothing accumulates)
- "Monthly Income Until Retirement" card summary shows "Saving ₹0/mo"
- L6: income row shows "₹0/mo saved" with no contribution to annual growth

### B8 · Income source with save% = 30%
**Flow:** ytr=10 · Income ₹100K/mo, save 30% (₹30K/mo saved) · WG=0% · infl=0%
**Expected:**
- L3: ₹30K × 12 × 10 = ₹3.6M · "After 10yr incl. income savings"
- L4: ₹3.6M × 4% ÷ 12 ≈ ₹12K/mo
- L6: income row shows "₹30K/mo saved", annual growth row "+₹360K/yr"
- L7: linear climb to ₹3.6M
- L8: balance grows steadily, then withdrawals start

### B9 · Income save% with ytr = 0
**Flow:** ytr=0 · Income ₹100K, save 30%
**Expected:**
- L3: ₹0 · "After 0yr" (income savings do not contribute)
- L6: income row balance shown but annual growth = "+₹0/yr" with "⚠️ not added (0yr to retire)" badge
- L7: balance stays flat at ₹0

### B10 · Budget only (no portfolio)
**Flow:** ytr=10 · Budget ₹50K/mo · no cash/inv/income
**Expected:**
- L1: 🚨 "savings run out at age <retire age>"
- L3: ₹0
- L4: ₹0/mo · "At 4% · ⚠️ Budget ₹50K/mo exceeds income — ₹50K/mo drawn from principal"
- L5: Age = retire age · "Runs out early"
- L8: Row 1 shows "Depleted ⚠️"

### B11 · Withdrawal rate changes only
**Flow:** ytr=10 · Inv ₹1M @ 0% · no budget · vary WR=0/4/10%
**Expected at WR=0%:** L4 = ₹0/mo · "At 0% withdrawal rate"
**Expected at WR=4%:** L4 = ₹3,333/mo
**Expected at WR=10%:** L4 = ₹8,333/mo · L1 may warn if portfolio drains

### B12 · Inflation only
**Flow:** ytr=10 · Inv ₹1M @ 5% · Budget ₹20K · infl=5%
**Expected:**
- Future budget = ₹20K × 1.05^10 ≈ ₹32.6K/mo
- L4 subtitle references the inflated budget figure
- L8: monthly spend climbs each year with inflation

---

## SECTION C — TIME-TO-RETIREMENT (ytr) VARIATIONS

### C1 · ytr = 0 (retirement today)
**Flow:** Age = retire age · Inv ₹5M @ 7% · Income ₹100K w/ 30% save · Budget ₹100K · WR=4%
**Expected:**
- L1: status based on whether ₹5M lasts (likely 🚨 since drawing ₹100K/mo)
- L2: ₹5M
- L3: ₹5M · "After 0yr" (no SIP/income suffix)
- L4: ₹16,667/mo (5M × 4% ÷ 12) · "At 4% · ⚠️ Budget ₹100K/mo exceeds income — ₹83,333/mo drawn from principal"
- L5: depletion age (~age 41 give or take given the math)
- L6: income row shows "⚠️ not added (0yr to retire)", investment shows ₹5M with 7% growth, no SIP contribution if SIP set
- L7: chart starts at ₹5M and falls
- L8: starts current year with ₹5M, draws down each year

### C2 · ytr = 1
**Flow:** Age 64, retire 65 · Inv ₹1M @ 7% · SIP ₹5K · Income save ₹10K
**Expected:**
- L3: 1M × 1.07 + 5K × 12.4 + 10K × 12 ≈ ₹1.19M · "After 1yr incl. SIP & income savings"
- L6: all rows accumulate (1yr is enough for SIP & income)

### C3 · ytr = 30 (long horizon)
**Flow:** Age 35, retire 65 · Inv ₹500K @ 10% · SIP ₹20K · Income save ₹30K
**Expected:**
- L3 should be very large (₹500K × 1.10^30 + SIP FV + income FV)
- L7: smooth exponential climb for 30 years, then withdrawals
- L8: long table, ~65 rows

### C4 · Negative ytr (retire age < current age)
**Flow:** Age 45, retire 35
**Expected:**
- ytr clamped to 0 (Math.max(0, …))
- Badge: "You've reached retirement age! 🎉"
- Behaves identically to ytr = 0 case

### C5 · ytr extremely large (DOB makes age 1 or 0)
**Flow:** DOB = 2025, retire = 65 (ytr ≈ 64)
**Expected:**
- Long projection
- No crashes / NaN
- Year-by-year table extends ~99 rows

---

## SECTION D — COMBINATION SCENARIOS

### D1 · Cash + Investment, both same currency
**Flow:** ytr=10 · Cash ₹200K · Inv ₹300K @ 7% · WR=4%
**Expected:**
- L2: ₹500K (sum)
- L3: ₹200K + (₹300K × 1.07^10) ≈ ₹790K
- L6: 2 rows, cash 40% alloc, inv 60%, WG = 7% × 0.6 = 4.2%
- L7: cash stays flat, investment grows

### D2 · Investment + SIP + Income savings combined
**Flow:** ytr=20 · Inv ₹1M @ 8% · SIP ₹10K · Income ₹80K save 25% (₹20K) · WR=4%
**Expected:**
- L3: should include all three legs · subtitle "After 20yr incl. SIP & income savings"
- Each leg verifiable separately:
  - Lump: 1M × 1.08^20 ≈ ₹4.66M
  - SIP: 10K × ((1.00667^240 − 1) / 0.00667) ≈ ₹5.93M
  - Income: 20K × ((1.0067^240 − 1) / 0.0067)  using WG → ₹11.8M+
- L6: all rows present with correct contributions

### D3 · Multiple investments, different growth rates
**Flow:** ytr=10 · Inv A ₹100K @ 5% · Inv B ₹200K @ 10% · Inv C ₹50K @ 0%
**Expected:**
- L2: ₹350K
- WG = (100×5 + 200×10 + 50×0)/350 = 7.14%
- L3 reflects each investment compounded at its OWN rate, not WG
- L6: 3 rows shown with their own rates; aggregate row shows WG

### D4 · Multiple investments with mixed SIPs
**Flow:** ytr=10 · Inv A ₹100K @ 6%, SIP ₹5K · Inv B ₹200K @ 10%, SIP 0
**Expected:**
- SIP row shows "₹5,000/month" (only A's SIP)
- B grows only on lump sum
- L3 subtitle: "incl. monthly SIP"

### D5 · Multiple income sources, different save %
**Flow:** Income A ₹50K save 40% (₹20K) · Income B ₹30K save 0% · Income C ₹20K save 100% (₹20K)
**Expected:**
- Total monthly savings = ₹40K
- Left card summary "3 sources · Saving ₹40,000/mo"
- L6: 3 income rows, only A and C contribute to portfolio

### D6 · Multiple expenses
**Flow:** Expense rows: Rent ₹30K + Food ₹15K + Other ₹5K = ₹50K total
**Expected:**
- Left summary "3 expenses · ₹50,000/month"
- L4 uses ₹50K as the budget figure

### D7 · Cash + Investment + Income + Budget all set, ytr=15
**Flow:** Cash ₹100K · Inv ₹500K @ 8% · SIP ₹10K · Income ₹80K save 25% · Budget ₹40K · WR=4% · infl=3%
**Expected:**
- All four cards populated with non-zero values
- L1: status based on math
- L4: sustainable income computed correctly · subtitle compares to inflated budget
- L7: 3 phases (accumulation up, retirement plateau, depletion)
- L8: shows growth phase + withdrawal phase

---

## SECTION E — BUDGET vs WITHDRAWAL RATE INTERACTIONS

### E1 · Budget < sustainable withdrawal
**Flow:** ytr=10 · Inv ₹5M @ 7% (B ≈ ₹9.84M) · WR=4% (sustainable ≈ ₹33K/mo) · Budget ₹20K
**Expected:**
- L4: ₹32,800/mo · "At 4% · ✅ covers budget (₹20K/mo)" — green check
- L1: ✅ "lasts the full period"

### E2 · Budget = sustainable withdrawal
**Flow:** Same as E1 but budget = ₹33K
**Expected:**
- L4: ₹32,800/mo · ✅ covers budget — borderline
- L1: ✅ probably lasts

### E3 · Budget > sustainable withdrawal (BUDGET OVERRIDE)
**Flow:** Same B ≈ ₹9.84M · WR=4% · Budget ₹50K
**Expected:**
- L4: ₹32,800/mo (RED) · "At 4% · ⚠️ Budget ₹50K/mo exceeds income — ₹17.2K/mo drawn from principal"
- L4 must NOT show ₹50K as income — it must show ₹32.8K
- L1: 🚨 or ⚠️ depending on depletion
- L7: visible drawdown phase

### E4 · WR = 0% with no budget
**Flow:** Inv ₹1M @ 5% · WR=0 · no budget
**Expected:**
- L4: ₹0/mo · "At 0% withdrawal rate"
- L1: ✅ (no spending)
- L8: portfolio keeps growing, no withdrawal

### E5 · WR = 0% with budget
**Flow:** Inv ₹1M @ 5% · WR=0 · Budget ₹10K
**Expected:**
- L4: ₹0/mo (RED) · "At 0% · ⚠️ Budget ₹10K/mo exceeds income — ₹10K/mo drawn from principal"
- L8: portfolio drained by budget over time

### E6 · WR > growth rate (unsustainable)
**Flow:** Inv ₹1M @ 3% · WR=10%
**Expected:**
- L4: ₹8,333/mo (no budget warning) · "At 10% withdrawal rate"
- L1: 🚨 depletes eventually
- L7: drawdown faster than growth

### E7 · Budget inflation outpacing portfolio growth
**Flow:** Inv ₹2M @ 5% · WR=4% · Budget ₹10K · infl=8%
**Expected:**
- L4 subtitle uses inflated budget at retirement
- L8: even though early years OK, late years deplete due to compounding inflation

---

## SECTION F — CURRENCY SCENARIOS

### F1 · Single non-base currency cash
**Flow:** Base = INR · Cash = $5,000 USD · USD→INR rate = 83
**Expected:**
- L2 in INR ≈ ₹415K
- L6 cash row shows USD original + INR value column
- Computations all in base currency

### F2 · Multi-currency investments
**Flow:** Inv A = ₹1M (INR) @ 7% · Inv B = $10K (USD) @ 5% · base = INR
**Expected:**
- L2 sums both in INR
- L3 grows each at its own rate, USD potentially with currency depreciation if set
- L6 each row shows native amount + converted value

### F3 · Missing exchange rate
**Flow:** Add USD account but no USD→INR rate set
**Expected:**
- Currency tab nudge: "No rates set — click to open Currency tab"
- L2: USD value treated as 0 (rate || 0) → shows ₹0 contribution
- No NaN/crash

### F4 · Currency depreciation factor
**Flow:** USD asset with depreciation rate set
**Expected:**
- Grows at (1+growth%) × (1+dep%) compounded over ytr
- L3 reflects this

### F5 · Changing base currency mid-flow
**Flow:** Set up with INR, then switch base to USD
**Expected:**
- All cards re-render in USD with proper conversion
- "<span class='rc-lbl'>" labels update everywhere

---

## SECTION G — NEGATIVE / EDGE CASES

### G1 · Negative numbers in inputs
**Flow:** Cash = −500
**Expected:**
- input has min="0" attribute — browser blocks negative
- If forced via paste: treated as 0 or ignored gracefully (no NaN)

### G2 · Non-numeric strings in numeric fields
**Flow:** Type "abc" in cash amount
**Expected:** parses as NaN → coerced to 0 → no crash

### G3 · Empty growth rate vs 0 growth rate
**Flow:** Inv A growth=blank · Inv B growth=0 (typed)
**Expected:** identical behavior (both 0%) — verify they don't render differently

### G4 · Growth rate > 30 (input max)
**Flow:** Type 50 in growth
**Expected:** input attribute max=30 may clamp; if forced, still computes (50% growth)

### G5 · DOB in future
**Flow:** DOB = 2030
**Expected:** age = negative or 0; ytr behavior should not crash; ideally age badge shows error or 0

### G6 · DOB very old (age > retire age)
**Flow:** DOB = 1900, retire age = 65
**Expected:** ytr = 0, treated as already retired

### G7 · Retire age = 0
**Flow:** Manually set retire age 0
**Expected:** ytr might be very large negative → clamped to 0 → behaves as retired today

### G8 · Retire age very large (200)
**Flow:** Retire age = 200
**Expected:** ytr huge; ryrs = max(10, 100−200) = 10 → projection only 10 years past age 200 (questionable, document behavior)

### G9 · All zeros across the board
**Flow:** DOB set, retire age set, no money anywhere, no income, no budget
**Expected:** all output cards show ₹0, status ✅, no NaN

### G10 · One investment removed mid-flow
**Flow:** Add 3 investments, delete middle one
**Expected:** state updates, L6 reflows, totals recompute

### G11 · Add then immediately clear amount
**Flow:** Add investment row, type then delete amount
**Expected:** treated as 0, no NaN in L3/L4

### G12 · Save% > 100
**Flow:** Save % = 150
**Expected:** input max=100 clamps; if bypassed, still computes (150% save) — but should clamp logically

### G13 · Inflation = 0
**Flow:** infl = 0
**Expected:** budget stays flat over years, L8 monthly spend constant

### G14 · Inflation very high (50%)
**Flow:** infl = 50%
**Expected:** budget compounds insanely; portfolio drains fast; no math errors

### G15 · Withdrawal rate = 100
**Flow:** WR = 100%
**Expected:** entire portfolio drained year 1; L5 = retire age; L1 = 🚨

### G16 · Saving the page with state
**Flow:** Fill everything, refresh
**Expected:** state persists via auto-save; "Auto-saved ✓" indicator visible

### G17 · Theme toggle
**Flow:** Toggle light/dark
**Expected:** all cards re-render with proper colors; charts redraw with theme colors

### G18 · Filter assets
**Flow:** Type in L6 filter input
**Expected:** only matching rows shown; totals recompute for filtered or remain global (verify desired behavior)

### G19 · Year-by-year table when ytr = 0 and depletion immediate
**Flow:** ytr=0, Budget > B
**Expected:** L8 row 1 shows "Depleted ⚠️" status, balance 0

### G20 · Investment with both lump sum AND SIP that have different currencies
**Note:** SIP currently shares the row's currency with the lump sum — verify no multi-currency-per-row edge case exists

---

## SECTION H — END-TO-END REALISTIC PERSONAS

### H1 · "Young saver, 30 years out"
**Flow:** Age 30 · retire 60 · Cash ₹100K · Inv ₹50K @ 10% · SIP ₹15K · Income ₹60K save 20% (₹12K) · Budget ₹30K · WR=4% · infl=3%
**Expected:**
- L1: ✅
- L3: very large (~₹3-5 crore)
- L4: comfortably > inflated budget
- L5: Age 100+
- L7: hockey-stick growth then gentle drawdown

### H2 · "Mid-career, 15 years out"
**Flow:** Age 45 · retire 60 · Cash ₹500K · Inv ₹2M @ 8% · SIP ₹25K · Income ₹150K save 30% (₹45K) · Budget ₹60K · WR=4% · infl=4%
**Expected:**
- All cards populated
- L4: should cover inflated budget
- L8: ~55 rows

### H3 · "Late starter, 5 years out, behind"
**Flow:** Age 55 · retire 60 · Cash ₹200K · Inv ₹500K @ 6% · SIP ₹50K · Income ₹100K save 50% (₹50K) · Budget ₹80K · WR=4% · infl=5%
**Expected:**
- L1: likely ⚠️ or 🚨
- L4: budget likely exceeds → BUDGET OVERRIDE message
- L5: depletion before 100

### H4 · "Already retired with surplus"
**Flow:** Age 65 · retire 65 (ytr=0) · Cash ₹2M · Inv ₹8M @ 5% · no SIP, no income · Budget ₹40K · WR=3.5% · infl=3%
**Expected:**
- L3: ₹10M · "After 0yr"
- L4: ₹29,167/mo (10M × 3.5%/12) · ⚠️ Budget ₹40K exceeds — ₹10.8K drawn from principal
- L5: shows depletion age based on portfolio + growth + drawdown

### H5 · "FIRE — extreme saver"
**Flow:** Age 35 · retire 40 (ytr=5) · Cash ₹500K · Inv ₹3M @ 9% · SIP ₹100K · Income ₹200K save 70% (₹140K) · Budget ₹50K · WR=3% · infl=2%
**Expected:**
- L3: ₹3M×1.09^5 + SIP FV + income FV ≈ very large
- L4: 3% sustainable likely > 50K inflated
- L1: ✅
- L5: Age 100+

### H6 · "Multi-currency expat"
**Flow:** Base USD · Cash $50K USD · Cash ₹500K INR · Inv €100K EUR @ 6% · Income $5K USD save 40% · Budget $3K USD · ytr=15
**Expected:**
- All conversion done correctly
- L2, L3, L4 in USD
- L6 shows native amounts + USD-converted values
- No NaN if any rate is blank — falls back to 0

---

## SECTION I — INTERACTION & PERSISTENCE

### I1 · Auto-save indicator
**Flow:** Type in any input
**Expected:** "saving…" → "Auto-saved ✓" within ~1s

### I2 · Refresh restores state
**Flow:** Fill all inputs → refresh
**Expected:** every field, currency, investment, income, expense, SIP value restored

### I3 · Cards collapse/expand
**Flow:** Click each left-panel card header
**Expected:** smooth collapse/expand; state persists per session

### I4 · Add/remove rows
**Flow:** Add 5 investments, delete some, add more
**Expected:** unique IDs, no ghost rows, totals recompute, save persists IDs

### I5 · Chart re-renders on theme change
**Flow:** Theme toggle while chart visible
**Expected:** chart axes/lines update colors

### I6 · Table view ↔ Chart view in Your Assets
**Flow:** Click "Table" then "Chart"
**Expected:** both views show consistent data; filter input affects both

---

## SECTION J — CONSISTENCY CHECKS (cross-locator invariants)

These should hold for ANY scenario:

### J1 · L3 == sum of L6 contributions
The "Savings at Retirement" must equal the total of all asset rows' contribution to retirement balance.

### J2 · L4 (when no budget override) == L3 × WR ÷ 12
Always when budget is 0 or below sustainable.

### J3 · L8 first row balance == L3
Year-by-year table's first row at retirement age must equal "Savings at Retirement".

### J4 · L8 monthly income column == L4 when not depleted
Each row's monthly income matches the card (or budget if override).

### J5 · L5 == first year in L8 where balance = 0 (or "100+" if none)

### J6 · L7 final point at retirement age == L3
The chart's value at retirement age must match L3.

### J7 · WG in L6 aggregate row matches calcWG()
Weighted average of all investments by amount.

### J8 · SIP only contributes when ytr > 0
Verify L3, L6, L7, L8 all reflect this gating consistently.

### J9 · Income savings only contribute when ytr > 0
Same as J8.

### J10 · Currency conversion is consistent across L2/L3/L6
Same input amount converts the same way everywhere.

---

## HOW TO USE THIS DOCUMENT

1. Pick a scenario.
2. Reset the app (clear localStorage if needed).
3. Enter exactly the inputs in the **Flow** line.
4. Verify each expected output in L1–L8.
5. If any locator doesn't match, that's a bug — note the scenario ID (e.g. "E3 failing on L4 subtitle").
6. For combinational testing, also run cross-locator invariants (Section J) on top of the value checks.
