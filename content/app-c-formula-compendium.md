---
title:
  en: "Formula Compendium"
  bn: "সূত্র সংকলন"
appendix: "C"
slug: "app-c-formula-compendium"
---

<!-- lang:en -->

# Appendix C — Formula Compendium

This appendix collects together every important mathematical and computational formula discussed across the book's chapters under the OECD Pillar Two (GloBE) framework. Its purpose is not to offer any new explanation, but to give a practitioner a place to find every formula at a glance. Each formula is accompanied by a short explanation and a reference to the chapter where its detailed discussion and numerical example can be found. The formulas are arranged in logical groups, in the order in which they first arise in the chapters — first the core ETR and Top-up Tax computation, then SBIE and De Minimis, then Covered Taxes-related adjustments, and finally the allocation process (IIR/UTPR) and the STTR.

## 1. ETR and Net GloBE Income — the core jurisdiction-level computation (Chapter 25)

### Formula 1 — Effective Tax Rate (ETR)

```
ETR = Adjusted Covered Taxes of all CEs in the jurisdiction
      ÷ Net GloBE Income of the jurisdiction
```

This formula is set out in Article 5.1 and discussed in detail in **Chapter 25**. The numerator is the sum of the Adjusted Covered Taxes of all Constituent Entities (CEs) located in the jurisdiction, and the denominator is that jurisdiction's Net GloBE Income. Note that this computation is not entity-based but is performed by blending the entire jurisdiction together (Jurisdictional Blending), so that a high-tax entity in the same country can offset the shortfall of a low-tax entity.

### Formula 2 — Net GloBE Income

```
Net GloBE Income = (sum of GloBE Income of all CEs in the jurisdiction)
                    − (sum of GloBE Loss of all CEs in the jurisdiction)
```

This too is explained in **Chapter 25** and forms the denominator of the ETR formula. First, the sum of GloBE Income (positive) is taken for all entities in the jurisdiction that have it, and then the sum of GloBE Loss (negative) is subtracted for all entities that have it. This functions like a "consolidated" jurisdiction-level income statement, in which one entity's loss directly offsets another entity's profit.

## 2. Top-up Tax Percentage, Excess Profit, and Jurisdictional Top-up Tax (Chapter 26)

### Formula 3 — Top-up Tax Percentage

```
Top-up Tax Percentage = 15% − ETR
```

**Chapter 26** explains that the shortfall remaining after subtracting a jurisdiction's actual ETR from the minimum rate (15%) is the Top-up Tax Percentage. If the ETR equals or exceeds 15%, this percentage is zero or negative, meaning no Top-up Tax liability arises.

### Formula 4 — Excess Profit

```
Excess Profit = Net GloBE Income − SBIE
```

Discussed in **Chapter 26**, this formula determines Excess Profit by subtracting the Substance-based Income Exclusion (SBIE) from Net GloBE Income — Top-up Tax applies only to this Excess Profit, not to the entire Net GloBE Income.

### Formula 5 — Jurisdictional Top-up Tax

```
Jurisdictional Top-up Tax = (Excess Profit × Top-up Tax %)
                             + Additional Current Top-up Tax
                             − QDMTT
```

In this core formula from **Chapter 26**, the Top-up Tax Percentage is applied to Excess Profit to determine the base amount, then the adjustment for a prior year's underpayment (Additional Current Top-up Tax) is added, and finally the Qualified Domestic Minimum Top-up Tax (QDMTT) actually paid in that jurisdiction is subtracted, so as to avoid double taxation.

## 3. Substance-based Income Exclusion — SBIE (Chapter 27)

### Formula 6 — SBIE

```
SBIE = (Eligible Payroll Costs × payroll carve-out rate)
       + (Eligible Tangible Assets carrying value × tangible asset carve-out rate)
```

This formula, discussed in **Chapter 27**, recognizes genuine economic activity (employees and fixed assets). Eligible Payroll Costs is the payroll expense of eligible employees located in the jurisdiction, and Eligible Tangible Assets carrying value is the average of the carrying value at the beginning and end of the year. Applying separate rates to these two bases and adding them together gives the SBIE.

**Transition Rate schedule (Article 9.2) — from 10%/8% in 2023 to 5%/5% in 2033:**

