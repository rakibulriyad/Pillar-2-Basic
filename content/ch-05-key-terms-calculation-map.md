---
title:
  en: "Key Terminology and the Overall Calculation Map"
  bn: "মৌলিক পরিভাষা ও গণনার সামগ্রিক মানচিত্র"
chapter: 5
part: 1
partTitle:
  en: "Background and Foundations"
  bn: "প্রেক্ষাপট ও ভিত্তি"
slug: "ch-05-key-terms-calculation-map"
---

<!-- lang:en -->

# Chapter 5 — Key Terminology and the Overall Calculation Map

> **In this chapter:** every calculation in Pillar Two rests on a handful of core concepts — who falls within scope, which country the calculation is grouped by, who bears responsibility for filing, and how additional tax is imposed on profit sitting in a low-tax jurisdiction. In this chapter we introduce those terms together and present a ten-step map of the entire calculation process, which the rest of the book discusses step by step in detail. Keeping this map in mind will make every subsequent chapter easier to follow.

## 5.1 MNE Group · Constituent Entity · Jurisdiction · Fiscal Year

The Pillar Two rules first seek the answer to a question: who is the calculation about? The answer begins with the concept of an **MNE Group (Multinational Enterprise Group)**. An MNE Group refers to a group in which at least one Entity or Permanent Establishment is located in more than one jurisdiction, and whose financial results are, or should be, included in the consolidated financial statements of an Ultimate Parent Entity. In other words, the boundary of the group is drawn not merely by legal name or corporate structure, but by how consolidation actually occurs.

Each member within this group is called a **Constituent Entity**. An Entity can be a company, trust, partnership, or any other legal or non-legal arrangement, as long as separate financial accounts can be prepared for it and it falls within the MNE Group's consolidation. Even a Permanent Establishment is treated as a separate Constituent Entity, because the Pillar Two calculation is not entity-based alone, but a combination of both entity and jurisdiction.

This is where the third concept comes in — **Jurisdiction**. The most important feature of the Pillar Two calculation is that it is jurisdiction-based, not entity-based. If a group has ten Constituent Entities in the same country, their income, losses, and taxes are all combined to produce a single result for that one jurisdiction. We look at why this is done in detail in Section 5.3.

The fourth foundation is the **Fiscal Year** — the period for which the UPE prepares its consolidated financial statements is generally treated as the applicable Fiscal Year for the entire group. Each Constituent Entity's accounting year is also treated as aligned with this same Fiscal Year, even though an entity's local accounting year may differ. Together, these four concepts — Group, Entity, Jurisdiction, and Fiscal Year — form the structure on which all remaining calculations rest.

## 5.2 Ultimate Parent Entity (UPE) and Filing Entity

The **Ultimate Parent Entity (UPE)** is the Entity that directly or indirectly holds a controlling interest in every other Constituent Entity, and over which no other Entity holds a controlling interest. Put simply, it is the entity sitting at the very top of the group, on the basis of whose consolidated financial statements the boundary of the entire MNE Group is determined. The UPE's jurisdiction matters, because in many cases the IIR is meant to apply first at the UPE level.

In practice, however, the responsibility for filing the GIR (discussed at Step 10 in Section 5.5) does not always fall on the UPE itself. This is where the concept of the **Filing Entity** comes in — the Constituent Entity that actually prepares and files the GIR. In many cases the UPE itself is the Filing Entity, but a group may instead appoint a **Designated Filing Entity**, which files a single, centralized GIR on behalf of all other Constituent Entities — so that complete information does not have to be filed separately in every jurisdiction. This distinction matters: the UPE is a structural, control-related concept, while the Filing Entity is an administrative, compliance-related role. At the same time, a group may have multiple Intermediate Parent Entities or Partially-Owned Parent Entities, each of which may have its own IIR liability if the IIR is not applicable at the UPE level — these complexities are discussed in detail in Part 8.

## 5.3 Jurisdictional Blending — Why the Calculation Is Done Country by Country

One of the most important structural decisions in Pillar Two is **Jurisdictional Blending**. This means the ETR and the top-up tax are not entity-based, but are calculated by adding together the income, losses, and taxes of all Constituent Entities located in the same country. If a group has five entities in a given country, two of which are profitable and three of which are in a loss position, a single aggregate income and a single aggregate tax figure are calculated for that country and used to determine the ETR — a separate ETR is not calculated for each entity.

The rationale behind this approach is fairness and practicality. If the calculation were entity-based, two entities in the same country, under the same tax rate, might show one with a high ETR and the other with a low ETR — purely due to timing differences in income and expenses, which is not meaningful from a tax-policy standpoint. Jurisdictional blending removes this kind of artificial variation and shows the true reflection of a country's overall tax policy.

There is an important exception — blending does not apply under the general rule for **Investment Entities** and certain other special types of entity; a separate calculation method applies to them, discussed in Part 11. But as a general rule, "calculate country by country" is the single most important formula for understanding Pillar Two. Without keeping this concept in mind, no discussion of ETR, top-up tax, SBIE, or Safe Harbour can be properly understood, because the unit for all of these is the "jurisdiction," not the entity.

## 5.4 Effective Tax Rate (ETR) and Top-up Tax — Core Concepts

The **Effective Tax Rate (ETR)** is the ratio obtained by dividing the aggregate **Adjusted Covered Taxes** paid in a jurisdiction by the aggregate **GloBE Income or Loss** of that jurisdiction. This is not the ordinary statutory tax rate, but a rate calculated on the basis of specially adjusted income and tax as defined under the GloBE rules. Although the ETR formula looks simple, both the numerator and the denominator involve numerous adjustments internally — how GloBE Income is calculated is discussed in Part 3, and how Adjusted Covered Taxes are calculated is discussed in Part 4.

