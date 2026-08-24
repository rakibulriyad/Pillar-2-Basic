---
title:
  en: "Jurisdictional Blending and the Effective Tax Rate"
  bn: "Jurisdictional Blending ও Effective Tax Rate"
chapter: 25
part: 5
partTitle:
  en: "ETR and Top-up Tax · Chapter 5"
  bn: "ETR ও Top-up Tax · Chapter 5"
articles: "5.1"
slug: "ch-25-jurisdictional-blending-etr"
---

<!-- lang:en -->

# Chapter 25 — Jurisdictional Blending and the Effective Tax Rate

> **In this chapter:** under the GloBE rules, the Effective Tax Rate (ETR) is not calculated for each entity separately, but by blending all Constituent Entities of a jurisdiction together — this chapter discusses the rationale, formula, exception groups, and a complete numerical example of this "Jurisdictional Blending" method.
> **Relevant Article:** 5.1

## 25.1 Why the Calculation Runs by Jurisdiction, Not by Entity

One of the most important structural decisions in Pillar Two is that the minimum tax rate test for a multinational group (MNE Group) is not applied entity by entity to each **Constituent Entity**, but by blending together all Constituent Entities located in the same jurisdiction. This method is called **Jurisdictional Blending**. Under Article 5.1 of the GloBE Model Rules, the Effective Tax Rate for a jurisdiction is determined by summing the Adjusted Covered Taxes and Net GloBE Income of all Constituent Entities located in that jurisdiction.

Why was a jurisdiction-based calculation chosen instead of an entity-by-entity one? There are several practical and policy reasons behind this.

First, a large multinational group typically has more than one entity in the same country — a holding company, an operating company, a service company, a finance subsidiary, and so on. Tax rates can vary among these entities — one may earn directly taxable profit, another may receive a tax incentive, another may be in a loss position. If each entity's ETR were calculated separately, multiple parallel Top-up Tax computations would have to be run within the same country, which would become administratively very complex and would create inconsistency among entities operating under the same country's tax policy.

Second, a jurisdiction-based view is more realistic for understanding the overall picture of a country's tax system. If, in a given country, one entity pays tax at a high rate and another pays at a low rate (for example, because of a special incentive regime), the core GloBE question is how much lower the group's overall tax liability is in that country as a whole — not any single entity. Jurisdictional Blending helps capture this overall picture.

Third, this method also provides the group with a degree of relief — the tax paid by a high-tax-rate entity in the same country can offset the shortfall of a low-tax-rate entity (this is known as the "averaging effect"). We discuss the policy limitations of this point in detail in Section 25.6.

However, an important point must be kept in mind — Jurisdictional Blending applies only to entities in the "main" pool of the group. Certain special categories of entity — such as **Investment Entities**, **Minority-Owned Subgroups**, **JV Groups**, and **Stateless Entities** — fall outside this main pool, and a separate ETR must be calculated for them. This is discussed in detail in Section 25.5.

## 25.2 The ETR Formula

Under Article 5.1, the formula for determining a jurisdiction's ETR is as follows:

```
ETR = Sum of Adjusted Covered Taxes of all CEs in the jurisdiction
      ÷ Net GloBE Income of the jurisdiction
```

Both components of this formula need to be understood.

**Numerator — Adjusted Covered Taxes:** This is the sum of the Covered Taxes calculated on the basis of financial accounting for each Constituent Entity located in the jurisdiction, with certain adjustments made under the GloBE Model Rules — such as deferred tax adjustments relating to temporary differences, prior-year tax adjustments, and the addition or exclusion of certain specific taxes. This subject is discussed in detail in earlier chapters (the chapters on Covered Taxes); what matters here is that this figure is the simple sum of the separate Adjusted Covered Taxes of each entity, aggregated at the jurisdiction level.

**Denominator — Net GloBE Income:** This is the net income determined by aggregating the GloBE Income and GloBE Loss of all Constituent Entities located in the jurisdiction. How this calculation is performed is discussed in the next section.

Note that in this formula, "CE" refers to every Constituent Entity located in the jurisdiction — that is, this is not the separate ETR of any single entity, but the blended ETR of the entire jurisdiction-pool. This ETR is compared against the Minimum Rate (15%) to determine the Top-up Tax Percentage — if the ETR is below 15%, the Top-up Tax is imposed at the rate of the shortfall. The detailed method for calculating the Top-up Tax is discussed in the next chapter; the focus of this chapter is how the numerator and denominator of the ETR are determined.

## 25.3 Net GloBE Income = Sum of GloBE Income − Sum of GloBE Loss

The method for determining Net GloBE Income is simple but important. First, the GloBE Income or GloBE Loss must be determined separately for each Constituent Entity located in the jurisdiction — this is calculated on the basis of that entity's Financial Accounting Net Income or Loss, applying the adjustments specified in the GloBE Model Rules (such as excluded dividend income, excluded equity gain/loss, Arm's Length adjustment, disallowed accrued tax expense, and so on).

Then, at the jurisdiction level:

- the GloBE Income of all entities that have GloBE Income (i.e., positive) is summed;
- the GloBE Loss of all entities that have GloBE Loss (i.e., negative) is summed;
- and then the total GloBE Loss is subtracted from the total GloBE Income to determine Net GloBE Income.

Put simply —

Net GloBE Income = (sum of GloBE Income of all CEs in the jurisdiction) − (sum of GloBE Loss of all CEs in the jurisdiction)

An important effect can be observed in this method — if, within the same jurisdiction, one entity is profitable and another is in a loss position, the loss directly offsets against the profit, as if a "consolidated" jurisdiction-level income statement were being prepared. This offsetting effect reduces the denominator of the ETR, which can mathematically increase the ETR (if the numerator remains unchanged) — because a loss-making entity generally pays little or no Covered Tax, so excluding its Loss shrinks the denominator, which raises the value of the fraction.

## 25.4 What Happens When Net GloBE Income Is Zero or Negative

If a jurisdiction's Net GloBE Income is zero or negative (a net loss), the denominator of the ETR formula becomes zero or negative — which makes it mathematically impossible to determine a meaningful ETR (division by zero is undefined, and dividing by a negative denominator produces a meaningless result).

In this situation, the ETR is simply not calculated under the GloBE rules, and no Top-up Tax is imposed in that jurisdiction for that year — because, by definition, where there is no net income (or there is a net loss), the "minimum tax rate test" cannot apply. This is consistent with basic logic: the Top-up Tax is essentially a supplementary tax on profit, so where there is no profit, it has no basis.

