.PHONY: build test lint package

build:
	cd backend && npm run build

test:
	cd backend && npm test

lint:
	cd backend && npm run lint || true

package: build
	@echo "Package step (build artifacts are in backend/dist)"
