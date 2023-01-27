import { Displayer } from "../domain/ports/displayer";

export class ConsoleDisplayer implements Displayer {
  display(message: string): void {
    console.log(message);
  }
}
