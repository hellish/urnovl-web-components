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