If a jurisdiction's ETR falls below 15% — Pillar Two's minimum tax rate — the question of **Top-up Tax** arises. The top-up tax essentially fills the gap that remains between that jurisdiction's actual ETR and the 15% minimum rate. Put simply: the lower the ETR, the higher the top-up tax percentage, and that percentage is then multiplied by the jurisdiction's "Excess Profit" to determine the actual top-up tax amount in currency terms. What role "Excess Profit" and SBIE play is explored in the calculation flow in the next section.

One point needs to be made clear here — both the ETR and the top-up tax are jurisdiction-level concepts, not entity-level ones, exactly as discussed in Section 5.3. Once a jurisdiction's top-up tax has been determined, how it is allocated among individual entities and which mechanism (QDMTT, IIR, or UTPR) is used to collect it is an entirely separate question — this is discussed at Step 9 of the calculation flow in the next section.

## 5.5 The Entire Calculation Flow, at a Glance

The entire Pillar Two calculation process can be summarized in ten steps. The flow below determines the structure of the rest of this book — each step is discussed in detail in a separate Part.

```
Step 1  — Scope check (€750M threshold)
Step 2  — Determine Constituent Entities and their jurisdictions
Step 3  — Safe Harbour check (calculation stops if passed)
Step 4  — Each Entity's GloBE Income or Loss (Chapter 3)
Step 5  — Each Entity's Adjusted Covered Taxes (Chapter 4)
Step 6  — Jurisdiction-level ETR (Chapter 5)
Step 7  — Top-up Tax % and Excess Profit → Top-up Tax
Step 8  — SBIE and De Minimis relief
Step 9  — Collection in the order QDMTT → IIR → UTPR
Step 10 — GIR filing and local returns
```

**Step 1 — Scope check.** First, it is checked whether the MNE Group's consolidated revenue reached the **€750 million** threshold in at least two of the four preceding Fiscal Years. If this threshold is not exceeded, the group falls entirely outside the scope of Pillar Two. Detailed discussion of this step can be found in Part 2.

**Step 2 — Determine Entities and jurisdictions.** If the group is within scope, every Constituent Entity of the group must be identified, and the correct jurisdiction for each must be determined — generally on the basis of tax residency, though special rules apply in exceptional cases such as a Permanent Establishment or a stateless entity. Sections 5.1–5.3 of this chapter build the foundation for this step; detailed rules for complex corporate structures can be found in Part 11.

**Step 3 — Safe Harbour check.** In this step, it is checked whether a jurisdiction meets the conditions of the Transitional CbCR Safe Harbour or some other Safe Harbour. If the conditions are met, the top-up tax for that jurisdiction can be treated as zero and a detailed ETR/top-up tax calculation is not needed — this significantly reduces the compliance burden in many cases. This process is discussed in detail in Part 10.

**Step 4 — GloBE Income or Loss.** For jurisdictions that do not pass a Safe Harbour, the GloBE Income or Loss of each Constituent Entity there must be determined, starting from its net income/loss under financial accounting and applying the required adjustments. These adjustments are discussed in detail in Part 3.

**Step 5 — Adjusted Covered Taxes.** In parallel, the Adjusted Covered Taxes of each entity must be determined based on its current tax expense and specified deferred tax adjustments. The rules for this calculation are discussed in Part 4.

**Step 6 — Jurisdiction-level ETR.** The results of Steps 4 and 5 are blended at the jurisdiction level to determine the ETR, as explained in Section 5.4. The detailed methodology can be found in Part 5.

**Step 7 — Top-up Tax % and Excess Profit.** The top-up tax percentage is determined by subtracting the actual ETR from 15%, and this is multiplied by the jurisdiction's Excess Profit (net income after subtracting the SBIE) to determine the jurisdiction's overall top-up tax. This too is discussed in detail in Part 5.

**Step 8 — SBIE and De Minimis.** The **Substance-Based Income Exclusion (SBIE)** removes a portion of payroll expense and tangible assets from the top-up tax calculation, so that jurisdictions with genuine economic activity receive partial relief. In addition, the **De Minimis Exclusion** can exempt jurisdictions with small revenue and income entirely from the calculation. Both concepts are discussed in detail in Part 6.

**Step 9 — The QDMTT → IIR → UTPR order.** Once a jurisdiction's top-up tax has been determined, a specific order is followed to collect it. First, it is checked whether that jurisdiction has a **QDMTT (Qualified Domestic Minimum Top-up Tax)**; if it does, that is collected first and reduces the liability under other mechanisms. Next, the **IIR (Income Inclusion Rule)** applies, generally at the level of the UPE or another Parent Entity's jurisdiction. Finally, whatever remains is collected through the **UTPR (Undertaxed Profits Rule)**, distributed among the group's other jurisdictions. These three mechanisms are discussed exhaustively in Part 7, Part 8, and Part 9 respectively.

**Step 10 — GIR filing and local returns.** Finally, the results of the entire calculation must be filed with the relevant tax administrations through a **GloBE Information Return (GIR)**, and, where required, local returns must also be filed in the relevant jurisdictions. This compliance process is discussed in detail in Part 12.

## 5.6 The Three Durations of an Election: One-Time · Five-Year · Annual

In many places, the Pillar Two rules give a group the option to choose a specific treatment, known as an **Election**. These Elections can have one of three durations, and remembering which duration applies to a given Election is critically important for compliance planning.

A **One-Time Election** is a decision that, once made, cannot be revoked in the future, or cannot be made again for a specified long period after revocation. This type of Election generally applies to fundamental structural matters, because changing them repeatedly could undermine the consistency of the calculation.

A **Five-Year Election**, once made, remains in effect for at least five Fiscal Years, and then automatically renews unless the group explicitly revokes it. This duration is suited to matters where stability is desired, but not made entirely irrevocable — such as decisions relating to certain specific adjustment methods.

