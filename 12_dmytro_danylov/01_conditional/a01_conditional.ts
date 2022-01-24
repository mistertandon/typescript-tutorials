/**
 * CMD to run this file
 *
 *  ./../node_modules/.bin/ts-node a01_conditional.ts
 */
type SomeType = string;

type MyConditionType = SomeType extends string ? string : null;

function someFunction<T>(someArg: T) {
  type CustomType = T extends "TYPE A"
    ? "TYPE A"
    : T extends "TYPE B"
    ? "TYPE B"
    : T extends "TYPE C"
    ? "TYPE C"
    : "TYPE D";

  const someOtherFunction = (
    someOtherArg: T extends boolean ? "TYPE A" : "TYPE B"
  ) => {
    const localVar: "TYPE A" | "TYPE B" = someOtherArg;
  };

  return someOtherFunction;
}

const result_A = someFunction(true);
/**
 * Upon compilation answer would be
 *
 * const result_A: (someOtherArg: "TYPE A") => void
 */

type StringOrNot<T> = T extends string ? string : never;

type AUnion = string | boolean | never;
/**
 * Upon compilation answer would be
 * type AUnion = string | boolean
 */

type ResultType = Exclude<"a" | "b" | "c", "a" | "b">;
/**
 * Upon compilation answer would be
 * type ResultType = "c"
 *
 * How TypeScript would inference result
 * "a" extends "a" | "b" ? never: "a" => never
 * "b" extends "a" | "b" ? never: "b" => never
 * "c" extends "a" | "b" ? never: "c" => "c"
 *
 * Therefore, answer would be
 * type ResultType = "c"
 */

type InferredSomething_A<T> = T extends infer U ? U : any;
type Inferred_A = InferredSomething_A<"Parvesh">;

type InferredSomething_B<T> = T extends { a: infer A; b: infer B }
  ? A & B
  : any;

type Inferred_B = InferredSomething_B<{
  a: { somePropA: "Hello Prop A" };
  b: { somePropB: "Hello Prop B" };
}>;

/**
 * Upon compilation answer would be
 *
 * type Inferred_B = {
 *   somePropA: "Hello Prop A";
 *   } & {
 *   somePropB: "Hello Prop B";
 *   }
 */

type MyFunctionReturnValue = ReturnType<() => true>;
/**
 * Upon compilation answer would be
 *
 * type MyFunctionReturnValue = true
 */
