---
title:
  en: "GIR Exchange and Technical Aspects"
  bn: "GIR-এর তথ্য বিনিময় ও প্রযুক্তিগত দিক"
chapter: 52
part: 10
partTitle:
  en: "Compliance, GIR, and Self-Assessment · Chapter 8"
  bn: "Compliance, GIR ও Self-Assessment · Chapter 8"
slug: "ch-52-gir-exchange-technical"
---

<!-- lang:en -->

# Chapter 52 — GIR Exchange and Technical Aspects

> **In this chapter:** the GloBE Information Return, or **GIR (GloBE Information Return)** — the standardized information return filable under Pillar Two — is not enough merely to be produced as a document; this chapter discusses how it is converted into a standardized **XML Schema**, how it is exchanged automatically between tax authorities, how confidentiality is protected in this process, and what happens if centralized filing fails.

## 52.1 The Structure of the GIR XML Schema

The GIR is fundamentally a structured information return that must be produced in a specific technical format, so that the tax administrations of different countries can receive, process, and exchange the information in the same manner. The **GIR XML Schema** is used for this purpose — a standardized XML structure that determines where, under which tag, and in which format each piece of GIR information is to be placed. This structure is conceptually similar to the XML structure already established for **Country-by-Country Reporting (CbCR)**, because both operate within the same kind of multilateral automatic information-exchange system.

Structurally, the GIR XML Schema can be viewed as divided into several levels. The first level contains the **message header** — this holds the identity of the sending authority, the identity of the receiving authority, the date the message was created, the reporting year, and the type of message (a new filing, an amendment, or a withdrawal). The second level contains identifying information relating to the **Constituent Entity** — the name of the multinational group, the identity of the **Ultimate Parent Entity (UPE)**, and a list of the constituent entities located in each jurisdiction along with their tax identification numbers. The third level contains the core content — jurisdiction-based computational information, which includes the **Effective Tax Rate (ETR)** computation, the Top-up Tax computation, declarations of the application of a **Safe Harbour**, and information relating to elections.

This structure is generally composed of a "General Section" and multiple "Jurisdictional Sections," because, in accordance with the core principle of Pillar Two, the computation is carried out on a jurisdictional basis (jurisdictional blending). Within each Jurisdictional Section there is, in turn, an entity-based sub-part, which holds the financial information of each Constituent Entity separately. This layering is designed so that, from a single filing, only the parts necessary for various recipient authorities can be selectively sent to them — this point is discussed in greater detail in the next section.

An important feature of the XML structure is that specific data types and length limits are set for numerical values, dates, currency codes, and text elements, so that the systems of different countries can automatically read and process files sent by one another without human intervention. For this reason, a taxpayer entity or the entity filing on its behalf must, in preparing the GIR, ensure not only substantive accuracy but also structural accuracy (schema conformance).

## 52.2 Data Elements, Validation, and Error Messages

From a technical standpoint, every data element in the GIR can be divided into three main categories: (a) identifying data elements, such as the entity's name, address, and tax identification number; (b) numerical computational elements, such as GloBE income, covered taxes, ETR, and the amount of Top-up Tax; and (c) indicator or flag-type elements, such as a yes/no identification of whether a Safe Harbour applies, whether an election has been made, or whether the De Minimis Exclusion applies.

Before a GIR file is accepted into a tax authority's system, it undergoes **validation** at several levels. The first level is structural validation — that is, whether the file has been produced in accordance with the rules of the XML structure, whether all required tags are present, and whether the value of each element is consistent with its specified data type. If a mandatory element is missing, or text appears in place of a numerical value, the file is rejected at this initial stage and a structural error message (schema-validation error) is generated.

The second level is business-rule or logical validation. At this level, the internal consistency of a structurally correct file is checked — for example, whether a jurisdiction's total Top-up Tax matches the sum of the amounts allocated among its constituent entities, whether the declared ETR is mathematically consistent with the given income and tax information, or whether, if an election has been made, the corresponding required supporting information is present. If such an inconsistency is found, a business-rule error message is generally generated, giving the taxpayer the opportunity to correct and refile.

The third level is recipient-specific validation — when a centrally filed GIR is transmitted to another jurisdiction through automatic information exchange, the receiving authority's system also independently validates the acceptability of the file. If the receiving system fails to process the file, a receipt/acknowledgement error message is generally returned to the sending authority, which the sending authority may then notify to the relevant taxpayer or filing entity.

Practically important is the fact that these validation processes are multi-layered and sequential — if there is an error at one level, validation at the next level does not proceed. A multinational group's tax department, or the filing entity appointed on its behalf, should therefore complete its own internal (pre-submission) validation before filing, so as to reduce the risk of rejection or delay at the time of final filing.

## 52.3 The Structure of Automatic Information Exchange

The administrative design of Pillar Two assumes that a multinational group will generally file its GIR centrally in a single jurisdiction — either the jurisdiction of the Ultimate Parent Entity or that of a designated filing entity. This method is called centralized filing. That jurisdiction's tax authority then selects the relevant portions from the information received and transmits them, through **automatic exchange of information**, to the other jurisdictions in which the group has entities or in which there is a tax-administrative interest.

This exchange is made possible under a multilateral legal framework, which is essentially formed as a **Qualifying Competent Authority Agreement (QCAA)**. This agreement determines which jurisdictions can exchange GIR information with one another, what information will be exchanged, within what time the exchange must be completed, and what conditions will be imposed on the use of the received information. This framework is conceptually analogous to the multilateral competent-authority agreement established for CbCR, under which information filed in one jurisdiction automatically reaches the relevant other jurisdictions, so that the taxpayer does not have to file separately in each jurisdiction.