But the matter does not end there. In cases where a jurisdiction has a Net GloBE Loss but nonetheless has positive Adjusted Covered Taxes (for example, due to a deferred tax adjustment), the group may make a special election — the **GloBE Loss Election** — under which the jurisdiction's loss can be treated as a Deferred Tax Asset for future years, to be used in the ETR adjustment for a later year when that jurisdiction returns to profit. In addition, if a jurisdiction has negative Adjusted Covered Taxes (even where Net GloBE Income is positive), an "Excess Negative Tax Expense Carry-forward" is created to carry that negative tax forward, which is deducted from Adjusted Covered Taxes in subsequent years. The essential point is this — Net GloBE Income being zero or negative in a given year simply means there is no Top-up Tax for that year, but its accounting consequences (through the carry-forward mechanism) may continue to affect later years.

## 25.5 Separate Blending Groups — Who Falls Outside the Main Pool

Not every entity is included in the main pool of Jurisdictional Blending. The GloBE Model Rules keep certain special classes of entity outside the main pool and provide for a separate ETR and Top-up Tax calculation for them. This is because the economic character or ownership structure of these entities is such that blending them with ordinary operating entities could distort the result.

**Investment Entity:** These are generally fund- or holding-based entities whose income arises mainly from investment (interest, dividends, capital gains). They generally pay no tax, or very little, because as a matter of tax policy their income is taxed at the investor level upon distribution (a tax-transparent or tax-neutral structure). If they were blended with ordinary operating entities, their structurally low-tax nature would artificially depress the jurisdiction's ETR, even where no element of actual tax avoidance exists. Therefore, a separate ETR is calculated for Investment Entities, and special policies (such as the Taxable Distribution Method election) may apply to them.

**Minority-Owned Subgroup:** When the Ultimate Parent Entity's direct or indirect ownership interest in a Constituent Entity is less than 30% (and all entities below it together form a subgroup), this is treated as a Minority-Owned Subgroup. Rather than being blended with the main group in the same jurisdiction, a separate ETR is calculated for this subgroup, because it effectively represents a different ownership group, and blending its tax profile with the main group could be unfair (for example, this separation is also important to protect the interests of minority shareholders).

**JV Group:** A Joint Venture and its subsidiaries are generally not fully consolidated in the main group's Consolidated Financial Statements (they are accounted for under the Equity Method); nonetheless, for GloBE purposes they are treated as a "notional group" and a separate jurisdiction-based ETR is calculated for them — without blending with the other entities of the main group.

**Stateless Entity:** Certain entities or Permanent Establishments may be structured such that no single tax jurisdiction of residence can be determined for them (such as certain hybrid or flow-through structures). Such a Stateless Entity cannot be included in the main pool of any jurisdiction; instead, the ETR must be calculated separately, entity by entity, for each Stateless Entity.

The common feature of these four categories is that their economic or structural nature is such that their inclusion in the ordinary jurisdiction-based blending pool could distort the result, so the GloBE rules treat them separately.

## 25.6 Policy Criticisms and Limitations of Blending

Jurisdictional Blending is important for administrative simplification, but it has also faced some significant policy criticisms.

The first criticism is that this method allows a high-tax-rate entity in the same jurisdiction to be used as a "shield" for a low-tax-rate entity. If a multinational group has both an ordinary operating company (paying tax at the standard rate) and a specially incentivized company (paying nearly zero tax) in the same country, the blended ETR may end up above 15%, even though the low-tax-rate entity's own individual ETR is much lower. As a result, there is a risk that no Top-up Tax is imposed on that low-tax activity at all, which can undermine the core objective of ensuring a minimum tax rate.

The second criticism is that this structure can create a new field for tax planning. Groups may deliberately create a mix of high-profit, high-tax entities and low-tax entities in the same jurisdiction in an attempt to keep the ETR just above 15% — this is sometimes called "blending arbitrage." Although the GloBE rules contain various anti-abuse provisions (such as a Purpose Test and GloBE-specific anti-avoidance rules) intended to prevent artificial structuring, it remains difficult to fully prevent groups from taking advantage of blending through genuine business restructuring.

The third criticism concerns the effect of loss-making entities. When a loss-making entity exists in the same jurisdiction, its Loss directly offsets against the income of profitable entities, which can artificially raise the ETR (because the denominator shrinks). This can create a situation in which a group's genuinely low-tax profitable activity, when blended with an easily explainable business loss (such as an R&D-heavy start-up unit), allows the overall ETR to appear above 15%.

Fourth, in small jurisdictions, or countries where the group has only one or two entities, the "averaging" benefit of blending is practically absent — meaning that, in practice, only groups with a large jurisdictional footprint can enjoy the benefit of this method more fully, which creates a size-based institutional imbalance compared with smaller groups or single-entity presences.

Even so, policymakers argue that the administrative complexity and compliance cost of an entity-by-entity calculation would be so high as to be impracticable, and that the jurisdiction-based method is a reasonable compromise — maintaining a balance between simplicity and effectiveness.

## 25.7 A Numerical Example

Suppose a multinational group has three Constituent Entities in "Country X" — CE-1 (the main operating company), CE-2 (an incentivized manufacturing unit), and CE-3 (a new R&D unit, still in a loss position). All three entities are part of the main Jurisdictional Blending pool (none of them is an Investment Entity, Minority-Owned Subgroup, JV Group, or Stateless Entity).

The financial data is given in the table below (all figures in local currency, in millions):

| Constituent Entity | GloBE Income / (Loss) | Adjusted Covered Taxes |
|---|---:|---:|
| CE-1 (main operating company) | 400 | 100 |
| CE-2 (incentivized unit) | 200 | 10 |
| CE-3 (R&D unit) | (100) | 5 |
| **Total (Jurisdiction X)** | **500** | **115** |

Here, the sum of GloBE Income = 400 + 200 = 600 (the positive income of CE-1 and CE-2). The sum of GloBE Loss = 100 (the loss of CE-3). Then:

Net GloBE Income = 600 − 100 = 500 million