| Fiscal year beginning | Payroll rate | Tangible Assets rate |
|---|---|---|
| 2023 | 10.0% | 8.0% |
| 2024 | 9.8% | 7.8% |
| 2025 | 9.6% | 7.6% |
| 2026 | 9.4% | 7.4% |
| 2027 | 9.2% | 7.2% |
| 2028 | 9.0% | 7.0% |
| 2029 | 8.2% | 6.6% |
| 2030 | 7.4% | 6.2% |
| 2031 | 6.6% | 5.8% |
| 2032 | 5.8% | 5.4% |
| 2033 and thereafter (permanent rate) | 5.0% | 5.0% |

This step-by-step declining rate is designed to avoid an abrupt transition and to give businesses time to adjust; from 2033 both rates are permanently fixed at 5%.

## 4. De Minimis Exclusion (Chapter 28)

### Formula 7 — De Minimis average test

```
Three-year average GloBE Revenue < €10 million
              AND
Three-year average GloBE Income < €1 million
```

Explained in **Chapter 28** (Article 5.5), when these two conditions are met together, the jurisdiction's Top-up Tax is treated as zero. The average is determined by summing the revenue/income-or-loss figures for the current year and the two preceding years — a total of three years — and dividing by 3. The second condition is also satisfied if there is an average GloBE Loss rather than GloBE Income.

## 5. GloBE Loss Deferred Tax Asset (Chapter 23)

### Formula 8 — Creation of the GloBE Loss DTA

```
GloBE Loss Deferred Tax Asset = |GloBE Loss| × 15%
```

Under this formula, discussed in **Chapter 23** (the GloBE Loss Election), a Deferred Tax Asset (DTA) is created in a loss year for a jurisdiction by applying a 15% rate to the absolute value of the Net GloBE Loss. In a later year, when that jurisdiction has positive Net GloBE Income, this accumulated DTA balance (or that year's Net GloBE Income × 15%, whichever is smaller) is used to increase Adjusted Covered Taxes, so that past losses are recognized against future profits.

## 6. UTPR Allocation Formula (Chapter 35)

### Formula 9 — UTPR Percentage

```
UTPR Percentage = 50% × (share of employees) + 50% × (share of tangible assets)
```

Under this formula, explained in **Chapter 35**, the share of Top-up Tax allocated to a jurisdiction applying the Undertaxed Profits Rule (UTPR) is determined by the sum of two equally weighted ratios — that jurisdiction's number of employees (relative to the MNE Group's total employees) and that jurisdiction's net book value of tangible assets (relative to the group's total tangible assets). This UTPR Percentage is multiplied by the unallocated Top-up Tax to determine the allocation to each UTPR jurisdiction.

## 7. IIR — Allocable Share (Chapter 33)

### Formula 10 — Allocable Share (conceptual explanation)

```
Allocable Share = LTCE's Top-up Tax × Parent Entity's Inclusion Ratio
```

Under this formula, discussed in **Chapter 33** (the Income Inclusion Rule), a Parent Entity's own share of a Low-Taxed Constituent Entity's (LTCE) total Top-up Tax is determined by applying its ownership-based Inclusion Ratio — this Ratio essentially reflects the proportion of GloBE Income attributable to that Parent's ownership, after excluding the minority-owned portion. Where there are multiple tiers of Parent Entities, split-ownership and offset rules prevent double counting, so that the same Top-up Tax is not claimed more than once at different tiers.

## 8. Special Allocation and Adjustment of Covered Taxes (Chapters 20 and 22)

### Formula 11 — Passive Income Tax Limitation (Article 4.3.3)

```
Allowable allocable tax (in respect of Passive Income)
    = Passive Income × (minimum rate − that entity's own applicable tax rate/ETR)
```

This concept, explained in **Chapter 20**, imposes a limit on how much of the tax allocated to a parent entity under a CFC or hybrid regime can be added to the Adjusted Covered Taxes of the entity related to that Passive Income. This limit prevents abuse of push-down tax adjustments, so that no entity can artificially inflate its ETR by attributing tax in excess of the actual rate to another entity's account.

### Formula 12 — Recast at the 15% Minimum Rate

This process, discussed in **Chapter 22**, is not itself a formula but an adjustment method: when a Deferred Tax Liability (DTL) has been recorded at a domestic nominal tax rate (which exceeds 15%), for purposes of the GloBE ETR computation that DTL is "recast," or recomputed, at a rate capped at 15% — that is,