Within the automatic information-exchange structure, information is generally not exchanged "in full" — rather, a "selective dissemination" model is followed. This means a particular jurisdiction receives only the portion relevant to its tax-administrative need — for instance, where a constituent entity of the group is located, or where a relationship exists under which income inclusion or the Undertaxed Profits Rule may apply. As a result, the GIR XML Schema is designed so that the general part (applicable to all recipients) and the jurisdiction-specific part (applicable only to the relevant jurisdiction) can be separately identified.

The timeline for information exchange is also an important part of this structure. Information is expected to reach the recipient jurisdictions within a specified time after the completion of central filing, so that the local tax administration can carry out its own verification and risk-monitoring activities. From the perspective of a multinational group, the practical significance of this is that, even though filing is done once in the centralized-filing jurisdiction, local questions or information requests may arrive at different times in different jurisdictions, owing to differences in when the information reaches each recipient jurisdiction.

## 52.4 Confidentiality and Data Protection

The information contained in the GIR is highly sensitive — it includes a multinational group's internal tax structure, jurisdiction-based profit and tax information, and detailed information relating to elections. For this reason, the entire structure of automatic information exchange operates under strict confidentiality and data-protection conditions.

First, the basis for exchange is generally founded on an existing international agreement on tax information exchange or administrative assistance (within which confidentiality provisions are inherent). As a result, a jurisdiction can exchange GIR information with another jurisdiction only when it can be confirmed that adequate confidentiality-preservation measures, data-protection standards, and use restrictions exist in that jurisdiction. This assessment process is often called the confidentiality and data safeguards assessment, which is similar to the assessment procedure also followed under the CbCR framework.

Second, a "restricted use" rule applies — the GIR information received can be used only for Pillar-Two-related risk monitoring, verifying the proper application of the rules, and, as needed, economic or statistical analysis; there may be restrictions on its use for any other purpose, such as using it as the sole basis for initiating a direct audit on a different tax matter, unless that use is consistent with the terms of the relevant agreement.

Third, arrangements relating to data retention and destruction are also important. The receiving authority must store the received information in a specific secure system, keep internal access restricted, and destroy or erase the information in a timely manner, in the manner prescribed under the relevant information-exchange agreement, if the exchange relationship is suspended or terminated.

Fourth, if a receiving jurisdiction breaches confidentiality or fails to maintain data-protection standards, the sending jurisdiction has the power to suspend the information exchange with that jurisdiction. This kind of protective arrangement serves as an important assurance for multinational groups, because it ensures that sensitive tax information will not spread uncontrollably.

From the taxpayer's perspective, the practical significance here is that the assurance of confidentiality functions as a precondition for cooperation in filing the GIR, but it does not relieve the taxpayer of its own internal data-security management. A multinational group's tax department should understand which information in the GIR is reaching which jurisdiction, so that internal communication and audit preparation can be coordinated accordingly.

## 52.5 Reverting to Local Filing When Centralized Filing Fails

While the centralized filing method is convenient, it is a dependent structure — that is, for it to function, an effective and active automatic information-exchange relationship must exist between the filing jurisdiction and the receiving jurisdiction. If this relationship is absent, or breaks down for any reason, a local filing obligation is activated — that is, the local constituent entity itself must file the GIR (or its relevant part) directly with the relevant local tax administration.

This situation generally arises for a few reasons. First, the absence of a Qualifying Competent Authority Agreement, or of an active bilateral exchange relationship under it, between the filing jurisdiction and the local jurisdiction — that is, both parties may be structurally part of the agreement while their actual exchange relationship has not been activated between them. Second, the filing jurisdiction failing to transmit the information within the prescribed deadline — often called a "systemic failure," such as a technical error, administrative delay, or the exchange system being temporarily suspended. Third, a jurisdiction itself remaining outside the information exchange — for example, if that jurisdiction has not yet joined the Pillar-Two-related multilateral information-exchange framework.

This arrangement of reverting to local filing functions as a backstop mechanism, ensuring that no jurisdiction is deprived of the information it is entitled to due to an administrative or technical failure between tax authorities. Its practical significance for multinational groups is important — because although this failure occurs outside the taxpayer's control, the filing obligation falls on the taxpayer itself. Groups operating in many jurisdictions should therefore regularly monitor the status of the exchange relationship in each relevant jurisdiction, so that exclusive reliance on centralized filing does not create the risk of an unexpected local filing obligation in some jurisdiction.

A practical approach here is to keep the relevant jurisdictional part of the GIR ready for each constituent jurisdiction alongside the centralized filing, so that, if the exchange relationship is disrupted, a local filing can be made quickly without breaching the deadline. In some jurisdictions this preparatory step effectively becomes mandatory, because news of a broken exchange relationship does not always reach the taxpayer in advance.

## 52.6 Practical Advice for Preparation

Having understood this technical and administrative framework, several practical preparatory steps become important for a multinational group's tax and information-technology departments.

First, it is necessary to establish a data governance framework so that the source, ownership, and validation process of every data element of the GIR is clearly identified. Since GIR information brings together the financial and tax information of multiple entities across multiple jurisdictions, a clear map (data lineage) is needed of which information comes from which source system and how it is being consolidated.

Second, an internal, multi-level validation exercise should be conducted before filing, testing both structural accuracy and business-rule consistency — so as to reduce the likelihood of receiving error messages at the time of final filing and to avoid the need to refile for correction.

Third, the status of exchange relationships should be regularly monitored — that is, monitoring with which jurisdictions an active bilateral exchange relationship has been established and where it is still absent or temporarily suspended, and preparing for local filing accordingly.

Fourth, internal confidentiality management should be ensured — restricting the access of individuals involved in the preparation and filing of the GIR, and remaining internally aware of which jurisdictions the information may reach, so that the relevant local branches can respond in a coordinated manner if necessary.

Fifth, adequate margin should be kept in deadline management — since correcting errors caught in structural and business-rule validation may require time for correction and refiling, plans to file right at the last day of the deadline should be avoided.

