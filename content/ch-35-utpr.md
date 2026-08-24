---
title:
  en: "UTPR (Undertaxed Profits Rule)"
  bn: "UTPR (Undertaxed Profits Rule)"
chapter: 35
part: 6
partTitle:
  en: "Tax Collection Rules · Chapter 2"
  bn: "কর আদায়ের নিয়ম · Chapter 2"
articles: "2.4–2.6"
slug: "ch-35-utpr"
---

<!-- lang:en -->

# Chapter 35 — UTPR (Undertaxed Profits Rule)

> **In this chapter:** when the IIR is unable, for some reason, to collect the full amount of Top-up Tax, the **Undertaxed Profits Rule (UTPR)** fills that gap as a kind of aggregate, formula-based backstop mechanism; this chapter discusses its computation method, allocation formula, application technique, and the legal debate surrounding it.
> **Related Articles:** 2.4–2.6 · **AG:** Feb 2023

## 35.1 The Role of the UTPR: The Last Backstop

The two main pillars of the GloBE system are the **Income Inclusion Rule (IIR)** and the **Undertaxed Profits Rule (UTPR)**. In previous chapters we saw that the IIR generally applies at the level of the Ultimate Parent Entity (UPE) or an intermediate parent entity, and imposes Top-up Tax on profit earned in a low-taxed jurisdiction at the level of that parent entity's own jurisdiction. But real-world corporate structures are not always this simple. Sometimes the UPE is located in a country where GloBE has not been implemented; sometimes a partial ownership structure prevents the IIR from collecting the full Top-up Tax; and sometimes the UPE's own country itself has income whose Effective Tax Rate is below the 15% minimum.

To ensure that no low-taxed profit escapes taxation entirely in these situations, Articles 2.4 through 2.6 of Chapter 2 of the GloBE Model Rules design the UTPR as a "backstop," or last resort. The idea is simple — if the IIR cannot collect the necessary Top-up Tax on the profit, then the liability for the remaining Top-up Tax is divided, according to a formula, among the jurisdictions where the group's Constituent Entities are located and where UTPR law is in force. This allocation has no connection whatsoever to the actual profit of that jurisdiction — it is based entirely on the presence of employees and tangible assets, which makes the UTPR a distinct, aggregate-natured rule.

Importantly, the UTPR is in no way a replacement for the IIR; rather it is a complementary process. The IIR is applied first, and then whatever remains (if anything remains) is collected through the UTPR. This sequence — IIR first, then UTPR — is a fundamental architectural decision of the GloBE system, ensuring that the same profit is not taxed twice.

## 35.2 Determining the UTPR Top-up Tax Amount — What Remains After the IIR

The first step in applying the UTPR is to determine the aggregate amount that was not collected by the IIR and that must now be collected through the UTPR. This amount is called the **UTPR Top-up Tax Amount**, and Article 2.4 establishes the framework for this calculation.

The computation process is jurisdiction-based. For each low-taxed jurisdiction, the jurisdictional top-up tax amount is first determined using the method discussed in Chapter 32 (applying the top-up tax rate to Excess Profit, after subtracting SBIE, the Substance-based Income Exclusion). Then, the portion already collected through the IIR is subtracted from this total amount. Whatever remains is the amount collectible for that jurisdiction through the UTPR.

Two common situations are particularly notable here. First, if the UPE is located in a country where there is no Qualified IIR (for example, that country has not yet implemented Pillar Two), then the Top-up Tax of all of the group's low-taxed jurisdictions becomes fully collectible through the UTPR. Second, if the UPE's jurisdiction does have a Qualified IIR, but the ownership structure (such as the presence of minority shareholders or a complex holding structure) prevents the IIR from collecting the full amount, then the UTPR fills that gap. In this second situation, partial collection generally occurs — that is, the IIR collects some portion, and the remaining portion goes to the UTPR.

Another important point at this stage is that if a jurisdiction has not yet legally implemented the UTPR (that is, that country has not yet enacted UTPR legislation), then the UTPR does not apply in that country, and its employees and assets are also not included in the allocation formula's calculation. As a result, the overall effectiveness of the UTPR depends on how many jurisdictions have actually adopted this rule.

## 35.3 Even Low-Taxed Income in the UPE's Own Country Falls Within the UTPR

One point that is often misunderstood is that the UTPR does not apply only to low-taxed income in "subsidiary jurisdictions" — it also includes low-taxed income in the UPE's own country (its home jurisdiction). This point is explicitly addressed in Article 2.6.

