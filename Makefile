APP_VERSION:=$(shell git describe --tags `git rev-list --tags --max-count=1`)

test-all:
	yarn lint
	yarn type-check
	yarn test --coverage