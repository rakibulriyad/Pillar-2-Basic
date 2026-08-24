---
title:
  en: "Tax-Transparent UPEs and Deductible Dividend Regimes"
  bn: "কর-নিরপেক্ষ UPE ও Deductible Dividend Regime"
chapter: 39
part: 7
partTitle:
  en: "Reorganizations, Special Structures, and Tax Neutrality · Chapters 6 and 7"
  bn: "পুনর্গঠন, বিশেষ কাঠামো ও কর-নিরপেক্ষতা · Chapters 6 ও 7"
articles: "7.1, 7.2"
slug: "ch-39-tax-transparent-upe-deductible-dividend"
---

<!-- lang:en -->

# Chapter 39 — Tax-Transparent UPEs and Deductible Dividend Regimes

> **In this chapter:** when an MNE Group's **Ultimate Parent Entity (UPE)** is itself a **Flow-Through Entity** (a pass-through entity whose income is not taxed at the entity level but taxed in the hands of its owners) or is subject to a **Deductible Dividend Regime** (a tax regime in which dividends paid are deductible), its income can wrongly appear as "low-taxed" in the GloBE calculation. Article 7.1 and Article 7.2 of the GloBE Model Rules correct this distortion.
> **Relevant Articles:** 7.1, 7.2

## 39.1 The Problem: When the UPE Itself Is Tax-Exempt or a Flow-Through

GloBE's core architecture assumes that every Constituent Entity pays tax on its income in its own jurisdiction, and the Effective Tax Rate (ETR) is determined from the ratio of that tax to that income. But in reality, many groups' **Ultimate Parent Entities (UPEs)** are themselves entities whose tax structure is not like that of an ordinary corporate entity. Two common situations are particularly important:

First, the UPE may be a **Flow-Through Entity** — such as a partnership, an LLC, or any other entity under whose tax rules no tax is levied at the entity level, and instead income "flows through" directly to the owners, who pay tax in their own respective jurisdictions. Such a UPE's own **Adjusted Covered Taxes** is nearly zero, because the liability to pay tax rests not with the entity but with the owners.

Second, the UPE may be subject to a **Deductible Dividend Regime** — a tax regime under which the entity can deduct dividends paid from its taxable income, so that taxable income and tax paid effectively approach zero, while the actual tax burden shifts to the dividend recipient. **REITs** (Real Estate Investment Trusts) and various countries' cooperative societies are common examples of this structure.

In both cases, without a corrective rule, the ETR calculation for the UPE's jurisdiction would show huge income but near-zero Covered Taxes — as a result, the ETR would fall below the minimum rate (15%) and Top-up Tax would be imposed, even though full tax may actually have been paid on that income at the level of the owner or dividend recipient. To remove this structural inconsistency, Article 7.1 (Flow-Through UPE) and Article 7.2 (UPE subject to a Deductible Dividend Regime) have been added to Chapter 7 of the GloBE Model Rules. These two articles are essentially two applications of the same logic — if proper tax has been paid at the level of the owner or recipient, that portion will be excluded from the UPE's GloBE Income.

## 39.2 Conditions for Reducing the GloBE Income of a Flow-Through UPE

Under Article 7.1, if the UPE is a Flow-Through Entity, its GloBE Income is reduced by the amount attributable to the owner, if specific conditions are met. This reduction is not automatic — it must pass a specific test. There are essentially two alternative routes:

- **Nominal rate test:** if the Owner pays tax on that income at a nominal rate equal to or greater than the minimum rate (15%) in a tax year ending within 12 months of the end of the reported Fiscal Year, then that amount of income is excluded from the UPE's GloBE Income.
- **Blended test:** if the nominal rate is less than 15%, the reduction may still be permitted if it can reasonably be expected that the sum of the UPE's own Adjusted Covered Taxes and the tax paid by the owner will amount to 15% or more of that income.

In addition, for certain classes of owner — such as a Governmental Entity, an international organisation, a charitable/non-profit organisation, a pension fund, or an Individual owner whose ownership share is small and who cannot claim more than a negligible share of the assets on liquidation or dissolution of the entity — the portion of income attributable to them may be excluded directly under specific conditions, because the tax position of this class of owner does not create a structural tax-planning risk.

The core goal is this: to protect the UPE's GloBE Income from "double non-taxation," while at the same time identifying owners who have not actually paid tax, or not paid it at a sufficient rate — that portion remains in the UPE's GloBE Income and falls within the scope of Top-up Tax.

## 39.3 The Owner's Tax Rate and the 12-Month Condition

An important time limit applies to both tests — the owner's tax must be determined and paid in a tax year ending within 12 months after the end of the Fiscal Year. This time limit is set for a practical reason: filing, assessment, and payment schedules for tax returns vary across jurisdictions, so it is not realistically possible for all owners' tax payments to be completed within the same Fiscal Year. The 12-month buffer allows for handling this kind of timing mismatch, but it does not permit unlimited delay either.

The "nominal rate" is important here — it is not the owner's actual effective rate, but the general (statutory) tax rate set under the applicable law. For example, if a corporate owner is located in a jurisdiction with a 25% nominal rate, but its actual tax paid is lower due to various deductions, credits, or loss adjustments, the 25% rate is still what counts for the nominal rate test — though in practice, administrative guidance may also require verification of proof of actual tax paid.

If the owner is located in a jurisdiction where the nominal rate is below 15% (such as a no-tax or low-tax jurisdiction), the nominal rate test will fail and the blended test must be applied. Under the blended test, the UPE's own Adjusted Covered Taxes (which, for a flow-through entity, is generally small or zero) is added to the owner's tax paid, to see whether it reaches the 15% threshold. This two-tier test structurally ensures that a UPE's GloBE Income cannot be reduced through tax planning by shifting income to a low-tax jurisdiction at the owner level — such a portion will remain at the UPE level and be included in the Top-up Tax calculation.

## 39.4 Deductible Dividend Regimes — Cooperative and REIT-Type Structures

A **Deductible Dividend Regime** is a tax rule under which an entity may deduct dividends paid (or similar distributions) from its own taxable income — much like interest expense. As a result, the entity's taxable income effectively approaches zero if all profit is distributed, and the tax burden shifts to the dividend recipient.

