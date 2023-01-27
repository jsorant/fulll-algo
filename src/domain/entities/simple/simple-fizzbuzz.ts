import { FizzBuzz } from "../fizzbuzz";

export class SimpleFizzBuzz implements FizzBuzz {
  convert(input: number): string {
    let result: string = "";
    const isInputDivisibleBy3: boolean = input % 3 === 0;
    const isInputDivisibleBy5: boolean = input % 5 === 0;
    if (isInputDivisibleBy3) {
      result = "Fizz";
    }
    if (isInputDivisibleBy5) {
      result += "Buzz";
    }
    if (result === "") {
      result = input.toString();
    }
    return result;
  }
}
