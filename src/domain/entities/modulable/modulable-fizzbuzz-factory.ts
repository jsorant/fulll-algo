import { MathHelper } from "./utilities/math";
import { ModulableFizzBuzz } from "./modulable-fizzbuzz";
import { BuzzRule } from "./rules/buzz-rule";
import { DefaultRule } from "./rules/default-rule";
import { FizzRule } from "./rules/fizz-rule";
import { Rule } from "./rules/rule";

export class ModulableFizzBuzzFactory {
  static build(): ModulableFizzBuzz {
    const math: MathHelper = new MathHelper();
    const rules: Array<Rule> = [new FizzRule(math), new BuzzRule(math)];
    return new ModulableFizzBuzz(rules, new DefaultRule());
  }
}