The total sum of Adjusted Covered Taxes = 100 + 10 + 5 = 115 million (here, despite CE-3's loss, its Covered Taxes are taken as 5 million — for example, a local minimum tax or withholding tax may apply even where there is a loss).

Now applying the ETR formula:

ETR = 115 ÷ 500 = 0.23 = 23%

Since 23% > 15% (the Minimum Rate), no Top-up Tax Percentage applies for Jurisdiction X — for this year, Jurisdiction X is "safe" (adequately taxed) from a GloBE perspective.

Now note — if CE-3 had no loss (i.e., if CE-3 were simply an entity with zero income, without a loss), Net GloBE Income would have been 600 million, and the ETR would have been 115 ÷ 600 ≈ 19.2%. In other words, CE-3's loss reduced the jurisdiction's Net GloBE Income by 100 million, shrinking the denominator and raising the ETR (23% versus 19.2%) — this is exactly the "blending effect" discussed in Section 25.6.

Now consider an alternative scenario, in which CE-2's incentive is larger and its Adjusted Covered Taxes are only 2 million (instead of 10 million):

| Constituent Entity | GloBE Income / (Loss) | Adjusted Covered Taxes |
|---|---:|---:|
| CE-1 | 400 | 100 |
| CE-2 | 200 | 2 |
| CE-3 | (100) | 5 |
| **Total** | **500** | **107** |

In this scenario, ETR = 107 ÷ 500 = 21.4%, still above 15%. Here the effect of blending is clear — if CE-2 were considered on a standalone basis, its own ETR would be 2 ÷ 200 = 1%, far below 15%, and on its own it would have attracted a substantial Top-up Tax. But CE-1's high tax rate (100 ÷ 400 = 25%) pulls the overall jurisdiction ETR upward, so that CE-2's genuinely low-taxed profit is entirely shielded from the GloBE Top-up Tax. This is the practical significance of Jurisdictional Blending — and, at the same time, the clearest illustration of its policy limitation.

## Summary

Under Article 5.1 of the GloBE Model Rules, the ETR is calculated not entity by entity but on a jurisdiction basis — blending together the Adjusted Covered Taxes and Net GloBE Income of all ordinary Constituent Entities located in the same country. ETR = sum of Adjusted Covered Taxes of all CEs in the jurisdiction ÷ Net GloBE Income of the jurisdiction. Net GloBE Income is determined by subtracting the sum of GloBE Loss of all CEs from the sum of GloBE Income of all CEs. If Net GloBE Income is zero or negative, no ETR is calculated and no Top-up Tax applies for that year, although its effect may carry forward into future years through the carry-forward mechanism. Investment Entities, Minority-Owned Subgroups, JV Groups, and Stateless Entities fall outside the main blending pool and require a separate ETR calculation, because their economic or ownership structure could distort the result if mixed with the ordinary pool. Jurisdictional Blending brings administrative simplicity, but it also creates the risk that a high-tax-rate entity can "shield" a low-tax-rate entity, and that a loss-making entity can artificially raise the ETR — which are regarded as the greatest policy limitations of this structure.

## Common Mistakes

A common mistake is to treat the ETR as entity-based — that is, to attempt to calculate a separate ETR for each Constituent Entity, when Article 5.1 clearly calls for a jurisdiction-based aggregate calculation. A second mistake is mistakenly including an Investment Entity, Minority-Owned Subgroup, JV Group, or Stateless Entity in the main blending pool, which can distort the ETR calculation in the wrong direction. A third mistake is forcing an ETR percentage to be calculated even when Net GloBE Income is zero or negative (for example, dividing by zero to obtain an undefined value) — the correct approach here is not to calculate the ETR for that year, but to apply the carry-forward provisions instead. A fourth mistake is ignoring the effect of a GloBE Loss — if a jurisdiction has a loss-making entity, its effect must be reflected in the denominator of Net GloBE Income, or the ETR will be incorrectly understated. Fifth, many mistakenly believe that a high ETR resulting from jurisdiction-based blending means every entity in that jurisdiction is being adequately taxed — in reality, as shown in the example in Section 25.7, a low-tax-rate entity can easily be concealed behind a high-tax-rate entity, which is important to keep in mind when making management decisions.

<!-- lang:bn -->

# অধ্যায় ২৫ — Jurisdictional Blending ও Effective Tax Rate

> **এই অধ্যায়ে:** GloBE নিয়মে Effective Tax Rate (ETR) হিসাব করা হয় প্রতিটি সত্তা আলাদাভাবে নয়, বরং একটি জুরিসডিকশনের সব Constituent Entity-কে একসাথে মিলিয়ে — এই "Jurisdictional Blending" পদ্ধতির যুক্তি, সূত্র, ব্যতিক্রম-গোষ্ঠী এবং একটি সম্পূর্ণ সংখ্যাগত উদাহরণ এই অধ্যায়ে আলোচনা করা হয়েছে।
> **সংশ্লিষ্ট Article:** 5.1

## ২৫.১ কেন সত্তা নয়, জুরিসডিকশন ধরে হিসাব

Pillar Two-র সবচেয়ে গুরুত্বপূর্ণ কাঠামোগত সিদ্ধান্তগুলোর একটি হলো — একটি বহুজাতিক গোষ্ঠীর (MNE Group) ন্যূনতম করহার পরীক্ষা করা হয় প্রতিটি **Constituent Entity** (সদস্য সত্তা) ধরে ধরে নয়, বরং একই জুরিসডিকশনে অবস্থিত সব Constituent Entity-র হিসাব একসাথে মিলিয়ে। এই পদ্ধতিকে বলা হয় **Jurisdictional Blending** (জুরিসডিকশনভিত্তিক মিশ্রণ)। GloBE Model Rules-এর Article 5.1 অনুযায়ী, একটি জুরিসডিকশনের জন্য Effective Tax Rate নির্ধারণ করতে হয় সেই জুরিসডিকশনে অবস্থিত সব Constituent Entity-র Adjusted Covered Taxes এবং Net GloBE Income একত্রে যোগ করে।

কেন সত্তাভিত্তিক (entity-by-entity) হিসাব না করে জুরিসডিকশনভিত্তিক হিসাব বেছে নেওয়া হলো? এর পেছনে কয়েকটি ব্যবহারিক ও নীতিগত কারণ রয়েছে।

প্রথমত, একটি বড় বহুজাতিক গোষ্ঠীর একই দেশে সাধারণত একাধিক সত্তা থাকে — একটি হোল্ডিং কোম্পানি, একটি অপারেটিং কোম্পানি, একটি সার্ভিস কোম্পানি, একটি ফাইন্যান্স সাবসিডিয়ারি ইত্যাদি। এই সত্তাগুলোর মধ্যে করহার ভিন্ন ভিন্ন হতে পারে — কোনোটি সরাসরি করযোগ্য মুনাফা করে, কোনোটি ট্যাক্স ইনসেন্টিভ পায়, কোনোটি ক্ষতিতে থাকে। যদি প্রতিটি সত্তার ETR আলাদাভাবে হিসাব করা হতো, তাহলে একই দেশে একাধিক সমান্তরাল Top-up Tax গণনা করতে হতো, যা প্রশাসনিকভাবে অত্যন্ত জটিল হয়ে উঠত এবং একই করনীতির অধীনে থাকা প্রতিষ্ঠানগুলোর মধ্যে অসামঞ্জস্য সৃষ্টি করত।

দ্বিতীয়ত, একটি দেশের কর ব্যবস্থার সামগ্রিক চিত্র বোঝার জন্য জুরিসডিকশনভিত্তিক দৃষ্টিভঙ্গি অধিক বাস্তবসম্মত। কোনো দেশে যদি একটি সত্তা উচ্চ করহারে কর দেয় এবং আরেকটি সত্তা স্বল্প করহারে (উদাহরণস্বরূপ কোনো বিশেষ ইনসেন্টিভ রেজিমের কারণে), তাহলে সামগ্রিকভাবে সেই দেশে গোষ্ঠীটির কর-দায় ঠিক কতটা কম, সেটাই GloBE-এর মূল প্রশ্ন — নির্দিষ্ট কোনো একটি সত্তা নয়। Jurisdictional Blending এই সামগ্রিক চিত্রটি ধরতে সাহায্য করে।

তৃতীয়ত, এই পদ্ধতি একই সঙ্গে গোষ্ঠীর জন্য কিছুটা স্বস্তিও দেয় — একই দেশে থাকা উচ্চ-করহারের সত্তার কর নিম্ন-করহারের সত্তার ঘাটতি পুষিয়ে দিতে পারে (একে "averaging effect" বা "গড় করার প্রভাব" বলা হয়)। এই বিষয়টির নীতিগত সীমাবদ্ধতা নিয়ে আমরা ২৫.৬ অনুচ্ছেদে বিস্তারিত আলোচনা করব।

তবে একটি গুরুত্বপূর্ণ বিষয় মনে রাখা দরকার — Jurisdictional Blending কেবল "মূলধারার" (Main) গোষ্ঠীর সত্তাগুলোর জন্য প্রযোজ্য। কিছু বিশেষ ধরনের সত্তা — যেমন **Investment Entity** (বিনিয়োগ সত্তা), **Minority-Owned Subgroup** (সংখ্যালঘু-মালিকানাধীন উপগোষ্ঠী), **JV Group** (যৌথ উদ্যোগ গোষ্ঠী) এবং **Stateless Entity** (রাষ্ট্রহীন সত্তা) — এই মূল pool-এর বাইরে থাকে এবং তাদের জন্য পৃথক ETR হিসাব করতে হয়। এই বিষয়টি ২৫.৫ অনুচ্ছেদে বিস্তারিতভাবে আলোচনা করা হয়েছে।

## ২৫.২ ETR-এর সূত্র

Article 5.1 অনুযায়ী কোনো জুরিসডিকশনের ETR নির্ধারণের সূত্রটি নিচের মতো:

```
ETR = জুরিসডিকশনের সব CE-র Adjusted Covered Taxes
      ÷ জুরিসডিকশনের Net GloBE Income
```

এই সূত্রের দুটি উপাদান বোঝা জরুরি।

**লব (Numerator) — Adjusted Covered Taxes (সমন্বিত কভারড ট্যাক্স):** এটি হলো জুরিসডিকশনে অবস্থিত প্রতিটি Constituent Entity-র financial accounting-এর ভিত্তিতে হিসাবকৃত Covered Taxes-এর যোগফল, যাতে GloBE Model Rules অনুযায়ী নির্দিষ্ট কিছু সমন্বয় (adjustments) করা হয়েছে — যেমন সাময়িক পার্থক্য (temporary differences) সংক্রান্ত deferred tax সমন্বয়, পূর্ববর্তী বছরের কর সমন্বয়, এবং কিছু নির্দিষ্ট কর বাদ দেওয়া বা যুক্ত করা। এই বিষয়টি নিয়ে বিস্তারিত আলোচনা পূর্ববর্তী অধ্যায়গুলোতে (Covered Taxes সংক্রান্ত অধ্যায়) করা হয়েছে; এখানে গুরুত্বপূর্ণ হলো — এই অংক প্রতিটি সত্তার আলাদা আলাদা Adjusted Covered Taxes-এর সরল যোগফল, জুরিসডিকশন পর্যায়ে একত্রিত।

**হর (Denominator) — Net GloBE Income (নেট গ্লোবি ইনকাম):** এটি হলো জুরিসডিকশনে অবস্থিত সব Constituent Entity-র GloBE Income এবং GloBE Loss একত্রিত করে নির্ধারিত নিট আয়। এই হিসাবটি কীভাবে করা হয়, তা পরের অনুচ্ছেদে আলোচনা করা হয়েছে।

লক্ষণীয় যে, এই সূত্রে "CE" বলতে জুরিসডিকশনে অবস্থিত প্রতিটি Constituent Entity বোঝানো হয়েছে — অর্থাৎ কোনো একটি একক সত্তার আলাদা ETR নয়, বরং পুরো জুরিসডিকশন-পুলের সমন্বিত ETR। এই ETR-এর সাথে Minimum Rate (১৫%) তুলনা করে Top-up Tax Percentage নির্ণয় করা হয় — যদি ETR ১৫%-এর কম হয়, তাহলে ঘাটতির (shortfall) হারে Top-up Tax আরোপিত হয়। Top-up Tax গণনার বিস্তারিত পদ্ধতি পরের অধ্যায়ে আলোচিত হবে; এই অধ্যায়ের কেন্দ্রবিন্দু হলো ETR-এর হর ও লব কীভাবে নির্ধারিত হয়।

## ২৫.৩ Net GloBE Income = GloBE Income-এর যোগফল − GloBE Loss-এর যোগফল

Net GloBE Income নির্ধারণের পদ্ধতিটি সরল কিন্তু গুরুত্বপূর্ণ। প্রথমে জুরিসডিকশনে অবস্থিত প্রতিটি Constituent Entity-র জন্য আলাদাভাবে GloBE Income বা GloBE Loss নির্ণয় করতে হয় — এটি সেই সত্তার Financial Accounting Net Income or Loss-এর ভিত্তিতে, GloBE Model Rules-এ নির্ধারিত সমন্বয়গুলো (যেমন excluded dividend income, excluded equity gain/loss, Arm's Length adjustment, disallowed accrued tax expense ইত্যাদি) প্রয়োগ করে হিসাব করা হয়।

এরপর জুরিসডিকশন পর্যায়ে:

- যে সত্তাগুলোর GloBE Income রয়েছে (অর্থাৎ ধনাত্মক), তাদের সবার GloBE Income যোগ করা হয়;
- যে সত্তাগুলোর GloBE Loss রয়েছে (অর্থাৎ ঋণাত্মক), তাদের সবার GloBE Loss যোগ করা হয়;
- তারপর মোট GloBE Income থেকে মোট GloBE Loss বাদ দিয়ে Net GloBE Income নির্ণয় করা হয়।

সহজভাবে বললে —

Net GloBE Income = (জুরিসডিকশনের সব CE-র GloBE Income-এর যোগফল) − (জুরিসডিকশনের সব CE-র GloBE Loss-এর যোগফল)

এই পদ্ধতিতে একটি গুরুত্বপূর্ণ প্রভাব লক্ষণীয় — একই জুরিসডিকশনে যদি একটি সত্তা মুনাফায় থাকে এবং আরেকটি সত্তা ক্ষতিতে থাকে, তাহলে ক্ষতিটি সরাসরি মুনাফার বিপরীতে অফসেট হয়ে যায়, ঠিক যেন একটি "কনসোলিডেটেড" জুরিসডিকশনভিত্তিক আয়-বিবরণী তৈরি করা হচ্ছে। এই অফসেটের প্রভাব ETR-এর হরকে (denominator) কমিয়ে দেয়, যা গণিতগতভাবে ETR-কে বাড়িয়ে দিতে পারে (যদি লব অপরিবর্তিত থাকে) — কারণ ক্ষতিসম্পন্ন সত্তা সাধারণত কোনো Covered Tax দেয় না বা খুব সামান্য দেয়, তাই তার Loss বাদ দেওয়া মানে হর ছোট হওয়া, ফলে ভগ্নাংশের মান বৃদ্ধি পায়।

## ২৫.৪ Net GloBE Income শূন্য বা ঋণাত্মক হলে কী হয়

যদি কোনো জুরিসডিকশনের Net GloBE Income শূন্য হয় বা ঋণাত্মক (net loss) হয়, তাহলে ETR-এর সূত্রে হর শূন্য বা ঋণাত্মক হয়ে যাবে — যা গাণিতিকভাবে একটি অর্থবহ ETR নির্ধারণ করা অসম্ভব করে তোলে (শূন্য দিয়ে ভাগ করা যায় না, এবং ঋণাত্মক হর দিয়ে ভাগ করলে ফলাফল অর্থহীন হয়ে পড়ে)।

এই পরিস্থিতিতে GloBE নিয়মে ETR-ই গণনা করা হয় না, এবং সেই বছরের জন্য সেই জুরিসডিকশনে কোনো Top-up Tax আরোপিত হয় না — কারণ সংজ্ঞাগতভাবে যেখানে নিট আয়ই নেই (বা নিট ক্ষতি রয়েছে), সেখানে "ন্যূনতম করহার পরীক্ষা" প্রযোজ্য হতে পারে না। এটি স্বাভাবিক যুক্তির সাথে সামঞ্জস্যপূর্ণ: Top-up Tax মূলত মুনাফার উপর প্রযোজ্য একটি সম্পূরক কর, তাই মুনাফাই না থাকলে তার কোনো ভিত্তি নেই।

তবে এখানেই বিষয়টি শেষ হয় না। যেসব ক্ষেত্রে জুরিসডিকশনে Net GloBE Loss রয়েছে কিন্তু তার সাথে সাথে ধনাত্মক Adjusted Covered Taxes-ও রয়েছে (যেমন deferred tax সমন্বয়ের কারণে), সেই পরিস্থিতিতে গোষ্ঠী একটি বিশেষ নির্বাচন করতে পারে — **GloBE Loss Election**, যার মাধ্যমে জুরিসডিকশনের ক্ষতিকে ভবিষ্যতের বছরের জন্য একটি Deferred Tax Asset হিসেবে গণ্য করা যায়, যা পরবর্তী বছরে সেই জুরিসডিকশন মুনাফায় ফিরলে ETR সমন্বয়ে ব্যবহার করা যাবে। এছাড়াও, যদি কোনো জুরিসডিকশনে ঋণাত্মক Adjusted Covered Taxes থাকে (Net GloBE Income ধনাত্মক হলেও), তখন সেই ঋণাত্মক করকে ভবিষ্যতে বহন করার জন্য একটি "Excess Negative Tax Expense Carry-forward" তৈরি হয়, যা পরবর্তী বছরগুলোর Adjusted Covered Taxes থেকে বাদ যায়। মূলকথা হলো — বছর অনুযায়ী Net GloBE Income শূন্য বা ঋণাত্মক হওয়া মানেই সেই বছরের জন্য কোনো Top-up Tax নেই, কিন্তু তার হিসাবগত রেশ (carry-forward প্রক্রিয়ার মাধ্যমে) পরবর্তী বছরগুলোতে প্রভাব ফেলতে পারে।

## ২৫.৫ পৃথক blending গোষ্ঠী — কারা মূল pool-এ ঢোকে না

জুরিসডিকশনভিত্তিক Jurisdictional Blending-এর মূল pool-এ সব সত্তা অন্তর্ভুক্ত হয় না। GloBE Model Rules কিছু বিশেষ শ্রেণির সত্তাকে মূল pool থেকে বাদ রেখে তাদের জন্য পৃথক ETR ও Top-up Tax গণনার ব্যবস্থা রেখেছে। এর কারণ হলো — এই সত্তাগুলোর অর্থনৈতিক চরিত্র বা মালিকানা-গঠন এমন যে তাদের সাধারণ অপারেটিং সত্তার সঙ্গে মিশ্রণ করলে ফলাফল বিকৃত (distorted) হয়ে যেতে পারে।

**Investment Entity (বিনিয়োগ সত্তা):** এগুলো সাধারণত ফান্ড বা হোল্ডিং-ভিত্তিক সত্তা, যেগুলোর আয় মূলত বিনিয়োগ থেকে আসে (মুনাফা, ডিভিডেন্ড, মূলধন লাভ)। এদের সাধারণত কর দিতে হয় না বা খুব সামান্য পরিমাণ কর দিতে হয়, কারণ কর-নীতিগতভাবে তাদের আয় বণ্টনের সময় বিনিয়োগকারীর স্তরে করারোপিত হয় (ট্যাক্স-ট্রান্সপারেন্ট বা ট্যাক্স-নিউট্রাল কাঠামো)। যদি এদের সাধারণ অপারেটিং সত্তার সাথে মিশ্রিত করা হতো, তাহলে তাদের কাঠামোগতভাবে কম কর দেওয়ার প্রকৃতি বিকৃতভাবে জুরিসডিকশনের ETR কমিয়ে ফেলত, এমনকি প্রকৃত করফাঁকির কোনো উপাদান না থাকলেও। তাই Investment Entity-র জন্য একটি আলাদা ETR গণনা করা হয়, এবং সাধারণত তাদের জন্য বিশেষ নীতি (যেমন Taxable Distribution Method নির্বাচন) প্রযোজ্য হতে পারে।

**Minority-Owned Subgroup (সংখ্যালঘু-মালিকানাধীন উপগোষ্ঠী):** যখন Ultimate Parent Entity-র প্রত্যক্ষ বা পরোক্ষ মালিকানা স্বার্থ (ownership interest) কোনো Constituent Entity-তে ৩০%-এর কম হয় (এবং তার নিচের সব সত্তা মিলিয়ে একটি উপগোষ্ঠী গঠন করে), তখন সেটি একটি Minority-Owned Subgroup হিসেবে গণ্য হয়। এই উপগোষ্ঠীর জন্য মূল গোষ্ঠীর সাথে একই জুরিসডিকশনে মিশ্রণ না করে পৃথক ETR হিসাব করা হয়, কারণ এই উপগোষ্ঠীটি কার্যত একটি ভিন্ন মালিকানা-গোষ্ঠীর প্রতিনিধিত্ব করে এবং তার কর-চিত্র মূল গোষ্ঠীর সাথে মিশ্রিত করা অন্যায্য হতে পারে (উদাহরণস্বরূপ, সংখ্যালঘু শেয়ারহোল্ডারদের স্বার্থ রক্ষার জন্যও এই বিভাজন গুরুত্বপূর্ণ)।

**JV Group (যৌথ উদ্যোগ গোষ্ঠী):** Joint Venture এবং তার সাবসিডিয়ারিগুলো সাধারণত মূল গোষ্ঠীর Consolidated Financial Statements-এ পুরোপুরি consolidate হয় না (Equity Method-এ হিসাব হয়), তবুও GloBE-এর উদ্দেশ্যে এদের একটি "মতবাদগত গোষ্ঠী" (notional group) হিসেবে গণ্য করে পৃথক জুরিসডিকশনভিত্তিক ETR গণনা করা হয় — মূল গোষ্ঠীর অন্য সত্তাগুলোর সাথে মিশ্রণ না করে।

**Stateless Entity (রাষ্ট্রহীন সত্তা):** কিছু সত্তা বা স্থায়ী প্রতিষ্ঠান (Permanent Establishment) এমনভাবে গঠিত হতে পারে যে তাদের কোনো একক ট্যাক্স জুরিসডিকশনে বসবাসের (tax residence) মর্যাদা নির্ধারণ করা যায় না (যেমন কিছু নির্দিষ্ট hybrid বা ফ্লো-থ্রু কাঠামো)। এই ধরনের Stateless Entity-কে কোনো জুরিসডিকশনের মূল pool-এ অন্তর্ভুক্ত করা যায় না, বরং প্রতিটি Stateless Entity-র জন্য পৃথক-পৃথকভাবে (entity-by-entity ভিত্তিতে) ETR গণনা করতে হয়।

এই চারটি শ্রেণির সাধারণ বৈশিষ্ট্য হলো — এদের অর্থনৈতিক বা কাঠামোগত প্রকৃতি এমন যে সাধারণ জুরিসডিকশনভিত্তিক blending pool-এ তাদের অন্তর্ভুক্তি ফলাফলকে বিকৃত করতে পারত, তাই GloBE নিয়ম তাদের আলাদা বিবেচনা করে।

## ২৫.৬ Blending-এর নীতিগত সমালোচনা ও সীমাবদ্ধতা

Jurisdictional Blending পদ্ধতিটি প্রশাসনিক সরলীকরণের জন্য গুরুত্বপূর্ণ, কিন্তু এটি নীতিগতভাবে কিছু গুরুত্বপূর্ণ সমালোচনার মুখেও পড়েছে।

প্রথম সমালোচনা হলো — এই পদ্ধতি একই জুরিসডিকশনের মধ্যে থাকা উচ্চ-করহারের সত্তাকে নিম্ন-করহারের সত্তার "ঢাল" হিসেবে ব্যবহারের সুযোগ দেয়। যদি একটি বহুজাতিক গোষ্ঠী একই দেশে একটি সাধারণ অপারেটিং কোম্পানি (যা প্রচলিত করহারে কর দেয়) এবং একটি বিশেষ ইনসেন্টিভ-প্রাপ্ত কোম্পানি (যা প্রায় শূন্য কর দেয়) — দুটোই রাখে, তাহলে গড় ETR এমনভাবে দাঁড়াতে পারে যা ১৫%-এর উপরে চলে যায়, যদিও প্রকৃতপক্ষে নিম্ন-করহারের সত্তাটির নিজস্ব ETR অনেক কম। এর ফলে সেই নিম্ন-করহারের কার্যক্রমের জন্য কোনো Top-up Tax আরোপিত না হওয়ার ঝুঁকি থাকে, যা ন্যূনতম করহার নিশ্চিত করার মূল উদ্দেশ্যকে দুর্বল করে দিতে পারে।

দ্বিতীয় সমালোচনা হলো — এই কাঠামো কর পরিকল্পনার (tax planning) একটি নতুন ক্ষেত্র তৈরি করতে পারে। গোষ্ঠীগুলো ইচ্ছাকৃতভাবে একই জুরিসডিকশনে উচ্চ-মুনাফা ও উচ্চ-কর সত্তা এবং নিম্ন-কর সত্তার মিশ্রণ তৈরি করে ETR-কে ১৫%-এর ঠিক উপরে রাখার চেষ্টা করতে পারে — একে কখনও কখনও "ব্লেন্ডিং আরবিট্রাজ" (blending arbitrage) বলা হয়। যদিও GloBE নিয়মে বিভিন্ন anti-abuse বিধান (যেমন Purpose Test, GloBE-নির্দিষ্ট anti-avoidance বিধান) রয়েছে যা কৃত্রিম কাঠামো প্রতিরোধ করতে চায়, তবুও প্রকৃত ব্যবসায়িক পুনর্গঠনের মাধ্যমে এই ধরনের ব্লেন্ডিং সুবিধা নেওয়া সম্পূর্ণরূপে রোধ করা কঠিন।

তৃতীয় সমালোচনা হলো — Loss-making সত্তার প্রভাব। যখন একই জুরিসডিকশনে একটি ক্ষতিগ্রস্ত সত্তা থাকে, তার Loss মুনাফাসম্পন্ন সত্তার আয়ের বিপরীতে সরাসরি অফসেট হয়ে যায়, যা কৃত্রিমভাবে ETR বাড়িয়ে দিতে পারে (কারণ হর ছোট হয়ে যায়)। এর ফলে এমন পরিস্থিতিও তৈরি হতে পারে যেখানে গোষ্ঠীর একটি প্রকৃতপক্ষে নিম্ন-করহারযুক্ত মুনাফাসম্পন্ন কার্যক্রম, একটি সহজে ব্যাখ্যাযোগ্য ব্যবসায়িক ক্ষতির (যেমন গবেষণা-উন্নয়ন ব্যয়বহুল স্টার্টআপ ইউনিট) সাথে মিলিয়ে দেখানো হলে, সামগ্রিক ETR ১৫%-এর উপরে দেখানো সম্ভব হয়।

চতুর্থত, ছোট জুরিসডিকশন বা যেসব দেশে গোষ্ঠীর একটি বা দুটি মাত্র সত্তা রয়েছে, সেখানে blending-এর "গড় করার" সুবিধা কার্যত অনুপস্থিত থাকে — অর্থাৎ ব্যবহারিকভাবে এই পদ্ধতির সুবিধা কেবল বড় জুরিসডিকশন-উপস্থিতিসম্পন্ন গোষ্ঠীগুলোই বেশি উপভোগ করতে পারে, যা ছোট গোষ্ঠী বা একক-সত্তা উপস্থিতির প্রতিষ্ঠানের তুলনায় একটি প্রাতিষ্ঠানিক আকারভিত্তিক অসামঞ্জস্য তৈরি করে।

তা সত্ত্বেও, নীতিনির্ধারকদের যুক্তি হলো — সত্তাভিত্তিক (entity-by-entity) হিসাবের প্রশাসনিক জটিলতা ও সম্মতি-ব্যয় (compliance cost) এত বেশি হতো যে তা বাস্তবায়ন-অযোগ্য হয়ে উঠত, এবং জুরিসডিকশনভিত্তিক পদ্ধতি একটি যুক্তিসঙ্গত সমঝোতা — যা সরলতা ও কার্যকারিতার মধ্যে একটি ভারসাম্য বজায় রাখে।

## ২৫.৭ সংখ্যাগত উদাহরণ

ধরা যাক, একটি বহুজাতিক গোষ্ঠীর "X দেশ"-এ তিনটি Constituent Entity রয়েছে — CE-1 (মূল অপারেটিং কোম্পানি), CE-2 (একটি ইনসেন্টিভ-প্রাপ্ত উৎপাদন ইউনিট) এবং CE-3 (একটি নতুন গবেষণা-উন্নয়ন ইউনিট, যা এখনো ক্ষতিতে রয়েছে)। এই তিনটি সত্তাই মূল Jurisdictional Blending pool-এর অংশ (এদের কেউই Investment Entity, Minority-Owned Subgroup, JV Group বা Stateless Entity নয়)।

আর্থিক তথ্য নিচের টেবিলে দেওয়া হলো (সব অঙ্ক স্থানীয় মুদ্রায়, মিলিয়ন এককে):

| Constituent Entity | GloBE Income / (Loss) | Adjusted Covered Taxes |
|---|---:|---:|
| CE-1 (মূল অপারেটিং কোম্পানি) | ৪০০ | ১০০ |
| CE-2 (ইনসেন্টিভ-প্রাপ্ত ইউনিট) | ২০০ | ১০ |
| CE-3 (গবেষণা-উন্নয়ন ইউনিট) | (১০০) | ৫ |
| **মোট (জুরিসডিকশন X)** | **৫০০** | **১১৫** |

এখানে GloBE Income-এর যোগফল = ৪০০ + ২০০ = ৬০০ (CE-1 এবং CE-2-র ধনাত্মক আয়)। GloBE Loss-এর যোগফল = ১০০ (CE-3-র ক্ষতি)। তাহলে:

Net GloBE Income = ৬০০ − ১০০ = ৫০০ মিলিয়ন

Adjusted Covered Taxes-এর মোট যোগফল = ১০০ + ১০ + ৫ = ১১৫ মিলিয়ন (এখানে CE-3-র ক্ষতি সত্ত্বেও তার Covered Taxes ৫ মিলিয়ন ধরা হয়েছে — উদাহরণস্বরূপ, ক্ষতি থাকলেও স্থানীয় ন্যূনতম কর বা উইথহোল্ডিং কর প্রযোজ্য হতে পারে)।

এখন ETR সূত্র প্রয়োগ করলে:

ETR = ১১৫ ÷ ৫০০ = ০.২৩ = ২৩%

যেহেতু ২৩% > ১৫% (Minimum Rate), তাই জুরিসডিকশন X-এর জন্য কোনো Top-up Tax Percentage প্রযোজ্য হবে না — এই বছরের জন্য জুরিসডিকশন X GloBE-এর দৃষ্টিতে "নিরাপদ" (adequately taxed)।

এখন লক্ষ্য করা যাক — যদি CE-3-র ক্ষতি না থাকত (অর্থাৎ CE-3 শুধু একটি সাধারণ শূন্য-আয় সত্তা হতো, ক্ষতি ছাড়াই), তাহলে Net GloBE Income হতো ৬০০ মিলিয়ন, এবং ETR হতো ১১৫ ÷ ৬০০ ≈ ১৯.২%। অর্থাৎ CE-3-র ক্ষতি জুরিসডিকশনের Net GloBE Income-কে ১০০ মিলিয়ন কমিয়ে দেওয়ার ফলে হর ছোট হয়েছে এবং ETR বেড়ে গেছে (২৩% বনাম ১৯.২%) — এটি ঠিক সেই "blending প্রভাব" যা ২৫.৬ অনুচ্ছেদে আলোচিত হয়েছে।

এখন একটি বিকল্প পরিস্থিতি বিবেচনা করা যাক, যেখানে CE-2-র ইনসেন্টিভের পরিমাণ আরও বেশি এবং তার Adjusted Covered Taxes মাত্র ২ মিলিয়ন (১০ মিলিয়নের পরিবর্তে):

| Constituent Entity | GloBE Income / (Loss) | Adjusted Covered Taxes |
|---|---:|---:|
| CE-1 | ৪০০ | ১০০ |
| CE-2 | ২০০ | ২ |
| CE-3 | (১০০) | ৫ |
| **মোট** | **৫০০** | **১০৭** |

এই পরিস্থিতিতে ETR = ১০৭ ÷ ৫০০ = ২১.৪%, যা তখনও ১৫%-এর উপরে। এখানেই blending-এর প্রভাব স্পষ্ট — যদি CE-2 একক সত্তা হিসেবে বিবেচিত হতো, তার নিজস্ব ETR হতো ২ ÷ ২০০ = ১%, যা ১৫%-এর অনেক নিচে এবং একা থাকলে যথেষ্ট বড় Top-up Tax আরোপিত হতো। কিন্তু CE-1-এর উচ্চ করহার (১০০ ÷ ৪০০ = ২৫%) সামগ্রিক জুরিসডিকশন ETR-কে টেনে উপরে তুলে দিয়েছে, ফলে CE-2-র প্রকৃতপক্ষে নিম্ন-করহারযুক্ত মুনাফা GloBE-এর Top-up Tax থেকে সম্পূর্ণভাবে রক্ষা পেয়ে যায়। এটিই Jurisdictional Blending-এর ব্যবহারিক তাৎপর্য — এবং একই সাথে এর নীতিগত সীমাবদ্ধতার সবচেয়ে স্পষ্ট চিত্র।

## সারসংক্ষেপ

GloBE Model Rules-এর Article 5.1 অনুযায়ী ETR হিসাব করা হয় সত্তাভিত্তিক নয়, জুরিসডিকশনভিত্তিক — একই দেশে অবস্থিত সব সাধারণ Constituent Entity-র Adjusted Covered Taxes ও Net GloBE Income একত্রে মিলিয়ে। ETR = জুরিসডিকশনের সব CE-র Adjusted Covered Taxes ÷ জুরিসডিকশনের Net GloBE Income। Net GloBE Income নির্ধারিত হয় সব CE-র GloBE Income-এর যোগফল থেকে সব CE-র GloBE Loss-এর যোগফল বাদ দিয়ে। যদি Net GloBE Income শূন্য বা ঋণাত্মক হয়, সেই বছরের জন্য কোনো ETR গণনা বা Top-up Tax প্রযোজ্য হয় না, যদিও carry-forward প্রক্রিয়ার মাধ্যমে এর প্রভাব ভবিষ্যতে থাকতে পারে। Investment Entity, Minority-Owned Subgroup, JV Group এবং Stateless Entity মূল blending pool-এর বাইরে থাকে এবং তাদের জন্য পৃথক ETR গণনা করা হয়, কারণ তাদের অর্থনৈতিক বা মালিকানা-কাঠামো সাধারণ pool-এর সাথে মেশানো হলে ফলাফল বিকৃত হয়ে যেতে পারে। Jurisdictional Blending প্রশাসনিক সরলতা আনে, কিন্তু একই সাথে উচ্চ-করহারের সত্তা দিয়ে নিম্ন-করহারের সত্তার "ঢাল" তৈরি করার এবং Loss-making সত্তার মাধ্যমে ETR কৃত্রিমভাবে বৃদ্ধির ঝুঁকি তৈরি করে — যা এই কাঠামোর সবচেয়ে বড় নীতিগত সীমাবদ্ধতা হিসেবে বিবেচিত হয়।

## সাধারণ ভুল

একটি সাধারণ ভুল হলো ETR-কে সত্তাভিত্তিক ধরে নেওয়া — অর্থাৎ প্রতিটি Constituent Entity-র জন্য আলাদা আলাদা ETR গণনা করার চেষ্টা করা, যেখানে Article 5.1 স্পষ্টভাবে জুরিসডিকশনভিত্তিক সমষ্টিগত হিসাবের কথা বলে। দ্বিতীয় ভুল হলো Investment Entity, Minority-Owned Subgroup, JV Group বা Stateless Entity-কে ভুলবশত মূল blending pool-এ অন্তর্ভুক্ত করা, যা ETR-এর হিসাবকে ভুল দিকে বিকৃত করতে পারে। তৃতীয় ভুল হলো Net GloBE Income শূন্য বা ঋণাত্মক হওয়া অবস্থায় জোর করে একটি ETR শতাংশ গণনা করার চেষ্টা করা (যেমন শূন্য দিয়ে ভাগ করে অসংজ্ঞায়িত মান পাওয়া) — এই ক্ষেত্রে সঠিক পদ্ধতি হলো সেই বছরের জন্য ETR গণনা না করে carry-forward বিধান প্রয়োগ করা। চতুর্থ ভুল হলো GloBE Loss-এর প্রভাবকে অগ্রাহ্য করা — কোনো জুরিসডিকশনে ক্ষতিগ্রস্ত সত্তা থাকলে তার প্রভাব Net GloBE Income-এর হরে অবশ্যই প্রতিফলিত করতে হবে, নাহলে ETR ভুলভাবে কম দেখানো হবে। পঞ্চমত, অনেকে ভুলবশত মনে করেন যে জুরিসডিকশনভিত্তিক ব্লেন্ডিং-এর ফলে প্রাপ্ত উচ্চ ETR মানেই সেই জুরিসডিকশনের প্রতিটি সত্তা পর্যাপ্ত কর দিচ্ছে — বাস্তবে, যেমন ২৫.৭-এর উদাহরণে দেখানো হয়েছে, একটি নিম্ন-করহারযুক্ত সত্তা সহজেই একটি উচ্চ-করহারযুক্ত সত্তার আড়ালে ঢাকা পড়ে যেতে পারে, যা ব্যবস্থাপনাগত সিদ্ধান্ত গ্রহণের সময় মনে রাখা জরুরি।
