import { Displayer } from "../ports/displayer";
import { FizzBuzz } from "../entities/fizzbuzz";
import { ModulableFizzBuzzFactory } from "../entities/modulable/modulable-fizzbuzz-factory";
import { MonolithicFizzBuzz } from "../entities/monolithic/monolithic-fizzbuzz";
import { SimpleFizzBuzz } from "../entities/simple/simple-fizzbuzz";

export enum FizzBuzzImplementation {
  Simple,
  Monolithic,
  Modulable,
}

export class FizzBuzzUseCase {
  private fizzbuzz: FizzBuzz;
  private displayer: Displayer;

  constructor(implementation: FizzBuzzImplementation, displayer: Displayer) {
    this.fizzbuzz = this.buildFizzBuzz(implementation);
    this.displayer = displayer;
  }

  execute(from: number, to: number): void {
    this.loopInRangeAndApplyFizzBuzz(from, to);
  }

  private buildFizzBuzz(implementation: FizzBuzzImplementation): FizzBuzz {
    if (implementation === FizzBuzzImplementation.Monolithic) {
      return new MonolithicFizzBuzz();
    } else if (implementation === FizzBuzzImplementation.Modulable) {
      return ModulableFizzBuzzFactory.build();
    }
    return new SimpleFizzBuzz();
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
