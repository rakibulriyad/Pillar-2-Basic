---
title:
  en: "Income Allocation for Flow-Through Entities"
  bn: "Flow-Through Entity-র আয় বণ্টন"
chapter: 17
part: 3
partTitle:
  en: "GloBE Income or Loss · Chapter 3"
  bn: "GloBE Income or Loss · Chapter 3"
articles: "3.5"
slug: "ch-17-flow-through-allocation"
---

<!-- lang:en -->

# Chapter 17 — Income Allocation for Flow-Through Entities

> **In this chapter:** since a Flow-Through Entity itself is generally not a taxpayer, where its GloBE Income or Loss "stays" — with itself, with a PE, or with its owner — must be determined by following a specific order; this chapter discusses that allocation order, the distinction between Tax Transparent and Reverse Hybrid situations, and how the share of an owner outside the Group stays outside the calculation.
> **Relevant Article:** 3.5

## 17.1 The Allocation Order: PE → Owner → Residual

A **Flow-Through Entity** is an entity that is treated as "transparent" for tax purposes in the jurisdiction of its formation — that is, the entity itself does not pay tax; rather, its income is treated as directly taxable in the hands of its owner. When accounting for such an entity under the GloBE rules, a natural question arises: since the entity itself is not a "taxpayer," to which Constituent Entity's account will its GloBE Income or Loss be added? Article 3.5 answers this question, and it does so in a specific order.

This order is easiest to understand in three steps:

1. **First step — allocation to a PE:** if the Flow-Through Entity conducts part of its business through a Permanent Establishment (PE), the income or loss related to that PE is first allocated to the PE under the rule of Article 3.4. This allocation happens before the ownership-ratio calculation, because the PE itself is treated as a separate Constituent Entity, and its income enters the ETR calculation of its own jurisdiction.

2. **Second step — allocation to the owner:** any remaining income or loss after allocation to the PE is divided among the owners according to the Flow-Through Entity's ownership structure. The basis for this division is the proportionate ownership interest, and each owner takes that share as part of its own GloBE Income or Loss — provided the owner is itself a Constituent Entity and the relevant conditions are met.

3. **Third step — the residual stays with the entity itself:** if, for some reason, income cannot "flow" to the owner — for example, if the owner's jurisdiction does not view the Flow-Through Entity as transparent — then that portion remains with the entity itself as its own GloBE Income or Loss. This is the **Reverse Hybrid Entity** situation, discussed in detail in Section 17.3.

It is important to remember this three-step order, because in practice analysts often divide income directly in the ownership ratio, skipping the separate allocation for the PE — which produces an incorrect result. A PE's income must always be separated out first, and then the remainder is calculated based on ownership-based allocation.

## 17.2 Where the Income of a Tax Transparent Entity Goes

When a Flow-Through Entity is treated as transparent both in the jurisdiction of its own formation and in the jurisdiction of its owner, it is called a **Tax Transparent Entity** — that is, it is "seen" from both directions that the income actually belongs to the owner. This is the simplest and most common case.

In this situation, under Article 3.5, the Flow-Through Entity's GloBE Income or Loss (the residual remaining after allocation to a PE) is allocated directly to its owner Constituent Entity or Entities, in proportion to their ownership. For example, if 60% ownership of a partnership is held by a Constituent Entity of a Group, then 60% of that partnership's GloBE Income will be added as part of that Constituent Entity's own GloBE Income, exactly as though it had earned that income directly itself.

An important point here is that this allocation happens only at the attribution level; it does not mean that the partnership is dissolved as a Constituent Entity. In GloBE's accounting, the partnership still remains a separate Constituent Entity (if it is part of the Group), but the level of its income and loss "rises up" into the owner's ETR calculation. As a result, in practice there is no need to calculate a separate ETR at the partnership level — instead, its income is added into and calculated within the owner's jurisdiction's ETR. Similarly, the related Covered Taxes are also assumed to be allocated to the owner on the same proportionate basis, although the detailed rules of that allocation apply in parallel with the income tax computation.

In practice, the most common application of this rule is seen where a partnership or LLC is used for investment in a holding structure, and all parties above and below that entity view it as transparent — for example, a US LLC that is transparent through a "check-the-box" election or inherently, and whose sole owner also views it as transparent.

## 17.3 The Income of a Reverse Hybrid Entity Stays with Itself

A **Reverse Hybrid Entity** is a Flow-Through Entity that is treated as transparent in the jurisdiction of its own formation, but is treated as opaque in the jurisdiction of its owner — that is, "viewed" from the owner's country, the entity itself appears to be a taxpayer with its own separate legal and tax existence. As the name suggests, this is an "inverted" hybrid situation — in an ordinary hybrid mismatch, an entity that is transparent in the owner's eyes remains opaque in its own country, but here the situation is reversed.

Under Article 3.5, when an owner does not treat the Flow-Through Entity as transparent under the rules of its own jurisdiction, the income or loss falling to that owner's share does not "flow" to it — instead, it remains the Flow-Through Entity's own GloBE Income or Loss. As a result, that entity must be treated, for GloBE calculation purposes, as an independent Constituent Entity in its own jurisdiction, and its ETR is determined in that jurisdiction — exactly as it would be for an ordinary opaque company.

The practical significance of this rule is important: it ensures that income does not get lost in some kind of void — "neither with the owner, nor with the entity." If, due to some jurisdictional mismatch, income does not reach the hands of the owner, the GloBE rule ensures that the income is at least captured in the entity's own account, so that it does not fall entirely outside the ETR calculation.

Notably, the same Flow-Through Entity can receive different treatment with respect to multiple owners simultaneously — some owners' jurisdictions may view it as transparent (so that portion goes to the owner under the rule in Section 17.2), while other owners' jurisdictions may view it as opaque (so that portion remains with the entity itself under the Reverse Hybrid rule). In such a mixed situation, GloBE Income or Loss must be divided proportionately, and the correct rule applied separately to each portion.