An **Annual Election** is made separately for each Fiscal Year and can be renewed or changed with each GIR filing. This type of Election generally applies to matters where circumstances may change from year to year, and the group needs the flexibility to adjust accordingly.

The reason for remembering these three durations separately is that a mistaken Election does not affect just one year — it can determine a group's tax liability for five years or more. Every Election discussed in the chapters that follow will clearly note its duration, so the reader can understand the long-term impact of each decision.

## 5.7 A Roadmap for the Rest of the Book

The rest of the book is organized around the map discussed in this chapter. **Part 2** discusses the details of the scope and threshold test — how consolidated revenue is measured, which entities are excluded, and what happens for newly formed or demerged groups. **Part 3** explains the full methodology for calculating GloBE Income or Loss, from financial accounts through every required adjustment. **Part 4** discusses the rules for determining Adjusted Covered Taxes, including deferred tax adjustments.

**Part 5** explains the ETR calculation, and the formulas for the top-up tax percentage and Excess Profit, in detail with examples. **Part 6** discusses the application of the SBIE and the De Minimis Exclusion. Then **Parts 7, 8, and 9** go in depth, separately, into the three collection mechanisms — QDMTT, IIR, and UTPR — because each has its own order of application, rules for determining the liable entity, and calculation methodology.

**Part 10** discusses the various Safe Harbours and transitional provisions, which reduce the compliance burden for many groups in the early years. **Part 11** discusses special corporate structures and situations — such as mergers and acquisitions, joint ventures, investment entities, flow-through entities, and minority-owned constituent entities — where exceptions to the general rules apply. Finally, **Part 12** closes the book with compliance, the GIR filing process, the practical application of Elections, and administrative guidance.

Following this roadmap, the reader will notice that each Part is really an in-depth analysis of one or more steps of the ten-step flow above — not a new structure. The map in this chapter can be used as a reference to return to repeatedly, particularly when there is a risk of losing the overall context amid the complex detail of a later chapter.

## Summary

In this chapter we introduced the fundamental terminology needed to understand Pillar Two — starting with MNE Group, Constituent Entity, Jurisdiction, and Fiscal Year, the distinction between the UPE and the Filing Entity, and the core rationale for Jurisdictional Blending. We then explained the core concepts of ETR and top-up tax and organized the entire calculation process into ten steps — from the scope check through to GIR filing. Finally, we saw the three durations of an Election — One-Time, Five-Year, and Annual — and a roadmap of what will be discussed from Part 2 through Part 12 of the book. The ten-step flow in this chapter is the structural foundation of the entire book — every remaining chapter is a detailed elaboration of one step or another of this map.

## Common Mistakes

A common mistake is to think of the Pillar Two calculation as entity-based, when in fact the ETR and top-up tax are jurisdiction-based — these figures must be derived by blending the results of all Constituent Entities in the same country. Another mistake is treating the UPE and the Filing Entity as the same concept; the UPE is a control-related concept, while the Filing Entity is an administrative role, and the two can be different entities. Many mistakenly treat a Safe Harbour as a complete exemption from calculation, when it is in fact a conditional opportunity to avoid a detailed calculation for a specific year, not a permanent exemption. Treating the SBIE and the De Minimis Exclusion as the same concept is also a common confusion — one excludes income on the basis of genuine activity, while the other exempts a small jurisdiction entirely. Finally, making a decision without checking the duration of an Election (One-Time, Five-Year, or Annual) is a risky mistake, because the impact of a wrong decision can last for many years.

<!-- lang:bn -->

# অধ্যায় ৫ — মৌলিক পরিভাষা ও গণনার সামগ্রিক মানচিত্র

> **এই অধ্যায়ে:** Pillar Two-এর প্রতিটি গণনা কয়েকটি মৌলিক ধারণার উপর দাঁড়িয়ে আছে — কে হিসাবের আওতায় পড়ে, কোন দেশ ধরে হিসাব হয়, কে ফাইলিং-এর দায়িত্ব নেয়, এবং একটি লো-ট্যাক্স জুরিসডিকশনে থাকা মুনাফার উপর কীভাবে বাড়তি কর আরোপ হয়। এই অধ্যায়ে আমরা সেই পরিভাষাগুলো একসাথে পরিচয় করাব এবং পুরো গণনা-প্রক্রিয়ার দশ-ধাপের একটি মানচিত্র উপস্থাপন করব, যা বইয়ের বাকি অংশে ধাপে ধাপে বিস্তারিতভাবে আলোচিত হবে। এই মানচিত্রটি মনে রাখলে পরের প্রতিটি অধ্যায় সহজে বোঝা যাবে।

## ৫.১ MNE Group · Constituent Entity · Jurisdiction · Fiscal Year

Pillar Two-এর নিয়মাবলি প্রথমেই একটি প্রশ্নের উত্তর খোঁজে — কাকে নিয়ে হিসাব হবে? উত্তরটি শুরু হয় **MNE Group (মাল্টিন্যাশনাল এন্টারপ্রাইজ গ্রুপ)** ধারণা থেকে। একটি MNE Group বলতে বোঝানো হয় এমন এক গোষ্ঠীকে, যার অন্তত একটি Entity বা Permanent Establishment একাধিক জুরিসডিকশনে অবস্থিত, এবং যাদের আর্থিক ফলাফল একটি Ultimate Parent Entity-র consolidated financial statements-এ (একত্রীকৃত হিসাব বিবরণী) অন্তর্ভুক্ত হয় বা অন্তর্ভুক্ত হওয়ার কথা। অর্থাৎ শুধু আইনি নাম বা করপোরেট গঠন দেখে নয়, একত্রীকরণ (consolidation) কীভাবে হচ্ছে তা দেখে গোষ্ঠীর সীমা টানা হয়।

