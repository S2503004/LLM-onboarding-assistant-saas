#!/usr/bin/env bash
# Simple example that calls the API (assumes backend running at localhost:4000)
curl -s -X POST http://localhost:4000/api/onboard -H "Content-Type: application/json" -d '{
  "productName":"Acme CRM",
  "persona":"sales-rep",
  "goal":"convert first lead"
}' | jq