## Summary

The technical and administrative aspects of the GIR form a multi-layered system — one in which, alongside substantive accuracy, structural accuracy (compliance with the GIR XML Schema) must also be ensured. Information filed centrally by a multinational group reaches other jurisdictions selectively through automatic information exchange under a Qualifying Competent Authority Agreement, operating under strict confidentiality and data-protection conditions. If this centralized arrangement fails for any reason, a local filing obligation is activated as a protective mechanism, the burden of which falls on the taxpayer. Given this reality, a multinational group should build a coordinated system of pre-filing validation, mapping of information sources, monitoring of exchange relationships, and local preparedness.

## Common Mistakes

A common mistake is to assume that preparing a substantively correct GIR is enough for the filing to succeed — errors found in structural and business-rule validation can cause the file to be rejected, creating the risk of breaching the deadline. Another mistake is to regard centralized filing as an automatic and guaranteed arrangement and not to check the status of the exchange relationship with a given jurisdiction — as a result, if the exchange relationship is absent or disrupted, the local filing obligation goes unnoticed. Some groups treat confidentiality protection as a substitute for the taxpayer's own internal data-security responsibility, which is wrong — the confidentiality conditions of the multilateral framework are not a replacement for the taxpayer's internal security management, but merely a complement to it. Finally, many groups wait until the very last moment to file, with the result that, if any error is found in validation, there is not enough time left for correction and refiling.

<!-- lang:bn -->

# অধ্যায় ৫২ — GIR-এর তথ্য বিনিময় ও প্রযুক্তিগত দিক

> **এই অধ্যায়ে:** GloBE তথ্য বিবরণী বা **GIR (GloBE Information Return)** — পিলার টু-এর অধীনে দাখিলযোগ্য প্রমিত তথ্য বিবরণী — কেবল একটি নথি তৈরি করাই যথেষ্ট নয়; এটি কীভাবে একটি প্রমিত **XML Schema (এক্সএমএল কাঠামো)**-তে রূপান্তরিত হয়, কীভাবে কর কর্তৃপক্ষগুলোর মধ্যে স্বয়ংক্রিয়ভাবে বিনিময় হয়, এই প্রক্রিয়ায় গোপনীয়তা কীভাবে রক্ষা করা হয়, এবং কেন্দ্রীয় দাখিল ব্যর্থ হলে কী ঘটে — এই অধ্যায়ে সেই প্রযুক্তিগত ও প্রশাসনিক দিকগুলো আলোচনা করা হয়েছে।

## ৫২.১ GIR XML Schema-র কাঠামো

GIR মূলত একটি কাঠামোগত তথ্য বিবরণী যা একটি নির্দিষ্ট প্রযুক্তিগত ফরম্যাটে তৈরি করতে হয়, যাতে বিভিন্ন দেশের কর প্রশাসন একই পদ্ধতিতে তথ্য গ্রহণ, প্রক্রিয়াকরণ এবং বিনিময় করতে পারে। এই উদ্দেশ্যে ব্যবহৃত হয় **GIR XML Schema** — একটি প্রমিত এক্সএমএল কাঠামো যা নির্ধারণ করে দেয় GIR-এর কোন তথ্য কোথায়, কোন ট্যাগের অধীনে এবং কোন ফরম্যাটে থাকবে। এই কাঠামোটি দেশ-ভিত্তিক প্রতিবেদন বা **Country-by-Country Reporting (CbCR)**-এর জন্য ইতিমধ্যে প্রতিষ্ঠিত এক্সএমএল কাঠামোর সাথে ধারণাগতভাবে সাদৃশ্যপূর্ণ, কারণ দুটোই একই ধরনের বহুপাক্ষিক স্বয়ংক্রিয় তথ্য বিনিময় ব্যবস্থার মধ্যে কাজ করে।

কাঠামোগতভাবে GIR XML Schema-কে কয়েকটি স্তরে ভাগ করে দেখা যায়। প্রথম স্তরে থাকে **message header (বার্তার শীর্ষলিপি)** — এখানে থাকে প্রেরক কর্তৃপক্ষের পরিচিতি, প্রাপক কর্তৃপক্ষের পরিচিতি, বার্তা তৈরির তারিখ, রিপোর্টিং বছর এবং বার্তার ধরন (নতুন দাখিল, সংশোধন, বা প্রত্যাহার)। দ্বিতীয় স্তরে থাকে **Constituent Entity (গঠনকারী সত্তা)**-সম্পর্কিত পরিচিতিমূলক তথ্য — বহুজাতিক গোষ্ঠীর নাম, চূড়ান্ত মূল সত্তা বা **Ultimate Parent Entity (UPE)**-র পরিচয়, এবং প্রতিটি এখতিয়ারে অবস্থিত গঠনকারী সত্তাগুলোর তালিকা ও তাদের করনির্ধারণী শনাক্তকরণ নম্বর। তৃতীয় স্তরে থাকে মূল বিষয়বস্তু — জুরিসডিকশন-ভিত্তিক গণনা তথ্য, যার মধ্যে অন্তর্ভুক্ত থাকে কার্যকর কর হার বা **Effective Tax Rate (ETR)** গণনা, টপ-আপ ট্যাক্স গণনা, নিরাপদ আশ্রয় বা **Safe Harbour** প্রয়োগের ঘোষণা, এবং নির্বাচনসমূহ (elections) সম্পর্কিত তথ্য।

