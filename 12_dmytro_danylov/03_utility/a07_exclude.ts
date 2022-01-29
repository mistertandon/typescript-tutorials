namespace ExcludeNS {
  /**
   * Extract<Type, Union>
   * Constructs a type by extracting from Type all union members
   * that are assignable to Union.
   */

  type TypeA = string | string[] | undefined;

  /**
   * Upon compilation answer would be
   *
   * type TypeA_AfterExclude = string | string[]
   */
  type TypeA_AfterExclude = Exclude<TypeA, undefined>;
}
