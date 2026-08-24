---
title: "Complete Worked Example"
appendix: "G"
slug: "app-g-full-worked-example"
---

# পরিশিষ্ট G — সম্পূর্ণ Worked Example

এই পরিশিষ্টে আমরা একটি সম্পূর্ণ কাল্পনিক MNE Group — **Vantage Industries Group** — কে বইয়ের Part 2 থেকে Part 10 পর্যন্ত প্রতিটি প্রধান হিসাব-পর্যায়ের মধ্য দিয়ে টেনে নিয়ে যাব। Vantage একটি উৎপাদন ও consumer-goods গোষ্ঠী, যার Ultimate Parent Entity (UPE) হলো **Vantage Industries Group N.V.**, দেশ A-এ নিবন্ধিত (headline corporate income tax ২৫%)। গোষ্ঠীর অধীনে চারটি Constituent Entity (CE) রয়েছে চারটি ভিন্ন দেশে — দেশ B (একটি tax-holiday-চালিত low-tax manufacturing hub, যেখানে QDMTT আইন কার্যকর), দেশ C (একটি Partially-Owned Parent Entity বা POPE-এর আবাসস্থল, স্বাভাবিক করহারযুক্त), দেশ D (কোনো GloBE আইনই নেই এমন একটি low-tax trading jurisdiction), এবং দেশ E (একটি সাধারণ, স্বাভাবিক-কর retail entity)। FY2025-এ গোষ্ঠীর consolidated রাজস্ব €1,240 মিলিয়ন — অর্থাৎ €750 মিলিয়ন সীমা স্পষ্টভাবে অতিক্রম করে। নিচের প্রতিটি ধারা (§G.1–§G.13) একই সংখ্যাগুচ্ছ ব্যবহার করে, যাতে পাঠক একটি সংখ্যাকে স্কোপ-টেস্ট থেকে শুরু করে GIR-এর চূড়ান্ত allocation পর্যন্ত ধাপে ধাপে অনুসরণ করতে পারেন।

## G.1 — স্কোপ টেস্ট (§G.1)

Chapter 7-এ আলোচিত নিয়ম অনুযায়ী, একটি MNE Group Pillar Two-এর আওতায় আসে যদি তার Ultimate Parent Entity-এর Consolidated Financial Statements-এ প্রদর্শিত বার্ষিক রাজস্ব বিদ্যমান fiscal year-এর অব্যবহিত পূর্ববর্তী চার অর্থবছরের মধ্যে অন্তত দুই বছরে €750 মিলিয়ন বা তার বেশি হয়। Vantage-এর সাম্প্রতিক চার বছরের consolidated রাজস্বের হিসাব নিচে দেওয়া হলো (সব অঙ্ক € মিলিয়নে):

| অর্থবছর | Consolidated Group Revenue (€m) | €750m সীমা অতিক্রম? |
|---|---|---|
| FY2022 | 760 | হ্যাঁ |
| FY2023 | 890 | হ্যাঁ |
| FY2024 | 1,050 | হ্যাঁ |
| FY2025 (চলতি বছর) | 1,240 | হ্যাঁ |

FY2025-এর অব্যবহিত পূর্ববর্তী চার বছরের (FY2021–FY2024) মধ্যে অন্তত দুই বছরে (এখানে তিন বছরেই) রাজস্ব €750 মিলিয়ন ছাড়িয়ে গেছে। ফলে **Vantage Industries Group FY2025 থেকে GloBE Rules-এর আওতায় "In-Scope MNE Group"** হিসেবে গণ্য হবে। এই সিদ্ধান্তের ভিত্তিতেই বাকি সব হিসাব — জুরিসডিকশন ম্যাপিং, Safe Harbour টেস্ট, GloBE Income, Covered Taxes, ETR, Top-up Tax, এবং GIR — পরিচালিত হবে। FY2025-এর €1,240 মিলিয়ন রাজস্ব গঠিত হয়েছে পাঁচটি CE-এর রাজস্বের সমষ্টি থেকে (§G.2-এ বিস্তারিত), যা এই পরিশিষ্টের বাকি অংশেও অপরিবর্তিত থাকবে।

## G.2 — Entity ও Jurisdiction Map (§G.2)

Chapter 6 এবং 8–11-এ বর্ণিত সংজ্ঞা অনুযায়ী, Vantage Group-এর গঠন এবং প্রতিটি সত্তার শ্রেণিবিন্যাস নিচের সারণিতে দেখানো হলো:

