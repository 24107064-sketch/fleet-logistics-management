# Fleet & Logistics — Static Demo

A frontend-only operations console for fleet managers, dispatchers, and logistics administrators. Built with React, Vite, TypeScript-compatible TSX, Wouter, Lucide, and Recharts.

## Run locally

From the workspace root:

```sh
pnpm install
pnpm --filter @workspace/fleet-logistics run dev
```

Build the artifact with `pnpm --filter @workspace/fleet-logistics run build`. This static demo does not need an API server, credentials, or environment configuration.

## Implemented

- Shared responsive operations shell with navigation, grouped global search (`/` focuses search), notification read state, and a visible Local / Demo indicator.
- Dashboard KPIs derived from local fleet and shipment records, fleet status chart, weekly sample volume chart, recent shipment table, refresh action, and quick links.
- Vehicle and driver registries with search, filters, paging, add/edit/delete flows, validation, and detail panels.
- Shipment list, filtering/sorting, create/delete, shipment detail tracking stages, and status progression with vehicle availability side effects, notifications, activity records, and toast feedback.
- Schematic route planning with filtering, route details, and create/edit/delete.
- Operational report charts, date filters, derived KPIs, and escaped client-side CSV export.
- Searchable/filterable activity log and editable local preferences.
- Keyboard-accessible modal close behavior, focus-visible styling, responsive tables, semantic status colors, and reduced-motion support.

## Data and limitations

All operational records are fictional and live in client memory. **Adding, editing, deleting, and status changes reset after a browser refresh.** Preferences can be saved in localStorage on the current device. No backend, API server, database, authentication, server persistence, live GPS, map service, real-time integrations, or account security is included. Charts and events are illustrative sample data rather than live operational telemetry.

## Future service replacement

The centralized `src/data.ts` seed records and `src/store.tsx` in-memory mock service functions are intentionally isolated from page presentation. For the backend phase, replace those mock-service functions with a REST adapter while retaining the same entity contracts and UI-facing operations. A Node.js + Express + SQLite service and any deployment pipeline are future work and are not included here.