এই গোষ্ঠীর ভেতরের প্রতিটি সদস্যকে বলা হয় **Constituent Entity (গঠনকারী সত্তা)**। একটি Entity হতে পারে কোম্পানি, ট্রাস্ট, পার্টনারশিপ বা অন্য কোনো আইনি বা অ-আইনি বিন্যাস, যতক্ষণ তার আলাদা আর্থিক হিসাব তৈরি করা যায় এবং সেটি MNE Group-এর consolidation-এর আওতায় পড়ে। এমনকি একটি Permanent Establishment-কেও পৃথক Constituent Entity হিসেবে গণ্য করা হয়, কারণ Pillar Two-এর হিসাব entity-ভিত্তিক নয়, বরং entity-এবং-জুরিসডিকশন উভয়ের সমন্বয়ে করা হয়।

এখানেই তৃতীয় ধারণাটি আসে — **Jurisdiction (রাষ্ট্র/করক্ষেত্র)**। Pillar Two-এর গণনার সবচেয়ে গুরুত্বপূর্ণ বৈশিষ্ট্য এটাই যে, হিসাব entity-ভিত্তিক নয়, জুরিসডিকশন-ভিত্তিক। একটি গোষ্ঠীর মধ্যে যদি একই দেশে দশটি Constituent Entity থাকে, তাহলে তাদের সবার আয়, ক্ষতি ও কর একত্র করে সেই একটি জুরিসডিকশনের জন্য একটিমাত্র ফলাফল বের করা হয়। কেন এভাবে করা হয়, তা আমরা ৫.৩ অনুচ্ছেদে বিস্তারিত দেখব।

চতুর্থ ভিত্তি হলো **Fiscal Year (আর্থিক বছর)** — যে সময়কালের জন্য UPE তার consolidated financial statements তৈরি করে, সেটিই সাধারণত পুরো গোষ্ঠীর জন্য প্রযোজ্য Fiscal Year হিসেবে ধরা হয়। প্রতিটি Constituent Entity-র হিসাবের বছরও এই একই Fiscal Year-এর সাথে সামঞ্জস্যপূর্ণ করে ধরা হয়, যদিও কোনো Entity-র স্থানীয় হিসাব-বছর ভিন্ন হতেও পারে। এই চারটি ধারণা — Group, Entity, Jurisdiction, ও Fiscal Year — মিলেই তৈরি হয় সেই কাঠামো, যার উপর বাকি সব হিসাব দাঁড়িয়ে থাকে।

## ৫.২ Ultimate Parent Entity (UPE) ও Filing Entity

**Ultimate Parent Entity বা UPE (চূড়ান্ত মূল সত্তা)** হলো সেই Entity, যে সরাসরি বা পরোক্षভাবে অন্য সব Constituent Entity-র উপর নিয়ন্ত্রণকারী স্বার্থ (controlling interest) ধরে রাখে, এবং যার নিজের উপর অন্য কোনো Entity-র নিয়ন্ত্রণকারী স্বার্থ নেই। সহজ ভাষায়, গোষ্ঠীর একেবারে চূড়ায় থাকা সেই সংস্থা, যার consolidated financial statements-এর ভিত্তিতে পুরো MNE Group-এর সীমা নির্ধারিত হয়। UPE-র জুরিসডিকশন গুরুত্বপূর্ণ, কারণ অনেক ক্ষেত্রে IIR প্রথমে UPE-স্তরেই প্রয়োগ হওয়ার কথা।

তবে বাস্তবে GIR (Chapter ৫.৫-এ ধাপ ১০-এ আলোচিত) জমা দেওয়ার দায়িত্ব সবসময় UPE নিজে বহন করে না। এখানেই আসে **Filing Entity (দাখিলকারী সত্তা)** ধারণা — যে Constituent Entity প্রকৃতপক্ষে GIR প্রস্তুত করে ও জমা দেয়। অনেক ক্ষেত্রে UPE নিজেই Filing Entity হয়, কিন্তু গোষ্ঠী চাইলে একটি **Designated Filing Entity** নিয়োগ করতে পারে, যে অন্য সব Constituent Entity-র পক্ষে কেন্দ্রীভূতভাবে একটিমাত্র GIR জমা দেয় — যাতে প্রতিটি জুরিসডিকশনে আলাদা আলাদা করে সম্পূর্ণ তথ্য জমা দিতে না হয়। এই পার্থক্যটি মনে রাখা জরুরি: UPE একটি স্ট্রাকচারাল ও নিয়ন্ত্রণ-সম্পর্কিত ধারণা, আর Filing Entity একটি প্রশাসনিক ও কমপ্লায়েন্স-সম্পর্কিত ভূমিকা। একই সময়ে গোষ্ঠীর মধ্যে একাধিক Intermediate Parent Entity বা Partially-Owned Parent Entity-ও থাকতে পারে, যাদের নিজস্ব IIR-দায়বদ্ধতা তৈরি হতে পারে যদি UPE-স্তরে IIR প্রয়োগযোগ্য না হয় — এই জটিলতাগুলো Part ৮-এ বিস্তারিতভাবে আলোচিত হবে।

## ৫.৩ Jurisdictional Blending — কেন দেশ ধরে ধরে হিসাব

Pillar Two-এর সবচেয়ে গুরুত্বপূর্ণ কাঠামোগত সিদ্ধান্তগুলোর একটি হলো **Jurisdictional Blending (জুরিসডিকশন-ভিত্তিক একত্রীকরণ)**। এর মানে হলো, ETR ও Top-up Tax entity-ভিত্তিক নয়, বরং একই দেশে অবস্থিত সব Constituent Entity-র আয়, ক্ষতি ও কর একসাথে যোগ করে হিসাব করা হয়। যদি একটি গোষ্ঠীর কোনো দেশে পাঁচটি সংস্থা থাকে, যার মধ্যে দুটি মুনাফায় আর তিনটি ক্ষতিতে আছে, তাহলে সেই দেশের জন্য একটিমাত্র সমষ্টিগত আয় ও একটিমাত্র সমষ্টিগত কর হিসাব করে ETR নির্ধারণ করা হয় — প্রতিটি সংস্থার জন্য আলাদা আলাদা ETR হিসাব করা হয় না।