## 17.4 The Share of an Owner Outside the Group

In practice, the ownership of many Flow-Through Entities is not entirely confined to the same MNE Group — rather, some part of it is held by outside investors, joint-venture partners, or individual owners who are not Constituent Entities of the Group. Such an owner can generally be called an "owner outside the Group."

Under Article 3.5, the portion of a Flow-Through Entity's GloBE Income or Loss that is allocable to such an owner who is not a Constituent Entity of the Group is excluded (removed/reduced) from the Flow-Through Entity's GloBE calculation. The rationale is simple: the GloBE rule seeks only to ensure a minimum tax on the income of the Group's own Constituent Entities; the share of an owner outside the Group is not part of the Group's income, so there is no basis for bringing it within the Top-up Tax calculation.

What actually happens as a result is this: the Flow-Through Entity's total GloBE Income (after allocation to a PE) is first "notionally" divided among all owners in proportion to ownership, then the portion falling to the owner outside the Group is entirely excluded — it goes to no Constituent Entity, and is not reflected at any level of the GloBE calculation. The remaining portion, which falls to Group Constituent Entity owners, is allocated to them under the normal rule.

This rule is particularly important in practice for joint-venture structures, where the ownership of a partnership or LLC is divided among multiple parties who are not all part of the same MNE Group. One caution is needed here: "outside the Group" does not simply mean "not a related party," but specifically requires checking whether that entity is included as a Constituent Entity within the Group's consolidation. A Joint Venture itself may be treated under a different set of special rules under GloBE (discussed in a separate chapter), which can differ from this general rule.

## 17.5 The Special Situation of a Flow-Through UPE (a Preview of Article 7.1)

When the MNE Group's **Ultimate Parent Entity (UPE)** is itself a Flow-Through Entity — that is, the Group's topmost main entity is also tax-transparent — the general rules above cannot be applied directly, because if one assumes a Flow-Through UPE's "owner," that is generally some person or entity outside the Group (such as fund investors), and "allocating" income to them effectively means taking that income entirely out of the GloBE calculation — which is not appropriate in principle, because UPE-level income is a fundamental part of the Group's combined result.

For this reason, Article 3.5 contains an exception for a **Flow-Through UPE**: when the Flow-Through Entity is itself the UPE, the general rule described in Section 17.4 — "excluding the share of an owner outside the Group" — does not apply directly. Instead, the UPE-level GloBE Income or Loss is essentially retained with the UPE itself, and is then handled through a separate and detailed set of rules, which relates mainly to the question of allocating the Top-up Tax liability.

This detailed set of rules is found in **Article 7.1** of the GloBE Model Rules, which sets out specific adjustments for a "Flow-through Ultimate Parent Entity." The purpose of the present chapter is only to give a preview of this matter — that Article 3.5 builds the general framework for income allocation, but when the entity at the centre of that framework is itself the Group's UPE, Article 7.1's special adjustment rules become necessary, which will be discussed in detail in a later Part of this book. It is sufficient here to remember this much: for a **Flow-Through UPE**, the question of income allocation is not a simple "divide in ownership ratio" question, but is also entangled with the question of which jurisdiction the related Top-up Tax will be captured in — and it is to resolve that complexity that Article 7.1 exists.

## 17.6 Chained Flow-Through Structures

In practice, it is often seen that the owner of a Flow-Through Entity is itself another Flow-Through Entity — that is, multiple layers of tax-transparent entities stacked one on top of another, which can be called a chained Flow-Through structure. For example, a lower-tier operating partnership's owner may be a mid-tier holding LLC, and that LLC's owner may in turn be an upper-tier partnership, above which sits the ultimate Group Constituent Entity.

In such a structure, Article 3.5's rule must be applied sequentially at each level — starting from the lowest entity and moving upward. First, the income of the lowest Flow-Through Entity (after allocation to a PE) is allocated to its direct owner (who is itself also a Flow-Through Entity). That allocated portion then becomes part of the second-tier entity's own GloBE Income, and, added together with that entity's own income (if any), is again allocated according to its own ownership structure to its own owners — this same process repeats at each level, however many levels there are, until the income reaches a Constituent Entity that is not itself a Flow-Through Entity (that is, one that is an ordinary taxpayer in its jurisdiction), or goes outside the Group, or gets stopped somewhere as a Reverse Hybrid.

Two things need to be watched carefully in such a chain. First, the test in Sections 17.2 and 17.3 (transparent or Reverse Hybrid) must be performed separately at each level, because an entity that is transparent at one level may become a Reverse Hybrid at the next level — the jurisdictional perspective can differ at each level. Second, if an owner outside the Group (Section 17.4) enters at any level of the chain, its proportionate share is entirely excluded from that level onward and does not flow further into the rest of the chain. As a result, for correct allocation in a long chain, it is practically essential to separately document the ownership percentage, the transparency status, and the Group membership at each level.

## 17.7 A Numerical Example

The example below shows Article 3.5's complete allocation order together — allocation to a PE, exclusion of the share of an owner outside the Group, and allocation of the residual to a Group owner.

**Scenario:** FT is a partnership formed in Jurisdiction A and treated there as a Tax Transparent Entity. FT's ownership is held by two parties: Parent Co (P) — a Constituent Entity of the MNE Group — which holds 70% ownership, and an outside investor X, who is not a member of the Group, holding 30% ownership. FT conducts part of its business through a PE in Jurisdiction B. In the reporting year, FT's total GloBE Income is USD 1,000,000; under the rule of Article 3.4, USD 200,000 of this has been determined to be allocable to the PE.