```
Recast DTL @ 15% = Temporary Difference × 15%
```

As a result, the excess between the domestic rate and 15% is excluded from Adjusted Covered Taxes (the Recast adjustment), so that no jurisdiction can artificially inflate its ETR by showing a high nominal rate. If this DTL does not reverse within a specified period (generally five years), the Recapture rule applies, requiring a prior year's ETR to be recomputed.

## 9. STTR — Subject to Tax Rule (Chapter 42)

### Formula 13 — STTR Tax

```
STTR Tax = (9% − Adjusted Nominal Rate) × Covered Income
```

In this formula, explained in **Chapter 42**, the Adjusted Nominal Rate is the adjusted nominal tax rate actually applicable to that specific Covered Income in the recipient's state of residence. If this rate is below 9%, the source jurisdiction may impose an additional tax (STTR Tax) on the Covered Income at the rate of that shortfall — this is not a replacement for an existing withholding tax, but applies in addition to it.

<!-- lang:bn -->

# পরিশিষ্ট C — সূত্র সংকলন

এই পরিশিষ্টে OECD Pillar Two (GloBE) কাঠামোর অধীনে বইয়ের বিভিন্ন অধ্যায়ে আলোচিত সব গুরুত্বপূর্ণ গাণিতিক ও গণনামূলক সূত্র একত্রে সংকলিত করা হয়েছে। এর উদ্দেশ্য কোনো নতুন ব্যাখ্যা দেওয়া নয়, বরং একজন প্র্যাক্টিশনারকে একনজরে সব সূত্র খুঁজে পাওয়ার সুবিধা দেওয়া। প্রতিটি সূত্রের সঙ্গে একটি সংক্ষিপ্ত ব্যাখ্যা এবং যে অধ্যায়ে এর বিস্তারিত আলোচনা ও সংখ্যাগত উদাহরণ পাওয়া যাবে, তার নির্দেশ দেওয়া হয়েছে। সূত্রগুলো যে অধ্যায়ে প্রথম উদ্ভূত হয়েছে, সেই ক্রম অনুসারে যুক্তিসঙ্গত গোষ্ঠীতে সাজানো হয়েছে — প্রথমে ETR ও Top-up Tax-এর মূল হিসাব, তারপর SBIE ও De Minimis, তারপর Covered Taxes-সম্পর্কিত সমন্বয়, এবং সবশেষে বণ্টন প্রক্রিয়া (IIR/UTPR) ও STTR।

## ১. ETR ও Net GloBE Income — জুরিসডিকশনভিত্তিক মূল হিসাব (অধ্যায় ২৫)

### সূত্র ১ — Effective Tax Rate (ETR)

```
ETR = জুরিসডিকশনের সব CE-র Adjusted Covered Taxes
      ÷ জুরিসডিকশনের Net GloBE Income
```

এই সূত্রটি Article 5.1-এ নির্ধারিত এবং **অধ্যায় ২৫**-এ বিস্তারিত আলোচিত। লব হলো জুরিসডিকশনে অবস্থিত সব Constituent Entity (CE)-র Adjusted Covered Taxes-এর যোগফল, হর হলো সেই জুরিসডিকশনের Net GloBE Income। উল্লেখ্য, এই হিসাব সত্তা-ভিত্তিক নয়, বরং সম্পূর্ণ জুরিসডিকশন একত্রে মিশিয়ে (Jurisdictional Blending) করা হয়, যাতে একই দেশে থাকা উচ্চ-করহারের সত্তা নিম্ন-করহারের সত্তার ঘাটতি পুষিয়ে দিতে পারে।

### সূত্র ২ — Net GloBE Income

```
Net GloBE Income = (জুরিসডিকশনের সব CE-র GloBE Income-এর যোগফল)
                    − (জুরিসডিকশনের সব CE-র GloBE Loss-এর যোগফল)
```

এটিও **অধ্যায় ২৫**-এ ব্যাখ্যা করা হয়েছে এবং ETR সূত্রের হর গঠন করে। প্রথমে জুরিসডিকশনের যে সব সত্তার GloBE Income (ধনাত্মক) আছে তাদের যোগফল নেওয়া হয়, তারপর যে সব সত্তার GloBE Loss (ঋণাত্মক) আছে তাদের যোগফল বাদ দেওয়া হয়। এটি একটি "কনসোলিডেটেড" জুরিসডিকশনভিত্তিক আয়-বিবরণীর মতো কাজ করে, যেখানে একটি সত্তার ক্ষতি অন্য সত্তার মুনাফার বিপরীতে সরাসরি অফসেট হয়।

