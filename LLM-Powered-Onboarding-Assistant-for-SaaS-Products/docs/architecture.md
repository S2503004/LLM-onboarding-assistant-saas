# Architecture

See README for a quick mermaid diagram. Backend is a single Express service that exposes an API for generating onboarding plans.
The generator module composes rule-based steps with recommendations from an LLM adapter.