| Step | Description | Amount (USD) |
|---|---|---|
| 1 | FT's total GloBE Income (before allocation) | 1,000,000 |
| 2 | Less: allocated to the Jurisdiction B PE under Article 3.4 | (200,000) |
| 3 | Remaining income at the FT level after allocation to the PE | 800,000 |
| 4 | Less: share of the owner outside the Group, X (30% × 800,000) — excluded under Article 3.5 | (240,000) |
| 5 | Residual allocable to Group Constituent Entity owners | 560,000 |
| 6 | Allocated to P (70% × 800,000), added as part of P's own GloBE Income | 560,000 |

Reconciliation: USD 200,000 allocated to the PE + USD 560,000 allocated to P + USD 240,000 excluded share of X = USD 1,000,000, which equals FT's original total income. Notably, X's share was not added to any Constituent Entity's account — it remains entirely outside the GloBE calculation, because X itself is not a member of the Group.

**Variant — a Reverse Hybrid situation:** Now suppose that, instead of X, FT's 30% ownership is held by a Constituent Entity R, which is a member of the same Group, but R's jurisdiction treats FT as an opaque entity — that is, from R's perspective, FT is a separate taxpayer. In this case, R's 30% share (USD 240,000) will not flow to R; instead, under the Reverse Hybrid rule of Section 17.3, it will remain with FT itself as GloBE Income, and FT itself, as a separate Constituent Entity in Jurisdiction A, will include that USD 240,000 in its own ETR calculation. Under this change, the final outcome is: PE (USD 200,000) + P (USD 560,000) + FT itself (USD 240,000) = USD 1,000,000 — that is, this time the entire income remains within scope of the GloBE calculation, with no portion excluded, because this time the owner R is itself a member of the Group.

## Summary

Since a Flow-Through Entity is itself generally not a taxpayer, Article 3.5 determines, in a specific order, where its GloBE Income or Loss will be added. First, income related to a PE is separated out and allocated to the PE under Article 3.4. The remaining income is allocated among owners in proportion to ownership, but only when the relevant owner treats the FT as transparent (the Tax Transparent Entity situation). If the owner's jurisdiction views the entity as opaque, that portion remains with the entity itself — this is the Reverse Hybrid Entity rule, which ensures that no income is lost outside the calculation. The portion falling to an owner outside the Group is entirely excluded from the GloBE calculation, because GloBE applies only to the income of the Group's own members. When the Flow-Through Entity is itself the Group's UPE, these general rules do not apply directly; instead, Article 7.1's special adjustment rule is needed, which will be discussed in detail later. In a chained structure, all of these rules must be reapplied sequentially at each level, from the lowest level upward.

## Common Mistakes

A common mistake is dividing the total income directly in the ownership ratio without a separate allocation for the PE — this incorrectly shifts income that should be in the PE's jurisdiction into the owner's jurisdiction's account. Another mistake is assuming that, because an entity is "tax-transparent," the same treatment will apply for all of its owners — in reality, transparency can differ owner by owner, and the same entity can be treated as Tax Transparent for one owner and Reverse Hybrid for another. A third mistake is indiscriminately applying the rule excluding the share of an owner outside the Group to all types of joint-ownership structures (such as a Joint Venture, which has its own special rules). Fourth, when the UPE is itself a Flow-Through Entity, mechanically applying the general allocation rule of Article 3.5 and ignoring the special adjustment of Article 7.1 is a risky mistake that can lead to an incorrect allocation of Top-up Tax. Finally, in a chained structure, assuming the same treatment applies throughout the entire chain without separately verifying the ownership percentage and transparency status at each level is a common and dangerous oversimplification.

<!-- lang:bn -->

# অধ্যায় ১৭ — Flow-Through Entity-র আয় বণ্টন

> **এই অধ্যায়ে:** একটি Flow-Through Entity নিজে সাধারণত করদাতা নয়, তাই তার GloBE Income or Loss কোথায় "থাকবে" — নিজের কাছে, PE-তে, নাকি মালিকের কাছে — তা নির্দিষ্ট একটি ক্রম মেনে নির্ধারণ করতে হয়; এই অধ্যায়ে সেই বণ্টন-ক্রম, Tax Transparent ও Reverse Hybrid পরিস্থিতির পার্থক্য, এবং Group-বহির্ভূত মালিকের অংশ কীভাবে গণনার বাইরে থাকে তা আলোচনা করা হয়েছে।
> **সংশ্লিষ্ট Article:** 3.5

## ১৭.১ বণ্টনের ক্রম: PE → মালিক → অবশিষ্টাংশ

**Flow-Through Entity (প্রবাহ-অতিক্রমী সত্তা)** হলো এমন একটি সত্তা যাকে তার প্রতিষ্ঠার জুরিসডিকশনে কর উদ্দেশ্যে "স্বচ্ছ" (transparent) হিসেবে গণ্য করা হয় — অর্থাৎ সত্তাটি নিজে কর দেয় না, বরং তার আয় সরাসরি মালিকের হাতে করযোগ্য বলে বিবেচিত হয়। GloBE নিয়মে এই ধরনের সত্তার হিসাব করতে গিয়ে একটি স্বাভাবিক প্রশ্ন ওঠে: যেহেতু সত্তাটি নিজে "কর-দাতা" নয়, তার GloBE Income or Loss কোন Constituent Entity-র হিসাবে যুক্ত হবে? Article 3.5 এই প্রশ্নের উত্তর দেয়, এবং তা একটি সুনির্দিষ্ট ক্রমে করা হয়।

এই ক্রমটি তিন ধাপে বোঝা সবচেয়ে সহজ:

১. **প্রথম ধাপ — PE-কে বরাদ্দ:** যদি Flow-Through Entity তার ব্যবসার কোনো অংশ একটি Permanent Establishment (PE)-এর মাধ্যমে পরিচালনা করে, তাহলে সেই PE-র সাথে সম্পর্কিত আয় বা ক্ষতি প্রথমে Article 3.4-এর নিয়ম অনুযায়ী PE-কে বরাদ্দ করা হয়। এই বরাদ্দ মালিকানা-অনুপাতের হিসাবের আগে ঘটে, কারণ PE নিজেই একটি পৃথক Constituent Entity হিসেবে গণ্য হয় এবং তার আয় তার নিজস্ব জুরিসডিকশনে ETR গণনায় ঢোকে।

২. **দ্বিতীয় ধাপ — মালিকের কাছে বণ্টন:** PE-কে বরাদ্দের পর যে অবশিষ্ট আয় বা ক্ষতি থাকে, তা Flow-Through Entity-র মালিকানা কাঠামো অনুযায়ী তার মালিকদের মধ্যে ভাগ করা হয়। এই ভাগ করার ভিত্তি হলো মালিকানার আনুপাতিক অংশ (proportionate ownership interest), এবং প্রতিটি মালিক সেই অংশটুকু তার নিজের GloBE Income or Loss-এর অংশ হিসেবে গ্রহণ করে — যদি মালিক নিজেও একটি Constituent Entity হয় এবং সংশ্লিষ্ট শর্তগুলো পূরণ হয়।

৩. **তৃতীয় ধাপ — অবশিষ্টাংশ সত্তার কাছেই থেকে যায়:** যদি কোনো কারণে আয় মালিকের কাছে "প্রবাহিত" হতে না পারে — যেমন মালিকের জুরিসডিকশন Flow-Through Entity-কে স্বচ্ছ হিসেবে না দেখে — তাহলে সেই অংশ সত্তাটির নিজের কাছেই GloBE Income or Loss হিসেবে থেকে যায়। এটিই **Reverse Hybrid Entity (বিপরীত হাইব্রিড সত্তা)** পরিস্থিতি, যা ১৭.৩ অনুচ্ছেদে বিস্তারিত আলোচনা করা হয়েছে।

এই তিন-ধাপের ক্রমটি মনে রাখা গুরুত্বপূর্ণ, কারণ ব্যবহারিক ক্ষেত্রে প্রায়শই বিশ্লেষকরা সরাসরি মালিকানা-অনুপাতে ভাগ করে ফেলেন, PE-র জন্য পৃথক বরাদ্দ বাদ দিয়ে — যা ভুল ফলাফল দেয়। PE-র আয় সবসময় প্রথমে বিচ্ছিন্ন করে নিতে হবে, তারপর অবশিষ্টাংশ নিয়ে মালিকানা-ভিত্তিক বণ্টনের হিসাব করতে হবে।

## ১৭.২ Tax Transparent Entity-র আয় কোথায় যায়

যখন একটি Flow-Through Entity-কে তার নিজের প্রতিষ্ঠার জুরিসডিকশনেও এবং তার মালিকের জুরিসডিকশনেও স্বচ্ছ হিসেবে গণ্য করা হয়, তখন তাকে **Tax Transparent Entity (কর-স্বচ্ছ সত্তা)** বলা হয় — অর্থাৎ উভয় দিক থেকেই "দেখা যায়" যে আয়টি আসলে মালিকের। এটি হলো সবচেয়ে সরল এবং সাধারণ ক্ষেত্র।

এই পরিস্থিতিতে, Article 3.5 অনুযায়ী Flow-Through Entity-র GloBE Income or Loss (PE-কে বরাদ্দের পরের অবশিষ্টাংশ) সরাসরি তার মালিক Constituent Entity বা Entity-দের হাতে, তাদের মালিকানা-অনুপাত অনুযায়ী, বণ্টন করা হয়। যেমন যদি একটি partnership-এর ৬০% মালিকানা একটি Group-এর Constituent Entity-র হাতে থাকে, তাহলে সেই partnership-এর GloBE Income-এর ৬০% অংশ ওই Constituent Entity-র নিজস্ব GloBE Income-এর অংশ হিসেবে যুক্ত হবে, ঠিক যেন সে নিজেই সরাসরি সেই আয় উপার্জন করেছে।

এখানে একটি গুরুত্বপূর্ণ বিষয় হলো — এই বণ্টন কেবল হিসাব-নিকাশের (attribution) স্তরে ঘটে; এর মানে এই নয় যে partnership-টি একটি Constituent Entity হিসেবে বিলুপ্ত হয়ে যায়। GloBE-এর হিসাবে partnership তবু একটি পৃথক Constituent Entity থাকে (যদি সে Group-এর অংশ হয়), কিন্তু তার আয় ও ক্ষতির স্তরটি মালিকের ETR গণনায় "উঠে যায়"। ফলে বাস্তবে partnership-স্তরে পৃথক ETR হিসাব করার প্রয়োজন হয় না — বরং তার আয় মালিকের জুরিসডিকশনের ETR-এ যুক্ত হয়ে হিসাব হয়। একইভাবে, সংশ্লিষ্ট Covered Taxes-ও একই আনুপাতিক ভিত্তিতে মালিকের কাছে বণ্টিত হয় বলে ধরে নেওয়া হয়, যদিও সেই বণ্টনের বিস্তারিত নিয়ম আয়করের হিসাবের সাথে সমান্তরালভাবে প্রযোজ্য।

ব্যবহারিক ক্ষেত্রে এই নিয়মের সবচেয়ে সাধারণ প্রয়োগ দেখা যায় যেখানে একটি হোল্ডিং কাঠামোতে investment-এর জন্য partnership বা LLC ব্যবহার করা হয় এবং সেই সত্তাটির উপরে ও নিচে সব পক্ষই তাকে স্বচ্ছ হিসেবে দেখে — যেমন একটি US LLC যা "check-the-box" নির্বাচনের মাধ্যমে বা স্বভাবতই স্বচ্ছ, এবং তার একমাত্র মালিক তাকে স্বচ্ছ হিসেবেই দেখে।