The best-known example of this structure is a **REIT** (Real Estate Investment Trust), where a trust or company earning income from property is required to distribute the bulk of its income to investors, and that distributed portion is deductible at the entity level — the actual tax liability moves to the investor. Similarly, in many countries agricultural or consumer **cooperative societies** may deduct "patronage dividends" paid to their members from the cooperative's taxable income, because in principle a cooperative is treated as a collective vehicle for its members, not as a profit-earning entity in its own right.

These structures are not any form of tax-planning trickery — they are long-established policy choices in many jurisdictions, intended to avoid double taxation of the same income at the entity level and the investor level. But from GloBE's perspective, if the UPE itself is subject to such a Deductible Dividend Regime, its Covered Taxes will appear abnormally low, and even though the actual tax burden has shifted to the dividend recipient, Top-up Tax would be imposed on the UPE's jurisdiction. Article 7.2 corrects this distortion — if the dividend recipient pays tax at an adequate rate, that portion will be excluded from the UPE's GloBE Income.

## 39.5 Reduction of GloBE Income Due to a Deductible Dividend

Under Article 7.2, if the UPE is subject to a Deductible Dividend Regime, the UPE's GloBE Income is reduced (but cannot be reduced below zero) by the amount of the **Deductible Dividend** paid within 12 months after the end of that Fiscal Year — if one of the following two tests, which parallel the tests under Article 7.1, is met:

- if the dividend recipient pays tax on that income at a nominal rate equal to or greater than the minimum rate (15%) in a tax year ending within 12 months of the end of the Fiscal Year; or
- if the nominal rate is less than 15%, but the sum of the UPE's own Adjusted Covered Taxes and the tax paid by the recipient can reasonably be expected to be 15% or more of the income.

Note that "Deductible Dividend" does not mean only an ordinary dividend — it refers to any distribution that is recognised as deductible in calculating the UPE's taxable income under the applicable tax law. If a distribution looks like a dividend from an accounting perspective but is not deductible under tax law, it does not fall within the scope of Article 7.2.

If the recipient is itself also a Deductible Dividend Regime or a Flow-Through Entity (for example, one cooperative paying a dividend to another cooperative), then the chain is traced through — the tax rate test is applied at the level of the ultimate actual individual or taxable entity. This tracing principle ensures that tax cannot be avoided through multi-tier distribution structures.

## 39.6 Proportionate Reduction of the Related Covered Taxes

Alongside reducing GloBE Income, the related **Adjusted Covered Taxes** must also be adjusted proportionately — otherwise the ETR calculation would be distorted. This is because ETR = Adjusted Covered Taxes ÷ GloBE Income. If the denominator (GloBE Income) is reduced but the numerator (Covered Taxes) remains unchanged, the ETR would artificially increase — which would not reflect the actual tax burden.

For this reason, both Article 7.1 and Article 7.2 direct that, in the same proportion in which GloBE Income is excluded, the UPE's related Covered Taxes must also be excluded from Adjusted Covered Taxes in that same proportion. The general formula:

**Excluded Covered Taxes = UPE's total Covered Taxes × (excluded GloBE Income ÷ total GloBE Income before exclusion)**

For a flow-through UPE, Covered Taxes at the entity level are generally close to zero, so the impact of this adjustment may be limited. But for a Deductible Dividend Regime, some tax may be paid at the entity level on the UPE's remaining (undistributed) income — in that situation this proportionate adjustment becomes important, because whatever portion of income is excluded, the associated tax (if any) must also be excluded, so that the remaining income and the remaining tax remain consistent with each other and the ETR reflects the actual position.

## 39.7 Its Reflection in the SBIE

The **SBIE** (Substance-Based Income Exclusion) is a carve-out determined based on payroll and tangible assets, which is excluded from GloBE Income before the Excess Profit calculation (Excess Profit = GloBE Income − SBIE). The question is: when the UPE's GloBE Income is reduced under Article 7.1 or 7.2, what happens to the SBIE associated with that reduced portion?

The reasonable and consistent approach is to split the SBIE proportionately in the same way. Since the excluded portion of income has already been removed from GloBE Income, there is no need or scope to apply the SBIE separately to that portion — because the reduction under Article 7.1/7.2 has itself already removed that income from the scope of Top-up Tax. What remains is only the proportionate share of SBIE applicable to the UPE's remaining (non-excluded) GloBE Income, which will be used in the actual Excess Profit calculation.

In practical terms, this means that after calculating the total payroll- and tangible-asset-based carve-out for the UPE's jurisdiction, the SBIE must also be excluded in the same proportion as the GloBE Income excluded under Article 7.1/7.2, so that the same payroll- or asset-based benefit is not used twice — once through the reduction and again through the full application of SBIE. This consistency ensures that the Excess Profit and Top-up Tax calculated on the remaining income are computed in the correct proportion in true terms.

## 39.8 Numerical Example

Suppose **Zahur Holdings LLC**, a Flow-Through Entity, is the UPE of an MNE Group and is located in Jurisdiction 'A'. It has two owners:

- **Owner X** (a corporate investor, located in Jurisdiction 'B', nominal tax rate 22%) — owns 70%;
- **Owner Y** (an individual investor, located in Jurisdiction 'C', nominal tax rate 10%) — owns 30%.

In FY2025, Zahur Holdings' GloBE Income = **$100,000,000**. Being a flow-through entity, its Adjusted Covered Taxes at the entity level = **$0**. Both owners paid tax on their respective shares within 12 months of the end of the Fiscal Year. In Jurisdiction 'A', the total payroll- and tangible-asset-based SBIE for FY2025 = **$5,000,000**.

**Step 1 — Applying the Article 7.1 test:**

| Owner | Ownership share | Allocated income | Nominal rate | Applicable test | Result |
|---|---|---|---|---|---|
| Owner X | 70% | $70,000,000 | 22% | Nominal rate test (22% ≥ 15%) | Met — excluded |
| Owner Y | 30% | $30,000,000 | 10% | Blended test: UPE's ACT ($0) + owner's tax ($3,000,000) = $3,000,000, required was $4,500,000 (15%) | Failed — not excluded |

