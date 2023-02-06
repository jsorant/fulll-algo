import { FizzBuzz } from "../fizzbuzz";
import { Rule } from "./rules/rule";

export class ModulableFizzBuzz implements FizzBuzz {
  private static readonly INITIAL_RESULT_VALUE = "";

  private readonly rules: Array<Rule>;
  private readonly defaultRule: Rule;
  private input: number = 0;
  private result: string = ModulableFizzBuzz.INITIAL_RESULT_VALUE;

  constructor(rules: Array<Rule>, defaultRule: Rule) {
    this.rules = rules;
    this.defaultRule = defaultRule;
    this.input = 0;
  }

  convert(input: number): string {
    this.initializeWithNumber(input);
    this.applyRules();
    this.applyDefaultRuleIfNeeded();
    return this.result;
  }

  private initializeWithNumber(input: number): void {
    this.input = input;
    this.result = ModulableFizzBuzz.INITIAL_RESULT_VALUE;
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
    return this.result !== ModulableFizzBuzz.INITIAL_RESULT_VALUE;
  }

  private applyDefaultRule(): void {
    this.applyRule(this.defaultRule);
  }
}
