# Fleet & Logistics

A frontend-only fleet and logistics operations demo for managing vehicles, drivers, shipments, routes, reports, and activity.

## Run & Operate

- `pnpm --filter @workspace/fleet-logistics run dev` — run the frontend
- `pnpm --filter @workspace/fleet-logistics run typecheck` — typecheck the frontend
- `pnpm run typecheck` — typecheck all workspace packages

This phase is static and does not use the separately scaffolded API server or database. Operational changes are in-memory and reset on refresh; display preferences use local storage.

## Stack

- pnpm workspace, React, Vite, TypeScript-compatible TSX
- Routing: Wouter
- Charts: Recharts
- Icons: Lucide React

## Where things live

- `artifacts/fleet-logistics/src/pages/` — application pages
- `artifacts/fleet-logistics/src/data.ts` — centralized fictional seed data and domain types
- `artifacts/fleet-logistics/src/store.tsx` — client-side state and mock operations
- `artifacts/fleet-logistics/src/components/Shell.tsx` — shared navigation and global controls
- `artifacts/fleet-logistics/src/index.css` — shared visual system and responsive rules

## Architecture decisions

- This initial phase is intentionally frontend-only; do not add server persistence or live operational integrations unless the user requests the backend phase.
- The mock service operations in the frontend store are the intended boundary for a future REST adapter.

## Product

The demo supports fleet and driver management, shipment tracking, route planning, operational analytics, activity history, global search, notifications, and local preferences. It uses fictional sample records, not live GPS or real operational data.

## User preferences

- Keep the current phase frontend-only; Node.js + Express + SQLite and DevOps automation are future work, not part of this app's initial implementation.

## Gotchas

- Operational CRUD changes reset when the browser is refreshed; the static demo does not call the workspace API server.

## Pointers

- See `artifacts/fleet-logistics/README.md` for run instructions, implemented features, limitations, and the future API replacement boundary.