## ১৭.৩ Reverse Hybrid Entity-র আয় নিজের কাছেই থাকে

**Reverse Hybrid Entity (বিপরীত হাইব্রিড সত্তা)** এমন একটি Flow-Through Entity, যাকে তার নিজের প্রতিষ্ঠার জুরিসডিকশনে স্বচ্ছ হিসেবে গণ্য করা হয়, কিন্তু তার মালিকের জুরিসডিকশনে অস্বচ্ছ (opaque) হিসেবে গণ্য করা হয় — অর্থাৎ মালিকের দেশ থেকে "দেখলে" মনে হয় সত্তাটি নিজেই একজন করদাতা, পৃথক আইনগত ও করগত অস্তিত্বসম্পন্ন। নাম থেকেই বোঝা যায়, এটি একটি "উল্টো" হাইব্রিড পরিস্থিতি — সাধারণ hybrid mismatch-এ সত্তা মালিকের চোখে স্বচ্ছ হলেও নিজের দেশে অস্বচ্ছ থাকে, কিন্তু এখানে ঘটনা বিপরীত।

Article 3.5 অনুযায়ী, যখন কোনো মালিক তার জুরিসডিকশনের নিয়মে Flow-Through Entity-কে স্বচ্ছ হিসেবে বিবেচনা করে না, তখন সেই মালিকের ভাগে পড়া আয় বা ক্ষতি তার কাছে "প্রবাহিত" হয় না — বরং তা Flow-Through Entity-র নিজের GloBE Income or Loss হিসেবেই থেকে যায়। ফলে ওই সত্তাটিকে GloBE হিসাবের উদ্দেশ্যে তার নিজস্ব জুরিসডিকশনে একটি স্বতন্ত্র Constituent Entity হিসেবে গণনা করতে হয়, এবং তার ETR সেই জুরিসডিকশনেই নির্ধারিত হয় — ঠিক যেমনটা একটি সাধারণ অস্বচ্ছ কোম্পানির ক্ষেত্রে হতো।

এই নিয়মের ব্যবহারিক তাৎপর্য গুরুত্বপূর্ণ: এটি নিশ্চিত করে যে আয়টি "না মালিকের কাছে, না সত্তার কাছে" — এই ধরনের কোনো শূন্যস্থানে হারিয়ে না যায়। যদি কোনো জুরিসডিকশনগত মিসম্যাচের কারণে আয় মালিকের হাতে না পৌঁছায়, তাহলে GloBE নিয়ম নিশ্চিত করে যে সেই আয় অন্তত সত্তার নিজের হিসাবেই ধরা পড়বে, যাতে তা সম্পূর্ণভাবে ETR গণনার বাইরে চলে না যায়।

লক্ষণীয় যে, একই Flow-Through Entity একই সাথে একাধিক মালিকের সাপেক্ষে ভিন্ন ভিন্ন আচরণের শিকার হতে পারে — কিছু মালিকের জুরিসডিকশন তাকে স্বচ্ছ হিসেবে দেখতে পারে (ফলে সেই অংশ ১৭.২-এর নিয়মে মালিকের কাছে যায়), আবার অন্য মালিকের জুরিসডিকশন তাকে অস্বচ্ছ হিসেবে দেখতে পারে (ফলে সেই অংশ Reverse Hybrid নিয়মে সত্তার নিজের কাছেই থেকে যায়)। এই মিশ্র পরিস্থিতিতে GloBE Income or Loss-কে আনুপাতিকভাবে ভাগ করে প্রতিটি অংশের জন্য সঠিক নিয়ম আলাদাভাবে প্রয়োগ করতে হয়।

## ১৭.৪ Group-বহির্ভূত মালিকের অংশ

বাস্তবে অনেক Flow-Through Entity-র মালিকানা সম্পূর্ণভাবে একই MNE Group-এর মধ্যে সীমাবদ্ধ থাকে না — বরং তার কিছু অংশ বহিরাগত বিনিয়োগকারী, যৌথ-উদ্যোগ (joint venture) অংশীদার, বা ব্যক্তি মালিকের হাতে থাকে, যারা Group-এর Constituent Entity নয়। এই ধরনের মালিককে সাধারণভাবে "Group-বহির্ভূত মালিক" বলা যায়।

Article 3.5 অনুযায়ী, Flow-Through Entity-র GloBE Income or Loss-এর যে অংশ এমন একজন মালিকের কাছে বণ্টনযোগ্য যিনি Group-এর Constituent Entity নন, সেই অংশ Flow-Through Entity-র GloBE হিসাব থেকে বাদ (excluded/reduced) করে দেওয়া হয়। এর যুক্তি সহজ: GloBE নিয়ম কেবল Group-এর নিজস্ব Constituent Entity-গুলোর আয়ের উপর একটি ন্যূনতম কর নিশ্চিত করতে চায়; Group-বহির্ভূত মালিকের অংশ Group-এর আয়ের অংশ নয়, তাই তা Top-up Tax গণনার আওতায় আনার কোনো যুক্তি নেই।

