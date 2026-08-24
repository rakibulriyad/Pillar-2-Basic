---
title:
  en: "Deferred Tax Mechanics"
  bn: "Deferred Tax মেকানিক্স"
chapter: 21
part: 4
partTitle:
  en: "Adjusted Covered Taxes · Chapter 4"
  bn: "Adjusted Covered Taxes · Chapter 4"
articles: "4.4"
slug: "ch-21-deferred-tax-mechanics"
---

<!-- lang:en -->

# Chapter 21 — Deferred Tax Mechanics

> **In this chapter:** Pillar Two's Effective Tax Rate (ETR) calculation is not complete with Current Tax alone — the **Deferred Tax Expense** in the financial accounts must be adjusted through multiple layers to convert it into GloBE's own "Total Deferred Tax Adjustment Amount"; this chapter explains, step by step with figures, every layer of that conversion — excluded portions, rate recasting, ignoring the effect of Valuation Allowance, and recapture-type exceptions.
> **Related Article:** 4.4

## 21.1 Why Temporary Differences Must Be Accounted For

In Pillar Two's Effective Tax Rate (ETR) formula, the denominator is GloBE Income and the numerator is Adjusted Covered Taxes. If Adjusted Covered Taxes captured only the Current Tax Expense, a fundamental problem would arise: because of timing mismatches between accounting income and taxable income in a given year, the actual tax burden on the same economic profit would be incorrectly reflected.

For example, if a company claims accelerated depreciation under local tax rules, taxable income will appear lower than accounting income in the earlier years, so Current Tax will be lower, and measuring ETR using Current Tax alone would show an artificially low ETR in that year — even though, over the asset's entire life cycle, the company will pay exactly the same total tax. In later years, when the depreciation reverses, taxable income will exceed accounting income and Current Tax will be higher — creating an artificially high ETR. This volatility renders single-year ETR measurement meaningless and can lead to incorrect decisions (such as unjustly imposing Top-up Tax, or wrongly avoiding it) in a multi-year Top-up Tax calculation.

To resolve this problem, the GloBE Model Rules include a rule for adding a **Deferred Tax Expense** (the tax effect of a temporary difference recorded in the financial accounts) alongside year-based Current Tax, so that the total (current + deferred) tax effect corresponding to income is captured in the same year that income is recognized. The central goal of this logic is to eliminate the timing gap caused by temporary differences and create a "smoothed" ETR that stays close to the genuine economic tax burden. But the Deferred Tax Expense from financial accounts cannot be plugged directly into GloBE, because it is built on IFRS/local GAAP's own recognition, measurement, and rate policies — which are not consistent with GloBE's 15% minimum rate logic. As a result, Article 4.4 provides a specific framework, through multiple adjustments, for converting the financial Deferred Tax Expense into a GloBE-suitable **Total Deferred Tax Adjustment Amount**.

## 21.2 The Structure of the Total Deferred Tax Adjustment Amount

The **Total Deferred Tax Adjustment Amount** is the deferred tax component added to a Constituent Entity's Adjusted Covered Taxes for a Fiscal Year. Under Article 4.4.1, the starting point for this amount is the **Deferred Tax Expense** recognized in the financial accounts as related to Covered Taxes, which is then passed through a series of specific adjustments. These adjustments can broadly be divided into four categories:

1. **Exclusionary adjustments** — portions excluded entirely from the GloBE calculation, because they relate to income/expense that itself is not captured in the GloBE Income or Loss calculation (such as Excluded Income), or because they are of an unspecified/uncertain nature (Disallowed Accruals, Unclaimed Accruals).

2. **Rate recast** — if the local tax rate is higher or lower than the 15% Minimum Rate, the Deferred Tax Expense must be recomputed excluding the effect of that higher/lower rate, effectively capped at 15%.

3. **Recognition neutralisation** — completely ignoring the effect of a Valuation Allowance or Accounting Recognition Adjustment, so that regardless of whether a DTA is recognized under accounting standards, the calculation follows GloBE's own logic.

4. **Separate treatment for special categories** — deferred tax related to Tax Credits, and deferred tax related to Excluded Income — these are separated from the general deferred tax stream and driven by their own rules.

Once these four layers have been passed through, the amount that remains is the Total Deferred Tax Adjustment Amount, which is added under Article 4.1.1 as a component of Adjusted Covered Taxes. Each of these four layers is discussed in detail in the following sections.

## 21.3 The Starting Point: Deferred Tax Expense per Financial Accounts

The starting point of the calculation is the **Deferred Tax Expense** recognized in the Constituent Entity's Financial Accounts — that is, the change in the net balance of Deferred Tax Liability (DTL) and Deferred Tax Asset (DTA) between the beginning and end of the year that has been charged or credited to the Profit and Loss / Income Statement. A few important initial boundaries must be kept in mind here:

First, only deferred tax movement related to Covered Taxes is captured here — if a deferred tax relates to a type of tax that itself does not fall within the definition of Covered Tax (for example, certain property taxes or turnover-based taxes that are not income-based), then its corresponding deferred tax movement will also not enter the Total Deferred Tax Adjustment Amount.

Second, deferred tax movement recognized directly in equity through Other Comprehensive Income (OCI) is generally excluded from this calculation, unless the corresponding underlying income/expense enters the GloBE Income or Loss calculation (for example, certain fair-value revaluations that go to OCI but are treated as income for GloBE purposes).

Third, the Deferred Tax Expense figure is not always viewed on a net basis — a Constituent Entity may have multiple separate temporary differences, and separate adjustments may need to be applied to each (for example, one temporary difference may require rate recast while another does not, because it relates to Excluded Income). As a result, in practical application, the taxpayer often needs to split the financial accounts' deferred tax movement on a component-wise basis and apply the appropriate adjustment to each, and then combine everything to produce the final Total Deferred Tax Adjustment Amount.

Fourth, it should be remembered — Deferred Tax Expense can go either way, positive (an expense, increasing the ETR) or negative (a benefit, decreasing the ETR). For example, an increase in a DTL or a decrease in a DTA creates an expense, while a decrease in a DTL or an increase in a DTA creates a benefit. Correctly maintaining this direction while applying each adjustment is essential, because adjusting in the wrong direction will artificially inflate or deflate Adjusted Covered Taxes.

## 21.4 Disallowed Accruals and Unclaimed Accruals — What Is Excluded

Under Article 4.4.1, two specific categories of deferred tax movement must be directly excluded from the Total Deferred Tax Adjustment Amount — because they are of a nature inconsistent with GloBE's concept of "real, certain tax liability."

**Disallowed Accruals** are deferred tax movements essentially related to two types of items: (i) changes in a reserve or provision established for an **Uncertain Tax Position** — for example, a change in a provision maintained in the accounts because of the risk of dispute with the tax authority over a tax position, where that change is recorded as a deferred tax movement; and (ii) deferred tax related to distributions from the Constituent Entity — such as a DTL maintained for a possible future withholding tax or secondary tax on undistributed profits, where the distribution decision has not yet been made. The logic for both categories is that — since these amounts (if paid in cash) would not have been captured in Adjusted Covered Taxes as Current Tax (because of the lack of certainty in an Uncertain Tax Position, and because distribution-related tax has not yet occurred), their deferred form should not be captured either — for the sake of principled consistency.

**Unclaimed Accruals** are essentially directly related to the recapture rule. It is a fundamental GloBE rule that if a DTL (which had been added to the Total Deferred Tax Adjustment Amount and thereby increased Adjusted Covered Taxes) does not reverse or is not actually converted into a tax payment within the next five Fiscal Years, then the previously granted benefit is "recaptured" in the fifth year and taken back out of Adjusted Covered Taxes (and the corresponding ETR and Top-up Tax must be recomputed). To avoid this future complexity, a taxpayer can make an annual election so that a specific DTL is not included in the Total Deferred Tax Adjustment Amount from the outset — this voluntarily excluded portion is precisely the Unclaimed Accrual. In practice, for DTLs unlikely to reverse within five years (such as long-term provisions or items with an uncertain timeline), making this election is often the easier path, because it avoids complex recapture calculations in the future — though in exchange, the current year's Adjusted Covered Taxes will appear somewhat lower.

It is worth noting that certain specific categories of DTL (such as accelerated depreciation/cost recovery allowance, license-type government permit expenditure, research and development expenditure, decommissioning/restoration expenditure, fair-value gains, and unrealized foreign exchange gains) are generally treated as falling within an exception category to the main recapture rule, because they are inherently long-term and predictable. It is for DTLs outside this exception category that the Unclaimed Accrual election becomes practically more relevant.

## 21.5 Movement of Valuation Allowance and Recognition

