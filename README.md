# Fulll Technical test - [Algo] FizzBuzz

## Introduction

This repository contains a technical test regarding my application at Fulll.

Instructions for this test are available [here](https://github.com/fulll/hiring/blob/master/Algo/fizzbuzz.md).

## Description

This repository contains 3 implementations of FizzBuzz:

- `simple`: a very simple version
- `monolithic`: a cleaner version with constraint to stay monolithic (one class to handle the algorithm)
- `modulable`: a version focused on evolutivity with more SRP and OCP

Proposed architecture is inspired from Robert C. Martin's Clean Architecture.

## Setup

```
npm install
```

## Unit tests

The same batch of functional tests are executed for all 3 versions of FizzBuzz.

```
npm test
```

## Run FizzBuzz for number from 1 to 100

### With the simple implementation

```
npm run start:simple
```

### With the monolithic implementation

```
npm run start:monolithic
```

### With the modulable implementation

```
npm run start:modulable
```

## Missing

- modulable-fizzbuzz.ts: inject convertor & make a factory to create a ModulableFizzBuzz
- Clean Architecture: move FizzBuzz instanciation from app.ts into the UseCase. Create an enum to determine which instace create. Create a adapter to adapt the command line argument to the enum value. Use a factory to encapsulate this.
- SRP and an adapter layer to split app.ts and reduce it to reading raw command line arguments (infrastructure's command line parser to adapter's controller)
- Create a DI container in infrastructure layer to encapsulate how the application is built
- Functional tests around the usecase to fully cover the domain (only the algorithm is tested)
- Integration tests with mocks on infrastructure objects (console displayer)
