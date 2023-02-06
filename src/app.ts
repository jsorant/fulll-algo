import { ConsoleDisplayer } from "./infrastructure/console-displayer";
import { Displayer } from "./domain/ports/displayer";
import { FizzBuzzController } from "./adapter/fizzbuzz-controller";

parseCommandLineAndExecuteApplication();

function parseCommandLineAndExecuteApplication() {
  const fizzbuzzImplementationArgument: string =
    lookupCommandLineFirstArgument();

  const from: string = "1";
  const to: string = "100";

  const displayer: Displayer = new ConsoleDisplayer();
  const controller: FizzBuzzController = new FizzBuzzController(displayer);
  controller.handle(fizzbuzzImplementationArgument, from, to);
}

function lookupCommandLineFirstArgument(): string {
  return process.argv[2] ? process.argv[2] : "";
}