## ২. Top-up Tax Percentage, Excess Profit ও Jurisdictional Top-up Tax (অধ্যায় ২৬)

### সূত্র ৩ — Top-up Tax Percentage

```
Top-up Tax Percentage = ১৫% − ETR
```

**অধ্যায় ২৬**-এ ব্যাখ্যা করা হয়েছে যে, ন্যূনতম হার (১৫%) থেকে জুরিসডিকশনের প্রকৃত ETR বাদ দিলে যে ঘাটতি (shortfall) থাকে, সেটাই Top-up Tax Percentage। ETR ১৫%-এর সমান বা বেশি হলে এই শতাংশ শূন্য বা ঋণাত্মক হয়, অর্থাৎ কোনো Top-up Tax দায় সৃষ্টি হয় না।

### সূত্র ৪ — Excess Profit

```
Excess Profit = Net GloBE Income − SBIE
```

**অধ্যায় ২৬**-এ আলোচিত এই সূত্রে Net GloBE Income থেকে Substance-based Income Exclusion (SBIE) বাদ দিয়ে Excess Profit নির্ণয় করা হয় — Top-up Tax কেবল এই Excess Profit-এর উপর প্রয়োগ হয়, সম্পূর্ণ Net GloBE Income-এর উপর নয়।

### সূত্র ৫ — Jurisdictional Top-up Tax

```
Jurisdictional Top-up Tax = (Excess Profit × Top-up Tax %)
                             + Additional Current Top-up Tax
                             − QDMTT
```

**অধ্যায় ২৬**-এর এই মূল সূত্রে Excess Profit-এর উপর Top-up Tax Percentage প্রয়োগ করে মূল অংক নির্ণয় করা হয়, তারপর পূর্ববর্তী বছরের কম-প্রদত্ত করের সমন্বয় (Additional Current Top-up Tax) যোগ করা হয়, এবং সবশেষে সেই জুরিসডিকশনে প্রকৃতপক্ষে প্রদত্ত Qualified Domestic Minimum Top-up Tax (QDMTT) বাদ দেওয়া হয়, যাতে দ্বৈত করারোপ এড়ানো যায়।

## ৩. Substance-based Income Exclusion — SBIE (অধ্যায় ২৭)

### সূত্র ৬ — SBIE

```
SBIE = (Eligible Payroll Costs × payroll carve-out rate)
       + (Eligible Tangible Assets carrying value × tangible asset carve-out rate)
```

**অধ্যায় ২৭**-এ আলোচিত এই সূত্র বাস্তব অর্থনৈতিক কর্মকাণ্ডকে (কর্মী ও স্থায়ী সম্পদ) স্বীকৃতি দেয়। Eligible Payroll Costs হলো জুরিসডিকশনে অবস্থিত যোগ্য কর্মীদের বেতন-ভাতা খরচ, এবং Eligible Tangible Assets carrying value হলো বছরের শুরু ও শেষের carrying value-র গড়। এই দুই ভিত্তির উপর পৃথক পৃথক হার প্রয়োগ করে যোগ করলে SBIE পাওয়া যায়।

**Transition Rate সারণি (Article 9.2) — ২০২৩-এ ১০%/৮% থেকে ২০৩৩-এ ৫%/৫%:**

| ফিসক্যাল বছর শুরু | Payroll হার | Tangible Assets হার |
|---|---|---|
| ২০২৩ | ১০.০% | ৮.০% |
| ২০২৪ | ৯.৮% | ৭.৮% |
| ২০২৫ | ৯.৬% | ৭.৬% |
| ২০২৬ | ৯.৪% | ৭.৪% |
| ২০২৭ | ৯.২% | ৭.২% |
| ২০২৮ | ৯.০% | ৭.০% |
| ২০২৯ | ৮.২% | ৬.৬% |
| ২০৩০ | ৭.৪% | ৬.২% |
| ২০৩১ | ৬.৬% | ৫.৮% |
| ২০৩২ | ৫.৮% | ৫.৪% |
| ২০৩৩ ও পরবর্তী (স্থায়ী হার) | ৫.০% | ৫.০% |

