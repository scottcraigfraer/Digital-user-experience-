# DEX Command Centre

Browser-based Digital Employee Experience dashboard prototype.

## Run

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Build with `npm run build`.

## Current scope

- Six dashboard sections, interactive SVG trends, KPI cards, device search, device investigation, CSV export.
- Synthetic sample estate of 120 devices. No live Intune, ServiceNow, or personal data is connected.
- Responsive, self-contained web UI.

## Next phase

Use an organisation-approved backend and Microsoft Entra ID authentication. Query Microsoft Graph with least-privilege access and server-side credentials; do not place tokens in browser JavaScript. Persist approved aggregated telemetry with retention and access controls. Connect ServiceNow using a separate read-only integration.

## Deployment

Deploy as a Vite static site (build command `npm run build`, output `dist`) on an approved internal platform. For Railway use a static hosting adapter or a production HTTP server rather than Vite development mode.
