# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v1.2.1] - 2026-09-13

### Security
- Migrated the web runtime from Express 4 to Express 5.2.1.
- Replaced the vulnerable npm `xlsx` release with the supported official SheetJS 0.20.3 distribution.
- Updated safe transitive production dependencies and pinned Lodash 4.18.1; `npm audit --omit=dev` now reports zero findings.

### Fixed
- Updated catch-all routing and route-parameter normalization for Express 5.
- Added an XLSX round-trip regression test for the Sea Brokerage export/import shape.

## [v1.2.0] - 2026-09-13

### Added
- Added crawler files, canonical/social metadata, structured data, weekly live verification, a responsible disclosure policy, and contributor/agent guidance.
- Added an explicit unit-test command and a server-backed integration-test lane.

### Changed
- Focused the public hero on market data, the partner deck, and feedback while keeping production trading visibly paused.
- Localized the global prototype-status banner and refreshed the lifecycle review date.
- Split route pages into lazy-loaded bundles to reduce the initial client payload.
- Upgraded MapLibre GL, Drizzle ORM, Nodemailer, Express 4, and PostCSS; isolated development-only test and contract tooling.
- Updated scheduled market context calls to the canonical `cr0pto.com` domain.

### Fixed
- Fixed two test suites that could not run because Jest aliases and globals were incomplete.
- Removed the Express technology header and added HSTS on production responses.

### Docs
- Repositioned Cropto as indexed trading, document-verification and settlement infrastructure for agro-commodity markets.
- Added `PRODUCT_STATUS.md`, `REVIVAL_ROADMAP.md`, `AMI_INTEGRATION.md` and `DEMO.md`.
- Clarified that Cropto is a functional prototype, not a live trading venue, generic crypto exchange or speculative NFT marketplace.
- Aligned ES/PT/UK public localization and legacy docs with the updated AMI/infrastructure positioning.

## [v1.1.0] - 2026-02-24

### Added
- Added a dedicated partner/investor landing page at `/deck`.
- Added deck-focused sections and components including narrative sections, teaser video, deck embed area, PDF access, FAQ, contact form, and ecosystem strip.
- Added main-page and footer entry points linking users to `/deck`.

### Improved
- Improved visual integration between the main product UI and the deck entry points.
- Improved deck page polish and theme-aware presentation for light/dark modes.

### Docs
- Refreshed `README.md` to reflect current Cropto positioning as a commodity market infrastructure prototype.
- Updated repository documentation framing to include `/deck` and current prototype scope.
