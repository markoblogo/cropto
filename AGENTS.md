# Cropto Agent Context

## Product boundary

Cropto is a maintained prototype for indexed agricultural commodity market data, document verification, and settlement workflows. Production trading is paused. Do not describe it as a live or regulated venue.

## Work safely

- Preserve `release/demo` as the deployment branch unless the repository owner changes it.
- Treat trading, wallet, token, settlement, Telegram, and broker data paths as high-impact surfaces.
- Never weaken auth, operator roles, job secrets, audit records, or rate limits for demo convenience.
- Keep AMI, MN7R, 1D3X/SPIKE, and Cortex claims aligned with `PRODUCT_STATUS.md` and `AMI_INTEGRATION.md`.

## Verification

Run `npm run verify` for code changes. For API changes, also run the integration or smoke workflow with an isolated database. Verify deployment and the public site separately from local checks.

Deeper runbooks live in `docs/README.md`; load only the feature-specific document needed for the task.
