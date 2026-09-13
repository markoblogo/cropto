# Security Policy

Cropto is a maintained prototype. It must not be used as a regulated trading, custody, clearing, or production settlement venue without an independent security and compliance review.

## Reporting a Vulnerability

Please use GitHub's private vulnerability reporting for this repository. Include the affected route or module, reproduction steps, impact, and any suggested mitigation. Do not open a public issue for an unpatched vulnerability.

## Supported Version

Security fixes are applied to the current release line on `release/demo`. Historical alpha releases are unsupported.

## Current Boundary

- Public market and reporting routes are evaluation surfaces.
- Trading, wallet, token, and settlement actions remain prototype workflows.
- Secrets belong in environment variables and must never be committed.
- See [SECURITY_REPORT.md](./SECURITY_REPORT.md) for the current engineering audit and residual dependency risks.