এই কাঠামোটি সাধারণত একটি "সাধারণ অংশ" (General Section) এবং একাধিক "জুরিসডিকশন অংশ" (Jurisdictional Section) নিয়ে গঠিত হয়, কারণ পিলার টু-এর মূলনীতি অনুযায়ী গণনা এখতিয়ার-ভিত্তিতে (jurisdictional blending) করা হয়। প্রতিটি জুরিসডিকশন অংশের ভেতরে আবার এনটিটি-ভিত্তিক উপ-অংশ থাকে, যেখানে প্রতিটি গঠনকারী সত্তার আর্থিক তথ্য পৃথকভাবে ধারণ করা হয়। এই স্তরবিন্যাস এমনভাবে করা হয়েছে যাতে একটি একক দাখিল থেকে বিভিন্ন প্রাপক কর্তৃপক্ষের জন্য প্রয়োজনীয় শুধুমাত্র সেই অংশগুলো নির্বাচনভাবে (selectively) পাঠানো সম্ভব হয় — এই বিষয়টি পরবর্তী অনুচ্ছেদে আরও বিশদে আলোচিত হয়েছে।

এক্সএমএল কাঠামোর একটি গুরুত্বপূর্ণ বৈশিষ্ট্য হলো এতে সংখ্যাগত মান, তারিখ, মুদ্রা কোড এবং পাঠ্য উপাদানের জন্য নির্দিষ্ট ডেটা টাইপ ও দৈর্ঘ্যসীমা বেঁধে দেওয়া হয়, যাতে বিভিন্ন দেশের সিস্টেম একে অপরের পাঠানো ফাইল স্বয়ংক্রিয়ভাবে পড়তে এবং প্রক্রিয়া করতে পারে মানুষের হস্তক্ষেপ ছাড়াই। এই কারণে করদাতা প্রতিষ্ঠান বা তার পক্ষে দাখিলকারী সত্তাকে GIR তৈরি করার সময় কেবল বিষয়বস্তুগত সঠিকতা নিশ্চিত করলেই চলে না — কাঠামোগত সঠিকতাও (schema conformance) নিশ্চিত করতে হয়।

## ৫২.২ ডেটা উপাদান, বৈধতা যাচাই ও ত্রুটি বার্তা

GIR-এর প্রতিটি তথ্য উপাদানকে (data element) প্রযুক্তিগত দৃষ্টিকোণ থেকে তিনটি প্রধান শ্রেণিতে ভাগ করা যায়: (ক) পরিচিতিমূলক তথ্য উপাদান, যেমন সত্তার নাম, ঠিকানা, করনির্ধারণী নম্বর; (খ) সংখ্যাগত গণনা উপাদান, যেমন GloBE আয়, কভারড ট্যাক্স, ETR, টপ-আপ ট্যাক্সের পরিমাণ; এবং (গ) সূচক বা পতাকা-ধরনের উপাদান (indicator/flag elements), যেমন কোনো নিরাপদ আশ্রয় প্রযোজ্য কিনা, কোনো নির্বাচন করা হয়েছে কিনা, বা ডে-মিনিমিস বর্জন প্রযোজ্য কিনা তার হ্যাঁ/না চিহ্নিতকরণ।

একটি GIR ফাইল কর কর্তৃপক্ষের সিস্টেমে গ্রহণযোগ্য হওয়ার আগে একাধিক স্তরে বৈধতা যাচাই বা **validation** সম্পন্ন হয়। প্রথম স্তর হলো কাঠামোগত যাচাই — অর্থাৎ ফাইলটি এক্সএমএল কাঠামোর নিয়ম মেনে তৈরি হয়েছে কিনা, প্রয়োজনীয় সব ট্যাগ উপস্থিত আছে কিনা, এবং প্রতিটি উপাদানের মান নির্ধারিত ডেটা টাইপের সাথে সামঞ্জস্যপূর্ণ কিনা। যদি কোনো আবশ্যিক (mandatory) উপাদান অনুপস্থিত থাকে, বা কোনো সংখ্যাগত মানের জায়গায় পাঠ্য থাকে, তাহলে ফাইলটি প্রাথমিক পর্যায়েই প্রত্যাখ্যাত হয় এবং একটি কাঠামোগত ত্রুটি বার্তা (schema-validation error) তৈরি হয়।

দ্বিতীয় স্তর হলো বাণিজ্যিক নিয়ম বা যুক্তিগত যাচাই (business-rule validation)। এই স্তরে কাঠামোগতভাবে সঠিক একটি ফাইলের অভ্যন্তরীণ সামঞ্জস্যতা পরীক্ষা করা হয় — যেমন, কোনো জুরিসডিকশনের মোট টপ-আপ ট্যাক্স এবং তার অন্তর্গত এনটিটিগুলোর মধ্যে বরাদ্দকৃত অংশের সমষ্টি মিলছে কিনা, ঘোষিত ETR গণনার সাথে দেওয়া আয় ও কর তথ্যের গাণিতিক সামঞ্জস্য আছে কিনা, বা একটি নির্বাচন (election) করা হলে সংশ্লিষ্ট প্রয়োজনীয় সহায়ক তথ্য উপস্থিত আছে কিনা। এই ধরনের অসামঞ্জস্য পাওয়া গেলে সাধারণত একটি বাণিজ্যিক-নিয়ম ত্রুটি বার্তা (business-rule error) তৈরি হয়, যা করদাতাকে সংশোধন করে পুনরায় দাখিল করার সুযোগ দেয়।

তৃতীয় স্তর হলো প্রাপক-নির্দিষ্ট যাচাই — যখন একটি কেন্দ্রীয়ভাবে দাখিল করা GIR স্বয়ংক্রিয় তথ্য বিনিময়ের মাধ্যমে অন্য কোনো এখতিয়ারে প্রেরিত হয়, তখন প্রাপক কর্তৃপক্ষের সিস্টেমও নিজস্বভাবে ফাইলটি গ্রহণযোগ্যতা যাচাই করে। যদি প্রাপক পক্ষের সিস্টেম ফাইলটি প্রক্রিয়া করতে ব্যর্থ হয়, তাহলে সাধারণত একটি প্রাপ্তি-নিশ্চিতকরণ ত্রুটি বার্তা (receipt/acknowledgement error) প্রেরক কর্তৃপক্ষের কাছে ফিরে যায়, যা প্রেরক কর্তৃপক্ষ পরবর্তীতে সংশ্লিষ্ট করদাতা বা দাখিলকারী সত্তাকে অবহিত করতে পারে।

