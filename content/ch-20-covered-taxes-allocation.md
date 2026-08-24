---
title:
  en: "Cross-Entity Allocation of Covered Taxes"
  bn: "Covered Taxes-এর আন্তঃসত্তা বণ্টন"
chapter: 20
part: 4
partTitle:
  en: "Adjusted Covered Taxes · Chapter 4"
  bn: "Adjusted Covered Taxes · Chapter 4"
articles: "4.3"
slug: "ch-20-covered-taxes-allocation"
---

<!-- lang:en -->

# Chapter 20 — Cross-Entity Allocation of Covered Taxes

> **In this chapter:** although the GloBE ETR calculation is jurisdiction-based, tax is often recorded in the accounting books of the wrong entity — in this chapter we look at the allocation rules of Article 4.3, which move tax paid in respect of PEs, Tax Transparent Entities, CFCs, Hybrid Entities, and distributions to the correct entity, including the passive income limitation, so that each jurisdiction's ETR reflects genuine economic reality.
> **Related Article:** 4.3 · **AG:** Feb 2023 · Dec 2023

## 20.1 Why Tax Must Be Moved from One Entity to Another

Under the GloBE rules, the Effective Tax Rate (ETR) is calculated at the jurisdiction level — by blending the GloBE Income and Adjusted Covered Taxes of all Constituent Entities in the same jurisdiction. This calculation assumes that the tax recorded in each entity's books is imposed on that entity's own income. But in reality, various tax administration techniques — such as home-country tax on foreign income, a parent company's tax on the income of a controlled foreign company, or an owner's tax on the income of a pass-through entity — break this simple assumption.

If such tax is left with the entity that paid it, two errors occur simultaneously. First, the jurisdiction where the income was actually earned does not show the corresponding tax amount — so that jurisdiction's ETR will appear artificially low, and more Top-up Tax than is genuinely warranted will be demanded. Second, the jurisdiction of the entity that paid the tax will show an artificially high ETR, because tax exists there without any parallel income (GloBE Income). Together, these two distortions pull the overall group ETR calculation away from economic reality.

Article 4.3 provides a set of specific allocation rules to solve this problem. Each rule addresses a specific situation — PEs, Tax Transparent Entities, CFC regimes, Hybrid Entities, and distributions — and the underlying logic of each rule is the same: place the tax with the entity whose income gave rise to it, not with the entity that paid it. In this chapter we examine each situation separately, then look at an important limitation for passive income (Article 4.3.3), and finally show the whole process together with a complete numerical example.

## 20.2 Allocation to a PE — Tax Paid by the Main Entity

A **Permanent Establishment (PE)** is a business presence that has no separate legal personality of its own, but for GloBE purposes it is treated as a separate Constituent Entity and a separate ETR is calculated in its jurisdiction. The company that operates the PE is called the Main Entity.

The problem here is: many countries' tax systems impose tax on the basis of worldwide income, so the Main Entity may pay tax in its own jurisdiction that is actually attributable to the PE's income — although double taxation is generally mitigated through a foreign tax credit, some portion of PE-related tax (in net or gross form) can still remain in the Main Entity's books. Under Article 4.3, any tax included in the Main Entity's financial accounts that is attributable to the PE's income must be allocated from the Main Entity to the PE.

The result of this allocation is reflected in both jurisdictions: that portion is removed from the Adjusted Covered Taxes of the Main Entity's jurisdiction (because the corresponding income has also been excluded from the Main Entity's GloBE Income, under the general GloBE rule that PE income is excluded from the Main Entity's accounts), and it is added to the Adjusted Covered Taxes of the PE's jurisdiction. In practical terms, this allocation calculation requires separately identifying, in the Main Entity's tax return, how much of the income relates to the PE and how much tax has been imposed on it — information that is often available from the working papers used for the foreign tax credit calculation.

## 20.3 Allocation to a Tax Transparent Entity

A **Tax Transparent Entity** is an entity that does not itself pay tax on its income; rather, that income is treated as directly taxable in the hands of the owner (pass-through or fiscally transparent treatment), as is the case with structures such as partnerships or LLCs in many jurisdictions.

When such an entity is itself a Constituent Entity (that is, its income is included in the group's consolidated accounts), the problem is that the tax is actually computed and paid on the owner's tax return, not in the transparent entity's own books. Under Article 4.3, the portion of the owner's tax liability that is attributable to the transparent entity's income must be allocated from the owner to the transparent entity — and where there are multiple owners, this allocation must be split according to each owner's ownership interest.

An important distinction should be kept in mind here: if the owner and the transparent entity are located in the same jurisdiction, the practical effect of the allocation is limited, because both fall into the same ETR blending pool. But in a cross-border structure — for example, a domestic owner's investment in a transparent entity located in a foreign jurisdiction — without allocation, the tax would remain in the wrong jurisdiction (the owner's jurisdiction), and the transparent entity's jurisdiction's ETR would be abnormally low, failing to reflect the actual tax burden.

## 20.4 Tax Under a CFC Regime — Controlled Foreign Company Tax Regime

A **Controlled Foreign Company (CFC) Tax Regime** is a domestic tax rule under which a jurisdiction imposes tax directly on its controlling domestic shareholder in respect of specified income of its controlled foreign subsidiary (often passive income, or income earned in a low-tax jurisdiction), as if that income had been earned by the shareholder itself — and this tax is imposed regardless of whether that income is actually distributed.

From GloBE's perspective, a CFC is itself a Constituent Entity, and a separate ETR is computed in its own jurisdiction. But the tax imposed under a CFC regime is levied and paid in the parent's jurisdiction, on the parent's tax return. Article 4.3.2(b) provides the solution: tax included under a CFC regime in the parent's financial accounts must be allocated to the CFC's jurisdiction — so that the CFC's own ETR takes this "push-down" tax into account.

This allocation establishes an important functional feature of Pillar Two: if the parent's jurisdiction has a high tax rate and the CFC regime is active, that push-down tax can increase the CFC's jurisdiction's ETR, thereby reducing or eliminating the need for GloBE Top-up Tax there — meaning CFC tax and GloBE Top-up Tax can function as substitutes for each other (though not entirely, as will be seen in the passive income limitation in Section 20.6). The Feb 2023 round of Agreed Administrative Guidance specifically explains how the allocation process works for a CFC regime where the income of multiple CFCs is blended to compute tax at a single rate — this is discussed in detail in Section 20.8.

## 20.5 Parent's Tax on a Hybrid Entity

A **Hybrid Entity** is an entity that one jurisdiction treats as transparent for tax purposes, while another jurisdiction treats it as opaque — that is, as a taxpayer in its own right. Because of this classificational difference, the income of the same entity can be taxed at two different levels for two separate reasons.

When the owner's jurisdiction treats the hybrid entity as transparent, that jurisdiction taxes the hybrid entity's income as if it were the owner's own income, directly — much as happens under a CFC regime, though the underlying reason differs (here it is a classification mismatch, not a control-based imposition like a CFC regime). Yet the hybrid entity may also itself pay tax as a separate taxpayer in its own jurisdiction (because that jurisdiction treats it as opaque). Under Article 4.3.2(c), the tax recorded on the owner's tax return that is attributable to the hybrid entity's income must be allocated from the owner to the hybrid entity — in the same way as CFC tax is allocated, and the same passive income limitation (Article 4.3.3) applies to this allocation as well.

