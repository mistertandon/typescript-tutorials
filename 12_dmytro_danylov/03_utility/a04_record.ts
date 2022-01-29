namespace RecordNS {
  /**
   * Record<K, T>
   * ------------
   * A Record<K, T> is an object type whose property keys are K
   * and whose property values are T.
   *
   * That is, keyof Record<K, T> is equivalent to K,
   * and Record<K, T>[K] is (basically) equivalent to T.
   */
  interface Starship {
    name: string;
    enableHyperjump: boolean;
  }

  const starshipObj: Record<string, Starship> = {
    exploreA: {
      name: "Start Trek",
      enableHyperjump: true,
    },
    exploreB: {
      name: "Start War",
      enableHyperjump: false,
    },
  };
}