| Entity | দেশ | ভূমিকা | মালিকানা (%) | GloBE আইন কার্যকর? |
|---|---|---|---|---|
| Vantage Industries Group N.V. | দেশ A | Ultimate Parent Entity (UPE) | — | QDMTT + IIR + UTPR (সবই কার্যকর) |
| Vantage Manufacturing (B) Sdn Bhd | দেশ B | Constituent Entity (CE) — Low-Taxed | Vantage Regional Holdings (C) কর্তৃক ১০০% | QDMTT + IIR + UTPR কার্যকর |
| Vantage Regional Holdings (C) Ltd | দেশ C | Partially-Owned Parent Entity (POPE) | UPE-এর ৭৫%, বহিরাগত সংখ্যালঘু বিনিয়োগকারীদের ২৫% | QDMTT + IIR + UTPR কার্যকর |
| Vantage Trading (D) Pte Ltd | দেশ D | Constituent Entity (CE) — Low-Taxed | UPE-এর সরাসরি ৬০%, বহিরাগত (Non-Group) বিনিয়োগকারীর ৪০% | **কোনো GloBE আইন নেই** |
| Vantage Retail (E) S.A. | দেশ E | Constituent Entity (CE) | UPE-এর সরাসরি ১০০% | QDMTT + IIR কার্যকর; UTPR এখনও প্রণীত হয়নি |

মালিকানার শৃঙ্খল এইরকম: UPE (দেশ A) সরাসরি ১০০% ধারণ করে Vantage Retail (E)-কে এবং সরাসরি ৬০% ধারণ করে Vantage Trading (D)-কে (বাকি ৪০% একটি সম্পূর্ণ বহিরাগত, Group-বহির্ভূত বিনিয়োগকারীর কাছে)। UPE আবার ৭৫% ধারণ করে Vantage Regional Holdings (C)-কে — যা একটি **POPE**, কারণ এর ২০ শতাংশের বেশি (অর্থাৎ ২৫%) মালিকানা Group-বহির্ভূত পক্ষের হাতে। Vantage Regional Holdings (C) নিজে ১০০% ধারণ করে দেশ B-এর Vantage Manufacturing-কে। এই দুটি ভিন্ন ধরনের "সংখ্যালঘু মালিকানা" — একটি POPE-স্তরে (দেশ C), আরেকটি সরাসরি Low-Taxed CE-স্তরে (দেশ D) — পরবর্তীতে §G.10 এবং §G.11-এ IIR ও UTPR-এর প্রয়োগে সম্পূর্ণ ভিন্ন ফল তৈরি করবে, যা এই পরিশিষ্টের একটি গুরুত্বপূর্ণ শিক্ষণীয় বিষয়।

সহায়ক তথ্য (§G.7 এবং §G.11-এর SBIE ও UTPR হিসাবে ব্যবহৃত হবে):

| Entity | রাজস্ব (€m) | কর্মী সংখ্যা | Payroll costs (€m) | Tangible assets (€m) |
|---|---|---|---|---|
| Vantage Industries Group N.V. (দেশ A) | 450 | 1,200 | 140 | 90 |
| Vantage Manufacturing (B) | 300 | 900 | 40 | 50 |
| Vantage Regional Holdings (C) | 200 | 300 | 25 | 30 |
| Vantage Trading (D) | 180 | 200 | 15 | 10 |
| Vantage Retail (E) | 110 | 350 | 20 | 15 |
| **মোট** | **1,240** | **2,950** | **240** | **195** |

## G.3 — Safe Harbour স্ক্রিনিং (§G.3)

Chapter 44–45-এ আলোচিত Transitional CbCR Safe Harbour তিনটি স্বতন্ত্র পরীক্ষার (যেকোনো একটি পাস করলেই যথেষ্ট) মাধ্যমে একটি জুরিসডিকশনকে সম্পূর্ণ GloBE হিসাব থেকে অব্যাহতি দিতে পারে: (i) De Minimis Test (CbCR রাজস্ব <€10m এবং profit/loss before tax <€1m), (ii) Simplified ETR Test (CbCR-ভিত্তিক Simplified Covered Tax Expense ÷ Profit Before Tax ≥ transition-বছরের threshold rate — FY2025-এর জন্য ১৬%), এবং (iii) Routine Profits Test (Profit Before Tax ≤ CbCR-ভিত্তিক SBIE)। Vantage-এর পাঁচটি জুরিসডিকশনের জন্য ফলাফল:

| দেশ | CbCR রাজস্ব (€m) | CbCR Profit Before Tax (€m) | Simplified Covered Tax (€m) | Simplified ETR | ফলাফল |
|---|---|---|---|---|---|
| A | 450 | 90 | 24.5 | ২৭.২% | **পাস** (Simplified ETR ≥ ১৬%) |
| B | 300 | 82 | 9.0 | ১১.০% | **ফেল** — তিনটি টেস্টেই ফেল; পূর্ণ GloBE হিসাব আবশ্যক |
| C | 200 | 48 | 10.6 | ২২.১% | **পাস** (Simplified ETR ≥ ১৬%) |
| D | 180 | 40 | 2.0 | ৫.০% | **ফেল** — তিনটি টেস্টেই ফেল; পূর্ণ GloBE হিসাব আবশ্যক |
| E | 110 | 21 | 5.0 | ২৩.৮% | **পাস** (Simplified ETR ≥ ১৬%) |