এর ফলে বাস্তবে যা ঘটে তা হলো: Flow-Through Entity-র মোট GloBE Income (PE-কে বরাদ্দের পর) প্রথমে মালিকানার অনুপাতে সব মালিকের মধ্যে "নোশনালভাবে" ভাগ করা হয়, তারপর যে অংশ Group-বহির্ভূত মালিকের ভাগে পড়ে তা সম্পূর্ণভাবে বাদ দিয়ে দেওয়া হয় — এটি কোনো Constituent Entity-র হাতে যায় না, এবং GloBE-এর হিসাবের কোনো স্তরেই তা প্রতিফলিত হয় না। অবশিষ্ট অংশ, যা Group-এর Constituent Entity মালিকদের ভাগে পড়ে, স্বাভাবিক নিয়মে তাদের হাতে বণ্টিত হয়।

এই নিয়মটি প্রায়োগিকভাবে যৌথ-উদ্যোগ কাঠামোর ক্ষেত্রে বিশেষভাবে গুরুত্বপূর্ণ, যেখানে একটি partnership বা LLC-এর মালিকানা একাধিক পক্ষের মধ্যে ভাগ হয়ে থাকে এবং তাদের সবাই একই MNE Group-এর অংশ নয়। এখানে একটি সতর্কতা প্রয়োজন: "Group-বহির্ভূত" মানে কেবল "সম্পর্কযুক্ত পক্ষ নয়" এমন নয়, বরং নির্দিষ্টভাবে সেই সত্তা Group-এর কনসোলিডেশনের আওতায় Constituent Entity হিসেবে অন্তর্ভুক্ত কিনা তা দেখতে হবে। একটি Joint Venture নিজেই GloBE-এর অধীনে ভিন্ন বিশেষ নিয়মে (পৃথক অধ্যায়ে আলোচিত) বিবেচিত হতে পারে, যা এই সাধারণ নিয়মের থেকে ভিন্ন হতে পারে।

## ১৭.৫ Flow-Through UPE-র বিশেষ পরিস্থিতি (Article 7.1-এর পূর্বসূচনা)

যখন MNE Group-এর **Ultimate Parent Entity (UPE)** নিজেই একটি Flow-Through Entity হয় — অর্থাৎ Group-এর সর্বোচ্চ স্তরের মূল সত্তাটিও কর-স্বচ্ছ — তখন উপরের সাধারণ নিয়মগুলো সরাসরি প্রয়োগ করা সম্ভব হয় না, কারণ একটি Flow-Through UPE-র "মালিক" ধরে নিলে সাধারণত তা Group-এর বাইরের কোনো ব্যক্তি বা সত্তা (যেমন তহবিলের বিনিয়োগকারীরা) হয়ে থাকে, এবং তাদের কাছে আয় "বণ্টন করে দেওয়া" মানে কার্যত সেই আয়কে GloBE হিসাবের বাইরে নিয়ে যাওয়া — যা নীতিগতভাবে অনুচিত, কারণ UPE-স্তরের আয় Group-এর সম্মিলিত ফলাফলের একটি মৌলিক অংশ।

এই কারণে Article 3.5-এ **Flow-Through UPE (প্রবাহ-অতিক্রমী চূড়ান্ত মূল সত্তা)**-এর জন্য একটি ব্যতিক্রম রাখা হয়েছে: যখন Flow-Through Entity নিজেই UPE, তখন ১৭.৪-এ বর্ণিত "Group-বহির্ভূত মালিকের অংশ বাদ দেওয়া"-র সাধারণ নিয়মটি সরাসরি প্রয়োগ হয় না। পরিবর্তে, UPE-স্তরের GloBE Income or Loss মূলত UPE-র নিজের কাছেই ধরে রাখা হয়, এবং তারপর একটি পৃথক ও বিস্তারিত নিয়মকাঠামোর মাধ্যমে তা পরিচালিত হয়, যা মূলত Top-up Tax দায় বণ্টনের প্রশ্নের সাথে সম্পর্কিত।

এই বিস্তারিত নিয়মকাঠামোটি GloBE Model Rules-এর **Article 7.1**-এ পাওয়া যায়, যা "Flow-through Ultimate Parent Entity"-র জন্য নির্দিষ্ট সমন্বয় (adjustment) নির্ধারণ করে। বর্তমান অধ্যায়ের উদ্দেশ্য কেবল এই বিষয়টির পূর্বসূচনা দেওয়া — যে Article 3.5 আয় বণ্টনের সাধারণ কাঠামো তৈরি করে, কিন্তু যখন সেই কাঠামোর কেন্দ্রে থাকা সত্তাটিই Group-এর UPE, তখন Article 7.1-এর বিশেষ সমন্বয়-নিয়ম প্রয়োজন হয়ে পড়ে, যা এই বইয়ের পরবর্তী পার্টে বিস্তারিতভাবে আলোচিত হবে। এখানে এটুকু মনে রাখা যথেষ্ট: **Flow-Through UPE**-র ক্ষেত্রে আয় বণ্টনের প্রশ্নটি একটি সরল "মালিকানা-অনুপাতে ভাগ করে দেওয়া" প্রশ্ন নয়, বরং তার সাথে জড়িয়ে আছে সংশ্লিষ্ট Top-up Tax কে কোন জুরিসডিকশনে ধরা হবে তার প্রশ্নও — এবং সেই জটিলতা সমাধানের জন্যই Article 7.1-এর অস্তিত্ব।

## ১৭.৬ শৃঙ্খলবদ্ধ (chained) Flow-Through কাঠামো

ব্যবহারিক ক্ষেত্রে প্রায়ই দেখা যায় যে একটি Flow-Through Entity-র মালিকও নিজে আরেকটি Flow-Through Entity — অর্থাৎ একাধিক স্তরের কর-স্বচ্ছ সত্তা একটির উপর আরেকটি বসানো, যাকে বলা যায় শৃঙ্খলবদ্ধ বা "chained" Flow-Through কাঠামো। যেমন একটি নিম্ন-স্তরের operating partnership-এর মালিক একটি মধ্য-স্তরের holding LLC, এবং সেই LLC-র মালিক আবার একটি উপরের স্তরের partnership, এবং তার উপরে থাকে চূড়ান্ত Group Constituent Entity।