এই ধাপে-ধাপে হ্রাসমান হার আকস্মিক রূপান্তর এড়াতে এবং ব্যবসায়িক প্রতিষ্ঠানগুলোকে সমন্বয়ের সময় দিতে নির্ধারণ করা হয়েছে; ২০৩৩ সাল থেকে উভয় হার স্থায়ীভাবে ৫%-এ স্থির হয়।

## ৪. De Minimis Exclusion (অধ্যায় ২৮)

### সূত্র ৭ — De Minimis গড় পরীক্ষা

```
তিন বছরের গড় GloBE Revenue < €10 মিলিয়ন
              এবং
তিন বছরের গড় GloBE Income < €1 মিলিয়ন
```

**অধ্যায় ২৮**-এ (Article 5.5) ব্যাখ্যাকৃত এই দুই শর্ত একসাথে পূরণ হলে জুরিসডিকশনের Top-up Tax শূন্য ধরা হয়। গড় নির্ণয় করা হয় চলতি বছর ও তার পূর্ববর্তী দুই বছর — মোট তিন বছরের রেভিনিউ/আয়-ক্ষতির যোগফলকে ৩ দিয়ে ভাগ করে। GloBE Income-এর পরিবর্তে গড়ে GloBE Loss থাকলেও দ্বিতীয় শর্ত পূরণ হয়।

## ৫. GloBE Loss Deferred Tax Asset (অধ্যায় ২৩)

### সূত্র ৮ — GloBE Loss DTA সৃষ্টি

```
GloBE Loss Deferred Tax Asset = |GloBE Loss| × ১৫%
```

**অধ্যায় ২৩**-এ (GloBE Loss Election) আলোচিত এই সূত্র অনুযায়ী কোনো জুরিসডিকশনে ক্ষতির বছরে Net GloBE Loss-এর পরম মূল্যের উপর ১৫% হার প্রয়োগ করে একটি Deferred Tax Asset (DTA) তৈরি করা হয়। পরবর্তী বছর যখন সেই জুরিসডিকশনে ধনাত্মক Net GloBE Income হয়, তখন এই সঞ্চিত DTA ব্যালেন্স (বা সেই বছরের Net GloBE Income × ১৫%, যেটি ছোট) ব্যবহার করে Adjusted Covered Taxes বাড়ানো হয়, যাতে অতীতের ক্ষতি ভবিষ্যতের মুনাফার বিপরীতে স্বীকৃত হয়।

## ৬. UTPR বণ্টন সূত্র (অধ্যায় ৩৫)

### সূত্র ৯ — UTPR Percentage

```
UTPR Percentage = ৫০% × (কর্মী সংখ্যার অংশ) + ৫০% × (মূর্ত সম্পদের অংশ)
```

**অধ্যায় ৩৫**-এ ব্যাখ্যাকৃত এই সূত্র অনুযায়ী কোনো Under-Taxed Profits Rule (UTPR) প্রয়োগকারী জুরিসডিকশনে বরাদ্দকৃত Top-up Tax-এর অংশ নির্ধারিত হয় দুটি সমান-ওজনের অনুপাতের সমষ্টি দিয়ে — সেই জুরিসডিকশনের কর্মী সংখ্যা (MNE Group-এর মোট কর্মীর তুলনায়) এবং সেই জুরিসডিকশনের মূর্ত সম্পদের নিট বই মূল্য (গোষ্ঠীর মোট মূর্ত সম্পদের তুলনায়)। এই UTPR Percentage-কে অবণ্টিত Top-up Tax-এর সঙ্গে গুণ করে প্রতিটি UTPR জুরিসডিকশনের বরাদ্দ নির্ণয় করা হয়।

## ৭. IIR — Allocable Share (অধ্যায় ৩৩)

### সূত্র ১০ — Allocable Share (ধারণাগত ব্যাখ্যা)

```
Allocable Share = LTCE-এর Top-up Tax × পেরেন্ট এনটিটির Inclusion Ratio
```

