import { MathHelper } from "../math";
import { Rule } from "./rule";

export class FizzRule implements Rule {
  private static readonly FIZZ_VALUE: string = "Fizz";

  private readonly math: MathHelper;

  constructor(math: MathHelper) {
    this.math = math;
  }

  apply(input: number): string {
    if (this.ruleIsApplicableTo(input)) {
      return FizzRule.FIZZ_VALUE;
    }
    return "";
  }

  private ruleIsApplicableTo(input: number): boolean {
    return this.math.canNumberBeDividedBy(input, 3);
  }
}