এই পদ্ধতির পেছনে যুক্তি হলো ন্যায্যতা ও ব্যবহারিকতা। যদি entity-ভিত্তিক হিসাব করা হতো, তাহলে একই দেশে, একই করহারের অধীনে থাকা দুটি সংস্থার মধ্যে একটি হয়তো উচ্চ ETR দেখাত আর অন্যটি নিম্ন ETR — শুধু আয়-ব্যয়ের সময়গত পার্থক্যের কারণে, যা করনীতিগতভাবে অর্থবহ নয়। জুরিসডিকশনাল ব্লেন্ডিং এই ধরনের কৃত্রিম তারতম্য দূর করে এবং একটি দেশের সামগ্রিক করনীতির প্রকৃত প্রতিফলন দেখায়।

এর একটি গুরুত্বপূর্ণ ব্যতিক্রম রয়েছে — **Investment Entity** এবং কিছু বিশেষ ধরনের entity-র জন্য ব্লেন্ডিং সাধারণ নিয়মে হয় না; তাদের জন্য আলাদা গণনা-পদ্ধতি প্রযোজ্য, যা Part ১১-এ আলোচিত হবে। কিন্তু সাধারণ নিয়ম হিসেবে, "দেশ ধরে ধরে হিসাব" — এই বাক্যটি Pillar Two বোঝার জন্য সবচেয়ে গুরুত্বপূর্ণ একক সূত্র। এই ধারণাটি মাথায় না রাখলে ETR, Top-up Tax, SBIE বা Safe Harbour-এর কোনো আলোচনাই সঠিকভাবে বোঝা সম্ভব নয়, কারণ এই সবকিছুর একক (unit) হলো "জুরিসডিকশন", entity নয়।

## ৫.৪ Effective Tax Rate (ETR) ও Top-up Tax — মূল ধারণা

**Effective Tax Rate বা ETR (কার্যকর কর হার)** হলো একটি জুরিসডিকশনে প্রদত্ত সমষ্টিগত **Adjusted Covered Taxes**-কে সেই জুরিসডিকশনের সমষ্টিগত **GloBE Income or Loss**-এর দ্বারা ভাগ করে পাওয়া অনুপাত। এটি সাধারণ স্ট্যাটুটরি করহার নয়, বরং GloBE-নিয়মে সংজ্ঞায়িত বিশেষভাবে সমন্বয়কৃত আয় ও করের ভিত্তিতে গণনা করা একটি হার। ETR গণনার সূত্র সহজ দেখতে হলেও, লব ও হর দুটিরই ভেতরে বহু সমন্বয় জড়িত — GloBE Income কীভাবে হিসাব করা হয় তা Part ৩-এ এবং Adjusted Covered Taxes কীভাবে হিসাব করা হয় তা Part ৪-এ আলোচিত হবে।

যদি কোনো জুরিসডিকশনের ETR ১৫%-এর নিচে নেমে যায় — যা Pillar Two-এর ন্যূনতম করহার — তখনই **Top-up Tax (বাড়তি/পূরক কর)**-এর প্রশ্ন আসে। Top-up Tax মূলত সেই ফাঁক পূরণ করে যা ওই জুরিসডিকশনের প্রকৃত ETR এবং ১৫% ন্যূনতম হারের মধ্যে থেকে যায়। ধারণাটি সহজভাবে বললে: যত কম ETR, তত বেশি Top-up Tax %, এবং তারপর সেই শতাংশকে জুরিসডিকশনের "Excess Profit"-এর সাথে গুণ করে আসল টাকার অঙ্কে Top-up Tax নির্ধারণ করা হয়। "Excess Profit" এবং SBIE-এর ভূমিকা কী, তা আমরা পরের অনুচ্ছেদে গণনার প্রবাহের মধ্যে দেখব।

এখানে একটি বিষয় স্পষ্ট করে রাখা জরুরি — ETR ও Top-up Tax দুটোই জুরিসডিকশন-স্তরের ধারণা, entity-স্তরের নয়, ঠিক যেমন ৫.৩-এ আলোচিত হয়েছে। একটি জুরিসডিকশনের Top-up Tax নির্ধারিত হওয়ার পর, তা কীভাবে পৃথক পৃথক Entity-র মধ্যে বণ্টিত হবে এবং কোন mechanism (QDMTT, IIR, বা UTPR) দিয়ে আদায় করা হবে, তা সম্পূর্ণ আলাদা প্রশ্ন — এটিই পরের অনুচ্ছেদের গণনা-প্রবাহে ধাপ ৯-এ আলোচিত হয়েছে।

## ৫.৫ পুরো গণনার প্রবাহ, এক নজরে

Pillar Two-এর সম্পূর্ণ গণনা-প্রক্রিয়াকে দশটি ধাপে সংক্ষেপ করা যায়। নিচের প্রবাহটি এই বইয়ের বাকি অংশের কাঠামো নির্ধারণ করে — প্রতিটি ধাপ আলাদা আলাদা Part-এ বিস্তারিতভাবে আলোচিত হবে।

```
ধাপ ১ — Scope যাচাই (€750M threshold)
ধাপ ২ — Constituent Entity ও তাদের জুরিসডিকশন নির্ধারণ
ধাপ ৩ — Safe Harbour যাচাই (উত্তীর্ণ হলে গণনা বন্ধ)
ধাপ ৪ — প্রতিটি Entity-র GloBE Income or Loss (Chapter 3)
ধাপ ৫ — প্রতিটি Entity-র Adjusted Covered Taxes (Chapter 4)
ধাপ ৬ — জুরিসডিকশন-ভিত্তিক ETR (Chapter 5)
ধাপ ৭ — Top-up Tax % ও Excess Profit → Top-up Tax
ধাপ ৮ — SBIE ও De Minimis-এর ছাড়
ধাপ ৯ — QDMTT → IIR → UTPR ক্রমে আদায়
ধাপ ১০ — GIR দাখিল ও স্থানীয় রিটার্ন
```

