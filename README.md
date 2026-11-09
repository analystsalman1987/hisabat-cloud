# HISABAT Cloud

React + TypeScript + Vite front-end for HISABAT Cloud ERP.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Included in this update

- Expand/collapse navigation for every sidebar category.
- First-run business onboarding: category, company details, administrator.
- Sales invoice draft, submit, approve, finalize and paid status flow.
- Customer and supplier profiles with search, profile summary and CSV statement export.
- Balanced debit/credit journal entry screen and journal export.
- Financial overview, Profit & Loss and Balance Sheet presentation.
- Print / Save as PDF and Excel-compatible CSV exports for filtered lists.
- Company, VAT, currency, template and language settings.
- English LTR / Arabic RTL layout toggle.

## Important implementation note

This ZIP is a front-end prototype. Data is stored in the current browser using localStorage. It does not yet include a production database, authentication service, multi-tenant API, payment gateway, server-side accounting posting, or a true XLSX/PDF generation service. Browser Print can be used to save a printable view as PDF; CSV exports open in Excel. Connect a secure backend before using it for live financial records.
