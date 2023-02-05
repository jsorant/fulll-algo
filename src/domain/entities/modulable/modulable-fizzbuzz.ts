import { FizzBuzz } from "../fizzbuzz";
import { Converter } from "./convertor";
import { MathHelper } from "./math";
import { BuzzRule } from "./rules/buzz-rule";
import { DefaultRule } from "./rules/default-rule";
import { FizzRule } from "./rules/fizz-rule";
import { Rule } from "./rules/rule";

export class ModulableFizzBuzz implements FizzBuzz {
  convert(input: number): string {
    const convertor: Converter = this.buildConvertor();
    return convertor.convert(input);
  }

  private buildConvertor(): Converter {
    const math: MathHelper = new MathHelper();
    const rules: Array<Rule> = [new FizzRule(math), new BuzzRule(math)];
    return new Converter(rules, new DefaultRule());
  }
}
