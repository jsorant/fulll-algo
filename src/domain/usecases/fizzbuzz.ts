import { Displayer } from "../ports/displayer";
import { FizzBuzz } from "../entities/fizzbuzz";

export class FizzBuzzUseCase {
  private fizzbuzz: FizzBuzz;
  private displayer: Displayer;

  constructor(fizzbuzz: FizzBuzz, displayer: Displayer) {
    this.fizzbuzz = fizzbuzz;
    this.displayer = displayer;
  }

  execute(from: number, to: number): void {
    this.loopInRangeAndApplyFizzBuzz(from, to);
  }

  private loopInRangeAndApplyFizzBuzz(from: number, to: number): void {
    for (let i = from; i <= to; i++) {
      this.applyFizzBuzz(i);
    }
  }

  private applyFizzBuzz(value: number): void {
    const convertedValue: string = this.fizzbuzz.convert(value);
    this.displayer.display(convertedValue);
  }
}
