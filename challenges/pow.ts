/**
 * Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Assume y will always be a non-negative integer, but x may be any number.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion.
 */

function pow(base: number, power: number): number {
  //Base case
  if(power === 0) return 1;

  return base * pow(base,power-1);
}

console.log(pow(2,8));
/**
 * Extension: Use recursion.
 */

function powRecurse(base: number, power: number): number {
  return 0;
}

export { pow, powRecurse };