দেশ C-এর ক্ষেত্রে: রাজস্ব €200m (De Minimis ফেল করে, কারণ এটি €10m-এর অনেক বেশি), কিন্তু Simplified ETR ২২.১%, যা ১৬% থ্রেশহোল্ডের চেয়ে বেশি — ফলে **Simplified ETR Test পাস** হয় এবং দেশ C-এর জন্য পূর্ণ GloBE ETR হিসাব করার প্রয়োজন নেই (deemed zero Top-up Tax)। বিপরীতে, দেশ B-তে tax-holiday-এর কারণে Simplified ETR মাত্র ১১.০% — ১৬%-এর নিচে, এবং রাজস্ব ও profit-এর আকারের কারণে De Minimis Test-ও ফেল করে, এবং SBIE (নিচে §G.7-এ প্রায় €7.6m) profit-এর (€82m) তুলনায় নগণ্য হওয়ায় Routine Profits Test-ও ফেল করে। সুতরাং **দেশ B এবং দেশ D-এর জন্য সম্পূর্ণ GloBE Income, Covered Taxes, ETR এবং Top-up Tax গণনা বাধ্যতামূলক** — এই দুই জুরিসডিকশনই §G.4 থেকে §G.11 পর্যন্ত এই পরিশিষ্টের মূল কেন্দ্রবিন্দু।

## G.4 — GloBE Income বা Loss গণনা (§G.4)

আমরা এখন দেশ B (Vantage Manufacturing) নিয়ে বিস্তারিত হিসাব শুরু করি, যা Chapter 12–13-এ বর্ণিত Article 3.2 পদ্ধতি অনুসরণ করে। শুরু বিন্দু হলো Financial Accounting Net Income (FANI) — UPE-এর accounting standard অনুযায়ী তৈরি entity-level নেট আয়, consolidation adjustments বাদ দিয়ে। দেশ B-এর FANI = **€80.0 মিলিয়ন**। এর উপর নিচের চারটি Article 3.2.1 adjustment প্রয়োগ করা হয়:

| # | Adjustment বিবরণ | প্রভাব (€m) |
|---|---|---|
| — | FANI (শুরু বিন্দু) | 80.0 |
| ১ | (+) Net Tax Expense যোগ করা — যেহেতু GloBE Income কর-পূর্ব ভিত্তিতে গণনা হয়, FANI-তে ইতিমধ্যে কর্তন করা current + deferred tax expense (€7.0m + €2.0m) পুনরায় যোগ করা হয় | +9.0 |
| ২ | (−) Excluded Dividend Income — অন্য entity-তে মালিকানার ভিত্তিতে প্রাপ্ত ডিভিডেন্ড, যা Article 3.2.1(b) অনুযায়ী GloBE Income থেকে বাদ | −5.0 |
| ৩ | (+) Disallowed Expenses — জরিমানা ও অ-বৈধ payment-জাতীয় ব্যয় যা GloBE Income-এ ফিরিয়ে যুক্ত করতে হয় | +1.5 |
| ৪ | (−) Asymmetric Foreign Currency Gain বর্জন — functional currency এবং কর-উদ্দেশ্যে ব্যবহৃত currency-এর মধ্যকার পার্থক্য থেকে উদ্ভূত asymmetric FX gain, যা GloBE Income থেকে বাদ দেওয়া হয় | −0.5 |
| — | **GloBE Income (দেশ B, FY2025)** | **85.0** |

হিসাব: ৮০.০ + ৯.০ − ৫.০ + ১.৫ − ০.৫ = **৮৫.০ মিলিয়ন ইউরো**। এই €85.0m সংখ্যাটিই §G.6-এর ETR হিসাব এবং §G.7-এর Excess Profit হিসাবের হর/ভিত্তি হিসেবে সরাসরি ব্যবহৃত হবে — পাঠক এই সংখ্যাটি বাকি ধারাগুলোতেও অনুসরণ করতে পারবেন।

## G.5 — Adjusted Covered Taxes গণনা (§G.5)

Chapter 18–21-এ বর্ণিত পদ্ধতি অনুসরণ করে, দেশ B-এর জন্য Current Tax Expense থেকে Adjusted Covered Taxes-এ পৌঁছানো হয়। দেশ B-এর tax-holiday incentive-এর কারণে nominal ২৪% হারের বিপরীতে বাস্তবে সামান্য current tax দিতে হয়েছে।