ব্যবহারিক দিক থেকে গুরুত্বপূর্ণ হলো এই যাচাইকরণ প্রক্রিয়াগুলো বহু-স্তরীয় ও ক্রমিক — একটি স্তরে ত্রুটি থাকলে পরের স্তরের যাচাই সম্পন্ন হয় না। তাই বহুজাতিক গোষ্ঠীর কর বিভাগ বা তার পক্ষে নিযুক্ত দাখিলকারী সত্তার উচিত দাখিলের আগে অভ্যন্তরীণভাবে (pre-submission validation) নিজস্ব যাচাই সম্পন্ন করা, যাতে চূড়ান্ত দাখিলের সময় প্রত্যাখ্যান বা বিলম্বের ঝুঁকি কমে।

## ৫২.৩ স্বয়ংক্রিয় তথ্য বিনিময়ের কাঠামো

পিলার টু-এর প্রশাসনিক নকশায় ধরে নেওয়া হয়েছে যে একটি বহুজাতিক গোষ্ঠী তার GIR সাধারণত একটি একক এখতিয়ারে — চূড়ান্ত মূল সত্তার এখতিয়ারে বা একটি নির্ধারিত দাখিলকারী সত্তার (designated filing entity) এখতিয়ারে — কেন্দ্রীয়ভাবে দাখিল করবে। এই পদ্ধতিটিকে বলা হয় কেন্দ্রীয় দাখিল বা centralised filing। এরপর সেই এখতিয়ারের কর কর্তৃপক্ষ প্রাপ্ত তথ্য থেকে প্রাসঙ্গিক অংশ বেছে নিয়ে অন্যান্য যেসব এখতিয়ারে গোষ্ঠীর সত্তা রয়েছে বা যেখানে কর প্রশাসনিক স্বার্থ রয়েছে, সেখানে **automatic exchange of information (স্বয়ংক্রিয় তথ্য বিনিময়)** পদ্ধতিতে প্রেরণ করে।

এই বিনিময় সম্ভব হয় একটি বহুপাক্ষিক আইনি কাঠামোর অধীনে, যা মূলত একটি যোগ্যতাসম্পন্ন কর্তৃপক্ষ চুক্তি বা **Qualifying Competent Authority Agreement (QCAA)**-এর আকারে গঠিত হয়। এই চুক্তি নির্ধারণ করে দেয় কোন কোন এখতিয়ার একে অপরের সাথে GIR তথ্য বিনিময় করতে পারবে, কোন তথ্য বিনিময় হবে, কত সময়ের মধ্যে বিনিময় সম্পন্ন হতে হবে, এবং প্রাপ্ত তথ্যের ব্যবহারের ওপর কী শর্ত আরোপিত থাকবে। এই কাঠামোটি ধারণাগতভাবে CbCR-এর জন্য প্রতিষ্ঠিত বহুপাক্ষিক কর্তৃপক্ষ চুক্তির অনুরূপ, যেখানে একটি এখতিয়ারে দাখিল করা তথ্য স্বয়ংক্রিয়ভাবে সংশ্লিষ্ট অন্যান্য এখতিয়ারে পৌঁছে যায়, ফলে করদাতাকে প্রতিটি এখতিয়ারে পৃথকভাবে দাখিল করতে হয় না।

স্বয়ংক্রিয় তথ্য বিনিময়ের কাঠামোতে সাধারণত তথ্য "সম্পূর্ণ" বিনিময় হয় না — বরং একটি "নির্বাচনভাবে ভাগ করা" (selective dissemination) মডেল অনুসরণ করা হয়। এর অর্থ, একটি নির্দিষ্ট এখতিয়ার শুধুমাত্র সেই অংশ পায় যা তার কর প্রশাসনিক প্রয়োজনের সাথে প্রাসঙ্গিক — যেমন, যেখানে গোষ্ঠীর একটি গঠনকারী সত্তা অবস্থিত, বা যেখানে আয় বরাদ্দ (income inclusion) বা নিম্ন-করহারযুক্ত মুনাফা নিয়ম (Undertaxed Profits Rule) প্রয়োগ হতে পারে এমন সম্পর্ক বিদ্যমান। ফলে GIR XML Schema-র নকশায় এমন কাঠামো রাখা হয়েছে যাতে সাধারণ অংশ (সব প্রাপকের জন্য প্রযোজ্য) এবং জুরিসডিকশন-নির্দিষ্ট অংশ (কেবল সংশ্লিষ্ট এখতিয়ারের জন্য প্রযোজ্য) পৃথকভাবে চিহ্নিত করা যায়।

তথ্য বিনিময়ের সময়সীমাও এই কাঠামোর একটি গুরুত্বপূর্ণ অংশ। কেন্দ্রীয় দাখিল সম্পন্ন হওয়ার একটি নির্দিষ্ট সময়ের মধ্যে প্রাপক এখতিয়ারগুলোতে তথ্য পৌঁছে দেওয়ার প্রত্যাশা করা হয়, যাতে স্থানীয় কর প্রশাসন তার নিজস্ব যাচাই ও ঝুঁকি নিরীক্ষণ কার্যক্রম পরিচালনা করতে পারে। বহুজাতিক গোষ্ঠীর দৃষ্টিকোণ থেকে এর ব্যবহারিক তাৎপর্য হলো — কেন্দ্রীয় দাখিলের এখতিয়ারে একবার দাখিল করলেও, বিভিন্ন প্রাপক এখতিয়ারে তথ্য পৌঁছানোর সময়ের পার্থক্যের কারণে বিভিন্ন এখতিয়ারে স্থানীয় প্রশ্ন বা তথ্য-অনুরোধ বিভিন্ন সময়ে আসতে পারে।

