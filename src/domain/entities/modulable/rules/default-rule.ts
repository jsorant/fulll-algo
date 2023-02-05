import { Rule } from "./rule";

export class DefaultRule implements Rule {
  apply(input: number): string {
    return this.convertToString(input);
  }

  private convertToString(input: number) {
    return input.toString();
  }
}
