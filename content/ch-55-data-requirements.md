---
title:
  en: "Data Requirements"
  bn: "ডেটা প্রয়োজনীয়তা"
chapter: 55
part: 11
partTitle:
  en: "Implementation and Business Impact"
  bn: "বাস্তবায়ন ও ব্যবসায়িক প্রভাব"
slug: "ch-55-data-requirements"
---

<!-- lang:en -->

# Chapter 55 — Data Requirements

> **In this chapter:** however coherent the Pillar Two calculation framework may appear in theory, the primary implementation obstacle almost never comes from there — it comes from data. An MNE Group's accounting systems have historically been built for consolidation, management reporting, and centralized tax provision purposes — not for holding GloBE-specific information at entity level, in accounting-standard-consistent form, with five years of historical depth. This chapter discusses exactly what data is needed, how much of it is already available in existing systems today, where structural gaps arise, how data quality and control can be assured, the question of consistency with CbCR, and what a realistic data-collection strategy might look like.

## 55.1 What Data Pillar Two Needs — A Complete Inventory

The Pillar Two calculation — from Financial Accounting Net Income discussed in Chapters 12–13 through to the Top-up Tax Percentage discussed in Chapter 26 — is a multi-layered process, and each layer requires a different type of input data. From a practical standpoint, this data can be divided into several broad categories.

First, **entity-level financial information** — income-statement data prepared for each Constituent Entity under the UPE's accounting standard, including revenue, expenses, net profit/loss, and the underlying figures for every adjustment needed to determine GloBE Income/Loss — such as the Article 3.2 adjustments discussed in Chapter 13, e.g. stock-based compensation, penalties and fines, finance charges, and so on.

Second, **tax information** — for each entity, current tax expense, the breakdown of Deferred Tax Expense/Benefit, and a detailed classification of which taxes are included and which are excluded under the definition of Covered Taxes discussed in Chapters 18–20.

Third, **Deferred Tax-related data** — applying the Deferred Tax Mechanics discussed in Chapter 21 requires, for each entity, a temporary-difference-based breakdown of Deferred Tax Assets/Liabilities, the applicable tax rate, and the historical information needed to apply the GloBE-specific recast/recapture rules (details in 55.3).

Fourth, data relating to the **Substance-Based Income Exclusion (SBIE)** — applying this provision, discussed in Chapter 27, requires a jurisdiction-by-jurisdiction breakdown of the value of Eligible Payroll Cost and Eligible Tangible Assets in each jurisdiction — based on the location of employees and the geographic location of assets.

Fifth, **corporate structure and ownership information** — applying the definition of MNE Group discussed in Chapters 6 and 10, identifying the UPE/IPE/POPE, and applying ownership percentages requires, for each Constituent Entity, information on its ownership structure, ownership changes during the year, and the date and nature of group entry/exit (Chapter 36).

Sixth, **election information** — which Constituent Entities the various Article 3 elections, the GloBE Loss Election, or the Investment Entity-related elections discussed in Chapters 14, 23, 40 and elsewhere apply to, and from which year they take effect — this information needs to be maintained in the form of a central election register, because an election, once made, often remains applicable for multiple years, and its impact cannot be understood by looking only at the current year's figures.

The table below provides a brief inventory of these data categories, assessing the typical source system for each data point, who typically owns it, and how high the risk of a gap is.

| Data point | Typical source system | Typical owner | Risk of gap |
|---|---|---|---|
| Entity-level GAAP-consistent income statement | Consolidation system | Group reporting team | Low — generally already exists |
| Underlying detail of Article 3.2 adjustments (stock compensation, fines, etc.) | Local ledger / manual working papers | Local accounting team | Medium-high |
| Current tax expense and Covered Tax classification | Tax provision system | Tax department | Medium |
| Deferred Tax temporary-difference breakdown (five years of history) | Tax provision system / local returns | Tax department | High |
| Jurisdiction-level payroll cost | HR/payroll system | Human resources department | High |
| Jurisdiction-level tangible asset value | Fixed asset register | Finance/operations | High |
| Ownership structure and changes during the year | Corporate secretarial records | Legal/corporate governance | Medium-high |
| CbCR country-level data | CbCR preparation dataset | Tax department | Low-medium |
| Election history | Generally not held in any single system | Group tax department | High |

This list shows that the problem is not uniform. Some data is already well captured, some exists partially but not at the granularity GloBE requires, and some data is not regularly captured in any one system at all. The next two sections discuss this distinction in detail.

## 55.2 What Data Already Exists (consolidation · CbCR · tax provision)

The good news is that for a medium-to-large MNE Group, a substantial share of Pillar Two's data requirements does not have to be built from scratch — because these groups already generate data for three related but distinct purposes.

The **consolidation system** generally provides entity-level income statement and balance sheet information, because each subsidiary's data is centrally collected to enable reconciliation of the financial statements. Since the definition of MNE Group discussed in Chapter 6 is built on the concept of accounting-standard-consistent consolidation, this system's entity list and ownership percentages are generally a good starting point for Pillar Two's initial scoping. However, the consolidation system generally aggregates information according to the UPE's accounting standard, which directly matches the definition of Financial Accounting Net Income discussed in Chapter 12 — this is an important advantage, because there is no need to re-convert from local GAAP to UPE GAAP.

**Country-by-Country Reporting (CbCR)** provides jurisdiction-level aggregate data on revenue, profit, tax paid, headcount, and tangible assets — and the Transitional CbCR Safe Harbour discussed in Chapter 45 depends directly on this dataset. CbCR data is particularly valuable because it is already prepared in a jurisdiction-level breakdown, which is the natural unit of the GloBE calculation. However, CbCR data is generally at an aggregated level and does not capture the detailed breakdown of each Article 3.2 adjustment, so while it is a good cross-check, it is not a substitute for the full calculation (see 55.5).

The **tax provision system** generally provides each entity's current and Deferred Tax expense calculations, effective tax rate reconciliation, and, in some cases, a general classification of temporary differences — which is helpful in building the foundation for the Covered Taxes and Deferred Tax calculations discussed in Chapters 18–21. This information, prepared for the annual financial statements, is a good starting point, particularly where the group already prepares detailed tax reconciliations under IFRS or US GAAP.

The combined strength of these three sources is that, in practice, they can be seen to cover roughly 60–70 percent of the required raw data. But the remaining portion — which often turns out to be the most time-consuming and labor-intensive — is the subject of the gaps discussed in the next section.

## 55.3 Where Gaps Arise — Common Blank Spots

### Entity-level, accounting-standard-consistent information

Although the consolidation system holds entity-level data, it is often held together with consolidation entries (intercompany elimination, purchase accounting adjustments, etc.), which must be separately backed out or adjusted for the GloBE calculation. Chapter 12 discusses that Financial Accounting Net Income must be determined at entity level, prior to the state of consolidation-level eliminations — but many consolidation systems do not keep this "pre-elimination" version in an easily extractable form, and instead primarily retain the post-elimination, consolidated figure. As a result, data that appears to "exist at entity level" is, in practice, not in the form GloBE requires.

Another common problem is small or medium-sized subsidiaries — for which group reporting often uses a simplified or aggregated template, because management reporting does not require full detail. But under Pillar Two, every Constituent Entity — regardless of its size — falls within the scope of the calculation individually (although the De Minimis Exclusion discussed in Chapter 28 allows simplification in some cases), so this lack of depth in "small entity" data creates a real gap.

