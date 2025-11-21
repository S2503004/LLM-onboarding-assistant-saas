# Security Notes & Threat Model (brief)

- No hard-coded secrets in repo; use environment variables.
- Threats: data exfiltration of user-provided context; mitigation: validate and sanitize inputs, limit logs, rotate keys.
- Recommend secure storage of LLM API keys and network egress controls.
