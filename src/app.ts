import { ConsoleDisplayer } from "./infrastructure/console-displayer";
import { Displayer } from "./domain/ports/displayer";
import { FizzBuzz } from "./domain/entities/fizzbuzz";
import { MonolithicFizzBuzz } from "./domain/entities/monolithic/monolithic-fizzbuzz";
import { SimpleFizzBuzz } from "./domain/entities/simple/simple-fizzbuzz";
import { FizzBuzzUseCase } from "./domain/usecases/fizzbuzz";
import { ModulableFizzBuzzFactory } from "./domain/entities/modulable/modulable-fizzbuzz-factory";

let fizzbuzz: FizzBuzz;
const fizzbuzzType: string = process.argv[2] ? process.argv[2] : "";
if (fizzbuzzType.toLowerCase() === "monolithic") {
  console.log("Running application with a monolithic fizzbuzz");
  fizzbuzz = new MonolithicFizzBuzz();
} else if (fizzbuzzType.toLowerCase() === "modulable") {
  console.log("Running application with a modulable fizzbuzz");
  fizzbuzz = ModulableFizzBuzzFactory.build();
} else {
  console.log("Running application with a simple fizzbuzz");
  fizzbuzz = new SimpleFizzBuzz();
}

const displayer: Displayer = new ConsoleDisplayer();
const usecase: FizzBuzzUseCase = new FizzBuzzUseCase(fizzbuzz, displayer);
usecase.execute(1, 100);
