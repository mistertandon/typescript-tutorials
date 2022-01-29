namespace NonNullableNS {
  type TypeA = string | string[] | null | undefined;

  /**
   * Upon compilation answer would be
   *
   * type TypeA = string | string[]
   */

  type TypeA_AfterNonNullable = NonNullable<TypeA>;
  const variableA: TypeA_AfterNonNullable = undefined;
}
