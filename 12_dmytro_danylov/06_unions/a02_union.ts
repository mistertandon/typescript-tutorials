/**
 * CMD to run this file
 *
 *  ./../node_modules/.bin/ts-node a02_union.ts
 */
namespace unionNS {
  /**
   * In TypeScript, a union type allows to use multiple types choices.
   * The type any allows all type to be used, whereas, union types
   * restrict that scope by providing specific types.
   */

  function square(x: number | string): number {
    if (typeof x === "string") {
      let xParsed = parseInt(x);
      if (isNaN(xParsed)) {
        throw Error("Invalid Argument");
      }

      x = xParsed;
    }

    return Math.pow(x, 2);
  }

  let ans_i = square("4");
  console.log(`Square of 4 is: ${ans_i}`);
}
