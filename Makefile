.PHONY: run
run: start

.PHONY: start
start:
	npm run storybook

.PHONY: watch
watch:
	npm run start

.PHONY: prod
prod:
	npm run build && npm run build-storybook

.PHONY: serve
serve:
	npx http-server storybook-static

.PHONY: test
test:
	npm run test

PHONY: pack
pack:
	npm --no-git-tag-version version prerelease
	npm install
	npm run build
	npm run build-storybook
	npm pack