এই ধরনের কাঠামোতে Article 3.5-এর নিয়ম প্রতিটি স্তরে ক্রমান্বয়ে (sequentially) প্রয়োগ করতে হয় — একেবারে নিচের সত্তা থেকে শুরু করে উপরের দিকে। প্রথমে সবচেয়ে নিচের Flow-Through Entity-র আয় (PE-বরাদ্দের পর) তার সরাসরি মালিকের (যে নিজেও একটি Flow-Through Entity) কাছে বণ্টিত হয়। সেই বণ্টিত অংশ তখন সেই দ্বিতীয় স্তরের সত্তার নিজস্ব GloBE Income-এর অংশ হয়ে যায়, এবং সেই সত্তার নিজের আয়ের (যদি থাকে) সাথে যুক্ত হয়ে আবার তার মালিকানা-কাঠামো অনুযায়ী তার নিজের মালিকদের কাছে বণ্টিত হয় — এভাবে যতগুলো স্তর থাকুক, প্রতিটি স্তরে একই প্রক্রিয়া পুনরাবৃত্তি হতে থাকে, যতক্ষণ না আয়টি এমন কোনো Constituent Entity-র কাছে পৌঁছায় যেটি নিজে Flow-Through Entity নয় (অর্থাৎ যার জুরিসডিকশনে সে একটি স্বাভাবিক করদাতা), বা Group-এর বাইরে চলে যায়, বা কোথাও Reverse Hybrid হিসেবে থমকে যায়।

এই ধরনের শৃঙ্খলে দুটি বিষয়ে সতর্ক থাকা প্রয়োজন। প্রথমত, প্রতিটি স্তরে ১৭.২ এবং ১৭.৩-এর পরীক্ষা (স্বচ্ছ নাকি Reverse Hybrid) আলাদাভাবে করতে হবে, কারণ একটি স্তরে সত্তাটি স্বচ্ছ হলেও পরের স্তরে তা Reverse Hybrid হয়ে যেতে পারে — জুরিসডিকশনগত দৃষ্টিভঙ্গি প্রতিটি স্তরে ভিন্ন হতে পারে। দ্বিতীয়ত, যদি শৃঙ্খলের কোনো একটি স্তরে Group-বহির্ভূত মালিক (১৭.৪) প্রবেশ করে, তাহলে সেই স্তরের পর থেকে তার আনুপাতিক অংশ সম্পূর্ণভাবে বাদ পড়ে যাবে এবং শৃঙ্খলের বাকি অংশে তা আর প্রবাহিত হবে না। ফলে দীর্ঘ শৃঙ্খলে সঠিক বণ্টনের জন্য প্রতিটি স্তরের মালিকানা-শতাংশ, স্বচ্ছতার অবস্থান এবং Group-সদস্যতা আলাদাভাবে নথিবদ্ধ রাখা ব্যবহারিকভাবে অপরিহার্য।

## ১৭.৭ সংখ্যাগত উদাহরণ

নিচের উদাহরণে Article 3.5-এর সম্পূর্ণ বণ্টন-ক্রম — PE বরাদ্দ, Group-বহির্ভূত মালিকের অংশ বাদ দেওয়া, এবং Group মালিকের কাছে অবশিষ্টাংশের বণ্টন — একসাথে দেখানো হয়েছে।

**পরিস্থিতি:** FT একটি partnership, যা Jurisdiction A-তে প্রতিষ্ঠিত এবং সেখানে Tax Transparent Entity হিসেবে গণ্য। FT-র মালিকানা দুইজনের হাতে: Parent Co (P) — যা MNE Group-এর একটি Constituent Entity — ৭০% মালিকানার অধিকারী, এবং একজন বহিরাগত বিনিয়োগকারী X, যিনি Group-এর সদস্য নন, ৩০% মালিকানার অধিকারী। FT তার ব্যবসার একটি অংশ Jurisdiction B-তে একটি PE-এর মাধ্যমে পরিচালনা করে। রিপোর্টিং বছরে FT-র মোট GloBE Income হলো USD 1,000,000; Article 3.4-এর নিয়ম অনুযায়ী এর মধ্যে USD 200,000 PE-কে বরাদ্দযোগ্য বলে নির্ধারিত হয়েছে।

| ধাপ | বিবরণ | পরিমাণ (USD) |
|---|---|---|
| ১ | FT-র মোট GloBE Income (বণ্টনের আগে) | 1,000,000 |
| ২ | বাদ: Article 3.4 অনুযায়ী Jurisdiction B-র PE-কে বরাদ্দ | (200,000) |
| ৩ | PE-বরাদ্দের পর FT-স্তরে অবশিষ্ট আয় | 800,000 |
| ৪ | বাদ: Group-বহির্ভূত মালিক X-এর অংশ (৩০% × 800,000) — Article 3.5 অনুযায়ী বর্জিত | (240,000) |
| ৫ | Group Constituent Entity মালিকের কাছে বণ্টনযোগ্য অবশিষ্টাংশ | 560,000 |
| ৬ | P-কে বরাদ্দ (৭০% × 800,000), P-র নিজস্ব GloBE Income-এর অংশ হিসেবে যুক্ত | 560,000 |

মিলকরণ: PE-কে বরাদ্দিত USD 200,000 + P-কে বরাদ্দিত USD 560,000 + X-এর বর্জিত অংশ USD 240,000 = USD 1,000,000, যা FT-র মূল মোট আয়ের সমান। লক্ষণীয়, X-এর অংশটি কোনো Constituent Entity-র হিসাবে যোগ হয়নি — তা সম্পূর্ণভাবে GloBE গণনার বাইরে থেকে গেছে, কারণ X নিজে Group-এর সদস্য নয়।