**অধ্যায় ৩৩**-এ (Income Inclusion Rule) আলোচিত এই সূত্র অনুযায়ী কোনো Low-Taxed Constituent Entity (LTCE)-এর মোট Top-up Tax থেকে একটি Parent Entity-র নিজের অংশ নির্ধারিত হয় তার মালিকানা-ভিত্তিক Inclusion Ratio প্রয়োগ করে — এই Ratio মূলত সেই Parent-এর মালিকানাধীন GloBE Income-এর অনুপাত প্রতিফলিত করে, সংখ্যালঘু-মালিকানার অংশ বাদ দিয়ে। একাধিক স্তরের Parent থাকলে Split-ownership ও Offset নিয়মের মাধ্যমে দ্বৈত গণনা এড়ানো হয়, যাতে একই Top-up Tax একাধিকবার বিভিন্ন স্তরে দাবি না হয়।

## ৮. Covered Taxes-এর বিশেষ বণ্টন ও সমন্বয় (অধ্যায় ২০ ও ২২)

### সূত্র ১১ — Passive Income Tax Limitation (Article 4.3.3)

```
অনুমোদিত বণ্টনযোগ্য কর (Passive Income অংশে)
    = Passive Income × (ন্যূনতম হার − সেই সত্তার নিজস্ব প্রযোজ্য কর হার/ETR)
```

**অধ্যায় ২০**-এ ব্যাখ্যাকৃত এই ধারণা CFC বা Hybrid regime-এর অধীনে একটি মূল সত্তার কাছে বণ্টিত কর কতটুকু সেই Passive Income-এর সঙ্গে সম্পর্কিত সত্তার Adjusted Covered Taxes-এ যুক্ত হতে পারবে, তার একটি সীমা আরোপ করে। এই সীমা push-down কর সমন্বয়ের অপব্যবহার রোধ করে, যাতে কোনো সত্তা প্রকৃত করহারের অতিরিক্ত কর অন্য সত্তার হিসাবে দেখিয়ে ETR কৃত্রিমভাবে বাড়াতে না পারে।

### সূত্র ১২ — ১৫% Recast at the Minimum Rate

**অধ্যায় ২২**-এ আলোচিত এই প্রক্রিয়াটি একটি সূত্র নয়, বরং একটি সমন্বয় পদ্ধতি: যখন কোনো Deferred Tax Liability (DTL) দেশীয় নামমাত্র করহারে (যা ১৫%-এর বেশি) হিসাবভুক্ত করা হয়েছে, তখন GloBE ETR গণনার উদ্দেশ্যে সেই DTL-কে সর্বোচ্চ ১৫% হারে "recast" বা পুনর্গণনা করা হয় — অর্থাৎ,

```
Recast DTL @ ১৫% = অস্থায়ী পার্থক্য (Temporary Difference) × ১৫%
```

এর ফলে দেশীয় হার ও ১৫%-এর মধ্যেকার অতিরিক্ত অংশ Adjusted Covered Taxes থেকে বাদ পড়ে (Recast সমন্বয়), যাতে কোনো জুরিসডিকশন উচ্চ নামমাত্র হার দেখিয়ে কৃত্রিমভাবে ETR না বাড়াতে পারে। যদি এই DTL নির্দিষ্ট সময়ের (সাধারণত পাঁচ বছর) মধ্যে reverse না হয়, তাহলে Recapture নিয়ম প্রয়োগ হয়ে পূর্ববর্তী বছরের ETR পুনর্গণনা করতে হয়।

## ৯. STTR — Subject to Tax Rule (অধ্যায় ৪২)

### সূত্র ১৩ — STTR Tax

```
STTR Tax = (৯% − Adjusted Nominal Rate) × Covered Income
```

**অধ্যায় ৪২**-এ ব্যাখ্যাকৃত এই সূত্রে Adjusted Nominal Rate হলো গ্রহীতার আবাসিক রাষ্ট্রে সেই নির্দিষ্ট Covered Income-এর উপর প্রকৃতপক্ষে প্রযোজ্য সমন্বিত নামমাত্র করহার। যদি এই হার ৯%-এর কম হয়, তবে উৎস রাষ্ট্র (source jurisdiction) সেই ঘাটতির হারে Covered Income-এর উপর একটি অতিরিক্ত কর (STTR Tax) আরোপ করতে পারে — এটি বিদ্যমান উইথহোল্ডিং করের প্রতিস্থাপক নয়, বরং তার অতিরিক্ত হিসেবে প্রযোজ্য।