Under financial accounting standards (such as IFRS's IAS 12), a DTA is recognized only when management is sufficiently certain that there will be adequate future taxable profit against which this DTA can be used. If this certainty is absent, either the DTA is not recognized at all, or a **Valuation Allowance** (a reserve created to partially or fully reduce the value of a recognized DTA) is established against the recognized DTA. This Valuation Allowance can increase or decrease (be released) each year as management's probability assessment changes, and this fluctuation is reflected as part of the Deferred Tax Expense in the financial accounts.

Under Article 4.4.1(c), for GloBE calculation purposes, the effect of this Valuation Allowance or any equivalent **Accounting Recognition Adjustment** must be completely ignored. In practical terms, this means that when computing the Total Deferred Tax Adjustment Amount, the calculation must be made as if no Valuation Allowance had ever been established or ever changed — that is, the full DTA (gross DTA) based on the underlying temporary difference must be considered, regardless of management's probability assessment.

The rationale behind this rule is two-fold. First, a Valuation Allowance depends on a subjective management decision, which can be applied differently across different jurisdictions and different companies — GloBE wants a consistent, comparable calculation, which cannot depend on this subjectivity. Second, if the effect of a Valuation Allowance were permitted, an MNE Group could easily manipulate its ETR artificially by adjusting its Valuation Allowance policy — avoiding recognition of a DTA in one year to lower the ETR and avoid Top-up Tax, then suddenly recognizing it the following year to take advantage of the benefit.

An important side effect here is: if a jurisdiction's local tax rate is below 15%, and a DTA is partially or fully non-recognized under local accounting standards because of a Valuation Allowance, then even so, that DTA's gross value (though within the 15% cap, discussed in the next section) may be considered for GloBE purposes — this is essentially the basis for the Loss Carry-forward DTA recast (discussed in detail in Sections 21.8 and 21.9).

## 21.6 The Effect of Changes in the Domestic Tax Rate

When a jurisdiction's government changes the statutory tax rate (an increase or decrease), all existing DTA/DTL balances must be remeasured at the new rate under financial accounting standards, and the effect of this remeasurement is charged or credited entirely as a one-off item in that year's Deferred Tax Expense. For example, if a jurisdiction reduces its statutory rate from 25% to 20%, all DTLs previously computed at 25% will now be remeasured at 20% — resulting in a net deferred tax benefit (because the DTL decreases), which flows directly into the year's P&L.

If such a rate-change-related remeasurement effect were allowed to enter the Total Deferred Tax Adjustment Amount without adjustment, it would create a distorted ETR — because this gain/loss did not occur because of a change in the actual economic temporary difference, but only because of a one-time regulatory/legal change. In particular, since GloBE's entire deferred tax calculation is fundamentally governed by the principle of being rate-capped within the 15% Minimum Rate, a large portion of the remeasurement gain or loss arising from fluctuations in the local statutory rate (as long as it stays above or below 15%) becomes irrelevant for the GloBE calculation.

In practice, two situations must be considered separately when analyzing the effect of a rate-change-related remeasurement:

- If both the new and old rates are above 15% (or both are below), then after applying the rate recast rule (following the logic of Sections 21.2 and 21.3), the underlying remeasurement effect will already be capped, because for GloBE purposes DTL/DTA is always recomputed at the 15% cap — so no matter how the rate changes, the amount relevant for GloBE remains unchanged (constant at 15%).
- If, because of the rate change, a jurisdiction crosses the 15% threshold (moving from below to above, or above to below), then the portions on either side of the threshold must be considered separately, and the correct cap applied for the relevant year.

In short, the portion of a rate-change-related remeasurement gain/loss that falls outside the 15% Minimum Rate boundary must be excluded from the Total Deferred Tax Adjustment Amount — so that the GloBE ETR does not artificially fluctuate because of a local tax policy decision.

## 21.7 Deferred Tax Related to Tax Credits

The accounting treatment of Tax Credits often runs through a deferred tax mechanism — particularly when a Tax Credit cannot be used immediately and is carried forward for use in a future year, the value of this future usable credit may be recognized in the financial accounts as a DTA, and its origination/use is reflected in the P&L through Deferred Tax Expense.

GloBE's policy is that — the treatment of a Tax Credit should be different and specific depending on its nature (Qualified Refundable Tax Credit versus Non-Qualified/Non-Marketable Tax Credit) (this subject is discussed in detail in this handbook's chapter on Covered Taxes and Tax Credits), and this special treatment should not be "bypassed" through the deferred tax route. Therefore, under Article 4.4.1, deferred tax movement directly related to the origination and use of a Tax Credit (such as the origination of a DTA established for credit carry-forward, or its reversal upon use) must be excluded from the Total Deferred Tax Adjustment Amount, and instead the credit's own separate GloBE treatment (such as, for a Qualified Refundable Tax Credit, adding it as income in GloBE Income, or subtracting it from Covered Taxes) must be applied.

The rationale behind this exclusion is maintaining consistency — if the effect created through a Tax Credit's deferred tax route were allowed to enter the GloBE calculation, the same economic benefit would risk entering the calculation twice (once under the credit's own rule, and again through deferred tax) or at the wrong rate. Additionally, since the accounting treatment of Tax Credits (directly to income in some jurisdictions, through deferred tax in others) can differ across jurisdictions, excluding the deferred tax route entirely ensures a uniform, neutral treatment.

## 21.8 GloBE Recognition of a Previously Unrecognized DTA

A real and often contentious situation is — when a temporary difference (or tax loss) arose in some prior Fiscal Year, but no DTA was recognized at that time because the accounting standard's recognition threshold was not met (or it was entirely excluded because of a Valuation Allowance), and now — several years later — management becomes sufficiently certain and recognizes that DTA for the first time.

