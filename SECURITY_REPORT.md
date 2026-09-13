# Security Engineering Status

**Reviewed:** 2026-09-13
**Scope:** maintained prototype and partner-evaluation deployment

This document records implemented safeguards and known residual work. It is not a production-readiness certification.

## Implemented safeguards

- Public registration grants only the base user role; privileged roles require controlled operator flows.
- Client attempts to supply service-role credentials are blocked.
- JWT authentication and user-scoped wallet access are enforced server-side.
- Production job endpoints require `JOB_RUNNER_SECRET`.
- API, authentication, and upload routes use process-local rate limits.
- Feedback uploads are MIME- and size-restricted and served with hardened static headers.
- Responses suppress `X-Powered-By`, deny framing, restrict browser permissions, and enable HSTS in production.
- Operational security events are written to the audit log.

## Dependency status

The September 2026 pass upgraded `maplibre-gl`, `drizzle-orm`, `nodemailer`, and PostCSS, migrated the server to Express 5.2.1, and replaced the vulnerable npm `xlsx` release with the supported official SheetJS 0.20.3 distribution. Safe transitive production fixes and Lodash 4.18.1 are pinned in the lockfile.

`npm audit --omit=dev` reports zero findings as of 2026-09-13. Use current audit output as the source of truth because registry advisories change over time.

The full development audit still reports findings through the paused Hardhat 2 contract toolchain. Hardhat and its plugins are development-only dependencies and are excluded from Railway's production dependency audit. Upgrade that toolchain together as a separate contract-build migration before resuming on-chain development.

## Required before production use

1. Complete an independent application and infrastructure security review.
2. Upgrade the paused Hardhat contract toolchain before resuming on-chain development.
3. Move rate limiting and security-event retention to shared durable infrastructure.
4. Add secret rotation, incident response, log retention, and alerting procedures.
5. Review trading, settlement, wallet, token, privacy, and compliance controls with qualified partners.

Report vulnerabilities privately through GitHub as described in [SECURITY.md](./SECURITY.md).