### Deferred Tax detail and five years of history

Correctly applying the Deferred Tax Mechanics discussed in Chapter 21 requires the original source of each temporary difference, its applicable tax rate, and the historical context needed to apply the GloBE-specific recast rules. The Recast and Recapture and Unclaimed Accrual provisions discussed in Chapter 22 specifically require that, if a Deferred Tax Liability has not reversed within a certain time limit (generally five years), it must be recaptured, potentially requiring the ETR of a prior year to be recalculated.

The problem is that conventional tax provision systems generally retain temporary-difference movement data for the current year and only the previous one or two years — because financial statement purposes do not require more than that. GloBE's five-year rolling tracking requirement directly conflicts with these systems' normal data retention policies. In particular, if the Deferred Tax balances for the years prior to Pillar Two coming into effect (pre-transition years) have not been reconstructed in the GloBE-specific detailed form, then building the historical baseline needed for future recapture calculations becomes a major undertaking.

### Jurisdiction-level breakdown of payroll and tangible assets

The SBIE calculation discussed in Chapter 27 requires, for each jurisdiction, the payroll cost of Eligible Employees and the carrying value of Eligible Tangible Assets. The problem is that many groups' HR and payroll systems are organized by legal entity, not by jurisdiction — and one entity's employees may work across multiple jurisdictions (e.g. secondment or cross-border employees), which cannot be directly extracted from simple entity-level data.

Similarly, the fixed asset register is often built on an entity-based or project-based structure, and one entity's assets may be spread across multiple jurisdictions — particularly in cases involving a Permanent Establishment (discussed in Chapters 8 and 16), where assets of a main entity may be physically located in the PE's jurisdiction. This kind of geographic mapping of assets and employees is generally not automatically held in any single system, and often has to be collected through manual surveys or interviews.

### Ownership structure and change documentation

Chapters 6, 10, and 36 discuss how ownership percentages and ownership changes during the year (acquisitions, disposals, restructurings) directly affect which entity is part of which group, for which period, and which allocation rule applies. Corporate secretarial records generally hold the "final" state of the ownership structure, but the exact date of each change occurring during the year, and the nature of that change (share purchase/sale versus asset transfer, discussed in Chapter 37), are not always readily searchable — particularly when transactions are confined to manual legal documents and not entered into any central database in structured form.

This gap is particularly risky because incorrect or incomplete ownership information can undermine the entire foundation of the calculation — if an entity is wrongly included or excluded, or a partial-year allocation is done incorrectly, that error flows through to every level below (ETR, Top-up Tax).

## 55.4 Data Quality, Timing, and Control

Collecting data is one part; ensuring its quality is an entirely different and often harder task. Several principled matters are important here.