It might seem logical to think that, since the effect of a Valuation Allowance/Recognition Adjustment is ignored for GloBE (Section 21.5), such a DTA should be assumed to have "existed" from the outset for GloBE purposes. But in reality the matter is more nuanced: if in that earlier year the relevant jurisdiction was not within the scope of GloBE (for example, before the Transition Year, or the MNE Group had not yet come within Pillar Two's scope), then no Total Deferred Tax Adjustment Amount calculation was ever made for that year, and it was also not possible to "track" that DTA within GloBE's history. In this situation, the one-time deferred tax benefit arising from suddenly recognizing this many-years-old DTA in the current year is generally not appropriate to bring fully into the Total Deferred Tax Adjustment Amount, because it could artificially deflate a single year's ETR excessively and distort the true economic picture.

For this reason, the GloBE framework generally follows a policy where — the DTA that existed for a temporary difference or tax loss already in existence when a jurisdiction came within GloBE's scope (in the Transition Year) is captured once at the time of Transition (under the Article 9.1 Transition Rule, discussed in a later chapter of this handbook) and included in GloBE's Deferred Tax Asset/Liability balance (ignoring the Valuation Allowance, but applying the 15% cap). After this Transition point, the normal annual Total Deferred Tax Adjustment Amount calculation proceeds based on this balance. But if, for some reason, this Transition-period tracking was not correctly done, or the DTA relates to a temporary difference that arose after coming within GloBE's scope but was not recognized at that time, then management must demonstrate in which year the underlying temporary difference arose and how it should have been treated, in principle, in that year's calculation (not retrospectively), so that an unfair one-time benefit is not created in the current year.

## 21.9 Substitute Loss Carry-forward DTA

In some jurisdictions, the tax system is structured such that the conventional DTA/DTL concept under accounting standards does not even apply — for example, a jurisdiction with no corporate income tax (a zero-tax jurisdiction), or one where the tax system is structured so that, even though tax loss carry-forwards exist, no "deferred tax asset" is recorded for them in the conventional sense, because no concept of Current Tax or Deferred Tax applies there from the outset. In such situations, if a Constituent Entity suffers a GloBE Loss (an accounting loss) in a Fiscal Year, no DTA is created for that loss under the normal deferred tax mechanism — and as a result, when that jurisdiction returns to profitability in the future, no offsetting benefit from the prior loss will be available in the GloBE ETR calculation, which creates a discriminatory outcome compared to other jurisdictions (where a DTA-based mechanism operates).

To fill this gap, a special mechanism exists: the **Substitute Loss Carry-forward DTA** — an elective mechanism relevant for Constituent Entities in jurisdictions where deferred tax is not conventionally recognized under the local tax system, or where a DTA-based loss carry-forward mechanism does not exist. Under this election, a Constituent Entity can compute a hypothetical DTA — determined by multiplying the amount of local tax loss by the 15% Minimum Rate — and then track this hypothetical DTA in the GloBE calculation just like a normal DTA, showing it as progressively "utilised" in future profitable years and adjusted through the Total Deferred Tax Adjustment Amount.

The effectiveness of this mechanism depends on a few important conditions: (i) the election must generally be applied on a jurisdiction-wide basis, not on an individual Constituent Entity basis; (ii) once the election is made, it must be applied consistently in the future, and specific conditions must be met for revocation; (iii) this hypothetical DTA is also subject to the same time-limit and usability rules as other normal DTAs — that is, it does not remain usable indefinitely but follows the actual rules for using local tax losses. In practice, this alternative arrangement is particularly important for MNE Groups operating in zero-tax or low-tax jurisdictions, which may incur losses in a particular year and would otherwise, without the Substitute Loss Carry-forward DTA, be forced to use the GloBE Loss Election (a different but related mechanism discussed in another chapter of this handbook).

## 21.10 Deferred Tax Related to Excluded Income

Under Chapter 3, certain specified categories of income are entirely excluded from the GloBE Income or Loss calculation — such as International Shipping Income, certain dividend income (Excluded Dividend), and certain gains/losses from Equity Investments (Excluded Equity Gain or Loss). Because this income/expense itself does not enter the denominator of the GloBE Income or Loss calculation, under the principle of consistency, no tax effect related to it — whether Current Tax or Deferred Tax — should enter the numerator of Adjusted Covered Taxes either. If this consistency were not maintained, a distorted situation would result: a tax expense would enter the ETR calculation for which there is no corresponding income in the denominator — which would artificially inflate the ETR and misrepresent the genuine economic tax burden.

Therefore, under Article 4.4.1(a), any deferred tax movement arising from a temporary difference related to Excluded Income or Excluded Loss must be entirely excluded from the Total Deferred Tax Adjustment Amount. In practical terms, this means — if a DTL is created because a Constituent Entity claims an accelerated capital allowance on income earned from shipping operations, then the annual movement of that DTL (whether an increase or a reversal) must be entirely excluded, because the underlying income itself is outside the GloBE Income calculation.

A practical challenge in applying this rule is — when a single asset or transaction involves multiple sources of income (partly Excluded, partly not), the corresponding deferred tax movement must be reasonably apportioned. This apportionment generally involves identifying the underlying root cause of the temporary difference (the income/expense from which it arose) and dividing the deferred tax in that proportion, and the method and documentation of this apportionment must be maintained consistently every year, so that the rationale for the calculation can be demonstrated to the tax authority.

## 21.11 A Numerical Example

Below is a complete numerical example that applies each of the above adjustment layers together. Suppose a Constituent Entity called **XYZ Ltd.** is located in a jurisdiction where the local statutory tax rate is 25%, and the GloBE Minimum Rate is 15%. In the relevant Fiscal Year, the company's financial accounts show the following deferred-tax-related events (all amounts in local currency units, LCU):

- Originating temporary difference from accelerated depreciation: 4,800,000 LCU, on which the Deferred Tax Expense recorded at the local 25% rate = 1,200,000 LCU (a DTL increase, hence an expense).
- Deferred tax expense of 60,000 LCU from a change in an Uncertain Tax Position provision.
- A DTL on a warranty provision, which management expects will not reverse within five years and for which the Unclaimed Accrual election has been made — amount 40,000 LCU.
- A partial release of the Valuation Allowance against a DTA established for a Tax Loss Carry-forward, which created a deferred tax benefit of 90,000 LCU in the financial accounts.
- The local government's announcement of a reduction in the statutory rate from 25% to 20% caused a remeasurement of the existing DTL balance, creating a one-off deferred tax benefit of 70,000 LCU.
- A deferred tax benefit of 25,000 LCU recognized for the origination of a Non-Qualified R&D Tax Credit carry-forward.
- For a tax loss that arose three years ago and was not recognized at the time because the recognition threshold was not met, a DTA benefit of 15,000 LCU recognized for the first time this year.
- Deferred tax expense of 35,000 LCU related to capital allowance connected with international shipping income (Excluded Income).

The table below shows, step by step, the process of arriving at the Total Deferred Tax Adjustment Amount:

| Step | Description | Type of Adjustment | Amount (LCU) | Running Total (LCU) |
|---|---|---|---|---|
| 1 | Total Deferred Tax Expense per financial accounts (at 25% rate, originating temporary difference 4,800,000) | Starting point | 1,200,000 | 1,200,000 |
| 2 | Rate Recast: recomputed at the 15% Minimum Rate (4,800,000 × 15% = 720,000); excess of 480,000 excluded | Exclusion (rate recast) | (480,000) | 720,000 |
| 3 | Disallowed Accrual — deferred tax on Uncertain Tax Position provision excluded | Exclusion | (60,000) | 660,000 |
| 4 | Unclaimed Accrual — DTL on warranty provision, excluded under election | Exclusion | (40,000) | 620,000 |
| 5 | Effect of 90,000 Valuation Allowance release ignored (added back) | Ignored (add-back) | 90,000 | 710,000 |
| 6 | Rate-change-related (25%→20%) remeasurement benefit of 70,000 excluded (added back) | Exclusion (rate change) | 70,000 | 780,000 |
| 7 | Deferred tax benefit from origination of Non-Qualified Tax Credit excluded (added back) | Exclusion (tax credit) | 25,000 | 805,000 |
| 8 | This year's recognition of a previously unrecognized (3-year-old) DTA excluded (added back) | Exclusion (prior-year DTA) | 15,000 | 820,000 |
| 9 | Deferred tax related to Excluded Income (international shipping) excluded | Exclusion (excluded income) | (35,000) | 785,000 |
| — | **Total Deferred Tax Adjustment Amount** | — | — | **785,000** |

Note that in Steps 5, 6, 7, and 8, an "add-back" has been made, because these items created a deferred tax benefit (reduction of expense) in the financial accounts, and under GloBE's rules that benefit must be reversed/ignored — that is, its effect must be added to the running total to reverse it. Conversely, in Steps 2, 3, 4, and 9, amounts have been directly subtracted from the original expense portion, because these items were recorded as part of a deferred tax expense, a portion of which should not enter the GloBE calculation.

The final result obtained is **Total Deferred Tax Adjustment Amount = 785,000 LCU**. This amount will be added, under Article 4.1.1, as a component of Adjusted Covered Taxes for XYZ Ltd., and then the jurisdictional ETR will be determined through blending with the Adjusted Covered Taxes and GloBE Income of all other Constituent Entities in that jurisdiction (jurisdictional blending). The important lesson here is — the difference between the financial accounts' initial Deferred Tax Expense (1,200,000) and the final figure relevant for GloBE (785,000) is approximately 35%, which shows how significant an error could result in the ETR calculation if these adjustments were ignored and the financial accounts were used directly.

## Summary

The Total Deferred Tax Adjustment Amount is a component of Adjusted Covered Taxes that must be calculated under Article 4.4, starting from the financial accounts' Deferred Tax Expense and passing through a series of specific adjustments. The core purpose of these adjustments is to remove the subjectivity of local accounting standards (Valuation Allowance, recognition threshold), fluctuations in local tax policy (rate change), and items inconsistent with GloBE (Disallowed Accruals, Unclaimed Accruals, Excluded Income, the Tax Credit route), to create a stable and comparable ETR. The main layers are: (1) excluding deferred tax related to Excluded Income; (2) excluding Disallowed Accrual and Unclaimed Accrual; (3) applying rate recast when the local rate is above or below 15%; (4) ignoring the effect of a Valuation Allowance/Accounting Recognition Adjustment; (5) excluding the excess portion of rate-change-related remeasurement; and (6) routing deferred tax related to Tax Credits under separate rules. In addition, for special situations, elective mechanisms such as the Substitute Loss Carry-forward DTA exist, which fill the gap left by the absence of a conventional deferred tax framework in zero-tax or low-tax jurisdictions. Applying all these adjustments together can produce a substantial difference between the financial accounts' deferred tax movement and the amount relevant for GloBE — as shown in the example in Section 21.11 — and this calculation should therefore never be overlooked.

## Common Mistakes

Among the most common mistakes, the first is adding the financial accounts' Deferred Tax Expense directly to Adjusted Covered Taxes without any adjustment, particularly when the local rate differs significantly from 15% — this causes the rate recast to be omitted and the ETR to be miscalculated. Second, treating the movement of a Valuation Allowance as if it were a normal deferred tax movement, where GloBE's rules clearly require this effect to be ignored — this mistake often occurs at companies where the tax team lifts figures directly from the financial accounts' tax notes without any GloBE-specific reconsideration.

Third, retaining a DTL without making the Unclaimed Accrual election or without proper documentation, which later unexpectedly falls within the five-year recapture rule, and a forgotten adjustment returns several years later, requiring recomputation of ETR and Top-up Tax. Fourth, applying the definition of Disallowed Accrual either too narrowly or too broadly — for example, considering only provisions that literally use the phrase "uncertain tax position," and mistakenly leaving distribution-related deferred tax in the calculation as if it were ordinary deferred tax.

Fifth, mixing deferred tax movement related to Tax Credits with the general deferred tax stream, which causes the same credit benefit to enter the calculation twice (once under the credit's own rule, and again through deferred tax) or to be computed at the wrong rate. Sixth, failing to fully identify deferred tax movement on assets related to Excluded Income, particularly when an asset generates partly Excluded and partly ordinary income — failing to make the correct apportionment here allows the tax effect of Excluded Income to infiltrate the ETR. Seventh, incorrectly applying the Substitute Loss Carry-forward DTA election at the entity level, where this election generally must be applied consistently on a jurisdiction-wide basis. And finally, when suddenly recognizing a previously unrecognized DTA, failing to properly verify its origination history (before or after the Transition Year, before or after coming within GloBE's scope) and directly treating it as a current-year benefit — which can create an unfair one-time ETR benefit and may be questioned during a future audit/review.

<!-- lang:bn -->

# অধ্যায় ২১ — Deferred Tax মেকানিক্স

> **এই অধ্যায়ে:** Pillar Two-র Effective Tax Rate (ETR) গণনা কেবল Current Tax দিয়ে সম্পূর্ণ হয় না — আর্থিক হিসাবের **Deferred Tax Expense**-কে একাধিক স্তরে সমন্বয় করে GloBE-এর নিজস্ব "Total Deferred Tax Adjustment Amount"-এ রূপান্তর করতে হয়; এই অধ্যায়ে সেই রূপান্তরের প্রতিটি স্তর — বাদ দেওয়া অংশ, রি-ক্যাস্ট করা হার, Valuation Allowance-এর প্রভাব উপেক্ষা করা, এবং রিক্যাপচার-জাতীয় ব্যতিক্রম — ধাপে ধাপে সংখ্যাসহ ব্যাখ্যা করা হয়েছে।
> **সংশ্লিষ্ট Article:** 4.4

## ২১.১ কেন সাময়িক পার্থক্য (temporary difference) হিসাবে নিতে হয়

Pillar Two-এর Effective Tax Rate (ETR) সূত্রে হর (denominator) হলো GloBE Income, আর লব (numerator) হলো Adjusted Covered Taxes। যদি Adjusted Covered Taxes-এ কেবল Current Tax Expense ধরা হতো, তাহলে একটি মৌলিক সমস্যা তৈরি হতো: হিসাব বছরের আয় এবং করযোগ্য আয়ের মধ্যে সময়গত পার্থক্য (timing mismatch) থাকার কারণে একই অর্থনৈতিক মুনাফার উপর প্রকৃত করভার ভুলভাবে প্রতিফলিত হতো।

উদাহরণস্বরূপ, একটি কোম্পানি যদি স্থানীয় কর নিয়মে ত্বরিত অবচয় (accelerated depreciation) দাবি করে, তাহলে প্রথম বছরগুলোতে করযোগ্য আয় হিসাবি আয়ের তুলনায় কম দেখাবে, ফলে Current Tax কম হবে এবং শুধু Current Tax দিয়ে ETR মাপলে সেই বছর কৃত্রিমভাবে নিচু ETR দেখাবে — যদিও সামগ্রিক জীবনকালে (asset-এর পুরো জীবনচক্রে) কোম্পানিটি ঠিক একই মোট কর পরিশোধ করবে। পরের বছরগুলোতে যখন অবচয়ের বিপরীত দিক (reversal) ঘটবে, তখন করযোগ্য আয় হিসাবি আয়ের তুলনায় বেশি হবে এবং Current Tax বেশি দেখাবে — যা কৃত্রিমভাবে উচ্চ ETR তৈরি করবে। এই ওঠানামা (volatility) একক বছরের ETR পরিমাপকে অর্থহীন করে তোলে এবং একটি Multi-Year, Multi-Year Top-up Tax গণনার ক্ষেত্রে ভুল সিদ্ধান্তে (যেমন অন্যায়ভাবে Top-up Tax আরোপ, বা এড়িয়ে যাওয়া) নিয়ে যেতে পারে।

এই সমস্যা সমাধানের জন্য GloBE Model Rules বছরভিত্তিক Current Tax-এর পাশে একটি **Deferred Tax Expense** (বিলম্বিত কর ব্যয় — আর্থিক হিসাবে temporary difference-এর কর-প্রভাব) যুক্ত করার নিয়ম রেখেছে, যাতে যে বছরে আয় স্বীকৃত হয় সেই বছরেই তার সংশ্লিষ্ট মোট (current + deferred) কর-প্রভাব ধরা পড়ে। এই যুক্তির মূল লক্ষ্য হলো — সাময়িক পার্থক্যজনিত সময়ের ব্যবধান দূর করে একটি "স্মূথড" বা সমতল ETR তৈরি করা, যা প্রকৃত অর্থনৈতিক করভারের কাছাকাছি থাকে। কিন্তু আর্থিক হিসাবের Deferred Tax Expense সরাসরি GloBE-তে বসিয়ে দেওয়া যায় না, কারণ তা IFRS/local GAAP-এর নিজস্ব স্বীকৃতি (recognition), পরিমাপ (measurement) এবং হার (rate) নীতির উপর নির্ভর করে তৈরি — যা GloBE-এর ১৫% ন্যূনতম হারের যুক্তির সাথে সামঞ্জস্যপূর্ণ নয়। ফলে Article 4.4-এ একাধিক সমন্বয়ের মাধ্যমে আর্থিক Deferred Tax Expense-কে GloBE-উপযোগী **Total Deferred Tax Adjustment Amount**-এ রূপান্তর করার একটি সুনির্দিষ্ট কাঠামো দেওয়া হয়েছে।

## ২১.২ Total Deferred Tax Adjustment Amount-এর গঠন

**Total Deferred Tax Adjustment Amount** (মোট বিলম্বিত কর সমন্বয় পরিমাণ) হলো একটি Constituent Entity-র জন্য একটি Fiscal Year-এ Adjusted Covered Taxes-এ যুক্ত হওয়া বিলম্বিত কর উপাদান। Article 4.4.1 অনুযায়ী এই পরিমাণের সূচনাবিন্দু হলো আর্থিক হিসাবে Covered Taxes-এর সাথে সম্পর্কিত হিসেবে স্বীকৃত **Deferred Tax Expense**, যা তারপর একাধিক নির্দিষ্ট সমন্বয়ের মধ্য দিয়ে যায়। এই সমন্বয়গুলোকে বিস্তৃতভাবে চারটি শ্রেণিতে ভাগ করা যায়:

১. **বর্জনমূলক সমন্বয় (exclusionary adjustments)** — যে অংশগুলো একেবারেই GloBE গণনার বাইরে রাখা হয়, কারণ সেগুলো এমন আয়/ব্যয়ের সাথে সম্পর্কিত যা নিজেই GloBE Income বা Loss গণনায় ধরা পড়ে না (যেমন Excluded Income), বা যেগুলো অনির্দিষ্ট/অনিশ্চিত প্রকৃতির (Disallowed Accruals, Unclaimed Accruals)।

২. **হার-সংক্রান্ত পুনর্গণনা (rate recast)** — স্থানীয় কর হার যদি ১৫% Minimum Rate-এর চেয়ে বেশি বা কম হয়, তাহলে Deferred Tax Expense-কে সেই অতিরিক্ত/স্বল্প হারের প্রভাব বাদ দিয়ে কার্যত ১৫%-এর সীমার মধ্যে পুনর্গণনা করতে হয়।

৩. **স্বীকৃতি-নিরপেক্ষীকরণ (recognition neutralisation)** — Valuation Allowance বা Accounting Recognition Adjustment-এর প্রভাব সম্পূর্ণভাবে উপেক্ষা করে, যেন হিসাবরক্ষণ মান অনুযায়ী DTA স্বীকৃত হোক বা না হোক, GloBE-এর নিজস্ব যুক্তি অনুসারে গণনা হয়।

৪. **বিশেষ-শ্রেণির আলাদা চিকিৎসা** — Tax Credit-সংশ্লিষ্ট deferred tax, এবং Excluded Income-সংশ্লিষ্ট deferred tax — এগুলোকে সাধারণ deferred tax স্রোত থেকে আলাদা করে নিজস্ব নিয়মে চালিত করা হয়।

এই চারটি স্তর পার হওয়ার পরেই যে চূড়ান্ত পরিমাণ অবশিষ্ট থাকে, সেটিই Total Deferred Tax Adjustment Amount, এবং সেটি Article 4.1.1-এর অধীনে Adjusted Covered Taxes-এর একটি উপাদান হিসেবে যুক্ত হয়। পরের অনুচ্ছেদগুলোতে এই চারটি স্তর একে একে বিস্তারিতভাবে আলোচনা করা হয়েছে।

## ২১.৩ শুরু: Deferred Tax Expense আর্থিক হিসাব অনুযায়ী

গণনার সূচনাবিন্দু হলো Constituent Entity-র আর্থিক হিসাবে (Financial Accounts) স্বীকৃত **Deferred Tax Expense** — অর্থাৎ, বছরের শুরুতে ও শেষে Deferred Tax Liability (DTL) এবং Deferred Tax Asset (DTA)-এর নীট ব্যালেন্সের পরিবর্তন যা লাভ-ক্ষতি হিসাবে (Profit and Loss / Income Statement-এ) চার্জ বা ক্রেডিট করা হয়েছে। এখানে গুরুত্বপূর্ণ কয়েকটি প্রাথমিক সীমারেখা মনে রাখা দরকার:

প্রথমত, শুধুমাত্র Covered Taxes-এর সাথে সম্পর্কিত deferred tax movement-ই এখানে ধরা হবে — যদি কোনো deferred tax কোনো কর প্রকারের সাথে সম্পর্কিত যা নিজেই Covered Tax-এর সংজ্ঞার মধ্যে পড়ে না (উদাহরণস্বরূপ, কিছু নির্দিষ্ট প্রপার্টি ট্যাক্স বা টার্নওভার-ভিত্তিক কর যা আয়-ভিত্তিক নয়), তাহলে তার সংশ্লিষ্ট deferred tax movement-ও Total Deferred Tax Adjustment Amount-এ প্রবেশ করবে না।

দ্বিতীয়ত, Other Comprehensive Income (OCI)-এর মাধ্যমে সরাসরি ইকুইটিতে (equity) স্বীকৃত deferred tax movement সাধারণত এই গণনার বাইরে থাকে, যদি না সংশ্লিষ্ট অন্তর্নিহিত আয়/ব্যয় GloBE Income বা Loss-এর গণনায় প্রবেশ করে (যেমন কিছু fair-value পুনর্মূল্যায়ন যা OCI-তে যায় কিন্তু GloBE-তে আয় হিসেবে গণ্য হয়)।

তৃতীয়ত, Deferred Tax Expense-এর হিসাব সবসময় নীট ভিত্তিতে (net basis) দেখা হয় না — একটি Constituent Entity-র মধ্যে একাধিক পৃথক temporary difference থাকতে পারে, এবং প্রতিটির জন্য পৃথক সমন্বয় প্রয়োগ করতে হতে পারে (যেমন একটি temporary difference-এর জন্য rate recast প্রয়োজন হলেও অন্যটির জন্য নয়, কারণ সেটি Excluded Income-সংশ্লিষ্ট)। ফলে ব্যবহারিক প্রয়োগে করদাতাকে প্রায়ই আর্থিক হিসাবের deferred tax movement-কে উপাদান-ভিত্তিক (component-wise) ভাগ করে প্রতিটির উপর যথাযথ সমন্বয় প্রয়োগ করতে হয়, তারপর সবকিছু একত্র করে চূড়ান্ত Total Deferred Tax Adjustment Amount তৈরি করতে হয়।

চতুর্থত, স্মরণ রাখা দরকার — Deferred Tax Expense ধনাত্মক (একটি ব্যয়, ETR বাড়ায়) বা ঋণাত্মক (একটি সুবিধা/বেনিফিট, ETR কমায়) দুই দিকেই হতে পারে। উদাহরণস্বরূপ, DTL বৃদ্ধি বা DTA হ্রাস একটি ব্যয় তৈরি করে, আর DTL হ্রাস বা DTA বৃদ্ধি একটি সুবিধা তৈরি করে। প্রতিটি সমন্বয় প্রয়োগ করার সময় এই দিকনির্দেশ (direction) সঠিকভাবে ধরে রাখা অপরিহার্য, কারণ ভুল দিকে সমন্বয় করলে Adjusted Covered Taxes কৃত্রিমভাবে বেড়ে বা কমে যাবে।

## ২১.৪ Disallowed Accruals ও Unclaimed Accruals — কী বাদ যায়

Article 4.4.1 অনুসারে দুটি নির্দিষ্ট শ্রেণির deferred tax movement সরাসরি Total Deferred Tax Adjustment Amount থেকে বাদ দিতে হয় — কারণ এগুলো এমন প্রকৃতির যা GloBE-এর "প্রকৃত, নিশ্চিত কর দায়বদ্ধতা" (real, certain tax liability) ধারণার সাথে সামঞ্জস্যপূর্ণ নয়।

**Disallowed Accruals** (অগ্রহণযোগ্য প্রভিশন) হলো এমন deferred tax movement যা মূলত দুই ধরনের আইটেমের সাথে সম্পর্কিত: (i) **Uncertain Tax Position** (অনিশ্চিত কর পরিস্থিতি)-এর জন্য গঠিত রিজার্ভ বা প্রভিশনের পরিবর্তন — যেমন কোনো কর অবস্থান (tax position) নিয়ে কর কর্তৃপক্ষের সাথে বিতর্কের ঝুঁকি থাকায় হিসাবে যে সংরক্ষণ (provision) রাখা হয়, তার পরিবর্তন যদি deferred tax movement হিসেবে হিসাবভুক্ত হয়; এবং (ii) Constituent Entity থেকে বিতরণ (distributions) সংশ্লিষ্ট deferred tax — যেমন অবণ্টিত মুনাফার উপর ভবিষ্যতে সম্ভাব্য উইথহোল্ডিং ট্যাক্স বা সেকেন্ডারি ট্যাক্সের জন্য রাখা DTL, যেখানে বণ্টনের সিদ্ধান্ত এখনও নেয়া হয়নি। এই দুই শ্রেণির যুক্তি হলো — যেহেতু Current Tax হিসেবে এই অংকগুলো (যদি নগদে পরিশোধ করা হতো) Adjusted Covered Taxes-এ ধরা পড়তো না (কারণ Uncertain Tax Position-এর ক্ষেত্রে নিশ্চিততার অভাব আছে, এবং বিতরণ-সংশ্লিষ্ট কর এখনও ঘটেনি), সেহেতু তাদের deferred rূপও ধরা উচিত না — নীতিগত সামঞ্জস্য বজায় রাখার জন্য।

**Unclaimed Accruals** (দাবি না করা প্রভিশন) মূলত রিক্যাপচার নিয়মের (recapture rule) সাথে সরাসরি সম্পর্কিত। GloBE-এর একটি মৌলিক নিয়ম হলো — যদি কোনো DTL (যা Total Deferred Tax Adjustment Amount-এ যুক্ত হয়ে Adjusted Covered Taxes বাড়িয়েছিল) পরবর্তী পাঁচ Fiscal Year-এর মধ্যে বিপরীত (reverse) না হয় বা প্রকৃতপক্ষে কর পরিশোধে রূপান্তরিত না হয়, তাহলে সেই পূর্বে দেওয়া সুবিধা পঞ্চম বছরে "রিক্যাপচার" (recapture) করে Adjusted Covered Taxes থেকে ফিরিয়ে নেওয়া হয় (এবং সংশ্লিষ্ট ETR ও Top-up Tax পুনর্গণনা করতে হয়)। এই ভবিষ্যৎ জটিলতা এড়াতে, করদাতা একটি বার্ষিক নির্বাচন (annual election) করতে পারে যাতে কোনো নির্দিষ্ট DTL-কে শুরু থেকেই Total Deferred Tax Adjustment Amount-এর অন্তর্ভুক্ত না করা হয় — এই স্বেচ্ছা-বর্জিত অংশটিই Unclaimed Accrual। বাস্তবে, যেসব DTL পাঁচ বছরের মধ্যে বিপরীত হওয়ার সম্ভাবনা কম (যেমন দীর্ঘমেয়াদি প্রভিশন বা অনিশ্চিত সময়সীমার আইটেম), সেগুলোর জন্য এই নির্বাচন করা প্রায়শই সহজ পথ, কারণ এতে ভবিষ্যতে জটিল রিক্যাপচার গণনা এড়ানো যায় — তবে বিনিময়ে চলতি বছরের Adjusted Covered Taxes কিছুটা কম দেখাবে।

উল্লেখ্য, কিছু নির্দিষ্ট শ্রেণির DTL (যেমন ত্বরিত অবচয়/cost recovery allowance, লাইসেন্স-জাতীয় সরকারি অনুমতি ব্যয়, গবেষণা-উন্নয়ন ব্যয়, ডিকমিশনিং/পুনরুদ্ধার ব্যয়, fair-value gain, এবং অনাদায়ী বৈদেশিক মুদ্রা লাভ) মূল রিক্যাপচার নিয়মের ব্যতিক্রম শ্রেণিতে পড়ে বলে সাধারণভাবে গণ্য করা হয়, কারণ এগুলো স্বভাবতই দীর্ঘমেয়াদি ও পূর্বাভাসযোগ্য। এই ব্যতিক্রম শ্রেণির বাইরের DTL-গুলোর জন্যই Unclaimed Accrual নির্বাচন ব্যবহারিকভাবে বেশি প্রাসঙ্গিক হয়ে ওঠে।

## ২১.৫ Valuation Allowance ও Recognition-এর গতিবিধি

আর্থিক হিসাবরক্ষণ মান (যেমন IFRS-এর IAS 12) অনুযায়ী, একটি DTA তখনই স্বীকৃত হয় যখন ব্যবস্থাপনা যথেষ্ট নিশ্চিত হয় যে ভবিষ্যতে পর্যাপ্ত করযোগ্য মুনাফা থাকবে যার বিপরীতে এই DTA ব্যবহার করা যাবে। যদি এই নিশ্চয়তা না থাকে, তাহলে হয় DTA স্বীকৃতই করা হয় না, বা স্বীকৃত DTA-র বিপরীতে একটি **Valuation Allowance** (মূল্যায়ন ভাতা/সংরক্ষণ — DTA-র মূল্য আংশিক বা সম্পূর্ণ কমিয়ে দেখানোর জন্য গঠিত সংরক্ষণ) গঠন করা হয়। প্রতি বছর ব্যবস্থাপনার সম্ভাব্যতা মূল্যায়ন পরিবর্তনের সাথে সাথে এই Valuation Allowance বাড়তে বা কমতে (release হতে) পারে, এবং এই ওঠানামা আর্থিক হিসাবে Deferred Tax Expense-এর অংশ হিসেবে প্রতিফলিত হয়।

Article 4.4.1(c) অনুযায়ী, GloBE গণনার জন্য এই Valuation Allowance বা তার সমতুল্য কোনো **Accounting Recognition Adjustment**-এর প্রভাব সম্পূর্ণভাবে উপেক্ষা করতে হয়। ব্যবহারিক অর্থে এর মানে হলো — Total Deferred Tax Adjustment Amount গণনা করার সময় এমনভাবে হিসাব করতে হবে যেন কোনো Valuation Allowance কখনও গঠিত হয়নি বা কখনও পরিবর্তিত হয়নি — অর্থাৎ, অন্তর্নিহিত temporary difference-এর উপর ভিত্তি করে সম্পূর্ণ DTA (gross DTA) বিবেচনা করতে হবে, ব্যবস্থাপনার সম্ভাব্যতা মূল্যায়ন নির্বিশেষে।

এই নিয়মের পেছনের যুক্তি দ্বিমুখী। প্রথমত, Valuation Allowance একটি বিষয়ভিত্তিক (subjective) ব্যবস্থাপনা সিদ্ধান্তের উপর নির্ভরশীল, যা বিভিন্ন এখতিয়ারে ও বিভিন্ন কোম্পানিতে ভিন্নভাবে প্রয়োগ হতে পারে — GloBE একটি সামঞ্জস্যপূর্ণ, তুলনাযোগ্য গণনা চায়, যা এই বিষয়ভিত্তিকতার উপর নির্ভরশীল হতে পারে না। দ্বিতীয়ত, যদি Valuation Allowance-এর প্রভাব অনুমোদিত হতো, তাহলে একটি MNE Group সহজেই তাদের Valuation Allowance নীতি সমন্বয় করে ETR-কে কৃত্রিমভাবে ম্যানিপুলেট করতে পারতো — কোনো বছর DTA স্বীকৃতি না দিয়ে ETR কমিয়ে Top-up Tax এড়ানো, বা পরের বছর আকস্মিকভাবে স্বীকৃতি দিয়ে সুবিধা নেওয়া।

এখানে একটি গুরুত্বপূর্ণ পার্শ্ব-ফল হলো: যদি কোনো এখতিয়ারে স্থানীয় কর হার ১৫%-এর কম হয়, এবং একটি DTA লোকাল অ্যাকাউন্টিং মান অনুযায়ী Valuation Allowance-এর কারণে আংশিক বা সম্পূর্ণ non-recognized থাকে, তাহলেও GloBE-এর হিসাবে সেই DTA-র gross মূল্য (তবে ১৫%-এর সীমার মধ্যে, যা পরের অনুচ্ছেদে আলোচিত) বিবেচিত হতে পারে — এটিই মূলত Loss Carry-forward DTA recast-এর ভিত্তি (অনুচ্ছেদ ২১.৮ ও ২১.৯-এ বিস্তারিত)।

## ২১.৬ অভ্যন্তরীণ কর হার পরিবর্তনের প্রভাব

যখন কোনো এখতিয়ারের সরকার statutory কর হার পরিবর্তন করে (বৃদ্ধি বা হ্রাস), তখন আর্থিক হিসাবরক্ষণ মান অনুযায়ী সমস্ত বিদ্যমান DTA/DTL ব্যালেন্স নতুন হারে পুনর্মূল্যায়ন (remeasure) করতে হয়, এবং এই পুনর্মূল্যায়নের প্রভাব একবারেই (one-off) সংশ্লিষ্ট বছরের Deferred Tax Expense-এ চার্জ বা ক্রেডিট হয়ে যায়। উদাহরণস্বরূপ, যদি একটি এখতিয়ার statutory হার ২৫% থেকে ২০%-এ কমিয়ে দেয়, তাহলে যে সমস্ত DTL পূর্বে ২৫% হারে হিসাব করা হয়েছিল, সেগুলো এখন ২০% হারে পুনর্মূল্যায়িত হবে — ফলে একটি নীট deferred tax বেনিফিট (DTL কমে যাওয়ার কারণে) তৈরি হবে, যা সরাসরি বছরের P&L-এ পড়বে।

এই ধরনের রেট-পরিবর্তনজনিত remeasurement effect যদি অসমন্বিতভাবে Total Deferred Tax Adjustment Amount-এ প্রবেশ করতে দেওয়া হয়, তাহলে একটি বিকৃত ETR তৈরি হবে — কারণ এই লাভ/ক্ষতি প্রকৃত অর্থনৈতিক temporary difference-এর পরিবর্তনের কারণে ঘটেনি, বরং কেবল একটি একবারের নিয়ন্ত্রক/আইনি পরিবর্তনের কারণে ঘটেছে। বিশেষত, যেহেতু GloBE-এর সমস্ত deferred tax গণনা মূলত ১৫% Minimum Rate-এর সীমার মধ্যে সীমাবদ্ধ (rate-capped) রাখার নীতিতে চলে, তাই স্থানীয় statutory হারের ওঠানামা (যতক্ষণ তা ১৫%-এর উপরে বা নিচে থাকুক) থেকে সৃষ্ট remeasurement gain বা loss-এর একটি বড় অংশ GloBE গণনার জন্য অপ্রাসঙ্গিক হয়ে যায়।

ব্যবহারিকভাবে, রেট-পরিবর্তনজনিত remeasurement-এর প্রভাব বিশ্লেষণ করার সময় দুটি পরিস্থিতি আলাদাভাবে বিবেচনা করতে হয়:

- যদি নতুন এবং পুরাতন উভয় হার ১৫%-এর উপরে থাকে (বা উভয়ই নিচে থাকে), তাহলে rate recast নিয়ম প্রয়োগের পরে (অনুচ্ছেদ ২১.২ ও ২১.৩-এর যুক্তি অনুসরণ করে) মূল remeasurement effect ইতিমধ্যেই সীমাবদ্ধ হয়ে যাবে, কারণ GloBE-এর হিসাবে DTL/DTA সর্বদা ১৫%-এর ক্যাপে পুনর্গণিত হয় — তাই হার যেভাবেই পরিবর্তিত হোক, GloBE-এর জন্য প্রাসঙ্গিক অংক অপরিবর্তিত (constant ১৫%) থাকে।
- যদি হার পরিবর্তনের কারণে একটি এখতিয়ার ১৫%-এর সীমা অতিক্রম করে (নিচ থেকে উপরে বা উপর থেকে নিচে চলে যায়), তাহলে সীমার উভয় পাশের অংশ পৃথকভাবে বিবেচনা করে সংশ্লিষ্ট বছরে সঠিক ক্যাপ প্রয়োগ করতে হয়।

সংক্ষেপে, রেট-পরিবর্তনজনিত remeasurement gain/loss-এর যে অংশ ১৫% Minimum Rate-এর সীমার বাইরে পড়ে, তা Total Deferred Tax Adjustment Amount থেকে বাদ দিতে হবে — যাতে স্থানীয় ট্যাক্স পলিসি সিদ্ধান্তের কারণে GloBE ETR কৃত্রিমভাবে ওঠানামা না করে।

## ২১.৭ Tax Credit-সংশ্লিষ্ট Deferred Tax

Tax Credit-এর হিসাবরক্ষণ প্রায়শই deferred tax মেকানিজমের মধ্য দিয়ে যায় — বিশেষত যখন একটি Tax Credit তৎক্ষণাৎ ব্যবহার করা সম্ভব নয় এবং ভবিষ্যৎ বছরে ব্যবহারের জন্য carry forward করা হয়, তখন আর্থিক হিসাবে এই ভবিষ্যৎ ব্যবহারযোগ্য credit-এর মূল্য একটি DTA হিসেবে স্বীকৃত হতে পারে, এবং এর উৎপত্তি/ব্যবহার Deferred Tax Expense-এর মধ্য দিয়ে P&L-এ প্রতিফলিত হয়।

GloBE-এর নীতি হলো — Tax Credit-এর চিকিৎসা তার প্রকৃতির (Qualified Refundable Tax Credit বনাম Non-Qualified/Non-Marketable Tax Credit) উপর নির্ভর করে ভিন্ন এবং সুনির্দিষ্ট নিয়মে হওয়া উচিত (এই বিষয়টি এই হ্যান্ডবুকের Covered Taxes ও Tax Credit-সংশ্লিষ্ট অধ্যায়ে বিস্তারিত আলোচিত), এবং এই বিশেষ চিকিৎসা deferred tax route-এর মধ্য দিয়ে "পাশ কাটিয়ে" (bypass) করা উচিত নয়। তাই Article 4.4.1 অনুযায়ী, Tax Credit-এর উৎপত্তি ও ব্যবহারের সাথে সরাসরি সম্পর্কিত deferred tax movement (যেমন credit carry-forward-এর জন্য গঠিত DTA-র উৎপত্তি বা তার ব্যবহারজনিত reversal) Total Deferred Tax Adjustment Amount থেকে বাদ দিতে হয়, এবং পরিবর্তে সংশ্লিষ্ট credit-এর নিজস্ব GloBE চিকিৎসা (যেমন Qualified Refundable Tax Credit হলে GloBE Income-এ আয় হিসেবে যুক্ত করা, বা Covered Taxes থেকে বিয়োগ করা) প্রয়োগ করতে হয়।

এই বর্জনের পেছনের যুক্তি হলো সামঞ্জস্যতা রক্ষা — যদি একটি Tax Credit-এর deferred tax route-এর মাধ্যমে সৃষ্ট প্রভাব GloBE গণনায় ঢুকতে দেওয়া হতো, তাহলে একই অর্থনৈতিক সুবিধা দুইবার (একবার credit-এর নিজস্ব নিয়মে, আরেকবার deferred tax-এর মাধ্যমে) বা ভুল হারে গণনায় প্রবেশ করার ঝুঁকি থাকতো। এছাড়া, বিভিন্ন এখতিয়ারে Tax Credit-এর হিসাবরক্ষণ চিকিৎসা (কিছু এখতিয়ারে সরাসরি income-এ, কিছু এখতিয়ারে deferred tax-এ) ভিন্ন হতে পারে বলে, deferred tax route-কে সম্পূর্ণ বর্জন করে একটি অভিন্ন, নিরপেক্ষ চিকিৎসা নিশ্চিত করা হয়।

## ২১.৮ পূর্বে স্বীকৃত হয়নি এমন DTA-র GloBE স্বীকৃতি

একটি বাস্তব ও প্রায়শই বিতর্কিত পরিস্থিতি হলো — যখন কোনো temporary difference (বা tax loss) কোনো পূর্ববর্তী Fiscal Year-এ উৎপন্ন হয়েছিল, কিন্তু তখন হিসাবরক্ষণ মানের স্বীকৃতি শর্ত (recognition threshold) পূরণ না হওয়ায় কোনো DTA স্বীকৃত হয়নি (বা Valuation Allowance-এর কারণে সম্পূর্ণ বাদ দেওয়া হয়েছিল), এবং এখন — কয়েক বছর পরে — ব্যবস্থাপনা যথেষ্ট নিশ্চিত হয়ে সেই DTA প্রথমবার স্বীকৃতি দেয়।

সাধারণ যুক্তিতে ভাবা যেতে পারে যে, যেহেতু Valuation Allowance/Recognition Adjustment-এর প্রভাব GloBE-তে উপেক্ষা করা হয় (অনুচ্ছেদ ২১.৫), তাই এই ধরনের DTA GloBE-এর দৃষ্টিতে শুরু থেকেই "বিদ্যমান" ছিল বলে ধরে নেওয়া উচিত। কিন্তু বাস্তবে বিষয়টি আরও সূক্ষ্ম: যদি সেই পূর্ববর্তী বছরে সংশ্লিষ্ট এখতিয়ারটি GloBE-এর আওতায় ছিল না (যেমন Transition Year-এর আগে, বা MNE Group তখনও Pillar Two-এর scope-এ আসেনি), তাহলে সেই বছরের জন্য কোনো Total Deferred Tax Adjustment Amount গণনাই হয়নি, এবং সেই DTA-কে GloBE-এর ইতিহাসে "ট্র্যাক" করাও সম্ভব হয়নি। এই পরিস্থিতিতে, চলতি বছরে আকস্মিকভাবে এই বহু-পুরাতন DTA স্বীকৃতি দেওয়ার ফলে সৃষ্ট এককালীন deferred tax বেনিফিট সাধারণত Total Deferred Tax Adjustment Amount-এ পূর্ণমাত্রায় প্রবেশ করানো উপযুক্ত নয়, কারণ তা একটি বছরের ETR-কে কৃত্রিমভাবে অত্যধিক কমিয়ে দিতে পারে এবং প্রকৃত অর্থনৈতিক চিত্রকে বিকৃত করতে পারে।

এই কারণে, GloBE কাঠামোতে সাধারণত এমন একটি নীতি অনুসরণ করা হয় যে — যে DTA একটি এখতিয়ার GloBE-এর আওতায় আসার সময় (Transition Year-এ) ইতিমধ্যে বিদ্যমান temporary difference বা tax loss-এর জন্য ছিল, তা Transition-এর সময়েই (Article 9.1-এর Transition Rule অনুযায়ী, যা এই হ্যান্ডবুকের পরের অধ্যায়ে আলোচিত) একবার ধরে নিয়ে GloBE-এর Deferred Tax Asset/Liability ব্যালেন্সে অন্তর্ভুক্ত করা হয় (Valuation Allowance উপেক্ষা করে, কিন্তু ১৫%-এর ক্যাপ প্রয়োগ করে)। এই Transition-বিন্দুর পরে, স্বাভাবিক বার্ষিক Total Deferred Tax Adjustment Amount গণনা এই ব্যালেন্সের উপর ভিত্তি করে চলে। কিন্তু যদি কোনো কারণে এই Transition-সময়ের সঠিক ট্র্যাকিং না হয়ে থাকে, বা DTA-টি এমন একটি temporary difference-এর সাথে সম্পর্কিত যা GloBE-এর আওতায় আসার পরে উৎপন্ন হয়েছিল কিন্তু তখন স্বীকৃতি না দেওয়া হয়ে থাকে, তাহলে ব্যবস্থাপনাকে প্রমাণ করতে হবে যে অন্তর্নিহিত temporary difference কোন বছরে উৎপত্তি হয়েছিল এবং সেই বছরের গণনায় (retrospectively নয়, বরং নীতিগতভাবে) তা কীভাবে বিবেচিত হওয়া উচিত ছিল, যাতে চলতি বছরে একটি অন্যায্য এককালীন সুবিধা তৈরি না হয়।

## ২১.৯ Substitute Loss Carry-forward DTA

কিছু এখতিয়ারে করব্যবস্থা এমনভাবে গঠিত যে সেখানে হিসাবরক্ষণ মান অনুযায়ী প্রথাগত DTA/DTL ধারণাটি প্রযোজ্যই হয় না — উদাহরণস্বরূপ, যে এখতিয়ারে কোনো কর্পোরেট আয়কর নেই (zero-tax jurisdiction), বা যেখানে কর ব্যবস্থা এমনভাবে গঠিত যে ট্যাক্স লস ক্যারি-ফরওয়ার্ড থাকলেও তার জন্য প্রথাগত অর্থে কোনো "deferred tax asset" হিসাবভুক্ত হয় না, কারণ প্রথম থেকেই কোনো Current Tax বা Deferred Tax ধারণাই সেখানে প্রযোজ্য নয়। এই ধরনের পরিস্থিতিতে, যদি একটি Constituent Entity একটি Fiscal Year-এ একটি GloBE Loss (হিসাবি ক্ষতি) সহ্য করে, তাহলে সাধারণ deferred tax মেকানিজমের অধীনে সেই ক্ষতির জন্য কোনো DTA তৈরি হয় না — এবং ফলস্বরূপ, ভবিষ্যতে যখন সেই এখতিয়ারটি মুনাফায় ফিরবে, তখন পূর্ববর্তী ক্ষতির কোনো offsetting সুবিধা GloBE ETR গণনায় পাওয়া যাবে না, যা অন্যান্য এখতিয়ারের (যেখানে DTA-ভিত্তিক মেকানিজম কাজ করে) তুলনায় বৈষম্যমূলক পরিণতি তৈরি করে।

এই ফাঁক পূরণ করার জন্য একটি বিশেষ ব্যবস্থা হলো **Substitute Loss Carry-forward DTA** (বিকল্প ক্ষতি বহন-ফরওয়ার্ড DTA) — এটি এমন একটি নির্বাচনযোগ্য (elective) মেকানিজম যা এমন এখতিয়ারের Constituent Entity-দের জন্য প্রাসঙ্গিক, যেখানে স্থানীয় করব্যবস্থায় প্রথাগতভাবে কোনো deferred tax স্বীকৃত হয় না বা DTA-ভিত্তিক loss carry-forward পদ্ধতি বিদ্যমান নেই। এই নির্বাচনের অধীনে, একটি Constituent Entity একটি হাইপোথেটিক্যাল DTA গণনা করতে পারে — যা স্থানীয় ট্যাক্স লস-এর পরিমাণকে ১৫% Minimum Rate দ্বারা গুণ করে নির্ধারিত হয় — এবং তারপর এই হাইপোথেটিক্যাল DTA-কে স্বাভাবিক DTA-এর মতোই GloBE গণনায় ট্র্যাক করে, ভবিষ্যৎ মুনাফার বছরগুলোতে ধাপে ধাপে "ব্যবহৃত" (utilised) দেখিয়ে Total Deferred Tax Adjustment Amount-এর মাধ্যমে সমন্বয় করা যায়।

এই মেকানিজমের কার্যকারিতা কিছু গুরুত্বপূর্ণ শর্তের উপর নির্ভরশীল: (i) নির্বাচনটি সাধারণত এখতিয়ার-ভিত্তিকভাবে (jurisdiction-wide) প্রয়োগ করতে হয়, একক Constituent Entity-ভিত্তিক নয়; (ii) নির্বাচন একবার করা হলে তা ভবিষ্যতে সামঞ্জস্যপূর্ণভাবে প্রয়োগ করতে হবে, এবং প্রত্যাহার করার জন্য নির্দিষ্ট শর্ত পূরণ করতে হবে; (iii) এই হাইপোথেটিক্যাল DTA-ও অন্যান্য সাধারণ DTA-র মতোই সময়সীমা ও ব্যবহারযোগ্যতার নিয়মের অধীন থাকে — অর্থাৎ, এটি সীমাহীন সময়ের জন্য ব্যবহারযোগ্য থাকে না বরং প্রকৃত স্থানীয় ট্যাক্স লস ব্যবহারের নিয়ম অনুসরণ করে। ব্যবহারিকভাবে, এই বিকল্প ব্যবস্থাটি বিশেষভাবে গুরুত্বপূর্ণ zero-tax বা low-tax এখতিয়ারে কর্মরত MNE Group-দের জন্য, যাদের নির্দিষ্ট বছরে ক্ষতি হতে পারে এবং যারা Substitute Loss Carry-forward DTA ছাড়া GloBE Loss Election (এই হ্যান্ডবুকের অন্য একটি অধ্যায়ে আলোচিত একটি ভিন্ন, তবে সম্পর্কিত মেকানিজম) ব্যবহার করতে বাধ্য হতেন।

## ২১.১০ Excluded Income-সংশ্লিষ্ট Deferred Tax

Chapter 3-এর অধীনে GloBE Income বা Loss গণনা থেকে কিছু নির্দিষ্ট শ্রেণির আয় সম্পূর্ণভাবে বাদ দেওয়া হয় — যেমন আন্তর্জাতিক শিপিং আয় (International Shipping Income), নির্দিষ্ট ডিভিডেন্ড আয় (Excluded Dividend), এবং Equity Investment-এর নির্দিষ্ট লাভ/ক্ষতি (Excluded Equity Gain or Loss)। যেহেতু এই আয়/ব্যয়গুলো নিজেই GloBE Income বা Loss গণনার হর-এ (denominator) প্রবেশ করে না, সেহেতু সামঞ্জস্যতার (consistency) নীতি অনুসারে এদের সাথে সম্পর্কিত কোনো কর-প্রভাব — Current Tax হোক বা Deferred Tax — Adjusted Covered Taxes-এর লব-এও (numerator) প্রবেশ করা উচিত নয়। যদি এই সামঞ্জস্যতা বজায় না রাখা হতো, তাহলে একটি বিকৃত পরিস্থিতি তৈরি হতো: এমন একটি কর-ব্যয় ETR গণনায় ঢুকে যেতো যার বিপরীতে কোনো সংশ্লিষ্ট আয় হর-এ নেই — যা ETR-কে কৃত্রিমভাবে বাড়িয়ে দিতো এবং প্রকৃত অর্থনৈতিক করভারকে ভুলভাবে উপস্থাপন করতো।

তাই Article 4.4.1(a) অনুযায়ী, Excluded Income বা Excluded Loss-এর সাথে সম্পর্কিত temporary difference-জনিত যে কোনো deferred tax movement সম্পূর্ণভাবে Total Deferred Tax Adjustment Amount থেকে বাদ দিতে হয়। ব্যবহারিকভাবে এর অর্থ হলো — যদি একটি Constituent Entity-র জাহাজ চলাচল থেকে অর্জিত আয়ের উপর কোনো accelerated capital allowance দাবি করার ফলে একটি DTL তৈরি হয়, তাহলে সেই DTL-এর বার্ষিক movement (তা বৃদ্ধি হোক বা reversal) সম্পূর্ণভাবে বাদ দিতে হবে, কারণ অন্তর্নিহিত আয়টি নিজেই GloBE Income গণনার বাইরে।

এই নিয়ম প্রয়োগে একটি ব্যবহারিক চ্যালেঞ্জ হলো — যখন একটি একক সম্পদ বা লেনদেনের সাথে একাধিক আয়ের উৎস জড়িত থাকে (আংশিক Excluded, আংশিক নয়), তখন সংশ্লিষ্ট deferred tax movement-কে যুক্তিসঙ্গতভাবে বিভক্ত (apportion) করতে হয়। এই বিভাজনের জন্য সাধারণত অন্তর্নিহিত temporary difference-এর মূল কারণ (যে আয়/ব্যয় থেকে এটি উৎপন্ন হয়েছে) চিহ্নিত করে সেই অনুপাতে deferred tax-কে ভাগ করা হয়, এবং এই বিভাজনের পদ্ধতি ও ডকুমেন্টেশন প্রতি বছর সামঞ্জস্যপূর্ণভাবে বজায় রাখা প্রয়োজন, যাতে কর কর্তৃপক্ষের কাছে গণনার যৌক্তিকতা প্রমাণ করা সম্ভব হয়।

## ২১.১১ সংখ্যাগত উদাহরণ

নিচে একটি সম্পূর্ণ সংখ্যাগত উদাহরণ দেওয়া হলো, যা উপরের প্রতিটি সমন্বয়-স্তরকে একসাথে প্রয়োগ করে দেখায়। ধরা যাক, **XYZ Ltd.** নামক একটি Constituent Entity একটি এখতিয়ারে অবস্থিত, যেখানে স্থানীয় statutory কর হার ২৫%, এবং GloBE Minimum Rate ১৫%। সংশ্লিষ্ট Fiscal Year-এ কোম্পানিটির আর্থিক হিসাবে নিম্নলিখিত deferred tax-সংশ্লিষ্ট ঘটনাগুলো ঘটেছে (সমস্ত অংক স্থানীয় মুদ্রা এককে, LCU):

- ত্বরিত অবচয়জনিত মূল originating temporary difference: ৪৮,০০,০০০ LCU, যার উপর স্থানীয় ২৫% হারে হিসাবভুক্ত Deferred Tax Expense = ১২,০০,০০০ LCU (একটি DTL বৃদ্ধি, তাই ব্যয়)।
- একটি Uncertain Tax Position প্রভিশনের পরিবর্তনজনিত deferred tax ব্যয় ৬০,০০০ LCU।
- একটি ওয়ারেন্টি প্রভিশনের উপর DTL, যা পাঁচ বছরের মধ্যে বিপরীত হবে না বলে ব্যবস্থাপনা প্রত্যাশা করে এবং তার জন্য Unclaimed Accrual নির্বাচন করা হয়েছে — পরিমাণ ৪০,০০০ LCU।
- Tax Loss Carry-forward-এর জন্য গঠিত একটি DTA-এর বিপরীতে থাকা Valuation Allowance-এর আংশিক release, যা আর্থিক হিসাবে একটি ৯০,০০০ LCU deferred tax বেনিফিট তৈরি করেছে।
- স্থানীয় সরকার statutory হার ২৫% থেকে ২০%-এ কমানোর ঘোষণা দেওয়ায় বিদ্যমান DTL ব্যালেন্স পুনর্মূল্যায়িত হয়ে ৭০,০০০ LCU-এর একটি এককালীন deferred tax বেনিফিট তৈরি করেছে।
- একটি Non-Qualified R&D Tax Credit carry-forward-এর উৎপত্তির জন্য স্বীকৃত deferred tax বেনিফিট ২৫,০০০ LCU।
- তিন বছর পূর্বে উৎপন্ন একটি tax loss-এর জন্য, যা তখন recognition threshold পূরণ না হওয়ায় স্বীকৃত হয়নি, এই বছর প্রথমবার স্বীকৃত DTA বেনিফিট ১৫,০০০ LCU।
- আন্তর্জাতিক শিপিং আয় (Excluded Income)-সংশ্লিষ্ট capital allowance-এর জন্য deferred tax ব্যয় ৩৫,০০০ LCU।

নিচের টেবিলে ধাপে ধাপে Total Deferred Tax Adjustment Amount-এ পৌঁছানোর প্রক্রিয়া দেখানো হলো:

| ধাপ | বিবরণ | সমন্বয়ের ধরন | পরিমাণ (LCU) | চলমান মোট (LCU) |
|---|---|---|---|---|
| ১ | আর্থিক হিসাব অনুযায়ী মোট Deferred Tax Expense (২৫% হারে, originating temporary difference ৪৮,০০,০০০) | সূচনা বিন্দু | ১২,০০,০০০ | ১২,০০,০০০ |
| ২ | Rate Recast: ১৫% Minimum Rate-এ পুনঃগণনা (৪৮,০০,০০০ × ১৫% = ৭,২০,০০০); অতিরিক্ত ৪,৮০,০০০ বাদ | বাদ (rate recast) | (৪,৮০,০০০) | ৭,২০,০০০ |
| ৩ | Disallowed Accrual — Uncertain Tax Position প্রভিশনের deferred tax বাদ | বাদ | (৬০,০০০) | ৬,৬০,০০০ |
| ৪ | Unclaimed Accrual — ওয়ারেন্টি প্রভিশনের DTL, নির্বাচনসূত্রে বাদ | বাদ | (৪০,০০০) | ৬,২০,০০০ |
| ৫ | Valuation Allowance release ৯০,০০০-এর প্রভাব উপেক্ষা (ফিরিয়ে যুক্ত) | উপেক্ষা (add-back) | ৯০,০০০ | ৭,১০,০০০ |
| ৬ | কর হার পরিবর্তনজনিত (২৫%→২০%) remeasurement বেনিফিট ৭০,০০০ বাদ (ফিরিয়ে যুক্ত) | বাদ (rate change) | ৭০,০০০ | ৭,৮০,০০০ |
| ৭ | Non-Qualified Tax Credit উৎপত্তির deferred tax বেনিফিট বাদ (ফিরিয়ে যুক্ত) | বাদ (tax credit) | ২৫,০০০ | ৮,০৫,০০০ |
| ৮ | পূর্বে অস্বীকৃত (৩ বছর পুরনো) DTA-র এ বছরের স্বীকৃতি বাদ (ফিরিয়ে যুক্ত) | বাদ (prior-year DTA) | ১৫,০০০ | ৮,২০,০০০ |
| ৯ | Excluded Income (আন্তর্জাতিক শিপিং)-সংশ্লিষ্ট deferred tax বাদ | বাদ (excluded income) | (৩৫,০০০) | ৭,৮৫,০০০ |
| — | **Total Deferred Tax Adjustment Amount** | — | — | **৭,৮৫,০০০** |

লক্ষণীয় যে ধাপ ৫, ৬, ৭ ও ৮-এ "ফিরিয়ে যুক্ত" (add-back) করা হয়েছে, কারণ এই আইটেমগুলো আর্থিক হিসাবে একটি deferred tax বেনিফিট (ব্যয় কমানো) তৈরি করেছিল, এবং GloBE-এর নিয়মে সেই বেনিফিটকে বাতিল/উপেক্ষা করতে হয় — অর্থাৎ এর প্রভাব ফিরিয়ে নেওয়ার জন্য চলমান মোটে যোগ করতে হয়। বিপরীতে, ধাপ ২, ৩, ৪ ও ৯-এ মূল ব্যয়ের অংশ থেকে সরাসরি বিয়োগ করা হয়েছে, কারণ এই আইটেমগুলো একটি deferred tax ব্যয়ের অংশ হিসেবে হিসাবভুক্ত হয়েছিল এবং তার একটি অংশ GloBE গণনায় প্রবেশ করা উচিত নয়।

চূড়ান্তভাবে প্রাপ্ত **Total Deferred Tax Adjustment Amount = ৭,৮৫,০০০ LCU**। এই পরিমাণটি Article 4.1.1-এর অধীনে XYZ Ltd.-এর জন্য Adjusted Covered Taxes-এর একটি উপাদান হিসেবে যুক্ত হবে, এবং তারপর সেই এখতিয়ারের অন্য সকল Constituent Entity-র Adjusted Covered Taxes ও GloBE Income-এর সাথে একত্রীকরণের (jurisdictional blending) মাধ্যমে জুরিসডিকশনাল ETR নির্ধারিত হবে। এখানে গুরুত্বপূর্ণ পাঠ হলো — আর্থিক হিসাবের প্রাথমিক Deferred Tax Expense (১২,০০,০০০) এবং GloBE-এর জন্য প্রাসঙ্গিক চূড়ান্ত অংক (৭,৮৫,০০০)-এর মধ্যে পার্থক্য প্রায় ৩৫%, যা দেখায় যে এই সমন্বয়গুলো উপেক্ষা করে সরাসরি আর্থিক হিসাব ব্যবহার করলে ETR গণনায় কতটা উল্লেখযোগ্য ভুল হতে পারতো।

## সারসংক্ষেপ

Total Deferred Tax Adjustment Amount হলো Adjusted Covered Taxes-এর এমন একটি উপাদান যা Article 4.4-এর অধীনে আর্থিক হিসাবের Deferred Tax Expense থেকে শুরু করে একাধিক নির্দিষ্ট সমন্বয়ের মধ্য দিয়ে গণনা করতে হয়। এই সমন্বয়গুলোর মূল উদ্দেশ্য হলো — স্থানীয় হিসাবরক্ষণ মানের বিষয়ভিত্তিকতা (Valuation Allowance, recognition threshold), স্থানীয় কর নীতির ওঠানামা (rate change), এবং GloBE-এর সাথে অসামঞ্জস্যপূর্ণ আইটেম (Disallowed Accruals, Unclaimed Accruals, Excluded Income, Tax Credit route) দূর করে একটি স্থিতিশীল ও তুলনাযোগ্য ETR তৈরি করা। মূল স্তরগুলো হলো: (১) Excluded Income-সংশ্লিষ্ট deferred tax বাদ দেওয়া; (২) Disallowed Accrual ও Unclaimed Accrual বাদ দেওয়া; (৩) স্থানীয় হার ১৫%-এর ঊর্ধ্বে বা নিম্নে থাকলে rate recast করা; (৪) Valuation Allowance/Accounting Recognition Adjustment-এর প্রভাব উপেক্ষা করা; (৫) কর হার পরিবর্তনজনিত remeasurement-এর অতিরিক্ত অংশ বাদ দেওয়া; এবং (৬) Tax Credit-সংশ্লিষ্ট deferred tax-কে পৃথক নিয়মে পাঠানো। এছাড়া, বিশেষ পরিস্থিতির জন্য Substitute Loss Carry-forward DTA-এর মতো নির্বাচনযোগ্য মেকানিজম বিদ্যমান, যা zero-tax বা low-tax এখতিয়ারে প্রথাগত deferred tax কাঠামোর অভাব পূরণ করে। এই সমস্ত সমন্বয় একসাথে প্রয়োগ করলে আর্থিক হিসাবের deferred tax movement এবং GloBE-এর জন্য প্রাসঙ্গিক অংকের মধ্যে যথেষ্ট পার্থক্য হতে পারে — যেমন ২১.১১-এর উদাহরণে দেখানো হয়েছে — এবং তাই এই গণনা কখনও উপেক্ষা করা উচিত নয়।

## সাধারণ ভুল

সবচেয়ে সাধারণ ভুলগুলোর মধ্যে প্রথম হলো — সরাসরি আর্থিক হিসাবের Deferred Tax Expense কোনো সমন্বয় ছাড়াই Adjusted Covered Taxes-এ যুক্ত করা, বিশেষত যখন স্থানীয় হার ১৫% থেকে উল্লেখযোগ্যভাবে ভিন্ন থাকে — এতে rate recast বাদ পড়ে যায় এবং ETR ভুলভাবে গণনা হয়। দ্বিতীয়ত, Valuation Allowance-এর movement-কে স্বাভাবিক deferred tax movement-এর মতোই ধরে নেওয়া, যেখানে GloBE-এর নিয়ম স্পষ্টভাবে এই প্রভাব উপেক্ষা করার নির্দেশ দেয় — এই ভুলটি প্রায়শই এমন কোম্পানিতে ঘটে যাদের ট্যাক্স টিম আর্থিক হিসাবের ট্যাক্স নোট থেকে সরাসরি অংক তুলে নেয় বিনা GloBE-নির্দিষ্ট পুনর্বিবেচনায়।

তৃতীয়ত, Unclaimed Accrual নির্বাচন না করে বা যথাযথ ডকুমেন্টেশন ছাড়া DTL ধরে রাখা, যা পরে অপ্রত্যাশিতভাবে পাঁচ বছরের রিক্যাপচার নিয়মের আওতায় পড়ে যায় এবং একাধিক বছর পরে একটি বিস্মৃত সমন্বয় ফিরে এসে ETR ও Top-up Tax পুনর্গণনার প্রয়োজন তৈরি করে। চতুর্থত, Disallowed Accrual-এর সংজ্ঞা ভুলভাবে সংকীর্ণ বা প্রশস্ত করে প্রয়োগ করা — যেমন কেবল আক্ষরিক অর্থে "uncertain tax position" শব্দবন্ধ ব্যবহার করা প্রভিশনগুলোকেই বিবেচনা করা, এবং বিতরণ-সংশ্লিষ্ট deferred tax-কে ভুলবশত সাধারণ deferred tax-এর মতো গণনায় রেখে দেওয়া।

পঞ্চমত, Tax Credit-সংশ্লিষ্ট deferred tax movement-কে সাধারণ deferred tax স্রোতের সাথে মিশিয়ে ফেলা, যার ফলে একই credit সুবিধা দুইবার (একবার credit-এর নিজস্ব নিয়মে, আরেকবার deferred tax-এর মাধ্যমে) গণনায় প্রবেশ করে বা ভুল হারে হিসাব হয়। ষষ্ঠত, Excluded Income-সংশ্লিষ্ট সম্পদের উপর deferred tax movement-কে সম্পূর্ণভাবে চিহ্নিত না করা, বিশেষত যখন একটি সম্পদ থেকে আংশিক Excluded এবং আংশিক সাধারণ আয় উৎপন্ন হয় — এখানে সঠিক বিভাজন না করলে ETR-এ Excluded Income-এর কর-প্রভাব অনুপ্রবেশ করে যায়। সপ্তমত, Substitute Loss Carry-forward DTA নির্বাচনকে ভুলভাবে এন্টিটি-পর্যায়ে প্রয়োগ করা, যেখানে এই নির্বাচন সাধারণত এখতিয়ার-ব্যাপী সামঞ্জস্যপূর্ণভাবে প্রয়োগ করতে হয়। এবং সর্বশেষ, পূর্বে অস্বীকৃত DTA হঠাৎ স্বীকৃতি দেওয়ার সময় তার উৎপত্তির ইতিহাস (Transition Year-এর আগে বা পরে, GloBE-এর scope-এ আসার আগে বা পরে) যথাযথভাবে যাচাই না করে সরাসরি চলতি বছরের সুবিধা হিসেবে ধরে নেওয়া — যা একটি অন্যায্য এককালীন ETR সুবিধা তৈরি করতে পারে এবং ভবিষ্যতে অডিট/রিভিউয়ের সময় প্রশ্নবিদ্ধ হতে পারে।