## ৫২.৪ গোপনীয়তা ও ডেটা সুরক্ষা

GIR-এ থাকা তথ্য অত্যন্ত সংবেদনশীল — এতে বহুজাতিক গোষ্ঠীর অভ্যন্তরীণ কর কাঠামো, জুরিসডিকশন-ভিত্তিক মুনাফা ও কর তথ্য, এবং নির্বাচনসমূহ সম্পর্কিত বিস্তারিত তথ্য থাকে। এই কারণে স্বয়ংক্রিয় তথ্য বিনিময়ের পুরো কাঠামোটি কঠোর গোপনীয়তা ও তথ্য সুরক্ষার শর্তের অধীনে পরিচালিত হয়।

প্রথমত, তথ্য বিনিময়ের ভিত্তি সাধারণত একটি বিদ্যমান কর তথ্য বিনিময় বা প্রশাসনিক সহায়তা সংক্রান্ত আন্তর্জাতিক চুক্তির (যার মধ্যে গোপনীয়তা ধারা অন্তর্নিহিত থাকে) উপর প্রতিষ্ঠিত। ফলে একটি এখতিয়ার তখনই কোনো অন্য এখতিয়ারের সাথে GIR তথ্য বিনিময় করতে পারে, যখন সেই এখতিয়ারে পর্যাপ্ত গোপনীয়তা সংরক্ষণ ব্যবস্থা, তথ্য সুরক্ষা মান এবং ব্যবহারের সীমাবদ্ধতা বিদ্যমান আছে বলে নিশ্চিত হওয়া যায়। এই মূল্যায়ন প্রক্রিয়াকে প্রায়ই বলা হয় গোপনীয়তা ও তথ্য সুরক্ষা মূল্যায়ন বা confidentiality and data safeguards assessment, যা CbCR কাঠামোতেও অনুসৃত মূল্যায়ন পদ্ধতির অনুরূপ।

দ্বিতীয়ত, "নির্দিষ্ট ব্যবহারের শর্ত" বা restricted use rule প্রযোজ্য হয় — প্রাপ্ত GIR তথ্য কেবল পিলার টু-সম্পর্কিত ঝুঁকি নিরীক্ষণ, নিয়মের সঠিক প্রয়োগ যাচাই এবং প্রয়োজন অনুসারে অর্থনৈতিক বা পরিসংখ্যানগত বিশ্লেষণের জন্য ব্যবহার করা যায়; এটি অন্য কোনো উদ্দেশ্যে, যেমন ভিন্ন কর প্রশ্নে সরাসরি নিরীক্ষা শুরু করার একমাত্র ভিত্তি হিসেবে, ব্যবহারের ওপর সীমাবদ্ধতা থাকতে পারে, যদি না তা সংশ্লিষ্ট চুক্তির শর্তের সাথে সামঞ্জস্যপূর্ণ হয়।

তৃতীয়ত, তথ্য সংরক্ষণ ও ধ্বংসকরণ সংক্রান্ত ব্যবস্থাও গুরুত্বপূর্ণ। প্রাপক কর্তৃপক্ষকে প্রাপ্ত তথ্য নির্দিষ্ট সুরক্ষিত সিস্টেমে সংরক্ষণ করতে হয়, অভ্যন্তরীণ প্রবেশাধিকার সীমিত রাখতে হয়, এবং তথ্য বিনিময় সম্পর্কিত চুক্তির অধীনে নির্ধারিত পদ্ধতিতে তথ্য যথাসময়ে ধ্বংস বা মুছে ফেলতে হয় যদি বিনিময় সম্পর্ক স্থগিত বা বাতিল হয়।

চতুর্থত, যদি কোনো প্রাপক এখতিয়ার গোপনীয়তা লঙ্ঘন করে বা তথ্য সুরক্ষা মান বজায় রাখতে ব্যর্থ হয়, তাহলে প্রেরক এখতিয়ার সেই এখতিয়ারের সাথে তথ্য বিনিময় স্থগিত করার ক্ষমতা রাখে। এই ধরনের সুরক্ষা ব্যবস্থা বহুজাতিক গোষ্ঠীর জন্য একটি গুরুত্বপূর্ণ আশ্বাস হিসেবে কাজ করে, কারণ এটি নিশ্চিত করে যে সংবেদনশীল কর তথ্য অনিয়ন্ত্রিতভাবে ছড়িয়ে পড়বে না।

করদাতা পক্ষের দৃষ্টিকোণ থেকে এখানে ব্যবহারিক গুরুত্ব হলো — গোপনীয়তার নিশ্চয়তা GIR দাখিলে সহযোগিতার একটি পূর্বশর্ত হিসেবে কাজ করে, কিন্তু এটি করদাতাকে নিজস্ব অভ্যন্তরীণ তথ্য সুরক্ষা ব্যবস্থাপনা থেকে মুক্তি দেয় না। বহুজাতিক গোষ্ঠীর কর বিভাগের উচিত GIR-এ কোন কোন তথ্য কোন এখতিয়ারে পৌঁছাচ্ছে তা বোঝা, যাতে অভ্যন্তরীণ যোগাযোগ ও নিরীক্ষা প্রস্তুতি সেই অনুযায়ী সমন্বয় করা যায়।

## ৫২.৫ কেন্দ্রীয় দাখিল ব্যর্থ হলে স্থানীয় দাখিলে ফিরে যাওয়া

