/**
 * CMD to run this file
 *
 *  ./../node_modules/.bin/ts-node a01_conditional.ts
 */
type SomeType = string;

type MyConditionType = SomeType extends string ? string : null;

function someFunctionA<T>(someArg: T) {
  type CustomType = T extends "TYPE A"
    ? "TYPE A"
    : T extends "TYPE B"
    ? "TYPE B"
    : T extends "TYPE C"
    ? "TYPE C"
    : "TYPE D";

  const someOtherFunctionA = (
    someOtherArg: T extends boolean ? "TYPE A" : "TYPE B"
  ) => {
    const localVar: "TYPE A" | "TYPE B" = someOtherArg;
  };

  return someOtherFunctionA;
}

const result_A = someFunctionA(true);
/**
 * Upon compilation answer would be
 *
 * const result_A: (someOtherArg: "TYPE A") => void
 */

//=================== New Example ===================

type StringOrNot<T> = T extends string ? string : never;

type AUnion = string | boolean | never;
/**
 * Upon compilation answer would be
 * type AUnion = string | boolean
 */

//=================== New Example ===================
/*
 * Upon compilation answer would be
 * type ResultType_A = "c"
 *
 * How TypeScript would inference result
 * "a" extends "a" | "b" ? never: "a" => never
 * "b" extends "a" | "b" ? never: "b" => never
 * "c" extends "a" | "b" ? never: "c" => "c"
 *
 * Therefore, answer would be
 * type ResultType_A = "c"
 */
type ResultType_A = Exclude<"a" | "b" | "c", "a" | "b">;

//=================== New Example ===================

//=================== New Example ===================

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

//=================== New Example ===================

type MyFunctionReturnValue = ReturnType<() => true>;
/**
 * Upon compilation answer would be
 *
 * type MyFunctionReturnValue = true
 */

//=================== New Example ===================

/**
 * Upon compilation answer would be
 *
 * type MyResult_A = string | number
 */
type MyType_A<T> = T extends string | number ? T : never;
type MyResult_A = MyType_A<string | number | boolean>;

//=================== New Example ===================
/**
 * Upon compilation answer would be
 *
 * type MyResult_B = string | number
 */
type MyType_B<T> = (() => T) extends () => string | number ? T : never;
type MyResult_B = MyType_B<string | number | boolean>;

//=================== New Example ===================
/**
 * Upon compilation answer would be
 * type Inferred_A = "Parvesh"
 */
type InferredSomething_A<T> = T extends infer U ? U : any;
type Inferred_A = InferredSomething_A<"Parvesh">;

/**
 * Upon compilation answer would be
 *
 * type Inferred_C = {
 *     somePropA: number;
 * } & {
 *     somePropB: string;
 * }
 */
type InferredSomething_C<T> = T extends { a: infer A; b: infer B }
  ? A & B
  : any;
type Inferred_C = InferredSomething_C<{
  a: { somePropA: number };
  b: { somePropB: string };
}>;

//=================== New Example ===================
/**
 * Upon compilation answer would be
 * type userType = {
 *   name: string;
 *   age: number;
 *   city: string;
 * }
 */
function createUser(name: string, age: number, city: string) {
  return {
    name: "User A",
    age: 25,
    city: "Delhi",
  };
}

type userType = ReturnType<typeof createUser>;
