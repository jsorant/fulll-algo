# Fulll Technical test - [Algo] FizzBuzz

## Introduction

This repository contains 3 implementations of FizzBuzz:

- `simple`: a very simple version
- `monolithic`: a cleaner version with constraint to stay monolithic
- `modulable`: a version focused on evolutivity with more SRP and OCP

Proposed architecture is inspired from Robert C. Martin's Clean Architecture.

## Setup

```
npm install
```

## Unit tests

Same batch of functional tests are executed for all 3 versions of FizzBuzz.

```
npm run test
```

## Run

### Simple implementation

```
npm run start:simple
```

### Monolithic implementation

```
npm run start:monolithic
```

### Modulable implementation

```
npm run start:modulable
```

## Missing

- SRP and an adapter layer to split app.ts and reduce it to reading raw command line arguments (command line parser, arguments adapter, di container/factories)
- Functional tests around the usecase to fully cover the domain (only the algorithm is tested)
- Integration tests with mocks on infrastructure objects (console displayer)