Naturally, the question may arise — the IIR does apply at the UPE's own level, so why would the UTPR be needed for income in the UPE's own country? The answer is that the IIR is a "top-down" rule — it imposes tax at the UPE's jurisdiction on the low-taxed income of foreign Constituent Entities. But if the UPE's own country itself has a low effective tax rate (that is, the UPE's country is itself a low-taxed jurisdiction), the IIR does not apply to that country — because there is no superior entity above any parent entity that could apply an IIR to it on itself.

The rule to fill this gap is: if the UPE's jurisdiction has no Qualified Domestic Minimum Top-up Tax (QDMTT) and the effective tax rate in that country is below the minimum rate, then the Top-up Tax amount corresponding to this low-taxed income in the UPE's own country is also included within the UTPR Top-up Tax Amount, and is distributed among the other UTPR jurisdictions — exactly as the Top-up Tax of any other low-taxed subsidiary jurisdiction is distributed. This feature has in practice encouraged many countries to adopt a QDMTT, because with a QDMTT that country's own tax authority can collect the Top-up Tax first, so that revenue does not flow away to foreign UTPR jurisdictions.

## 35.4 UTPR Percentage — The Allocation Formula

Once the overall UTPR Top-up Tax Amount has been determined, the next question is — how will this amount be divided among the various UTPR jurisdictions? This is where the **UTPR Percentage** formula described in Article 2.5 comes into play. This formula is entirely non-income-based — it uses only two indicators of real presence: the number of employees and tangible assets.

```
UTPR % = 50% × (share of employees) + 50% × (share of tangible assets)
```

In this formula, "share of employees" means the group's total number of employees of Constituent Entities in that jurisdiction, as a proportion of the total number of employees across all UTPR jurisdictions; and "share of tangible assets" means the net book value of tangible assets in that jurisdiction, as a proportion of the total net book value of tangible assets across all UTPR jurisdictions. Both components carry equal weight — 50% each — which makes this a balanced formula, reflecting both employment and physical investment.

The count of employees generally includes full-time-equivalent employees and independent contractors who genuinely work as part of the group's ordinary operations. Tangible assets include property, plant and equipment, and natural resources, but cash, financial assets, or intangible assets (such as goodwill or intellectual property) are not included in this calculation.

Note that the base used in this formula is drawn only from jurisdictions where the UTPR is actually in force at that time (that is, if a jurisdiction has not yet adopted the UTPR, its employees and assets remain outside both the numerator and denominator). As a result, the UTPR Percentage for the same group can change in a given year if a new country enacts a UTPR law, or if a Constituent Entity starts or ceases operations in a jurisdiction.

## 35.5 The Denial of Deduction Method and Equivalent Adjustments

How the amount of Top-up Tax allocated to a jurisdiction under the UTPR Percentage is actually collected is a separate and technically important question. The GloBE Model Rules do not directly impose a new tax; rather, they instruct each jurisdiction to create a process within its own tax law, called **Denial of Deduction**.

The core idea of this method is that the relevant Constituent Entity(ies) in that jurisdiction are denied a deduction for a specified amount of expense in their ordinary corporate income tax computation, which increases their taxable income, and applying the domestic tax rate to that increased income raises additional tax — an amount equal to, or close to, the allocated UTPR Top-up Tax. For example, if a jurisdiction's tax rate is 25% and it is allocated $10 million of UTPR Top-up Tax, then approximately $40 million worth of deduction would be denied ($10 million ÷ 25% = $40 million), so that the additional tax liability comes to exactly $10 million.

However, not every jurisdiction's tax system is able to adopt the "denial of deduction" concept in the same way — in some countries' legal frameworks, applying this concept may be administratively complex or constitutionally inconsistent. For this reason, Article 2.6 also leaves open an alternative path — an **equivalent adjustment**, under which that jurisdiction may achieve the same economic outcome through some other process in its own legal terms (such as imposing a direct additional tax, or some other procedural adjustment that increases the tax liability). The core condition is that the outcome must be equivalent — that is, the allocated UTPR Top-up Tax amount must actually be collected, whatever the name of the process.

Where multiple Constituent Entities are located in the same jurisdiction, this allocated amount is generally divided among them based on their respective proportions of taxable income or deductible expense, so that the tax burden is distributed proportionately among all of them and no single entity bears a disproportionate burden.

## 35.6 Carry-forward If Not Collected in the Current Year

A practical problem is — what happens if the aggregate deductible expense of the Constituent Entities in a UTPR jurisdiction is so small that the full allocated Top-up Tax amount cannot be collected through denial of deduction? A **Carry-forward** mechanism is provided for this situation.

Under this mechanism, if a portion of the amount allocated in the current fiscal year cannot actually be collected through denial of deduction or an equivalent adjustment (for example, because the relevant entity's deductible expense is insufficient relative to the allocated amount), that uncollected portion is not extinguished — rather, it is added to the UTPR Top-up Tax Amount determined for that jurisdiction in the next fiscal year. As a result, that jurisdiction's collectible liability increases in the following year, and if sufficient deductible expense is available the following year, the full amount, including the previous year's shortfall, is collected.

This feature ensures that no "permanent gap" is created within the UTPR system — only the timing of collection is deferred, but the liability itself remains unchanged. From a practical standpoint, this is especially important for small or low-activity jurisdictions, where the amount of deductible expense may naturally be low due to a limited number of Constituent Entities.

## 35.7 Reallocation in Subsequent Years

Alongside carry-forward, a related but distinct process is **reallocation**. Because the UTPR Percentage is recomputed each year — since the proportion of employees and tangible assets can change from year to year, and which jurisdictions have the UTPR actually in force can also change — a given jurisdiction's annual allocated amount is not constant.

As a result, for a jurisdiction that was allocated an amount in one year but for some reason could not collect it that year (and it was carried forward to the next year), if that jurisdiction's UTPR Percentage differs the following year — either decreasing or increasing — the relevant carry-forward amount is adjusted based on that new, changed percentage. In addition, if a jurisdiction stops applying the UTPR in a given year, or a new jurisdiction is added, the entire allocation formula is reconstructed — that is, it is redistributed among all remaining UTPR jurisdictions, as if the whole allocation for a fresh year were being computed anew.

Because of this continual recalculation, a multinational group's tax team or internal tax department must collect and verify data on employee numbers and tangible assets for all of the group's jurisdictions afresh each year, because the previous year's allocation ratio cannot be assumed to carry over to the following year.

## 35.8 Exclusion of Investment Entities

A general principle of the GloBE Model Rules is not to treat an **Investment Entity** the same as an ordinary corporate group, because the structure and purpose of such entities are fundamentally different — they generally manage assets on behalf of investors and often act as a flow-through, so that the tax liability falls at the level of the ultimate investor. This characteristic was also relevant for the IIR (discussed in earlier chapters), and it applies equally for the UTPR.

Investment Entities are excluded from the scope of the UTPR's denial-of-deduction or equivalent-adjustment process. This means that if an Investment Entity is located in a jurisdiction, no denial of deduction can be directly imposed on that entity under the UTPR process. In practice, however, if any other non-investment Constituent Entity is present in the same jurisdiction, that allocated amount can be applied against that other entity.

In addition, the employees and assets of an Investment Entity are also not included in the count of employees and tangible assets used in the UTPR Percentage formula. The rationale for this exclusion is that if the assets and employees of an Investment Entity were included in the allocation formula, that jurisdiction's allocation could increase abnormally, even though it would not actually be possible to apply denial of deduction to that entity. This exclusion therefore preserves the integrity of the allocation formula and ensures that allocation is based only on the effective presence of jurisdictions where the UTPR is actually applicable.

## 35.9 The Legitimacy of the UTPR and International Legal Debate

The UTPR is considered the most controversial component of the GloBE system, and this debate remains unresolved. The main point of objection is that the UTPR claims the right to tax the profit of another jurisdiction (such as the UPE's own country or another low-taxed jurisdiction), even though there may be no direct economic connection (nexus) between the profit and the UTPR-applying jurisdiction — tax is imposed solely on the basis that the group has some employees or assets in that country. In traditional international tax policy, the basis of taxing rights is generally connected to source or residence, and the UTPR's "employee- and asset-based" allocation method is a clear departure from this traditional framework.

For this reason, questions have been raised in various quarters about whether the UTPR is consistent with existing bilateral tax treaties, particularly those containing non-discrimination clauses or protections for the right to deduct business expenses. Some analysts argue that the denial-of-deduction method effectively increases a taxpayer's income tax base in a way that may conflict with the deduction-protection clauses of some treaties. On the other hand, the OECD and the Inclusive Framework have argued that the UTPR is a domestic tax law process that does not directly impose tax on any foreign taxpayer, but merely regulates the deduction rights of taxpayers within its own jurisdiction — and is therefore a rule of a different nature, sitting outside treaty-based taxing-rights allocation.

A particular dimension was added to this debate by the reaction of the United States — since the United States has not adopted a GloBE-consistent IIR or UTPR, US multinational groups have become potential targets of the UTPR, which has generated considerable resistance and political reaction among US policymakers and legislators. Against this backdrop, the Administrative Guidance published in February 2023 included some temporary relief measures (such as transitional safe-harbour-type provisions), which allow limiting UTPR application under specified conditions — although this guidance does not resolve the core legitimacy debate, it merely tempers the timing and scope of implementation.

Overall, there is still no consensus within the international legal community on the legitimacy of the UTPR. It is an active, ongoing debate — not a settled question — and new dimensions of this question may be added in the future through the constitutional courts of various countries or international dispute-resolution mechanisms.

## 35.10 Numerical Example

Below is a simplified numerical example showing, step by step, the entire UTPR allocation process.

**Scenario:** A multinational group's UPE is located in a country that has no Qualified IIR. The group's analysis shows that the aggregate Top-up Tax amount across various low-taxed jurisdictions (after computing net of SBIE, and after subtracting the portion collectible by the IIR) comes to **US $40,000,000 (40 million)** — this is the aggregate UTPR Top-up Tax Amount. This amount must be distributed among four UTPR jurisdictions — X, Y, Z, and W — where the group's Constituent Entities operate and where the UTPR is in force.

First, the number of employees and net book value of tangible assets of each jurisdiction is collected:

| Jurisdiction | Employees | Employee share | Tangible assets (net book value, USD million) | Asset share | UTPR % [50%×employees + 50%×assets] | Allocated UTPR Top-up Tax (USD) |
|---|---|---|---|---|---|---|
| X | 200 | 20.0% | 50 | 25.0% | 22.5% | 9,000,000 |
| Y | 300 | 30.0% | 20 | 10.0% | 20.0% | 8,000,000 |
| Z | 400 | 40.0% | 100 | 50.0% | 45.0% | 18,000,000 |
| W | 100 | 10.0% | 30 | 15.0% | 12.5% | 5,000,000 |
| **Total** | **1,000** | **100.0%** | **200** | **100.0%** | **100.0%** | **40,000,000** |

The calculation steps are shown below, for example for jurisdiction Z:

- Employee share = 400 ÷ 1,000 = 40.0%
- Asset share = 100 ÷ 200 = 50.0%
- UTPR % = 50% × 40.0% + 50% × 50.0% = 20.0% + 25.0% = 45.0%
- Allocated amount = 45.0% × $40,000,000 = $18,000,000

Note that jurisdiction Z has both the highest number of employees and the highest amount of tangible assets, and it therefore received the largest allocation — this is as expected, since the formula is directly related to the proportion of real presence. By contrast, jurisdiction Y has a relatively high number of employees (30%) but a low asset share (10%), so its overall percentage came out lower (20%).

Now suppose jurisdiction W has only a single Constituent Entity of the group, and its total annual deductible expense is only $15,000,000 (assuming a local tax rate of 20%). In this case, the maximum tax liability that could be increased is $15,000,000 × 20% = $3,000,000. But the allocated amount is $5,000,000, which exceeds the total collectible amount. As a result, $3,000,000 will be collected in jurisdiction W that year through denial of deduction, and the remaining $2,000,000 will be carried forward and added to jurisdiction W's UTPR Top-up Tax Amount for the next fiscal year.

This example shows how an entirely income-neutral allocation formula determines tax liability based on real presence, and how an implementation limitation (here, insufficient deductible expense) is resolved through the carry-forward mechanism.

## Summary

The UTPR is the last backstop of the GloBE system, designed to collect any remaining portion of Top-up Tax not collected through the IIR — including low-taxed income in the UPE's own country. Under Article 2.4, the aggregate UTPR Top-up Tax Amount is first determined, and then this amount is distributed among various UTPR jurisdictions using the UTPR Percentage formula described in Article 2.5 — a combination of 50% employee count and 50% tangible assets. The amount allocated to each jurisdiction is collected through denial of deduction or an equivalent adjustment as described in Article 2.6; if collection is incomplete, the remaining amount is carried forward and added to the following year's allocation, and because the UTPR Percentage is recomputed every year, reallocation is unavoidable. Investment Entities are excluded from this entire process — neither is denial of deduction applied to them, nor are their employees and assets counted in the allocation formula. Finally, the debate over the UTPR's consistency with international tax policy and treaty law remains unresolved — particularly because of its nexus-independent claim to taxing rights.

## Common Mistakes

A common misconception is that the UTPR applies only to income in foreign subsidiary jurisdictions — many forget that low-taxed income in the UPE's own country (if there is no QDMTT there) can also fall within the scope of the UTPR. Another common mistake is thinking that income, profit, or revenue plays some role in the UTPR Percentage calculation — in reality this formula is based entirely on the number of employees and tangible assets, with no direct connection to income. Third, many assume that once determined for a jurisdiction, the UTPR Percentage stays fixed — in reality it must be recomputed every year, because the number of employees, the amount of assets, and the number of participating jurisdictions can all change. Fourth, the carry-forward amount is often mistakenly treated as a "waiver" or "relief," whereas in reality it is only a deferral of the timing of collection — the liability itself is not extinguished. Fifth, a misconception arises around the Investment Entity exclusion, that the jurisdiction where such an entity is present falls entirely outside the UTPR — in reality, if another non-investment entity is present in that jurisdiction, the UTPR can still apply there. Finally, in discussions of the UTPR's legal legitimacy, many mistakenly present it as a "settled" matter, when in fact it remains an ongoing, unresolved debate within the international tax law community.

<!-- lang:bn -->

# অধ্যায় ৩৫ — UTPR (Undertaxed Profits Rule)

> **এই অধ্যায়ে:** IIR যখন কোনো কারণে টপ-আপ ট্যাক্সের পুরো পরিমাণ আদায় করতে পারে না, তখন **Undertaxed Profits Rule (UTPR – অপর্যাপ্ত-কর প্রদানকারী মুনাফা নিয়ম)** সেই ফাঁক পূরণ করে এক প্রকার সামষ্টিক, সূত্র-ভিত্তিক ব্যাকস্টপ প্রক্রিয়া হিসেবে; এই অধ্যায়ে এর গণনা-পদ্ধতি, বণ্টনের সূত্র, প্রয়োগ-কৌশল এবং আইনগত বিতর্ক আলোচিত হয়েছে।
> **সংশ্লিষ্ট Article:** 2.4–2.6 · **AG:** Feb 2023

## ৩৫.১ UTPR-এর ভূমিকা: শেষ রক্ষাকবচ

GloBE ব্যবস্থার দুটি প্রধান স্তম্ভ হলো **Income Inclusion Rule (IIR – আয় অন্তর্ভুক্তি নিয়ম)** এবং **Undertaxed Profits Rule (UTPR – অপর্যাপ্ত-কর প্রদানকারী মুনাফা নিয়ম)**। পূর্ববর্তী অধ্যায়গুলোতে আমরা দেখেছি, IIR মূলত Ultimate Parent Entity (UPE) বা মধ্যবর্তী প্যারেন্ট এনটিটির স্তরে প্রয়োগ হয় এবং কোনো নিম্ন-করযুক্ত (low-taxed) জুরিসডিকশনে অর্জিত মুনাফার ওপর টপ-আপ ট্যাক্স আরোপ করে সেই প্যারেন্ট এনটিটির নিজের জুরিসডিকশনে। কিন্তু বাস্তব জগতের করপোরেট গঠন সবসময় এতটা সরল নয়। কখনো UPE এমন কোনো দেশে অবস্থিত, যেখানে GloBE বাস্তবায়িত হয়নি; কখনো মালিকানার আংশিক কাঠামো (partial ownership) IIR-এর মাধ্যমে সম্পূর্ণ টপ-আপ ট্যাক্স আদায় করতে বাধা দেয়; আবার কখনো স্বয়ং UPE-র নিজের দেশেই এমন আয় থাকে যার ওপর কার্যকর করহার (Effective Tax Rate) ন্যূনতম ১৫%-এর নিচে।

এই সব পরিস্থিতিতে যাতে কোনো নিম্ন-করযুক্ত মুনাফা সম্পূর্ণভাবে কর-বহির্ভূত থেকে না যায়, তার জন্য GloBE Model Rules-এর Chapter 2-এ Article 2.4 থেকে 2.6-এ UTPR-কে একটি "ব্যাকস্টপ" বা শেষ রক্ষাকবচ হিসেবে ডিজাইন করা হয়েছে। ধারণাটি সহজ— যদি IIR মুনাফার ওপর প্রয়োজনীয় টপ-আপ ট্যাক্স আদায় করতে না পারে, তাহলে যে সব জুরিসডিকশনে গ্রুপের Constituent Entity (গঠনমূলক সত্তা) রয়েছে এবং যেখানে UTPR আইন কার্যকর আছে, তাদের মধ্যে অবশিষ্ট টপ-আপ ট্যাক্সের দায় একটি সূত্র অনুযায়ী ভাগ করে দেওয়া হয়। এই বণ্টন কোনোভাবেই সেই জুরিসডিকশনের প্রকৃত মুনাফার সাথে সম্পর্কিত নয়— এটি সম্পূর্ণরূপে কর্মী সংখ্যা এবং মূর্ত সম্পদের উপস্থিতির ওপর ভিত্তি করে করা হয়, যা UTPR-কে একটি স্বতন্ত্র, সামষ্টিক প্রকৃতির নিয়মে পরিণত করে।

গুরুত্বপূর্ণ বিষয় হলো, UTPR কোনোভাবেই IIR-এর প্রতিস্থাপক নয়; বরং এটি একটি পরিপূরক প্রক্রিয়া। প্রথমে IIR প্রয়োগ করা হয়, এবং তারপর যা বাকি থাকে (যদি কিছু বাকি থাকে) তা UTPR-এর মাধ্যমে আদায় করা হয়। এই ক্রম— IIR প্রথমে, তারপর UTPR— GloBE ব্যবস্থার একটি মৌলিক স্থাপত্যগত সিদ্ধান্ত, যা নিশ্চিত করে যে একই মুনাফার ওপর দ্বিগুণ কর আরোপিত না হয়।

## ৩৫.২ UTPR Top-up Tax Amount নির্ণয় — IIR-এর পরে যা বাকি

UTPR প্রয়োগের প্রথম পদক্ষেপ হলো সেই সামগ্রিক পরিমাণ নির্ধারণ করা, যা IIR দ্বারা আদায় হয়নি এবং যা এখন UTPR-এর মাধ্যমে আদায় করতে হবে। এই পরিমাণকে **UTPR Top-up Tax Amount (UTPR টপ-আপ ট্যাক্স পরিমাণ)** বলা হয়, এবং Article 2.4 এই গণনার কাঠামো নির্ধারণ করে।

গণনা প্রক্রিয়াটি জুরিসডিকশন-ভিত্তিক। প্রতিটি নিম্ন-করযুক্ত জুরিসডিকশনের জন্য প্রথমে অধ্যায় ৩২-এ আলোচিত পদ্ধতিতে জুরিসডিকশনাল টপ-আপ ট্যাক্স অ্যামাউন্ট নির্ধারণ করা হয় (Excess Profit-এর ওপর টপ-আপ ট্যাক্স রেট প্রয়োগ করে, এবং SBIE বা Substance-based Income Exclusion বাদ দিয়ে)। তারপর এই মোট পরিমাণ থেকে ইতিমধ্যে IIR-এর মাধ্যমে আদায় হওয়া অংশ বাদ দেওয়া হয়। যা বাকি থাকে, সেটিই সেই জুরিসডিকশনের জন্য UTPR-এর মাধ্যমে আদায়যোগ্য অংশ।

এখানে দুটি সাধারণ পরিস্থিতি বিশেষভাবে লক্ষণীয়। প্রথমত, যদি UPE এমন কোনো দেশে থাকে যেখানে কোনো Qualified IIR প্রচলিত নেই (যেমন, সেই দেশ এখনো Pillar Two বাস্তবায়ন করেনি), তাহলে সমগ্র গ্রুপের সব নিম্ন-করযুক্ত জুরিসডিকশনের টপ-আপ ট্যাক্স সম্পূর্ণভাবে UTPR-এর মাধ্যমে আদায়যোগ্য হয়ে যায়। দ্বিতীয়ত, যদি UPE-র জুরিসডিকশনে Qualified IIR থাকলেও মালিকানার কাঠামো (যেমন সংখ্যালঘু শেয়ারহোল্ডারদের উপস্থিতি বা জটিল হোল্ডিং স্ট্রাকচার) কারণে IIR পূর্ণ পরিমাণ আদায় করতে না পারে, তাহলে সেই ফাঁকটুকু UTPR পূরণ করে। এই দ্বিতীয় পরিস্থিতিতে সাধারণত আংশিক আদায় হয়— অর্থাৎ IIR কিছু অংশ আদায় করে, এবং বাকি অংশ UTPR-এর কাছে যায়।

এই ধাপে আরও একটি গুরুত্বপূর্ণ বিষয় হলো, যদি কোনো জুরিসডিকশনে UTPR এখনো আইনগতভাবে কার্যকর না হয় (অর্থাৎ সেই দেশ এখনো UTPR আইন প্রণয়ন করেনি), তাহলে সেই দেশে UTPR প্রয়োগযোগ্য নয়, এবং সেই দেশের কর্মী ও সম্পদকে বণ্টন সূত্রের হিসাবেও অন্তর্ভুক্ত করা হয় না। এভাবে UTPR-এর সামগ্রিক কার্যকারিতা নির্ভর করে কতগুলো জুরিসডিকশন প্রকৃতপক্ষে এই নিয়ম গ্রহণ করেছে তার ওপর।

## ৩৫.৩ UPE-র নিজের দেশের কম-করযুক্ত আয়ও UTPR-এর আওতায়

একটি বিষয় যা প্রায়শই ভুল বোঝা হয়, তা হলো UTPR শুধুমাত্র "সাবসিডিয়ারি জুরিসডিকশনের" নিম্ন-করযুক্ত আয়ের জন্য প্রযোজ্য নয়— এটি UPE-র নিজের দেশের (home jurisdiction) নিম্ন-করযুক্ত আয়কেও অন্তর্ভুক্ত করে। এই বিষয়টি Article 2.6-এ স্পষ্টভাবে সম্বোধিত হয়েছে।

স্বাভাবিকভাবেই প্রশ্ন উঠতে পারে— IIR তো UPE-র নিজের স্তরে প্রয়োগ হয়, তাহলে UPE-র নিজের দেশের আয়ের ওপর কেন UTPR প্রয়োজন হবে? উত্তর হলো, IIR একটি "টপ-ডাউন" নিয়ম— এটি বিদেশি Constituent Entity-দের নিম্ন-করযুক্ত আয়ের ওপর UPE-র জুরিসডিকশনে কর আরোপ করে। কিন্তু যদি UPE-র নিজের দেশেই নিম্ন কার্যকর করহার থাকে (অর্থাৎ UPE-র দেশ নিজেই একটি নিম্ন-করযুক্ত জুরিসডিকশন), তাহলে সেই দেশের ওপর IIR প্রযোজ্য হয় না— কারণ কোনো প্যারেন্ট এনটিটি নিজের নিজের ওপর IIR প্রয়োগ করতে পারে না এমন কোনো ঊর্ধ্বতন সত্তা নেই যিনি এই কর আরোপ করবেন।

এই ফাঁক পূরণের জন্য নিয়ম হলো— যদি UPE-র জুরিসডিকশনে Qualified Domestic Minimum Top-up Tax (QDMTT) না থাকে এবং সেই দেশে কার্যকর করহার ন্যূনতম হারের নিচে থাকে, তাহলে UPE-র নিজের দেশের এই নিম্ন-করযুক্ত আয়ের সংশ্লিষ্ট টপ-আপ ট্যাক্স পরিমাণও UTPR Top-up Tax Amount-এর মধ্যে অন্তর্ভুক্ত করা হয়, এবং তা অন্য UTPR জুরিসডিকশনগুলোর মধ্যে বণ্টিত হয়— ঠিক যেভাবে অন্য কোনো নিম্ন-করযুক্ত সাবসিডিয়ারি জুরিসডিকশনের টপ-আপ ট্যাক্স বণ্টিত হয়। এই বৈশিষ্ট্যটি বাস্তবে অনেক দেশকে QDMTT গ্রহণে উৎসাহিত করেছে, কারণ QDMTT থাকলে সেই দেশের নিজস্ব কর কর্তৃপক্ষ প্রথমে টপ-আপ ট্যাক্স আদায় করে নিতে পারে, ফলে সেই রাজস্ব বিদেশি UTPR জুরিসডিকশনগুলোর কাছে চলে যায় না।

## ৩৫.৪ UTPR Percentage — বণ্টনের সূত্র

একবার সামগ্রিক UTPR Top-up Tax Amount নির্ধারিত হয়ে গেলে, পরের প্রশ্ন হলো— এই পরিমাণ কীভাবে বিভিন্ন UTPR জুরিসডিকশনের মধ্যে ভাগ হবে? এখানেই Article 2.5-এ বর্ণিত **UTPR Percentage (UTPR শতাংশ)** সূত্র কাজ করে। এই সূত্রটি সম্পূর্ণভাবে অ-আয়ভিত্তিক (non-income-based)— এটি শুধুমাত্র বাস্তব উপস্থিতির (real presence) দুটি নির্দেশক ব্যবহার করে: কর্মী সংখ্যা এবং মূর্ত সম্পদ।

```
UTPR % = 50% × (কর্মীর সংখ্যার অংশ) + 50% × (মূর্ত সম্পদের অংশ)
```

এই সূত্রে "কর্মীর সংখ্যার অংশ" বলতে বোঝায় সেই জুরিসডিকশনে গ্রুপের Constituent Entity-গুলোর মোট কর্মী সংখ্যা, সব UTPR জুরিসডিকশনের মোট কর্মী সংখ্যার অনুপাতে; এবং "মূর্ত সম্পদের অংশ" বলতে বোঝায় সেই জুরিসডিকশনের মূর্ত সম্পদের নিট বই মূল্য (net book value of tangible assets), সব UTPR জুরিসডিকশনের মোট মূর্ত সম্পদের নিট বই মূল্যের অনুপাতে। উভয় উপাদানের ওয়েট সমান— ৫০% করে— যা এই সূত্রকে একটি ভারসাম্যপূর্ণ, কর্মসংস্থান ও পূর্ণাঙ্গ বিনিয়োগ উভয়কেই প্রতিফলিতকারী সূত্র বানায়।

কর্মী সংখ্যা গণনায় সাধারণত পূর্ণকালীন সমতুল্য (Full-Time Equivalent) কর্মচারী এবং স্বাধীন ঠিকাদার যারা প্রকৃতপক্ষে গ্রুপের সাধারণ কার্যক্রমের অংশ হিসেবে কাজ করেন— তাদের অন্তর্ভুক্ত করা হয়। মূর্ত সম্পদের মধ্যে সম্পত্তি, উদ্ভাবনী প্ল্যান্ট ও যন্ত্রপাতি, এবং প্রাকৃতিক সম্পদ অন্তর্ভুক্ত থাকে, কিন্তু নগদ অর্থ, আর্থিক সম্পদ, বা অস্পৃশ্য সম্পদ (যেমন গুডউইল বা মেধাস্বত্ব) এই হিসাবে যুক্ত হয় না।

লক্ষণীয় যে, এই সূত্রে ব্যবহৃত ভিত্তি শুধু সেসব জুরিসডিকশন থেকে নেওয়া হয় যেখানে UTPR সেই সময়ে কার্যকরভাবে বলবৎ আছে (অর্থাৎ, কোনো জুরিসডিকশন যদি এখনো UTPR গ্রহণ না করে, তবে তার কর্মী ও সম্পদ এই হর ও লবের বাইরে থাকবে)। ফলে একই গ্রুপের জন্য UTPR Percentage একটি নির্দিষ্ট বছরে পরিবর্তিত হতে পারে, যদি নতুন কোনো দেশ UTPR আইন প্রণয়ন করে বা কোনো Constituent Entity একটি জুরিসডিকশনে নতুন করে কার্যক্রম শুরু বা বন্ধ করে।

## ৩৫.৫ Denial of Deduction পদ্ধতি ও সমতুল্য সমন্বয়

UTPR Percentage অনুযায়ী কোনো জুরিসডিকশনকে যে পরিমাণ টপ-আপ ট্যাক্স বরাদ্দ করা হয়েছে, তা আসলে কীভাবে আদায় করা হয়— এটি একটি স্বতন্ত্র এবং কারিগরিভাবে গুরুত্বপূর্ণ প্রশ্ন। GloBE Model Rules সরাসরি কোনো নতুন কর আরোপ করে না; বরং প্রতিটি জুরিসডিকশনের নিজস্ব কর আইনের মধ্যে একটি প্রক্রিয়া তৈরি করার নির্দেশ দেয়, যাকে বলা হয় **Denial of Deduction (কর্তন প্রত্যাখ্যান)**।

এই পদ্ধতির মূল ধারণা হলো— সেই জুরিসডিকশনের সংশ্লিষ্ট Constituent Entity(গুলো)-কে তাদের সাধারণ কর্পোরেট আয়কর গণনায় নির্দিষ্ট পরিমাণ ব্যয় কর্তন (deduction) করতে অস্বীকার করা হয়, যার ফলে তাদের করযোগ্য আয় বৃদ্ধি পায় এবং সেই বাড়তি আয়ের ওপর দেশীয় করহার প্রয়োগে অতিরিক্ত কর আদায় হয়— যার পরিমাণ বরাদ্দকৃত UTPR টপ-আপ ট্যাক্সের সমান বা তার কাছাকাছি হয়। উদাহরণস্বরূপ, যদি কোনো জুরিসডিকশনের করহার ২৫% হয় এবং তাকে ১০ মিলিয়ন ডলার UTPR টপ-আপ ট্যাক্স বরাদ্দ করা হয়, তবে প্রায় ৪০ মিলিয়ন ডলার সমমূল্যের ব্যয় কর্তন প্রত্যাখ্যান করা হবে (১০ মিলিয়ন ÷ ২৫% = ৪০ মিলিয়ন), যাতে বাড়তি করদায় ঠিক ১০ মিলিয়ন ডলার হয়।

তবে সব জুরিসডিকশনের কর ব্যবস্থা একইভাবে "কর্তন প্রত্যাখ্যান" ধারণা গ্রহণ করতে সক্ষম নয়— কোনো কোনো দেশের কর আইনি কাঠামোতে এই ধারণা প্রয়োগ করা প্রশাসনিকভাবে জটিল বা সাংবিধানিকভাবে অসামঞ্জস্যপূর্ণ হতে পারে। এ কারণে Article 2.6 একটি বিকল্প পথও খোলা রাখে— একটি **সমতুল্য সমন্বয় (equivalent adjustment)**, যেখানে সেই জুরিসডিকশন তার নিজস্ব আইনি পরিভাষায় অন্য কোনো প্রক্রিয়ার মাধ্যমে (যেমন সরাসরি একটি অতিরিক্ত কর আরোপ করে, বা করদায় বৃদ্ধিকারী অন্য কোনো প্রক্রিয়াগত সমন্বয়ের মাধ্যমে) একই অর্থনৈতিক ফলাফল অর্জন করতে পারে। মূল শর্ত হলো ফলাফল সমতুল্য হতে হবে— অর্থাৎ, বরাদ্দকৃত UTPR টপ-আপ ট্যাক্স পরিমাণ প্রকৃতপক্ষে আদায় হতে হবে, প্রক্রিয়ার নাম যা-ই হোক।

এই বরাদ্দকৃত পরিমাণ একই জুরিসডিকশনে একাধিক Constituent Entity থাকলে তাদের মধ্যে সাধারণত তাদের নিজ নিজ করযোগ্য আয় বা কর্তনযোগ্য ব্যয়ের আপেক্ষিক পরিমাণের ভিত্তিতে ভাগ করা হয়, যাতে সবার মধ্যে সমানুপাতিকভাবে করভার বণ্টিত হয় এবং কোনো একক এনটিটির ওপর অসম চাপ না পড়ে।

## ৩৫.৬ চলতি বছরে আদায় না হলে Carry-forward

একটি বাস্তবিক সমস্যা হলো— যদি কোনো UTPR জুরিসডিকশনের Constituent Entity-গুলোর সম্মিলিত কর্তনযোগ্য ব্যয়ের পরিমাণ এতই কম হয় যে বরাদ্দকৃত সম্পূর্ণ টপ-আপ ট্যাক্স পরিমাণ কর্তন প্রত্যাখ্যানের মাধ্যমে আদায় করা সম্ভব না হয়, তখন কী হবে? এই পরিস্থিতির সমাধানের জন্য **Carry-forward (পরবর্তী বছরে বহন)** ব্যবস্থা রাখা হয়েছে।

এই ব্যবস্থা অনুযায়ী, যদি চলতি ফিসক্যাল বছরে বরাদ্দকৃত পরিমাণের একটি অংশ প্রকৃতপক্ষে কর্তন প্রত্যাখ্যান বা সমতুল্য সমন্বয়ের মাধ্যমে আদায় করা না যায় (উদাহরণস্বরূপ, কারণ সংশ্লিষ্ট এনটিটির কর্তনযোগ্য ব্যয় বরাদ্দকৃত পরিমাণের তুলনায় অপ্রতুল), তাহলে সেই অনাদায়ী অংশ ধ্বংস হয়ে যায় না— বরং তা পরবর্তী ফিসক্যাল বছরে সেই জুরিসডিকশনের জন্য নির্ধারিত UTPR Top-up Tax Amount-এর সাথে যুক্ত হয়ে যায়। ফলে সেই জুরিসডিকশনের ভবিষ্যৎ বছরের আদায়যোগ্য দায় বৃদ্ধি পায়, এবং পরের বছর যদি পর্যাপ্ত কর্তনযোগ্য ব্যয় পাওয়া যায়, তাহলে আগের বছরের ঘাটতিসহ পুরো পরিমাণ আদায় করা হয়।

এই বৈশিষ্ট্যটি নিশ্চিত করে যে UTPR ব্যবস্থার মধ্যে কোনো "স্থায়ী ফাঁক" তৈরি হয় না— শুধু আদায়ের সময়সূচি পিছিয়ে যায়, কিন্তু দায় নিজেই অপরিবর্তিত থাকে। ব্যবহারিক দৃষ্টিকোণ থেকে এটি বিশেষভাবে গুরুত্বপূর্ণ ছোট বা স্বল্প কার্যক্রমবিশিষ্ট জুরিসডিকশনগুলোর জন্য, যেখানে সীমিত সংখ্যক Constituent Entity থাকার কারণে কর্তনযোগ্য ব্যয়ের পরিমাণ স্বাভাবিকভাবেই কম হতে পারে।

## ৩৫.৭ পরবর্তী বছরে পুনঃবণ্টন

Carry-forward-এর পাশাপাশি একটি সম্পর্কিত কিন্তু স্বতন্ত্র প্রক্রিয়া হলো **পুনঃবণ্টন (reallocation)**। যেহেতু প্রতি বছর UTPR Percentage নতুনভাবে গণনা করা হয়— কারণ কর্মী সংখ্যা ও মূর্ত সম্পদের অনুপাত বছরে বছরে পরিবর্তিত হতে পারে, এবং কোন কোন জুরিসডিকশনে UTPR কার্যকরভাবে বলবৎ আছে তাও পরিবর্তিত হতে পারে— তাই একটি নির্দিষ্ট জুরিসডিকশনের প্রতি বছরের বরাদ্দ পরিমাণ ধ্রুবক থাকে না।

এর ফলে, যেসব জুরিসডিকশন এক বছরে বরাদ্দ পেয়েছিল কিন্তু কোনো কারণে সে বছর পরিমাণ আদায় করতে পারেনি (এবং তা carry-forward হয়ে পরের বছরে গিয়েছে), সে জুরিসডিকশনের পরের বছরের UTPR Percentage যদি ভিন্ন হয়— হয়তো কমে যায় বা বেড়ে যায়— তাহলে সংশ্লিষ্ট carry-forward পরিমাণ সেই নতুন, পরিবর্তিত শতাংশের ভিত্তিতেই সমন্বিত হয়। এছাড়া, যদি কোনো জুরিসডিকশন কোনো একটি বছরে UTPR গ্রহণ বন্ধ করে দেয় বা কোনো নতুন জুরিসডিকশন যুক্ত হয়, তাহলে সামগ্রিক বণ্টন সূত্রই নতুনভাবে পুনর্গঠিত হয়— অর্থাৎ, বাকি সব UTPR জুরিসডিকশনের মধ্যে পুনরায় ভাগ হয়ে যায়, যেভাবে একটি সম্পূর্ণ নতুন বছরের বণ্টন গণনা করা হতো।

এই ধারাবাহিক পুনর্গণনার ফলে, একটি বহুজাতিক গ্রুপের কর দল বা অভ্যন্তরীণ কর বিভাগকে প্রতি বছর নতুনভাবে গ্রুপের সব জুরিসডিকশনের কর্মী সংখ্যা এবং মূর্ত সম্পদের তথ্য সংগ্রহ ও যাচাই করতে হয়, কারণ পূর্ববর্তী বছরের বণ্টন অনুপাত পরের বছরের জন্য অনুমান করে নেওয়া যায় না।

## ৩৫.৮ Investment Entity-র বর্জন

GloBE Model Rules-এর একটি সাধারণ নীতি হলো, **Investment Entity (বিনিয়োগ সত্তা)**-কে সাধারণ কর্পোরেট গ্রুপের মতো ব্যবহার না করা, কারণ এদের গঠন ও উদ্দেশ্য মৌলিকভাবে ভিন্ন— এগুলো সাধারণত বিনিয়োগকারীদের পক্ষে সম্পদ পরিচালনা করে এবং প্রায়ই প্রবাহ-মাধ্যম (flow-through) হিসেবে কাজ করে, যাতে করের দায় চূড়ান্ত বিনিয়োগকারীর স্তরে গিয়ে পড়ে। এই বৈশিষ্ট্য IIR-এর ক্ষেত্রেও প্রাসঙ্গিক ছিল (পূর্ববর্তী অধ্যায়গুলোতে আলোচিত), এবং UTPR-এর ক্ষেত্রেও একইভাবে প্রযোজ্য।

Investment Entity-গুলো UTPR-এর Denial of Deduction বা সমতুল্য সমন্বয় প্রক্রিয়ার আওতা থেকে বর্জিত (excluded)। এর অর্থ হলো, কোনো জুরিসডিকশনে যদি একটি Investment Entity অবস্থিত থাকে, তাহলে সেই এনটিটির ওপর UTPR প্রক্রিয়ায় সরাসরি কর্তন প্রত্যাখ্যান আরোপ করা যাবে না। তবে বাস্তবে, একই জুরিসডিকশনে যদি অন্য কোনো নন-ইনভেস্টমেন্ট Constituent Entity থাকে, তাহলে সেই বরাদ্দকৃত পরিমাণ সেই অন্য এনটিটির ওপর প্রয়োগ করা যেতে পারে।

এর পাশাপাশি, UTPR Percentage সূত্রে ব্যবহৃত কর্মী সংখ্যা এবং মূর্ত সম্পদের হিসাবেও Investment Entity-র কর্মী এবং সম্পদ অন্তর্ভুক্ত করা হয় না। এই বর্জনের যুক্তি হলো— যদি Investment Entity-র সম্পদ ও কর্মীকে বণ্টন সূত্রে ধরা হতো, তাহলে সেই জুরিসডিকশনের বরাদ্দ অস্বাভাবিকভাবে বেড়ে যেতে পারত, যদিও প্রকৃতপক্ষে সেই এনটিটির ওপর কর্তন প্রত্যাখ্যান প্রয়োগ করাই সম্ভব নয়। ফলে এই বর্জন বণ্টন সূত্রের অখণ্ডতা রক্ষা করে এবং নিশ্চিত করে যে বরাদ্দ শুধুমাত্র সেসব জুরিসডিকশনের কার্যকর উপস্থিতির ভিত্তিতে হয়, যেখানে প্রকৃতপক্ষে UTPR প্রয়োগযোগ্য।

## ৩৫.৯ UTPR-এর বৈধতা ও আন্তর্জাতিক আইনগত বিতর্ক

UTPR-কে GloBE ব্যবস্থার সবচেয়ে বিতর্কিত উপাদান হিসেবে বিবেচনা করা হয়, এবং এই বিতর্ক এখনো নিষ্পত্তিহীন। মূল আপত্তির কেন্দ্রবিন্দু হলো, UTPR অন্য একটি জুরিসডিকশনের (যেমন UPE-র নিজের দেশের বা অন্য কোনো low-taxed জুরিসডিকশনের) মুনাফার ওপর কর আরোপের অধিকার দাবি করে, যদিও UTPR প্রয়োগকারী জুরিসডিকশনের সাথে সেই মুনাফার কোনো প্রত্যক্ষ অর্থনৈতিক সংযোগ (nexus) নাও থাকতে পারে— শুধুমাত্র সেই দেশে গ্রুপের কিছু কর্মী বা সম্পদ থাকার ভিত্তিতেই কর আরোপিত হয়। ঐতিহ্যবাহী আন্তর্জাতিক কর নীতিতে করাধিকারের ভিত্তি সাধারণত হয় উৎস (source) বা আবাসিকতা (residence)-এর সাথে সংযুক্ত, এবং UTPR-এর এই "কর্মী ও সম্পদ-ভিত্তিক" বণ্টন পদ্ধতি এই ঐতিহ্যগত কাঠামো থেকে একটি সুস্পষ্ট বিচ্যুতি।

এই কারণে বিভিন্ন মহল থেকে প্রশ্ন উঠেছে যে, UTPR বিদ্যমান দ্বিপাক্ষিক করনীতি চুক্তি (bilateral tax treaties)-এর সাথে সামঞ্জস্যপূর্ণ কি না, বিশেষত যেসব চুক্তিতে বৈষম্যহীনতা (non-discrimination) ধারা রয়েছে বা যেখানে ব্যবসায়িক ব্যয় কর্তনের অধিকার সুরক্ষিত আছে। কিছু বিশ্লেষক যুক্তি দেন যে, Denial of Deduction পদ্ধতি কার্যত একটি করদাতার আয়কর ভিত্তিকে বৃদ্ধি করে এমনভাবে, যা কিছু চুক্তির কর্তন-সুরক্ষা ধারার সাথে সাংঘর্ষিক হতে পারে। অন্যদিকে, OECD এবং Inclusive Framework-এর পক্ষ থেকে যুক্তি দেওয়া হয়েছে যে UTPR একটি দেশীয় (domestic) কর আইনি প্রক্রিয়া, যা কোনো বিদেশি করদাতার ওপর সরাসরি কর আরোপ করে না, বরং নিজ জুরিসডিকশনের করদাতাদের কর্তন-অধিকার নিয়ন্ত্রণ করে মাত্র— এবং তাই এটি চুক্তিভিত্তিক করাধিকার বণ্টনের বাইরে অবস্থিত একটি ভিন্ন প্রকৃতির নিয়ম।

এই বিতর্কের একটি বিশেষ মাত্রা যুক্ত হয়েছিল মার্কিন যুক্তরাষ্ট্রের প্রতিক্রিয়ায়— যেহেতু যুক্তরাষ্ট্র GloBE-সামঞ্জস্যপূর্ণ কোনো IIR বা UTPR গ্রহণ করেনি, মার্কিন বহুজাতিক গ্রুপগুলো UTPR-এর সম্ভাব্য লক্ষ্যবস্তুতে পরিণত হয়েছে, যা মার্কিন নীতিনির্ধারক এবং আইনপ্রণেতাদের মধ্যে যথেষ্ট প্রতিরোধ ও রাজনৈতিক প্রতিক্রিয়া সৃষ্টি করেছে। এই প্রেক্ষাপটে, ২০২৩ সালের ফেব্রুয়ারিতে প্রকাশিত Administrative Guidance (প্রশাসনিক নির্দেশিকা) রাউন্ডে কিছু অস্থায়ী স্বস্তিদায়ক ব্যবস্থা (যেমন transitional safe harbour ধরনের বিধান) অন্তর্ভুক্ত করা হয়েছিল, যা নির্দিষ্ট শর্তে UTPR প্রয়োগ সীমিত রাখার সুযোগ দেয়— যদিও এই নির্দেশিকা মূল আইনগত বৈধতা বিতর্কটি সমাধান করে না, বরং কেবল বাস্তবায়নের সময়সীমা এবং সুযোগকে প্রশমিত করে।

সামগ্রিকভাবে বলা যায়, UTPR-এর বৈধতা নিয়ে আন্তর্জাতিক আইনি সম্প্রদায়ের মধ্যে এখনো ঐকমত্য নেই। এটি একটি সক্রিয়, চলমান বিতর্ক— নিষ্পত্তিকৃত প্রশ্ন নয়— এবং ভবিষ্যতে বিভিন্ন দেশের সাংবিধানিক আদালত বা আন্তর্জাতিক বিরোধ নিষ্পত্তি ব্যবস্থার মাধ্যমে এই প্রশ্নের নতুন মাত্রা যুক্ত হতে পারে।

## ৩৫.১০ সংখ্যাগত উদাহরণ

নিচে একটি সরলীকৃত সংখ্যাগত উদাহরণ দেওয়া হলো, যা UTPR-এর সম্পূর্ণ বণ্টন প্রক্রিয়া ধাপে ধাপে দেখায়।

**পরিস্থিতি:** একটি বহুজাতিক গ্রুপের UPE একটি এমন দেশে অবস্থিত, যেখানে কোনো Qualified IIR নেই। গ্রুপের বিশ্লেষণে দেখা গেছে, বিভিন্ন নিম্ন-করযুক্ত জুরিসডিকশনের সামগ্রিক টপ-আপ ট্যাক্স পরিমাণ (SBIE বাদ দিয়ে গণনার পর, এবং IIR দ্বারা আদায়যোগ্য অংশ বাদ দেওয়ার পর) দাঁড়ায় **৪,০০,০০,০০০ (৪০ মিলিয়ন) মার্কিন ডলার**— এটিই সামগ্রিক UTPR Top-up Tax Amount। এই পরিমাণ চারটি UTPR জুরিসডিকশন— X, Y, Z এবং W-এর মধ্যে বণ্টন করতে হবে, যেখানে গ্রুপের Constituent Entity-গুলো কার্যক্রম পরিচালনা করে এবং যেখানে UTPR আইন কার্যকরভাবে বলবৎ আছে।

প্রথমে প্রতিটি জুরিসডিকশনের কর্মী সংখ্যা ও মূর্ত সম্পদের নিট বই মূল্যের তথ্য সংগ্রহ করা হলো:

| জুরিসডিকশন | কর্মী সংখ্যা | কর্মীর অংশ | মূর্ত সম্পদ (নিট বই মূল্য, মিলিয়ন USD) | সম্পদের অংশ | UTPR % [৫০%×কর্মী + ৫০%×সম্পদ] | বরাদ্দ UTPR টপ-আপ ট্যাক্স (USD) |
|---|---|---|---|---|---|---|
| X | ২০০ | ২০.০% | ৫০ | ২৫.০% | ২২.৫% | ৯,০০০,০০০ |
| Y | ৩০০ | ৩০.০% | ২০ | ১০.০% | ২০.০% | ৮,০০০,০০০ |
| Z | ৪০০ | ৪০.০% | ১০০ | ৫০.০% | ৪৫.০% | ১৮,০০০,০০০ |
| W | ১০০ | ১০.০% | ৩০ | ১৫.০% | ১২.৫% | ৫,০০০,০০০ |
| **মোট** | **১,০০০** | **১০০.০%** | **২০০** | **১০০.০%** | **১০০.০%** | **৪০,০০০,০০০** |

গণনার ধাপ নিচে দেখানো হলো, যেমন জুরিসডিকশন Z-এর ক্ষেত্রে:

- কর্মীর অংশ = ৪০০ ÷ ১,০০০ = ৪০.০%
- সম্পদের অংশ = ১০০ ÷ ২০০ = ৫০.০%
- UTPR % = ৫০% × ৪০.০% + ৫০% × ৫০.০% = ২০.০% + ২৫.০% = ৪৫.০%
- বরাদ্দকৃত পরিমাণ = ৪৫.০% × ৪০,০০,০০,০০০ = ১৮,০০০,০০০ ডলার

লক্ষণীয়, জুরিসডিকশন Z-এর কর্মী সংখ্যা সবচেয়ে বেশি এবং মূর্ত সম্পদও সবচেয়ে বেশি, তাই সেটি সবচেয়ে বড় বরাদ্দ পেয়েছে— যা প্রত্যাশিতভাবেই ঘটে, কারণ সূত্রটি সরাসরি বাস্তব উপস্থিতির অনুপাতের সাথে সম্পর্কিত। বিপরীতে, জুরিসডিকশন Y-এর কর্মী সংখ্যা তুলনামূলক বেশি (৩০%) হলেও সম্পদের অংশ কম (১০%) হওয়ায় তার সামগ্রিক শতাংশ কমে গেছে (২০%)।

এখন ধরা যাক, জুরিসডিকশন W-এ গ্রুপের একটিমাত্র Constituent Entity রয়েছে, এবং তার মোট বার্ষিক কর্তনযোগ্য ব্যয় মাত্র ১৫,০০০,০০০ ডলার (স্থানীয় করহার ২০% ধরে নেওয়া হলো)। এই ক্ষেত্রে, সর্বোচ্চ যে করদায় বৃদ্ধি করা সম্ভব তা হলো ১৫,০০০,০০০ × ২০% = ৩,০০০,০০০ ডলার। কিন্তু বরাদ্দকৃত পরিমাণ ৫,০০০,০০০ ডলার, যা সম্পূর্ণ আদায়যোগ্য পরিমাণের চেয়ে বেশি। ফলে সেই বছরে W জুরিসডিকশনে ৩,০০০,০০০ ডলার Denial of Deduction-এর মাধ্যমে আদায় করা হবে, এবং বাকি ২,০০০,০০০ ডলার Carry-forward হয়ে পরবর্তী ফিসক্যাল বছরের জন্য W জুরিসডিকশনের UTPR Top-up Tax Amount-এর সাথে যুক্ত হয়ে যাবে।

এই উদাহরণটি দেখায়, কীভাবে সম্পূর্ণ আয়-নিরপেক্ষ একটি বণ্টন সূত্র বাস্তব উপস্থিতির ভিত্তিতে করদায় নির্ধারণ করে, এবং কীভাবে বাস্তবায়নের সীমাবদ্ধতা (এখানে অপ্রতুল কর্তনযোগ্য ব্যয়) Carry-forward ব্যবস্থার মাধ্যমে সমাধান করা হয়।

## সারসংক্ষেপ

UTPR হলো GloBE ব্যবস্থার শেষ রক্ষাকবচ, যা IIR-এর মাধ্যমে আদায় না হওয়া টপ-আপ ট্যাক্সের যে কোনো অবশিষ্ট অংশ— UPE-র নিজের দেশের নিম্ন-করযুক্ত আয় সহ— আদায় করার জন্য ডিজাইন করা হয়েছে। Article 2.4 অনুযায়ী প্রথমে সামগ্রিক UTPR Top-up Tax Amount নির্ধারণ করা হয়, এরপর Article 2.5-এ বর্ণিত UTPR Percentage সূত্র— ৫০% কর্মী সংখ্যা এবং ৫০% মূর্ত সম্পদের অনুপাতের সমন্বয়ে— ব্যবহার করে সেই পরিমাণ বিভিন্ন UTPR জুরিসডিকশনের মধ্যে বণ্টন করা হয়। প্রতিটি জুরিসডিকশনে বরাদ্দকৃত পরিমাণ Article 2.6-এ বর্ণিত Denial of Deduction বা সমতুল্য সমন্বয়ের মাধ্যমে আদায় করা হয়; আদায় অসম্পূর্ণ হলে বাকি অংশ Carry-forward হয়ে পরের বছরের বণ্টনে যুক্ত হয়, এবং প্রতি বছর UTPR Percentage নতুনভাবে গণনা হওয়ায় পুনঃবণ্টন অনিবার্য। Investment Entity-গুলো এই সম্পূর্ণ প্রক্রিয়া থেকে বর্জিত— না তাদের ওপর কর্তন প্রত্যাখ্যান প্রয়োগ হয়, না তাদের কর্মী-সম্পদ বণ্টন সূত্রের হিসাবে ধরা হয়। অবশেষে, UTPR-এর আন্তর্জাতিক করনীতি ও চুক্তিগত সামঞ্জস্যতা নিয়ে বিতর্ক এখনো অমীমাংসিত— বিশেষত এর সংযোগ-নিরপেক্ষ (nexus-independent) করাধিকার দাবির কারণে।

## সাধারণ ভুল

একটি সাধারণ ভুল ধারণা হলো, UTPR শুধুমাত্র বিদেশি সাবসিডিয়ারি জুরিসডিকশনের আয়ের জন্য প্রযোজ্য— অনেকে ভুলে যান যে UPE-র নিজের দেশের নিম্ন-করযুক্ত আয়ও (যদি সেখানে QDMTT না থাকে) UTPR-এর আওতায় আসতে পারে। আরেকটি প্রচলিত ভুল হলো UTPR Percentage গণনায় আয়, মুনাফা বা রাজস্বের কোনো ভূমিকা আছে বলে মনে করা— বাস্তবে এই সূত্র সম্পূর্ণভাবে কর্মী সংখ্যা ও মূর্ত সম্পদের ওপর ভিত্তি করে তৈরি, আয়ের সাথে এর কোনো সরাসরি সম্পর্ক নেই। তৃতীয়ত, অনেকে ধরে নেন যে একটি জুরিসডিকশনের জন্য একবার নির্ধারিত UTPR Percentage স্থায়ী থাকে— প্রকৃতপক্ষে এটি প্রতি বছর পুনর্গণনা করতে হয়, কারণ কর্মী সংখ্যা, সম্পদের পরিমাণ এবং অংশগ্রহণকারী জুরিসডিকশনের সংখ্যা পরিবর্তিত হতে পারে। চতুর্থত, Carry-forward পরিমাণকে অনেকে ভুলভাবে "মওকুফ" বা "ছাড়" মনে করেন, যেখানে বাস্তবে এটি কেবল আদায়ের সময় পিছিয়ে দেওয়া— দায় নিজেই অবলুপ্ত হয় না। পঞ্চমত, Investment Entity-বর্জনের সুযোগ নিয়ে ভুল ধারণা তৈরি হয় যে সেই এনটিটির উপস্থিত জুরিসডিকশন সম্পূর্ণভাবে UTPR-এর বাইরে চলে যায়— বাস্তবে সেই জুরিসডিকশনে অন্য কোনো নন-ইনভেস্টমেন্ট এনটিটি থাকলে সেখানে UTPR এখনও প্রযোজ্য থাকতে পারে। শেষত, UTPR-এর আইনগত বৈধতা নিয়ে আলোচনায় অনেকে একে "নিষ্পত্তিকৃত" বিষয় বলে উপস্থাপন করার ভুল করেন, যদিও প্রকৃতপক্ষে এটি এখনো আন্তর্জাতিক কর আইন সম্প্রদায়ের মধ্যে একটি চলমান, অমীমাংসিত বিতর্কের বিষয়।