কেন্দ্রীয় দাখিল পদ্ধতি সুবিধাজনক হলেও এটি একটি নির্ভরশীল কাঠামো — অর্থাৎ, এটি কার্যকর হওয়ার জন্য প্রয়োজন যে দাখিলকারী এখতিয়ার ও প্রাপক এখতিয়ারের মধ্যে একটি কার্যকর ও সক্রিয় স্বয়ংক্রিয় তথ্য বিনিময় সম্পর্ক বিদ্যমান থাকে। যদি এই সম্পর্ক অনুপস্থিত থাকে বা কোনো কারণে ভেঙে যায়, তাহলে একটি স্থানীয় দাখিল বাধ্যবাধকতা (local filing obligation) সক্রিয় হয়ে ওঠে — অর্থাৎ, স্থানীয় গঠনকারী সত্তাকে নিজেই সরাসরি সংশ্লিষ্ট স্থানীয় কর প্রশাসনের কাছে GIR (বা তার প্রাসঙ্গিক অংশ) দাখিল করতে হয়।

এই পরিস্থিতি সাধারণত কয়েকটি কারণে ঘটতে পারে। প্রথমত, দাখিলকারী এখতিয়ার এবং স্থানীয় এখতিয়ারের মধ্যে কোনো যোগ্যতাসম্পন্ন কর্তৃপক্ষ চুক্তি বা তার অধীনে সক্রিয় দ্বিপাক্ষিক বিনিময় সম্পর্ক না থাকা — অর্থাৎ উভয় পক্ষ কাঠামোগতভাবে চুক্তির অংশ হলেও তাদের মধ্যে প্রকৃত বিনিময় সম্পর্ক সক্রিয় করা না হয়ে থাকা। দ্বিতীয়ত, দাখিলকারী এখতিয়ার নির্ধারিত সময়সীমার মধ্যে তথ্য প্রেরণে ব্যর্থ হওয়া — যাকে প্রায়ই "সিস্টেমিক ব্যর্থতা" বা systemic failure বলা হয়, যেমন প্রযুক্তিগত ত্রুটি, প্রশাসনিক বিলম্ব, বা বিনিময় ব্যবস্থা সাময়িকভাবে স্থগিত থাকা। তৃতীয়ত, কোনো এখতিয়ার নিজেই তথ্য বিনিময়ের বাইরে থেকে যাওয়া — যেমন যদি সেই এখতিয়ার এখনও পিলার টু-সংশ্লিষ্ট বহুপাক্ষিক তথ্য বিনিময় কাঠামোয় যোগদান না করে থাকে।

স্থানীয় দাখিলে ফিরে যাওয়ার এই ব্যবস্থাটি একটি সুরক্ষামূলক ব্যবস্থা (backstop mechanism) হিসেবে কাজ করে, যাতে কর কর্তৃপক্ষগুলোর মধ্যে প্রশাসনিক বা প্রযুক্তিগত ত্রুটির কারণে কোনো এখতিয়ার তার প্রাপ্য তথ্য থেকে বঞ্চিত না হয়। বহুজাতিক গোষ্ঠীর জন্য এর ব্যবহারিক তাৎপর্য গুরুত্বপূর্ণ — কারণ এই ব্যর্থতা করদাতার নিয়ন্ত্রণের বাইরে ঘটলেও, দাখিল বাধ্যবাধকতা করদাতার ওপরই বর্তায়। তাই বহু এখতিয়ারে কার্যক্রম পরিচালনাকারী গোষ্ঠীগুলোর উচিত প্রতিটি প্রাসঙ্গিক এখতিয়ারে বিনিময় সম্পর্কের অবস্থা নিয়মিতভাবে পর্যবেক্ষণ করা, যাতে কেন্দ্রীয় দাখিলের ওপর একচেটিয়া নির্ভরতা কোনো এক এখতিয়ারে অপ্রত্যাশিত স্থানীয় দাখিল বাধ্যবাধকতার ঝুঁকি সৃষ্টি না করে।

এখানে একটি বাস্তবসম্মত পদ্ধতি হলো — কেন্দ্রীয় দাখিলের পাশাপাশি প্রতিটি উপাদান এখতিয়ারে GIR-এর প্রাসঙ্গিক জুরিসডিকশন-অংশ প্রস্তুত রাখা, যাতে বিনিময় সম্পর্ক ব্যাহত হলে দ্রুত স্থানীয়ভাবে দাখিল করা যায় সময়সীমা লঙ্ঘন না করে। কিছু এখতিয়ারে এই প্রস্তুতিমূলক পদক্ষেপ কার্যত বাধ্যতামূলক হয়ে দাঁড়ায়, কারণ বিনিময় সম্পর্ক ভেঙে যাওয়ার খবর সবসময় করদাতার কাছে আগেভাগে পৌঁছায় না।

## ৫২.৬ প্রস্তুতির ব্যবহারিক পরামর্শ

এই প্রযুক্তিগত ও প্রশাসনিক কাঠামো বোঝার পর বহুজাতিক গোষ্ঠীর কর ও তথ্যপ্রযুক্তি বিভাগের জন্য কয়েকটি ব্যবহারিক প্রস্তুতিমূলক পদক্ষেপ গুরুত্বপূর্ণ হয়ে ওঠে।

প্রথমত, ডেটা গভর্নেন্স বা তথ্য ব্যবস্থাপনা কাঠামো প্রতিষ্ঠা করা প্রয়োজন যাতে GIR-এর প্রতিটি ডেটা উপাদানের উৎস, মালিকানা এবং যাচাইকরণ প্রক্রিয়া স্পষ্টভাবে চিহ্নিত থাকে। যেহেতু GIR-এর তথ্য একাধিক এখতিয়ারের একাধিক সত্তার আর্থিক ও করনির্ধারণী তথ্য একত্রিত করে, তাই কোন তথ্য কোন উৎস সিস্টেম থেকে আসছে এবং তা কীভাবে সমন্বিত হচ্ছে তার একটি স্পষ্ট মানচিত্র (data lineage) রাখা প্রয়োজন।