**ধাপ ১ — Scope যাচাই।** সবার আগে দেখা হয়, MNE Group-এর consolidated revenue অন্তত দুটি পূর্ববর্তী চারটি Fiscal Year-এর মধ্যে চারটির মধ্যে অন্তত দুটিতে **€750 million** সীমা ছুঁয়েছে কিনা। এই সীমা অতিক্রম না করলে গোষ্ঠী পুরোপুরি Pillar Two-এর আওতার বাইরে থাকে। এই ধাপের বিস্তারিত আলোচনা Part ২-এ পাওয়া যাবে।

**ধাপ ২ — Entity ও জুরিসডিকশন নির্ধারণ।** স্কোপের আওতায় পড়লে, গোষ্ঠীর প্রতিটি Constituent Entity চিহ্নিত করতে হয় এবং প্রতিটির জন্য সঠিক জুরিসডিকশন নির্ধারণ করতে হয় — সাধারণত ট্যাক্স রেসিডেন্সির ভিত্তিতে, কিন্তু Permanent Establishment বা stateless entity-র মতো ব্যতিক্রমী ক্ষেত্রেও বিশেষ নিয়ম প্রযোজ্য। এই অধ্যায়ের ৫.১-৫.৩ অনুচ্ছেদ এই ধাপের ভিত্তি তৈরি করে; জটিল কর্পোরেট গঠনের ক্ষেত্রে বিস্তারিত নিয়ম Part ১১-এ পাওয়া যাবে।

**ধাপ ৩ — Safe Harbour যাচাই।** এই ধাপে দেখা হয় কোনো জুরিসডিকশন Transitional CbCR Safe Harbour বা অন্য কোনো Safe Harbour-এর শর্ত পূরণ করছে কিনা। শর্ত পূরণ হলে সেই জুরিসডিকশনের জন্য Top-up Tax শূন্য ধরে নেওয়া যায় এবং বিস্তারিত ETR/Top-up Tax গণনার প্রয়োজন হয় না — এভাবে অনেক ক্ষেত্রে কমপ্লায়েন্সের ভার কমে যায়। এই প্রক্রিয়া Part ১০-এ বিস্তারিতভাবে আলোচিত হবে।

**ধাপ ৪ — GloBE Income or Loss।** যে জুরিসডিকশনগুলো Safe Harbour পার হয় না, সেখানকার প্রতিটি Constituent Entity-র জন্য তার আর্থিক হিসাবের নেট আয়/ক্ষতি থেকে শুরু করে প্রয়োজনীয় সমন্বয় করে GloBE Income or Loss নির্ধারণ করতে হয়। এই সমন্বয়গুলো Part ৩-এ বিস্তারিতভাবে আলোচিত হবে।

**ধাপ ৫ — Adjusted Covered Taxes।** সমান্তরালভাবে, প্রতিটি Entity-র জন্য তার বর্তমান কর ব্যয় ও নির্দিষ্ট ডেফার্ড ট্যাক্স সমন্বয় নিয়ে Adjusted Covered Taxes নির্ধারণ করতে হয়। এই গণনার নিয়মকানুন Part ৪-এ আলোচিত হবে।

**ধাপ ৬ — জুরিসডিকশন-ভিত্তিক ETR।** ধাপ ৪ ও ৫-এর ফলাফল জুরিসডিকশনভিত্তিক ব্লেন্ড করে ETR নির্ধারণ করা হয়, যেমনটি ৫.৪ অনুচ্ছেদে ব্যাখ্যা করা হয়েছে। এর বিস্তারিত পদ্ধতি Part ৫-এ পাওয়া যাবে।

**ধাপ ৭ — Top-up Tax % ও Excess Profit।** ১৫% থেকে প্রকৃত ETR বিয়োগ করে Top-up Tax % নির্ধারণ করা হয়, এবং তা জুরিসডিকশনের Excess Profit-এর (SBIE বাদ দেওয়ার পরের নেট আয়) সাথে গুণ করে জুরিসডিকশনের সামগ্রিক Top-up Tax নির্ধারণ করা হয়। এটিও Part ৫-এ বিস্তারিতভাবে আলোচিত।

**ধাপ ৮ — SBIE ও De Minimis।** **Substance-Based Income Exclusion বা SBIE (বাস্তব কার্যক্রম-ভিত্তিক আয়-বহিষ্করণ)** বেতন-খরচ ও tangible asset-এর একটি অংশ Top-up Tax গণনার বাইরে রাখে, যাতে বাস্তব অর্থনৈতিক কার্যক্রম আছে এমন জুরিসডিকশন আংশিক স্বস্তি পায়। এছাড়াও **De Minimis Exclusion** ছোট রাজস্ব ও আয়ের জুরিসডিকশনগুলোকে সম্পূর্ণ গণনা থেকে ছাড় দিতে পারে। উভয় ধারণাই Part ৬-এ বিস্তারিতভাবে আলোচিত হবে।