| ধারা | বিবরণ | পরিমাণ (€m) |
|---|---|---|
| — | Current Tax Expense (আর্থিক হিসাবে recorded) | 7.0 |
| (+) | Addition — পূর্ববর্তী অর্থবছরের সংক্রান্ত অতিরিক্ত কর accrual | +0.5 |
| (−) | Reduction — Marketable Transferable Tax Credit-কে আয় হিসেবে গণ্য করা (কর-হ্রাস নয়) | −0.8 |
| (−) | Reduction — Uncertain Tax Position-এর reversal | −0.3 |
| — | **সমন্বিত Current Tax উপাদান** | **6.4** |
| (+) | Deferred Tax Expense (আর্থিক হিসাবে recorded, €2.0m) — যেহেতু দেশ B-এর প্রযোজ্য স্থানীয় করহার ইতিমধ্যে ১৫%-এর নিচে, Article 4.4.1-এর rate-cap recast প্রয়োজন হয় না; recorded অঙ্কই ব্যবহৃত হয় | +2.0 |
| — | **Adjusted Covered Taxes (দেশ B, FY2025)** | **8.4** |

হিসাব: ৭.০ + ০.৫ − ০.৮ − ০.৩ = ৬.৪ (current); ৬.৪ + ২.০ (deferred) = **৮.৪ মিলিয়ন ইউরো**। লক্ষণীয় যে §G.4-এ FANI-তে যে €9.0m tax-expense addback করা হয়েছিল (current €7.0m + deferred €2.0m), তার সাথে এই ধারার সূচনা-বিন্দু সম্পূর্ণ সামঞ্জস্যপূর্ণ।

## G.6 — ETR গণনা (§G.6)

Chapter 25 অনুযায়ী, জুরিসডিকশনাল Effective Tax Rate (ETR) = Adjusted Covered Taxes ÷ GloBE Income, যা সেই জুরিসডিকশনের সব CE-এর জন্য blended ভিত্তিতে গণনা হয় (এখানে দেশ B-তে একটিই CE, তাই blending-এর প্রশ্ন ওঠে না)।

**ETR (দেশ B) = €8.4m ÷ €85.0m = ৯.৮৮%**

এই ৯.৮৮% হার ন্যূনতম ১৫% হারের চেয়ে উল্লেখযোগ্যভাবে কম — tax holiday-জাতীয় incentive-এর প্রভাবে দেশ B GloBE-এর দৃষ্টিতে স্পষ্টভাবে "Low-Taxed Jurisdiction"। এই ফলাফলই §G.3-এর Safe Harbour ব্যর্থতার সাথে সামঞ্জস্যপূর্ণ এবং §G.8-এর Top-up Tax গণনার ভিত্তি তৈরি করে।

## G.7 — SBIE এবং Excess Profit (§G.7)

Chapter 27-এ বর্ণিত Substance-Based Income Exclusion (SBIE) দুটি উপাদান নিয়ে গঠিত — Eligible Payroll Costs এবং Eligible Tangible Assets-এর carrying value, প্রতিটির উপর transition-schedule-নির্ধারিত হার প্রয়োগ করে। FY2025-এর জন্য প্রযোজ্য transition rate: payroll ৯.৬%, tangible assets ৭.৬%।

| উপাদান | ভিত্তি (€m) | হার (FY2025) | SBIE অবদান (€m) |
|---|---|---|---|
| Payroll costs | 40.0 | ৯.৬% | 3.84 |
| Tangible assets (carrying value) | 50.0 | ৭.৬% | 3.80 |
| **মোট SBIE** | — | — | **7.64** |

Chapter 26 অনুযায়ী, Excess Profit = GloBE Income − SBIE:

**Excess Profit (দেশ B) = €85.0m − €7.64m = €77.36 মিলিয়ন**

এই Excess Profit-এর অঙ্কটিই Top-up Tax Percentage-এর সাথে গুণ করে Jurisdictional Top-up Tax নির্ধারণ করা হবে — নিচে §G.8-এ।

## G.8 — Top-up Tax Percentage এবং Jurisdictional Top-up Tax (§G.8)

Chapter 26 অনুযায়ী, Top-up Tax Percentage = ন্যূনতম হার (১৫%) − জুরিসডিকশনাল ETR:

**Top-up Tax % (দেশ B) = ১৫.০০% − ৯.৮৮% = ৫.১২%** (নির্ভুলভাবে: ১৫.০০০% − ৯.৮৮২৪% = ৫.১১৭৬%)

Jurisdictional Top-up Tax = Top-up Tax % × Excess Profit:

**Jurisdictional Top-up Tax (দেশ B) = ৫.১১৭৬% × €77.36m ≈ €3.96 মিলিয়ন**