**রূপভেদ — Reverse Hybrid পরিস্থিতি:** এখন ধরা যাক, X-এর পরিবর্তে FT-র ৩০% মালিকানা একটি Constituent Entity R-এর হাতে, যা একই Group-এর সদস্য, কিন্তু R-এর জুরিসডিকশন FT-কে অস্বচ্ছ (opaque) সত্তা হিসেবে গণ্য করে — অর্থাৎ R-এর দৃষ্টিকোণ থেকে FT একটি পৃথক করদাতা। এই ক্ষেত্রে R-এর ৩০% অংশ (USD 240,000) R-এর কাছে প্রবাহিত হবে না; বরং ১৭.৩-এর Reverse Hybrid নিয়ম অনুযায়ী তা FT-র নিজের কাছেই GloBE Income হিসেবে থেকে যাবে, এবং FT নিজে Jurisdiction A-তে একটি পৃথক Constituent Entity হিসেবে তার ETR গণনায় সেই USD 240,000 অন্তর্ভুক্ত করবে। এই পরিবর্তনে চূড়ান্ত ফলাফল হয়: PE (USD 200,000) + P (USD 560,000) + FT নিজে (USD 240,000) = USD 1,000,000 — অর্থাৎ পুরো আয়টিই এবার GloBE হিসাবের আওতায় থাকে, কোনো অংশ বর্জিত হয় না, কারণ এবার মালিক R নিজেই Group-এর সদস্য।

## সারসংক্ষেপ

Flow-Through Entity নিজে সাধারণত করদাতা না হওয়ায়, তার GloBE Income or Loss কোথায় যুক্ত হবে তা Article 3.5 একটি নির্দিষ্ট ক্রমে নির্ধারণ করে। প্রথমে PE-এর সাথে সম্পর্কিত আয় Article 3.4 অনুযায়ী পৃথক করে PE-কে বরাদ্দ করা হয়। অবশিষ্ট আয় মালিকানা-অনুপাতে মালিকদের মধ্যে বণ্টিত হয়, তবে শুধু তখনই যখন সংশ্লিষ্ট মালিক FT-কে স্বচ্ছ হিসেবে গণ্য করে (Tax Transparent Entity পরিস্থিতি)। যদি মালিকের জুরিসডিকশন সত্তাটিকে অস্বচ্ছ হিসেবে দেখে, তাহলে সেই অংশ সত্তার নিজের কাছেই থেকে যায় — এটিই Reverse Hybrid Entity নিয়ম, যা নিশ্চিত করে যে কোনো আয় হিসাবের বাইরে হারিয়ে না যায়। যে অংশ Group-বহির্ভূত মালিকের ভাগে পড়ে, তা সম্পূর্ণভাবে GloBE গণনা থেকে বাদ পড়ে, কারণ GloBE কেবল Group-এর নিজস্ব সদস্যদের আয়ের উপর প্রযোজ্য। যখন Flow-Through Entity নিজেই Group-এর UPE হয়, তখন এই সাধারণ নিয়মগুলো সরাসরি খাটে না, বরং Article 7.1-এর বিশেষ সমন্বয়-নিয়ম প্রয়োজন হয়, যা পরে বিস্তারিতভাবে আলোচিত হবে। শৃঙ্খলবদ্ধ কাঠামোতে এই সমস্ত নিয়ম প্রতিটি স্তরে ক্রমান্বয়ে পুনরায় প্রয়োগ করতে হয়, নিচের স্তর থেকে উপরের দিকে।

## সাধারণ ভুল

একটি সাধারণ ভুল হলো PE-এর জন্য পৃথক বরাদ্দ না করে সরাসরি মোট আয়টিকে মালিকানা-অনুপাতে ভাগ করে ফেলা — এতে PE-র জুরিসডিকশনে যে আয় থাকা উচিত তা ভুলভাবে মালিকের জুরিসডিকশনের হিসাবে চলে যায়। আরেকটি ভুল হলো ধরে নেওয়া যে একটি সত্তা "যেহেতু কর-স্বচ্ছ" তাই তার সব মালিকের ক্ষেত্রেই একই আচরণ প্রযোজ্য হবে — বাস্তবে স্বচ্ছতা মালিকভেদে ভিন্ন হতে পারে, এবং একই সত্তা একজন মালিকের কাছে Tax Transparent ও অন্য মালিকের কাছে Reverse Hybrid হিসেবে আচরণ পেতে পারে। তৃতীয় একটি ভুল হলো Group-বহির্ভূত মালিকের অংশ বাদ দেওয়ার নিয়মটিকে ভুলভাবে সব ধরনের যৌথ-মালিকানা কাঠামোতে (যেমন Joint Venture-এর ক্ষেত্রে, যার নিজস্ব বিশেষ নিয়ম রয়েছে) নির্বিচারে প্রয়োগ করা। চতুর্থত, যখন UPE নিজেই একটি Flow-Through Entity, তখন সাধারণ Article 3.5-এর বণ্টন-নিয়ম যান্ত্রিকভাবে প্রয়োগ করে ফেলা এবং Article 7.1-এর বিশেষ সমন্বয় উপেক্ষা করা একটি ঝুঁকিপূর্ণ ভুল, যা ভুল Top-up Tax বণ্টনের দিকে নিয়ে যেতে পারে। সবশেষে, শৃঙ্খলবদ্ধ কাঠামোতে প্রতিটি স্তরের মালিকানা-শতাংশ ও স্বচ্ছতার অবস্থান আলাদাভাবে যাচাই না করে পুরো শৃঙ্খলে একই ধরনের আচরণ ধরে নেওয়া একটি প্রচলিত এবং বিপজ্জনক সরলীকরণ।
