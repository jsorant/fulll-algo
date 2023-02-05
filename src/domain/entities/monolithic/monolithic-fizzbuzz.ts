import { FizzBuzz } from "../fizzbuzz";

export class MonolithicFizzBuzz implements FizzBuzz {
  private static readonly FIZZ_DIVISOR = 3;
  private static readonly FIZZ_VALUE = "Fizz";
  private static readonly BUZZ_DIVISOR = 5;
  private static readonly BUZZ_VALUE = "Buzz";
  private static readonly INITIAL_RESULT_VALUE = "";

  private input: number = 0;
  private result: string = MonolithicFizzBuzz.INITIAL_RESULT_VALUE;

  convert(input: number): string {
    this.initializeWithNumber(input);
    this.applyFizzRule();
    this.applyBuzzRule();
    this.applyDefaultRuleIfNeeded();
    return this.result;
  }

  private initializeWithNumber(input: number): void {
    this.input = input;
    this.result = MonolithicFizzBuzz.INITIAL_RESULT_VALUE;
  }

  private applyFizzRule(): void {
    if (this.matchesFizzRule()) {
      this.appendFizzConversionToResult();
    }
  }

  private applyBuzzRule(): void {
    if (this.matchesBuzzRule()) {
      this.appendBuzzConversionToResult();
    }
  }

  private applyDefaultRuleIfNeeded(): void {
    if (this.conversionHasntBeenFoundYet()) {
      this.setResultWithDefaultConversion();
    }
  }

  private conversionHasntBeenFoundYet(): boolean {
    return this.result === MonolithicFizzBuzz.INITIAL_RESULT_VALUE;
  }

  private matchesFizzRule(): boolean {
    return this.input % MonolithicFizzBuzz.FIZZ_DIVISOR === 0;
  }

  private matchesBuzzRule(): boolean {
    return this.input % MonolithicFizzBuzz.BUZZ_DIVISOR === 0;
  }

  private appendFizzConversionToResult(): void {
    this.result += MonolithicFizzBuzz.FIZZ_VALUE;
  }

  private appendBuzzConversionToResult(): void {
    this.result += MonolithicFizzBuzz.BUZZ_VALUE;
  }

  private setResultWithDefaultConversion(): void {
    this.result = this.input.toString();
  }
}