**ধাপ ৯ — QDMTT → IIR → UTPR ক্রম।** একবার জুরিসডিকশনের Top-up Tax নির্ধারিত হলে, তা আদায়ের জন্য একটি নির্দিষ্ট ক্রম অনুসরণ করা হয়। প্রথমে দেখা হয় সেই জুরিসডিকশনে **QDMTT (Qualified Domestic Minimum Top-up Tax — স্থানীয়ভাবে প্রযোজ্য যোগ্য ন্যূনতম পূরক কর)** আছে কিনা; থাকলে তা প্রথমে আদায় হয় এবং অন্য mechanism-এর দায় কমে যায়। এরপর **IIR (Income Inclusion Rule — আয়-অন্তর্ভুক্তি বিধি)** প্রয়োগ হয়, সাধারণত UPE বা অন্য কোনো Parent Entity-র জুরিসডিকশনে। সবশেষে যেটুকু বাকি থাকে তা **UTPR (Undertaxed Profits Rule — অবস্তুত-কর মুনাফা বিধি)**-এর মাধ্যমে অন্য জুরিসডিকশনগুলোর মধ্যে বণ্টন করে আদায় করা হয়। এই তিনটি mechanism-ই যথাক্রমে Part ৭, Part ৮, ও Part ৯-এ পুঙ্খানুপুঙ্খভাবে আলোচিত হবে।

**ধাপ ১০ — GIR দাখিল ও স্থানীয় রিটার্ন।** সবশেষে, সম্পূর্ণ গণনার ফলাফল একটি **GloBE Information Return বা GIR (গ্লোব তথ্য বিবরণী)**-এর মাধ্যমে সংশ্লিষ্ট কর প্রশাসনগুলোর কাছে দাখিল করতে হয়, এবং প্রয়োজনে সংশ্লিষ্ট জুরিসডিকশনে স্থানীয় রিটার্নও দাখিল করতে হয়। এই কমপ্লায়েন্স-প্রক্রিয়া Part ১২-এ বিস্তারিতভাবে আলোচিত হবে।

## ৫.৬ Election-এর তিন মেয়াদ: One-Time · Five-Year · Annual

Pillar Two-এর নিয়মাবলিতে বহু জায়গায় গোষ্ঠীকে একটি নির্দিষ্ট চিকিৎসা (treatment) বেছে নেওয়ার সুযোগ দেওয়া হয়েছে, যা **Election (নির্বাচন/ঐচ্ছিক সিদ্ধান্ত)** নামে পরিচিত। এই Election-গুলোর মেয়াদ তিন ধরনের হতে পারে, এবং কোনো নির্দিষ্ট Election কোন মেয়াদের, তা মনে রাখা কমপ্লায়েন্স পরিকল্পনার জন্য অত্যন্ত গুরুত্বপূর্ণ।

**One-Time Election (একবারমাত্র নির্বাচন)** এমন সিদ্ধান্ত, যা একবার করলে ভবিষ্যতে প্রত্যাহার করা যায় না, বা প্রত্যাহারের পর নির্দিষ্ট দীর্ঘ সময়ের আগে পুনরায় করা যায় না। এই ধরনের Election সাধারণত মৌলিক গঠনগত বা কাঠামোগত বিষয়ে প্রয়োগ হয়, কারণ এগুলো বারবার পরিবর্তন করলে গণনার সামঞ্জস্য নষ্ট হয়ে যেতে পারে।

**Five-Year Election (পাঁচ-বছরী নির্বাচন)** একবার করা হলে অন্তত পাঁচটি Fiscal Year ধরে বলবৎ থাকে, তারপর তা স্বয়ংক্রিয়ভাবে পুনর্নবীকরণ হয় যদি না গোষ্ঠী স্পষ্টভাবে প্রত্যাহার করে। এই মেয়াদ এমন বিষয়গুলোর জন্য উপযুক্ত, যেখানে স্থিতিশীলতা চাওয়া হয়, কিন্তু একেবারে অপরিবর্তনীয় করে রাখা হয় না — যেমন কিছু নির্দিষ্ট সমন্বয়-পদ্ধতি সংক্রান্ত সিদ্ধান্ত।

**Annual Election (বাৎসরিক নির্বাচন)** প্রতি Fiscal Year-এর জন্য আলাদাভাবে নেওয়া হয় এবং GIR দাখিলের সাথে পুনর্নবীকরণ বা পরিবর্তন করা যায়। এই ধরনের Election সাধারণত এমন বিষয়গুলোর জন্য প্রযোজ্য, যেখানে বছরে বছরে পরিস্থিতি পরিবর্তিত হতে পারে এবং গোষ্ঠীকে সেই অনুযায়ী সমন্বয় করার সুযোগ দেওয়া প্রয়োজন।

এই তিন ধরনের মেয়াদ আলাদা আলাদা করে মনে রাখার কারণ হলো — একটি ভুল Election করলে তা এক বছরের জন্য প্রভাব ফেলে না, বরং পাঁচ বছর বা তার বেশি সময়ের জন্য গোষ্ঠীর কর-দায় নির্ধারণ করতে পারে। যেসব Election বইয়ের পরের অধ্যায়গুলোতে আলোচিত হবে, তার প্রতিটির সাথে তার মেয়াদ স্পষ্টভাবে উল্লেখ করা থাকবে, যাতে পাঠক প্রতিটি সিদ্ধান্তের দীর্ঘমেয়াদি প্রভাব বুঝে নিতে পারেন।

## ৫.৭ বইয়ের বাকি অংশের রোডম্যাপ

এই অধ্যায়ে আলোচিত মানচিত্রের ভিত্তিতে বইয়ের বাকি অংশ সাজানো হয়েছে। **Part ২** স্কোপ ও থ্রেশহোল্ড পরীক্ষার খুঁটিনাটি নিয়ে আলোচনা করবে — কীভাবে consolidated revenue পরিমাপ করা হয়, কোন কোন entity বাদ পড়ে, এবং নতুন গঠিত বা বিভক্ত গোষ্ঠীর ক্ষেত্রে কী হয়। **Part ৩** GloBE Income or Loss গণনার সম্পূর্ণ পদ্ধতি ব্যাখ্যা করবে, আর্থিক হিসাব থেকে শুরু করে প্রতিটি প্রয়োজনীয় সমন্বয় পর্যন্ত। **Part ৪** Adjusted Covered Taxes নির্ধারণের নিয়মকানুন নিয়ে আলোচনা করবে, যার মধ্যে ডেফার্ড ট্যাক্স সমন্বয়ও অন্তর্ভুক্ত।

