import { Displayer } from "../domain/ports/displayer";
import {
  FizzBuzzImplementation,
  FizzBuzzUseCase,
} from "../domain/usecases/fizzbuzz";

export class FizzBuzzController {
  private displayer: Displayer;

  constructor(displayer: Displayer) {
    this.displayer = displayer;
  }

  handle(implementation: string, from: string, to: string): void {
    const adaptedImplementation: FizzBuzzImplementation =
      this.adaptFizzBuzzImplementation(implementation);
    const usecase: FizzBuzzUseCase = new FizzBuzzUseCase(
      adaptedImplementation,
      this.displayer
    );
    usecase.execute(this.adaptFrom(from), this.adaptTo(to));
  }

  private adaptFizzBuzzImplementation(
    fizzbuzzImplementationArgument: string
  ): FizzBuzzImplementation {
    if (fizzbuzzImplementationArgument.toLowerCase() === "monolithic") {
      console.log("Running application with a monolithic fizzbuzz");
      return FizzBuzzImplementation.Monolithic;
    } else if (fizzbuzzImplementationArgument.toLowerCase() === "modulable") {
      console.log("Running application with a modulable fizzbuzz");
      return FizzBuzzImplementation.Modulable;
    }
    console.log("Running application with a simple fizzbuzz");
    return FizzBuzzImplementation.Simple;
  }

  private adaptFrom(from: string): number {
    // TODO: should also validate (integer, min/max value)
    return Number.parseInt(from);
  }

  private adaptTo(to: string): number {
    // TODO: should also validate (integer, min/max value)
    return Number.parseInt(to);
  }
}
