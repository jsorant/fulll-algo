import { FizzBuzz } from "../fizzbuzz";

export class Math {
  canNumberBeDividedBy(input: number, divisor: number): boolean {
    return input % divisor === 0;
  }
}

export interface Rule {
  apply(input: number): string;
}

export class FizzRule implements Rule {
  private static readonly FIZZ_VALUE: string = "Fizz";

  private readonly math: Math;

  constructor(math: Math) {
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

export class BuzzRule implements Rule {
  private static readonly BUZZ_VALUE: string = "Buzz";

  private readonly math: Math;

  constructor(math: Math) {
    this.math = math;
  }

  apply(input: number): string {
    if (this.ruleIsApplicableTo(input)) {
      return BuzzRule.BUZZ_VALUE;
    }
    return "";
  }

  private ruleIsApplicableTo(input: number): boolean {
    const n: Number = new Number(input);
    return this.math.canNumberBeDividedBy(input, 5);
  }
}

export class DefaultRule implements Rule {
  apply(input: number): string {
    return this.convertToString(input);
  }

  private convertToString(input: number) {
    return input.toString();
  }
}

export class ModulableFizzBuzz implements FizzBuzz {
  convert(input: number): string {
    const convertor: Converter = this.buildConvertor(input);
    return convertor.convert();
  }

  private buildConvertor(input: number): Converter {
    const math: Math = new Math();
    const rules: Array<Rule> = [];
    rules.push(new FizzRule(math));
    rules.push(new BuzzRule(math));
    const defaultRule: Rule = new DefaultRule();

    return new Converter(input, rules, defaultRule);
  }
}

export class Converter {
  private static readonly INITIAL_RESULT_VALUE = "";

  private readonly rules: Array<Rule>;
  private readonly defaultRule: Rule;
  private readonly input: number = 0;
  private result: string = Converter.INITIAL_RESULT_VALUE;

  constructor(input: number, rules: Array<Rule>, defaultRule: Rule) {
    this.rules = rules;
    this.defaultRule = defaultRule;
    this.input = input;
  }

  convert(): string {
    this.applyRules();
    this.applyDefaultRuleIfNeeded();
    return this.result;
    //TODO double calls idempotence
  }

  private applyRules(): void {
    for (const rule of this.rules) {
      this.applyRule(rule);
    }
  }

  private applyRule(rule: Rule): void {
    this.result += rule.apply(this.input);
  }

  private applyDefaultRuleIfNeeded(): void {
    if (this.hasAResult()) {
      return;
    }
    this.applyDefaultRule();
  }

  private hasAResult(): boolean {
    return this.result !== Converter.INITIAL_RESULT_VALUE;
  }

  private applyDefaultRule(): void {
    this.applyRule(this.defaultRule);
  }
}