**Part ৫** ETR গণনা, Top-up Tax % ও Excess Profit-এর সূত্র বিস্তারিতভাবে ব্যাখ্যা করবে, উদাহরণসহ। **Part ৬** SBIE ও De Minimis Exclusion-এর প্রয়োগ-পদ্ধতি নিয়ে আলোচনা করবে। তারপর **Part ৭, ৮ ও ৯** যথাক্রমে QDMTT, IIR ও UTPR — এই তিনটি আদায়-mechanism নিয়ে আলাদা আলাদাভাবে গভীরে যাবে, কারণ প্রতিটির নিজস্ব প্রয়োগ-ক্রম, দায়বদ্ধ entity নির্ধারণের নিয়ম ও গণনা-পদ্ধতি রয়েছে।

**Part ১০** বিভিন্ন Safe Harbour ও ট্রানজিশনাল বিধান নিয়ে আলোচনা করবে, যা অনেক গোষ্ঠীর জন্য প্রাথমিক বছরগুলোতে কমপ্লায়েন্সের ভার কমিয়ে দেয়। **Part ১১** বিশেষ কর্পোরেট গঠন ও পরিস্থিতি — যেমন Merger ও Acquisition, Joint Venture, Investment Entity, Flow-through Entity, ও Minority-Owned Constituent Entity — নিয়ে আলোচনা করবে, যেখানে সাধারণ নিয়মের ব্যতিক্রম প্রয়োগ হয়। সবশেষে **Part ১২** কমপ্লায়েন্স, GIR দাখিলের প্রক্রিয়া, Election-এর ব্যবহারিক প্রয়োগ ও প্রশাসনিক নির্দেশিকা নিয়ে বইটি সমাপ্ত করবে।

এই রোডম্যাপ অনুসরণ করলে পাঠক লক্ষ করবেন, প্রতিটি Part আসলে উপরের দশ-ধাপ প্রবাহের একটি বা একাধিক ধাপের গভীর বিশ্লেষণ — কোনো নতুন কাঠামো নয়। এই অধ্যায়ের মানচিত্রটি বারবার ফিরে দেখার মতো একটি রেফারেন্স হিসেবে ব্যবহার করা যেতে পারে, বিশেষভাবে যখন কোনো পরের অধ্যায়ে জটিল বিস্তারিত আলোচনার মধ্যে সামগ্রিক প্রেক্ষাপট হারিয়ে যাওয়ার ঝুঁকি থাকে।

## সারসংক্ষেপ

এই অধ্যায়ে আমরা Pillar Two বোঝার জন্য প্রয়োজনীয় মৌলিক পরিভাষা পরিচয় করিয়েছি — MNE Group, Constituent Entity, Jurisdiction ও Fiscal Year দিয়ে শুরু করে, UPE ও Filing Entity-র পার্থক্য, এবং Jurisdictional Blending-এর মূল যুক্তি। এরপর ETR ও Top-up Tax-এর মৌলিক ধারণা ব্যাখ্যা করে আমরা সম্পূর্ণ গণনা-প্রক্রিয়াকে দশটি ধাপে সাজিয়েছি — Scope যাচাই থেকে শুরু করে GIR দাখিল পর্যন্ত। সবশেষে Election-এর তিন মেয়াদ — One-Time, Five-Year ও Annual — এবং বইয়ের Part ২ থেকে Part ১২ পর্যন্ত কী কী আলোচিত হবে তার একটি রোডম্যাপ দেখেছি। এই অধ্যায়ের দশ-ধাপ প্রবাহটি পুরো বইয়ের কাঠামোগত ভিত্তি — বাকি প্রতিটি অধ্যায় এই মানচিত্রের কোনো না কোনো ধাপের বিস্তারিত রূপ।

## সাধারণ ভুল

একটি সাধারণ ভুল হলো Pillar Two-এর হিসাবকে entity-ভিত্তিক ভাবা, যখন প্রকৃতপক্ষে ETR ও Top-up Tax জুরিসডিকশন-ভিত্তিক — একই দেশের সব Constituent Entity-র ফলাফল ব্লেন্ড করেই এই সংখ্যাগুলো বের করতে হয়। আরেকটি ভুল হলো UPE ও Filing Entity-কে একই ধারণা মনে করা; UPE একটি নিয়ন্ত্রণ-সম্পর্কিত ধারণা, আর Filing Entity একটি প্রশাসনিক ভূমিকা, এবং এই দুটি বিভিন্ন Entity হতে পারে। অনেকে Safe Harbour-কে গণনা থেকে সম্পূর্ণ অব্যাহতি ভেবে ভুল করেন, যদিও এটি প্রকৃতপক্ষে একটি নির্দিষ্ট বছরের জন্য বিস্তারিত গণনা এড়ানোর একটি শর্তাধীন সুযোগ, স্থায়ী অব্যাহতি নয়। SBIE ও De Minimis Exclusion-কে একই ধারণা ভাবাও একটি সাধারণ বিভ্রান্তি — একটি বাস্তব কার্যক্রমের ভিত্তিতে আয় বাদ দেয়, আর অন্যটি ছোট জুরিসডিকশনকে সম্পূর্ণ ছাড় দেয়। সবশেষে, Election-এর মেয়াদ (One-Time, Five-Year, বা Annual) না যাচাই করে সিদ্ধান্ত নেওয়া একটি ঝুঁকিপূর্ণ ভুল, কারণ ভুল সিদ্ধান্তের প্রভাব বহু বছর ধরে থেকে যেতে পারে।
