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

The September 2026 pass upgraded `maplibre-gl`, `drizzle-orm`, and `nodemailer`, removing the previously reported critical production advisory. Hardhat and Jest tooling are isolated in development dependencies.

`npm audit --omit=dev` still reports issues in two direct dependency paths:

- Express 4 transitive advisories require an evaluated Express 5 migration.
- The npm release of `xlsx` has a high-severity advisory with no published npm fix. It remains limited to explicit spreadsheet import/export paths and should be replaced before regulated or untrusted-file production use.

Use the current audit output as the source of truth; registry advisories change over time.

## Required before production use

1. Complete an independent application and infrastructure security review.
2. Replace or isolate `xlsx` and complete the Express 5 migration.
3. Move rate limiting and security-event retention to shared durable infrastructure.
4. Add secret rotation, incident response, log retention, and alerting procedures.
5. Review trading, settlement, wallet, token, privacy, and compliance controls with qualified partners.

Report vulnerabilities privately through GitHub as described in [SECURITY.md](./SECURITY.md).