দ্বিতীয়ত, দাখিলের আগে অভ্যন্তরীণ বহু-স্তরীয় যাচাইকরণ পরীক্ষা পরিচালনা করা উচিত, যা কাঠামোগত সঠিকতা এবং বাণিজ্যিক-নিয়ম সামঞ্জস্যতা উভয়ই পরীক্ষা করে — যাতে চূড়ান্ত দাখিলের সময় ত্রুটি বার্তা পাওয়ার সম্ভাবনা কমে এবং সংশোধনের জন্য পুনরায় দাখিলের প্রয়োজন না হয়।

তৃতীয়ত, বিনিময় সম্পর্কের অবস্থা নিয়মিত পর্যবেক্ষণ করা — অর্থাৎ কোন কোন এখতিয়ারের সাথে সক্রিয় দ্বিপাক্ষিক বিনিময় সম্পর্ক প্রতিষ্ঠিত আছে এবং কোথায় তা এখনও অনুপস্থিত বা সাময়িকভাবে স্থগিত, তা পর্যবেক্ষণ করা এবং সে অনুযায়ী স্থানীয় দাখিলের প্রস্তুতি রাখা।

চতুর্থত, অভ্যন্তরীণ গোপনীয়তা ব্যবস্থাপনা নিশ্চিত করা — GIR তৈরি ও দাখিল প্রক্রিয়ায় জড়িত ব্যক্তিদের প্রবেশাধিকার সীমিত রাখা, এবং তথ্য কোন কোন এখতিয়ারে পৌঁছাতে পারে তা অভ্যন্তরীণভাবে অবগত থাকা, যাতে সংশ্লিষ্ট স্থানীয় শাখাগুলো প্রয়োজনে সমন্বিতভাবে প্রতিক্রিয়া দিতে প্রস্তুত থাকতে পারে।

পঞ্চমত, সময়সীমা ব্যবস্থাপনায় পর্যাপ্ত মার্জিন রাখা — যেহেতু কাঠামোগত ও বাণিজ্যিক যাচাইকরণে ত্রুটি ধরা পড়লে সংশোধন ও পুনঃদাখিলের জন্য সময় প্রয়োজন হতে পারে, তাই একেবারে সময়সীমার শেষ দিনে দাখিল করার পরিকল্পনা এড়িয়ে চলা উচিত।

## সারসংক্ষেপ

GIR-এর প্রযুক্তিগত ও প্রশাসনিক দিক একটি বহুস্তরীয় ব্যবস্থা — যেখানে বিষয়বস্তুগত সঠিকতার পাশাপাশি কাঠামোগত সঠিকতাও (GIR XML Schema মেনে চলা) নিশ্চিত করতে হয়। বহুজাতিক গোষ্ঠীর কেন্দ্রীয়ভাবে দাখিল করা তথ্য স্বয়ংক্রিয় তথ্য বিনিময়ের মাধ্যমে যোগ্যতাসম্পন্ন কর্তৃপক্ষ চুক্তির অধীনে অন্যান্য এখতিয়ারে নির্বাচনভাবে পৌঁছে যায়, যা কঠোর গোপনীয়তা ও তথ্য সুরক্ষা শর্তের অধীনে পরিচালিত হয়। এই কেন্দ্রীয় ব্যবস্থা কোনো কারণে ব্যর্থ হলে স্থানীয় দাখিল বাধ্যবাধকতা একটি সুরক্ষামূলক ব্যবস্থা হিসেবে সক্রিয় হয়ে ওঠে, যার দায় করদাতার ওপরই বর্তায়। এই বাস্তবতা বিবেচনায় রেখে বহুজাতিক গোষ্ঠীর উচিত পূর্ব-দাখিল যাচাইকরণ, তথ্য উৎসের মানচিত্রায়ণ, বিনিময় সম্পর্কের পর্যবেক্ষণ এবং স্থানীয় প্রস্তুতির সমন্বিত ব্যবস্থা গড়ে তোলা।

## সাধারণ ভুল

একটি সাধারণ ভুল হলো ধরে নেওয়া যে বিষয়বস্তুগতভাবে সঠিক GIR প্রস্তুত করলেই দাখিল সফল হবে — কাঠামোগত ও বাণিজ্যিক-নিয়ম যাচাইকরণে ত্রুটি দেখা দিলে ফাইল প্রত্যাখ্যাত হতে পারে, যা সময়সীমা লঙ্ঘনের ঝুঁকি সৃষ্টি করে। আরেকটি ভুল হলো কেন্দ্রীয় দাখিলকে একটি স্বয়ংক্রিয় ও নিশ্চিত ব্যবস্থা মনে করা এবং কোনো এখতিয়ারের সাথে বিনিময় সম্পর্কের অবস্থা যাচাই না করা — ফলে বিনিময় সম্পর্ক অনুপস্থিত বা ব্যাহত হলে স্থানীয় দাখিল বাধ্যবাধকতা অগোচরে থেকে যায়। কিছু গোষ্ঠী গোপনীয়তা সুরক্ষাকে করদাতার নিজস্ব অভ্যন্তরীণ তথ্য সুরক্ষা দায়িত্বের বিকল্প মনে করে, যা ভুল — বহুপাক্ষিক কাঠামোর গোপনীয়তা শর্ত করদাতার অভ্যন্তরীণ সুরক্ষা ব্যবস্থাপনার প্রতিস্থাপক নয়, পরিপূরক মাত্র। শেষত, অনেক গোষ্ঠী দাখিলের একেবারে শেষ মুহূর্ত পর্যন্ত অপেক্ষা করে, যার ফলে যাচাইকরণে কোনো ত্রুটি পাওয়া গেলে সংশোধন ও পুনঃদাখিলের পর্যাপ্ত সময় থাকে না।