Owner X's nominal rate of 22% exceeds the minimum rate of 15%, so the nominal rate test is met, and their $70,000,000 of income will be excluded from the UPE's GloBE Income. Owner Y's nominal rate is only 10%, so the blended test must be applied: adding the UPE's Adjusted Covered Taxes ($0) and Owner Y's tax paid ($30,000,000 × 10% = $3,000,000) gives $3,000,000, which is less than the required $4,500,000 ($30,000,000 × 15%). So Owner Y's share will not be excluded — it remains in the UPE's GloBE Income.

**Step 2 — GloBE Income and Covered Taxes after reduction:**

| Item | Before reduction | Amount of reduction | After reduction |
|---|---|---|---|
| GloBE Income | $100,000,000 | $70,000,000 (Owner X's share) | $30,000,000 |
| Adjusted Covered Taxes | $0 | $0 (70% × $0) | $0 |

Since Covered Taxes is already zero, the numerical effect of the proportionate adjustment described in 39.6 does not apply in this example, but the calculation method has still been applied ($0 × 70% = $0).

**Step 3 — Proportionate allocation of the SBIE:**

30% ($30,000,000 ÷ $100,000,000) of the total GloBE Income remains at the UPE level. So the SBIE applicable to this remaining income = $5,000,000 × 30% = **$1,500,000**.

**Step 4 — Excess Profit and Top-up Tax calculation:**

| Calculation step | Amount |
|---|---|
| Remaining GloBE Income (Owner Y's share) | $30,000,000 |
| Applicable SBIE (proportionate) | ($1,500,000) |
| Excess Profit | $28,500,000 |
| Adjusted Covered Taxes (remaining) | $0 |
| Jurisdiction 'A''s ETR | 0% |
| Top-up Tax Percentage (15% − 0%) | 15% |
| **Top-up Tax** | **$4,275,000** |

Thus, after applying Article 7.1, of Zahur Holdings' original $100,000,000 GloBE Income, $70,000,000 (Owner X's adequately taxed share) is entirely removed from the GloBE calculation, while only $30,000,000 (Owner Y's inadequately taxed share) remains in Jurisdiction 'A''s ETR calculation — to which the SBIE is applied proportionately, ultimately resulting in $4,275,000 of Top-up Tax being determined. This example would work similarly for a Deductible Dividend Regime, except that "owner's tax" would be replaced by "Deductible Dividend recipient's tax," and the basis for reduction would be the amount of dividend paid, not the share of allocated profit.

## Summary

When the UPE itself is a Flow-Through Entity or is subject to a Deductible Dividend Regime, showing near-zero Covered Taxes at the entity level can create an artificially low ETR in the GloBE calculation, even though the actual tax burden has been borne at the level of the owner or dividend recipient. Article 7.1 corrects this distortion for a Flow-Through UPE — income attributable to the owner is excluded from GloBE Income if it passes either the nominal rate test or the blended test, with the 12-month time limit applying in both cases. Article 7.2 provides a parallel rule for a UPE subject to a Deductible Dividend Regime (such as REIT and cooperative structures), where the reduction is permitted based on the tax position of the dividend recipient. In both cases, consistent with the reduction of GloBE Income, the related Adjusted Covered Taxes and SBIE must also be adjusted proportionately, so that the ETR and Top-up Tax calculations correctly reflect the actual position. The portion that does not pass the test — because the owner or recipient has not paid tax at an adequate rate — remains at the UPE level and falls within the scope of Top-up Tax under the ordinary rule.

## Common Mistakes

One common mistake is assuming that as soon as the UPE is subject to a Flow-Through or Deductible Dividend Regime, its entire GloBE Income will automatically be excluded — in reality, the reduction applies only to the portion that genuinely passes either the nominal rate test or the blended test. A second common mistake is applying the nominal rate test based on the owner's or recipient's actual effective rate (after various deductions and credits), when the test should be based fundamentally on the statutory or nominal rate. A third mistake is ignoring the 12-month time limit or mistakenly treating it as indefinite — if tax payment or assessment occurs outside this limit, the reduction will not apply. A fourth mistake is leaving the related Covered Taxes unadjusted when reducing GloBE Income instead of adjusting them proportionately, which artificially increases the ETR and leads to an incorrect Top-up Tax calculation. A fifth mistake is applying the SBIE in full even to the excluded portion, resulting in the same payroll- or asset-based benefit being enjoyed twice; the correct approach is to limit the SBIE proportionately to the remaining (non-excluded) income as well. Finally, in multi-tier distribution structures (such as one cooperative paying a dividend to another cooperative), it is a mistake to be satisfied merely by examining the intermediate recipient's tax position — tracing must be carried out through to the ultimate taxable owner or individual to verify that tax has actually been paid at an adequate rate.

<!-- lang:bn -->

# অধ্যায় ৩৯ — কর-নিরপেক্ষ UPE ও Deductible Dividend Regime

> **এই অধ্যায়ে:** যখন একটি MNE Group-এর **Ultimate Parent Entity (UPE)** — চূড়ান্ত মূল সত্তা — নিজেই একটি **Flow-Through Entity** (প্রবাহমান সত্তা, যার আয় সত্তা-স্তরে করযোগ্য না হয়ে মালিকের হাতে করযোগ্য হয়) অথবা একটি **Deductible Dividend Regime** (প্রদত্ত লভ্যাংশ বিয়োগযোগ্য এমন কর-ব্যবস্থা)-এর অধীন হয়, তখন GloBE গণনায় তার আয় অন্যায়ভাবে "নিম্ন-কর" হিসেবে ধরা পড়তে পারে। GloBE Model Rules-এর Article 7.1 ও Article 7.2 এই বিকৃতি সংশোধন করে।
> **সংশ্লিষ্ট Article:** 7.1, 7.2

## ৩৯.১ সমস্যা: UPE নিজেই যদি করমুক্ত বা প্রবাহমান হয়

GloBE-এর মূল স্থাপত্য ধরে নেয় যে প্রতিটি Constituent Entity তার নিজের জুরিসডিকশনে আয়ের ওপর কর দেয়, এবং সেই কর ও আয়ের অনুপাত থেকে Effective Tax Rate (ETR) নির্ণয় করা হয়। কিন্তু বাস্তবে অনেক গোষ্ঠীর **Ultimate Parent Entity (UPE)** নিজেই এমন একটি সত্তা যার কর-কাঠামো স্বাভাবিক কর্পোরেট এনটিটির মতো নয়। দুটি সাধারণ পরিস্থিতি বিশেষভাবে গুরুত্বপূর্ণ:

প্রথমত, UPE একটি **Flow-Through Entity** (প্রবাহমান সত্তা) হতে পারে — যেমন পার্টনারশিপ, LLC, বা অন্য কোনো এনটিটি যার কর-নিয়মে সত্তা-স্তরে কর ধার্য হয় না, বরং আয় সরাসরি মালিকদের হাতে "প্রবাহিত" হয় এবং মালিকেরা নিজ নিজ জুরিসডিকশনে কর দেয়। এই ধরনের UPE-র নিজস্ব **Adjusted Covered Taxes** প্রায় শূন্য থাকে, কারণ কর দেওয়ার দায় সত্তার নয়, মালিকের।

দ্বিতীয়ত, UPE একটি **Deductible Dividend Regime**-এর অধীন হতে পারে — এমন একটি কর-ব্যবস্থা যেখানে এনটিটি তার করযোগ্য আয় থেকে প্রদত্ত লভ্যাংশ বিয়োগ (deduct) করতে পারে, ফলে করযোগ্য আয় ও পরিশোধিত কর কার্যত শূন্যের কাছাকাছি চলে আসে, আর প্রকৃত করভার লভ্যাংশ-গ্রহীতার হাতে স্থানান্তরিত হয়। **REIT** (Real Estate Investment Trust — রিয়েল এস্টেট বিনিয়োগ ট্রাস্ট) এবং বিভিন্ন দেশের সমবায় সমিতি (কো-অপারেটিভ) এই কাঠামোর সাধারণ উদাহরণ।

উভয় ক্ষেত্রেই, কোনো সংশোধনী নিয়ম না থাকলে UPE জুরিসডিকশনের ETR গণনায় দেখা যাবে আয় বিশাল অথচ Covered Taxes প্রায় শূন্য — ফলে ETR ন্যূনতম হারের (১৫%) নিচে পড়ে যাবে এবং Top-up Tax আরোপিত হবে, যদিও প্রকৃতপক্ষে সেই আয়ের ওপর মালিক বা লভ্যাংশ-গ্রহীতার স্তরে পূর্ণ হারে কর দেওয়া হয়েছে। এই কাঠামোগত অসামঞ্জস্য দূর করতেই GloBE Model Rules-এর Chapter 7-এ Article 7.1 (Flow-Through UPE) ও Article 7.2 (Deductible Dividend Regime-এর অধীন UPE) সংযুক্ত হয়েছে। এই দুটি অনুচ্ছেদ মূলত একই যুক্তির দুটি প্রয়োগ — মালিক বা গ্রহীতার স্তরে যথাযথ কর দেওয়া হলে, সেই অংশ UPE-এর GloBE Income থেকে বাদ দেওয়া হবে।

## ৩৯.২ Flow-Through UPE-র GloBE Income হ্রাসের শর্ত

Article 7.1 অনুযায়ী, UPE যদি একটি Flow-Through Entity হয়, তাহলে তার GloBE Income নির্দিষ্ট শর্ত পূরণ হলে মালিকের প্রাপ্ত অংশ পরিমাণে হ্রাস করা হয়। এই হ্রাস স্বয়ংক্রিয় নয় — নির্দিষ্ট পরীক্ষায় উত্তীর্ণ হতে হয়। মূলত দুটি বিকল্প পথ আছে:

- **নমিনাল রেট টেস্ট:** মালিক (Owner) যদি সেই আয়ের ওপর প্রতিবেদিত Fiscal Year শেষ হওয়ার ১২ মাসের মধ্যে সমাপ্ত কোনো করবর্ষে ন্যূনতম হারের (১৫%) সমান বা তার বেশি নমিনাল হারে কর দেয়, তাহলে ওই আয়ের পরিমাণ UPE-এর GloBE Income থেকে বাদ যায়।
- **সমন্বিত (blended) টেস্ট:** যদি নমিনাল রেট ১৫%-এর কম হয়, তবু যদি যুক্তিসঙ্গতভাবে প্রত্যাশা করা যায় যে UPE-এর নিজস্ব Adjusted Covered Taxes এবং মালিকের পরিশোধিত কর — এই দুটির সমষ্টি ঐ আয়ের ১৫% বা তার বেশি হবে, তাহলেও হ্রাস অনুমোদিত হয়।

এছাড়া নির্দিষ্ট শ্রেণির মালিক — যেমন সরকারি সত্তা (Governmental Entity), আন্তর্জাতিক সংস্থা, দাতব্য/নন-প্রফিট সংস্থা, পেনশন ফান্ড, বা এমন ব্যক্তি-মালিক (Individual) যাদের মালিকানার অংশ ক্ষুদ্র এবং যারা এনটিটির লিকুইডেশন বা বিলুপ্তির ক্ষেত্রে সম্পদের নগণ্য অংশের বেশি দাবি করতে পারে না — তাদের প্রাপ্ত আয়ের অংশ নির্দিষ্ট শর্তে সরাসরি বাদ যেতে পারে, কারণ এই শ্রেণির মালিকদের কর-অবস্থা কাঠামোগত কর পরিকল্পনার ঝুঁকি তৈরি করে না।

মূল লক্ষ্য এটাই: UPE-এর GloBE Income-কে "দ্বৈত না-কর" (double non-taxation) থেকে রক্ষা করা, কিন্তু একই সঙ্গে এমন মালিকদের প্রাপ্ত অংশকেও চিহ্নিত করা যারা প্রকৃতপক্ষে কর দেয়নি বা যথেষ্ট হারে দেয়নি — সেই অংশ UPE-এর GloBE Income-এ থেকে যায় এবং Top-up Tax-এর আওতায় পড়ে।

## ৩৯.৩ মালিকের করের হার ও ১২ মাসের শর্ত

উভয় টেস্টেই একটি গুরুত্বপূর্ণ সময়সীমা কাজ করে — Fiscal Year শেষ হওয়ার তারিখের পর ১২ মাসের মধ্যে সমাপ্ত করবর্ষে মালিকের কর নির্ধারণ ও পরিশোধ হতে হবে। এই সময়সীমা বাস্তবসম্মত কারণে রাখা হয়েছে: বিভিন্ন জুরিসডিকশনে কর রিটার্ন দাখিল, নির্ণয় (assessment) এবং পরিশোধের সময়সূচি ভিন্ন, ফলে একই Fiscal Year-এর মধ্যে সব মালিকের কর পরিশোধ সম্পন্ন হওয়া বাস্তবে সম্ভব নয়। ১২ মাসের বাফার এই সময়গত অসামঞ্জস্য সামলাতে দেয়, কিন্তু একেবারে সীমাহীন বিলম্বও অনুমোদন করে না।

"নমিনাল রেট" এখানে গুরুত্বপূর্ণ — এটি মালিকের প্রকৃত ইফেক্টিভ রেট নয়, বরং প্রযোজ্য আইনে নির্ধারিত সাধারণ (statutory) কর হার। উদাহরণস্বরূপ, কোনো কর্পোরেট মালিক যদি ২৫% নমিনাল রেটের জুরিসডিকশনে অবস্থিত হয়, কিন্তু বিভিন্ন ছাড়, ক্রেডিট বা লোকসান সমন্বয়ের কারণে তার প্রকৃত পরিশোধিত কর কম হয়, তাহলেও নমিনাল রেট টেস্টের জন্য ২৫% হারই বিবেচ্য — যদিও ব্যবহারিকভাবে প্রশাসনিক নির্দেশনা অনুযায়ী প্রকৃত পরিশোধিত করের প্রমাণও যাচাই করা হতে পারে।

মালিক যদি এমন জুরিসডিকশনে থাকে যেখানে নমিনাল রেট ১৫%-এর নিচে (যেমন কোনো নো-ট্যাক্স বা লো-ট্যাক্স জুরিসডিকশন), তাহলে নমিনাল রেট টেস্ট ব্যর্থ হবে এবং সমন্বিত টেস্টে যেতে হবে। সমন্বিত টেস্টে UPE-এর নিজস্ব Adjusted Covered Taxes (যা flow-through সত্তার ক্ষেত্রে সাধারণত সামান্য বা শূন্য) এবং মালিকের পরিশোধিত কর যোগ করে দেখা হয় তা ১৫% সীমা স্পর্শ করে কি না। এই দুই-স্তরীয় পরীক্ষা কাঠামোগতভাবে নিশ্চিত করে যে কর পরিকল্পনার মাধ্যমে মালিক-স্তরের নিম্ন-কর জুরিসডিকশনে আয় স্থানান্তর করে UPE-এর GloBE Income কমানো যাবে না — এমন অংশ UPE-স্তরেই থেকে যাবে এবং Top-up Tax-এর হিসাবে অন্তর্ভুক্ত হবে।

## ৩৯.৪ Deductible Dividend Regime — সমবায় ও REIT-জাতীয় কাঠামো

**Deductible Dividend Regime** (বিয়োগযোগ্য লভ্যাংশ কর-ব্যবস্থা) হলো এমন একটি কর-নিয়ম যার আওতায় একটি এনটিটি তার প্রদত্ত লভ্যাংশ (বা অনুরূপ বণ্টন) নিজের করযোগ্য আয় থেকে বিয়োগ করতে পারে — অনেকটা সুদ ব্যয়ের মতো। ফলে এনটিটির করযোগ্য আয় কার্যত শূন্যের কাছাকাছি চলে আসে যদি সব মুনাফা বণ্টন করা হয়, এবং করভার লভ্যাংশ গ্রহীতার হাতে স্থানান্তরিত হয়।

এই কাঠামোর সবচেয়ে পরিচিত উদাহরণ **REIT** (Real Estate Investment Trust — রিয়েল এস্টেট বিনিয়োগ ট্রাস্ট), যেখানে সম্পত্তি থেকে আয়কারী একটি ট্রাস্ট বা কোম্পানি তার আয়ের সিংহভাগ বিনিয়োগকারীদের মধ্যে বণ্টন করতে বাধ্য থাকে এবং সেই বণ্টিত অংশ এনটিটি-স্তরে বিয়োগযোগ্য থাকে — প্রকৃত কর দায় বিনিয়োগকারীর হাতে চলে যায়। অনুরূপভাবে, অনেক দেশে কৃষি বা ভোক্তা **সমবায় সমিতি** (Cooperative) তার সদস্যদের প্রদত্ত "প্যাট্রনেজ ডিভিডেন্ড" (patronage dividend) সমবায়ের করযোগ্য আয় থেকে বিয়োগ করতে পারে, কারণ নীতিগতভাবে সমবায়কে সদস্যদের একটি সমষ্টিগত বাহন হিসেবে গণ্য করা হয়, নিজস্ব মুনাফা-অর্জনকারী সত্তা হিসেবে নয়।

এই কাঠামোগুলো কোনো কর-পরিকল্পনার কারসাজি নয় — এগুলো বহু জুরিসডিকশনে দীর্ঘদিনের প্রতিষ্ঠিত নীতিগত পছন্দ, যার উদ্দেশ্য একই আয়ের ওপর এনটিটি-স্তর ও বিনিয়োগকারী-স্তরে দ্বৈত কর এড়ানো। কিন্তু GloBE-এর দৃষ্টিতে, যদি UPE নিজেই এমন একটি Deductible Dividend Regime-এর অধীন হয়, তাহলে তার Covered Taxes অস্বাভাবিকভাবে কম দেখাবে এবং প্রকৃত করভার লভ্যাংশ-গ্রহীতার হাতে চলে যাওয়া সত্ত্বেও UPE জুরিসডিকশনে Top-up Tax আরোপিত হয়ে যাবে। Article 7.2 এই বিকৃতি সংশোধন করে — যদি লভ্যাংশ-গ্রহীতা যথাযথ হারে কর দেয়, তবে সেই অংশ UPE-এর GloBE Income থেকে বাদ যাবে।

## ৩৯.৫ Deductible Dividend-এর কারণে GloBE Income হ্রাস

Article 7.2 অনুযায়ী, যদি UPE একটি Deductible Dividend Regime-এর অধীন হয়, তাহলে সেই Fiscal Year শেষ হওয়ার পর ১২ মাসের মধ্যে প্রদত্ত **Deductible Dividend**-এর পরিমাণে UPE-এর GloBE Income হ্রাস করা হয় (কিন্তু GloBE Income শূন্যের নিচে নামানো যায় না) — যদি নিম্নলিখিত দুটি টেস্টের কোনো একটি পূরণ হয়, যা Article 7.1-এর টেস্টগুলোর সমান্তরাল:

- লভ্যাংশ-গ্রহীতা যদি সেই আয়ের ওপর Fiscal Year শেষ হওয়ার ১২ মাসের মধ্যে সমাপ্ত করবর্ষে ন্যূনতম হার (১৫%) বা তার বেশি নমিনাল হারে কর দেয়; বা
- নমিনাল রেট ১৫%-এর কম হলেও, UPE-এর নিজস্ব Adjusted Covered Taxes এবং গ্রহীতার পরিশোধিত করের সমষ্টি যদি যুক্তিসঙ্গতভাবে আয়ের ১৫% বা তার বেশি হবে বলে প্রত্যাশিত হয়।

লক্ষণীয় যে "Deductible Dividend" বলতে কেবল সাধারণ লভ্যাংশ বোঝায় না — এটি এমন কোনো বণ্টন যা প্রযোজ্য কর-আইনে UPE-এর করযোগ্য আয় গণনায় বিয়োগযোগ্য হিসেবে স্বীকৃত। কোনো বণ্টন যদি হিসাবরক্ষণের দৃষ্টিতে লভ্যাংশের মতো দেখতে হলেও কর-আইনে বিয়োগযোগ্য না হয়, তাহলে তা Article 7.2-এর আওতায় পড়বে না।

গ্রহীতা যদি নিজেও আরেকটি Deductible Dividend Regime বা Flow-Through Entity হয় (যেমন একটি সমবায় আরেকটি সমবায়কে লভ্যাংশ প্রদান করে), তাহলে চেইন ধরে ট্রেস করে দেখা হয় — চূড়ান্ত প্রকৃত ব্যক্তি বা করযোগ্য সত্তার স্তরে পৌঁছে কর-হার পরীক্ষা করা হয়। এই ট্রেসিং নীতি নিশ্চিত করে যে বহু-স্তরের বণ্টন-কাঠামোর মধ্য দিয়ে কর এড়ানো সম্ভব না হয়।

## ৩৯.৬ সংশ্লিষ্ট Covered Taxes-এর সমানুপাতিক হ্রাস

GloBE Income হ্রাস করার পাশাপাশি, সংশ্লিষ্ট **Adjusted Covered Taxes**-কেও সমানুপাতিকভাবে সমন্বয় করতে হয় — অন্যথায় ETR গণনা বিকৃত হয়ে যাবে। কারণ ETR = Adjusted Covered Taxes ÷ GloBE Income। যদি হর (GloBE Income) কমানো হয় কিন্তু লব (Covered Taxes) অপরিবর্তিত থাকে, তাহলে ETR কৃত্রিমভাবে বেড়ে যাবে — যা বাস্তব করভার প্রতিফলিত করবে না।

সে কারণে Article 7.1 ও 7.2 উভয়েই নির্দেশ দেয় যে, যে অনুপাতে GloBE Income বাদ দেওয়া হচ্ছে, ঠিক সেই অনুপাতেই UPE-এর সংশ্লিষ্ট Covered Taxes-কেও Adjusted Covered Taxes থেকে বাদ দিতে হবে। সাধারণ সূত্র:

**বাদ যাওয়া Covered Taxes = UPE-এর মোট Covered Taxes × (বাদ যাওয়া GloBE Income ÷ বাদ দেওয়ার আগে মোট GloBE Income)**

Flow-through UPE-এর ক্ষেত্রে সাধারণত এনটিটি-স্তরে Covered Taxes প্রায় শূন্য থাকে, তাই এই সমন্বয়ের প্রভাব সীমিত হতে পারে। কিন্তু Deductible Dividend Regime-এর ক্ষেত্রে UPE-এর কিছু অবশিষ্ট (অ-বণ্টিত) আয়ের ওপর এনটিটি-স্তরে কিছু কর পরিশোধিত হতে পারে — সেই পরিস্থিতিতে এই সমানুপাতিক সমন্বয় গুরুত্বপূর্ণ হয়ে ওঠে, কারণ যতটুকু আয় বাদ যাচ্ছে, তার সাথে সংশ্লিষ্ট কর-ও (যদি থাকে) বাদ দিতে হবে, যাতে অবশিষ্ট আয় ও অবশিষ্ট কর একে অপরের সাথে সামঞ্জস্যপূর্ণ থাকে এবং ETR প্রকৃত অবস্থা প্রতিফলিত করে।

## ৩৯.৭ SBIE-তে এর প্রতিফলন

**SBIE** (Substance-Based Income Exclusion — সারবস্তুনির্ভর আয় বর্জন) হলো পেরোল ও ট্যাঞ্জিবল সম্পদের ভিত্তিতে নির্ধারিত একটি কার্ভ-আউট, যা Excess Profit গণনার আগে GloBE Income থেকে বাদ দেওয়া হয় (Excess Profit = GloBE Income − SBIE)। প্রশ্ন হলো: UPE-এর GloBE Income যখন Article 7.1 বা 7.2-এর অধীনে হ্রাস করা হয়, তখন সেই হ্রাসকৃত অংশের সাথে সংশ্লিষ্ট SBIE-এর কী হবে?

যুক্তিসঙ্গত ও সামঞ্জস্যপূর্ণ পদ্ধতি হলো — SBIE-কেও একইভাবে সমানুপাতিকভাবে ভাগ করা। যেহেতু বাদ যাওয়া আয়ের অংশটি ইতিমধ্যে GloBE Income থেকে সরে গেছে, সেই অংশের জন্য পৃথকভাবে আর SBIE প্রয়োগের প্রয়োজন বা সুযোগ নেই — কারণ Article 7.1/7.2-এর অধীনে হ্রাস নিজেই ইতিমধ্যে সেই আয়কে Top-up Tax-এর আওতা থেকে বের করে দিয়েছে। বাকি থাকে কেবল UPE-এর অবশিষ্ট (অ-বাদ যাওয়া) GloBE Income-এর জন্য প্রযোজ্য SBIE-এর অনুপাতিক অংশ, যা প্রকৃত Excess Profit গণনায় ব্যবহৃত হবে।

ব্যবহারিকভাবে এর মানে — UPE-এর জুরিসডিকশনে মোট পেরোল ও ট্যাঞ্জিবল সম্পদ-ভিত্তিক কার্ভ-আউট গণনা করার পর, যতটুকু GloBE Income Article 7.1/7.2-এর অধীনে বাদ গেছে সেই অনুপাতে SBIE-কেও বাদ দিতে হবে, যাতে একই পেরোল বা সম্পদ ভিত্তিক সুবিধা দুইবার — একবার হ্রাসের মাধ্যমে এবং আরেকবার সম্পূর্ণ SBIE প্রয়োগের মাধ্যমে — ব্যবহৃত না হয়। এই সামঞ্জস্য নিশ্চিত করে যে অবশিষ্ট আয়ের ওপর যে Excess Profit ও Top-up Tax গণনা করা হবে, তা প্রকৃত অর্থে সঠিক অনুপাতে হিসাব করা হয়েছে।

## ৩৯.৮ সংখ্যাগত উদাহরণ

ধরা যাক, **জহুর হোল্ডিংস এলএলসি** নামে একটি Flow-Through Entity একটি MNE Group-এর UPE, যা জুরিসডিকশন 'A'-তে অবস্থিত। এর দুই মালিক:

- **মালিক X** (একটি কর্পোরেট বিনিয়োগকারী, জুরিসডিকশন 'B'-তে অবস্থিত, নমিনাল কর হার ২২%) — মালিকানার ৭০%;
- **মালিক Y** (একজন ব্যক্তি বিনিয়োগকারী, জুরিসডিকশন 'C'-তে অবস্থিত, নমিনাল কর হার ১০%) — মালিকানার ৩০%।

FY2025-এ জহুর হোল্ডিংসের GloBE Income = **$100,000,000**। Flow-through হওয়ার কারণে এনটিটি-স্তরে এর Adjusted Covered Taxes = **$0**। উভয় মালিকই Fiscal Year শেষ হওয়ার ১২ মাসের মধ্যে তাদের প্রাপ্ত অংশের ওপর কর পরিশোধ করেছে। জুরিসডিকশন 'A'-তে FY2025-এর জন্য পেরোল ও ট্যাঞ্জিবল সম্পদ-ভিত্তিক মোট SBIE = **$5,000,000**।

**ধাপ ১ — Article 7.1 টেস্ট প্রয়োগ:**

| মালিক | মালিকানার অংশ | বরাদ্দকৃত আয় | নমিনাল হার | প্রয়োগযোগ্য টেস্ট | ফলাফল |
|---|---|---|---|---|---|
| মালিক X | ৭০% | $70,000,000 | ২২% | নমিনাল রেট টেস্ট (২২% ≥ ১৫%) | পূরণ — বাদ যাবে |
| মালিক Y | ৩০% | $30,000,000 | ১০% | সমন্বিত টেস্ট: UPE-এর ACT ($0) + মালিকের কর ($3,000,000) = $3,000,000, প্রয়োজন ছিল $4,500,000 (১৫%) | ব্যর্থ — বাদ যাবে না |

মালিক X-এর নমিনাল হার ২২%, যা ন্যূনতম হার ১৫%-এর চেয়ে বেশি হওয়ায় নমিনাল রেট টেস্ট পূরণ হয়, তাই তার $70,000,000 আয় UPE-এর GloBE Income থেকে বাদ যাবে। মালিক Y-এর নমিনাল হার মাত্র ১০%, ফলে সমন্বিত টেস্টে যেতে হয়: UPE-এর Adjusted Covered Taxes ($0) এবং মালিক Y-এর পরিশোধিত কর ($30,000,000 × ১০% = $3,000,000) যোগ করলে হয় $3,000,000, যা প্রয়োজনীয় $4,500,000 ($30,000,000 × ১৫%)-এর কম। তাই মালিক Y-এর অংশ বাদ যাবে না — তা UPE-এর GloBE Income-এই থেকে যাবে।

**ধাপ ২ — হ্রাসের পরে GloBE Income ও Covered Taxes:**

| খাত | হ্রাসের পূর্বে | হ্রাসের পরিমাণ | হ্রাসের পরে |
|---|---|---|---|
| GloBE Income | $100,000,000 | $70,000,000 (মালিক X-এর অংশ) | $30,000,000 |
| Adjusted Covered Taxes | $0 | $0 (৭০% × $0) | $0 |

Covered Taxes ইতিমধ্যে শূন্য থাকায়, ৩৯.৬-এ বর্ণিত সমানুপাতিক সমন্বয়ের সংখ্যাগত প্রভাব এই উদাহরণে নেই, তবে গণনাগত পদ্ধতিটি প্রয়োগ করা হয়েছে ($0 × ৭০% = $0)।

**ধাপ ৩ — SBIE-র সমানুপাতিক বণ্টন:**

মোট GloBE Income-এর মধ্যে ৩০% ($30,000,000 ÷ $100,000,000) UPE-স্তরে থেকে গেছে। তাই এই অবশিষ্ট আয়ের জন্য প্রযোজ্য SBIE = $5,000,000 × ৩০% = **$1,500,000**।

**ধাপ ৪ — Excess Profit ও Top-up Tax গণনা:**

| গণনার ধাপ | পরিমাণ |
|---|---|
| অবশিষ্ট GloBE Income (মালিক Y-এর অংশ) | $30,000,000 |
| প্রযোজ্য SBIE (সমানুপাতিক) | ($1,500,000) |
| Excess Profit | $28,500,000 |
| Adjusted Covered Taxes (অবশিষ্ট) | $0 |
| জুরিসডিকশন 'A'-এর ETR | ০% |
| Top-up Tax Percentage (১৫% − ০%) | ১৫% |
| **Top-up Tax** | **$4,275,000** |

সুতরাং, Article 7.1 প্রয়োগের পর জহুর হোল্ডিংসের মূল $100,000,000 GloBE Income-এর মধ্যে $70,000,000 (মালিক X-এর যথাযথভাবে করযুক্ত অংশ) সম্পূর্ণভাবে GloBE হিসাব থেকে বেরিয়ে যায়, আর মাত্র $30,000,000 (মালিক Y-এর অ-পর্যাপ্ত করযুক্ত অংশ) জুরিসডিকশন 'A'-এর ETR গণনায় থেকে যায় — যার ওপর SBIE সমানুপাতিকভাবে প্রয়োগ করে চূড়ান্তভাবে $4,275,000 Top-up Tax নির্ধারিত হয়। এই উদাহরণ Deductible Dividend Regime-এর ক্ষেত্রেও অনুরূপভাবে কাজ করবে, শুধু "মালিকের কর" এর জায়গায় "Deductible Dividend গ্রহীতার কর" বসবে এবং হ্রাসের ভিত্তি হবে প্রদত্ত লভ্যাংশের পরিমাণ, বণ্টিত মুনাফার অংশ নয়।

## সারসংক্ষেপ

UPE নিজেই যখন Flow-Through Entity বা Deductible Dividend Regime-এর অধীন হয়, তখন সত্তা-স্তরের Covered Taxes প্রায় শূন্য দেখানোর কারণে GloBE গণনায় কৃত্রিমভাবে নিম্ন ETR তৈরি হতে পারে, যদিও প্রকৃত করভার মালিক বা লভ্যাংশ-গ্রহীতার স্তরে বহন করা হয়েছে। Article 7.1 এই বিকৃতি সংশোধন করে Flow-Through UPE-এর ক্ষেত্রে — মালিকের প্রাপ্ত আয় নমিনাল রেট টেস্ট বা সমন্বিত টেস্টের যে কোনো একটিতে উত্তীর্ণ হলে তা GloBE Income থেকে বাদ যায়, উভয় ক্ষেত্রে ১২ মাসের সময়সীমা প্রযোজ্য। Article 7.2 সমান্তরাল নিয়ম দেয় Deductible Dividend Regime-এর অধীন UPE-এর ক্ষেত্রে (যেমন REIT ও সমবায় কাঠামো), যেখানে প্রদত্ত লভ্যাংশ-গ্রহীতার করাবস্থা অনুযায়ী হ্রাস অনুমোদিত হয়। উভয় ক্ষেত্রেই, GloBE Income হ্রাসের সাথে সামঞ্জস্যপূর্ণভাবে সংশ্লিষ্ট Adjusted Covered Taxes এবং SBIE-কেও সমানুপাতিকভাবে সমন্বয় করতে হয়, যাতে ETR ও Top-up Tax গণনা প্রকৃত অবস্থার সঠিক প্রতিফলন হয়। যে অংশ পরীক্ষায় উত্তীর্ণ হয় না — কারণ মালিক বা গ্রহীতা যথেষ্ট হারে কর দেয়নি — সেই অংশ UPE-স্তরেই থেকে যায় এবং সাধারণ নিয়মেই Top-up Tax-এর আওতায় পড়ে।

## সাধারণ ভুল

একটি সাধারণ ভুল হলো ধরে নেওয়া যে UPE Flow-Through বা Deductible Dividend Regime-এর অধীন হওয়া মাত্রই তার সমগ্র GloBE Income স্বয়ংক্রিয়ভাবে বাদ যাবে — বাস্তবে হ্রাস কেবল সেই অংশের ক্ষেত্রে প্রযোজ্য যা নমিনাল রেট টেস্ট বা সমন্বিত টেস্টের কোনো একটিতে সত্যিকারভাবে উত্তীর্ণ হয়। দ্বিতীয় সাধারণ ভুল হলো মালিক বা গ্রহীতার প্রকৃত ইফেক্টিভ রেট (বিভিন্ন ছাড় ও ক্রেডিটের পরে) দেখে নমিনাল রেট টেস্ট প্রয়োগ করা, যেখানে টেস্টটি মূলত স্টാটুটরি বা নমিনাল হারের ওপর ভিত্তি করে করা উচিত। তৃতীয় ভুল হলো ১২ মাসের সময়সীমা উপেক্ষা করা বা তা অনির্দিষ্টকাল বলে ভুল বোঝা — কর পরিশোধ বা নির্ণয় যদি এই সীমার বাইরে ঘটে, তাহলে হ্রাস প্রযোজ্য হবে না। চতুর্থ ভুল — GloBE Income হ্রাস করার সময় সংশ্লিষ্ট Covered Taxes-কে সমানুপাতিকভাবে সমন্বয় না করে অপরিবর্তিত রাখা, যা ETR-কে কৃত্রিমভাবে বাড়িয়ে দেয় এবং ভুল Top-up Tax গণনায় নিয়ে যায়। পঞ্চম ভুল — SBIE-কে হ্রাসকৃত অংশের জন্যও পুরোপুরি প্রয়োগ করা, যার ফলে একই পেরোল বা সম্পদ-ভিত্তিক সুবিধা দুইবার উপভোগ করা হয়ে যায়; সঠিক পদ্ধতি হলো SBIE-কেও অবশিষ্ট (অ-বাদ যাওয়া) আয়ের অনুপাতে সীমিত করা। শেষত, বহু-স্তরের বণ্টন-কাঠামোতে (যেমন এক সমবায় আরেক সমবায়কে লভ্যাংশ দেয়) মধ্যবর্তী গ্রহীতার করাবস্থা দেখেই সন্তুষ্ট হওয়া ভুল — চূড়ান্ত করযোগ্য মালিক বা ব্যক্তি পর্যন্ত ট্রেসিং করে দেখতে হবে যে প্রকৃতপক্ষে যথাযথ হারে কর পরিশোধিত হয়েছে কি না।
