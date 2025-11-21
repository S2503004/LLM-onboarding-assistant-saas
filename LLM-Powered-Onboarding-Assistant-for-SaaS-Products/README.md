# LLM-Powered Onboarding Assistant for SaaS Products

**Short description:** Any B2B SaaS product with onboarding friction is losing revenue.

## Project metadata
- **Project name:** LLM-Powered Onboarding Assistant for SaaS Products
- **Domain / stack:** full-stack TypeScript React + Node.js SaaS
- **Primary language(s):** TypeScript, JavaScript
- **Target platform/hardware:** Docker (Linux x86_64)
- **Target audience / user:** Product teams and customer success engineers at B2B SaaS companies
- **Delivery format:** Git repo ready for CI / Docker

## System architecture (mermaid)

```mermaid
flowchart LR
  subgraph Client
    BROWSER[Web Client / Example Script]
  end
  subgraph Backend["Backend (Express + TypeScript)"]
    API[/POST /api/onboard/]
    GEN[Onboarding Generator (rules + LLM adapter)]
    CACHE[(Optional cache)]
  end
  BROWSER -->|HTTP JSON| API
  API --> GEN
  GEN -->|LLM call| LLM["(External LLM provider)"]
  GEN --> CACHE
  style Backend fill:#f9f,stroke:#333,stroke-width:1px
```

## Quickstart (local)
Requirements: Docker & Docker Compose OR Node >=16 + npm/yarn

Clone repo, then:

```bash
# build and run with docker-compose
docker-compose up --build

# or run backend locally
cd backend
npm install
npm run build
npm run start:dev
```

Example request (curl):

```bash
curl -X POST localhost:4000/api/onboard -H "Content-Type: application/json" -d '{
  "productName":"Acme CRM",
  "persona":"new-sales-rep",
  "goal":"complete first lead conversion",
  "userEmail":"test@example.com"
}'
```

## API docs (summary)
- `POST /api/onboard` — generate onboarding plan for a new user. Accepts JSON with `productName`, `persona`, `goal`, and optional `context`.

Full OpenAPI spec is in `docs/openapi.yml`.

## Testing
Run unit tests for backend:

```bash
cd backend
npm install
npm test
```

Top-level `Makefile` supports `make build`, `make test`, `make lint`, `make package`.

## CI
A GitHub Actions workflow runs lint → tests → build. See `.github/workflows/ci.yml`.

## License
MIT — see `LICENSE` file.

