const a = [1, 2, 3, 4, 5] as const;

const b = [11, 12, 13, 14, 15] as const;

type IndexOf<T extends [], S extends number[]> = T["length"] extends S["length"]
  ? S[number]
  : IndexOf<T, [S["length"], ...S]>;

a.map((_, i: IndexOf<typeof a, Array>) => {
  const c = b[i];
});
