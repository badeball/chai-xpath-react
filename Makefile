MOCHA := ./node_modules/.bin/_mocha
ESLINT := ./node_modules/.bin/eslint
ISTANBUL := ./node_modules/.bin/istanbul

all: lint test

ci: lint test-cover

lint:
	@$(ESLINT) .

test:
	@$(MOCHA) --reporter dot --compilers js:babel/register

test-cover:
	@$(ISTANBUL) cover --report lcov $(MOCHA) -- --reporter dot --compilers js:babel/register

.PHONY: lint test test-cover
