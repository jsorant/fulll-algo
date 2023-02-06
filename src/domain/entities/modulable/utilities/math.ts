export class MathHelper {
  canNumberBeDividedBy(input: number, divisor: number): boolean {
    return input % divisor === 0;
  }
}