(এই অঙ্কে সাধারণত Additional Current Top-up Tax বা QDMTT payable-এর কারণে পূর্ববর্তী বছরের সমন্বয় থাকতে পারে, কিন্তু সরলতার জন্য এই উদাহরণে তা শূন্য ধরা হয়েছে।) এই €3.96 মিলিয়ন-ই দেশ B-এর সম্পূর্ণ GloBE দায়বদ্ধতা — এখন প্রশ্ন হলো এই দায় বাস্তবে **কে** সংগ্রহ করবে: QDMTT, IIR, নাকি UTPR? পরবর্তী দুটি ধারায় তা নির্ধারিত হবে।

## G.9 — QDMTT অফসেট (§G.9)

Chapter 32-এ বর্ণিত হিসেবে, দেশ B ইতিমধ্যে একটি Qualified Domestic Minimum Top-up Tax (QDMTT) আইন প্রণয়ন করেছে, যা GloBE পদ্ধতির অনুরূপ (কিছু স্থানীয় ভিন্নতাসহ, যেমন স্থানীয় accounting standard-এ হিসাব এবং কিছুটা ভিন্ন currency conversion পদ্ধতি) নিজস্ব top-up tax দাবি করার অধিকার রাখে। দেশ B-এর QDMTT আইনের অধীনে হিসাব করা দায়:

**দেশ B-এর QDMTT দায় = €3.16 মিলিয়ন**

QDMTT credit mechanism অনুযায়ী, যে-কোনো জুরিসডিকশনে সংগৃহীত QDMTT-এর অঙ্ক IIR ও UTPR-এর অধীনে গণনা করা Top-up Tax থেকে ডলার-ফর-ডলার (euro-for-euro) বিয়োগ করা হয়, যাতে একই মুনাফার উপর দ্বৈত-সংগ্রহ না ঘটে। তাহলে:

| | পরিমাণ (€m) |
|---|---|
| Jurisdictional Top-up Tax (§G.8) | 3.96 |
| (−) QDMTT দ্বারা স্থানীয়ভাবে সংগৃহীত | 3.16 |
| **IIR/UTPR-এর জন্য অবশিষ্ট Top-up Tax** | **0.80** |

লক্ষণীয়: এখানে QDMTT এবং GloBE গণনায় ছোট একটি পার্থক্য (€3.96m বনাম €3.16m) ধরা হয়েছে — বাস্তবে এটি প্রায়ই ঘটে যখন QDMTT-এর হিসাব-ভিত্তি (যেমন স্থানীয় currency-তে হিসাব, বা কিছু সময়গত পার্থক্য) GloBE হিসাবের সাথে হুবহু মেলে না। অবশিষ্ট **€0.80 মিলিয়ন** এখন IIR (বা প্রয়োজনে UTPR)-এর মাধ্যমে সংগ্রহ করতে হবে — এটাই §G.10-এর বিষয়বস্তু।

## G.10 — IIR প্রয়োগ (§G.10)

Chapter 31 ও 33-এ বর্ণিত Income Inclusion Rule (IIR) সাধারণত "top-down" পদ্ধতিতে কাজ করে — UPE তার প্রতিটি নিম্ন-করযুক্ত CE-তে থাকা মালিকানার Allocable Share-এর ভিত্তিতে Top-up Tax দাবি করে। কিন্তু §G.2-এ দেখা গেছে, দেশ B-এর মালিকানার শৃঙ্খলে একটি **POPE** (Vantage Regional Holdings, দেশ C) বিদ্যমান, যা UPE-এর ৭৫% এবং বহিরাগত সংখ্যালঘু বিনিয়োগকারীদের ২৫% মালিকানায় গঠিত, এবং এই POPE নিজেই ১০০% ধারণ করে দেশ B-এর CE-কে।

**POPE Rule** অনুযায়ী: যদি কোনো POPE নিজে একটি Qualified IIR-এর অধীন জুরিসডিকশনে (এখানে দেশ C) অবস্থিত হয় এবং কোনো নিম্ন-করযুক্ত CE-তে (সরাসরি বা পরোক্ষভাবে) মালিকানার অধিকারী হয়, তবে সেই POPE-কেই — UPE-এর পূর্বে — তার **নিজস্ব** ownership interest-এর ভিত্তিতে IIR প্রয়োগ করতে হয়, যাতে UPE-স্তরে থাকা সংখ্যালঘু মালিকানার কারণে Allocable Share diluted হয়ে না যায়।

এখানে গুরুত্বপূর্ণ বিষয়টি হলো: Vantage Regional Holdings (দেশ C)-এর **নিজের** মালিকানায় দেশ B-এর ১০০% রয়েছে (দেশ C-এর নিজস্ব শেয়ারহোল্ডিং গঠনে ২৫% সংখ্যালঘু থাকলেও তা দেশ B-এর মালিকানাকে প্রভাবিত করে না)। ফলে:

| ধারা | পরিমাণ |
|---|---|
| দেশ B-এর অবশিষ্ট Top-up Tax (§G.9) | €0.80m |
| Vantage Regional Holdings (C)-এর দেশ B-তে মালিকানা | ১০০% |
| POPE-এর Allocable Share | ১০০% × €0.80m = **€0.80m** |
| দেশ C-এর নিজস্ব Qualified IIR-এর অধীনে সংগৃহীত পরিমাণ | **€0.80 মিলিয়ন** |
| UPE (দেশ A)-এর IIR দায় (দেশ B-এর ক্ষেত্রে) | €0 (POPE কর্তৃক পূর্ণ সংগ্রহের কারণে হ্রাসকৃত) |

সুতরাং দেশ B-এর ক্ষেত্রে UPE-এর দেশ A-কে আলাদাভাবে কোনো IIR দায় বহন করতে হয় না — কারণ Article 2.1.2-এর নীতি অনুযায়ী, একবার একটি POPE তার নিজস্ব Qualified IIR-এর অধীনে সংশ্লিষ্ট Top-up Tax পূর্ণভাবে সংগ্রহ করে ফেললে, উচ্চতর স্তরের IIR (এখানে UPE-এর) সেই একই অঙ্কের উপর আর প্রযোজ্য হয় না। এই ফলাফল §G.11-এর সাথে সরাসরি তুলনীয় — কারণ ওখানে সংখ্যালঘু মালিকানা POPE-স্তরে নয়, বরং **সরাসরি Low-Taxed CE-স্তরে** থাকায় সম্পূর্ণ ভিন্ন ফল তৈরি হবে।

## G.11 — UTPR প্রয়োগ (§G.11)

এখন দৃষ্টি ফেরানো যাক দেশ D-এর দিকে — Vantage Trading (D) Pte Ltd, যেখানে **কোনো GloBE আইন কার্যকর নেই** (তাই স্থানীয় QDMTT-এর মাধ্যমে কোনো top-up tax শোষণের সুযোগ নেই)। Chapter 31 ও 35-এ বর্ণিত পদ্ধতিতে প্রথমে দেশ D-এর নিজস্ব GloBE হিসাব সংক্ষেপে দেখা যাক (§G.4–§G.8-এর পদ্ধতি অনুসরণ করে, সংক্ষিপ্ত আকারে):

| ধারা | পরিমাণ (€m) |
|---|---|
| GloBE Income | 40.0 |
| Adjusted Covered Taxes | 2.0 |
| ETR | ৫.০% |
| SBIE (Payroll €15m × ৯.৬% = 1.44; Tangible €10m × ৭.৬% = 0.76) | 2.2 |
| Excess Profit (40.0 − 2.2) | 37.8 |
| Top-up Tax % (১৫% − ৫%) | ১০% |
| **Jurisdictional Top-up Tax** | **3.78** |

দেশ D-তে কোনো QDMTT না থাকায় এই সম্পূর্ণ €3.78m IIR/UTPR-এর জন্য উন্মুক্ত থেকে যায়। এখন মালিকানার প্রশ্ন: দেশ D-এর ৬০% সরাসরি UPE (দেশ A) ধারণ করে, বাকি ৪০% একটি সম্পূর্ণ **Group-বহির্ভূত** বিনিয়োগকারীর হাতে — এবং লক্ষণীয়, এই সংখ্যালঘু মালিকানা এবার সরাসরি Low-Taxed CE-স্তরেই বিদ্যমান, §G.10-এর POPE-কাঠামোর মতো নয়।

**IIR-এর মাধ্যমে সংগ্রহ:** UPE-এর Allocable Share তার প্রকৃত ownership interest দ্বারা সীমাবদ্ধ — অর্থাৎ ৬০%:

Allocable Share = ৬০% × €3.78m = **€2.268m ≈ €2.27m** — দেশ A কর্তৃপক্ষ তার Qualified IIR-এর অধীনে এই অঙ্ক সংগ্রহ করে।

বাকি ৪০% মালিকানা যেহেতু কোনো Constituent Entity বা Group-এর কোনো Parent Entity-এর হাতে নেই (এটি সম্পূর্ণ বহিরাগত বিনিয়োগকারী, যিনি কোনো Qualified IIR প্রয়োগ করার বাধ্যবাধকতার অধীন নয়), তাই এই অংশ IIR-এর মাধ্যমে **কখনোই** সংগ্রহ হবে না। ঠিক এই শূন্যতা পূরণ করার জন্যই UTPR একটি backstop হিসেবে কাজ করে:

**UTPR Top-up Tax Amount = Jurisdictional Top-up Tax − IIR-এর মাধ্যমে সংগৃহীত অংশ = €3.78m − €2.268m = €1.512m ≈ €1.51 মিলিয়ন**

এই উদাহরণে ধরা হয়েছে যে কেবল দেশ A এবং দেশ C-তে UTPR আইন কার্যকর আছে (দেশ B ও দেশ E-এ UTPR আইন এখনও কার্যকর হয়নি, এবং দেশ D-তে কোনো GloBE আইনই নেই)। UTPR allocation formula অনুযায়ী প্রতিটি UTPR জুরিসডিকশনের অংশ = ৫০% কর্মী-সংখ্যা অনুপাত + ৫০% tangible-asset-মূল্য অনুপাত (কেবল UTPR-জুরিসডিকশনগুলোর মধ্যে হিসাব করা):

| জুরিসডিকশন | কর্মী | কর্মী-অনুপাত | Tangible Assets (€m) | Asset-অনুপাত | UTPR% (৫০/৫০ গড়) |
|---|---|---|---|---|---|
| দেশ A | 1,200 | ৮০.০% | 90 | ৭৫.০% | **৭৭.৫%** |
| দেশ C | 300 | ২০.০% | 30 | ২৫.০% | **২২.৫%** |
| মোট | 1,500 | ১০০% | 120 | ১০০% | ১০০% |

UTPR-এর মাধ্যমে বণ্টিত €1.512m:

- দেশ A: ৭৭.৫% × €1.512m = **€1.17 মিলিয়ন**
- দেশ C: ২২.৫% × €1.512m = **€0.34 মিলিয়ন**

এই দুটি সংখ্যা যোগ করলে €1.51 মিলিয়ন হয়, যা উপরের UTPR Top-up Tax Amount-এর সাথে সামঞ্জস্যপূর্ণ। এই ধারাটি §G.10-এর সাথে একটি গুরুত্বপূর্ণ বৈসাদৃশ্য তুলে ধরে: যখন সংখ্যালঘু মালিকানা একটি **POPE-স্তরে** থাকে (দেশ C, §G.10), তখন POPE-এর নিজস্ব ১০০% ownership interest-এর কারণে IIR পূর্ণ Top-up Tax সংগ্রহ করে ফেলতে পারে এবং UTPR-এর প্রয়োজনই হয় না। কিন্তু যখন সংখ্যালঘু মালিকানা **সরাসরি Low-Taxed CE-স্তরে** থাকে (দেশ D, §G.11), IIR-এর Allocable Share প্রকৃতপক্ষেই diluted হয়ে যায়, এবং এই ফাঁক পূরণ করতে হয় UTPR-এর মাধ্যমে — এবং UTPR-এর ক্ষেত্রে মালিকানার শতাংশের কোনো সীমাবদ্ধতা নেই; কেবল কর্মী ও সম্পদের substance-ভিত্তিক formula প্রযোজ্য।

## G.12 — GIR সারসংক্ষেপ (§G.12)

Chapter 51-এ বর্ণিত GloBE Information Return (GIR)-এর তিনটি অংশে Vantage Group-এর তথ্য কীভাবে উপস্থিত হবে তা নিচে সংক্ষেপে দেখানো হলো:

**Section 1 — General Information:** Vantage Industries Group N.V. (UPE, দেশ A) এর গোষ্ঠী-কাঠামো, প্রতিটি CE-এর নাম-জুরিসডিকশন-মালিকানা শতাংশ (§G.2-এর সারণি অনুযায়ী), POPE হিসেবে Vantage Regional Holdings (C)-এর চিহ্নিতকরণ, এবং প্রযোজ্য নির্বাচন (elections) — যেমন QDMTT Safe Harbour election (যদি দেশ B তা দাবি করত, এই উদাহরণে করা হয়নি কারণ QDMTT সম্পূর্ণ Top-up Tax শোষণ করেনি) এবং কোনো De Minimis বা transition-related election।

**Section 2 — GloBE গণনা:** যে জুরিসডিকশনগুলো Safe Harbour পাস করেছে (দেশ A, C, E — §G.3) তাদের জন্য সরলীকৃত রিপোর্টিং (Simplified ETR এবং safe-harbour-elected status দেখিয়ে), এবং যে দুটি জুরিসডিকশন ব্যর্থ হয়েছে (দেশ B, D) তাদের জন্য সম্পূর্ণ বিস্তারিত হিসাব — GloBE Income, Adjusted Covered Taxes, ETR, SBIE, Excess Profit, Top-up Tax % এবং Jurisdictional Top-up Tax (§G.4–§G.8, §G.11 অনুযায়ী প্রতিটি সংখ্যাসহ)।

