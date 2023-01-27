import { ModulableFizzBuzz } from "./modulable/modulable-fizzbuzz";
import { MonolithicFizzBuzz } from "./monolithic/monolithic-fizzbuzz";
import { SimpleFizzBuzz } from "./simple/simple-fizzbuzz";

const modulable: ModulableFizzBuzz = new ModulableFizzBuzz();
const monolithic: MonolithicFizzBuzz = new MonolithicFizzBuzz();
const simple: SimpleFizzBuzz = new SimpleFizzBuzz();

const testEnvironments = [
  { fizzbuzz: modulable, fizzbuzzName: "ModulableFizzBuzz" },
  { fizzbuzz: monolithic, fizzbuzzName: "MonolithicFizzBuzz" },
  { fizzbuzz: simple, fizzbuzzName: "SimpleFizzBuzz" },
];
describe.each(testEnvironments)("Test $fizzbuzzName", ({ fizzbuzz }) => {
  const defaultCasesTestData = [
    { input: 1, expected: "1" },
    { input: 2, expected: "2" },
    { input: 4, expected: "4" },
  ];
  describe.each(defaultCasesTestData)(
    "Default cases: input is not multiple of 3 nor 5",
    ({ input, expected }) => {
      test(`GIVEN ${input} as input WHEN convert the input THEN result should be ${input}`, () => {
        const result: string = fizzbuzz.convert(input);
        expect(result).toBe(expected);
      });
    }
  );

  const fizzCasesTestData = [{ input: 3 }, { input: 6 }, { input: 9 }];
  describe.each(fizzCasesTestData)(
    "Fizz cases: input is multiple of 3 and not multiple of 5",
    ({ input }) => {
      test(`GIVEN ${input} as input WHEN convert the input THEN result should be Fizz`, () => {
        const result: string = fizzbuzz.convert(input);
        expect(result).toBe("Fizz");
      });
    }
  );

  const buzzCasesTestData = [{ input: 5 }, { input: 10 }, { input: 20 }];
  describe.each(buzzCasesTestData)(
    "Buzz cases: input is multiple of 5 and not multiple of 3",
    ({ input }) => {
      test(`GIVEN ${input} as input WHEN convert the input THEN result should be Buzz`, () => {
        const result: string = fizzbuzz.convert(input);
        expect(result).toBe("Buzz");
      });
    }
  );

  const fizzbuzzCasesTestData = [{ input: 15 }, { input: 30 }, { input: 45 }];
  describe.each(fizzbuzzCasesTestData)(
    "FizzBuzz cases: input is multiple of 3 and multiple of 5",
    ({ input }) => {
      test(`GIVEN ${input} as input WHEN convert the input THEN result should be FizzBuzz`, () => {
        const result: string = fizzbuzz.convert(input);
        expect(result).toBe("FizzBuzz");
      });
    }
  );
});
