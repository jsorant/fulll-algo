import { MathHelper } from "../utilities/math";
import { Rule } from "./rule";

export class BuzzRule implements Rule {
  private static readonly BUZZ_VALUE: string = "Buzz";

  private readonly math: MathHelper;

  constructor(math: MathHelper) {
    this.math = math;
  }

  apply(input: number): string {
    if (this.ruleIsApplicableTo(input)) {
      return BuzzRule.BUZZ_VALUE;
    }
    return "";
  }

  private ruleIsApplicableTo(input: number): boolean {
    return this.math.canNumberBeDividedBy(input, 5);
  }
}