First, **source consistency**. If the same data point (e.g. an entity's revenue) is pulled from different systems at different times for different purposes, small differences in the numbers can appear — such as the difference between the consolidation system's "final" figure and the "preliminary" figure used for tax provision, if the tax close happens before the consolidation close. For the GloBE calculation, a specific, documented "source of truth" must be established, and the source of each data point must be clearly identified.

Second, **timing alignment**. Given the GIR filing timelines discussed in Chapters 50–52, the data-collection calendar can clash with the ordinary financial close calendar — because the preliminary GloBE calculation may need to begin before final audited financial data is available. For this reason, many groups run separate "preliminary" and "final" data-collection cycles, with differences reconciled afterward.

Third, **control and sign-off**. Since the burden of proof rests with the taxpayer during an audit (discussed in Chapter 54), it is essential to maintain a trail of who collected, who verified, and on what date each data point was approved. An effective control framework generally has three levels — the local preparer (who gathers the raw figures), a regional or functional reviewer (who performs the initial check), and a central group-level final reviewer (who checks consistency across the whole group).

Fourth, **version control**. The GloBE calculation often has to be recomputed more than once — as new information becomes available, or because of changes in Administrative Guidance. If it is not clearly tracked which version of the data a given calculation was based on, it later becomes difficult to answer the question "why did this figure come out this way" — which is particularly damaging during an audit.

Fifth, **tracking the impact of changes**. In the context of Post-Filing Adjustments discussed in Chapter 24, a structured process is needed to track how a correction to a local account (such as an audit adjustment) affects a prior year's GloBE calculation — otherwise, such changes can easily go unnoticed.

## 55.5 Consistency and Inconsistency with CbCR

CbCR and the GloBE calculation are built on the same underlying business information, and the Transitional CbCR Safe Harbour discussed in Chapter 45 relies directly on this similarity. However, there are several structural differences between the two frameworks that must be carefully considered when preparing data.

The first difference is the **level of aggregation**. CbCR data is aggregated at the jurisdiction level, whereas the GloBE calculation essentially starts at entity level and is then blended at the jurisdiction level (Jurisdictional Blending, discussed in Chapter 25). As a result, even though the final jurisdiction-level figures may look similar, the calculation methodology behind them can differ, and there is no guarantee they will always tie out to a single number.

The second difference is the **absence of adjustments**. CbCR's profit figure generally does not reflect the Article 3.2 adjustments discussed in Chapter 13 — it is essentially unadjusted, accounting-standard-consistent profit. As a result, a difference between CbCR profit and GloBE Income is entirely normal, and should not be assumed to be an "error" — rather, it is expected.

The third difference is the **definition of tax data**. CbCR contains two separate data points, "Income Tax Paid" and "Income Tax Accrued," which do not directly match the definition of Covered Taxes discussed in Chapter 18 — the definition of Covered Taxes is more specific and includes or excludes certain tax types that CbCR does not consider.

The practical significance of these differences is that CbCR data is useful as a "sanity check" or preliminary screening tool for the GloBE calculation (particularly for verifying Safe Harbour eligibility), but it cannot be used as a direct substitute for the GloBE calculation. Where a large discrepancy appears between the two datasets, the first suspicion should be whether there is an aggregation or classification difference in one of the datasets — understanding the structural difference is essential before hunting for an error. An effective internal control is to prepare a reconciliation between the CbCR and GloBE jurisdiction-level figures every year, so that an explanation is ready if a tax authority raises a question in the future.

## 55.6 A Practical Data-Collection Strategy

Considering the gaps discussed above, a realistic data-collection strategy is generally built on the following principles.

**Phased implementation.** Attempting to fully automate everything in the first year is often an unrealistic goal. A more realistic approach is to first build a preliminary calculation framework using what is available from existing systems (consolidation, CbCR, tax provision), fill the gaps using manual templates or questionnaires, and gradually convert those manual portions into systematic processes in subsequent years.

**Clear data ownership.** The table in 55.1 shows that different data points are owned by different departments — Finance, Tax, HR, Legal. An important responsibility of a central Pillar Two project team is to assign a specific accountable person or team for each data point, and to document that responsibility in writing — so there is no confusion about "who provides this information," particularly in areas such as the jurisdiction-level breakdown of payroll and tangible assets, where the source of information lies outside the traditional tax department.

**A central collection template or framework.** Since no single existing system meets the full requirements of GloBE, a central collection framework is needed (which could be a structured spreadsheet-based template, or a purpose-built data collection process) that gathers all required data points for each entity in a uniform structure, so that different entities' data is comparable and reconcilable.

**Prioritizing the creation of a historical baseline.** The gaps discussed in 55.3 — the five years of Deferred Tax history and ownership change documentation — are essentially one-time tasks: that is, "doing them now" reduces the need to repeat them every year in the future. It is therefore wise to prioritize this historical reconstruction work in the first phase of implementation, rather than leaving it until the last moment.

**Reusable adjustment logic.** A specific, documented calculation rule should be established for each Article 3.2 adjustment and applied consistently across all entities, so that the same adjustment is not applied differently by different entities under different interpretations — which could later create problems in group-level consistency checks.

**Considering auditability from the outset.** Since 55.4 discussed that the burden of proof rests with the taxpayer, the data-collection process should be designed from the start so that the source and approval trail of every figure is automatically preserved — this is far easier to build into the design from the beginning than to add later.

## Summary

Pillar Two's data requirements pose a more practical obstacle than even the theoretical complexity of the rules, because a large portion of the required data is not captured in the design of existing systems. The consolidation system, CbCR, and tax provision together provide a significant amount of the raw data, but the biggest gaps appear in four areas: entity-level pre-elimination information, five years of detailed Deferred Tax history, jurisdiction-level breakdowns of payroll and tangible assets, and precise documentation of ownership changes. Ensuring data quality requires establishing a source of truth, aligning timing, a tiered approval process, and version control. CbCR data should be used as a valuable sanity check, but not as a substitute for the GloBE calculation, given its aggregation and lack of adjustments. A realistic strategy involves phased implementation, clear data ownership, building a central collection framework, prioritizing an early historical baseline, and considering auditability from the outset.

## Common Mistakes

- Assuming that entity-level data from the consolidation system is directly ready for the GloBE Income calculation, without verifying pre-elimination adjustments.
- Treating the tax provision system's usual one-to-two-year Deferred Tax history as sufficient and delaying the building of a five-year rolling tracking framework.
- Leaving responsibility for collecting the jurisdiction-level breakdown of payroll and tangible assets solely to the tax department, without involving HR and operations in the process.
- Viewing ownership change information purely from a legal-completion standpoint, without documenting the precise date and nature required for GloBE allocation.
- Immediately assuming an error when a numerical difference appears between CbCR and GloBE, without considering the structural differences (aggregation, adjustments, tax definitions) between the two frameworks.
- Creating excessive reliance on a single individual for data collection, without written ownership registers or process documentation — which creates serious risk if that person is unavailable or replaced.
- Ignoring version control and failing to track which data version a prior calculation was based on when recalculating, which makes explanations difficult during an audit.
- Expecting a fully automated and flawless data flow in the very first year, without a realistic plan for phased implementation.

<!-- lang:bn -->

# অধ্যায় ৫৫ — ডেটা প্রয়োজনীয়তা

> **এই অধ্যায়ে:** Pillar Two-র গণনা কাঠামো তত্ত্বগতভাবে যতটা সুসংগঠিত মনে হয়, বাস্তবায়নের মূল বাধা প্রায় সবসময় সেখান থেকে আসে না — বরং আসে ডেটা থেকে। একটি MNE Group-এর হিসাব ব্যবস্থা ঐতিহাসিকভাবে একত্রীকরণ (consolidation), ব্যবস্থাপনা রিপোর্টিং এবং সিএন্ট্রাল ট্যাক্স প্রভিশনের প্রয়োজনে তৈরি হয়েছে — সত্তা-স্তরে (entity-level), হিসাবমান-সঙ্গতভাবে, পাঁচ বছরের ঐতিহাসিক গভীরতায় GloBE-নির্দিষ্ট তথ্য রাখার জন্য নয়। এই অধ্যায়ে আলোচনা করা হয়েছে ঠিক কী কী ডেটা প্রয়োজন, তার মধ্যে কতটা আজ থেকেই বিদ্যমান সিস্টেমে পাওয়া যায়, কোথায় কাঠামোগত ঘাটতি তৈরি হয়, ডেটার মান ও নিয়ন্ত্রণ কীভাবে নিশ্চিত করা যায়, CbCR-এর সঙ্গে সামঞ্জস্যের প্রশ্ন, এবং একটি বাস্তবসম্মত ডেটা-সংগ্রহ কৌশল কেমন হতে পারে।

## ৫৫.১ Pillar Two-র জন্য কী কী ডেটা লাগে — একটি পূর্ণ তালিকা

Pillar Two-র গণনা — অধ্যায় ১২-১৩-এ আলোচিত Financial Accounting Net Income থেকে শুরু করে অধ্যায় ২৬-এ আলোচিত Top-up Tax Percentage পর্যন্ত — একটি বহু-স্তরীয় প্রক্রিয়া, এবং প্রতিটি স্তরে ভিন্ন ধরনের ইনপুট ডেটা প্রয়োজন। ব্যবহারিক দৃষ্টিকোণ থেকে এই ডেটাগুলোকে কয়েকটি বড় শ্রেণিতে ভাগ করা যায়।

প্রথমত, **সত্তা-স্তরের আর্থিক তথ্য** — প্রতিটি Constituent Entity-র জন্য UPE-র হিসাবমান অনুযায়ী প্রস্তুত করা আয়-বিবরণী তথ্য, যার মধ্যে থাকে রাজস্ব, ব্যয়, নিট মুনাফা/ক্ষতি এবং GloBE Income/Loss নির্ধারণে প্রয়োজনীয় প্রতিটি সমন্বয়ের (adjustment) অন্তর্নিহিত সংখ্যা — অধ্যায় ১৩-এ আলোচিত Article 3.2 সমন্বয়সমূহ যেমন স্টক-বেসড কম্পেনসেশন, পেনাল্টি ও জরিমানা, ফাইন্যান্স চার্জ ইত্যাদি।

দ্বিতীয়ত, **কর তথ্য** — প্রতিটি সত্তার জন্য বর্তমান কর ব্যয় (current tax expense), Deferred Tax Expense/Benefit-এর ভাঙন, এবং অধ্যায় ১৮-২০-এ আলোচিত Covered Taxes-এর সংজ্ঞা অনুযায়ী কোন কর অন্তর্ভুক্ত হবে ও কোনটি বাদ যাবে তার বিস্তারিত শ্রেণিবিন্যাস।

তৃতীয়ত, **Deferred Tax-সম্পর্কিত ডেটা** — অধ্যায় ২১-এ আলোচিত Deferred Tax Mechanics প্রয়োগ করতে হলে প্রতিটি সত্তার জন্য Deferred Tax Asset/Liability-র temporary difference-ভিত্তিক ভাঙন, প্রযোজ্য ট্যাক্স রেট, এবং GloBE-নির্দিষ্ট recast/recapture নিয়ম প্রয়োগের জন্য প্রয়োজনীয় ঐতিহাসিক তথ্য প্রয়োজন হয় (বিস্তারিত ৫৫.৩-এ)।

চতুর্থত, **Substance-Based Income Exclusion (SBIE)** সংক্রান্ত ডেটা — অধ্যায় ২৭-এ আলোচিত এই বিধান প্রয়োগের জন্য প্রতিটি জুরিসডিকশনে Eligible Payroll Cost এবং Eligible Tangible Asset-এর মূল্যের জুরিসডিকশন-ভিত্তিক ভাঙন প্রয়োজন — কর্মীর অবস্থান এবং সম্পদের ভৌগোলিক অবস্থান অনুযায়ী।

পঞ্চমত, **কর্পোরেট গঠন ও মালিকানা তথ্য** — অধ্যায় ৬ ও ১০-এ আলোচিত MNE Group-এর সংজ্ঞা, UPE/IPE/POPE শনাক্তকরণ, এবং মালিকানা শতকরা হার প্রয়োগের জন্য প্রতিটি Constituent Entity-র মালিকানা কাঠামো, বছরের মধ্যে মালিকানা পরিবর্তন, এবং গ্রুপে প্রবেশ/প্রস্থানের (অধ্যায় ৩৬) তারিখ ও প্রকৃতি সংক্রান্ত তথ্য।

ষষ্ঠত, **নির্বাচন (election) তথ্য** — অধ্যায় ১৪, ২৩, ৪০ ইত্যাদিতে আলোচিত বিভিন্ন Article 3 নির্বাচন, GloBE Loss Election, বা Investment Entity সংক্রান্ত নির্বাচন কোন কোন সত্তার ক্ষেত্রে প্রযোজ্য এবং কোন বছর থেকে কার্যকর — এই তথ্য একটি কেন্দ্রীয় নির্বাচন-নিবন্ধন (election register) আকারে সংরক্ষিত থাকা প্রয়োজন, কারণ একবার নেওয়া নির্বাচন প্রায়শই একাধিক বছর ধরে প্রযোজ্য থাকে এবং এর প্রভাব শুধুমাত্র চলতি বছরের হিসাব দেখলে বোঝা যায় না।

নিচের সারণিতে এই ডেটা-শ্রেণিগুলোর একটি সংক্ষিপ্ত ইনভেন্টরি দেওয়া হয়েছে, যেখানে প্রতিটি ডেটা পয়েন্টের সাধারণ উৎস সিস্টেম, সাধারণত কে তার মালিক (owner), এবং ঘাটতির ঝুঁকি কতটা উচ্চ তা মূল্যায়ন করা হয়েছে।

| ডেটা পয়েন্ট | সাধারণ উৎস সিস্টেম | সাধারণ মালিক (owner) | ঘাটতির ঝুঁকি |
|---|---|---|---|
| সত্তা-স্তরে GAAP-সঙ্গত আয়-বিবরণী | একত্রীকরণ সিস্টেম (consolidation system) | গ্রুপ রিপোর্টিং টিম | নিম্ন — সাধারণত ইতিমধ্যেই বিদ্যমান |
| Article 3.2 সমন্বয়ের অন্তর্নিহিত বিবরণ (স্টক কম্পেনসেশন, জরিমানা ইত্যাদি) | স্থানীয় লেজার / ম্যানুয়াল ওয়ার্কিং পেপার | স্থানীয় হিসাব দল | মধ্যম-উচ্চ |
| বর্তমান কর ব্যয় ও Covered Tax শ্রেণিবিন্যাস | ট্যাক্স প্রভিশন সিস্টেম | কর বিভাগ | মধ্যম |
| Deferred Tax temporary difference-ভিত্তিক ভাঙন (পাঁচ বছরের ইতিহাস) | ট্যাক্স প্রভিশন সিস্টেম / স্থানীয় রিটার্ন | কর বিভাগ | উচ্চ |
| জুরিসডিকশন-ভিত্তিক Payroll খরচ | HR/পে-রোল সিস্টেম | মানবসম্পদ বিভাগ | উচ্চ |
| জুরিসডিকশন-ভিত্তিক Tangible Asset মূল্য | স্থায়ী সম্পদ রেজিস্টার (fixed asset register) | ফিনান্স/অপারেশন্স | উচ্চ |
| মালিকানা কাঠামো ও বছরের মধ্যে পরিবর্তন | কর্পোরেট সেক্রেটারিয়াল রেকর্ড | লিগ্যাল/কর্পোরেট গভর্নেন্স | মধ্যম-উচ্চ |
| CbCR-এর দেশ-ভিত্তিক তথ্য | CbCR প্রস্তুতির ডেটাসেট | কর বিভাগ | নিম্ন-মধ্যম |
| নির্বাচন (election) ইতিহাস | সাধারণত কোনো একক সিস্টেমে নেই | গ্রুপ কর বিভাগ | উচ্চ |

এই তালিকা দেখে বোঝা যায় — সমস্যাটি একরকম নয়। কিছু ডেটা ইতিমধ্যে ভালোভাবে ধরা আছে, কিছু আংশিকভাবে আছে কিন্তু GloBE-প্রয়োজনীয় গ্রানুলারিটিতে নেই, এবং কিছু ডেটা কোনো একটি সিস্টেমেই নিয়মিতভাবে ধরা পড়ে না। পরবর্তী দুটি অনুচ্ছেদে এই পার্থক্যটিই বিস্তারিতভাবে আলোচনা করা হয়েছে।

## ৫৫.২ কোন ডেটা ইতিমধ্যেই আছে (consolidation · CbCR · tax provision)

সুখবর হলো, একটি মাঝারি থেকে বড় MNE Group-এর জন্য Pillar Two-র ডেটা প্রয়োজনীয়তার একটি বড় অংশ শূন্য থেকে তৈরি করতে হয় না — কারণ এই গ্রুপগুলো ইতিমধ্যেই তিনটি সম্পর্কিত কিন্তু ভিন্ন উদ্দেশ্যে ডেটা তৈরি করে থাকে।

**একত্রীকরণ সিস্টেম (consolidation system)** থেকে সাধারণত সত্তা-স্তরে আয়-বিবরণী ও ব্যালান্স শিট তথ্য পাওয়া যায়, কারণ আর্থিক বিবরণীর সমন্বয়ীকরণের জন্য প্রতিটি সাবসিডিয়ারির তথ্য কেন্দ্রীয়ভাবে জমা হয়। অধ্যায় ৬-এ আলোচিত MNE Group-এর সংজ্ঞা যেহেতু হিসাবমান-সঙ্গত একত্রীকরণের ধারণার ওপর ভিত্তি করে তৈরি, তাই এই সিস্টেমের এনটিটি-তালিকা এবং মালিকানা শতকরা হার সাধারণত Pillar Two-র প্রাথমিক স্কোপিং-এর জন্য একটি ভালো সূচনা বিন্দু। তবে একত্রীকরণ সিস্টেম সাধারণত UPE-র হিসাবমান অনুযায়ী তথ্য একত্রিত করে দেয়, যা অধ্যায় ১২-তে আলোচিত Financial Accounting Net Income-এর সংজ্ঞার সঙ্গে সরাসরি মিলে যায় — এটি একটি গুরুত্বপূর্ণ সুবিধা, কারণ স্থানীয় GAAP থেকে UPE GAAP-এ পুনরায় রূপান্তর করার প্রয়োজন পড়ে না।

**Country-by-Country Reporting (CbCR)** (দেশ-ভিত্তিক প্রতিবেদন) থেকে জুরিসডিকশন-স্তরে সমষ্টিগত রাজস্ব, মুনাফা, প্রদত্ত কর, কর্মীসংখ্যা এবং Tangible Asset-এর তথ্য পাওয়া যায় — এবং অধ্যায় ৪৫-এ আলোচিত Transitional CbCR Safe Harbour সরাসরি এই ডেটাসেটের ওপর নির্ভরশীল। CbCR তথ্য বিশেষভাবে মূল্যবান কারণ এটি ইতিমধ্যেই জুরিসডিকশন-ভিত্তিক ভাঙনে প্রস্তুত, যা GloBE গণনার স্বাভাবিক একক (unit)। তবে CbCR-এর তথ্য সাধারণত সমষ্টিগত (aggregated) স্তরে থাকে এবং প্রতিটি Article 3.2 সমন্বয়ের বিস্তারিত ভাঙন ধরে না, ফলে এটি একটি ভালো ক্রস-চেক হলেও সম্পূর্ণ গণনার বিকল্প নয় (দেখুন ৫৫.৫)।

**ট্যাক্স প্রভিশন সিস্টেম** (tax provision system) থেকে সাধারণত প্রতিটি সত্তার বর্তমান ও Deferred Tax ব্যয়ের হিসাব, effective tax rate reconciliation, এবং কিছু ক্ষেত্রে temporary difference-এর একটি সাধারণ শ্রেণিবিন্যাস পাওয়া যায় — যা অধ্যায় ১৮-২১-এ আলোচিত Covered Taxes ও Deferred Tax গণনার ভিত্তি তৈরি করতে সহায়ক। বার্ষিক আর্থিক বিবরণীর জন্য প্রস্তুত করা এই তথ্য একটি ভালো সূচনা বিন্দু, বিশেষত যেখানে গ্রুপ ইতিমধ্যেই IFRS বা US GAAP-এর অধীনে বিস্তারিত ট্যাক্স রিকনসিলিয়েশন তৈরি করে।

এই তিনটি উৎসের মিলিত শক্তি হলো — এগুলো একসঙ্গে প্রায় ৬০-৭০ শতাংশ প্রয়োজনীয় কাঁচা তথ্য কভার করতে পারে বলে বাস্তবে দেখা যায়। কিন্তু বাকি অংশটি — যা প্রায়ই সবচেয়ে সময়সাপেক্ষ এবং শ্রমনিবিড় হয়ে ওঠে — সেই ঘাটতিগুলোই পরের অনুচ্ছেদের বিষয়।

## ৫৫.৩ কোথায় ঘাটতি হয় — সাধারণ শূন্যস্থানসমূহ

### সত্তা-স্তরে হিসাবমান-সঙ্গত তথ্য

একত্রীকরণ সিস্টেমে সত্তা-স্তরের তথ্য থাকলেও, তা প্রায়ই কনসোলিডেশন-এন্ট্রি (intercompany elimination, purchase accounting adjustment ইত্যাদি) সহ থাকে, যা GloBE গণনার জন্য পৃথক করে বাদ দিতে বা সমন্বয় করতে হয়। অধ্যায় ১২-তে আলোচিত হয়েছে যে Financial Accounting Net Income নির্ধারণ করতে হয় সত্তা-স্তরে, কনসোলিডেশন-স্তরের এলিমিনেশনের আগের অবস্থায় — কিন্তু অনেক একত্রীকরণ সিস্টেম এই "প্রি-এলিমিনেশন" সংস্করণ সহজে নিষ্কাশনযোগ্য (extractable) আকারে রাখে না, বরং এলিমিনেশনের পরের সমন্বিত সংখ্যাই প্রধানভাবে সংরক্ষণ করে। ফলে যে তথ্য "সত্তা-স্তরে আছে" বলে মনে হয়, বাস্তবে তা GloBE-এর প্রয়োজনীয় রূপে নয়।

আরও একটি সাধারণ সমস্যা হলো ছোট বা মাঝারি আকারের সাবসিডিয়ারি — যেগুলোর জন্য গ্রুপ রিপোর্টিং প্রায়ই একটি সরলীকৃত বা সমষ্টিগত টেমপ্লেট ব্যবহার করে, কারণ ব্যবস্থাপনা রিপোর্টিংয়ের জন্য পূর্ণ বিস্তারিত প্রয়োজন হয় না। কিন্তু Pillar Two-তে প্রতিটি Constituent Entity — তার আকার নির্বিশেষে — পৃথকভাবে গণনার আওতায় আসে (যদিও অধ্যায় ২৮-এ আলোচিত De Minimis Exclusion কিছু ক্ষেত্রে সরলীকরণের সুযোগ দেয়), তাই এই "ছোট এনটিটি" তথ্যের গভীরতার অভাব একটি বাস্তব ঘাটতি তৈরি করে।

### Deferred Tax-এর বিস্তারিত ও পাঁচ বছরের ইতিহাস

অধ্যায় ২১-এ আলোচিত Deferred Tax Mechanics সঠিকভাবে প্রয়োগ করার জন্য প্রয়োজন প্রতিটি temporary difference-এর মূল উৎস, তার প্রয়োগযোগ্য ট্যাক্স রেট, এবং GloBE-নির্দিষ্ট recast নিয়ম প্রয়োগের জন্য ঐতিহাসিক প্রেক্ষাপট। অধ্যায় ২২-এ আলোচিত Recast ও Recapture এবং Unclaimed Accrual বিধান বিশেষভাবে দাবি করে যে, কোনো Deferred Tax Liability যদি একটি নির্দিষ্ট সময়সীমার (সাধারণত পাঁচ বছর) মধ্যে বিপরীত (reverse) না হয়ে থাকে, তাহলে তা recapture করতে হবে এবং পূর্ববর্তী বছরের ETR পুনর্গণনা করতে হতে পারে।

সমস্যা হলো, প্রচলিত ট্যাক্স প্রভিশন সিস্টেমগুলো সাধারণত চলতি বছরের এবং পূর্ববর্তী এক-দুই বছরের temporary difference movement সংরক্ষণ করে — কারণ আর্থিক বিবরণীর উদ্দেশ্যে এর বেশি প্রয়োজন হয় না। GloBE-এর পাঁচ বছরের রোলিং ট্র্যাকিং প্রয়োজনীয়তা এই সিস্টেমগুলোর স্বাভাবিক ডেটা-ধারণ নীতির (data retention policy) সঙ্গে সরাসরি সাংঘর্ষিক। বিশেষত Pillar Two কার্যকর হওয়ার আগের বছরগুলোর (transition year-পূর্ব) Deferred Tax ব্যালান্স যদি GloBE-নির্দিষ্ট বিস্তারিত আকারে পুনর্গঠন করা না হয়ে থাকে, তাহলে ভবিষ্যতে recapture গণনার জন্য প্রয়োজনীয় ঐতিহাসিক ভিত্তিরেখা (baseline) তৈরি করাই একটি বড় কাজ হয়ে দাঁড়ায়।

### Payroll ও Tangible Assets-এর জুরিসডিকশন-ভিত্তিক ভাঙন

অধ্যায় ২৭-এ আলোচিত SBIE গণনার জন্য প্রয়োজন প্রতিটি জুরিসডিকশনে Eligible Employee-দের payroll cost এবং Eligible Tangible Asset-এর carrying value। সমস্যা হলো, বহু গ্রুপের HR ও পে-রোল সিস্টেম আইনি সত্তা (legal entity) অনুযায়ী গঠিত, জুরিসডিকশন অনুযায়ী নয় — এবং একটি সত্তার কর্মীরা একাধিক জুরিসডিকশনে কাজ করতে পারে (যেমন secondment বা cross-border কর্মী), যা সরল এনটিটি-ভিত্তিক তথ্য থেকে সরাসরি বের করা যায় না।

তেমনিভাবে, স্থায়ী সম্পদ রেজিস্টার (fixed asset register) প্রায়ই সত্তা-ভিত্তিক বা প্রকল্প-ভিত্তিক (project-based) কাঠামোয় তৈরি, এবং একটি সত্তার সম্পদ একাধিক জুরিসডিকশনে ছড়িয়ে থাকতে পারে — বিশেষত Permanent Establishment (অধ্যায় ৮ ও ১৬-তে আলোচিত) সংশ্লিষ্ট ক্ষেত্রে, যেখানে একটি প্রধান সত্তার (main entity) সম্পদ PE-র জুরিসডিকশনে ভৌতভাবে অবস্থিত থাকতে পারে। এই ধরনের সম্পদ ও কর্মীর ভৌগোলিক ম্যাপিং সাধারণত কোনো একটি সিস্টেমেই স্বয়ংক্রিয়ভাবে থাকে না, এবং প্রায়শই ম্যানুয়াল জরিপ বা সাক্ষাৎকারের মাধ্যমে সংগ্রহ করতে হয়।

### মালিকানা কাঠামো ও পরিবর্তনের নথি

অধ্যায় ৬, ১০ এবং ৩৬-এ আলোচিত হয়েছে যে মালিকানা শতকরা হার এবং বছরের মধ্যে মালিকানা পরিবর্তন (অধিগ্রহণ, বিক্রয়, পুনর্গঠন) সরাসরি প্রভাবিত করে কোন সত্তা কোন গ্রুপের অংশ, কোন সময়কালের জন্য, এবং কোন allocation নিয়ম প্রযোজ্য হবে। কর্পোরেট সেক্রেটারিয়াল রেকর্ড সাধারণত মালিকানা কাঠামোর "চূড়ান্ত" অবস্থা রাখে, কিন্তু বছরের মধ্যে ঘটে যাওয়া প্রতিটি পরিবর্তনের সুনির্দিষ্ট তারিখ, এবং সেই পরিবর্তনের প্রকৃতি (শেয়ার ক্রয়-বিক্রয় বনাম সম্পদ স্থানান্তর, অধ্যায় ৩৭-এ আলোচিত) সব ক্ষেত্রে সহজে অনুসন্ধানযোগ্য আকারে থাকে না — বিশেষত যখন লেনদেনগুলো ম্যানুয়াল আইনি নথির মধ্যে সীমাবদ্ধ থাকে এবং কোনো কেন্দ্রীয় ডেটাবেসে স্ট্রাকচার্ড আকারে ইনপুট করা হয় না।

এই ঘাটতি বিশেষভাবে ঝুঁকিপূর্ণ কারণ ভুল বা অসম্পূর্ণ মালিকানা তথ্য পুরো গণনার ভিত্তিকেই দুর্বল করে দিতে পারে — যদি কোনো সত্তা ভুলভাবে অন্তর্ভুক্ত বা বাদ দেওয়া হয়, বা আংশিক-বছরের allocation ভুল হয়, তাহলে সেই ভুল নিচের প্রতিটি স্তরে (ETR, Top-up Tax) প্রবাহিত হয়।

## ৫৫.৪ ডেটার মান, সময়সীমা ও নিয়ন্ত্রণ

ডেটা সংগ্রহ করা একটি অংশ; তার মান নিশ্চিত করা সম্পূর্ণ ভিন্ন এবং প্রায়শই বেশি কঠিন একটি কাজ। কয়েকটি নীতিগত বিষয় এখানে গুরুত্বপূর্ণ।

প্রথমত, **উৎস-সংগতি (source consistency)**। একই ডেটা পয়েন্ট (যেমন একটি সত্তার রাজস্ব) বিভিন্ন উদ্দেশ্যে বিভিন্ন সময়ে বিভিন্ন সিস্টেম থেকে টানা হলে সংখ্যায় ছোট পার্থক্য দেখা দিতে পারে — যেমন একত্রীকরণ সিস্টেমের "ফাইনাল" সংখ্যা এবং ট্যাক্স প্রভিশনের জন্য ব্যবহৃত "প্রাথমিক" সংখ্যার মধ্যে পার্থক্য, যদি ট্যাক্স ক্লোজ একত্রীকরণ ক্লোজের আগে ঘটে। GloBE গণনার জন্য একটি নির্দিষ্ট, নথিভুক্ত "সোর্স অব ট্রুথ" (source of truth) নির্ধারণ করা এবং প্রতিটি ডেটা পয়েন্টের জন্য তার উৎস স্পষ্টভাবে চিহ্নিত রাখা প্রয়োজন।

দ্বিতীয়ত, **সময়সীমার সমন্বয় (timing alignment)**। অধ্যায় ৫০-৫২-তে আলোচিত GIR দাখিলের সময়সীমা বিবেচনায়, ডেটা সংগ্রহের ক্যালেন্ডার সাধারণ আর্থিক ক্লোজের ক্যালেন্ডারের সঙ্গে সাংঘর্ষিক হতে পারে — কারণ চূড়ান্ত অডিটেড আর্থিক তথ্য পাওয়ার আগেই GloBE প্রাথমিক গণনা শুরু করার প্রয়োজন হতে পারে। এই কারণে অনেক গ্রুপ একটি "প্রাথমিক" (preliminary) এবং একটি "চূড়ান্ত" (final) ডেটা সংগ্রহ চক্র আলাদাভাবে চালায়, যেখানে পার্থক্যগুলো পরবর্তীতে সমন্বয় করা হয়।

তৃতীয়ত, **নিয়ন্ত্রণ ও অনুমোদন (control and sign-off)**। যেহেতু নিরীক্ষার সময় প্রমাণের দায়িত্ব করদাতার ওপর থাকে (অধ্যায় ৫৪-এ আলোচিত), প্রতিটি ডেটা পয়েন্টের জন্য কে সংগ্রহ করেছে, কে যাচাই করেছে, এবং কোন তারিখে অনুমোদন করেছে — এই ট্রেইল রাখা অপরিহার্য। একটি কার্যকর নিয়ন্ত্রণ কাঠামোতে সাধারণত তিনটি স্তর থাকে — স্থানীয় প্রস্তুতকারী (যিনি মূল সংখ্যা সংগ্রহ করেন), আঞ্চলিক বা কার্যকরী পর্যালোচক (যিনি প্রাথমিক যাচাই করেন), এবং একটি কেন্দ্রীয় গ্রুপ-স্তরের চূড়ান্ত পর্যালোচক (যিনি সমগ্র গ্রুপের সংগতি পরীক্ষা করেন)।

চতুর্থত, **সংস্করণ নিয়ন্ত্রণ (version control)**। GloBE গণনা প্রায়ই একাধিকবার পুনর্গণনা করতে হয় — নতুন তথ্য পাওয়ার সাথে সাথে, বা প্রশাসনিক নির্দেশিকার (Administrative Guidance) পরিবর্তনের কারণে। যদি কোন সংস্করণের ডেটার ওপর ভিত্তি করে কোন গণনা করা হয়েছে তা স্পষ্টভাবে ট্র্যাক না করা হয়, তাহলে পরবর্তীতে "কেন এই সংখ্যা এলো" প্রশ্নের উত্তর দেওয়া কঠিন হয়ে পড়ে — যা নিরীক্ষার সময় বিশেষভাবে ক্ষতিকর।

পঞ্চমত, **পরিবর্তনের প্রভাব ট্র্যাকিং**। অধ্যায় ২৪-এ আলোচিত Post-Filing Adjustments-এর প্রেক্ষাপটে, একটি স্থানীয় হিসাবের সংশোধন (যেমন একটি অডিট সমন্বয়) কীভাবে পূর্ববর্তী বছরের GloBE গণনায় প্রভাব ফেলে তা ট্র্যাক করার জন্য একটি কাঠামোবদ্ধ প্রক্রিয়া থাকা প্রয়োজন — অন্যথায় এই ধরনের পরিবর্তন সহজেই দৃষ্টির বাইরে থেকে যেতে পারে।

## ৫৫.৫ CbCR-এর সাথে সামঞ্জস্য ও অসামঞ্জস্য

CbCR এবং GloBE গণনা একই অন্তর্নিহিত ব্যবসায়িক তথ্যের ওপর ভিত্তি করে তৈরি, এবং অধ্যায় ৪৫-এ আলোচিত Transitional CbCR Safe Harbour সরাসরি এই সাদৃশ্যের ওপর নির্ভর করে। তবে এই দুটি ফ্রেমওয়ার্কের মধ্যে বেশ কিছু কাঠামোগত পার্থক্য আছে, যা ডেটা প্রস্তুতির সময় সাবধানে বিবেচনা করা প্রয়োজন।

প্রথম পার্থক্য হলো **সমষ্টিকরণের স্তর**। CbCR-এর তথ্য জুরিসডিকশন-স্তরে সমষ্টিগত, যেখানে GloBE গণনা মূলত সত্তা-স্তরে শুরু হয়ে পরে জুরিসডিকশন-স্তরে ব্লেন্ড করা হয় (অধ্যায় ২৫-এ আলোচিত Jurisdictional Blending)। ফলে চূড়ান্ত জুরিসডিকশন-স্তরের সংখ্যা একই রকম দেখালেও, তার পেছনের গণনা-পদ্ধতি ভিন্ন হতে পারে এবং সবসময় এক নম্বরে মিলবে এমন নিশ্চয়তা নেই।

দ্বিতীয় পার্থক্য হলো **সমন্বয়ের অনুপস্থিতি**। CbCR-এর মুনাফার সংখ্যা সাধারণত অধ্যায় ১৩-এ আলোচিত Article 3.2 সমন্বয়সমূহ প্রতিফলিত করে না — এটি মূলত অপরিবর্তিত (unadjusted) হিসাবমান-সঙ্গত মুনাফা। ফলে CbCR মুনাফা এবং GloBE Income-এর মধ্যে পার্থক্য থাকা সম্পূর্ণ স্বাভাবিক, এবং এই পার্থক্যকে "ভুল" বলে ধরে নেওয়া উচিত নয় — বরং এটি প্রত্যাশিত।

তৃতীয় পার্থক্য হলো **কর তথ্যের সংজ্ঞা**। CbCR-এ "Income Tax Paid" এবং "Income Tax Accrued" নামে দুটি পৃথক তথ্য থাকে, যা সরাসরি অধ্যায় ১৮-এ আলোচিত Covered Taxes-এর সংজ্ঞার সঙ্গে মেলে না — Covered Taxes-এর সংজ্ঞা আরও সুনির্দিষ্ট এবং কিছু নির্দিষ্ট কর প্রকার বাদ বা অন্তর্ভুক্ত করে যা CbCR বিবেচনা করে না।

এই পার্থক্যগুলোর ব্যবহারিক তাৎপর্য হলো — CbCR তথ্যকে GloBE গণনার একটি "স্যানিটি চেক" বা প্রাথমিক স্ক্রিনিং হাতিয়ার হিসেবে ব্যবহার করা উপযোগী (বিশেষত Safe Harbour যোগ্যতা যাচাইয়ের জন্য), কিন্তু এটিকে সরাসরি GloBE গণনার প্রতিস্থাপক হিসেবে ব্যবহার করা যাবে না। যেখানে দুটি ডেটাসেটের মধ্যে বড় পার্থক্য দেখা যায়, সেখানে প্রথমেই সন্দেহ করা উচিত যে কোনো একটি ডেটাসেটে সমষ্টিকরণ বা শ্রেণিবিন্যাসগত পার্থক্য আছে কি না — ভুল খোঁজার আগে কাঠামোগত পার্থক্য বোঝা জরুরি। একটি কার্যকর অভ্যন্তরীণ নিয়ন্ত্রণ হলো — প্রতি বছর CbCR এবং GloBE জুরিসডিকশন-স্তরের সংখ্যার মধ্যে একটি রিকনসিলিয়েশন (reconciliation) তৈরি করে রাখা, যাতে ভবিষ্যতে কোনো কর কর্তৃপক্ষ প্রশ্ন তুললে ব্যাখ্যা প্রস্তুত থাকে।

## ৫৫.৬ ডেটা সংগ্রহের বাস্তব কৌশল

উপরের ঘাটতিগুলো বিবেচনা করে, একটি বাস্তবসম্মত ডেটা-সংগ্রহ কৌশল সাধারণত নিচের নীতিগুলোর ওপর ভিত্তি করে গড়ে ওঠে।

**পর্যায়ক্রমিক (phased) বাস্তবায়ন।** প্রথম বছরে সব কিছু নিখুঁতভাবে স্বয়ংক্রিয় করার চেষ্টা করা প্রায়ই অবাস্তব লক্ষ্য। বরং একটি বাস্তবসম্মত পদ্ধতি হলো প্রথমে বিদ্যমান সিস্টেম (একত্রীকরণ, CbCR, ট্যাক্স প্রভিশন) থেকে যা পাওয়া যায় তা ব্যবহার করে একটি প্রাথমিক গণনা কাঠামো তৈরি করা, ঘাটতিগুলো ম্যানুয়াল টেমপ্লেট বা প্রশ্নপত্রের (questionnaire) মাধ্যমে পূরণ করা, এবং পরবর্তী বছরগুলোতে ধীরে ধীরে সেই ম্যানুয়াল অংশগুলো সিস্টেমেটিক প্রক্রিয়ায় রূপান্তর করা।

**স্পষ্ট ডেটা মালিকানা (data ownership)।** ৫৫.১-এর সারণিতে দেখানো হয়েছে যে বিভিন্ন ডেটা পয়েন্টের মালিক বিভিন্ন বিভাগ — ফিনান্স, কর, মানবসম্পদ, লিগ্যাল। একটি কেন্দ্রীয় Pillar Two প্রকল্প দলের গুরুত্বপূর্ণ দায়িত্ব হলো প্রতিটি ডেটা পয়েন্টের জন্য একজন সুনির্দিষ্ট দায়িত্বশীল ব্যক্তি বা দল নিয়োগ করা, এবং সেই দায়িত্ব লিখিতভাবে নথিভুক্ত করা — যাতে "কে এই তথ্য দিবে" প্রশ্নে বিভ্রান্তি না হয়, বিশেষত payroll এবং tangible asset-এর জুরিসডিকশন-ভাঙনের মতো ক্ষেত্রে যেখানে তথ্যের উৎস প্রথাগত কর বিভাগের বাইরে থাকে।

**একটি কেন্দ্রীয় সংগ্রহ টেমপ্লেট বা কাঠামো।** যেহেতু কোনো একক বিদ্যমান সিস্টেম GloBE-এর সম্পূর্ণ প্রয়োজনীয়তা পূরণ করে না, তাই একটি কেন্দ্রীয় সংগ্রহ কাঠামো (হতে পারে একটি কাঠামোবদ্ধ স্প্রেডশিট-ভিত্তিক টেমপ্লেট, বা একটি উদ্দেশ্যমূলক ডেটা সংগ্রহ প্রক্রিয়া) প্রয়োজন হয়, যা প্রতিটি সত্তার জন্য প্রয়োজনীয় সব ডেটা পয়েন্ট একটি অভিন্ন কাঠামোয় সংগ্রহ করে, যাতে বিভিন্ন সত্তার তথ্য তুলনাযোগ্য ও সমন্বয়যোগ্য থাকে।

**ঐতিহাসিক ভিত্তিরেখা তৈরিতে অগ্রাধিকার।** ৫৫.৩-এ আলোচিত Deferred Tax-এর পাঁচ বছরের ইতিহাস এবং মালিকানা পরিবর্তনের নথির ঘাটতি একবারই সমাধান করার মতো কাজ — অর্থাৎ এগুলো "এখন করে ফেললে" ভবিষ্যতে প্রতি বছর পুনরাবৃত্তি করার প্রয়োজন কম হবে। তাই বাস্তবায়নের প্রথম পর্যায়ে এই ঐতিহাসিক পুনর্গঠন কাজকে অগ্রাধিকার দেওয়া বুদ্धিমানের পরিচয়, বরং শেষ মুহূর্তে ফেলে রাখার চেয়ে।

**বারবার ব্যবহারযোগ্য সমন্বয় লজিক।** Article 3.2-এর প্রতিটি সমন্বয়ের জন্য একটি সুনির্দিষ্ট, নথিভুক্ত গণনা-নিয়ম তৈরি করা এবং প্রতিটি সত্তায় একইভাবে প্রয়োগ করা উচিত, যাতে বিভিন্ন সত্তায় ভিন্ন ব্যাখ্যায় ভিন্ন পদ্ধতিতে একই সমন্বয় প্রয়োগ না হয় — যা পরবর্তীতে গ্রুপ-স্তরের সংগতি পরীক্ষায় সমস্যা তৈরি করতে পারে।

**নিরীক্ষণযোগ্যতা প্রথম থেকেই বিবেচনা করা।** যেহেতু ৫৫.৪-এ আলোচিত হয়েছে যে প্রমাণের দায়িত্ব করদাতার ওপর, ডেটা সংগ্রহ প্রক্রিয়া ডিজাইন করার সময় থেকেই এমনভাবে গঠন করা উচিত যাতে প্রতিটি সংখ্যার উৎস ও অনুমোদন-ট্রেইল স্বয়ংক্রিয়ভাবে সংরক্ষিত হয় — এটি পরে যুক্ত করার চেয়ে শুরু থেকে ডিজাইনে অন্তর্ভুক্ত করা অনেক সহজ।

## সারসংক্ষেপ

Pillar Two-র বাস্তবায়নে ডেটা প্রয়োজনীয়তা তত্ত্বীয় জটিলতার চেয়েও বেশি বাস্তব বাধা হয়ে দাঁড়ায়, কারণ প্রয়োজনীয় ডেটার একটি বড় অংশ বিদ্যমান সিস্টেমের নকশায় ধরা পড়ে না। একত্রীকরণ সিস্টেম, CbCR এবং ট্যাক্স প্রভিশন থেকে একসঙ্গে উল্লেখযোগ্য পরিমাণ প্রাথমিক ডেটা পাওয়া যায়, কিন্তু সত্তা-স্তরে প্রি-এলিমিনেশন তথ্য, Deferred Tax-এর পাঁচ বছরের বিস্তারিত ইতিহাস, payroll ও tangible asset-এর জুরিসডিকশন-ভিত্তিক ভাঙন, এবং মালিকানা পরিবর্তনের সুনির্দিষ্ট নথি — এই চারটি ক্ষেত্রে ঘাটতি সবচেয়ে বেশি দেখা যায়। ডেটার মান নিশ্চিত করতে হলে সোর্স অব ট্রুথ নির্ধারণ, সময়সীমার সমন্বয়, স্তরভিত্তিক অনুমোদন-প্রক্রিয়া, এবং সংস্করণ নিয়ন্ত্রণ অপরিহার্য। CbCR তথ্যকে একটি মূল্যবান স্যানিটি-চেক হিসেবে ব্যবহার করা উচিত, কিন্তু এর সমষ্টিকরণ ও সমন্বয়হীনতার কারণে GloBE গণনার প্রতিস্থাপক হিসেবে নয়। বাস্তবসম্মত কৌশল হলো পর্যায়ক্রমে বাস্তবায়ন, স্পষ্ট ডেটা মালিকানা নির্ধারণ, একটি কেন্দ্রীয় সংগ্রহ কাঠামো তৈরি, ঐতিহাসিক ভিত্তিরেখা প্রথম দিকে তৈরি করা, এবং প্রথম থেকেই নিরীক্ষণযোগ্যতা বিবেচনায় নেওয়া।

## সাধারণ ভুল

- ধরে নেওয়া যে একত্রীকরণ সিস্টেমের সত্তা-স্তরের তথ্যই সরাসরি GloBE Income গণনার জন্য প্রস্তুত, প্রি-এলিমিনেশন সমন্বয় যাচাই না করে।
- ট্যাক্স প্রভিশন সিস্টেমের স্বাভাবিক এক-দুই বছরের Deferred Tax ইতিহাসকে যথেষ্ট মনে করে পাঁচ বছরের রোলিং ট্র্যাকিং কাঠামো তৈরি করতে দেরি করা।
- Payroll ও Tangible Asset-এর জুরিসডিকশন-ভাঙন সংগ্রহের দায়িত্ব শুধুমাত্র কর বিভাগের ওপর ছেড়ে দেওয়া, মানবসম্পদ ও অপারেশন্স বিভাগকে প্রক্রিয়ায় অন্তর্ভুক্ত না করে।
- মালিকানা পরিবর্তনের তথ্যকে শুধুমাত্র আইনগত সম্পন্নতার দৃষ্টিকোণ থেকে দেখা, GloBE allocation-এর জন্য প্রয়োজনীয় সুনির্দিষ্ট তারিখ ও প্রকৃতি নথিভুক্ত না করে।
- CbCR এবং GloBE-এর মধ্যে সংখ্যার পার্থক্য দেখলে সঙ্গে সঙ্গে ভুল ধরে নেওয়া, দুই ফ্রেমওয়ার্কের কাঠামোগত পার্থক্য (সমষ্টিকরণ, সমন্বয়, কর সংজ্ঞা) বিবেচনায় না নিয়ে।
- ডেটা সংগ্রহের জন্য একটি একক ব্যক্তির ওপর অতিরিক্ত নির্ভরতা তৈরি করা, লিখিত মালিকানা-নিবন্ধন বা প্রক্রিয়া নথিভুক্তকরণ ছাড়া — যা সেই ব্যক্তি অনুপস্থিত বা পরিবর্তিত হলে গুরুতর ঝুঁকি তৈরি করে।
- সংস্করণ নিয়ন্ত্রণ উপেক্ষা করা এবং পুনর্গণনার সময় কোন ডেটা সংস্করণের ভিত্তিতে পূর্বের গণনা হয়েছিল তা ট্র্যাক না করা, যা নিরীক্ষার সময় ব্যাখ্যা দেওয়া কঠিন করে তোলে।
- প্রথম বছরেই সম্পূর্ণ স্বয়ংক্রিয় ও নিখুঁত ডেটা প্রবাহ প্রত্যাশা করা, পর্যায়ক্রমিক বাস্তবায়নের বাস্তবসম্মত পরিকল্পনা না করে।