From a practical standpoint, the tax-allocation processes for hybrid entities and CFCs run structurally in parallel: in both cases an "upper entity" (owner/parent) pays tax in its own jurisdiction on the income of a "lower entity," and that tax must be pushed down to the lower entity. The only difference is legal in nature — one is a control-based rule (CFC regime), the other a classification-based mismatch (hybrid classification).

## 20.6 The Limit on Tax on Passive Income — the Article 4.3.3 Formula

**Passive Income** refers to dividends, interest, rent, royalties, annuities, and similar other income — which generally does not arise from active business activity but instead from the ownership of assets or the investment of capital. Tax under CFC regimes and on hybrid entities is often specifically targeted at this type of passive income, because this income is the most easily shifted to low-tax jurisdictions.

There is a risk here that Article 4.3.3 addresses. Suppose the parent jurisdiction's tax rate is much higher than GloBE's minimum rate of 15 percent — say, 25 or 30 percent. If the entire tax imposed under a CFC regime or hybrid regime is pushed down, without any limit, to the lower entity's (CFC/hybrid entity's) jurisdiction, it could artificially raise that jurisdiction's ETR to a very high level (close to the parent's rate) — much higher than necessary. Since GloBE ETR is blended at the jurisdiction level, this excessively high ETR could mask other low-taxed income (such as active business income) in that same jurisdiction, which should genuinely have attracted Top-up Tax. Article 4.3.3 therefore imposes a limit, so that push-down occurs only to the extent necessary to raise that passive income's ETR up to exactly the minimum rate — and no more.

In principle, the formula can be described as follows:

**Permitted allocable tax (on the passive income portion) = Passive Income × (Minimum Rate − that entity's own applicable tax rate/ETR, computed excluding the push-down tax of the CFC/hybrid/transparent regime)**

And if this subtraction is negative (that is, if the entity's own rate is already higher than the minimum rate), then the permitted amount is treated as zero — no push-down is needed. As a result of this limit, push-down tax related to passive income cannot raise the lower entity's ETR above the minimum rate; the excess portion that is not permitted to be pushed down remains in the paying entity's (parent's or owner's) own jurisdiction's Adjusted Covered Taxes — the tax is not lost, it simply remains in the correct jurisdiction. Notably, this limit applies only to allocation under a CFC/hybrid/transparent regime, not to direct local tax or tax on distributions (see Section 20.7).

## 20.7 Tax on Distributions — Withholding Tax and the Parent's Tax

When a Constituent Entity pays a dividend or other distribution to its owner, two types of tax can often arise: (1) Withholding Tax in the source jurisdiction, which the distributing entity deducts and remits to the government; and (2) tax in the owner's own jurisdiction on the dividend received, if that jurisdiction does not have a dividend exemption or has partial taxability.

Under Article 4.3, the principle is clear: tax related to a distribution should essentially be linked to the income of the distributing entity, because Withholding Tax is in fact a tax on income earned by the distributing entity — it is merely deducted administratively at source. As a result, Withholding Tax naturally attaches to the distributing entity's Adjusted Covered Taxes, and allocation is generally not needed because it is already with the correct entity (in the payer's books).

Complexity arises, however, when an additional tax is imposed in the owner's jurisdiction on receipt of the distribution — such as a partially taxable dividend regime in some jurisdictions, or a CFC-like inclusion created on the basis of distribution. In such cases, the rule depends on exactly which income the tax is imposed on: if it is imposed on the same income that was originally earned by the distributing entity and has already been included in the GloBE calculation, then that tax may need to be allocated to the distributing entity, so that both jurisdictions' taxes on the same underlying economic income are together reflected in the correct jurisdiction. In practice this situation arises relatively rarely, but when reviewing holding structures or repatriation strategies, it is important to ensure that distribution-related tax does not affect the ETR of the wrong jurisdiction.

## 20.8 Blended CFC Tax Regime — The Allocation Formula for a Mixed-Rate System

Some countries' CFC regimes do not compute tax separately on each CFC's income; rather, they combine the income of all (or a specified class of) foreign subsidiaries of the same owner and impose tax at a single rate on an aggregate basis, with foreign tax credits also computed on an aggregate basis. Such a system is called a **Blended CFC Tax Regime**.

The problem is that under such a regime, there is no direct calculation stating "this much tax was paid for this particular CFC" — the entire tax is computed as a single aggregate figure. But GloBE requires a separate ETR calculation for each CFC's jurisdiction, so a formula is needed to logically allocate the aggregate tax among each CFC. The Feb 2023 round of Agreed Administrative Guidance clarified this formula.

The core principle is pro-rata allocation: the aggregate CFC tax must be divided among each CFC in proportion to the income it contributed to that aggregate calculation. Conceptually, this can be expressed as follows:

**Tax allocated to a particular CFC = Total Blended CFC Tax × (that CFC's contributed taxable income ÷ the total taxable income of all CFCs included in the aggregate calculation)**

After this pro-rata allocation, the previously described Article 4.3.3 limit (Section 20.6) is applied again to the portion attributable to passive income — that is, allocation under a Blended regime occurs in two steps: first, allocating the aggregate tax proportionately to each CFC, and then applying the passive income limitation to each CFC's share. This two-tier process is practically complex, because it requires separately tracking each CFC's income, tax rate, and passive/active classification within the aggregate return — which the underlying CFC regime itself may not require, but which must be maintained additionally for GloBE compliance.

## 20.9 Treatment of Deferred Tax on Allocated Tax

The allocation rules of Article 4.3 are not limited to current tax expense alone — any Covered Tax, whether current or deferred, is similarly allocable if it is attributable to the income of a PE, transparent entity, CFC, or hybrid entity. In practical terms, this means that where a deferred tax liability or deferred tax asset is recorded in an entity's books (for example, in relation to a temporary difference connected with a parent's CFC inclusion), the corresponding portion of that deferred tax may similarly need to be allocated to the CFC's jurisdiction, if it is connected to the CFC's income.

An important practical complexity arises here: once deferred tax has been allocated from one entity to another, the subsequent reversal of that deferred tax, and GloBE's five-year recapture rule (relating to additional adjustment of the Total Deferred Tax Adjustment), take effect in the jurisdiction of the recipient entity (CFC/hybrid entity/PE), not in the jurisdiction of the paying entity. This means that a multinational group must maintain parallel tracking of allocated deferred tax in both jurisdictions — in the original books where it was first recorded, and for GloBE accounting where it has ultimately been allocated — so that future reversal or recapture is reflected in the correct jurisdiction and the same deferred tax is not double-counted in two places.

Another consideration is that in jurisdictions where the CFC or hybrid entity itself also records deferred tax locally on the same income (for example, under local GAAP), it is important to avoid an overlap between the allocated deferred tax and the local deferred tax — computing a deferred tax benefit or expense twice for the same underlying temporary difference would distort the GloBE ETR. In practice, this reconciliation requires a consolidated group-level working paper in which each allocated tax item is tracked from both its original source and its destination entity.

## 20.10 A Numerical Example

Suppose a multinational group's parent company, **P Co**, is located in Jurisdiction A, where the local corporate tax rate is 25 percent and a CFC regime is in effect. P Co's wholly owned subsidiary, **S Co**, is located in Jurisdiction B, where the local corporate tax rate is 5 percent. P Co's CFC regime applies to S Co's entire income (both passive and active), and the tax paid in B is adjusted as a foreign tax credit (FTC).

S Co's income for the year is split into two parts: royalty income (passive income) of 5,000,000 taka and active business income of 5,000,000 taka — a total income of 10,000,000 taka, which is assumed to be consistent with GloBE Income (no additional adjustments).

**Stage 1 — Local tax and CFC tax calculation:**

| Item | Passive Income (Royalty) | Active Income (Business) | Total |
|---|---|---|---|
| Amount of income | 5,000,000 | 5,000,000 | 10,000,000 |
| S Co's local tax (in B, 5%) | 250,000 | 250,000 | 500,000 |
| P Co's CFC tax, gross (in A, 25%) | 1,250,000 | 1,250,000 | 2,500,000 |
| Foreign tax credit (FTC, adjustment for B's tax) | (250,000) | (250,000) | (500,000) |
| P Co's net CFC tax paid | 1,000,000 | 1,000,000 | 2,000,000 |

**Stage 2 — Applying the Article 4.3.3 passive income limitation:**

No passive limitation applies to the active income portion, so the full 1,000,000 taka of P Co's net CFC tax attributable to active income is allocable to S Co.

The limit applies to the passive income portion. S Co's own rate (excluding push-down) is 5 percent. Permitted push-down = Passive Income × (Minimum Rate 15% − local rate 5%) = 5,000,000 × 10% = 500,000 taka. Since P Co's actual net CFC tax (on the passive portion) of 1,000,000 taka exceeds this limit, only 500,000 taka will be allocated to S Co; the remaining 500,000 taka will stay in P Co's own Jurisdiction A's Adjusted Covered Taxes and will not be allocated.

**Stage 3 — Final allocation and ETR calculation:**

| Item | Passive portion | Active portion | Total |
|---|---|---|---|
| S Co's local tax | 250,000 | 250,000 | 500,000 |
| CFC tax allocated to S Co | 500,000 (limited) | 1,000,000 (full) | 1,500,000 |
| S Co's total Adjusted Covered Taxes | 750,000 | 1,250,000 | 2,000,000 |
| Unallocated remaining tax at P Co | 500,000 | 0 | 500,000 |

Jurisdiction B's (S Co's) total Adjusted Covered Taxes = 2,000,000 taka, total GloBE Income = 10,000,000 taka. So Jurisdiction B's ETR = 2,000,000 ÷ 10,000,000 = 20 percent — which is above the minimum rate of 15 percent, so no Top-up Tax is due for Jurisdiction B this year.

Notably, if the passive income limitation had not been applied and the entire 2,500,000 taka net CFC tax had been allocated without limit, B's ETR would have been 2,500,000 ÷ 10,000,000 = 25 percent — much higher than the true economic tax burden, which highlights the risk of unlimited push-down. Conversely, the passive limitation permits exactly the amount of tax push-down needed to raise the passive income's ETR up to the minimum rate — in this example, the passive portion's own ETR becomes (250,000+500,000)÷5,000,000 = 15 percent, exactly equal to the minimum rate, reflecting precisely the formula's design objective.

## Summary

The cross-entity allocation rules of Article 4.3 are a foundational corrective mechanism for the GloBE ETR calculation — without them, the misplacement of tax related to PEs, CFC regimes, hybrid entities, or transparent entities could render jurisdiction-based ETR calculations meaningless. The core rule is simple: place the tax with the entity whose income gave rise to it, not with the paying entity. For a PE, this means from the Main Entity to the PE; for a transparent entity, from the owner in proportion to ownership; for CFCs and hybrid entities, from the parent/owner to the lower entity — the same logic applies in each case. For push-down tax on CFCs and hybrid entities, the Article 4.3.3 passive income limitation is an important restraining force — it ensures that push-down tax on passive income can raise the ETR only up to the minimum rate, not beyond, so that other low-taxed income in the same jurisdiction is not unfairly shielded. Aggregate systems such as a Blended CFC regime require a pro-rata allocation formula, and for deferred tax, tracking of the recapture rule shifts to the recipient jurisdiction after allocation. Taken together, these allocation rules ensure that each jurisdiction's ETR is an accurate reflection of its genuine economic income and the tax burden actually borne on it — not the apparent location of the accounting record.

## Common Mistakes

A common mistake is completely ignoring the passive income limitation when computing push-down tax under a CFC or hybrid regime and allocating the entire net tax without any limit — this makes the lower jurisdiction's ETR appear excessively high and wrongly shields other low-taxed income there. Another mistake is allocating the aggregate tax under a Blended CFC regime in equal shares to each CFC, without regard to the proportion of income — this violates the formula's pro-rata principle and unfairly allocates more or less tax to certain CFCs. A common mistake for PEs is allocating the gross tax in the Main Entity's books to the PE without adjusting for the foreign tax credit, which creates a risk of double counting. For a Tax Transparent Entity, allocating the entire tax from a single owner despite there being multiple owners, and ignoring the ownership proportion, is also a common error. Finally, leaving the full balance of deferred tax in the original entity's books after it has been allocated, and failing to create a separate tracking working paper for GloBE purposes, can cause the recapture rule to be applied incorrectly in the wrong jurisdiction in the future and create the possibility of double-counting the same tax item.

<!-- lang:bn -->

# অধ্যায় ২০ — Covered Taxes-এর আন্তঃসত্তা বণ্টন

> **এই অধ্যায়ে:** GloBE ETR হিসাব জুরিসডিকশন-ভিত্তিক হলেও কর অনেক সময় ভুল সত্তার হিসাবের বইয়ে রেকর্ড হয়ে থাকে — এই অধ্যায়ে আমরা Article 4.3-এর বণ্টন নিয়মগুলো দেখব, যা PE, Tax Transparent Entity, CFC, Hybrid Entity এবং distribution-এর উপর প্রদত্ত কর সঠিক সত্তায় স্থানান্তর করে, passive income limitation-সহ, যাতে প্রতিটি জুরিসডিকশনের ETR প্রকৃত অর্থনৈতিক বাস্তবতা প্রতিফলিত করে।
> **সংশ্লিষ্ট Article:** 4.3 · **AG:** Feb 2023 · Dec 2023

## ২০.১ কেন কর এক সত্তা থেকে অন্য সত্তায় সরাতে হয়

GloBE নিয়মে Effective Tax Rate (ETR) গণনা করা হয় জুরিসডিকশন পর্যায়ে — একই জুরিসডিকশনের সব Constituent Entity-র GloBE Income এবং Adjusted Covered Taxes একত্র (blend) করে। এই হিসাবের ভিত্তি ধরে নেয় যে প্রতিটি সত্তার হিসাবের বইয়ে যে কর রেকর্ড আছে, তা সেই সত্তার নিজের আয়ের উপরই আরোপিত। কিন্তু বাস্তবে কর প্রশাসনের বিভিন্ন কৌশল — যেমন বৈদেশিক আয়ের উপর নিজ দেশে কর, নিয়ন্ত্রিত বিদেশি কোম্পানির আয়ের উপর মূল কোম্পানির কর, অথবা pass-through সত্তার আয়ের উপর owner-এর কর — এই সরল অনুমানকে ভেঙে দেয়।

যদি এমন কর তার প্রদানকারী সত্তার কাছেই রেখে দেওয়া হয়, তাহলে দুটি ভুল একসঙ্গে ঘটে। প্রথমত, যে জুরিসডিকশনে আয়টি প্রকৃতপক্ষে উপার্জিত হয়েছে, সেখানে করের অঙ্ক দেখানো হয় না — ফলে সেই জুরিসডিকশনের ETR কৃত্রিমভাবে কম দেখাবে এবং প্রকৃত প্রয়োজনের চেয়ে বেশি Top-up Tax দাবি করা হবে। দ্বিতীয়ত, যে সত্তা কর দিয়েছে তার জুরিসডিকশনে ETR কৃত্রিমভাবে বেশি দেখাবে, কারণ সেখানে কর আছে কিন্তু তার সমান্তরাল আয় (GloBE Income) নেই। এই দুই বিকৃতি মিলে সামগ্রিক গোষ্ঠীর ETR হিসাবকে অর্থনৈতিক বাস্তবতা থেকে দূরে সরিয়ে দেয়।

Article 4.3 এই সমস্যার সমাধানে একগুচ্ছ নির্দিষ্ট বণ্টন নিয়ম (allocation rules) দিয়েছে। প্রতিটি নিয়ম একটি নির্দিষ্ট পরিস্থিতির জন্য — PE, Tax Transparent Entity, CFC regime, Hybrid Entity এবং distribution — এবং প্রতিটি নিয়মের অন্তর্নিহিত যুক্তি একই: কর সেই সত্তায় বসাও, যার আয়ের কারণে করটি ধার্য হয়েছে, কর প্রদানকারী সত্তায় নয়। এই অধ্যায়ে আমরা প্রতিটি পরিস্থিতি আলাদাভাবে দেখব, এরপর passive income-এর জন্য একটি গুরুত্বপূর্ণ সীমা (Article 4.3.3) এবং সবশেষে একটি পূর্ণ সংখ্যাগত উদাহরণ দিয়ে পুরো প্রক্রিয়া একসাথে দেখাব।

## ২০.২ PE-তে বণ্টন — Main Entity যে কর দিয়েছে

**Permanent Establishment (PE, স্থায়ী প্রতিষ্ঠান)** হলো এমন একটি ব্যবসায়িক উপস্থিতি যার নিজস্ব আলাদা আইনি সত্তা (legal personality) নেই, কিন্তু GloBE-এর উদ্দেশ্যে এটিকে একটি পৃথক Constituent Entity হিসেবে গণ্য করা হয় এবং এর জুরিসডিকশনে আলাদাভাবে ETR হিসাব করা হয়। যে কোম্পানি PE পরিচালনা করে তাকে বলা হয় Main Entity।

সমস্যাটি এখানে: অনেক দেশের কর ব্যবস্থা বিশ্বব্যাপী আয়ের ভিত্তিতে (worldwide taxation) কর আরোপ করে, ফলে Main Entity তার নিজ জুরিসডিকশনে এমন কর দিতে পারে যা আসলে PE-র আয়ের জন্য দায়ী — যদিও সাধারণত বৈদেশিক কর ক্রেডিট (foreign tax credit) দিয়ে দ্বৈত করের প্রশমন করা হয়, তারপরও Main Entity-র হিসাবের বইয়ে PE-সম্পর্কিত করের কিছু অংশ (নেট বা গ্রস আকারে) থেকে যেতে পারে। Article 4.3 অনুযায়ী, Main Entity-র financial accounts-এ অন্তর্ভুক্ত যেকোনো কর, যা PE-র আয়ের জন্য দায়ী (attributable), তা Main Entity থেকে PE-তে বণ্টন করতে হবে।

এই বণ্টনের ফল দুটি জুরিসডিকশনেই প্রতিফলিত হয়: Main Entity-র জুরিসডিকশনের Adjusted Covered Taxes থেকে ওই অংশ বাদ যায় (কারণ সংশ্লিষ্ট আয়টিও Main Entity-র GloBE Income থেকে বাদ দেওয়া হয়েছে, GloBE-এর সাধারণ নিয়ম অনুযায়ী PE-র আয় Main Entity-র হিসাব থেকে বাদ যায়), এবং PE-র জুরিসডিকশনের Adjusted Covered Taxes-এ তা যুক্ত হয়। ব্যবহারিক দিক থেকে, এই বণ্টন গণনার জন্য প্রয়োজন হয় Main Entity-র কর রিটার্নে PE-সংক্রান্ত আয়ের অংশ কতটা এবং তার উপর কত কর আরোপিত হয়েছে তা পৃথকভাবে চিহ্নিত করা — যা প্রায়ই বৈদেশিক কর ক্রেডিট গণনার জন্য ব্যবহৃত ওয়ার্কিং পেপার থেকেই পাওয়া যায়।

## ২০.৩ Tax Transparent Entity-তে বণ্টন

**Tax Transparent Entity (কর-স্বচ্ছ সত্তা)** এমন একটি সত্তা যার আয়ের উপর সত্তা নিজে কর দেয় না; বরং সেই আয় owner-এর হাতে সরাসরি করযোগ্য হিসেবে গণ্য হয় (pass-through বা fiscally transparent treatment), যেমন partnership বা LLC-এর মতো কাঠামো অনেক জুরিসডিকশনে।

যখন এমন একটি সত্তা নিজেই একটি Constituent Entity হয় (অর্থাৎ গোষ্ঠীর কনসোলিডেটেড হিসাবে তার আয় অন্তর্ভুক্ত হয়), তখন সমস্যা হলো — করটি প্রকৃতপক্ষে গণনা এবং পরিশোধ হয় owner-এর কর রিটার্নে, transparent entity-র নিজের হিসাবের বইয়ে নয়। Article 4.3 অনুযায়ী, owner-এর কর দায়ের যে অংশ transparent entity-র আয়ের জন্য দায়ী, তা owner থেকে transparent entity-তে বণ্টন করতে হবে — এবং একাধিক owner থাকলে প্রত্যেক owner-এর মালিকানার অনুপাত (ownership interest) অনুযায়ী এই বণ্টন ভাগ করে দিতে হবে।

এখানে একটি গুরুত্বপূর্ণ পার্থক্য মনে রাখা জরুরি: যদি owner এবং transparent entity একই জুরিসডিকশনে থাকে, তাহলে বণ্টনের ব্যবহারিক প্রভাব সীমিত, কারণ দুটোই একই ETR ব্লেন্ডিং পুলে পড়ে। কিন্তু cross-border কাঠামোতে — যেমন একটি বিদেশি জুরিসডিকশনের transparent entity-তে দেশীয় owner-এর বিনিয়োগ — বণ্টন ছাড়া করটি ভুল জুরিসডিকশনে (owner-এর জুরিসডিকশনে) থেকে যাবে, আর transparent entity-র জুরিসডিকশনের ETR হবে অস্বাভাবিকভাবে কম, প্রকৃত করভার তার প্রতিফলন না করেই।

## ২০.৪ CFC ব্যবস্থার কর — Controlled Foreign Company Tax Regime

**Controlled Foreign Company (CFC) Tax Regime (নিয়ন্ত্রিত বিদেশি কোম্পানি কর ব্যবস্থা)** হলো একটি দেশীয় কর নিয়ম, যার অধীনে একটি জুরিসডিকশন তার নিয়ন্ত্রণকারী (controlling) দেশীয় শেয়ারহোল্ডারকে তার নিয়ন্ত্রিত বিদেশি সাবসিডিয়ারির নির্দিষ্ট আয়ের (প্রায়ই passive বা কম-কর জুরিসডিকশনে অর্জিত আয়) উপর সরাসরি কর আরোপ করে, যেন সেই আয় শেয়ারহোল্ডার নিজেই উপার্জন করেছে — এবং এই আয় প্রকৃতপক্ষে distribute হোক বা না হোক, তার উপর কর ধরা হয়।

GloBE-এর দৃষ্টিকোণ থেকে দেখলে, CFC তার নিজেই একটি Constituent Entity এবং তার নিজস্ব জুরিসডিকশনে আলাদা ETR হিসাব করা হয়। কিন্তু CFC regime-এর অধীনে যে কর ধার্য হয়, তা আরোপিত হয় ও পরিশোধ করা হয় parent-এর জুরিসডিকশনে, parent-এর কর রিটার্নে। Article 4.3.2(b) এর সমাধান দেয়: parent-এর financial accounts-এ CFC regime-এর অধীনে অন্তর্ভুক্ত কর, CFC-র জুরিসডিকশনে বণ্টন করতে হবে — যাতে CFC-র নিজের ETR এই "push-down" করকে বিবেচনায় নেয়।

এই বণ্টন Pillar Two-র একটি গুরুত্বপূর্ণ কার্যকরী বৈশিষ্ট্য প্রতিষ্ঠা করে: যদি parent-এর জুরিসডিকশনে উচ্চ করের হার থাকে এবং CFC regime সক্রিয় থাকে, তাহলে সেই push-down কর CFC-র জুরিসডিকশনের ETR বাড়িয়ে দিতে পারে, ফলে সেখানে GloBE Top-up Tax-এর প্রয়োজন কমে যায় বা লোপ পায় — অর্থাৎ CFC কর এবং GloBE Top-up Tax একে অপরের বিকল্প হিসেবে কাজ করতে পারে (যদিও সম্পূর্ণভাবে নয়, যেমনটি ২০.৬-এ passive income limitation-এ দেখা যাবে)। Feb 2023 প্রশাসনিক নির্দেশনা (Agreed Administrative Guidance) রাউন্ডে বিশেষভাবে ব্যাখ্যা করা হয়েছে কীভাবে এমন CFC regime, যেখানে একাধিক CFC-র আয় মিশিয়ে (blended) একক হারে কর গণনা করা হয়, তার বণ্টন প্রক্রিয়া চলবে — এই বিষয়টি ২০.৮-এ বিস্তারিত আলোচিত হয়েছে।

## ২০.৫ Hybrid Entity-র উপর Parent-এর কর

**Hybrid Entity (হাইব্রিড সত্তা)** এমন একটি সত্তা, যাকে এক জুরিসডিকশন কর-স্বচ্ছ (transparent) হিসেবে গণ্য করে অথচ অন্য জুরিসডিকশন তাকে অস্বচ্ছ (opaque), অর্থাৎ নিজস্ব করদাতা হিসেবে গণ্য করে। এই সংজ্ঞাগত পার্থক্যের কারণে একই সত্তার আয়ের উপর দুটি ভিন্ন স্তরে কর আরোপিত হতে পারে দুটি পৃথক যুক্তিতে।

যখন owner-এর জুরিসডিকশন hybrid entity-কে transparent হিসেবে গণ্য করে, তখন সেই জুরিসডিকশন hybrid entity-র আয়কে owner-এর নিজের আয় ধরে নিয়ে সরাসরি কর আরোপ করে — ঠিক যেমন CFC regime-এ হয়, যদিও কারণটি ভিন্ন (এখানে classification mismatch, CFC regime-এর মতো নিয়ন্ত্রণ-ভিত্তিক আরোপ নয়)। অথচ hybrid entity নিজে তার নিজস্ব জুরিসডিকশনে একজন স্বতন্ত্র করদাতা হিসেবেও কর দিতে পারে (কারণ সেই জুরিসডিকশন তাকে opaque গণ্য করে)। Article 4.3.2(c) অনুযায়ী, owner-এর কর রিটার্নে hybrid entity-র আয়ের জন্য দায়ী যে কর ধরা হয়েছে, তা owner থেকে hybrid entity-তে বণ্টন করতে হবে — একইভাবে যেমন CFC-এর কর বণ্টন হয়, এবং একই passive income limitation (Article 4.3.3) এই বণ্টনের ক্ষেত্রেও প্রযোজ্য।

ব্যবহারিক দিক থেকে, hybrid entity ও CFC-র কর-বণ্টনের প্রক্রিয়া কাঠামোগতভাবে সমান্তরাল: উভয় ক্ষেত্রেই একটি "উপরের সত্তা" (owner/parent) নিজ জুরিসডিকশনে "নিচের সত্তার" আয়ের উপর কর দেয়, এবং সেই কর নিচের সত্তায় push-down করতে হয়। মূল পার্থক্য কেবল আইনি কারণে — একটি নিয়ন্ত্রণ-ভিত্তিক আইন (CFC regime), অন্যটি শ্রেণীবিন্যাস-ভিত্তিক অমিল (হাইব্রিড শ্রেণীবিন্যাস)।

## ২০.৬ Passive Income-এর উপর করের সীমা — Article 4.3.3-এর সূত্র

**Passive Income (নিষ্ক্রিয়/প্যাসিভ আয়)** বলতে বোঝায় লভ্যাংশ (dividend), সুদ (interest), ভাড়া (rent), রয়্যালটি (royalty), বার্ষিক ভাতা (annuity) এবং এই ধরনের অন্যান্য আয় — যেসব সাধারণত সক্রিয় ব্যবসায়িক কার্যক্রম থেকে আসে না, বরং সম্পদের মালিকানা বা পুঁজির বিনিয়োগ থেকে উদ্ভূত হয়। CFC regime এবং hybrid entity-র উপর কর প্রায়ই বিশেষভাবে এই ধরনের passive income-কেই লক্ষ্য করে ধার্য করা হয়, কারণ এই আয়গুলোই সবচেয়ে সহজে কম-কর জুরিসডিকশনে স্থানান্তরযোগ্য।

এখানে একটি ঝুঁকি আছে যা Article 4.3.3 সমাধান করে। ধরা যাক parent জুরিসডিকশনের কর হার GloBE-এর ন্যূনতম হার ১৫ শতাংশের চেয়ে অনেক বেশি — যেমন ২৫ বা ৩০ শতাংশ। যদি CFC regime বা hybrid regime-এর অধীনে ধার্য পুরো কর, কোনো সীমা ছাড়াই, নিচের সত্তার (CFC/hybrid entity) জুরিসডিকশনে push-down করা হয়, তাহলে সেই জুরিসডিকশনের ETR-কে কৃত্রিমভাবে অনেক উঁচুতে (parent-এর হারের কাছাকাছি) তুলে ফেলতে পারে — প্রয়োজনের চেয়ে অনেক বেশি। যেহেতু GloBE ETR জুরিসডিকশন পর্যায়ে ব্লেন্ড হয়, এই অতিরিক্ত-উচ্চ ETR সেই একই জুরিসডিকশনে থাকা অন্য কম-কর আয়কে (যেমন সক্রিয় ব্যবসায়িক আয়) আড়াল করে দিতে পারে, যা প্রকৃতপক্ষে Top-up Tax আকর্ষণ করা উচিত ছিল। Article 4.3.3 তাই একটি সীমা আরোপ করে, যাতে push-down কেবল ততটুকুই হয় যতটুকু প্রয়োজন সেই passive income-এর ETR-কে ঠিক ন্যূনতম হার পর্যন্ত তোলার জন্য — তার বেশি নয়।

নীতিগতভাবে সূত্রটি এভাবে বর্ণনা করা যায়:

**অনুমোদিত বণ্টনযোগ্য কর (passive income-এর অংশে) = Passive Income × (ন্যূনতম হার − সেই সত্তার নিজস্ব প্রযোজ্য কর হার/ETR, যা CFC/hybrid/transparent regime-এর push-down কর বাদ দিয়ে হিসাব করা হয়েছে)**

এবং যদি এই বিয়োগফল ঋণাত্মক হয় (অর্থাৎ সত্তার নিজস্ব হার এমনিতেই ন্যূনতম হারের চেয়ে বেশি), তাহলে অনুমোদিত পরিমাণ শূন্য ধরা হয় — কোনো push-down প্রয়োজন নেই। এই সীমার ফলে passive income-সম্পর্কিত push-down কর, নিচের সত্তার ETR-কে ন্যূনতম হারের বেশি তুলতে পারে না; যে অতিরিক্ত অংশ push-down করার অনুমতি নেই, তা পরিশোধকারী সত্তার (parent বা owner) নিজের জুরিসডিকশনের Adjusted Covered Taxes-এই থেকে যায় — কর হারিয়ে যায় না, শুধু সঠিক জুরিসডিকশনে থাকে। লক্ষণীয় যে, এই সীমা কেবল CFC/hybrid/transparent regime-এর অধীনে বণ্টনের ক্ষেত্রে প্রযোজ্য, সরাসরি স্থানীয় কর বা distribution-এর উপর কর-এর ক্ষেত্রে নয় (২০.৭ দেখুন)।

## ২০.৭ Distribution-এর উপর কর — Withholding Tax ও Parent-এর কর

যখন একটি Constituent Entity তার owner-কে লভ্যাংশ বা অন্য কোনো বিতরণ (distribution) প্রদান করে, তখন প্রায়ই দুই ধরনের কর সৃষ্টি হতে পারে: (১) উৎস জুরিসডিকশনে Withholding Tax, যা distribution প্রদানকারী সত্তা কেটে রাখে এবং সরকারের কাছে জমা দেয়; এবং (২) owner-এর নিজের জুরিসডিকশনে প্রাপ্ত লভ্যাংশের উপর কর, যদি সেই জুরিসডিকশনে dividend exemption না থাকে বা আংশিক করযোগ্যতা থাকে।

Article 4.3 অনুযায়ী নীতি স্পষ্ট: distribution-এর সাথে সম্পর্কিত কর মূলত distribution প্রদানকারী সত্তার আয়ের সাথেই সংযুক্ত থাকা উচিত, কারণ Withholding Tax প্রকৃতপক্ষে distribution প্রদানকারী সত্তার উপার্জিত আয়ের উপর একটি কর — সেটি কেবল প্রশাসনিকভাবে উৎসে কেটে নেওয়া হয়। ফলে Withholding Tax স্বাভাবিকভাবেই distribution প্রদানকারী সত্তার Adjusted Covered Taxes-এ যুক্ত হয়, বণ্টনের প্রয়োজন সাধারণত হয় না কারণ এটি ইতিমধ্যেই সঠিক সত্তায় (payer-এর হিসাবের বইয়ে) থাকে।

তবে জটিলতা তৈরি হয় যখন owner-এর জুরিসডিকশনে distribution প্রাপ্তির উপর একটি অতিরিক্ত কর ধার্য হয় — যেমন কিছু জুরিসডিকশনে আংশিক করযোগ্য dividend regime, বা distribution-এর ভিত্তিতে সৃষ্ট CFC-সদৃশ inclusion। এই ধরনের ক্ষেত্রে নিয়মটি নির্ভর করে করটি ঠিক কোন আয়ের জন্য ধার্য হয়েছে তার উপর: যদি এটি সেই একই আয়ের উপর, যা মূলত distribution প্রদানকারী সত্তা কর্তৃক উপার্জিত এবং ইতিমধ্যেই GloBE হিসাবে অন্তর্ভুক্ত হয়েছে, তাহলে সেই কর distribution প্রদানকারী সত্তায় বণ্টন করা প্রয়োজন হতে পারে, যাতে একই অন্তর্নিহিত অর্থনৈতিক আয়ের উপর দুই জুরিসডিকশনের কর একত্রে সঠিক জুরিসডিকশনে প্রতিফলিত হয়। ব্যবহারিক ক্ষেত্রে এই পরিস্থিতি তুলনামূলক কম ঘটে, কিন্তু হোল্ডিং কাঠামো বা রিপ্যাট্রিয়েশন কৌশল পর্যালোচনার সময় খেয়াল রাখা জরুরি যে distribution-সম্পর্কিত কর কোনো ভুল জুরিসডিকশনের ETR-কে প্রভাবিত না করে।

## ২০.৮ Blended CFC Tax Regime — মিশ্র হারভিত্তিক ব্যবস্থার বণ্টন সূত্র

কিছু দেশের CFC regime প্রতিটি CFC-র আয়ের উপর আলাদাভাবে কর গণনা করে না; বরং একই owner-এর সমস্ত (বা একটি নির্দিষ্ট শ্রেণির) বিদেশি সাবসিডিয়ারির আয়কে একত্র করে একটি সমষ্টিগত (aggregate) ভিত্তিতে একক হারে কর ধার্য করে, বিদেশি কর ক্রেডিটও সমষ্টিগতভাবে গণনা করে। এই ধরনের ব্যবস্থাকে **Blended CFC Tax Regime (মিশ্র-হারভিত্তিক CFC কর ব্যবস্থা)** বলা হয়।

সমস্যা হলো, এমন একটি regime-এ প্রতিটি CFC-র জন্য পৃথকভাবে "এই CFC-এর জন্য এত টাকা কর দেওয়া হয়েছে" বলার কোনো সরাসরি হিসাব পাওয়া যায় না — পুরো কর একটি সমষ্টিগত অঙ্কে গণনা হয়। কিন্তু GloBE-এর প্রতিটি CFC-র জুরিসডিকশনে আলাদা ETR হিসাব প্রয়োজন, তাই সমষ্টিগত কর-কে যৌক্তিকভাবে প্রতিটি CFC-তে বণ্টন করার একটি সূত্র দরকার। Feb 2023 প্রশাসনিক নির্দেশনা রাউন্ডে এই সূত্রটি স্পষ্ট করা হয়েছে।

মূল নীতি হলো আনুপাতিক (pro-rata) বণ্টন: সমষ্টিগত CFC কর প্রতিটি CFC-তে তার সেই সমষ্টিগত হিসাবে অবদান রাখা আয়ের অনুপাতে ভাগ করে দিতে হয়। ধারণাগতভাবে এভাবে প্রকাশ করা যায়:

**একটি নির্দিষ্ট CFC-তে বণ্টিত কর = মোট Blended CFC কর × (সেই CFC-র অবদানকৃত করযোগ্য আয় ÷ সব CFC-র মোট করযোগ্য আয়, যা সমষ্টিগত হিসাবে অন্তর্ভুক্ত হয়েছে)**

এই আনুপাতিক বণ্টনের পর, যে অংশ passive income-এর জন্য দায়ী, তার উপর পূর্ববর্ণিত Article 4.3.3-এর সীমা (২০.৬) পুনরায় প্রযোজ্য হয় — অর্থাৎ Blended regime-এর বণ্টন দুই ধাপে ঘটে: প্রথমে সমষ্টিগত কর প্রতিটি CFC-তে আনুপাতিকভাবে ভাগ করা, তারপর প্রতিটি CFC-র ভাগে passive income limitation প্রয়োগ করা। এই দ্বি-স্তরীয় প্রক্রিয়া ব্যবহারিকভাবে জটিল, কারণ এর জন্য প্রয়োজন সমষ্টিগত রিটার্নের অন্তর্গত প্রতিটি CFC-র আয়, কর হার এবং passive/active শ্রেণীবিভাগ পৃথকভাবে ট্র্যাক করা — যা মূল CFC regime নিজে হয়তো দাবি করে না, কিন্তু GloBE compliance-এর জন্য অতিরিক্তভাবে বজায় রাখতে হয়।

## ২০.৯ বণ্টিত করের উপর Deferred Tax-এর আচরণ

Article 4.3-এর বণ্টন নিয়মগুলো কেবল current tax expense-এর ক্ষেত্রেই সীমাবদ্ধ নয় — যেকোনো Covered Tax, তা current হোক বা deferred, যদি তা PE, transparent entity, CFC বা hybrid entity-র আয়ের জন্য দায়ী হয়, তবে তা একইভাবে বণ্টনযোগ্য। ব্যবহারিকভাবে এর অর্থ হলো, যে সত্তার হিসাবের বইয়ে একটি deferred tax liability বা deferred tax asset রেকর্ড হয়েছে (যেমন parent-এর CFC inclusion-সম্পর্কিত সাময়িক পার্থক্যের জন্য), সেই deferred tax-এর সংশ্লিষ্ট অংশও একইভাবে CFC-র জুরিসডিকশনে বণ্টন করা প্রয়োজন হতে পারে, যদি এটি CFC-র আয়ের সাথে সংযুক্ত হয়।

এখানে একটি গুরুত্বপূর্ণ ব্যবহারিক জটিলতা দেখা দেয়: একবার deferred tax একটি সত্তা থেকে অন্য সত্তায় বণ্টিত হলে, সেই deferred tax-এর পরবর্তী রিভার্সাল এবং GloBE-এর পাঁচ-বছরের recapture নিয়ম (যা Total Deferred Tax Adjustment-এর অতিরিক্ত সমন্বয় সম্পর্কিত) কার্যকর হয় প্রাপক সত্তার (CFC/hybrid entity/PE) জুরিসডিকশনে, প্রদানকারী সত্তার জুরিসডিকশনে নয়। এর মানে হলো একটি বহুজাতিক গোষ্ঠীকে বণ্টিত deferred tax-এর ট্র্যাকিং দুটি জুরিসডিকশনেই সমান্তরালভাবে বজায় রাখতে হয় — মূল হিসাবের বইয়ে যেখানে এটি প্রথম রেকর্ড হয়েছে, এবং GloBE হিসাবের জন্য যেখানে এটি চূড়ান্তভাবে বণ্টিত হয়েছে — যাতে ভবিষ্যতে রিভার্সাল বা recapture সঠিক জুরিসডিকশনে প্রতিফলিত হয় এবং একই deferred tax দুই জায়গায় দ্বৈতভাবে গণনা না হয়।

আরও একটি বিবেচ্য বিষয় হলো, যেসব জুরিসডিকশনে CFC বা hybrid entity নিজেও স্থানীয়ভাবে একই আয়ের উপর deferred tax রেকর্ড করে (যেমন স্থানীয় GAAP-এর অধীনে), সেখানে বণ্টিত deferred tax এবং স্থানীয় deferred tax-এর মধ্যে ওভারল্যাপ এড়ানো জরুরি — একই অন্তর্নিহিত সাময়িক পার্থক্যের জন্য দুইবার deferred tax benefit বা expense গণনা করা GloBE ETR-কে বিকৃত করবে। বাস্তবে এই সমন্বয়ের জন্য প্রয়োজন হয় গোষ্ঠী-স্তরের একটি সমন্বিত ওয়ার্কিং পেপার, যেখানে প্রতিটি বণ্টিত কর আইটেম তার মূল উৎস এবং গন্তব্য সত্তা দুই দিক থেকেই ট্র্যাক করা হয়।

## ২০.১০ সংখ্যাগত উদাহরণ

ধরা যাক, একটি বহুজাতিক গোষ্ঠীর parent কোম্পানি **P Co** জুরিসডিকশন A-তে অবস্থিত, যেখানে স্থানীয় কর্পোরেট কর হার ২৫ শতাংশ এবং সেখানে CFC regime বলবৎ আছে। P Co-এর সম্পূর্ণ মালিকানাধীন সাবসিডিয়ারি **S Co** জুরিসডিকশন B-তে অবস্থিত, যেখানে স্থানীয় কর্পোরেট কর হার ৫ শতাংশ। P Co-এর CFC regime S Co-র পুরো আয়ের উপর (passive ও active দুটোই) প্রযোজ্য, এবং B-তে পরিশোধিত কর বৈদেশিক কর ক্রেডিট (FTC) হিসেবে সমন্বয় করা হয়।

S Co-এর বছরের আয় দুই ভাগে বিভক্ত: রয়্যালটি আয় (passive income) ৫০ লাখ টাকা এবং সক্রিয় ব্যবসায়িক আয় (active income) ৫০ লাখ টাকা — মোট আয় ১ কোটি টাকা, যা GloBE Income-এর সাথে সামঞ্জস্যপূর্ণ ধরা হচ্ছে (কোনো অতিরিক্ত সমন্বয় নেই)।

**পর্যায় ১ — স্থানীয় কর ও CFC কর গণনা:**

| আইটেম | Passive Income (রয়্যালটি) | Active Income (ব্যবসায়িক) | মোট |
|---|---|---|---|
| আয়ের পরিমাণ | ৫০,০০,০০০ | ৫০,০০,০০০ | ১,০০,০০,০০০ |
| S Co-এর স্থানীয় কর (B-তে, ৫%) | ২,৫০,০০০ | ২,৫০,০০০ | ৫,০০,০০০ |
| P Co-এর CFC কর, গ্রস (A-তে, ২৫%) | ১২,৫০,০০০ | ১২,৫০,০০০ | ২৫,০০,০০০ |
| বৈদেশিক কর ক্রেডিট (FTC, B-এর কর সমন্বয়) | (২,৫০,০০০) | (২,৫০,০০০) | (৫,০০,০০০) |
| P Co-এর নেট CFC কর প্রদত্ত | ১০,০০,০০০ | ১০,০০,০০০ | ২০,০০,০০০ |

**পর্যায় ২ — Article 4.3.3 passive income limitation প্রয়োগ:**

Active income-এর অংশে কোনো passive limitation প্রযোজ্য নয়, তাই P Co-এর নেট CFC কর-এর সম্পূর্ণ ১০,০০,০০০ টাকা S Co-তে বণ্টনযোগ্য।

Passive income-এর অংশে সীমা প্রযোজ্য। S Co-এর নিজস্ব হার (push-down বাদে) হলো ৫ শতাংশ। অনুমোদিত push-down = Passive Income × (ন্যূনতম হার ১৫% − স্থানীয় হার ৫%) = ৫০,০০,০০০ × ১০% = ৫,০০,০০০ টাকা। যেহেতু P Co-এর প্রকৃত নেট CFC কর (passive অংশে) ১০,০০,০০০ টাকা এই সীমার চেয়ে বেশি, কেবল ৫,০০,০০০ টাকা S Co-তে বণ্টিত হবে; অবশিষ্ট ৫,০০,০০০ টাকা P Co-এর নিজের জুরিসডিকশন A-এর Adjusted Covered Taxes-এই থেকে যাবে, বণ্টিত হবে না।

**পর্যায় ৩ — চূড়ান্ত বণ্টন ও ETR হিসাব:**

| আইটেম | Passive অংশ | Active অংশ | মোট |
|---|---|---|---|
| S Co-এর স্থানীয় কর | ২,৫০,০০০ | ২,৫০,০০০ | ৫,০০,০০০ |
| S Co-তে বণ্টিত CFC কর | ৫,০০,০০০ (সীমাবদ্ধ) | ১০,০০,০০০ (পূর্ণ) | ১৫,০০,০০০ |
| S Co-এর মোট Adjusted Covered Taxes | ৭,৫০,০০০ | ১২,৫০,০০০ | ২০,০০,০০০ |
| P Co-তে অবণ্টিত অবশিষ্ট কর | ৫,০০,০০০ | ০ | ৫,০০,০০০ |

জুরিসডিকশন B-এর (S Co-এর) মোট Adjusted Covered Taxes = ২০,০০,০০০ টাকা, মোট GloBE Income = ১,০০,০০,০০০ টাকা। ফলে জুরিসডিকশন B-এর ETR = ২০,০০,০০০ ÷ ১,০০,০০,০০০ = ২০ শতাংশ — যা ন্যূনতম হার ১৫ শতাংশের বেশি, তাই এই বছরে জুরিসডিকশন B-এর জন্য কোনো Top-up Tax দাবিযোগ্য নয়।

লক্ষণীয়, যদি passive income limitation প্রয়োগ না করা হতো এবং পুরো ২০,০০,০০০ টাকা নেট CFC কর সীমাহীনভাবে বণ্টিত হতো, তাহলে B-এর ETR হতো ২৫,০০,০০০ ÷ ১,০০,০০,০০০ = ২৫ শতাংশ — যা প্রকৃত অর্থনৈতিক করভারের চেয়ে অনেক বেশি এবং সীমাহীন push-down-এর ঝুঁকিকে স্পষ্ট করে। বিপরীতভাবে, passive limitation ঠিক সেই পরিমাণ কর push-down হতে দেয়, যা passive income-এর ETR-কে ন্যূনতম হার পর্যন্ত তোলার জন্য প্রয়োজন — এই উদাহরণে passive অংশের নিজস্ব ETR হয় (২,৫০,০০০+৫,০০,০০০)÷৫০,০০,০০০ = ১৫ শতাংশ, ঠিক ন্যূনতম হারের সমান, যা সূত্রের নকশাগত উদ্দেশ্যই প্রতিফলিত করে।

## সারসংক্ষেপ

Article 4.3-এর আন্তঃসত্তা বণ্টন নিয়মগুলো GloBE ETR হিসাবের একটি ভিত্তিমূলক সংশোধনী প্রক্রিয়া — এগুলো ছাড়া PE, CFC regime, hybrid entity বা transparent entity-সংক্রান্ত করের ভুল অবস্থান জুরিসডিকশন-ভিত্তিক ETR গণনাকে অর্থহীন করে তুলতে পারত। মূল নিয়ম সহজ: কর সেই সত্তায় বসাও যার আয়ের জন্য এটি ধার্য হয়েছে, প্রদানকারী সত্তায় নয়। PE-র ক্ষেত্রে Main Entity থেকে PE-তে, transparent entity-র ক্ষেত্রে owner থেকে মালিকানার অনুপাতে, CFC ও hybrid entity-র ক্ষেত্রে parent/owner থেকে নিচের সত্তায় — প্রতিটি ক্ষেত্রেই এই একই যুক্তি প্রযোজ্য। CFC ও hybrid entity-র push-down করের ক্ষেত্রে Article 4.3.3-এর passive income limitation একটি গুরুত্বপূর্ণ সংযমকারী শক্তি — এটি নিশ্চিত করে যে passive income-এর উপর push-down কর কেবল ন্যূনতম হার পর্যন্তই ETR তুলতে পারে, তার বেশি নয়, যাতে একই জুরিসডিকশনের অন্য কম-কর আয় অন্যায়ভাবে আড়াল না হয়। Blended CFC regime-এর মতো সমষ্টিগত ব্যবস্থার জন্য আনুপাতিক বণ্টন সূত্র প্রয়োজন, এবং deferred tax-এর ক্ষেত্রে বণ্টনের পরও recapture নিয়মের ট্র্যাকিং প্রাপক জুরিসডিকশনে সরে যায়। সবমিলিয়ে, এই বণ্টন নিয়মগুলো নিশ্চিত করে যে প্রতিটি জুরিসডিকশনের ETR তার প্রকৃত অর্থনৈতিক আয় এবং তার উপর প্রকৃতপক্ষে বহন করা করভারের সঠিক প্রতিফলন — অ্যাকাউন্টিং রেকর্ডের আপাত অবস্থান নয়।

## সাধারণ ভুল

একটি সাধারণ ভুল হলো CFC বা hybrid regime-এর অধীনে push-down কর গণনা করার সময় passive income limitation সম্পূর্ণভাবে উপেক্ষা করা এবং পুরো নেট কর বিনা সীমাবদ্ধতায় বণ্টন করে ফেলা — এতে নিচের জুরিসডিকশনের ETR অতিরিক্ত উচ্চ দেখায় এবং সেখানে থাকা অন্য কম-কর আয় ভুলভাবে সুরক্ষিত হয়ে যায়। আরেকটি ভুল হলো Blended CFC regime-এ সমষ্টিগত কর-কে প্রতিটি CFC-তে সমান ভাগে (equal split) বণ্টন করা, আয়ের অনুপাত বিবেচনা না করে — এটি সূত্রের আনুপাতিক নীতি ভঙ্গ করে এবং কিছু CFC-কে অন্যায়ভাবে বেশি বা কম কর বরাদ্দ দেয়। PE-র ক্ষেত্রে একটি প্রচলিত ভুল হলো foreign tax credit সমন্বয় না করে Main Entity-র হিসাবের বইয়ে থাকা গ্রস কর PE-তে বণ্টন করা, যা দ্বৈত-গণনার (double counting) ঝুঁকি তৈরি করে। Tax Transparent Entity-র ক্ষেত্রে একাধিক owner থাকা সত্ত্বেও পুরো কর একজন owner-এর থেকেই বণ্টন করে ফেলা এবং মালিকানার অনুপাত উপেক্ষা করাও একটি সাধারণ ত্রুটি। সবশেষে, deferred tax বণ্টিত হওয়ার পরেও মূল সত্তার হিসাবের বইয়ে সেই deferred tax-এর পূর্ণ ব্যালেন্স রেখে দেওয়া এবং GloBE-এর জন্য পৃথক ট্র্যাকিং ওয়ার্কিং পেপার তৈরি না করা — এটি ভবিষ্যতে recapture নিয়ম প্রয়োগের সময় ভুল জুরিসডিকশনে সমন্বয় ঘটাতে পারে এবং একই কর আইটেমের দ্বৈত গণনার সম্ভাবনা তৈরি করে।