**Section 3 — Top-up Tax-এর বণ্টন ও দায়িত্ব:** কোন entity বা জুরিসডিকশন কত Top-up Tax প্রকৃতপক্ষে পরিশোধ করবে তার সম্পূর্ণ mapping —

- দেশ B-এর €3.16m QDMTT-এর মাধ্যমে দেশ B নিজেই স্থানীয়ভাবে সংগ্রহ করবে;
- দেশ B-এর অবশিষ্ট €0.80m Vantage Regional Holdings (দেশ C) তার POPE Qualified IIR-এর অধীনে ফাইল করবে;
- দেশ D-এর €2.27m Vantage Industries Group N.V. (দেশ A, UPE) তার Qualified IIR-এর অধীনে ফাইল করবে;
- দেশ D-এর অবশিষ্ট €1.51m UTPR-এর মাধ্যমে দেশ A (€1.17m) এবং দেশ C (€0.34m)-এর মধ্যে employee/asset formula অনুযায়ী বণ্টিত হবে।

## G.13 — চূড়ান্ত সারসংক্ষেপ সারণি (§G.13)

নিচের মাস্টার সারণিতে Vantage Industries Group-এর FY2025-এর সম্পূর্ণ Pillar Two চিত্র একত্রে দেখানো হলো — এই একটি সারণিই এই পরিশিষ্টের সমস্ত ধাপের চূড়ান্ত ফলাফল:

| দেশ | রাজস্ব (€m) | GloBE Income (€m) | Adjusted Covered Taxes (€m) | ETR | Jurisdictional Top-up Tax (€m) | সংগ্রহকারী নিয়ম | সংগ্রহকারী জুরিসডিকশন ও পরিমাণ |
|---|---|---|---|---|---|---|---|
| A (UPE) | 450 | 95.0 | 24.5 | ২৫.৮% | — (নিজস্ব কোনো Top-up Tax নেই) | — | IIR (D-এর জন্য €2.27m) + UTPR (D-এর জন্য €1.17m) সংগ্রহ করে, নিজের কোনো দায় নেই |
| B (Low-Taxed) | 300 | 85.0 | 8.4 | ৯.৯% | 3.96 | QDMTT + POPE-IIR | QDMTT (B, স্থানীয়): €3.16m; IIR (C, POPE): €0.80m |
| C (POPE) | 200 | Safe Harbour পাস | Safe Harbour পাস | ২২.১%* | — (নিজস্ব কোনো Top-up Tax নেই) | — | IIR (D-এর জন্য নেই) + UTPR (D-এর জন্য €0.34m) সংগ্রহ করে, নিজের কোনো দায় নেই |
| D (Low-Taxed, no legislation) | 180 | 40.0 | 2.0 | ৫.০% | 3.78 | IIR + UTPR | IIR (A): €2.27m; UTPR (A €1.17m + C €0.34m = €1.51m) |
| E | 110 | Safe Harbour পাস | Safe Harbour পাস | ২৩.৮%* | — | — | প্রযোজ্য নয় |
| **মোট** | **1,240** | — | — | — | **7.74** | — | — |

*দেশ C ও E-এর ETR এখানে Simplified ETR (CbCR-ভিত্তিক), কারণ Safe Harbour পাস করায় সম্পূর্ণ GloBE ETR গণনার প্রয়োজন হয়নি।

সংক্ষেপে: Vantage Industries Group-এর FY2025-এর মোট Pillar Two এক্সপোজার হলো **€7.74 মিলিয়ন** (দেশ B-এর €3.96m + দেশ D-এর €3.78m), যা চারটি ভিন্ন প্রক্রিয়ার মাধ্যমে সংগ্রহ করা হয় — দেশ B-এর নিজস্ব QDMTT (€3.16m), দেশ C-এর POPE-IIR (€0.80m), দেশ A-এর UPE-IIR (€2.27m), এবং দেশ A ও C-এর মধ্যে বণ্টিত UTPR (€1.17m + €0.34m = €1.51m)। এই একই সংখ্যাগুচ্ছ — €80.0m FANI থেকে শুরু করে §G.4-এর €85.0m GloBE Income, §G.5-এর €8.4m Adjusted Covered Taxes, §G.6-এর ৯.৮৮% ETR, §G.7-এর €77.36m Excess Profit, §G.8-এর €3.96m Top-up Tax, এবং §G.9–§G.11-এর QDMTT/IIR/UTPR বণ্টন পর্যন্ত — একটি অবিচ্ছিন্ন শৃঙ্খল তৈরি করে, যা বইয়ের Part 2 থেকে Part 10-এর প্রতিটি হিসাব-পদ্ধতিকে একটিমাত্র বাস্তবসদৃশ উদাহরণে সংযুক্ত করে।
